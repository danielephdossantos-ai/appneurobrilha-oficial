// ============================================================
// Hook: gera bimestralmente o plano PEI (60 aulas).
// Bloqueia a geração se a anamnese tem mais de 60 dias —
// o pai precisa refazer pra adaptar ao novo momento da criança.
// ============================================================

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { gerarESalvarPlanoTrimestral } from "./orquestrador";

type Plano = {
  id: string;
  status: string;
  trimestre_inicio: string;
  trimestre_fim: string;
  total_aulas: number;
  anamnese_id: string | null;
};

type AnamneseInfo = {
  id: string;
  completed_at: string | null;
};

const DIAS_VALIDADE_ANAMNESE = 60;

function diasDesde(iso: string | null): number {
  if (!iso) return Infinity;
  const ms = Date.now() - new Date(iso).getTime();
  return Math.floor(ms / 86_400_000);
}

export function usePEIAutoGenerate(params: {
  childId: string | null | undefined;
  anamneseCompleta: boolean;
}) {
  const { childId, anamneseCompleta } = params;
  const queryClient = useQueryClient();
  const gerandoRef = useRef(false);

  const planoQuery = useQuery({
    queryKey: ["pei-plano-ativo", childId],
    queryFn: async (): Promise<Plano | null> => {
      if (!childId) return null;
      const { data, error } = await supabase
        .from("pei_planos")
        .select("id, status, trimestre_inicio, trimestre_fim, total_aulas, anamnese_id")
        .eq("child_id", childId)
        .eq("status", "ativo")
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();
      if (error) throw error;
      return (data as Plano | null) ?? null;
    },
    enabled: !!childId,
  });

  const anamneseQuery = useQuery({
    queryKey: ["pei-anamnese-recente", childId],
    queryFn: async (): Promise<AnamneseInfo | null> => {
      if (!childId) return null;
      const { data, error } = await supabase
        .from("anamnese_v2")
        .select("id, completed_at")
        .eq("child_id", childId)
        .eq("completed", true)
        .order("completed_at", { ascending: false })
        .limit(1)
        .maybeSingle();
      if (error) throw error;
      return (data as AnamneseInfo | null) ?? null;
    },
    enabled: !!childId && anamneseCompleta,
  });

  const completedAt = anamneseQuery.data?.completed_at ?? null;
  const anamneseDias = diasDesde(completedAt);
  // Só consideramos vencida quando existe registro datado de fato com mais de 60 dias.
  // Se não há registro em anamnese_v2 (fluxo antigo ou seed), confiamos em children.anamnese_completa.
  const anamneseVencida = completedAt !== null && anamneseDias > DIAS_VALIDADE_ANAMNESE;

  useEffect(() => {
    if (!childId || !anamneseCompleta) return;
    if (planoQuery.isLoading || planoQuery.isError) return;
    if (anamneseQuery.isLoading) return;
    if (anamneseVencida) return; // bloqueia até refazer
    if (gerandoRef.current) return;

    const plano = planoQuery.data;
    const hoje = new Date().toISOString().slice(0, 10);
    const precisaGerar =
      !plano || plano.total_aulas === 0 || plano.trimestre_fim < hoje;

    if (!precisaGerar) return;

    gerandoRef.current = true;
    (async () => {
      try {
        await gerarESalvarPlanoTrimestral(childId, {
          anamneseId: anamneseQuery.data?.id ?? null,
          totalAulas: 60,
        });
        await queryClient.invalidateQueries({ queryKey: ["pei-plano-ativo", childId] });
        await queryClient.invalidateQueries({ queryKey: ["pei-aula-hoje", childId] });
      } catch (e) {
        console.error("[PEI] auto-geração falhou:", e);
      } finally {
        gerandoRef.current = false;
      }
    })();
  }, [
    childId,
    anamneseCompleta,
    anamneseVencida,
    anamneseQuery.data,
    anamneseQuery.isLoading,
    planoQuery.data,
    planoQuery.isLoading,
    planoQuery.isError,
    queryClient,
  ]);

  return {
    plano: planoQuery.data ?? null,
    carregando: planoQuery.isLoading || gerandoRef.current,
    gerando: gerandoRef.current,
    anamneseVencida,
    diasDesdeAnamnese: anamneseDias,
    anamneseId: anamneseQuery.data?.id ?? null,
  };
}
