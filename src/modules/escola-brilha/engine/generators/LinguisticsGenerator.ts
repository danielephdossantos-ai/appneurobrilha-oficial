import { BaseGenerator } from "./BaseGenerator";
import { GeneratorInput } from "../../types/generator";
import { LINGUISTICS_DATA, EARLY_CHILDHOOD, ALPHABETIZATION_DATA, isEarlyChildhood } from "./PedagogyData";

export class LinguisticsGenerator extends BaseGenerator {
  protected domain = "linguistics";

  protected getActivityType(input: GeneratorInput): string {
    if (isEarlyChildhood(input.grade)) {
      if (input.subject === 'trilha-palavras') {
        const r = Math.random();
        if (r < 0.25) return 'ei-vogal';
        if (r < 0.5) return 'ei-drag-letter';
        if (r < 0.75) return 'ei-animal-sound';
        return 'ei-rimas';
      }
      const r = Math.random();
      if (r < 0.33) return 'ei-vogal';
      if (r < 0.66) return 'ei-drag-letter';
      return 'ei-animal-sound';
    }
    const gradeNum = parseInt(input.grade?.replace(/\D/g, '') || "1");
    if (gradeNum >= 6) return "interpretation";
    if (input.grade?.includes("1º")) {
      const r = Math.random();
      if (r < 0.33) return 'alfa-syllable';
      if (r < 0.66) return 'alfa-complete';
      return 'alfa-reading';
    }
    if (gradeNum <= 1) return "phonemes";
    if (gradeNum <= 3) return "syllables";
    return "reading";
  }

  private wordLevelForGrade(gradeNum: number): 'beginner' | 'intermediate' | 'advanced' {
    if (gradeNum <= 2) return 'beginner';
    if (gradeNum <= 4) return 'intermediate';
    return 'advanced';
  }

  protected getTitle(input: GeneratorInput): string {
    const type = this.getActivityType(input);
    switch (type) {
      case "ei-vogal": return "Trilha das Palavras";
      case "ei-drag-letter": return "Trilha das Palavras";
      case "ei-animal-sound": return "Trilha das Palavras";
      case "ei-rimas": return "Trilha das Palavras";
      case "alfa-syllable": return "Cidade das Letras";
      case "alfa-complete": return "Cidade das Letras";
      case "alfa-reading": return "Cidade das Letras";
      case "phonemes": return "Brincando com Sons";
      case "syllables": return "Aventura das Sílabas";
      case "reading": return "Mestre da Leitura";
      case "interpretation": return "Analista de Textos";
      default: return "Desafio de Linguagem";
    }
  }

  protected getInstruction(input: GeneratorInput): string {
    const type = this.getActivityType(input);
    switch (type) {
      case "ei-vogal": return "Vamos procurar a letra A!";
      case "ei-drag-letter": return "Qual letra começa esta palavra?";
      case "ei-animal-sound": return "Ouça e escolha o animal correto.";
      case "alfa-syllable": return "Qual sílaba foi formada?";
      case "alfa-complete": return "Complete a palavra!";
      case "alfa-reading": return "Leitura Curta";
      case "phonemes": return "Qual som começa esta palavra?";
      case "syllables": return "Complete a palavra com a sílaba correta.";
      case "reading": return "Leia a palavra e encontre a imagem correspondente.";
      case "interpretation": return "Leia o trecho abaixo e responda à pergunta:";
      default: return "Siga as instruções.";
    }
  }

