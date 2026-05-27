
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
  | "visual-perception";

export type DifficultyLevel = "easy" | "medium" | "hard" | "expert";

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

export interface ActivityPerformance {
  activityId: string;
  timeSpent: number;
  attempts: number;
  errors: number;
  success: boolean;
}
