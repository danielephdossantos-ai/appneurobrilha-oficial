import type { AulaV4 } from "../../types";

export const aula02_comparar: AulaV4 = {
  slug: "u4-02-comparar-fracoes",
  titulo: "Comparar frações",
  iconeTrilha: "⚖️",
  bncc: ["EF06MA09"],
  duracaoMin: 22,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Qual pedaço é maior?",
    historia: "{NOME}, 1/3 é maior que 1/5? Parece que sim ('3 é menor que 5') — e é. Mas 2/5 e 3/7? Aí precisa de técnica.",
  },

  momento02_exploracao: {
    instrucao: "Regras de comparação.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Truques",
        cabecalhos: ["Caso", "Truque"],
        linhas: [
          { rotulo: "MesmoDen", valores: ["Mesmo denominador", "Maior numerador vence"] },
          { rotulo: "MesmoNum", valores: ["Mesmo numerador", "MENOR denominador vence"] },
          { rotulo: "Difs", valores: ["Diferentes", "Iguale denominadores pelo MMC"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "3/7 ou 2/5 — qual é maior?",
    pista: "Iguale os denominadores pelo MMC(5,7) = 35.",
    revelacao: "3/7 = 15/35 · 2/5 = 14/35 → 3/7 > 2/5.",
  },

  momento04_explicacao: {
    titulo: "Comparação por MMC",
    etapas: [
      {
        texto: "Mesmo denominador: só olhe o de cima.",
        exemploReal: {
          contexto: "5/8 vs 3/8",
          destaque: "5 > 3 → 5/8 > 3/8.",
        },
      },
      {
        texto: "Mesmo numerador: MENOR denominador é maior (pedaços menos partidos).",
        exemploReal: {
          contexto: "3/4 vs 3/8",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Fração", "Ideia"],
            linhas: [
              { rotulo: "3/4", valores: ["3/4", "3 pedaços GRANDES"] },
              { rotulo: "3/8", valores: ["3/8", "3 pedaços PEQUENOS"] },
            ],
          },
          destaque: "3/4 > 3/8.",
        },
      },
      {
        texto: "Diferentes: use o MMC dos denominadores.",
        exemploReal: {
          contexto: "5/6 vs 7/9",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Fração", "×?", "Equivalente"],
            linhas: [
              { rotulo: "5/6", valores: ["5/6", "×3", "15/18"] },
              { rotulo: "7/9", valores: ["7/9", "×2", "14/18"] },
            ],
          },
          destaque: "MMC(6,9)=18 → 15/18 > 14/18 → 5/6 > 7/9.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Ordene do menor pro maior: 1/2 · 2/3 · 3/4.",
    resposta: "1/2 < 2/3 < 3/4",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Fração", "Equivalente /12"],
      linhas: [
        { rotulo: "1/2", valores: ["1/2", "6/12"] },
        { rotulo: "2/3", valores: ["2/3", "8/12"] },
        { rotulo: "3/4", valores: ["3/4", "9/12"] },
      ],
    },
    passos: ["MMC(2,3,4) = 12.", "Iguale.", "Ordene pelos numeradores."],
  },

  momento06_praticaGuiada: {
    enunciado: "5/8 __ 3/4.",
    dica: "Iguale (MMC=8).",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "<" }, { nome: ">" }, { nome: "=" }],
      respostaCerta: "<",
      feedbackAcerto: "🎯 3/4 = 6/8 > 5/8.",
      feedbackErro: "Iguale primeiro.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Maior: 2/3 ou 5/8?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2/3" }, { nome: "5/8" }, { nome: "iguais" }],
      respostaCerta: "2/3",
      feedbackAcerto: "🎯 MMC=24: 16/24 > 15/24.",
      feedbackErro: "Iguale por 24.",
    },
  },

  momento08_aplicacao: {
    contexto: "Ana comeu 3/8 da pizza. Bia comeu 2/5.",
    problema: "Quem comeu mais?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Bia" }, { nome: "Ana" }, { nome: "Empate" }],
      respostaCerta: "Bia",
      feedbackAcerto: "🎯 MMC=40 → 15/40 < 16/40.",
      feedbackErro: "3/8 = 15/40, 2/5 = 16/40.",
    },
  },

  momento09_revisao: {
    pontos: ["Mesmo denominador: numerador manda.", "Mesmo numerador: menor denominador é maior.", "Diferentes: MMC."],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "1/3 __ 1/5:", opcoes: [">", "<", "="], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Denominador menor = maior." },
      { pergunta: "2/5 __ 3/5:", opcoes: ["<", ">", "="], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Numerador manda." },
      { pergunta: "1/2 __ 3/6:", opcoes: ["=", ">", "<"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "3/6 = 1/2." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Ranking de frações",
    materiais: ["Papel"],
    passos: ["Escreva 4 frações.", "Ordene do menor pro maior usando MMC."],
    registro: "📸 Foto da ordenação.",
  },
  recompensa: { xp: 170, moedas: 90 },
};
