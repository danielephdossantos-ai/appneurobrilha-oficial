import { GeneratedActivity, GeneratorInput } from "../types/generator";
import { v4 as uuidv4 } from "uuid";

export abstract class BaseGenerator {
  protected abstract domain: string;

  protected generateSeed(): string {
    return Math.random().toString(36).substring(7);
  }

  protected shuffle<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  protected pickRandom<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  protected pickNRandom<T>(array: T[], n: number): T[] {
    return this.shuffle(array).slice(0, n);
  }

  protected abstract generateContent(input: GeneratorInput): any;
  protected abstract getInstruction(input: GeneratorInput): string;
  protected abstract getTitle(input: GeneratorInput): string;
  protected abstract getActivityType(input: GeneratorInput): string;

  public generate(input: GeneratorInput): GeneratedActivity {
    const seed = this.generateSeed();
    
    return {
      id: `gen_${this.domain}_${uuidv4()}`,
      templateId: `tpl_${this.domain}`,
      type: this.getActivityType(input),
      title: this.getTitle(input),
      instruction: this.getInstruction(input),
      content: this.generateContent(input),
      difficulty: input.difficulty,
      sensoryProfile: {
        visualStimulus: input.difficulty > 0.7 ? 'medium' : 'low',
        audioRequirement: true,
        motorComplexity: input.difficulty > 0.5 ? 'medium' : 'low',
      },
      metadata: {
        domain: this.domain,
        generatedAt: new Date().toISOString(),
        seed,
      }
    };
  }

  public supports(domain: string): boolean {
    return this.domain === domain;
  }
}
