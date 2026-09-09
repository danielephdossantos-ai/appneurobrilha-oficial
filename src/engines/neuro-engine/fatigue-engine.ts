import { FatigueMetrics, NeuroAdjustment } from "./types";

export class FatigueEngine {
  static calculateAdjustment(
    metrics: FatigueMetrics,
    currentAdjustment: NeuroAdjustment,
  ): NeuroAdjustment {
    const adjusted = { ...currentAdjustment };

    // Se o nível de fadiga for alto (> 0.7), reduzir drasticamente complexidade
    if (metrics.fatigueLevel > 0.7) {
      adjusted.visualComplexity = "low";
      adjusted.interfaceSimplification = true;
      adjusted.difficultyScale *= 0.8;
      adjusted.stimuliReduction = true;
    }

    // Se a carga cognitiva estiver muito alta (> 0.8)
    if (metrics.cognitiveLoad > 0.8) {
      adjusted.difficultyScale *= 0.9;
      adjusted.maxInformationDensity = Math.max(1, adjusted.maxInformationDensity - 1);
    }

    // Se a sessão durar mais de 20 minutos (1200s) sem pausa
    if (metrics.sessionDuration > 1200 && metrics.lastBreakTime > 1200) {
      adjusted.suggestBreak = true;
    }

    // Se o sistema marcou explicitamente necessidade de pausa
    if (metrics.needForBreak) {
      adjusted.suggestBreak = true;
    }

    return adjusted;
  }
}
