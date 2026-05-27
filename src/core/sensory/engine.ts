
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
    if (profile === "autismo") {
      return { brightness: 0.7, contrast: 1.2, soundVolume: 0.5, fontSize: 18, colorPalette: "soft" };
    }
    return { brightness: 1, contrast: 1, soundVolume: 0.8, fontSize: 16, colorPalette: "standard" };
  }
}
