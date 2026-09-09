
-- Tabela de indicadores fixos por habilidade
CREATE TABLE public.rb_indicadores (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  habilidade_id uuid NOT NULL REFERENCES public.rb_habilidades(id) ON DELETE CASCADE,
  ordem integer NOT NULL DEFAULT 0,
  texto text NOT NULL,
  descricao text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX rb_indicadores_habilidade_idx ON public.rb_indicadores(habilidade_id, ordem);

GRANT SELECT ON public.rb_indicadores TO anon, authenticated;
GRANT ALL ON public.rb_indicadores TO service_role;

ALTER TABLE public.rb_indicadores ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Indicadores são públicos para leitura"
  ON public.rb_indicadores FOR SELECT
  USING (true);

CREATE TRIGGER rb_indicadores_updated_at
  BEFORE UPDATE ON public.rb_indicadores
  FOR EACH ROW EXECUTE FUNCTION public.rb_set_updated_at();

-- Tabela de progresso por aluno x indicador
CREATE TABLE public.rb_progresso_indicadores (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  child_id uuid NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  indicador_id uuid NOT NULL REFERENCES public.rb_indicadores(id) ON DELETE CASCADE,
  atingido boolean NOT NULL DEFAULT false,
  observacao text,
  marcado_em timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (child_id, indicador_id)
);

CREATE INDEX rb_prog_ind_child_idx ON public.rb_progresso_indicadores(child_id);
CREATE INDEX rb_prog_ind_indicador_idx ON public.rb_progresso_indicadores(indicador_id);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.rb_progresso_indicadores TO authenticated;
GRANT ALL ON public.rb_progresso_indicadores TO service_role;

ALTER TABLE public.rb_progresso_indicadores ENABLE ROW LEVEL SECURITY;

-- Pai/responsável só acessa progresso das próprias crianças
CREATE POLICY "Responsável gerencia progresso de seus filhos"
  ON public.rb_progresso_indicadores FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.children c
      WHERE c.id = rb_progresso_indicadores.child_id
        AND c.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.children c
      WHERE c.id = rb_progresso_indicadores.child_id
        AND c.user_id = auth.uid()
    )
  );

CREATE TRIGGER rb_prog_ind_updated_at
  BEFORE UPDATE ON public.rb_progresso_indicadores
  FOR EACH ROW EXECUTE FUNCTION public.rb_set_updated_at();
