// PedagogyEngine import removed during Escola Brilha rebuild
import { EmotionalEngine } from '@/engines/regulation-engine/emotional-engine';
import { AdaptiveEngine as LegacyAdaptiveEngine } from "@/engines/adaptive-engine/engine";

export type NeuroProfile = "Neurotipico" | "TEA" | "TDAH" | "Dislexia";

export class AdaptiveEngine extends LegacyAdaptiveEngine {
  static analyze(profile: NeuroProfile, performance: any) {
    return {
       recommendedDifficulty: 1,
       cognitiveLoad: 0.5
    };
  }

  // Adding legacy properties to satisfy TS during migration
  static visualScale = 1;
  static animationSpeed = 1;
  static stimuliLevel = "standard";
  static difficulty = 1;
  static breakFrequency = "normal";
  static instructionType = "visual";
  static maxItemsPerScreen = 4;
  static reinforcementIntensity = "standard";
  static predictabilityLevel = "high";
  static animationIntensity = "standard";
  static visualComplexity = "standard";
  static complexityMultiplier = 1;
  static responseTimeLimit = 30000;
  static positiveReinforcementFrequency = "standard";
}
