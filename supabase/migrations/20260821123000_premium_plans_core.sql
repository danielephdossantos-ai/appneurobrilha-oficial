-- Plano Premium NeuroBrilha: camada canônica sem apagar histórico legado.

DO $$ BEGIN
  CREATE TYPE public.learning_plan_type AS ENUM ('literacy','school','support');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN
  CREATE TYPE public.learning_plan_status AS ENUM ('draft','active','paused','completed','cancelled','needs_review');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN
  CREATE TYPE public.learning_plan_item_role AS ENUM ('teach','guided_practice','practice','review','reinforcement','assessment','cognitive_training','support');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS public.learning_plans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  child_id uuid NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  plan_type public.learning_plan_type NOT NULL,
  status public.learning_plan_status NOT NULL DEFAULT 'active',
  academic_year integer,
  stage text,
  grade text,
  starts_at date NOT NULL DEFAULT CURRENT_DATE,
  ends_at date,
  weeks_total integer,
  minutes_per_day integer,
  days_per_week integer,
  generation_reason text,
  profile_snapshot jsonb,
  rules_version text NOT NULL DEFAULT 'premium-v1',
  content_map_version text NOT NULL DEFAULT 'premium-v1',
  generated_at timestamptz NOT NULL DEFAULT now(),
  completed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.learning_plan_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  plan_id uuid NOT NULL REFERENCES public.learning_plans(id) ON DELETE CASCADE,
  child_id uuid NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  week integer,
  day integer,
  sequence_order integer NOT NULL DEFAULT 1,
  item_role public.learning_plan_item_role NOT NULL,
  source text NOT NULL,
  source_id text NOT NULL,
  title text NOT NULL,
  route text NOT NULL,
  subject text,
  skill_id text,
  bncc_code text,
  difficulty_level integer,
  estimated_minutes integer NOT NULL DEFAULT 10,
  prerequisite_item_id uuid REFERENCES public.learning_plan_items(id) ON DELETE SET NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('blocked','pending','available','in_progress','completed','skipped','cancelled')),
  scheduled_for timestamptz,
  started_at timestamptz,
  completed_at timestamptz,
  selection_reason text,
  legacy_source text,
  legacy_item_id uuid,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(plan_id, source, source_id, week, day, sequence_order)
);

CREATE INDEX IF NOT EXISTS learning_plans_child_idx ON public.learning_plans(child_id, plan_type, status);
CREATE UNIQUE INDEX IF NOT EXISTS learning_plans_one_open_per_type ON public.learning_plans(child_id, plan_type) WHERE status IN ('draft','active','paused','needs_review');
CREATE INDEX IF NOT EXISTS learning_plan_items_today_idx ON public.learning_plan_items(child_id, scheduled_for, status);
CREATE INDEX IF NOT EXISTS learning_plan_items_plan_idx ON public.learning_plan_items(plan_id, week, day, sequence_order);
CREATE INDEX IF NOT EXISTS learning_plan_items_legacy_idx ON public.learning_plan_items(legacy_source, legacy_item_id);

ALTER TABLE public.learning_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.learning_plan_items ENABLE ROW LEVEL SECURITY;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.learning_plans TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.learning_plan_items TO authenticated;
GRANT ALL ON public.learning_plans, public.learning_plan_items TO service_role;

DROP POLICY IF EXISTS "own child learning plans" ON public.learning_plans;
CREATE POLICY "own child learning plans" ON public.learning_plans FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = learning_plans.child_id AND c.user_id = auth.uid()))
WITH CHECK (EXISTS (SELECT 1 FROM public.children c WHERE c.id = learning_plans.child_id AND c.user_id = auth.uid()));

DROP POLICY IF EXISTS "own child learning plan items" ON public.learning_plan_items;
CREATE POLICY "own child learning plan items" ON public.learning_plan_items FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = learning_plan_items.child_id AND c.user_id = auth.uid()))
WITH CHECK (EXISTS (SELECT 1 FROM public.children c WHERE c.id = learning_plan_items.child_id AND c.user_id = auth.uid()));

-- Corrige duplicação do plano neuro.
DELETE FROM public.neuro_plano a
USING public.neuro_plano b
WHERE a.child_id = b.child_id AND a.created_at < b.created_at;
CREATE UNIQUE INDEX IF NOT EXISTS neuro_plano_child_unique ON public.neuro_plano(child_id);

-- Rotina: referência executável da atividade e RLS usando children.user_id.
ALTER TABLE public.routine_items ADD COLUMN IF NOT EXISTS route text;
ALTER TABLE public.routine_items ADD COLUMN IF NOT EXISTS premium_item_id uuid REFERENCES public.learning_plan_items(id) ON DELETE SET NULL;
CREATE INDEX IF NOT EXISTS routine_items_premium_item_idx ON public.routine_items(premium_item_id);
DROP POLICY IF EXISTS "Users can manage routine items for their children" ON public.routine_items;
CREATE POLICY "Users can manage routine items for their children"
ON public.routine_items FOR ALL TO authenticated
USING (parent_id = auth.uid() OR EXISTS (SELECT 1 FROM public.children c WHERE c.id = routine_items.child_id AND c.user_id = auth.uid()))
WITH CHECK (parent_id = auth.uid() OR EXISTS (SELECT 1 FROM public.children c WHERE c.id = routine_items.child_id AND c.user_id = auth.uid()));

