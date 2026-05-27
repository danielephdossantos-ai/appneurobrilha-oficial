import { BaseGenerator } from "./BaseGenerator";
import { GeneratorInput } from "../../types/generator";

export class CognitiveGenerator extends BaseGenerator {
  protected domain = "cognitive";

  protected getActivityType(input: GeneratorInput): string {
    if (input.difficulty < 0.5) return "memory-match";
    return "sequence-recall";
  }

  protected getTitle(input: GeneratorInput): string {
    const type = this.getActivityType(input);
    switch (type) {
      case "memory-match": return "Jogo da Memória";
      case "sequence-recall": return "Mestre das Cores";
      default: return "Treino Cerebral";
    }
  }

  protected getInstruction(input: GeneratorInput): string {
    const type = this.getActivityType(input);
    switch (type) {
      case "memory-match": return "Encontre os pares correspondentes.";
      case "sequence-recall": return "Repita a sequência de cores que você viu.";
      default: return "Prepare-se para o desafio!";
    }
  }

  protected generateContent(input: GeneratorInput): any {
    const type = this.getActivityType(input);
    
    if (type === "memory-match") {
      const pairCount = input.difficulty < 0.4 ? 3 : (input.difficulty < 0.7 ? 6 : 8);
      const items = ['🍎', '🍌', '🍇', '🍓', '🍉', '🍍', '🍒', '🥝'].slice(0, pairCount);
      const cards = this.shuffle([...items, ...items]).map((emoji, index) => ({
        id: index,
        content: emoji,
        isFlipped: false,
        isMatched: false
      }));
      return { cards, pairCount };
    }

    // Sequence Recall (Simon Says style)
    const sequenceLength = Math.floor(input.difficulty * 5) + 3;
    const colors = ['red', 'blue', 'green', 'yellow'];
    const sequence = Array.from({ length: sequenceLength }, () => this.pickRandom(colors));
    
    return { 
      sequence, 
      displayTime: Math.max(500, 2000 - (input.difficulty * 1500)),
      options: colors 
    };
  }
}
