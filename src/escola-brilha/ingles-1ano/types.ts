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

export interface LessonMeta {
  unitLabel: string; // ex: "Unit 2 · Lesson 1 — Hello, my friend!"
  headerKicker: string; // "My First English Adventure"
  coverKicker: string; // "Lesson 2"
  coverTitle: string;
  coverSubtitle: string;
  storyTitle: string; // título da seção 1
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
}
