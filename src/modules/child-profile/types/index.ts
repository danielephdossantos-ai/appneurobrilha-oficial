import { z } from "zod";

export const DiagnosticoSchema = z.enum([
  "tdah",
  "tea",
  "dislexia",
  "tod",
  "deficiencia_intelectual",
  "altas_habilidades",
  "neurotipico",
  "discalculia",
  "multiplo",
  "nenhum",
]);

export const HiperfocoSchema = z.enum([
  "animais",
  "dinossauros",
  "espaco",
  "veiculos",
  "princesas",
  "super-herois",
  "robos",
  "musica",
]);

export const ChildProfileSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string().uuid(),
  nome: z.string().min(2),
  idade: z.number().min(0).max(18),
  serie: z.string(),
  hiperfoco: HiperfocoSchema,
  diagnostico: DiagnosticoSchema,
  avatar: z.string(),
  anamnese_completa: z.boolean(),
  perfil: z.object({
    leitura: z.number(),
    escrita: z.number(),
    matematica: z.number(),
    atencao: z.number(),
    linguagem: z.number(),
    autonomia: z.number(),
    emocional: z.number(),
    social: z.number(),
  }),
  niveis: z.object({
    geral: z.number().min(1).max(4),
    portugues: z.number().min(1).max(4),
    matematica: z.number().min(1).max(4),
    ciencias: z.number().min(1).max(4),
    historia: z.number().min(1).max(4),
    geografia: z.number().min(1).max(4),
  }),
  tempo_atencao_min: z.number(),
  flags: z.record(z.string(), z.boolean()),
  observacoes: z.string().optional(),
});

export type ChildProfile = z.infer<typeof ChildProfileSchema>;
export type Diagnostico = z.infer<typeof DiagnosticoSchema>;
export type Hiperfoco = z.infer<typeof HiperfocoSchema>;
