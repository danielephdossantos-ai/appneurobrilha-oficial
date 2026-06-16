import type { Story, StoryPage, StoryQuestion } from "../../types";
import type { GeneratedLibraryStory } from "../story-library";

export function applyTdahSupport(
  story: Story,
  pages: StoryPage[],
  questions: StoryQuestion[],
): GeneratedLibraryStory {
  const adaptedStory: Story = {
    ...story,
    description: `${story.description} Sessões curtas com reforço imediato para manter a atenção.`,
  };

  const adaptedPages = pages.map((page, index) => ({
    ...page,
    text: page.text
      .split(".")
      .slice(0, 2)
      .join(".")
      .trim() +
      (index === pages.length - 1 ? "." : ""),
    highlight_words: page.highlight_words.slice(0, 2),
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
