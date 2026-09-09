import { z } from "zod";

export const DifficultyLevelSchema = z.enum(["easy", "medium", "hard", "expert"]);
export const NivelDificuldadeSchema = z.enum(["simples", "intermediario", "complexo"]);
export const SensoryTypeSchema = z.enum(["visual", "auditory", "tactile", "mixed"]);
export const CognitiveDomainSchema = z.enum([
  "memory",
  "attention",
  "logic",
  "language",
  "math",
  "motor",
  "socioemotional",
]);

export const ActivityOptionSchema = z.object({
  id: z.string(),
  content: z.string(),
  type: z.enum(["text", "image"]),
  isCorrect: z.boolean().optional(),
});

export const BNCCSkillSchema = z.object({
  id: z.string(),
  code: z.string(),
  description: z.string(),
  field: z.string(),
  level: z.number().min(0).max(9),
  domain: z.string().optional(),
});

export const PedagogicalActivitySchema = z.object({
  id: z.string(),
  category: z.string(),
  habilidadeBNCC: z.string(),
  objetivo: z.string(),
  idadeMinima: z.number(),
  idadeMaxima: z.number(),
  dificuldade: DifficultyLevelSchema,
  pesoCognitivo: z.number().min(1).max(10),
  tipoSensorial: SensoryTypeSchema,
  recompensa: z.object({
    stars: z.number(),
    coins: z.number(),
    energy: z.number(),
  }),
  content: z.object({
    question: z.string(),
    options: z.array(ActivityOptionSchema).optional(),
    answer: z.string().optional(),
    metadata: z.record(z.string(), z.any()).optional(),
  }),
  fallback: z.string().optional(), // ID da atividade de fallback
});

export type PedagogicalActivity = z.infer<typeof PedagogicalActivitySchema>;
export type BNCCSkill = z.infer<typeof BNCCSkillSchema>;
