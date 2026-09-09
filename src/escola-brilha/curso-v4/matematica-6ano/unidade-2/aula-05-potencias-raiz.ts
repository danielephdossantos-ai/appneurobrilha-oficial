import type { AulaV4 } from "../../types";

export const aula05_potenciasRaiz: AulaV4 = {
  slug: "u2-05-potencias-raiz",
  titulo: "Potências com números naturais",
  iconeTrilha: "⚡",
  bncc: ["EF06MA03"],
  duracaoMin: 24,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "Multiplicação turbinada",
    historia:
      "{NOME}, quando um número aparece como fator várias vezes, podemos registrar essa multiplicação de forma curta usando uma POTÊNCIA.",
  },

  momento02_exploracao: {
    instrucao: "Base é quem se multiplica. Expoente é QUANTAS vezes.",
    cenas: [
      { tipo: "texto", texto: "Notação: 2³ = 2 × 2 × 2 = 8. Base = 2, expoente = 3.", destaque: true },
      {
        tipo: "tabela",
        titulo: "Potências úteis",
        cabecalhos: ["Potência", "Cálculo", "Resultado"],
        linhas: [
          { rotulo: "2²", valores: ["2²", "2 × 2", "4"] },
          { rotulo: "2³", valores: ["2³", "2 × 2 × 2", "8"] },
          { rotulo: "3²", valores: ["3²", "3 × 3", "9"] },
          { rotulo: "3³", valores: ["3³", "3 × 3 × 3", "27"] },
          { rotulo: "5²", valores: ["5²", "5 × 5", "25"] },
          { rotulo: "10²", valores: ["10²", "10 × 10", "100"] },
          { rotulo: "10³", valores: ["10³", "10 × 10 × 10", "1.000"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Qual é o valor de 7²?",
    pista: "O expoente 2 indica dois fatores iguais a 7.",
    revelacao: "7² = 7 × 7 = 49.",
  },

  momento04_explicacao: {
    titulo: "Potências e quadrados perfeitos",
    etapas: [
      {
        texto: "Quadrados perfeitos: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100.",
        exemploReal: {
          contexto: "Tabela de quadrados",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["n", "n²"],
            linhas: [
              { rotulo: "1", valores: ["1", "1"] },
              { rotulo: "2", valores: ["2", "4"] },
              { rotulo: "3", valores: ["3", "9"] },
              { rotulo: "4", valores: ["4", "16"] },
              { rotulo: "5", valores: ["5", "25"] },
              { rotulo: "6", valores: ["6", "36"] },
              { rotulo: "7", valores: ["7", "49"] },
              { rotulo: "8", valores: ["8", "64"] },
              { rotulo: "9", valores: ["9", "81"] },
              { rotulo: "10", valores: ["10", "100"] },
            ],
          },
          destaque: "Cada resultado da tabela é o quadrado de um número natural.",
        },
      },
      {
        texto: "Nas potências de 10, cada multiplicação por 10 muda o valor posicional uma casa para a esquerda.",
        exemploReal: {
          contexto: "10¹ = 10, 10² = 100, 10³ = 1.000, 10⁶ = 1.000.000.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Potência", "Valor", "Zeros"],
            linhas: [
              { rotulo: "10²", valores: ["10²", "100", "2"] },
              { rotulo: "10³", valores: ["10³", "1.000", "3"] },
              { rotulo: "10⁶", valores: ["10⁶", "1.000.000", "6"] },
              { rotulo: "10⁹", valores: ["10⁹", "1.000.000.000 (bilhão)", "9"] },
            ],
          },
          destaque: "1 bilhão = 10⁹. Ligação direta com a Unidade 1.",
        },
      },
      {
        texto: "Podemos reconhecer um quadrado perfeito pela multiplicação que o formou.",
        exemploReal: {
          contexto: "81 = 9²",
          destaque: "9 × 9 = 81; por isso 81 é um quadrado perfeito.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Calcule 5² + 6.",
    resposta: "31",
    passos: ["5² = 5 × 5.", "5 × 5 = 25.", "25 + 6 = 31."],
  },

  momento06_praticaGuiada: {
    enunciado: "Calcule 4³.",
    dica: "4 × 4 × 4.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "64" }, { nome: "12" }, { nome: "16" }],
      respostaCerta: "64",
      feedbackAcerto: "🎯 4 × 4 = 16 · × 4 = 64.",
      feedbackErro: "4 × 4 × 4 = 64.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Quanto é 10² + 3²?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "109" }, { nome: "19" }, { nome: "169" }],
      respostaCerta: "109",
      feedbackAcerto: "🎯 100 + 9 = 109.",
      feedbackErro: "10² = 100 e 3² = 9.",
    },
  },

  momento08_aplicacao: {
    contexto: "Uma sala quadrada tem lado de 8 m.",
    problema: "Qual é a área da sala?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "64 m²" }, { nome: "16 m²" }, { nome: "32 m²" }],
      respostaCerta: "64 m²",
      feedbackAcerto: "🎯 Área = 8² = 64 m².",
      feedbackErro: "Área do quadrado = lado × lado = 8 × 8.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Potência = multiplicação repetida.",
      "10ⁿ = 1 seguido de n zeros.",
      "Quadrado perfeito é o resultado de um natural multiplicado por ele mesmo.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "2⁴ =", opcoes: ["16", "8", "24"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2×2×2×2." },
      { pergunta: "Qual é um quadrado perfeito?", opcoes: ["25", "20", "30"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "25 = 5²." },
      { pergunta: "10⁶ =", opcoes: ["1.000.000", "100.000", "1.000.000.000"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "6 zeros = milhão." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caça-quadrados",
    materiais: ["Trena ou régua"],
    passos: ["Encontre um objeto quadrado em casa.", "Meça o lado.", "Calcule a área (lado²)."],
    registro: "📸 Foto da medição.",
  },
  recompensa: { xp: 170, moedas: 90 },
};
