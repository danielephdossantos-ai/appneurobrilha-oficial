import { z } from "zod";

export const NeuroAnalyticsEventSchema = z.object({
  id: z.string().uuid().optional(),
  child_id: z.string().uuid(),
  activity_id: z.string().uuid().optional(),
  event_type: z.enum([
    "screen_time",
    "click",
    "error",
    "success",
    "abandonment",
    "pause",
    "hyperfocus_detected",
    "overload_detected",
    "evolution_milestone"
  ]),
  metadata: z.record(z.string(), z.any()).default({}),
  duration_ms: z.number().optional(),
  created_at: z.string().datetime().optional()
});

export type NeuroAnalyticsEvent = z.infer<typeof NeuroAnalyticsEventSchema>;

export interface EvolutionData {
  weekly: { date: string; value: number }[];
  monthly: { date: string; value: number }[];
  cognitiveRadar: {
    attention: number;
    memory: number;
    executive: number;
    language: number;
    math: number;
    autonomy: number;
  };
  emotionalMap: {
    frustration: number;
    engagement: number;
    calm: number;
    joy: number;
  };
  bnccProgress: {
    competence: string;
    progress: number;
  }[];
  executiveFunctions: {
    inhibitoryControl: number;
    workingMemory: number;
    cognitiveFlexibility: number;
  };
}

export interface Insight {
  id: string;
  type: "positive" | "warning" | "recommendation";
  message: string;
  category: "neuro" | "pedagogy" | "behavior";
  created_at: string;
}
