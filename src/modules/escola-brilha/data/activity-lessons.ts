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
    },
    exploracao: {
      instruction: 'Observe as palavras abaixo.',
      pairs: [
        { left: 'ALEGRE', right: 'FELIZ' },
        { left: 'BONITO', right: 'LINDO' },
        { left: 'CASA', right: 'LAR' },
      ],
    },
    explicacao_curta: {
      text: 'Sinônimos são palavras que podem ser usadas no lugar uma da outra e mantêm o mesmo significado.',
      highlights: ['mesmo significado'],
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
        { text: 'ALEGRE', isCorrect: true, color: 'green' },
        { text: 'BRAVO', isCorrect: false, color: 'orange' },
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
    },
    exploracao: {
      instruction: 'Observe os opostos abaixo.',
      pairs: [
        { left: 'QUENTE', right: 'FRIO' },
        { left: 'GRANDE', right: 'PEQUENO' },
        { left: 'RÁPIDO', right: 'LENTO' },
      ],
    },
    explicacao_curta: {
      text: 'Antônimos são palavras que têm significados contrários ou opostos entre si.',
      highlights: ['contrários', 'opostos'],
    },
    exemplo_visual: {
      title: 'Veja este exemplo:',
      sentences: [
        { text: 'O elefante é grande.', emoji: '🐘' },
        { text: 'O rato é pequeno.', emoji: '🐭' },
      ],
      conclusion: 'Grande e pequeno são palavras opostas!',
    },
    praticar: {
      question: 'Qual é o antônimo de',
      reference: 'DIA',
      options: [
        { text: 'SOL', isCorrect: false, color: 'orange' },
        { text: 'NOITE', isCorrect: true, color: 'blue' },
        { text: 'TARDE', isCorrect: false, color: 'purple' },
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
    },
    exploracao: {
      instruction: 'Observe as frações abaixo.',
      pairs: [
        { left: '1/2', right: 'metade' },
        { left: '1/4', right: 'um quarto' },
        { left: '3/4', right: 'três quartos' },
      ],
    },
    explicacao_curta: {
      text: 'Uma fração tem dois números: o numerador (parte) e o denominador (total de partes iguais).',
      highlights: ['numerador', 'denominador'],
    },
    exemplo_visual: {
      title: 'Veja este exemplo:',
      sentences: [
        { text: 'Uma pizza foi cortada em 4 partes.', emoji: '🍕' },
        { text: 'Comemos 1 parte.', emoji: '🍕' },
      ],
      conclusion: 'Comemos 1/4 da pizza!',
    },
    praticar: {
      question: 'Qual fração representa a metade?',
      options: [
        { text: '1/4', isCorrect: false, color: 'red' },
        { text: '1/2', isCorrect: true, color: 'green' },
        { text: '1/3', isCorrect: false, color: 'blue' },
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
    },
    exploracao: {
      instruction: 'Veja exemplos de substantivos.',
      pairs: [
        { left: 'pessoa', right: 'Maria' },
        { left: 'lugar', right: 'escola' },
        { left: 'coisa', right: 'livro' },
      ],
    },
    explicacao_curta: {
      text: 'Substantivos são palavras que nomeiam seres, lugares, objetos, sentimentos e ideias.',
      highlights: ['nomeiam seres'],
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
        { text: 'CORRER', isCorrect: false, color: 'red' },
        { text: 'CACHORRO', isCorrect: true, color: 'green' },
        { text: 'BONITO', isCorrect: false, color: 'orange' },
      ],
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
    },
    exploracao: {
      instruction: 'Observe as tabuadas abaixo.',
      pairs: [
        { left: '2 × 3', right: '6' },
        { left: '4 × 2', right: '8' },
        { left: '5 × 3', right: '15' },
      ],
    },
    explicacao_curta: {
      text: 'Multiplicação é somar o mesmo número várias vezes: 3 × 2 = 2 + 2 + 2 = 6.',
      highlights: ['3 × 2 = 6'],
    },
    exemplo_visual: {
      title: 'Veja este exemplo:',
      sentences: [
        { text: '3 caixas com 4 balas cada.', emoji: '🍬' },
        { text: '3 × 4 = 12 balas no total.', emoji: '🧮' },
      ],
      conclusion: 'Multiplicar é mais rápido que somar!',
    },
    praticar: {
      question: 'Quanto é 3 × 5?',
      options: [
        { text: '12', isCorrect: false, color: 'red' },
        { text: '15', isCorrect: true, color: 'green' },
        { text: '18', isCorrect: false, color: 'blue' },
      ],
    },
  },
};
