
CREATE TABLE public.professor_brilha_conversas (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  curso_slug TEXT NOT NULL,
  aula_slug TEXT NOT NULL,
  disciplina TEXT,
  serie TEXT,
  mensagens JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (user_id, curso_slug, aula_slug)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.professor_brilha_conversas TO authenticated;
GRANT ALL ON public.professor_brilha_conversas TO service_role;

ALTER TABLE public.professor_brilha_conversas ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuário lê suas próprias conversas com Professor Brilha"
  ON public.professor_brilha_conversas FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Usuário cria suas próprias conversas com Professor Brilha"
  ON public.professor_brilha_conversas FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Usuário atualiza suas próprias conversas com Professor Brilha"
  ON public.professor_brilha_conversas FOR UPDATE
  TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Usuário apaga suas próprias conversas com Professor Brilha"
  ON public.professor_brilha_conversas FOR DELETE
  TO authenticated USING (auth.uid() = user_id);

CREATE TRIGGER trg_prof_brilha_updated
  BEFORE UPDATE ON public.professor_brilha_conversas
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX idx_prof_brilha_user_aula ON public.professor_brilha_conversas (user_id, curso_slug, aula_slug);
