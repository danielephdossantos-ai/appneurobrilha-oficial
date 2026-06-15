import { ResponseMetrics, NeuroAdjustment } from "./types";

export class RewardRegulationEngine {
  static calculateAdjustment(
    metrics: ResponseMetrics,
    currentAdjustment: NeuroAdjustment,
  ): NeuroAdjustment {
    const adjusted = { ...currentAdjustment };

    // Se a taxa de acerto for baixa (< 0.5), aumentar reforço positivo para evitar frustração
    if (metrics.accuracyRate < 0.5) {
      adjusted.positiveReinforcementFrequency = 1.0;
      // E reduzir dificuldade se os erros forem frequentes
      if (metrics.errorFrequency > 3) {
        adjusted.difficultyScale *= 0.8;
      }
    }

    // Se o tempo de resposta for muito alto, pode indicar fadiga ou dificuldade inadequada
    if (metrics.averageResponseTime > 30) {
      // 30 segundos
      adjusted.difficultyScale *= 0.9;
      adjusted.interfaceSimplification = true;
    }

    // Se o usuário pede muita ajuda
    if (metrics.helpRequests > 2) {
      adjusted.difficultyScale *= 0.7;
      adjusted.positiveReinforcementFrequency = 1.0;
    }

    return adjusted;
  }
}
