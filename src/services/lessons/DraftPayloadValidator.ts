/**
 * DraftPayloadValidator
 *
 * Valida o objeto de draft pedagógico ANTES de qualquer persistência.
 * Não salva, não publica, não chama Supabase. Apenas valida.
 *
 * Uso:
 *   const result = DraftPayloadValidator.validate(draft);
 *   if (!result.valid) throw new Error(result.errors.join("; "));
 */

export interface DraftLike {
  codigo_bncc?: unknown;
  payload?: Record<string, unknown> | unknown;
  [key: string]: unknown;
}

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

type FieldKind =
  | "string"
  | "int"
  | "array"
  | "object";

interface FieldRule {
  path: string; // dotted path inside payload, ex: "quiz"
  kind: FieldKind;
}

// Campos exigidos dentro de payload
const REQUIRED_FIELDS: FieldRule[] = [
  { path: "titulo", kind: "string" },
  { path: "objetivo", kind: "string" },
  { path: "introducao", kind: "string" },
  { path: "explicacao", kind: "string" },
  { path: "contextualizacao", kind: "string" },
  { path: "resumo", kind: "string" },
  { path: "tempo_estimado", kind: "int" },
  { path: "palavras_chave", kind: "array" },
  { path: "atividade_guiada", kind: "array" },
  { path: "atividade_pratica", kind: "array" },
  { path: "respostas", kind: "array" },
  { path: "exemplos", kind: "array" },
  { path: "curiosidades", kind: "array" },
  { path: "quiz", kind: "object" },
  { path: "desafios", kind: "array" },
  { path: "avaliacao", kind: "object" },
  { path: "adaptacoes", kind: "array" },
  { path: "explicacoes_extra", kind: "array" },
  { path: "revisao", kind: "object" },
];

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function isInteger(v: unknown): v is number {
  return typeof v === "number" && Number.isFinite(v) && Number.isInteger(v);
}

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return (
    typeof v === "object" &&
    v !== null &&
    !Array.isArray(v)
  );
}

function checkKind(value: unknown, kind: FieldKind): string | null {
  switch (kind) {
    case "string":
      return isNonEmptyString(value)
        ? null
        : "deve ser string não-vazia";
    case "int":
      return isInteger(value) ? null : "deve ser inteiro";
    case "array":
      return Array.isArray(value) ? null : "deve ser array";
    case "object":
      return isPlainObject(value) ? null : "deve ser objeto";
  }
}

export class DraftPayloadValidator {
  static validate(draft: DraftLike | null | undefined): ValidationResult {
    const errors: string[] = [];

    if (!draft || typeof draft !== "object") {
      return { valid: false, errors: ["draft ausente ou inválido"] };
    }

    // codigo_bncc é raiz
    if (!isNonEmptyString(draft.codigo_bncc)) {
      errors.push("codigo_bncc: obrigatório (string não-vazia)");
    }

    const payload = isPlainObject(draft.payload) ? draft.payload : null;
    if (!payload) {
      errors.push("payload: obrigatório (objeto)");
      return { valid: false, errors };
    }

    for (const rule of REQUIRED_FIELDS) {
      const value = (payload as Record<string, unknown>)[rule.path];
      if (value === undefined || value === null) {
        errors.push(`payload.${rule.path}: obrigatório`);
        continue;
      }
      const problem = checkKind(value, rule.kind);
      if (problem) {
        errors.push(`payload.${rule.path}: ${problem}`);
      }
    }

    return { valid: errors.length === 0, errors };
  }

  /**
   * Lança erro se inválido. Útil para usar como guarda antes de qualquer save.
   */
  static assert(draft: DraftLike | null | undefined): void {
    const result = this.validate(draft);
    if (!result.valid) {
      throw new Error(
        `DraftPayloadValidator: draft inválido -> ${result.errors.join("; ")}`,
      );
    }
  }
}

export default DraftPayloadValidator;
