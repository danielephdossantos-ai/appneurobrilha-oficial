import { useAppState } from "@/core/store";
import { useMemo } from "react";
import { useNeuroAdaptive } from "./useNeuroAdaptive";

export function usePedagogicalEngine() {
  const { activeChild } = useAppState();
  const neuroAdaptive = useNeuroAdaptive();

  const profile = useMemo(() => {
    if (!activeChild) return null;

    // Backward compatibility with the old engine structure
    // But powered by the new deterministic core
    const adj = neuroAdaptive.adjustment;

    return {
      base: neuroAdaptive.profile,
      flags: activeChild.flags,
      levels: activeChild.niveis,
      isAnamnesisComplete: activeChild.anamnese_completa,
      adjustment: adj,
      // Legacy compatibility properties
      adaptive: adj ? {
        visualScale: adj.difficultyScale, // approximate mapping
        animationSpeed: adj.animationIntensity === "none" ? 0.1 : adj.animationIntensity === "low" ? 0.5 : 1.0,
        stimuliLevel: adj.stimuliReduction ? "low" : "medium",
      } : null,
      sensory: adj ? {
        visualScale: adj.difficultyScale,
        stimuliLevel: adj.stimuliReduction ? "none" : "medium",
      } : null
    };
  }, [activeChild, neuroAdaptive]);

  return {
    profile,
    neuroAdaptive,
  };
}
