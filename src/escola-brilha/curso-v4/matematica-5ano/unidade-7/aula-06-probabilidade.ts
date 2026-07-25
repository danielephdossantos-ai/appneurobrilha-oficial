import type { AulaV4 } from "../../types";

export const aula06_probabilidade: AulaV4 = {
  slug: "u7-06-probabilidade",
  titulo: "Probabilidade: certo, provável, impossível",
  iconeTrilha: "🎲",
  bncc: ["EF05MA22", "EF05MA23"],
  duracaoMin: 20,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Chance de acontecer",
    historia: "{NOME}, PROBABILIDADE mede quanto algo pode acontecer. Vai de IMPOSSÍVEL (0) até CERTO (1).",
  },
  momento02_exploracao: {
    instrucao: "Cálculo.",
    cenas: [
      { tipo: "texto", texto: "Prob = casos favoráveis / casos totais.", destaque: true },
      { tipo: "texto", texto: "0 = impossível · 1 = certo. Em fração ou %." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Dado. Chance de sair 4?",
    pista: "1 caso em 6.",
    revelacao: "1/6.",
  },
  momento04_explicacao: {
    titulo: "Exemplos",
    etapas: [
      { texto: "Moeda cara: 1/2 = 50%." },
      { texto: "Dado par: 3/6 = 1/2 = 50%." },
      { texto: "Urna com 8 bolas (5 azuis, 3 vermelhas). Azul: 5/8." },
    ],
  },
  momento05_modelagem: {
    enunciado: "Dado. Chance de sair número > 4?",
    resposta: "2/6 = 1/3",
    passos: ["Casos: 5 e 6.", "2/6 = 1/3."],
  },
  momento06_praticaGuiada: {
    enunciado: "Urna com 10 bolas: 3 vermelhas, 7 azuis. Vermelha?",
    dica: "3 em 10.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3/10 = 30%" }, { nome: "1/3" }, { nome: "7/10" }],
      respostaCerta: "3/10 = 30%",
      feedbackAcerto: "🎯",
      feedbackErro: "3/10.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Moeda. Chance de cara?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "50%" }, { nome: "100%" }, { nome: "25%" }],
      respostaCerta: "50%",
      feedbackAcerto: "🎯",
      feedbackErro: "50%.",
    },
  },
  momento08_aplicacao: {
    contexto: "Baralho de 52 cartas.",
    problema: "Chance de tirar um ÁS?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4/52 = 1/13" }, { nome: "1/4" }, { nome: "1/52" }],
      respostaCerta: "4/52 = 1/13",
      feedbackAcerto: "🎯",
      feedbackErro: "4 ases em 52.",
    },
  },
  momento09_revisao: {
    pontos: ["Favoráveis / totais.", "0 impossível, 1 certo."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Dado. Sair 7:", opcoes: ["0 (impossível)", "1/6", "1/2"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Impossível." },
      { pergunta: "Moeda. Sair cara OU coroa:", opcoes: ["1 (certo)", "1/2", "0"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Certo." },
      { pergunta: "Urna 5 azuis, 5 verdes. Azul?", opcoes: ["1/2", "1/5", "1"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "1/2." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Cara ou coroa",
    materiais: ["Moeda"],
    passos: ["Jogue 20 vezes.", "Marque cara/coroa.", "Compare com 50%."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 150, moedas: 80 },
};
