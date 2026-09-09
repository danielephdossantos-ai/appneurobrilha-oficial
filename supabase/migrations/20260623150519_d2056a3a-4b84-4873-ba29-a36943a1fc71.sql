
-- 1. Estender CHECK constraint para incluir desafio e revisao
ALTER TABLE public.rb_paginas_aula DROP CONSTRAINT IF EXISTS rb_paginas_aula_tipo_check;

ALTER TABLE public.rb_paginas_aula ADD CONSTRAINT rb_paginas_aula_tipo_check
  CHECK (tipo = ANY (ARRAY[
    'o_que_e','objetivo','explicacao','demonstracao','pratica_guiada',
    'dicas_familia','avaliacao','proximos_passos','exemplo','exercicio',
    'dica','video','imagem','passo_a_passo',
    'desafio','revisao'
  ]));

-- 2. View que valida o padrão premium (6 estágios obrigatórios)
CREATE OR REPLACE VIEW public.rb_aulas_premium_status AS
WITH etapas_premium AS (
  SELECT unnest(ARRAY['objetivo','explicacao','exemplo','pratica_guiada','desafio','revisao']) AS etapa
),
aula_etapas AS (
  SELECT a.id AS aula_id,
         e.etapa,
         EXISTS (
           SELECT 1 FROM public.rb_paginas_aula p
           WHERE p.aula_id = a.id AND p.tipo = e.etapa
         ) AS presente
  FROM public.rb_aulas a
  CROSS JOIN etapas_premium e
)
SELECT a.id AS aula_id,
       a.titulo,
       a.habilidade_id,
       COUNT(*) FILTER (WHERE ae.presente) AS etapas_presentes,
       6 AS etapas_obrigatorias,
       ROUND(100.0 * COUNT(*) FILTER (WHERE ae.presente) / 6, 0) AS pct_premium,
       (COUNT(*) FILTER (WHERE ae.presente) = 6) AS is_premium_completa,
       array_agg(ae.etapa ORDER BY
         CASE ae.etapa
           WHEN 'objetivo' THEN 1
           WHEN 'explicacao' THEN 2
           WHEN 'exemplo' THEN 3
           WHEN 'pratica_guiada' THEN 4
           WHEN 'desafio' THEN 5
           WHEN 'revisao' THEN 6
         END
       ) FILTER (WHERE NOT ae.presente) AS etapas_faltantes,
       array_agg(ae.etapa ORDER BY
         CASE ae.etapa
           WHEN 'objetivo' THEN 1
           WHEN 'explicacao' THEN 2
           WHEN 'exemplo' THEN 3
           WHEN 'pratica_guiada' THEN 4
           WHEN 'desafio' THEN 5
           WHEN 'revisao' THEN 6
         END
       ) FILTER (WHERE ae.presente) AS etapas_presentes_list
FROM public.rb_aulas a
LEFT JOIN aula_etapas ae ON ae.aula_id = a.id
GROUP BY a.id, a.titulo, a.habilidade_id;

GRANT SELECT ON public.rb_aulas_premium_status TO anon, authenticated;
GRANT ALL ON public.rb_aulas_premium_status TO service_role;

-- 3. Função utilitária para pegar etapas faltantes de uma aula
CREATE OR REPLACE FUNCTION public.rb_etapas_faltantes(_aula_id uuid)
RETURNS text[]
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT etapas_faltantes
  FROM public.rb_aulas_premium_status
  WHERE aula_id = _aula_id;
$$;

GRANT EXECUTE ON FUNCTION public.rb_etapas_faltantes(uuid) TO anon, authenticated;
