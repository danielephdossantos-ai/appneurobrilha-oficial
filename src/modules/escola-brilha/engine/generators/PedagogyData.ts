
// ====== Educação Infantil (4-5 anos) — conteúdo concreto, visual, simples ======
export const EARLY_CHILDHOOD = {
  linguagem: {
    vowels: [
      { letter: 'A', exemplo: 'ABELHA', visual: '🐝', distractors: ['P', 'O'], code: 'EI03EF09' },
      { letter: 'E', exemplo: 'ELEFANTE', visual: '/src/assets/hiperfocos/animais/elefante.png', distractors: ['B', 'L'], code: 'EI03EF09' },
      { letter: 'I', exemplo: 'IGREJA', visual: '⛪', distractors: ['M', 'T'], code: 'EI03EF09' },
      { letter: 'O', exemplo: 'OVO', visual: '🥚', distractors: ['S', 'C'], code: 'EI03EF09' },
      { letter: 'U', exemplo: 'UVA', visual: '🍇', distractors: ['X', 'Z'], code: 'EI03EF09' },
    ],
    words: [
      { word: 'BOLA', startLetter: 'B', options: ['B', 'M', 'P'], visual: '⭕', code: 'EI03EF09' },
      { word: 'CASA', startLetter: 'C', options: ['C', 'F', 'D'], visual: '🏠', code: 'EI03EF09' },
      { word: 'DADO', startLetter: 'D', options: ['D', 'B', 'T'], visual: '🎲', code: 'EI03EF09' },
    ],
    rimas: [
      { word: 'CASA', answer: 'ASA', options: ['ASA', 'PATO', 'GATO'], visual: '🏠', code: 'EI03EF01' },
      { word: 'GATO', answer: 'PATO', options: ['PATO', 'BALÃO', 'CASA'], visual: '🐱', code: 'EI03EF01' },
    ],
  },
  matematica: {
    contagem: [
      { n: 3, item: 'maçãs', visual: 'apple', options: [1, 3, 5, 6], code: 'EI03ET07' },
      { n: 2, item: 'estrelas', visual: 'star', options: [2, 4, 1, 3], code: 'EI03ET07' },
      { n: 5, item: 'balões', visual: 'balloon', options: [3, 5, 4, 6], code: 'EI03ET07' },
    ],
    drag: [
      { n: 4, item: 'estrelas', visual: 'star', code: 'EI03ET07' },
      { n: 3, item: 'corações', visual: 'heart', code: 'EI03ET07' },
    ],
    comparacao: [
      { item: 'maçãs', groupA: 2, groupB: 5, answer: 'B', options: ['A', 'B'], code: 'EI03ET07' },
      { item: 'estrelas', groupA: 4, groupB: 1, answer: 'A', options: ['A', 'B'], code: 'EI03ET07' },
    ]
  },
  formas_cores: {
    formas: [
      { nome: 'CÍRCULO', visual: 'circle', code: 'EI03TS02' },
      { nome: 'QUADRADO', visual: 'square', code: 'EI03TS02' },
      { nome: 'TRIÂNGULO', visual: 'triangle', code: 'EI03TS02' },
    ],
    cores: [
      { nome: 'VERMELHO', hex: '#EF4444', visual: 'apple', code: 'EI03TS02' },
      { nome: 'AZUL', hex: '#3B82F6', visual: 'circle', code: 'EI03TS02' },
      { nome: 'AMARELO', hex: '#FACC15', visual: 'sun', code: 'EI03TS02' },
    ]
  },
  movimentos: {
    tracado: [
      { points: [{x:10, y:50}, {x:90, y:50}], label: 'Linha Reta', code: 'EI03CG01' },
      { points: [{x:50, y:10}, {x:50, y:90}], label: 'Linha em Pé', code: 'EI03CG01' },
    ]
  },
  // EI03EO01 - Sentimentos (O EU, O OUTRO E O NÓS)
  emocoes: [
    { label: 'FELIZ', visual: 'smile', emotion: 'happy', code: 'EI03EO01' },
    { label: 'TRISTE', visual: 'frown', emotion: 'sad', code: 'EI03EO01' },
    { label: 'BRAVO', visual: 'angry', emotion: 'angry', code: 'EI03EO01' },
    { label: 'SONO', visual: 'moon', emotion: 'sleeping', code: 'EI03EO01' },
  ],
  // Compatibilidade com CognitiveGenerator
  cognitivo: {
    memory: ['apple', 'cat', 'star', 'balloon', 'flower', 'car'],
    sequence: ['apple', 'banana', 'grape'],
  },
  // Compatibilidade com LinguisticsGenerator
  artes_sons: {
    animais: [
      { nome: 'VACA', visual: 'cow', options: ['miau', 'au au', 'cocoricó', 'muuu'], answer: 'muuu', code: 'EI03TS03' },
    ]
  }
};

