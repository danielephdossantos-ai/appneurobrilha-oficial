import { BaseGenerator } from "./BaseGenerator";
import { GeneratorInput } from "../../types/generator";
import { EARLY_CHILDHOOD, isEarlyChildhood } from "./PedagogyData";

export class CognitiveGenerator extends BaseGenerator {
  protected domain = "cognitive";

  protected getActivityType(input: GeneratorInput): string {
    if (isEarlyChildhood(input.grade)) {
      return Math.random() < 0.5 ? "ei-memory" : "ei-missing";
    }
    if (input.difficulty < 0.5) return "memory-match";
    return "sequence-recall";
  }

  protected getTitle(input: GeneratorInput): string {
    const type = this.getActivityType(input);
    switch (type) {
      case "ei-memory":
      case "memory-match": return "Floresta da Atenção";
      case "ei-missing": return "Floresta da Atenção";
      case "sequence-recall": return "Mestre das Cores";
      default: return "Treino Cerebral";
    }
  }

  protected getInstruction(input: GeneratorInput): string {
    const type = this.getActivityType(input);
    switch (type) {
      case "ei-memory": return "Encontre os pares dos amigos!";
      case "memory-match": return "Encontre os pares correspondentes.";
      case "ei-missing": return "O que sumiu? Olhe bem!";
      case "sequence-recall": return "Repita a sequência de cores que você viu.";
      default: return "Prepare-se para o desafio!";
    }
  }

  protected generateContent(input: GeneratorInput): any {
    const type = this.getActivityType(input);
    
    if (isEarlyChildhood(input.grade)) {
      if (type === "ei-memory") {
        return {
          opcoes: EARLY_CHILDHOOD.cognitivo.memory.slice(0, 3), // 3 pares = 6 cartas
          miniGameType: "memory"
        };
      }
      if (type === "ei-missing") {
        return {
          sequence: EARLY_CHILDHOOD.cognitivo.sequence,
          opcoes: EARLY_CHILDHOOD.cognitivo.sequence,
          miniGameType: "sequence"
        };
      }
    }

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
