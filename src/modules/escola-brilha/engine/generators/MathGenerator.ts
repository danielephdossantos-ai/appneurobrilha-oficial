import { BaseGenerator } from "./BaseGenerator";
import { GeneratorInput } from "../../types/generator";
import { MATH_DATA, EARLY_CHILDHOOD, FIRST_GRADE_MATH, isEarlyChildhood } from "./PedagogyData";

export class MathGenerator extends BaseGenerator {
  protected domain = "math";

  protected getActivityType(input: GeneratorInput): string {
    if (isEarlyChildhood(input.grade)) {
      if (input.subject === 'trilha-numeros') {
        const r = Math.random();
        if (r < 0.33) return 'ei-contagem';
        if (r < 0.66) return 'ei-drag-quantity';
        return 'ei-comparacao';
      }
      const r = Math.random();
      if (r < 0.5) return 'ei-contagem';
      return 'ei-drag-quantity';
    }
    const gradeNum = parseInt(input.grade?.replace(/\D/g, '') || "1");
    if (gradeNum >= 6) return "advanced-logic";
    if (input.grade?.includes("1º")) {
      const r = Math.random();
      if (r < 0.12) return 'alfa-count';    // EF01MA01
      if (r < 0.24) return 'alfa-compare';  // EF01MA02
      if (r < 0.36) return 'alfa-tens';     // EF01MA03
      if (r < 0.48) return 'alfa-sequence'; // EF01MA04
      if (r < 0.60) return 'alfa-sum';      // EF01MA05
      if (r < 0.72) return 'alfa-sub';      // EF01MA06
      if (r < 0.84) return 'alfa-problem';  // EF01MA07
      return 'alfa-spatial';               // EF01MA08
    }
    if (gradeNum <= 2) return "counting";
    if (gradeNum === 3) return "comparison";
    return "visual-logic";
  }

  protected getTitle(input: GeneratorInput): string {
    const type = this.getActivityType(input);
    switch (type) {
      case "ei-contagem": return "Vale dos Números";
      case "ei-drag-quantity": return "Vale dos Números";
      case "alfa-sum": return "Vale dos Números · Adição";
      case "alfa-sub": return "Vale dos Números · Subtração";
      case "alfa-tens": return "Vale dos Números · Dezenas";
      case "alfa-count": return "Vale dos Números · Contagem";
      case "alfa-compare": return "Vale dos Números · Comparação";
      case "alfa-sequence": return "Vale dos Números · Sequências";
      case "alfa-problem": return "Vale dos Números · Problemas";
      case "alfa-spatial": return "Vale dos Números · Localização";
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
      case "alfa-sum": return "Quanto dá essa soma?";
      case "alfa-sub": return "Quanto sobra?";
      case "alfa-tens": return "Qual número representa estas dezenas?";
      case "alfa-count": return "Quantos objetos você vê?";
      case "alfa-compare": return "Qual grupo tem mais?";
      case "alfa-sequence": return "Qual o próximo número?";
      case "alfa-problem": return "Resolva o probleminha:";
      case "alfa-spatial": return "Onde está o objeto?";
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
        const item = this.pickRandom(EARLY_CHILDHOOD.matematica.contagem); 
        return {
          q: `Quantas ${item.item} existem?`,
          visual: item.visual,
          targetCount: item.n,
          answer: String(item.n),
          numero_a: item.n, // Para a lousa mostrar as bolinhas
          options: item.options?.map(String),
          miniGameType: "bubbles",
          bncc_code: item.code
        };
      }

      if (type === 'ei-drag-quantity') {
        const item = this.pickRandom(EARLY_CHILDHOOD.matematica.drag); 
        return {
          q: `Coloque ${item.n} ${item.item} na caixa`,
          targetCount: item.n,
          numero_a: item.n,
          symbol: item.visual,
          visual: item.visual,
          miniGameType: "quantity",
          bncc_code: item.code
        };
      }

      if (type === 'ei-comparacao') {
        const item = this.pickRandom(EARLY_CHILDHOOD.matematica.comparacao);
        return {
          q: `Qual possui mais ${item.item}?`,
          visual: `Grupo A: ${item.groupA} vs Grupo B: ${item.groupB}`,
          answer: item.answer,
          options: item.options,
          miniGameType: "bubbles"
        };
      }

      // ===== 1º ANO (MATEMÁTICA VISUAL) =====
      if (type === 'alfa-count') {
        const item = FIRST_GRADE_MATH.counting[0];
        return {
          q: "Conte e responda:",
          targetCount: item.n,
          answer: String(item.n),
          options: [String(item.n), String(item.n - 1), String(item.n + 2)],
          miniGameType: "bubbles",
          bncc_code: item.code
        };
      }

      if (type === 'alfa-compare') {
        const item = FIRST_GRADE_MATH.comparison[0];
        return {
          q: `Qual grupo tem mais ${item.item}?`,
          visual: `Grupo A: ${item.countA} vs Grupo B: ${item.countB}`,
          answer: item.answer,
          options: ['A', 'B'],
          miniGameType: "bubbles",
          bncc_code: item.code
        };
      }

      if (type === 'alfa-tens') {
        const item = this.pickRandom(FIRST_GRADE_MATH.tens);
        return {
          q: item.question,
          answer: item.answer,
          options: item.options,
          miniGameType: "bubbles",
          bncc_code: item.code
        };
      }

      if (type === 'alfa-sequence') {
        return {
          q: "Complete a sequência:",
          visual: "2, 4, 6, ?",
          answer: "8",
          options: ["7", "8", "9"],
          miniGameType: "bubbles",
          bncc_code: 'EF01MA04'
        };
      }

      if (type === 'alfa-sum') {
        const item = this.pickRandom(FIRST_GRADE_MATH.visualAddition);
        return {
          q: "Soma Visual",
          visual: "maçãs",
          numero_a: item.group1.n,
          numero_b: item.group2.n,
          operacao: "+",
          answer: String(item.answer),
          options: item.options.map(String),
          miniGameType: "alfa-sum",
          bncc_code: item.code
        };
      }

      if (type === 'alfa-sub') {
        const item = this.pickRandom(FIRST_GRADE_MATH.visualSubtraction);
        return {
          q: "Subtração Visual",
          visual: "peixes",
          numero_a: item.total.n,
          numero_b: item.take,
          operacao: "-",
          answer: String(item.answer),
          options: item.options.map(String),
          miniGameType: "alfa-sub",
          bncc_code: item.code
        };
      }

      if (type === 'alfa-problem') {
        return {
          q: "Tinha 3 maçãs, comi 1. Quantas sobraram?",
          answer: "2",
          options: ["1", "2", "3"],
          miniGameType: "bubbles",
          bncc_code: 'EF01MA07'
        };
      }

      if (type === 'alfa-spatial') {
        const item = FIRST_GRADE_MATH.spatialLocation[0];
        return {
          q: item.question,
          options: item.options,
          answer: item.options[0],
          miniGameType: "bubbles",
          bncc_code: item.code
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
