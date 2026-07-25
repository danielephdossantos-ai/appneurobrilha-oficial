import type { AulaV4 } from "../../types";

export const aula05_somaDiferenca: AulaV4 = {
  slug: "u2-05-soma-diferenca",
  titulo: "Produto da soma pela diferença: (a+b)(a−b)",
  iconeTrilha: "➕➖",
  bncc: ["EF08MA06"],
  duracaoMin: 22,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "O produto que ENCURTA",
    historia:
      "{NOME}, tem uma multiplicação especial onde o termo do meio SUMIU. Deixa a expressão bem curtinha.",
  },

  momento02_exploracao: {
    instrucao: "Distribua e observe.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "(a+b)(a−b) passo a passo",
        cabecalhos: ["", "a", "−b"],
        linhas: [
          { rotulo: "a", valores: ["a²", "−ab"] },
          { rotulo: "b", valores: ["ab", "−b²"] },
        ],
      },
      { tipo: "texto", texto: "Soma: a² − ab + ab − b² = a² − b². Os termos do meio se cancelam.", destaque: true },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "O que aconteceu com o termo do meio?",
    pista: "−ab + ab = 0.",
    revelacao: "(a+b)(a−b) = a² − b². Diferença de quadrados.",
  },

  momento04_explicacao: {
    titulo: "Diferença de quadrados",
    etapas: [
      {
        texto: "Fórmula direta.",
        exemploReal: {
          contexto: "(a+b)(a−b) = a² − b²",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Parte", "Fórmula"],
            linhas: [
              { rotulo: "1º", valores: ["quadrado do 1º", "a²"] },
              { rotulo: "−", valores: ["menos", "−"] },
              { rotulo: "2º", valores: ["quadrado do 2º", "b²"] },
            ],
          },
          destaque: "SEM termo do meio.",
        },
      },
      {
        texto: "Exemplo numérico direto.",
        exemploReal: {
          contexto: "(x + 5)(x − 5)",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Parte", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["x²", "x²"] },
              { rotulo: "2", valores: ["5²", "25"] },
              { rotulo: "3", valores: ["diferença", "x² − 25"] },
            ],
          },
          destaque: "= x² − 25.",
        },
      },
      {
        texto: "Cuidado com coeficientes.",
        exemploReal: {
          contexto: "(2x + 3)(2x − 3)",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Parte", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["(2x)²", "4x²"] },
              { rotulo: "2", valores: ["3²", "9"] },
              { rotulo: "3", valores: ["diferença", "4x² − 9"] },
            ],
          },
          destaque: "= 4x² − 9.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "(x + 7)(x − 7) =",
    resposta: "x² − 49",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Parte", "Cálculo"],
      linhas: [
        { rotulo: "1", valores: ["x²", "x²"] },
        { rotulo: "2", valores: ["7²", "49"] },
        { rotulo: "3", valores: ["diferença", "x² − 49"] },
      ],
    },
    passos: ["1º² = x².", "2º² = 49.", "= x² − 49."],
  },

  momento06_praticaGuiada: {
    enunciado: "(x + 6)(x − 6) =",
    dica: "Diferença de quadrados.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "x² − 36" }, { nome: "x² + 12x + 36" }, { nome: "x² + 36" }],
      respostaCerta: "x² − 36",
      feedbackAcerto: "🎯",
      feedbackErro: "SEM termo do meio.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "(3x + 4)(3x − 4) =",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "9x² − 16" }, { nome: "9x² + 24x − 16" }, { nome: "3x² − 16" }],
      respostaCerta: "9x² − 16",
      feedbackAcerto: "🎯 (3x)² − 4².",
      feedbackErro: "(3x)² = 9x².",
    },
  },

  momento08_aplicacao: {
    contexto: "Um jardim é retângulo de lados (x + 8) e (x − 8) metros.",
    problema: "Qual a área expressa como polinômio?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "x² − 64" }, { nome: "x² + 16x − 64" }, { nome: "x² − 16" }],
      respostaCerta: "x² − 64",
      feedbackAcerto: "🎯",
      feedbackErro: "Base·altura = (a+b)(a−b) = a² − b².",
    },
  },

  momento09_revisao: {
    pontos: [
      "(a+b)(a−b) = a² − b².",
      "Sem termo do meio.",
      "Coeficiente eleva junto: (2x)² = 4x².",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "(x+2)(x−2) =", opcoes: ["x²−4", "x²+4", "x²−4x"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Diferença de quadrados." },
      { pergunta: "(y+9)(y−9) =", opcoes: ["y²−81", "y²+81", "y²−18y+81"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "9² = 81." },
      { pergunta: "(5x+1)(5x−1) =", opcoes: ["25x²−1", "5x²−1", "25x²+1"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "(5x)² = 25x²." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Diferença sem trabalho",
    materiais: ["Papel"],
    passos: [
      "Escreva 3 produtos da soma pela diferença.",
      "Faça sem distributiva, só com a fórmula.",
    ],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 160, moedas: 80 },
};
