ALTER TABLE public.rb_trabalhos
  ADD COLUMN IF NOT EXISTS mentor_aula_id uuid REFERENCES public.rb_aulas(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS mentor_completed_at timestamptz,
  ADD COLUMN IF NOT EXISTS mentor_duration_seconds integer;
CREATE INDEX IF NOT EXISTS rb_trabalhos_mentor_aula_idx ON public.rb_trabalhos(mentor_aula_id);
ALTER TABLE public.rb_trabalhos DROP CONSTRAINT IF EXISTS rb_trabalhos_mentor_duration_nonnegative;
ALTER TABLE public.rb_trabalhos ADD CONSTRAINT rb_trabalhos_mentor_duration_nonnegative
  CHECK (mentor_duration_seconds IS NULL OR mentor_duration_seconds >= 0);
