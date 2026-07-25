import type { AulaV4 } from "../../types";

export const aula05_area: AulaV4 = {
  slug: "u6-05-area",
  titulo: "Área: m² e cm²",
  iconeTrilha: "🟦",
  bncc: ["EF05MA20"],
  duracaoMin: 22,
  metodologias: ["cpa"],

  momento01_motivacao: {
    titulo: "Quanto cobre?",
    historia: "{NOME}, ÁREA mede o quanto uma figura COBRE. Em retângulos: base × altura.",
  },
  momento02_exploracao: {
    instrucao: "Unidades.",
    cenas: [
      { tipo: "texto", texto: "1 m² = 10.000 cm². Chão é m². Papel é cm².", destaque: true },
      { tipo: "texto", texto: "Retângulo: A = base × altura." },
      { tipo: "texto", texto: "Quadrado: A = lado × lado." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Retângulo 5 × 3 m?",
    pista: "Multiplique.",
    revelacao: "15 m².",
  },
  momento04_explicacao: {
    titulo: "Exemplos",
    etapas: [
      { texto: "Sala 4 m × 3 m → 12 m²." },
      { texto: "Quadrado 6 cm → 6 × 6 = 36 cm²." },
      { texto: "Área composta: some as partes." },
    ],
  },
  momento05_modelagem: {
    enunciado: "Retângulo 8 m × 5 m.",
    resposta: "40 m²",
    passos: ["A = b × h.", "8 × 5 = 40."],
  },
  momento06_praticaGuiada: {
    enunciado: "Quadrado de 9 cm de lado.",
    dica: "l × l.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Área:",
      opcoes: [{ nome: "81 cm²" }, { nome: "36 cm²" }, { nome: "18 cm²" }],
      respostaCerta: "81 cm²",
      feedbackAcerto: "🎯 9 × 9.",
      feedbackErro: "81 cm².",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Retângulo 12 m × 7 m.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Área:",
      opcoes: [{ nome: "84 m²" }, { nome: "38 m²" }, { nome: "74 m²" }],
      respostaCerta: "84 m²",
      feedbackAcerto: "🎯",
      feedbackErro: "84 m².",
    },
  },
  momento08_aplicacao: {
    contexto: "Cozinha em L: retângulo 3×2 m + 2×1 m.",
    problema: "Área total?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "8 m²" }, { nome: "6 m²" }, { nome: "10 m²" }],
      respostaCerta: "8 m²",
      feedbackAcerto: "🎯 6 + 2 = 8.",
      feedbackErro: "8 m².",
    },
  },
  momento09_revisao: {
    pontos: ["Retângulo: b × h.", "Quadrado: l × l.", "Área composta: some as partes."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Retângulo 6×4:", opcoes: ["24", "20", "28"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "24." },
      { pergunta: "Quadrado 7:", opcoes: ["49", "28", "14"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "49." },
      { pergunta: "Retângulo 10×5:", opcoes: ["50", "30", "40"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "50." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Área do quarto",
    materiais: ["Trena"],
    passos: ["Meça largura e comprimento do quarto.", "Calcule a área em m²."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 150, moedas: 80 },
};
