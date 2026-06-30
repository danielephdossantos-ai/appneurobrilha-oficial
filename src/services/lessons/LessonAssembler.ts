/**
 * LessonAssembler
 * ------------------------------------------------------------------
 * Transforma um `LessonBlueprint` (estrutura BNCC oficial) + as
 * seções pedagógicas autorais em um `LessonDraft` 100% compatível
 * com `approve_lesson_draft()`.
 *
 *  - NÃO publica.
 *  - NÃO salva no banco.
 *  - NÃO chama IA.
 *  - Apenas monta o objeto.
 *
 * Cada seção do contrato pedagógico é declarada em SEU PRÓPRIO
 * parâmetro para forçar separação visual e impedir mistura:
 *
 *   1. main         — conteúdo principal (objetivo / introdução /
 *                     explicação / contextualização / resumo /
 *                     palavras-chave / tempo / atividades).
 *   2. exemplos
 *   3. quiz
 *   4. avaliacao
 *   5. desafios
 *   6. curiosidades
 *   7. adaptacoes
 *   8. revisao
 *   9. explicacoes_extra (explicações complementares)
 *
 * A saída passa por DraftBuilder (canônico). Validação fica a cargo
 * de DraftPayloadValidator / PedagogicalContentValidator, chamados
 * pelo Repository — não aqui.
 */

import {
  DraftBuilder,
  type DraftAdaptation,
  type DraftAssessment,
  type DraftChallenge,
  type DraftCuriosity,
  type DraftExample,
  type DraftExtraExplanation,
  type DraftGuidedStep,
  type DraftPracticeItem,
  type DraftAnswer,
  type DraftQuiz,
  type DraftReview,
  type LessonDraftRow,
  type PedagogicalObject,
} from "./DraftBuilder";
import type { LessonBlueprint } from "./LessonBlueprint";

export interface LessonMainContent {
  titulo: string;
  objetivo: string;
  introducao: string;
  explicacao: string;
  contextualizacao: string;
  resumo: string;
  palavras_chave?: string[];
  tempo_estimado?: number;          // minutos
  atividade_guiada?: DraftGuidedStep[];
  atividade_pratica?: DraftPracticeItem[];
  respostas?: DraftAnswer[];
  quiz_resumo?: unknown[];
  desafio_resumo?: Record<string, unknown>;
}

export interface LessonAssemblerInput {
  blueprint: LessonBlueprint;
  main: LessonMainContent;
  exemplos?: DraftExample[];
  quiz?: DraftQuiz;
  avaliacao?: DraftAssessment;
  desafios?: DraftChallenge[];
  curiosidades?: DraftCuriosity[];
  adaptacoes?: DraftAdaptation[];
  revisao?: DraftReview;
  explicacoes_extra?: DraftExtraExplanation[];
}

export class LessonAssembler {
  /**
   * Monta um `LessonDraftRow` (linha + payload completo) pronto
   * para ser passado a `approve_lesson_draft()` por meio do
   * Repository/Publisher. NÃO insere, NÃO publica.
   */
  static assemble(input: LessonAssemblerInput): LessonDraftRow {
    const { blueprint, main } = input;
    if (!blueprint?.codigo_bncc) {
      throw new Error("LessonAssembler: blueprint.codigo_bncc é obrigatório");
    }
    if (!main?.titulo?.trim()) {
      throw new Error("LessonAssembler: main.titulo é obrigatório");
    }

    const conteudo: PedagogicalObject = {
      // --- 1) Conteúdo principal -------------------------------------
      objetivo: main.objetivo,
      introducao: main.introducao,
      explicacao: main.explicacao,
      contextualizacao: main.contextualizacao,
      resumo: main.resumo,
      palavras_chave: main.palavras_chave ?? [],
      tempo_estimado: main.tempo_estimado ?? blueprint.tempo_estimado_min ?? 20,
      atividade_guiada: main.atividade_guiada ?? [],
      atividade_pratica: main.atividade_pratica ?? [],
      respostas: main.respostas ?? [],
      quiz_resumo: main.quiz_resumo ?? [],
      desafio_resumo: main.desafio_resumo ?? {},

      // --- 2) Exemplos -----------------------------------------------
      exemplos: input.exemplos ?? [],

      // --- 3) Quiz ---------------------------------------------------
      quiz: input.quiz ?? { titulo: main.titulo, questoes: [] },

      // --- 4) Avaliação ----------------------------------------------
      avaliacao: input.avaliacao ?? { tipo: "formativa", questoes: [] },

      // --- 5) Desafios -----------------------------------------------
      desafios: input.desafios ?? [],

      // --- 6) Curiosidades -------------------------------------------
      curiosidades: input.curiosidades ?? [],

      // --- 7) Adaptações ---------------------------------------------
      adaptacoes: input.adaptacoes ?? [],

      // --- 8) Revisão ------------------------------------------------
      revisao: input.revisao ?? {},

      // --- 9) Explicações complementares -----------------------------
      explicacoes_extra: input.explicacoes_extra ?? [],
    };

    return DraftBuilder.build({
      codigo_bncc: blueprint.codigo_bncc,
      ano: blueprint.ano?.nome ?? blueprint.ano?.codigo ?? null,
      disciplina: blueprint.disciplina?.nome ?? blueprint.disciplina?.codigo ?? null,
      titulo: main.titulo,
      conteudo,
    });
  }
}

export default LessonAssembler;
