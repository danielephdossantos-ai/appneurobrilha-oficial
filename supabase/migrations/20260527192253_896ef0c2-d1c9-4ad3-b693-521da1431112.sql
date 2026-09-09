
ALTER TABLE public.learning_trails ADD COLUMN IF NOT EXISTS domain TEXT;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.learning_trails TO authenticated;
GRANT ALL ON public.learning_trails TO service_role;
