export class ProgressionEngine {
  static calculateMastery(success: number, total: number) {
    return total > 0 ? success / total : 0;
  }
  static checkNeedForRecovery(...args: any[]) {
    return false;
  }
  static updateMastery(...args: any[]) {
    return args[0];
  }
  static scheduleNextReview(...args: any[]) {
    return new Date();
  }
}
