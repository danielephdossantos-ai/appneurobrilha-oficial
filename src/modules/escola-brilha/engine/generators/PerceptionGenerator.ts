import { BaseGenerator } from "./BaseGenerator";
import { GeneratorInput } from "../../types/generator";
import { EARLY_CHILDHOOD, isEarlyChildhood } from "./PedagogyData";

export class PerceptionGenerator extends BaseGenerator {
  protected domain = "perception";

  protected getActivityType(input: GeneratorInput): string {
    if (isEarlyChildhood(input.grade)) {
      if (input.subject === 'trilha-cores-formas') {
        return Math.random() < 0.5 ? 'ei-find-shape' : 'ei-find-color';
      }
    }
    if (input.difficulty < 0.5) return "visual-search";
    return "auditory-discrimination";
  }

  protected getTitle(input: GeneratorInput): string {
    const type = this.getActivityType(input);
    if (type === 'ei-find-shape' || type === 'ei-find-color') return "Trilha das Cores e Formas";
    return type === "visual-search" ? "Olho de Lince" : "Ouvido Atento";
  }

  protected getInstruction(input: GeneratorInput): string {
    const type = this.getActivityType(input);
    if (type === 'ei-find-shape') return "Encontre o desenho correto!";
    if (type === 'ei-find-color') return "Qual é a cor deste objeto?";
    return type === "visual-search" 
      ? "Encontre o objeto escondido." 
      : "Ouça o som e identifique o animal.";
  }

  protected generateContent(input: GeneratorInput): any {
    const type = this.getActivityType(input);
    
    if (type === 'ei-find-shape') {
      const item = this.pickRandom(EARLY_CHILDHOOD.formas_cores.formas);
      const options = this.shuffle(EARLY_CHILDHOOD.formas_cores.formas.map(f => f.nome));
      return {
        q: `Onde está o ${item.nome}?`,
        visual: item.visual,
        answer: item.nome,
        options,
        miniGameType: "bubbles",
        bncc_code: item.code
      };
    }

    if (type === 'ei-find-color') {
      const item = this.pickRandom(EARLY_CHILDHOOD.formas_cores.cores);
      const options = this.shuffle(EARLY_CHILDHOOD.formas_cores.cores.map(c => c.nome));
      return {
        q: `Qual é a cor deste objeto?`,
        visual: item.visual,
        hex: item.hex,
        answer: item.nome,
        options,
        miniGameType: "bubbles",
        bncc_code: item.code
      };
    }

    if (type === "visual-search") {
      const distractorsCount = Math.floor(input.difficulty * 20) + 5;
      const target = { id: 'target', type: 'star', color: 'gold' };
      const distractors = Array.from({ length: distractorsCount }, (_, i) => ({
        id: `d_${i}`,
        type: this.pickRandom(['circle', 'square', 'triangle']),
        color: this.pickRandom(['red', 'blue', 'green']),
        x: Math.random() * 90 + 5,
        y: Math.random() * 90 + 5,
      }));
      
      return { 
        target: { ...target, x: Math.random() * 90 + 5, y: Math.random() * 90 + 5 },
        distractors 
      };
    }

    // Auditory
    const animals = [
      { name: 'Gato', sound: 'meow', icon: '🐱' },
      { name: 'Cachorro', sound: 'woof', icon: '🐶' },
      { name: 'Pato', sound: 'quack', icon: '🦆' },
      { name: 'Vaca', sound: 'moo', icon: '🐮' }
    ];
    const target = this.pickRandom(animals);
    const options = this.shuffle([...animals]);
    
    return { target, options };
  }
}
