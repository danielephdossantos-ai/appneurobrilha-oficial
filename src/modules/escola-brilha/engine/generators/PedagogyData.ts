
// ====== Educação Infantil (3-5 anos) — conteúdo concreto, visual, simples ======
export const EARLY_CHILDHOOD = {
  vowels: [
    { letter: 'A', exemplo: 'ABELHA', emoji: '🐝' },
    { letter: 'E', exemplo: 'ELEFANTE', emoji: '🐘' },
    { letter: 'I', exemplo: 'IGREJA', emoji: '⛪' },
    { letter: 'O', exemplo: 'OVO', emoji: '🥚' },
    { letter: 'U', exemplo: 'UVA', emoji: '🍇' },
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
    { nome: 'CACHORRO', emoji: '🐶', som: 'au au' },
    { nome: 'GATO', emoji: '🐱', som: 'miau' },
    { nome: 'VACA', emoji: '🐮', som: 'muuu' },
    { nome: 'PATO', emoji: '🦆', som: 'quack' },
    { nome: 'GALO', emoji: '🐔', som: 'cocoricó' },
    { nome: 'LEÃO', emoji: '🦁', som: 'rugido' },
    { nome: 'OVELHA', emoji: '🐑', som: 'béééé' },
  ],
  contagem: [
    { n: 1, emoji: '🍎' },
    { n: 2, emoji: '🐶' },
    { n: 3, emoji: '⭐' },
    { n: 4, emoji: '🎈' },
    { n: 5, emoji: '🌻' },
  ],
};

export function isEarlyChildhood(grade?: string): boolean {
  if (!grade) return false;
  const g = grade.toLowerCase();
  return g.includes('infantil') || g.includes('pré') || g.includes('pre');
}


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
      { text: "A globalização é um fenômeno complexo que afeta a economia e a cultura.", question: "O autor sugere que a globalização é:", options: ["Simples", "Multifacetada", "Apenas econômica", "Irrelevante"], answer: "Multifacetada" }
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
