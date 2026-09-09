CREATE TABLE public.neuro_plano (
  id uuid primary key default gen_random_uuid(),
  child_id uuid not null references public.children(id) on delete cascade,
  semanas integer not null default 12,
  dias_por_semana integer not null default 5,
  sessoes_por_dia integer not null default 2,
  base_anamnese jsonb,
  gerado_em timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

CREATE TABLE public.neuro_plano_itens (
  id uuid primary key default gen_random_uuid(),
  plano_id uuid not null references public.neuro_plano(id) on delete cascade,
  child_id uuid not null references public.children(id) on delete cascade,
  semana integer not null,
  dia_semana integer not null,
  ordem integer not null default 1,
  slug text not null,
  nome text not null,
  emoji text not null default '🧠',
  grupo text not null default 'Neuro Treino',
  objetivo text,
  por_que text,
  prioridade integer not null default 2,
  rota text not null,
  minutos integer not null default 10,
  concluido boolean not null default false,
  concluido_em timestamptz,
  created_at timestamptz not null default now()
);

CREATE INDEX neuro_plano_itens_child_sem_idx ON public.neuro_plano_itens(child_id, semana, dia_semana);

CREATE TABLE public.neuro_horarios (
  child_id uuid not null references public.children(id) on delete cascade,
  dia_semana integer not null,
  hora text not null default '17:00',
  lembrete boolean not null default true,
  updated_at timestamptz not null default now(),
  primary key (child_id, dia_semana)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.neuro_plano TO authenticated;
GRANT ALL ON public.neuro_plano TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.neuro_plano_itens TO authenticated;
GRANT ALL ON public.neuro_plano_itens TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.neuro_horarios TO authenticated;
GRANT ALL ON public.neuro_horarios TO service_role;

ALTER TABLE public.neuro_plano ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.neuro_plano_itens ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.neuro_horarios ENABLE ROW LEVEL SECURITY;

CREATE POLICY "own child neuro_plano" ON public.neuro_plano FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = neuro_plano.child_id AND c.user_id = auth.uid()))
WITH CHECK (EXISTS (SELECT 1 FROM public.children c WHERE c.id = neuro_plano.child_id AND c.user_id = auth.uid()));

CREATE POLICY "own child neuro_plano_itens" ON public.neuro_plano_itens FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = neuro_plano_itens.child_id AND c.user_id = auth.uid()))
WITH CHECK (EXISTS (SELECT 1 FROM public.children c WHERE c.id = neuro_plano_itens.child_id AND c.user_id = auth.uid()));

CREATE POLICY "own child neuro_horarios" ON public.neuro_horarios FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = neuro_horarios.child_id AND c.user_id = auth.uid()))
WITH CHECK (EXISTS (SELECT 1 FROM public.children c WHERE c.id = neuro_horarios.child_id AND c.user_id = auth.uid()));