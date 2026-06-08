import { ActivityLesson } from '../types/activity-lesson';

export const SINONIMOS_LESSON: ActivityLesson = {
  id: 'sinonimos-2ano',
  title: 'Sinônimos',
  topic: 'SINÔNIMOS',
  subject: 'Língua Portuguesa — 2º ao 5º Ano',
  xp: 120,
  screens: {
    explicacao: {
      instruction: 'Vamos aprender sobre',
      highlight: 'SINÔNIMOS!',
      summary: 'Sinônimos são palavras que têm significados parecidos.',
      visual_emoji: '📖',
    },
    exploracao: {
      instruction: 'Observe as palavras com o mesmo sentido.',
      pairs: [
        { left: 'ALEGRE', right: 'FELIZ' },
        { left: 'BONITO', right: 'LINDO' },
        { left: 'CASA',   right: 'LAR'   },
      ],
    },
    explicacao_curta: {
      text: 'Sinônimos são palavras que podem ser usadas no lugar uma da outra e mantêm o mesmo significado.',
      highlights: ['mesmo significado'],
      tip: 'Palavras com o mesmo sentido = sinônimos!',
    },
    exemplo_visual: {
      title: 'Veja este exemplo:',
      sentences: [
        { text: 'Ele está alegre.', emoji: '😄' },
        { text: 'Ele está feliz.', emoji: '😄' },
      ],
      conclusion: 'As duas palavras têm o mesmo significado.',
    },
    praticar: {
      question: 'Qual palavra é sinônimo de',
      reference: 'FELIZ',
      options: [
        { text: 'TRISTE', isCorrect: false, color: 'red' },
        { text: 'ALEGRE', isCorrect: true,  color: 'green' },
        { text: 'BRAVO',  isCorrect: false, color: 'orange' },
      ],
    },
  },
};

export const ANTONIMOS_LESSON: ActivityLesson = {
  id: 'antonimos-2ano',
  title: 'Antônimos',
  topic: 'ANTÔNIMOS',
  subject: 'Língua Portuguesa — 2º ao 5º Ano',
  xp: 120,
  screens: {
    explicacao: {
      instruction: 'Vamos aprender sobre',
      highlight: 'ANTÔNIMOS!',
      summary: 'Antônimos são palavras com significados opostos.',
      visual_emoji: '↔️',
    },
    exploracao: {
      instruction: 'Observe os opostos abaixo.',
      pairs: [
        { left: 'QUENTE',  right: 'FRIO'    },
        { left: 'GRANDE',  right: 'PEQUENO' },
        { left: 'RÁPIDO',  right: 'LENTO'   },
      ],
    },
    explicacao_curta: {
      text: 'Antônimos são palavras que têm significados contrários ou opostos entre si.',
      highlights: ['contrários', 'opostos'],
      tip: 'Palavras opostas = antônimos!',
    },
    exemplo_visual: {
      title: 'Veja este exemplo:',
      sentences: [
        { text: 'O elefante é GRANDE.', emoji: '🐘' },
        { text: 'O rato é PEQUENO.',    emoji: '🐭' },
      ],
      conclusion: 'Grande e pequeno são palavras opostas!',
    },
    praticar: {
      question: 'Qual é o antônimo de',
      reference: 'DIA',
      options: [
        { text: 'SOL',   isCorrect: false, color: 'orange' },
        { text: 'NOITE', isCorrect: true,  color: 'blue'   },
        { text: 'TARDE', isCorrect: false, color: 'purple' },
      ],
    },
  },
};

export const SUBSTANTIVOS_LESSON: ActivityLesson = {
  id: 'substantivos-3ano',
  title: 'Substantivos',
  topic: 'SUBSTANTIVOS',
  subject: 'Língua Portuguesa — 3º ao 5º Ano',
  xp: 130,
  screens: {
    explicacao: {
      instruction: 'Vamos aprender sobre',
      highlight: 'SUBSTANTIVOS!',
      summary: 'Substantivos são palavras que dão nome às coisas.',
      visual_emoji: '✏️',
    },
    exploracao: {
      instruction: 'Veja exemplos de substantivos.',
      pairs: [
        { left: 'pessoa', right: 'Maria'  },
        { left: 'lugar',  right: 'escola' },
        { left: 'coisa',  right: 'livro'  },
      ],
    },
    explicacao_curta: {
      text: 'Substantivos são palavras que nomeiam seres, lugares, objetos, sentimentos e ideias.',
      highlights: ['nomeiam seres'],
      tip: 'Se dá nome a algo, é substantivo!',
    },
    exemplo_visual: {
      title: 'Veja este exemplo:',
      sentences: [
        { text: 'A menina leu um livro.', emoji: '📖' },
        { text: '"menina" e "livro" são substantivos.', emoji: '✏️' },
      ],
      conclusion: 'Eles nomeiam seres e objetos!',
    },
    praticar: {
      question: 'Qual palavra é um substantivo?',
      options: [
        { text: 'CORRER',   isCorrect: false, color: 'red'    },
        { text: 'CACHORRO', isCorrect: true,  color: 'green'  },
        { text: 'BONITO',   isCorrect: false, color: 'orange' },
      ],
    },
  },
};

