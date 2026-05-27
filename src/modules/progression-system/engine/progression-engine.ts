export class ProgressionEngine {
  static calculateMastery(success: number, total: number) {
    return total > 0 ? success / total : 0;
  }
  static checkNeedForRecovery(stats: any) {
    return false;
  }
  static updateMastery(stats: any, performance: any) {
    return stats;
  }
  static scheduleNextReview(skillId: string) {
    return new Date();
  }
}
