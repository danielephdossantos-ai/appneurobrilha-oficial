
import { Emotion } from "@/engines/regulation-engine/emotional-engine";


export interface MascotState {
  name: string;
  type: "amigo" | "mentor" | "explorador";
  currentEmotion: Emotion;
  message: string;
  isGuiding: boolean;
}

export class MascotEngine {
  private static readonly MASCOTS = {
    amigo: { name: "Lumi", personality: "acolhedor" },
    mentor: { name: "Dr. Sabio", personality: "instrutivo" },
    explorador: { name: "Zapt", personality: "energético" }
  };

  static getMascot(type: keyof typeof MascotEngine.MASCOTS = "amigo"): MascotState {
    const config = MascotEngine.MASCOTS[type];
    return {
      name: config.name,
      type,
      currentEmotion: "calmo",
      message: "Olá! Vamos aprender algo novo hoje?",
      isGuiding: false
    };
  }

  static processAction(
    mascot: MascotState, 
    action: "evolucao" | "erro" | "inatividade" | "inicio_atividade"
  ): Partial<MascotState> {
    switch (action) {
      case "evolucao":
        return {
          currentEmotion: "orgulhoso",
          message: `Uau! Você completou um grande passo, ${mascot.name} está orgulhoso!`
        };
      case "erro":
        return {
          currentEmotion: "frustrado",
          message: "Não se preocupe, o erro faz parte do aprendizado. Vamos tentar de novo?"
        };
      case "inatividade":
        return {
          currentEmotion: "distraido",
          message: "Ainda está por aí? Tenho um desafio legal esperando você!"
        };
      case "inicio_atividade":
        return {
          isGuiding: true,
          message: "Siga as instruções e eu te ajudo no caminho!"
        };
      default:
        return {};
    }
  }
}
