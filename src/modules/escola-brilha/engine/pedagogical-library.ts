/**
 * pedagogical-library — DEPRECADO como gerador.
 *
 * A montagem de aulas a partir de templates / concatenação de strings foi
 * REMOVIDA. Toda aula agora vem do banco via `LessonService` /
 * `PedagogicalRepository`. Este arquivo mantém apenas a assinatura usada
 * pelo player legacy: se o código BNCC não estiver cadastrado em
 * `lesson_content`, retorna null e a UI deve exibir:
 *
 *     "Aula ainda não cadastrada."
 *
 * Nenhuma string é construída aqui. Nenhum template é consultado.
 */

import { useEffect, useState } from "react";
import { LessonService } from "@/services/lessons/LessonService";
import type { LessonContent } from "@/modules/pedagogical-repository";
import type { LessonV2 } from "../types/lesson-v2";

// ----------------------------------------------------------------------------
// Adapter: LessonContent (banco) → LessonV2 (formato consumido pelo player).
// Apenas COPIA campos já salvos no banco — não inventa nada.
// Se um campo não existir, a seção fica vazia e o player decide o fallback.
// ----------------------------------------------------------------------------

function adapt(lesson: LessonContent): LessonV2 {
  const passos = (lesson.passo_a_passo ?? []).map((p) => ({
    step: p.titulo,
    detail: p.descricao,
  }));

  const guiada = lesson.atividade_guiada?.[0];
  const pratica = lesson.atividade_pratica ?? [];
  const desafio = lesson.desafio;
  const quiz = lesson.quiz ?? [];

  return {
    id: lesson.id,
    title: lesson.titulo,
    discipline: lesson.disciplina as LessonV2["discipline"],
    grade: lesson.ano,
    bnccCode: lesson.codigo_bncc,
    bnccObjective: lesson.objetivo,
    xp: 30,
    templateMeta: {
      slug: "db",
      name: "Banco",
      disciplina: lesson.disciplina,
      steps: [],
    },
    screens: {
      missao: {
        studentObjective: lesson.objetivo,
        contextEmoji: "📘",
        contextLine: lesson.introducao,
        whatYouWillDo: passos.slice(0, 3).map((p) => p.step),
      },
      exploracao: {
        provokingQuestion: lesson.contextualizacao,
        observation: lesson.introducao,
        pairs: [],
      },
      explicacao: {
        conceito: lesson.explicacao,
        passoAPasso: passos,
        exemplo: lesson.exemplo1,
        aplicacao: lesson.exemplo2,
        resumo: lesson.resumo,
      },
      exemplo: {
        question: lesson.exemplo1,
        resolution: [],
        answer: lesson.exemplo2,
        why: lesson.analogia,
      },
      guiada: guiada
        ? {
            prompt: guiada.enunciado,
            options: [],
            hint: guiada.dica ?? "",
          }
        : { prompt: "", options: [], hint: "" },
      atividade: {
        items: pratica.map((a) => ({ question: a.enunciado, options: [] })),
      },
      desafio: desafio
        ? {
            contextualScenario: "",
            question: desafio.enunciado,
            options: [],
          }
        : { contextualScenario: "", question: "", options: [] },
      resumo: {
        format: "list",
        title: lesson.titulo,
        nodes: (lesson.palavras_chave ?? []).map((p) => ({
          label: p.termo,
          detail: p.definicao,
        })),
        takeaways: lesson.resumo ? [lesson.resumo] : [],
      },
      dominio: {
        bnccCode: lesson.codigo_bncc,
        bnccObjective: lesson.objetivo,
        recommendation: lesson.revisao,
      },
    },
  };
}

const listeners = new Set<() => void>();
function emit() {
  listeners.forEach((l) => l());
}

// ----------------------------- API pública ----------------------------------

export function resolveLessonV2Sync(
  bnccCode: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _titulo: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _bnccObjective = "",
): LessonV2 | null {
  const lesson = LessonService.getLessonSync(bnccCode);
  return lesson ? adapt(lesson) : null;
}

export async function prefetchLessonV2(
  bnccCode: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _titulo: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _bnccObjective = "",
): Promise<LessonV2 | null> {
  const lesson = await LessonService.getLesson(bnccCode);
  emit();
  return lesson ? adapt(lesson) : null;
}

export function useLessonV2(
  bnccCode: string,
  titulo: string,
  bnccObjective = "",
): LessonV2 | null {
  const [, force] = useState(0);
  useEffect(() => {
    const sub = () => force((n) => n + 1);
    listeners.add(sub);
    void prefetchLessonV2(bnccCode, titulo, bnccObjective);
    return () => {
      listeners.delete(sub);
    };
  }, [bnccCode, titulo, bnccObjective]);
  return resolveLessonV2Sync(bnccCode, titulo, bnccObjective);
}

export function clearLessonV2Cache() {
  LessonService.clearCache();
  emit();
}
