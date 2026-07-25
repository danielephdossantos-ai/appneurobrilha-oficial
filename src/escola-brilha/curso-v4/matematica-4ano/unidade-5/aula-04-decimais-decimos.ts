import type { AulaV4 } from "../../types";

export const aula04_decimais01: AulaV4 = {
  slug: "u5-04-decimais-decimos",
  titulo: "Décimos — números com vírgula",
  iconeTrilha: "📍",
  bncc: ["EF04MA10", "EF04MA25"],
  duracaoMin: 22,
  metodologias: ["cpa", "skemp", "rme"],

  momento01_motivacao: {
    titulo: "A vírgula chegou",
    historia:
      "{NOME}, quando o inteiro é dividido em 10 partes iguais, cada parte é um DÉCIMO — escrito com VÍRGULA: 0,1. Três décimos = 0,3.",
  },
  momento02_exploracao: {
    instrucao: "Fração ↔ decimal.",
    cenas: [
      { tipo: "texto", texto: "1/10 = 0,1 (um décimo).", destaque: true },
      { tipo: "texto", texto: "3/10 = 0,3 · 7/10 = 0,7 · 10/10 = 1,0 (inteiro)." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "0,3 e 3,0 são iguais?",
    pista: "Olhe a vírgula.",
    revelacao: "Não. 0,3 é menos que 1. 3,0 é três inteiros. A vírgula separa o INTEIRO das partes.",
  },
  momento04_explicacao: {
    titulo: "Vírgula e casa dos décimos",
    etapas: [
      {
        texto: "À esquerda da vírgula: inteiros. À direita: décimos (partes do inteiro).",
        exemploReal: {
          contexto: "2,5 = 2 inteiros e 5 décimos = 2 + 5/10.",
          destaque: "2,5 é lido 'dois inteiros e cinco décimos'.",
        },
      },
      {
        texto: "Somar/subtrair decimais: alinhe a VÍRGULA e opere normalmente.",
        exemploReal: {
          contexto: "0,3 + 0,4.",
          destaque: "0,3 + 0,4 = 0,7.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Escreva 4/10 como decimal.",
    passos: ["Décimo → vírgula, 1 casa depois.", "4/10 = 0,4."],
    resposta: "0,4",
  },
  momento06_praticaGuiada: {
    enunciado: "6/10 = ?",
    dica: "1 casa depois da vírgula.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "0,6" }, { nome: "6,0" }, { nome: "0,06" }],
      respostaCerta: "0,6",
      feedbackAcerto: "🎯 0,6.",
      feedbackErro: "1 décimo = 0,1.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "0,2 + 0,5 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "0,7" }, { nome: "0,10" }, { nome: "0,25" }],
      respostaCerta: "0,7",
      feedbackAcerto: "🎯 0,7.",
      feedbackErro: "2 + 5 = 7 décimos.",
    },
  },
  momento08_aplicacao: {
    contexto: "Uma corda de 1 metro dividida em 10 partes.",
    problema: "Cada parte tem quanto (em metros)?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "0,1 m" }, { nome: "10 m" }, { nome: "1 m" }],
      respostaCerta: "0,1 m",
      feedbackAcerto: "🎯 0,1 m (1 décimo).",
      feedbackErro: "1 ÷ 10 = 0,1.",
    },
  },
  momento09_revisao: {
    pontos: ["Vírgula separa inteiro de décimos.", "1/10 = 0,1."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "7/10 em decimal:", opcoes: ["0,7", "7,0", "0,07"], correta: 0, feedbackAcerto: "🎉 0,7.", feedbackErro: "1 casa após a vírgula." },
      { pergunta: "0,4 + 0,3 = ?", opcoes: ["0,7", "0,1", "0,12"], correta: 0, feedbackAcerto: "🎉 0,7.", feedbackErro: "4+3=7 décimos." },
      { pergunta: "1,2 lê-se:", opcoes: ["um inteiro e dois décimos", "doze", "um vírgula vinte"], correta: 0, feedbackAcerto: "🎉 correto.", feedbackErro: "Depois da vírgula = décimos." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Régua dos décimos",
    materiais: ["Régua", "Papel"],
    passos: ["Meça 3 objetos em cm.", "Divida cada medida por 10 e escreva em metros com vírgula."],
    registro: "📸 Foto das medidas.",
  },
  recompensa: { xp: 220, moedas: 110 },
};
