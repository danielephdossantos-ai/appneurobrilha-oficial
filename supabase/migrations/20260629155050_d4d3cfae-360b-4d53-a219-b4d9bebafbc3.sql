
CREATE TYPE public.nivel_pedagogico AS ENUM (
  'muito_facil','facil','medio','dificil','avancado'
);

ALTER TABLE public.exercises
  ADD COLUMN IF NOT EXISTS nivel_pedagogico public.nivel_pedagogico
    NOT NULL DEFAULT 'medio';

CREATE INDEX IF NOT EXISTS exercises_nivel_pedagogico_idx
  ON public.exercises(nivel_pedagogico);

CREATE INDEX IF NOT EXISTS exercises_bncc_nivel_idx
  ON public.exercises(codigo_bncc, nivel_pedagogico);
