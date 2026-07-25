import type { AulaV4 } from "../../types";

export const aula01_fatorComum: AulaV4 = {
  slug: "u3-01-fator-comum",
  titulo: "Fator comum em evidência",
  iconeTrilha: "🔧",
  bncc: ["EF08MA06"],
  duracaoMin: 22,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Fatorar é o inverso de distribuir",
    historia:
      "{NOME}, se 3·(x+2) = 3x + 6, então quem viu 3x + 6 pode DESFAZER e voltar pra 3·(x+2). Isso é fatorar.",
  },
  momento02_exploracao: {
    instrucao: "Ache o que se repete.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Termo comum",
        cabecalhos: ["Expressão", "Comum", "Fatorada"],
        linhas: [
          { rotulo: "1", valores: ["3x + 6", "3", "3(x+2)"] },
          { rotulo: "2", valores: ["5x² + 10x", "5x", "5x(x+2)"] },
          { rotulo: "3", valores: ["4a²b + 6ab²", "2ab", "2ab(2a+3b)"] },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como saber o maior fator comum?",
    pista: "MDC dos números + menor expoente das letras que aparecem em TODOS.",
    revelacao: "Fator comum = MDC dos coef × letras comuns no menor expoente.",
  },
  momento04_explicacao: {
    titulo: "Passo a passo",
    etapas: [
      {
        texto: "1) Achar o MDC dos coeficientes.",
        exemploReal: {
          contexto: "12x + 18",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Valor"],
            linhas: [
              { rotulo: "1", valores: ["MDC(12,18)", "6"] },
              { rotulo: "2", valores: ["Divide", "12÷6=2, 18÷6=3"] },
              { rotulo: "3", valores: ["Fatora", "6(2x+3)"] },
            ],
          },
          destaque: "= 6(2x + 3).",
        },
      },
      {
        texto: "2) Achar letras comuns no menor expoente.",
        exemploReal: {
          contexto: "x³ + x²",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Valor"],
            linhas: [
              { rotulo: "1", valores: ["comum", "x²"] },
              { rotulo: "2", valores: ["divide", "x³÷x²=x, x²÷x²=1"] },
              { rotulo: "3", valores: ["fatora", "x²(x+1)"] },
            ],
          },
          destaque: "= x²(x + 1).",
        },
      },
      {
        texto: "3) Junte tudo.",
        exemploReal: {
          contexto: "10x²y + 15xy²",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Valor"],
            linhas: [
              { rotulo: "1", valores: ["MDC coef", "5"] },
              { rotulo: "2", valores: ["comum letras", "xy"] },
              { rotulo: "3", valores: ["fator", "5xy"] },
              { rotulo: "4", valores: ["resto", "(2x + 3y)"] },
            ],
          },
          destaque: "= 5xy(2x + 3y).",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Fatore 6x² + 9x.",
    resposta: "3x(2x + 3)",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Passo", "Valor"],
      linhas: [
        { rotulo: "1", valores: ["MDC(6,9)", "3"] },
        { rotulo: "2", valores: ["comum letra", "x"] },
        { rotulo: "3", valores: ["fatorada", "3x(2x+3)"] },
      ],
    },
    passos: ["MDC = 3.", "letra = x.", "= 3x(2x + 3)."],
  },
  momento06_praticaGuiada: {
    enunciado: "Fatore 4x + 8.",
    dica: "MDC(4,8).",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4(x+2)" }, { nome: "2(x+4)" }, { nome: "4x+8" }],
      respostaCerta: "4(x+2)",
      feedbackAcerto: "🎯",
      feedbackErro: "MDC(4,8)=4.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Fatore x² − 5x.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "x(x−5)" }, { nome: "x²(1−5)" }, { nome: "5(x−x)" }],
      respostaCerta: "x(x−5)",
      feedbackAcerto: "🎯",
      feedbackErro: "x em comum.",
    },
  },
  momento08_aplicacao: {
    contexto: "Um retângulo tem área 6x² + 4x.",
    problema: "Se a base é 2x, qual é a altura?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3x + 2" }, { nome: "3x + 4" }, { nome: "6x + 2" }],
      respostaCerta: "3x + 2",
      feedbackAcerto: "🎯 6x²+4x = 2x(3x+2).",
      feedbackErro: "Fatore por 2x.",
    },
  },
  momento09_revisao: {
    pontos: ["MDC dos coef.", "Letra comum com MENOR expoente.", "Multiplique e confira."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "2x + 6 =", opcoes: ["2(x+3)", "2(x+6)", "x+3"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "MDC 2." },
      { pergunta: "x² + x =", opcoes: ["x(x+1)", "x(x−1)", "x²+x"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "x comum." },
      { pergunta: "6a + 9b =", opcoes: ["3(2a+3b)", "6(a+b)", "3(a+b)"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "MDC 3." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Caça ao fator",
    materiais: ["Papel"],
    passos: ["Escreva 4 expressões e fatore por fator comum.", "Confira multiplicando de volta."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 160, moedas: 80 },
};
