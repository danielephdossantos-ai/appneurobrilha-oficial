import type { AulaV4 } from "../../types";

export const aula06_missao: AulaV4 = {
  slug: "u4-06-missao",
  titulo: "Missão — Mestre das Equações e Sistemas",
  iconeTrilha: "🏅",
  bncc: ["EF08MA07", "EF08MA08"],
  duracaoMin: 25,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Kit de resolução",
    historia:
      "{NOME}, hoje juntamos tudo: equação simples, com frações, sistemas 2×2 (substituição e adição) e problemas reais.",
  },
  momento02_exploracao: {
    instrucao: "Kit.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Escolha do método",
        cabecalhos: ["Situação", "Método"],
        linhas: [
          { rotulo: "1", valores: ["1 incógnita", "Equação 1º grau"] },
          { rotulo: "2", valores: ["2 incógnitas + 1 isolada", "Substituição"] },
          { rotulo: "3", valores: ["2 incógnitas + coef opostos", "Adição"] },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como escolher o método?",
    pista: "Olhe pra estrutura antes de calcular.",
    revelacao: "Estratégia > força bruta.",
  },
  momento04_explicacao: {
    titulo: "Combos finais",
    etapas: [
      {
        texto: "Equação com frações + verificação.",
        exemploReal: {
          contexto: "x/3 + 2 = 5",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["−2", "x/3 = 3"] },
              { rotulo: "2", valores: ["×3", "x = 9"] },
              { rotulo: "3", valores: ["confere", "9/3 + 2 = 5 ✅"] },
            ],
          },
          destaque: "x = 9.",
        },
      },
      {
        texto: "Sistema — decida.",
        exemploReal: {
          contexto: "I) 2x + y = 10. II) 3x − y = 5",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["soma", "5x = 15"] },
              { rotulo: "2", valores: ["x", "3"] },
              { rotulo: "3", valores: ["y", "4"] },
            ],
          },
          destaque: "Adição direta.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Resolva o sistema: I) x + y = 20. II) x − y = 6.",
    resposta: "x = 13, y = 7",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Passo", "Cálculo"],
      linhas: [
        { rotulo: "1", valores: ["soma", "2x = 26"] },
        { rotulo: "2", valores: ["÷2", "x = 13"] },
        { rotulo: "3", valores: ["y", "20−13 = 7"] },
      ],
    },
    passos: ["Soma → 2x = 26.", "x = 13, y = 7."],
  },
  momento06_praticaGuiada: {
    enunciado: "5x − 3 = 12.",
    dica: "+3, ÷5.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "x =",
      opcoes: [{ nome: "3" }, { nome: "5" }, { nome: "9" }],
      respostaCerta: "3",
      feedbackAcerto: "🎯",
      feedbackErro: "5x=15.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "I) 2x + y = 7. II) y = x + 1. x =",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "x =",
      opcoes: [{ nome: "2" }, { nome: "3" }, { nome: "1" }],
      respostaCerta: "2",
      feedbackAcerto: "🎯 3x+1=7.",
      feedbackErro: "Substitua II na I.",
    },
  },
  momento08_aplicacao: {
    contexto:
      "Um estacionamento tem carros e motos: 40 veículos, 130 rodas.",
    problema: "Motos =",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Motos =",
      opcoes: [{ nome: "15" }, { nome: "25" }, { nome: "20" }],
      respostaCerta: "15",
      feedbackAcerto: "🎯 c+m=40, 4c+2m=130.",
      feedbackErro: "Adição multiplicando I por −2.",
    },
  },
  momento09_revisao: {
    pontos: ["Olhe a estrutura antes de calcular.", "1 incógnita → equação. 2 → sistema.", "Sempre verifique."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "2x=10. x=", opcoes: ["5", "8", "20"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "÷2." },
      { pergunta: "x+y=6, x−y=2. y=", opcoes: ["2", "4", "6"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Some, x=4, y=2." },
      { pergunta: "x/2 = 5. x=", opcoes: ["10", "2.5", "5"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "×2." },
      { pergunta: "3x + 2 = 11. x=", opcoes: ["3", "9", "5"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "3x=9." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Diploma das Equações",
    materiais: ["Papel"],
    passos: ["Diploma: 'Mestre das Equações e Sistemas'.", "Cite os 3 tipos de problema que você agora resolve."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 230, moedas: 115, medalha: "Mestre dos Sistemas" },
};
