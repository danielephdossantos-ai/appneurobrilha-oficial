
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
   * MÉTODO CRA: Concreto -> Representacional -> Abstrato
   * Matemática 2º ao 9º Ano.
   */
  static generateCRAMath(category: string, count: number = 5): Lesson {
    const steps: LessonStep[] = [];
    const isBasic = ['matematica', 'matematica_2ano'].includes(category);
    
    for (let i = 0; i < count; i++) {
      const val1 = Math.floor(Math.random() * (isBasic ? 5 : 10)) + 1;
      const val2 = Math.floor(Math.random() * (isBasic ? 5 : 10)) + 1;
      const result = val1 + val2;
      const emoji = this.shuffle(['🍎', '⭐', '🐶', '⚽', '🍬'])[0];

      // FASE 1: Problema Visual (Concreto)
      steps.push({
        id: `math-c-${i}`,
        phase: 'explanation',
        type: 'explanation',
        mascot: 'pip',
        speech: `Observe estes grupos. Quantas estrelas existem ao todo?`,
        elements: [
          ...Array.from({ length: val1 }).map((_, idx) => ({
            id: `v1-${i}-${idx}`, type: 'text' as const, content: emoji,
            position: { x: -60, y: (idx - (val1-1)/2) * 30 }, animation: 'pop' as const, delay: 0.1 * idx
          })),
          { id: `plus-${i}`, type: 'text', content: '+', position: { x: 0, y: 0 }, animation: 'fade', delay: 0.5 },
          ...Array.from({ length: val2 }).map((_, idx) => ({
            id: `v2-${i}-${idx}`, type: 'text' as const, content: emoji,
            position: { x: 60, y: (idx - (val2-1)/2) * 30 }, animation: 'pop' as const, delay: 0.1 * idx + 0.6
          }))
        ]
      });

      // FASE 2: Descoberta (Interaction)
      steps.push({
        id: `math-d-${i}`,
        phase: 'practice',
        type: 'interaction',
        mascot: 'pipa',
        speech: `Tente responder: quantas figuras temos agora?`,
        interaction: {
          type: 'click',
          correctAnswer: result.toString(),
          options: this.shuffle([result.toString(), (result + 1).toString(), (result - 1).toString()])
        }
      });

      // FASE 3: Explicação (Estratégia/Representacional)
      steps.push({
        id: `math-e-${i}`,
        phase: 'demonstration',
        type: 'demonstration',
        mascot: 'pip',
        speech: `Veja a estratégia: somamos ${val1} unidades com ${val2} unidades, o que resulta em ${result}.`,
        elements: [
          { id: `rep-1`, type: 'text', content: `${val1}`, position: { x: -60, y: 0 }, animation: 'bounce', delay: 0.2 },
          { id: `rep-p`, type: 'text', content: '+', position: { x: 0, y: 0 }, animation: 'fade', delay: 0.4 },
          { id: `rep-2`, type: 'text', content: `${val2}`, position: { x: 60, y: 0 }, animation: 'bounce', delay: 0.6 },
          { id: `rep-e`, type: 'text', content: `= ${result}`, position: { x: 0, y: 60 }, animation: 'pop', delay: 1.0 }
        ]
      });
    }

    // FASE 4-5: Treino e Desafio (Abstrato/Simbólico)
    for (let i = 0; i < 3; i++) {
      const a = Math.floor(Math.random() * 20) + 1;
      const b = Math.floor(Math.random() * 20) + 1;
      steps.push({
        id: `math-a-${i}`,
        phase: i === 2 ? 'challenge' : 'practice',
        type: 'interaction',
        mascot: 'pipa',
        speech: i === 2 ? `DESAFIO: Resolva esta operação simbólica!` : `Agora no modo abstrato: quanto é ${a} + ${b}?`,
        elements: [{ id: `abs-${i}`, type: 'text', content: `${a} + ${b} = ?`, position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
        interaction: {
          type: 'click',
          correctAnswer: (a + b).toString(),
          options: this.shuffle([(a + b).toString(), (a + b + 2).toString(), (a + b - 1).toString()])
        }
      });
    }

    return {
      id: `gen-math-cra-${Date.now()}`,
      title: 'Matemática CRA',
      bncc_field: 'espacos_tempos',
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
   * Flow: MISSÃO -> DESCOBERTA -> PRÁTICA -> DESAFIO
   */
  static generateModern(category: string, count: number = 8): Lesson {
    const isMath = category.includes('matematica');
    const steps: LessonStep[] = [];

    // 1. MISSÃO (Início)
    steps.push({
      id: `mod-mission-${Date.now()}`,
      phase: 'explanation',
      type: 'explanation',
      mascot: 'pip',
      speech: isMath ? 'Missão: Descubra o valor oculto de X. Você está pronto?' : 'Missão: Você consegue identificar as causas principais deste evento histórico?',
      elements: [{ id: 'mission-title', type: 'text', content: '🎯 MISSÃO ATIVADA', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.1 }]
    });

    // 2. DESCOBERTA
    steps.push({
      id: `mod-discovery-${Date.now()}`,
      phase: 'demonstration',
      type: 'demonstration',
      mascot: 'pipa',
      speech: isMath ? 'Observe como as variáveis se comportam em uma equação.' : 'Explore os documentos e identifique os pontos-chave.',
      elements: [{ id: 'discovery-content', type: 'text', content: isMath ? 'X + 10 = 25' : '📜 Documento Histórico: A Independência', position: { x: 0, y: 0 }, animation: 'fade', delay: 0.2 }]
    });

    // 3. PRÁTICA (Several steps)
    for (let i = 0; i < Math.floor(count / 2); i++) {
      if (isMath) {
        const a = Math.floor(Math.random() * 20) + 1;
        const x = Math.floor(Math.random() * 20) + 1;
        const b = x + a;
        steps.push({
          id: `mod-math-practice-${i}`,
          phase: 'practice',
          type: 'interaction',
          mascot: 'pip',
          speech: `Prática: Resolva X + ${a} = ${b}`,
          elements: [{ id: `el-p-${i}`, type: 'text', content: `X + ${a} = ${b}`, position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
          interaction: {
            type: 'click',
            correctAnswer: x.toString(),
            options: this.shuffle([x.toString(), (x + 2).toString(), (x - 2).toString()])
          }
        });
      } else {
        steps.push({
          id: `mod-port-practice-${i}`,
          phase: 'practice',
          type: 'interaction',
          mascot: 'pipa',
          speech: `Analise: Qual é o argumento central deste parágrafo?`,
          interaction: {
            type: 'click',
            correctAnswer: 'A liberdade econômica',
            options: this.shuffle(['A liberdade econômica', 'A beleza das artes', 'O clima da região'])
          }
        });
      }
    }

    // 4. DESAFIO (Final)
    steps.push({
      id: `mod-challenge-${Date.now()}`,
      phase: 'challenge',
      type: 'interaction',
      mascot: 'pip',
      speech: 'DESAFIO FINAL: Aplique tudo o que você aprendeu agora!',
      elements: [{ id: 'challenge-icon', type: 'text', content: '🔥 DESAFIO', position: { x: 0, y: -40 }, animation: 'pop', delay: 0.1 }],
      interaction: {
        type: 'click',
        correctAnswer: 'Concluído',
        options: ['Concluído', 'Tentar depois']
      }
    });

    return {
      id: `gen-modern-${Date.now()}`,
      title: `Plataforma de Aprendizagem - ${isMath ? 'Matemática' : 'Português'}`,
      bncc_field: isMath ? 'espacos_tempos' : 'escuta_fala',
      steps
    };
  }

  static generateByCategory(category: string): Lesson {
    const mastery = StudentProgressService.getMastery(category); 
    const difficultyMultiplier = Math.floor(mastery.score / 25); 
    const count = 5 + difficultyMultiplier;

    if (category.includes('matematica')) {
      return this.generateCRAMath(category, count);
    }

    if (['portugues_3ano', 'portugues_4ano', 'portugues_5ano', 'ano3_5'].includes(category)) {
      return this.generateCycleC(category, count);
    }
    
    if (['portugues_6ano', 'portugues_7ano', 'portugues_8ano', 'portugues_9ano', 'fundamental2'].includes(category)) {
      return this.generateModern(category, count + 2);
    }

    switch (category) {
      case 'portugues':
      case 'portugues_1ano':
        return this.generateEF01LP05(count);
      case 'matematica':
        return this.generateCRAMath(category, count);
      case 'portugues_2ano':
        return this.generateEF01LP05(count + 2); 
      case 'matematica_2ano':
        return this.generateCRAMath(category, count + 2);
      default:
        return this.generateEF01LP05(count);
    }
  }
}

