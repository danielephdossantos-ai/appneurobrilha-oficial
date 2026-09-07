import type { AulaV4 } from "../../types";

export const aula05_missao: AulaV4 = {
  slug: "u4-05-missao",
  titulo: "Missão — Mestre das Frações",
  iconeTrilha: "🏅",
  bncc: ["EF06MA07", "EF06MA08", "EF06MA09", "EF06MA10"],
  duracaoMin: 22,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Fechando frações",
    historia: "{NOME}, tudo o que aprendeu sobre frações vai encontrar em UMA missão.",
  },

  momento02_exploracao: {
    instrucao: "Kit fração.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Resumo",
        cabecalhos: ["Ação", "Regra"],
        linhas: [
          { rotulo: "eq", valores: ["Equivalente", "×n em cima e embaixo"] },
          { rotulo: "cmp", valores: ["Comparar", "MMC"] },
          { rotulo: "+-", valores: ["+ / −", "MMC + numeradores"] },
          { rotulo: "×", valores: ["×", "Direto"] },
          { rotulo: "÷", valores: ["÷", "Inverte a 2ª"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Simplifique 24/36.",
    pista: "MDC = 12.",
    revelacao: "24/36 = 2/3.",
  },

  momento04_explicacao: {
    titulo: "Combinando",
    etapas: [
      {
        texto: "Em adições com denominadores diferentes, transforme as frações em equivalentes com denominador comum.",
        exemploReal: {
          contexto: "1/2 + 1/3",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["×", "1/3 × 1/4 = 1/12"] },
              { rotulo: "2", valores: ["+", "1/2 + 1/12"] },
              { rotulo: "3", valores: ["MMC=12", "6/12 + 1/12 = 7/12"] },
            ],
          },
          destaque: "1/2 + 1/3 = 3/6 + 2/6 = 5/6.",
        },
      },
      {
        texto: "Simplificar: divida numerador e denominador pelo MDC.",
        exemploReal: {
          contexto: "24/36 → MDC(24,36) = 12",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo", "Resultado"],
            linhas: [
              { rotulo: "1", valores: ["MDC", "24=2³·3 · 36=2²·3²", "12"] },
              { rotulo: "2", valores: ["numerador", "24 ÷ 12", "2"] },
              { rotulo: "3", valores: ["denominador", "36 ÷ 12", "3"] },
            ],
          },
          destaque: "24/36 = 2/3.",
        },
      },
      {
        texto: "Para encontrar uma fração de uma quantidade, divida pelo denominador e considere o número de partes indicado pelo numerador.",
        exemploReal: {
          contexto: "3/4 de 20",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["inverte 2ª", "3/4 × 5/2"] },
              { rotulo: "2", valores: ["multiplica", "15/8"] },
            ],
          },
          destaque: "20 ÷ 4 = 5; 5 × 3 = 15.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Quanto é 3/5 de 40?",
    resposta: "24",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Passo", "Cálculo"],
      linhas: [
        { rotulo: "1", valores: ["monta", "1/2 × 3/5"] },
        { rotulo: "2", valores: ["numeradores", "1 × 3 = 3"] },
        { rotulo: "3", valores: ["denominadores", "2 × 5 = 10"] },
      ],
    },
    passos: ["1/2 × 3/5.", "= 3/10."],
  },

  momento06_praticaGuiada: {
    enunciado: "3/4 + 1/2.",
    dica: "MMC=4.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "5/4" }, { nome: "4/6" }, { nome: "1"} ],
      respostaCerta: "5/4",
      feedbackAcerto: "🎯 3/4 + 2/4.",
      feedbackErro: "1/2 = 2/4.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Quanto é 2/3 de 24?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado (simplificado):",
      opcoes: [{ nome: "16" }, { nome: "8" }, { nome: "26" }],
      respostaCerta: "16",
      feedbackAcerto: "🎯 24 ÷ 3 × 2 = 16.",
      feedbackErro: "Divida 24 em 3 partes iguais e considere 2.",
    },
  },

  momento08_aplicacao: {
    contexto: "Uma turma tem 40 alunos. 3/5 são meninas.",
    problema: "Quantas meninas?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "24" }, { nome: "16" }, { nome: "8" }],
      respostaCerta: "24",
      feedbackAcerto: "🎯 40 × 3/5 = 24.",
      feedbackErro: "40 ÷ 5 × 3.",
    },
  },

  momento09_revisao: {
    pontos: ["Você é Mestre das Frações.", "Simplifique sempre no fim."],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "1/2 + 1/2 =", opcoes: ["1", "2/4", "1/4"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2/2 = 1." },
      { pergunta: "1/3 de 30 =", opcoes: ["10", "9", "27"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "30 ÷ 3 = 10." },
      { pergunta: "2/3 é maior que 1/2?", opcoes: ["Sim", "Não"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "4/6 > 3/6." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Diploma Mestre",
    materiais: ["Papel"],
    passos: ["Faça o diploma.", "Escreva 3 exemplos de fração no dia."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 200, moedas: 100, medalha: "Mestre das Frações" },
};
