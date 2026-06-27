CREATE TABLE IF NOT EXISTS public.rb_trilha_anual (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  child_id uuid NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  ano int NOT NULL,
  componente text NOT NULL,
  bimestre int,
  ordem int,
  habilidade_codigo text NOT NULL,
  habilidade_descricao text NOT NULL,
  unidade_tematica text,
  objeto_conhecimento text,
  aulas jsonb,
  aulas_geradas boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'pendente',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (child_id, habilidade_codigo)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.rb_trilha_anual TO authenticated;
GRANT ALL ON public.rb_trilha_anual TO service_role;

ALTER TABLE public.rb_trilha_anual ENABLE ROW LEVEL SECURITY;

CREATE POLICY "trilha pertence ao responsavel"
  ON public.rb_trilha_anual
  FOR ALL
  TO authenticated
  USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = child_id AND c.user_id = auth.uid()))
  WITH CHECK (EXISTS (SELECT 1 FROM public.children c WHERE c.id = child_id AND c.user_id = auth.uid()));

CREATE INDEX IF NOT EXISTS rb_trilha_anual_child_idx ON public.rb_trilha_anual(child_id, componente, ordem);

CREATE TRIGGER rb_trilha_anual_updated_at
  BEFORE UPDATE ON public.rb_trilha_anual
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();