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
    // Fallback para garantir que nunca seja null para o TS


    // Mapeamento completo para compatibilidade com o sistema antigo
    return {
      adaptive: {
        visualScale: adj.difficultyScale,
        animationSpeed: adj.animationIntensity === "none" ? 0.5 : adj.animationIntensity === "low" ? 0.8 : 1.2,
        stimuliLevel: adj.stimuliReduction ? "low" : "medium",
        visualComplexity: adj.visualComplexity,
        difficulty: adj.difficultyScale,
        breakFrequency: adj.suggestBreak ? 5 : 15,
        instructionType: "mixed",
        repetitionRate: 1.0,
        positiveReinforcementFrequency: adj.positiveReinforcementFrequency > 0.7 ? "high" : "standard",
        autonomyLevel: "guided",
        complexityMultiplier: adj.difficultyScale,
        maxItemsPerScreen: adj.maxInformationDensity,
        reinforcementIntensity: adj.positiveReinforcementFrequency > 0.8 ? "high" : "standard",
        animationIntensity: adj.animationIntensity,
        responseTimeLimit: null,
        predictabilityLevel: "high"
      },
      sensory: {
        visualScale: adj.difficultyScale,
        stimuliLevel: adj.stimuliReduction ? "none" : "medium",
        soundVolume: adj.audioAdaptation.volume,
        brightness: 1.0,
        contrast: 1.0,
        fontSize: 16 * adj.difficultyScale,
        colorPalette: "standard",
        animationIntensity: adj.animationIntensity,
        hapticFeedback: true
      }
    };
  }, [neuroAdaptive.adjustment]);


  return {
    profile: profileData,
    neuroAdaptive,
    ...legacyCompatibility
  };
}
