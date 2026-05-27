import { PedagogyEngine } from '../../pedagogy-engine/engine/pedagogy-core';
import { EmotionalEngine } from '../../emotional-engine/engine/emotional-engine';

export type NeuroProfile = "Neurotipico" | "TEA" | "TDAH" | "Dislexia";

export class AdaptiveEngine {
  static analyze(profile: NeuroProfile, performance: any) {
    return {
       recommendedDifficulty: 1,
       cognitiveLoad: 0.5
    };
  }
}
