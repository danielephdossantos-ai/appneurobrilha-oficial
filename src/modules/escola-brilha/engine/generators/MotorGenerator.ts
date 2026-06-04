import { BaseGenerator } from "./BaseGenerator";
import { GeneratorInput } from "../../types/generator";
import { EARLY_CHILDHOOD, isEarlyChildhood } from "./PedagogyData";

export class MotorGenerator extends BaseGenerator {
  protected domain = "motor";

  protected getActivityType(input: GeneratorInput): string {
    if (isEarlyChildhood(input.grade) && input.subject === 'trilha-movimentos') {
      return 'ei-trace';
    }
    return "trace-path";
  }

  protected getTitle(input: GeneratorInput): string {
    const type = this.getActivityType(input);
    if (type === 'ei-trace') return "Trilha dos Movimentos";
    return "Caminho Mágico";
  }

  protected getInstruction(input: GeneratorInput): string {
    const type = this.getActivityType(input);
    if (type === 'ei-trace') return "Siga o caminho com o dedo!";
    return "Siga o caminho com o dedo sem sair da linha.";
  }

  protected generateContent(input: GeneratorInput): any {
    const type = this.getActivityType(input);
    
    if (type === 'ei-trace') {
      const item = this.pickRandom(EARLY_CHILDHOOD.movimentos.tracado);
      return {
        points: item.points,
        label: item.label,
        width: 15, // Thicker for little ones
        strokeColor: '#FF5733',
        miniGameType: "tracing"
      };
    }

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
