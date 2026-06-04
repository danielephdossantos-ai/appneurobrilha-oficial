
// ====== Educação Infantil (4-5 anos) — conteúdo concreto, visual, simples ======
export const EARLY_CHILDHOOD = {
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
  ],
  cores: [
    { nome: 'VERMELHO', hex: '#ef4444', exemplo: 'maçã', emoji: '🍎' },
    { nome: 'AZUL', hex: '#3b82f6', exemplo: 'céu', emoji: '💙' },
    { nome: 'AMARELO', hex: '#facc15', exemplo: 'sol', emoji: '☀️' },
    { nome: 'VERDE', hex: '#22c55e', exemplo: 'folha', emoji: '🍀' },
    { nome: 'ROSA', hex: '#ec4899', exemplo: 'flor', emoji: '🌸' },
    { nome: 'ROXO', hex: '#a855f7', exemplo: 'uva', emoji: '🍇' },
  ],
  formas: [
    { nome: 'CÍRCULO', emoji: '⭕', exemplo: 'a roda' },
    { nome: 'QUADRADO', emoji: '🟦', exemplo: 'a janela' },
    { nome: 'TRIÂNGULO', emoji: '🔺', exemplo: 'a fatia de pizza' },
    { nome: 'ESTRELA', emoji: '⭐', exemplo: 'a estrela no céu' },
    { nome: 'CORAÇÃO', emoji: '❤️', exemplo: 'o amor' },
  ],
  animais: [
    { nome: 'VACA', emoji: '🐮', som: 'muuu', options: ['🐱 Miau', '🐶 Au au', '🐔 Cocoricó', '🐮 Muuu'], answer: '🐮 Muuu' },
    { nome: 'CACHORRO', emoji: '🐶', som: 'au au', relacionados: [{e:'🦴',n:'OSSO'}, {e:'🏠',n:'CASINHA'}, {e:'🥣',n:'RAÇÃO'}], intruso: {e:'🍌',n:'BANANA'} },
    { nome: 'GATO', emoji: '🐱', som: 'miau', relacionados: [{e:'🐟',n:'PEIXE'}, {e:'🧶',n:'NOVELO'}, {e:'🥛',n:'LEITE'}], intruso: {e:'🚗',n:'CARRO'} },
  ],
  contagem: [
    { n: 3, emoji: '🍎', options: [1, 3, 5, 6] },
    { n: 4, emoji: '⭐', mode: 'drag' },
  ],
  atencao: {
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
...
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
