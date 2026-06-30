/**
 * LessonDraftRepository
 * ------------------------------------------------------------------
 * Responsabilidade ÚNICA: salvar drafts pedagógicos em `lesson_drafts`.
 *
 * Fluxo obrigatório:
 *   1. DraftBuilder.build(input)         -> monta o objeto
 *   2. DraftPayloadValidator.assert()    -> valida (bloqueia se inválido)
 *   3. INSERT em lesson_drafts (status='pending')
 *   4. Retorna o id do draft criado
 *
 * Garantias:
 *   - NUNCA chama approve_lesson_draft().
 *   - NUNCA publica conteúdo sem aprovação humana.
 *   - Operação atômica: qualquer erro cancela tudo (nenhum estado parcial).
 *   - Auth obrigatória; inserção feita do servidor com o token do usuário,
 *     respeitando RLS de `lesson_drafts`.
 */

import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import {
  DraftBuilder,
  type DraftBuilderInput,
  type LessonDraftRow,
} from "./DraftBuilder";
import { DraftPayloadValidator } from "./DraftPayloadValidator";

export interface SaveDraftResult {
  draft_id: string;
  codigo_bncc: string;
  status: "pending";
}

/**
 * Server function: salva um draft a partir do input pedagógico cru.
 * Retorna o id do draft criado. Não publica.
 */
export const saveLessonDraft = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: DraftBuilderInput) => {
    if (!data || typeof data !== "object") {
      throw new Error("saveLessonDraft: input ausente");
    }
    return data;
  })
  .handler(async ({ data, context }): Promise<SaveDraftResult> => {
    // 1. Build
    const row: LessonDraftRow = DraftBuilder.build(data);

    // 2. Validate (bloqueia salvamento se inválido — erro nomeia o campo)
    DraftPayloadValidator.assert(row);

    // 3. Garantir status pendente, independente do que veio do builder
    const insertRow = {
      codigo_bncc: row.codigo_bncc,
      ano: row.ano ?? null,
      disciplina: row.disciplina ?? null,
      titulo: row.titulo ?? null,
      payload: row.payload,
      status: "pending" as const,
      created_by: context.userId,
    };

    // Conexão direta com Postgres (Drizzle pool) — server-only.
    // Auth já foi validada pelo middleware acima.
    const { pool } = await import("../../../server/db");
    const client = await pool.connect();

    try {
      // 4. Transação atômica. Qualquer erro -> ROLLBACK -> nada persiste.
      await client.query("BEGIN");

      const result = await client.query<{ id: string; codigo_bncc: string }>(
        `INSERT INTO public.lesson_drafts
           (codigo_bncc, ano, disciplina, titulo, payload, status, created_by)
         VALUES ($1, $2, $3, $4, $5::jsonb, 'pending', $6)
         RETURNING id, codigo_bncc`,
        [
          row.codigo_bncc,
          row.ano ?? null,
          row.disciplina ?? null,
          row.titulo ?? null,
          JSON.stringify(row.payload),
          context.userId,
        ],
      );

      await client.query("COMMIT");

      const inserted = result.rows[0];
      if (!inserted?.id) {
        throw new Error("LessonDraftRepository: insert sem id retornado");
      }

      return {
        draft_id: inserted.id,
        codigo_bncc: inserted.codigo_bncc,
        status: "pending",
      };
    } catch (err) {
      try {
        await client.query("ROLLBACK");
      } catch {
        /* ignore rollback failure */
      }
      const msg = err instanceof Error ? err.message : String(err);
      throw new Error(`LessonDraftRepository: falha ao salvar draft -> ${msg}`);
    } finally {
      client.release();
    }
  });

/**
 * Fachada estática para uso programático em outros services.
 * Sempre via a server function (única porta de entrada).
 */
export const LessonDraftRepository = {
  save: (input: DraftBuilderInput) => saveLessonDraft({ data: input }),
};

export default LessonDraftRepository;
