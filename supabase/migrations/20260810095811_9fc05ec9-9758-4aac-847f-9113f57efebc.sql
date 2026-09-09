-- 1) achievements: standardize catalog read policy
DROP POLICY IF EXISTS "Anyone authenticated can view achievements" ON public.achievements;
CREATE POLICY "Authenticated can view achievements"
  ON public.achievements FOR SELECT TO authenticated
  USING (auth.uid() IS NOT NULL);

-- 2) child_anamnesis: keep only owner-scoped policies
DROP POLICY IF EXISTS "Users can insert anamnesis for their own children" ON public.child_anamnesis;
CREATE POLICY "child_anamnesis_select_own"
  ON public.child_anamnesis FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = child_anamnesis.child_id AND c.user_id = auth.uid()));

-- 3) consolidate legacy children_profiles/parent_profiles ownership chain onto children.user_id
DROP POLICY IF EXISTS "Parents view children anamnesis" ON public.anamnesis;
CREATE POLICY "anamnesis_select_own" ON public.anamnesis FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = anamnesis.child_id AND c.user_id = auth.uid()));

DROP POLICY IF EXISTS "Parents view children cognitive profiles" ON public.cognitive_profiles;
CREATE POLICY "cognitive_profiles_select_own" ON public.cognitive_profiles FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = cognitive_profiles.child_id AND c.user_id = auth.uid()));

DROP POLICY IF EXISTS "Parents view children neuro profiles" ON public.neuro_profiles;
CREATE POLICY "neuro_profiles_select_own" ON public.neuro_profiles FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = neuro_profiles.child_id AND c.user_id = auth.uid()));

DROP POLICY IF EXISTS "Parents view their children reports" ON public.reports;
CREATE POLICY "reports_select_own" ON public.reports FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = reports.child_id AND c.user_id = auth.uid()));

DROP POLICY IF EXISTS "Parents view children sensory profiles" ON public.sensory_profiles;
CREATE POLICY "sensory_profiles_select_own" ON public.sensory_profiles FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = sensory_profiles.child_id AND c.user_id = auth.uid()));

DROP POLICY IF EXISTS "Parents view children progression" ON public.progression;
CREATE POLICY "progression_select_own" ON public.progression FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = progression.child_id AND c.user_id = auth.uid()));

DROP POLICY IF EXISTS "Parents view children results" ON public.activity_results;
CREATE POLICY "activity_results_select_own" ON public.activity_results FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = activity_results.child_id AND c.user_id = auth.uid()));

DROP POLICY IF EXISTS "Parents view adaptation logs" ON public.adaptation_logs;
CREATE POLICY "adaptation_logs_select_own" ON public.adaptation_logs FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = adaptation_logs.child_id AND c.user_id = auth.uid()));

DROP POLICY IF EXISTS "Parents view children sessions" ON public.daily_sessions;
CREATE POLICY "daily_sessions_select_own" ON public.daily_sessions FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM public.children c WHERE c.id = daily_sessions.child_id AND c.user_id = auth.uid()));

DROP POLICY IF EXISTS "Parents view children attention" ON public.attention_metrics;
CREATE POLICY "attention_metrics_select_own" ON public.attention_metrics FOR SELECT TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.daily_sessions s
    JOIN public.children c ON c.id = s.child_id
    WHERE s.id = attention_metrics.session_id AND c.user_id = auth.uid()
  ));

DROP POLICY IF EXISTS "Parents view children fatigue" ON public.fatigue_metrics;
CREATE POLICY "fatigue_metrics_select_own" ON public.fatigue_metrics FOR SELECT TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.daily_sessions s
    JOIN public.children c ON c.id = s.child_id
    WHERE s.id = fatigue_metrics.session_id AND c.user_id = auth.uid()
  ));

-- 4) parental_controls: remove duplicate legacy-chain policy
DROP POLICY IF EXISTS "Parents can update controls" ON public.parental_controls;