export const FRACOES_LESSON: ActivityLesson = {
  id: 'fracoes-3ano',
  title: 'Frações',
  topic: 'FRAÇÕES',
  subject: 'Matemática — 3º ao 5º Ano',
  xp: 150,
  screens: {
    explicacao: {
      instruction: 'Vamos aprender sobre',
      highlight: 'FRAÇÕES!',
      summary: 'Fração representa uma parte de um todo.',
      visual_emoji: '🍕',
    },
    exploracao: {
      instruction: 'Observe as frações abaixo.',
      pairs: [
        { left: '1/2', right: 'metade'        },
        { left: '1/4', right: 'um quarto'     },
        { left: '3/4', right: 'três quartos'  },
      ],
      visual: {
        type: 'fraction_bar',
        fraction: {
          numerator: 1,
          denominator: 4,
          emoji: '🍕',
          label: '1/4 — um quarto da pizza',
        },
      },
    },
    explicacao_curta: {
      text: 'Uma fração tem dois números: o numerador (parte) e o denominador (total de partes iguais).',
      highlights: ['numerador', 'denominador'],
      tip: 'Numerador ÷ denominador = fração!',
    },
    exemplo_visual: {
      title: 'Montando o cálculo passo a passo:',
      sentences: [
        { text: 'Uma pizza foi cortada em 4 partes.', emoji: '🍕' },
        { text: 'Comemos 1 parte.',                  emoji: '😋' },
      ],
      conclusion: 'Comemos 1/4 da pizza!',
      visual: {
        type: 'math_steps',
        math_steps: [
          { expr: 'Pizza inteira  =  4 pedaços',     color: 'blue',   label: 'Denominador' },
          { expr: 'Comemos  →  1 pedaço',            color: 'orange', label: 'Numerador'   },
          { expr: '1 ÷ 4  =  1/4',                  color: 'green',  label: 'Resultado', highlight: true },
          { expr: '🍕 1/4 da pizza foi comida!',     color: 'purple', highlight: true },
        ],
      },
    },
    praticar: {
      question: 'Qual fração representa a metade?',
      options: [
        { text: '1/4', isCorrect: false, color: 'red'   },
        { text: '1/2', isCorrect: true,  color: 'green' },
        { text: '1/3', isCorrect: false, color: 'blue'  },
      ],
      visual: {
        type: 'counter_grid',
        counter: {
          items: ['🍎','🍎','🍊','🍊'],
          question: 'Metade das frutas são maçãs — quantas?',
          answer: 2,
        },
      },
    },
  },
};

export const MULTIPLICACAO_LESSON: ActivityLesson = {
  id: 'multiplicacao-3ano',
  title: 'Multiplicação',
  topic: 'MULTIPLICAÇÃO',
  subject: 'Matemática — 3º ao 5º Ano',
  xp: 140,
  screens: {
    explicacao: {
      instruction: 'Vamos aprender sobre',
      highlight: 'MULTIPLICAÇÃO!',
      summary: 'Multiplicar é uma forma rápida de somar grupos iguais.',
      visual_emoji: '🧮',
    },
    exploracao: {
      instruction: 'Observe os grupos de objetos.',
      pairs: [
        { left: '2 × 3', right: '6'  },
        { left: '4 × 2', right: '8'  },
        { left: '5 × 3', right: '15' },
      ],
      visual: {
        type: 'multiplication_grid',
        multiplication: {
          groups: 3,
          items_per_group: 4,
          emoji: '🍬',
        },
      },
    },
    explicacao_curta: {
      text: 'Multiplicação é somar o mesmo número várias vezes: 3 × 2 = 2 + 2 + 2 = 6.',
      highlights: ['3 × 2 = 6'],
      tip: 'Grupos iguais = multiplicação!',
    },
    exemplo_visual: {
      title: 'Montando o cálculo passo a passo:',
      sentences: [
        { text: '3 caixas com 4 balas cada.', emoji: '📦' },
        { text: 'Somamos todos os grupos.',   emoji: '➕' },
      ],
      conclusion: '3 × 4 = 12 balas no total!',
      visual: {
        type: 'math_steps',
        math_steps: [
          { expr: '3  grupos',              color: 'blue',   label: '1º fator'    },
          { expr: '×  4  em cada grupo',    color: 'orange', label: '2º fator'    },
          { expr: '4 + 4 + 4  =  12',       color: 'teal',   label: 'Soma dos grupos' },
          { expr: '3 × 4  =  12  🍬',       color: 'green',  label: 'Resultado', highlight: true },
        ],
      },
    },
    praticar: {
      question: 'Quanto é 3 × 5?',
      options: [
        { text: '12', isCorrect: false, color: 'red'   },
        { text: '15', isCorrect: true,  color: 'green' },
        { text: '18', isCorrect: false, color: 'blue'  },
      ],
      visual: {
        type: 'counter_grid',
        counter: {
          items: ['🍎','🍎','🍎','🍎','🍎', '🍊','🍊','🍊','🍊','🍊', '🍋','🍋','🍋','🍋','🍋'],
          question: 'Conte os grupos de frutas: 3 × 5 = ?',
          answer: 15,
        },
      },
    },
  },
};
