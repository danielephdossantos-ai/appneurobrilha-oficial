
import { CONTENT_DATABASE, ContentItem } from "./content";
import { PRE1_DATA, PRE2_DATA } from "../early-childhood/index";

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

  // PRÉ 2 - Alfabetização Inicial (300 variations)
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  letters.forEach(letter => {
    // Letter identification (10 per letter)
    for (let i = 0; i < 10; i++) {
      content.push({
        id: `pre2-letter-${letter}-${i}`,
        value: letter,
        type: "text",
        category: "letters",
        difficulty: 2,
        tags: ["pre2", "literacy", "identification"]
      });
    }
    // Initial sounds (5 per letter)
    for (let i = 0; i < 5; i++) {
      content.push({
        id: `pre2-sound-${letter}-${i}`,
        value: letter, // In a real system, this would be an object with sound and image
        type: "text",
        category: "initial-sounds",
        difficulty: 2,
        tags: ["pre2", "literacy", "phonics"]
      });
    }
  });

  // PRÉ 2 - Sílabas (200 variations)
  const syllables = ["BA", "BE", "BI", "BO", "BU", "CA", "CE", "CI", "CO", "CU", "DA", "DE", "DI", "DO", "DU", "FA", "FE", "FI", "FO", "FU"];
  syllables.forEach(syl => {
    for (let i = 0; i < 10; i++) {
      content.push({
        id: `pre2-syllable-${syl}-${i}`,
        value: syl,
        type: "text",
        category: "syllables",
        difficulty: 2,
        tags: ["pre2", "literacy", "syllables"]
      });
    }
  });

  // PRÉ 2 - Números e Contagem (200 variations)
  for (let n = 1; n <= 50; n++) {
    for (let i = 0; i < 4; i++) {
      content.push({
        id: `pre2-number-${n}-${i}`,
        value: n.toString(),
        type: "text",
        category: "numbers",
        difficulty: 2,
        tags: ["pre2", "math", "counting"]
      });
    }
  }

  // PRÉ 2 - Sequência Lógica (100 variations)
  for (let i = 0; i < 100; i++) {
    content.push({
      id: `pre2-logic-${i}`,
      value: `sequence-${i}`,
      type: "text",
      category: "logic",
      difficulty: 2,
      tags: ["pre2", "cognitive", "logic-sequence"]
    });
  }

  // PRÉ 2 - Memória Auditiva (100 variations)
  for (let i = 0; i < 100; i++) {
    content.push({
      id: `pre2-auditory-${i}`,
      value: `sound-${i}`,
      type: "text",
      category: "auditory",
      difficulty: 2,
      tags: ["pre2", "cognitive", "auditory-memory"]
    });
  }

  return content;
};

export const MOCK_ACTIVITIES_DATABASE = [
  ...CONTENT_DATABASE,
  ...generateEarlyChildhoodContent()
];
