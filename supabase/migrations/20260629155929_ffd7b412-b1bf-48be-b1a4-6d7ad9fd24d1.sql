
CREATE TABLE public.student_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  child_id uuid NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  codigo_bncc text,
  tempo_estudado_seg int NOT NULL DEFAULT 0,
  atividades_concluidas int NOT NULL DEFAULT 0,
  nota numeric(5,2) NOT NULL DEFAULT 0,
  erros int NOT NULL DEFAULT 0,
  acertos int NOT NULL DEFAULT 0,
  habilidades_dominadas text[] NOT NULL DEFAULT ARRAY[]::text[],
  habilidades_pendentes text[] NOT NULL DEFAULT ARRAY[]::text[],
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (child_id, codigo_bncc)
);

CREATE INDEX idx_student_progress_user ON public.student_progress(user_id);
CREATE INDEX idx_student_progress_child ON public.student_progress(child_id);
CREATE INDEX idx_student_progress_bncc ON public.student_progress(codigo_bncc);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.student_progress TO authenticated;
GRANT ALL ON public.student_progress TO service_role;

ALTER TABLE public.student_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users select own student_progress"
  ON public.student_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users insert own student_progress"
  ON public.student_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users update own student_progress"
  ON public.student_progress FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users delete own student_progress"
  ON public.student_progress FOR DELETE
  USING (auth.uid() = user_id);

CREATE TRIGGER trg_student_progress_updated
  BEFORE UPDATE ON public.student_progress
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
