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

### Add the environment variable

To enable test mode (Subscribe button unlocks Pro immediately, no RevenueCat needed):

1. Open your project on [vercel.com](https://vercel.com)
2. Click **Settings** (top nav)
3. Click **Environment Variables** (left sidebar)
4. Add a new variable:
   - **Name:** `EXPO_PUBLIC_PAYMENTS_MODE`
   - **Value:** `test`
   - **Environments:** ✅ Production (check all environments you want to test on)
5. Click **Save**
6. Go to **Deployments** and click **Redeploy** on the latest deployment

After redeployment, visiting `/subscribe` will no longer 404, and clicking **Subscribe** will immediately unlock Pro.

#### All supported environment variables

| Variable | Value | Purpose |
|---|---|---|
| `EXPO_PUBLIC_PAYMENTS_MODE` | `test` | Bypass RevenueCat; clicking Subscribe unlocks Pro immediately. Omit (or set to any other value) to use RevenueCat. |
| `EXPO_PUBLIC_REVENUECAT_ANDROID_API_KEY` | *(your key)* | Required only when `EXPO_PUBLIC_PAYMENTS_MODE` is not `test` |
