export type OptionColor = 'red' | 'green' | 'orange' | 'blue' | 'purple' | 'yellow';

export interface ExploracaoPair {
  left: string;
  right: string;
}

export interface PraticarOption {
  text: string;
  isCorrect: boolean;
  color: OptionColor;
}

export type VisualType =
  | 'fraction_bar'         // pizza/bar dividida em partes, preenchendo gradualmente
  | 'multiplication_grid'  // grupos de objetos que aparecem um a um
  | 'math_steps'           // passos da conta aparecendo linha a linha
  | 'counter_grid'         // grade de emojis clicáveis que somem ao contar
  | 'word_visual'          // pares de palavras com ícone ilustrativo

export interface MathStep {
  expr: string;
  label?: string;
  highlight?: boolean;
  color?: 'blue' | 'green' | 'orange' | 'purple' | 'teal';
}

export interface VisualConfig {
  type: VisualType;
  math_steps?: MathStep[];
  fraction?: {
    numerator: number;
    denominator: number;
    emoji: string;
    label: string;
  };
  multiplication?: {
    groups: number;
    items_per_group: number;
    emoji: string;
  };
  counter?: {
    items: string[];   // array of emojis shown in grid
    question: string;
    answer: number;
  };
}

export interface ActivityLesson {
  id: string;
  title: string;
  topic: string;
  subject: string;
  xp: number;
  screens: {
    explicacao: {
      instruction: string;
      highlight: string;
      summary: string;
      visual_emoji?: string;  // big emoji shown in header background
    };
    exploracao: {
      instruction: string;
      pairs: ExploracaoPair[];
      visual?: VisualConfig;  // visual component shown below pairs
    };
    explicacao_curta: {
      text: string;
      highlights?: string[];
      tip?: string;           // custom tip text
    };
    exemplo_visual: {
      title: string;
      sentences: Array<{ text: string; emoji?: string }>;
      conclusion: string;
      visual?: VisualConfig;  // step-by-step visual for math
    };
    praticar: {
      question: string;
      reference?: string;
      options: PraticarOption[];
      visual?: VisualConfig;  // counter grid for practice
    };
  };
}
