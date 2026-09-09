export interface AdaptiveUIState {
  simplifiedUI: boolean;
  stimuliOpacity: string;
  animationSpeedMultiplier: number;
  fontSize: number;
  maxItemsPerScreen: number;
  visualComplexity: string;
  audioPacing: string;
}

export function buildAdaptiveUIState(
  adjustment: {
    visualComplexity?: string;
    stimuliReduction?: boolean;
    interfaceSimplification?: boolean;
    difficultyScale?: number;
    audioAdaptation?: { volume?: number; pacing?: string };
    animationIntensity?: string;
    maxInformationDensity?: number;
    [key: string]: unknown;
  },
  profile: string,
): AdaptiveUIState {
  const simplifiedUI = Boolean(adjustment.interfaceSimplification || adjustment.stimuliReduction);
  const stimuliOpacity = adjustment.stimuliReduction ? "0.3" : "0.7";
  const normalizedProfile = profile?.toUpperCase() ?? "TIPICO";

  const animationSpeedMultiplier =
    normalizedProfile === "TDAH"
      ? 1.25
      : adjustment.animationIntensity === "none"
        ? 0.7
        : adjustment.animationIntensity === "low"
          ? 0.9
          : 1.2;

  const fontSize =
    normalizedProfile === "TEA"
      ? 16 * 1.1
      : 16 * (adjustment.difficultyScale ?? 1);

  const maxItemsPerScreen =
    normalizedProfile === "TEA"
      ? Math.min(adjustment.maxInformationDensity ?? 4, 3)
      : normalizedProfile === "TDAH"
        ? Math.min(adjustment.maxInformationDensity ?? 4, 2)
        : adjustment.maxInformationDensity ?? 4;

  const visualComplexity = adjustment.visualComplexity ?? "medium";
  const audioPacing = adjustment.audioAdaptation?.pacing ?? "normal";

  return {
    simplifiedUI,
    stimuliOpacity,
    animationSpeedMultiplier,
    fontSize,
    maxItemsPerScreen,
    visualComplexity,
    audioPacing,
  };
}

export function getAdaptiveSummary(
  adjustment: {
    visualComplexity?: string;
    stimuliReduction?: boolean;
    interfaceSimplification?: boolean;
    difficultyScale?: number;
    audioAdaptation?: { volume?: number; pacing?: string };
    animationIntensity?: string;
    maxInformationDensity?: number;
    [key: string]: unknown;
  },
  profile: string,
) {
  const ui = buildAdaptiveUIState(adjustment, profile);

  return {
    title: `Modo adaptativo ${profile}`,
    description: ui.simplifiedUI
      ? `Interface simplificada com redução de estímulos e ritmo ${ui.audioPacing}.`
      : `Interface mais aberta com ritmo ${ui.audioPacing} para apoiar autonomia.`,
    badges: [profile, ui.visualComplexity, ui.audioPacing],
  };
}
