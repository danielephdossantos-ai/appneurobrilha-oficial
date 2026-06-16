import type { Story, StoryPage, StoryQuestion } from "../../types";
import type { GeneratedLibraryStory } from "../story-library";

function formatSyllables(text: string) {
  return text.replace(/\b([a-záàâãéèêíóôõúç]{4,})\b/gi, (word) => {
    const syllables = word.match(/[aeiouáàâãéèêíóôõúy]+[^aeiouáàâãéèêíóôõúy]*/gi);
    return syllables ? syllables.join("-") : word;
  });
}

export function applyDislexiaSupport(
  story: Story,
  pages: StoryPage[],
  questions: StoryQuestion[],
): GeneratedLibraryStory {
  const adaptedStory: Story = {
    ...story,
    description: `${story.description} Apoio fonológico e destaque silábico para facilitar a leitura.`,
  };

  const adaptedPages = pages.map((page) => ({
    ...page,
    text: `${page.text} Veja como algumas palavras se dividem em sílabas: ${formatSyllables(page.text)}.`,
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
