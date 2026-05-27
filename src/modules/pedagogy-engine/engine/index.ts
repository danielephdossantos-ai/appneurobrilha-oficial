import { ChildProfile } from "@/modules/child-profile/types";
import { ActivityTemplate } from "../types";

export class PedagogyEngine {
  generateActivity(profile: ChildProfile): ActivityTemplate {
    // Logic migrated from old core/pedagogy/engine.ts
    return {
      id: Math.random().toString(),
      type: 'multiple-choice',
      title: 'Atividade Adaptativa',
      description: 'Gerada automaticamente via PedagogyEngine modular',
      difficulty: profile.niveis.geral,
      cognitiveLoad: 0.5,
      sensoryProfile: {
        visualStimulus: profile.diagnostico === 'tea' ? 'low' : 'medium',
        audioRequirement: Boolean(profile.flags.preferAudio),
        motorComplexity: 'low'
      }
    };
  }
}

export const pedagogyEngine = new PedagogyEngine();
