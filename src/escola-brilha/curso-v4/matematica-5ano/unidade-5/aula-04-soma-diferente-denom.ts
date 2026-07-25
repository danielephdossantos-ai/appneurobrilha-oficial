import type { AulaV4 } from "../../types";

export const aula04_somaDiferenteDenom: AulaV4 = {
  slug: "u5-04-soma-diferente-denom",
  titulo: "Somar frações (denominadores diferentes)",
  iconeTrilha: "🧩",
  bncc: ["EF05MA07"],
  duracaoMin: 22,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Igualar antes de somar",
    historia: "{NOME}, com denominadores diferentes, primeiro achamos EQUIVALENTES com o mesmo denominador. Depois somamos os numeradores.",
  },
  momento02_exploracao: {
    instrucao: "Passos.",
    cenas: [
      { tipo: "texto", texto: "1º Ache o MMC dos denominadores.", destaque: true },
      { tipo: "texto", texto: "2º Converta cada fração pra ter esse denominador." },
      { tipo: "texto", texto: "3º Some os numeradores." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "1/2 + 1/3?",
    pista: "MMC(2,3)=6.",
    revelacao: "3/6 + 2/6 = 5/6.",
  },
  momento04_explicacao: {
    titulo: "Ponto crucial: converter",
    etapas: [
      { texto: "2/5 + 1/2. MMC(5,2)=10. 2/5=4/10. 1/2=5/10. Soma: 9/10." },
      { texto: "3/4 − 1/6. MMC(4,6)=12. 9/12 − 2/12 = 7/12." },
    ],
  },
  momento05_modelagem: {
    enunciado: "2/3 + 1/4.",
    resposta: "11/12",
    passos: ["MMC(3,4)=12.", "8/12 + 3/12.", "= 11/12."],
  },
  momento06_praticaGuiada: {
    enunciado: "1/2 + 1/4.",
    dica: "MMC=4.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "3/4" }, { nome: "2/6" }, { nome: "1/4" }],
      respostaCerta: "3/4",
      feedbackAcerto: "🎯 2/4 + 1/4.",
      feedbackErro: "1/2 = 2/4 → 2/4 + 1/4 = 3/4.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "5/6 − 1/3.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "1/2" }, { nome: "4/3" }, { nome: "4/6" }],
      respostaCerta: "1/2",
      feedbackAcerto: "🎯 5/6 − 2/6 = 3/6 = 1/2.",
      feedbackErro: "1/3=2/6. 5/6−2/6=3/6=1/2.",
    },
  },
  momento08_aplicacao: {
    contexto: "Meia hora de estudo + um quarto de hora de leitura.",
    problema: "Total em hora?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3/4 h" }, { nome: "2/6 h" }, { nome: "1/3 h" }],
      respostaCerta: "3/4 h",
      feedbackAcerto: "🎯 1/2 + 1/4 = 3/4.",
      feedbackErro: "45 min = 3/4 h.",
    },
  },
  momento09_revisao: {
    pontos: ["Iguale denominadores.", "Some numeradores.", "Simplifique no fim."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "1/3 + 1/6 = ?", opcoes: ["1/2", "2/9", "1/9"], correta: 0, feedbackAcerto: "🎉 2/6+1/6.", feedbackErro: "3/6 = 1/2." },
      { pergunta: "3/4 − 1/2 = ?", opcoes: ["1/4", "2/2", "1/2"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "3/4 − 2/4 = 1/4." },
      { pergunta: "2/5 + 1/10 = ?", opcoes: ["1/2", "3/15", "3/5"], correta: 0, feedbackAcerto: "🎉 4/10+1/10.", feedbackErro: "5/10 = 1/2." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Meia + quarta",
    materiais: ["Papel"],
    passos: ["Desenhe um círculo dividido em 4.", "Pinte meia e depois mais 1/4.", "Escreva como fração."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 160, moedas: 85 },
};
