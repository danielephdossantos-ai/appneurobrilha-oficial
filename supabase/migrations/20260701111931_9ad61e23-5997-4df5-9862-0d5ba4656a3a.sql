ALTER TABLE public.escola_progresso
  ADD COLUMN IF NOT EXISTS diagnostico_feito boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS diagnostico_acertos integer NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS diagnostico_total integer NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS diagnostico_resultado text CHECK (diagnostico_resultado IN ('dominio','revisao','parcial') OR diagnostico_resultado IS NULL),
  ADD COLUMN IF NOT EXISTS diagnostico_em timestamptz;