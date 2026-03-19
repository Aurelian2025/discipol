-- supabase/migrations/20260319_000001_paypal_entitlements.sql
-- Discipol: PayPal subscriptions + entitlements (pay-first, then signup/signin)

-- 1) Checkout records created BEFORE the user signs up.
--    We store the email the payer will later use for Supabase Auth.
create table if not exists public.paypal_checkouts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  email text not null,
  status text not null default 'CREATED', -- CREATED | APPROVED | ACTIVE | CANCELLED | EXPIRED | SUSPENDED

  paypal_subscription_id text,
  paypal_plan_id text,

  raw_create_response jsonb,
  raw_last_webhook jsonb
);

create index if not exists paypal_checkouts_email_idx on public.paypal_checkouts (email);
create index if not exists paypal_checkouts_sub_id_idx on public.paypal_checkouts (paypal_subscription_id);

-- 2) Entitlements keyed by auth.users.id (source of truth for the app)
create table if not exists public.user_entitlements (
  user_id uuid primary key references auth.users(id) on delete cascade,
  updated_at timestamptz not null default now(),

  is_pro boolean not null default false,

  source text not null default 'paypal', -- 'paypal'
  paypal_subscription_id text,
  status text
);

-- Auto-update updated_at
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_user_entitlements_updated_at on public.user_entitlements;
create trigger trg_user_entitlements_updated_at
before update on public.user_entitlements
for each row execute function public.set_updated_at();

-- RLS
alter table public.paypal_checkouts enable row level security;
alter table public.user_entitlements enable row level security;

-- paypal_checkouts:
-- Only service role should access this table (edge functions).
drop policy if exists "service role only (paypal_checkouts)" on public.paypal_checkouts;
create policy "service role only (paypal_checkouts)"
on public.paypal_checkouts
as restrictive
for all
to public
using (false)
with check (false);

-- user_entitlements:
-- Users can read their own entitlement row.
drop policy if exists "read own entitlements" on public.user_entitlements;
create policy "read own entitlements"
on public.user_entitlements
for select
to authenticated
using (auth.uid() = user_id);

-- No client-side inserts/updates/deletes.
drop policy if exists "no client writes (user_entitlements)" on public.user_entitlements;
create policy "no client writes (user_entitlements)"
as restrictive
on public.user_entitlements
for all
to authenticated
using (false)
with check (false);
