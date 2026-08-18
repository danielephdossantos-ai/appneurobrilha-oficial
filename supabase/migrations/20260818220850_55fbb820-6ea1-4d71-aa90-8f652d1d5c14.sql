-- Biblioteca única das aulas geradas pelo Professor Mentor.
-- A aula canônica fica em rb_aulas + rb_paginas_aula.
-- rb_aulas_geradas_ia é apenas o índice/cache da geração por IA.
ALTER TABLE public.rb_aulas_geradas_ia
  ADD COLUMN IF NOT EXISTS aula_id uuid REFERENCES public.rb_aulas(id) ON DELETE CASCADE,
  ADD COLUMN IF NOT EXISTS cache_key text,
  ADD COLUMN IF NOT EXISTS modulo text,
  ADD COLUMN IF NOT EXISTS tema text,
  ADD COLUMN IF NOT EXISTS materia text,
  ADD COLUMN IF NOT EXISTS idade integer,
  ADD COLUMN IF NOT EXISTS serie text,
  ADD COLUMN IF NOT EXISTS usage_count integer NOT NULL DEFAULT 1;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_indexes WHERE indexname = 'rb_aulas_geradas_ia_cache_key_uq') THEN
        CREATE UNIQUE INDEX rb_aulas_geradas_ia_cache_key_uq
          ON public.rb_aulas_geradas_ia(cache_key)
          WHERE cache_key IS NOT NULL;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_indexes WHERE indexname = 'rb_aulas_geradas_ia_aula_idx') THEN
        CREATE INDEX rb_aulas_geradas_ia_aula_idx
          ON public.rb_aulas_geradas_ia(aula_id);
    END IF;
END $$;
