// Architecture stub for future AI-generated stories.
// Wire to Lovable AI Gateway via a createServerFn when ready.
import type { Story, StoryPage, StoryQuestion, StoryTheme, ReadingLevel } from "../types";

export interface GenerateStoryInput {
  theme: StoryTheme;
  age: number;
  level: ReadingLevel;
  childName?: string;
  hyperfocus?: string;
}

export interface GeneratedStory {
  story: Omit<Story, "id">;
  pages: Omit<StoryPage, "id" | "story_id">[];
  questions: Omit<StoryQuestion, "id" | "story_id">[];
}

export async function generateStoryWithAI(_input: GenerateStoryInput): Promise<GeneratedStory> {
  // TODO: implement via createServerFn calling Lovable AI Gateway (google/gemini-3-flash-preview).
  // Persist returned story/pages/questions in their tables and set ai_generated=true.
  throw new Error("AI story generation not yet implemented. Architecture ready.");
}
