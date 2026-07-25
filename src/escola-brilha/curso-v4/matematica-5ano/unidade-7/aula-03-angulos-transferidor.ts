import type { AulaV4 } from "../../types";

export const aula03_angulosTransferidor: AulaV4 = {
  slug: "u7-03-angulos-transferidor",
  titulo: "Ângulos: reto, agudo, obtuso, raso",
  iconeTrilha: "📐",
  bncc: ["EF05MA15"],
  duracaoMin: 20,
  metodologias: ["cpa"],

  momento01_motivacao: {
    titulo: "Cantinho da figura",
    historia: "{NOME}, o ÂNGULO é o quanto uma linha 'abre' em relação à outra. Medimos com o transferidor, em graus (°).",
  },
  momento02_exploracao: {
    instrucao: "Tipos.",
    cenas: [
      { tipo: "texto", texto: "Reto = 90°. Agudo < 90°. Obtuso > 90° e < 180°. Raso = 180°.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "60° é qual tipo?",
    pista: "Compare com 90°.",
    revelacao: "Agudo.",
  },
  momento04_explicacao: {
    titulo: "Como classificar",
    etapas: [
      { texto: "90° = quina do caderno = reto." },
      { texto: "Metade do reto (45°) = agudo." },
      { texto: "Um pouco maior que o reto (120°) = obtuso." },
    ],
  },
  momento05_modelagem: {
    enunciado: "Como é um ângulo de 30°?",
    resposta: "Agudo",
    passos: ["30 < 90.", "Portanto agudo."],
  },
  momento06_praticaGuiada: {
    enunciado: "Ângulo de 135° é:",
    dica: "> 90 e < 180.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Obtuso" }, { nome: "Agudo" }, { nome: "Reto" }],
      respostaCerta: "Obtuso",
      feedbackAcerto: "🎯",
      feedbackErro: "Obtuso.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Ângulo de 180°:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Raso" }, { nome: "Reto" }, { nome: "Obtuso" }],
      respostaCerta: "Raso",
      feedbackAcerto: "🎯 Linha reta.",
      feedbackErro: "Raso.",
    },
  },
  momento08_aplicacao: {
    contexto: "Ponteiros do relógio às 3:00.",
    problema: "Ângulo?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "90° (reto)" }, { nome: "45° (agudo)" }, { nome: "180° (raso)" }],
      respostaCerta: "90° (reto)",
      feedbackAcerto: "🎯",
      feedbackErro: "3:00 = 90°.",
    },
  },
  momento09_revisao: {
    pontos: ["Reto = 90°. Menos: agudo. Mais: obtuso. 180 = raso."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "75° é:", opcoes: ["agudo", "obtuso", "reto"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Agudo." },
      { pergunta: "150° é:", opcoes: ["obtuso", "agudo", "raso"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Obtuso." },
      { pergunta: "Quina de um livro:", opcoes: ["reto", "agudo", "obtuso"], correta: 0, feedbackAcerto: "🎉 90°.", feedbackErro: "Reto." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Ângulos da casa",
    materiais: ["Transferidor (impresso)"],
    passos: ["Ache 4 ângulos em casa.", "Classifique cada um."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 140, moedas: 75 },
};
