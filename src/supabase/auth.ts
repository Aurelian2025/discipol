import { supabase } from "./client";

/**
 * After the user signs in (or after we can fetch the current user),
 * we try to "claim" a completed PayPal checkout for their email and
 * write/update public.user_entitlements for that user_id.
 *
 * This supports the flow: pay first -> then signup/signin -> Pro activates.
 */
async function claimPaypalEntitlementIfPossible() {
  try {
    const { data: userData, error: userErr } = await supabase.auth.getUser();
    if (userErr) {
      console.warn("claim entitlement getUser error", userErr);
      return;
    }

    const user = userData?.user;
    const email = (user?.email ?? "").trim().toLowerCase();
    if (!user?.id || !email) return;

    // Calls Supabase Edge Function (must exist):
    // - verifies user JWT via Authorization header (supabase.functions.invoke handles this)
    // - checks for ACTIVE paypal_checkouts matching user's email
    // - upserts user_entitlements for auth.uid()
    const { data, error } = await supabase.functions.invoke("paypal-claim-entitlement", {
      body: {},
    });

    if (error) {
      // Don't block login; just log.
      console.warn("paypal-claim-entitlement invoke error", error);
      return;
    }

    // Optional debug
    if (data?.claimed) {
      console.log("PayPal entitlement claimed for user", user.id);
    }
  } catch (e) {
    console.warn("claimPaypalEntitlementIfPossible unexpected error", e);
  }
}

export async function signInWithPassword(email: string, password: string) {
  const result = await supabase.auth.signInWithPassword({ email, password });

  // Attempt to activate Pro after login (non-blocking)
  try {
    await claimPaypalEntitlementIfPossible();
  } catch {}

  return result;
}

export async function signUp(email: string, password: string) {
  const result = await supabase.auth.signUp({ email, password });

  // If the user is immediately signed in after signUp (depends on email confirmation settings),
  // attempt to claim entitlement.
  try {
    await claimPaypalEntitlementIfPossible();
  } catch {}

  return result;
}

export async function signOut() {
  return supabase.auth.signOut();
}

export async function getCurrentUser() {
  const result = await supabase.auth.getUser();

  // If a session exists, try to claim entitlement (non-blocking)
  try {
    await claimPaypalEntitlementIfPossible();
  } catch {}

  return result;
}
