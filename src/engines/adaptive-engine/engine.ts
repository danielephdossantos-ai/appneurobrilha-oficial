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

  // New specific parameters
  animationSpeed: number; // velocidade (e.g., 0.5 slow, 1.5 fast)
  stimuliLevel: "none" | "low" | "medium" | "high"; // estímulos
  visualScale: number; // tamanho visual (e.g., 1.2 for 20% larger)
  maxItemsPerScreen: number; // quantidade de itens
  reinforcementIntensity: "subtle" | "standard" | "high"; // reforços
  animationIntensity: "none" | "low" | "standard" | "high"; // animações
  responseTimeLimit: number | null; // tempo de resposta em segundos (null = ilimitado)
  predictabilityLevel: "low" | "medium" | "high"; // nível de previsibilidade
}

export class AdaptiveEngine {
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
          complexityMultiplier: 1.0,
          animationSpeed: 0.8,
          stimuliLevel: "low",
          visualScale: 1.1,
          maxItemsPerScreen: 3,
          reinforcementIntensity: "high",
          animationIntensity: "low",
          responseTimeLimit: null,
          predictabilityLevel: "high",
        };
      case "TDAH":
        return {
          breakFrequency: 8,
          visualComplexity: "low",
          instructionType: "mixed",
          repetitionRate: 1.2,
          positiveReinforcementFrequency: "high",
          autonomyLevel: "collaborative",
          complexityMultiplier: 1.0,
          animationSpeed: 1.2,
          stimuliLevel: "medium",
          visualScale: 1.0,
          maxItemsPerScreen: 2,
          reinforcementIntensity: "high",
          animationIntensity: "low",
          responseTimeLimit: 30,
          predictabilityLevel: "medium",
        };
      case "Dislexia":
        return {
          breakFrequency: 20,
          visualComplexity: "medium",
          instructionType: "audio",
          repetitionRate: 1.3,
          positiveReinforcementFrequency: "standard",
          autonomyLevel: "collaborative",
          complexityMultiplier: 1.0,
          animationSpeed: 1.0,
          stimuliLevel: "medium",
          visualScale: 1.3, // Maior para facilitar leitura
          maxItemsPerScreen: 4,
          reinforcementIntensity: "standard",
          animationIntensity: "standard",
          responseTimeLimit: 60,
          predictabilityLevel: "medium",
        };
      case "TOD":
        return {
          breakFrequency: 12,
          visualComplexity: "medium",
          instructionType: "mixed",
          repetitionRate: 1.0,
          positiveReinforcementFrequency: "high",
          autonomyLevel: "independent",
          complexityMultiplier: 1.0,
          animationSpeed: 1.1,
          stimuliLevel: "medium",
          visualScale: 1.0,
          maxItemsPerScreen: 5,
          reinforcementIntensity: "high",
          animationIntensity: "standard",
          responseTimeLimit: 45,
          predictabilityLevel: "high",
        };
      case "DeficienciaIntelectual":
        return {
          breakFrequency: 10,
          visualComplexity: "low",
          instructionType: "visual",
          repetitionRate: 2.0,
          positiveReinforcementFrequency: "high",
          autonomyLevel: "guided",
          complexityMultiplier: 0.7,
          animationSpeed: 0.7, // Mais devagar
          stimuliLevel: "low",
          visualScale: 1.4,
          maxItemsPerScreen: 2,
          reinforcementIntensity: "high",
          animationIntensity: "low",
          responseTimeLimit: null,
          predictabilityLevel: "high",
        };
      case "AltasHabilidades":
        return {
          breakFrequency: 25,
          visualComplexity: "high",
          instructionType: "text",
          repetitionRate: 0.5,
          positiveReinforcementFrequency: "standard",
          autonomyLevel: "independent",
          complexityMultiplier: 1.5,
          animationSpeed: 1.5, // Mais rápido
          stimuliLevel: "high",
          visualScale: 1.0,
          maxItemsPerScreen: 8,
          reinforcementIntensity: "subtle",
          animationIntensity: "high",
          responseTimeLimit: 15,
          predictabilityLevel: "low",
        };
      default:
        return {
          breakFrequency: 25,
          visualComplexity: "medium",
          instructionType: "mixed",
          repetitionRate: 1.0,
          positiveReinforcementFrequency: "standard",
          autonomyLevel: "independent",
          complexityMultiplier: 1.0,
          animationSpeed: 1.0,
          stimuliLevel: "medium",
          visualScale: 1.0,
          maxItemsPerScreen: 6,
          reinforcementIntensity: "standard",
          animationIntensity: "standard",
          responseTimeLimit: null,
          predictabilityLevel: "medium",
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
      Neurotipico: "Neurotípico",
    };
    return labels[profile];
  }
}
