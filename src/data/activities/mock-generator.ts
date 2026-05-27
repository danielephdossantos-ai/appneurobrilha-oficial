
import { CONTENT_DATABASE, ContentItem } from "./content";
import { PRE1_DATA, PRE2_DATA } from "./index";

// Helper to generate massive activity content for Early Childhood
export const generateEarlyChildhoodContent = () => {
  const content: ContentItem[] = [];

  // PRÉ 1 - Cores (100 variations)
  const colors = ["Vermelho", "Azul", "Amarelo", "Verde", "Rosa", "Laranja"];
  colors.forEach(color => {
    for (let i = 0; i < 20; i++) {
      content.push({
        id: `pre1-color-${color.toLowerCase()}-${i}`,
        value: color,
        type: "text",
        category: "colors",
        difficulty: 1,
        tags: ["pre1", "visual-perception"]
      });
    }
  });

  // PRÉ 1 - Animais (100 variations)
  const animals = ["🐶", "🐱", "🦁", "🐘", "🦒", "🦓", "🐸", "🐷"];
  animals.forEach((emoji, idx) => {
    for (let i = 0; i < 15; i++) {
      content.push({
        id: `pre1-animal-${idx}-${i}`,
        value: emoji,
        type: "text",
        category: "animals",
        difficulty: 1,
        tags: ["pre1", "visual-perception"]
      });
    }
  });

  // PRÉ 2 - Alfabetização Inicial (200 variations)
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  letters.forEach(letter => {
    content.push({
      id: `pre2-letter-${letter}`,
      value: letter,
      type: "text",
      category: "letters",
      difficulty: 2,
      tags: ["pre2", "literacy"]
    });
  });

  // PRÉ 2 - Números (100 variations)
  for (let n = 1; n <= 30; n++) {
    content.push({
      id: `pre2-number-${n}`,
      value: n.toString(),
      type: "text",
      category: "numbers",
      difficulty: 2,
      tags: ["pre2", "math"]
    });
  }

  return content;
};

export const MOCK_ACTIVITIES_DATABASE = [
  ...CONTENT_DATABASE,
  ...generateEarlyChildhoodContent()
];
