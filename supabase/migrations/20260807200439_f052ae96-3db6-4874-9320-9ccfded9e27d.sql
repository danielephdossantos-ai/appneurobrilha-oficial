CREATE TABLE public.curriculo_anual (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  child_id uuid NOT NULL REFERENCES public.children(id) ON DELETE CASCADE UNIQUE,
  serie text NOT NULL,
  ano_letivo integer NOT NULL DEFAULT date_part('year', now())::int,
  minutos_por_dia integer NOT NULL DEFAULT 30,
  dias_por_semana integer NOT NULL DEFAULT 5,
  semanas_por_semestre integer NOT NULL DEFAULT 20,
  base_anamnese jsonb,
  gerado_em timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.curriculo_anual TO authenticated;
GRANT ALL ON public.curriculo_anual TO service_role;
ALTER TABLE public.curriculo_anual ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Familia gerencia curriculo das proprias criancas" ON public.curriculo_anual FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = curriculo_anual.child_id AND c.user_id = auth.uid()))
WITH CHECK (EXISTS (SELECT 1 FROM public.children c WHERE c.id = curriculo_anual.child_id AND c.user_id = auth.uid()));
CREATE TRIGGER trg_curriculo_anual_updated_at BEFORE UPDATE ON public.curriculo_anual FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.curriculo_anual_itens (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  curriculo_id uuid NOT NULL REFERENCES public.curriculo_anual(id) ON DELETE CASCADE,
  child_id uuid NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  semestre integer NOT NULL DEFAULT 1,
  semana integer NOT NULL,
  dia_semana integer NOT NULL,
  ordem integer NOT NULL DEFAULT 1,
  disciplina text NOT NULL,
  curso_slug text NOT NULL,
  aula_slug text NOT NULL,
  titulo text NOT NULL,
  rota text NOT NULL,
  minutos integer NOT NULL DEFAULT 20,
  prioridade integer NOT NULL DEFAULT 2,
  concluido boolean NOT NULL DEFAULT false,
  concluido_em timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.curriculo_anual_itens TO authenticated;
GRANT ALL ON public.curriculo_anual_itens TO service_role;
ALTER TABLE public.curriculo_anual_itens ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Familia gerencia itens do curriculo das proprias criancas" ON public.curriculo_anual_itens FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = curriculo_anual_itens.child_id AND c.user_id = auth.uid()))
WITH CHECK (EXISTS (SELECT 1 FROM public.children c WHERE c.id = curriculo_anual_itens.child_id AND c.user_id = auth.uid()));
CREATE INDEX idx_curriculo_itens_child_semana ON public.curriculo_anual_itens (child_id, semestre, semana, dia_semana, ordem);

CREATE TABLE public.curriculo_horarios (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  child_id uuid NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  dia_semana integer NOT NULL,
  hora text NOT NULL DEFAULT '17:00',
  lembrete boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (child_id, dia_semana)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.curriculo_horarios TO authenticated;
GRANT ALL ON public.curriculo_horarios TO service_role;
ALTER TABLE public.curriculo_horarios ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Familia gerencia horarios das proprias criancas" ON public.curriculo_horarios FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = curriculo_horarios.child_id AND c.user_id = auth.uid()))
WITH CHECK (EXISTS (SELECT 1 FROM public.children c WHERE c.id = curriculo_horarios.child_id AND c.user_id = auth.uid()));
CREATE TRIGGER trg_curriculo_horarios_updated_at BEFORE UPDATE ON public.curriculo_horarios FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();