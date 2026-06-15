import { GeneratedActivity, Difficulty } from "./types";
import { BNCCEngine } from "./bncc-engine";

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  metrics: {
    cognitiveLoad: number;
    sensoryLoad: number;
    difficultyMatch: number; // 0-1
  };
}

export class PedagogicalValidationEngine {
  private static rejectionLogs: any[] = [];
  private static approvalStats: Record<string, number> = {
    total: 0,
    approved: 0,
    rejected: 0,
  };

  static validate(activity: GeneratedActivity, context: any): ValidationResult {
    const errors: string[] = [];
    const skill = BNCCEngine.getSkillByCode(activity.bnccCode);

    // 1. Validar BNCC
    if (!skill) {
      errors.push(`Habilidade BNCC não encontrada: ${activity.bnccCode}`);
    } else if (context && skill.level !== context.grade) {
      errors.push(
        `Incompatibilidade de nível BNCC: Esperado ${context.grade}, Recebido ${skill.level}`,
      );
    }

    // 2. Validar Faixa Etária
    // Simplificado: Assumindo que o template já lida com isso, mas verificamos redundância
    if (context.age < 3 && activity.difficulty !== "easy") {
      errors.push("Carga cognitiva muito alta para a idade");
    }

    // 3. Validar Carga Sensorial (Baseado em ajustes)
    const sensoryLoad = this.calculateSensoryLoad(activity);
    if (context?.adjustments?.visualComplexity === "low" && sensoryLoad > 0.4) {
      errors.push("Excesso de carga sensorial para perfil sensível");
    }

    // 4. Validar Coerência de Conteúdo
    if (!activity.content || !activity.content.question) {
      errors.push("Conteúdo da atividade está incompleto");
    }

    const isValid = errors.length === 0;

    // Atualizar estatísticas
    this.updateStats(isValid, activity, errors);

    return {
      isValid,
      errors,
      metrics: {
        cognitiveLoad: this.calculateCognitiveLoad(activity),
        sensoryLoad,
        difficultyMatch: this.calculateDifficultyMatch(activity, context.previousPerformance),
      },
    };
  }

  private static calculateSensoryLoad(activity: GeneratedActivity): number {
    let load = 0.2; // Base
    if (activity.content.visualStyle === "rich") load += 0.3;
    if (activity.content.showAnimations) load += 0.2;
    return load;
  }

  private static calculateCognitiveLoad(activity: GeneratedActivity): number {
    const difficultyMap = { easy: 2, medium: 5, hard: 8, expert: 10 };
    return difficultyMap[activity.difficulty] || 5;
  }

  private static calculateDifficultyMatch(
    activity: GeneratedActivity,
    performance: number,
  ): number {
    // Implementar lógica de proximidade entre performance e dificuldade proposta
    return 1.0;
  }

  private static updateStats(isValid: boolean, activity: GeneratedActivity, errors: string[]) {
    this.approvalStats.total++;
    if (isValid) {
      this.approvalStats.approved++;
    } else {
      this.approvalStats.rejected++;
      this.rejectionLogs.push({
        timestamp: Date.now(),
        activityId: activity.id,
        errors,
        bnccCode: activity.bnccCode,
      });
    }
  }

  static getStats() {
    return {
      ...this.approvalStats,
      rejectionRate: (this.approvalStats.rejected / this.approvalStats.total) * 100 || 0,
      logs: this.rejectionLogs.slice(-10), // Últimos 10 erros
    };
  }
}
