// ============================================================
// Hook: gera automaticamente o plano trimestral PEI
// ============================================================
// Quando a criança entra na Jornada 365 e:
//  - tem anamnese completa
//  - não tem plano "ativo" e dentro do trimestre vigente
// dispara `gerarESalvarPlanoTrimestral` sem pedir nada ao pai.
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

  useEffect(() => {
    if (!childId || !anamneseCompleta) return;
    if (planoQuery.isLoading || planoQuery.isError) return;
    if (gerandoRef.current) return;

    const plano = planoQuery.data;
    const hoje = new Date().toISOString().slice(0, 10);
    const precisaGerar =
      !plano || plano.total_aulas === 0 || plano.trimestre_fim < hoje;

    if (!precisaGerar) return;

    gerandoRef.current = true;
    (async () => {
      try {
        // Pega anamnese mais recente (opcional)
        const { data: anamnese } = await supabase
          .from("anamnese_v2")
          .select("id")
          .eq("child_id", childId)
          .eq("completed", true)
          .order("completed_at", { ascending: false })
          .limit(1)
          .maybeSingle();

        await gerarESalvarPlanoTrimestral(childId, {
          anamneseId: anamnese?.id ?? null,
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
    planoQuery.data,
    planoQuery.isLoading,
    planoQuery.isError,
    queryClient,
  ]);

  return {
    plano: planoQuery.data ?? null,
    carregando: planoQuery.isLoading || gerandoRef.current,
    gerando: gerandoRef.current,
  };
}
