// supabase/functions/paypal-webhook/index.ts
// Receives PayPal webhook events and updates user entitlements in Supabase.
//
// Required environment variables (set in Supabase Dashboard > Settings > Edge Functions):
//   PAYPAL_CLIENT_ID           — PayPal REST API client id
//   PAYPAL_CLIENT_SECRET       — PayPal REST API client secret
//   PAYPAL_WEBHOOK_ID          — The Webhook ID from the PayPal developer dashboard
//   PAYPAL_API_BASE            — https://api-m.sandbox.paypal.com (sandbox)
//                                or https://api-m.paypal.com (production)
//   SUPABASE_URL               — injected automatically by Supabase
//   SUPABASE_SERVICE_ROLE_KEY  — injected automatically by Supabase

import { corsHeaders, handleCors } from "../_shared/cors.ts";
import { getServiceRoleClient } from "../_shared/supabase-client.ts";

// ---------------------------------------------------------------------------
// PayPal webhook signature verification
// ---------------------------------------------------------------------------

async function verifyWebhookSignature(
  req: Request,
  rawBody: string,
  transmissionId: string,
  transmissionTime: string,
  certUrl: string,
  authAlgo: string,
  transmissionSig: string
): Promise<boolean> {
  const clientId = Deno.env.get("PAYPAL_CLIENT_ID");
  const clientSecret = Deno.env.get("PAYPAL_CLIENT_SECRET");
  const webhookId = Deno.env.get("PAYPAL_WEBHOOK_ID");
  const apiBase = Deno.env.get("PAYPAL_API_BASE") ?? "https://api-m.sandbox.paypal.com";

  if (!clientId || !clientSecret || !webhookId) {
    throw new Error(
      "Missing PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, or PAYPAL_WEBHOOK_ID"
    );
  }

  // Get access token
  const credentials = btoa(`${clientId}:${clientSecret}`);
  const tokenRes = await fetch(`${apiBase}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!tokenRes.ok) {
    throw new Error(`PayPal token error: ${tokenRes.status}`);
  }

  const { access_token } = await tokenRes.json();

  // Call PayPal verify-webhook-signature endpoint
  const verifyRes = await fetch(
    `${apiBase}/v1/notifications/verify-webhook-signature`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        auth_algo: authAlgo,
        cert_url: certUrl,
        transmission_id: transmissionId,
        transmission_sig: transmissionSig,
        transmission_time: transmissionTime,
        webhook_id: webhookId,
        webhook_event: JSON.parse(rawBody),
      }),
    }
  );

  if (!verifyRes.ok) {
    throw new Error(`PayPal verify error: ${verifyRes.status}`);
  }

  const { verification_status } = await verifyRes.json();
  return verification_status === "SUCCESS";
}

// ---------------------------------------------------------------------------
// Entitlement helpers
// ---------------------------------------------------------------------------

async function activateEntitlement(
  subscriptionId: string,
  userEmail: string | null,
  periodEnd: string | null
) {
  const supabase = getServiceRoleClient();

  // Look up auth user by email (if we have one)
  if (userEmail) {
    const { data: users, error } = await supabase.auth.admin.listUsers();
    if (error) {
      console.error("listUsers error:", error);
      return;
    }

    const user = users.users.find(
      (u) => u.email?.toLowerCase() === userEmail.toLowerCase()
    );

    if (user) {
      const { error: upsertError } = await supabase
        .from("user_entitlements")
        .upsert(
          {
            user_id: user.id,
            is_pro: true,
            source: "paypal",
            paypal_subscription_id: subscriptionId,
            current_period_end: periodEnd ?? null,
          },
          { onConflict: "user_id" }
        );

      if (upsertError) {
        console.error("upsert entitlement error:", upsertError);
      }
    }
  }

  // Also update the checkout record status
  await supabase
    .from("paypal_checkouts")
    .update({ status: "active" })
    .eq("paypal_subscription_id", subscriptionId);
}

async function deactivateEntitlement(subscriptionId: string) {
  const supabase = getServiceRoleClient();

  // Find the user via the entitlements table
  const { data: entitlement, error } = await supabase
    .from("user_entitlements")
    .select("user_id")
    .eq("paypal_subscription_id", subscriptionId)
    .maybeSingle();

  if (error) {
    console.error("lookup entitlement error:", error);
    return;
  }

  if (entitlement) {
    await supabase
      .from("user_entitlements")
      .update({ is_pro: false })
      .eq("user_id", entitlement.user_id);
  }

  // Update checkout status
  await supabase
    .from("paypal_checkouts")
    .update({ status: "canceled" })
    .eq("paypal_subscription_id", subscriptionId);
}

// ---------------------------------------------------------------------------
// Edge Function handler
// ---------------------------------------------------------------------------

Deno.serve(async (req: Request) => {
  const corsResponse = handleCors(req);
  if (corsResponse) return corsResponse;

  const rawBody = await req.text();

  // Extract PayPal signature headers
  const transmissionId = req.headers.get("paypal-transmission-id") ?? "";
  const transmissionTime = req.headers.get("paypal-transmission-time") ?? "";
  const certUrl = req.headers.get("paypal-cert-url") ?? "";
  const authAlgo = req.headers.get("paypal-auth-algo") ?? "";
  const transmissionSig = req.headers.get("paypal-transmission-sig") ?? "";

  // Verify signature (skip in sandbox if PAYPAL_SKIP_SIG_VERIFY=true)
  const skipVerify = Deno.env.get("PAYPAL_SKIP_SIG_VERIFY") === "true";
  if (!skipVerify) {
    try {
      const valid = await verifyWebhookSignature(
        req,
        rawBody,
        transmissionId,
        transmissionTime,
        certUrl,
        authAlgo,
        transmissionSig
      );

      if (!valid) {
        console.warn("PayPal webhook signature verification failed");
        return new Response("Forbidden", { status: 403 });
      }
    } catch (err) {
      console.error("Signature verification error:", err);
      return new Response("Signature verification failed", { status: 403 });
    }
  }

  let event: {
    event_type: string;
    resource: {
      id: string;
      subscriber?: { email_address?: string };
      billing_info?: { next_billing_time?: string };
      plan_id?: string;
      status?: string;
    };
  };

  try {
    event = JSON.parse(rawBody);
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const { event_type, resource } = event;
  const subscriptionId = resource.id;
  const userEmail = resource.subscriber?.email_address ?? null;

  console.log(`PayPal webhook: ${event_type} for subscription ${subscriptionId}`);

  switch (event_type) {
    case "BILLING.SUBSCRIPTION.ACTIVATED":
    case "BILLING.SUBSCRIPTION.RENEWED": {
      const periodEnd =
        resource.billing_info?.next_billing_time ?? null;
      await activateEntitlement(subscriptionId, userEmail, periodEnd);
      break;
    }

    case "BILLING.SUBSCRIPTION.CANCELLED":
    case "BILLING.SUBSCRIPTION.EXPIRED":
    case "BILLING.SUBSCRIPTION.SUSPENDED": {
      await deactivateEntitlement(subscriptionId);
      break;
    }

    default:
      console.log(`Unhandled event type: ${event_type}`);
  }

  return new Response(JSON.stringify({ received: true }), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
    status: 200,
  });
});
