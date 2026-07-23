ALTER TABLE public.child_skill_mastery
  ADD COLUMN IF NOT EXISTS prompt_level INTEGER NOT NULL DEFAULT 4,
  ADD COLUMN IF NOT EXISTS consec_correct INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS indep_sessions JSONB NOT NULL DEFAULT '[]'::jsonb;

COMMENT ON COLUMN public.child_skill_mastery.prompt_level IS 'ABA prompting level: 1=physical, 2=gestual, 3=verbal, 4=independent';
COMMENT ON COLUMN public.child_skill_mastery.consec_correct IS 'Consecutive correct answers at current prompt level (advances level on 3+)';
COMMENT ON COLUMN public.child_skill_mastery.indep_sessions IS 'Rolling window of last 3 independent-level sessions: [{hits,total,at}]';