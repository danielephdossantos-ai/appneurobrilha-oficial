
ALTER TABLE public.rb_habilidades
  ADD COLUMN IF NOT EXISTS o_que_e TEXT,
  ADD COLUMN IF NOT EXISTS por_que_importante TEXT,
  ADD COLUMN IF NOT EXISTS como_identificar TEXT,
  ADD COLUMN IF NOT EXISTS como_ensinar TEXT,
  ADD COLUMN IF NOT EXISTS exemplos_praticos TEXT,
  ADD COLUMN IF NOT EXISTS atividades_recomendadas TEXT,
  ADD COLUMN IF NOT EXISTS dicas_familia TEXT,
  ADD COLUMN IF NOT EXISTS dicas_professores TEXT,
  ADD COLUMN IF NOT EXISTS como_avaliar_evolucao TEXT,
  ADD COLUMN IF NOT EXISTS proximo_passo TEXT;
