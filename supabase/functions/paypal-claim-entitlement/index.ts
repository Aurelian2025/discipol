// supabase/functions/paypal-claim-entitlement/index.ts
//
// Called by the *logged-in* app.
// It finds an ACTIVE PayPal checkout for the user's email (pay-first flow)
// and upserts public.user_entitlements for auth.uid().
//
// Required env vars (Supabase -> Edge Functions secrets):
// - SUPABASE_URL
// - SUPABASE_SERVICE_ROLE_KEY

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

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return json({ ok: true }, { status: 200 });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, { status: 405 });

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !serviceRoleKey) {
      return json(
        { error: "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY" },
        { status: 500 }
      );
    }

    // 1) User-authenticated client (to read auth context)
    const authHeader = req.headers.get("Authorization") ?? "";
    const supabaseUser = createClient(
      supabaseUrl,
      // anon key isn't needed here; we only use it to validate JWT via auth.getUser()
      // But createClient requires a key. We'll use service role but NOT for user-context.
      // We will still validate the user via auth.getUser(jwt).
      serviceRoleKey,
      {
        global: { headers: { Authorization: authHeader } },
      }
    );

    const { data: userData, error: userErr } = await supabaseUser.auth.getUser();
    if (userErr || !userData?.user?.id) {
      return json({ error: "Not authenticated" }, { status: 401 });
    }

    const userId = userData.user.id;
    const email = (userData.user.email ?? "").trim().toLowerCase();
    if (!email) {
      return json({ error: "User email missing" }, { status: 400 });
    }

    // 2) Admin client for DB writes (service role bypasses RLS)
    const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);

    // Find the most recent ACTIVE checkout for this email
    const { data: checkout, error: checkoutErr } = await supabaseAdmin
      .from("paypal_checkouts")
      .select("id,email,status,paypal_subscription_id")
      .eq("email", email)
      .in("status", ["ACTIVE", "BILLING.SUBSCRIPTION.ACTIVATED", "BILLING.SUBSCRIPTION.RE-ACTIVATED"])
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (checkoutErr) {
      console.error("paypal_checkouts lookup error", checkoutErr);
      return json({ error: "Checkout lookup failed" }, { status: 500 });
    }

    if (!checkout) {
      // Nothing to claim — not an error.
      return json({ ok: true, claimed: false });
    }

    // Upsert entitlement row
    const { error: upsertErr } = await supabaseAdmin
      .from("user_entitlements")
      .upsert(
        {
          user_id: userId,
          is_pro: true,
          source: "paypal",
          paypal_subscription_id: checkout.paypal_subscription_id ?? null,
          status: checkout.status ?? null,
        },
        { onConflict: "user_id" }
      );

    if (upsertErr) {
      console.error("user_entitlements upsert error", upsertErr);
      return json({ error: "Entitlement upsert failed" }, { status: 500 });
    }

    return json({ ok: true, claimed: true });
  } catch (e) {
    console.error("paypal-claim-entitlement error", e);
    return json({ error: e?.message ?? "Unknown error" }, { status: 500 });
  }
});
