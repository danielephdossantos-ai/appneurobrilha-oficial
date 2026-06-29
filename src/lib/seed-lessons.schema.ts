import { z } from "zod";

/**
 * Schema do payload pedagógico esperado do Groq para alimentar `lesson_drafts`.
 * Espelha exatamente o que a function `approve_lesson_draft(_draft_id)` consome.
 */

const QuestaoSchema = z.object({
  enunciado: z.string().min(3),
  alternativas: z
    .array(
      z.object({
        texto: z.string().min(1),
        correta: z.boolean(),
        comentario: z.string().default(""),
      }),
    )
    .min(2)
    .max(5),
  comentario_resposta: z.string().default(""),
});

const AtividadeItemSchema = z.object({
  enunciado: z.string().min(3),
  resposta: z.string().default(""),
  dica: z.string().default(""),
});

export const LessonDraftPayloadSchema = z.object({
  // pais (lesson_content)
  titulo: z.string().min(3),
  objetivo: z.string().min(5),
  introducao: z.string().min(10),
  explicacao: z.string().min(20),
  contextualizacao: z.string().min(10),
  resumo: z.string().min(10),
  palavras_chave: z.array(z.string()).min(3).max(10),
  atividade_guiada: z.array(AtividadeItemSchema).min(1).max(5),
  atividade_pratica: z.array(AtividadeItemSchema).min(1).max(5),
  desafio_resumo: z.object({
    titulo: z.string(),
    enunciado: z.string(),
    resposta: z.string().default(""),
  }),
  quiz_resumo: z.array(QuestaoSchema).min(3).max(6),
  respostas: z.array(z.string()).default([]),
  tempo_estimado: z.number().int().min(5).max(60).default(20),

  // filhas
  exemplos: z
    .array(
      z.object({
        titulo: z.string(),
        contexto: z.string(),
        enunciado: z.string(),
        resolucao: z.string(),
        resposta: z.string(),
        explicacao: z.string(),
      }),
    )
    .min(2)
    .max(4),

  curiosidades: z
    .array(
      z.object({
        titulo: z.string(),
        conteudo: z.string(),
        fonte: z.string().default(""),
      }),
    )
    .min(1)
    .max(3),

  quiz: z.object({
    titulo: z.string(),
    descricao: z.string(),
    questoes: z.array(QuestaoSchema).min(3).max(6),
  }),

  desafios: z
    .array(
      z.object({
        titulo: z.string(),
        objetivo: z.string(),
        descricao: z.string(),
        resposta: z.string().default(""),
        explicacao: z.string().default(""),
        pontuacao: z.number().int().default(10),
        nivel: z.enum(["facil", "medio", "dificil"]).default("medio"),
      }),
    )
    .min(1)
    .max(3),

  avaliacao: z.object({
    tipo: z.enum(["diagnostica", "formativa", "final"]).default("formativa"),
    titulo: z.string(),
    descricao: z.string(),
    questoes: z.array(QuestaoSchema).min(3).max(6),
  }),

  adaptacoes: z
    .array(
      z.object({
        perfil: z.enum([
          "tdah",
          "tea",
          "dislexia",
          "deficiencia_intelectual",
          "altas_habilidades",
        ]),
        objetivo: z.string(),
        estrategias: z.array(z.string()).min(2),
        recursos: z.array(z.string()).default([]),
        ajustes_atividade: z.array(z.string()).default([]),
        orientacoes_familia: z.string().default(""),
        observacoes: z.string().default(""),
      }),
    )
    .min(2),

  explicacoes_extra: z
    .array(
      z.object({
        titulo: z.string(),
        conteudo: z.string(),
      }),
    )
    .min(1)
    .max(3),

  revisao: z.object({
    resumo_curto: z.string(),
    resumo_completo: z.string(),
    mapa_mental: z.record(z.string(), z.unknown()).default({}),
    palavras_chave: z.array(z.string()).default([]),
    erros_comuns: z.array(z.unknown()).default([]),
    dicas: z.array(z.unknown()).default([]),
  }),
});

export type LessonDraftPayload = z.infer<typeof LessonDraftPayloadSchema>;
