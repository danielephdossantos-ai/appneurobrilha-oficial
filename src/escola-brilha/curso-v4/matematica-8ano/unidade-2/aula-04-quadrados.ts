import type { AulaV4 } from "../../types";

export const aula04_quadrados: AulaV4 = {
  slug: "u2-04-quadrados",
  titulo: "Produtos notáveis: (a+b)² e (a−b)²",
  iconeTrilha: "🟦",
  bncc: ["EF08MA06"],
  duracaoMin: 24,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Padrões que se repetem",
    historia:
      "{NOME}, tem produtos que aparecem SEMPRE. A Oficina descobre atalhos que servem pro resto da vida matemática.",
  },

  momento02_exploracao: {
    instrucao: "Multiplique passo a passo e observe.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "(a+b)² desenvolvido",
        cabecalhos: ["", "a", "b"],
        linhas: [
          { rotulo: "a", valores: ["a²", "ab"] },
          { rotulo: "b", valores: ["ab", "b²"] },
        ],
      },
      { tipo: "texto", texto: "Soma: a² + ab + ab + b² = a² + 2ab + b².", destaque: true },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Existe um padrão pra (a−b)²?",
    pista: "Substitua b por −b e refaça a distributiva.",
    revelacao: "(a−b)² = a² − 2ab + b².",
  },

  momento04_explicacao: {
    titulo: "Dois quadrados perfeitos",
    etapas: [
      {
        texto: "Quadrado da SOMA.",
        exemploReal: {
          contexto: "(a+b)² = a² + 2ab + b²",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Parte", "Fórmula"],
            linhas: [
              { rotulo: "1º", valores: ["quadrado do 1º", "a²"] },
              { rotulo: "2·", valores: ["2× produto dos dois", "2ab"] },
              { rotulo: "2º", valores: ["quadrado do 2º", "b²"] },
            ],
          },
          destaque: "Ordem: (1º)² + 2·(1º)·(2º) + (2º)².",
        },
      },
      {
        texto: "Quadrado da DIFERENÇA.",
        exemploReal: {
          contexto: "(a−b)² = a² − 2ab + b²",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Parte", "Fórmula"],
            linhas: [
              { rotulo: "1º", valores: ["quadrado do 1º", "a²"] },
              { rotulo: "−2·", valores: ["−2× produto", "−2ab"] },
              { rotulo: "2º", valores: ["quadrado do 2º", "+b²"] },
            ],
          },
          destaque: "O do meio fica NEGATIVO; os quadrados sempre positivos.",
        },
      },
      {
        texto: "Exemplo numérico.",
        exemploReal: {
          contexto: "(x + 3)² = ?",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Parte", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["x²", "x²"] },
              { rotulo: "2", valores: ["2·x·3", "6x"] },
              { rotulo: "3", valores: ["3²", "9"] },
            ],
          },
          destaque: "= x² + 6x + 9.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Desenvolva (x − 5)².",
    resposta: "x² − 10x + 25",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Parte", "Cálculo"],
      linhas: [
        { rotulo: "1", valores: ["x²", "x²"] },
        { rotulo: "2", valores: ["−2·x·5", "−10x"] },
        { rotulo: "3", valores: ["5²", "+25"] },
      ],
    },
    passos: ["x² − 2·x·5 + 5².", "= x² − 10x + 25."],
  },

  momento06_praticaGuiada: {
    enunciado: "(x + 4)² =",
    dica: "Quadrado da soma.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "x² + 8x + 16" }, { nome: "x² + 16" }, { nome: "x² + 4x + 8" }],
      respostaCerta: "x² + 8x + 16",
      feedbackAcerto: "🎯",
      feedbackErro: "Não esqueça do 2ab.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "(2x − 3)² =",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4x² − 12x + 9" }, { nome: "4x² + 12x + 9" }, { nome: "2x² − 6x + 9" }],
      respostaCerta: "4x² − 12x + 9",
      feedbackAcerto: "🎯 (2x)² − 2·(2x)·3 + 3² = 4x² − 12x + 9.",
      feedbackErro: "Cuidado ao elevar 2x ao quadrado: (2x)² = 4x².",
    },
  },

  momento08_aplicacao: {
    contexto: "Um quadrado tem lado (x + 6).",
    problema: "Qual a área expressa como polinômio?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "x² + 12x + 36" }, { nome: "x² + 36" }, { nome: "x² + 12x + 6" }],
      respostaCerta: "x² + 12x + 36",
      feedbackAcerto: "🎯",
      feedbackErro: "Quadrado da soma completa.",
    },
  },

  momento09_revisao: {
    pontos: [
      "(a+b)² = a² + 2ab + b².",
      "(a−b)² = a² − 2ab + b².",
      "Nunca esqueça do termo do meio (2ab).",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "(x+1)² =", opcoes: ["x²+2x+1", "x²+1", "x²+2x"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "1º² + 2·1º·2º + 2º²." },
      { pergunta: "(x−2)² =", opcoes: ["x²−4x+4", "x²+4x+4", "x²−4"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Meio negativo." },
      { pergunta: "(3x+1)² =", opcoes: ["9x²+6x+1", "9x²+1", "3x²+6x+1"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "(3x)² = 9x²." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Tabuada dos quadrados",
    materiais: ["Papel"],
    passos: [
      "Desenvolva (x+2)², (x−4)², (2x+5)².",
      "Cite pra alguém a regra dos 3 termos.",
    ],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 170, moedas: 85 },
};
