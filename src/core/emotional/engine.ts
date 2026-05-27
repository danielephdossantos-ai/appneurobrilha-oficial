
export type Emotion = "feliz" | "calmo" | "ansioso" | "irritado" | "cansado";

export interface EmotionalState {
  current: Emotion;
  history: { date: Date; emotion: Emotion }[];
}

export class EmotionalEngine {
  static getActivitySuggestion(emotion: Emotion): string {
    switch (emotion) {
      case "irritado": return "Pausa para respiração guiada";
      case "ansioso": return "Atividade rítmica calma";
      case "cansado": return "Pausa curta ou atividade leve";
      default: return "Continuar jornada de aprendizado";
    }
  }
}
