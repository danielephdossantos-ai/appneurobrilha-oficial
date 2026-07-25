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
    instrucao: "Palavras da chance.",
    cenas: [
      { tipo: "texto", texto: "Certo · Provável · Pouco provável · Impossível." },
      { tipo: "texto", texto: "Certo = 100%. Impossível = 0%.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Ganhar na loteria é certo?",
    pista: "Não!",
    revelacao: "É POUCO provável. Não é impossível, mas é raro.",
  },
  momento04_explicacao: {
    titulo: "Classificar eventos",
    etapas: [
      {
        texto: "O sol nascer amanhã: CERTO.",
        exemploReal: { contexto: "Sempre acontece.", destaque: "100% de chance." },
      },
      {
        texto: "Um cachorro voar: IMPOSSÍVEL.",
        exemploReal: { contexto: "Nunca acontece.", destaque: "0% de chance." },
      },
      {
        texto: "Tirar cara na moeda: PROVÁVEL (metade das vezes).",
        exemploReal: { contexto: "50% de chance.", destaque: "1 de 2." },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Numa urna com 3 bolas azuis e 1 vermelha, tirar azul é?",
    passos: ["3 de 4 são azuis.", "Provável, quase certo."],
    resposta: "Muito provável",
    casasValor: { numero: 3, mostrarDecomposicao: false, extenso: "três" },
  },
  momento06_praticaGuiada: {
    enunciado: "Uma moeda tem 2 lados. Cair de pé?",
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
      opcoes: [{ nome: "50% de chance" }, { nome: "Certo" }, { nome: "Impossível" }],
      respostaCerta: "50% de chance",
      feedbackAcerto: "🎯 Metade.",
      feedbackErro: "5 de 10 = metade.",
    },
  },
  momento09_revisao: {
    pontos: ["Certo · Provável · Impossível.", "Mais casos favoráveis = mais chance."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Peixe respirar debaixo d'água é?",
      opcoes: [{ nome: "Certo" }, { nome: "Impossível" }, { nome: "Pouco provável" }],
      respostaCerta: "Certo",
      feedbackAcerto: "🎉 Certo.",
      feedbackErro: "Peixes respiram na água.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Nevar no deserto?", opcoes: ["Pouco provável", "Certo", "Impossível"], correta: 0, feedbackAcerto: "🎉 Pouco provável.", feedbackErro: "Muito raro." },
      { pergunta: "Segunda-feira depois de domingo?", opcoes: ["Certo", "Impossível", "Provável"], correta: 0, feedbackAcerto: "🎉 Certo.", feedbackErro: "Sempre acontece." },
      { pergunta: "Homem sem paraquedas voar?", opcoes: ["Impossível", "Certo", "Provável"], correta: 0, feedbackAcerto: "🎉 Impossível.", feedbackErro: "Não voa sozinho." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Aposta divertida",
    materiais: ["Moeda"],
    passos: ["Jogue moeda 10 vezes.", "Anote cara/coroa.", "Compare com o esperado (metade)."],
    registro: "📸 Foto do registro.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
