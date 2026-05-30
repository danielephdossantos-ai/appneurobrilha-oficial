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
    "resume",
    "hyperfocus_detected",
    "overload_detected",
    "fatigue_detected",
    "regression_detected",
    "evolution_milestone",
    "sensory_distraction",
    "focus_lost",
    "focus_gained"
  ]),
  metadata: z.record(z.string(), z.any()).default({}),
  duration_ms: z.number().optional(),
  timestamp: z.number().optional(), // Unix timestamp for better calc
  created_at: z.string().datetime().optional()
});

export type NeuroAnalyticsEvent = z.infer<typeof NeuroAnalyticsEventSchema>;

export interface CognitiveMetrics {
  attention: number;
  memory: number;
  executive: number;
  language: number;
  math: number;
  autonomy: number;
  fatigue_index: number;
  focus_score: number;
  inhibitory_control: number;
  working_memory: number;
  cognitive_flexibility: number;
}

export interface EmotionalMetrics {
  frustration: number;
  engagement: number;
  calm: number;
  joy: number;
  anxiety: number;
}

export interface BNCCCompetence {
  code: string;
  name: string;
  progress: number;
  mastery_level: 'beginner' | 'intermediate' | 'advanced' | 'master';
}

export interface EvolutionData {
  weekly: { date: string; value: number }[];
  monthly: { date: string; value: number }[];
  cognitiveRadar: CognitiveMetrics;
  emotionalMap: EmotionalMetrics;
  bnccProgress: BNCCCompetence[];
  trends: {
    regression: boolean;
    improvement: number;
    main_bottleneck: string;
    peak_performance_hour: string;
  };
}

export interface Insight {
  id: string;
  type: "positive" | "warning" | "recommendation" | "alert";
  message: string;
  category: "neuro" | "pedagogy" | "behavior" | "sensory";
  severity: "low" | "medium" | "high";
  created_at: string;
  action_link?: string;
}

export interface AnalyticsReport {
  childId: string;
  period: "weekly" | "monthly" | "quarterly";
  generated_at: string;
  evolution: EvolutionData;
  insights: Insight[];
  summary: string;
}
