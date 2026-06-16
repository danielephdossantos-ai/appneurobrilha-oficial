import type { Story, StoryPage, StoryQuestion } from "../../types";
import type { GeneratedLibraryStory } from "../story-library";

export function applyAutismoSupport(
  story: Story,
  pages: StoryPage[],
  questions: StoryQuestion[],
): GeneratedLibraryStory {
  const adaptedStory: Story = {
    ...story,
    description: `${story.description} Rotina visual e previsibilidade para apoiar o entendimento.`,
  };

  const adaptedPages = pages.map((page, index) => ({
    ...page,
    text: `Passo ${index + 1}: ${page.text}`,
    highlight_words: page.highlight_words,
  }));

  const adaptedQuestions = questions.map((question) => ({
    ...question,
    difficulty: Math.max(1, question.difficulty - 1),
  }));

  return {
    story: adaptedStory,
    pages: adaptedPages,
    questions: adaptedQuestions,
  };
}
