
create table if not exists public.homework_tasks (
  id uuid primary key default gen_random_uuid(),
  child_id uuid not null references public.children(id) on delete cascade,
  user_id uuid not null,
  titulo text not null,
  materia text,
  due_date date not null default current_date,
  foto_url text,
  foto_texto text,
  enunciado text,
  ia_resumo jsonb,
  dicas_ia jsonb,
  dica_revelada smallint not null default 0,
  status text not null default 'pendente' check (status in ('pendente','em_andamento','concluida')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

grant select, insert, update, delete on public.homework_tasks to authenticated;
grant all on public.homework_tasks to service_role;

create index if not exists homework_tasks_child_due_idx
  on public.homework_tasks (child_id, due_date desc);
create index if not exists homework_tasks_user_idx
  on public.homework_tasks (user_id);

alter table public.homework_tasks enable row level security;

create policy "homework_tasks_owner_select" on public.homework_tasks
  for select using (auth.uid() = user_id);
create policy "homework_tasks_owner_insert" on public.homework_tasks
  for insert with check (auth.uid() = user_id);
create policy "homework_tasks_owner_update" on public.homework_tasks
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "homework_tasks_owner_delete" on public.homework_tasks
  for delete using (auth.uid() = user_id);

create trigger update_homework_tasks_updated_at
  before update on public.homework_tasks
  for each row execute function public.update_updated_at_column();

-- Storage policies (bucket criado via storage_create_bucket)
create policy "homework_photos_owner_select" on storage.objects
  for select using (
    bucket_id = 'homework-photos'
    and auth.uid()::text = (storage.foldername(name))[1]
  );
create policy "homework_photos_owner_insert" on storage.objects
  for insert with check (
    bucket_id = 'homework-photos'
    and auth.uid()::text = (storage.foldername(name))[1]
  );
create policy "homework_photos_owner_delete" on storage.objects
  for delete using (
    bucket_id = 'homework-photos'
    and auth.uid()::text = (storage.foldername(name))[1]
  );
