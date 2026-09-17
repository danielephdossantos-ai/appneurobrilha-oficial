ALTER TABLE public.exam_study_plans
  ADD COLUMN IF NOT EXISTS mentor_aula_id uuid REFERENCES public.rb_aulas(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS started_at timestamptz,
  ADD COLUMN IF NOT EXISTS completed_at timestamptz,
  ADD COLUMN IF NOT EXISTS duration_seconds integer;

CREATE INDEX IF NOT EXISTS exam_study_plans_mentor_aula_idx ON public.exam_study_plans(mentor_aula_id);

ALTER TABLE public.exam_study_plans DROP CONSTRAINT IF EXISTS exam_study_plans_duration_nonnegative;
ALTER TABLE public.exam_study_plans ADD CONSTRAINT exam_study_plans_duration_nonnegative
  CHECK (duration_seconds IS NULL OR duration_seconds >= 0);
