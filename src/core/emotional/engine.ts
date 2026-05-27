
import { AdaptiveAnalysis } from "../adaptive/motor";

export type Emotion = 
  | "feliz" 
  | "calmo" 
  | "ansioso" 
  | "irritado" 
  | "cansado" 
  | "orgulhoso" 
  | "frustrado" 
  | "distraido" 
  | "focado";

export interface EmotionalState {
  current: Emotion;
  intensity: number; // 0 to 1
  history: { date: Date; emotion: Emotion; intensity: number }[];
}

export class EmotionalEngine {
  static detect(analysis: AdaptiveAnalysis): EmotionalState {
    let current: Emotion = "calmo";
    let intensity = 0.5;

    if (analysis.frustration > 0.6) {
      current = "frustrado";
      intensity = analysis.frustration;
    } else if (analysis.fatigue > 0.7) {
      current = "cansado";
      intensity = analysis.fatigue;
    } else if (analysis.performanceLevel > 0.8) {
      current = "orgulhoso";
      intensity = analysis.performanceLevel;
    } else if (analysis.distraction > 0.6) {
      current = "distraido";
      intensity = analysis.distraction;
    } else if (analysis.focusLevel > 0.8) {
      current = "focado";
      intensity = analysis.focusLevel;
    } else if (analysis.impulsivity > 0.7) {
      current = "ansioso";
      intensity = analysis.impulsivity;
    }

    return {
      current,
      intensity,
      history: [] 
    };
  }

  static getMascotReaction(emotion: Emotion): { text: string; animation: string } {
    switch (emotion) {
      case "frustrado":
        return { 
          text: "Tudo bem errar! Vamos tentar de um jeito diferente?", 
          animation: "bounce-gentle" 
        };
      case "orgulhoso":
        return { 
          text: "Incrível! Você está evoluindo muito rápido!", 
          animation: "celebrate" 
        };
      case "cansado":
        return { 
          text: "Que tal uma pequena pausa para esticar os braços?", 
          animation: "yawn" 
        };
      case "distraido":
        return { 
          text: "Ei, olha aqui! Quase terminamos essa parte.", 
          animation: "wave" 
        };
      case "focado":
        return { 
          text: "Adoro ver você concentrado assim!", 
          animation: "nod" 
        };
      default:
        return { 
          text: "Estou aqui com você! Vamos continuar?", 
          animation: "idle" 
        };
    }
  }

  static getActivitySuggestion(emotion: Emotion): string {
    switch (emotion) {
      case "irritado":
      case "frustrado":
        return "Pausa para respiração guiada ou atividade de baixa pressão";
      case "ansioso":
        return "Atividade rítmica calma com feedback imediato";
      case "cansado":
        return "Pausa curta ou atividade lúdica leve";
      case "orgulhoso":
        return "Atividade de desafio (boss level)";
      case "distraido":
        return "Mini-game rápido para foco";
      default:
        return "Continuar jornada de aprendizado padrão";
    }
  }
}
