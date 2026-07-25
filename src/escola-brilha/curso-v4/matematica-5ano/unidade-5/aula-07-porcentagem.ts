import type { AulaV4 } from "../../types";

export const aula07_porcentagem: AulaV4 = {
  slug: "u5-07-porcentagem",
  titulo: "Porcentagem: 10%, 25%, 50%",
  iconeTrilha: "％",
  bncc: ["EF05MA06"],
  duracaoMin: 22,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "% é fração de 100",
    historia: "{NOME}, 25% quer dizer '25 de cada 100'. É a mesma coisa que 25/100 ou 1/4.",
  },
  momento02_exploracao: {
    instrucao: "Correspondências mestres.",
    cenas: [
      { tipo: "texto", texto: "10% = 1/10 → dividir por 10.", destaque: true },
      { tipo: "texto", texto: "25% = 1/4 → dividir por 4." },
      { tipo: "texto", texto: "50% = 1/2 → dividir por 2." },
      { tipo: "texto", texto: "100% = tudo." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "10% de R$ 80?",
    pista: "÷ 10.",
    revelacao: "R$ 8.",
  },
  momento04_explicacao: {
    titulo: "Cálculo rápido",
    etapas: [
      { texto: "50% de 120 = 120 ÷ 2 = 60." },
      { texto: "25% de 200 = 200 ÷ 4 = 50." },
      { texto: "10% de 350 = 35. E 30%? 35 × 3 = 105." },
    ],
  },
  momento05_modelagem: {
    enunciado: "25% de R$ 480.",
    resposta: "R$ 120",
    passos: ["÷ 4.", "480 ÷ 4 = 120."],
  },
  momento06_praticaGuiada: {
    enunciado: "10% de R$ 250.",
    dica: "÷ 10.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 25" }, { nome: "R$ 2,50" }, { nome: "R$ 250" }],
      respostaCerta: "R$ 25",
      feedbackAcerto: "🎯",
      feedbackErro: "250 ÷ 10 = 25.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "50% de R$ 340.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 170" }, { nome: "R$ 340" }, { nome: "R$ 34" }],
      respostaCerta: "R$ 170",
      feedbackAcerto: "🎯 ÷2.",
      feedbackErro: "R$ 170.",
    },
  },
  momento08_aplicacao: {
    contexto: "Camiseta R$ 80 com 25% de desconto.",
    problema: "Preço com desconto?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 60" }, { nome: "R$ 55" }, { nome: "R$ 65" }],
      respostaCerta: "R$ 60",
      feedbackAcerto: "🎯 Desconto R$ 20 → paga R$ 60.",
      feedbackErro: "25% de 80 = 20 → 80 − 20 = 60.",
    },
  },
  momento09_revisao: {
    pontos: ["10% = ÷10. 25% = ÷4. 50% = ÷2.", "Outros %: combine (30% = 3 × 10%)."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "10% de 60?", opcoes: ["6", "0,6", "60"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "6." },
      { pergunta: "50% de 90?", opcoes: ["45", "50", "40"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "45." },
      { pergunta: "25% de 200?", opcoes: ["50", "25", "40"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "50." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Descontos",
    materiais: ["Encarte"],
    passos: ["Ache 3 descontos.", "Calcule quanto sobra a pagar."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 150, moedas: 80 },
};
