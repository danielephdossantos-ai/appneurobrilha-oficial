import type { Story, StoryPage, StoryQuestion, StoryTheme, ReadingLevel } from "../types";
import { THEME_META } from "../types";
import { applyAutismoSupport } from "./engines/autismo-engine";
import { applyDeficienciaInteligenciaSupport } from "./engines/deficiencia-intelectual-engine";
import { applyDislexiaSupport } from "./engines/dislexia-engine";
import { applySindromeDownSupport } from "./engines/sindrome-down-engine";
import { applyTdahSupport } from "./engines/tdah-engine";
import { getHistoriaNarrada, listHistoriasNarradas } from "../data/historias-narradas";

export type StoryCategory =
  | "pre-escola"
  | "alfabetizacao"
  | "emocoes"
  | "inclusao"
  | "habilidades-sociais";

export type SpecialNeedsProfile =
  | "tdah"
  | "autismo"
  | "dislexia"
  | "deficiencia-intelectual"
  | "sindrome-down";

export interface GeneratedLibraryStory {
  story: Story;
  pages: StoryPage[];
  questions: StoryQuestion[];
}

const CATEGORY_CONFIG: Record<StoryCategory, {
  count: number;
  titleSeed: string;
  description: string;
  readingLevels: ReadingLevel[];
  ageMin: number;
  ageMax: number;
  difficultyStart: number;
  difficultyMax: number;
  themes: StoryTheme[];
  pageCount: number;
}> = {
  "pre-escola": {
    count: 50,
    titleSeed: "Aventura no mundo",
    description: "Uma história leve para crianças pequenas cheia de descobertas e amizade.",
    readingLevels: ["iniciante"],
    ageMin: 4,
    ageMax: 6,
    difficultyStart: 1,
    difficultyMax: 2,
    themes: ["dinossauros", "animais", "fazendinha", "natureza"],
    pageCount: 2,
  },
  alfabetizacao: {
    count: 50,
    titleSeed: "Palavras para aprender",
    description: "Histórias para apoiar os primeiros passos da leitura com textos claros e divertidos.",
    readingLevels: ["iniciante", "intermediario"],
    ageMin: 6,
    ageMax: 8,
    difficultyStart: 1,
    difficultyMax: 3,
    themes: ["espaco", "dinossauros", "animais", "natureza", "super-herois"],
    pageCount: 3,
  },
  emocoes: {
    count: 30,
    titleSeed: "Sentimentos em ação",
    description: "Histórias que ajudam a nomear emoções e a cuidar das próprias sensações.",
    readingLevels: ["iniciante", "intermediario"],
    ageMin: 5,
    ageMax: 8,
    difficultyStart: 2,
    difficultyMax: 3,
    themes: ["natureza", "fazendinha", "animais"],
    pageCount: 3,
  },
  inclusao: {
    count: 30,
    titleSeed: "Todo mundo junto",
    description: "Histórias de inclusão para mostrar respeito, amizade e cuidado com as diferenças.",
    readingLevels: ["intermediario"],
    ageMin: 6,
    ageMax: 9,
    difficultyStart: 3,
    difficultyMax: 4,
    themes: ["espaco", "natureza", "super-herois", "princesas"],
    pageCount: 3,
  },
  "habilidades-sociais": {
    count: 30,
    titleSeed: "Amigos em jornada",
    description: "Histórias que praticam socialização, cooperação e resolução de conflitos.",
    readingLevels: ["intermediario", "avancado"],
    ageMin: 6,
    ageMax: 10,
    difficultyStart: 3,
    difficultyMax: 4,
    themes: ["princesas", "super-herois", "espaco", "natureza"],
    pageCount: 3,
  },
};

function randomChoice<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function normalizeId(value: string): string {
  return value.replace(/\s+/g, "-").toLowerCase();
}

function syllabify(word: string): string {
  const cleaned = word.replace(/[^a-záàâãéèêíóôõúç]/gi, "");
  return cleaned
    .replace(/([aeiouáàâãéèêíóôõú]{1,2})(?=[^aeiouáàâãéèêíóôõú]|$)/gi, "$1-")
    .replace(/-$/, "");
}

const storyTitleTemplates: Record<StoryCategory, (theme: string, index: number) => string> = {
  "pre-escola": (theme, index) => `${theme}: brinque e descubra ${index + 1}`,
  alfabetizacao: (theme, index) => `${theme}: primeiras frases ${index + 1}`,
  emocoes: (theme, index) => `${theme} e sentimentos ${index + 1}`,
  inclusao: (theme, index) => `${theme} sem barreiras ${index + 1}`,
  "habilidades-sociais": (theme, index) => `${theme} e amigos ${index + 1}`,
};

