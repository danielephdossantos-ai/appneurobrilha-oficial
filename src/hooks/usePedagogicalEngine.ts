import { useAppState } from "@/lib/store";
import { AdaptiveEngine } from "@/modules/neuro-engine/engine/adaptive-engine";
import { SensoryEngine } from "@/modules/sensory-system/engine/sensory-engine";
import { useMemo } from "react";
import { NeuroProfile } from "@/modules/neuro-engine/engine/adaptive-engine";
import { Emotion } from "@/modules/emotional-engine/engine/emotional-engine";


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
    else if (activeChild.diagnostico === "deficiencia_intelectual") neuroProfile = "DeficienciaIntelectual";
    else if (activeChild.diagnostico === "altas_habilidades") neuroProfile = "AltasHabilidades";

    // Mocking current performance and emotion for now
    // In a real app, these would come from state or recent activity logs
    const currentEmotion: Emotion = "feliz"; 
    const performanceMetrics = { 
      repeatedErrors: 0,
      consecutiveHits: 5,
      totalErrors: 2,
      totalHits: 15,
      responseTimeHistory: [2000, 1500, 3000],
      lastActionTime: Date.now(),
      sessionStartTime: Date.now() - 300000, // 5 min atrás
      abandoned: false,
      rapidClicksCount: 0,
      longPausesCount: 0
    };

    const adaptive = AdaptiveEngine.orchestrateActivity(
      activeChild.id,
      neuroProfile,
      currentEmotion,
      performanceMetrics,
      activeChild.sensory_mode || "foco"
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
