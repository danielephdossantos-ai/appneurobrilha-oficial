
ALTER TABLE public.bncc_habilidades
  ADD COLUMN IF NOT EXISTS etapa text,
  ADD COLUMN IF NOT EXISTS unidade_tematica text,
  ADD COLUMN IF NOT EXISTS objeto_conhecimento text;

-- Preenche etapa a partir do prefixo do código quando ausente.
UPDATE public.bncc_habilidades
   SET etapa = CASE
        WHEN codigo_bncc LIKE 'EI%' THEN 'Educação Infantil'
        WHEN codigo_bncc LIKE 'EF%' THEN 'Ensino Fundamental'
        WHEN codigo_bncc LIKE 'EM%' THEN 'Ensino Médio'
        ELSE etapa
      END
 WHERE etapa IS NULL;

CREATE OR REPLACE VIEW public.vw_biblioteca_nacional_missoes AS
SELECT
  h.codigo_bncc,
  COALESCE(h.etapa,
    CASE
      WHEN h.codigo_bncc LIKE 'EI%' THEN 'Educação Infantil'
      WHEN h.codigo_bncc LIKE 'EF%' THEN 'Ensino Fundamental'
      WHEN h.codigo_bncc LIKE 'EM%' THEN 'Ensino Médio'
    END) AS etapa,
  h.ano,
  h.disciplina,
  h.unidade_tematica,
  h.objeto_conhecimento,
  h.titulo,
  h.objetivo,
  CASE WHEN l.id IS NULL THEN 'pendente' ELSE 'publicada' END AS status,
  l.id AS missao_id
FROM public.bncc_habilidades h
LEFT JOIN public.lessons l ON l.codigo_bncc = h.codigo_bncc;

GRANT SELECT ON public.vw_biblioteca_nacional_missoes TO authenticated, anon, service_role;
