
-- 1) Enum de níveis de domínio da habilidade BNCC
DO $$ BEGIN
  CREATE TYPE public.mastery_level AS ENUM (
    'nao_iniciada',
    'em_aprendizagem',
    'parcialmente_dominada',
    'dominada'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- 2) Coluna de nível de domínio na tabela de progresso
ALTER TABLE public.escola_progresso
  ADD COLUMN IF NOT EXISTS nivel_dominio public.mastery_level NOT NULL DEFAULT 'nao_iniciada',
  ADD COLUMN IF NOT EXISTS sessoes_dominadas_consecutivas integer NOT NULL DEFAULT 0;

-- 3) Função que calcula o nível de domínio a partir do desempenho da rodada
CREATE OR REPLACE FUNCTION public.calcular_nivel_dominio(
  _desempenho integer,
  _sessoes_consec integer
) RETURNS public.mastery_level
LANGUAGE sql IMMUTABLE
AS $$
  SELECT CASE
    WHEN _desempenho IS NULL THEN 'nao_iniciada'::public.mastery_level
    WHEN _desempenho >= 85 AND _sessoes_consec >= 2 THEN 'dominada'::public.mastery_level
    WHEN _desempenho >= 70 THEN 'parcialmente_dominada'::public.mastery_level
    ELSE 'em_aprendizagem'::public.mastery_level
  END;
$$;

-- 4) registrar_conclusao_aula agora também atualiza nivel_dominio
CREATE OR REPLACE FUNCTION public.registrar_conclusao_aula(
  _child_id uuid,
  _codigo_bncc text,
  _desempenho integer,
  _tipo text DEFAULT 'aula'
) RETURNS timestamptz
LANGUAGE plpgsql SECURITY DEFINER
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
BEGIN
  SELECT user_id INTO _owner FROM public.children WHERE id = _child_id;
  IF _owner IS NULL OR _owner <> auth.uid() THEN
    RAISE EXCEPTION 'FORBIDDEN';
  END IF;

  _desempenho := GREATEST(0, LEAST(100, COALESCE(_desempenho, 0)));

  INSERT INTO public.escola_revisoes_historico (child_id, codigo_bncc, desempenho, tipo)
  VALUES (_child_id, _codigo_bncc, _desempenho, COALESCE(_tipo, 'aula'));

  -- Sessões consecutivas com desempenho >= 85
  SELECT COALESCE(sessoes_dominadas_consecutivas, 0)
    INTO _consec
    FROM public.escola_progresso
   WHERE child_id = _child_id AND codigo_bncc = _codigo_bncc;
  _consec := COALESCE(_consec, 0);
  IF _desempenho >= 85 THEN
    _consec := _consec + 1;
  ELSE
    _consec := 0;
  END IF;

  _nivel := public.calcular_nivel_dominio(_desempenho, _consec);

  UPDATE public.escola_progresso
     SET concluida = true,
         concluida_em = COALESCE(concluida_em, now()),
         ultima_visita_em = now(),
         percentual = GREATEST(COALESCE(percentual,0), _desempenho),
         nivel_dominio = GREATEST(nivel_dominio::text, _nivel::text)::public.mastery_level,
         sessoes_dominadas_consecutivas = _consec,
         updated_at = now()
   WHERE child_id = _child_id AND codigo_bncc = _codigo_bncc;

  -- Repetição espaçada (SM-2 simplificado)
  SELECT * INTO _prev FROM public.spaced_repetition_schedule
   WHERE child_id = _child_id AND skill_code = _codigo_bncc
   LIMIT 1;

  _ease := COALESCE(_prev.ease_factor, 2.5);
  IF _desempenho < 70 THEN
    _novo_intervalo := 1;
    _ease := GREATEST(1.3, _ease - 0.2);
  ELSIF _prev.id IS NULL THEN
    _novo_intervalo := 1;
  ELSE
    _novo_intervalo := CASE COALESCE(_prev.interval_days, 0)
      WHEN 0 THEN 1
      WHEN 1 THEN 3
      WHEN 3 THEN 7
      WHEN 7 THEN 15
      ELSE 30
    END;
    _ease := LEAST(2.8, _ease + 0.05);
  END IF;

  _prox := now() + make_interval(days => _novo_intervalo);

  IF _prev.id IS NULL THEN
    INSERT INTO public.spaced_repetition_schedule
      (child_id, skill_code, next_review_at, interval_days, ease_factor, last_performance_score)
    VALUES (_child_id, _codigo_bncc, _prox, _novo_intervalo, _ease, _desempenho);
  ELSE
    UPDATE public.spaced_repetition_schedule
       SET next_review_at = _prox,
           interval_days = _novo_intervalo,
           ease_factor = _ease,
           last_performance_score = _desempenho,
           updated_at = now()
     WHERE id = _prev.id;
  END IF;

  RETURN _prox;
END;
$$;

-- 5) Gate de avanço: só libera próxima habilidade se a atual está pelo menos parcialmente dominada
CREATE OR REPLACE FUNCTION public.pode_avancar_habilidade(
  _child_id uuid,
  _codigo_bncc text
) RETURNS boolean
LANGUAGE plpgsql STABLE SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _owner uuid;
  _nivel public.mastery_level;
BEGIN
  SELECT user_id INTO _owner FROM public.children WHERE id = _child_id;
  IF _owner IS NULL OR _owner <> auth.uid() THEN RAISE EXCEPTION 'FORBIDDEN'; END IF;

  SELECT nivel_dominio INTO _nivel
    FROM public.escola_progresso
   WHERE child_id = _child_id AND codigo_bncc = _codigo_bncc
   LIMIT 1;

  RETURN COALESCE(_nivel, 'nao_iniciada'::public.mastery_level)
         IN ('parcialmente_dominada', 'dominada');
END;
$$;
