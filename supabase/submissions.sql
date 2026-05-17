-- Заявки з сайту Prefab Homes (Україна, prefabhomes.com.ua).
-- Типи form_type: contact, design_request, quote, floor_plan.
-- Виконайте в SQL Editor Supabase. Публічні INSERT; адмін — через застосунок.
-- created_at зберігається в UTC; у UI для України використовуйте Europe/Kyiv.

create table if not exists public.submissions (
  id uuid not null default gen_random_uuid(),
  created_at timestamp with time zone not null default now(),
  form_type text not null,
  name text not null,
  email text not null,
  phone text null,
  message text null,
  project_type text null,
  budget text null,
  source_slug text null,
  context text null,
  payload jsonb null,
  constraint submissions_pkey primary key (id),
  constraint submissions_form_type_check check (
    form_type = any (
      array[
        'contact'::text,
        'design_request'::text,
        'quote'::text,
        'floor_plan'::text
      ]
    )
  )
) tablespace pg_default;

comment on table public.submissions is 'Заявки з публічного сайту (контакт, дизайн, КП, план поверху). Локалізація в застосунку; дані без прив’язки до мови.';

create index if not exists idx_submissions_created_at on public.submissions using btree (created_at desc) tablespace pg_default;

create index if not exists idx_submissions_form_type on public.submissions using btree (form_type) tablespace pg_default;

alter table public.submissions disable row level security;
