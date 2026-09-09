
CREATE TABLE IF NOT EXISTS public.lesson_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  codigo_bncc TEXT NOT NULL UNIQUE,
  ano TEXT NOT NULL,
  disciplina TEXT NOT NULL,
  titulo TEXT NOT NULL,
  objetivo TEXT NOT NULL,
  introducao TEXT NOT NULL,
  explicacao TEXT NOT NULL,
  contexto TEXT NOT NULL,
  exemplo1 TEXT NOT NULL,
  exemplo2 TEXT NOT NULL,
  analogia TEXT NOT NULL,
  passo_a_passo JSONB NOT NULL,
  curiosidade TEXT NOT NULL,
  erro_comum TEXT NOT NULL,
  atividade_guiada JSONB NOT NULL,
  atividade_pratica JSONB NOT NULL,
  desafio JSONB NOT NULL,
  quiz JSONB NOT NULL,
  respostas JSONB NOT NULL,
  resumo TEXT NOT NULL,
  revisao TEXT NOT NULL,
  palavras_importantes JSONB NOT NULL,
  nivel TEXT NOT NULL,
  tempo_estimado INTEGER NOT NULL,
  materiais JSONB NOT NULL,
  video_url TEXT NOT NULL,
  imagem_url TEXT NOT NULL,
  tags JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS lesson_content_codigo_bncc_idx ON public.lesson_content (codigo_bncc);
CREATE INDEX IF NOT EXISTS lesson_content_ano_idx ON public.lesson_content (ano);
CREATE INDEX IF NOT EXISTS lesson_content_disciplina_idx ON public.lesson_content (disciplina);

GRANT SELECT ON public.lesson_content TO authenticated;
GRANT ALL ON public.lesson_content TO service_role;

ALTER TABLE public.lesson_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read lessons"
  ON public.lesson_content FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Admins can insert lessons"
  ON public.lesson_content FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update lessons"
  ON public.lesson_content FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete lessons"
  ON public.lesson_content FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER update_lesson_content_updated_at
  BEFORE UPDATE ON public.lesson_content
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
