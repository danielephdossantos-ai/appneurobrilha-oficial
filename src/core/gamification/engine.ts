
export interface Reward {
  id: string;
  type: "badge" | "points" | "item";
  value: string | number;
}

export class GamificationEngine {
  static calculateLevel(xp: number): number {
    return Math.floor(Math.sqrt(xp / 100)) + 1;
  }

  static shouldUnlockBadge(activityCount: number, streak: number): string | null {
    if (streak === 7) return "Semana Brilhante!";
    if (activityCount === 50) return "Explorador Veterano";
    return null;
  }
}
