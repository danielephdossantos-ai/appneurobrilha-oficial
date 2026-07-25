import type { AulaV4 } from "../../types";

export const aula02_potencias: AulaV4 = {
  slug: "u1-02-potencias",
  titulo: "Potência com expoente inteiro",
  iconeTrilha: "⚡",
  bncc: ["EF08MA01"],
  duracaoMin: 22,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "O expoente pode ser NEGATIVO?",
    historia:
      "{NOME}, se 10² = 100 e 10¹ = 10, o que seria 10⁻¹? A Oficina descobre hoje que expoente negativo NÃO dá número negativo — dá FRAÇÃO.",
  },

  momento02_exploracao: {
    instrucao: "Olhe o padrão descendo pela tabela.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Potências de 10",
        cabecalhos: ["Expoente", "Valor", "Padrão"],
        linhas: [
          { rotulo: "3", valores: ["10³", "1.000", "×10"] },
          { rotulo: "2", valores: ["10²", "100", "÷10"] },
          { rotulo: "1", valores: ["10¹", "10", "÷10"] },
          { rotulo: "0", valores: ["10⁰", "1", "÷10"] },
          { rotulo: "−1", valores: ["10⁻¹", "0,1", "÷10"] },
          { rotulo: "−2", valores: ["10⁻²", "0,01", "÷10"] },
          { rotulo: "−3", valores: ["10⁻³", "0,001", "÷10"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Cada linha divide por 10. Continua descendo → o que aparece?",
    pista: "Depois de 10⁰ = 1, o próximo é 1 ÷ 10 = 0,1.",
    revelacao: "10⁻ⁿ = 1 ÷ 10ⁿ. Expoente negativo é inverso.",
  },

  momento04_explicacao: {
    titulo: "Regras das potências",
    etapas: [
      {
        texto: "Definições básicas.",
        exemploReal: {
          contexto: "Casos especiais",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Regra", "Exemplo", "Resultado"],
            linhas: [
              { rotulo: "a¹ = a", valores: ["7¹", "7", ""] },
              { rotulo: "a⁰ = 1", valores: ["5⁰", "1", ""] },
              { rotulo: "a⁻ⁿ = 1/aⁿ", valores: ["2⁻³", "1/8", ""] },
              { rotulo: "(a/b)⁻¹", valores: ["(2/3)⁻¹", "3/2", ""] },
            ],
          },
          destaque: "Base 0 elevada a expoente 0 NÃO tem definição.",
        },
      },
      {
        texto: "Multiplicação e divisão de potências de MESMA BASE.",
        exemploReal: {
          contexto: "aᵐ · aⁿ = aᵐ⁺ⁿ · aᵐ ÷ aⁿ = aᵐ⁻ⁿ",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Operação", "Cálculo", "Resultado"],
            linhas: [
              { rotulo: "×", valores: ["2³ · 2²", "2³⁺²", "2⁵ = 32"] },
              { rotulo: "÷", valores: ["2⁵ ÷ 2²", "2⁵⁻²", "2³ = 8"] },
              { rotulo: "pot. de pot.", valores: ["(2³)²", "2³ˣ²", "2⁶ = 64"] },
            ],
          },
          destaque: "Some ou subtraia expoentes SÓ com mesma base.",
        },
      },
      {
        texto: "Expoente negativo vira fração; volta ao positivo se você inverter a base.",
        exemploReal: {
          contexto: "Reescreva sem expoente negativo",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Original", "Reescrita", "Valor"],
            linhas: [
              { rotulo: "2⁻²", valores: ["2⁻²", "1/2²", "1/4"] },
              { rotulo: "3⁻¹", valores: ["3⁻¹", "1/3", "≈ 0,333"] },
              { rotulo: "(1/2)⁻³", valores: ["(1/2)⁻³", "2³", "8"] },
            ],
          },
          destaque: "Base fracionária: expoente negativo INVERTE.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Calcule 2⁻³.",
    resposta: "1/8",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Passo", "Cálculo"],
      linhas: [
        { rotulo: "1", valores: ["expoente negativo", "2⁻³ = 1/2³"] },
        { rotulo: "2", valores: ["2³", "2·2·2 = 8"] },
        { rotulo: "3", valores: ["resultado", "1/8"] },
      ],
    },
    passos: ["2⁻³ = 1/2³.", "2³ = 8.", "= 1/8."],
  },

  momento06_praticaGuiada: {
    enunciado: "3⁻² vale:",
    dica: "1/3².",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1/9" }, { nome: "−9" }, { nome: "1/6" }],
      respostaCerta: "1/9",
      feedbackAcerto: "🎯 1/3² = 1/9.",
      feedbackErro: "Negativo INVERTE, não dá número negativo.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "5² · 5⁻³ =",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1/5" }, { nome: "5" }, { nome: "5⁻⁶" }],
      respostaCerta: "1/5",
      feedbackAcerto: "🎯 5²⁺⁽⁻³⁾ = 5⁻¹ = 1/5.",
      feedbackErro: "Mesma base → soma expoentes: 2 + (−3) = −1.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "A memória de um computador guarda 2¹⁰ bytes (1 KB). Um arquivo ocupa 2¹⁵ bytes.",
    problema: "Quantos KB o arquivo ocupa?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2⁵ = 32 KB" }, { nome: "2²⁵ KB" }, { nome: "5 KB" }],
      respostaCerta: "2⁵ = 32 KB",
      feedbackAcerto: "🎯 2¹⁵ ÷ 2¹⁰ = 2⁵ = 32.",
      feedbackErro: "Mesma base, dividir → subtrai expoentes.",
    },
  },

  momento09_revisao: {
    pontos: [
      "a⁰ = 1 (a ≠ 0).",
      "a⁻ⁿ = 1/aⁿ.",
      "Mesma base: multiplicar SOMA, dividir SUBTRAI expoentes.",
      "Potência de potência: MULTIPLICA expoentes.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "10⁻² =", opcoes: ["0,01", "−100", "0,1"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "1/10² = 1/100." },
      { pergunta: "7⁰ =", opcoes: ["1", "0", "7"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Qualquer base ≠ 0 elevada a 0 = 1." },
      { pergunta: "(2³)² =", opcoes: ["64", "6", "12"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Multiplique expoentes." },
      { pergunta: "4² · 4⁻¹ =", opcoes: ["4", "1", "16"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2 + (−1) = 1." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Tabela das potências de 10",
    materiais: ["Papel"],
    passos: [
      "Faça uma tabela de 10⁻³ até 10³.",
      "Mostre pra alguém da família: cada linha ÷10 da anterior.",
    ],
    registro: "📸 Foto da tabela.",
  },
  recompensa: { xp: 160, moedas: 80 },
};
