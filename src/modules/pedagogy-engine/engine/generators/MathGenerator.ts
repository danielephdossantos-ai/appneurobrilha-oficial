import { BaseGenerator } from "./BaseGenerator";
import { GeneratorInput } from "../../types/generator";
import { MATH_DATA } from "./PedagogyData";

export class MathGenerator extends BaseGenerator {
  protected domain = "math";

  protected getActivityType(input: GeneratorInput): string {
    if (input.difficulty < 0.4) return "counting";
    if (input.difficulty < 0.7) return "comparison";
    return "visual-logic";
  }

  protected getTitle(input: GeneratorInput): string {
    const type = this.getActivityType(input);
    switch (type) {
      case "counting": return "Contagem Divertida";
      case "comparison": return "Mais ou Menos?";
      case "visual-logic": return "Desafio Lógico";
      default: return "Laboratório Matemágico";
    }
  }

  protected getInstruction(input: GeneratorInput): string {
    const type = this.getActivityType(input);
    switch (type) {
      case "counting": return "Quantos objetos você vê?";
      case "comparison": return "Qual grupo tem mais itens?";
      case "visual-logic": return "Qual é o próximo da sequência?";
      default: return "Resolva o desafio.";
    }
  }

  protected generateContent(input: GeneratorInput): any {
    const type = this.getActivityType(input);
    const maxNumber = input.difficulty < 0.5 ? 5 : 10;

    if (type === "counting") {
      const targetCount = Math.floor(Math.random() * maxNumber) + 1;
      const options = this.shuffle([
        targetCount,
        ...this.pickNRandom(Array.from({length: maxNumber + 2}, (_, i) => i + 1).filter(n => n !== targetCount), 3)
      ]);
      return { targetCount, options, objectType: this.pickRandom(['star', 'circle', 'apple']) };
    }

    if (type === "comparison") {
      const countA = Math.floor(Math.random() * maxNumber) + 1;
      let countB = Math.floor(Math.random() * maxNumber) + 1;
      while (countB === countA) countB = Math.floor(Math.random() * maxNumber) + 1;
      
      return { 
        groupA: { count: countA, item: 'star' },
        groupB: { count: countB, item: 'circle' },
        answer: countA > countB ? 'A' : 'B'
      };
    }

    // Logic/Patterns
    const pattern = this.pickRandom(MATH_DATA.patterns);
    const shapes = this.pickNRandom(MATH_DATA.shapes, 3);
    const sequence = pattern.sequence.map(item => {
      if (item === 'A') return shapes[0];
      if (item === 'B') return shapes[1];
      return shapes[2];
    });
    const nextItem = pattern.next === 'A' ? shapes[0] : (pattern.next === 'B' ? shapes[1] : shapes[2]);
    
    return { sequence, nextItem, options: this.shuffle([...shapes]) };
  }
}
