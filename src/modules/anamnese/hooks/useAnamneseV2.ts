import { useEffect, useMemo, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/database/supabase/client";
import type { AnamneseV2Responses, PerfilScores, RiskMap } from "../v2/types";
import { computeRiskMap, computeScores } from "../v2/scoring";

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
      setLocalStep(row.current_step ?? 1);
      hydratedRef.current = true;
    } else if (!hydratedRef.current && !isLoading && !row) {
      hydratedRef.current = true;
    }
  }, [row, isLoading]);

  const upsert = useMutation({
    mutationFn: async (payload: {
      responses: AnamneseV2Responses;
      current_step: number;
      completed?: boolean;
    }) => {
      const scores = computeScores(payload.responses);
      const risk_levels = computeRiskMap(scores);
      const insertRow = {
        child_id: childId,
        user_id: "replit",
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
    return upsert.mutateAsync({
      responses: localResponses,
      current_step: 16,
      completed: true,
    });
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
