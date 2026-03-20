# Discipol

Self-discipline & self-improvement app.

## Run locally

1) Install dependencies
npm install

2) Start the app
npx expo start

## Deploy to Vercel

The `vercel.json` at the repo root handles everything automatically:
- Sets `framework: null` so Vercel does not try to detect Next.js
- Sets `buildCommand` to `npx expo export -p web` and `outputDirectory` to `dist`
- Rewrites all paths to `index.html` so Expo Router deep links (e.g. `/subscribe`) work without 404 errors

**No manual build-settings changes are needed in the Vercel dashboard.**

### Add environment variables

The app requires two Supabase environment variables to be set in Vercel:

1. Open your project on [vercel.com](https://vercel.com)
2. Click **Settings** (top nav)
3. Click **Environment Variables** (left sidebar)
4. Add the following variables for **Production** (and **Preview** if needed):

| Name | Where to find the value |
|---|---|
| `EXPO_PUBLIC_SUPABASE_URL` | Supabase Dashboard → Project Settings → API → Project URL |
| `EXPO_PUBLIC_SUPABASE_ANON_KEY` | Supabase Dashboard → Project Settings → API → anon public |

5. Click **Save** after each variable
6. Go to **Deployments** and click **Redeploy** on the latest deployment

After redeployment, visiting `/subscribe` will redirect logged-in users to PayPal checkout.

#### All supported environment variables

| Variable | Value | Purpose |
|---|---|---|
| `EXPO_PUBLIC_SUPABASE_URL` | `https://<project>.supabase.co` | **Required.** Supabase project URL. Get it from Supabase → Project Settings → API → Project URL. |
| `EXPO_PUBLIC_SUPABASE_ANON_KEY` | *(your anon/public key)* | **Required.** Supabase anonymous key (safe for client apps). Get it from Supabase → Project Settings → API → anon public. |
| `EXPO_PUBLIC_PAYMENTS_MODE` | `test` | Optional. Bypass PayPal; clicking Subscribe unlocks Pro immediately. Omit (or set to any other value) to use PayPal via Supabase Edge Functions. |

> **Note:** PayPal secrets (`PAYPAL_CLIENT_ID`, `PAYPAL_CLIENT_SECRET`, etc.) must be stored as **Supabase Edge Function secrets**, not as Vercel env vars. They are never exposed to the browser.
