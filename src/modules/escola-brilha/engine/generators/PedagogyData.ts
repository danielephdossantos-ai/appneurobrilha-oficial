
// ====== Educação Infantil (4-5 anos) — conteúdo concreto, visual, simples ======
// BNCC: Campos de Experiência
export const EARLY_CHILDHOOD = {
  // ESCUTA, FALA, PENSAMENTO E IMAGINAÇÃO
  linguagem: {
    vowels: [
      { letter: 'A', exemplo: 'ABELHA', emoji: '🐝', distractors: ['P', 'O'] },
      { letter: 'E', exemplo: 'ELEFANTE', emoji: '🐘', distractors: ['B', 'L'] },
      { letter: 'I', exemplo: 'IGREJA', emoji: '⛪', distractors: ['M', 'T'] },
      { letter: 'O', exemplo: 'OVO', emoji: '🥚', distractors: ['S', 'C'] },
      { letter: 'U', exemplo: 'UVA', emoji: '🍇', distractors: ['X', 'Z'] },
    ],
    words: [
      { word: 'BOLA', startLetter: 'B', options: ['B', 'M', 'P'], emoji: '⚽' },
      { word: 'CASA', startLetter: 'C', options: ['C', 'F', 'D'], emoji: '🏠' },
      { word: 'DADO', startLetter: 'D', options: ['D', 'B', 'T'], emoji: '🎲' },
    ],
  },
  // ESPAÇOS, TEMPOS, QUANTIDADES, RELAÇÕES E TRANSFORMAÇÕES
  matematica: {
    contagem: [
      { n: 3, item: 'maçãs', emoji: '🍎', options: [1, 3, 5, 6] },
      { n: 2, item: 'estrelas', emoji: '⭐', options: [2, 4, 1, 3] },
      { n: 5, item: 'balões', emoji: '🎈', options: [3, 5, 4, 6] },
    ],
    drag: [
      { n: 4, item: 'estrelas', emoji: '⭐' },
      { n: 3, item: 'corações', emoji: '❤️' },
    ],
    formas: [
      { nome: 'CÍRCULO', emoji: '⭕', exemplo: 'a roda' },
      { nome: 'QUADRADO', emoji: '🟦', exemplo: 'a janela' },
      { nome: 'TRIÂNGULO', emoji: '🔺', exemplo: 'a fatia de pizza' },
    ],
  },
  // TRAÇOS, SONS, CORES E FORMAS
  artes_sons: {
    animais: [
      { nome: 'VACA', emoji: '🐮', options: ['🐱 Miau', '🐶 Au au', '🐔 Cocoricó', '🐮 Muuu'], answer: '🐮 Muuu' },
      { nome: 'GATO', emoji: '🐱', options: ['🐱 Miau', '🐶 Au au', '🐔 Cocoricó', '🐮 Muuu'], answer: '🐱 Miau' },
      { nome: 'CACHORRO', emoji: '🐶', options: ['🐱 Miau', '🐶 Au au', '🐔 Cocoricó', '🐮 Muuu'], answer: '🐶 Au au' },
    ],
    cores: [
      { nome: 'VERMELHO', emoji: '🍎' },
      { nome: 'AZUL', emoji: '🔵' },
      { nome: 'AMARELO', emoji: '☀️' },
    ]
  },
  // O EU, O OUTRO E O NÓS / FLORESTA DA ATENÇÃO
  cognitivo: {
    memory: ['🍎', '🐶', '⭐', '🎈', '🌻', '🚗'],
    sequence: ['🍎', '🍌', '🍇'],
  }
};

export function isEarlyChildhood(grade?: string): boolean {
  if (!grade) return false;
  const g = grade.toLowerCase();
  return g.includes('infantil') || g.includes('pré') || g.includes('pre');
}

export const ALPHABETIZATION_DATA = {
  syllableFormation: [
    { parts: ['M', 'A'], result: 'MA', distractors: ['ME', 'MO'] },
    { parts: ['B', 'A'], result: 'BA', distractors: ['BE', 'BO'] },
    { parts: ['L', 'A'], result: 'LA', distractors: ['LE', 'LO'] },
    { parts: ['P', 'A'], result: 'PA', distractors: ['PE', 'PO'] },
  ],
  completeWord: [
    { word: 'GATO', display: 'GA _ O', missing: 'TO', distractors: ['TA', 'TU'], visual: '🐱' },
    { word: 'BOLA', display: 'BO _ A', missing: 'LA', distractors: ['LE', 'LO'], visual: '⚽' },
    { word: 'CASA', display: 'CA _ A', missing: 'SA', distractors: ['SE', 'SI'], visual: '🏠' },
    { word: 'PATO', display: 'PA _ O', missing: 'TO', distractors: ['TA', 'TI'], visual: '🦆' },
  ],
  shortReading: [
    { text: 'A BOLA É AZUL.', question: 'Qual é a cor da bola?', options: ['Azul', 'Vermelha'], answer: 'Azul', visual: '🔵' },
    { text: 'O GATO É PRETO.', question: 'Qual é a cor do gato?', options: ['Preto', 'Branco'], answer: 'Preto', visual: '🐱' },
    { text: 'A CASA É GRANDE.', question: 'Como é a casa?', options: ['Grande', 'Pequena'], answer: 'Grande', visual: '🏠' },
  ]
};

