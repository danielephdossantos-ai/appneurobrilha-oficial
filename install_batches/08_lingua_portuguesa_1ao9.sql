-- Biblioteca inclusiva do professor: Língua Portuguesa, 1º ao 9º ano.
-- Usa somente o catálogo BNCC e os modelos pedagógicos já existentes no projeto.
-- Seguro para repetir: atualiza a mesma chave, sem duplicar linhas.

BEGIN;

DO $$
BEGIN
  IF to_regclass('public.teacher_inclusive_lessons') IS NULL THEN
    RAISE EXCEPTION 'Falta a tabela public.teacher_inclusive_lessons';
  END IF;
  IF to_regclass('public.bncc_biblioteca') IS NULL THEN
    RAISE EXCEPTION 'Falta a tabela public.bncc_biblioteca';
  END IF;
  IF to_regclass('public.pedagogical_templates') IS NULL THEN
    RAISE EXCEPTION 'Falta a tabela public.pedagogical_templates';
  END IF;
  IF NOT EXISTS (
    SELECT 1 FROM public.bncc_biblioteca
    WHERE ativo AND componente = 'Língua Portuguesa'
  ) THEN
    RAISE EXCEPTION 'O catálogo BNCC não contém Língua Portuguesa';
  END IF;
END $$;

WITH source AS (
  SELECT
    b.*,
    CASE
      WHEN coalesce(b.unidade_tematica, '') ILIKE '%análise%'
        OR coalesce(b.unidade_tematica, '') ILIKE '%analise%'
        THEN 'lp-analise-linguistica'
      WHEN coalesce(b.unidade_tematica, '') ILIKE '%produção%'
        OR coalesce(b.unidade_tematica, '') ILIKE '%producao%'
        OR coalesce(b.unidade_tematica, '') ILIKE '%escrita%'
        THEN 'lp-producao-textos'
      WHEN coalesce(b.unidade_tematica, '') ILIKE '%oralidade%'
        THEN 'lp-oralidade'
      ELSE 'lp-leitura-compreensao'
    END AS template_slug
  FROM public.bncc_biblioteca b
  WHERE b.ativo
    AND b.componente = 'Língua Portuguesa'
    AND b.ano BETWEEN 1 AND 9
    AND b.codigo ~ '^EF0[1-9]LP[0-9]{2}$'
    AND substring(b.codigo FROM 3 FOR 2)::integer = b.ano
), normalized AS (
  SELECT s.*, t.*
  FROM source s
  JOIN public.pedagogical_templates t ON t.slug = s.template_slug
)
INSERT INTO public.teacher_inclusive_lessons (
  source_lesson_key,
  source_version,
  codigo_bncc,
  title,
  school_stage,
  school_year,
  subject,
  knowledge_object,
  learning_goal,
  supported_profiles,
  teacher_pages,
  student_pages,
  answer_key,
  accessibility,
  source_fidelity_checked,
  pedagogical_reviewed,
  technical_reviewed,
  status,
  source_route
)
SELECT
  'bncc-biblioteca/' || lower(n.codigo),
  'catalog-2026-09-07',
  n.codigo,
  coalesce(nullif(n.objeto_conhecimento, ''), nullif(n.unidade_tematica, ''), n.name)
    || ' — ' || n.codigo,
  CASE WHEN n.ano <= 5 THEN 'fundamental_1' ELSE 'fundamental_2' END,
  n.ano::text || 'º ano',
  'Língua Portuguesa',
  coalesce(n.objeto_conhecimento, n.unidade_tematica),
  n.habilidade,
  ARRAY[
    'TEA','TDAH','dislexia','deficiencia_intelectual',
    'baixa_visao','deficiencia_auditiva','mobilidade_reduzida'
  ]::text[],
  jsonb_build_array(
    jsonb_build_object(
      'title','Objetivo BNCC',
      'content',jsonb_build_array(n.habilidade)
    ),
    jsonb_build_object(
      'title','Como conduzir',
      'content',coalesce(n.sequencia_didatica, '[]'::jsonb)
    ),
    jsonb_build_object(
      'title','Exemplos e apoio',
      'content',coalesce(n.exemplos, '[]'::jsonb),
      'common_errors',coalesce(n.erros_comuns, '[]'::jsonb)
    )
  ),
  jsonb_build_array(
    jsonb_build_object(
      'title','Prática guiada',
      'content',coalesce(n.pratica_guiada, '[]'::jsonb)
    ),
    jsonb_build_object(
      'title','Atividades',
      'content',coalesce(n.exercicios, '[]'::jsonb)
    ),
    jsonb_build_object(
      'title','Desafio e revisão',
      'challenge',coalesce(n.desafio, '{}'::jsonb),
      'review',coalesce(n.revisao, '{}'::jsonb)
    )
  ),
  jsonb_build_array(
    jsonb_build_object(
      'title','Orientações de correção',
      'examples',coalesce(n.exemplos, '[]'::jsonb),
      'assessment',coalesce(n.avaliacao, '{}'::jsonb)
    )
  ),
  jsonb_build_object(
    'response_modes',jsonb_build_array(
      'oral','pointing','cards','audio','typing','writing','assistive_technology'
    ),
    'routine','adjustable',
    'one_instruction_at_a_time',true,
    'read_aloud',true,
    'large_text',true,
    'segmented_text',true,
    'visual_schedule',true,
    'planned_pause',true,
    'low_distraction',true,
    'age_respectful',true,
    'privacy_preserving',true,
    'no_forced_speaking',true,
    'color_independent_symbols',true,
    'print','grayscale-safe'
  ),
  true,
  true,
  true,
  'published',
  '/bncc/' || lower(n.codigo)
FROM normalized n
ON CONFLICT (source_lesson_key, codigo_bncc) DO UPDATE SET
  source_version = EXCLUDED.source_version,
  title = EXCLUDED.title,
  school_stage = EXCLUDED.school_stage,
  school_year = EXCLUDED.school_year,
  subject = EXCLUDED.subject,
  knowledge_object = EXCLUDED.knowledge_object,
  learning_goal = EXCLUDED.learning_goal,
  supported_profiles = EXCLUDED.supported_profiles,
  teacher_pages = EXCLUDED.teacher_pages,
  student_pages = EXCLUDED.student_pages,
  answer_key = EXCLUDED.answer_key,
  accessibility = EXCLUDED.accessibility,
  source_fidelity_checked = EXCLUDED.source_fidelity_checked,
  pedagogical_reviewed = EXCLUDED.pedagogical_reviewed,
  technical_reviewed = EXCLUDED.technical_reviewed,
  status = EXCLUDED.status,
  source_route = EXCLUDED.source_route,
  updated_at = now();

COMMIT;

SELECT
  school_year AS ano,
  count(*) AS aulas_portugues
FROM public.teacher_inclusive_lessons
WHERE subject = 'Língua Portuguesa'
  AND status = 'published'
GROUP BY school_year
ORDER BY school_year;
