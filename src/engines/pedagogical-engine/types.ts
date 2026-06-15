export type ActivityType =
  | "drag-drop"
  | "multiple-choice"
  | "association"
  | "complete-text"
  | "reading"
  | "logic-sequence"
  | "memory"
  | "pairing"
  | "visual-math"
  | "interpretation"
  | "motor-coordination"
  | "phonological-awareness"
  | "visual-perception"
  | "writing-practice";

export type DifficultyLevel = "easy" | "medium" | "hard" | "expert";
export type NivelDificuldade = "simples" | "intermediario" | "complexo";

export type MasteryLevel = "initiated" | "in-progress" | "mastered" | "review-needed";

export interface ActivityOption {
  id: string;
  content: string; // text or image URL
  type: "text" | "image";
  isCorrect?: boolean;
}

export interface ActivityTemplate {
  id: string;
  type: ActivityType;
  title: string;
  instruction: string;
  baseDifficulty: DifficultyLevel;
  contentPool: string[]; // references to content IDs
  requiredSkills: string[]; // BNCC skills
  variationId?: string;
}

export interface GeneratedActivity {
  id: string;
  type: ActivityType;
  title: string;
  instruction: string;
  difficulty: DifficultyLevel;
  content: {
    question: string;
    options?: ActivityOption[];
    answer?: string;
    sequence?: ActivityOption[];
    pairs?: [ActivityOption, ActivityOption][];
    metadata?: any;
  };
  reward: {
    stars: number;
    coins: number;
    energy: number;
  };
}

export interface PedagogicalActivity {
  id: string;
  titulo: string;
  serie?: string;
  faixaEtaria?: string;
  materia: string;
  habilidadeBNCC?: string;
  microHabilidade?: string;
  nivelDificuldade: NivelDificuldade;
  neuroPerfil: string[];
  tipoSensorial: string[];
  tempoMedio?: number; // em minutos
  objetivoPedagogico?: string;
  estrategiaPedagogica?: string;
  preRequisitos: string[];
  nivelCognitivo?: string;
  reforcoPositivo?: string;
  reforcoErro?: string;
  variacoes: any[];
  tipoResposta?: string;
  adaptacoes: Record<string, any>;
  tags: string[];
  created_at?: string;
  updated_at?: string;
}

export interface ActivityPerformance {
  activityId: string;
  timeSpent: number;
  attempts: number;
  errors: number;
  success: boolean;
}
