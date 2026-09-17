-- Núcleo único e reversível para Missão Prova, Tarefa e Trabalho.
-- As tabelas antigas permanecem intactas durante a validação da V2.

CREATE TABLE IF NOT EXISTS public.school_support_missions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  child_id uuid NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  owner_id uuid NOT NULL DEFAULT auth.uid(),
  kind text NOT NULL CHECK (kind IN ('prova', 'tarefa', 'trabalho')),
  title text NOT NULL,
  subject text NOT NULL,
  topics text[] NOT NULL DEFAULT '{}',
  instructions text,
  school_year text,
  due_date date NOT NULL,
  status text NOT NULL DEFAULT 'planejada'
    CHECK (status IN ('planejada', 'em_andamento', 'concluida', 'cancelada')),
  source_table text,
  source_id uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CHECK (cardinality(topics) > 0),
  UNIQUE (source_table, source_id)
);

CREATE TABLE IF NOT EXISTS public.school_support_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  mission_id uuid NOT NULL REFERENCES public.school_support_missions(id) ON DELETE CASCADE,
  scheduled_date date NOT NULL,
  title text NOT NULL,
  topic text NOT NULL,
  mentor_aula_id uuid REFERENCES public.rb_aulas(id) ON DELETE SET NULL,
  status text NOT NULL DEFAULT 'planejada'
    CHECK (status IN ('planejada', 'em_andamento', 'concluida')),
  started_at timestamptz,
  completed_at timestamptz,
  duration_seconds integer CHECK (duration_seconds IS NULL OR duration_seconds >= 0),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS school_support_missions_child_due_idx
  ON public.school_support_missions(child_id, due_date, kind);
CREATE INDEX IF NOT EXISTS school_support_sessions_mission_date_idx
  ON public.school_support_sessions(mission_id, scheduled_date);

ALTER TABLE public.school_support_missions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.school_support_sessions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "school_support_missions_owner" ON public.school_support_missions;
CREATE POLICY "school_support_missions_owner"
  ON public.school_support_missions FOR ALL TO authenticated
  USING (
    owner_id = auth.uid()
    AND EXISTS (
      SELECT 1 FROM public.children child
      WHERE child.id = child_id AND child.user_id = auth.uid()
    )
  )
  WITH CHECK (
    owner_id = auth.uid()
    AND EXISTS (
      SELECT 1 FROM public.children child
      WHERE child.id = child_id AND child.user_id = auth.uid()
    )
  );

DROP POLICY IF EXISTS "school_support_sessions_owner" ON public.school_support_sessions;
CREATE POLICY "school_support_sessions_owner"
  ON public.school_support_sessions FOR ALL TO authenticated
  USING (
    EXISTS (
      SELECT 1
      FROM public.school_support_missions mission
      WHERE mission.id = mission_id AND mission.owner_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1
      FROM public.school_support_missions mission
      WHERE mission.id = mission_id AND mission.owner_id = auth.uid()
    )
  );

GRANT SELECT, INSERT, UPDATE, DELETE ON public.school_support_missions TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.school_support_sessions TO authenticated;
GRANT ALL ON public.school_support_missions TO service_role;
GRANT ALL ON public.school_support_sessions TO service_role;

DROP TRIGGER IF EXISTS school_support_missions_updated_at ON public.school_support_missions;
CREATE TRIGGER school_support_missions_updated_at
  BEFORE UPDATE ON public.school_support_missions
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

DROP TRIGGER IF EXISTS school_support_sessions_updated_at ON public.school_support_sessions;
CREATE TRIGGER school_support_sessions_updated_at
  BEFORE UPDATE ON public.school_support_sessions
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
