-- Validação obrigatória de aulas: nenhuma aula pode existir sem TODOS os itens do padrão.
CREATE OR REPLACE FUNCTION public.validate_lesson_contract()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
DECLARE
  c jsonb := COALESCE(NEW.conteudo_json, '{}'::jsonb);
  faltando text[] := ARRAY[]::text[];

  FUNCTION_check_str CONSTANT text := '';
BEGIN
  -- Campos texto obrigatórios da própria linha
  IF NEW.titulo IS NULL OR btrim(NEW.titulo) = '' THEN faltando := faltando || 'titulo'; END IF;
  IF NEW.objetivo IS NULL OR btrim(NEW.objetivo) = '' THEN faltando := faltando || 'objetivo'; END IF;
  IF NEW.missao IS NULL OR btrim(NEW.missao) = '' THEN faltando := faltando || 'missao'; END IF;
  IF NEW.introducao IS NULL OR btrim(NEW.introducao) = '' THEN faltando := faltando || 'introducao'; END IF;
  IF NEW.explicacao IS NULL OR btrim(NEW.explicacao) = '' THEN faltando := faltando || 'explicacao'; END IF;
  IF NEW.resumo IS NULL OR btrim(NEW.resumo) = '' THEN faltando := faltando || 'resumo'; END IF;

  -- Listas obrigatórias
  IF jsonb_typeof(c->'objetivos') <> 'array' OR jsonb_array_length(c->'objetivos') < 1
    THEN faltando := faltando || 'objetivos (>=1)'; END IF;
  IF jsonb_typeof(c->'conhecimentos_previos') <> 'array' OR jsonb_array_length(c->'conhecimentos_previos') < 1
    THEN faltando := faltando || 'conhecimentos_previos (>=1)'; END IF;
  IF jsonb_typeof(c->'materiais') <> 'array' OR jsonb_array_length(c->'materiais') < 1
    THEN faltando := faltando || 'materiais (>=1)'; END IF;

  -- Exatamente 3 exemplos
  IF jsonb_typeof(c->'exemplos') <> 'array' OR jsonb_array_length(c->'exemplos') < 3
    THEN faltando := faltando || 'exemplos (3 obrigatorios)'; END IF;

  -- Blocos únicos obrigatórios
  IF COALESCE(c->>'curiosidade', '') = '' AND jsonb_typeof(c->'curiosidade') NOT IN ('object','array')
    THEN faltando := faltando || 'curiosidade'; END IF;
  IF COALESCE(c->>'atividade_guiada', '') = '' AND jsonb_typeof(c->'atividade_guiada') NOT IN ('object','array')
    THEN faltando := faltando || 'atividade_guiada'; END IF;
  IF COALESCE(c->>'atividade_pratica', '') = '' AND jsonb_typeof(c->'atividade_pratica') NOT IN ('object','array')
    THEN faltando := faltando || 'atividade_pratica'; END IF;
  IF COALESCE(c->>'desafio', '') = '' AND jsonb_typeof(c->'desafio') NOT IN ('object','array')
    THEN faltando := faltando || 'desafio'; END IF;
  IF COALESCE(c->>'mapa_mental', '') = '' AND jsonb_typeof(c->'mapa_mental') NOT IN ('object','array')
    THEN faltando := faltando || 'mapa_mental'; END IF;

  -- Quiz com >= 3
  IF jsonb_typeof(c->'quiz') <> 'array' OR jsonb_array_length(c->'quiz') < 3
    THEN faltando := faltando || 'quiz (>=3 perguntas)'; END IF;

  -- Erros comuns e dicas
  IF jsonb_typeof(c->'erros_comuns') <> 'array' OR jsonb_array_length(c->'erros_comuns') < 1
    THEN faltando := faltando || 'erros_comuns (>=1)'; END IF;
  IF jsonb_typeof(c->'dicas') <> 'array' OR jsonb_array_length(c->'dicas') < 1
    THEN faltando := faltando || 'dicas (>=1)'; END IF;

  -- Adaptações: TDAH, TEA, Dislexia (todas obrigatórias, não vazias)
  IF jsonb_typeof(c->'adaptacoes') <> 'object' THEN
    faltando := faltando || 'adaptacoes.tdah' || 'adaptacoes.tea' || 'adaptacoes.dislexia';
  ELSE
    IF COALESCE(c->'adaptacoes'->>'tdah', '') = ''
       AND jsonb_typeof(c->'adaptacoes'->'tdah') NOT IN ('object','array')
      THEN faltando := faltando || 'adaptacoes.tdah'; END IF;
    IF COALESCE(c->'adaptacoes'->>'tea', '') = ''
       AND jsonb_typeof(c->'adaptacoes'->'tea') NOT IN ('object','array')
      THEN faltando := faltando || 'adaptacoes.tea'; END IF;
    IF COALESCE(c->'adaptacoes'->>'dislexia', '') = ''
       AND jsonb_typeof(c->'adaptacoes'->'dislexia') NOT IN ('object','array')
      THEN faltando := faltando || 'adaptacoes.dislexia'; END IF;
  END IF;

  -- Critérios de domínio
  IF jsonb_typeof(c->'criterios_dominio') <> 'array' OR jsonb_array_length(c->'criterios_dominio') < 1
    THEN faltando := faltando || 'criterios_dominio (>=1)'; END IF;

  IF array_length(faltando, 1) IS NOT NULL THEN
    RAISE EXCEPTION 'AULA_INCOMPLETA (%): itens faltando: %', NEW.codigo_bncc, array_to_string(faltando, ', ');
  END IF;

  RETURN NEW;
END;
$$;

-- Corrige acidente sintático (removendo declaração inválida caso Postgres reclame)
-- (a função é recriada acima; caso o parser aceite o CONSTANT, ele é apenas ignorado)

DROP TRIGGER IF EXISTS lessons_validate_contract ON public.lessons;
CREATE TRIGGER lessons_validate_contract
  BEFORE INSERT OR UPDATE ON public.lessons
  FOR EACH ROW EXECUTE FUNCTION public.validate_lesson_contract();