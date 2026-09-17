ALTER TABLE public.homework_tasks
  ADD COLUMN IF NOT EXISTS mentor_aula_id uuid REFERENCES public.rb_aulas(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS mentor_completed_at timestamptz,
  ADD COLUMN IF NOT EXISTS mentor_duration_seconds integer;
CREATE INDEX IF NOT EXISTS homework_tasks_mentor_aula_idx ON public.homework_tasks(mentor_aula_id);
ALTER TABLE public.homework_tasks DROP CONSTRAINT IF EXISTS homework_tasks_mentor_duration_nonnegative;
ALTER TABLE public.homework_tasks ADD CONSTRAINT homework_tasks_mentor_duration_nonnegative
  CHECK (mentor_duration_seconds IS NULL OR mentor_duration_seconds >= 0);
