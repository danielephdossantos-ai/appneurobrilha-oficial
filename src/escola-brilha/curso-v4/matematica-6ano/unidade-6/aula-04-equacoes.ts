import type { AulaV4 } from "../../types";

export const aula04_equacoes: AulaV4 = {
  slug: "u6-04-equacoes",
  titulo: "Primeiras equações — a balança",
  iconeTrilha: "⚖️",
  bncc: ["EF06MA14", "EF06MA15"],
  duracaoMin: 26,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Encontre o x",
    historia: "{NOME}, EQUAÇÃO é uma balança: o que está em um lado precisa dar o mesmo peso do outro. Descobrir x = descobrir o peso desconhecido.",
  },

  momento02_exploracao: {
    instrucao: "Regra da balança: o que você faz em um lado, faz no OUTRO.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Operações inversas",
        cabecalhos: ["Está fazendo", "Inverso"],
        linhas: [
          { rotulo: "+", valores: ["+", "−"] },
          { rotulo: "−", valores: ["−", "+"] },
          { rotulo: "×", valores: ["×", "÷"] },
          { rotulo: "÷", valores: ["÷", "×"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "x + 5 = 12. Quanto vale x?",
    pista: "Tire 5 dos dois lados.",
    revelacao: "x = 7.",
  },

  momento04_explicacao: {
    titulo: "Resolvendo passo a passo",
    etapas: [
      {
        texto: "Isole o x com operações inversas.",
        exemploReal: {
          contexto: "x + 8 = 20",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Equação"],
            linhas: [
              { rotulo: "1", valores: ["Original", "x + 8 = 20"] },
              { rotulo: "2", valores: ["−8 dos 2 lados", "x = 12"] },
            ],
          },
          destaque: "x = 12.",
        },
      },
      {
        texto: "Multiplicação: use divisão pra isolar.",
        exemploReal: {
          contexto: "3x = 21",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Equação"],
            linhas: [
              { rotulo: "1", valores: ["Original", "3x = 21"] },
              { rotulo: "2", valores: ["÷3", "x = 7"] },
            ],
          },
          destaque: "x = 7.",
        },
      },
      {
        texto: "Duas etapas: cuide primeiro do que está SOMANDO/SUBTRAINDO, depois do que está MULTIPLICANDO.",
        exemploReal: {
          contexto: "2x + 3 = 15",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Equação"],
            linhas: [
              { rotulo: "1", valores: ["−3", "2x = 12"] },
              { rotulo: "2", valores: ["÷2", "x = 6"] },
            ],
          },
          destaque: "Verifique: 2·6 + 3 = 15 ✅.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Resolver 4x − 8 = 20.",
    resposta: "x = 7",
    passos: ["+8 dos dois lados: 4x = 28.", "÷4: x = 7.", "Confere: 4·7 − 8 = 20."],
  },

  momento06_praticaGuiada: {
    enunciado: "x − 4 = 10.",
    dica: "+4.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "x =",
      opcoes: [{ nome: "14" }, { nome: "6" }, { nome: "40" }],
      respostaCerta: "14",
      feedbackAcerto: "🎯 10 + 4.",
      feedbackErro: "Some 4.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "5x = 45.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "x =",
      opcoes: [{ nome: "9" }, { nome: "50" }, { nome: "40" }],
      respostaCerta: "9",
      feedbackAcerto: "🎯 ÷5.",
      feedbackErro: "45 ÷ 5.",
    },
  },

  momento08_aplicacao: {
    contexto: "Ana tinha X reais. Ganhou R$ 20 e ficou com R$ 55.",
    problema: "Quanto tinha?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 35" }, { nome: "R$ 75" }, { nome: "R$ 25" }],
      respostaCerta: "R$ 35",
      feedbackAcerto: "🎯 x + 20 = 55 → x = 35.",
      feedbackErro: "Equação: x + 20 = 55.",
    },
  },

  momento09_revisao: {
    pontos: ["Balança: os dois lados iguais.", "Operações inversas isolam x.", "Sempre confira substituindo."],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "x + 6 = 10 → x =", opcoes: ["4", "16", "6"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "−6." },
      { pergunta: "2x = 14 → x =", opcoes: ["7", "12", "16"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "÷2." },
      { pergunta: "3x + 1 = 10 → x =", opcoes: ["3", "9", "11"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "−1, ÷3." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Equação do troco",
    materiais: ["Papel"],
    passos: ["Invente uma situação com x reais.", "Escreva a equação e resolva."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
