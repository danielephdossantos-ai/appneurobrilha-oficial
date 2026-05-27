
import { useAppState } from "@/lib/store";
import { AdaptiveEngine } from "@/core/adaptive/engine";
import { SensoryEngine } from "@/core/sensory/engine";
import { useMemo } from "react";
import { NeuroProfile } from "@/core/neuro/engine";
import { Emotion } from "@/core/emotional/engine";

export function usePedagogicalEngine() {
  const { activeChild } = useAppState();

  const profile = useMemo(() => {
    if (!activeChild) return null;

    // Map internal diagnostico to core engine profile
    let neuroProfile: NeuroProfile = "neurotipico";
    if (activeChild.diagnostico === "tea") neuroProfile = "autismo";
    else if (activeChild.diagnostico === "tdah") neuroProfile = "tdah";
    else if (activeChild.diagnostico === "dislexia") neuroProfile = "dislexia";

    // Mocking current performance and emotion for now
    // In a real app, these would come from state or recent activity logs
    const currentEmotion: Emotion = "feliz"; 
    const performance = { successRate: 0.85 };

    const adaptive = AdaptiveEngine.orchestrateActivity(
      activeChild.id,
      neuroProfile,
      currentEmotion,
      performance
    );

    const sensory = SensoryEngine.getDefaultPreferences(neuroProfile);

    return {
      adaptive,
      sensory,
      child: activeChild,
    };
  }, [activeChild]);

  return profile;
}
