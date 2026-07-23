// Proxy para o NeuroAdaptiveCore real. Este arquivo existia como stub que
// devolvia valores fixos e podia gerar dados falsos em relatórios clínicos.
// Agora delega tudo ao motor real e mantém a assinatura estática só por
// compatibilidade com callers antigos — sem inventar nada.
import { NeuroAdaptiveCore } from "@/engines/neuro-engine/core";
import type { NeuroAdjustment, NeuroProfile } from "@/engines/neuro-engine/types";

export type { NeuroProfile };

export class AdaptiveEngine {
  /** Retorna o ajuste real do NeuroAdaptiveCore para um estado sintético. */
  static analyze(profile: NeuroProfile, _performance: unknown): NeuroAdjustment {
    const { adjustment } = NeuroAdaptiveCore.processState({
      profile,
      attention: {
        averageAttentionSpan: 60,
        focusScore: 1,
        distractionCount: 0,
        impulsivityRate: 0.1,
        hyperfocusDetected: false,
      },
      fatigue: {
        cognitiveLoad: 0.1,
        sessionDuration: 0,
        lastBreakTime: 0,
        needForBreak: false,
        fatigueLevel: 0.1,
      },
      sensory: {
        visualOverload: 0.1,
        auditorySensitivity: 0.1,
        sensoryTolerance: 1,
        stimulusReactivity: 0.1,
      },
      performance: {
        averageResponseTime: 5,
        accuracyRate: 1,
        errorFrequency: 0,
        helpRequests: 0,
      },
      timestamp: Date.now(),
    });
    return adjustment;
  }
}
