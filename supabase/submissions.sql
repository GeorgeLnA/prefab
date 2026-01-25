-- Submissions table (Contact, Design Request, Quote, Floor Plan)
-- Run in Supabase SQL Editor. RLS disabled; public insert allowed.

create table if not exists public.submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default (now() at time zone 'utc'),

  form_type text not null check (form_type in ('contact', 'design_request', 'quote', 'floor_plan')),

  -- Common
  name text not null,
  email text not null,
  phone text,
  message text,

  -- Contact form
  project_type text,
  budget text,

  -- Quote / Floor plan (request modal)
  source_slug text,
  context text,

  -- Design form (full payload)
  payload jsonb
);

create index if not exists idx_submissions_created_at on public.submissions (created_at desc);
create index if not exists idx_submissions_form_type on public.submissions (form_type);

-- RLS disabled: public insert allowed; admin CRUD via password-protected panel.
alter table public.submissions disable row level security;
