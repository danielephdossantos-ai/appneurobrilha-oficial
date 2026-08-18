
ALTER TABLE public.rb_aulas ADD COLUMN IF NOT EXISTS usage_count integer DEFAULT 0;
ALTER TABLE public.rb_aulas ADD COLUMN IF NOT EXISTS faixa_etaria text;
