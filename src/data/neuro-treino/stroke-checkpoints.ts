// Checkpoints ordenados para validação de traçado por letra.
// Cada ponto é (x, y) em coordenadas 0..100 do viewBox 100x100.
// A criança precisa passar o dedo perto (raio 18) de cada ponto NA ORDEM.
// Para letras multi-traço (F, E, T, i, j, H, K, X, A, Q, ...), listamos os
// pontos como se fosse um traçado contínuo ideal — não é perfeito, mas
// captura direção e ordem essenciais (topo→base, esq→dir), muito mais
// clínico do que "qualquer rabisco".

export interface Checkpoint {
  x: number;
  y: number;
}

const CP: Record<string, Checkpoint[]> = {
  // Maiúsculas
  A: [{ x: 25, y: 85 }, { x: 50, y: 15 }, { x: 75, y: 85 }, { x: 35, y: 55 }, { x: 65, y: 55 }],
  B: [{ x: 30, y: 85 }, { x: 30, y: 15 }, { x: 65, y: 25 }, { x: 30, y: 50 }, { x: 65, y: 75 }, { x: 30, y: 85 }],
  C: [{ x: 75, y: 25 }, { x: 30, y: 30 }, { x: 25, y: 55 }, { x: 30, y: 80 }, { x: 75, y: 80 }],
  D: [{ x: 30, y: 85 }, { x: 30, y: 15 }, { x: 65, y: 30 }, { x: 70, y: 55 }, { x: 65, y: 80 }, { x: 30, y: 85 }],
  E: [{ x: 70, y: 15 }, { x: 30, y: 15 }, { x: 30, y: 85 }, { x: 70, y: 85 }, { x: 30, y: 50 }, { x: 55, y: 50 }],
  F: [{ x: 70, y: 15 }, { x: 30, y: 15 }, { x: 30, y: 85 }, { x: 30, y: 50 }, { x: 55, y: 50 }],
  G: [{ x: 75, y: 25 }, { x: 30, y: 30 }, { x: 25, y: 55 }, { x: 30, y: 80 }, { x: 75, y: 80 }, { x: 75, y: 55 }, { x: 55, y: 55 }],
  H: [{ x: 30, y: 15 }, { x: 30, y: 85 }, { x: 30, y: 50 }, { x: 70, y: 50 }, { x: 70, y: 15 }, { x: 70, y: 85 }],
  I: [{ x: 50, y: 15 }, { x: 50, y: 85 }],
  J: [{ x: 60, y: 15 }, { x: 60, y: 80 }, { x: 40, y: 85 }, { x: 30, y: 65 }],
  K: [{ x: 30, y: 15 }, { x: 30, y: 85 }, { x: 30, y: 50 }, { x: 70, y: 15 }, { x: 30, y: 50 }, { x: 70, y: 85 }],
  L: [{ x: 30, y: 15 }, { x: 30, y: 85 }, { x: 70, y: 85 }],
  M: [{ x: 25, y: 85 }, { x: 25, y: 15 }, { x: 50, y: 55 }, { x: 75, y: 15 }, { x: 75, y: 85 }],
  N: [{ x: 25, y: 85 }, { x: 25, y: 15 }, { x: 75, y: 85 }, { x: 75, y: 15 }],
  O: [{ x: 50, y: 15 }, { x: 25, y: 40 }, { x: 25, y: 60 }, { x: 50, y: 85 }, { x: 75, y: 60 }, { x: 75, y: 40 }, { x: 50, y: 15 }],
  P: [{ x: 30, y: 85 }, { x: 30, y: 15 }, { x: 65, y: 22 }, { x: 65, y: 45 }, { x: 30, y: 52 }],
  Q: [{ x: 50, y: 15 }, { x: 25, y: 40 }, { x: 25, y: 60 }, { x: 50, y: 85 }, { x: 75, y: 60 }, { x: 75, y: 40 }, { x: 50, y: 15 }, { x: 60, y: 70 }, { x: 80, y: 90 }],
  R: [{ x: 30, y: 85 }, { x: 30, y: 15 }, { x: 65, y: 22 }, { x: 65, y: 45 }, { x: 30, y: 52 }, { x: 70, y: 85 }],
  S: [{ x: 70, y: 25 }, { x: 40, y: 25 }, { x: 30, y: 40 }, { x: 55, y: 50 }, { x: 70, y: 65 }, { x: 60, y: 80 }, { x: 30, y: 80 }],
  T: [{ x: 25, y: 15 }, { x: 75, y: 15 }, { x: 50, y: 15 }, { x: 50, y: 85 }],
  U: [{ x: 30, y: 15 }, { x: 30, y: 70 }, { x: 50, y: 85 }, { x: 70, y: 70 }, { x: 70, y: 15 }],
  V: [{ x: 25, y: 15 }, { x: 50, y: 85 }, { x: 75, y: 15 }],
  W: [{ x: 15, y: 15 }, { x: 35, y: 85 }, { x: 50, y: 40 }, { x: 65, y: 85 }, { x: 85, y: 15 }],
  X: [{ x: 25, y: 15 }, { x: 75, y: 85 }, { x: 75, y: 15 }, { x: 25, y: 85 }],
  Y: [{ x: 25, y: 15 }, { x: 50, y: 50 }, { x: 75, y: 15 }, { x: 50, y: 50 }, { x: 50, y: 85 }],
  Z: [{ x: 25, y: 15 }, { x: 75, y: 15 }, { x: 25, y: 85 }, { x: 75, y: 85 }],
};

// Fallback simples para minúsculas: usa checkpoints da maiúscula.
export function getCheckpoints(letra: string): Checkpoint[] {
  const up = letra.toUpperCase();
  return CP[up] ?? [
    { x: 30, y: 20 },
    { x: 50, y: 50 },
    { x: 70, y: 80 },
  ];
}
