import { z } from "zod";

export const CognitiveProfileSchema = z.object({
  id: z.string().uuid().optional(),
  child_id: z.string().uuid(),
  frequent_errors: z.array(z.object({
    skill_code: z.string(),
    error_count: z.number(),
    last_error_at: z.string().datetime()
  })).default([]),
  mastered_skills: z.array(z.string()).default([]),
  fragile_skills: z.array(z.string()).default([]),
  avg_focus_time: z.number().default(0),
  preferred_stimuli: z.array(z.string()).default([]),
  sensory_difficulty_level: z.number().min(1).max(5).default(1),
  emotional_behavior_patterns: z.record(z.string(), z.number()).default({}),
  avg_response_speed: z.number().default(0),
  pedagogical_evolution_score: z.number().default(0),
  updated_at: z.string().datetime().optional()
});

export type CognitiveProfile = z.infer<typeof CognitiveProfileSchema>;

export const LongitudinalScoreSchema = z.object({
  id: z.string().uuid().optional(),
  child_id: z.string().uuid(),
  attention_score: z.number().default(0),
  self_regulation_score: z.number().default(0),
  autonomy_score: z.number().default(0),
  language_score: z.number().default(0),
  memory_score: z.number().default(0),
  coordination_score: z.number().default(0),
  reading_score: z.number().default(0),
  math_score: z.number().default(0),
  recorded_at: z.string().datetime().optional()
});

export type LongitudinalScore = z.infer<typeof LongitudinalScoreSchema>;

export interface CognitiveMetrics {
  attention: number;
  selfRegulation: number;
  autonomy: number;
  language: number;
  memory: number;
  coordination: number;
  reading: number;
  math: number;
}
