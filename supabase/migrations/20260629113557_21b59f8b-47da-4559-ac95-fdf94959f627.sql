CREATE TABLE public.lesson_resources (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lesson_id UUID NOT NULL REFERENCES public.lesson_content(id) ON DELETE CASCADE,
  tipo TEXT NOT NULL CHECK (tipo IN ('imagem','video','audio','animacao','pdf','link')),
  titulo TEXT,
  descricao TEXT,
  url TEXT NOT NULL,
  mime_type TEXT,
  duracao_segundos INTEGER,
  tamanho_bytes BIGINT,
  thumbnail_url TEXT,
  ordem INTEGER NOT NULL DEFAULT 0,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_lesson_resources_lesson ON public.lesson_resources(lesson_id);
CREATE INDEX idx_lesson_resources_tipo ON public.lesson_resources(lesson_id, tipo, ordem);

GRANT SELECT ON public.lesson_resources TO anon, authenticated;
GRANT ALL ON public.lesson_resources TO service_role;

ALTER TABLE public.lesson_resources ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Lesson resources readable by everyone"
  ON public.lesson_resources FOR SELECT
  USING (true);

CREATE POLICY "Admins manage lesson resources"
  ON public.lesson_resources FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER update_lesson_resources_updated_at
  BEFORE UPDATE ON public.lesson_resources
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();