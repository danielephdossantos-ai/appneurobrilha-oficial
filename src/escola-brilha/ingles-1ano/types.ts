// Tipos compartilhados por todas as aulas de Inglês 1º Ano.

export interface Vocab {
  id: string;
  en: string;
  pt: string;
  img: string;
}

export interface StoryPanel {
  img: string;
  en: string;
  pt: string;
}

export type DialogWho = string;

export interface DialogTurn {
  who: DialogWho;
  img: string;
  en: string;
  pt: string;
}

export interface ReadingData {
  title: string;
  img: string;
  parts: { en: string; pt: string; highlight: string[] }[];
}

export interface WritingBlank {
  prompt: string; // com "___"
  answer: string;
  hint: string;
  options: string[];
}

export interface QuizQ {
  q: string;
  qEn?: string;
  img?: string;
  options: { text: string; correct?: boolean }[];
}

export interface RealLifeItem {
  situation: string;
  answer: string;
}

export interface GrammarData {
  focus: string;
  why: string;
  examples: { en: string; pt: string }[];
  errors: { wrong: string; right: string; why: string }[];
}

// ============ Novos módulos opcionais (SPEB 1.0) ============

/** 🎵 Música: linhas cantáveis com gesto/emoji. */
export interface SongData {
  title: string;
  hookPt?: string; // explicação curta em pt
  verses: { en: string; pt: string; emoji?: string }[];
}

/** 🎮 Color Hunter (ou "find the X"): rodadas com objetos, uma resposta certa. */
export interface HunterRound {
  promptEn: string; // "Find something BLUE"
  promptPt: string; // "Encontre algo AZUL"
  targetLabel: string; // texto que aparece pra criança
  objects: { id: string; label: string; img: string; isTarget?: boolean }[];
}
export interface HunterData {
  intro?: string;
  rounds: HunterRound[];
}

/** 🎨 Paint the Picture: escolher a cor certa pra pintar o objeto. */
export interface PaintRound {
  promptEn: string; // "Paint the sun yellow."
  promptPt: string;
  outlineEmoji: string; // 🌞 ☁️ 🍎
  correctHex: string; // cor certa
  options: { name: string; hex: string; en: string }[]; // 3-4 cores
}
export interface PaintData {
  intro?: string;
  rounds: PaintRound[];
}

/** 🧠 Memory Game: pares palavra en ↔ imagem. */
export interface MemoryData {
  intro?: string;
  pairs: { id: string; en: string; pt: string; img: string }[]; // 4 pares recomendados
}

/** 🏠 Quarto virtual: uma cena com hotspots pra caçar. */
export interface VirtualRoomData {
  intro?: string;
  img: string; // cena
  items: { en: string; pt: string; emoji: string }[]; // itens a encontrar
}

/** 📖 My Color Book / passaporte: livrinho digital, 1 página por vez. */
export interface BookData {
  title: string;
  intro?: string;
  pages: { en: string; pt: string; img: string; badge?: string }[];
}

export interface LessonMeta {
  unitLabel: string;
  headerKicker: string;
  coverKicker: string;
  coverTitle: string;
  coverSubtitle: string;
  storyTitle: string;
  vocabularyTitle: string;
  speakingTargets: string[];
  listeningIntro: string;
  listeningQuestion: string;
  listeningOptions: string[];
  listeningCorrect: string;
  listeningWrongHint: string;
  readingNarration: string;
  grammarNarration: string;
  finalProjectIntro: string;
  finalProjectPhrase: (name: string) => string;
  finalProjectSectionTitle: string;
}

export interface LessonData {
  slug: string;
  meta: LessonMeta;
  VOCAB: Vocab[];
  STORY: StoryPanel[];
  DIALOG: DialogTurn[];
  READING: ReadingData;
  WRITING: WritingBlank[];
  QUIZ: QuizQ[];
  REAL_LIFE: RealLifeItem[];
  GRAMMAR: GrammarData;

  // Opcionais — renderizam automaticamente quando presentes
  SONG?: SongData;
  HUNTER?: HunterData;
  PAINT?: PaintData;
  MEMORY?: MemoryData;
  VIRTUAL_ROOM?: VirtualRoomData;
  BOOK?: BookData;
}
