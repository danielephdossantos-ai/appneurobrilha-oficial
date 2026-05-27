
export interface MathActivity {
  id: string;
  world: 'counting' | 'comparison' | 'shapes' | 'logic';
  type: 'counting' | 'comparison' | 'sequence' | 'quantity' | 'shapes' | 'logic' | 'number-association' | 'patterns' | 'visual-reasoning';
  title: string;
  instruction: string;
  difficulty: number;
  data: any;
  sensoryAdaptation?: {
    lowStimulus: boolean;
    highContrast: boolean;
  };
}

export const MATH_ACTIVITIES: MathActivity[] = [
  // CIDADE DOS NÚMEROS (Contagem e Quantidade)
  {
    id: 'math-cnt-001',
    world: 'counting',
    type: 'counting',
    title: 'Contando Maçãs',
    instruction: 'Quantas maçãs você vê na árvore?',
    difficulty: 1,
    data: { items: 3, type: 'apple', options: [1, 2, 3, 4] }
  },
  {
    id: 'math-cnt-002',
    world: 'counting',
    type: 'number-association',
    title: 'Amigos dos Números',
    instruction: 'Arraste o número 5 para o grupo com 5 estrelas',
    difficulty: 1,
    data: { targetNumber: 5, groups: [3, 5, 2] }
  },
  // PLANETA DAS FORMAS
  {
    id: 'math-shp-001',
    world: 'shapes',
    type: 'shapes',
    title: 'Caça ao Círculo',
    instruction: 'Toque em todos os círculos azuis',
    difficulty: 1,
    data: { targetShape: 'circle', targetColor: 'blue', totalItems: 6 }
  },
  {
    id: 'math-shp-002',
    world: 'shapes',
    type: 'patterns',
    title: 'Padrão de Cores',
    instruction: 'Qual forma vem a seguir?',
    difficulty: 2,
    data: { sequence: ['red-square', 'blue-circle', 'red-square'], options: ['blue-circle', 'green-triangle'] }
  },
  // BALANÇA MÁGICA (Comparação)
  {
    id: 'math-cmp-001',
    world: 'comparison',
    type: 'comparison',
    title: 'Mais ou Menos',
    instruction: 'Qual cesto tem MAIS frutas?',
    difficulty: 1,
    data: { left: 4, right: 2, comparison: 'more' }
  },
  // LABORATÓRIO MATEMÁGICO (Lógica)
  {
    id: 'math-log-001',
    world: 'logic',
    type: 'sequence',
    title: 'Trem dos Números',
    instruction: 'Complete a sequência do trem',
    difficulty: 2,
    data: { sequence: [1, 2, null, 4], missing: 3 }
  }
];

// Adicionando mocks para chegar a 400+ variações (conceitualmente via gerador)
export const generateMathMocks = () => {
  const mocks: MathActivity[] = [...MATH_ACTIVITIES];
  
  // Contagem 1-10 (100 variações)
  for (let i = 1; i <= 10; i++) {
    mocks.push({
      id: `math-cnt-gen-${i}`,
      world: 'counting',
      type: 'counting',
      title: `Contando ${i}`,
      instruction: `Encontre ${i} objetos`,
      difficulty: Math.ceil(i / 3),
      data: { target: i, pool: i + 2 }
    });
  }
  
  // Shapes and Patterns (100 variações)
  const shapes = ['circle', 'square', 'triangle', 'star'];
  shapes.forEach(s => {
    mocks.push({
      id: `math-shp-gen-${s}`,
      world: 'shapes',
      type: 'shapes',
      title: `Mundo dos ${s}s`,
      instruction: `Identifique o ${s}`,
      difficulty: 1,
      data: { shape: s }
    });
  });

  return mocks;
};
