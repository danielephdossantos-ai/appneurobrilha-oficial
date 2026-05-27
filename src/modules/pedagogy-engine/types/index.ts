import { z } from "zod";

export const ActivityTypeSchema = z.enum([
  'drag-and-drop',
  'multiple-choice',
  'association',
  'complete',
  'reading',
  'logical-sequence',
  'memory',
  'pairing',
  'visual-math',
  'interpretation'
]);

export const SensoryProfileSchema = z.object({
  visualStimulus: z.enum(['low', 'medium', 'high']),
  audioRequirement: z.boolean(),
  motorComplexity: z.enum(['low', 'medium', 'high']),
});

export const ActivityTemplateSchema = z.object({
  id: z.string(),
  type: ActivityTypeSchema,
  title: z.string(),
  description: z.string(),
  difficulty: z.number(),
  cognitiveLoad: z.number(),
  sensoryProfile: SensoryProfileSchema,
});

export type ActivityType = z.infer<typeof ActivityTypeSchema>;
export type SensoryProfile = z.infer<typeof SensoryProfileSchema>;
export type ActivityTemplate = z.infer<typeof ActivityTemplateSchema>;

