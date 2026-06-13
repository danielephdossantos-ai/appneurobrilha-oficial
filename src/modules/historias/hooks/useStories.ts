import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { getStoryById, getStoryPages, getStoryQuestions } from "@/services/db/data.functions";
import type { Story, StoryPage, StoryQuestion } from "../types";

const db = supabase as any;

export function useStories(filters?: {
  theme?: string;
  age?: number;
  level?: string;
}) {
  return useQuery({
    queryKey: ["stories", filters],
    queryFn: async (): Promise<Story[]> => {
      let q = db.from("stories").select("*").order("created_at", { ascending: true });
      if (filters?.theme && filters.theme !== "todos") q = q.eq("theme", filters.theme);
      if (filters?.level && filters.level !== "todos") q = q.eq("reading_level", filters.level);
      const { data, error } = await q;
      if (error) throw error;
      return (data ?? []) as Story[];
    },
  });
}

// Bypasses the shim — calls server functions directly to avoid loading all
// stories (with large SVG cover images) just to find one by ID.
export function useStory(storyId: string | undefined) {
  return useQuery({
    queryKey: ["story", storyId],
    enabled: !!storyId,
    retry: 2,
    queryFn: async () => {
      const [story, pages, questions] = await Promise.all([
        getStoryById({ data: { id: storyId! } }),
        getStoryPages({ data: { storyId: storyId! } }),
        getStoryQuestions({ data: { storyId: storyId! } }),
      ]);
      return {
        story: (story ?? null) as Story | null,
        pages: (pages ?? []) as StoryPage[],
        questions: (questions ?? []) as StoryQuestion[],
      };
    },
  });
}

export async function saveStoryProgress(params: {
  childId: string;
  storyId: string;
  currentPage: number;
  completed?: boolean;
  score?: number;
}) {
  const payload: any = {
    child_id: params.childId,
    story_id: params.storyId,
    current_page: params.currentPage,
    completed: params.completed ?? false,
    score: params.score ?? 0,
  };
  if (params.completed) payload.completed_at = new Date().toISOString();
  await db.from("story_progress").upsert(payload, { onConflict: "child_id,story_id" });
}
