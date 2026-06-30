/**
 * DraftBuilder
 * ------------------------------------------------------------------
 * Monta um objeto compatível com `public.lesson_drafts` e com o
 * formato esperado pela função `approve_lesson_draft()`.
 *
 * Responsabilidade ÚNICA: construir o objeto.
 *   - Não cria tabelas.
 *   - Não altera schema.
 *   - Não publica o draft.
 *   - Não insere nada.
 *   - Não chama IA.
 *   - Não toca em UI.
 *
 * Os nomes das chaves do `payload` espelham EXATAMENTE as chaves lidas
 * por `approve_lesson_draft()` (ver migração). Qualquer divergência de
 * nome resultaria em campos NULL no banco.
 */

// -------------------- Tipos do objeto pedagógico de entrada --------------------

export interface DraftExample {
  titulo?: string;
  contexto?: string;
  enunciado?: string;
  resolucao?: string;
  resposta?: string;
  explicacao?: string;
}

export interface DraftCuriosity {
  titulo?: string;
  conteudo?: string;
  fonte?: string;
}

export interface DraftQuizQuestion {
  q?: string;
  opcoes?: string[];
  correta?: number | string;
  [k: string]: unknown;
}

export interface DraftQuiz {
  titulo?: string;
  descricao?: string;
  questoes?: DraftQuizQuestion[];
}

export interface DraftChallenge {
  titulo?: string;
  objetivo?: string;
  descricao?: string;
  resposta?: string;
  explicacao?: string;
  pontuacao?: number;
  nivel?: "facil" | "medio" | "dificil" | string;
}

export interface DraftAssessmentQuestion {
  q?: string;
  correta?: string;
  [k: string]: unknown;
}

export interface DraftAssessment {
  tipo?: "diagnostica" | "formativa" | "somativa" | "final" | string;
  titulo?: string;
  descricao?: string;
  questoes?: DraftAssessmentQuestion[];
}

export interface DraftAdaptation {
  perfil?: "tdah" | "tea" | "dislexia" | "di" | "ah" | "tipico" | string;
  objetivo?: string;
  estrategias?: unknown[];
  recursos?: unknown[];
  ajustes_atividade?: unknown[];
  orientacoes_familia?: string;
  observacoes?: string;
}

export interface DraftExtraExplanation {
  titulo?: string;
  conteudo?: string;
}

export interface DraftReview {
  resumo_curto?: string;
  resumo_completo?: string;
  mapa_mental?: Record<string, unknown>;
  palavras_chave?: string[];
  erros_comuns?: unknown[];
  dicas?: unknown[];
}

export interface DraftGuidedStep {
  passo?: number;
  instrucao?: string;
  [k: string]: unknown;
}

export interface DraftPracticeItem {
  enunciado?: string;
  resposta?: string;
  [k: string]: unknown;
}

export interface DraftAnswer {
  questao?: number;
  correta?: string;
  [k: string]: unknown;
}

/** Objeto pedagógico completo de entrada. */
export interface PedagogicalObject {
  objetivo?: string;
  introducao?: string;
  explicacao?: string;
  contextualizacao?: string;
  resumo?: string;
  tempo_estimado?: number;
  palavras_chave?: string[];
  atividade_guiada?: DraftGuidedStep[];
  atividade_pratica?: DraftPracticeItem[];
  respostas?: DraftAnswer[];
  exemplos?: DraftExample[];
  curiosidades?: DraftCuriosity[];
  quiz?: DraftQuiz;
  quiz_resumo?: unknown[];
  desafios?: DraftChallenge[];
  desafio_resumo?: Record<string, unknown>;
  avaliacao?: DraftAssessment;
  adaptacoes?: DraftAdaptation[];
  explicacoes_extra?: DraftExtraExplanation[];
  revisao?: DraftReview;
}

// -------------------- Payload e Draft (formato do banco) --------------------

