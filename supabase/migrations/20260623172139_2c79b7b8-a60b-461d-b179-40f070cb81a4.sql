ALTER TABLE public.rb_trabalhos
  ADD COLUMN IF NOT EXISTS concluido boolean NOT NULL DEFAULT false;