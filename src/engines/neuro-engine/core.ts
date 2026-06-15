import { NeuroState, NeuroAdjustment, NeuroLog, NeuroStateSchema } from "./types";
import { AdaptiveProfileEngine } from "./adaptive-profile-engine";
import { FatigueEngine } from "./fatigue-engine";
import { AttentionEngine } from "./attention-engine";
import { SensoryRegulationEngine } from "./sensory-regulation-engine";
import { RewardRegulationEngine } from "./reward-regulation-engine";
import { v4 as uuidv4 } from "uuid";

export class NeuroAdaptiveCore {
  private static logs: NeuroLog[] = [];

  static processState(state: NeuroState): { adjustment: NeuroAdjustment; log: NeuroLog } {
    // 1. Validar estado com Zod
    const validatedState = NeuroStateSchema.parse(state);

    // 2. Obter baseline do perfil
    let adjustment = AdaptiveProfileEngine.getBaseline(validatedState.profile);

    // 3. Aplicar modificadores sequenciais (determinísticos)
    adjustment = FatigueEngine.calculateAdjustment(validatedState.fatigue, adjustment);
    adjustment = AttentionEngine.calculateAdjustment(validatedState.attention, adjustment);
    adjustment = SensoryRegulationEngine.calculateAdjustment(validatedState.sensory, adjustment);
    adjustment = RewardRegulationEngine.calculateAdjustment(validatedState.performance, adjustment);

    // 4. Gerar Log
    const log: NeuroLog = {
      id: uuidv4(),
      childId: "session-child", // Deve ser passado via contexto em prod
      timestamp: new Date().toISOString(),
      previousState: validatedState, // Simplificação para o exemplo
      newState: validatedState,
      adjustmentApplied: adjustment,
      trigger: this.determineTrigger(validatedState),
    };

    this.logs.push(log);

    // Limitar logs em memória
    if (this.logs.length > 100) this.logs.shift();

    console.log("[NeuroAdaptiveCore] Adjustment applied:", {
      profile: validatedState.profile,
      adjustment,
      trigger: log.trigger,
    });

    return { adjustment, log };
  }

  private static determineTrigger(state: NeuroState): string {
    if (state.fatigue.needForBreak) return "FATIGUE_BREAK_REQUIRED";
    if (state.attention.focusScore < 0.3) return "LOW_ATTENTION_DETECTED";
    if (state.sensory.visualOverload > 0.8) return "SENSORY_OVERLOAD";
    if (state.performance.accuracyRate < 0.4) return "CRITICAL_PERFORMANCE_DROP";
    return "PERIODIC_UPDATE";
  }

  static getLogs(): NeuroLog[] {
    return [...this.logs];
  }
}
