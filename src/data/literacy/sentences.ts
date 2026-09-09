export interface SentenceData {
  id: string;
  text: string;
  highlightedSyllables: string[];
  audioUrl: string;
  difficulty: 1 | 2 | 3;
}

export const SENTENCES: SentenceData[] = [
  {
    id: "st-1",
    text: "O GATO SUBIU NO TELHADO.",
    highlightedSyllables: ["GA", "TO", "SU", "BIU"],
    audioUrl: "/audio/sentences/1.mp3",
    difficulty: 1,
  },
  {
    id: "st-2",
    text: "A BOLA É AZUL E REDONDA.",
    highlightedSyllables: ["BO", "LA", "A", "ZUL"],
    audioUrl: "/audio/sentences/2.mp3",
    difficulty: 1,
  },
  ...Array.from({ length: 50 }).map((_, i) => ({
    id: `st-extra-${i}`,
    text: `ESSA É UMA FRASE DE EXEMPLO NÚMERO ${i}.`,
    highlightedSyllables: ["ES", "SA", "EX", "EM", "PLO"],
    audioUrl: `/audio/sentences/extra-${i}.mp3`,
    difficulty: ((i % 3) + 1) as 1 | 2 | 3,
  })),
];
