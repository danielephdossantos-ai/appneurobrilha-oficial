
export type NeuroProfile = "autismo" | "tdah" | "dislexia" | "neurotipico";

export interface CognitiveLoad {
  attentionSpan: number; // minutes
  workingMemory: number; // items
  processingSpeed: number; // 0 to 1
}

export class NeuroEngine {
  static getAdjustments(profile: NeuroProfile): {
    breakFrequency: number;
    visualComplexity: "low" | "medium" | "high";
    instructionType: "visual" | "text" | "audio";
  } {
    switch (profile) {
      case "autismo":
        return { breakFrequency: 15, visualComplexity: "low", instructionType: "visual" };
      case "tdah":
        return { breakFrequency: 10, visualComplexity: "low", instructionType: "audio" };
      case "dislexia":
        return { breakFrequency: 20, visualComplexity: "medium", instructionType: "audio" };
      default:
        return { breakFrequency: 30, visualComplexity: "high", instructionType: "text" };
    }
  }
}
