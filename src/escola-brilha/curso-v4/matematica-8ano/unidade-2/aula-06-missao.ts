import type { AulaV4 } from "../../types";

export const aula06_missao: AulaV4 = {
  slug: "u2-06-missao",
  titulo: "Missão — Mestre dos Produtos Notáveis",
  iconeTrilha: "🏅",
  bncc: ["EF08MA06"],
  duracaoMin: 25,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Fechando a Unidade 2",
    historia:
      "{NOME}, hoje TUDO junto: valor numérico, monômios, polinômios e os três produtos notáveis.",
  },

  momento02_exploracao: {
    instrucao: "Ferramentas.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Kit da Unidade 2",
        cabecalhos: ["Ferramenta", "Uso"],
        linhas: [
          { rotulo: "val.", valores: ["Valor num.", "Substituir letra"] },
          { rotulo: "±×÷", valores: ["Operações", "Monômios e polinômios"] },
          { rotulo: "(a+b)²", valores: ["Soma²", "a²+2ab+b²"] },
          { rotulo: "(a−b)²", valores: ["Diferença²", "a²−2ab+b²"] },
          { rotulo: "(a+b)(a−b)", valores: ["Soma·Diferença", "a²−b²"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Qual atalho serve para cada expressão?",
    pista: "Compare padrões antes de multiplicar.",
    revelacao: "Reconhecer o padrão economiza tempo.",
  },

  momento04_explicacao: {
    titulo: "Combos",
    etapas: [
      {
        texto: "Reconheça e aplique.",
        exemploReal: {
          contexto: "(x+7)(x+7) → mesma coisa que (x+7)²",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["padrão", "(a+b)²"] },
              { rotulo: "2", valores: ["a²", "x²"] },
              { rotulo: "3", valores: ["2ab", "14x"] },
              { rotulo: "4", valores: ["b²", "49"] },
            ],
          },
          destaque: "= x² + 14x + 49.",
        },
      },
      {
        texto: "Compare diferença e diferença ao quadrado.",
        exemploReal: {
          contexto: "(x−4)(x+4) vs (x−4)²",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Expressão", "Resultado"],
            linhas: [
              { rotulo: "1", valores: ["(x−4)(x+4)", "x² − 16"] },
              { rotulo: "2", valores: ["(x−4)²", "x² − 8x + 16"] },
            ],
          },
          destaque: "Padrões diferentes → resultados diferentes.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Desenvolva (2x+5)².",
    resposta: "4x² + 20x + 25",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Parte", "Cálculo"],
      linhas: [
        { rotulo: "1", valores: ["(2x)²", "4x²"] },
        { rotulo: "2", valores: ["2·2x·5", "20x"] },
        { rotulo: "3", valores: ["5²", "25"] },
      ],
    },
    passos: ["(2x)² = 4x².", "2·(2x)·5 = 20x.", "5² = 25.", "= 4x² + 20x + 25."],
  },

  momento06_praticaGuiada: {
    enunciado: "(x−6)² =",
    dica: "Quadrado da diferença.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "x² − 12x + 36" }, { nome: "x² − 36" }, { nome: "x² + 12x + 36" }],
      respostaCerta: "x² − 12x + 36",
      feedbackAcerto: "🎯",
      feedbackErro: "Termo do meio negativo, quadrados positivos.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "(2x+3)(2x−3) =",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4x² − 9" }, { nome: "4x² + 12x − 9" }, { nome: "2x² − 9" }],
      respostaCerta: "4x² − 9",
      feedbackAcerto: "🎯",
      feedbackErro: "Diferença de quadrados.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Um terreno quadrado tem lado (x + 10). Cortam um pedaço quadrado de lado x da ponta.",
    problema: "Área que sobrou = (x+10)² − x² =",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "20x + 100" }, { nome: "100" }, { nome: "x² + 100" }],
      respostaCerta: "20x + 100",
      feedbackAcerto: "🎯 (x²+20x+100) − x² = 20x + 100.",
      feedbackErro: "Desenvolva (x+10)² e subtraia x².",
    },
  },

  momento09_revisao: {
    pontos: [
      "3 padrões travados: (a+b)², (a−b)², (a+b)(a−b).",
      "Cuidado com o coeficiente ao elevar (2x)² = 4x².",
      "Você virou Mestre dos Produtos Notáveis.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "(x+3)² =", opcoes: ["x²+6x+9", "x²+9", "x²+6x"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Não esqueça de 2ab." },
      { pergunta: "(y−1)² =", opcoes: ["y²−2y+1", "y²−1", "y²+2y+1"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Meio negativo." },
      { pergunta: "(x+8)(x−8) =", opcoes: ["x²−64", "x²+64", "x²−16x+64"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Sem termo do meio." },
      { pergunta: "(3+x)² =", opcoes: ["9+6x+x²", "9+x²", "6+6x+x²"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "9 + 2·3·x + x²." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Diploma Mestre dos Produtos Notáveis",
    materiais: ["Papel, canetas"],
    passos: [
      "Diploma: 'Mestre dos Produtos Notáveis'.",
      "Escreva os 3 padrões e um exemplo de cada.",
    ],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 220, moedas: 110, medalha: "Mestre dos Produtos Notáveis" },
};
