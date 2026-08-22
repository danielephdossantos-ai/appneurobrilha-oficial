-- NeuroBrilha Premium — Mascotes e Gamificação por criança

create table if not exists public.child_mascot_profiles (
  child_id uuid primary key references public.children(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  starter_mascot text not null default 'pip' check (starter_mascot in ('pip','pipa')),
  active_mascot text not null default 'pip' check (active_mascot in ('pip','pipa')),
  stage text not null default 'ovo' check (stage in ('ovo','nascendo','bebe','crianca')),
  equipped_skin text not null default 'original',
  mascot_level integer not null default 1,
  mascot_xp integer not null default 0,
  affinity integer not null default 0 check (affinity between 0 and 100),
  born_at timestamptz,
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create table if not exists public.child_mascot_unlocks (
  id uuid primary key default gen_random_uuid(),
  child_id uuid not null references public.children(id) on delete cascade,
  item_type text not null check (item_type in ('skin','teacher')),
  item_key text not null,
  unlocked_at timestamptz not null default now(),
  unique(child_id,item_type,item_key)
);

create table if not exists public.child_mascot_assignments (
  child_id uuid not null references public.children(id) on delete cascade,
  assignment_type text not null check (assignment_type in ('subject','mentor')),
  assignment_key text not null,
  mascot_slug text not null,
  updated_at timestamptz not null default now(),
  primary key(child_id,assignment_type,assignment_key)
);

alter table public.child_mascot_profiles enable row level security;
alter table public.child_mascot_unlocks enable row level security;
alter table public.child_mascot_assignments enable row level security;

drop policy if exists child_mascot_profiles_owner on public.child_mascot_profiles;
create policy child_mascot_profiles_owner on public.child_mascot_profiles
for all using (exists(select 1 from public.children c where c.id=child_id and c.user_id=auth.uid()))
with check (exists(select 1 from public.children c where c.id=child_id and c.user_id=auth.uid()));

drop policy if exists child_mascot_unlocks_owner on public.child_mascot_unlocks;
create policy child_mascot_unlocks_owner on public.child_mascot_unlocks
for all using (exists(select 1 from public.children c where c.id=child_id and c.user_id=auth.uid()))
with check (exists(select 1 from public.children c where c.id=child_id and c.user_id=auth.uid()));

drop policy if exists child_mascot_assignments_owner on public.child_mascot_assignments;
create policy child_mascot_assignments_owner on public.child_mascot_assignments
for all using (exists(select 1 from public.children c where c.id=child_id and c.user_id=auth.uid()))
with check (exists(select 1 from public.children c where c.id=child_id and c.user_id=auth.uid()));

-- Compra atômica de professor/skin. Debita a criança e libera o item na mesma transação.
create or replace function public.purchase_child_mascot_item(
  p_child_id uuid,
  p_item_type text,
  p_item_key text,
  p_cost integer
) returns jsonb
language plpgsql security definer set search_path=public as $$
declare
  v_user uuid := auth.uid();
  v_coins integer;
begin
  if p_item_type not in ('skin','teacher') or p_cost < 0 then
    raise exception 'invalid_purchase';
  end if;
  if not exists(select 1 from public.children where id=p_child_id and user_id=v_user) then
    raise exception 'forbidden';
  end if;
  select coins into v_coins from public.children where id=p_child_id for update;
  if exists(select 1 from public.child_mascot_unlocks where child_id=p_child_id and item_type=p_item_type and item_key=p_item_key) then
    return jsonb_build_object('ok',true,'already_owned',true,'coins',coalesce(v_coins,0));
  end if;
  if coalesce(v_coins,0) < p_cost then
    return jsonb_build_object('ok',false,'reason','insufficient_coins','coins',coalesce(v_coins,0));
  end if;
  insert into public.child_mascot_unlocks(child_id,item_type,item_key)
  values(p_child_id,p_item_type,p_item_key);
  update public.children set coins=greatest(0,coalesce(coins,0)-p_cost) where id=p_child_id;
  return jsonb_build_object('ok',true,'already_owned',false,'coins',coalesce(v_coins,0)-p_cost);
end; $$;

grant execute on function public.purchase_child_mascot_item(uuid,text,text,integer) to authenticated;

-- Recompensa canônica da jornada: moedas da criança + XP/afeto do mascote.
create or replace function public.reward_child_journey(
  p_child_id uuid,
  p_coins integer default 0,
  p_mascot_xp integer default 0,
  p_affinity integer default 0
) returns jsonb
language plpgsql security definer set search_path=public as $$
declare
  v_user uuid := auth.uid();
  v_profile public.child_mascot_profiles;
  v_level integer;
  v_xp integer;
  v_total integer;
begin
  if not exists(select 1 from public.children where id=p_child_id and user_id=v_user) then
    raise exception 'forbidden';
  end if;
  update public.children
     set coins=greatest(0,coalesce(coins,0)+p_coins),
         total_earned=coalesce(total_earned,0)+greatest(p_coins,0),
         earned_today=coalesce(earned_today,0)+greatest(p_coins,0)
   where id=p_child_id
   returning total_earned into v_total;

  insert into public.child_mascot_profiles(child_id,user_id)
  values(p_child_id,v_user)
  on conflict(child_id) do nothing;

  select * into v_profile from public.child_mascot_profiles where child_id=p_child_id for update;
  v_level := coalesce(v_profile.mascot_level,1);
  v_xp := coalesce(v_profile.mascot_xp,0) + greatest(p_mascot_xp,0);
  while v_xp >= v_level*100 loop
    v_xp := v_xp - v_level*100;
    v_level := v_level + 1;
  end loop;
  update public.child_mascot_profiles
     set mascot_level=v_level,
         mascot_xp=v_xp,
         affinity=least(100,greatest(0,coalesce(affinity,0)+p_affinity)),
         stage=case
           when born_at is null then stage
           when coalesce(v_total,0) >= 500 then 'crianca'
           else 'bebe'
         end,
         updated_at=now()
   where child_id=p_child_id;
  return jsonb_build_object('ok',true,'level',v_level,'xp',v_xp);
end; $$;

grant execute on function public.reward_child_journey(uuid,integer,integer,integer) to authenticated;
