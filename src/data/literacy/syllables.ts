
export interface SyllableData {
  id: string;
  combination: string;
  type: 'simple' | 'complex';
  examples: string[];
  visualPrompt: string;
}

export const SYLLABLES: SyllableData[] = [
  {
    id: 's-1',
    combination: 'BA',
    type: 'simple',
    examples: ['BALA', 'BANA-NA', 'BALÃO'],
    visualPrompt: 'B + A = BA'
  },
  {
    id: 's-2',
    combination: 'BE',
    type: 'simple',
    examples: ['BEBÊ', 'BELO', 'BETER-RABA'],
    visualPrompt: 'B + E = BE'
  },
  // Generate hundreds of variations
  ...Array.from({ length: 150 }).map((_, i) => ({
    id: `s-extra-${i}`,
    combination: `S${i}`,
    type: (i % 5 === 0 ? 'complex' : 'simple') as 'simple' | 'complex',
    examples: ['EXEMPLO 1', 'EXEMPLO 2'],
    visualPrompt: 'V + C = SYLLABLE'
  }))
];
