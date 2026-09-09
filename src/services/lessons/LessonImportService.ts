/**
 * LessonImportService
 * ------------------------------------------------------------------
 * Importa uma ou mais aulas completas para `lesson_drafts`.
 *
 * Pipeline por aula:
 *   1. DraftBuilder.build(input)               -> monta payload
 *   2. DraftPayloadValidator.assert(row)       -> valida estrutura
 *   3. PedagogicalContentValidator.assert(p)   -> valida qualidade pedagógica
 *   4. LessonDraftRepository.save(input)       -> INSERT status='pending'
 *
 * Garantias:
 *   - NÃO cria tabelas.
 *   - NÃO altera `approve_lesson_draft()`.
 *   - NENHUMA aula é publicada automaticamente — todas ficam em "pending".
 *   - Falha de uma aula NÃO interrompe as demais.
 *
 * Retorna relatório consolidado:
 *   { total, imported, rejected, items[] } com motivo de rejeição por aula.
 */

import { DraftBuilder, type DraftBuilderInput } from "./DraftBuilder";
import { DraftPayloadValidator } from "./DraftPayloadValidator";
import { PedagogicalContentValidator } from "./PedagogicalContentValidator";
import { LessonDraftRepository } from "./LessonDraftRepository";

export interface ImportedLessonItem {
  index: number;
  codigo_bncc: string | null;
  disciplina: string | null;
  ano: string | number | null;
  status: "imported" | "rejected";
  draft_id?: string;
  imported_at?: string; // ISO
  reason?: string;
}

export interface ImportReport {
  total: number;
  imported: number;
  rejected: number;
  started_at: string;
  finished_at: string;
  items: ImportedLessonItem[];
}

export interface LessonImportInput {
  lessons: DraftBuilderInput[];
}

function normalizeInput(
  input: LessonImportInput | DraftBuilderInput[] | DraftBuilderInput,
): DraftBuilderInput[] {
  if (Array.isArray(input)) return input;
  if (input && typeof input === "object" && Array.isArray((input as LessonImportInput).lessons)) {
    return (input as LessonImportInput).lessons;
  }
  if (input && typeof input === "object") return [input as DraftBuilderInput];
  return [];
}

export const LessonImportService = {
  /**
   * Importa N aulas. Nunca publica.
   * Cada aula é validada estrutural e pedagogicamente antes do INSERT.
   */
  async import(
    input: LessonImportInput | DraftBuilderInput[] | DraftBuilderInput,
  ): Promise<ImportReport> {
    const lessons = normalizeInput(input);
    const started_at = new Date().toISOString();
    const items: ImportedLessonItem[] = [];

    let imported = 0;
    let rejected = 0;

    for (let i = 0; i < lessons.length; i++) {
      const lesson = lessons[i];
      const codigo_bncc =
        (lesson && typeof lesson === "object" && (lesson as any).codigo_bncc) || null;
      const disciplina =
        (lesson && typeof lesson === "object" && (lesson as any).disciplina) || null;
      const ano = (lesson && typeof lesson === "object" && (lesson as any).ano) || null;

      try {
        // 1. Build
        const row = DraftBuilder.build(lesson);

        // 2. Validação estrutural
        DraftPayloadValidator.assert(row);

        // 3. Validação pedagógica de conteúdo
        PedagogicalContentValidator.assert(row.payload);

        // 4. Persistência (status='pending'). Nunca aprova.
        const saved = await LessonDraftRepository.save(lesson);

        imported++;
        items.push({
          index: i,
          codigo_bncc: saved.codigo_bncc ?? codigo_bncc,
          disciplina: row.disciplina ?? disciplina,
          ano: row.ano ?? ano,
          status: "imported",
          draft_id: saved.draft_id,
          imported_at: new Date().toISOString(),
        });
      } catch (err) {
        rejected++;
        items.push({
          index: i,
          codigo_bncc,
          disciplina,
          ano,
          status: "rejected",
          reason: err instanceof Error ? err.message : String(err),
        });
      }
    }

    return {
      total: lessons.length,
      imported,
      rejected,
      started_at,
      finished_at: new Date().toISOString(),
      items,
    };
  },
};

export default LessonImportService;
