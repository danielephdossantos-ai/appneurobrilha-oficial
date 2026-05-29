import { AdaptiveMotor, AdaptiveAnalysis } from "@/engines/adaptive-engine/motor";

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
  intensity: number;
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
    const reactions: Record<Emotion, { text: string; animation: string }[]> = {
      frustrado: [
        { text: "Tudo bem errar! Vamos tentar de um jeito diferente?", animation: "bounce-gentle" },
        { text: "Respire fundo comigo... pronto, vamos tentar de novo!", animation: "breathe" },
        { text: "Eu também erro às vezes. O segredo é não desistir!", animation: "hug" }
      ],
      orgulhoso: [
        { text: "Incrível! Você está evoluindo muito rápido!", animation: "celebrate" },
        { text: "Uau! Suas estrelas estão brilhando muito!", animation: "jump" },
        { text: "Você é um verdadeiro mestre das letras!", animation: "sparkle" }
      ],
      cansado: [
        { text: "Que tal uma pequena pausa para esticar os braços?", animation: "yawn" },
        { text: "Beber uma aguinha agora seria ótimo, né?", animation: "drink" },
        { text: "Sua bateria está baixando. Vamos descansar um pouquinho?", animation: "rest" }
      ],
      distraido: [
        { text: "Ei, olha aqui! Quase terminamos essa parte.", animation: "wave" },
        { text: "Veja essa cor que legal! Vamos focar aqui?", animation: "point" },
        { text: "Falta só um pouquinho para o próximo prêmio!", animation: "cheer" }
      ],
      focado: [
        { text: "Adoro ver você concentrado assim!", animation: "nod" },
        { text: "Seu cérebro está brilhando muito agora!", animation: "glow" },
        { text: "Que foco maravilhoso! Continue assim!", animation: "steady" }
      ],
      feliz: [
        { text: "Estou tão feliz de aprender com você!", animation: "happy-dance" },
        { text: "Aprender é uma grande festa!", animation: "spin" }
      ],
      calmo: [
        { text: "Estou aqui com você! Vamos continuar?", animation: "idle" },
        { text: "No seu tempo, sem pressa.", animation: "soft-sway" }
      ],
      ansioso: [
        { text: "Calma, amiguinho. Eu te ajudo se precisar.", animation: "reassure" },
        { text: "Vamos fazer devagarzinho, um por um.", animation: "slow-step" }
      ],
      irritado: [
        { text: "Estou aqui para te ouvir. Quer um abraço virtual?", animation: "soothe" },
        { text: "Às vezes as coisas são difíceis, mas eu acredito em você.", animation: "stay-near" }
      ]
    };

    const options = reactions[emotion] || reactions["calmo"];
    return options[Math.floor(Math.random() * options.length)];
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
