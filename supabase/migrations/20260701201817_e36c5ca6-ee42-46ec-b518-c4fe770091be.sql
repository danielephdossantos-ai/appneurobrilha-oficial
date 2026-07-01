-- Fila de missões que a criança tentou abrir e ainda não existem na biblioteca.
CREATE TABLE IF NOT EXISTS public.missoes_pendentes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo_bncc text NOT NULL UNIQUE,
  tentativas integer NOT NULL DEFAULT 0,
  primeira_tentativa_em timestamptz NOT NULL DEFAULT now(),
  ultima_tentativa_em timestamptz NOT NULL DEFAULT now(),
  ultima_crianca uuid NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE ON public.missoes_pendentes TO authenticated;
GRANT ALL ON public.missoes_pendentes TO service_role;

ALTER TABLE public.missoes_pendentes ENABLE ROW LEVEL SECURITY;

-- Somente admin lê a fila diretamente. Registro é via RPC SECURITY DEFINER.
DROP POLICY IF EXISTS "admins leem missoes_pendentes" ON public.missoes_pendentes;
CREATE POLICY "admins leem missoes_pendentes"
  ON public.missoes_pendentes
  FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE INDEX IF NOT EXISTS idx_missoes_pendentes_ultima
  ON public.missoes_pendentes (ultima_tentativa_em DESC);

-- RPC: registra tentativa de abrir missão inexistente (upsert atômico).
CREATE OR REPLACE FUNCTION public.registrar_missao_pendente(
  _codigo_bncc text,
  _child_id uuid DEFAULT NULL
) RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF _codigo_bncc IS NULL OR btrim(_codigo_bncc) = '' THEN
    RETURN;
  END IF;

  INSERT INTO public.missoes_pendentes AS mp
    (codigo_bncc, tentativas, primeira_tentativa_em, ultima_tentativa_em, ultima_crianca)
  VALUES
    (upper(btrim(_codigo_bncc)), 1, now(), now(), _child_id)
  ON CONFLICT (codigo_bncc) DO UPDATE
    SET tentativas = mp.tentativas + 1,
        ultima_tentativa_em = now(),
        ultima_crianca = COALESCE(_child_id, mp.ultima_crianca),
        updated_at = now();
END;
$$;

REVOKE ALL ON FUNCTION public.registrar_missao_pendente(text, uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.registrar_missao_pendente(text, uuid) TO authenticated;

-- Trigger updated_at
CREATE OR REPLACE FUNCTION public.tg_missoes_pendentes_updated_at()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

DROP TRIGGER IF EXISTS trg_missoes_pendentes_updated_at ON public.missoes_pendentes;
CREATE TRIGGER trg_missoes_pendentes_updated_at
  BEFORE UPDATE ON public.missoes_pendentes
  FOR EACH ROW EXECUTE FUNCTION public.tg_missoes_pendentes_updated_at();