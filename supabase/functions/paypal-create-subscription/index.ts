// supabase/functions/paypal-create-subscription/index.ts
// Creates a PayPal subscription approval link and stores a checkout record.
//
// Required environment variables (set in Supabase Dashboard > Settings > Edge Functions):
//   PAYPAL_CLIENT_ID        — PayPal REST API client id
//   PAYPAL_CLIENT_SECRET    — PayPal REST API client secret
//   PAYPAL_PLAN_ID          — PayPal recurring billing plan id
//   PAYPAL_API_BASE         — https://api-m.sandbox.paypal.com (sandbox)
//                             or https://api-m.paypal.com (production)
//   SUPABASE_URL            — injected automatically by Supabase
//   SUPABASE_SERVICE_ROLE_KEY — injected automatically by Supabase

import { corsHeaders, handleCors } from "../_shared/cors.ts";
import { getServiceRoleClient } from "../_shared/supabase-client.ts";

// ---------------------------------------------------------------------------
// PayPal helpers
// ---------------------------------------------------------------------------

async function getPayPalAccessToken(): Promise<string> {
  const clientId = Deno.env.get("PAYPAL_CLIENT_ID");
  const clientSecret = Deno.env.get("PAYPAL_CLIENT_SECRET");
  const apiBase = Deno.env.get("PAYPAL_API_BASE") ?? "https://api-m.sandbox.paypal.com";

  if (!clientId || !clientSecret) {
    throw new Error("Missing PAYPAL_CLIENT_ID or PAYPAL_CLIENT_SECRET");
  }

  const credentials = btoa(`${clientId}:${clientSecret}`);

  const res = await fetch(`${apiBase}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`PayPal token error ${res.status}: ${text}`);
  }

  const json = await res.json();
  return json.access_token as string;
}

async function createPayPalSubscription(
  accessToken: string,
  planId: string,
  returnUrl: string,
  cancelUrl: string,
  subscriberEmail?: string
): Promise<{ approvalUrl: string; subscriptionId: string }> {
  const apiBase = Deno.env.get("PAYPAL_API_BASE") ?? "https://api-m.sandbox.paypal.com";

  const body: Record<string, unknown> = {
    plan_id: planId,
    application_context: {
      brand_name: "Discipol",
      locale: "en-US",
      shipping_preference: "NO_SHIPPING",
      user_action: "SUBSCRIBE_NOW",
      return_url: returnUrl,
      cancel_url: cancelUrl,
    },
  };

  if (subscriberEmail) {
    body.subscriber = { email_address: subscriberEmail };
  }

  const res = await fetch(`${apiBase}/v1/billing/subscriptions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`PayPal create subscription error ${res.status}: ${text}`);
  }

  const json = await res.json();
  const approvalLink = (json.links as Array<{ rel: string; href: string }>).find(
    (l) => l.rel === "approve"
  );

  if (!approvalLink) {
    throw new Error("PayPal did not return an approve link");
  }

  return {
    approvalUrl: approvalLink.href,
    subscriptionId: json.id as string,
  };
}

// ---------------------------------------------------------------------------
// Edge Function handler
// ---------------------------------------------------------------------------

Deno.serve(async (req: Request) => {
  const corsResponse = handleCors(req);
  if (corsResponse) return corsResponse;

  try {
    const planId = Deno.env.get("PAYPAL_PLAN_ID");
    if (!planId) {
      throw new Error("Missing PAYPAL_PLAN_ID environment variable");
    }

    // Parse request body
    let body: {
      return_url?: string;
      cancel_url?: string;
      email?: string;
    } = {};

    try {
      body = await req.json();
    } catch {
      // body is optional
    }

    const returnUrl = body.return_url ?? "discipol://paypal-return";
    const cancelUrl = body.cancel_url ?? "discipol://paypal-cancel";
    const email = body.email?.trim() || undefined;

    // Create PayPal subscription
    const accessToken = await getPayPalAccessToken();
    const { approvalUrl, subscriptionId } = await createPayPalSubscription(
      accessToken,
      planId,
      returnUrl,
      cancelUrl,
      email
    );

    // Store checkout record in DB
    const supabase = getServiceRoleClient();
    const { error: dbError } = await supabase.from("paypal_checkouts").insert({
      status: "created",
      user_email: email ?? null,
      paypal_subscription_id: subscriptionId,
      paypal_plan_id: planId,
      metadata: { return_url: returnUrl, cancel_url: cancelUrl },
    });

    if (dbError) {
      console.error("DB insert error:", dbError);
      // Non-fatal: still return approval URL so user can proceed
    }

    return new Response(
      JSON.stringify({ approval_url: approvalUrl, subscription_id: subscriptionId }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (err) {
    console.error("paypal-create-subscription error:", err);
    return new Response(
      JSON.stringify({ error: (err as Error).message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
