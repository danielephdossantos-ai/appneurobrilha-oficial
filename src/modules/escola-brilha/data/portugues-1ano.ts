import { Lesson, LessonStep } from "../types/lesson";

/* ──────────────────────────────────────────────────────────
   Português — 1º Ano (BNCC EF01LP*)
   30 atividades baseadas em IMAGEM (criança não-alfabetizada):
   - primeira sílaba do objeto
   - primeira letra do objeto
   - escolher a imagem que começa com a letra/sílaba
   A IA fala a pergunta; a criança clica.
   ────────────────────────────────────────────────────────── */

type Mascot = "pip" | "pipa";

let _uid = 0;
const eid = (id: string) => `${id}-e${_uid++}`;

/** Sílaba: "Qual a primeira sílaba de [imagem]?" */
function mkSyllable(
  id: string,
  mascot: Mascot,
  obj: string,
  spoken: string,
  correct: string,
  options: string[],
): LessonStep {
  return {
    id,
    phase: "practice",
    type: "interaction",
    mascot,
    speech: `Qual é a primeira sílaba de ${spoken}?`,
    elements: [
      {
        id: eid(id),
        type: "text",
        content: obj,
        position: { x: 0, y: 0 },
        animation: "pop",
        delay: 0.3,
      },
    ],
    interaction: { type: "click", correctAnswer: correct, options },
  };
}

/** Letra: "Com qual letra começa [imagem]?" */
function mkLetter(
  id: string,
  mascot: Mascot,
  obj: string,
  spoken: string,
  correct: string,
  options: string[],
): LessonStep {
  return {
    id,
    phase: "practice",
    type: "interaction",
    mascot,
    speech: `Com qual letra começa ${spoken}?`,
    elements: [
      {
        id: eid(id),
        type: "text",
        content: obj,
        position: { x: 0, y: 0 },
        animation: "pop",
        delay: 0.3,
      },
    ],
    interaction: { type: "click", correctAnswer: correct, options },
  };
}

/** Imagem: "Qual imagem começa com [letra]?" — opções são objetos. */
function mkPick(
  id: string,
  mascot: Mascot,
  letterSpoken: string,
  correctObj: string,
  options: string[],
): LessonStep {
  return {
    id,
    phase: "practice",
    type: "interaction",
    mascot,
    speech: `Qual imagem começa com a letra ${letterSpoken}?`,
    interaction: { type: "click", correctAnswer: correctObj, options },
  };
}

const STEPS: LessonStep[] = [
  // Primeira sílaba (10)
  mkSyllable("p01", "pipa", "CASA", "casa", "CA", ["CA", "BO", "PA"]),
  mkSyllable("p02", "pip", "BOLA", "bola", "BO", ["BO", "CA", "MA"]),
  mkSyllable("p03", "pipa", "GATO", "gato", "GA", ["GA", "PA", "TO"]),
  mkSyllable("p04", "pip", "PATO", "pato", "PA", ["PA", "GA", "MA"]),
  mkSyllable("p05", "pipa", "BOLO", "bolo", "BO", ["BO", "LO", "PA"]),
  mkSyllable("p06", "pip", "MAÇA", "maçã", "MA", ["MA", "ÇA", "CA"]),
  mkSyllable("p07", "pipa", "BANANA", "banana", "BA", ["BA", "NA", "MA"]),
  mkSyllable("p08", "pip", "FLOR", "flor", "FLO", ["FLO", "BO", "FA"]),
  mkSyllable("p09", "pipa", "PEIXE", "peixe", "PEI", ["PEI", "BA", "GA"]),
  mkSyllable("p10", "pip", "RATO", "rato", "RA", ["RA", "GA", "PA"]),

  // Primeira letra (10)
  mkLetter("p11", "pipa", "CASA", "casa", "C", ["C", "B", "P"]),
  mkLetter("p12", "pip", "BOLA", "bola", "B", ["B", "G", "M"]),
  mkLetter("p13", "pipa", "GATO", "gato", "G", ["G", "C", "T"]),
  mkLetter("p14", "pip", "PATO", "pato", "P", ["P", "G", "B"]),
  mkLetter("p15", "pipa", "BOLO", "bolo", "B", ["B", "P", "L"]),
  mkLetter("p16", "pip", "MAÇA", "maçã", "M", ["M", "N", "B"]),
  mkLetter("p17", "pipa", "BANANA", "banana", "B", ["B", "N", "A"]),
  mkLetter("p18", "pip", "FLOR", "flor", "F", ["F", "B", "L"]),
  mkLetter("p19", "pipa", "PEIXE", "peixe", "P", ["P", "B", "G"]),
  mkLetter("p20", "pip", "SOL", "sol", "S", ["S", "C", "L"]),

  // Escolher imagem pela letra (10)
  mkPick("p21", "pipa", "B", "BOLA", ["BOLA", "GATO", "CASA"]),
  mkPick("p22", "pip", "C", "CASA", ["BOLA", "CASA", "PATO"]),
  mkPick("p23", "pipa", "G", "GATO", ["PATO", "BOLO", "GATO"]),
  mkPick("p24", "pip", "P", "PATO", ["MAÇA", "PATO", "FLOR"]),
  mkPick("p25", "pipa", "M", "MAÇA", ["MAÇA", "GATO", "SOL"]),
  mkPick("p26", "pip", "F", "FLOR", ["BOLA", "FLOR", "RATO"]),
  mkPick("p27", "pipa", "B", "BANANA", ["BANANA", "PEIXE", "GATO"]),
  mkPick("p28", "pip", "P", "PEIXE", ["CASA", "FLOR", "PEIXE"]),
  mkPick("p29", "pipa", "R", "RATO", ["RATO", "BOLA", "SOL"]),
  mkPick("p30", "pip", "S", "SOL", ["BOLO", "SOL", "PATO"]),
];

export const PORTUGUES_1ANO_LESSON: Lesson = {
  id: "portugues-1ano",
  title: "Letras e Sílabas",
  bncc_field: "escuta_fala",
  skill_bncc: "EF01LP06",
  steps: STEPS,
};
