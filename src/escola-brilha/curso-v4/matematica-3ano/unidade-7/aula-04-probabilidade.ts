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
          { evento: "Tirar uma bola azul de uma sacola com 1 azul e 9 amarelas", nivel: "pouco" },
          { evento: "Cachorro voar", nivel: "impossivel" },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Tirar a única bola azul de uma sacola com 10 bolas é certo?",
    pista: "Aparece na escala em que posição?",
    revelacao: "É POUCO provável: pode acontecer, mas há apenas 1 resultado favorável entre 10 possibilidades.",
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
    enunciado: "Em um dado comum, tirar o número 8 é:",
    dica: "Veja quais números existem nas seis faces: 1, 2, 3, 4, 5 e 6.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Impossível" }, { nome: "Certo" }, { nome: "Provável" }],
      respostaCerta: "Impossível",
      feedbackAcerto: "🎉 Impossível, porque nenhuma face do dado tem o número 8.",
      feedbackErro: "O dado comum só tem números de 1 a 6; por isso tirar 8 é impossível.",
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
      feedbackAcerto: "🎉 Certo: respirar na água é uma característica dos peixes.",
      feedbackErro: "Esse evento é certo no contexto apresentado: peixes respiram na água.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Em uma sacola com 1 bola azul e 9 amarelas, tirar a azul?", opcoes: ["Pouco provável", "Certo", "Impossível"], correta: 0, feedbackAcerto: "🎉 Pouco provável: existe apenas 1 resultado favorável entre 10 bolas.", feedbackErro: "Não é impossível, pois há uma bola azul; mas é pouco provável porque 9 das 10 bolas são amarelas." },
      { pergunta: "No calendário, segunda-feira vir depois de domingo?", opcoes: ["Certo", "Impossível", "Provável"], correta: 0, feedbackAcerto: "🎉 Certo, porque essa é a ordem fixa dos dias da semana.", feedbackErro: "Observe a sequência semanal: domingo é seguido por segunda-feira." },
      { pergunta: "Em um dado comum, tirar o número 8?", opcoes: ["Impossível", "Certo", "Provável"], correta: 0, feedbackAcerto: "🎉 Impossível, pois o dado comum só possui faces de 1 a 6.", feedbackErro: "Confira o espaço de resultados: 1, 2, 3, 4, 5 e 6; não existe 8." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Experimento com moeda",
    materiais: ["Moeda"],
    passos: ["Jogue a moeda 10 vezes.", "Anote cara/coroa.", "Compare com o esperado (metade)."],
    registro: "📸 Foto do registro.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
