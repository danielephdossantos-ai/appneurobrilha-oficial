
CREATE TABLE IF NOT EXISTS public.rb_orientacoes_familia (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  habilidade_id UUID NOT NULL UNIQUE REFERENCES public.rb_habilidades(id) ON DELETE CASCADE,
  como_ajudar TEXT,
  materiais JSONB NOT NULL DEFAULT '[]'::jsonb,
  erros_comuns JSONB NOT NULL DEFAULT '[]'::jsonb,
  dicas_praticas JSONB NOT NULL DEFAULT '[]'::jsonb,
  tempo_recomendado TEXT,
  sinais_progresso JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.rb_orientacoes_familia TO anon, authenticated;
GRANT ALL ON public.rb_orientacoes_familia TO service_role;

ALTER TABLE public.rb_orientacoes_familia ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Orientações são públicas para leitura"
  ON public.rb_orientacoes_familia FOR SELECT
  USING (true);

CREATE INDEX IF NOT EXISTS idx_rb_orientacoes_habilidade ON public.rb_orientacoes_familia(habilidade_id);

CREATE TRIGGER rb_orientacoes_set_updated_at
  BEFORE UPDATE ON public.rb_orientacoes_familia
  FOR EACH ROW EXECUTE FUNCTION public.rb_set_updated_at();