/** Formato exato lido por `approve_lesson_draft()`. */
export interface LessonDraftPayload {
  titulo: string;
  objetivo: string;
  introducao: string;
  explicacao: string;
  contextualizacao: string;
  resumo: string;
  tempo_estimado: number;
  palavras_chave: string[];
  atividade_guiada: DraftGuidedStep[];
  atividade_pratica: DraftPracticeItem[];
  respostas: DraftAnswer[];
  exemplos: DraftExample[];
  curiosidades: DraftCuriosity[];
  quiz: DraftQuiz;
  quiz_resumo: unknown[];
  desafios: DraftChallenge[];
  desafio_resumo: Record<string, unknown>;
  avaliacao: DraftAssessment;
  adaptacoes: DraftAdaptation[];
  explicacoes_extra: DraftExtraExplanation[];
  revisao: DraftReview;
}

/** Linha compatível com `INSERT INTO public.lesson_drafts (...)`. */
export interface LessonDraftRow {
  codigo_bncc: string;
  ano: string | null;
  disciplina: string | null;
  titulo: string;
  payload: LessonDraftPayload;
}

export interface DraftBuilderInput {
  codigo_bncc: string;
  ano?: string | null;
  disciplina?: string | null;
  titulo: string;
  conteudo: PedagogicalObject;
}

// -------------------- Builder --------------------

export class DraftBuilder {
  /**
   * Monta o objeto draft completo (linha + payload) sem inserir nada.
   * Os nomes das chaves seguem EXATAMENTE o contrato de
   * `approve_lesson_draft()`.
   */
  static build(input: DraftBuilderInput): LessonDraftRow {
    const c = input.conteudo ?? {};

    const payload: LessonDraftPayload = {
      titulo: input.titulo,
      objetivo: c.objetivo ?? "",
      introducao: c.introducao ?? "",
      explicacao: c.explicacao ?? "",
      contextualizacao: c.contextualizacao ?? "",
      resumo: c.resumo ?? "",
      tempo_estimado:
        typeof c.tempo_estimado === "number" && Number.isFinite(c.tempo_estimado)
          ? c.tempo_estimado
          : 20,
      palavras_chave: Array.isArray(c.palavras_chave) ? c.palavras_chave : [],
      atividade_guiada: Array.isArray(c.atividade_guiada) ? c.atividade_guiada : [],
      atividade_pratica: Array.isArray(c.atividade_pratica) ? c.atividade_pratica : [],
      respostas: Array.isArray(c.respostas) ? c.respostas : [],
      exemplos: Array.isArray(c.exemplos) ? c.exemplos : [],
      curiosidades: Array.isArray(c.curiosidades) ? c.curiosidades : [],
      quiz: c.quiz && typeof c.quiz === "object" ? c.quiz : { questoes: [] },
      quiz_resumo: Array.isArray(c.quiz_resumo) ? c.quiz_resumo : [],
      desafios: Array.isArray(c.desafios) ? c.desafios : [],
      desafio_resumo:
        c.desafio_resumo && typeof c.desafio_resumo === "object" ? c.desafio_resumo : {},
      avaliacao:
        c.avaliacao && typeof c.avaliacao === "object"
          ? c.avaliacao
          : { tipo: "formativa", questoes: [] },
      adaptacoes: Array.isArray(c.adaptacoes) ? c.adaptacoes : [],
      explicacoes_extra: Array.isArray(c.explicacoes_extra) ? c.explicacoes_extra : [],
      revisao: c.revisao && typeof c.revisao === "object" ? c.revisao : {},
    };

    return {
      codigo_bncc: input.codigo_bncc,
      ano: input.ano ?? null,
      disciplina: input.disciplina ?? null,
      titulo: input.titulo,
      payload,
    };
  }

  /** Atalho quando se precisa apenas do payload (sem metadados da linha). */
  static buildPayload(input: DraftBuilderInput): LessonDraftPayload {
    return this.build(input).payload;
  }
}
