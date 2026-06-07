
import { Lesson, LessonStep } from '../types/lesson';
import { WORD_BANK, MATH_BANK, SENTENCE_BANK, Word } from '../data/content-banks';

export class LessonGenerator {
  
  private static shuffle<T>(array: T[]): T[] {
    return [...array].sort(() => Math.random() - 0.5);
  }

  private static getRandomItems<T>(array: T[], count: number): T[] {
    return this.shuffle(array).slice(0, count);
  }

  /**
   * EF01LP05: Reconhecer sistema de escrita alfabética.
   * Modelos: Primeira sílaba, Última sílaba, Separação silábica.
   */
  static generateEF01LP05(count: number = 5): Lesson {
    const words = this.getRandomItems(WORD_BANK.filter(w => w.syllables.length >= 2), count);
    const steps: LessonStep[] = [];

    words.forEach((word, index) => {
      const modelType = Math.floor(Math.random() * 3); // 0, 1, 2
      
      if (modelType === 0) {
        // Primeira Sílaba
        steps.push({
          id: `lp05-${index}`,
          phase: 'practice',
          type: 'interaction',
          mascot: Math.random() > 0.5 ? 'pip' : 'pipa',
          speech: `Qual é a primeira sílaba de ${word.text}?`,
          elements: [{ id: `el-${index}`, type: 'text', content: word.emoji || word.text, position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
          interaction: {
            type: 'click',
            correctAnswer: word.syllables[0],
            options: this.shuffle([word.syllables[0], 'BO', 'PA', 'MA'].filter((v, i, a) => a.indexOf(v) === i)).slice(0, 3)
          }
        });
      } else if (modelType === 1) {
        // Última Sílaba
        const lastIndex = word.syllables.length - 1;
        steps.push({
          id: `lp05-${index}`,
          phase: 'practice',
          type: 'interaction',
          mascot: Math.random() > 0.5 ? 'pip' : 'pipa',
          speech: `Qual é a última sílaba de ${word.text}?`,
          elements: [{ id: `el-${index}`, type: 'text', content: word.emoji || word.text, position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
          interaction: {
            type: 'click',
            correctAnswer: word.syllables[lastIndex],
            options: this.shuffle([word.syllables[lastIndex], 'TO', 'LA', 'CA'].filter((v, i, a) => a.indexOf(v) === i)).slice(0, 3)
          }
        });
      } else {
        // Separação silábica (Demonstração)
        steps.push({
          id: `lp05-${index}`,
          phase: 'demonstration',
          type: 'demonstration',
          mascot: 'pip',
          speech: `Vamos separar as sílabas de ${word.text}!`,
          elements: word.syllables.map((syl, i) => ({
            id: `syl-${index}-${i}`,
            type: 'text',
            content: syl,
            position: { x: (i - (word.syllables.length-1)/2) * 80, y: 0 },
            animation: 'bounce',
            delay: 0.2 * (i + 1)
          }))
        });
      }
    });

    return {
      id: `gen-ef01lp05-${Date.now()}`,
      title: 'Desafio das Sílabas',
      bncc_field: 'escuta_fala',
      skill_bncc: 'EF01LP05',
      steps
    };
  }

  /**
   * EF01MA06: Construir fatos básicos da adição.
   */
  static generateEF01MA06(count: number = 5): Lesson {
    const items = this.getRandomItems(MATH_BANK.simple_addition, count);
    const steps: LessonStep[] = [];

    items.forEach((item, index) => {
      steps.push({
        id: `ma06-${index}`,
        phase: 'practice',
        type: 'interaction',
        mascot: 'pipa',
        speech: `Quanto é ${item.a} mais ${item.b}?`,
        elements: [
          { id: `op-${index}`, type: 'text', content: `${item.a} + ${item.b} = ?`, position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }
        ],
        interaction: {
          type: 'click',
          correctAnswer: item.result.toString(),
          options: this.shuffle([item.result.toString(), (item.result + 1).toString(), (item.result - 1).toString()])
        }
      });
    });

    return {
      id: `gen-ef01ma06-${Date.now()}`,
      title: 'Somando com Pip e Pipa',
      bncc_field: 'espacos_tempos',
      skill_bncc: 'EF01MA06',
      steps
    };
  }

  static generateByCategory(category: string): Lesson {
    switch (category) {
      case 'portugues':
      case 'portugues_1ano':
        return this.generateEF01LP05();
      case 'matematica':
        return this.generateEF01MA06();
      case 'portugues_2ano':
        return this.generateEF01LP05(7); // Dificuldade um pouco maior
      case 'matematica_2ano':
        return this.generateEF01MA06(7);
      default:
        // Fallback para uma lição genérica ou a lição de rimas original
        return this.generateEF01LP05(3);
    }
  }
}
