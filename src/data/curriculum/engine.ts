import { Skill, MasteryNode, DomainStatus } from "../skills/types";
import { AdaptiveAnalysis } from "@/engines/adaptive-engine/motor";

export interface CurriculumNode extends Skill {
  subSkills: string[]; // IDs of micro-skills
  parentSkills: string[]; // IDs of macro-skills
}

export class PedagogicalEngine {
  static calculateMastery(
    currentMastery: MasteryNode,
    analysis: AdaptiveAnalysis,
    score: number,
    repeatedErrors: number = 0
  ): MasteryNode {
    let newProgress = currentMastery.progress;
    let newStatus = currentMastery.status;

    // Lógica de domínio adaptativo
    if (score > 0.8 && analysis.performanceLevel > 0.7) {
      newProgress += 0.2;
    } else if (analysis.frustration > 0.8 || repeatedErrors > 3) {
      newStatus = "revisao_necessaria";
      newProgress -= 0.1;
    }

    if (newProgress >= 1.0) {
      newStatus = "dominado";
      newProgress = 1.0;
    } else if (newProgress > 0.1 && newStatus !== "revisao_necessaria") {
      newStatus = "em_progresso";
    }

    return {
      ...currentMastery,
      progress: Math.max(0, newProgress),
      status: newStatus,
      lastAttempt: new Date()
    };
  }

  static getNextSkills(
    allSkills: Skill[],
    mastery: Record<string, MasteryNode>,
    currentGrade: string
  ): Skill[] {
    return allSkills.filter(skill => {
      // Mesma série
      if (skill.grade !== currentGrade) return false;
      
      // Não dominada
      const skillMastery = mastery[skill.id];
      if (skillMastery?.status === "dominado") return false;

      // Pré-requisitos atendidos
      return skill.prerequisites.every(preId => 
        mastery[preId]?.status === "dominado"
      );
    });
  }

  static getRecoveryPath(
    skill: Skill,
    analysis: AdaptiveAnalysis
  ): { strategy: string; focus: string } {
    if (analysis.frustration > 0.6) {
      return {
        strategy: "Fragmentação de tarefa",
        focus: "Redução de carga cognitiva e reforço positivo intenso"
      };
    }
    if (analysis.fatigue > 0.7) {
      return {
        strategy: "Pausa lúdica",
        focus: "Recuperação sensorial antes de retomar"
      };
    }
    return {
      strategy: "Reforço paralelo",
      focus: "Abordagem multi-sensorial da mesma habilidade"
    };
  }
}
