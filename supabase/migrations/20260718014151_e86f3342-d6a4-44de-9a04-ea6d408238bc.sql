ALTER TABLE public.missao_familia_registros
  ADD COLUMN IF NOT EXISTS tipo text NOT NULL DEFAULT 'foto'
    CHECK (tipo IN ('foto','audio'));