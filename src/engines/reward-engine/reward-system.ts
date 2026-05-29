
import { MasteryLevel } from "@/engines/pedagogical-engine/types";

export interface RewardState {
  totalStars: number;
  totalCoins: number;
  energy: number;
  mascotLevel: number;
  unlockedItems: string[];
}

export class RewardSystem {
  private static state: RewardState = {
    totalStars: 0,
    totalCoins: 0,
    energy: 100,
    mascotLevel: 1,
    unlockedItems: []
  };

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
      // Trigger unlock logic
      this.state.unlockedItems.push(`item-${this.state.mascotLevel}`);
    }
  }

  static getState() {
    return { ...this.state };
  }

  static getMasteryStatus(performance: number): MasteryLevel {
    if (performance >= 0.9) return "mastered";
    if (performance >= 0.6) return "in-progress";
    if (performance >= 0.3) return "initiated";
    return "review-needed";
  }
}
