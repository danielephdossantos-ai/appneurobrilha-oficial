
import { PedagogyEngine } from "../pedagogy/engine";
import { NeuroEngine, NeuroProfile, NeuroAdjustment } from "../neuro/engine";
import { EmotionalEngine, Emotion } from "../emotional/engine";
import { SensoryEngine, SensoryMode } from "../sensory/engine";

export class AdaptiveEngine {
  static orchestrateActivity(
    studentId: string,
    profile: NeuroProfile,
    currentEmotion: Emotion,
    performance: any,
    sensoryMode: SensoryMode = "foco"
  ) {
    const neuroAdj = NeuroEngine.getAdjustments(profile);
    const sensoryAdj = SensoryEngine.getModeConfig(sensoryMode);
    const activityType = EmotionalEngine.getActivitySuggestion(currentEmotion);

    
    // Auto-reforço pedagógico
    let difficultyMultiplier = neuroAdj.complexityMultiplier;
    if (performance.successRate < 0.6) {
      difficultyMultiplier *= 0.8; // Facilita
    } else if (performance.successRate > 0.9) {
      difficultyMultiplier *= 1.2; // Desafia
    }

    return {
      ...neuroAdj,
      ...sensoryAdj,
      difficulty: difficultyMultiplier,
      suggestedPath: activityType,
      // Overwrite neuro adjustments with sensory mode specifics if they overlap
      animationIntensity: sensoryAdj.stimuliLevel === "none" ? "none" : neuroAdj.animationIntensity,
      animationSpeed: neuroAdj.animationSpeed * sensoryAdj.speedMultiplier,
      visualScale: neuroAdj.visualScale * sensoryAdj.visualScale,
      instructionStyle: neuroAdj.instructionType
    };


  }
}
