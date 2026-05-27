import { BaseGenerator } from "./BaseGenerator";
import { GeneratorInput } from "../../types/generator";

export class MotorGenerator extends BaseGenerator {
  protected domain = "motor";

  protected getActivityType(input: GeneratorInput): string {
    return "trace-path";
  }

  protected getTitle(input: GeneratorInput): string {
    return "Caminho Mágico";
  }

  protected getInstruction(input: GeneratorInput): string {
    return "Siga o caminho com o dedo sem sair da linha.";
  }

  protected generateContent(input: GeneratorInput): any {
    const complexity = Math.floor(input.difficulty * 5) + 2;
    const points = [];
    let lastX = 50;
    let lastY = 10;
    
    for (let i = 0; i < complexity; i++) {
      lastX = Math.max(10, Math.min(90, lastX + (Math.random() * 40 - 20)));
      lastY += (80 / complexity);
      points.push({ x: lastX, y: lastY });
    }

    return { 
      points, 
      width: 10 + (input.difficulty * 10), // Thinner line for higher difficulty
      strokeColor: this.pickRandom(['#FF5733', '#33FF57', '#3357FF'])
    };
  }
}
