import { useAppState } from "@/core/store";
import { AdaptiveEngine, NeuroProfile } from "@/modules/neuro-treino/engine/adaptive-engine";
import { SensoryEngine } from "@/modules/sensorial/engine/sensory-engine";
import { useMemo } from "react";
import { Emotion, EmotionalEngine } from "@/engines/regulation-engine/emotional-engine";

export function usePedagogicalEngine() {
  const { activeChild } = useAppState();

  const profile = useMemo(() => {
    if (!activeChild) return null;

    let neuroProfile: NeuroProfile = "Neurotipico";
    if (activeChild.diagnostico === 'tea') neuroProfile = "TEA";
    else if (activeChild.diagnostico === 'tdah') neuroProfile = "TDAH";
    else if (activeChild.diagnostico === 'dislexia') neuroProfile = "Dislexia";

    return {
      base: neuroProfile,
      flags: activeChild.flags,
      levels: activeChild.niveis,
      isAnamnesisComplete: activeChild.anamnese_completa
    };
  }, [activeChild]);

  return {
    profile,
    adaptive: AdaptiveEngine,
    sensory: SensoryEngine
  };
}
