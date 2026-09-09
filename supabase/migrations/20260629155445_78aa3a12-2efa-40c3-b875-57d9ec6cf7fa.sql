
CREATE TABLE public.lesson_curiosities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id uuid REFERENCES public.lesson_content(id) ON DELETE CASCADE,
  codigo_bncc text NOT NULL,
  ordem int NOT NULL DEFAULT 0,
  titulo text NOT NULL DEFAULT '',
  conteudo text NOT NULL DEFAULT '',
  fonte text NOT NULL DEFAULT '',
  imagem_url text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_lesson_curiosities_bncc ON public.lesson_curiosities(codigo_bncc, ordem);
CREATE INDEX idx_lesson_curiosities_lesson ON public.lesson_curiosities(lesson_id);

GRANT SELECT ON public.lesson_curiosities TO anon, authenticated;
GRANT ALL ON public.lesson_curiosities TO service_role;

ALTER TABLE public.lesson_curiosities ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read lesson_curiosities"
  ON public.lesson_curiosities FOR SELECT USING (true);

CREATE POLICY "Admins manage lesson_curiosities"
  ON public.lesson_curiosities FOR ALL
  USING (public.has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER trg_lesson_curiosities_updated
  BEFORE UPDATE ON public.lesson_curiosities
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
