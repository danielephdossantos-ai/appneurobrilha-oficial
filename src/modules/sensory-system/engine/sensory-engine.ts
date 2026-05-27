export type SensoryMode = "visual" | "auditivo" | "motor" | "combinado" | "foco" | "calmante" | "hiperfoco" | "baixa-estimulacao" | "recompensa-intensa";

export class SensoryEngine {
  static adapt(profile: any) {
    return {
      mode: "visual" as SensoryMode,
      brightness: 1,
      contrast: 1
    };
  }

  static soundVolume = 0.5;
  static brightness = 1;
  static fontSize = 16;
  static colorPalette = "standard";
}

