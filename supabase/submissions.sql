-- Submissions table: contact, design_request, quote, floor_plan
-- Run in Supabase SQL Editor. Public insert allowed; admin CRUD via app.

create table if not exists public.submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(), -- stored in UTC

  form_type text not null check (form_type in ('contact', 'design_request', 'quote', 'floor_plan')),

  name text not null,
  email text not null,
  phone text,
  message text,

  project_type text,
  budget text,

  source_slug text,
  context text,

  payload jsonb
);

create index if not exists idx_submissions_created_at on public.submissions (created_at desc);
create index if not exists idx_submissions_form_type on public.submissions (form_type);

alter table public.submissions disable row level security;
