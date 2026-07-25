import type { AulaV4 } from "../../types";

export const aula06_missaoFinal: AulaV4 = {
  slug: "u3-06-missao-final",
  titulo: "Missão Final — Mestre da Multiplicação",
  iconeTrilha: "🏅",
  bncc: ["EF05MA07", "EF05MA08"],
  duracaoMin: 22,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Prova do Mestre",
    historia: "{NOME}, 4 desafios pra provar que você domina a multiplicação.",
  },
  momento02_exploracao: {
    instrucao: "Um problema por vez.",
    cenas: [{ tipo: "texto", texto: "Use o método que quiser: algoritmo, distributiva ou truque dos zeros.", destaque: true }],
  },
  momento03_descoberta: {
    perguntaGuia: "Qual método é melhor?",
    pista: "Depende dos números.",
    revelacao: "Números redondos → zeros. Números perto de 100 → distributiva. Resto → algoritmo.",
  },
  momento04_explicacao: {
    titulo: "Escolha a estratégia",
    etapas: [{ texto: "Antes de calcular, olhe os números e pergunte: qual truque cabe aqui?" }],
  },
  momento05_modelagem: {
    enunciado: "40 × 250.",
    resposta: "10.000",
    passos: ["4 × 25 = 100.", "Junte 2 zeros: 10.000."],
  },
  momento06_praticaGuiada: {
    enunciado: "Desafio 1: 6 × 199 (dica: 199 = 200 − 1).",
    dica: "Distributiva.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado?",
      opcoes: [{ nome: "1.194" }, { nome: "1.184" }, { nome: "1.204" }],
      respostaCerta: "1.194",
      feedbackAcerto: "🎯 1.200 − 6 = 1.194.",
      feedbackErro: "6 × 199 = 1.194.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Desafio 2: 235 × 24.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado?",
      opcoes: [{ nome: "5.640" }, { nome: "5.540" }, { nome: "5.740" }],
      respostaCerta: "5.640",
      feedbackAcerto: "🎯",
      feedbackErro: "235 × 24 = 5.640.",
    },
  },
  momento08_aplicacao: {
    contexto: "Fábrica: 128 caixas por dia, 15 dias.",
    problema: "Total?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1.920" }, { nome: "1.820" }, { nome: "2.020" }],
      respostaCerta: "1.920",
      feedbackAcerto: "🎯 128 × 15 = 1.920.",
      feedbackErro: "1.920.",
    },
  },
  momento09_revisao: {
    pontos: ["Mestre da Multiplicação!"],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "25 × 200 = ?", opcoes: ["5.000", "500", "50.000"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "5.000." },
      { pergunta: "142 × 36 = ?", opcoes: ["5.112", "5.012", "5.212"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "5.112." },
      { pergunta: "8 × 125 = ?", opcoes: ["1.000", "900", "1.100"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "1.000." },
      { pergunta: "215 × 100 = ?", opcoes: ["21.500", "2.150", "215.000"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "21.500." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Diploma do Mestre",
    materiais: ["Papel"],
    passos: ["Desenhe um diploma.", "Coloque 'Mestre da Multiplicação'.", "Mostre 3 contas suas."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 220, moedas: 115, medalha: "Mestre da Multiplicação" },
};
