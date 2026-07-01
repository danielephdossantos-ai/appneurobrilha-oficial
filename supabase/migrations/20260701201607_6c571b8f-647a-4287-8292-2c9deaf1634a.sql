CREATE OR REPLACE FUNCTION public.validate_lesson_contract()
RETURNS trigger
LANGUAGE plpgsql
SET search_path TO 'public'
AS $function$
DECLARE
  c jsonb := COALESCE(NEW.conteudo_json, '{}'::jsonb);
  faltando text[] := ARRAY[]::text[];
  ex jsonb;
BEGIN
  IF NEW.titulo IS NULL OR btrim(NEW.titulo) = '' THEN
    faltando := faltando || 'titulo';
  END IF;

  -- 01. Introdução
  IF jsonb_typeof(c->'introducao') <> 'object'
     OR COALESCE(c->'introducao'->>'titulo','') = ''
     OR COALESCE(c->'introducao'->>'texto','')  = '' THEN
    faltando := faltando || '01. introducao (titulo + texto)';
  END IF;

  -- 02. História
  IF jsonb_typeof(c->'historia') <> 'object'
     OR COALESCE(c->'historia'->>'titulo','')    = ''
     OR COALESCE(c->'historia'->>'narrativa','') = '' THEN
    faltando := faltando || '02. historia (titulo + narrativa)';
  ELSIF char_length(c->'historia'->>'narrativa') > 1500 THEN
    faltando := faltando || '02. historia (narrativa > 1500 caracteres)';
  END IF;

  -- 03. Objetivos
  IF jsonb_typeof(c->'objetivos') <> 'array'
     OR jsonb_array_length(c->'objetivos') < 1 THEN
    faltando := faltando || '03. objetivos (>=1)';
  END IF;

  -- 04. Conhecimentos Prévios
  IF jsonb_typeof(c->'conhecimentos_previos') <> 'array'
     OR jsonb_array_length(c->'conhecimentos_previos') < 1 THEN
    faltando := faltando || '04. conhecimentos_previos (>=1)';
  END IF;

  -- 05. Motivação
  IF jsonb_typeof(c->'motivacao') <> 'object'
     OR COALESCE(c->'motivacao'->>'titulo','') = ''
     OR COALESCE(c->'motivacao'->>'texto','')  = '' THEN
    faltando := faltando || '05. motivacao (titulo + texto)';
  END IF;

  -- 06. Descoberta
  IF jsonb_typeof(c->'descoberta') <> 'object'
     OR COALESCE(c->'descoberta'->>'titulo','')        = ''
     OR COALESCE(c->'descoberta'->>'pergunta_guia','') = ''
     OR COALESCE(c->'descoberta'->>'pista','')         = '' THEN
    faltando := faltando || '06. descoberta (titulo + pergunta_guia + pista)';
  END IF;

  -- 07. Explicação (>=2 etapas)
  IF jsonb_typeof(c->'explicacao') <> 'object'
     OR COALESCE(c->'explicacao'->>'titulo','') = ''
     OR jsonb_typeof(c->'explicacao'->'etapas') <> 'array'
     OR jsonb_array_length(c->'explicacao'->'etapas') < 2 THEN
    faltando := faltando || '07. explicacao (titulo + etapas>=2)';
  END IF;

  -- 08. Demonstração
  IF jsonb_typeof(c->'demonstracao') <> 'object'
     OR COALESCE(c->'demonstracao'->>'enunciado','') = ''
     OR jsonb_typeof(c->'demonstracao'->'passos') <> 'array'
     OR jsonb_array_length(c->'demonstracao'->'passos') < 1
     OR COALESCE(c->'demonstracao'->>'resposta','')  = '' THEN
    faltando := faltando || '08. demonstracao (enunciado + passos>=1 + resposta)';
  END IF;

  -- 09. Exemplo 1
  ex := c->'exemplo_1';
  IF jsonb_typeof(ex) <> 'object'
     OR COALESCE(ex->>'enunciado','') = ''
     OR jsonb_typeof(ex->'passos') <> 'array'
     OR jsonb_array_length(ex->'passos') < 1
     OR COALESCE(ex->>'resposta','') = '' THEN
    faltando := faltando || '09. exemplo_1 (enunciado + passos>=1 + resposta)';
  END IF;

  -- 10. Exemplo 2
  ex := c->'exemplo_2';
  IF jsonb_typeof(ex) <> 'object'
     OR COALESCE(ex->>'enunciado','') = ''
     OR jsonb_typeof(ex->'passos') <> 'array'
     OR jsonb_array_length(ex->'passos') < 1
     OR COALESCE(ex->>'resposta','') = '' THEN
    faltando := faltando || '10. exemplo_2 (enunciado + passos>=1 + resposta)';
  END IF;

  -- 11. Curiosidade
  IF jsonb_typeof(c->'curiosidade') <> 'object'
     OR COALESCE(c->'curiosidade'->>'titulo','') = ''
     OR COALESCE(c->'curiosidade'->>'texto','')  = '' THEN
    faltando := faltando || '11. curiosidade (titulo + texto)';
  END IF;

  -- 12. Atividade Guiada
  IF jsonb_typeof(c->'atividade_guiada') <> 'object'
     OR COALESCE(c->'atividade_guiada'->>'enunciado','')  = ''
     OR COALESCE(c->'atividade_guiada'->>'resposta','')   = ''
     OR COALESCE(c->'atividade_guiada'->>'explicacao','') = '' THEN
    faltando := faltando || '12. atividade_guiada';
  END IF;

  -- 13. Exercícios
  IF jsonb_typeof(c->'exercicios') <> 'array'
     OR jsonb_array_length(c->'exercicios') < 1 THEN
    faltando := faltando || '13. exercicios (>=1)';
  END IF;

  -- 14. Desafio
  IF jsonb_typeof(c->'desafio') <> 'object'
     OR COALESCE(c->'desafio'->>'enunciado','') = ''
     OR COALESCE(c->'desafio'->>'resposta','')  = '' THEN
    faltando := faltando || '14. desafio (enunciado + resposta)';
  END IF;

  -- 15. Revisão
  IF jsonb_typeof(c->'revisao') <> 'object'
     OR jsonb_typeof(c->'revisao'->'pontos') <> 'array'
     OR jsonb_array_length(c->'revisao'->'pontos') < 1
     OR COALESCE(c->'revisao'->>'dica','') = '' THEN
    faltando := faltando || '15. revisao (pontos>=1 + dica)';
  END IF;

  -- 16. Resumo
  IF jsonb_typeof(c->'resumo') <> 'object'
     OR jsonb_typeof(c->'resumo'->'pontos') <> 'array'
     OR jsonb_array_length(c->'resumo'->'pontos') < 1 THEN
    faltando := faltando || '16. resumo (pontos>=1)';
  END IF;

  -- 17. Quiz
  IF jsonb_typeof(c->'quiz') <> 'array'
     OR jsonb_array_length(c->'quiz') < 3 THEN
    faltando := faltando || '17. quiz (>=3 perguntas)';
  END IF;

  -- 18. Feedback
  IF jsonb_typeof(c->'feedback') <> 'object'
     OR COALESCE(c->'feedback'->>'acerto','') = ''
     OR COALESCE(c->'feedback'->>'erro','')   = '' THEN
    faltando := faltando || '18. feedback (acerto + erro)';
  END IF;

  -- 19. Conquista
  IF jsonb_typeof(c->'conquista') <> 'object'
     OR COALESCE(c->'conquista'->>'nome','')      = ''
     OR COALESCE(c->'conquista'->>'descricao','') = '' THEN
    faltando := faltando || '19. conquista (nome + descricao)';
  END IF;

  -- 20. Próxima Missão
  IF jsonb_typeof(c->'proxima_missao') <> 'object'
     OR COALESCE(c->'proxima_missao'->>'codigo_bncc','') = '' THEN
    faltando := faltando || '20. proxima_missao (codigo_bncc)';
  END IF;

  IF array_length(faltando, 1) IS NOT NULL THEN
    RAISE EXCEPTION 'MISSAO_INCOMPLETA (%): itens faltando: %',
      NEW.codigo_bncc, array_to_string(faltando, ', ');
  END IF;

  RETURN NEW;
END;
$function$;