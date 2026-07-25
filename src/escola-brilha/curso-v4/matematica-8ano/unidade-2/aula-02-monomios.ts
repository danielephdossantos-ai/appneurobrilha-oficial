import type { AulaV4 } from "../../types";

export const aula02_monomios: AulaV4 = {
  slug: "u2-02-monomios",
  titulo: "Monômios: somar, subtrair, multiplicar e dividir",
  iconeTrilha: "🔩",
  bncc: ["EF08MA06"],
  duracaoMin: 24,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Peças da Oficina",
    historia:
      "{NOME}, monômio é uma peça só: número × letra(s) elevada(s) a expoente. Ex.: 3x², −5xy, 7. Hoje aprendemos a MONTAR e SEPARAR peças.",
  },

  momento02_exploracao: {
    instrucao: "Identifique as partes.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Anatomia do monômio",
        cabecalhos: ["Monômio", "Coeficiente", "Parte literal", "Grau"],
        linhas: [
          { rotulo: "1", valores: ["3x²", "3", "x²", "2"] },
          { rotulo: "2", valores: ["−5xy", "−5", "xy", "2"] },
          { rotulo: "3", valores: ["7", "7", "—", "0"] },
          { rotulo: "4", valores: ["x³y", "1", "x³y", "4"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Só é possível SOMAR monômios iguais?",
    pista: "3 laranjas + 4 laranjas = 7 laranjas. 3 laranjas + 2 uvas ≠ combina.",
    revelacao: "Somar só se a PARTE LITERAL é a mesma (monômios semelhantes).",
  },

  momento04_explicacao: {
    titulo: "As 4 operações",
    etapas: [
      {
        texto: "SOMA/SUBTRAÇÃO: só entre semelhantes; some/subtraia coeficientes.",
        exemploReal: {
          contexto: "3x + 5x − 2x = ?",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["coeficientes", "3 + 5 − 2 = 6"] },
              { rotulo: "2", valores: ["parte literal", "x"] },
              { rotulo: "3", valores: ["resultado", "6x"] },
            ],
          },
          destaque: "= 6x.",
        },
      },
      {
        texto: "MULTIPLICAÇÃO: multiplique coeficientes e some expoentes de letras iguais.",
        exemploReal: {
          contexto: "(3x²) · (2x³)",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["coeficientes", "3·2 = 6"] },
              { rotulo: "2", valores: ["expoentes", "x² · x³ = x⁵"] },
              { rotulo: "3", valores: ["resultado", "6x⁵"] },
            ],
          },
          destaque: "= 6x⁵.",
        },
      },
      {
        texto: "DIVISÃO: divida coeficientes e SUBTRAIA expoentes.",
        exemploReal: {
          contexto: "(10x⁵) ÷ (2x²)",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["coeficientes", "10 ÷ 2 = 5"] },
              { rotulo: "2", valores: ["expoentes", "5 − 2 = 3"] },
              { rotulo: "3", valores: ["resultado", "5x³"] },
            ],
          },
          destaque: "= 5x³.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "(4x²y) · (3xy²) = ?",
    resposta: "12x³y³",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Parte", "Cálculo"],
      linhas: [
        { rotulo: "coef.", valores: ["4·3", "12"] },
        { rotulo: "x", valores: ["x²·x", "x³"] },
        { rotulo: "y", valores: ["y·y²", "y³"] },
      ],
    },
    passos: ["4·3 = 12.", "x²·x = x³.", "y·y² = y³.", "= 12x³y³."],
  },

  momento06_praticaGuiada: {
    enunciado: "5a + 3a − a =",
    dica: "Coeficientes: 5+3−1.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "7a" }, { nome: "8a" }, { nome: "9a"} ],
      respostaCerta: "7a",
      feedbackAcerto: "🎯",
      feedbackErro: "5+3−1 = 7.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "(6x³) ÷ (2x) =",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3x²" }, { nome: "3x" }, { nome: "3x³" }],
      respostaCerta: "3x²",
      feedbackAcerto: "🎯 6÷2, 3−1.",
      feedbackErro: "Divisão: subtrai expoentes.",
    },
  },

  momento08_aplicacao: {
    contexto: "Um retângulo tem base 4x e altura 3x².",
    problema: "Qual a área?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "12x³" }, { nome: "7x²" }, { nome: "12x²" }],
      respostaCerta: "12x³",
      feedbackAcerto: "🎯 4x · 3x² = 12x³.",
      feedbackErro: "Multiplique coef e some expoentes.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Só some/subtraia SEMELHANTES.",
      "Multiplicação: coef × coef, expoentes somam.",
      "Divisão: coef ÷ coef, expoentes subtraem.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "2x + 3x =", opcoes: ["5x", "6x", "5x²"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Some coef." },
      { pergunta: "(3x)·(4x) =", opcoes: ["12x²", "7x", "12x"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "coef·coef, x·x = x²." },
      { pergunta: "(8x⁴)÷(4x²) =", opcoes: ["2x²", "2x⁶", "4x²"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "8÷4, 4−2." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Loja de peças",
    materiais: ["Papel"],
    passos: [
      "Invente 3 monômios: escreva coeficiente, parte literal e grau.",
      "Faça uma soma e uma multiplicação com eles.",
    ],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 160, moedas: 80 },
};
