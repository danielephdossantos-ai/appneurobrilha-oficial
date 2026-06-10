
CREATE TABLE public.stories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  cover_image TEXT,
  reading_level TEXT NOT NULL DEFAULT 'iniciante',
  age_min INTEGER NOT NULL DEFAULT 4,
  age_max INTEGER NOT NULL DEFAULT 10,
  theme TEXT NOT NULL,
  difficulty INTEGER NOT NULL DEFAULT 1,
  ai_generated BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.stories TO authenticated, anon;
GRANT ALL ON public.stories TO service_role;
ALTER TABLE public.stories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Stories are readable by everyone" ON public.stories FOR SELECT USING (true);

CREATE TABLE public.story_pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  story_id UUID NOT NULL REFERENCES public.stories(id) ON DELETE CASCADE,
  page_number INTEGER NOT NULL,
  text TEXT NOT NULL,
  image_url TEXT,
  audio_url TEXT,
  highlight_words JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(story_id, page_number)
);

GRANT SELECT ON public.story_pages TO authenticated, anon;
GRANT ALL ON public.story_pages TO service_role;
ALTER TABLE public.story_pages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Story pages are readable by everyone" ON public.story_pages FOR SELECT USING (true);

CREATE TABLE public.story_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  story_id UUID NOT NULL REFERENCES public.stories(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  option_a TEXT NOT NULL,
  option_b TEXT NOT NULL,
  option_c TEXT NOT NULL,
  correct_answer CHAR(1) NOT NULL CHECK (correct_answer IN ('a','b','c')),
  difficulty INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.story_questions TO authenticated, anon;
GRANT ALL ON public.story_questions TO service_role;
ALTER TABLE public.story_questions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Story questions are readable by everyone" ON public.story_questions FOR SELECT USING (true);

CREATE TABLE public.story_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  child_id UUID NOT NULL REFERENCES public.children(id) ON DELETE CASCADE,
  story_id UUID NOT NULL REFERENCES public.stories(id) ON DELETE CASCADE,
  current_page INTEGER DEFAULT 1,
  completed BOOLEAN DEFAULT false,
  score INTEGER DEFAULT 0,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(child_id, story_id)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.story_progress TO authenticated;
GRANT ALL ON public.story_progress TO service_role;
ALTER TABLE public.story_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own children story progress" ON public.story_progress
  FOR ALL USING (
    EXISTS (SELECT 1 FROM public.children c WHERE c.id = story_progress.child_id AND c.user_id::text = (auth.uid())::text)
  ) WITH CHECK (
    EXISTS (SELECT 1 FROM public.children c WHERE c.id = story_progress.child_id AND c.user_id::text = (auth.uid())::text)
  );

CREATE TRIGGER stories_updated_at BEFORE UPDATE ON public.stories
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER story_progress_updated_at BEFORE UPDATE ON public.story_progress
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX idx_stories_theme ON public.stories(theme);
CREATE INDEX idx_stories_age ON public.stories(age_min, age_max);
CREATE INDEX idx_story_pages_story ON public.story_pages(story_id, page_number);
CREATE INDEX idx_story_questions_story ON public.story_questions(story_id);
CREATE INDEX idx_story_progress_child ON public.story_progress(child_id);
