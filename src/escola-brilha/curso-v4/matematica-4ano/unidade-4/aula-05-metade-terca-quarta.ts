import type { AulaV4 } from "../../types";

export const aula05_metadeTercaQuarta: AulaV4 = {
  slug: "u4-05-metade-terca-quarta",
  titulo: "Metade, terça e quarta parte",
  iconeTrilha: "🍕",
  bncc: ["EF04MA07", "EF04MA09"],
  duracaoMin: 20,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "Nomes das partes",
    historia:
      "{NOME}, metade é ÷2. Terça parte é ÷3. Quarta parte é ÷4. Décima parte é ÷10. É o nome elegante da divisão.",
  },
  momento02_exploracao: {
    instrucao: "Traduzindo.",
    cenas: [
      { tipo: "texto", texto: "Metade = ÷2 · Terça = ÷3 · Quarta = ÷4 · Quinta = ÷5 · Décima = ÷10.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Todo número tem metade exata?",
    pista: "Depende de par ou ímpar.",
    revelacao: "Pares têm metade exata. Ímpares deixam resto 1.",
  },
  momento04_explicacao: {
    titulo: "Da palavra à conta",
    etapas: [
      {
        texto: "Metade de 240 = 240 ÷ 2.",
        exemploReal: {
          contexto: "240 ÷ 2 = 120.",
          destaque: "Metade de 240 = 120.",
        },
      },
      {
        texto: "Terça parte de 180 = 180 ÷ 3.",
        exemploReal: {
          contexto: "18÷3=6, 0÷3=0.",
          destaque: "180 ÷ 3 = 60.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Qual a quarta parte de 320?",
    passos: ["Quarta parte = ÷4.", "320 ÷ 4 = 80."],
    resposta: "80",
  },
  momento06_praticaGuiada: {
    enunciado: "Metade de 168 = ?",
    dica: "÷2.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "84" }, { nome: "82" }, { nome: "86" }],
      respostaCerta: "84",
      feedbackAcerto: "🎯 84.",
      feedbackErro: "168 ÷ 2 = 84.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Terça parte de 243 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "81" }, { nome: "71" }, { nome: "91" }],
      respostaCerta: "81",
      feedbackAcerto: "🎯 81.",
      feedbackErro: "243 ÷ 3 = 81.",
    },
  },
  momento08_aplicacao: {
    contexto: "Uma pizza de 12 fatias.",
    problema: "Um quarto de pizza tem quantas fatias?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3" }, { nome: "2" }, { nome: "4" }],
      respostaCerta: "3",
      feedbackAcerto: "🎯 3 fatias.",
      feedbackErro: "12 ÷ 4 = 3.",
    },
  },
  momento09_revisao: {
    pontos: ["Metade=÷2, Terça=÷3, Quarta=÷4."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Metade de 96 = ?", opcoes: ["48", "46", "50"], correta: 0, feedbackAcerto: "🎉 48.", feedbackErro: "96÷2=48." },
      { pergunta: "Terça parte de 90 = ?", opcoes: ["30", "20", "40"], correta: 0, feedbackAcerto: "🎉 30.", feedbackErro: "90÷3=30." },
      { pergunta: "Quarta parte de 160 = ?", opcoes: ["40", "50", "30"], correta: 0, feedbackAcerto: "🎉 40.", feedbackErro: "160÷4=40." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Partes da Pizza",
    materiais: ["Papel", "Tesoura"],
    passos: ["Recorte um círculo de papel.", "Dobre em 2 (metade), depois em 4 (quarta).", "Compare os pedaços."],
    registro: "📸 Foto dos pedaços rotulados.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
