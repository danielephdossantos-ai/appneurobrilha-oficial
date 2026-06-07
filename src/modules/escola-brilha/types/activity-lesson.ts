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
    };
    exploracao: {
      instruction: string;
      pairs: ExploracaoPair[];
    };
    explicacao_curta: {
      text: string;
      highlights?: string[];
    };
    exemplo_visual: {
      title: string;
      sentences: Array<{ text: string; emoji?: string }>;
      conclusion: string;
    };
    praticar: {
      question: string;
      reference?: string;
      options: PraticarOption[];
    };
  };
}
