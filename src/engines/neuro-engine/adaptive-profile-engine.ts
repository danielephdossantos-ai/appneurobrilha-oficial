import { NeuroProfile, NeuroAdjustment } from "./types";

export class AdaptiveProfileEngine {
  static getBaseline(profile: NeuroProfile): NeuroAdjustment {
    switch (profile) {
      case "TEA":
        return {
          visualComplexity: "low",
          stimuliReduction: true,
          interfaceSimplification: true,
          difficultyScale: 0.8,
          positiveReinforcementFrequency: 0.9,
          suggestBreak: false,
          audioAdaptation: { volume: 0.5, pacing: "slow" },
          animationIntensity: "none",
          maxInformationDensity: 3,
        };
      case "TDAH":
        return {
          visualComplexity: "low",
          stimuliReduction: true,
          interfaceSimplification: true,
          difficultyScale: 0.9,
          positiveReinforcementFrequency: 1.0,
          suggestBreak: false,
          audioAdaptation: { volume: 0.7, pacing: "normal" },
          animationIntensity: "low",
          maxInformationDensity: 2,
        };
      case "Dislexia":
        return {
          visualComplexity: "medium",
          stimuliReduction: false,
          interfaceSimplification: true,
          difficultyScale: 1.0,
          positiveReinforcementFrequency: 0.7,
          suggestBreak: false,
          audioAdaptation: { volume: 0.8, pacing: "slow" },
          animationIntensity: "standard",
          maxInformationDensity: 4,
        };
      case "DeficienciaIntelectual":
        return {
          visualComplexity: "low",
          stimuliReduction: true,
          interfaceSimplification: true,
          difficultyScale: 0.5,
          positiveReinforcementFrequency: 1.0,
          suggestBreak: false,
          audioAdaptation: { volume: 0.6, pacing: "slow" },
          animationIntensity: "low",
          maxInformationDensity: 2,
        };
      case "AtrasoAprendizagem":
        return {
          visualComplexity: "medium",
          stimuliReduction: false,
          interfaceSimplification: false,
          difficultyScale: 0.7,
          positiveReinforcementFrequency: 0.8,
          suggestBreak: false,
          audioAdaptation: { volume: 0.8, pacing: "normal" },
          animationIntensity: "standard",
          maxInformationDensity: 5,
        };
      case "Tipico":
      default:
        return {
          visualComplexity: "medium",
          stimuliReduction: false,
          interfaceSimplification: false,
          difficultyScale: 1.0,
          positiveReinforcementFrequency: 0.5,
          suggestBreak: false,
          audioAdaptation: { volume: 0.9, pacing: "normal" },
          animationIntensity: "standard",
          maxInformationDensity: 7,
        };
    }
  }
}
