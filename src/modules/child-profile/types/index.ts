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
  "minecraft",
  "carros",
  "trens",
  "arte",
  "fazendinha",
  "bailarinas",
  "sereias",
  "outros",
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
  anamnese_completa: z.boolean().default(false),
  has_hyperfocus: z.boolean().default(true),
  hyperfocus_list: z.array(HiperfocoSchema).default([]),
  sensory_mode: z.string().default("foco"),
  coins: z.number().default(0),
  earned_today: z.number().default(0),
  total_earned: z.number().default(0),
  anamnesis_id: z.string().uuid().optional(),
  anamnesis_edit_count: z.number().optional(),
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
  flags: z
    .object({
      apoioVisual: z.boolean(),
      passoAPasso: z.boolean(),
      preferAudio: z.boolean(),
      contaNosDedos: z.boolean(),
      trocaLetras: z.boolean(),
      palavrasLongas: z.boolean(),
    })
    .default({
      apoioVisual: true,
      passoAPasso: true,
      preferAudio: false,
      contaNosDedos: false,
      trocaLetras: false,
      palavrasLongas: false,
    }),
  observacoes: z.string().optional(),
});

export type ChildProfile = z.infer<typeof ChildProfileSchema>;
export type Diagnostico = z.infer<typeof DiagnosticoSchema>;
export type Hiperfoco = z.infer<typeof HiperfocoSchema>;
