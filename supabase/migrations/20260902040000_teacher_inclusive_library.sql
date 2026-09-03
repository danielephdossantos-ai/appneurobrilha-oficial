-- Biblioteca Inclusiva: materiais novos para atendimento individualizado.
-- A aula da Escola Brilha é fonte curricular, nunca exibida como adaptação pronta.

CREATE TABLE IF NOT EXISTS public.teacher_inclusive_lessons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  source_lesson_key text NOT NULL,
  source_version text,
  codigo_bncc text NOT NULL,
  title text NOT NULL,
  school_stage text NOT NULL CHECK (school_stage IN ('educacao_infantil','fundamental_1','fundamental_2')),
  school_year text NOT NULL,
  subject text NOT NULL,
  knowledge_object text,
  learning_goal text NOT NULL,
  supported_profiles text[] NOT NULL DEFAULT '{}',
  teacher_pages jsonb NOT NULL DEFAULT '[]'::jsonb,
  student_pages jsonb NOT NULL DEFAULT '[]'::jsonb,
  answer_key jsonb NOT NULL DEFAULT '[]'::jsonb,
  accessibility jsonb NOT NULL DEFAULT '{}'::jsonb,
  source_fidelity_checked boolean NOT NULL DEFAULT false,
  pedagogical_reviewed boolean NOT NULL DEFAULT false,
  technical_reviewed boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','review','published','archived')),
  reviewed_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  reviewed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (source_lesson_key, codigo_bncc)
);

CREATE INDEX IF NOT EXISTS teacher_inclusive_lessons_search_idx
  ON public.teacher_inclusive_lessons (school_stage, school_year, subject, status);
CREATE INDEX IF NOT EXISTS teacher_inclusive_lessons_bncc_idx
  ON public.teacher_inclusive_lessons (codigo_bncc);
CREATE INDEX IF NOT EXISTS teacher_inclusive_lessons_profiles_idx
  ON public.teacher_inclusive_lessons USING gin (supported_profiles);

ALTER TABLE public.teacher_inclusive_lessons ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Active teachers read published inclusive lessons"
  ON public.teacher_inclusive_lessons FOR SELECT TO authenticated
  USING (
    status = 'published' AND source_fidelity_checked AND pedagogical_reviewed AND technical_reviewed
    AND (
      public.has_role(auth.uid(), 'admin') OR EXISTS (
        SELECT 1 FROM public.teacher_profiles p
        WHERE p.user_id = auth.uid() AND p.status = 'active' AND p.access_expires_at >= now()
      )
    )
  );

CREATE POLICY "Admins manage inclusive lessons"
  ON public.teacher_inclusive_lessons FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.teacher_search_inclusive_lessons(
  search_text text DEFAULT '', filter_year text DEFAULT NULL,
  filter_subject text DEFAULT NULL, filter_profile text DEFAULT NULL,
  result_limit integer DEFAULT 50
)
RETURNS TABLE(
  id uuid, codigo_bncc text, title text, school_stage text, school_year text,
  subject text, knowledge_object text, learning_goal text, supported_profiles text[]
)
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE normalized text := trim(coalesce(search_text,''));
BEGIN
  IF auth.uid() IS NULL OR NOT (
    public.has_role(auth.uid(), 'admin') OR EXISTS (
      SELECT 1 FROM public.teacher_profiles p
      WHERE p.user_id=auth.uid() AND p.status='active' AND p.access_expires_at>=now()
    )
  ) THEN RAISE EXCEPTION 'TEACHER_ACCESS_REQUIRED'; END IF;
  IF result_limit < 1 OR result_limit > 100 THEN RAISE EXCEPTION 'INVALID_LIMIT'; END IF;

  RETURN QUERY SELECT l.id,l.codigo_bncc,l.title,l.school_stage,l.school_year,l.subject,
    l.knowledge_object,l.learning_goal,l.supported_profiles
  FROM public.teacher_inclusive_lessons l
  WHERE l.status='published' AND l.source_fidelity_checked AND l.pedagogical_reviewed AND l.technical_reviewed
    AND (normalized='' OR l.codigo_bncc ILIKE '%'||normalized||'%' OR l.title ILIKE '%'||normalized||'%'
      OR coalesce(l.knowledge_object,'') ILIKE '%'||normalized||'%' OR l.learning_goal ILIKE '%'||normalized||'%')
    AND (filter_year IS NULL OR filter_year='' OR l.school_year=filter_year)
    AND (filter_subject IS NULL OR filter_subject='' OR l.subject=filter_subject)
    AND (filter_profile IS NULL OR filter_profile='' OR filter_profile=ANY(l.supported_profiles))
  ORDER BY l.school_stage,l.school_year,l.subject,l.codigo_bncc,l.title LIMIT result_limit;
END; $$;

CREATE OR REPLACE FUNCTION public.teacher_get_inclusive_lesson(selected_id uuid)
RETURNS SETOF public.teacher_inclusive_lessons
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF auth.uid() IS NULL OR NOT (
    public.has_role(auth.uid(), 'admin') OR EXISTS (
      SELECT 1 FROM public.teacher_profiles p
      WHERE p.user_id=auth.uid() AND p.status='active' AND p.access_expires_at>=now()
    )
  ) THEN RAISE EXCEPTION 'TEACHER_ACCESS_REQUIRED'; END IF;
  RETURN QUERY SELECT * FROM public.teacher_inclusive_lessons l
    WHERE l.id=selected_id AND l.status='published' AND l.source_fidelity_checked
      AND l.pedagogical_reviewed AND l.technical_reviewed;
END; $$;

REVOKE ALL ON public.teacher_inclusive_lessons FROM anon,authenticated;
REVOKE ALL ON FUNCTION public.teacher_search_inclusive_lessons(text,text,text,text,integer) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.teacher_get_inclusive_lesson(uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.teacher_search_inclusive_lessons(text,text,text,text,integer) TO authenticated;
GRANT EXECUTE ON FUNCTION public.teacher_get_inclusive_lesson(uuid) TO authenticated;

