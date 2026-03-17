# Discipol

Self-discipline & self-improvement app.

## Run locally

1) Install dependencies
npm install

2) Start the app
npx expo start

## Deploy to Vercel

### Build settings (Vercel project → Settings → General)

| Setting | Value |
|---|---|
| Build Command | `npx expo export -p web` |
| Output Directory | `dist` |
| Install Command | `npm install` |

### Environment variables (Vercel project → Settings → Environment Variables)

| Variable | Value | Purpose |
|---|---|---|
| `EXPO_PUBLIC_PAYMENTS_MODE` | `test` | Bypass RevenueCat; clicking Subscribe unlocks Pro immediately. Omit (or set to any other value) to use RevenueCat. |
| `EXPO_PUBLIC_REVENUECAT_ANDROID_API_KEY` | *(your key)* | Required only when `EXPO_PUBLIC_PAYMENTS_MODE` is not `test` |

The `vercel.json` at the repo root rewrites all paths to `index.html` so that
Expo Router deep links (e.g. `/subscribe`) work without 404 errors.
