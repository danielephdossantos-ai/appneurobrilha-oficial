
-- 1. Novos campos de domínio na tabela escola_progresso
ALTER TABLE public.escola_progresso
  ADD COLUMN IF NOT EXISTS facilidade numeric(4,2) NOT NULL DEFAULT 0,       -- 0..100 (agilidade + acerto)
  ADD COLUMN IF NOT EXISTS dificuldades jsonb NOT NULL DEFAULT '[]'::jsonb,  -- lista de tags de dificuldade
  ADD COLUMN IF NOT EXISTS revisoes_realizadas integer NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS evolucao_delta integer NOT NULL DEFAULT 0,        -- variação vs sessão anterior
  ADD COLUMN IF NOT EXISTS historico_evolucao jsonb NOT NULL DEFAULT '[]'::jsonb, -- snapshots [{em,desempenho,tempo}]
  ADD COLUMN IF NOT EXISTS tempo_medio_segundos integer NOT NULL DEFAULT 0;

-- 2. registrar_conclusao_aula — versão ampliada
CREATE OR REPLACE FUNCTION public.registrar_conclusao_aula(
  _child_id uuid,
  _codigo_bncc text,
  _desempenho integer,
  _tipo text DEFAULT 'aula',
  _tempo_segundos integer DEFAULT 0,
  _acertos integer DEFAULT 0,
  _erros integer DEFAULT 0,
  _dificuldades jsonb DEFAULT '[]'::jsonb
)
RETURNS timestamptz
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _owner uuid;
  _prev  public.spaced_repetition_schedule;
  _novo_intervalo int;
  _ease numeric;
  _prox timestamptz;
  _consec int;
  _nivel public.mastery_level;
  _prog public.escola_progresso;
  _delta int := 0;
  _facilidade numeric(4,2);
  _tempo_alvo int;
  _bonus_tempo numeric;
  _hist jsonb;
  _dif jsonb;
  _rev_inc int := 0;
