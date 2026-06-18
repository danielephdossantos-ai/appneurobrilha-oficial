
-- ============= 1. CATÁLOGO DE AULAS =============
CREATE TYPE public.etapa_escolar AS ENUM ('infantil', 'fundamental1', 'fundamental2');
CREATE TYPE public.tipo_player AS ENUM ('early', 'b', 'c', 'legacy');

CREATE TABLE public.aulas_bncc (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  codigo_bncc TEXT NOT NULL,
  etapa public.etapa_escolar NOT NULL,
  serie TEXT NOT NULL,
  disciplina TEXT NOT NULL,
  eixo TEXT,
  titulo TEXT NOT NULL,
  descricao TEXT,
  tipo_player public.tipo_player NOT NULL,
  payload JSONB NOT NULL,
  xp INTEGER NOT NULL DEFAULT 50,
  ordem INTEGER NOT NULL DEFAULT 0,
  pre_requisitos TEXT[] NOT NULL DEFAULT '{}'::text[],
  ativo BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_aulas_bncc_etapa_serie ON public.aulas_bncc(etapa, serie, disciplina, ordem);
CREATE INDEX idx_aulas_bncc_codigo ON public.aulas_bncc(codigo_bncc);

GRANT SELECT ON public.aulas_bncc TO authenticated;
GRANT ALL ON public.aulas_bncc TO service_role;

ALTER TABLE public.aulas_bncc ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Aulas BNCC são públicas para usuários logados"
  ON public.aulas_bncc FOR SELECT
  TO authenticated
  USING (ativo = true);

CREATE TRIGGER trg_aulas_bncc_updated_at
  BEFORE UPDATE ON public.aulas_bncc
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ============= 2. PROGRESSO POR CRIANÇA/AULA =============
CREATE TABLE public.progresso_aluno_aula (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  child_id UUID NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  aula_id UUID NOT NULL REFERENCES public.aulas_bncc(id) ON DELETE CASCADE,
  tentativas INTEGER NOT NULL DEFAULT 0,
  acertos INTEGER NOT NULL DEFAULT 0,
  erros INTEGER NOT NULL DEFAULT 0,
  dominio NUMERIC(3,2) NOT NULL DEFAULT 0,
  concluida_em TIMESTAMPTZ,
  ultima_tentativa_em TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT progresso_aluno_aula_unique UNIQUE (child_id, aula_id),
  CONSTRAINT progresso_dominio_range CHECK (dominio >= 0 AND dominio <= 1)
);

CREATE INDEX idx_progresso_child ON public.progresso_aluno_aula(child_id);
CREATE INDEX idx_progresso_aula ON public.progresso_aluno_aula(aula_id);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.progresso_aluno_aula TO authenticated;
GRANT ALL ON public.progresso_aluno_aula TO service_role;

ALTER TABLE public.progresso_aluno_aula ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Responsável vê progresso das próprias crianças"
  ON public.progresso_aluno_aula FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.children c
      WHERE c.id = progresso_aluno_aula.child_id
        AND c.user_id = auth.uid()
    )
  );

CREATE POLICY "Responsável insere progresso das próprias crianças"
  ON public.progresso_aluno_aula FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.children c
      WHERE c.id = progresso_aluno_aula.child_id
        AND c.user_id = auth.uid()
    )
  );

CREATE POLICY "Responsável atualiza progresso das próprias crianças"
  ON public.progresso_aluno_aula FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.children c
      WHERE c.id = progresso_aluno_aula.child_id
        AND c.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.children c
      WHERE c.id = progresso_aluno_aula.child_id
        AND c.user_id = auth.uid()
    )
  );

CREATE POLICY "Responsável deleta progresso das próprias crianças"
  ON public.progresso_aluno_aula FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.children c
      WHERE c.id = progresso_aluno_aula.child_id
        AND c.user_id = auth.uid()
    )
  );

CREATE TRIGGER trg_progresso_aluno_aula_updated_at
  BEFORE UPDATE ON public.progresso_aluno_aula
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
