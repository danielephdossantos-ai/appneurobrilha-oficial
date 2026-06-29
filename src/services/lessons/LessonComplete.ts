/**
 * LessonComplete — Modelo agregador de uma aula completa.
 *
 * Carrega TODAS as seções de uma aula a partir do banco, usando o
 * `codigo_bncc` como chave única. NUNCA gera texto, nunca concatena
 * strings, nunca chama IA. Cada seção vem do seu repositório dedicado.
 *
 * Se alguma seção não existir no banco, o campo correspondente fica
 * `null` / `[]`. A UI decide como exibir (normalmente via
 * ContentValidator → "Conteúdo em desenvolvimento.").
 */

import { supabase } from "@/integrations/supabase/client";
import { LessonService } from "./LessonService";
import { LessonExplanationService } from "./LessonExplanation";
import { LessonExamplesService } from "./LessonExamples";
import { LessonCuriosityService } from "./LessonCuriosity";
import { ActivityEngine } from "./ActivityEngine";
import { LessonChallengeService } from "./LessonChallenge";
import { LessonAssessmentService } from "./LessonAssessment";
import { LessonReviewService } from "./LessonReview";
import { LessonAdaptationsService } from "./LessonAdaptations";
import { LessonResourcesService } from "./LessonResources";
import { LearningObjectivesService } from "./LearningObjectives";


export interface LessonCompleteModel {
  lessonId: string | null;
  codigoBNCC: string;
  ano: string | null;
  disciplina: string | null;
  titulo: string | null;
  objetivo: string | null;
  introducao: string | null;
  explicacao: unknown | null;
  contextualizacao: string | null;
  conhecimentosPrevios: string | null;
  exemplos: unknown[];
  vocabulos: unknown[];
  curiosidades: unknown[];
  atividadeGuiada: unknown | null;
  atividades: unknown[];
  desafio: unknown | null;
  quiz: unknown[];
  avaliacao: unknown | null;
  revisao: unknown | null;
  resumo: string | null;
  adaptacoes: unknown[];
  materiaisComplementares: unknown[];
  tempoEstimado: number | null;
}

export class LessonComplete {
  /**
   * Carrega TODAS as seções da aula a partir do banco.
   * Nenhum campo é construído por código — tudo vem de tabelas.
   */
  static async load(codigoBNCC: string): Promise<LessonCompleteModel> {
    const lesson = await LessonService.getLesson(codigoBNCC);

    const [
      explicacao,
      exemplos,
      curiosidades,
      atividades,
      desafios,
      avaliacao,
      revisao,
      adaptacoes,
      materiaisComplementares,
      objetivosBanco,
      conhecimentosPrevios,
      vocabulos,
      quiz,
      atividadeGuiada,
    ] = await Promise.all([
      LessonExplanation.get(codigoBNCC).catch(() => null),
      LessonExamples.list(codigoBNCC).catch(() => []),
      LessonCuriosity.list(codigoBNCC).catch(() => []),
      ActivityEngine.list(codigoBNCC).catch(() => []),
      LessonChallenge.list(codigoBNCC).catch(() => []),
      LessonAssessment.get(codigoBNCC).catch(() => null),
      LessonReviewService.get(codigoBNCC).catch(() => null),
      LessonAdaptationsService.list(codigoBNCC).catch(() => []),
      LessonResources.list(codigoBNCC).catch(() => []),
      LearningObjectives.list(codigoBNCC).catch(() => []),
      this.fetchPreviousKnowledge(codigoBNCC),
      this.fetchVocabulary(codigoBNCC),
      this.fetchQuiz(codigoBNCC),
      this.fetchGuidedActivity(codigoBNCC),
    ]);

    return {
      lessonId: lesson?.id ?? null,
      codigoBNCC,
      ano: lesson?.ano ?? null,
      disciplina: lesson?.disciplina ?? null,
      titulo: lesson?.titulo ?? null,
      objetivo:
        lesson?.objetivo ??
        (Array.isArray(objetivosBanco) && objetivosBanco.length > 0
          ? (objetivosBanco[0] as { descricao?: string }).descricao ?? null
          : null),
      introducao: lesson?.introducao ?? null,
      explicacao,
      contextualizacao: lesson?.contextualizacao ?? null,
      conhecimentosPrevios,
      exemplos: exemplos as unknown[],
      vocabulos,
      curiosidades: curiosidades as unknown[],
      atividadeGuiada,
      atividades: atividades as unknown[],
      desafio:
        Array.isArray(desafios) && desafios.length > 0 ? desafios[0] : null,
      quiz,
      avaliacao,
      revisao,
      resumo: lesson?.resumo ?? null,
      adaptacoes: adaptacoes as unknown[],
      materiaisComplementares: materiaisComplementares as unknown[],
      tempoEstimado: (lesson as unknown as { tempo_estimado?: number })
        ?.tempo_estimado ?? null,
    };
  }

  // -------- Leituras diretas para campos sem repositório dedicado --------

  private static async fetchPreviousKnowledge(
    codigoBNCC: string,
  ): Promise<string | null> {
    const { data } = await supabase
      .from("lesson_content")
      .select("conhecimentos_previos")
      .eq("codigo_bncc", codigoBNCC)
      .maybeSingle();
    return (
      (data as unknown as { conhecimentos_previos?: string } | null)
        ?.conhecimentos_previos ?? null
    );
  }

  private static async fetchVocabulary(codigoBNCC: string): Promise<unknown[]> {
    const { data } = await supabase
      .from("lesson_content")
      .select("palavras_chave")
      .eq("codigo_bncc", codigoBNCC)
      .maybeSingle();
    const arr = (data as unknown as { palavras_chave?: unknown[] } | null)
      ?.palavras_chave;
    return Array.isArray(arr) ? arr : [];
  }

  private static async fetchQuiz(codigoBNCC: string): Promise<unknown[]> {
    const { data } = await supabase
      .from("lesson_quizzes")
      .select("*")
      .eq("codigo_bncc", codigoBNCC);
    return Array.isArray(data) ? data : [];
  }

  private static async fetchGuidedActivity(
    codigoBNCC: string,
  ): Promise<unknown | null> {
    const { data } = await supabase
      .from("lesson_content")
      .select("atividade_guiada")
      .eq("codigo_bncc", codigoBNCC)
      .maybeSingle();
    const arr = (data as unknown as { atividade_guiada?: unknown[] } | null)
      ?.atividade_guiada;
    return Array.isArray(arr) && arr.length > 0 ? arr[0] : null;
  }
}
