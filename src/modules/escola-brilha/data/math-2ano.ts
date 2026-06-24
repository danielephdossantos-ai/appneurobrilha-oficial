import { Lesson, LessonStep } from "../types/lesson";

/* Matemática 2º Ano — 30 atividades (BNCC EF02MA*) */

type Mascot = "pip" | "pipa";
let _uid = 0;
const eid = (id: string) => `${id}-e${_uid++}`;

function mkAdd(id: string, mascot: Mascot, a: number, b: number, options: number[]): LessonStep {
  return {
    id,
    phase: "practice",
    type: "interaction",
    mascot,
    speech: `Quanto é ${a} mais ${b}?`,
    elements: [
      { id: eid(id), type: "text", content: `${a} + ${b} = ?`, position: { x: 0, y: 0 }, animation: "pop", delay: 0.2 },
    ],
    interaction: { type: "click", correctAnswer: String(a + b), options: options.map(String) },
  };
}

function mkSub(id: string, mascot: Mascot, a: number, b: number, options: number[]): LessonStep {
  return {
    id,
    phase: "practice",
    type: "interaction",
    mascot,
    speech: `Quanto é ${a} menos ${b}?`,
    elements: [
      { id: eid(id), type: "text", content: `${a} - ${b} = ?`, position: { x: 0, y: 0 }, animation: "pop", delay: 0.2 },
    ],
    interaction: { type: "click", correctAnswer: String(a - b), options: options.map(String) },
  };
}

function mkSeq(
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
    speech: "Qual número completa a sequência?",
    elements: [
      { id: eid(id), type: "text", content: seq.join(", ") + ", ?", position: { x: 0, y: 0 }, animation: "pop", delay: 0.2 },
    ],
    interaction: { type: "click", correctAnswer: String(answer), options: options.map(String) },
  };
}

function mkBefore(id: string, mascot: Mascot, n: number, options: number[]): LessonStep {
  return {
    id,
    phase: "practice",
    type: "interaction",
    mascot,
    speech: `Qual é o número que vem antes de ${n}?`,
    interaction: { type: "click", correctAnswer: String(n - 1), options: options.map(String) },
  };
}

function mkAfter(id: string, mascot: Mascot, n: number, options: number[]): LessonStep {
  return {
    id,
    phase: "practice",
    type: "interaction",
    mascot,
    speech: `Qual é o número que vem depois de ${n}?`,
    interaction: { type: "click", correctAnswer: String(n + 1), options: options.map(String) },
  };
}

const STEPS: LessonStep[] = [
  mkAdd("n01", "pip", 10, 5, [12, 15, 20]),
  mkAdd("n02", "pipa", 12, 7, [18, 19, 20]),
  mkAdd("n03", "pip", 15, 4, [18, 19, 21]),
  mkAdd("n04", "pipa", 20, 10, [25, 30, 35]),
  mkAdd("n05", "pip", 8, 9, [16, 17, 18]),
  mkAdd("n06", "pipa", 14, 6, [18, 20, 22]),
  mkSub("n07", "pip", 8, 3, [4, 5, 6]),
  mkSub("n08", "pipa", 15, 5, [9, 10, 11]),
  mkSub("n09", "pip", 20, 8, [10, 12, 14]),
  mkSub("n10", "pipa", 18, 9, [8, 9, 10]),
  mkSub("n11", "pip", 25, 10, [12, 15, 18]),
  mkSub("n12", "pipa", 30, 12, [16, 18, 20]),
  mkSeq("n13", "pip", [10, 20, 30], 40, [35, 40, 50]),
  mkSeq("n14", "pipa", [2, 4, 6], 8, [7, 8, 10]),
  mkSeq("n15", "pip", [5, 10, 15], 20, [18, 20, 25]),
  mkSeq("n16", "pipa", [3, 6, 9], 12, [10, 11, 12]),
  mkSeq("n17", "pip", [50, 60, 70], 80, [75, 80, 90]),
  mkSeq("n18", "pipa", [1, 3, 5], 7, [6, 7, 9]),
  mkBefore("n19", "pip", 15, [13, 14, 16]),
  mkBefore("n20", "pipa", 20, [18, 19, 21]),
  mkBefore("n21", "pip", 30, [28, 29, 31]),
  mkBefore("n22", "pipa", 50, [48, 49, 51]),
  mkAfter("n23", "pip", 19, [18, 20, 21]),
  mkAfter("n24", "pipa", 29, [28, 30, 31]),
  mkAfter("n25", "pip", 49, [48, 50, 51]),
  mkAfter("n26", "pipa", 99, [98, 100, 101]),
  mkAdd("n27", "pip", 25, 25, [40, 45, 50]),
  mkSub("n28", "pipa", 50, 20, [25, 30, 35]),
  mkAdd("n29", "pip", 33, 7, [38, 39, 40]),
  mkSeq("n30", "pipa", [10, 15, 20], 25, [22, 25, 30]),
];

export const MATH_2ANO_LESSON: Lesson = {
  id: "matematica-2ano",
  title: "Matemática do 2º Ano",
  bncc_field: "matematica",
  skill_bncc: "EF02MA01",
  steps: STEPS,
};
