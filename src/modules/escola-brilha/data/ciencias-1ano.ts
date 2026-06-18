import { Lesson, LessonStep } from "../types/lesson";

/* ──────────────────────────────────────────────────────────
   Ciências — 1º Ano (BNCC EF01CI02 — Corpo humano / Sentidos)
   Atividades 100% VISUAIS (criança não-alfabetizada):
   a IA fala a pergunta, a criança clica na imagem certa.
   ────────────────────────────────────────────────────────── */

type Mascot = "pip" | "pipa";

let _uid = 0;
const eid = (id: string) => `${id}-e${_uid++}`;

/** Mostra um estímulo (objeto/cena) e pergunta qual sentido usamos. */
function mkSentidoEstimulo(
  id: string,
  mascot: Mascot,
  estimulo: string,
  estimuloFalado: string,
  pergunta: string,
  correctSentido: string,
  options: string[],
): LessonStep {
  return {
    id,
    phase: "practice",
    type: "interaction",
    mascot,
    speech: `${pergunta} ${estimuloFalado}?`,
    elements: [
      {
        id: eid(id),
        type: "text",
        content: estimulo,
        position: { x: 0, y: 0 },
        animation: "pop",
        delay: 0.3,
      },
    ],
    interaction: { type: "click", correctAnswer: correctSentido, options },
  };
}

/** Mostra um sentido e pergunta o que ele faz (opções de estímulos). */
function mkSentidoFunc(
  id: string,
  mascot: Mascot,
  sentido: string,
  sentidoFalado: string,
  pergunta: string,
  correct: string,
  options: string[],
): LessonStep {
  return {
    id,
    phase: "practice",
    type: "interaction",
    mascot,
    speech: pergunta,
    elements: [
      {
        id: eid(id),
        type: "text",
        content: sentido,
        position: { x: 0, y: 0 },
        animation: "pop",
        delay: 0.3,
      },
    ],
    interaction: { type: "click", correctAnswer: correct, options },
  };
}

const STEPS: LessonStep[] = [
  // Apresentação dos 5 sentidos — qual parte do corpo?
  mkSentidoEstimulo("c01", "pipa", "FLOR", "a flor", "Com que parte do corpo a gente cheira", "NARIZ", ["NARIZ", "OLHO", "MAO"]),
  mkSentidoEstimulo("c02", "pip", "ESTRELA", "as estrelas", "Com que parte do corpo a gente vê", "OLHO", ["OLHO", "OUVIDO", "LINGUA"]),
  mkSentidoEstimulo("c03", "pipa", "PASSARO", "o passarinho cantando", "Com que parte do corpo a gente escuta", "OUVIDO", ["OUVIDO", "NARIZ", "MAO"]),
  mkSentidoEstimulo("c04", "pip", "MAÇA", "o gostinho da maçã", "Com que parte do corpo a gente sente o sabor", "LINGUA", ["LINGUA", "OLHO", "NARIZ"]),
  mkSentidoEstimulo("c05", "pipa", "URSINHO", "o ursinho macio", "Com que parte do corpo a gente sente se é fofinho", "MAO", ["MAO", "OUVIDO", "OLHO"]),

  // Reforço: ver
  mkSentidoEstimulo("c06", "pip", "SOL", "o sol brilhando", "Com que parte do corpo a gente vê", "OLHO", ["OLHO", "NARIZ", "MAO"]),
  mkSentidoEstimulo("c07", "pipa", "BORBOLETA", "a borboleta colorida", "Com que parte do corpo a gente vê", "OLHO", ["OLHO", "OUVIDO", "LINGUA"]),

  // Reforço: cheirar
  mkSentidoEstimulo("c08", "pip", "BOLO", "o cheirinho do bolo", "Com que parte do corpo a gente cheira", "NARIZ", ["NARIZ", "LINGUA", "OLHO"]),

  // Reforço: ouvir
  mkSentidoEstimulo("c09", "pipa", "CHUVA", "o som da chuva", "Com que parte do corpo a gente escuta", "OUVIDO", ["OUVIDO", "MAO", "LINGUA"]),

  // Reforço: provar
  mkSentidoEstimulo("c10", "pip", "BANANA", "o sabor da banana", "Com que parte do corpo a gente prova", "LINGUA", ["LINGUA", "NARIZ", "OLHO"]),

  // Reforço: tocar
  mkSentidoEstimulo("c11", "pipa", "GATO", "o pelinho do gatinho", "Com que parte do corpo a gente sente o toque", "MAO", ["MAO", "OUVIDO", "NARIZ"]),

  // Inverso: qual coisa usamos esse sentido?
  mkSentidoFunc("c12", "pip", "OLHO", "olho", "Para que serve esse sentido? Clique em algo que a gente VÊ.", "ESTRELA", ["ESTRELA", "BOLA", "FLOR"]),
  mkSentidoFunc("c13", "pipa", "NARIZ", "nariz", "Esse sentido serve para cheirar. Clique em algo que CHEIRA bem.", "FLOR", ["FLOR", "PEIXE", "BOLA"]),
  mkSentidoFunc("c14", "pip", "OUVIDO", "ouvido", "Esse sentido serve para ouvir. Clique em algo que faz SOM.", "PASSARO", ["PASSARO", "MAÇA", "URSINHO"]),
  mkSentidoFunc("c15", "pipa", "LINGUA", "língua", "Esse sentido serve para sentir o sabor. Clique em algo GOSTOSO de comer.", "BOLO", ["BOLO", "CARRO", "ESTRELA"]),
];

export const CIENCIAS_1ANO_LESSON: Lesson = {
  id: "ciencias-1ano",
  title: "Os Cinco Sentidos",
  bncc_field: "ciencias_natureza",
  skill_bncc: "EF01CI02",
  steps: STEPS,
};
