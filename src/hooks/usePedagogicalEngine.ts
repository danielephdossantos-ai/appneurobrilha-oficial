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
    const adj = neuroAdaptive?.adjustment;

    if (!adj) {
      console.warn("[usePedagogicalEngine] neuroAdaptive.adjustment is missing, using fallback.");
    }

    // Mapeamento completo para compatibilidade com o sistema antigo
    return {
      adaptive: {
        visualScale: adj?.difficultyScale ?? 1.0,
        animationSpeed:
          adj?.animationIntensity === "none" ? 0.5 : adj?.animationIntensity === "low" ? 0.8 : 1.2,
        stimuliLevel: adj?.stimuliReduction ? "low" : "medium",
        visualComplexity: adj?.visualComplexity ?? "medium",
        difficulty: adj?.difficultyScale ?? 1.0,
        breakFrequency: adj?.suggestBreak ? 5 : 15,
        instructionType: "mixed",
        repetitionRate: 1.0,
        positiveReinforcementFrequency:
          (adj?.positiveReinforcementFrequency ?? 0.5) > 0.7 ? "high" : "standard",
        autonomyLevel: "guided",
        complexityMultiplier: adj?.difficultyScale ?? 1.0,
        maxItemsPerScreen: adj?.maxInformationDensity ?? 5,
        reinforcementIntensity:
          (adj?.positiveReinforcementFrequency ?? 0.5) > 0.8 ? "high" : "standard",
        animationIntensity: adj?.animationIntensity ?? "standard",
        responseTimeLimit: null,
        predictabilityLevel: "high",
      },
      sensory: {
        visualScale: adj?.difficultyScale ?? 1.0,
        stimuliLevel: adj?.stimuliReduction ? "none" : "medium",
        soundVolume: adj?.audioAdaptation.volume ?? 0.8,
        brightness: 1.0,
        contrast: 1.0,
        fontSize: 16 * (adj?.difficultyScale ?? 1.0),
        colorPalette: "standard",
        animationIntensity: adj?.animationIntensity ?? "standard",
        hapticFeedback: true,
      },
    };
  }, [neuroAdaptive.adjustment]);

  return {
    profile: profileData,
    neuroAdaptive,
    ...legacyCompatibility,
  };
}