function getThemeLabel(theme: StoryTheme): string {
  return THEME_META[theme]?.label ?? theme;
}

function buildStoryId(category: StoryCategory, index: number) {
  return `${normalizeId(category)}-${index + 1}`;
}

function buildStoryCoverImage(theme: StoryTheme, category: StoryCategory, index: number) {
  return `cover-${normalizeId(theme)}-${normalizeId(category)}-${index + 1}`;
}

function buildPageAudioUrl(storyId: string, pageNumber: number) {
  return `/audio/stories/${storyId}/page-${pageNumber}.mp3`;
}

function getDifficultyValue(base: number, index: number, max: number) {
  return Math.min(max, base + Math.floor(index / 10));
}

function buildPageTexts(story: Story, pageCount: number, profile?: SpecialNeedsProfile) {
  const themeLabel = getThemeLabel(story.theme as StoryTheme);
  const title = story.title;
  const base = [
    `Esta história começa com ${title}. ${themeLabel} ganha vida com novos amigos.`,
    `No meio da aventura, os personagens fazem escolhas e aprendem juntos.`,
    `No final, todos comemoram a descoberta e a amizade.`,
  ];

  let pages = base.slice(0, pageCount);

  if (profile === "autismo") {
    pages = pages.map((text, index) => {
      const prefix = index === 0 ? "Primeiro," : index === 1 ? "Depois," : "Por fim,";
      return `${prefix} ${text}`;
    });
  }

  if (profile === "dislexia") {
    pages = pages.map((text) => {
      const supportWord = text.match(/\b[a-záàâãéèêíóôõúç]{4,}\b/gi)?.[0] ?? "amigo";
      return `${text} A palavra ${supportWord} pode ser pronunciada com sílabas: ${syllabify(supportWord)}.`;
    });
  }

  if (profile === "deficiencia-intelectual") {
    pages = pages.slice(0, 2).map((text) => {
      const shortSentence = text.split(".")[0] ?? text;
      return `${shortSentence.trim()}.`; 
    });
  }

  if (profile === "sindrome-down") {
    pages = pages.map((text) => `${text} A ilustração 2D ajuda a seguir a história.`);
  }

  if (profile === "tdah") {
    pages = pages.slice(0, 2).map((text, index) => `${text} O próximo passo vem logo em seguida.`);
  }

  return pages;
}

function extractHighlightWords(text: string, count = 2) {
  const candidates = Array.from(new Set(
    text
      .toLowerCase()
      .match(/\b[a-záàâãéèêíóôõúç]{4,}\b/gi) ?? [],
  ));
  const filtered = candidates.filter((word) => word.length > 3);
  return filtered.slice(0, count);
}

function buildStoryPages(story: Story, pageCount: number, profile?: SpecialNeedsProfile) {
  const pageTexts = buildPageTexts(story, pageCount, profile);
  return pageTexts.map((text, idx) => {
    const highlight_words = extractHighlightWords(text, profile === "dislexia" ? 3 : 2);
    const page: StoryPage = {
      id: `${story.id}-page-${idx + 1}`,
      story_id: story.id,
      page_number: idx + 1,
      text,
      image_url:
        profile === "sindrome-down"
          ? `/illustrations/2d/${story.id}/page-${idx + 1}.png`
          : `/illustrations/${story.theme}/page-${idx + 1}.png`,
      audio_url: buildPageAudioUrl(story.id, idx + 1),
      highlight_words,
    };
    return page;
  });
}

const fallbackAnswers = {
  animais: ["cachorro", "gato", "pássaro"],
  dinossauros: ["dinossauro", "fóssil", "floresta"],
  espaco: ["estrela", "nave", "planeta"],
  fazendinha: ["vaca", "galinha", "trator"],
  princesas: ["castelo", "coroa", "festa"],
  "super-herois": ["heroína", "poder", "missão"],
  natureza: ["floresta", "rio", "montanha"],
};

function buildStoryQuestions(story: Story, pages: StoryPage[]) {
  return pages.slice(0, 2).map((page, index) => {
    const correct = page.highlight_words[0] ?? "amigo";
    const pool = fallbackAnswers[story.theme as keyof typeof fallbackAnswers] ?? ["dia", "noite", "amigo"];
    const distractors = pool.filter((word) => word !== correct).slice(0, 2);
    const options = [correct, distractors[0] ?? "amigo", distractors[1] ?? "história"];
    const shuffled = shuffleArray(options);
    const correctIndex = shuffled.indexOf(correct);
    return {
      id: `${story.id}-q-${index + 1}`,
      story_id: story.id,
      question: `Qual palavra está em destaque nesta página?`,
      option_a: shuffled[0],
      option_b: shuffled[1],
      option_c: shuffled[2],
      correct_answer: correctIndex === 0 ? "a" : correctIndex === 1 ? "b" : "c",
      difficulty: Math.max(1, story.difficulty - 1),
    } satisfies StoryQuestion;
  });
}

