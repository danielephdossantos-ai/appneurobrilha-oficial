/**
 * LessonPublisher
 * ------------------------------------------------------------------
 * Publica um draft pedagógico existente.
 *
 * Regras absolutas:
 *   - Recebe APENAS o id do draft.
 *   - Executa EXCLUSIVAMENTE a função SQL `approve_lesson_draft(_draft_id)`.
 *   - NUNCA faz INSERT manual em lesson_content / lesson_examples /
 *     lesson_assessments / lesson_adaptations / lesson_resources /
 *     lesson_explanations / lesson_curiosities / lesson_challenges /
 *     lesson_reviews_full / lesson_quizzes.
 *   - Após a publicação, audita as tabelas filhas e devolve relatório.
 */

import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
// Contrato pedagógico único — referência canônica das seções publicadas.
import { LESSON_CONTRACT } from "./LessonContract";

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

export interface PublishReport {
  ok: boolean;
  draft_id: string;
  lesson_id: string | null;
  codigo_bncc: string | null;
  lesson_content_created: boolean;
  tables: Record<string, number>;
  empty_tables: string[];
  duration_ms: number;
  errors: string[];
}

export const publishLessonDraft = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { draft_id: string }) => {
    if (!input?.draft_id || typeof input.draft_id !== "string") {
      throw new Error("publishLessonDraft: draft_id obrigatório");
    }
    return input;
  })
  .handler(async ({ data }): Promise<PublishReport> => {
    const started = Date.now();
    const errors: string[] = [];
    const tables: Record<string, number> = {};
    let lessonId: string | null = null;
    let codigoBncc: string | null = null;
    let lessonContentCreated = false;

    const { pool } = await import("../../../server/db");
    const client = await pool.connect();

    try {
      // 1. Publicação EXCLUSIVA via função SQL aprovada.
      const rpc = await client.query<{ approve_lesson_draft: string }>(
        "SELECT public.approve_lesson_draft($1::uuid) AS approve_lesson_draft",
        [data.draft_id],
      );
      lessonId = rpc.rows[0]?.approve_lesson_draft ?? null;

      if (!lessonId) {
        errors.push("approve_lesson_draft não retornou lesson_id");
      }

      // 2. Verificar lesson_content + recuperar codigo_bncc canônico.
      const lc = await client.query<{ id: string; codigo_bncc: string }>(
        "SELECT id, codigo_bncc FROM public.lesson_content WHERE id = $1::uuid LIMIT 1",
        [lessonId],
      );
      if (lc.rows[0]) {
        lessonContentCreated = true;
        codigoBncc = lc.rows[0].codigo_bncc;
        tables.lesson_content = 1;
      } else {
        errors.push("lesson_content não foi criada para o lesson_id retornado");
      }

      // 3. Contar registros em cada tabela filha pelo codigo_bncc.
      if (codigoBncc) {
        for (const tbl of CHILD_TABLES) {
          try {
            const r = await client.query<{ c: string }>(
              `SELECT COUNT(*)::text AS c FROM public.${tbl} WHERE codigo_bncc = $1`,
              [codigoBncc],
            );
            tables[tbl] = Number(r.rows[0]?.c ?? 0);
          } catch (e) {
            const msg = e instanceof Error ? e.message : String(e);
            errors.push(`${tbl}: ${msg}`);
            tables[tbl] = 0;
          }
        }
      }
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      errors.push(`approve_lesson_draft falhou: ${msg}`);
    } finally {
      client.release();
    }

    const empty_tables = Object.entries(tables)
      .filter(([, n]) => n === 0)
      .map(([k]) => k);

    return {
      ok: errors.length === 0 && lessonContentCreated,
      draft_id: data.draft_id,
      lesson_id: lessonId,
      codigo_bncc: codigoBncc,
      lesson_content_created: lessonContentCreated,
      tables,
      empty_tables,
      duration_ms: Date.now() - started,
      errors,
    };
  });

export const LessonPublisher = {
  publish: (draft_id: string) => publishLessonDraft({ data: { draft_id } }),
};

export default LessonPublisher;
