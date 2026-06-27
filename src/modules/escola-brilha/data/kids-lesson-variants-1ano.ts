import type { KidsLesson, KidsScene } from "../types/kids-lesson";

/**
 * Variações de aulas Kids do 1º Ano — organizadas por NÍVEL.
 * Cada código BNCC pode ter várias aulas progressivas, dando continuidade.
 * O player exibe um seletor de nível quando há mais de uma aula.
 */

// ───────── Builders ─────────

const numByExt = (n: number): string => {
  const m: Record<number, string> = {
    0: "zero", 1: "um", 2: "dois", 3: "três", 4: "quatro", 5: "cinco",
    6: "seis", 7: "sete", 8: "oito", 9: "nove", 10: "dez",
    11: "onze", 12: "doze", 13: "treze", 14: "quatorze", 15: "quinze",
    16: "dezesseis", 17: "dezessete", 18: "dezoito", 19: "dezenove", 20: "vinte",
  };
  return m[n] ?? String(n);
};

function buildAdd(nivel: number, pairs: [number, number][], objeto: string): KidsLesson {
  const titulo = `Mais — Nível ${nivel}`;
  const scenes: KidsScene[] = [
    { kind: "intro", mascot: nivel % 2 ? "pip" : "pipa", titulo: `Nível ${nivel}: vamos somar!`, fala: `Hoje vamos praticar a soma. Nível ${nivel}!` },
    { kind: "concept", titulo: "Lembrando o sinal de mais", simbolo: "+", fala: "O sinal de mais junta duas quantidades." },
  ];
  pairs.forEach(([a, b]) => {
    scenes.push({ kind: "step_count", titulo: `${a} + ${b}`, a, b, objeto, fala: `${numByExt(a)} em cima, ${numByExt(b)} embaixo.` });
    scenes.push({ kind: "step_join", titulo: "Juntando!", a, b, objeto, fala: `Vamos contar tudo: dá ${numByExt(a + b)}!` });
    scenes.push({ kind: "step_vertical_sum", titulo: "Conta escrita", a, b, fala: `${numByExt(a)} mais ${numByExt(b)} é igual a ${numByExt(a + b)}.` });
  });
  scenes.push({ kind: "practice_count", titulo: "Sua vez!", a: pairs[0][0], b: pairs[0][1], objeto, fala: "Toque em cada um e conte com a gente." });
  scenes.push({ kind: "summary", titulo: "Você aprendeu!", itens: pairs.map(([a, b]) => `${a} + ${b} = ${a + b}`), fala: "Mandou bem demais!" });
  scenes.push({ kind: "celebrate", titulo: "Parabéns!", fala: "Você ganhou cem pontinhos!" });
  return { codigo_bncc: "EF01MA03", titulo, disciplina: "Matemática", serie: "1º Ano", xp: 100, cor: "blue", scenes };
}

function buildSub(nivel: number, pairs: [number, number][], objeto: string): KidsLesson {
  const titulo = `Menos — Nível ${nivel}`;
  const scenes: KidsScene[] = [
    { kind: "intro", mascot: nivel % 2 ? "pipa" : "pip", titulo: `Nível ${nivel}: vamos tirar!`, fala: `Hoje vamos praticar a subtração. Nível ${nivel}!` },
    { kind: "concept", titulo: "Lembrando o sinal de menos", simbolo: "−", fala: "O sinal de menos quer dizer tirar." },
  ];
  pairs.forEach(([a, b]) => {
    scenes.push({ kind: "step_subtract", titulo: `${a} − ${b}`, a, b, objeto, fala: `Tinha ${numByExt(a)}. Vou tirar ${numByExt(b)}. Sobraram ${numByExt(a - b)}!` });
    scenes.push({ kind: "step_vertical_sub", titulo: "Conta escrita", a, b, fala: `${numByExt(a)} menos ${numByExt(b)} é igual a ${numByExt(a - b)}.` });
  });
  scenes.push({ kind: "summary", titulo: "Você aprendeu!", itens: pairs.map(([a, b]) => `${a} − ${b} = ${a - b}`), fala: "Show de bola!" });
  scenes.push({ kind: "celebrate", titulo: "Parabéns!", fala: "Você ganhou cem pontinhos!" });
  return { codigo_bncc: "EF01MA03", titulo, disciplina: "Matemática", serie: "1º Ano", xp: 100, cor: "violet", scenes };
}

function buildEqual(nivel: number, nums: number[], objeto: string): KidsLesson {
  const titulo = `Igual — Nível ${nivel}`;
  const scenes: KidsScene[] = [
    { kind: "intro", mascot: nivel % 2 ? "pip" : "pipa", titulo: `Nível ${nivel}: quando são iguais?`, fala: "Quando dois grupos têm a mesma quantidade, dizemos que são iguais." },
    { kind: "concept", titulo: "Sinal de igual", simbolo: "=", fala: "O sinal de igual mostra que os dois lados têm a mesma quantidade." },
  ];
  nums.forEach((n) => {
    scenes.push({ kind: "step_equal", titulo: `${n} = ${n}`, n, objeto, fala: `${numByExt(n)} de um lado, ${numByExt(n)} do outro. Iguais!` });
  });
  scenes.push({ kind: "summary", titulo: "Você aprendeu!", itens: nums.map((n) => `${n} = ${n}`), fala: "Você é demais!" });
  scenes.push({ kind: "celebrate", titulo: "Parabéns!", fala: "Você ganhou cem pontinhos!" });
  return { codigo_bncc: "EF01MA03", titulo, disciplina: "Matemática", serie: "1º Ano", xp: 100, cor: "green", scenes };
}

