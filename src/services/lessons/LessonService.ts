/**
 * LessonService — ÚNICO ponto de leitura de aulas.
 *
 * Regras absolutas:
 *  - Toda aula vem do banco (tabela `public.lesson_content`).
 *  - Identificada pelo código BNCC.
 *  - NUNCA gera conteúdo, NUNCA concatena strings, NUNCA usa a descrição da
 *    habilidade como explicação.
 *  - Se a aula não existir, devolve null. A UI deve mostrar:
 *      "Aula ainda não cadastrada."
 *  - Apenas leitura. Sem templates, sem fallback dinâmico.
 */

import { supabase } from "@/integrations/supabase/client";
import {
  getLessonByBNCC,
  getLessonByBNCCSync,
  useLessonByBNCC,
  clearLessonRepositoryCache,
  type LessonContent,
  type AtividadeItem,
  type QuizQuestao,
} from "@/modules/pedagogical-repository";

export const LESSON_NOT_FOUND_MESSAGE = "Aula ainda não cadastrada.";

export const LessonService = {
  /** Aula completa pelo código BNCC. `null` se não estiver no banco. */
  getLesson(codigoBncc: string): Promise<LessonContent | null> {
    return getLessonByBNCC(codigoBncc);
  },

  getLessonSync(codigoBncc: string): LessonContent | null {
    return getLessonByBNCCSync(codigoBncc);
  },

  /** Atividades guiada + prática salvas para a aula. */
  async getAtividades(codigoBncc: string): Promise<AtividadeItem[]> {
    const lesson = await getLessonByBNCC(codigoBncc);
    if (!lesson) return [];
    return [
      ...(lesson.atividade_guiada ?? []),
      ...(lesson.atividade_pratica ?? []),
    ];
  },

  async getQuiz(codigoBncc: string): Promise<QuizQuestao[]> {
    const lesson = await getLessonByBNCC(codigoBncc);
    return lesson?.quiz ?? [];
  },

  async getRevisao(codigoBncc: string): Promise<string | null> {
    const lesson = await getLessonByBNCC(codigoBncc);
    return lesson?.revisao ?? null;
  },

  async getDesafio(codigoBncc: string): Promise<AtividadeItem | null> {
    const lesson = await getLessonByBNCC(codigoBncc);
    return lesson?.desafio ?? null;
  },

  async getRespostas(codigoBncc: string): Promise<string[]> {
    const lesson = await getLessonByBNCC(codigoBncc);
    return lesson?.respostas ?? [];
  },

  /** Existência rápida (sem hidratar a aula inteira em memória). */
  async exists(codigoBncc: string): Promise<boolean> {
    const key = (codigoBncc || "").trim().toUpperCase();
    if (!key) return false;
    const { data, error } = await (supabase as unknown as {
      from: (t: string) => {
        select: (c: string, o?: unknown) => {
          eq: (c: string, v: string) => {
            maybeSingle: () => Promise<{ data: unknown; error: unknown }>;
          };
        };
      };
    })
      .from("lesson_content")
      .select("id")
      .eq("codigo_bncc", key)
      .maybeSingle();
    if (error) return false;
    return !!data;
  },

  clearCache: clearLessonRepositoryCache,
  useLesson: useLessonByBNCC,
};

export type { LessonContent, AtividadeItem, QuizQuestao };
