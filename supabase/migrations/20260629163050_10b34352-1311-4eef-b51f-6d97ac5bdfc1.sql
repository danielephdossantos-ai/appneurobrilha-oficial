
CREATE TABLE public.common_mistakes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo_bncc text NOT NULL,
  erro text NOT NULL,
  causas jsonb NOT NULL DEFAULT '[]'::jsonb,
  estrategias_correcao jsonb NOT NULL DEFAULT '[]'::jsonb,
  atividades_indicadas jsonb NOT NULL DEFAULT '[]'::jsonb,
  severidade text,
  ordem int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_common_mistakes_bncc ON public.common_mistakes(codigo_bncc);

GRANT SELECT ON public.common_mistakes TO anon, authenticated;
GRANT ALL ON public.common_mistakes TO service_role;

ALTER TABLE public.common_mistakes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Common mistakes readable by everyone"
  ON public.common_mistakes FOR SELECT USING (true);

CREATE POLICY "Admins manage common mistakes"
  ON public.common_mistakes FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER trg_common_mistakes_updated_at
  BEFORE UPDATE ON public.common_mistakes
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
