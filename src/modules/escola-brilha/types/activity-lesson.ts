export type OptionColor = "red" | "green" | "orange" | "blue" | "purple" | "yellow";

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
  | "fraction_bar" // pizza interativa — 4 pedaços, modo 1/4 1/2 3/4
  | "pizza_bite" // pizza com pedaço animado sendo comido
  | "multiplication_grid" // grupos de objetos que aparecem um a um
  | "group_build" // grupos construindo até o total (multiplicação)
  | "math_steps" // passos da conta aparecendo linha a linha
  | "counter_grid" // grade de emojis clicáveis que somem ao contar
  | "word_visual"; // pares de palavras com ícone ilustrativo

export interface MathStep {
  expr: string;
  label?: string;
  highlight?: boolean;
  color?: "blue" | "green" | "orange" | "purple" | "teal";
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
  pizza_bite?: {
    total: number; // denominador — total de pedaços
    eaten: number; // numerador — pedaços comidos
    item: string; // nome do item (ex: "pizza")
  };
  multiplication?: {
    groups: number;
    items_per_group: number;
    emoji: string;
  };
  group_build?: {
    groups: number;
    items_per_group: number;
    emoji: string;
    item_name: string; // ex: "balas"
  };
  counter?: {
    items: string[]; // array of emojis shown in grid
    question: string;
    answer: number;
  };
  word_visual?: {
    /** Par/lista de palavras com emoji grande e legenda — pra conceitos abstratos
     *  (sinônimos, antônimos, substantivos) ficarem visualmente concretos. */
    items: Array<{ label: string; emoji: string; caption?: string }>;
    /** Símbolo de conexão entre os items (= sinônimo, ≠ antônimo, → etc). */
    connector?: string;
    connectorLabel?: string;
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
      visual_emoji?: string; // big emoji shown in header background
    };
    exploracao: {
      instruction: string;
      pairs: ExploracaoPair[];
      visual?: VisualConfig; // visual component shown below pairs
    };
    explicacao_curta: {
      text: string;
      highlights?: string[];
      tip?: string; // custom tip text
    };
    exemplo_visual: {
      title: string;
      sentences: Array<{ text: string; emoji?: string }>;
      conclusion: string;
      visual?: VisualConfig; // step-by-step visual for math
    };
    praticar: {
      question: string;
      reference?: string;
      options: PraticarOption[];
      visual?: VisualConfig; // counter grid for practice
    };
  };
}
