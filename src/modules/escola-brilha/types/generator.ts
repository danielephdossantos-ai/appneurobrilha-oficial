import { z } from "zod";
import { ActivityTypeSchema, SensoryProfileSchema } from "./index";

export const DifficultyLevelSchema = z.enum(['beginner', 'intermediate', 'advanced', 'expert']);

export const GeneratorInputSchema = z.object({
  domain: z.string(),
  difficulty: z.number().min(0).max(1), // 0 to 1 scale
  childProfile: z.object({
    neurodivergence: z.array(z.string()),
    interests: z.array(z.string()),
    sensoryThreshold: z.number(),
    lastErrors: z.array(z.string()),
  }),
  previousActivityIds: z.array(z.string()),
  grade: z.string().optional(),
  subject: z.string().optional(),
});

export type DifficultyLevel = z.infer<typeof DifficultyLevelSchema>;
export type GeneratorInput = z.infer<typeof GeneratorInputSchema>;

export interface GeneratedActivity {
  id: string;
  templateId: string;
  type: string;
  title: string;
  instruction: string;
  content: any;
  difficulty: number;
  sensoryProfile: z.infer<typeof SensoryProfileSchema>;
  audioCues?: string[];
  visualAids?: string[];
  metadata: {
    domain: string;
    generatedAt: string;
    seed: string;
  };
}

export interface GeneratorProvider {
  generate(input: GeneratorInput): GeneratedActivity;
  supports(domain: string): boolean;
}
