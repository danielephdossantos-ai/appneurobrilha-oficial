
import { PedagogyEngine } from "../pedagogy/engine";
import { NeuroEngine, NeuroProfile, NeuroAdjustment } from "../neuro/engine";
import { EmotionalEngine, Emotion } from "../emotional/engine";
import { SensoryEngine } from "../sensory/engine";

export class AdaptiveEngine {
  static orchestrateActivity(
    studentId: string,
    profile: NeuroProfile,
    currentEmotion: Emotion,
    performance: any
  ) {
    const neuroAdj = NeuroEngine.getAdjustments(profile);
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
      difficulty: difficultyMultiplier,
      suggestedPath: activityType,
      // Alias for backward compatibility if needed, but better to use the interface names
      instructionStyle: neuroAdj.instructionType 
    };
  }
}
