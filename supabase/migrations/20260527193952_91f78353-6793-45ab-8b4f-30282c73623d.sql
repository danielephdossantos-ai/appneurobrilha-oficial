-- Fix policies for all tables mentioned in linter
-- activities
ALTER POLICY "Activities are viewable by all authenticated users" ON public.activities TO authenticated;

-- activity_logs
ALTER POLICY "Users can manage their children's activity logs" ON public.activity_logs TO authenticated;

-- child_journey
ALTER POLICY "Users can manage their children's journey" ON public.child_journey TO authenticated;

-- child_progression_stats
ALTER POLICY "Users can manage their child's progression stats" ON public.child_progression_stats TO authenticated;

-- child_skill_mastery
ALTER POLICY "Users can manage their child's skill mastery" ON public.child_skill_mastery TO authenticated;

-- children
ALTER POLICY "Users can delete their own children" ON public.children TO authenticated;
ALTER POLICY "Users can update their own children" ON public.children TO authenticated;
ALTER POLICY "Users can view their own children" ON public.children TO authenticated;

-- neuro_analytics (assuming it exists based on earlier context)
-- Do the same for any other table identified by the linter in the previous step
DO $$
DECLARE
    row RECORD;
BEGIN
    FOR row IN 
        SELECT policyname, tablename 
        FROM pg_policies 
        WHERE schemaname = 'public' 
        AND (roles = '{public}' OR roles = '{anon}')
    LOOP
        EXECUTE format('ALTER POLICY %I ON %I TO authenticated', row.policyname, row.tablename);
    END LOOP;
END
$$;
