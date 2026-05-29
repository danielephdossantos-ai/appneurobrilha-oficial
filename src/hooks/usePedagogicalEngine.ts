import { useAppState } from "@/core/store";
import { useMemo } from "react";
import { useNeuroAdaptive } from "./useNeuroAdaptive";

export function usePedagogicalEngine() {
  const { activeChild } = useAppState();
  const neuroAdaptive = useNeuroAdaptive();

  const profile = useMemo(() => {
    if (!activeChild) return null;

    return {
      base: neuroAdaptive.profile,
      flags: activeChild.flags,
      levels: activeChild.niveis,
      isAnamnesisComplete: activeChild.anamnese_completa,
      adjustment: neuroAdaptive.adjustment
    };
  }, [activeChild, neuroAdaptive]);

  return {
    profile,
    neuroAdaptive,
  };
}
