-- Toda missão publicada em public.lessons deve seguir a estrutura oficial
-- de 15 blocos, na ordem obrigatória:
--   1. Abertura              (abertura)
--   2. História Inicial      (historia_inicial)
--   3. Objetivo da Missão    (objetivo_missao)
--   4. Conhecimentos Prévios (conhecimentos_previos)
--   5. Descoberta            (descoberta)
--   6. Explicação            (explicacao — com etapas)
--   7. Demonstração          (demonstracao)
--   8. Atividade Guiada      (atividade_guiada)
--   9. Exercícios            (exercicios)
--  10. Desafio               (desafio)
--  11. Mini Jogo             (mini_jogo)
--  12. Revisão               (revisao)
--  13. Quiz                  (quiz)
--  14. Medalha               (medalha)
--  15. Próxima Missão        (proxima_missao)
CREATE OR REPLACE FUNCTION public.validate_lesson_contract()
RETURNS trigger
LANGUAGE plpgsql
SET search_path TO 'public'
AS $function$
DECLARE
  c jsonb := COALESCE(NEW.conteudo_json, '{}'::jsonb);
  faltando text[] := ARRAY[]::text[];

  -- helpers
  FUNCTION_TEXT_EMPTY boolean;
BEGIN
  IF NEW.titulo IS NULL OR btrim(NEW.titulo) = '' THEN faltando := faltando || 'titulo'; END IF;

  -- 1. Abertura
  IF jsonb_typeof(c->'abertura') <> 'object'
     OR COALESCE(c->'abertura'->>'titulo','') = ''
     OR COALESCE(c->'abertura'->>'texto','')  = '' THEN
    faltando := faltando || '1. abertura (titulo + texto)';
  END IF;

  -- 2. História Inicial
  IF jsonb_typeof(c->'historia_inicial') <> 'object'
     OR COALESCE(c->'historia_inicial'->>'titulo','')    = ''
     OR COALESCE(c->'historia_inicial'->>'narrativa','') = '' THEN
    faltando := faltando || '2. historia_inicial (titulo + narrativa)';
  END IF;

  -- 3. Objetivo da Missão
  IF jsonb_typeof(c->'objetivo_missao') <> 'object'
     OR COALESCE(c->'objetivo_missao'->>'titulo','') = ''
     OR jsonb_typeof(c->'objetivo_missao'->'itens') <> 'array'
     OR jsonb_array_length(c->'objetivo_missao'->'itens') < 1 THEN
    faltando := faltando || '3. objetivo_missao (titulo + itens>=1)';
  END IF;

  -- 4. Conhecimentos Prévios
  IF jsonb_typeof(c->'conhecimentos_previos') <> 'array'
     OR jsonb_array_length(c->'conhecimentos_previos') < 1 THEN
    faltando := faltando || '4. conhecimentos_previos (>=1)';
  END IF;

  -- 5. Descoberta
  IF jsonb_typeof(c->'descoberta') <> 'object'
     OR COALESCE(c->'descoberta'->>'titulo','')        = ''
     OR COALESCE(c->'descoberta'->>'pergunta_guia','') = ''
     OR COALESCE(c->'descoberta'->>'pista','')         = '' THEN
    faltando := faltando || '5. descoberta (titulo + pergunta_guia + pista)';
  END IF;

  -- 6. Explicação (>=2 etapas)
  IF jsonb_typeof(c->'explicacao') <> 'object'
     OR COALESCE(c->'explicacao'->>'titulo','') = ''
     OR jsonb_typeof(c->'explicacao'->'etapas') <> 'array'
     OR jsonb_array_length(c->'explicacao'->'etapas') < 2 THEN
    faltando := faltando || '6. explicacao (titulo + etapas>=2)';
  END IF;

  -- 7. Demonstração
  IF jsonb_typeof(c->'demonstracao') <> 'object'
     OR COALESCE(c->'demonstracao'->>'enunciado','') = ''
     OR jsonb_typeof(c->'demonstracao'->'passos') <> 'array'
     OR jsonb_array_length(c->'demonstracao'->'passos') < 1
     OR COALESCE(c->'demonstracao'->>'resposta','')  = '' THEN
    faltando := faltando || '7. demonstracao (enunciado + passos>=1 + resposta)';
  END IF;

  -- 8. Atividade Guiada
  IF jsonb_typeof(c->'atividade_guiada') <> 'object'
     OR COALESCE(c->'atividade_guiada'->>'enunciado','')  = ''
     OR COALESCE(c->'atividade_guiada'->>'resposta','')   = ''
     OR COALESCE(c->'atividade_guiada'->>'explicacao','') = '' THEN
    faltando := faltando || '8. atividade_guiada';
  END IF;

  -- 9. Exercícios
  IF jsonb_typeof(c->'exercicios') <> 'array'
     OR jsonb_array_length(c->'exercicios') < 1 THEN
    faltando := faltando || '9. exercicios (>=1)';
  END IF;

  -- 10. Desafio
  IF jsonb_typeof(c->'desafio') <> 'object'
     OR COALESCE(c->'desafio'->>'enunciado','') = ''
     OR COALESCE(c->'desafio'->>'resposta','')  = '' THEN
    faltando := faltando || '10. desafio (enunciado + resposta)';
  END IF;

  -- 11. Mini Jogo
  IF jsonb_typeof(c->'mini_jogo') <> 'object'
     OR COALESCE(c->'mini_jogo'->>'tipo','')   = ''
     OR COALESCE(c->'mini_jogo'->>'titulo','') = '' THEN
    faltando := faltando || '11. mini_jogo (tipo + titulo)';
  END IF;

  -- 12. Revisão
  IF jsonb_typeof(c->'revisao') <> 'object'
     OR jsonb_typeof(c->'revisao'->'pontos') <> 'array'
     OR jsonb_array_length(c->'revisao'->'pontos') < 1
     OR COALESCE(c->'revisao'->>'dica','') = '' THEN
    faltando := faltando || '12. revisao (pontos>=1 + dica)';
  END IF;

  -- 13. Quiz
  IF jsonb_typeof(c->'quiz') <> 'array'
     OR jsonb_array_length(c->'quiz') < 3 THEN
    faltando := faltando || '13. quiz (>=3 perguntas)';
  END IF;

  -- 14. Medalha
  IF jsonb_typeof(c->'medalha') <> 'object'
     OR COALESCE(c->'medalha'->>'nome','')      = ''
     OR COALESCE(c->'medalha'->>'descricao','') = '' THEN
    faltando := faltando || '14. medalha (nome + descricao)';
  END IF;

  -- 15. Próxima Missão
  IF jsonb_typeof(c->'proxima_missao') <> 'object'
     OR COALESCE(c->'proxima_missao'->>'codigo_bncc','') = '' THEN
    faltando := faltando || '15. proxima_missao (codigo_bncc)';
  END IF;

  IF array_length(faltando, 1) IS NOT NULL THEN
    RAISE EXCEPTION 'MISSAO_INCOMPLETA (%): itens faltando: %',
      NEW.codigo_bncc, array_to_string(faltando, ', ');
  END IF;

  RETURN NEW;
END;
$function$;