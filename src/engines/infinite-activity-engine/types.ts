import { NeuroAdjustment } from "../neuro-engine/types";

export interface BNCCSkill {
  code: string;
  description: string;
  field: string;
  level: number; // 1-9 (Série)
}

export type Difficulty = "easy" | "medium" | "hard" | "expert";

export interface ActivityComponent {
  id: string;
  type: "text" | "image" | "sound" | "video";
  content: string;
  category?: string;
  tags?: string[];
}

export interface ActivityTemplate {
  id: string;
  name: string;
  type: "selection" | "sequence" | "matching" | "filling" | "sorting" | "creative" | "mosaic";
  bnccCodes: string[];
  baseDifficulty: Difficulty;
  cognitiveLoad: number; // 1-10
  minAge: number;
  maxAge: number;
  logic: string; // Describes the randomization logic
}

export interface GeneratedActivity {
  id: string;
  templateId: string;
  bnccCode: string;
  difficulty: Difficulty;
  content: any;
  adaptation: NeuroAdjustment;
  reward: {
    stars: number;
    coins: number;
    xp: number;
  };
}

