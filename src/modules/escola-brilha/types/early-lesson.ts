export type VowelTeachStep = {
  kind: 'vowel-teach';
  id: string;
  vowel: string;
  color: string;
  bg: string;
  text: string;
  emoji: string;
  word: string;
  word2?: string;
  speech: string;
};

export type VowelPracticeStep = {
  kind: 'vowel-practice';
  id: string;
  target: string;
  target_color: string;
  target_bg: string;
  question_speech: string;
  options: Array<{ letter: string; color: string; bg: string }>;
};

export type CountTeachStep = {
  kind: 'count-teach';
  id: string;
  emoji: string;
  count: number;
  speech: string;
  count_words: string[];
};

export type CountPracticeStep = {
  kind: 'count-practice';
  id: string;
  emoji: string;
  count: number;
  question_speech: string;
  options: number[];
};

export type SubtractStep = {
  kind: 'subtract';
  id: string;
  emoji: string;
  total: number;
  remove: number;
  teach_speech: string;
  remove_speech: string;
  question_speech: string;
  options: number[];
};

export type IntroStep = {
  kind: 'intro';
  id: string;
  emoji: string;
  title: string;
  speech: string;
};

export type EarlyStep =
  | IntroStep
  | VowelTeachStep
  | VowelPracticeStep
  | CountTeachStep
  | CountPracticeStep
  | SubtractStep;

export interface EarlyLesson {
  id: string;
  title: string;
  steps: EarlyStep[];
}
