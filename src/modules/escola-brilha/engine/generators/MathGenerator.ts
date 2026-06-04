import { BaseGenerator } from "./BaseGenerator";
import { GeneratorInput } from "../../types/generator";
import { MATH_DATA, EARLY_CHILDHOOD, isEarlyChildhood } from "./PedagogyData";

export class MathGenerator extends BaseGenerator {
  protected domain = "math";

  protected getActivityType(input: GeneratorInput): string {
    if (isEarlyChildhood(input.grade)) {
      const r = Math.random();
      if (r < 0.5) return 'ei-contagem';
      return 'ei-drag-quantity';
    }
    const gradeNum = parseInt(input.grade?.replace(/\D/g, '') || "1");
    if (gradeNum >= 6) return "advanced-logic";
    if (gradeNum <= 2) return "counting";
    if (gradeNum === 3) return "comparison";
    return "visual-logic";
  }

  protected getTitle(input: GeneratorInput): string {
    const type = this.getActivityType(input);
    switch (type) {
      case "ei-contagem": return "Vale dos Números";
      case "ei-drag-quantity": return "Vale dos Números";
      case "counting": return "Contagem Divertida";
      case "comparison": return "Mais ou Menos?";
      case "visual-logic": return "Desafio Lógico";
      case "advanced-logic": return "Laboratório de Álgebra e Aritmética";
      default: return "Laboratório Matemágico";
    }
  }

  protected getInstruction(input: GeneratorInput): string {
    const type = this.getActivityType(input);
    switch (type) {
      case "ei-contagem": return "Quantas maçãs existem?";
      case "ei-drag-quantity": return "Arraste as estrelas para a caixa.";
      case "counting": return "Quantos objetos você vê?";
      case "comparison": return "Qual grupo tem mais itens?";
      case "visual-logic": return "Qual é o próximo da sequência?";
      case "advanced-logic": return "Resolva o problema matemático abaixo:";
      default: return "Resolva o desafio.";
    }
  }

  protected generateContent(input: GeneratorInput): any {
    try {
      const type = this.getActivityType(input);

      // ===== EDUCAÇÃO INFANTIL =====
      if (type === 'ei-contagem') {
        const item = EARLY_CHILDHOOD.contagem[0]; // 3 apples
        return {
          q: "Quantas maçãs existem?",
          visual: item.emoji.repeat(item.n),
          targetCount: item.n,
          answer: String(item.n),
          options: item.options?.map(String),
          miniGameType: "bubbles"
        };
      }

      if (type === 'ei-drag-quantity') {
        const item = EARLY_CHILDHOOD.contagem[1]; // 4 stars
        return {
          q: `Coloque ${item.n} estrelas na caixa`,
          targetCount: item.n,
          symbol: item.emoji,
          miniGameType: "quantity"
        };
      }

      const gradeNum = parseInt(input.grade?.replace(/\D/g, '') || "1");
      const maxByGrade: Record<number, number> = { 1: 10, 2: 20, 3: 50, 4: 100, 5: 1000 };
      const maxNumber = maxByGrade[gradeNum] || 10;

      if (type === "advanced-logic") {
        const dataKey = gradeNum >= 9 ? 'grade9' : 'grade7';
        const set = MATH_DATA.operations[dataKey as keyof typeof MATH_DATA.operations] || MATH_DATA.operations.grade7;
        if (!set || set.length === 0) throw new Error(`No math operations found for ${dataKey}`);
        return this.pickRandom(set);
      }

      if (type === "counting") {
        const targetCount = Math.floor(Math.random() * Math.min(maxNumber, 20)) + 1;
        const options = this.shuffle([
          targetCount,
          ...this.pickNRandom(Array.from({length: 25}, (_, i) => i + 1).filter(n => n !== targetCount), 3)
        ]);
        return { targetCount, options, objectType: this.pickRandom(['star', 'circle', 'apple', 'book', 'pencil']) };
      }

      if (type === "comparison") {
        const countA = Math.floor(Math.random() * maxNumber) + 1;
        let countB = Math.floor(Math.random() * maxNumber) + 1;
        while (countB === countA) countB = Math.floor(Math.random() * maxNumber) + 1;

        return {
          groupA: { count: countA, item: this.pickRandom(MATH_DATA.shapes) },
          groupB: { count: countB, item: this.pickRandom(MATH_DATA.shapes) },
          answer: countA > countB ? 'A' : 'B'
        };
      }

      const patterns = MATH_DATA.patterns;
      if (!patterns || patterns.length === 0) throw new Error("No patterns found in MATH_DATA");
      const pattern = this.pickRandom(patterns);
      const shapes = this.pickNRandom(MATH_DATA.shapes, 3);
      const sequence = pattern.sequence.map((item: string) => {
        if (item === 'A') return shapes[0];
        if (item === 'B') return shapes[1];
        return shapes[2];
      });
      const nextItem = pattern.next === 'A' ? shapes[0] : (pattern.next === 'B' ? shapes[1] : shapes[2]);

      return { sequence, nextItem, options: this.shuffle([...shapes]) };
    } catch (e) {
      console.error("Error in MathGenerator:", e);
      return {
        q: "2 + 2",
        a: 4,
        options: [2, 3, 4, 5]
      };
    }
  }
}
