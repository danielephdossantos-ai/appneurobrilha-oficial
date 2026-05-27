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
      { word: 'LATA', syllables: ['LA', 'TA'], category: 'objects' },
      { word: 'MACA', syllables: ['MA', 'CA'], category: 'objects' },
      { word: 'PATO', syllables: ['PA', 'TO'], category: 'animals' },
      { word: 'RATO', syllables: ['RA', 'TO'], category: 'animals' },
      { word: 'SAPO', syllables: ['SA', 'PO'], category: 'animals' },
      { word: 'TATU', syllables: ['TA', 'TU'], category: 'animals' },
      { word: 'VACA', syllables: ['VA', 'CA'], category: 'animals' },
    ],
    intermediate: [
      { word: 'BONECA', syllables: ['BO', 'NE', 'CA'], category: 'toys' },
      { word: 'CAVALO', syllables: ['CA', 'VA', 'LO'], category: 'animals' },
      { word: 'PANELA', syllables: ['PA', 'NE', 'LA'], category: 'objects' },
      { word: 'PICOLÉ', syllables: ['PI', 'CO', 'LÉ'], category: 'food' },
      { word: 'SAPATO', syllables: ['SA', 'PA', 'TO'], category: 'objects' },
      { word: 'TOMATE', syllables: ['TO', 'MA', 'TE'], category: 'food' },
    ],
  }
};

export const MATH_DATA = {
  shapes: ['circle', 'square', 'triangle', 'rectangle', 'star', 'heart'],
  colors: ['red', 'blue', 'green', 'yellow', 'purple', 'orange'],
  patterns: [
    { sequence: ['A', 'B', 'A'], next: 'B' },
    { sequence: ['A', 'A', 'B', 'A'], next: 'A' },
    { sequence: ['A', 'B', 'C', 'A', 'B'], next: 'C' },
  ]
};
