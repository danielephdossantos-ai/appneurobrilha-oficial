
-- FASE 0: Infraestrutura da Sequência Oficial BNCC

-- Índices
CREATE INDEX IF NOT EXISTS idx_bncc_hab_hier ON public.bncc_habilidades (etapa, ano, disciplina, unidade_tematica, objeto_conhecimento, ordem);
CREATE INDEX IF NOT EXISTS idx_bncc_hab_codigo ON public.bncc_habilidades (codigo_bncc);

-- Tabela de pré-requisitos
CREATE TABLE IF NOT EXISTS public.bncc_prerequisitos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo_bncc text NOT NULL,
  requer_codigo_bncc text NOT NULL,
  origem text NOT NULL DEFAULT 'auto',
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (codigo_bncc, requer_codigo_bncc),
  CHECK (codigo_bncc <> requer_codigo_bncc)
);

GRANT SELECT ON public.bncc_prerequisitos TO anon, authenticated;
GRANT ALL ON public.bncc_prerequisitos TO service_role;
ALTER TABLE public.bncc_prerequisitos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "bncc_prereq_read_all" ON public.bncc_prerequisitos
  FOR SELECT USING (true);

-- View oficial da sequência (só habilidades com hierarquia completa)
CREATE OR REPLACE VIEW public.vw_sequencia_oficial_bncc AS
SELECT
  h.etapa,
  h.ano,
  h.disciplina,
  h.unidade_tematica,
  h.objeto_conhecimento,
  h.codigo_bncc,
  h.titulo,
  h.objetivo,
  COALESCE(h.ordem, 0) AS ordem_global,
  EXISTS (
    SELECT 1 FROM public.lesson_content lc WHERE lc.codigo_bncc = h.codigo_bncc
  ) AS tem_missao
FROM public.bncc_habilidades h
WHERE h.unidade_tematica IS NOT NULL
  AND h.objeto_conhecimento IS NOT NULL;

GRANT SELECT ON public.vw_sequencia_oficial_bncc TO anon, authenticated, service_role;

-- RPC: próxima habilidade oficial da criança
CREATE OR REPLACE FUNCTION public.proxima_habilidade_oficial(
  _child_id uuid,
  _disciplina text DEFAULT NULL
)
RETURNS TABLE(
  codigo_bncc text,
  etapa text,
  ano text,
  disciplina text,
  unidade_tematica text,
  objeto_conhecimento text,
  titulo text,
  objetivo text,
  tem_missao boolean
)
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  _owner uuid;
  _serie text;
BEGIN
  SELECT c.user_id, c.serie INTO _owner, _serie
    FROM public.children c WHERE c.id = _child_id;
  IF _owner IS NULL OR _owner <> auth.uid() THEN
    RAISE EXCEPTION 'FORBIDDEN';
  END IF;

  RETURN QUERY
  SELECT v.codigo_bncc, v.etapa, v.ano, v.disciplina,
         v.unidade_tematica, v.objeto_conhecimento,
         v.titulo, v.objetivo, v.tem_missao
    FROM public.vw_sequencia_oficial_bncc v
   WHERE (_disciplina IS NULL OR v.disciplina = _disciplina)
     AND (_serie IS NULL OR v.ano = _serie OR v.ano <= _serie)
     AND NOT EXISTS (
       SELECT 1 FROM public.escola_progresso p
        WHERE p.child_id = _child_id
          AND p.codigo_bncc = v.codigo_bncc
          AND p.nivel_dominio = 'dominada'::public.mastery_level
     )
     AND NOT EXISTS (
       SELECT 1 FROM public.bncc_prerequisitos pr
        WHERE pr.codigo_bncc = v.codigo_bncc
          AND NOT EXISTS (
            SELECT 1 FROM public.escola_progresso pp
             WHERE pp.child_id = _child_id
               AND pp.codigo_bncc = pr.requer_codigo_bncc
               AND pp.nivel_dominio IN ('parcialmente_dominada','dominada')
          )
     )
   ORDER BY v.etapa, v.ano, v.disciplina, v.unidade_tematica,
            v.objeto_conhecimento, v.ordem_global, v.codigo_bncc
   LIMIT 1;
END;
$$;
