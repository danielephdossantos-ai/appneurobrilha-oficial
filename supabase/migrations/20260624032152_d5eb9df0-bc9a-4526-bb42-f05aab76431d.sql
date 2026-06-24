
-- ============================================================
-- FIX 1: difficulty_rules e reward_rules — habilitar RLS
-- ============================================================
ALTER TABLE public.difficulty_rules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reward_rules ENABLE ROW LEVEL SECURITY;

-- Leitura pública (dados de configuração de jogo), escrita só admin
CREATE POLICY "Anyone can read difficulty rules"
  ON public.difficulty_rules FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admins manage difficulty rules"
  ON public.difficulty_rules FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Anyone can read reward rules"
  ON public.reward_rules FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admins manage reward rules"
  ON public.reward_rules FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- ============================================================
-- FIX 2: exam_missions / exam_mission_contents / exam_study_plans
-- Escopar por children.user_id = auth.uid()
-- ============================================================
DROP POLICY IF EXISTS "Users can create missions for their children" ON public.exam_missions;
DROP POLICY IF EXISTS "Users can delete missions for their children" ON public.exam_missions;
DROP POLICY IF EXISTS "Users can update missions for their children" ON public.exam_missions;
DROP POLICY IF EXISTS "Users can view missions for their children"   ON public.exam_missions;

CREATE POLICY "Users select own children's missions"
  ON public.exam_missions FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = exam_missions.child_id AND c.user_id = auth.uid()));
CREATE POLICY "Users insert own children's missions"
  ON public.exam_missions FOR INSERT TO authenticated
  WITH CHECK (EXISTS (SELECT 1 FROM public.children c WHERE c.id = exam_missions.child_id AND c.user_id = auth.uid()));
CREATE POLICY "Users update own children's missions"
  ON public.exam_missions FOR UPDATE TO authenticated
  USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = exam_missions.child_id AND c.user_id = auth.uid()))
  WITH CHECK (EXISTS (SELECT 1 FROM public.children c WHERE c.id = exam_missions.child_id AND c.user_id = auth.uid()));
CREATE POLICY "Users delete own children's missions"
  ON public.exam_missions FOR DELETE TO authenticated
  USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = exam_missions.child_id AND c.user_id = auth.uid()));

DROP POLICY IF EXISTS "Users can manage mission contents" ON public.exam_mission_contents;
DROP POLICY IF EXISTS "Users can view mission contents"   ON public.exam_mission_contents;

CREATE POLICY "Users manage own mission contents"
  ON public.exam_mission_contents FOR ALL TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.exam_missions m
    JOIN public.children c ON c.id = m.child_id
    WHERE m.id = exam_mission_contents.mission_id AND c.user_id = auth.uid()
  ))
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.exam_missions m
    JOIN public.children c ON c.id = m.child_id
    WHERE m.id = exam_mission_contents.mission_id AND c.user_id = auth.uid()
  ));

DROP POLICY IF EXISTS "Users can manage study plans" ON public.exam_study_plans;
DROP POLICY IF EXISTS "Users can view study plans"   ON public.exam_study_plans;

CREATE POLICY "Users manage own study plans"
  ON public.exam_study_plans FOR ALL TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.exam_missions m
    JOIN public.children c ON c.id = m.child_id
    WHERE m.id = exam_study_plans.mission_id AND c.user_id = auth.uid()
  ))
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.exam_missions m
    JOIN public.children c ON c.id = m.child_id
    WHERE m.id = exam_study_plans.mission_id AND c.user_id = auth.uid()
  ));

-- ============================================================
-- FIX 3: progresso_aluno — remover policy pública
-- ============================================================
DROP POLICY IF EXISTS "Alunos podem ver seu próprio progresso" ON public.progresso_aluno;
-- a policy "Users can manage their own children's progress" (authenticated) já existe e fica.

-- ============================================================
-- FIX 4: storage.objects — policies para bucket story-illustrations
-- ============================================================
CREATE POLICY "Public read story-illustrations"
  ON storage.objects FOR SELECT TO anon, authenticated
  USING (bucket_id = 'story-illustrations');

CREATE POLICY "Authenticated upload to story-illustrations"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (
    bucket_id = 'story-illustrations'
    AND auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Owners update story-illustrations"
  ON storage.objects FOR UPDATE TO authenticated
  USING (
    bucket_id = 'story-illustrations'
    AND auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Owners delete story-illustrations"
  ON storage.objects FOR DELETE TO authenticated
  USING (
    bucket_id = 'story-illustrations'
    AND auth.uid()::text = (storage.foldername(name))[1]
  );

-- ============================================================
-- FIX 5: rb_midias / rb_midia_vinculos — só admin escreve
-- ============================================================
DROP POLICY IF EXISTS "Autenticados gerenciam midias" ON public.rb_midias;
CREATE POLICY "Anyone can read media"
  ON public.rb_midias FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admins manage media"
  ON public.rb_midias FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Autenticados gerenciam vinculos de midia" ON public.rb_midia_vinculos;
CREATE POLICY "Anyone can read media links"
  ON public.rb_midia_vinculos FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admins manage media links"
  ON public.rb_midia_vinculos FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- ============================================================
-- FIX 6: therapist_profiles — adicionar policies
-- ============================================================
CREATE POLICY "Therapists view own profile"
  ON public.therapist_profiles FOR SELECT TO authenticated
  USING (profile_id = auth.uid());
CREATE POLICY "Therapists insert own profile"
  ON public.therapist_profiles FOR INSERT TO authenticated
  WITH CHECK (profile_id = auth.uid());
CREATE POLICY "Therapists update own profile"
  ON public.therapist_profiles FOR UPDATE TO authenticated
  USING (profile_id = auth.uid())
  WITH CHECK (profile_id = auth.uid());
CREATE POLICY "Therapists delete own profile"
  ON public.therapist_profiles FOR DELETE TO authenticated
  USING (profile_id = auth.uid());
CREATE POLICY "Admins manage all therapist profiles"
  ON public.therapist_profiles FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
