import type { AulaV4 } from "../../types";

export const aula06_missaoFinal: AulaV4 = {
  slug: "u2-06-missao-final",
  titulo: "Missão Final — Contador Imperial",
  iconeTrilha: "🎖️",
  bncc: ["EF05MA07"],
  duracaoMin: 22,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Prova do contador",
    historia: "{NOME}, o Imperador pediu 4 contas. Um erro atrasa, mas não elimina. Bora!",
  },
  momento02_exploracao: {
    instrucao: "Cada acerto vira uma medalha.",
    cenas: [{ tipo: "texto", texto: "Some ou subtraia com atenção — 5 algarismos, com trocas.", destaque: true }],
  },
  momento03_descoberta: {
    perguntaGuia: "Qual o segredo?",
    pista: "Alinhar bem e marcar todo 'vai 1' e todo empréstimo.",
    revelacao: "Um caderno organizado é meia vitória.",
  },
  momento04_explicacao: {
    titulo: "Regras da prova",
    etapas: [{ texto: "Escolha só uma resposta por questão. Escreva no papel se precisar." }],
  },
  momento05_modelagem: {
    enunciado: "Modelo: 47.586 − 25.798.",
    resposta: "21.788",
    passos: ["Empréstimos em U e C.", "= 21.788."],
    contaPassoAPasso: {
      operacao: "sub",
      operandos: [47586, 25798],
      resultado: 21788,
      passos: [
        { coluna: "U", fala: "6 < 8 → pede à D. 16 − 8 = 8.", digito: 8 },
        { coluna: "D", fala: "D 7 vira 7 (não emprestou de novo). 7 − 9? não. Pede à C. 17 − 9 = 8.", digito: 8 },
        { coluna: "C", fala: "C 5 vira 4. 4 < 7 → pede à UM. 14 − 7 = 7.", digito: 7 },
        { coluna: "UM", fala: "UM 7 vira 6. 6 − 5 = 1.", digito: 1 },
        { coluna: "DM", fala: "4 − 2 = 2.", digito: 2 },
      ],
    },
  },
  momento06_praticaGuiada: {
    enunciado: "Desafio 1: 38.475 + 24.869.",
    dica: "Cadeia de vai 1.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado?",
      opcoes: [{ nome: "63.344" }, { nome: "63.244" }, { nome: "62.344" }],
      respostaCerta: "63.344",
      feedbackAcerto: "🎯",
      feedbackErro: "= 63.344.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Desafio 2: 70.000 − 34.586.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado?",
      opcoes: [{ nome: "35.414" }, { nome: "35.514" }, { nome: "34.414" }],
      respostaCerta: "35.414",
      feedbackAcerto: "🎯",
      feedbackErro: "= 35.414.",
    },
  },
  momento08_aplicacao: {
    contexto: "Império arrecadou 84.560 em ouro. Gastou 47.895.",
    problema: "Sobrou?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "36.665" }, { nome: "36.565" }, { nome: "37.665" }],
      respostaCerta: "36.665",
      feedbackAcerto: "🎯 36.665.",
      feedbackErro: "84.560 − 47.895 = 36.665.",
    },
  },
  momento09_revisao: {
    pontos: ["Você é Contador Imperial!"],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "26.780 + 14.895 = ?", opcoes: ["41.675", "41.575", "41.775"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "41.675." },
      { pergunta: "50.000 − 12.586 = ?", opcoes: ["37.414", "37.514", "37.314"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "37.414." },
      { pergunta: "38.475 − 19.586 = ?", opcoes: ["18.889", "18.789", "19.889"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "18.889." },
      { pergunta: "1.245 + 3.876 + 2.198 = ?", opcoes: ["7.319", "7.219", "7.419"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "7.319." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Diploma do Contador",
    materiais: ["Papel"],
    passos: ["Faça um diploma.", "Coloque seu nome como 'Contador Imperial'.", "Mostre 2 contas resolvidas."],
    registro: "📸 Foto do diploma.",
  },
  recompensa: { xp: 210, moedas: 110, medalha: "Contador Imperial" },
};
