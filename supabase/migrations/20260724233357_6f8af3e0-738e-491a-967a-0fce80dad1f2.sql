
CREATE TABLE public.plano_anual (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  child_id UUID NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  idade INTEGER NOT NULL,
  serie TEXT NOT NULL,
  minutos_por_dia INTEGER NOT NULL DEFAULT 20,
  dias_por_semana INTEGER NOT NULL DEFAULT 5,
  semanas_totais INTEGER NOT NULL DEFAULT 40,
  base_anamnese JSONB,
  gerado_em TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(child_id)
);

CREATE TABLE public.plano_anual_itens (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  plano_id UUID NOT NULL REFERENCES public.plano_anual(id) ON DELETE CASCADE,
  child_id UUID NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  semana INTEGER NOT NULL,
  dia_semana INTEGER NOT NULL,
  ordem INTEGER NOT NULL,
  fonte TEXT NOT NULL,
  categoria TEXT,
  titulo TEXT NOT NULL,
  descricao TEXT,
  rota TEXT NOT NULL,
  minutos INTEGER NOT NULL DEFAULT 5,
  prioridade INTEGER NOT NULL DEFAULT 2,
  concluido BOOLEAN NOT NULL DEFAULT false,
  concluido_em TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_plano_anual_itens_plano ON public.plano_anual_itens(plano_id, semana, dia_semana, ordem);
CREATE INDEX idx_plano_anual_itens_child ON public.plano_anual_itens(child_id);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.plano_anual TO authenticated;
GRANT ALL ON public.plano_anual TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.plano_anual_itens TO authenticated;
GRANT ALL ON public.plano_anual_itens TO service_role;

ALTER TABLE public.plano_anual ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.plano_anual_itens ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Família gerencia plano das próprias crianças"
  ON public.plano_anual FOR ALL
  USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = plano_anual.child_id AND c.user_id = auth.uid()))
  WITH CHECK (EXISTS (SELECT 1 FROM public.children c WHERE c.id = plano_anual.child_id AND c.user_id = auth.uid()));

CREATE POLICY "Família gerencia itens do plano das próprias crianças"
  ON public.plano_anual_itens FOR ALL
  USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = plano_anual_itens.child_id AND c.user_id = auth.uid()))
  WITH CHECK (EXISTS (SELECT 1 FROM public.children c WHERE c.id = plano_anual_itens.child_id AND c.user_id = auth.uid()));

CREATE TRIGGER trg_plano_anual_updated_at
  BEFORE UPDATE ON public.plano_anual
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
