CREATE TABLE public.primeiros_anos_plano (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  child_id UUID NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  idade INTEGER NOT NULL,
  etapa TEXT NOT NULL,
  motivo TEXT,
  minutos_por_dia INTEGER NOT NULL DEFAULT 20,
  dias_por_semana INTEGER NOT NULL DEFAULT 5,
  semanas_totais INTEGER NOT NULL DEFAULT 40,
  base_anamnese JSONB,
  gerado_em TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (child_id)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.primeiros_anos_plano TO authenticated;
GRANT ALL ON public.primeiros_anos_plano TO service_role;
ALTER TABLE public.primeiros_anos_plano ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Familia gerencia plano de alfabetizacao das proprias criancas"
ON public.primeiros_anos_plano FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = child_id AND c.user_id = auth.uid()))
WITH CHECK (EXISTS (SELECT 1 FROM public.children c WHERE c.id = child_id AND c.user_id = auth.uid()));

CREATE TABLE public.primeiros_anos_itens (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  plano_id UUID NOT NULL REFERENCES public.primeiros_anos_plano(id) ON DELETE CASCADE,
  child_id UUID NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  semana INTEGER NOT NULL,
  dia_semana INTEGER NOT NULL,
  ordem INTEGER NOT NULL DEFAULT 1,
  trilha TEXT NOT NULL,
  trilha_label TEXT NOT NULL,
  fase TEXT,
  aula_slug TEXT NOT NULL,
  titulo TEXT NOT NULL,
  rota TEXT NOT NULL,
  minutos INTEGER NOT NULL DEFAULT 5,
  prioridade INTEGER NOT NULL DEFAULT 2,
  concluido BOOLEAN NOT NULL DEFAULT false,
  concluido_em TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.primeiros_anos_itens TO authenticated;
GRANT ALL ON public.primeiros_anos_itens TO service_role;
ALTER TABLE public.primeiros_anos_itens ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Familia gerencia aulas do plano das proprias criancas"
ON public.primeiros_anos_itens FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = child_id AND c.user_id = auth.uid()))
WITH CHECK (EXISTS (SELECT 1 FROM public.children c WHERE c.id = child_id AND c.user_id = auth.uid()));

CREATE INDEX primeiros_anos_itens_semana_idx ON public.primeiros_anos_itens (child_id, semana, dia_semana, ordem);

CREATE TRIGGER update_primeiros_anos_plano_updated_at
BEFORE UPDATE ON public.primeiros_anos_plano
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_primeiros_anos_itens_updated_at
BEFORE UPDATE ON public.primeiros_anos_itens
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();