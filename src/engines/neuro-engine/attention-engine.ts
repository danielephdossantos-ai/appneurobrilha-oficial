
import { AttentionMetrics, NeuroAdjustment } from "./types";

export class AttentionEngine {
  static calculateAdjustment(metrics: AttentionMetrics, currentAdjustment: NeuroAdjustment): NeuroAdjustment {
    const adjusted = { ...currentAdjustment };

    // Se o score de foco estiver baixo (< 0.4), simplificar interface para remover distrações
    if (metrics.focusScore < 0.4) {
      adjusted.interfaceSimplification = true;
      adjusted.stimuliReduction = true;
      adjusted.animationIntensity = "none";
      adjusted.maxInformationDensity = Math.max(1, adjusted.maxInformationDensity - 2);
    }

    // Se detectado hiperfoco, manter o fluxo mas monitorar fadiga (feito no fatigue-engine)
    if (metrics.hyperfocusDetected) {
      adjusted.positiveReinforcementFrequency = Math.max(0.3, adjusted.positiveReinforcementFrequency - 0.2);
      // No hiperfoco, reforços excessivos podem ser uma distração
    }

    // Alta impulsividade requer mais reforço positivo e instruções mais lentas
    if (metrics.impulsivityRate > 0.6) {
      adjusted.positiveReinforcementFrequency = 1.0;
      adjusted.audioAdaptation.pacing = "slow";
    }

    return adjusted;
  }
}
