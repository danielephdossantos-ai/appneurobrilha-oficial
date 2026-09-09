export type SensoryMode =
  | "calmante"
  | "foco"
  | "hiperfoco"
  | "baixa-estimulacao"
  | "recompensa-intensa";

export interface SensoryPreferences {
  brightness: number;
  contrast: number;
  soundVolume: number;
  fontSize: number;
  colorPalette: "standard" | "high-contrast" | "soft" | "dark" | "pastel";
  animationIntensity: "none" | "low" | "standard" | "high";
  hapticFeedback: boolean;
}

export interface SensoryModeConfig {
  speedMultiplier: number; // velocidade
  stimuliLevel: "none" | "low" | "medium" | "high"; // estímulos
  visualScale: number; // tamanho visual
  itemDensity: "low" | "medium" | "high"; // quantidade de itens
  reinforcementType: "subtle" | "standard" | "intense"; // reforços
  animationStyle: "minimal" | "smooth" | "playful" | "energetic"; // animações
  responseTimeAllowance: "relaxed" | "standard" | "strict" | "none"; // tempo de resposta
  predictability: "very-high" | "high" | "medium" | "low"; // nível de previsibilidade
}

export class SensoryEngine {
  static getModeConfig(mode: SensoryMode): SensoryModeConfig {
    switch (mode) {
      case "calmante":
        return {
          speedMultiplier: 0.7,
          stimuliLevel: "low",
          visualScale: 1.2,
          itemDensity: "low",
          reinforcementType: "subtle",
          animationStyle: "smooth",
          responseTimeAllowance: "relaxed",
          predictability: "high",
        };
      case "foco":
        return {
          speedMultiplier: 1.0,
          stimuliLevel: "none",
          visualScale: 1.0,
          itemDensity: "medium",
          reinforcementType: "standard",
          animationStyle: "minimal",
          responseTimeAllowance: "standard",
          predictability: "high",
        };
      case "hiperfoco":
        return {
          speedMultiplier: 1.4,
          stimuliLevel: "high",
          visualScale: 1.0,
          itemDensity: "high",
          reinforcementType: "intense",
          animationStyle: "energetic",
          responseTimeAllowance: "strict",
          predictability: "low",
        };
      case "baixa-estimulacao":
        return {
          speedMultiplier: 0.6,
          stimuliLevel: "none",
          visualScale: 1.3,
          itemDensity: "low",
          reinforcementType: "subtle",
          animationStyle: "minimal",
          responseTimeAllowance: "none",
          predictability: "very-high",
        };
      case "recompensa-intensa":
        return {
          speedMultiplier: 1.0,
          stimuliLevel: "medium",
          visualScale: 1.0,
          itemDensity: "medium",
          reinforcementType: "intense",
          animationStyle: "playful",
          responseTimeAllowance: "standard",
          predictability: "high",
        };
    }
  }

  static getModeLabel(mode: SensoryMode): string {
    const labels: Record<SensoryMode, string> = {
      calmante: "Modo Calmante",
      foco: "Modo Foco",
      hiperfoco: "Modo Hiperfoco",
      "baixa-estimulacao": "Baixa Estimulação",
      "recompensa-intensa": "Recompensa Intensa",
    };
    return labels[mode];
  }

  static getDefaultPreferences(profile: string): SensoryPreferences {
    switch (profile) {
      case "TEA":
        return {
          brightness: 0.6,
          contrast: 1.1,
          soundVolume: 0.4,
          fontSize: 18,
          colorPalette: "soft",
          animationIntensity: "low",
          hapticFeedback: false,
        };
      case "TDAH":
        return {
          brightness: 1.0,
          contrast: 1.3,
          soundVolume: 0.7,
          fontSize: 17,
          colorPalette: "standard",
          animationIntensity: "standard",
          hapticFeedback: true,
        };
      case "Dislexia":
        return {
          brightness: 1.0,
          contrast: 1.0,
          soundVolume: 0.9,
          fontSize: 20,
          colorPalette: "high-contrast",
          animationIntensity: "standard",
          hapticFeedback: false,
        };
      case "DeficienciaIntelectual":
        return {
          brightness: 1.0,
          contrast: 1.2,
          soundVolume: 0.6,
          fontSize: 22,
          colorPalette: "standard",
          animationIntensity: "low",
          hapticFeedback: false,
        };
      case "AltasHabilidades":
        return {
          brightness: 1.0,
          contrast: 1.0,
          soundVolume: 0.8,
          fontSize: 16,
          colorPalette: "standard",
          animationIntensity: "high",
          hapticFeedback: true,
        };
      case "TOD":
        return {
          brightness: 0.9,
          contrast: 1.0,
          soundVolume: 0.6,
          fontSize: 17,
          colorPalette: "soft",
          animationIntensity: "standard",
          hapticFeedback: true,
        };
      default:
        return {
          brightness: 1,
          contrast: 1,
          soundVolume: 0.8,
          fontSize: 16,
          colorPalette: "standard",
          animationIntensity: "standard",
          hapticFeedback: true,
        };
    }
  }
}
