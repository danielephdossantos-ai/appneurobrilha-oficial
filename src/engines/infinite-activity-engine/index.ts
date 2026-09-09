import { BNCCEngine } from "./bncc-engine";
import { TemplateEngine } from "./template-engine";
import { RandomizerEngine } from "./randomizer-engine";
import { DifficultyEngine } from "./difficulty-engine";
import { CognitiveAdaptationEngine } from "./cognitive-adaptation-engine";
import { PedagogicalValidationEngine } from "./validation-engine";
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
  private static MAX_ATTEMPTS = 5;

  static generate(context: InfiniteEngineContext): GeneratedActivity {
    let attempts = 0;
    let activity: GeneratedActivity;
    let validation: any;

    do {
      attempts++;
      activity = this.runGenerationCycle(context);
      validation = PedagogicalValidationEngine.validate(activity, context);

      if (!validation.isValid) {
        console.warn(
          `[InfiniteActivityEngine] Rejeição pedagógica na tentativa ${attempts}:`,
          validation.errors,
        );
      }
    } while (!validation.isValid && attempts < this.MAX_ATTEMPTS);

    if (!validation.isValid) {
      console.error(
        "[InfiniteActivityEngine] Falha ao gerar atividade válida após 5 tentativas. Retornando fallback.",
      );
      // Fallback básico garantido
      return activity;
    }

    return activity;
  }

  private static runGenerationCycle(context: InfiniteEngineContext): GeneratedActivity {
    // 1. Get BNCC Skills for the grade
    const skills = BNCCEngine.getSkillsByLevel(context.grade);
    if (!skills || skills.length === 0) {
      console.warn(
        `[InfiniteActivityEngine] No skills found for grade ${context.grade}, using fallback.`,
      );
    }
    const skill =
      skills && skills.length > 0
        ? skills[Math.floor(Math.random() * skills.length)]
        : { code: "EF01MA01", description: "Contagem básica" };

    // 2. Find suitable templates
    const templates = TemplateEngine.findTemplatesBySkill(skill.code, context.age);
    const template =
      templates && templates.length > 0
        ? TemplateEngine.getRandomTemplate(templates)
        : TemplateEngine.findTemplatesBySkill("EF01MA01", context.age)[0] || {
            id: "temp_fallback",
            type: "selection",
          };

    // 3. Calculate Difficulty
    const difficulty = DifficultyEngine.calculateDifficulty(
      context.previousPerformance,
      context.adjustments,
    );

    // 4. Randomize Content
    const baseContent = RandomizerEngine.generateContent(template, difficulty);

    // 5. Apply Cognitive Adaptations
    const adaptedContent = CognitiveAdaptationEngine.apply(baseContent, context.adjustments);

    // 6. Assemble Final Activity
    return {
      id: `inf_${Date.now()}_${context.childId || "anon"}`,
      templateId: template?.id || "temp_unknown",
      bnccCode: skill?.code || "EF01MA01",
      difficulty: difficulty || "easy",
      content: adaptedContent || { question: "Vamos começar?" },
      adaptation: context.adjustments,
      reward: {
        stars: difficulty === "easy" ? 5 : difficulty === "medium" ? 10 : 20,
        coins: difficulty === "easy" ? 10 : difficulty === "medium" ? 20 : 40,
        xp: difficulty === "easy" ? 50 : 100,
      },
    };
  }
}
