/**
 * BatchLessonPublisher
 * ------------------------------------------------------------------
 * Publica em lote todos os lesson_drafts com status "pendente".
 *
 * Regras absolutas:
 *   - Publicação EXCLUSIVA via SQL `approve_lesson_draft(_draft_id)`.
 *   - ZERO INSERT manual em lesson_content / tabelas filhas.
 *   - Um draft por vez. Falha individual NÃO interrompe o lote.
 *   - Cada erro é registrado e a publicação segue para o próximo.
 *   - Ao final, devolve relatório consolidado.
 */

import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const CHILD_TABLES = [
  "lesson_examples",
  "lesson_curiosities",
  "lesson_quizzes",
  "lesson_challenges",
  "lesson_assessments",
  "lesson_adaptations",
  "lesson_explanations",
  "lesson_reviews_full",
  "lesson_resources",
] as const;

export interface BatchItemResult {
  draft_id: string;
  ok: boolean;
  lesson_id: string | null;
  codigo_bncc: string | null;
  error: string | null;
}

export interface BatchPublishReport {
  total: number;
  published: number;
  failed: number;
  codigos_bncc_publicados: string[];
  tabelas_preenchidas: Record<string, number>;
  duration_ms: number;
  items: BatchItemResult[];
  errors: { draft_id: string; message: string }[];
}

export const publishPendingLessonDrafts = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator(
    (input?: { limit?: number; status?: string }) => ({
      limit: Math.min(Math.max(input?.limit ?? 100, 1), 500),
      status: input?.status ?? "pending",
    }),
  )
  .handler(async ({ data }): Promise<BatchPublishReport> => {
    const started = Date.now();
    const items: BatchItemResult[] = [];
    const errors: { draft_id: string; message: string }[] = [];
    const codigosPublicados = new Set<string>();
    const tabelasPreenchidas: Record<string, number> = {
      lesson_content: 0,
      ...Object.fromEntries(CHILD_TABLES.map((t) => [t, 0])),
    };

    const { pool } = await import("../../../server/db");
    const client = await pool.connect();

    try {
      // 1. Seleciona TODOS os drafts pendentes (status configurável; default 'pending').
      const pend = await client.query<{ id: string }>(
        `SELECT id FROM public.lesson_drafts
          WHERE status = $1
          ORDER BY created_at ASC
          LIMIT $2`,
        [data.status, data.limit],
      );

      // 2. Publica um por vez — falha individual não derruba o lote.
      for (const row of pend.rows) {
        const draftId = row.id;
        try {
          const rpc = await client.query<{ lesson_id: string }>(
            "SELECT public.approve_lesson_draft($1::uuid) AS lesson_id",
            [draftId],
          );
          const lessonId = rpc.rows[0]?.lesson_id ?? null;
          if (!lessonId) {
            throw new Error("approve_lesson_draft não retornou lesson_id");
          }

          // Recupera codigo_bncc e contabiliza tabelas filhas para o relatório.
          const lc = await client.query<{ codigo_bncc: string }>(
            "SELECT codigo_bncc FROM public.lesson_content WHERE id = $1::uuid LIMIT 1",
            [lessonId],
          );
          const codigo = lc.rows[0]?.codigo_bncc ?? null;

          if (lc.rows[0]) tabelasPreenchidas.lesson_content += 1;
          if (codigo) {
            codigosPublicados.add(codigo);
            for (const tbl of CHILD_TABLES) {
              try {
                const r = await client.query<{ c: string }>(
                  `SELECT COUNT(*)::text AS c FROM public.${tbl} WHERE codigo_bncc = $1`,
                  [codigo],
                );
                tabelasPreenchidas[tbl] += Number(r.rows[0]?.c ?? 0);
              } catch {
                /* ignora contagem individual; não invalida publicação */
              }
            }
          }

          items.push({
            draft_id: draftId,
            ok: true,
            lesson_id: lessonId,
            codigo_bncc: codigo,
            error: null,
          });
        } catch (e) {
          const msg = e instanceof Error ? e.message : String(e);
          errors.push({ draft_id: draftId, message: msg });
          items.push({
            draft_id: draftId,
            ok: false,
            lesson_id: null,
            codigo_bncc: null,
            error: msg,
          });
          // continua o loop — próximo draft
        }
      }
    } finally {
      client.release();
    }

    const published = items.filter((i) => i.ok).length;
    const failed = items.length - published;

    return {
      total: items.length,
      published,
      failed,
      codigos_bncc_publicados: Array.from(codigosPublicados),
      tabelas_preenchidas: tabelasPreenchidas,
      duration_ms: Date.now() - started,
      items,
      errors,
    };
  });

export const BatchLessonPublisher = {
  publishPending: (opts?: { limit?: number; status?: string }) =>
    publishPendingLessonDrafts({ data: opts ?? {} }),
};

export default BatchLessonPublisher;
