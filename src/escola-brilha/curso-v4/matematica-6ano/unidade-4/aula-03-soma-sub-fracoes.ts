import type { AulaV4 } from "../../types";

export const aula03_somaSub: AulaV4 = {
  slug: "u4-03-soma-sub-fracoes",
  titulo: "Somar e subtrair frações",
  iconeTrilha: "➕",
  bncc: ["EF06MA09"],
  duracaoMin: 24,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "Juntar pedaços",
    historia: "{NOME}, comi 2/5 da pizza e a Bia comeu 1/5. Quanto foi ao todo? Fácil: 3/5. Mas e 1/2 + 1/3? Aí precisa igualar os denominadores primeiro.",
  },

  momento02_exploracao: {
    instrucao: "Duas regras.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Somar/subtrair frações",
        cabecalhos: ["Caso", "Como fazer"],
        linhas: [
          { rotulo: "Mesmo Den", valores: ["Mesmo denominador", "Soma/subtrai numeradores, mantém o denominador"] },
          { rotulo: "Difs", valores: ["Denominadores diferentes", "Ache o MMC, iguale, depois some/subtrai"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Quanto é 1/2 + 1/3?",
    pista: "MMC(2,3)=6. Iguale: 3/6 + 2/6.",
    revelacao: "1/2 + 1/3 = 5/6.",
  },

  momento04_explicacao: {
    titulo: "Passo a passo",
    etapas: [
      {
        texto: "Mesmo denominador: soma os de cima.",
        exemploReal: {
          contexto: "2/7 + 3/7 — dividimos a mesma pizza em 7 pedaços:",
          visualMat: {
            tipo: "tabela",
            titulo: "Somando por cima",
            cabecalhos: ["Fração", "Numerador", "Denominador"],
            linhas: [
              { rotulo: "2/7", valores: ["2", "7"] },
              { rotulo: "+ 3/7", valores: ["3", "7"] },
              { rotulo: "= 5/7", valores: ["5", "7"] },
            ],
            destacar: { coluna: 1 },
          },
          destaque: "2/7 + 3/7 = 5/7.",
        },
      },
      {
        texto: "Diferentes: iguale pelo MMC e some.",
        exemploReal: {
          contexto: "1/4 + 2/3",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["MMC(4,3)", "12"] },
              { rotulo: "2", valores: ["1/4 = ?/12", "3/12"] },
              { rotulo: "3", valores: ["2/3 = ?/12", "8/12"] },
              { rotulo: "4", valores: ["Soma", "11/12"] },
            ],
          },
          destaque: "1/4 + 2/3 = 11/12.",
        },
      },
      {
        texto: "No fim, SIMPLIFIQUE se possível.",
        exemploReal: {
          contexto: "3/6 + 1/6 = 4/6. Divida por 2:",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Numerador", "Denominador"],
            linhas: [
              { rotulo: "4/6", valores: ["4", "6"] },
              { rotulo: "÷ 2 (MDC)", valores: ["÷2", "÷2"] },
              { rotulo: "2/3", valores: ["2", "3"] },
            ],
          },
          destaque: "Sempre deixar irredutível: 2/3.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Calcule 5/6 − 1/4.",
    resposta: "7/12",
    visualMat: {
      tipo: "tabela",
      titulo: "Subtração com MMC",
      cabecalhos: ["Passo", "Cálculo"],
      linhas: [
        { rotulo: "1", valores: ["MMC(6,4)", "12"] },
        { rotulo: "2", valores: ["5/6 = ?/12", "10/12"] },
        { rotulo: "3", valores: ["1/4 = ?/12", "3/12"] },
        { rotulo: "4", valores: ["10/12 − 3/12", "7/12"] },
      ],
    },
    passos: ["MMC(6,4) = 12.", "5/6 = 10/12.", "1/4 = 3/12.", "10/12 − 3/12 = 7/12."],
  },

  momento06_praticaGuiada: {
    enunciado: "1/2 + 1/4.",
    dica: "MMC = 4.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "3/4" }, { nome: "2/6" }, { nome: "1/6" }],
      respostaCerta: "3/4",
      feedbackAcerto: "🎯 2/4 + 1/4.",
      feedbackErro: "1/2 = 2/4.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "2/3 − 1/6.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "1/2" }, { nome: "1/3" }, { nome: "3/6" }],
      respostaCerta: "1/2",
      feedbackAcerto: "🎯 4/6 − 1/6 = 3/6 = 1/2.",
      feedbackErro: "Iguale por 6 e simplifique.",
    },
  },

  momento08_aplicacao: {
    contexto: "Bebi 1/3 do suco de manhã e 1/4 à tarde.",
    problema: "Quanto sobrou?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5/12" }, { nome: "2/7" }, { nome: "7/12" }],
      respostaCerta: "5/12",
      feedbackAcerto: "🎯 1 − 7/12 = 5/12.",
      feedbackErro: "Some 1/3 + 1/4 = 7/12; subtraia de 1.",
    },
  },

  momento09_revisao: {
    pontos: ["Mesmo denominador: só de cima.", "Diferentes: MMC.", "Simplifique no fim."],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "1/5 + 2/5 =", opcoes: ["3/5", "3/10", "2/10"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Denominador mantém." },
      { pergunta: "3/4 − 1/2 =", opcoes: ["1/4", "2/2", "2/6"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "1/2 = 2/4." },
      { pergunta: "1/2 + 1/3 =", opcoes: ["5/6", "2/5", "1/6"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "MMC 6." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Somas de pizza",
    materiais: ["Papel"],
    passos: ["Divida uma pizza (desenho) em 8.", "Marque quanto cada um comeu.", "Some as frações."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 180, moedas: 95 },
};