BEGIN
  SELECT user_id INTO _owner FROM public.children WHERE id = _child_id;
  IF _owner IS NULL OR _owner <> auth.uid() THEN
    RAISE EXCEPTION 'FORBIDDEN';
  END IF;

  _desempenho := GREATEST(0, LEAST(100, COALESCE(_desempenho, 0)));

  INSERT INTO public.escola_revisoes_historico (child_id, codigo_bncc, desempenho, tipo)
  VALUES (_child_id, _codigo_bncc, _desempenho, COALESCE(_tipo, 'aula'));

  SELECT * INTO _prog FROM public.escola_progresso
    WHERE child_id = _child_id AND codigo_bncc = _codigo_bncc;

  -- Evolução (delta vs último desempenho)
  _delta := _desempenho - COALESCE(_prog.percentual, 0);

  -- Sessões consecutivas com desempenho >= 85
  _consec := COALESCE(_prog.sessoes_dominadas_consecutivas, 0);
  IF _desempenho >= 85 THEN _consec := _consec + 1; ELSE _consec := 0; END IF;

  _nivel := public.calcular_nivel_dominio(_desempenho, _consec);

  -- Facilidade: 60% acerto + 40% agilidade (comparado a alvo de 30s por questão)
  _tempo_alvo := 30 * GREATEST(_acertos + _erros, 1);
  _bonus_tempo := CASE
    WHEN _tempo_segundos <= 0 THEN 0
    WHEN _tempo_segundos <= _tempo_alvo THEN 100
    ELSE GREATEST(0, 100 - ((_tempo_segundos - _tempo_alvo)::numeric / _tempo_alvo) * 100)
  END;
  _facilidade := ROUND((_desempenho * 0.6 + _bonus_tempo * 0.4)::numeric, 2);

  -- Snapshot de evolução (mantém últimos 20)
  _hist := COALESCE(_prog.historico_evolucao, '[]'::jsonb)
    || jsonb_build_array(jsonb_build_object(
         'em', now(),
         'desempenho', _desempenho,
         'tempo_segundos', _tempo_segundos,
         'acertos', _acertos,
         'erros', _erros,
         'nivel', _nivel::text,
         'tipo', COALESCE(_tipo, 'aula')
       ));
  IF jsonb_array_length(_hist) > 20 THEN
    _hist := (SELECT jsonb_agg(x) FROM (
      SELECT value AS x FROM jsonb_array_elements(_hist)
      OFFSET GREATEST(jsonb_array_length(_hist) - 20, 0)
    ) t);
  END IF;

  -- Dificuldades: agrega tags novas mantendo únicas
  IF jsonb_typeof(_dificuldades) = 'array' AND jsonb_array_length(_dificuldades) > 0 THEN
    _dif := (
      SELECT COALESCE(jsonb_agg(DISTINCT v), '[]'::jsonb)
      FROM (
        SELECT jsonb_array_elements_text(COALESCE(_prog.dificuldades, '[]'::jsonb)) AS v
        UNION
        SELECT jsonb_array_elements_text(_dificuldades) AS v
      ) s
    );
  ELSE
    _dif := COALESCE(_prog.dificuldades, '[]'::jsonb);
  END IF;

  IF COALESCE(_tipo, 'aula') = 'revisao' THEN _rev_inc := 1; END IF;

  INSERT INTO public.escola_progresso (
    child_id, codigo_bncc, concluida, concluida_em, ultima_visita_em,
    percentual, tentativas, acertos, erros,
    nivel_dominio, sessoes_dominadas_consecutivas,
    facilidade, dificuldades, revisoes_realizadas,
    evolucao_delta, historico_evolucao, tempo_medio_segundos,
    tempo_estudado_segundos
  ) VALUES (
    _child_id, _codigo_bncc, true, now(), now(),
    _desempenho, 1, COALESCE(_acertos,0), COALESCE(_erros,0),
    _nivel, _consec,
    _facilidade, _dif, _rev_inc,
    _delta, _hist, COALESCE(_tempo_segundos,0),
    COALESCE(_tempo_segundos,0)
  )
  ON CONFLICT (child_id, codigo_bncc) DO UPDATE SET
    concluida = true,
    concluida_em = COALESCE(public.escola_progresso.concluida_em, now()),
    ultima_visita_em = now(),
    percentual = _desempenho,
    tentativas = public.escola_progresso.tentativas + 1,
    acertos = public.escola_progresso.acertos + COALESCE(_acertos, 0),
    erros   = public.escola_progresso.erros   + COALESCE(_erros, 0),
    nivel_dominio = _nivel,
    sessoes_dominadas_consecutivas = _consec,
    facilidade = _facilidade,
    dificuldades = _dif,
    revisoes_realizadas = public.escola_progresso.revisoes_realizadas + _rev_inc,
    evolucao_delta = _delta,
    historico_evolucao = _hist,
    tempo_estudado_segundos = public.escola_progresso.tempo_estudado_segundos + COALESCE(_tempo_segundos, 0),
    tempo_medio_segundos = CASE
      WHEN public.escola_progresso.tentativas + 1 > 0
        THEN ((public.escola_progresso.tempo_estudado_segundos + COALESCE(_tempo_segundos,0))
              / (public.escola_progresso.tentativas + 1))
      ELSE COALESCE(_tempo_segundos,0)
    END,
    updated_at = now();

  -- Repetição espaçada (SM-2 simplificado)
  SELECT * INTO _prev FROM public.spaced_repetition_schedule
   WHERE child_id = _child_id AND skill_code = _codigo_bncc LIMIT 1;

  _ease := COALESCE(_prev.ease_factor, 2.5);
  IF _desempenho < 70 THEN
    _novo_intervalo := 1;
    _ease := GREATEST(1.3, _ease - 0.2);
  ELSIF _prev.id IS NULL THEN
    _novo_intervalo := 1;
  ELSE
    _novo_intervalo := CASE COALESCE(_prev.interval_days, 0)
      WHEN 0 THEN 1 WHEN 1 THEN 3 WHEN 3 THEN 7 WHEN 7 THEN 15 ELSE 30 END;
    _ease := LEAST(2.8, _ease + 0.05);
  END IF;

  _prox := now() + make_interval(days => _novo_intervalo);

  IF _prev.id IS NULL THEN
    INSERT INTO public.spaced_repetition_schedule
      (child_id, skill_code, next_review_at, interval_days, ease_factor, last_performance_score)
    VALUES (_child_id, _codigo_bncc, _prox, _novo_intervalo, _ease, _desempenho);
  ELSE
    UPDATE public.spaced_repetition_schedule
       SET next_review_at = _prox, interval_days = _novo_intervalo,
           ease_factor = _ease, last_performance_score = _desempenho, updated_at = now()
     WHERE id = _prev.id;
  END IF;

  RETURN _prox;
END;
$$;

