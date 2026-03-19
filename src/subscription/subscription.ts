// src/subscription/subscription.ts
// Pro-status helpers backed by Supabase user_entitlements.
// Admin unlock remains a separate, local AsyncStorage override (see today.tsx / admin.tsx).

import { supabase } from "../supabase/client";

// ---------------------------------------------------------------------------
// getIsPro
// Returns true when the signed-in user has is_pro = true in user_entitlements.
// Returns false when not signed in (Admin override is handled separately by the
// calling screen via AsyncStorage key "discipol.admin.unlocked").
// ---------------------------------------------------------------------------
export async function getIsPro(): Promise<boolean> {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return false;

    const { data, error } = await supabase
      .from("user_entitlements")
      .select("is_pro")
      .eq("user_id", user.id)
      .maybeSingle();

    if (error) {
      console.warn("getIsPro error:", error.message);
      return false;
    }

    return data?.is_pro === true;
  } catch (e) {
    console.warn("getIsPro unexpected error:", e);
    return false;
  }
}
