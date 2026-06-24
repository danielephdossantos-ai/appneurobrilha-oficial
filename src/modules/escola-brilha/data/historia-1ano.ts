import { Lesson, LessonStep } from "../types/lesson";

/* ──────────────────────────────────────────────────────────
   História — 1º Ano (BNCC EF01HI04 — Vida cotidiana, objetos
   de uso pessoal e meios de transporte ao longo do tempo)
   Atividades 100% VISUAIS — criança clica em imagens.
   ────────────────────────────────────────────────────────── */

type Mascot = "pip" | "pipa";

let _uid = 0;
const eid = (id: string) => `${id}-e${_uid++}`;

/** Mostra um contexto e pergunta qual imagem corresponde. */
function mkPick(
  id: string,
  mascot: Mascot,
  speech: string,
  estimulo: string | null,
  correct: string,
  options: string[],
): LessonStep {
  const step: LessonStep = {
    id,
    phase: "practice",
    type: "interaction",
    mascot,
    speech,
    interaction: { type: "click", correctAnswer: correct, options },
  };
  if (estimulo) {
    step.elements = [
      {
        id: eid(id),
        type: "text",
        content: estimulo,
        position: { x: 0, y: 0 },
        animation: "pop",
        delay: 0.3,
      },
    ];
  }
  return step;
}

const STEPS: LessonStep[] = [
  // Meios de transporte — identificação
  mkPick("h01", "pipa", "Qual é o transporte que voa pelo céu?", null, "AVIAO", ["AVIAO", "TREM", "CARRO"]),
  mkPick("h02", "pip", "Qual é o transporte que anda nos trilhos?", null, "TREM", ["TREM", "MOTO", "CAVALO"]),
  mkPick("h03", "pipa", "Qual é o transporte que tem só duas rodas?", null, "MOTO", ["MOTO", "CARRO", "ONIBUS"]),
  mkPick("h04", "pip", "Qual transporte leva muita gente junto?", null, "ONIBUS", ["ONIBUS", "MOTO", "AVIAO"]),
  mkPick("h05", "pipa", "Qual é o transporte que carrega cargas pesadas?", null, "CAMINHAO", ["CAMINHAO", "MOTO", "CAVALO"]),

  // Passado x presente
  mkPick("h06", "pip", "Antigamente as pessoas viajavam montadas nesse animal. Qual é?", null, "CAVALO", ["CAVALO", "CARRO", "AVIAO"]),
  mkPick("h07", "pipa", "Hoje em dia usamos esse transporte para ir longe rapidinho. Qual é?", null, "AVIAO", ["AVIAO", "CAVALO", "CARRO"]),
  mkPick("h08", "pip", "Qual é o transporte mais moderno?", "CAVALO", "CARRO", ["CARRO", "CAVALO", "TREM"]),

  // Vida cotidiana — minha casa e família
  mkPick("h09", "pipa", "Quem mora com a gente e cuida? Clique na mamãe.", null, "HEROINA", ["HEROINA", "GATO", "BOLA"]),
  mkPick("h10", "pip", "E quem mais cuida? Clique no papai.", null, "HEROI", ["HEROI", "URSINHO", "PATO"]),
  mkPick("h11", "pipa", "Qual é o nosso bichinho de estimação que faz au-au?", null, "CACHORRO", ["CACHORRO", "VACA", "PASSARO"]),
  mkPick("h12", "pip", "E qual faz miau e mora dentro de casa?", null, "GATO", ["GATO", "CAVALO", "GALINHA"]),

  // Objetos da casa e brincar
  mkPick("h13", "pipa", "Com qual desses brinquedos a gente brinca de chutar?", null, "BOLA", ["BOLA", "URSINHO", "PRESENTE"]),
  mkPick("h14", "pip", "No aniversário ganhamos isso embrulhado. Qual é?", null, "PRESENTE", ["PRESENTE", "BOLA", "FLOR"]),
  mkPick("h15", "pipa", "E no aniversário também comemos esse doce com velinhas. Qual é?", null, "BOLO", ["BOLO", "MAÇA", "BANANA"]),
];

export const HISTORIA_1ANO_LESSON: Lesson = {
  id: "historia-1ano",
  title: "Vivendo e Lembrando",
  bncc_field: "ciencias_humanas",
  skill_bncc: "EF01HI04",
  steps: STEPS,
};
