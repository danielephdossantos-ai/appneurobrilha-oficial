import { useEffect, useMemo, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/database/supabase/client";
import type { AnamneseV2Responses, PerfilScores, RiskMap } from "../v2/types";
import { ACTIVE_STEPS } from "../v2/types";
import { computeRiskMap, computeScores } from "../v2/scoring";
import { AnamnesisProcessor } from "@/modules/neuro-treino/engine/AnamnesisProcessor";
import { salvarPlanoParaCrianca } from "@/modules/plano-anual/persist";

interface Row {
  id: string;
  child_id: string;
  user_id: string;
  current_step: number;
  responses: AnamneseV2Responses;
  scores: PerfilScores | Record<string, never>;
  risk_levels: RiskMap | Record<string, never>;
  completed: boolean;
}

export function useAnamneseV2(childId: string) {
  const qc = useQueryClient();
  const [localResponses, setLocalResponses] = useState<AnamneseV2Responses>({});
  const [localStep, setLocalStep] = useState(1);
  const hydratedRef = useRef(false);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { data: row, isLoading } = useQuery({
    queryKey: ["anamnese_v2", childId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("anamnese_v2" as any)
        .select("*")
        .eq("child_id", childId)
        .maybeSingle();
      if (error && (error as any).code !== "PGRST116") throw error;
      return data as any as Row | null;
    },
  });

  // Hidratar uma vez
  useEffect(() => {
    if (!hydratedRef.current && row) {
      setLocalResponses(row.responses ?? {});
      setLocalStep(ACTIVE_STEPS.includes(row.current_step) ? row.current_step : ACTIVE_STEPS[0]);
      hydratedRef.current = true;
    } else if (!hydratedRef.current && !isLoading && !row) {
      hydratedRef.current = true;
    }
  }, [row, isLoading]);

  const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

  const upsert = useMutation({
    mutationFn: async (payload: {
      responses: AnamneseV2Responses;
      current_step: number;
      completed?: boolean;
    }) => {
      if (!UUID_RE.test(childId)) {
        throw new Error("Criança inválida. Recarregue a página.");
      }
      const { data: auth } = await supabase.auth.getUser();
      const userId = auth?.user?.id;
      if (!userId) throw new Error("Faça login para salvar a anamnese.");

      const scores = computeScores(payload.responses);
      const risk_levels = computeRiskMap(scores);
      const insertRow = {
        child_id: childId,
        user_id: userId,
        responses: payload.responses,
        current_step: payload.current_step,
        completed: payload.completed ?? false,
        completed_at: payload.completed ? new Date().toISOString() : null,
        scores,
        risk_levels,
      };
      const { error } = await supabase
        .from("anamnese_v2" as any)
        .upsert(insertRow, { onConflict: "child_id" });
      if (error) throw error;
      return { scores, risk_levels };
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["anamnese_v2", childId] });
    },
  });

  // Salvamento automático com debounce
  const updateStep = <K extends keyof AnamneseV2Responses>(
    key: K,
    patch: AnamneseV2Responses[K],
  ) => {
    setLocalResponses((prev) => {
      const next = { ...prev, [key]: { ...(prev[key] ?? {}), ...(patch as any) } };
      if (saveTimer.current) clearTimeout(saveTimer.current);
      saveTimer.current = setTimeout(() => {
        upsert.mutate({ responses: next, current_step: localStep });
      }, 800);
      return next;
    });
  };

  const goTo = (step: number) => {
    setLocalStep(step);
    upsert.mutate({ responses: localResponses, current_step: step });
  };

  const finish = async () => {
    const res = await upsert.mutateAsync({
      responses: localResponses,
      current_step: ACTIVE_STEPS[ACTIVE_STEPS.length - 1] ?? 16,
      completed: true,
    });
    // Marca a criança como tendo anamnese concluída → libera painel dos pais
    // e o nascimento do Pip/Pipa na área da criança.
    if (UUID_RE.test(childId)) {
      const internal = AnamnesisProcessor.processV2(localResponses, res.scores);
      const childPatch = AnamnesisProcessor.mapV2ToChildPatch(internal, localResponses, res.scores);
      const { error } = await supabase
        .from("children")
        .update(childPatch as any)
        .eq("id", childId);
      if (error) console.warn("[anamnese] falha ao marcar anamnese_completa", error);

      // Gera e salva o plano anual automaticamente após a anamnese.
      try {
        const step1: any = (localResponses as any).step1 ?? {};
        const idadeRaw = Number(step1.idade);
        const idade = Number.isFinite(idadeRaw) ? Math.max(3, Math.min(7, idadeRaw)) : 5;
        const serie = typeof step1.serie === "string" ? step1.serie : undefined;
        await salvarPlanoParaCrianca({
          childId,
          idade,
          serie,
          responses: localResponses,
          risk: res.risk_levels,
        });
      } catch (e) {
        console.warn("[anamnese] falha ao gerar plano anual", e);
      }
      qc.invalidateQueries({ queryKey: ["children"] });
      qc.invalidateQueries({ queryKey: ["plano_anual"] });
    }
    return res;
  };

  const scores = useMemo(() => computeScores(localResponses), [localResponses]);
  const risk = useMemo(() => computeRiskMap(scores), [scores]);

  return {
    isLoading,
    responses: localResponses,
    currentStep: localStep,
    setStep: setLocalStep,
    goTo,
    updateStep,
    finish,
    scores,
    risk,
    completed: row?.completed ?? false,
    saving: upsert.isPending,
  };
}
