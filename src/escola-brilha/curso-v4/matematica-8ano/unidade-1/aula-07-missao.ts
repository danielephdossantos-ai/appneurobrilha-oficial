import type { AulaV4 } from "../../types";

export const aula07_missao: AulaV4 = {
  slug: "u1-07-missao",
  titulo: "Missão — Oficineiro dos Reais",
  iconeTrilha: "🏅",
  bncc: ["EF08MA01"],
  duracaoMin: 25,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Todas as ferramentas da U1",
    historia:
      "{NOME}, hoje é MISSÃO. Use dízimas, potências e notação científica juntas. Cientista da Oficina em ação.",
  },

  momento02_exploracao: {
    instrucao: "Kit da Unidade 1.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Ferramentas",
        cabecalhos: ["Ferramenta", "Uso"],
        linhas: [
          { rotulo: "Dízima", valores: ["Dízima → fração", "Período sobre 9…"] },
          { rotulo: "Pot.", valores: ["Potência", "aᵐ·aⁿ = aᵐ⁺ⁿ · a⁻ⁿ = 1/aⁿ"] },
          { rotulo: "NC", valores: ["Notação científica", "a · 10ⁿ, 1 ≤ a < 10"] },
          { rotulo: "Ord.", valores: ["Ordenar NC", "Expoente → mantissa"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como se combinam essas ferramentas?",
    pista: "0,111… vira fração, 2⁻³ vira 1/8, 250.000 vira 2,5·10⁵.",
    revelacao: "São jeitos DIFERENTES de escrever o mesmo número.",
  },

  momento04_explicacao: {
    titulo: "Combos",
    etapas: [
      {
        texto: "Dízimas de novo em situação real.",
        exemploReal: {
          contexto: "Ao dividir 5 por 9, aparece 0,555….",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["x = 0,555…", "10x = 5,555…"] },
              { rotulo: "2", valores: ["9x = 5", "x = 5/9"] },
            ],
          },
          destaque: "0,555… = 5/9.",
        },
      },
      {
        texto: "Potências combinadas.",
        exemploReal: {
          contexto: "Calcule 2³ · 2⁻¹",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["mesma base", "2³⁺⁽⁻¹⁾"] },
              { rotulo: "2", valores: ["expoente", "2²"] },
              { rotulo: "3", valores: ["valor", "4"] },
            ],
          },
          destaque: "= 4.",
        },
      },
      {
        texto: "NC em problema real.",
        exemploReal: {
          contexto: "Um dado científico: 1,5 · 10⁴ células por mm³.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["NC", "Comum"],
            linhas: [
              { rotulo: "1,5·10⁴", valores: ["1,5·10⁴", "15.000"] },
            ],
          },
          destaque: "15.000 células por mm³.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Escreva 0,000032 em notação científica.",
    resposta: "3,2 · 10⁻⁵",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Passo", "Cálculo"],
      linhas: [
        { rotulo: "1", valores: ["mantissa", "3,2"] },
        { rotulo: "2", valores: ["casas", "5"] },
        { rotulo: "3", valores: ["resultado", "3,2 · 10⁻⁵"] },
      ],
    },
    passos: ["Ande até 3,2.", "5 casas p/ direita.", "= 3,2 · 10⁻⁵."],
  },

  momento06_praticaGuiada: {
    enunciado: "0,777… em fração:",
    dica: "Período 7 sobre 9.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "7/9" }, { nome: "7/10" }, { nome: "77/100" }],
      respostaCerta: "7/9",
      feedbackAcerto: "🎯",
      feedbackErro: "Dízima simples → período/9.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "(4 · 10⁵) · (2 · 10⁻³) =",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "8 · 10²" }, { nome: "8 · 10⁸" }, { nome: "6 · 10²" }],
      respostaCerta: "8 · 10²",
      feedbackAcerto: "🎯 4·2=8, 5+(−3)=2.",
      feedbackErro: "Some expoentes com sinal.",
    },
  },

  momento08_aplicacao: {
    contexto: "Um chip mede 5 · 10⁻⁴ m; um cabo mede 2 · 10³ m.",
    problema: "Quantas vezes o cabo é maior que o chip?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4 · 10⁶" }, { nome: "2,5 · 10⁶" }, { nome: "10⁷" }],
      respostaCerta: "4 · 10⁶",
      feedbackAcerto: "🎯 (2·10³)÷(5·10⁻⁴) = 0,4·10⁷ = 4·10⁶.",
      feedbackErro: "Divisão → mantissa ÷ mantissa, expoente − expoente.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Dízima ↔ fração.",
      "Potência com expoente negativo = inverso.",
      "NC unifica números grandes e pequenos.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "0,222… =", opcoes: ["2/9", "2/10", "1/5"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Dízima simples." },
      { pergunta: "5⁻² =", opcoes: ["1/25", "−25", "1/10"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "1/5² = 1/25." },
      { pergunta: "6.700.000 em NC:", opcoes: ["6,7·10⁶", "67·10⁵", "6,7·10⁷"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "6 casas." },
      { pergunta: "Maior: 3·10⁻¹ ou 9·10⁻³?", opcoes: ["3·10⁻¹", "9·10⁻³", "iguais"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "−1 > −3." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Diploma Oficineiro dos Reais",
    materiais: ["Papel, canetas"],
    passos: [
      "Faça o diploma 'Oficineiro dos Reais'.",
      "Escreva 3 exemplos: uma dízima, uma potência negativa, um número em NC.",
    ],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 220, moedas: 110, medalha: "Oficineiro dos Reais" },
};
