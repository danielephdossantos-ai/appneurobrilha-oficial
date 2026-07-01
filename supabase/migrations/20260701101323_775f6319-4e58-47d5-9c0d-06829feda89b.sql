
CREATE TABLE public.escola_progresso (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  child_id uuid NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  codigo_bncc text NOT NULL,
  bloco_atual int NOT NULL DEFAULT 0,
  concluida boolean NOT NULL DEFAULT false,
  concluida_em timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (child_id, codigo_bncc)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.escola_progresso TO authenticated;
GRANT ALL ON public.escola_progresso TO service_role;

ALTER TABLE public.escola_progresso ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Pais gerenciam progresso das próprias crianças"
  ON public.escola_progresso
  FOR ALL
  TO authenticated
  USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = escola_progresso.child_id AND c.user_id = auth.uid()))
  WITH CHECK (EXISTS (SELECT 1 FROM public.children c WHERE c.id = escola_progresso.child_id AND c.user_id = auth.uid()));

CREATE TRIGGER escola_progresso_updated_at
  BEFORE UPDATE ON public.escola_progresso
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX idx_escola_progresso_child ON public.escola_progresso(child_id);
CREATE INDEX idx_escola_progresso_codigo ON public.escola_progresso(codigo_bncc);
