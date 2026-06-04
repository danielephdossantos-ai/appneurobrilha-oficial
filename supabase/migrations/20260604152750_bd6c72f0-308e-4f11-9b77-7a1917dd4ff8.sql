ALTER TABLE public.atividades 
ADD COLUMN alternativa_d TEXT,
ADD COLUMN ordem INTEGER DEFAULT 1,
ADD COLUMN explicacao_ativa TEXT;