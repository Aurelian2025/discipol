-- Migration: PayPal subscription tables
-- Run this in the Supabase SQL editor (Dashboard > SQL Editor > New query)

-- ---------------------------------------------------------------
-- paypal_checkouts
-- Tracks each checkout session created before payment completes.
-- The edge function inserts a row; the webhook links it to a user.
-- ---------------------------------------------------------------
create table if not exists public.paypal_checkouts (
  id                     uuid primary key default gen_random_uuid(),
  created_at             timestamptz not null default now(),
  status                 text not null default 'created',
  -- 'created' | 'approved' | 'active' | 'canceled'
  user_email             text,
  -- email supplied before checkout; used to link to auth.users later
  paypal_subscription_id text,
  paypal_plan_id         text not null,
  metadata               jsonb
);

-- RLS: only service-role (edge functions) can write;
-- authenticated users can read rows where their email matches.
alter table public.paypal_checkouts enable row level security;

create policy "Service role full access on paypal_checkouts"
  on public.paypal_checkouts
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

-- ---------------------------------------------------------------
-- user_entitlements
-- One row per user. Updated by the webhook when PayPal fires events.
-- ---------------------------------------------------------------
create table if not exists public.user_entitlements (
  user_id                uuid primary key references auth.users (id) on delete cascade,
  is_pro                 boolean not null default false,
  source                 text,
  -- 'paypal' | 'admin' (admin remains local override; 'admin' source kept for audit)
  paypal_subscription_id text,
  current_period_end     timestamptz,
  updated_at             timestamptz not null default now()
);

-- RLS: users can read their own row; only service-role can write.
alter table public.user_entitlements enable row level security;

create policy "Users can read own entitlement"
  on public.user_entitlements
  for select
  using (auth.uid() = user_id);

create policy "Service role can manage entitlements"
  on public.user_entitlements
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

-- Keep updated_at fresh automatically
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger trg_user_entitlements_updated_at
  before update on public.user_entitlements
  for each row execute procedure public.set_updated_at();
