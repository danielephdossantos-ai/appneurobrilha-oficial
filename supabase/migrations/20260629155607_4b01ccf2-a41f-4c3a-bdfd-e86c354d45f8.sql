
CREATE TABLE public.lesson_challenges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id uuid REFERENCES public.lesson_content(id) ON DELETE CASCADE,
  codigo_bncc text NOT NULL,
  ordem int NOT NULL DEFAULT 0,
  titulo text NOT NULL DEFAULT '',
  objetivo text NOT NULL DEFAULT '',
  descricao text NOT NULL DEFAULT '',
  material text[] NOT NULL DEFAULT ARRAY[]::text[],
  resposta text NOT NULL DEFAULT '',
  explicacao text NOT NULL DEFAULT '',
  pontuacao int NOT NULL DEFAULT 0,
  nivel text NOT NULL DEFAULT 'medio',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_lesson_challenges_bncc ON public.lesson_challenges(codigo_bncc, ordem);
CREATE INDEX idx_lesson_challenges_lesson ON public.lesson_challenges(lesson_id);

GRANT SELECT ON public.lesson_challenges TO anon, authenticated;
GRANT ALL ON public.lesson_challenges TO service_role;

ALTER TABLE public.lesson_challenges ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read lesson_challenges"
  ON public.lesson_challenges FOR SELECT USING (true);

CREATE POLICY "Admins manage lesson_challenges"
  ON public.lesson_challenges FOR ALL
  USING (public.has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER trg_lesson_challenges_updated
  BEFORE UPDATE ON public.lesson_challenges
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
