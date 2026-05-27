export class ProgressionEngine {
  static calculateMastery(success: number, total: number) {
    return total > 0 ? success / total : 0;
  }
}
