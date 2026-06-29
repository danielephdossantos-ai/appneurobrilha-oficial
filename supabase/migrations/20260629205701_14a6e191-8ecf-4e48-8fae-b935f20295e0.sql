
-- 1. Tabela de staging de aulas geradas pela IA (aguardando curadoria)
CREATE TABLE public.lesson_drafts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo_bncc text NOT NULL,
  ano text,
  disciplina text,
  titulo text,
  payload jsonb NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
  model text,
  tokens_used integer DEFAULT 0,
  generated_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  reviewed_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  notes text,
  created_at timestamptz NOT NULL DEFAULT now(),
  reviewed_at timestamptz,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_lesson_drafts_status ON public.lesson_drafts(status);
CREATE INDEX idx_lesson_drafts_codigo ON public.lesson_drafts(codigo_bncc);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.lesson_drafts TO authenticated;
GRANT ALL ON public.lesson_drafts TO service_role;

ALTER TABLE public.lesson_drafts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "admin_read_drafts" ON public.lesson_drafts
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "admin_write_drafts" ON public.lesson_drafts
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER trg_lesson_drafts_updated_at
  BEFORE UPDATE ON public.lesson_drafts
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


-- 2. RPC: aprova draft e publica em lesson_content + filhas (transação atômica)
CREATE OR REPLACE FUNCTION public.approve_lesson_draft(_draft_id uuid)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _draft public.lesson_drafts;
  _payload jsonb;
  _lesson_id uuid;
  _item jsonb;
  _idx int;
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'FORBIDDEN';
  END IF;

  SELECT * INTO _draft FROM public.lesson_drafts WHERE id = _draft_id;
  IF _draft.id IS NULL THEN RAISE EXCEPTION 'DRAFT_NOT_FOUND'; END IF;
  IF _draft.status <> 'pending' THEN RAISE EXCEPTION 'ALREADY_REVIEWED'; END IF;

  _payload := _draft.payload;

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
    contextualizacao, resumo, palavras_chave, atividade_guiada, atividade_pratica,
    desafio, quiz, respostas, tempo_estimado
  ) VALUES (
    _draft.codigo_bncc,
    _draft.ano,
    _draft.disciplina,
    COALESCE(_payload->>'titulo', _draft.titulo),
    _payload->>'objetivo',
    _payload->>'introducao',
    _payload->>'explicacao',
    _payload->>'contextualizacao',
    _payload->>'resumo',
    COALESCE(_payload->'palavras_chave', '[]'::jsonb),
    COALESCE(_payload->'atividade_guiada', '[]'::jsonb),
    COALESCE(_payload->'atividade_pratica', '[]'::jsonb),
    COALESCE(_payload->'desafio_resumo', '{}'::jsonb),
    COALESCE(_payload->'quiz_resumo', '[]'::jsonb),
    COALESCE(_payload->'respostas', '[]'::jsonb),
    COALESCE((_payload->>'tempo_estimado')::int, 20)
  ) RETURNING id INTO _lesson_id;

  -- Exemplos
  _idx := 0;
  FOR _item IN SELECT * FROM jsonb_array_elements(COALESCE(_payload->'exemplos','[]'::jsonb)) LOOP
    _idx := _idx + 1;
    INSERT INTO public.lesson_examples (
      lesson_id, codigo_bncc, ordem, titulo, contexto, enunciado, resolucao, resposta, explicacao
    ) VALUES (
      _lesson_id, _draft.codigo_bncc, _idx,
      _item->>'titulo', _item->>'contexto', _item->>'enunciado',
      _item->>'resolucao', _item->>'resposta', _item->>'explicacao'
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
      _item->>'titulo', _item->>'conteudo', _item->>'fonte'
    );
  END LOOP;

  -- Quiz (uma linha agregando as questões)
  IF _payload ? 'quiz' THEN
    INSERT INTO public.lesson_quizzes (codigo_bncc, titulo, descricao, questoes)
    VALUES (
      _draft.codigo_bncc,
      _payload->'quiz'->>'titulo',
      _payload->'quiz'->>'descricao',
      COALESCE(_payload->'quiz'->'questoes', '[]'::jsonb)
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
      _item->>'titulo', _item->>'objetivo', _item->>'descricao',
      _item->>'resposta', _item->>'explicacao',
      COALESCE((_item->>'pontuacao')::int, 10),
      COALESCE(_item->>'nivel', 'medio')
    );
  END LOOP;

  -- Avaliação
  IF _payload ? 'avaliacao' THEN
    INSERT INTO public.lesson_assessments (
      lesson_id, codigo_bncc, tipo, titulo, descricao, questoes
    ) VALUES (
      _lesson_id, _draft.codigo_bncc,
      COALESCE(_payload->'avaliacao'->>'tipo', 'formativa'),
      _payload->'avaliacao'->>'titulo',
      _payload->'avaliacao'->>'descricao',
      COALESCE(_payload->'avaliacao'->'questoes', '[]'::jsonb)
    );
  END IF;

  -- Adaptações por neuroperfil
  FOR _item IN SELECT * FROM jsonb_array_elements(COALESCE(_payload->'adaptacoes','[]'::jsonb)) LOOP
    INSERT INTO public.lesson_adaptations (
      lesson_id, codigo_bncc, perfil, objetivo, estrategias, recursos,
      ajustes_atividade, orientacoes_familia, observacoes
    ) VALUES (
      _lesson_id, _draft.codigo_bncc,
      COALESCE(_item->>'perfil','tdah'),
      _item->>'objetivo',
      COALESCE(_item->'estrategias','[]'::jsonb),
      COALESCE(_item->'recursos','[]'::jsonb),
      COALESCE(_item->'ajustes_atividade','[]'::jsonb),
      _item->>'orientacoes_familia',
      _item->>'observacoes'
    );
  END LOOP;

  -- Explicações em níveis
  _idx := 0;
  FOR _item IN SELECT * FROM jsonb_array_elements(COALESCE(_payload->'explicacoes_extra','[]'::jsonb)) LOOP
    _idx := _idx + 1;
    INSERT INTO public.lesson_explanations (
      lesson_id, codigo_bncc, titulo, conteudo, ordem
    ) VALUES (
      _lesson_id, _draft.codigo_bncc,
      _item->>'titulo', _item->>'conteudo', _idx
    );
  END LOOP;

  -- Revisão completa
  IF _payload ? 'revisao' THEN
    INSERT INTO public.lesson_reviews_full (
      lesson_id, codigo_bncc, resumo_curto, resumo_completo, mapa_mental,
      palavras_chave, erros_comuns, dicas
    ) VALUES (
      _lesson_id, _draft.codigo_bncc,
      _payload->'revisao'->>'resumo_curto',
      _payload->'revisao'->>'resumo_completo',
      COALESCE(_payload->'revisao'->'mapa_mental', '{}'::jsonb),
      CASE
        WHEN jsonb_typeof(_payload->'revisao'->'palavras_chave')='array'
        THEN ARRAY(SELECT jsonb_array_elements_text(_payload->'revisao'->'palavras_chave'))
        ELSE ARRAY[]::text[]
      END,
      COALESCE(_payload->'revisao'->'erros_comuns', '[]'::jsonb),
      COALESCE(_payload->'revisao'->'dicas', '[]'::jsonb)
    );
  END IF;

  -- Marca draft como aprovado
  UPDATE public.lesson_drafts
     SET status='approved', reviewed_by=auth.uid(), reviewed_at=now()
   WHERE id = _draft_id;

  RETURN _lesson_id;
END;
$$;

REVOKE ALL ON FUNCTION public.approve_lesson_draft(uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.approve_lesson_draft(uuid) TO authenticated;
