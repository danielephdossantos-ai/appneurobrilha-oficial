
import { NeuroAdjustment } from "../neuro-engine/types";
import { GeneratedActivity } from "./types";

export class CognitiveAdaptationEngine {
  static apply(activity: any, adjustments: NeuroAdjustment): any {
    const adapted = { ...activity };
    
    // 1. Visual adaptation
    if (adjustments.visualComplexity === "low") {
      adapted.visualStyle = "minimalist";
      adapted.background = "plain";
      adapted.showAnimations = false;
    } else {
      adapted.visualStyle = "rich";
      adapted.background = "theme-based";
      adapted.showAnimations = adjustments.animationIntensity !== "none";
    }

    // 2. Stimuli reduction
    if (adjustments.stimuliReduction) {
      adapted.maxOptions = Math.min(adapted.maxOptions || 4, 3);
      adapted.hideBackgroundElements = true;
    }

    // 3. Pacing and Audio
    adapted.audioPacing = adjustments.audioAdaptation.pacing;
    adapted.positiveReinforcementFreq = adjustments.positiveReinforcementFrequency;

    return adapted;
  }
}
