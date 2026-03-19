// supabase/functions/paypal-webhook/index.ts
//
// PayPal webhook handler for subscription lifecycle events.
// Verifies webhook signature, then updates paypal_checkouts + user_entitlements.
//
// Required env vars (Supabase -> Edge Functions secrets):
// - SUPABASE_URL
// - SUPABASE_SERVICE_ROLE_KEY
// - PAYPAL_BASE                 (LIVE: https://api-m.paypal.com)
// - PAYPAL_CLIENT_ID
// - PAYPAL_SECRET
// - PAYPAL_WEBHOOK_ID
//
// Notes:
// - We use PayPal's /v1/notifications/verify-webhook-signature endpoint,
//   same pattern as your prep-test-g1 app.
// - Because this app is "pay then signup", the webhook only updates paypal_checkouts.
// - Entitlements are applied to a user_id when they sign in (we'll add a small linking step).

import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

function json(
  body: unknown,
  init?: ResponseInit & { headers?: Record<string, string> }
) {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    ...(init?.headers ?? {}),
  };
  return new Response(JSON.stringify(body), { ...init, headers });
}

async function getPayPalAccessToken(paypalBase: string) {
  const clientId = Deno.env.get("PAYPAL_CLIENT_ID");
  const secret = Deno.env.get("PAYPAL_SECRET");
  if (!clientId || !secret) throw new Error("Missing PAYPAL_CLIENT_ID or PAYPAL_SECRET");

  const auth = btoa(`${clientId}:${secret}`);

  const tokenRes = await fetch(`${paypalBase}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const tokenData = await tokenRes.json();
  if (!tokenRes.ok) {
    throw new Error(`Failed to get PayPal access token: ${JSON.stringify(tokenData)}`);
  }
  return tokenData.access_token as string;
}

async function verifyPayPalWebhook({
  paypalBase,
  headers,
  rawBody,
}: {
  paypalBase: string;
  headers: Headers;
  rawBody: string;
}) {
  const webhookId = Deno.env.get("PAYPAL_WEBHOOK_ID");
  if (!webhookId) throw new Error("Missing PAYPAL_WEBHOOK_ID");

  const transmissionId = headers.get("paypal-transmission-id") ?? "";
  const transmissionTime = headers.get("paypal-transmission-time") ?? "";
  const certUrl = headers.get("paypal-cert-url") ?? "";
  const authAlgo = headers.get("paypal-auth-algo") ?? "";
  const transmissionSig = headers.get("paypal-transmission-sig") ?? "";

  if (
    !transmissionId ||
    !transmissionTime ||
    !certUrl ||
    !authAlgo ||
    !transmissionSig
  ) {
    return { verified: false, reason: "Missing PayPal verification headers" };
  }

  const accessToken = await getPayPalAccessToken(paypalBase);

  const verifyRes = await fetch(
    `${paypalBase}/v1/notifications/verify-webhook-signature`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
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

  const verifyData = await verifyRes.json();
  return { verified: verifyData?.verification_status === "SUCCESS", verifyData };
}

function mapEventToStatus(eventType: string) {
  const activeTypes = new Set([
    "BILLING.SUBSCRIPTION.ACTIVATED",
    "BILLING.SUBSCRIPTION.RE-ACTIVATED",
  ]);

  const inactiveTypes = new Set([
    "BILLING.SUBSCRIPTION.CANCELLED",
    "BILLING.SUBSCRIPTION.SUSPENDED",
    "BILLING.SUBSCRIPTION.EXPIRED",
  ]);

  if (activeTypes.has(eventType)) return "ACTIVE";
  if (inactiveTypes.has(eventType)) return "INACTIVE";
  return "IGNORED";
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return json({ ok: true }, { status: 200 });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, { status: 405 });

  try {
    const rawBody = await req.text();

    const paypalBase =
      Deno.env.get("PAYPAL_BASE")?.trim() || "https://api-m.paypal.com";

    const verification = await verifyPayPalWebhook({
      paypalBase,
      headers: req.headers,
      rawBody,
    });

    if (!verification.verified) {
      console.warn("PayPal webhook not verified", verification);
      return json({ error: "Invalid webhook signature" }, { status: 401 });
    }

    const event = JSON.parse(rawBody);
    const eventType = String(event?.event_type ?? "");
    const resource = event?.resource ?? {};

    const checkoutId = resource?.custom_id; // we set this to paypal_checkouts.id
    const subscriptionId = resource?.id ?? null;

    if (!eventType) return json({ error: "Missing event_type" }, { status: 400 });
    if (!checkoutId) return json({ error: "Missing custom_id (checkout id)" }, { status: 400 });

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !serviceRoleKey) {
      return json({ error: "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY" }, { status: 500 });
    }

    const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);

    const mapped = mapEventToStatus(eventType);

    // Always store raw webhook for debugging
    const { error: updErr } = await supabaseAdmin
      .from("paypal_checkouts")
      .update({
        raw_last_webhook: event,
        paypal_subscription_id: subscriptionId,
        status:
          mapped === "ACTIVE"
            ? "ACTIVE"
            : mapped === "INACTIVE"
              ? eventType
              : "IGNORED",
      })
      .eq("id", checkoutId);

    if (updErr) {
      console.error("paypal_checkouts update error", updErr);
      return json({ error: "DB update failed" }, { status: 500 });
    }

    return json({ ok: true });
  } catch (e) {
    console.error("paypal-webhook error", e);
    return json({ error: e?.message ?? "Unknown error" }, { status: 500 });
  }
});
