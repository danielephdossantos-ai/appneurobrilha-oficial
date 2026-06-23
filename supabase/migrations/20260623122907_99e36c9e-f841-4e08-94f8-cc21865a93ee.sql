
CREATE TABLE public.rb_planos_semanais (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  area TEXT NOT NULL,
  titulo TEXT NOT NULL,
  semanas JSONB NOT NULL DEFAULT '[]'::jsonb,
  semana_atual INTEGER NOT NULL DEFAULT 1,
  semanas_concluidas JSONB NOT NULL DEFAULT '[]'::jsonb,
  progresso INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'ativo',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.rb_planos_semanais TO authenticated;
GRANT ALL ON public.rb_planos_semanais TO service_role;

ALTER TABLE public.rb_planos_semanais ENABLE ROW LEVEL SECURITY;

CREATE POLICY "rb_planos_semanais owner" ON public.rb_planos_semanais
  FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE INDEX idx_rb_planos_semanais_user ON public.rb_planos_semanais(user_id, area);

CREATE TRIGGER trg_rb_planos_semanais_updated
  BEFORE UPDATE ON public.rb_planos_semanais
  FOR EACH ROW EXECUTE FUNCTION public.rb_set_updated_at();
