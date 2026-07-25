import type { AulaV4 } from "../../types";

export const aula01_equacao: AulaV4 = {
  slug: "u4-01-equacao",
  titulo: "Equação do 1º grau — revisão avançada",
  iconeTrilha: "⚖️",
  bncc: ["EF08MA07"],
  duracaoMin: 22,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Balança em equilíbrio",
    historia:
      "{NOME}, equação é uma balança. O que faz de um lado, faz do outro. Hoje a gente resolve com frações também.",
  },
  momento02_exploracao: {
    instrucao: "Isole x.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Regras",
        cabecalhos: ["Ação", "Balança"],
        linhas: [
          { rotulo: "1", valores: ["+n dos 2 lados", "continua igual"] },
          { rotulo: "2", valores: ["−n dos 2 lados", "continua igual"] },
          { rotulo: "3", valores: ["·n dos 2 lados", "continua igual"] },
          { rotulo: "4", valores: ["÷n dos 2 lados", "continua igual"] },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "E com frações?",
    pista: "MMC dos denominadores × todos os termos.",
    revelacao: "Tira o denominador multiplicando pelo MMC.",
  },
  momento04_explicacao: {
    titulo: "Passo a passo",
    etapas: [
      {
        texto: "Equação simples.",
        exemploReal: {
          contexto: "3x + 5 = 20",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["−5", "3x = 15"] },
              { rotulo: "2", valores: ["÷3", "x = 5"] },
            ],
          },
          destaque: "x = 5.",
        },
      },
      {
        texto: "Com incógnita dos dois lados.",
        exemploReal: {
          contexto: "5x − 4 = 2x + 8",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["−2x", "3x − 4 = 8"] },
              { rotulo: "2", valores: ["+4", "3x = 12"] },
              { rotulo: "3", valores: ["÷3", "x = 4"] },
            ],
          },
          destaque: "x = 4.",
        },
      },
      {
        texto: "Com frações — MMC.",
        exemploReal: {
          contexto: "x/2 + x/3 = 5",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["MMC(2,3)", "6"] },
              { rotulo: "2", valores: ["×6", "3x + 2x = 30"] },
              { rotulo: "3", valores: ["soma", "5x = 30"] },
              { rotulo: "4", valores: ["÷5", "x = 6"] },
            ],
          },
          destaque: "x = 6.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Resolva 2x + 7 = 15.",
    resposta: "x = 4",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Passo", "Cálculo"],
      linhas: [
        { rotulo: "1", valores: ["−7", "2x = 8"] },
        { rotulo: "2", valores: ["÷2", "x = 4"] },
      ],
    },
    passos: ["−7 dos dois lados.", "÷2.", "x = 4."],
  },
  momento06_praticaGuiada: {
    enunciado: "3x − 2 = 10.",
    dica: "+2, ÷3.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "x =",
      opcoes: [{ nome: "4" }, { nome: "3" }, { nome: "12" }],
      respostaCerta: "4",
      feedbackAcerto: "🎯",
      feedbackErro: "+2, ÷3.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "4x + 1 = 2x + 9.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "x =",
      opcoes: [{ nome: "4" }, { nome: "5" }, { nome: "2" }],
      respostaCerta: "4",
      feedbackAcerto: "🎯 2x = 8.",
      feedbackErro: "Passe 2x pro outro lado.",
    },
  },
  momento08_aplicacao: {
    contexto: "Bruno tinha R$ x. Gastou R$ 30. Ainda tem R$ 45.",
    problema: "Quanto tinha?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "x =",
      opcoes: [{ nome: "R$ 75" }, { nome: "R$ 15" }, { nome: "R$ 45" }],
      respostaCerta: "R$ 75",
      feedbackAcerto: "🎯 x − 30 = 45.",
      feedbackErro: "Equação: x − 30 = 45.",
    },
  },
  momento09_revisao: {
    pontos: ["Faça a mesma coisa dos 2 lados.", "Passe letra pra um lado, número pro outro.", "Frações: tire com MMC."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "x + 3 = 10 →", opcoes: ["7", "13", "3"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "−3." },
      { pergunta: "2x = 14 →", opcoes: ["7", "12", "14"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "÷2." },
      { pergunta: "3x + 1 = 10 →", opcoes: ["3", "9", "11"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "−1, ÷3." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Balança",
    materiais: ["Papel"],
    passos: ["Escreva 3 equações do dia (ex.: idade, dinheiro).", "Resolva."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 160, moedas: 80 },
};
