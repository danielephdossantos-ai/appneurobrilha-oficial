import { useAppState } from "@/core/store";
import { useMemo } from "react";
import { useNeuroAdaptive } from "./useNeuroAdaptive";

export function usePedagogicalEngine() {
  const { activeChild } = useAppState();
  const neuroAdaptive = useNeuroAdaptive();

  const profileData = useMemo(() => {
    if (!activeChild) return null;

    const adj = neuroAdaptive.adjustment;

    return {
      base: neuroAdaptive.profile,
      flags: activeChild.flags,
      levels: activeChild.niveis,
      isAnamnesisComplete: activeChild.anamnese_completa,
      adjustment: adj,
    };
  }, [activeChild, neuroAdaptive]);

  const legacyCompatibility = useMemo(() => {
    const adj = neuroAdaptive.adjustment;
    if (!adj) return { adaptive: null, sensory: null };

    return {
      adaptive: {
        visualScale: adj.difficultyScale,
        animationSpeed: adj.animationIntensity === "none" ? 0.1 : adj.animationIntensity === "low" ? 0.5 : 1.0,
        stimuliLevel: adj.stimuliReduction ? "low" : "medium",
      },
      sensory: {
        visualScale: adj.difficultyScale,
        stimuliLevel: adj.stimuliReduction ? "none" : "medium",
      }
    };
  }, [neuroAdaptive.adjustment]);

  return {
    profile: profileData,
    neuroAdaptive,
    ...legacyCompatibility
  };
}