function shuffleArray<T>(items: T[]) {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const PROFILE_ADAPTERS: Partial<Record<SpecialNeedsProfile, (story: Story, pages: StoryPage[], questions: StoryQuestion[]) => GeneratedLibraryStory>> = {
  tdah: applyTdahSupport,
  autismo: applyAutismoSupport,
  dislexia: applyDislexiaSupport,
  "deficiencia-intelectual": applyDeficienciaInteligenciaSupport,
  "sindrome-down": applySindromeDownSupport,
};

function buildLibraryStory(category: StoryCategory, index: number) {
  const config = CATEGORY_CONFIG[category];
  const theme = config.themes[index % config.themes.length];
  const title = storyTitleTemplates[category](getThemeLabel(theme), index);
  const difficulty = getDifficultyValue(config.difficultyStart, index, config.difficultyMax);
  const reading_level = config.readingLevels[index % config.readingLevels.length];
  return {
    id: buildStoryId(category, index),
    title,
    description: config.description,
    cover_image: buildStoryCoverImage(theme, category, index),
    reading_level,
    age_min: config.ageMin,
    age_max: config.ageMax,
    theme,
    difficulty,
    ai_generated: false,
    category,
  };
}

const LIBRARY_STORIES = [
  ...listHistoriasNarradas(),
  ...Object.entries(CATEGORY_CONFIG).flatMap(([category, config]) =>
    Array.from({ length: config.count }, (_, index) => buildLibraryStory(category as StoryCategory, index)),
  ),
] as Array<Story & { category: StoryCategory }>;

export function getLibraryStories(filters?: { theme?: string; age?: number; level?: string }) {
  return LIBRARY_STORIES.filter((story) => {
    if (filters?.theme && filters.theme !== "todos" && story.theme !== filters.theme) {
      return false;
    }
    if (filters?.level && filters.level !== "todos" && story.reading_level !== filters.level) {
      return false;
    }
    if (typeof filters?.age === "number") {
      if (!(story.age_min <= filters.age && story.age_max >= filters.age)) {
        return false;
      }
    }
    return true;
  });
}

export function getLibraryStoryDetails(storyId: string, profile?: SpecialNeedsProfile): GeneratedLibraryStory | null {
  const narrada = getHistoriaNarrada(storyId);
  if (narrada) {
    const adapter = profile ? PROFILE_ADAPTERS[profile] : undefined;
    return adapter ? adapter(narrada.story, narrada.pages, narrada.questions) : narrada;
  }
  const story = LIBRARY_STORIES.find((item) => item.id === storyId);
  if (!story) return null;
  const pages = buildStoryPages(story, CATEGORY_CONFIG[story.category].pageCount, profile);
  const questions = buildStoryQuestions(story, pages);
  const adapter = profile ? PROFILE_ADAPTERS[profile] : undefined;
  if (!adapter) {
    return { story, pages, questions };
  }
  return adapter(story, pages, questions);
}

export function generateLibraryStoryFromInput(input: {
  theme?: StoryTheme;
  age?: number;
  level?: ReadingLevel;
  childName?: string;
  hyperfocus?: string;
  category?: StoryCategory;
  profile?: SpecialNeedsProfile;
}): GeneratedLibraryStory {
  const category = input.category
    ? input.category
    : input.age !== undefined && input.age <= 5
    ? "pre-escola"
    : input.level === "iniciante"
    ? "alfabetizacao"
    : input.theme === "espaco" || input.theme === "super-herois"
    ? "habilidades-sociais"
    : input.theme === "natureza" || input.theme === "animais"
    ? "emocoes"
    : "inclusao";

  const config = CATEGORY_CONFIG[category];
  const index = Math.floor(Math.random() * config.count);
  const story = buildLibraryStory(category, index);
  const details = getLibraryStoryDetails(story.id, input.profile);
  if (!details) {
    throw new Error("Não foi possível gerar a história a partir da biblioteca.");
  }
  if (input.childName) {
    details.story.title = `${input.childName} e ${details.story.title}`;
  }
  if (input.hyperfocus) {
    details.story.description = `${details.story.description} A história também conecta com ${input.hyperfocus}.`;
  }
  return details;
}

export function getLibraryStory(storyId: string): Story | null {
  return LIBRARY_STORIES.find((story) => story.id === storyId) ?? null;
}
