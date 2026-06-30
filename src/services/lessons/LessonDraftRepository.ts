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

    // Conexão direta com Postgres (Drizzle pool) — server-only.
    // Auth já foi validada pelo middleware acima.
    const { pool } = await import("../../../server/db");
    const client = await pool.connect();

    try {
      // 4. Transação atômica. Qualquer erro -> ROLLBACK -> nada persiste.
      await client.query("BEGIN");

      // 4.1 Pré-checagem: já existe um draft PENDENTE para este codigo_bncc?
      // Regra: nunca sobrescrever um draft pendente — bloquear novo INSERT.
      const pendingCheck = await client.query<{ id: string; created_at: string }>(
        `SELECT id, created_at
           FROM public.lesson_drafts
          WHERE codigo_bncc = $1 AND status = 'pending'
          LIMIT 1`,
        [row.codigo_bncc],
      );
      if (pendingCheck.rows.length > 0) {
        await client.query("ROLLBACK");
        const existing = pendingCheck.rows[0];
        throw new Error(
          `DRAFT_PENDING_EXISTS: já existe draft pendente para ${row.codigo_bncc} ` +
            `(id=${existing.id}, criado em ${existing.created_at}). ` +
            `Revise ou rejeite o draft pendente antes de criar outro.`,
        );
      }

      // 4.2 Versão: nova versão sempre que existir conteúdo já publicado
      // OU drafts anteriores aprovados/rejeitados. v1 = primeira tentativa.
      const versionRow = await client.query<{ next_version: number }>(
        `SELECT (
            COALESCE((SELECT COUNT(*) FROM public.lesson_drafts WHERE codigo_bncc = $1), 0)
          + COALESCE((SELECT COUNT(*) FROM public.lesson_content WHERE codigo_bncc = $1), 0)
          + 1
         )::int AS next_version`,
        [row.codigo_bncc],
      );
      const version = versionRow.rows[0]?.next_version ?? 1;

      // 4.3 Observações: combina version + autor + obs do input em `notes`.
      const observacoes =
        typeof (data as { observacoes?: unknown }).observacoes === "string"
          ? ((data as { observacoes?: string }).observacoes ?? "").trim()
          : "";
      const notes =
        `v${version} | autor=${context.userId} | ${new Date().toISOString()}` +
        (observacoes ? ` | obs: ${observacoes}` : "");

      // 4.4 Persistir metadados de versão no próprio payload (._meta) — não
      // altera a estrutura de aprovação, apenas anexa informação auditável.
      const payloadWithMeta = {
        ...row.payload,
        _meta: {
          ...(row.payload && typeof row.payload === "object"
            ? ((row.payload as Record<string, unknown>)._meta ?? {})
            : {}),
          version,
          author: context.userId,
          imported_at: new Date().toISOString(),
          observacoes: observacoes || null,
        },
      };

      const result = await client.query<{ id: string; codigo_bncc: string }>(
        `INSERT INTO public.lesson_drafts
           (codigo_bncc, ano, disciplina, titulo, payload, status, generated_by, notes)
         VALUES ($1, $2, $3, $4, $5::jsonb, 'pending', $6, $7)
         RETURNING id, codigo_bncc`,
        [
          row.codigo_bncc,
          row.ano ?? null,
          row.disciplina ?? null,
          row.titulo ?? null,
          JSON.stringify(payloadWithMeta),
          context.userId,
          notes,
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
