import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";
import { supabase } from "@/integrations/supabase/client";

/**
 * Persistência do progresso do curso "Ler com Aurora".
 *
 * Fonte de verdade: tabela `aurora_progresso` (Supabase).
 * Cache local: `localStorage` — usado para carregamento imediato e como
 * fallback offline. Toda gravação atualiza os dois.
 */

const LEGACY_KEY = "eb.ler-aurora.concluidas";

function chaveLocal(childId: string | null): string {
  return childId ? `eb.ler-aurora.concluidas.${childId}` : LEGACY_KEY;
}

export function lerConcluidasLocal(childId: string | null): string[] {
  try {
    if (typeof window === "undefined") return [];
    const raw =
      localStorage.getItem(chaveLocal(childId)) ??
      localStorage.getItem(LEGACY_KEY);
    if (!raw) return [];
    const list = JSON.parse(raw);
    return Array.isArray(list) ? (list as string[]) : [];
  } catch {
    return [];
  }
}

function gravarConcluidasLocal(childId: string | null, slugs: string[]) {
  try {
    if (typeof window === "undefined") return;
    localStorage.setItem(chaveLocal(childId), JSON.stringify(slugs));
    localStorage.setItem(
      "eb.ler-aurora.ultimo-dia",
      new Date().toISOString().slice(0, 10),
    );
  } catch {
    /* ignore */
  }
}

type LinhaAurora = {
  child_id: string;
  fase_atual: number;
  missoes_concluidas: string[];
  ultima_missao_slug: string | null;
  ultima_data: string | null;
};

async function carregarDB(childId: string): Promise<LinhaAurora | null> {
  const { data, error } = await supabase
    .from("aurora_progresso")
    .select("child_id, fase_atual, missoes_concluidas, ultima_missao_slug, ultima_data")
    .eq("child_id", childId)
    .maybeSingle();
  if (error) throw error;
  if (!data) return null;
  const missoes = Array.isArray(data.missoes_concluidas)
    ? (data.missoes_concluidas as string[])
    : [];
  return {
    child_id: data.child_id,
    fase_atual: data.fase_atual,
    missoes_concluidas: missoes,
    ultima_missao_slug: data.ultima_missao_slug,
    ultima_data: data.ultima_data,
  };
}

async function upsertDB(row: {
  child_id: string;
  fase_atual: number;
  missoes_concluidas: string[];
  ultima_missao_slug: string | null;
}) {
  const { error } = await supabase
    .from("aurora_progresso")
    .upsert(
      {
        child_id: row.child_id,
        fase_atual: row.fase_atual,
        missoes_concluidas: row.missoes_concluidas,
        ultima_missao_slug: row.ultima_missao_slug,
        ultima_data: new Date().toISOString().slice(0, 10),
      },
      { onConflict: "child_id" },
    );
  if (error) throw error;
}

/**
 * Marca uma missão como concluída para a criança ativa.
 * Faz merge com o que já existe (localStorage + DB) e faz upsert.
 * Retorna a lista final de slugs concluídos.
 */
export async function marcarMissaoConcluida(params: {
  childId: string | null;
  slug: string;
  fase: number;
}): Promise<string[]> {
  const { childId, slug, fase } = params;

  // 1) Merge local imediato
  const locais = lerConcluidasLocal(childId);
  const set = new Set(locais);
  set.add(slug);

  if (!childId) {
    const finais = Array.from(set);
    gravarConcluidasLocal(null, finais);
    return finais;
  }

  // 2) Merge com DB (se disponível)
  try {
    const linha = await carregarDB(childId);
    if (linha) for (const s of linha.missoes_concluidas) set.add(s);
  } catch {
    /* offline / erro de rede: seguimos com o que temos */
  }

  const finais = Array.from(set);
  gravarConcluidasLocal(childId, finais);

  try {
    await upsertDB({
      child_id: childId,
      fase_atual: fase,
      missoes_concluidas: finais,
      ultima_missao_slug: slug,
    });
  } catch {
    /* sem rede: localStorage segura o progresso até o próximo sync */
  }

  return finais;
}

/**
 * Hook que retorna o conjunto de missões concluídas.
 * - Chuta com localStorage para renderizar sem tela em branco.
 * - Reconcilia com o Supabase em background.
 */
export function useAuroraConcluidas(childId: string | null) {
  const qc = useQueryClient();
  const locais = useMemo(() => lerConcluidasLocal(childId), [childId]);

  const query = useQuery({
    queryKey: ["aurora_progresso", childId],
    enabled: !!childId,
    queryFn: async () => {
      if (!childId) return [] as string[];
      const linha = await carregarDB(childId);
      const set = new Set(lerConcluidasLocal(childId));
      if (linha) for (const s of linha.missoes_concluidas) set.add(s);
      const finais = Array.from(set);
      gravarConcluidasLocal(childId, finais);
      return finais;
    },
    initialData: locais,
    staleTime: 30_000,
  });

  const invalidar = useCallback(() => {
    qc.invalidateQueries({ queryKey: ["aurora_progresso", childId] });
  }, [qc, childId]);

  return {
    concluidas: new Set(query.data ?? locais),
    loading: query.isLoading,
    invalidar,
  };
}
