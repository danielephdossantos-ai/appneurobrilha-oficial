
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
    let neuroProfile: NeuroProfile = "Neurotipico";
    if (activeChild.diagnostico === "tea") neuroProfile = "TEA";
    else if (activeChild.diagnostico === "tdah") neuroProfile = "TDAH";
    else if (activeChild.diagnostico === "dislexia") neuroProfile = "Dislexia";
    else if (activeChild.diagnostico === "tod") neuroProfile = "TOD";

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
