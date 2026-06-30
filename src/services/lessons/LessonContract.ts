/**
 * LessonContract
 * ------------------------------------------------------------------
 * Contrato pedagógico ÚNICO para todas as aulas do Escola Brilha.
 *
 * Toda aula salva no sistema deve seguir EXATAMENTE estas 17 seções
 * obrigatórias. Este módulo é a fonte da verdade compartilhada por:
 *
 *   - DraftBuilder   (monta o payload no formato do contrato)
 *   - DraftPayloadValidator (valida o payload contra o contrato)
 *   - LessonPublisher (publica via approve_lesson_draft, que persiste
 *                      as mesmas seções nas tabelas filhas)
 *
 * Nenhuma aula pode ser salva fora deste contrato.
 *
 * Este arquivo NÃO altera banco, players ou interfaces.
 */

export type LessonSectionKind = "string" | "int" | "array" | "object";

export interface LessonSection {
  /** chave dentro de `payload` (espelha approve_lesson_draft) */
  key: string;
  /** rótulo pedagógico humano (ordem da aula) */
  label: string;
  /** tipo esperado no payload */
  kind: LessonSectionKind;
}

/**
 * Ordem pedagógica oficial. Não alterar sem migrar o publisher SQL.
 * A ordem reflete a sequência didática esperada na aula.
 */
export const LESSON_CONTRACT: readonly LessonSection[] = [
  { key: "objetivo",          label: "Objetivo de aprendizagem",   kind: "string" },
  { key: "introducao",        label: "Introdução motivadora",      kind: "string" },
  { key: "explicacao",        label: "Explicação principal",       kind: "string" },
  { key: "contextualizacao",  label: "Contextualização",           kind: "string" },
  { key: "resumo",            label: "Resumo",                     kind: "string" },
  { key: "palavras_chave",    label: "Palavras-chave",             kind: "array"  },
  { key: "atividade_guiada",  label: "Atividade guiada",           kind: "array"  },
  { key: "atividade_pratica", label: "Atividade prática",          kind: "array"  },
  { key: "exemplos",          label: "Exemplos",                   kind: "array"  },
  { key: "curiosidades",      label: "Curiosidades",               kind: "array"  },
  { key: "quiz",              label: "Quiz",                       kind: "object" },
  { key: "desafios",          label: "Desafios",                   kind: "array"  },
  { key: "avaliacao",         label: "Avaliação",                  kind: "object" },
  { key: "adaptacoes",        label: "Adaptações pedagógicas",     kind: "array"  },
  { key: "explicacoes_extra", label: "Explicações complementares", kind: "array"  },
  { key: "revisao",           label: "Revisão",                    kind: "object" },
] as const;

/**
 * Campos auxiliares também obrigatórios no payload, mas que não
 * representam seções pedagógicas exibidas ao aluno.
 */
export const LESSON_CONTRACT_META: readonly LessonSection[] = [
  { key: "titulo",         label: "Título da aula",  kind: "string" },
  { key: "tempo_estimado", label: "Tempo estimado",  kind: "int"    },
  { key: "respostas",      label: "Gabarito",        kind: "array"  },
] as const;

/** Todos os campos exigidos no payload (meta + seções). */
export const LESSON_CONTRACT_ALL: readonly LessonSection[] = [
  ...LESSON_CONTRACT_META,
  ...LESSON_CONTRACT,
] as const;

/** Conjunto de chaves canônicas — útil em validações de integridade. */
export const LESSON_CONTRACT_KEYS: readonly string[] =
  LESSON_CONTRACT_ALL.map((s) => s.key);

export type LessonContractKey = (typeof LESSON_CONTRACT_ALL)[number]["key"];
