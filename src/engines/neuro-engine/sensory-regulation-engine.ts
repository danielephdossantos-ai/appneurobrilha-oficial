import { SensoryMetrics, NeuroAdjustment } from "./types";

export class SensoryRegulationEngine {
  static calculateAdjustment(
    metrics: SensoryMetrics,
    currentAdjustment: NeuroAdjustment,
  ): NeuroAdjustment {
    const adjusted = { ...currentAdjustment };

    // Sobrecarga visual detectada
    if (metrics.visualOverload > 0.6) {
      adjusted.visualComplexity = "low";
      adjusted.stimuliReduction = true;
      adjusted.animationIntensity = "none";
    }

    // Sensibilidade auditiva alta
    if (metrics.auditorySensitivity > 0.7) {
      adjusted.audioAdaptation.volume = Math.min(adjusted.audioAdaptation.volume, 0.3);
    }

    // Baixa tolerância sensorial requer simplificação imediata
    if (metrics.sensoryTolerance < 0.4) {
      adjusted.interfaceSimplification = true;
      adjusted.visualComplexity = "low";
      adjusted.maxInformationDensity = 1;
    }

    return adjusted;
  }
}
