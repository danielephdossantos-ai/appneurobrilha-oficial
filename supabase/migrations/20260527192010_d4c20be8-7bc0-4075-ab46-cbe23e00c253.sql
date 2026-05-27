
ALTER TABLE public.pedagogical_activities_base ADD COLUMN IF NOT EXISTS domain TEXT;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.pedagogical_activities_base TO authenticated;
GRANT ALL ON public.pedagogical_activities_base TO service_role;
