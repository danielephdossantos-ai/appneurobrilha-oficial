
export type NeuroProfile = 
  | "TEA" 
  | "TDAH" 
  | "Dislexia" 
  | "TOD" 
  | "DeficienciaIntelectual" 
  | "AltasHabilidades" 
  | "Neurotipico";

export interface CognitiveLoad {
  attentionSpan: number; // minutes
  workingMemory: number; // items
  processingSpeed: number; // 0 to 1
}

export interface NeuroAdjustment {
  breakFrequency: number;
  visualComplexity: "low" | "medium" | "high";
  instructionType: "visual" | "text" | "audio" | "mixed";
  repetitionRate: number; // 1.0 is standard
  positiveReinforcementFrequency: "high" | "standard";
  autonomyLevel: "guided" | "collaborative" | "independent";
  complexityMultiplier: number; // 1.0 is standard
}

export class NeuroEngine {
  static getAdjustments(profile: NeuroProfile): NeuroAdjustment {
    switch (profile) {
      case "TEA":
        return { 
          breakFrequency: 15, 
          visualComplexity: "low", 
          instructionType: "visual",
          repetitionRate: 1.5,
          positiveReinforcementFrequency: "high",
          autonomyLevel: "guided",
          complexityMultiplier: 1.0
        };
      case "TDAH":
        return { 
          breakFrequency: 8, 
          visualComplexity: "low", 
          instructionType: "mixed",
          repetitionRate: 1.2,
          positiveReinforcementFrequency: "high",
          autonomyLevel: "collaborative",
          complexityMultiplier: 1.0
        };
      case "Dislexia":
        return { 
          breakFrequency: 20, 
          visualComplexity: "medium", 
          instructionType: "audio",
          repetitionRate: 1.3,
          positiveReinforcementFrequency: "standard",
          autonomyLevel: "collaborative",
          complexityMultiplier: 1.0
        };
      case "TOD":
        return { 
          breakFrequency: 12, 
          visualComplexity: "medium", 
          instructionType: "mixed",
          repetitionRate: 1.0,
          positiveReinforcementFrequency: "high",
          autonomyLevel: "independent", // Give them choices
          complexityMultiplier: 1.0
        };
      case "DeficienciaIntelectual":
        return { 
          breakFrequency: 10, 
          visualComplexity: "low", 
          instructionType: "visual",
          repetitionRate: 2.0,
          positiveReinforcementFrequency: "high",
          autonomyLevel: "guided",
          complexityMultiplier: 0.7
        };
      case "AltasHabilidades":
        return { 
          breakFrequency: 25, 
          visualComplexity: "high", 
          instructionType: "text",
          repetitionRate: 0.5,
          positiveReinforcementFrequency: "standard",
          autonomyLevel: "independent",
          complexityMultiplier: 1.5
        };
      default:
        return { 
          breakFrequency: 25, 
          visualComplexity: "medium", 
          instructionType: "mixed",
          repetitionRate: 1.0,
          positiveReinforcementFrequency: "standard",
          autonomyLevel: "independent",
          complexityMultiplier: 1.0
        };
    }
  }

  static getProfileLabel(profile: NeuroProfile): string {
    const labels: Record<NeuroProfile, string> = {
      TEA: "TEA (Autismo)",
      TDAH: "TDAH",
      Dislexia: "Dislexia",
      TOD: "TOD",
      DeficienciaIntelectual: "Deficiência Intelectual",
      AltasHabilidades: "Altas Habilidades / Superdotação",
      Neurotipico: "Neurotípico"
    };
    return labels[profile];
  }
}
