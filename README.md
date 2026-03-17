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

### Environment variables (Vercel project → Settings → Environment Variables)

| Variable | Value | Purpose |
|---|---|---|
| `EXPO_PUBLIC_PAYMENTS_MODE` | `test` | Bypass RevenueCat; clicking Subscribe unlocks Pro immediately. Omit (or set to any other value) to use RevenueCat. |
| `EXPO_PUBLIC_REVENUECAT_ANDROID_API_KEY` | *(your key)* | Required only when `EXPO_PUBLIC_PAYMENTS_MODE` is not `test` |