-- 3. dominio_habilidade — retrato completo
CREATE OR REPLACE FUNCTION public.dominio_habilidade(_child_id uuid, _codigo_bncc text)
RETURNS jsonb
LANGUAGE plpgsql STABLE SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _owner uuid;
  _p public.escola_progresso;
  _s public.spaced_repetition_schedule;
BEGIN
  SELECT user_id INTO _owner FROM public.children WHERE id = _child_id;
  IF _owner IS NULL OR _owner <> auth.uid() THEN RAISE EXCEPTION 'FORBIDDEN'; END IF;

  SELECT * INTO _p FROM public.escola_progresso
    WHERE child_id = _child_id AND codigo_bncc = _codigo_bncc;

  SELECT * INTO _s FROM public.spaced_repetition_schedule
    WHERE child_id = _child_id AND skill_code = _codigo_bncc;

  RETURN jsonb_build_object(
    'codigo_bncc', _codigo_bncc,
    'nivel_dominio', COALESCE(_p.nivel_dominio::text, 'nao_iniciada'),
    'percentual', COALESCE(_p.percentual, 0),
    'facilidade', COALESCE(_p.facilidade, 0),
    'dificuldades', COALESCE(_p.dificuldades, '[]'::jsonb),
    'tentativas', COALESCE(_p.tentativas, 0),
    'acertos', COALESCE(_p.acertos, 0),
    'erros', COALESCE(_p.erros, 0),
    'tempo_total_segundos', COALESCE(_p.tempo_estudado_segundos, 0),
    'tempo_medio_segundos', COALESCE(_p.tempo_medio_segundos, 0),
    'revisoes_realizadas', COALESCE(_p.revisoes_realizadas, 0),
    'sessoes_dominadas_consecutivas', COALESCE(_p.sessoes_dominadas_consecutivas, 0),
    'evolucao_delta', COALESCE(_p.evolucao_delta, 0),
    'historico_evolucao', COALESCE(_p.historico_evolucao, '[]'::jsonb),
    'proxima_revisao', _s.next_review_at,
    'pode_avancar', COALESCE(_p.nivel_dominio, 'nao_iniciada'::mastery_level)
                    IN ('parcialmente_dominada','dominada')
  );
END;
$$;

-- 4. recomendar_revisoes_auto — gatilhos automáticos
CREATE OR REPLACE FUNCTION public.recomendar_revisoes_auto(_child_id uuid)
RETURNS TABLE(
  codigo_bncc text,
  motivo text,
  prioridade int,
  ultimo_desempenho int,
  evolucao_delta int,
  proxima_revisao timestamptz
)
LANGUAGE plpgsql STABLE SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _owner uuid;
BEGIN
  SELECT user_id INTO _owner FROM public.children WHERE id = _child_id;
  IF _owner IS NULL OR _owner <> auth.uid() THEN RAISE EXCEPTION 'FORBIDDEN'; END IF;

  RETURN QUERY
  SELECT p.codigo_bncc,
         CASE
           WHEN p.evolucao_delta <= -15 THEN 'desempenho_caiu'
           WHEN p.nivel_dominio = 'em_aprendizagem' AND p.tentativas >= 3 THEN 'muitas_tentativas'
           WHEN p.facilidade < 40 AND p.tentativas >= 2 THEN 'baixa_facilidade'
           WHEN s.next_review_at IS NOT NULL AND s.next_review_at <= now() THEN 'data_programada'
           ELSE 'ok'
         END AS motivo,
         CASE
           WHEN p.evolucao_delta <= -15 THEN 1
           WHEN p.facilidade < 40 AND p.tentativas >= 2 THEN 2
           WHEN p.nivel_dominio = 'em_aprendizagem' AND p.tentativas >= 3 THEN 3
           WHEN s.next_review_at IS NOT NULL AND s.next_review_at <= now() THEN 4
           ELSE 9
         END AS prioridade,
         p.percentual, p.evolucao_delta, s.next_review_at
    FROM public.escola_progresso p
    LEFT JOIN public.spaced_repetition_schedule s
      ON s.child_id = p.child_id AND s.skill_code = p.codigo_bncc
   WHERE p.child_id = _child_id
     AND (
       p.evolucao_delta <= -15
       OR (p.nivel_dominio = 'em_aprendizagem' AND p.tentativas >= 3)
       OR (p.facilidade < 40 AND p.tentativas >= 2)
       OR (s.next_review_at IS NOT NULL AND s.next_review_at <= now())
     )
   ORDER BY prioridade ASC, s.next_review_at NULLS LAST;
END;
$$;
