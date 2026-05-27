import { BaseGenerator } from "./BaseGenerator";
import { GeneratorInput } from "../../types/generator";
import { LINGUISTICS_DATA } from "./PedagogyData";

export class LinguisticsGenerator extends BaseGenerator {
  protected domain = "linguistics";

  protected getActivityType(input: GeneratorInput): string {
    if (input.difficulty < 0.3) return "phonemes";
    if (input.difficulty < 0.6) return "syllables";
    return "reading";
  }

  protected getTitle(input: GeneratorInput): string {
    const type = this.getActivityType(input);
    switch (type) {
      case "phonemes": return "Brincando com Sons";
      case "syllables": return "Aventura das Sílabas";
      case "reading": return "Mestre da Leitura";
      default: return "Desafio de Linguagem";
    }
  }

  protected getInstruction(input: GeneratorInput): string {
    const type = this.getActivityType(input);
    switch (type) {
      case "phonemes": return "Qual som começa esta palavra?";
      case "syllables": return "Complete a palavra com a sílaba correta.";
      case "reading": return "Leia a palavra e encontre a imagem correspondente.";
      default: return "Siga as instruções.";
    }
  }

  protected generateContent(input: GeneratorInput): any {
    const type = this.getActivityType(input);
    const difficultyLevel = input.difficulty < 0.5 ? 'beginner' : 'intermediate';
    const words = LINGUISTICS_DATA.words[difficultyLevel as keyof typeof LINGUISTICS_DATA.words];
    const targetWord = this.pickRandom(words);

    if (type === "phonemes") {
      const firstLetter = targetWord.word[0];
      const options = this.shuffle([
        firstLetter,
        ...this.pickNRandom(LINGUISTICS_DATA.consonants.filter(c => c !== firstLetter), 3)
      ]);
      return { targetWord, firstLetter, options };
    }

    if (type === "syllables") {
      const missingSyllableIndex = Math.floor(Math.random() * targetWord.syllables.length);
      const missingSyllable = targetWord.syllables[missingSyllableIndex];
      const options = this.shuffle([
        missingSyllable,
        ...this.pickNRandom(LINGUISTICS_DATA.simpleSyllables.filter(s => s !== missingSyllable), 3)
      ]);
      return { 
        targetWord, 
        syllables: targetWord.syllables.map((s, i) => i === missingSyllableIndex ? null : s),
        missingSyllable,
        options 
      };
    }

    // Reading
    const distractors = this.pickNRandom(words.filter(w => w.word !== targetWord.word), 3);
    const options = this.shuffle([targetWord, ...distractors]);
    return { targetWord, options };
  }
}
