/**
 * PublishAuditor
 * ------------------------------------------------------------------
 * Após CADA publicação de aula, executa auditoria automática:
 *
 *   - lesson_content criada?
 *   - lesson_examples criados?
 *   - lesson_curiosities criadas?
 *   - lesson_assessments criadas?
 *   - lesson_adaptations criadas?
 *   - lesson_challenges criados?
 *   - lesson_reviews_full criada?
 *   - lesson_quizzes criada?
 *
 * Se qualquer tabela exigida estiver SEM registros para o codigo_bncc,
 * marca a aula como INCOMPLETA (`lesson_content.is_complete = false`)
 * e grava em `missing_sections` quais seções faltam. Aulas incompletas
 * NÃO devem ser exibidas ao usuário — os players precisam filtrar por
 * `is_complete = true`.
 *
 * Esta auditoria NÃO corrige nem gera conteúdo. Apenas verifica e
 * marca o estado real.
 */

import type { PoolClient } from "pg";

export const REQUIRED_TABLES = [
  "lesson_examples",
  "lesson_curiosities",
  "lesson_assessments",
  "lesson_adaptations",
  "lesson_challenges",
  "lesson_reviews_full",
  "lesson_quizzes",
] as const;

export type RequiredTable = (typeof REQUIRED_TABLES)[number];

export interface PublishAuditReport {
  lesson_id: string | null;
  codigo_bncc: string;
  lesson_content_created: boolean;
  counts: Record<string, number>;
  missing_sections: string[];
  is_complete: boolean;
  audited_at: string;
}

/**
 * Executa a auditoria usando um client de pool já aberto.
 * Persiste o resultado em `lesson_content` (is_complete + missing_sections + audit_report).
 */
export async function auditPublishedLesson(
  client: PoolClient,
  codigoBncc: string,
): Promise<PublishAuditReport> {
  const auditedAt = new Date().toISOString();

  // 1. lesson_content existe?
  const lc = await client.query<{ id: string }>(
    "SELECT id FROM public.lesson_content WHERE codigo_bncc = $1 LIMIT 1",
    [codigoBncc],
  );
  const lessonId = lc.rows[0]?.id ?? null;
  const lessonContentCreated = !!lessonId;

  const counts: Record<string, number> = { lesson_content: lessonContentCreated ? 1 : 0 };
  const missing: string[] = [];

  if (!lessonContentCreated) missing.push("lesson_content");

  // 2. Contar cada tabela filha exigida.
  for (const tbl of REQUIRED_TABLES) {
    const r = await client.query<{ c: string }>(
      `SELECT COUNT(*)::text AS c FROM public.${tbl} WHERE codigo_bncc = $1`,
      [codigoBncc],
    );
    const n = Number(r.rows[0]?.c ?? 0);
    counts[tbl] = n;
    if (n === 0) missing.push(tbl);
  }

  const isComplete = missing.length === 0;

  const report: PublishAuditReport = {
    lesson_id: lessonId,
    codigo_bncc: codigoBncc,
    lesson_content_created: lessonContentCreated,
    counts,
    missing_sections: missing,
    is_complete: isComplete,
    audited_at: auditedAt,
  };

  // 3. Persistir marcação na própria lesson_content para bloquear
  //    a exibição ao usuário quando incompleta.
  if (lessonContentCreated) {
    await client.query(
      `UPDATE public.lesson_content
          SET is_complete = $1,
              missing_sections = $2,
              audited_at = now(),
              audit_report = $3::jsonb
        WHERE codigo_bncc = $4`,
      [isComplete, missing, JSON.stringify(report), codigoBncc],
    );
  }

  return report;
}

export const PublishAuditor = {
  audit: auditPublishedLesson,
  REQUIRED_TABLES,
};

export default PublishAuditor;
