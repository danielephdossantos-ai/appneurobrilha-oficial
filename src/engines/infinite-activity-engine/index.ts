
import { BNCCEngine } from "./bncc-engine";
import { TemplateEngine } from "./template-engine";
import { RandomizerEngine } from "./randomizer-engine";
import { DifficultyEngine } from "./difficulty-engine";
import { CognitiveAdaptationEngine } from "./cognitive-adaptation-engine";
import { GeneratedActivity } from "./types";
import { NeuroAdjustment } from "../neuro-engine/types";

export interface InfiniteEngineContext {
  childId: string;
  age: number;
  grade: number;
  neuroProfile: string;
  previousPerformance: number;
  adjustments: NeuroAdjustment;
}

export class InfiniteActivityEngine {
  static generate(context: InfiniteEngineContext): GeneratedActivity {
    // 1. Get BNCC Skills for the grade
    const skills = BNCCEngine.getSkillsByLevel(context.grade);
    const skill = skills[Math.floor(Math.random() * skills.length)] || skills[0];

    // 2. Find suitable templates
    const templates = TemplateEngine.findTemplatesBySkill(skill.code, context.age);
    const template = templates.length > 0 
      ? TemplateEngine.getRandomTemplate(templates) 
      : TemplateEngine.findTemplatesBySkill("EF01MA01", context.age)[0];

    // 3. Calculate Difficulty
    const difficulty = DifficultyEngine.calculateDifficulty(context.previousPerformance, context.adjustments);

    // 4. Randomize Content
    const baseContent = RandomizerEngine.generateContent(template, difficulty);

    // 5. Apply Cognitive Adaptations
    const adaptedContent = CognitiveAdaptationEngine.apply(baseContent, context.adjustments);

    // 6. Assemble Final Activity
    return {
      id: `inf_${Date.now()}_${context.childId}`,
      templateId: template.id,
      bnccCode: skill.code,
      difficulty: difficulty,
      content: adaptedContent,
      adaptation: context.adjustments,
      reward: {
        stars: difficulty === "easy" ? 5 : difficulty === "medium" ? 10 : 20,
        coins: difficulty === "easy" ? 10 : difficulty === "medium" ? 20 : 40,
        xp: difficulty === "easy" ? 50 : 100
      }
    };
  }
}