  protected generateContent(input: GeneratorInput): any {
    try {
      const type = this.getActivityType(input);

      // ===== EDUCAÇÃO INFANTIL =====
      if (type === 'ei-vogal') {
        // Encontre a Vogal (A among A, P, O)
        const v = EARLY_CHILDHOOD.linguagem.vowels[0]; // Letra A por padrão como solicitado
        const options = this.shuffle([v.letter, ...v.distractors]);
        return {
          q: "Vamos procurar a letra A!",
          visual: v.letter,
          answer: v.letter,
          options,
          miniGameType: "bubbles"
        };
      }

      if (type === 'ei-drag-letter') {
        // Arraste a Letra (BOLA)
        const w = EARLY_CHILDHOOD.linguagem.words[0]; // BOLA
        return {
          q: `Qual letra começa ${w.word}?`,
          visual: w.emoji,
          palavra: w.word,
          answer: w.startLetter,
          options: w.options,
          miniGameType: "bubbles"
        };
      }

      if (type === 'ei-animal-sound') {
        // Sons dos Animais (Vaca)
        const a = EARLY_CHILDHOOD.artes_sons.animais[0]; // VACA
        return {
          q: a.nome,
          visual: a.emoji,
          answer: a.answer,
          options: a.options,
          miniGameType: "bubbles"
        };
      }

      if (type === 'ei-rimas') {
        const item = this.pickRandom(EARLY_CHILDHOOD.linguagem.rimas);
        return {
          q: `${item.word} combina com...?`,
          visual: item.emoji,
          answer: item.answer,
          options: item.options,
          miniGameType: "bubbles"
        };
      }

      // ===== 1º ANO (ALFABETIZAÇÃO) =====
      if (type === 'alfa-syllable') {
        const item = this.pickRandom(ALPHABETIZATION_DATA.syllableFormation);
        return {
          q: `Qual sílaba forma ${item.parts.join(' + ')}?`,
          visual: item.parts.join(' + '),
          answer: item.result,
          options: this.shuffle([item.result, ...item.distractors]),
          miniGameType: "bubbles"
        };
      }

      if (type === 'alfa-complete') {
        const item = this.pickRandom(ALPHABETIZATION_DATA.completeWord);
        return {
          q: `Qual sílaba completa ${item.display}?`,
          visual: item.visual,
          answer: item.missing,
          options: this.shuffle([item.missing, ...item.distractors]),
          miniGameType: "bubbles"
        };
      }

      if (type === 'alfa-reading') {
        const item = this.pickRandom(ALPHABETIZATION_DATA.shortReading);
        return {
          q: item.text,
          visual: item.visual,
          question: item.question,
          answer: item.answer,
          options: item.options,
          miniGameType: "bubbles"
        };
      }

      const gradeNum = parseInt(input.grade?.replace(/\D/g, '') || "1");

      if (type === "interpretation") {
        const dataKey = gradeNum >= 9 ? 'grade9' : 'grade6';
        const set = LINGUISTICS_DATA.texts[dataKey as keyof typeof LINGUISTICS_DATA.texts];
        if (!set || set.length === 0) throw new Error(`No texts found for ${dataKey}`);
        return this.pickRandom(set);
      }

      const difficultyLevel = this.wordLevelForGrade(gradeNum);
      const words = LINGUISTICS_DATA.words[difficultyLevel as keyof typeof LINGUISTICS_DATA.words];
      if (!words || words.length === 0) throw new Error(`No words found for level ${difficultyLevel}`);

      const targetWord = this.pickRandom(words);

      if (type === "phonemes") {
        const targetWord = input.grade?.includes("1º") ? { word: "MALA", syllables: ["MA", "LA"], emoji: "👜" } : this.pickRandom(words);
        const firstLetter = targetWord.word[0];
        const options = this.shuffle([
          firstLetter,
          ...this.pickNRandom(LINGUISTICS_DATA.consonants.filter(c => c !== firstLetter), 3)
        ]);
        return { 
          targetWord, 
          firstLetter, 
          options,
          sound: `Som da letra ${firstLetter}`,
          exemplo_palavras: ["MALA", "MAMA", "MAPA"]
        };
      }

      if (type === "syllables") {
        const targetWord = input.grade?.includes("1º") ? { word: "MALA", syllables: ["MA", "LA"], emoji: "👜" } : this.pickRandom(words);
        const missingSyllableIndex = Math.floor(Math.random() * targetWord.syllables.length);
        const missingSyllable = targetWord.syllables[missingSyllableIndex];
        const options = this.shuffle([
          missingSyllable,
          ...this.pickNRandom(LINGUISTICS_DATA.simpleSyllables.filter(s => s !== missingSyllable), 3)
        ]);
        return {
          targetWord,
          syllables: targetWord.syllables.map((s: string, i: number) => i === missingSyllableIndex ? null : s),
          missingSyllable,
          options,
          combination: input.grade?.includes("1º") ? "M + A = MA" : undefined
        };
      }

      const distractors = this.pickNRandom(words.filter(w => w.word !== targetWord.word), 3);
      const options = this.shuffle([targetWord, ...distractors]);
      return { targetWord, options };
    } catch (e) {
      console.error("Error in LinguisticsGenerator:", e);
      return {
        word: "BOLA",
        options: ["BOLA", "CASA", "DADO", "FOCA"],
        answer: "BOLA"
      };
    }
  }
}
