/**
 * ReforcoEngine — adaptador de leitura.
 *
 * Regras absolutas:
 *  - NÃO gera, concatena, deriva de template, nem cria aula em runtime.
 *  - Toda aula vem do banco (`public.lesson_content`) via LessonService.
 *  - Se não houver aula cadastrada, retorna estrutura vazia com a
 *    mensagem padrão "Aula ainda não cadastrada.".
 */

import { LessonService, LESSON_NOT_FOUND_MESSAGE } from "@/services/lessons/LessonService";
import type { NeuroAdjustment } from "@/engines/adaptive-engine/engine";

export interface LessonStep {
  type: "explanation" | "example" | "exercise" | "tip" | "premium_tip";
  text: string;
  difficulty?: "basic" | "intermediate" | "advanced";
  content?: unknown;
}

export interface ReforcoLesson {
  title: string;
  topic: string;
  category: string;
  levels: {
    basic: LessonStep[];
    intermediate: LessonStep[];
    advanced: LessonStep[];
  };
  premiumTips: string[];
  explanation: string;
  activityId?: string;
}

function emptyLesson(topic: string, explanation: string): ReforcoLesson {
  return {
    title: topic,
    topic,
    category: "",
    levels: { basic: [], intermediate: [], advanced: [] },
    premiumTips: [],
    explanation,
  };
}

export class ReforcoEngine {
  /**
   * Lê a aula do PedagogicalRepository pelo código BNCC.
   * `_adjustment` é mantido na assinatura por compatibilidade, mas não
   * altera o conteúdo — adaptação é responsabilidade da UI.
   */
  static async generateLesson(
    topic: string,
    _adjustment?: NeuroAdjustment,
  ): Promise<ReforcoLesson> {
    const code = (topic || "").trim().toUpperCase();
    const aula = await LessonService.getLesson(code);

    if (!aula) {
      return emptyLesson(topic, LESSON_NOT_FOUND_MESSAGE);
    }

    const basic: LessonStep[] = [
      { type: "explanation", text: aula.explicacao, difficulty: "basic" },
      ...(aula.exemplo1 ? [{ type: "example" as const, text: aula.exemplo1, difficulty: "basic" as const }] : []),
      ...(aula.atividade_guiada ?? []).map((a) => ({
        type: "exercise" as const,
        text: a.enunciado,
        difficulty: "basic" as const,
        content: a,
      })),
    ];

    const intermediate: LessonStep[] = [
      ...(aula.exemplo2 ? [{ type: "example" as const, text: aula.exemplo2, difficulty: "intermediate" as const }] : []),
      ...(aula.atividade_pratica ?? []).map((a) => ({
        type: "exercise" as const,
        text: a.enunciado,
        difficulty: "intermediate" as const,
        content: a,
      })),
    ];

    const advanced: LessonStep[] = aula.desafio
      ? [
          {
            type: "exercise",
            text: aula.desafio.enunciado,
            difficulty: "advanced",
            content: aula.desafio,
          },
        ]
      : [];

    return {
      title: aula.titulo,
      topic: aula.codigo_bncc,
      category: aula.disciplina,
      levels: { basic, intermediate, advanced },
      premiumTips: (aula.palavras_chave ?? []).map(
        (p) => `${p.termo}: ${p.definicao}`,
      ),
      explanation: aula.introducao || aula.explicacao,
      activityId: aula.id,
    };
  }

  static generateStudyRoutine(
    agendaTopic: string,
    adjustment?: NeuroAdjustment,
  ): Promise<ReforcoLesson> {
    return this.generateLesson(agendaTopic, adjustment);
  }
}
