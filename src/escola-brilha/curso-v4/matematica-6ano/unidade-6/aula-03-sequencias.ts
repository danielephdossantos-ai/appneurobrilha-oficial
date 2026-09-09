import type { AulaV4 } from "../../types";

export const aula03_sequencias: AulaV4 = {
  slug: "u6-03-sequencias",
  titulo: "Sequências numéricas",
  iconeTrilha: "🔢",
  bncc: ["EF06MA14"],
  duracaoMin: 20,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Padrões no mundo",
    historia: "{NOME}, 2, 4, 6, 8… qual é o próximo? Achar padrões é a base da ÁLGEBRA.",
  },

  momento02_exploracao: {
    instrucao: "Dois tipos de sequência.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Tipos",
        cabecalhos: ["Sequência", "Padrão"],
        linhas: [
          { rotulo: "aritmética", valores: ["Aritmética: 2,5,8,11,…", "Soma sempre 3"] },
          { rotulo: "geométrica", valores: ["Geométrica: 3,6,12,24,…", "Multiplica sempre por 2"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "5, 8, 11, 14, __?",
    pista: "Vai de 3 em 3.",
    revelacao: "17. Sequência aritmética com razão 3.",
  },

  momento04_explicacao: {
    titulo: "Encontrando o padrão",
    etapas: [
      {
        texto: "Aritmética: subtraia termos consecutivos e veja se dá o mesmo.",
        exemploReal: {
          contexto: "1, 4, 7, 10, 13…",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Termo", "Valor", "Diferença"],
            linhas: [
              { rotulo: "1º", valores: ["1º", "1", "-"] },
              { rotulo: "2º", valores: ["2º", "4", "+3"] },
              { rotulo: "3º", valores: ["3º", "7", "+3"] },
              { rotulo: "4º", valores: ["4º", "10", "+3"] },
              { rotulo: "5º", valores: ["5º", "13", "+3"] },
            ],
          },
          destaque: "Razão = +3.",
        },
      },
      {
        texto: "Geométrica: DIVIDA termos consecutivos.",
        exemploReal: {
          contexto: "2, 6, 18, 54…",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Termo", "÷ anterior"],
            linhas: [
              { rotulo: "6/2", valores: ["6/2", "3"] },
              { rotulo: "18/6", valores: ["18/6", "3"] },
              { rotulo: "54/18", valores: ["54/18", "3"] },
            ],
          },
          destaque: "Razão = ×3.",
        },
      },
      {
        texto: "Sequências figurais: conte os elementos e note o padrão.",
        exemploReal: {
          contexto: "Fig 1: 1 quadrado; Fig 2: 4; Fig 3: 9; Fig 4: ?",
          destaque: "São QUADRADOS PERFEITOS: 1, 4, 9, 16… Próximo: 16.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Descubra o 10º termo de 3, 7, 11, 15, …",
    resposta: "39",
    passos: [
      "Razão = 4.",
      "Termo n = 3 + (n−1)·4.",
      "10º = 3 + 9·4 = 3 + 36 = 39.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "10, 20, 40, 80, __?",
    dica: "×2.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Próximo:",
      opcoes: [{ nome: "160" }, { nome: "100" }, { nome: "120" }],
      respostaCerta: "160",
      feedbackAcerto: "🎯 Geométrica ×2.",
      feedbackErro: "80 × 2.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "50, 45, 40, 35, __?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Próximo:",
      opcoes: [{ nome: "30" }, { nome: "25" }, { nome: "40" }],
      respostaCerta: "30",
      feedbackAcerto: "🎯 −5 a cada passo.",
      feedbackErro: "Razão −5.",
    },
  },

  momento08_aplicacao: {
    contexto: "Uma bactéria dobra a cada hora. Começa com 3.",
    problema: "Após 4 h, quantas?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "48" }, { nome: "24" }, { nome: "12" }],
      respostaCerta: "48",
      feedbackAcerto: "🎯 3, 6, 12, 24, 48.",
      feedbackErro: "×2 quatro vezes.",
    },
  },

  momento09_revisao: {
    pontos: ["Aritmética: soma constante.", "Geométrica: multiplica por constante.", "Figuras: contar padrões."],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "1,3,5,7,__:", opcoes: ["9", "8", "10"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Ímpares." },
      { pergunta: "100,50,25,__:", opcoes: ["12,5", "10", "20"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "÷2." },
      { pergunta: "Fibonacci 1,1,2,3,5,__:", opcoes: ["8", "7", "10"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Soma dos 2 anteriores." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Padrão em casa",
    materiais: ["Papel"],
    passos: ["Encontre um padrão em algum lugar (azulejo, calendário).", "Escreva a sequência."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 170, moedas: 90 },
};