-- Professor Mentor: aula canônica + cache separado.
ALTER TABLE public.rb_aulas ALTER COLUMN habilidade_id DROP NOT NULL;
ALTER TABLE public.rb_aulas ADD COLUMN IF NOT EXISTS modulo text;
ALTER TABLE public.rb_aulas ADD COLUMN IF NOT EXISTS cache_key text;
ALTER TABLE public.rb_aulas ADD COLUMN IF NOT EXISTS modelo_ia text;
ALTER TABLE public.rb_aulas ADD COLUMN IF NOT EXISTS conteudo_ia jsonb;
CREATE UNIQUE INDEX IF NOT EXISTS rb_aulas_cache_key_unique ON public.rb_aulas(cache_key) WHERE cache_key IS NOT NULL;

-- Páginas do Professor Mentor usam papéis pedagógicos explícitos.
ALTER TABLE public.rb_paginas_aula DROP CONSTRAINT IF EXISTS rb_paginas_aula_tipo_check;
ALTER TABLE public.rb_paginas_aula ADD CONSTRAINT rb_paginas_aula_tipo_check CHECK (tipo IN (
  'objetivo','introducao','explicacao','exemplo','pratica_guiada','exercicio','desafio','revisao','avaliacao','feedback','dicas_familia','dica','video','imagem','passo_a_passo'
));

ALTER TABLE public.rb_aulas_geradas_ia ADD COLUMN IF NOT EXISTS aula_id uuid REFERENCES public.rb_aulas(id) ON DELETE CASCADE;
ALTER TABLE public.rb_aulas_geradas_ia ADD COLUMN IF NOT EXISTS cache_key text;
ALTER TABLE public.rb_aulas_geradas_ia ADD COLUMN IF NOT EXISTS modulo text;
ALTER TABLE public.rb_aulas_geradas_ia ADD COLUMN IF NOT EXISTS modelo_ia text;
CREATE UNIQUE INDEX IF NOT EXISTS rb_aulas_geradas_cache_key_unique ON public.rb_aulas_geradas_ia(cache_key) WHERE cache_key IS NOT NULL;

-- Histórico real de uso para a Biblioteca Pedagógica Viva.
-- A versão antiga da tabela referencia children_profiles (arquitetura legada),
-- enquanto o app atual usa public.children. Preservamos a tabela antiga como legado
-- e criamos a versão canônica sem perder os registros históricos.
DO $$
DECLARE
  legacy_fk boolean;
BEGIN
  SELECT EXISTS (
    SELECT 1
    FROM pg_constraint c
    JOIN pg_class t ON t.oid = c.conrelid
    JOIN pg_class rt ON rt.oid = c.confrelid
    JOIN pg_namespace n ON n.oid = t.relnamespace
    WHERE n.nspname = 'public'
      AND t.relname = 'historico_uso_aulas'
      AND c.contype = 'f'
      AND rt.relname = 'children_profiles'
  ) INTO legacy_fk;

  IF legacy_fk AND to_regclass('public.historico_uso_aulas_legacy') IS NULL THEN
    ALTER TABLE public.historico_uso_aulas RENAME TO historico_uso_aulas_legacy;
    IF to_regclass('public.historico_uso_aulas_pkey') IS NOT NULL THEN
      ALTER INDEX public.historico_uso_aulas_pkey RENAME TO historico_uso_aulas_legacy_pkey;
    END IF;
    IF to_regclass('public.historico_uso_aulas_child_id_aula_id_key') IS NOT NULL THEN
      ALTER INDEX public.historico_uso_aulas_child_id_aula_id_key RENAME TO historico_uso_aulas_legacy_child_aula_key;
    END IF;
  END IF;
END $$;

CREATE TABLE IF NOT EXISTS public.historico_uso_aulas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  child_id uuid NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  aula_id uuid NOT NULL REFERENCES public.aulas_geradas(id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now(),
  usado_em timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.historico_uso_aulas ADD COLUMN IF NOT EXISTS usado_em timestamptz NOT NULL DEFAULT now();
CREATE UNIQUE INDEX IF NOT EXISTS historico_uso_aulas_v2_child_aula_unique ON public.historico_uso_aulas(child_id, aula_id);
ALTER TABLE public.historico_uso_aulas ENABLE ROW LEVEL SECURITY;
GRANT SELECT, INSERT, UPDATE ON public.historico_uso_aulas TO authenticated;
GRANT ALL ON public.historico_uso_aulas TO service_role;
DROP POLICY IF EXISTS "own child historico uso aulas" ON public.historico_uso_aulas;
CREATE POLICY "own child historico uso aulas" ON public.historico_uso_aulas FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = historico_uso_aulas.child_id AND c.user_id = auth.uid()))
WITH CHECK (EXISTS (SELECT 1 FROM public.children c WHERE c.id = historico_uso_aulas.child_id AND c.user_id = auth.uid()));

