import type { Story, StoryPage, StoryQuestion } from "../../types";
import type { GeneratedLibraryStory } from "../story-library";

export function applyDeficienciaInteligenciaSupport(
  story: Story,
  pages: StoryPage[],
  questions: StoryQuestion[],
): GeneratedLibraryStory {
  const adaptedStory: Story = {
    ...story,
    description: `${story.description} Mensagens simples e carga cognitiva reduzida.`,
  };

  const adaptedPages = pages.map((page) => {
    const smallSentences = page.text.split(".").slice(0, 2).join(".").trim();
    return {
      ...page,
      text: `${smallSentences}.`,
      highlight_words: page.highlight_words.slice(0, 2),
    };
  });

  const adaptedQuestions = questions.map((question) => ({
    ...question,
    difficulty: 1,
  }));

  return {
    story: adaptedStory,
    pages: adaptedPages,
    questions: adaptedQuestions,
  };
}
