
import { z } from "zod";

export const MascotEmotionSchema = z.enum(['happy', 'calm', 'sleepy', 'excited', 'focused', 'proud']);
export type MascotEmotion = z.infer<typeof MascotEmotionSchema>;

export interface RewardState {
  coins: number;
  stars: number;
  xp: number;
  level: number;
  streakDays: number;
}

export interface MascotState {
  name: string;
  type: string;
  evolutionStage: number;
  currentEmotion: MascotEmotion;
  energyLevel: number;
  affinityPoints: number;
}

export interface Achievement {
  id: string;
  code: string;
  title: string;
  description: string;
  category: 'persistent' | 'calm' | 'learning' | 'social';
  points: number;
  iconUrl?: string;
}

export class RewardEngine {
  /**
   * Calcula recompensas baseadas em critérios neurocompatíveis.
   * Valoriza esforço, calma e persistência em vez de apenas velocidade.
   */
  static calculateRewards(params: {
    accuracy: number;
    timeInZone: boolean; // Se a criança permaneceu regulada
    attempts: number;
    wasCalm: boolean;
  }) {
    let coins = 10; // Base
    let stars = 1;
    let xp = 20;

    // Bônus de Persistência (tentativas sem desistir)
    if (params.attempts > 1 && params.accuracy > 0.7) {
      coins += 5;
      xp += 10;
    }

    // Bônus de Calma (essencial para neurodivergentes)
    if (params.wasCalm) {
      coins += 10;
      stars += 1;
      xp += 15;
    }

    // Bônus de Precisão (com teto para não gerar frustração)
    if (params.accuracy >= 0.9) {
      coins += 5;
      xp += 10;
    }

    return { coins, stars, xp };
  }

  static getNextLevelXP(currentLevel: number): number {
    return Math.floor(100 * Math.pow(1.5, currentLevel - 1));
  }
}
