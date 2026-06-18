import { Lesson, LessonStep } from "../types/lesson";

/* ──────────────────────────────────────────────────────────
   Matemática — 1º Ano (BNCC EF01MA06)
   Banco com 30 atividades variadas (contar, somar, subtrair,
   sequência numérica). A fila rotativa é aplicada pelo player.
   ────────────────────────────────────────────────────────── */

type Mascot = "pip" | "pipa";

function row(n: number, spacing = 70): { x: number; y: number }[] {
  if (n <= 0) return [];
  const total = (n - 1) * spacing;
  return Array.from({ length: n }, (_, i) => ({ x: -total / 2 + i * spacing, y: 0 }));
}

const plural = (obj: string) =>
  obj.endsWith("S") ? obj.toLowerCase() : (obj + "s").toLowerCase();

let _uid = 0;
const eid = (id: string) => `${id}-e${_uid++}`;

function mkCount(
  id: string,
  mascot: Mascot,
  obj: string,
  n: number,
  options: number[],
): LessonStep {
  return {
    id,
    phase: "practice",
    type: "interaction",
    mascot,
    speech: `Quantas ${plural(obj)} você vê?`,
    elements: row(n).map((p, i) => ({
      id: eid(id),
      type: "text",
      content: obj,
      position: p,
      animation: "pop",
      delay: 0.2 + i * 0.2,
    })),
    interaction: { type: "click", correctAnswer: String(n), options: options.map(String) },
  };
}

function mkAdd(
  id: string,
  mascot: Mascot,
  obj: string,
  a: number,
  b: number,
  options: number[],
): LessonStep {
  const els: NonNullable<LessonStep["elements"]> = [];
  const sp = 55;
  const leftStart = -((a - 1) * sp) - 40;
  for (let i = 0; i < a; i++)
    els.push({
      id: eid(id),
      type: "text",
      content: obj,
      position: { x: leftStart + i * sp, y: 0 },
      animation: "pop",
      delay: 0.2 + i * 0.15,
    });
  els.push({
    id: eid(id),
    type: "text",
    content: "+",
    position: { x: 0, y: 0 },
    animation: "fade",
    delay: 0.2 + a * 0.15,
  });
  const rightStart = 40;
  for (let i = 0; i < b; i++)
    els.push({
      id: eid(id),
      type: "text",
      content: obj,
      position: { x: rightStart + i * sp, y: 0 },
      animation: "pop",
      delay: 0.4 + a * 0.15 + i * 0.15,
    });
  return {
    id,
    phase: "practice",
    type: "interaction",
    mascot,
    speech: `Quanto é ${a} mais ${b}?`,
    elements: els,
    interaction: { type: "click", correctAnswer: String(a + b), options: options.map(String) },
  };
}

function mkSub(
  id: string,
  mascot: Mascot,
  obj: string,
  total: number,
  take: number,
  options: number[],
): LessonStep {
  return {
    id,
    phase: "practice",
    type: "interaction",
    mascot,
    speech: `Você tinha ${total} ${plural(obj)} e tirou ${take}. Quantas sobraram?`,
    elements: row(total).map((p, i) => ({
      id: eid(id),
      type: "text",
      content: obj,
      position: p,
      animation: "pop",
      delay: 0.2 + i * 0.15,
    })),
    interaction: {
      type: "click",
      correctAnswer: String(total - take),
      options: options.map(String),
    },
  };
}

function mkNext(
  id: string,
  mascot: Mascot,
  seq: number[],
  answer: number,
  options: number[],
): LessonStep {
  return {
    id,
    phase: "practice",
    type: "interaction",
    mascot,
    speech: "Qual número vem depois?",
    elements: [
      {
        id: eid(id),
        type: "text",
        content: seq.join("  ") + "  ?",
        position: { x: 0, y: 0 },
        animation: "pop",
        delay: 0.2,
      },
    ],
    interaction: { type: "click", correctAnswer: String(answer), options: options.map(String) },
  };
}

const STEPS: LessonStep[] = [
  mkCount("m01", "pipa", "MAÇA", 2, [1, 2, 3]),
  mkCount("m02", "pip", "ESTRELA", 3, [2, 3, 4]),
  mkAdd("m03", "pipa", "MAÇA", 1, 2, [2, 3, 4]),
  mkSub("m04", "pip", "PEIXE", 3, 1, [1, 2, 3]),
  mkNext("m05", "pipa", [1, 2, 3], 4, [3, 4, 5]),
  mkCount("m06", "pip", "BANANA", 4, [3, 4, 5]),
  mkAdd("m07", "pipa", "FLOR", 2, 2, [3, 4, 5]),
  mkSub("m08", "pip", "BORBOLETA", 4, 2, [1, 2, 3]),
  mkNext("m09", "pipa", [2, 3, 4], 5, [4, 5, 6]),
  mkCount("m10", "pip", "ABELHA", 5, [4, 5, 6]),
  mkAdd("m11", "pipa", "COELHO", 3, 2, [4, 5, 6]),
  mkSub("m12", "pip", "MORANGO", 5, 2, [2, 3, 4]),
  mkNext("m13", "pipa", [3, 4, 5], 6, [5, 6, 7]),
  mkAdd("m14", "pipa", "UVA", 2, 3, [4, 5, 6]),
  mkSub("m15", "pip", "PATO", 6, 3, [2, 3, 4]),
  mkCount("m16", "pipa", "CACHORRO", 3, [2, 3, 4]),
  mkAdd("m17", "pipa", "MAÇA", 4, 1, [4, 5, 6]),
  mkSub("m18", "pip", "PEIXE", 5, 4, [1, 2, 3]),
  mkNext("m19", "pipa", [4, 5, 6], 7, [6, 7, 8]),
  mkAdd("m20", "pipa", "ESTRELA", 3, 3, [5, 6, 7]),
  mkSub("m21", "pip", "BANANA", 6, 2, [3, 4, 5]),
  mkAdd("m22", "pipa", "ABELHA", 4, 2, [5, 6, 7]),
  mkSub("m23", "pip", "FLOR", 4, 1, [2, 3, 4]),
  mkNext("m24", "pipa", [5, 6, 7], 8, [7, 8, 9]),
  mkAdd("m25", "pipa", "BORBOLETA", 2, 4, [5, 6, 7]),
  mkSub("m26", "pip", "MORANGO", 6, 4, [1, 2, 3]),
  mkAdd("m27", "pipa", "COELHO", 4, 3, [6, 7, 8]),
  mkSub("m28", "pip", "PATO", 5, 3, [1, 2, 3]),
  mkAdd("m29", "pipa", "UVA", 3, 4, [6, 7, 8]),
  mkNext("m30", "pipa", [6, 7, 8], 9, [8, 9, 10]),
];

export const MATH_1ANO_LESSON: Lesson = {
  id: "matematica-1ano",
  title: "Matemática Divertida",
  bncc_field: "espacos_tempos",
  skill_bncc: "EF01MA06",
  steps: STEPS,
};
