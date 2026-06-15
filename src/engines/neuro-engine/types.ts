import { z } from "zod";

export const NeuroProfileSchema = z.enum([
  "TEA",
  "TDAH",
  "DeficienciaIntelectual",
  "AtrasoAprendizagem",
  "Dislexia",
  "Tipico",
]);

export type NeuroProfile = z.infer<typeof NeuroProfileSchema>;

export const AttentionMetricsSchema = z.object({
  averageAttentionSpan: z.number().min(0), // em segundos
  focusScore: z.number().min(0).max(1),
  distractionCount: z.number().min(0),
  impulsivityRate: z.number().min(0).max(1),
  hyperfocusDetected: z.boolean(),
});

export type AttentionMetrics = z.infer<typeof AttentionMetricsSchema>;

export const FatigueMetricsSchema = z.object({
  cognitiveLoad: z.number().min(0).max(1),
  sessionDuration: z.number().min(0), // em segundos
  lastBreakTime: z.number().min(0), // timestamp ou segundos atrás
  needForBreak: z.boolean(),
  fatigueLevel: z.number().min(0).max(1),
});

export type FatigueMetrics = z.infer<typeof FatigueMetricsSchema>;

export const SensoryMetricsSchema = z.object({
  visualOverload: z.number().min(0).max(1),
  auditorySensitivity: z.number().min(0).max(1),
  sensoryTolerance: z.number().min(0).max(1),
  stimulusReactivity: z.number().min(0).max(1),
});

export type SensoryMetrics = z.infer<typeof SensoryMetricsSchema>;

export const ResponseMetricsSchema = z.object({
  averageResponseTime: z.number().min(0),
  accuracyRate: z.number().min(0).max(1),
  errorFrequency: z.number().min(0),
  helpRequests: z.number().min(0),
});

export type ResponseMetrics = z.infer<typeof ResponseMetricsSchema>;

export const NeuroStateSchema = z.object({
  profile: NeuroProfileSchema,
  attention: AttentionMetricsSchema,
  fatigue: FatigueMetricsSchema,
  sensory: SensoryMetricsSchema,
  performance: ResponseMetricsSchema,
  timestamp: z.number(),
});

export type NeuroState = z.infer<typeof NeuroStateSchema>;

export interface NeuroAdjustment {
  visualComplexity: "low" | "medium" | "high";
  stimuliReduction: boolean;
  interfaceSimplification: boolean;
  difficultyScale: number; // 0.1 to 1.0
  positiveReinforcementFrequency: number; // 0.0 to 1.0
  suggestBreak: boolean;
  audioAdaptation: {
    volume: number;
    pacing: "slow" | "normal" | "fast";
  };
  animationIntensity: "none" | "low" | "standard";
  maxInformationDensity: number; // 1 to 10
}

export interface NeuroLog {
  id: string;
  childId: string;
  timestamp: string;
  previousState: NeuroState;
  newState: NeuroState;
  adjustmentApplied: NeuroAdjustment;
  trigger: string;
}
