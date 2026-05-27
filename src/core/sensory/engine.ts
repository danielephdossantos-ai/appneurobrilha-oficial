
export interface SensoryPreferences {
  brightness: number;
  contrast: number;
  soundVolume: number;
  fontSize: number;
  colorPalette: "standard" | "high-contrast" | "soft" | "dark";
}

export class SensoryEngine {
  static applyPreferences(prefs: SensoryPreferences) {
    // This would typically interact with CSS variables or a theme provider
    console.log("Applying sensory preferences:", prefs);
  }

  static getDefaultPreferences(profile: string): SensoryPreferences {
    switch (profile) {
      case "TEA":
        return { brightness: 0.6, contrast: 1.1, soundVolume: 0.4, fontSize: 18, colorPalette: "soft" };
      case "TDAH":
        return { brightness: 1.0, contrast: 1.3, soundVolume: 0.7, fontSize: 17, colorPalette: "standard" };
      case "Dislexia":
        return { brightness: 1.0, contrast: 1.0, soundVolume: 0.9, fontSize: 20, colorPalette: "high-contrast" };
      case "DeficienciaIntelectual":
        return { brightness: 1.0, contrast: 1.2, soundVolume: 0.6, fontSize: 22, colorPalette: "standard" };
      case "AltasHabilidades":
        return { brightness: 1.0, contrast: 1.0, soundVolume: 0.8, fontSize: 16, colorPalette: "standard" };
      case "TOD":
        return { brightness: 0.9, contrast: 1.0, soundVolume: 0.6, fontSize: 17, colorPalette: "soft" };
      default:
        return { brightness: 1, contrast: 1, soundVolume: 0.8, fontSize: 16, colorPalette: "standard" };
    }
  }
}
