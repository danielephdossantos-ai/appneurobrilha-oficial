import { BaseGenerator } from "./BaseGenerator";
import { GeneratorInput } from "../../types/generator";
import { LINGUISTICS_DATA, EARLY_CHILDHOOD, isEarlyChildhood } from "./PedagogyData";

export class LinguisticsGenerator extends BaseGenerator {
  protected domain = "linguistics";

  protected getActivityType(input: GeneratorInput): string {
    if (isEarlyChildhood(input.grade)) {
      if (input.subject === 'ciencias') return 'ei-animal';
      const r = Math.random();
      if (r < 0.5) return 'ei-vogal';
      return 'ei-animal';
    }
    // SÉRIE define o tipo de atividade — NUNCA misturar séries.
    const gradeNum = parseInt(input.grade?.replace(/\D/g, '') || "1");
    if (gradeNum >= 6) return "interpretation";
    if (gradeNum <= 1) return "phonemes";
    if (gradeNum <= 3) return "syllables";
    return "reading"; // 4º e 5º
  }

  // Nível lexical estritamente por série
  private wordLevelForGrade(gradeNum: number): 'beginner' | 'intermediate' | 'advanced' {
    if (gradeNum <= 2) return 'beginner';
    if (gradeNum <= 4) return 'intermediate';
    return 'advanced';
  }

  protected getTitle(input: GeneratorInput): string {
    const type = this.getActivityType(input);
    switch (type) {
      case "ei-vogal": return "As Vogais Mágicas";
      case "ei-animal": return "Bichinhos da Fazenda";
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
      case "ei-vogal": return "Olha a figura! Com qual vogal essa palavra começa?";
      case "ei-animal": return "Qual é o nome desse bichinho?";
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
        const v = this.pickRandom(EARLY_CHILDHOOD.vowels);
        const wrongs = this.pickNRandom(
          EARLY_CHILDHOOD.vowels.filter(x => x.letter !== v.letter),
          2
        ).map(x => x.letter);
        const options = this.shuffle([v.letter, ...wrongs]);
        return {
          q: `${v.emoji}  ${v.exemplo}  — Com qual vogal começa?`,
          visual: v.emoji,
          exemplo: v.exemplo,
          answer: v.letter,
          options,
        };
      }

      if (type === 'ei-animal') {
        const a = this.pickRandom(EARLY_CHILDHOOD.animais);
        const relacionados = a.relacionados || [];
        const options = this.shuffle([
          ...relacionados.map((r: any) => ({ ...r, correct: true })),
          { ...a.intruso, correct: false }
        ]);
        return {
          q: `${a.emoji} O que o ${a.nome} gosta?`,
          visual: a.emoji,
          palavra: a.nome,
          som: a.som,
          answer: relacionados.map((r: any) => r.n).join(","), // multiple correct answers logically
          options, // options are now objects {e, n, correct}
        };
      }

      const gradeNum = parseInt(input.grade?.replace(/\D/g, '') || "1");

      if (type === "interpretation") {
        // 6º-8º → grade6 ; 9º → grade9 (estrito por série)
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
          syllables: targetWord.syllables.map((s: string, i: number) => i === missingSyllableIndex ? null : s),
          missingSyllable,
          options
        };
      }

      // Reading
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