-- Conclusão por ocorrência: uma rotina recorrente concluída hoje não fica concluída para sempre.
CREATE TABLE IF NOT EXISTS public.routine_item_occurrences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  routine_item_id uuid NOT NULL REFERENCES public.routine_items(id) ON DELETE CASCADE,
  child_id uuid NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  occurrence_date date NOT NULL,
  status text NOT NULL DEFAULT 'pendente' CHECK (status IN ('pendente','concluido','atrasado','cancelado')),
  completed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(routine_item_id, occurrence_date)
);
CREATE INDEX IF NOT EXISTS routine_item_occurrences_child_date_idx ON public.routine_item_occurrences(child_id, occurrence_date);
ALTER TABLE public.routine_item_occurrences ENABLE ROW LEVEL SECURITY;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.routine_item_occurrences TO authenticated;
GRANT ALL ON public.routine_item_occurrences TO service_role;
DROP POLICY IF EXISTS "own routine occurrences" ON public.routine_item_occurrences;
CREATE POLICY "own routine occurrences" ON public.routine_item_occurrences FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = routine_item_occurrences.child_id AND c.user_id = auth.uid()))
WITH CHECK (EXISTS (SELECT 1 FROM public.children c WHERE c.id = routine_item_occurrences.child_id AND c.user_id = auth.uid()));

-- Idempotência dos lembretes: evita repetir o mesmo push se a função rodar a cada 5 minutos.
CREATE TABLE IF NOT EXISTS public.routine_notification_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  routine_item_id uuid NOT NULL REFERENCES public.routine_items(id) ON DELETE CASCADE,
  child_id uuid NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  occurrence_date date NOT NULL,
  scheduled_time time NOT NULL,
  sent_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(routine_item_id, occurrence_date, scheduled_time)
);
ALTER TABLE public.routine_notification_log ENABLE ROW LEVEL SECURITY;
GRANT SELECT ON public.routine_notification_log TO authenticated;
GRANT ALL ON public.routine_notification_log TO service_role;
DROP POLICY IF EXISTS "own routine notification logs" ON public.routine_notification_log;
CREATE POLICY "own routine notification logs" ON public.routine_notification_log FOR SELECT TO authenticated
USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = routine_notification_log.child_id AND c.user_id = auth.uid()));

-- Idempotência da sincronização diária do Plano Premium com a Rotina.
-- Remove duplicatas automáticas antigas antes de criar índices únicos.
DELETE FROM public.routine_items a
USING public.routine_items b
WHERE a.id <> b.id
  AND a.child_id = b.child_id
  AND a.date IS NOT DISTINCT FROM b.date
  AND a.source = 'learning_plan'
  AND b.source = 'learning_plan'
  AND a.premium_item_id IS NOT NULL
  AND a.premium_item_id = b.premium_item_id
  AND a.created_at < b.created_at;
CREATE UNIQUE INDEX IF NOT EXISTS routine_items_premium_day_unique
ON public.routine_items(child_id, date, premium_item_id)
WHERE source = 'learning_plan' AND premium_item_id IS NOT NULL;

DELETE FROM public.routine_items a
USING public.routine_items b
WHERE a.id <> b.id
  AND a.child_id = b.child_id
  AND a.date IS NOT DISTINCT FROM b.date
  AND a.source = 'learning_plan'
  AND b.source = 'learning_plan'
  AND a.premium_item_id IS NULL
  AND b.premium_item_id IS NULL
  AND a.source_id IS NOT NULL
  AND a.source_id = b.source_id
  AND a.created_at < b.created_at;
CREATE UNIQUE INDEX IF NOT EXISTS routine_items_legacy_plan_day_unique
ON public.routine_items(child_id, date, source_id)
WHERE source = 'learning_plan' AND premium_item_id IS NULL AND source_id IS NOT NULL;


-- Push Premium: identifica dispositivo e fuso. Chaves VAPID ficam somente em secrets.
ALTER TABLE public.push_subscriptions ADD COLUMN IF NOT EXISTS device_role text NOT NULL DEFAULT 'parent' CHECK (device_role IN ('parent','child'));
ALTER TABLE public.push_subscriptions ADD COLUMN IF NOT EXISTS device_name text;
ALTER TABLE public.push_subscriptions ADD COLUMN IF NOT EXISTS timezone text NOT NULL DEFAULT 'America/Sao_Paulo';
ALTER TABLE public.push_subscriptions ADD COLUMN IF NOT EXISTS enabled boolean NOT NULL DEFAULT true;
CREATE INDEX IF NOT EXISTS push_subscriptions_child_role_idx ON public.push_subscriptions(child_id, device_role, enabled);
