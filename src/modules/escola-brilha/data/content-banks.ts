
export interface Word {
  text: string;
  syllables: string[];
  emoji?: string;
}

export const WORD_BANK: Word[] = [
  { text: 'CASA', syllables: ['CA', 'SA'], emoji: '🏠' },
  { text: 'BOLA', syllables: ['BO', 'LA'], emoji: '⚽' },
  { text: 'PATO', syllables: ['PA', 'TO'], emoji: '🦆' },
  { text: 'SAPO', syllables: ['SA', 'PO'], emoji: '🐸' },
  { text: 'MALA', syllables: ['MA', 'LA'], emoji: '👜' },
  { text: 'GATO', syllables: ['GA', 'TO'], emoji: '🐱' },
  { text: 'BOLO', syllables: ['BO', 'LO'], emoji: '🎂' },
  { text: 'DADO', syllables: ['DA', 'DO'], emoji: '🎲' },
  { text: 'FOCA', syllables: ['FO', 'CA'], emoji: '🦭' },
  { text: 'LATA', syllables: ['LA', 'TA'], emoji: '🥫' },
  { text: 'VACA', syllables: ['VA', 'CA'], emoji: '🐮' },
  { text: 'RATO', syllables: ['RA', 'TO'], emoji: '🐭' },
  { text: 'LOBO', syllables: ['LO', 'BO'], emoji: '🐺' },
  { text: 'MACACO', syllables: ['MA', 'CA', 'CO'], emoji: '🐵' },
  { text: 'BANANA', syllables: ['BA', 'NA', 'NA'], emoji: '🍌' },
  { text: 'PIPOCA', syllables: ['PI', 'PO', 'CA'], emoji: '🍿' },
  { text: 'SAPATO', syllables: ['SA', 'PA', 'TO'], emoji: '👞' },
  { text: 'CANETA', syllables: ['CA', 'NE', 'TA'], emoji: '🖊️' },
  { text: 'XÍCARA', syllables: ['XÍ', 'CA', 'RA'], emoji: '☕' },
  { text: 'CABELO', syllables: ['CA', 'BE', 'LO'], emoji: '💇' },
  { text: 'ESCORREGA', syllables: ['ES', 'COR', 'RE', 'GA'], emoji: '🛝' },
  { text: 'BORBOLETA', syllables: ['BOR', 'BO', 'LE', 'TA'], emoji: '🦋' },
  { text: 'GELADEIRA', syllables: ['GE', 'LA', 'DEI', 'RA'], emoji: '🧊' },
];

export const SENTENCE_BANK = [
  'O gato subiu no telhado.',
  'A bola rolou na grama.',
  'O pato nada na lagoa.',
  'O sapo pula no mato.',
  'A menina gosta de bolo.',
  'O sol brilha no céu.',
  'O cachorro late alto.',
];

export const MATH_BANK = {
  simple_addition: [
    { a: 2, b: 3, result: 5 },
    { a: 4, b: 1, result: 5 },
    { a: 5, b: 5, result: 10 },
    { a: 7, b: 2, result: 9 },
    { a: 3, b: 3, result: 6 },
  ],
  simple_subtraction: [
    { a: 10, b: 5, result: 5 },
    { a: 8, b: 3, result: 5 },
    { a: 5, b: 1, result: 4 },
    { a: 9, b: 4, result: 5 },
    { a: 6, b: 2, result: 4 },
  ]
};
