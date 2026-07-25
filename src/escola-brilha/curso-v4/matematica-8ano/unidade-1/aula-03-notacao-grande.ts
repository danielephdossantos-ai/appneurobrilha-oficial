import type { AulaV4 } from "../../types";

export const aula03_notacaoGrande: AulaV4 = {
  slug: "u1-03-notacao-grande",
  titulo: "Notação científica — números grandes",
  iconeTrilha: "🌍",
  bncc: ["EF08MA01"],
  duracaoMin: 22,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Quando o número não cabe na tela",
    historia:
      "{NOME}, a distância do Sol à Terra é 149 600 000 000 m. Ninguém escreve assim! A Oficina usa NOTAÇÃO CIENTÍFICA: a · 10ⁿ, com 1 ≤ a < 10.",
  },

  momento02_exploracao: {
    instrucao: "Compare formas de escrever o mesmo número.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Grandes → notação científica",
        cabecalhos: ["Comum", "Notação científica"],
        linhas: [
          { rotulo: "300", valores: ["300", "3 · 10²"] },
          { rotulo: "45.000", valores: ["45.000", "4,5 · 10⁴"] },
          { rotulo: "780.000.000", valores: ["780.000.000", "7,8 · 10⁸"] },
          { rotulo: "1,496·10¹¹", valores: ["149.600.000.000", "1,496 · 10¹¹"] },
        ],
      },
      { tipo: "texto", texto: "Regra: mantissa entre 1 e 10 (exclusive), potência de 10 mostra as casas." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como transformar 780 000 000 em a · 10ⁿ?",
    pista: "Ande com a vírgula até deixar só UM algarismo antes dela.",
    revelacao: "780.000.000 → 7,80000000 → andei 8 casas pra esquerda → 7,8 · 10⁸.",
  },

  momento04_explicacao: {
    titulo: "Do número comum para a notação científica",
    etapas: [
      {
        texto: "Ande com a vírgula até sobrar 1 dígito antes dela. O expoente é o número de casas.",
        exemploReal: {
          contexto: "Transforme 6.400.000 em notação científica.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Ação", "Resultado"],
            linhas: [
              { rotulo: "1", valores: ["ande a vírgula", "6,400000"] },
              { rotulo: "2", valores: ["conte casas", "6 casas p/ esquerda"] },
              { rotulo: "3", valores: ["escreva", "6,4 · 10⁶"] },
            ],
          },
          destaque: "6.400.000 = 6,4 · 10⁶.",
        },
      },
      {
        texto: "Andou pra ESQUERDA (número grande) → expoente POSITIVO.",
        exemploReal: {
          contexto: "Confira a regra visualmente",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Original", "Casas movidas", "Notação científica"],
            linhas: [
              { rotulo: "9.000", valores: ["9.000", "3", "9 · 10³"] },
              { rotulo: "52.000", valores: ["52.000", "4", "5,2 · 10⁴"] },
              { rotulo: "3.140.000", valores: ["3.140.000", "6", "3,14 · 10⁶"] },
            ],
          },
          destaque: "Número grande → potência de 10 positiva.",
        },
      },
      {
        texto: "Voltando: multiplique pela potência de 10 (ande pra direita).",
        exemploReal: {
          contexto: "2,5 · 10⁵ vira 250.000 andando 5 casas.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Notação científica", "Ande", "Comum"],
            linhas: [
              { rotulo: "1", valores: ["2,5 · 10⁵", "→ 5 casas", "250.000"] },
              { rotulo: "2", valores: ["8 · 10³", "→ 3 casas", "8.000"] },
              { rotulo: "3", valores: ["3,14 · 10²", "→ 2 casas", "314"] },
            ],
          },
          destaque: "Volta = anda pra direita a mesma quantidade.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Escreva 92.000.000 em notação científica.",
    resposta: "9,2 · 10⁷",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Passo", "Ação"],
      linhas: [
        { rotulo: "1", valores: ["vírgula", "9,2000000"] },
        { rotulo: "2", valores: ["casas movidas", "7"] },
        { rotulo: "3", valores: ["resultado", "9,2 · 10⁷"] },
      ],
    },
    passos: ["Andei a vírgula até 9,2.", "Contei 7 casas pra esquerda.", "= 9,2 · 10⁷."],
  },

  momento06_praticaGuiada: {
    enunciado: "150.000 em notação científica é:",
    dica: "Ande até sobrar 1 dígito antes da vírgula.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1,5 · 10⁵" }, { nome: "15 · 10⁴" }, { nome: "1,5 · 10⁴" }],
      respostaCerta: "1,5 · 10⁵",
      feedbackAcerto: "🎯 5 casas p/ esquerda.",
      feedbackErro: "Mantissa TEM que estar entre 1 e 10.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "2,3 · 10⁴ é igual a:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "23.000" }, { nome: "2.300" }, { nome: "230.000" }],
      respostaCerta: "23.000",
      feedbackAcerto: "🎯 Anda 4 casas pra direita.",
      feedbackErro: "Expoente 4 = 4 casas pra direita.",
    },
  },

  momento08_aplicacao: {
    contexto: "A população do Brasil é ≈ 2,03 · 10⁸ habitantes.",
    problema: "Quantos habitantes?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "203.000.000" }, { nome: "20.300.000" }, { nome: "2.030.000.000" }],
      respostaCerta: "203.000.000",
      feedbackAcerto: "🎯 8 casas pra direita.",
      feedbackErro: "10⁸ → ande 8 casas.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Notação científica: a · 10ⁿ, com 1 ≤ a < 10.",
      "Número grande → expoente positivo.",
      "Conte as casas que a vírgula andou.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "5.000 em NC:", opcoes: ["5 · 10³", "0,5 · 10⁴", "5 · 10⁻³"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "3 casas." },
      { pergunta: "7,4 · 10² =", opcoes: ["740", "74", "7.400"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2 casas p/ direita." },
      { pergunta: "Está correta 12 · 10⁵?", opcoes: ["Não", "Sim"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Mantissa precisa ser < 10." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Números gigantes do mundo",
    materiais: ["Papel"],
    passos: [
      "Encontre 3 números grandes (população, distância, orçamento).",
      "Escreva cada um em notação científica.",
    ],
    registro: "📸 Foto da lista.",
  },
  recompensa: { xp: 160, moedas: 80 },
};
