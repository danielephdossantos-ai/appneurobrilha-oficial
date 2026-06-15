import { PHONEMES } from "./phonemes";
import { SYLLABLES } from "./syllables";
import { WORDS } from "./words";
import { SENTENCES } from "./sentences";

export * from "./phonemes";
export * from "./syllables";
export * from "./words";
export * from "./sentences";

export interface LiteracyModule {
  id: string;
  name: string;
  type: "phoneme" | "syllable" | "word" | "reading";
  difficulty: number;
  description: string;
}

export const LITERACY_SYSTEM = {
  modules: [
    {
      id: "phonemes-base",
      name: "Mundo dos Fonemas",
      type: "phoneme",
      difficulty: 1,
      description: "Sons das letras",
    },
    {
      id: "syllables-simple",
      name: "Fábrica de Sílabas",
      type: "syllable",
      difficulty: 2,
      description: "Consoante + Vogal",
    },
    {
      id: "word-association",
      name: "Associação Mágica",
      type: "word",
      difficulty: 3,
      description: "Palavra e Imagem",
    },
    {
      id: "guided-reading",
      name: "Leitura Guiada",
      type: "reading",
      difficulty: 4,
      description: "Frases simples",
    },
  ],
  data: {
    phonemes: PHONEMES,
    syllables: SYLLABLES,
    words: WORDS,
    sentences: SENTENCES,
  },
  adaptations: {
    dyslexia: {
      fontFamily: "OpenDyslexic, sans-serif",
      letterSpacing: "0.15em",
      lineHeight: "2",
      syllableHighlight: true,
      contrast: "high",
    },
    tea: {
      visualClutter: "minimal",
      predictableTransitions: true,
      directInstructions: true,
      reducedAnimations: true,
    },
    tdah: {
      fastFeedback: true,
      microActivities: true,
      highRewardFrequency: true,
      focusMode: true,
    },
  },
};
