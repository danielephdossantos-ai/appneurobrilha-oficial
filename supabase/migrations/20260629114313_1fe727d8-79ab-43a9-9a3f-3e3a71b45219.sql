
CREATE TABLE public.bncc_areas (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  codigo TEXT NOT NULL UNIQUE,
  nome TEXT NOT NULL,
  descricao TEXT,
  ordem INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.bncc_areas TO anon, authenticated;
GRANT ALL ON public.bncc_areas TO service_role;
ALTER TABLE public.bncc_areas ENABLE ROW LEVEL SECURITY;
CREATE POLICY "BNCC areas readable" ON public.bncc_areas FOR SELECT USING (true);
CREATE POLICY "Admins manage bncc_areas" ON public.bncc_areas FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

CREATE TABLE public.bncc_componentes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  codigo TEXT NOT NULL UNIQUE,
  area_codigo TEXT REFERENCES public.bncc_areas(codigo) ON DELETE SET NULL,
  nome TEXT NOT NULL,
  descricao TEXT,
  ordem INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.bncc_componentes TO anon, authenticated;
GRANT ALL ON public.bncc_componentes TO service_role;
ALTER TABLE public.bncc_componentes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "BNCC componentes readable" ON public.bncc_componentes FOR SELECT USING (true);
CREATE POLICY "Admins manage bncc_componentes" ON public.bncc_componentes FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

CREATE TABLE public.bncc_anos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  codigo TEXT NOT NULL UNIQUE,
  nome TEXT NOT NULL,
  etapa TEXT,
  ordem INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.bncc_anos TO anon, authenticated;
GRANT ALL ON public.bncc_anos TO service_role;
ALTER TABLE public.bncc_anos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "BNCC anos readable" ON public.bncc_anos FOR SELECT USING (true);
CREATE POLICY "Admins manage bncc_anos" ON public.bncc_anos FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

CREATE TABLE public.lesson_library (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  codigo_bncc TEXT NOT NULL REFERENCES public.bncc_habilidades(codigo_bncc) ON DELETE CASCADE,
  titulo TEXT NOT NULL,
  subtitulo TEXT,
  resumo TEXT,
  area_codigo TEXT REFERENCES public.bncc_areas(codigo) ON DELETE SET NULL,
  componente_codigo TEXT REFERENCES public.bncc_componentes(codigo) ON DELETE SET NULL,
  ano_codigo TEXT REFERENCES public.bncc_anos(codigo) ON DELETE SET NULL,
  status TEXT NOT NULL DEFAULT 'publicada' CHECK (status IN ('rascunho','publicada','arquivada')),
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_lesson_library_bncc ON public.lesson_library(codigo_bncc);
GRANT SELECT ON public.lesson_library TO anon, authenticated;
GRANT ALL ON public.lesson_library TO service_role;
ALTER TABLE public.lesson_library ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Lesson library readable" ON public.lesson_library FOR SELECT USING (true);
CREATE POLICY "Admins manage lesson_library" ON public.lesson_library FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

CREATE TABLE public.lesson_sections (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  codigo_bncc TEXT NOT NULL REFERENCES public.bncc_habilidades(codigo_bncc) ON DELETE CASCADE,
  tipo TEXT NOT NULL,
  ordem INTEGER NOT NULL DEFAULT 0,
  titulo TEXT,
  conteudo TEXT NOT NULL,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_lesson_sections_bncc ON public.lesson_sections(codigo_bncc, ordem);
GRANT SELECT ON public.lesson_sections TO anon, authenticated;
GRANT ALL ON public.lesson_sections TO service_role;
ALTER TABLE public.lesson_sections ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Lesson sections readable" ON public.lesson_sections FOR SELECT USING (true);
CREATE POLICY "Admins manage lesson_sections" ON public.lesson_sections FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

CREATE TABLE public.lesson_activities (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  codigo_bncc TEXT NOT NULL REFERENCES public.bncc_habilidades(codigo_bncc) ON DELETE CASCADE,
  tipo TEXT NOT NULL CHECK (tipo IN ('guiada','pratica','desafio')),
  ordem INTEGER NOT NULL DEFAULT 0,
  enunciado TEXT NOT NULL,
  instrucao TEXT,
  resposta TEXT,
  dica TEXT,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_lesson_activities_bncc ON public.lesson_activities(codigo_bncc, tipo, ordem);
GRANT SELECT ON public.lesson_activities TO anon, authenticated;
GRANT ALL ON public.lesson_activities TO service_role;
ALTER TABLE public.lesson_activities ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Lesson activities readable" ON public.lesson_activities FOR SELECT USING (true);
CREATE POLICY "Admins manage lesson_activities" ON public.lesson_activities FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

CREATE TABLE public.lesson_reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  codigo_bncc TEXT NOT NULL REFERENCES public.bncc_habilidades(codigo_bncc) ON DELETE CASCADE,
  ordem INTEGER NOT NULL DEFAULT 0,
  titulo TEXT,
  conteudo TEXT NOT NULL,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_lesson_reviews_bncc ON public.lesson_reviews(codigo_bncc, ordem);
GRANT SELECT ON public.lesson_reviews TO anon, authenticated;
GRANT ALL ON public.lesson_reviews TO service_role;
ALTER TABLE public.lesson_reviews ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Lesson reviews readable" ON public.lesson_reviews FOR SELECT USING (true);
CREATE POLICY "Admins manage lesson_reviews" ON public.lesson_reviews FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

CREATE TABLE public.lesson_quizzes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  codigo_bncc TEXT NOT NULL REFERENCES public.bncc_habilidades(codigo_bncc) ON DELETE CASCADE,
  titulo TEXT,
  descricao TEXT,
  questoes JSONB NOT NULL DEFAULT '[]'::jsonb,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_lesson_quizzes_bncc ON public.lesson_quizzes(codigo_bncc);
GRANT SELECT ON public.lesson_quizzes TO anon, authenticated;
GRANT ALL ON public.lesson_quizzes TO service_role;
ALTER TABLE public.lesson_quizzes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Lesson quizzes readable" ON public.lesson_quizzes FOR SELECT USING (true);
CREATE POLICY "Admins manage lesson_quizzes" ON public.lesson_quizzes FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

CREATE TABLE public.lesson_progress (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  child_id UUID REFERENCES public.children(id) ON DELETE CASCADE,
  codigo_bncc TEXT NOT NULL REFERENCES public.bncc_habilidades(codigo_bncc) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'em_andamento' CHECK (status IN ('nao_iniciada','em_andamento','concluida')),
  passo_atual INTEGER NOT NULL DEFAULT 0,
  acertos INTEGER NOT NULL DEFAULT 0,
  erros INTEGER NOT NULL DEFAULT 0,
  pontuacao INTEGER NOT NULL DEFAULT 0,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  iniciada_em TIMESTAMPTZ NOT NULL DEFAULT now(),
  concluida_em TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, child_id, codigo_bncc)
);
CREATE INDEX idx_lesson_progress_user ON public.lesson_progress(user_id, codigo_bncc);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.lesson_progress TO authenticated;
GRANT ALL ON public.lesson_progress TO service_role;
ALTER TABLE public.lesson_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own lesson_progress" ON public.lesson_progress
  FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users insert own lesson_progress" ON public.lesson_progress
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users update own lesson_progress" ON public.lesson_progress
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users delete own lesson_progress" ON public.lesson_progress
  FOR DELETE TO authenticated USING (auth.uid() = user_id);

CREATE TABLE public.lesson_cache (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  codigo_bncc TEXT NOT NULL REFERENCES public.bncc_habilidades(codigo_bncc) ON DELETE CASCADE,
  cache_key TEXT NOT NULL,
  payload JSONB NOT NULL,
  expira_em TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (codigo_bncc, cache_key)
);
CREATE INDEX idx_lesson_cache_bncc ON public.lesson_cache(codigo_bncc);
GRANT ALL ON public.lesson_cache TO service_role;
ALTER TABLE public.lesson_cache ENABLE ROW LEVEL SECURITY;

CREATE TRIGGER trg_bncc_areas_updated BEFORE UPDATE ON public.bncc_areas FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER trg_bncc_componentes_updated BEFORE UPDATE ON public.bncc_componentes FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER trg_bncc_anos_updated BEFORE UPDATE ON public.bncc_anos FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER trg_lesson_library_updated BEFORE UPDATE ON public.lesson_library FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER trg_lesson_sections_updated BEFORE UPDATE ON public.lesson_sections FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER trg_lesson_activities_updated BEFORE UPDATE ON public.lesson_activities FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER trg_lesson_reviews_updated BEFORE UPDATE ON public.lesson_reviews FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER trg_lesson_quizzes_updated BEFORE UPDATE ON public.lesson_quizzes FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER trg_lesson_progress_updated BEFORE UPDATE ON public.lesson_progress FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER trg_lesson_cache_updated BEFORE UPDATE ON public.lesson_cache FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
