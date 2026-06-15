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
      history: [],
    };
  }

  static getMascotReaction(emotion: Emotion): { text: string; emotion: string } {
    const reactions: Record<Emotion, { text: string; emotion: string }[]> = {
      frustrado: [
        { text: "Tudo bem errar! Vamos tentar de um jeito diferente?", emotion: "thinking" },
        { text: "Respire fundo comigo... pronto, vamos tentar de novo!", emotion: "thinking" },
        { text: "Eu também erro às vezes. O segredo é não desistir!", emotion: "thinking" },
      ],
      orgulhoso: [
        { text: "Incrível! Você está evoluindo muito rápido!", emotion: "excited" },
        { text: "Uau! Suas estrelas estão brilhando muito!", emotion: "excited" },
        { text: "Você é um verdadeiro mestre das letras!", emotion: "excited" },
      ],
      cansado: [
        { text: "Que tal uma pequena pausa para esticar os braços?", emotion: "sleeping" },
        { text: "Beber uma aguinha agora seria ótimo, né?", emotion: "sleeping" },
        { text: "Sua bateria está baixando. Vamos descansar um pouquinho?", emotion: "sleeping" },
      ],
      distraido: [
        { text: "Ei, olha aqui! Quase terminamos essa parte.", emotion: "happy" },
        { text: "Veja essa cor que legal! Vamos focar aqui?", emotion: "happy" },
        { text: "Falta só um pouquinho para o próximo prêmio!", emotion: "happy" },
      ],
      focado: [
        { text: "Adoro ver você concentrado assim!", emotion: "proud" },
        { text: "Seu cérebro está brilhando muito agora!", emotion: "proud" },
        { text: "Que foco maravilhoso! Continue assim!", emotion: "proud" },
      ],
      feliz: [
        { text: "Estou tão feliz de aprender com você!", emotion: "happy" },
        { text: "Aprender é uma grande festa!", emotion: "happy" },
      ],
      calmo: [
        { text: "Estou aqui com você! Vamos continuar?", emotion: "happy" },
        { text: "No seu tempo, sem pressa.", emotion: "happy" },
      ],
      ansioso: [
        { text: "Calma, amiguinho. Eu te ajudo se precisar.", emotion: "thinking" },
        { text: "Vamos fazer devagarzinho, um por um.", emotion: "thinking" },
      ],
      irritado: [
        { text: "Estou aqui para te ouvir. Quer um abraço virtual?", emotion: "thinking" },
        { text: "Às vezes as coisas são difíceis, mas eu acredito em você.", emotion: "thinking" },
      ],
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
