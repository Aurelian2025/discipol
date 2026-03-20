// src/subscription/subscription.ts
//
// ✅ PayPal + Supabase entitlements version
// - Pro status is derived from Supabase (user_entitlements) when signed in
// - Admin unlock stays separate (handled elsewhere via AsyncStorage key: discipol.admin.unlocked)
// - Optional dev bypass: EXPO_PUBLIC_PAYMENTS_MODE=test forces Pro ON for quick testing

import { supabase } from "../supabase/client";

const PAYMENTS_MODE = process.env.EXPO_PUBLIC_PAYMENTS_MODE ?? "paypal";

/**
 * Returns whether the current signed-in user is Pro.
 *
 * Source of truth:
 * - Supabase table: public.user_entitlements (row keyed by user_id)
 *
 * Dev override:
 * - If EXPO_PUBLIC_PAYMENTS_MODE === "test", return true
 */
export async function getIsPro(): Promise<boolean> {
  if (PAYMENTS_MODE === "test") return true;

  try {
    const { data: userData, error: userErr } = await supabase.auth.getUser();
    if (userErr) {
      console.warn("getIsPro getUser error", userErr);
      return false;
    }

    const user = userData?.user;
    if (!user?.id) return false;

    const { data, error } = await supabase
      .from("user_entitlements")
      .select("is_pro")
      .eq("user_id", user.id)
      .maybeSingle();

    if (error) {
      // If table isn't deployed yet or RLS blocks, we don't want to crash the app.
      console.warn("getIsPro user_entitlements query error", error);
      return false;
    }

    return Boolean(data?.is_pro);
  } catch (e) {
    console.warn("getIsPro unexpected error", e);
    return false;
  }
}

/**
 * Kept for backwards compatibility with existing imports.
 * With PayPal, "restore" is just "re-check Supabase status".
 */
export async function restoreProFromGooglePlay(): Promise<boolean> {
  return getIsPro();
}

/**
 * Kept for backwards compatibility with existing imports.
 * With PayPal, purchases happen via app/subscribe.tsx (Edge Function + PayPal approval URL),
 * so this function intentionally throws to avoid accidental RevenueCat usage.
 */
export async function purchaseProMonthly(): Promise<void> {
  throw new Error(
    "purchaseProMonthly is not supported (PayPal flow). Use /subscribe screen to purchase."
  );
}

/**
 * Kept only to avoid breaking any legacy call sites (if any exist).
 * If you still call setIsPro somewhere, we prefer NOT to persist local Pro state anymore,
 * because Supabase is the source of truth.
 *
 * We keep a no-op implementation instead of deleting it, so existing code compiles.
 */
export async function setIsPro(_value: boolean): Promise<void> {
  // no-op by design
}
