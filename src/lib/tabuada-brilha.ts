/** Tabuada Brilha — ensino por CPA (Concreto → Figura → Abstrato), estratégias por tabuada e revisão espaçada. */

// Ordem pedagógica: das tabuadas com padrão mais simples para as que dependem de outras.
export const ORDEM_TABUADAS = [1, 10, 2, 5, 3, 4, 9, 6, 7, 8] as const;

export type Estrategia = { titulo: string; explicacao: string; passos: string[] };

export const ESTRATEGIAS: Record<number, Estrategia> = {
  1: { titulo: "Um grupo só", explicacao: "Vezes 1 é ter só um grupo. O número não muda!", passos: ["1 × 4 é um grupo com 4.", "Então 1 × 4 = 4.", "Qualquer número vezes 1 é ele mesmo."] },
  10: { titulo: "Coloque um zero", explicacao: "Vezes 10 é contar de 10 em 10. O número ganha um zero no final.", passos: ["3 × 10: conte 10, 20, 30.", "Veja: é o 3 com um zero no fim.", "3 × 10 = 30."] },
  2: { titulo: "É o dobro", explicacao: "Vezes 2 é o dobro: o mesmo número duas vezes.", passos: ["2 × 6 é 6 + 6.", "6 + 6 = 12.", "Então 2 × 6 = 12."] },
  5: { titulo: "De 5 em 5 na mão", explicacao: "Cada mão tem 5 dedos. Conte de 5 em 5, um dedo para cada salto.", passos: ["5 × 4: levante 4 dedos.", "Conte 5, 10, 15, 20.", "5 × 4 = 20. O resultado sempre termina em 0 ou 5."] },
  3: { titulo: "Dobro mais um grupo", explicacao: "Vezes 3 é o dobro e mais uma vez o número.", passos: ["3 × 4: o dobro de 4 é 8.", "Mais um grupo de 4: 8 + 4.", "3 × 4 = 12."] },
  4: { titulo: "Dobro do dobro", explicacao: "Vezes 4 é dobrar e dobrar de novo.", passos: ["4 × 6: o dobro de 6 é 12.", "O dobro de 12 é 24.", "4 × 6 = 24."] },
  9: { titulo: "Vezes 10 menos um grupo", explicacao: "Faça vezes 10 e tire um grupo. Nos dedos: abaixe o dedo da conta.", passos: ["9 × 4: 10 × 4 = 40.", "Tire um grupo de 4: 40 − 4.", "9 × 4 = 36. Os algarismos somam 9: 3 + 6."] },
  6: { titulo: "Vezes 5 mais um grupo", explicacao: "Vezes 6 é o vezes 5 que você já sabe, mais um grupo.", passos: ["6 × 4: 5 × 4 = 20.", "Mais um grupo de 4: 20 + 4.", "6 × 4 = 24."] },
  7: { titulo: "Vezes 5 mais vezes 2", explicacao: "Separe o 7 em 5 e 2. Faça as duas contas e junte.", passos: ["7 × 4: 5 × 4 = 20.", "2 × 4 = 8.", "20 + 8 = 28. Então 7 × 4 = 28."] },
  8: { titulo: "Dobro, dobro, dobro", explicacao: "Vezes 8 é dobrar três vezes seguidas.", passos: ["8 × 3: o dobro de 3 é 6.", "O dobro de 6 é 12.", "O dobro de 12 é 24. 8 × 3 = 24."] },
};

export type Questao = { a: number; b: number; resposta: number; opcoes: number[] };

function embaralhar<T>(lista: T[], seed: number): T[] {
  const r = [...lista];
  let s = seed + 7;
  for (let i = r.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

/** 3 opções: a certa + 2 erros comuns (grupo a mais/a menos, somar em vez de multiplicar). */
export function opcoesPara(a: number, b: number, seed = 0): number[] {
  const certo = a * b;
  const erros = [a * (b + 1), a * (b - 1), (a + 1) * b, a + b, certo + 1, certo + 2]
    .filter((v, i, arr) => v > 0 && v !== certo && arr.indexOf(v) === i);
  return embaralhar([certo, ...erros.slice(0, 2)], seed + a * 11 + b);
}

export function explicarErro(a: number, b: number): string {
  return `${a} × ${b} são ${a} grupos de ${b}. Contando de ${b} em ${b}: ${Array.from({ length: a }, (_, i) => b * (i + 1)).join(", ")}. O resultado é ${a * b}.`;
}

/** Rodada curta de 5 contas; contas erradas antes voltam primeiro (revisão espaçada). */
export function criarRodada(n: number, seed: number, revisar: string[] = []): Questao[] {
  const pendentes = revisar.filter((k) => k.startsWith(`${n}x`)).map((k) => Number(k.split("x")[1]));
  const base = embaralhar(Array.from({ length: 10 }, (_, i) => i + 1), seed);
  const bs = [...new Set([...pendentes, ...base])].slice(0, 5);
  return bs.map((b, i) => ({ a: n, b, resposta: n * b, opcoes: opcoesPara(n, b, seed + i) }));
}

// ---------- Progresso (por criança, neste aparelho) ----------
export type ProgressoTabuada = { concluidas: number[]; jogos: Record<number, string[]>; revisar: string[] };
const vazio = (): ProgressoTabuada => ({ concluidas: [], jogos: {}, revisar: [] });
const chave = (childId?: string | null) => `tabuada-brilha:v2:${childId ?? "anon"}`;

export function lerProgresso(childId?: string | null): ProgressoTabuada {
  if (typeof window === "undefined") return vazio();
  try { return { ...vazio(), ...JSON.parse(localStorage.getItem(chave(childId)) || "{}") }; } catch { return vazio(); }
}
export function salvarProgresso(childId: string | null | undefined, p: ProgressoTabuada) {
  if (typeof window !== "undefined") localStorage.setItem(chave(childId), JSON.stringify(p));
}
export function tabuadaLiberada(n: number, concluidas: number[]): boolean {
  const i = ORDEM_TABUADAS.indexOf(n as (typeof ORDEM_TABUADAS)[number]);
  return i === 0 || concluidas.includes(ORDEM_TABUADAS[i - 1]);
}

export const JOGOS = ["pula", "sequencia", "baloes", "memoria"] as const;
export type Jogo = (typeof JOGOS)[number];

// ---------- Compatibilidade com o modelo antigo ----------
export type NivelTabuada = "facil" | "medio" | "desafio";
export const CONFIG_TABUADA: Record<NivelTabuada, { nome: string; fatores: number[]; dica: string }> = {
  facil: { nome: "Fácil", fatores: [2, 5, 10], dica: "Conte em saltos e procure o padrão." },
  medio: { nome: "Médio", fatores: [3, 4, 6], dica: "Separe em grupos menores que você já conhece." },
  desafio: { nome: "Desafio", fatores: [7, 8, 9], dica: "Use uma conta vizinha: 8 × 6 é 7 × 6 mais 6." },
};
export function criarQuestaoTabuada(nivel: NivelTabuada, rodada: number) {
  const fatores = CONFIG_TABUADA[nivel].fatores;
  const a = fatores[rodada % fatores.length];
  const b = ((rodada * 7 + fatores.length) % 10) + 1;
  return { a, b, resposta: a * b, estrategia: `${a} grupos de ${b} formam ${a * b}. Também podemos somar ${b}, ${a} vezes.` };
}
