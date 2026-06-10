export type StoryTheme =
  | "dinossauros"
  | "animais"
  | "espaco"
  | "fazendinha"
  | "princesas"
  | "super-herois"
  | "natureza";

export type ReadingLevel = "iniciante" | "intermediario" | "avancado";

export interface Story {
  id: string;
  title: string;
  description: string | null;
  cover_image: string | null;
  reading_level: ReadingLevel;
  age_min: number;
  age_max: number;
  theme: StoryTheme;
  difficulty: number;
  ai_generated?: boolean | null;
}

export interface StoryPage {
  id: string;
  story_id: string;
  page_number: number;
  text: string;
  image_url: string | null;
  audio_url: string | null;
  highlight_words: string[];
}

export interface StoryQuestion {
  id: string;
  story_id: string;
  question: string;
  option_a: string;
  option_b: string;
  option_c: string;
  correct_answer: "a" | "b" | "c";
  difficulty: number;
}

export const THEME_META: Record<StoryTheme, { label: string; emoji: string; color: string; bg: string }> = {
  dinossauros: { label: "Dinossauros", emoji: "🦕", color: "#16A34A", bg: "#DCFCE7" },
  animais: { label: "Animais", emoji: "🦊", color: "#EA580C", bg: "#FFEDD5" },
  espaco: { label: "Espaço", emoji: "🚀", color: "#7C3AED", bg: "#EDE9FE" },
  fazendinha: { label: "Fazendinha", emoji: "🐄", color: "#CA8A04", bg: "#FEF9C3" },
  princesas: { label: "Princesas", emoji: "👑", color: "#DB2777", bg: "#FCE7F3" },
  "super-herois": { label: "Super-heróis", emoji: "🦸", color: "#DC2626", bg: "#FEE2E2" },
  natureza: { label: "Natureza", emoji: "🌳", color: "#059669", bg: "#D1FAE5" },
};
