import type { AulaV4 } from "../../types";

export const aula07_missaoFinal: AulaV4 = {
  slug: "u6-07-missao-final",
  titulo: "Missão Final — Engenheiro do Império",
  iconeTrilha: "🏗️",
  bncc: ["EF05MA19", "EF05MA20", "EF05MA21"],
  duracaoMin: 22,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Prova do Engenheiro",
    historia: "{NOME}, o Imperador quer construir. Você mede, calcula área e volume.",
  },
  momento02_exploracao: {
    instrucao: "Uma medição por vez.",
    cenas: [{ tipo: "texto", texto: "Comprimento, área e volume misturados.", destaque: true }],
  },
  momento03_descoberta: { perguntaGuia: "Segredo?", pista: "Cuide da unidade.", revelacao: "Trabalhe sempre na mesma unidade." },
  momento04_explicacao: {
    titulo: "Regras",
    etapas: [{ texto: "Antes de calcular, transforme tudo pra mesma unidade." }],
  },
  momento05_modelagem: {
    enunciado: "Chão 5 m × 4 m. Área?",
    resposta: "20 m²",
    passos: ["5 × 4 = 20."],
  },
  momento06_praticaGuiada: {
    enunciado: "Desafio 1: 2,5 km em m.",
    dica: "× 1.000.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2.500 m" }, { nome: "250 m" }, { nome: "25.000 m" }],
      respostaCerta: "2.500 m",
      feedbackAcerto: "🎯",
      feedbackErro: "2.500 m.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Desafio 2: caixa 8 × 5 × 2 cm.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Volume:",
      opcoes: [{ nome: "80 cm³" }, { nome: "60 cm³" }, { nome: "100 cm³" }],
      respostaCerta: "80 cm³",
      feedbackAcerto: "🎯",
      feedbackErro: "80.",
    },
  },
  momento08_aplicacao: {
    contexto: "Piscina 6 m × 3 m × 1,5 m.",
    problema: "Volume?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "27 m³" }, { nome: "18 m³" }, { nome: "30 m³" }],
      respostaCerta: "27 m³",
      feedbackAcerto: "🎯 6×3×1,5.",
      feedbackErro: "27 m³.",
    },
  },
  momento09_revisao: { pontos: ["Engenheiro do Império!"] },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "3 kg em g:", opcoes: ["3000", "300", "30"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "3.000." },
      { pergunta: "1,5 L em mL:", opcoes: ["1500", "150", "15"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "1.500." },
      { pergunta: "Retângulo 9×6 m:", opcoes: ["54 m²", "30 m²", "45 m²"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "54 m²." },
      { pergunta: "1 h 20 min em min:", opcoes: ["80", "60", "100"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "80." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Diploma do Engenheiro",
    materiais: ["Papel"],
    passos: ["Faça o diploma.", "Mostre 3 medições reais."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 220, moedas: 115, medalha: "Engenheiro do Império" },
};
