ALTER TABLE public.exam_study_plans ADD COLUMN IF NOT EXISTS aula_id UUID REFERENCES public.rb_aulas(id);
GRANT ALL ON public.exam_study_plans TO authenticated;
GRANT ALL ON public.exam_study_plans TO service_role;