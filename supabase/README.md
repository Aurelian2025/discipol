# Supabase + PayPal Integration

This document explains how to set up the PayPal subscription flow backed by Supabase Edge Functions.

---

## Architecture overview

```
Mobile app (Subscribe screen)
  → POST /functions/v1/paypal-create-subscription
      ↳ Creates PayPal subscription via PayPal REST API
      ↳ Stores checkout record in `paypal_checkouts` table
      ↳ Returns approval_url
  → Linking.openURL(approval_url)  — opens PayPal in browser

User pays on PayPal → redirected to discipol://paypal-return
  → User creates account / signs in (same email as PayPal)

PayPal → POST /functions/v1/paypal-webhook
      ↳ Verifies signature
      ↳ On BILLING.SUBSCRIPTION.ACTIVATED → upserts `user_entitlements` (is_pro = true)
      ↳ On BILLING.SUBSCRIPTION.CANCELLED → sets is_pro = false

App reads Pro status via getIsPro() → queries `user_entitlements` for signed-in user
```

---

## Required environment variables

### App (Expo) — set in `.env` or EAS Secrets

| Variable | Description |
|---|---|
| `EXPO_PUBLIC_SUPABASE_URL` | Your Supabase project URL, e.g. `https://xyz.supabase.co` |
| `EXPO_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon/public key |

### Supabase Edge Functions — set in Supabase Dashboard > Settings > Edge Functions

| Variable | Description |
|---|---|
| `PAYPAL_CLIENT_ID` | PayPal REST API client ID (from developer.paypal.com) |
| `PAYPAL_CLIENT_SECRET` | PayPal REST API client secret |
| `PAYPAL_PLAN_ID` | PayPal recurring billing plan ID (created in PayPal dashboard) |
| `PAYPAL_WEBHOOK_ID` | Webhook ID from PayPal developer dashboard |
| `PAYPAL_API_BASE` | `https://api-m.sandbox.paypal.com` (sandbox) or `https://api-m.paypal.com` (production) |
| `PAYPAL_SKIP_SIG_VERIFY` | Set to `true` during local development to skip webhook signature checks |
| `SUPABASE_URL` | Injected automatically by Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | Injected automatically by Supabase |

---

## Database setup

Run the migration SQL in your Supabase project:

1. Open Supabase Dashboard → SQL Editor → New query.
2. Paste the contents of `supabase/migrations/001_paypal_subscriptions.sql`.
3. Click **Run**.

This creates:
- `public.paypal_checkouts` — tracks each checkout session
- `public.user_entitlements` — tracks Pro status per user (updated by webhook)

---

## Deploying Edge Functions

Install the [Supabase CLI](https://supabase.com/docs/guides/cli):

```bash
npm install -g supabase
supabase login
```

Link your project:

```bash
supabase link --project-ref <your-project-ref>
```

Deploy all functions:

```bash
supabase functions deploy paypal-create-subscription
supabase functions deploy paypal-webhook
```

Set environment secrets:

```bash
supabase secrets set PAYPAL_CLIENT_ID=your_client_id
supabase secrets set PAYPAL_CLIENT_SECRET=your_client_secret
supabase secrets set PAYPAL_PLAN_ID=your_plan_id
supabase secrets set PAYPAL_WEBHOOK_ID=your_webhook_id
supabase secrets set PAYPAL_API_BASE=https://api-m.sandbox.paypal.com
```

---

## PayPal setup

1. Go to [developer.paypal.com](https://developer.paypal.com) → My Apps & Credentials.
2. Create or select an app.
3. Note the **Client ID** and **Client Secret**.
4. Under **Subscriptions**, create a **Product** and a **Plan** (monthly billing).  
   Note the **Plan ID** (starts with `P-`).
5. Under **Webhooks**, add a new webhook:
   - URL: `https://<your-project-ref>.supabase.co/functions/v1/paypal-webhook`
   - Events to listen for:
     - `BILLING.SUBSCRIPTION.ACTIVATED`
     - `BILLING.SUBSCRIPTION.RENEWED`
     - `BILLING.SUBSCRIPTION.CANCELLED`
     - `BILLING.SUBSCRIPTION.EXPIRED`
     - `BILLING.SUBSCRIPTION.SUSPENDED`
   - After saving, note the **Webhook ID**.

---

## Local development

You can use the [Supabase local dev](https://supabase.com/docs/guides/functions/local-development) setup:

```bash
supabase start
supabase functions serve paypal-create-subscription --env-file .env.local
```

Create `.env.local` (not committed):

```
PAYPAL_CLIENT_ID=...
PAYPAL_CLIENT_SECRET=...
PAYPAL_PLAN_ID=...
PAYPAL_API_BASE=https://api-m.sandbox.paypal.com
PAYPAL_SKIP_SIG_VERIFY=true
SUPABASE_URL=http://127.0.0.1:54321
SUPABASE_SERVICE_ROLE_KEY=<local service role key from supabase start>
```

---

## Admin unlock

The Admin unlock/lock mechanism is **completely independent** of PayPal subscriptions:

- Admin uses AsyncStorage key `discipol.admin.unlocked` (local to device).
- Access it from the **Today** screen → **Admin** button, or via `app/admin.tsx`.
- Password: configured in `app/admin.tsx` (see `ADMIN_PASSWORD` constant).
- `effectivePro = isPro || adminUnlocked` in Today and Plans screens ensures Admin always overrides.
