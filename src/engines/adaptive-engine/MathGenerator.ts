import { ALL_MATH_ACTIVITIES, MathActivity } from "@/data/math/activities";
import { NeuroProfile, AdaptiveEngine } from "./engine";

export class MathGenerator {
  static generateActivity(world: string, profile: NeuroProfile, difficulty: number): MathActivity {
    const worldActivities = ALL_MATH_ACTIVITIES.filter(
      (a: MathActivity) => a.world === world || world === "all",
    );
    const suitable = worldActivities.filter((a: MathActivity) => a.difficulty <= difficulty);

    const base =
      suitable.length > 0
        ? suitable[Math.floor(Math.random() * suitable.length)]
        : ALL_MATH_ACTIVITIES[0];

    return this.applyNeuroAdaptation(base, profile);
  }

  private static applyNeuroAdaptation(activity: MathActivity, profile: NeuroProfile): MathActivity {
    const adapted = { ...activity, data: { ...activity.data } };
    const adjustments = AdaptiveEngine.getAdjustments(profile);

    // Dynamic adaptation based on NeuroEngine rules
    adapted.data.maxItems = Math.min(adapted.data.maxItems || 10, adjustments.maxItemsPerScreen);
    adapted.data.animationSpeed = adjustments.animationSpeed;

    if (adjustments.predictabilityLevel === "high") {
      adapted.data.showTimer = false;
      adapted.data.stepByStep = true;
    }

    if (adjustments.stimuliLevel === "low") {
      adapted.sensoryAdaptation = { lowStimulus: true, highContrast: false };
    }

    // Specific rules for certain activity types
    if (activity.type === "counting" && adjustments.visualScale > 1.2) {
      adapted.data.hasVisualAids = true;
    }

    return adapted;
  }

  static generateSequence(
    count: number,
    difficulty: number,
    profile: NeuroProfile = "Neurotipico",
  ): MathActivity[] {
    const sequence: MathActivity[] = [];
    for (let i = 0; i < count; i++) {
      const currentDifficulty = Math.min(difficulty + Math.floor(i / 3), 5);
      const worlds = ["counting", "comparison", "shapes", "logic"];
      const world = worlds[i % worlds.length];
      sequence.push(this.generateActivity(world, profile, currentDifficulty));
    }
    return sequence;
  }
}