function buildCount(codigo: string, nivel: number, ate: number, objeto: string): KidsLesson {
  const halfA = Math.min(10, Math.ceil(ate / 2));
  const halfB = ate - halfA;
  return {
    codigo_bncc: codigo,
    titulo: `Contar até ${ate} — Nível ${nivel}`,
    disciplina: "Matemática",
    serie: "1º Ano",
    xp: 100,
    cor: "blue",
    scenes: [
      { kind: "intro", mascot: nivel % 2 ? "pip" : "pipa", titulo: `Nível ${nivel}: contar até ${ate}`, fala: `Vamos contar passo a passo até ${numByExt(ate)}.` },
      { kind: "concept", titulo: `Meta: ${ate}`, simbolo: String(ate), fala: `Hoje a missão é chegar até ${numByExt(ate)} sem pular nenhum número.` },
      { kind: "step_count", titulo: `Primeira parte: ${halfA}`, a: halfA, b: 0, objeto, fala: `Vamos começar contando ${numByExt(halfA)}.` },
      { kind: "step_join", titulo: `Agora até ${ate}`, a: halfA, b: halfB, objeto, fala: `Continuando até ${numByExt(ate)}.` },
      { kind: "practice_count", titulo: "Sua vez!", a: Math.min(5, ate), b: Math.min(3, Math.max(0, ate - 5)), objeto, fala: "Toque em cada um e conte com a gente." },
      { kind: "summary", titulo: "Você aprendeu!", itens: [`Contar até ${ate}`, "Sem pular números", "Um de cada vez"], fala: "Muito bem!" },
      { kind: "celebrate", titulo: "Parabéns!", fala: "Você ganhou cem pontinhos!" },
    ],
  };
}

// ───────── Variantes ─────────

const EF01MA03_VARIANTS: KidsLesson[] = [
  // 4 aulas de MAIS
  buildAdd(1, [[1, 1], [2, 1], [1, 2]], "🍎"),
  buildAdd(2, [[2, 2], [3, 1], [2, 3]], "🍓"),
  buildAdd(3, [[3, 2], [4, 1], [3, 3]], "🧸"),
  buildAdd(4, [[4, 3], [5, 2], [4, 4]], "⭐"),
  // 4 aulas de MENOS
  buildSub(1, [[2, 1], [3, 1], [3, 2]], "🍎"),
  buildSub(2, [[4, 1], [4, 2], [4, 3]], "🍊"),
  buildSub(3, [[5, 2], [6, 3], [6, 2]], "🍇"),
  buildSub(4, [[7, 3], [8, 4], [9, 5]], "🍪"),
  // 4 aulas de IGUAL
  buildEqual(1, [1, 2], "🍎"),
  buildEqual(2, [3, 4], "🍓"),
  buildEqual(3, [5, 6], "⭐"),
  buildEqual(4, [7, 8], "🎈"),
];

const EF01MA01_VARIANTS: KidsLesson[] = [
  buildCount("EF01MA01", 1, 10, "🟢"),
  buildCount("EF01MA01", 2, 15, "🟡"),
  buildCount("EF01MA01", 3, 20, "🔵"),
];

const EF01MA04_VARIANTS: KidsLesson[] = [
  buildCount("EF01MA04", 1, 25, "🔵"),
  buildCount("EF01MA04", 2, 50, "🟢"),
  buildCount("EF01MA04", 3, 75, "🟡"),
  buildCount("EF01MA04", 4, 100, "🟣"),
];

const EF01MA06_VARIANTS: KidsLesson[] = [
  { ...buildAdd(1, [[1, 1], [2, 1]], "🍓"), codigo_bncc: "EF01MA06", titulo: "Adição até 10 — Nível 1" },
  { ...buildAdd(2, [[2, 2], [3, 2]], "🍎"), codigo_bncc: "EF01MA06", titulo: "Adição até 10 — Nível 2" },
  { ...buildAdd(3, [[3, 3], [4, 3]], "🍇"), codigo_bncc: "EF01MA06", titulo: "Adição até 10 — Nível 3" },
  { ...buildAdd(4, [[5, 4], [4, 5]], "⭐"), codigo_bncc: "EF01MA06", titulo: "Adição até 10 — Nível 4" },
];

const EF01MA08_VARIANTS: KidsLesson[] = [
  { ...buildSub(1, [[2, 1], [3, 1]], "🍎"), codigo_bncc: "EF01MA08", titulo: "Subtração até 10 — Nível 1" },
  { ...buildSub(2, [[4, 2], [5, 2]], "🍊"), codigo_bncc: "EF01MA08", titulo: "Subtração até 10 — Nível 2" },
  { ...buildSub(3, [[6, 3], [7, 3]], "🍇"), codigo_bncc: "EF01MA08", titulo: "Subtração até 10 — Nível 3" },
  { ...buildSub(4, [[8, 4], [9, 5]], "🍪"), codigo_bncc: "EF01MA08", titulo: "Subtração até 10 — Nível 4" },
];

export const KIDS_LESSON_VARIANTS_1ANO: Record<string, KidsLesson[]> = {
  EF01MA01: EF01MA01_VARIANTS,
  EF01MA03: EF01MA03_VARIANTS,
  EF01MA04: EF01MA04_VARIANTS,
  EF01MA06: EF01MA06_VARIANTS,
  EF01MA08: EF01MA08_VARIANTS,
};

export function getKidsLessonVariants(codigo: string | undefined): KidsLesson[] {
  if (!codigo) return [];
  return KIDS_LESSON_VARIANTS_1ANO[codigo] ?? [];
}
