import type { AulaV4 } from "../../types";

export const aula04_probabilidade: AulaV4 = {
  slug: "u7-04-probabilidade",
  titulo: "Vai ou Não Vai?",
  iconeTrilha: "🎲",
  bncc: ["EF03MA25"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Chance de acontecer",
    historia: "Vai chover? Vou tirar cara na moeda? Isso é PROBABILIDADE — a chance de algo acontecer.",
  },
  momento02_exploracao: {
    instrucao: "Escala da chance: de impossível a certo.",
    cenas: [
      {
        tipo: "escalaProb",
        itens: [
          { evento: "O sol nascer amanhã", nivel: "certo" },
          { evento: "Tirar cara na moeda", nivel: "provavel" },
          { evento: "Ganhar na loteria hoje", nivel: "pouco" },
          { evento: "Cachorro voar", nivel: "impossivel" },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Ganhar na loteria é certo?",
    pista: "Aparece na escala em que posição?",
    revelacao: "É POUCO provável. Não é impossível, mas é raro.",
  },
  momento04_explicacao: {
    titulo: "Classificar eventos",
    etapas: [
      {
        texto: "Sol nascer = CERTO (100%). Cachorro voar = IMPOSSÍVEL (0%).",
        exemploReal: {
          contexto: "Coloque cada evento na escala.",
          destaque: "Certo à direita, impossível à esquerda.",
          visualMat: {
            tipo: "escalaProb",
            itens: [
              { evento: "Sol nascer amanhã", nivel: "certo" },
              { evento: "Cachorro voar", nivel: "impossivel" },
            ],
          },
        },
      },
      {
        texto: "Moeda: 50% cara, 50% coroa — é 50/50 (meio a meio), no meio da escala.",
        exemploReal: {
          contexto: "1 chance em 2.",
          destaque: "Meio a meio.",
          visualMat: {
            tipo: "escalaProb",
            itens: [{ evento: "Cara na moeda", nivel: "provavel" }],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Urna com 3 bolas azuis e 1 vermelha. Tirar azul é:",
    passos: ["3 em 4 são azuis.", "Muito provável, mas não certo."],
    resposta: "Muito provável",
    visualMat: {
      tipo: "escalaProb",
      itens: [
        { evento: "Tirar azul (3 de 4)", nivel: "muito" },
        { evento: "Tirar vermelha (1 de 4)", nivel: "pouco" },
      ],
    },
  },
  momento06_praticaGuiada: {
    enunciado: "Moeda cair em pé é:",
    dica: "É comum?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Impossível" }, { nome: "Certo" }, { nome: "Provável" }],
      respostaCerta: "Impossível",
      feedbackAcerto: "🎉 Moeda não fica em pé.",
      feedbackErro: "Praticamente impossível.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Dado de 6 lados. Tirar 7?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Impossível" }, { nome: "Provável" }, { nome: "Certo" }],
      respostaCerta: "Impossível",
      feedbackAcerto: "🎯 Só vai até 6.",
      feedbackErro: "Não tem 7 no dado.",
    },
  },
  momento08_aplicacao: {
    contexto: "Sacola com 5 balas amarelas e 5 verdes.",
    problema: "Tirar amarela é:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "50/50" }, { nome: "Certo" }, { nome: "Impossível" }],
      respostaCerta: "50/50",
      feedbackAcerto: "🎯 Metade.",
      feedbackErro: "5 de 10 = metade.",
    },
  },
  momento09_revisao: {
    pontos: ["Escala: impossível → pouco → 50/50 → muito → certo.", "Mais casos favoráveis = mais chance."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Peixe respirar debaixo d'água é:",
      opcoes: [{ nome: "Certo" }, { nome: "Impossível" }, { nome: "Pouco provável" }],
      respostaCerta: "Certo",
      feedbackAcerto: "🎉 Certo.",
      feedbackErro: "Peixes respiram na água.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Nevar no deserto?", opcoes: ["Pouco provável", "Certo", "Impossível"], correta: 0, feedbackAcerto: "🎉 Pouco provável.", feedbackErro: "Muito raro." },
      { pergunta: "Segunda depois de domingo?", opcoes: ["Certo", "Impossível", "Provável"], correta: 0, feedbackAcerto: "🎉 Certo.", feedbackErro: "Sempre acontece." },
      { pergunta: "Homem sem paraquedas voar?", opcoes: ["Impossível", "Certo", "Provável"], correta: 0, feedbackAcerto: "🎉 Impossível.", feedbackErro: "Não voa sozinho." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Aposta divertida",
    materiais: ["Moeda"],
    passos: ["Jogue a moeda 10 vezes.", "Anote cara/coroa.", "Compare com o esperado (metade)."],
    registro: "📸 Foto do registro.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
