import type { AulaV4 } from "../../types";

export const aula04_multDiv: AulaV4 = {
  slug: "u4-04-mult-div-fracoes",
  titulo: "Multiplicar e dividir frações",
  iconeTrilha: "✖️",
  bncc: ["EF06MA10"],
  duracaoMin: 24,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Fração de fração",
    historia: "{NOME}, 'metade da metade' é 1/4. Multiplicar frações é rapidinho: cima × cima, embaixo × embaixo. Dividir? Vira do avesso e multiplica.",
  },

  momento02_exploracao: {
    instrucao: "As duas regras de ouro.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Regras",
        cabecalhos: ["Operação", "Regra"],
        linhas: [
          { rotulo: "×", valores: ["Multiplicação", "Numerador × numerador · denominador × denominador"] },
          { rotulo: "÷", valores: ["Divisão", "Inverte a 2ª e multiplica"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "1/2 × 1/3 = ?",
    pista: "Cima × cima; embaixo × embaixo.",
    revelacao: "1×1 / 2×3 = 1/6. 'Metade de um terço' = 1/6.",
  },

  momento04_explicacao: {
    titulo: "Multiplicação e divisão",
    etapas: [
      {
        texto: "Multiplicação: cima × cima; embaixo × embaixo.",
        exemploReal: {
          contexto: "2/3 × 4/5",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["numeradores", "2 × 4 = 8"] },
              { rotulo: "2", valores: ["denominadores", "3 × 5 = 15"] },
              { rotulo: "3", valores: ["resultado", "8/15"] },
            ],
          },
          destaque: "2/3 × 4/5 = 8/15.",
        },
      },
      {
        texto: "Divisão: mantém a 1ª · INVERTE a 2ª · MULTIPLICA.",
        exemploReal: {
          contexto: "3/4 ÷ 2/5",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["inverte 2/5", "5/2"] },
              { rotulo: "2", valores: ["3/4 × 5/2", "15/8"] },
            ],
          },
          destaque: "3/4 ÷ 2/5 = 15/8.",
        },
      },
      {
        texto: "Fração de um número inteiro: multiplique.",
        exemploReal: {
          contexto: "1/3 de 60",
          destaque: "60 × 1/3 = 60 ÷ 3 = 20.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Quanto é 3/4 de 200?",
    resposta: "150",
    passos: ["200 × 3/4.", "200 ÷ 4 = 50.", "50 × 3 = 150."],
  },

  momento06_praticaGuiada: {
    enunciado: "2/5 × 3/4.",
    dica: "Cima × cima.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "6/20 = 3/10" }, { nome: "5/9" }, { nome: "6/9" }],
      respostaCerta: "6/20 = 3/10",
      feedbackAcerto: "🎯 Simplificado: 3/10.",
      feedbackErro: "2×3/5×4.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "1/2 ÷ 1/4.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "2" }, { nome: "1/8" }, { nome: "1/2" }],
      respostaCerta: "2",
      feedbackAcerto: "🎯 1/2 × 4/1 = 4/2 = 2.",
      feedbackErro: "Inverte a 2ª e multiplica.",
    },
  },

  momento08_aplicacao: {
    contexto: "Uma receita pede 3/4 de xícara de açúcar. Vou fazer o DOBRO.",
    problema: "Quantas xícaras?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1 e 1/2" }, { nome: "3/8" }, { nome: "6/4" }],
      respostaCerta: "1 e 1/2",
      feedbackAcerto: "🎯 3/4 × 2 = 6/4 = 1 1/2.",
      feedbackErro: "Multiplique 3/4 por 2.",
    },
  },

  momento09_revisao: {
    pontos: ["Multiplica direto.", "Divisão: inverte e multiplica.", "Fração de = multiplica."],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "1/2 × 1/2 =", opcoes: ["1/4", "1/2", "2/4"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "1×1/2×2." },
      { pergunta: "3/5 ÷ 3/5 =", opcoes: ["1", "0", "3/5"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Toda fração dividida por ela mesma = 1." },
      { pergunta: "1/3 de 90 =", opcoes: ["30", "27", "9"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "90 ÷ 3." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Metade da metade",
    materiais: ["Papel"],
    passos: ["Dobre um papel ao meio, e ao meio de novo.", "Que fração é uma parte? Confira: 1/2 × 1/2 = 1/4."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 180, moedas: 95 },
};
