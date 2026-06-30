/**
 * PedagogicalContentValidator
 * ------------------------------------------------------------------
 * Validação de QUALIDADE PEDAGÓGICA do payload de uma aula.
 *
 * Diferente do DraftPayloadValidator (que checa tipos/estrutura),
 * este módulo verifica se as seções pedagógicas obrigatórias estão
 * presentes e contêm conteúdo real.
 *
 * Regras:
 *  - NÃO corrige automaticamente.
 *  - NÃO gera conteúdo automaticamente.
 *  - Bloqueia o salvamento quando qualquer seção exigida estiver ausente
 *    ou vazia.
 *  - Retorna relatório listando exatamente as seções faltantes.
 */

export interface PedagogicalCheck {
  key: string;
  label: string;
  /** função que recebe o payload e diz se a seção está OK */
  present: (payload: Record<string, unknown>) => boolean;
}

export interface PedagogicalReport {
  ok: boolean;
  missing: { key: string; label: string }[];
  checked: number;
}

const isNonEmptyString = (v: unknown): boolean =>
  typeof v === "string" && v.trim().length > 0;

const isNonEmptyArray = (v: unknown): boolean =>
  Array.isArray(v) && v.length > 0;

const isNonEmptyObject = (v: unknown): boolean =>
  !!v && typeof v === "object" && !Array.isArray(v) &&
  Object.keys(v as Record<string, unknown>).length > 0;

/**
 * Seções pedagógicas exigidas pela política do Escola Brilha.
 * Cada checagem é independente — uma falha não interrompe as outras.
 */
export const PEDAGOGICAL_CHECKS: readonly PedagogicalCheck[] = [
  {
    key: "objetivo",
    label: "Objetivo de aprendizagem",
    present: (p) => isNonEmptyString(p.objetivo),
  },
  {
    key: "explicacao",
    label: "Explicação principal",
    present: (p) => isNonEmptyString(p.explicacao),
  },
  {
    key: "contextualizacao",
    label: "Contextualização",
    present: (p) => isNonEmptyString(p.contextualizacao),
  },
  {
    key: "exemplos",
    label: "Pelo menos um exemplo",
    present: (p) => isNonEmptyArray(p.exemplos),
  },
  {
    key: "atividade_guiada",
    label: "Atividade guiada",
    present: (p) => isNonEmptyArray(p.atividade_guiada),
  },
  {
    key: "atividade_pratica",
    label: "Atividade prática",
    present: (p) => isNonEmptyArray(p.atividade_pratica),
  },
  {
    key: "quiz",
    label: "Quiz",
    present: (p) => isNonEmptyObject(p.quiz) || isNonEmptyArray(p.quiz),
  },
  {
    key: "avaliacao",
    label: "Avaliação",
    present: (p) => isNonEmptyObject(p.avaliacao) || isNonEmptyArray(p.avaliacao),
  },
  {
    key: "revisao",
    label: "Revisão",
    present: (p) =>
      isNonEmptyObject(p.revisao) ||
      isNonEmptyArray(p.revisao) ||
      isNonEmptyString(p.revisao),
  },
  {
    key: "adaptacoes",
    label: "Adaptação pedagógica",
    present: (p) => isNonEmptyArray(p.adaptacoes),
  },
  {
    key: "resumo",
    label: "Resumo",
    present: (p) => isNonEmptyString(p.resumo),
  },
] as const;

export class PedagogicalContentValidator {
  /**
   * Avalia o payload e retorna relatório com as seções ausentes.
   * Não lança exceção — apenas reporta.
   */
  static validate(payload: unknown): PedagogicalReport {
    const p =
      payload && typeof payload === "object"
        ? (payload as Record<string, unknown>)
        : {};

    const missing: { key: string; label: string }[] = [];
    for (const check of PEDAGOGICAL_CHECKS) {
      if (!check.present(p)) {
        missing.push({ key: check.key, label: check.label });
      }
    }

    return {
      ok: missing.length === 0,
      missing,
      checked: PEDAGOGICAL_CHECKS.length,
    };
  }

  /**
   * Mesma checagem, porém lança erro quando alguma seção estiver
   * faltando. Use no pipeline ANTES de salvar o draft para impedir
   * a persistência.
   */
  static assert(payload: unknown): void {
    const report = this.validate(payload);
    if (!report.ok) {
      const list = report.missing
        .map((m) => `- ${m.label} (${m.key})`)
        .join("\n");
      throw new Error(
        `PedagogicalContentValidator: aula incompleta. ` +
          `Seções pedagógicas ausentes:\n${list}`,
      );
    }
  }
}

export default PedagogicalContentValidator;
