
export type MasteryData = {
  hits: number;
  errors: number;
  attempts: number;
  timeSeconds: number;
  masteryPercentage: number;
};

export class MasteryMotor {
  static calculateMastery(hits: number, errors: number, attempts: number): number {
    if (attempts === 0) return 0;
    return Math.round((hits / attempts) * 100);
  }

  static getMasteryLevel(percentage: number): 'explanation' | 'reforcement' | 'trail_advance' {
    if (percentage < 50) return 'explanation';
    if (percentage < 80) return 'reforcement'; // 80% is the threshold
    return 'trail_advance';
  }

  static isMastered(percentage: number): boolean {
    return percentage >= 80;
  }
}
