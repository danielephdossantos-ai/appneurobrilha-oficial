CREATE TABLE public.recovery_lessons (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  codigo_bncc TEXT NOT NULL,
  aula_simplificada JSONB,
  atividade_simplificada JSONB,
  explicacao_alternativa JSONB,
  novo_exemplo JSONB,
  nova_revisao JSONB,
  novo_quiz JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX recovery_lessons_codigo_bncc_idx ON public.recovery_lessons(codigo_bncc);
GRANT SELECT ON public.recovery_lessons TO authenticated;
GRANT ALL ON public.recovery_lessons TO service_role;
ALTER TABLE public.recovery_lessons ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated can read recovery lessons" ON public.recovery_lessons FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admins manage recovery lessons" ON public.recovery_lessons FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER update_recovery_lessons_updated_at BEFORE UPDATE ON public.recovery_lessons FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();