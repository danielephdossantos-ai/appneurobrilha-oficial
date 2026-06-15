import { z } from "zod";

export const CognitiveSkillSchema = z.enum([
  "atencao",
  "memoria",
  "foco",
  "raciocinio",
  "planejamento",
  "flexibilidade_cognitiva",
  "velocidade_processamento",
]);

export type CognitiveSkill = z.infer<typeof CognitiveSkillSchema>;

export interface ExerciseResult {
  id: string;
  skill: CognitiveSkill;
  score: number;
  duration_ms: number;
  precision: number; // 0 to 1
  difficulty_level: number;
  timestamp: number;
}

export interface CognitiveExercise {
  id: string;
  skill: CognitiveSkill;
  title: string;
  description: string;
  base_difficulty: number;
  rules: {
    stimuli_count: number;
    speed_factor: number;
    duration_seconds: number;
  };
}

export interface TrainingSession {
  id: string;
  childId: string;
  exercises: ExerciseResult[];
  overall_score: number;
  started_at: number;
  finished_at?: number;
}
