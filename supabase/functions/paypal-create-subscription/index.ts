// supabase/functions/paypal-create-subscription/index.ts
//
// Creates a PayPal subscription and returns an approval URL.
// Flow: pay first -> then signup/signin -> webhook activates entitlement.
//
// Required env vars (set in Supabase -> Edge Functions secrets):
// - SUPABASE_URL
// - SUPABASE_SERVICE_ROLE_KEY
// - PAYPAL_CLIENT_ID
// - PAYPAL_SECRET
// - PAYPAL_PLAN_ID
// - PAYPAL_BASE               (for LIVE: https://api-m.paypal.com)
// Optional:
// - PAYPAL_BRAND_NAME         (default: "Discipol")
// - PAYPAL_RETURN_URL         (optional static return url; otherwise uses request origin)
// - PAYPAL_CANCEL_URL         (optional static cancel url; otherwise uses request origin)

import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

type CreateRequest = {
  email?: string;
};

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

function getOrigin(req: Request) {
  // Supabase Edge Functions run behind a proxy; origin header is usually present.
  const origin = req.headers.get("origin");
  if (origin) return origin;

  const referer = req.headers.get("referer");
  if (referer) {
    try {
      return new URL(referer).origin;
    } catch {}
  }

  // fallback (not ideal)
  return "https://example.com";
}

async function getPayPalAccessToken(paypalBase: string) {
  const clientId = Deno.env.get("PAYPAL_CLIENT_ID");
  const secret = Deno.env.get("PAYPAL_SECRET");
  if (!clientId || !secret) {
    throw new Error("Missing PAYPAL_CLIENT_ID or PAYPAL_SECRET");
  }

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
    throw new Error(
      `Failed to get PayPal access token: ${JSON.stringify(tokenData)}`
    );
  }

  return tokenData.access_token as string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return json({ ok: true }, { status: 200 });
  }

  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !serviceRoleKey) {
      return json(
        { error: "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY" },
        { status: 500 }
      );
    }

    const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);

    const paypalBase =
      Deno.env.get("PAYPAL_BASE")?.trim() || "https://api-m.paypal.com";
    const planId = Deno.env.get("PAYPAL_PLAN_ID");
    if (!planId) {
      return json({ error: "Missing PAYPAL_PLAN_ID" }, { status: 500 });
    }

    const brandName = Deno.env.get("PAYPAL_BRAND_NAME") || "Discipol";

    const body = (await req.json().catch(() => ({}))) as CreateRequest;
    const email = (body.email ?? "").trim().toLowerCase();

    if (!email || !email.includes("@")) {
      return json({ error: "Valid email is required" }, { status: 400 });
    }

    // 1) Create checkout record first
    const { data: checkout, error: checkoutErr } = await supabaseAdmin
      .from("paypal_checkouts")
      .insert({
        email,
        status: "CREATED",
        paypal_plan_id: planId,
      })
      .select("id")
      .single();

    if (checkoutErr || !checkout?.id) {
      console.error("paypal_checkouts insert error", checkoutErr);
      return json({ error: "Could not create checkout record" }, { status: 500 });
    }

    // 2) Get PayPal token
    const accessToken = await getPayPalAccessToken(paypalBase);

    // 3) Create PayPal subscription
    // Return/cancel URLs:
    // - For mobile, PayPal will open in browser; user returns to app manually.
    // - You can later set these to your website or a deep-link gateway page.
    const origin = getOrigin(req);

    const returnUrl =
      Deno.env.get("PAYPAL_RETURN_URL") || `${origin}/subscribe`;
    const cancelUrl =
      Deno.env.get("PAYPAL_CANCEL_URL") || `${origin}/subscribe`;

    const subRes = await fetch(`${paypalBase}/v1/billing/subscriptions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        plan_id: planId,
        // custom_id is what webhook will later use to find our checkout record
        custom_id: checkout.id,
        application_context: {
          brand_name: brandName,
          return_url: returnUrl,
          cancel_url: cancelUrl,
          user_action: "SUBSCRIBE_NOW",
        },
      }),
    });

    const subData = await subRes.json();

    if (!subRes.ok) {
      console.error("PayPal create subscription error", subData);

      await supabaseAdmin
        .from("paypal_checkouts")
        .update({
          status: "ERROR",
          raw_create_response: subData,
        })
        .eq("id", checkout.id);

      return json(
        {
          error: "PayPal subscription could not be created",
          details: subData,
        },
        { status: 400 }
      );
    }

    const approvalUrl =
      subData?.links?.find((l: any) => l?.rel === "approve")?.href ||
      subData?.links?.find((l: any) => l?.rel === "payer-action")?.href;

    await supabaseAdmin
      .from("paypal_checkouts")
      .update({
        paypal_subscription_id: subData?.id ?? null,
        status: "APPROVED", // means created & has approval link; real ACTIVE comes from webhook
        raw_create_response: subData,
      })
      .eq("id", checkout.id);

    if (!approvalUrl) {
      return json(
        { error: "Missing PayPal approval link", checkout_id: checkout.id },
        { status: 400 }
      );
    }

    return json({
      checkout_id: checkout.id,
      approval_url: approvalUrl,
    });
  } catch (e) {
    console.error("paypal-create-subscription error", e);
    return json({ error: e?.message ?? "Unknown error" }, { status: 500 });
  }
});
