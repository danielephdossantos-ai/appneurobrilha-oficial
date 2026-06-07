
import { Lesson, LessonStep } from '../types/lesson';
import { WORD_BANK, MATH_BANK, SENTENCE_BANK, Word } from '../data/content-banks';
import { ART_BANK, HISTORY_GEOGRAPHY_BANK, SCIENCE_BANK } from '../data/extra-banks';
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
      title: 'Mestre das Sílabas',
      mission_name: 'Descobrir Palavras',
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
    const isInfant = category.includes('_inf');
    const is1Ano = category.includes('1ano');
    const isBasic = isInfant || is1Ano || category === 'matematica' || category === 'portugues';
    const isCycleC = ['matematica_3ano', 'matematica_4ano', 'matematica_5ano'].includes(category);
    const isModern = ['matematica_6ano', 'matematica_7ano', 'matematica_8ano', 'matematica_9ano'].includes(category);
    
    // Para infantil/1ano, valores pequenos (max 5)
    const maxVal = isInfant ? 3 : (is1Ano || isBasic) ? 5 : isCycleC ? 12 : 20;
    const finalCount = isBasic ? 3 : count; // Menos passos para os pequenos

    const val1 = Math.floor(Math.random() * maxVal) + 1;
    const val2 = isInfant ? 0 : Math.floor(Math.random() * Math.min(maxVal - val1 + 1, maxVal)) + 1;
    
    const op = isCycleC ? 'x' : '+';
    const result = op === 'x' ? val1 * val2 : val1 + val2;
    const emoji = this.shuffle(['🍎', '⭐', '🐶', '⚽', '🍬', '💎', '🚀', '🚗', '🚜'])[0];

    // 1. CONCRETO (Visualização da Missão)
    if (isInfant || is1Ano) {
      steps.push({
        id: `math-inf-1`,
        phase: 'explanation',
        type: 'explanation',
        mascot: 'pip',
        speech: `Vamos contar os ${emoji}? Olhe com atenção!`,
        elements: Array.from({ length: val1 }).map((_, idx) => ({
          id: `v-inf-${idx}`, type: 'text', content: emoji,
          position: { x: (idx - (val1-1)/2) * 60, y: 0 }, animation: 'pop', delay: 0.2 * idx
        }))
      });
      
      steps.push({
        id: `math-inf-q`,
        phase: 'practice',
        type: 'interaction',
        mascot: 'pipa',
        speech: `Quantos ${emoji} você vê na tela?`,
        interaction: {
          type: 'click',
          correctAnswer: val1.toString(),
          options: this.shuffle([val1.toString(), (val1 + 1).toString(), (val1 - 1 > 0 ? val1 - 1 : val1 + 2).toString()]).slice(0, 3)
        }
      });
    } else {
      // Model CRA para Fundamental
      steps.push({
        id: `math-c-0`,
        phase: 'explanation',
        type: 'explanation',
        mascot: 'pip',
        speech: isModern ? `Missão: Vamos analisar a proporção deste grupo.` : 
                isBasic ? `Conte as figuras!` : `Observe estes grupos. Quantas figuras existem ao todo?`,
        elements: [
          ...Array.from({ length: val1 }).map((_, idx) => ({
            id: `v1-0-${idx}`, type: 'text' as const, content: emoji,
            position: { x: -60, y: (idx - (val1-1)/2) * 40 }, animation: 'pop' as const, delay: 0.1 * idx
          })),
          { id: `op-icon`, type: 'text', content: op, position: { x: 0, y: 0 }, animation: 'fade', delay: 0.5 },
          ...Array.from({ length: val2 }).map((_, idx) => ({
            id: `v2-0-${idx}`, type: 'text' as const, content: emoji,
            position: { x: 60, y: (idx - (val2-1)/2) * 40 }, animation: 'pop' as const, delay: 0.1 * idx + 0.6
          }))
        ]
      });

      steps.push({
        id: `math-d-0`,
        phase: 'practice',
        type: 'interaction',
        mascot: 'pipa',
        speech: isModern ? `Levante uma hipótese: qual seria o valor total equilibrado?` : `Tente responder: quanto temos no total?`,
        interaction: {
          type: 'click',
          correctAnswer: result.toString(),
          options: this.shuffle([result.toString(), (result + (isCycleC ? 5 : 1)).toString(), (result - (isCycleC ? 2 : 1)).toString()])
        }
      });

      steps.push({
        id: `math-e-0`,
        phase: 'demonstration',
        type: 'demonstration',
        mascot: 'pip',
        speech: `Estratégia: Representamos ${val1} ${op} ${val2}. Veja como chegamos em ${result}.`,
        elements: [
          { id: `rep-1`, type: 'text', content: `${val1}`, position: { x: -60, y: 0 }, animation: 'bounce', delay: 0.2 },
          { id: `rep-p`, type: 'text', content: op, position: { x: 0, y: 0 }, animation: 'fade', delay: 0.4 },
          { id: `rep-2`, type: 'text', content: `${val2}`, position: { x: 60, y: 0 }, animation: 'bounce', delay: 0.6 },
          { id: `rep-e`, type: 'text', content: `= ${result}`, position: { x: 0, y: 60 }, animation: 'pop', delay: 1.0 }
        ]
      });
    }

    // Treino (Prática)
    const practiceCount = isBasic ? 2 : finalCount;
    for (let i = 0; i < practiceCount; i++) {
      const a = Math.floor(Math.random() * (isModern ? 50 : is1Ano ? 5 : 10)) + 1;
      const b = isBasic ? 0 : Math.floor(Math.random() * (isModern ? 30 : is1Ano ? 3 : 10)) + 1;
      const currentOp = isCycleC || isModern ? (Math.random() > 0.5 ? 'x' : '+') : '+';
      const r = currentOp === 'x' ? a * b : a + b;

      if (isBasic) {
        steps.push({
          id: `math-inf-p-${i}`,
          phase: 'practice',
          type: 'interaction',
          mascot: 'pipa',
          speech: `Quantos são ${a}? Escolha o número!`,
          elements: Array.from({ length: a }).map((_, idx) => ({
            id: `v-inf-p-${i}-${idx}`, type: 'text', content: emoji,
            position: { x: (idx - (a-1)/2) * 50, y: 0 }, animation: 'pop', delay: 0.1 * idx
          })),
          interaction: {
            type: 'click',
            correctAnswer: a.toString(),
            options: this.shuffle([a.toString(), (a + 1).toString(), (a + 2).toString()]).slice(0, 3)
          }
        });
      } else {
        steps.push({
          id: `math-a-${i}`,
          phase: 'practice',
          type: 'interaction',
          mascot: 'pipa',
          speech: `Prática: Resolva ${a} ${currentOp} ${b}`,
          elements: [{ id: `abs-${i}`, type: 'text', content: `${a} ${currentOp} ${b} = ?`, position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
          interaction: {
            type: 'click',
            correctAnswer: r.toString(),
            options: this.shuffle([r.toString(), (r + 2).toString(), (r - 1 > 0 ? r - 1 : r + 3).toString()])
          }
        });
      }
    }

    return {
      id: `gen-math-cra-${Date.now()}`,
      title: isModern ? 'Lenda da Matemática' : isCycleC ? 'Gênio da Adição' : isBasic ? 'Primeiros Números' : 'Herói dos Números',
      mission_name: isModern ? 'O Valor de X' : isCycleC ? 'Somar Frutinhas' : isBasic ? 'Contar é Divertido' : 'Resgate Numérico',
      bncc_field: 'espacos_tempos',
      steps
    };
  }





  /**
   * Ciclo C: 3º ao 5º Ano.
   * Foco em Interpretação, Operações complexas.
   * PADRÃO PORTUGUÊS 2-9: Descoberta -> Exploração -> Explicação -> Treino -> Desafio -> Domínio
   */
  static generateCycleC(category: string, count: number = 6): Lesson {
    const isMath = category.includes('matematica');
    const steps: LessonStep[] = [];

    if (isMath) {
      return this.generateCRAMath(category, count);
    }

    // PORTUGUÊS CICLO C (3º-5º) - Padrão de Ensino
    const word = this.getRandomItems(WORD_BANK.filter(w => w.text.length > 5), 1)[0];
    
    // FASE 1: DESCOBERTA
    steps.push({
      id: `p-c-desc-${Date.now()}`, phase: 'explanation', type: 'explanation', mascot: 'pip',
      speech: `Você sabe o que esta palavra significa?`,
      elements: [{ id: 'word-desc', type: 'text', content: word.text, position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }]
    });

    // FASE 2: EXPLORAÇÃO
    steps.push({
      id: `p-c-explor-${Date.now()}`, phase: 'demonstration', type: 'demonstration', mascot: 'pipa',
      speech: `Observe a imagem e escute o som da palavra.`,
      elements: [{ id: 'word-img', type: 'text', content: word.emoji || '📖', position: { x: 0, y: 0 }, animation: 'bounce', delay: 0.3 }]
    });

    // FASE 3: EXPLICAÇÃO
    steps.push({
      id: `p-c-exp-${Date.now()}`, phase: 'explanation', type: 'explanation', mascot: 'pip',
      speech: `As palavras podem ter nomes para seus sons e significados. Vamos aprender!`,
      elements: [{ id: 'exp-txt', type: 'text', content: `${word.text} tem ${word.syllables.length} sílabas.`, position: { x: 0, y: 0 }, animation: 'fade', delay: 0.2 }]
    });

    // FASE 4: TREINO
    for (let i = 0; i < 3; i++) {
      const practiceWord = this.getRandomItems(WORD_BANK, 1)[0];
      steps.push({
        id: `p-c-train-${i}`, phase: 'practice', type: 'interaction', mascot: 'pipa',
        speech: `Quantas sílabas tem ${practiceWord.text}?`,
        elements: [{ id: `tr-${i}`, type: 'text', content: practiceWord.text, position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
        interaction: {
          type: 'click',
          correctAnswer: practiceWord.syllables.length.toString(),
          options: this.shuffle(['1', '2', '3', '4'])
        }
      });
    }

    // FASE 5: DESAFIO
    steps.push({
      id: `p-c-chal-${Date.now()}`, phase: 'challenge', type: 'interaction', mascot: 'pip',
      speech: `DESAFIO: Qual destas palavras combina mais com ${word.text}?`,
      interaction: {
        type: 'click',
        correctAnswer: word.text,
        options: this.shuffle([word.text, 'X', 'Y'])
      }
    });

    // FASE 6: DOMÍNIO
    steps.push({
      id: `p-c-dom-${Date.now()}`, phase: 'mastery', type: 'explanation', mascot: 'pipa',
      speech: `Incrível! Você dominou o significado e a estrutura desta palavra!`,
      elements: [{ id: 'dom-icon', type: 'text', content: '🏆', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.1 }]
    });

    return {
      id: `gen-port-c-${Date.now()}`,
      title: 'Mestre das Frases',
      mission_name: 'Escritor Criativo',
      bncc_field: 'escuta_fala',
      steps
    };
  }


  /**
   * Interface Moderna: 6º ao 9º Ano.
   * Flow: MISSÃO (Descoberta) -> DESCOBERTA (Exploração) -> EXPLICAÇÃO -> PRÁTICA (Treino) -> DESAFIO -> DOMÍNIO
   */
  static generateModern(category: string, count: number = 8): Lesson {
    const isMath = category.includes('matematica');
    const steps: LessonStep[] = [];

    // FASE 1: DESCOBERTA (Missão)
    steps.push({
      id: `mod-desc-${Date.now()}`, phase: 'explanation', type: 'explanation', mascot: 'pip',
      speech: isMath ? 'Missão: Descubra o valor oculto de X. Você está pronto?' : 'Desafio: Você consegue identificar o sentido conotativo nesta expressão?',
      elements: [{ id: 'mission-title', type: 'text', content: '🎯 MISSÃO ATIVADA', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.1 }]
    });

    // FASE 2: EXPLORAÇÃO (Descoberta)
    steps.push({
      id: `mod-explor-${Date.now()}`, phase: 'demonstration', type: 'demonstration', mascot: 'pipa',
      speech: isMath ? 'Observe como as variáveis se comportam em uma balança.' : 'Leia o exemplo e observe as imagens para entender o contexto.',
      elements: [{ id: 'expl-content', type: 'text', content: isMath ? 'X + 10 = 25' : '📖 "Ele tem um coração de ouro"', position: { x: 0, y: 0 }, animation: 'fade', delay: 0.2 }]
    });

    // FASE 3: EXPLICAÇÃO
    steps.push({
      id: `mod-exp-${Date.now()}`, phase: 'explanation', type: 'explanation', mascot: 'pip',
      speech: isMath ? 'Para isolar o X, invertemos a operação do outro lado.' : 'Linguagem figurada é quando usamos palavras fora do sentido literal.',
      elements: [{ id: 'exp-hint', type: 'text', content: isMath ? 'X = 25 - 10' : '✨ Sentido Figurado', position: { x: 0, y: 0 }, animation: 'bounce', delay: 0.2 }]
    });

    // FASE 4: TREINO (Prática)
    for (let i = 0; i < Math.floor(count / 2); i++) {
      if (isMath) {
        const a = Math.floor(Math.random() * 20) + 1;
        const x = Math.floor(Math.random() * 20) + 1;
        const b = x + a;
        steps.push({
          id: `mod-math-train-${i}`, phase: 'practice', type: 'interaction', mascot: 'pipa',
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
          id: `mod-port-train-${i}`, phase: 'practice', type: 'interaction', mascot: 'pipa',
          speech: `Analise: Qual é o sentido da palavra destacada?`,
          interaction: {
            type: 'click',
            correctAnswer: 'Figurado',
            options: this.shuffle(['Figurado', 'Literal', 'Dicionário'])
          }
        });
      }
    }

    // FASE 5: DESAFIO
    steps.push({
      id: `mod-chal-${Date.now()}`, phase: 'challenge', type: 'interaction', mascot: 'pip',
      speech: 'DESAFIO FINAL: Aplique tudo o que você aprendeu agora sem dicas!',
      elements: [{ id: 'challenge-icon', type: 'text', content: '🔥 DESAFIO', position: { x: 0, y: -40 }, animation: 'pop', delay: 0.1 }],
      interaction: {
        type: 'click',
        correctAnswer: 'Concluído',
        options: ['Concluído', 'Tentar depois']
      }
    });

    // FASE 6: DOMÍNIO
    steps.push({
      id: `mod-dom-${Date.now()}`, phase: 'mastery', type: 'explanation', mascot: 'pipa',
      speech: 'Parabéns! Você alcançou o domínio desta habilidade!',
      elements: [{ id: 'dom-star', type: 'text', content: '🌟', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.1 }]
    });

    return {
      id: `gen-modern-${Date.now()}`,
      title: isMath ? 'Lenda da Matemática' : 'Expert em Análise',
      mission_name: isMath ? 'O Valor de X' : 'O Código da Vírgula',
      bncc_field: isMath ? 'espacos_tempos' : 'escuta_fala',
      steps
    };
  }


  /**
   * Gerador Genérico para Ciências, História, Geografia e Artes
   */
  static generateSubjectLesson(category: string, count: number = 6): Lesson {
    const isHistory = category.includes('historia');
    const isGeography = category.includes('geografia');
    const isScience = category.includes('ciencias');
    const isArt = category.includes('artes');

    const bank = isScience ? SCIENCE_BANK : 
                 (isHistory || isGeography) ? HISTORY_GEOGRAPHY_BANK : 
                 ART_BANK;
    
    const items = this.getRandomItems(bank, Math.min(count, bank.length));
    const steps: LessonStep[] = [];

    // FASE 1: DESCOBERTA
    steps.push({
      id: `subj-desc-${Date.now()}`, phase: 'explanation', type: 'explanation', mascot: 'pip',
      speech: `Bem-vindo à Missão de ${isScience ? 'Ciências' : isHistory ? 'História' : isGeography ? 'Geografia' : 'Artes'}! Vamos explorar o mundo?`,
      elements: [{ id: 'subj-icon', type: 'text', content: items[0].emoji, position: { x: 0, y: 0 }, animation: 'pop', delay: 0.1 }]
    });

    // FASES DE PRÁTICA
    items.forEach((item, idx) => {
      steps.push({
        id: `subj-step-${idx}`,
        phase: idx === items.length - 1 ? 'challenge' : 'practice',
        type: 'interaction',
        mascot: idx % 2 === 0 ? 'pip' : 'pipa',
        speech: item.question,
        elements: [{ id: `subj-el-${idx}`, type: 'text', content: item.topic, position: { x: 0, y: -40 }, animation: 'fade', delay: 0.2 }],
        interaction: {
          type: 'click',
          correctAnswer: item.correct,
          options: this.shuffle(item.options)
        }
      });
    });

    // FASE FINAL: DOMÍNIO
    steps.push({
      id: `subj-dom-${Date.now()}`, phase: 'mastery', type: 'explanation', mascot: 'pipa',
      speech: 'Parabéns, explorador! Você completou a missão com sucesso!',
      elements: [{ id: 'subj-trophy', type: 'text', content: '🏆', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.1 }]
    });

    return {
      id: `gen-subj-${category}-${Date.now()}`,
      title: `${isScience ? 'Cientista' : isHistory ? 'Historiador' : isGeography ? 'Geógrafo' : 'Artista'} Brilhante`,
      mission_name: items[0].topic,
      bncc_field: isScience ? 'espacos_tempos' : 'escuta_fala',
      steps
    };
  }

  /**
   * MÉTODO CIÊNCIAS: Pergunta -> Observação -> Hipótese -> Explicação -> Experiência -> Conclusão
   */
  static generateScienceLesson(category: string, count: number = 6): Lesson {
    const steps: LessonStep[] = [];
    const topics = [
      { 
        q: 'Por que algumas plantas precisam de sol?', 
        obs: '🌱 + ☀️ = 🌳', 
        h: 'Para produzir energia', 
        dist: ['Para se refrescar', 'Para dormir'],
        exp: 'As plantas usam a luz do sol para fazer seu próprio alimento através da fotossíntese!',
        exp_img: '☀️',
        conc: 'Aprendemos que o sol é o motor das plantas!'
      },
      { 
        q: 'Por que o céu muda de cor no pôr do sol?', 
        obs: '🌅 🧡 🌆', 
        h: 'A luz se espalha no ar', 
        dist: ['O sol troca de roupa', 'As nuvens brilham'],
        exp: 'Quando o sol está baixo, a luz atravessa mais ar e as cores vermelha e laranja aparecem!',
        exp_img: '🌅',
        conc: 'O céu é um grande filtro de cores!'
      }
    ];

    const topic = topics[Math.floor(Math.random() * topics.length)];

    // FASE 1: Pergunta Intrigante
    steps.push({
      id: 'sci-q', phase: 'explanation', type: 'explanation', mascot: 'pip',
      speech: topic.q,
      elements: [{ id: 'q-mark', type: 'text', content: '❓', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }]
    });

    // FASE 2: Observação
    steps.push({
      id: 'sci-obs', phase: 'demonstration', type: 'demonstration', mascot: 'pipa',
      speech: 'Observe com atenção o que acontece aqui.',
      elements: [{ id: 'obs-img', type: 'text', content: topic.obs, position: { x: 0, y: 0 }, animation: 'fade', delay: 0.3 }]
    });

    // FASE 3: Hipótese
    steps.push({
      id: 'sci-hyp', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'O que você acha que está acontecendo?',
      interaction: {
        type: 'click',
        correctAnswer: topic.h,
        options: this.shuffle([topic.h, ...topic.dist])
      }
    });

    // FASE 4: Explicação
    steps.push({
      id: 'sci-exp', phase: 'explanation', type: 'explanation', mascot: 'pipa',
      speech: topic.exp,
      elements: [{ id: 'exp-icon', type: 'text', content: topic.exp_img, position: { x: 0, y: 0 }, animation: 'bounce', delay: 0.2 }]
    });

    // FASE 5: Experiência Digital (Interação de Prática)
    steps.push({
      id: 'sci-sim', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Se removermos o sol, o que acontece com a planta?',
      interaction: {
        type: 'click',
        correctAnswer: 'Ela para de crescer',
        options: this.shuffle(['Ela fica azul', 'Ela para de crescer', 'Ela cresce mais rápido'])
      }
    });

    // FASE 6: Conclusão
    steps.push({
      id: 'sci-conc', phase: 'mastery', type: 'explanation', mascot: 'pipa',
      speech: topic.conc,
      elements: [{ id: 'conc-star', type: 'text', content: '🎓', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.1 }]
    });

    return {
      id: `gen-sci-${Date.now()}`,
      title: 'Cientista Júnior',
      mission_name: 'Vida Verde',
      bncc_field: 'espacos_tempos',
      steps
    };
  }

  /**
   * SISTEMA DE GERAÇÃO INFINITA: Template + Banco
   */
  static generateInfiniteLesson(category: string, count: number = 5): Lesson {
    const steps: LessonStep[] = [];
    let bank: any[] = [];
    let title = 'Missão de Exploração';

    if (category.includes('artes')) {
      bank = ART_BANK;
      title = 'Oficina de Artes';
    } else {
      bank = HISTORY_GEOGRAPHY_BANK;
      title = 'Exploradores do Mundo';
    }

    const selectedItems = this.getRandomItems(bank, Math.min(count, bank.length));

    selectedItems.forEach((item, index) => {
      steps.push({
        id: `inf-${category}-${index}`,
        phase: 'practice',
        type: 'interaction',
        mascot: Math.random() > 0.5 ? 'pip' : 'pipa',
        speech: item.question,
        elements: [{ id: `el-${index}`, type: 'text', content: item.emoji || '🎯', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
        interaction: {
          type: 'click',
          correctAnswer: item.correct,
          options: this.shuffle(item.options)
        }
      });
    });

    return {
      id: `gen-inf-${category}-${Date.now()}`,
      title,
      mission_name: bank[0]?.topic || 'Desafio',
      bncc_field: 'eu_outro_nos',
      steps
    };
  }

  static generateByCategory(category: string): Lesson {
    const isInfantOr1st = category.includes('_inf') || category.includes('1ano');
    const mastery = StudentProgressService.getMastery(category); 
    const difficultyMultiplier = Math.floor(mastery.score / 25); 
    const count = isInfantOr1st ? 4 : 5 + difficultyMultiplier;


    // Subjects: Ciências, História, Geografia, Artes
    if (category.includes('ciencias') || category.includes('historia') || category.includes('geografia') || category.includes('artes')) {
      if (category.includes('ciencias') && !category.includes('inf')) {
        return this.generateScienceLesson(category, count);
      }
      return this.generateSubjectLesson(category, count);
    }

    // Matemática
    if (category.includes('matematica')) {
      return this.generateCRAMath(category, count);
    }

    // Português Moderno (6º-9º)
    if (['portugues_6ano', 'portugues_7ano', 'portugues_8ano', 'portugues_9ano', 'fundamental2'].includes(category)) {
      return this.generateModern(category, count + 2);
    }

    // Português Fundamental I (3º-5º)
    if (['portugues_3ano', 'portugues_4ano', 'portugues_5ano', 'ano3_5'].includes(category)) {
      return this.generateCycleC(category, count);
    }
    
    // Português Inicial (Infantil ao 2º)
    switch (category) {
      case 'portugues':
      case 'portugues_inf':
      case 'portugues_1ano':
      case 'portugues_2ano':
        return this.generateEF01LP05(count);
      default:
        return this.generateEF01LP05(count);
    }
  }
}

