import type { AulaV4 } from "../../types";

export const aula04_tempo: AulaV4 = {
  slug: "u6-04-tempo",
  titulo: "Tempo: h, min, s",
  iconeTrilha: "⏰",
  bncc: ["EF05MA19"],
  duracaoMin: 20,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Relógio real",
    historia: "{NOME}, o tempo não é decimal como as outras medidas: 1 hora tem 60 minutos e 1 minuto tem 60 segundos.",
  },
  momento02_exploracao: {
    instrucao: "Escala 60.",
    cenas: [
      { tipo: "texto", texto: "1 h = 60 min · 1 min = 60 s.", destaque: true },
      { tipo: "texto", texto: "Meia hora = 30 min. Quarto de hora = 15 min." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "2 h 30 min em minutos?",
    pista: "2 × 60 + 30.",
    revelacao: "150 min.",
  },
  momento04_explicacao: {
    titulo: "Somar durações",
    etapas: [
      { texto: "1 h 45 min + 30 min = 1 h 75 min. Como 75 > 60, converte: 2 h 15 min." },
      { texto: "Diferença entre 14:20 e 16:05: 1 h 45 min." },
    ],
  },
  momento05_modelagem: {
    enunciado: "3 h 20 min em min.",
    resposta: "200 min",
    passos: ["3 × 60 = 180.", "180 + 20 = 200."],
  },
  momento06_praticaGuiada: {
    enunciado: "45 min + 40 min.",
    dica: "Passa de 60.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1 h 25 min" }, { nome: "85 min (mesmo)" }, { nome: "1 h 15 min" }],
      respostaCerta: "1 h 25 min",
      feedbackAcerto: "🎯 85 min = 1 h 25 min.",
      feedbackErro: "1 h 25 min.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Filme começa às 19:30 e dura 2 h 15 min.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Termina às:",
      opcoes: [{ nome: "21:45" }, { nome: "21:15" }, { nome: "22:00" }],
      respostaCerta: "21:45",
      feedbackAcerto: "🎯",
      feedbackErro: "19:30 + 2:15 = 21:45.",
    },
  },
  momento08_aplicacao: {
    contexto: "Almoço 12:15. Volta ao trabalho às 13:30.",
    problema: "Duração do almoço?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1 h 15 min" }, { nome: "1 h 30 min" }, { nome: "1 h" }],
      respostaCerta: "1 h 15 min",
      feedbackAcerto: "🎯",
      feedbackErro: "13:30 − 12:15 = 1 h 15 min.",
    },
  },
  momento09_revisao: {
    pontos: ["1 h = 60 min. 1 min = 60 s.", "Ao somar, converta a cada 60."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "1 h 40 min = ? min", opcoes: ["100", "80", "140"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "100." },
      { pergunta: "150 min = ? h ? min", opcoes: ["2 h 30 min", "2 h 20 min", "1 h 50 min"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2 h 30." },
      { pergunta: "De 08:45 a 10:20:", opcoes: ["1 h 35 min", "1 h 25 min", "2 h 05 min"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "1 h 35 min." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Rotina do dia",
    materiais: ["Papel"],
    passos: ["Anote horários de 3 tarefas.", "Calcule quanto tempo levou cada uma."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 140, moedas: 75 },
};
