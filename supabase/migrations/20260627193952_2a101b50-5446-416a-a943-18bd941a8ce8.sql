
-- daily_routines: add editable fields
ALTER TABLE public.daily_routines
  ADD COLUMN IF NOT EXISTS title text,
  ADD COLUMN IF NOT EXISTS time_of_day text,
  ADD COLUMN IF NOT EXISTS category text DEFAULT 'casa',
  ADD COLUMN IF NOT EXISTS icon text,
  ADD COLUMN IF NOT EXISTS updated_at timestamptz NOT NULL DEFAULT now();

-- study_agenda: add time field
ALTER TABLE public.study_agenda
  ADD COLUMN IF NOT EXISTS time_of_day text,
  ADD COLUMN IF NOT EXISTS category text DEFAULT 'escola';

-- Grants (none existed before)
GRANT SELECT, INSERT, UPDATE, DELETE ON public.daily_routines TO authenticated;
GRANT ALL ON public.daily_routines TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.study_agenda TO authenticated;
GRANT ALL ON public.study_agenda TO service_role;

-- Ensure RLS enabled
ALTER TABLE public.daily_routines ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_agenda ENABLE ROW LEVEL SECURITY;

-- Full CRUD policies for daily_routines (only SELECT existed)
DROP POLICY IF EXISTS "Users can view their child routines" ON public.daily_routines;
DROP POLICY IF EXISTS "Parents manage child routines" ON public.daily_routines;
CREATE POLICY "Parents manage child routines"
ON public.daily_routines
FOR ALL
TO authenticated
USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = daily_routines.child_id AND c.user_id = auth.uid()))
WITH CHECK (EXISTS (SELECT 1 FROM public.children c WHERE c.id = daily_routines.child_id AND c.user_id = auth.uid()));
