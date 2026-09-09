
CREATE TABLE public.lesson_reviews_full (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id uuid REFERENCES public.lesson_content(id) ON DELETE CASCADE,
  codigo_bncc text NOT NULL,
  resumo_curto text NOT NULL DEFAULT '',
  resumo_completo text NOT NULL DEFAULT '',
  mapa_mental jsonb NOT NULL DEFAULT '{}'::jsonb,
  palavras_chave text[] NOT NULL DEFAULT ARRAY[]::text[],
  erros_comuns jsonb NOT NULL DEFAULT '[]'::jsonb,
  dicas jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_lesson_reviews_full_bncc ON public.lesson_reviews_full(codigo_bncc);
CREATE INDEX idx_lesson_reviews_full_lesson ON public.lesson_reviews_full(lesson_id);

GRANT SELECT ON public.lesson_reviews_full TO anon, authenticated;
GRANT ALL ON public.lesson_reviews_full TO service_role;

ALTER TABLE public.lesson_reviews_full ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read lesson_reviews_full"
  ON public.lesson_reviews_full FOR SELECT
  USING (true);

CREATE POLICY "Admins manage lesson_reviews_full"
  ON public.lesson_reviews_full FOR ALL
  USING (public.has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER trg_lesson_reviews_full_updated
  BEFORE UPDATE ON public.lesson_reviews_full
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
