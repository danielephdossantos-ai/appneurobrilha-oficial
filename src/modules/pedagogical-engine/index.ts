/**
 * PedagogicalEngine
 * -----------------
 * Orquestra APENAS a sequência da aula.
 * NUNCA cria textos. NUNCA gera explicações.
 * Toda informação vem do banco via LessonService.
 *
 * Fluxo fixo:
 *   aula → exemplos → atividades → revisão → quiz → render
 */
import { LessonService } from "@/services/lessons/LessonService";
import type { LessonContent } from "@/modules/pedagogical-repository/types";

export type PedagogicalStage =
  | "aula"
  | "exemplos"
  | "atividades"
  | "revisao"
  | "quiz";

export const PEDAGOGICAL_FLOW: PedagogicalStage[] = [
  "aula",
  "exemplos",
  "atividades",
  "revisao",
  "quiz",
];

export interface PedagogicalBundle {
  codigo_bncc: string;
  aula: LessonContent | null;
  exemplos: Awaited<ReturnType<typeof LessonService.getExamples>>;
  atividades: Awaited<ReturnType<typeof LessonService.getAtividades>>;
  revisao: Awaited<ReturnType<typeof LessonService.getRevisao>>;
  quiz: Awaited<ReturnType<typeof LessonService.getQuiz>>;
  ready: boolean;
  missing: PedagogicalStage[];
}

export const PedagogicalEngine = {
  flow: PEDAGOGICAL_FLOW,

  /** Carrega a sequência completa a partir do banco. */
  async load(codigo_bncc: string): Promise<PedagogicalBundle> {
    const aula = await LessonService.getLesson(codigo_bncc);
    if (!aula) {
      return {
        codigo_bncc,
        aula: null,
        exemplos: [],
        atividades: [],
        revisao: null,
        quiz: [],
        ready: false,
        missing: [...PEDAGOGICAL_FLOW],
      };
    }

    const [exemplos, atividades, revisao, quiz] = await Promise.all([
      LessonService.getExamples(codigo_bncc),
      LessonService.getAtividades(codigo_bncc),
      LessonService.getRevisao(codigo_bncc),
      LessonService.getQuiz(codigo_bncc),
    ]);

    const missing: PedagogicalStage[] = [];
    if (!exemplos || exemplos.length === 0) missing.push("exemplos");
    if (!atividades || atividades.length === 0) missing.push("atividades");
    if (!revisao) missing.push("revisao");
    if (!quiz) missing.push("quiz");

    return {
      codigo_bncc,
      aula,
      exemplos,
      atividades,
      revisao,
      quiz,
      ready: missing.length === 0,
      missing,
    };
  },
};

export type { LessonContent };
