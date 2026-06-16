import type { Story, StoryPage, StoryQuestion, StoryTheme, ReadingLevel } from "../types";
import {
  generateLibraryStoryFromInput,
  type SpecialNeedsProfile,
  type StoryCategory,
} from "./story-library";

export interface GenerateStoryInput {
  theme?: StoryTheme;
  age?: number;
  level?: ReadingLevel;
  childName?: string;
  hyperfocus?: string;
  profile?: SpecialNeedsProfile;
  category?: StoryCategory;
}

export interface GeneratedStory {
  story: Omit<Story, "id">;
  pages: Omit<StoryPage, "id" | "story_id">[];
  questions: Omit<StoryQuestion, "id" | "story_id">[];
}

export async function generateStoryWithAI(input: GenerateStoryInput): Promise<GeneratedStory> {
  const libraryStory = generateLibraryStoryFromInput(input);

  return {
    story: {
      title: libraryStory.story.title,
      description: libraryStory.story.description,
      cover_image: libraryStory.story.cover_image,
      reading_level: libraryStory.story.reading_level,
      age_min: libraryStory.story.age_min,
      age_max: libraryStory.story.age_max,
      theme: libraryStory.story.theme,
      difficulty: libraryStory.story.difficulty,
      ai_generated: true,
    },
    pages: libraryStory.pages.map((page) => ({
      page_number: page.page_number,
      text: page.text,
      image_url: page.image_url,
      audio_url: page.audio_url,
      highlight_words: page.highlight_words,
    })),
    questions: libraryStory.questions.map((question) => ({
      question: question.question,
      option_a: question.option_a,
      option_b: question.option_b,
      option_c: question.option_c,
      correct_answer: question.correct_answer,
      difficulty: question.difficulty,
    })),
  };
}
