-- Biblioteca inclusiva do professor: complemento de Matemática, 1º ao 9º ano.
-- Preserva aulas de Matemática já instaladas e cria somente códigos ausentes.
-- Usa o catálogo BNCC e o modelo pedagógico já ligado a cada código.

BEGIN;

DO $$
BEGIN
  IF to_regclass('public.teacher_inclusive_lessons') IS NULL THEN
    RAISE EXCEPTION 'Falta a tabela public.teacher_inclusive_lessons';
  END IF;
  IF to_regclass('public.bncc_biblioteca') IS NULL THEN
    RAISE EXCEPTION 'Falta a tabela public.bncc_biblioteca';
  END IF;
  IF to_regclass('public.pedagogical_templates') IS NULL
    OR to_regclass('public.bncc_template_map') IS NULL THEN
    RAISE EXCEPTION 'Faltam os modelos pedagógicos de Matemática';
  END IF;
END $$;

WITH source AS (
  SELECT b.*
  FROM public.bncc_biblioteca b
  WHERE b.ativo
    AND b.componente = 'Matemática'
    AND b.ano BETWEEN 1 AND 9
    AND b.codigo ~ '^EF0[1-9]MA[0-9]{2}$'
    AND substring(b.codigo FROM 3 FOR 2)::integer = b.ano
    AND NOT EXISTS (
      SELECT 1
      FROM public.teacher_inclusive_lessons l
      WHERE l.codigo_bncc = b.codigo
        AND l.subject = 'Matemática'
    )
), normalized AS (
  SELECT
    s.*,
    t.name AS template_name,
    t.metodo,
    t.sequencia_didatica,
    t.exemplos,
    t.erros_comuns,
    t.pratica_guiada,
    t.exercicios,
    t.desafio,
    t.revisao,
    t.avaliacao
  FROM source s
  JOIN LATERAL (
    SELECT pt.*
    FROM public.bncc_template_map m
    JOIN public.pedagogical_templates pt ON pt.id = m.template_id
    WHERE m.bncc_code = s.codigo
      AND pt.disciplina = 'Matemática'
    ORDER BY m.priority DESC, pt.slug
    LIMIT 1
  ) t ON true
)
INSERT INTO public.teacher_inclusive_lessons (
  source_lesson_key, source_version, codigo_bncc, title,
  school_stage, school_year, subject, knowledge_object, learning_goal,
  supported_profiles, teacher_pages, student_pages, answer_key, accessibility,
  source_fidelity_checked, pedagogical_reviewed, technical_reviewed,
  status, source_route
)
SELECT
  'bncc-biblioteca/' || lower(n.codigo),
  'catalog-2026-09-07',
  n.codigo,
  coalesce(nullif(n.objeto_conhecimento, ''), nullif(n.unidade_tematica, ''), n.template_name)
    || ' — ' || n.codigo,
  CASE WHEN n.ano <= 5 THEN 'fundamental_1' ELSE 'fundamental_2' END,
  n.ano::text || 'º ano',
  'Matemática',
  coalesce(n.objeto_conhecimento, n.unidade_tematica),
  n.habilidade,
  ARRAY[
    'TEA','TDAH','dislexia','discalculia','deficiencia_intelectual',
    'baixa_visao','deficiencia_auditiva','mobilidade_reduzida'
  ]::text[],
  jsonb_build_array(
    jsonb_build_object(
      'title','Objetivo BNCC',
      'content',jsonb_build_array(n.habilidade)
    ),
    jsonb_build_object(
      'title','Método e sequência',
      'method',n.metodo,
      'content',coalesce(n.sequencia_didatica, '[]'::jsonb)
    ),
    jsonb_build_object(
      'title','Exemplos e erros comuns',
      'examples',coalesce(n.exemplos, '[]'::jsonb),
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
      'oral','pointing','cards','objects','drawing','typing','writing','assistive_technology'
    ),
    'routine','adjustable',
    'one_instruction_at_a_time',true,
    'worked_example',true,
    'concrete_material',true,
    'read_aloud',true,
    'large_text',true,
    'segmented_text',true,
    'visual_schedule',true,
    'planned_pause',true,
    'low_distraction',true,
    'age_respectful',true,
    'privacy_preserving',true,
    'color_independent_symbols',true,
    'print','grayscale-safe'
  ),
  true, true, true, 'published',
  '/bncc/' || lower(n.codigo)
FROM normalized n
ON CONFLICT (source_lesson_key, codigo_bncc) DO NOTHING;

COMMIT;

SELECT
  school_year AS ano,
  count(DISTINCT codigo_bncc) AS codigos_matematica
FROM public.teacher_inclusive_lessons
WHERE subject = 'Matemática'
  AND status = 'published'
GROUP BY school_year
ORDER BY school_year;
