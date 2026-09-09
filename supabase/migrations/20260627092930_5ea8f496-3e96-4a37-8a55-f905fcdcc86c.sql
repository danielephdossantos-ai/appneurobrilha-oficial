
-- 1) Templates Pedagógicos (motor de ensino)
CREATE TABLE public.pedagogical_templates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  disciplina TEXT NOT NULL,
  serie TEXT,
  metodo TEXT NOT NULL,
  sequencia_didatica JSONB NOT NULL DEFAULT '[]'::jsonb,
  exemplos JSONB NOT NULL DEFAULT '[]'::jsonb,
  erros_comuns JSONB NOT NULL DEFAULT '[]'::jsonb,
  pratica_guiada JSONB NOT NULL DEFAULT '[]'::jsonb,
  exercicios JSONB NOT NULL DEFAULT '[]'::jsonb,
  desafio JSONB NOT NULL DEFAULT '{}'::jsonb,
  revisao JSONB NOT NULL DEFAULT '{}'::jsonb,
  avaliacao JSONB NOT NULL DEFAULT '{}'::jsonb,
  tags TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.pedagogical_templates TO anon, authenticated;
GRANT ALL ON public.pedagogical_templates TO service_role;
ALTER TABLE public.pedagogical_templates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "templates readable by all"
  ON public.pedagogical_templates FOR SELECT USING (true);
CREATE POLICY "admins manage templates"
  ON public.pedagogical_templates FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- 2) Mapeamento BNCC -> Template
CREATE TABLE public.bncc_template_map (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  bncc_code TEXT NOT NULL,
  template_id UUID NOT NULL REFERENCES public.pedagogical_templates(id) ON DELETE CASCADE,
  priority INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (bncc_code, template_id)
);
CREATE INDEX idx_bncc_template_map_code ON public.bncc_template_map(bncc_code);
GRANT SELECT ON public.bncc_template_map TO anon, authenticated;
GRANT ALL ON public.bncc_template_map TO service_role;
ALTER TABLE public.bncc_template_map ENABLE ROW LEVEL SECURITY;
CREATE POLICY "map readable by all"
  ON public.bncc_template_map FOR SELECT USING (true);
CREATE POLICY "admins manage map"
  ON public.bncc_template_map FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- 3) Cache de aulas montadas (BNCC + template -> aula completa)
CREATE TABLE public.pedagogical_lessons_cache (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  bncc_code TEXT NOT NULL,
  template_id UUID NOT NULL REFERENCES public.pedagogical_templates(id) ON DELETE CASCADE,
  lesson JSONB NOT NULL,
  version INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (bncc_code, template_id, version)
);
CREATE INDEX idx_lessons_cache_code ON public.pedagogical_lessons_cache(bncc_code);
GRANT SELECT ON public.pedagogical_lessons_cache TO anon, authenticated;
GRANT ALL ON public.pedagogical_lessons_cache TO service_role;
ALTER TABLE public.pedagogical_lessons_cache ENABLE ROW LEVEL SECURITY;
CREATE POLICY "lesson cache readable by all"
  ON public.pedagogical_lessons_cache FOR SELECT USING (true);
CREATE POLICY "admins manage lesson cache"
  ON public.pedagogical_lessons_cache FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- 4) Registro de domínio do aluno
CREATE TABLE public.mastery_records (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  child_id UUID,
  bncc_code TEXT NOT NULL,
  template_id UUID REFERENCES public.pedagogical_templates(id) ON DELETE SET NULL,
  score NUMERIC NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'iniciado',
  attempts INTEGER NOT NULL DEFAULT 0,
  last_attempt_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_mastery_user ON public.mastery_records(user_id);
CREATE INDEX idx_mastery_child ON public.mastery_records(child_id);
CREATE INDEX idx_mastery_code ON public.mastery_records(bncc_code);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.mastery_records TO authenticated;
GRANT ALL ON public.mastery_records TO service_role;
ALTER TABLE public.mastery_records ENABLE ROW LEVEL SECURITY;
CREATE POLICY "users manage own mastery"
  ON public.mastery_records FOR ALL TO authenticated
  USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'))
  WITH CHECK (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'));

-- Triggers updated_at
CREATE TRIGGER trg_templates_updated_at BEFORE UPDATE ON public.pedagogical_templates
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER trg_map_updated_at BEFORE UPDATE ON public.bncc_template_map
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER trg_lessons_cache_updated_at BEFORE UPDATE ON public.pedagogical_lessons_cache
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER trg_mastery_updated_at BEFORE UPDATE ON public.mastery_records
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
