import { z } from "zod";

export const AnamnesisSchema = z.object({
  pedagogical: z.object({
    age: z.number().min(0).max(18),
    schooling: z.string(),
    grade: z.string(),
    literacy_level: z.enum(['none', 'initial', 'intermediate', 'advanced']),
    math_level: z.enum(['none', 'initial', 'intermediate', 'advanced']),
    reading_ability: z.number().min(0).max(100),
    writing_ability: z.number().min(0).max(100),
  }),
  cognitive: z.object({
    attention: z.number().min(0).max(100),
    memory: z.number().min(0).max(100),
    focus: z.number().min(0).max(100),
    impulsivity: z.number().min(0).max(100),
    organization: z.number().min(0).max(100),
  }),
  sensory: z.object({
    auditory_sensitivity: z.number().min(0).max(100),
    visual_sensitivity: z.number().min(0).max(100),
    tactile_sensitivity: z.number().min(0).max(100),
    movement_sensitivity: z.number().min(0).max(100),
    general_sensitivity: z.number().min(0).max(100),
  }),
  behavioral: z.object({
    routine_stability: z.number().min(0).max(100),
    interests: z.array(z.string()),
    motivators: z.array(z.string()),
    main_difficulties: z.array(z.string()),
  }),
});

export type AnamnesisData = z.infer<typeof AnamnesisSchema>;

export interface NeuroProfile {
  scores: {
    pedagogical: number;
    cognitive: number;
    sensory: number;
    behavioral: number;
  };
  adaptation_rules: {
    visual_clutter_reduction: boolean;
    audio_reinforcement_needed: boolean;
    session_duration_limit_minutes: number;
    break_frequency_minutes: number;
  };
  strengths: string[];
  focus_areas: string[];
}
