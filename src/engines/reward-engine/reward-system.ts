import { z } from "zod";

export const MascotEmotionSchema = z.enum([
  "happy",
  "calm",
  "sleepy",
  "excited",
  "focused",
  "proud",
]);
export type MascotEmotion = z.infer<typeof MascotEmotionSchema>;

export interface RewardState {
  totalStars: number;
  totalCoins: number;
  energy: number;
  mascotLevel: number;
  unlockedItems: string[];
}

export interface MascotState {
  name: string;
  type: string;
  evolutionStage: number;
  currentEmotion: MascotEmotion;
  energyLevel: number;
  affinityPoints: number;
}

export class RewardSystem {
  private static state: RewardState = {
    totalStars: 0,
    totalCoins: 0,
    energy: 100,
    mascotLevel: 1,
    unlockedItems: [],
  };

  /**
   * Calcula recompensas baseadas em critérios neurocompatíveis.
   * Valoriza esforço, calma e persistência em vez de apenas velocidade.
   */
  static calculateRewards(params: {
    accuracy: number;
    timeInZone: boolean;
    attempts: number;
    wasCalm: boolean;
  }) {
    let coins = 10;
    let stars = 1;
    let xp = 20;

    if (params.attempts > 1 && params.accuracy > 0.7) {
      coins += 5;
      xp += 10;
    }

    if (params.wasCalm) {
      coins += 10;
      stars += 1;
      xp += 15;
    }

    if (params.accuracy >= 0.9) {
      coins += 5;
      xp += 10;
    }

    return { coins, stars, xp };
  }

  static addRewards(stars: number, coins: number, energy: number) {
    this.state.totalStars += stars;
    this.state.totalCoins += coins;
    this.state.energy = Math.min(100, this.state.energy + energy);

    this.checkLevelUp();
    return { ...this.state };
  }

  private static checkLevelUp() {
    const nextLevelThreshold = this.state.mascotLevel * 50;
    if (this.state.totalStars >= nextLevelThreshold) {
      this.state.mascotLevel++;
      this.state.unlockedItems.push(`item-${this.state.mascotLevel}`);
    }
  }

  static getState() {
    return { ...this.state };
  }
}
