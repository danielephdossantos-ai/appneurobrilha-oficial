
CREATE TABLE IF NOT EXISTS public.rb_planos_intervencao (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  habilidade_id UUID NOT NULL REFERENCES public.rb_habilidades(id) ON DELETE CASCADE,
  dificuldade TEXT NOT NULL,
  objetivo TEXT,
  sequencia_aulas JSONB NOT NULL DEFAULT '[]'::jsonb,
  atividades_sugeridas JSONB NOT NULL DEFAULT '[]'::jsonb,
  tempo_estimado_min INTEGER NOT NULL DEFAULT 0,
  aulas_concluidas JSONB NOT NULL DEFAULT '[]'::jsonb,
  progresso INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'ativo',
  observacoes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.rb_planos_intervencao TO authenticated;
GRANT ALL ON public.rb_planos_intervencao TO service_role;

ALTER TABLE public.rb_planos_intervencao ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own planos"
  ON public.rb_planos_intervencao FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_rb_planos_user ON public.rb_planos_intervencao(user_id);
CREATE INDEX IF NOT EXISTS idx_rb_planos_habilidade ON public.rb_planos_intervencao(habilidade_id);

CREATE TRIGGER rb_planos_set_updated_at
  BEFORE UPDATE ON public.rb_planos_intervencao
  FOR EACH ROW EXECUTE FUNCTION public.rb_set_updated_at();
