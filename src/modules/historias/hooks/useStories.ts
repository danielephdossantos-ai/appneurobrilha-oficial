import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAppState, type Diagnostico } from "@/core/store";
import type { Story, StoryPage, StoryQuestion } from "../types";
import {
  getLibraryStories,
  getLibraryStoryDetails,
  type SpecialNeedsProfile,
  type StoryCategory,
} from "../lib/story-library";

const db = supabase as any;

function mapDiagnosticoToProfile(diagnostico?: Diagnostico): SpecialNeedsProfile | undefined {
  switch (diagnostico) {
    case "tdah":
      return "tdah";
    case "tea":
      return "autismo";
    case "dislexia":
      return "dislexia";
    case "deficiencia_intelectual":
      return "deficiencia-intelectual";
    default:
      return undefined;
  }
}

export function useStories(filters?: { theme?: string; age?: number; level?: string; category?: StoryCategory | "todos" }) {
  return useQuery({
    queryKey: ["stories", filters],
    queryFn: async (): Promise<Story[]> => {
      if (filters?.category && filters.category !== "todos") {
        return getLibraryStories(filters);
      }

      try {
        let q = db.from("stories").select("*").order("created_at", { ascending: true });
        if (filters?.theme && filters.theme !== "todos") q = q.eq("theme", filters.theme);
        if (filters?.level && filters.level !== "todos") q = q.eq("reading_level", filters.level);
        if (filters?.age) q = q.lte("age_min", filters.age).gte("age_max", filters.age);
        const { data, error } = await q;
        if (error) throw error;
        const stories = (data ?? []) as Story[];
        return stories.length > 0 ? stories : getLibraryStories(filters);
      } catch {
        return getLibraryStories(filters);
      }
    },
  });
}

export function useStory(storyId: string | undefined) {
  const { activeChild } = useAppState();
  const profile = mapDiagnosticoToProfile(activeChild?.diagnostico);

  return useQuery({
    queryKey: ["story", storyId, profile],
    enabled: !!storyId,
    queryFn: async () => {
      const [{ data: story }, { data: pages }, { data: questions }] = await Promise.all([
        db.from("stories").select("*").eq("id", storyId).maybeSingle(),
        db.from("story_pages").select("*").eq("story_id", storyId).order("page_number"),
        db.from("story_questions").select("*").eq("story_id", storyId).order("created_at"),
      ]);

      const storyRecord = story as Story | null;
      const pagesRecord = (pages ?? []) as StoryPage[];
      const questionsRecord = (questions ?? []) as StoryQuestion[];

      if (storyRecord) {
        return {
          story: storyRecord,
          pages: pagesRecord,
          questions: questionsRecord,
        };
      }

      const generated = getLibraryStoryDetails(storyId!, profile);
      if (generated) {
        return generated;
      }

      return {
        story: null,
        pages: [],
        questions: [],
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
