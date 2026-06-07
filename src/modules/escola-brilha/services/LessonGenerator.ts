
import { Lesson, LessonStep } from '../types/lesson';
import { WORD_BANK, MATH_BANK, SENTENCE_BANK, Word } from '../data/content-banks';
import { StudentProgressService } from './StudentProgressService';

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
      const modelType = Math.floor(Math.random() * 5); // 0-4
      
      if (modelType === 0) {
        // Primeira Sílaba
        steps.push({
          id: `lp05-first-${index}`,
          phase: 'practice',
          type: 'interaction',
          mascot: 'pipa',
          speech: `Qual é a primeira sílaba de ${word.text}?`,
          elements: [{ id: `el-${index}`, type: 'text', content: word.emoji || word.text, position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
          interaction: {
            type: 'click',
            correctAnswer: word.syllables[0],
            options: this.shuffle([word.syllables[0], 'BO', 'PA', 'MA'].filter(s => s !== word.syllables[0])).slice(0, 2).concat(word.syllables[0])
          }
        });
      } else if (modelType === 1) {
        // Última Sílaba
        const lastIndex = word.syllables.length - 1;
        steps.push({
          id: `lp05-last-${index}`,
          phase: 'practice',
          type: 'interaction',
          mascot: 'pip',
          speech: `Qual é a última sílaba de ${word.text}?`,
          elements: [{ id: `el-${index}`, type: 'text', content: word.emoji || word.text, position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
          interaction: {
            type: 'click',
            correctAnswer: word.syllables[lastIndex],
            options: this.shuffle([word.syllables[lastIndex], 'TO', 'LA', 'CA'].filter(s => s !== word.syllables[lastIndex])).slice(0, 2).concat(word.syllables[lastIndex])
          }
        });
      } else if (modelType === 2) {
        // Completar palavra (Falta a primeira sílaba)
        const partial = '_ ' + word.syllables.slice(1).join(' ');
        steps.push({
          id: `lp05-comp-${index}`,
          phase: 'challenge',
          type: 'interaction',
          mascot: 'pipa',
          speech: `Complete a palavra ${word.text}!`,
          elements: [
            { id: `img-${index}`, type: 'text', content: word.emoji || '?', position: { x: 0, y: -40 }, animation: 'pop', delay: 0.1 },
            { id: `txt-${index}`, type: 'text', content: partial, position: { x: 0, y: 40 }, animation: 'fade', delay: 0.3 }
          ],
          interaction: {
            type: 'click',
            correctAnswer: word.syllables[0],
            options: this.shuffle([word.syllables[0], 'BA', 'CA', 'DA'].filter(s => s !== word.syllables[0])).slice(0, 2).concat(word.syllables[0])
          }
        });
      } else if (modelType === 3) {
        // Escolher imagem correta
        const distractor = this.getRandomItems(WORD_BANK.filter(w => w.text !== word.text), 2);
        steps.push({
          id: `lp05-img-${index}`,
          phase: 'practice',
          type: 'interaction',
          mascot: 'pip',
          speech: `Onde está o ${word.text}?`,
          elements: [{ id: `txt-${index}`, type: 'text', content: word.text, position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
          interaction: {
            type: 'click',
            correctAnswer: word.emoji || word.text,
            options: this.shuffle([word.emoji || word.text, distractor[0].emoji || distractor[0].text, distractor[1].emoji || distractor[1].text])
          }
        });
      } else {
        // Separação silábica (Demonstração interativa)
        steps.push({
          id: `lp05-sep-${index}`,
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
      const modelType = Math.floor(Math.random() * 5); // 0-4

      if (modelType === 0) {
        // Adição Visual
        steps.push({
          id: `ma06-add-${index}`,
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
      } else if (modelType === 1) {
        // Contagem
        const count = Math.floor(Math.random() * 5) + 1;
        steps.push({
          id: `ma06-count-${index}`,
          phase: 'practice',
          type: 'interaction',
          mascot: 'pip',
          speech: `Quantas maçãs você vê?`,
          elements: Array.from({ length: count }).map((_, i) => ({
            id: `apple-${index}-${i}`,
            type: 'text',
            content: '🍎',
            position: { x: (i - (count-1)/2) * 50, y: 0 },
            animation: 'pop',
            delay: 0.1 * i
          })),
          interaction: {
            type: 'click',
            correctAnswer: count.toString(),
            options: this.shuffle([count.toString(), (count + 1).toString(), (count - 1).toString()].filter(v => parseInt(v) > 0))
          }
        });
      } else if (modelType === 2) {
        // Sequência numérica
        const start = Math.floor(Math.random() * 5) + 1;
        steps.push({
          id: `ma06-seq-${index}`,
          phase: 'practice',
          type: 'interaction',
          mascot: 'pipa',
          speech: `Qual número vem depois do ${start + 1}?`,
          elements: [{ id: `seq-${index}`, type: 'text', content: `${start}, ${start+1}, ?`, position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
          interaction: {
            type: 'click',
            correctAnswer: (start + 2).toString(),
            options: this.shuffle([(start + 2).toString(), (start + 3).toString(), (start + 4).toString()])
          }
        });
      } else if (modelType === 3) {
        // Comparação (Qual é maior?)
        const v1 = Math.floor(Math.random() * 10);
        const v2 = Math.floor(Math.random() * 10);
        if (v1 === v2) { v1 > 5 ? v1 - 1 : v1 + 1; }
        const max = Math.max(v1, v2);
        steps.push({
          id: `ma06-comp-${index}`,
          phase: 'practice',
          type: 'interaction',
          mascot: 'pip',
          speech: `Qual número é maior?`,
          elements: [
            { id: `v1-${index}`, type: 'text', content: v1.toString(), position: { x: -60, y: 0 }, animation: 'pop', delay: 0.2 },
            { id: `v2-${index}`, type: 'text', content: v2.toString(), position: { x: 60, y: 0 }, animation: 'pop', delay: 0.4 }
          ],
          interaction: {
            type: 'click',
            correctAnswer: max.toString(),
            options: [v1.toString(), v2.toString()]
          }
        });
      } else {
        // Subtração Simples
        const sub = MATH_BANK.simple_subtraction[Math.floor(Math.random() * MATH_BANK.simple_subtraction.length)];
        steps.push({
          id: `ma06-sub-${index}`,
          phase: 'practice',
          type: 'interaction',
          mascot: 'pipa',
          speech: `Se eu tinha ${sub.a} e perdi ${sub.b}, com quanto fiquei?`,
          elements: [{ id: `sub-${index}`, type: 'text', content: `${sub.a} - ${sub.b} = ?`, position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
          interaction: {
            type: 'click',
            correctAnswer: sub.result.toString(),
            options: this.shuffle([sub.result.toString(), (sub.result + 1).toString(), (sub.result - 1).toString()].filter(v => parseInt(v) >= 0))
          }
        });
      }
    });

    return {
      id: `gen-ef01ma06-${Date.now()}`,
      title: 'Somando com Pip e Pipa',
      bncc_field: 'espacos_tempos',
      skill_bncc: 'EF01MA06',
      steps
    };
  }

  /**
   * Ciclo C: 3º ao 5º Ano.
   * Foco em Interpretação, Operações complexas.
   */
  static generateCycleC(category: string, count: number = 6): Lesson {
    const isMath = category.includes('matematica');
    const steps: LessonStep[] = [];

    for (let i = 0; i < count; i++) {
      if (isMath) {
        const val1 = Math.floor(Math.random() * 50) + 10;
        const val2 = Math.floor(Math.random() * 10) + 2;
        const model = Math.random() > 0.5 ? 'multi' : 'div';
        
        if (model === 'multi') {
          steps.push({
            id: `c-math-${i}`,
            phase: 'practice',
            type: 'interaction',
            mascot: 'pip',
            speech: `Resolva o desafio: ${val1} x ${val2}`,
            elements: [{ id: `el-${i}`, type: 'text', content: `${val1} x ${val2} = ?`, position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
            interaction: {
              type: 'click',
              correctAnswer: (val1 * val2).toString(),
              options: this.shuffle([(val1 * val2).toString(), (val1 * val2 + 10).toString(), (val1 * val2 - 5).toString()])
            }
          });
        } else {
          const divResult = Math.floor(Math.random() * 10) + 2;
          const divisor = Math.floor(Math.random() * 5) + 2;
          const dividend = divResult * divisor;
          steps.push({
            id: `c-math-${i}`,
            phase: 'practice',
            type: 'interaction',
            mascot: 'pipa',
            speech: `Se dividirmos ${dividend} por ${divisor}, quanto teremos?`,
            elements: [{ id: `el-${i}`, type: 'text', content: `${dividend} ÷ ${divisor} = ?`, position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
            interaction: {
              type: 'click',
              correctAnswer: divResult.toString(),
              options: this.shuffle([divResult.toString(), (divResult + 1).toString(), (divResult - 1).toString()])
            }
          });
        }
      } else {
        // Português Ciclo C
        const word = this.getRandomItems(WORD_BANK.filter(w => w.text.length > 5), 1)[0];
        steps.push({
          id: `c-port-${i}`,
          phase: 'practice',
          type: 'interaction',
          mascot: 'pipa',
          speech: `Quantas sílabas tem a palavra ${word.text}?`,
          elements: [{ id: `el-${i}`, type: 'text', content: word.text, position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
          interaction: {
            type: 'click',
            correctAnswer: word.syllables.length.toString(),
            options: ['2', '3', '4', '5']
          }
        });
      }
    }

    return {
      id: `gen-cycleC-${Date.now()}`,
      title: `Desafios do Ciclo C - ${isMath ? 'Matemática' : 'Português'}`,
      bncc_field: isMath ? 'espacos_tempos' : 'escuta_fala',
      steps
    };
  }

  /**
   * Interface Moderna: 6º ao 9º Ano.
   * Foco em Álgebra, Interpretação Crítica.
   */
  static generateModern(category: string, count: number = 8): Lesson {
    const isMath = category.includes('matematica');
    const steps: LessonStep[] = [];

    for (let i = 0; i < count; i++) {
      if (isMath) {
        // Álgebra básica: x + a = b
        const a = Math.floor(Math.random() * 20) + 1;
        const x = Math.floor(Math.random() * 20) + 1;
        const b = x + a;
        steps.push({
          id: `mod-math-${i}`,
          phase: 'practice',
          type: 'interaction',
          mascot: 'pip',
          speech: `Encontre o valor de X na equação: X + ${a} = ${b}`,
          elements: [{ id: `el-${i}`, type: 'text', content: `X + ${a} = ${b}`, position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
          interaction: {
            type: 'click',
            correctAnswer: x.toString(),
            options: this.shuffle([x.toString(), (x + 2).toString(), (x - 2).toString()])
          }
        });
      } else {
        // Português Moderno (Interpretação)
        steps.push({
          id: `mod-port-${i}`,
          phase: 'practice',
          type: 'interaction',
          mascot: 'pipa',
          speech: `Qual é o objetivo principal de um texto dissertativo?`,
          interaction: {
            type: 'click',
            correctAnswer: 'Defender uma ideia',
            options: this.shuffle(['Defender uma ideia', 'Contar uma história', 'Ensinar uma receita'])
          }
        });
      }
    }

    return {
      id: `gen-modern-${Date.now()}`,
      title: `Plataforma de Aprendizagem - ${isMath ? 'Matemática' : 'Português'}`,
      bncc_field: isMath ? 'espacos_tempos' : 'escuta_fala',
      steps
    };
  }

  static generateByCategory(category: string): Lesson {
    const mastery = StudentProgressService.getMastery(category); // Usando categoria como chave simplificada
    const difficultyMultiplier = Math.floor(mastery.score / 25); // 0 to 4
    const count = 5 + difficultyMultiplier;

    if (['portugues_3ano', 'matematica_3ano', 'portugues_4ano', 'matematica_4ano', 'portugues_5ano', 'matematica_5ano', 'ano3_5'].includes(category)) {
      return this.generateCycleC(category, count);
    }
    
    if (['portugues_6ano', 'matematica_6ano', 'portugues_7ano', 'matematica_7ano', 'portugues_8ano', 'matematica_8ano', 'portugues_9ano', 'matematica_9ano', 'fundamental2'].includes(category)) {
      return this.generateModern(category, count + 2);
    }

    switch (category) {
      case 'portugues':
      case 'portugues_1ano':
        return this.generateEF01LP05(count);
      case 'matematica':
        return this.generateEF01MA06(count);
      case 'portugues_2ano':
        return this.generateEF01LP05(count + 2); 
      case 'matematica_2ano':
        return this.generateEF01MA06(count + 2);
      default:
        return this.generateEF01LP05(count);
    }
  }
}

