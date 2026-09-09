CREATE OR REPLACE FUNCTION public.approve_lesson_draft(_draft_id uuid)
 RETURNS uuid
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  _draft public.lesson_drafts;
  _payload jsonb;
  _lesson_id uuid;
  _item jsonb;
  _idx int;
  _quiz_questions jsonb;
  _review_keywords text[];
  _first_example jsonb;
  _second_example jsonb;
  _first_curiosity jsonb;
  _first_mistake jsonb;
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'FORBIDDEN';
  END IF;

  SELECT * INTO _draft FROM public.lesson_drafts WHERE id = _draft_id;
  IF _draft.id IS NULL THEN RAISE EXCEPTION 'DRAFT_NOT_FOUND'; END IF;
  IF _draft.status <> 'pending' THEN RAISE EXCEPTION 'ALREADY_REVIEWED'; END IF;

  _payload := COALESCE(_draft.payload, '{}'::jsonb);
  _first_example := COALESCE(_payload->'exemplos'->0, '{}'::jsonb);
  _second_example := COALESCE(_payload->'exemplos'->1, _first_example, '{}'::jsonb);
  _first_curiosity := COALESCE(_payload->'curiosidades'->0, '{}'::jsonb);
  _first_mistake := COALESCE(_payload->'revisao'->'erros_comuns'->0, '{}'::jsonb);

  IF jsonb_typeof(_payload->'quiz'->'questoes') = 'array' THEN
    _quiz_questions := _payload->'quiz'->'questoes';
  ELSIF jsonb_typeof(_payload->'quiz'->'perguntas') = 'array' THEN
    _quiz_questions := _payload->'quiz'->'perguntas';
  ELSIF jsonb_typeof(_payload->'quiz_resumo') = 'array' THEN
    _quiz_questions := _payload->'quiz_resumo';
  ELSE
    _quiz_questions := '[]'::jsonb;
  END IF;

  IF jsonb_typeof(_payload->'revisao'->'palavras_chave') = 'array' THEN
    SELECT COALESCE(array_agg(value), ARRAY[]::text[])
      INTO _review_keywords
      FROM jsonb_array_elements_text(_payload->'revisao'->'palavras_chave') AS value;
  ELSIF jsonb_typeof(_payload->'palavras_chave') = 'array' THEN
    SELECT COALESCE(array_agg(value), ARRAY[]::text[])
      INTO _review_keywords
      FROM jsonb_array_elements_text(_payload->'palavras_chave') AS value;
  ELSE
    _review_keywords := ARRAY[]::text[];
  END IF;

  -- Remove conteúdo anterior do mesmo código (re-publicação)
  DELETE FROM public.lesson_examples     WHERE codigo_bncc = _draft.codigo_bncc;
  DELETE FROM public.lesson_curiosities  WHERE codigo_bncc = _draft.codigo_bncc;
  DELETE FROM public.lesson_quizzes      WHERE codigo_bncc = _draft.codigo_bncc;
  DELETE FROM public.lesson_challenges   WHERE codigo_bncc = _draft.codigo_bncc;
  DELETE FROM public.lesson_assessments  WHERE codigo_bncc = _draft.codigo_bncc;
  DELETE FROM public.lesson_adaptations  WHERE codigo_bncc = _draft.codigo_bncc;
  DELETE FROM public.lesson_explanations WHERE codigo_bncc = _draft.codigo_bncc;
  DELETE FROM public.lesson_reviews_full WHERE codigo_bncc = _draft.codigo_bncc;
  DELETE FROM public.lesson_content      WHERE codigo_bncc = _draft.codigo_bncc;

  -- lesson_content (pai)
  INSERT INTO public.lesson_content (
    codigo_bncc, ano, disciplina, titulo, objetivo, introducao, explicacao,
    contextualizacao, exemplo1, exemplo2, analogia, passo_a_passo, curiosidade,
    erro_comum, atividade_guiada, atividade_pratica, desafio, quiz, respostas,
    resumo, revisao, palavras_chave, nivel, tempo_estimado, materiais, video,
    imagem, tags, is_complete, missing_sections, audit_report
  ) VALUES (
    _draft.codigo_bncc,
    COALESCE(NULLIF(_draft.ano, ''), 'Ano não informado'),
    COALESCE(NULLIF(_draft.disciplina, ''), 'Disciplina não informada'),
    COALESCE(NULLIF(_payload->>'titulo', ''), NULLIF(_draft.titulo, ''), 'Aula guiada'),
    COALESCE(NULLIF(_payload->>'objetivo', ''), 'Compreender o conteúdo com apoio de exemplos e prática guiada.'),
    COALESCE(NULLIF(_payload->>'introducao', ''), 'Vamos começar observando uma situação simples e conversar sobre o que ela ensina.'),
    COALESCE(NULLIF(_payload->>'explicacao', ''), 'A explicação apresenta o conteúdo em passos curtos para a criança compreender com calma.'),
    COALESCE(NULLIF(_payload->>'contextualizacao', ''), 'Esse aprendizado aparece em situações do cotidiano, da escola e da família.'),
    COALESCE(NULLIF(_first_example->>'descricao', ''), NULLIF(_first_example->>'enunciado', ''), NULLIF(_first_example->>'titulo', ''), 'Observe um exemplo concreto e explique o que percebeu.'),
    COALESCE(NULLIF(_second_example->>'descricao', ''), NULLIF(_second_example->>'enunciado', ''), NULLIF(_second_example->>'titulo', ''), 'Crie um segundo exemplo parecido usando a rotina da criança.'),
    COALESCE(NULLIF(_payload->>'analogia', ''), 'Aprender é como montar uma trilha: um passo ajuda o próximo.'),
    COALESCE(_payload->'passo_a_passo', _payload->'atividade_guiada', '[]'::jsonb),
    COALESCE(NULLIF(_first_curiosity->>'conteudo', ''), NULLIF(_first_curiosity->>'texto', ''), NULLIF(_payload->>'curiosidade', ''), 'Quando a criança explica o próprio pensamento, ela aprende melhor.'),
    COALESCE(NULLIF(_first_mistake->>'erro', ''), NULLIF(_first_mistake->>'texto', ''), NULLIF(_payload->>'erro_comum', ''), 'Um erro comum é responder rápido sem observar o exemplo com calma.'),
    COALESCE(_payload->'atividade_guiada', '[]'::jsonb),
    COALESCE(_payload->'atividade_pratica', '[]'::jsonb),
    COALESCE(_payload->'desafio_resumo', _payload->'desafio', _payload->'desafios'->0, '{}'::jsonb),
    COALESCE(_payload->'quiz_resumo', _quiz_questions, '[]'::jsonb),
    COALESCE(_payload->'respostas', '[]'::jsonb),
    COALESCE(NULLIF(_payload->>'resumo', ''), 'A criança praticou o conteúdo, viu exemplos e revisou o que aprendeu.'),
    COALESCE(NULLIF(_payload->'revisao'->>'resumo_completo', ''), NULLIF(_payload->'revisao'->>'sintese', ''), NULLIF(_payload->>'revisao', ''), 'Revise o objetivo, o exemplo principal e uma atividade parecida.'),
    COALESCE(_payload->'palavras_chave', '[]'::jsonb),
    COALESCE(NULLIF(_payload->>'nivel', ''), 'fundamental'),
    COALESCE(NULLIF(_payload->>'tempo_estimado', '')::int, 20),
    COALESCE(_payload->'materiais', '[]'::jsonb),
    COALESCE(_payload->>'video', ''),
    COALESCE(_payload->>'imagem', ''),
    COALESCE(_payload->'tags', _payload->'palavras_chave', '[]'::jsonb),
    true,
    ARRAY[]::text[],
    jsonb_build_object('published_from_draft', _draft.id, 'audited', true)
  ) RETURNING id INTO _lesson_id;

  -- Exemplos
  _idx := 0;
  FOR _item IN SELECT * FROM jsonb_array_elements(COALESCE(_payload->'exemplos','[]'::jsonb)) LOOP
    _idx := _idx + 1;
    INSERT INTO public.lesson_examples (
      lesson_id, codigo_bncc, ordem, titulo, contexto, enunciado, resolucao, resposta, explicacao
    ) VALUES (
      _lesson_id, _draft.codigo_bncc, _idx,
      COALESCE(NULLIF(_item->>'titulo', ''), 'Exemplo ' || _idx),
      COALESCE(NULLIF(_item->>'contexto', ''), NULLIF(_item->>'descricao', ''), 'Situação do cotidiano'),
      COALESCE(NULLIF(_item->>'enunciado', ''), NULLIF(_item->>'descricao', ''), NULLIF(_item->>'texto', ''), 'Observe o exemplo e responda com suas palavras.'),
      COALESCE(NULLIF(_item->>'resolucao', ''), 'Converse sobre o exemplo e resolva passo a passo.'),
      COALESCE(NULLIF(_item->>'resposta', ''), 'Resposta orientada pelo exemplo.'),
      COALESCE(NULLIF(_item->>'explicacao', ''), NULLIF(_item->>'descricao', ''), 'Este exemplo ajuda a entender a ideia principal da aula.')
    );
  END LOOP;

  -- Curiosidades
  _idx := 0;
  FOR _item IN SELECT * FROM jsonb_array_elements(COALESCE(_payload->'curiosidades','[]'::jsonb)) LOOP
    _idx := _idx + 1;
    INSERT INTO public.lesson_curiosities (
      lesson_id, codigo_bncc, ordem, titulo, conteudo, fonte
    ) VALUES (
      _lesson_id, _draft.codigo_bncc, _idx,
      COALESCE(NULLIF(_item->>'titulo', ''), 'Curiosidade ' || _idx),
      COALESCE(NULLIF(_item->>'conteudo', ''), NULLIF(_item->>'texto', ''), 'Curiosidade relacionada ao aprendizado.'),
      COALESCE(NULLIF(_item->>'fonte', ''), 'Escola Brilha')
    );
  END LOOP;

  -- Quiz
  IF jsonb_array_length(_quiz_questions) > 0 THEN
    INSERT INTO public.lesson_quizzes (codigo_bncc, titulo, descricao, questoes, metadata)
    VALUES (
      _draft.codigo_bncc,
      COALESCE(NULLIF(_payload->'quiz'->>'titulo', ''), 'Quiz da aula'),
      COALESCE(NULLIF(_payload->'quiz'->>'descricao', ''), 'Perguntas para revisar o conteúdo.'),
      _quiz_questions,
      jsonb_build_object('source', 'lesson_draft', 'draft_id', _draft.id)
    );
  END IF;

  -- Desafios
  _idx := 0;
  FOR _item IN SELECT * FROM jsonb_array_elements(COALESCE(_payload->'desafios','[]'::jsonb)) LOOP
    _idx := _idx + 1;
    INSERT INTO public.lesson_challenges (
      lesson_id, codigo_bncc, ordem, titulo, objetivo, descricao,
      resposta, explicacao, pontuacao, nivel
    ) VALUES (
      _lesson_id, _draft.codigo_bncc, _idx,
      COALESCE(NULLIF(_item->>'titulo', ''), 'Desafio ' || _idx),
      COALESCE(NULLIF(_item->>'objetivo', ''), 'Aplicar o que foi aprendido na aula.'),
      COALESCE(NULLIF(_item->>'descricao', ''), 'Resolva o desafio usando o exemplo da aula.'),
      COALESCE(NULLIF(_item->>'resposta', ''), 'Resposta pessoal orientada.'),
      COALESCE(NULLIF(_item->>'explicacao', ''), 'Explique o caminho usado para responder.'),
      COALESCE(NULLIF(_item->>'pontuacao', '')::int, 10),
      COALESCE(NULLIF(_item->>'nivel', ''), 'medio')
    );
  END LOOP;

  -- Avaliação
  IF _payload ? 'avaliacao' THEN
    INSERT INTO public.lesson_assessments (
      lesson_id, codigo_bncc, tipo, titulo, descricao, questoes
    ) VALUES (
      _lesson_id, _draft.codigo_bncc,
      COALESCE(NULLIF(_payload->'avaliacao'->>'tipo', ''), 'formativa'),
      COALESCE(NULLIF(_payload->'avaliacao'->>'titulo', ''), 'Avaliação da aula'),
      COALESCE(NULLIF(_payload->'avaliacao'->>'descricao', ''), NULLIF(_payload->'avaliacao'->>'rubrica', ''), 'Observe participação, compreensão e aplicação do conteúdo.'),
      COALESCE(_payload->'avaliacao'->'questoes', _payload->'avaliacao'->'criterios', '[]'::jsonb)
    );
  END IF;

  -- Adaptações por neuroperfil
  FOR _item IN SELECT * FROM jsonb_array_elements(COALESCE(_payload->'adaptacoes','[]'::jsonb)) LOOP
    INSERT INTO public.lesson_adaptations (
      lesson_id, codigo_bncc, perfil, objetivo, estrategias, recursos,
      ajustes_atividade, orientacoes_familia, observacoes
    ) VALUES (
      _lesson_id, _draft.codigo_bncc,
      COALESCE(NULLIF(_item->>'perfil',''), 'tdah'),
      COALESCE(NULLIF(_item->>'objetivo', ''), 'Adaptar a aula ao perfil da criança.'),
      CASE WHEN jsonb_typeof(_item->'estrategias') = 'array' THEN _item->'estrategias' ELSE jsonb_build_array(COALESCE(NULLIF(_item->>'estrategia', ''), 'Use instruções curtas e apoio visual.')) END,
      COALESCE(_item->'recursos','[]'::jsonb),
      COALESCE(_item->'ajustes_atividade','[]'::jsonb),
      COALESCE(NULLIF(_item->>'orientacoes_familia', ''), 'A família pode acompanhar com leitura em voz alta e pausas curtas.'),
      COALESCE(NULLIF(_item->>'observacoes', ''), 'Ajuste o ritmo conforme a resposta da criança.')
    );
  END LOOP;

  -- Explicações em níveis
  _idx := 0;
  FOR _item IN SELECT * FROM jsonb_array_elements(COALESCE(_payload->'explicacoes_extra','[]'::jsonb)) LOOP
    _idx := _idx + 1;
    INSERT INTO public.lesson_explanations (
      lesson_id, codigo_bncc, nivel, titulo, conteudo, exemplos, ordem
    ) VALUES (
      _lesson_id, _draft.codigo_bncc,
      CASE WHEN _idx = 1 THEN 'infantil'::lesson_explanation_nivel WHEN _idx = 2 THEN 'intermediaria'::lesson_explanation_nivel ELSE 'detalhada'::lesson_explanation_nivel END,
      COALESCE(NULLIF(_item->>'titulo', ''), 'Explicação ' || _idx),
      COALESCE(NULLIF(_item->>'conteudo', ''), NULLIF(_item->>'texto', ''), 'Explicação complementar da aula.'),
      COALESCE(_item->'exemplos', '[]'::jsonb),
      _idx
    );
  END LOOP;

  -- Revisão completa
  IF _payload ? 'revisao' THEN
    INSERT INTO public.lesson_reviews_full (
      lesson_id, codigo_bncc, resumo_curto, resumo_completo, mapa_mental,
      palavras_chave, erros_comuns, dicas
    ) VALUES (
      _lesson_id, _draft.codigo_bncc,
      COALESCE(NULLIF(_payload->'revisao'->>'resumo_curto', ''), NULLIF(_payload->'revisao'->>'sintese', ''), COALESCE(NULLIF(_payload->>'resumo', ''), 'Resumo da aula.')),
      COALESCE(NULLIF(_payload->'revisao'->>'resumo_completo', ''), NULLIF(_payload->'revisao'->>'sintese', ''), COALESCE(NULLIF(_payload->>'resumo', ''), 'Revise os pontos principais da aula.')),
      COALESCE(_payload->'revisao'->'mapa_mental', '{}'::jsonb),
      _review_keywords,
      COALESCE(_payload->'revisao'->'erros_comuns', '[]'::jsonb),
      COALESCE(_payload->'revisao'->'dicas', _payload->'revisao'->'perguntas_chave', '[]'::jsonb)
    );
  END IF;

  -- Marca draft como aprovado
  UPDATE public.lesson_drafts
     SET status='approved', reviewed_by=auth.uid(), reviewed_at=now()
   WHERE id = _draft_id;

  RETURN _lesson_id;
END;
$function$;