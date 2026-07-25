import type { AulaV4 } from "../../types";

export const aula03_polinomios: AulaV4 = {
  slug: "u2-03-polinomios",
  titulo: "Polinômios: somar, subtrair e multiplicar",
  iconeTrilha: "🧩",
  bncc: ["EF08MA06"],
  duracaoMin: 24,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Vários monômios juntos",
    historia:
      "{NOME}, polinômio é um combo de monômios: 2x² + 3x − 5. A Oficina agora monta e desmonta esses combos.",
  },

  momento02_exploracao: {
    instrucao: "Identifique os termos.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Nomes por número de termos",
        cabecalhos: ["Termos", "Nome", "Exemplo"],
        linhas: [
          { rotulo: "1", valores: ["1", "monômio", "3x"] },
          { rotulo: "2", valores: ["2", "binômio", "2x + 1"] },
          { rotulo: "3", valores: ["3", "trinômio", "x² + 2x − 3"] },
          { rotulo: "n", valores: ["4+", "polinômio", "x³ − 2x² + x − 5"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como somar (2x + 3) + (x + 1)?",
    pista: "Junte termos semelhantes.",
    revelacao: "3x + 4.",
  },

  momento04_explicacao: {
    titulo: "Operar polinômios",
    etapas: [
      {
        texto: "SOMA: agrupe SEMELHANTES.",
        exemploReal: {
          contexto: "(3x² + 2x − 1) + (x² − 5x + 4)",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Grupo", "Cálculo", "Resultado"],
            linhas: [
              { rotulo: "x²", valores: ["3 + 1", "4x²", ""] },
              { rotulo: "x", valores: ["2 − 5", "−3x", ""] },
              { rotulo: "cte", valores: ["−1 + 4", "3", ""] },
            ],
          },
          destaque: "= 4x² − 3x + 3.",
        },
      },
      {
        texto: "SUBTRAÇÃO: TROQUE os sinais do 2º polinômio e some.",
        exemploReal: {
          contexto: "(5x − 2) − (2x + 4)",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["troca sinais", "5x − 2 − 2x − 4"] },
              { rotulo: "2", valores: ["semelhantes", "(5−2)x + (−2−4)"] },
              { rotulo: "3", valores: ["resultado", "3x − 6"] },
            ],
          },
          destaque: "= 3x − 6.",
        },
      },
      {
        texto: "MULTIPLICAÇÃO: DISTRIBUTIVA — cada termo do 1º vezes cada termo do 2º.",
        exemploReal: {
          contexto: "(x + 3)·(x + 2)",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["", "x", "+2"],
            linhas: [
              { rotulo: "x", valores: ["x²", "2x"] },
              { rotulo: "+3", valores: ["3x", "6"] },
            ],
          },
          destaque: "x² + 2x + 3x + 6 = x² + 5x + 6.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "(2x² + x) + (3x² − 4x)",
    resposta: "5x² − 3x",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Grupo", "Soma"],
      linhas: [
        { rotulo: "x²", valores: ["2+3", "5x²"] },
        { rotulo: "x", valores: ["1−4", "−3x"] },
      ],
    },
    passos: ["x²: 2+3 = 5.", "x: 1−4 = −3.", "= 5x² − 3x."],
  },

  momento06_praticaGuiada: {
    enunciado: "(3x + 5) + (2x − 3) =",
    dica: "Junte semelhantes.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5x + 2" }, { nome: "5x + 8" }, { nome: "6x + 2" }],
      respostaCerta: "5x + 2",
      feedbackAcerto: "🎯",
      feedbackErro: "3+2 = 5, 5−3 = 2.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "(x + 4)·(x + 1) =",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "x² + 5x + 4" }, { nome: "x² + 4x + 4" }, { nome: "x² + 4" }],
      respostaCerta: "x² + 5x + 4",
      feedbackAcerto: "🎯 Distributiva.",
      feedbackErro: "x·x + x·1 + 4·x + 4·1.",
    },
  },

  momento08_aplicacao: {
    contexto: "Um retângulo tem lados (x + 3) e (x + 2).",
    problema: "Qual a área expressa em polinômio?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "x² + 5x + 6" }, { nome: "x² + 6" }, { nome: "2x + 5" }],
      respostaCerta: "x² + 5x + 6",
      feedbackAcerto: "🎯",
      feedbackErro: "Multiplique os lados.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Soma: agrupe semelhantes.",
      "Subtração: troca sinais e soma.",
      "Multiplicação: distributiva (todo × todo).",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "(x+2)+(x+3) =", opcoes: ["2x+5", "x+5", "2x+6"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Some semelhantes." },
      { pergunta: "(3x)−(x) =", opcoes: ["2x", "3", "4x"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "3x − x." },
      { pergunta: "(x+1)(x+1) =", opcoes: ["x²+2x+1", "x²+1", "2x+2"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Distributiva." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Área com letras",
    materiais: ["Papel"],
    passos: [
      "Desenhe um retângulo de lados (x+2) e (x+5).",
      "Escreva a área como polinômio.",
    ],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 160, moedas: 80 },
};
