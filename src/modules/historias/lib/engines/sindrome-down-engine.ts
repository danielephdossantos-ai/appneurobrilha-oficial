import type { Story, StoryPage, StoryQuestion } from "../../types";
import type { GeneratedLibraryStory } from "../story-library";

export function applySindromeDownSupport(
  story: Story,
  pages: StoryPage[],
  questions: StoryQuestion[],
): GeneratedLibraryStory {
  const adaptedStory: Story = {
    ...story,
    description: `${story.description} Suporte visual ampliado com ilustrações infantis em 2D.`,
  };

  const adaptedPages = pages.map((page) => ({
    ...page,
    text: `${page.text} Observe bem a imagem grande para acompanhar a história.`,
    image_url: `/illustrations/2d/${story.id}/page-${page.page_number}.png`,
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