export function isEarlyChildhood(grade?: string): boolean {
  if (!grade) return false;
  const g = grade.toLowerCase();
  return g.includes('infantil') || g.includes('pré') || g.includes('pre');
}

export const ALPHABETIZATION_DATA = {
  syllableFormation: [
    { parts: ['M', 'A'], result: 'MA', distractors: ['ME', 'MO'], code: 'EF01LP05' },
    { parts: ['B', 'A'], result: 'BA', distractors: ['BE', 'BO'], code: 'EF01LP05' },
  ],
  completeWord: [
    { word: 'GATO', display: 'GA _ O', missing: 'TO', distractors: ['TA', 'TU'], visual: 'cat', code: 'EF01LP05' },
    { word: 'BOLA', display: 'BO _ A', missing: 'LA', distractors: ['LE', 'LO'], visual: 'circle', code: 'EF01LP05' },
    { word: 'PATO', display: 'PA _ O', missing: 'TO', distractors: ['TA', 'TU'], visual: 'bird', code: 'EF01LP05' },
    { word: 'CASA', display: 'CA _ A', missing: 'SA', distractors: ['SE', 'SI'], visual: 'home', code: 'EF01LP05' },
  ],
  shortReading: [
    { text: 'A BOLA É AZUL.', question: 'Qual é a cor da bola?', options: ['Azul', 'Vermelha'], answer: 'Azul', visual: 'circle', code: 'EF01LP07' },
    { text: 'O GATO É PRETO.', question: 'Qual é a cor do gato?', options: ['Preto', 'Branco'], answer: 'Preto', visual: 'cat', code: 'EF01LP07' },
  ],
  phonemes: [
    { sound: 'm', result: 'M', distractors: ['P', 'T'], code: 'EF01LP06' },
    { sound: 'b', result: 'B', distractors: ['D', 'P'], code: 'EF01LP06' },
  ],
  textTypes: [
    { question: "Qual usamos para contar histórias?", options: ['Livro', 'Telefone', 'Maçã'], answer: 'Livro', visual: 'book', code: 'EF01LP01' },
    { question: "Onde lemos notícias?", options: ['Jornal', 'Bola', 'Flor'], answer: 'Jornal', visual: 'newspaper', code: 'EF01LP01' },
  ],
  comprehension: [
    { text: "O gato dorme.", question: "Quem dorme?", options: ['Gato', 'Cachorro', 'Pássaro'], answer: 'Gato', visual: 'cat', code: 'EF01LP10' }
  ],
  alphabeticalOrder: [
    { sequence: ['A', 'B', 'C'], code: 'EF01LP03' },
    { sequence: ['D', 'E', 'F'], code: 'EF01LP03' },
  ]
};

export const FIRST_GRADE_MATH = {
  visualAddition: [
    { group1: { n: 2, item: 'apple' }, group2: { n: 1, item: 'apple' }, answer: 3, options: [2, 3, 4], code: 'EF01MA05' },
    { group1: { n: 3, item: 'star' }, group2: { n: 2, item: 'star' }, answer: 5, options: [4, 5, 6], code: 'EF01MA05' },
    { group1: { n: 5, item: 'apple' }, group2: { n: 2, item: 'apple' }, answer: 7, options: [6, 7, 8], code: 'EF01MA05' },
  ],
  visualSubtraction: [
    { total: { n: 4, item: 'fish' }, take: 1, answer: 3, options: [2, 3, 4], code: 'EF01MA06' },
  ],
  tens: [
    { question: '3 dezenas?', answer: '30', options: ['10', '20', '30'], code: 'EF01MA03' },
    { question: '2 dezenas?', answer: '20', options: ['10', '20', '30'], code: 'EF01MA03' },
  ],
  counting: [
    { n: 10, code: 'EF01MA01' },
    { n: 20, code: 'EF01MA01' },
  ],
  comparison: [
    { item: 'lápis', countA: 5, countB: 3, answer: 'A', code: 'EF01MA02' },
  ],
  spatialLocation: [
    { question: 'Onde está o lápis?', options: ['Dentro', 'Fora'], code: 'EF01MA08' },
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
