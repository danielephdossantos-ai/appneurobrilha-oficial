-- Grant permissions for all existing tables to authenticated and service_role
GRANT SELECT, INSERT, UPDATE, DELETE ON public.cognitive_profile TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.longitudinal_scores TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_privacy_settings TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.audit_logs TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.children TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.activities TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.pedagogical_activities_base TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.child_journey TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.activity_logs TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.learning_trails TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.child_progression_stats TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.child_skill_mastery TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.spaced_repetition_schedule TO authenticated;

-- Grant ALL to service_role for all tables
GRANT ALL ON public.cognitive_profile TO service_role;
GRANT ALL ON public.longitudinal_scores TO service_role;
GRANT ALL ON public.user_privacy_settings TO service_role;
GRANT ALL ON public.audit_logs TO service_role;
GRANT ALL ON public.children TO service_role;
GRANT ALL ON public.profiles TO service_role;
GRANT ALL ON public.activities TO service_role;
GRANT ALL ON public.pedagogical_activities_base TO service_role;
GRANT ALL ON public.child_journey TO service_role;
GRANT ALL ON public.activity_logs TO service_role;
GRANT ALL ON public.learning_trails TO service_role;
GRANT ALL ON public.child_progression_stats TO service_role;
GRANT ALL ON public.child_skill_mastery TO service_role;
GRANT ALL ON public.spaced_repetition_schedule TO service_role;

-- Special cases for anon access if needed (optional, but good for public content)
GRANT SELECT ON public.activities TO anon;
GRANT SELECT ON public.pedagogical_activities_base TO anon;
