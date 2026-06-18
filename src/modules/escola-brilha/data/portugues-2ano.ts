import { Lesson, LessonStep } from "../types/lesson";

/* Português 2º Ano — 30 atividades (BNCC EF02LP*) */

type Mascot = "pip" | "pipa";
let _uid = 0;
const eid = (id: string) => `${id}-e${_uid++}`;

function mkFill(
  id: string,
  mascot: Mascot,
  word: string,
  prefix: string,
  correct: string,
  options: string[],
): LessonStep {
  return {
    id,
    phase: "practice",
    type: "interaction",
    mascot,
    speech: `Vamos formar a palavra ${word}. Qual sílaba falta?`,
    elements: [
      { id: eid(id), type: "text", content: prefix, position: { x: -40, y: 0 }, animation: "pop", delay: 0.2 },
      { id: eid(id), type: "text", content: "__", position: { x: 40, y: 0 }, animation: "pop", delay: 0.4 },
    ],
    interaction: { type: "click", correctAnswer: correct, options },
  };
}

function mkSplit(
  id: string,
  mascot: Mascot,
  word: string,
  correct: string,
  options: string[],
): LessonStep {
  return {
    id,
    phase: "practice",
    type: "interaction",
    mascot,
    speech: `Separe as sílabas da palavra ${word}.`,
    elements: [
      { id: eid(id), type: "text", content: word, position: { x: 0, y: 0 }, animation: "pop", delay: 0.2 },
    ],
    interaction: { type: "click", correctAnswer: correct, options },
  };
}

function mkSpell(
  id: string,
  mascot: Mascot,
  spoken: string,
  correct: string,
  options: string[],
): LessonStep {
  return {
    id,
    phase: "practice",
    type: "interaction",
    mascot,
    speech: `Como se escreve corretamente a palavra ${spoken}?`,
    interaction: { type: "click", correctAnswer: correct, options },
  };
}

function mkRead(
  id: string,
  mascot: Mascot,
  sentence: string,
  question: string,
  correct: string,
  options: string[],
): LessonStep {
  return {
    id,
    phase: "practice",
    type: "interaction",
    mascot,
    speech: `${sentence} ${question}`,
    elements: [
      { id: eid(id), type: "text", content: sentence, position: { x: 0, y: 0 }, animation: "pop", delay: 0.3 },
    ],
    interaction: { type: "click", correctAnswer: correct, options },
  };
}

const STEPS: LessonStep[] = [
  mkFill("q01", "pip", "BOLA", "BO", "LA", ["LA", "MA", "PA"]),
  mkFill("q02", "pipa", "CASA", "CA", "SA", ["SA", "TA", "LA"]),
  mkFill("q03", "pip", "GATO", "GA", "TO", ["TO", "PO", "RO"]),
  mkFill("q04", "pipa", "MESA", "ME", "SA", ["SA", "LA", "BA"]),
  mkFill("q05", "pip", "PATO", "PA", "TO", ["TO", "DO", "BO"]),
  mkSplit("q06", "pipa", "JANELA", "JA-NE-LA", ["JA-NE-LA", "JAN-EL-A", "JANE-LA"]),
  mkSplit("q07", "pip", "BANANA", "BA-NA-NA", ["BA-NA-NA", "BAN-A-NA", "BA-NAN-A"]),
  mkSplit("q08", "pipa", "ESCOLA", "ES-CO-LA", ["ES-CO-LA", "ESC-O-LA", "E-SCO-LA"]),
  mkSplit("q09", "pip", "CACHORRO", "CA-CHOR-RO", ["CA-CHOR-RO", "CAC-HOR-RO", "CA-CHO-RRO"]),
  mkSplit("q10", "pipa", "MENINA", "ME-NI-NA", ["ME-NI-NA", "MEN-I-NA", "ME-NIN-A"]),
  mkSpell("q11", "pip", "casa", "CASA", ["CASA", "KAZA", "CAZA"]),
  mkSpell("q12", "pipa", "queijo", "QUEIJO", ["QUEIJO", "KEIJO", "QEIJO"]),
  mkSpell("q13", "pip", "chave", "CHAVE", ["CHAVE", "XAVE", "SHAVE"]),
  mkSpell("q14", "pipa", "passarinho", "PASSARINHO", ["PASSARINHO", "PASARINHO", "PAÇARINHO"]),
  mkSpell("q15", "pip", "bicicleta", "BICICLETA", ["BICICLETA", "BISIQLETA", "BICICLETTA"]),
  mkSpell("q16", "pipa", "amarelo", "AMARELO", ["AMARELO", "AMARELU", "AMARELLO"]),
  mkSpell("q17", "pip", "feliz", "FELIZ", ["FELIZ", "FELIS", "FELLIZ"]),
  mkSpell("q18", "pipa", "abacaxi", "ABACAXI", ["ABACAXI", "ABACACHI", "ABAKACHI"]),
  mkRead("q19", "pip", "O cachorro corre.", "Quem corre?", "Cachorro", ["Cachorro", "Gato", "Pássaro"]),
  mkRead("q20", "pipa", "A menina canta.", "Quem canta?", "Menina", ["Menina", "Menino", "Vovó"]),
  mkRead("q21", "pip", "O sol brilha no céu.", "O que brilha?", "Sol", ["Sol", "Lua", "Estrela"]),
  mkRead("q22", "pipa", "A flor é amarela.", "De que cor é a flor?", "Amarela", ["Amarela", "Azul", "Vermelha"]),
  mkRead("q23", "pip", "O peixe nada no rio.", "Onde o peixe nada?", "Rio", ["Rio", "Mar", "Lago"]),
  mkRead("q24", "pipa", "A vaca dá leite.", "O que a vaca dá?", "Leite", ["Leite", "Ovo", "Mel"]),
  mkRead("q25", "pip", "O passarinho voa alto.", "Como o passarinho voa?", "Alto", ["Alto", "Baixo", "Devagar"]),
  mkRead("q26", "pipa", "A maçã está vermelha.", "Como está a maçã?", "Vermelha", ["Vermelha", "Verde", "Amarela"]),
  mkRead("q27", "pip", "O carro é rápido.", "Como é o carro?", "Rápido", ["Rápido", "Lento", "Pequeno"]),
  mkRead("q28", "pipa", "O bolo está doce.", "Como está o bolo?", "Doce", ["Doce", "Salgado", "Azedo"]),
  mkRead("q29", "pip", "A casa é grande.", "Como é a casa?", "Grande", ["Grande", "Pequena", "Alta"]),
  mkRead("q30", "pipa", "O gato dorme no sofá.", "Onde o gato dorme?", "Sofá", ["Sofá", "Cama", "Chão"]),
];

export const PORTUGUES_2ANO_LESSON: Lesson = {
  id: "portugues-2ano",
  title: "Consolidando a Leitura",
  bncc_field: "lingua_portuguesa",
  skill_bncc: "EF02LP01",
  steps: STEPS,
};
