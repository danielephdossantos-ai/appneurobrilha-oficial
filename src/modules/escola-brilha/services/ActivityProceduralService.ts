import { GeneratorInput, GeneratedActivity, GeneratorProvider } from "../types/generator";
import { LinguisticsGenerator } from "../engine/generators/LinguisticsGenerator";
import { MathGenerator } from "../engine/generators/MathGenerator";
import { CognitiveGenerator } from "../engine/generators/CognitiveGenerator";
import { MotorGenerator } from "../engine/generators/MotorGenerator";
import { PerceptionGenerator } from "../engine/generators/PerceptionGenerator";

export class ActivityProceduralService {
  private static instance: ActivityProceduralService;
  private generators: GeneratorProvider[] = [];

  private constructor() {
    this.generators = [
      new LinguisticsGenerator(),
      new MathGenerator(),
      new CognitiveGenerator(),
      new MotorGenerator(),
      new PerceptionGenerator(),
    ];
  }

  public static getInstance(): ActivityProceduralService {
    if (!ActivityProceduralService.instance) {
      ActivityProceduralService.instance = new ActivityProceduralService();
    }
    return ActivityProceduralService.instance;
  }

  public generateActivity(input: GeneratorInput): GeneratedActivity {
    const generator = this.generators.find(g => g.supports(input.domain));
    
    if (!generator) {
      console.warn(`No generator found for domain: ${input.domain}. Using linguistics as fallback.`);
      return this.generators[0].generate(input);
    }

    return generator.generate(input);
  }

  public generateSession(domains: string[], difficulty: number, count: number, childProfile: any, grade?: string): GeneratedActivity[] {
    const activities: GeneratedActivity[] = [];
    
    for (let i = 0; i < count; i++) {
      const domain = domains[i % domains.length];
      const activity = this.generateActivity({
        domain,
        difficulty,
        grade: grade,
        childProfile: childProfile,
        previousActivityIds: activities.map(a => a.id),
      });
      activities.push(activity);
    }

    return activities;
  }
}
