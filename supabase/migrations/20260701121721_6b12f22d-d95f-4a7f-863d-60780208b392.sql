
-- 1) FK: toda aula precisa apontar pra uma habilidade BNCC existente
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'lessons_codigo_bncc_fkey'
  ) THEN
    ALTER TABLE public.lessons
      ADD CONSTRAINT lessons_codigo_bncc_fkey
      FOREIGN KEY (codigo_bncc)
      REFERENCES public.bncc_habilidades (codigo_bncc)
      ON UPDATE CASCADE
      ON DELETE RESTRICT
      DEFERRABLE INITIALLY DEFERRED;
  END IF;
END $$;

COMMENT ON TABLE public.lessons IS
  'Biblioteca Nacional de Aulas do Escola Brilha. Regra oficial: exatamente 1 aula por habilidade BNCC (codigo_bncc UNIQUE + FK obrigatória em bncc_habilidades). Toda expansão futura deve inserir aqui — não criar novas tabelas de aula.';

-- 2) Visão de cobertura oficial (relatório, sem escrita)
CREATE OR REPLACE VIEW public.vw_biblioteca_nacional AS
SELECT
  h.codigo_bncc,
  h.ano,
  h.disciplina,
  h.titulo               AS titulo_habilidade,
  h.objetivo             AS objetivo_habilidade,
  h.nivel,
  h.ordem,
  (l.id IS NOT NULL)     AS tem_aula,
  l.id                   AS aula_id,
  l.titulo               AS aula_titulo,
  l.updated_at           AS aula_atualizada_em,
  CASE
    WHEN l.id IS NULL THEN 'pendente'
    ELSE 'publicada'
  END                    AS status
FROM public.bncc_habilidades h
LEFT JOIN public.lessons     l ON l.codigo_bncc = h.codigo_bncc;

COMMENT ON VIEW public.vw_biblioteca_nacional IS
  'Cobertura oficial da Biblioteca Nacional de Aulas: uma linha por habilidade BNCC com status pendente/publicada.';

GRANT SELECT ON public.vw_biblioteca_nacional TO anon, authenticated, service_role;
