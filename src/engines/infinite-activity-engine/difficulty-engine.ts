import { Difficulty } from "../infinite-activity-engine/types";
import { NeuroAdjustment } from "../neuro-engine/types";

export class DifficultyEngine {
  static calculateDifficulty(
    performance: number,
    adjustments: NeuroAdjustment,
  ): "easy" | "medium" | "hard" | "expert" {
    // Basic logic: if performance is high, increase difficulty
    // If neuro adjustments indicate high support needed, decrease or stabilize difficulty

    let baseLevel = 0; // 0: easy, 1: medium, 2: hard, 3: expert

    if (performance > 0.9) baseLevel = 3;
    else if (performance > 0.7) baseLevel = 2;
    else if (performance > 0.4) baseLevel = 1;

    // Adjust based on neuro profile needs (simplified)
    if (adjustments.difficultyScale < 0.5) {
      baseLevel = Math.max(0, baseLevel - 1);
    }

    const levels: ("easy" | "medium" | "hard" | "expert")[] = ["easy", "medium", "hard", "expert"];
    return levels[baseLevel];
  }

  static getItemsCount(difficulty: Difficulty): number {
    switch (difficulty) {
      case "easy":
        return 3;
      case "medium":
        return 5;
      case "hard":
        return 8;
      case "expert":
        return 12;
      default:
        return 4;
    }
  }
}
