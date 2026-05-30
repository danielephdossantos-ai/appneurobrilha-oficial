
import { PedagogicalActivity, PedagogicalActivitySchema } from "./validation/schemas";
import { NeuroAdaptiveCore } from "@/engines/neuro-engine/core";
import { NeuroProfile, NeuroAdjustment } from "@/engines/neuro-engine/types";
import { InfiniteActivityEngine } from "@/engines/infinite-activity-engine";


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
    console.log(`[PedagogicalEngine] Iniciando geração INFINITA para: ${context.childId}`, context);
    
    try {
      // 1. Obter Ajustes Neuroadaptativos
      const { adjustment: adjustments } = NeuroAdaptiveCore.processState({
        profile: context.neuroProfile as NeuroProfile,
        attention: {
          averageAttentionSpan: 60,
          focusScore: 1.0,
          distractionCount: 0,
          impulsivityRate: 0.1,
          hyperfocusDetected: false,
        },
        fatigue: {
          cognitiveLoad: 0.5,
          sessionDuration: 0,
          lastBreakTime: 0,
          needForBreak: false,
          fatigueLevel: 0.1,
        },
        sensory: {
          visualOverload: 0.1,
          auditorySensitivity: 0.1,
          sensoryTolerance: 1.0,
          stimulusReactivity: 0.1,
        },
        performance: {
          averageResponseTime: 5,
          accuracyRate: context.previousPerformance,
          errorFrequency: 0,
          helpRequests: 0,
        },
        timestamp: Date.now(),
      });

      // 2. Chamar Motor Infinito (Offline & Baseado em Regras)
      const infiniteActivity = InfiniteActivityEngine.generate({
        ...context,
        adjustments
      });

      // 3. Mapear para o schema legado (PedagogicalActivity) para manter compatibilidade
      const activityData: PedagogicalActivity = {
        id: infiniteActivity.id,
        category: "Geral", // Pode ser refinado
        habilidadeBNCC: infiniteActivity.bnccCode,
        objetivo: "Atividade gerada estruturalmente",
        idadeMinima: context.age - 1,
        idadeMaxima: context.age + 1,
        dificuldade: infiniteActivity.difficulty,
        pesoCognitivo: 5,
        tipoSensorial: adjustments.visualComplexity === "low" ? "visual" : "mixed",
        recompensa: { ...infiniteActivity.reward, energy: 5 },
        content: infiniteActivity.content,
        fallback: "fallback-default"
      };

      // 4. Validação
      const validatedActivity = PedagogicalActivitySchema.parse(activityData);
      
      this.logPedagogicalAction(context.childId, "infinite_activity_generated", validatedActivity.id);
      
      return validatedActivity;

    } catch (error) {
      console.error("[PedagogicalEngine] Falha na geração infinita:", error);
      return this.getFallbackActivity();
    }
  }

  private static logPedagogicalAction(childId: string, action: string, metadata: any) {
    console.log(`[PEDAGOGICAL_LOG] Child: ${childId} | Action: ${action} | Data:`, metadata);
  }

  private static getFallbackActivity(): PedagogicalActivity {
    return {
      id: "fallback-default",
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

  static gerarAtividade(
    templateId?: string, 
    analysis?: any,
    preferredType?: string
  ): any {
    return this.generateActivity({
        childId: "anonymous",
        age: 6,
        grade: 1,
        neuroProfile: "Tipico",
        previousPerformance: 0.7
    });
  }
}