export const FIRST_GRADE_MATH = {
  visualAddition: [
    { group1: { n: 2, item: '🍎' }, group2: { n: 1, item: '🍎' }, answer: 3, options: [2, 3, 4] },
    { group1: { n: 3, item: '⭐' }, group2: { n: 2, item: '⭐' }, answer: 5, options: [4, 5, 6] },
  ],
  visualSubtraction: [
    { total: { n: 4, item: '🐟' }, take: 1, answer: 3, options: [2, 3, 4] },
    { total: { n: 5, item: '🍎' }, take: 2, answer: 3, options: [3, 4, 5] },
  ],
  tens: [
    { question: '3 dezenas?', answer: '30', options: ['10', '20', '30'] },
    { question: '2 dezenas?', answer: '20', options: ['10', '20', '30'] },
    { question: '1 dezena?', answer: '10', options: ['10', '20', '30'] },
  ]
};

export const LINGUISTICS_DATA = {
  vowels: ['a', 'e', 'i', 'o', 'u'],
  consonants: ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'],
  simpleSyllables: [
    'ba', 'be', 'bi', 'bo', 'bu',
    'ca', 'ce', 'ci', 'co', 'cu',
    'da', 'de', 'di', 'do', 'du',
    'fa', 'fe', 'fi', 'fo', 'fu',
    'ga', 'ge', 'gi', 'go', 'gu',
    'la', 'le', 'li', 'lo', 'lu',
    'ma', 'me', 'mi', 'mo', 'mu',
    'na', 'ne', 'ni', 'no', 'nu',
    'pa', 'pe', 'pi', 'po', 'pu',
    'ra', 're', 'ri', 'ro', 'ru',
    'sa', 'se', 'si', 'so', 'su',
    'ta', 'te', 'ti', 'to', 'tu',
    'va', 've', 'vi', 'vo', 'vu',
  ],
  words: {
    beginner: [
      { word: 'BOLA', syllables: ['BO', 'LA'], category: 'objects' },
      { word: 'CASA', syllables: ['CA', 'SA'], category: 'objects' },
      { word: 'DADO', syllables: ['DA', 'DO'], category: 'objects' },
      { word: 'FOCA', syllables: ['FO', 'CA'], category: 'animals' },
      { word: 'GATO', syllables: ['GA', 'TO'], category: 'animals' },
    ],
    intermediate: [
      { word: 'BONECA', syllables: ['BO', 'NE', 'CA'], category: 'toys' },
      { word: 'CAVALO', syllables: ['CA', 'VA', 'LO'], category: 'animals' },
      { word: 'PANELA', syllables: ['PA', 'NE', 'LA'], category: 'objects' },
    ],
    advanced: [
      { word: 'ASTRONAUTA', syllables: ['AS', 'TRO', 'NAU', 'TA'], category: 'professions' },
      { word: 'BIBLIOTECA', syllables: ['BI', 'BLIO', 'TE', 'CA'], category: 'places' },
    ]
  },
  texts: {
    grade6: [
      { text: "O sol brilhava intensamente sobre a colina, iluminando as flores silvestres.", question: "Qual é o tema principal?", options: ["Clima", "Natureza", "Flores", "Sol"], answer: "Natureza" },
    ],
    grade9: [
      { text: "A globalização é um fenômeno complexo que afeta a economy e a cultura.", question: "O autor sugere que a globalização é:", options: ["Simples", "Multifacetada", "Apenas econômica", "Irrelevante"], answer: "Multifacetada" }
    ]
  }
};

export const MATH_DATA = {
  shapes: ['circle', 'square', 'triangle', 'rectangle', 'star', 'heart'],
  colors: ['red', 'blue', 'green', 'yellow', 'purple', 'orange'],
  patterns: [
    { sequence: ['A', 'B', 'A'], next: 'B' },
    { sequence: ['A', 'A', 'B', 'A'], next: 'A' },
  ],
  operations: {
    grade7: [
      { q: "(-5) + (+3)", a: -2, options: [-2, 8, -8, 2] },
      { q: "(-10) / (-2)", a: 5, options: [5, -5, 20, -20] }
    ],
    grade9: [
      { q: "√16 + 2²", a: 8, options: [8, 6, 12, 10] },
      { q: "2x + 5 = 11. Qual o valor de x?", a: 3, options: [3, 2, 8, 4] }
    ]
  }
};
