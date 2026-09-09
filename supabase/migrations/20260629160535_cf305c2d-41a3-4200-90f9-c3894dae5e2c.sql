CREATE TABLE public.teacher_lesson_plans (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  codigo_bncc TEXT NOT NULL,
  objetivos JSONB,
  competencias JSONB,
  habilidades JSONB,
  recursos JSONB,
  metodologia JSONB,
  desenvolvimento JSONB,
  fechamento JSONB,
  avaliacao JSONB,
  adaptacoes JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX teacher_lesson_plans_codigo_bncc_idx ON public.teacher_lesson_plans(codigo_bncc);
GRANT SELECT ON public.teacher_lesson_plans TO authenticated;
GRANT ALL ON public.teacher_lesson_plans TO service_role;
ALTER TABLE public.teacher_lesson_plans ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated can read teacher lesson plans" ON public.teacher_lesson_plans FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admins manage teacher lesson plans" ON public.teacher_lesson_plans FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER update_teacher_lesson_plans_updated_at BEFORE UPDATE ON public.teacher_lesson_plans FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();