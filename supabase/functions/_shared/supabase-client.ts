// supabase/functions/_shared/supabase-client.ts
// Creates a Supabase client using the service-role key (server-side only).

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export function getServiceRoleClient() {
  const url = Deno.env.get("SUPABASE_URL");
  const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  if (!url || !key) {
    throw new Error(
      "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables"
    );
  }

  return createClient(url, key, {
    auth: { persistSession: false },
  });
}
