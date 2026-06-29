
CREATE TABLE public.lesson_examples (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id uuid NOT NULL REFERENCES public.lesson_content(id) ON DELETE CASCADE,
  codigo_bncc text NOT NULL,
  ordem int NOT NULL DEFAULT 0,
  titulo text NOT NULL DEFAULT '',
  contexto text NOT NULL DEFAULT '',
  enunciado text NOT NULL,
  resolucao text NOT NULL DEFAULT '',
  resposta text NOT NULL DEFAULT '',
  explicacao text NOT NULL DEFAULT '',
  imagem text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX lesson_examples_lesson_idx ON public.lesson_examples (lesson_id, ordem);
CREATE INDEX lesson_examples_bncc_idx ON public.lesson_examples (codigo_bncc);

GRANT SELECT ON public.lesson_examples TO authenticated, anon;
GRANT ALL ON public.lesson_examples TO service_role;

ALTER TABLE public.lesson_examples ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read lesson examples"
  ON public.lesson_examples FOR SELECT
  USING (true);

CREATE POLICY "Admins manage lesson examples"
  ON public.lesson_examples FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER lesson_examples_updated_at
  BEFORE UPDATE ON public.lesson_examples
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
