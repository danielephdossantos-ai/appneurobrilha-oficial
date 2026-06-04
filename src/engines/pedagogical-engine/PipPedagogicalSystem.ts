import { Child } from "@/core/store";

export type PipEmotion = 'happy' | 'thinking' | 'excited' | 'sleeping' | 'proud' | 'cheering';

export interface PipMessage {
  text: string;
  emotion: PipEmotion;
}

export class PipPedagogicalSystem {
  private static MENSAGENS_EXPLICACAO: Record<number, string[]> = {
    4: ["Olha que legal o que vamos fazer!", "Vou te mostrar um segredo novo!", "Vamos brincar de aprender?"],
    6: ["Hoje o desafio é muito especial!", "Vou te explicar como ser um mestre aqui!", "Preparado para essa missão?"],
    8: ["Vamos explorar um novo conhecimento juntos!", "Este desafio vai exercitar seu super cérebro!", "Pronto para subir de nível hoje?"],
    10: ["O objetivo de hoje é dominar esta habilidade!", "Vamos analisar este desafio passo a passo.", "Pronto para o próximo degrau do conhecimento?"],
  };

  private static MENSAGENS_INCENTIVO: Record<number, string[]> = {
    4: ["Você está indo muito bem!", "Que lindo o que você está fazendo!", "Continue assim, pequeno brilhante!"],
    6: ["Estou adorando seu esforço!", "Você é muito inteligente!", "Olha só como você está conseguindo!"],
    8: ["Excelente concentração!", "Cada passo te deixa mais forte!", "Seu cérebro está brilhando agora!"],
    10: ["Sua linha de raciocínio está ótima!", "Persistência é o segredo dos mestres!", "Continue focado, você está quase lá!"],
  };

  private static MENSAGENS_COMEMORACAO: Record<number, string[]> = {
    4: ["Eeee! Você conseguiu!", "Muito bem! Que alegria!", "Você é nota dez!"],
    6: ["Incrível! Você arrasou!", "Missão cumprida com sucesso!", "Parabéns, você brilhou muito!"],
    8: ["Excepcional! Objetivo alcançado!", "Você dominou esse desafio!", "Estou muito orgulhoso da sua evolução!"],
    10: ["Desempenho de mestre! Parabéns!", "Sua evolução é constante e brilhante!", "Conhecimento desbloqueado com sucesso!"],
  };

  private static getAgeKey(age: number): number {
    if (age <= 5) return 4;
    if (age <= 7) return 6;
    if (age <= 9) return 8;
    return 10;
  }

  private static getRandom(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  static getExplanation(child: Child): PipMessage {
    const ageKey = this.getAgeKey(child.idade);
    return {
      text: this.getRandom(this.MENSAGENS_EXPLICACAO[ageKey]),
      emotion: 'thinking'
    };
  }

  static getEncouragement(child: Child): PipMessage {
    const ageKey = this.getAgeKey(child.idade);
    return {
      text: this.getRandom(this.MENSAGENS_INCENTIVO[ageKey]),
      emotion: 'happy'
    };
  }

  static getCelebration(child: Child): PipMessage {
    const ageKey = this.getAgeKey(child.idade);
    return {
      text: this.getRandom(this.MENSAGENS_COMEMORACAO[ageKey]),
      emotion: 'excited'
    };
  }
}
