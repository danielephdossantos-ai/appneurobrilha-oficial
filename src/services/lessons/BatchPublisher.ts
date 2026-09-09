/**
 * BatchPublisher
 *
 * Publica TODOS os lesson_drafts pendentes usando EXCLUSIVAMENTE
 * a RPC `approve_lesson_draft(_draft_id)`.
 *
 * Regras:
 *  - Um draft por vez.
 *  - Falha individual não interrompe o lote.
 *  - Nenhum INSERT manual em tabelas lesson_*.
 *  - Relatório final contém: codigo_bncc, lesson_id, status, tempo (ms),
 *    tabelas preenchidas e erros encontrados.
 */

import { supabase } from "@/integrations/supabase/client";

const CHILD_TABLES = [
  "lesson_examples",
  "lesson_curiosities",
  "lesson_quizzes",
  "lesson_challenges",
  "lesson_assessments",
  "lesson_adaptations",
  "lesson_explanations",
  "lesson_reviews_full",
] as const;

export type ChildTable = typeof CHILD_TABLES[number];

export type PublishStatus = "published" | "failed";

export interface BatchPublishItem {
  draft_id: string;
  codigo_bncc: string | null;
  lesson_id: string | null;
  status: PublishStatus;
  tempo_ms: number;
  tabelas_preenchidas: Record<string, number>;
  erros: string[];
}

export interface BatchPublishReport {
  total: number;
  publicados: number;
  falhas: number;
  tempo_total_ms: number;
  gerado_em: string;
  itens: BatchPublishItem[];
  erros_globais: string[];
}

async function contarTabelasFilhas(codigo: string): Promise<Record<string, number>> {
  const out: Record<string, number> = { lesson_content: 0 };
  const lc = await supabase
    .from("lesson_content")
    .select("id", { count: "exact", head: true })
    .eq("codigo_bncc", codigo);
  out.lesson_content = lc.count ?? 0;

  await Promise.all(
    CHILD_TABLES.map(async (t) => {
      const r = await supabase
        .from(t)
        .select("codigo_bncc", { count: "exact", head: true })
        .eq("codigo_bncc", codigo);
      out[t] = r.count ?? 0;
    }),
  );
  return out;
}

export class BatchPublisher {
  /** Publica todos os drafts com status `pending`. */
  static async run(limit = 200): Promise<BatchPublishReport> {
    const t0 = Date.now();
    const erros_globais: string[] = [];

    const { data: drafts, error } = await supabase
      .from("lesson_drafts")
      .select("id, codigo_bncc")
      .eq("status", "pending")
      .order("created_at", { ascending: true })
      .limit(Math.min(Math.max(limit, 1), 1000));

    if (error) {
      return {
        total: 0,
        publicados: 0,
        falhas: 0,
        tempo_total_ms: Date.now() - t0,
        gerado_em: new Date().toISOString(),
        itens: [],
        erros_globais: [error.message],
      };
    }

    const itens: BatchPublishItem[] = [];

    for (const d of drafts ?? []) {
      const t1 = Date.now();
      const erros: string[] = [];
      let lesson_id: string | null = null;
      let tabelas: Record<string, number> = {};
      let status: PublishStatus = "failed";

      try {
        const { data: rpcId, error: rpcErr } = await supabase.rpc("approve_lesson_draft", {
          _draft_id: d.id,
        });
        if (rpcErr) throw new Error(rpcErr.message);
        lesson_id = (rpcId as unknown as string) ?? null;

        if (d.codigo_bncc) {
          try { tabelas = await contarTabelasFilhas(d.codigo_bncc); }
          catch (e) { erros.push(`audit: ${e instanceof Error ? e.message : String(e)}`); }
        }
        status = "published";
      } catch (e) {
        erros.push(e instanceof Error ? e.message : String(e));
      }

      itens.push({
        draft_id: d.id,
        codigo_bncc: d.codigo_bncc ?? null,
        lesson_id,
        status,
        tempo_ms: Date.now() - t1,
        tabelas_preenchidas: tabelas,
        erros,
      });
    }

    const publicados = itens.filter((i) => i.status === "published").length;
    return {
      total: itens.length,
      publicados,
      falhas: itens.length - publicados,
      tempo_total_ms: Date.now() - t0,
      gerado_em: new Date().toISOString(),
      itens,
      erros_globais,
    };
  }
}

export default BatchPublisher;
