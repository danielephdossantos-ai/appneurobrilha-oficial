
import { PedagogicalActivity, PedagogicalActivitySchema } from "./validation/schemas";
import { BNCC_SKILLS } from "./bncc";
import { NeuroAdaptiveCore } from "@/engines/neuro-engine/core";
import { NeuroProfile, NeuroAdjustment } from "@/engines/neuro-engine/types";

import { PEDAGOGICAL_TEMPLATES } from "./templates/activity_templates";

export interface PedagogicalContext {
  childId: string;
  age: number;
  grade: number;
  neuroProfile: string;
  previousPerformance: number;
}

export class ActivityEngine {
  private static usedContentIds: Set<string> = new Set();


  static generateActivity(context: PedagogicalContext): PedagogicalActivity {
    console.log(`[PedagogicalEngine] Iniciando geração para: ${context.childId}`, context);
    
    try {
      // 1. Filtrar Habilidades BNCC por Série
      const suitableSkills = BNCC_SKILLS.filter(s => s.level === context.grade);
      if (suitableSkills.length === 0) throw new Error("Nenhuma habilidade BNCC encontrada para esta série.");

      // 2. Selecionar Habilidade
      const skill = suitableSkills[0];

      // 3. Ajustar Perfil Neuroadaptativo
      const adjustments = AdaptiveEngine.getAdjustments(context.neuroProfile as any);

      // 4. Buscar Template Compatível
      const template = this.findTemplate(skill.code, context.age);

      // 5. Construir Atividade Final
      const activityData: PedagogicalActivity = {
        id: `act_${Date.now()}_${context.childId}`,
        category: skill.field,
        habilidadeBNCC: skill.code,
        objetivo: skill.description,
        idadeMinima: context.age - 1,
        idadeMaxima: context.age + 1,
        dificuldade: this.calculateDifficulty(context.previousPerformance, adjustments),
        pesoCognitivo: 5,
        tipoSensorial: adjustments.instructionType === "visual" ? "visual" : "mixed",
        recompensa: {
          stars: 10,
          coins: 20,
          energy: 5
        },
        content: {
          question: `Vamos praticar ${skill.description}?`,
          options: [
            { id: "1", content: "Opção A", type: "text", isCorrect: true },
            { id: "2", content: "Opção B", type: "text", isCorrect: false }
          ]
        },
        fallback: this.FALLBACK_ID
      };

      // 6. Validação Forte
      const validatedActivity = PedagogicalActivitySchema.parse(activityData);
      
      this.logPedagogicalAction(context.childId, "activity_generated", validatedActivity.id);
      
      return validatedActivity;

    } catch (error) {
      console.error("[PedagogicalEngine] Falha na geração:", error);
      return this.getFallbackActivity();
    }
  }

  private static findTemplate(bnccCode: string, age: number) {
     return Object.values(PEDAGOGICAL_TEMPLATES).find(t => 
       t.habilidadeBNCC === bnccCode && age >= (t.idadeMinima || 0)
     ) || PEDAGOGICAL_TEMPLATES["MAT_CONTAGEM_B"];
  }

  private static calculateDifficulty(performance: number, adjustments: NeuroAdjustment): "easy" | "medium" | "hard" | "expert" {
    if (performance > 0.8) return "medium";
    return "easy";
  }

  private static logPedagogicalAction(childId: string, action: string, metadata: any) {
    console.log(`[PEDAGOGICAL_LOG] Child: ${childId} | Action: ${action} | Data:`, metadata);
  }

  private static getFallbackActivity(): PedagogicalActivity {
    return {
      id: this.FALLBACK_ID,
      category: "Geral",
      habilidadeBNCC: "FALLBACK",
      objetivo: "Manter o engajamento",
      idadeMinima: 0,
      idadeMaxima: 99,
      dificuldade: "easy",
      pesoCognitivo: 1,
      tipoSensorial: "visual",
      recompensa: { stars: 1, coins: 1, energy: 1 },
      content: {
        question: "Vamos fazer algo bem simples?"
      }
    };
  }
  private static readonly FALLBACK_ID = "fallback-default";

  static gerarAtividade(
    templateId?: string, 
    analysis?: any,
    preferredType?: string
  ): any {
    // Compatibilidade temporária para não quebrar o dashboard
    return this.generateActivity({
        childId: "anonymous",
        age: 6,
        grade: 1,
        neuroProfile: "Neurotipico",
        previousPerformance: 1
    });
  }
}

