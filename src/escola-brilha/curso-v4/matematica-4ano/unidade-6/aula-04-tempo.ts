import type { AulaV4 } from "../../types";

export const aula04_tempo: AulaV4 = {
  slug: "u6-04-tempo",
  titulo: "Tempo — h, min e s",
  iconeTrilha: "⏰",
  bncc: ["EF04MA22"],
  duracaoMin: 22,
  metodologias: ["cpa", "rme"],

  momento01_motivacao: {
    titulo: "O relógio do Reino",
    historia:
      "{NOME}, tempo se mede em hora (h), minuto (min) e segundo (s). 1 h = 60 min. 1 min = 60 s. Não é ×100! É ×60.",
  },
  momento02_exploracao: {
    instrucao: "Conversões.",
    cenas: [
      { tipo: "texto", texto: "1 h = 60 min. 1 min = 60 s. 1 dia = 24 h.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Por que 60 e não 100?",
    pista: "Herança da antiguidade.",
    revelacao: "Os babilônios usavam base 60. Ficou pra sempre no relógio.",
  },
  momento04_explicacao: {
    titulo: "Conversões de tempo",
    etapas: [
      {
        texto: "2 h em min.",
        exemploReal: {
          contexto: "×60.",
          destaque: "2 h = 120 min.",
        },
      },
      {
        texto: "Passou 1 h 30 min. Total em min?",
        exemploReal: {
          contexto: "60 + 30.",
          destaque: "90 min.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "3 h em minutos:",
    passos: ["1 h = 60 min.", "3 × 60 = 180."],
    resposta: "180 min",
  },
  momento06_praticaGuiada: {
    enunciado: "120 min = ? h",
    dica: "÷60.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2 h" }, { nome: "1,2 h" }, { nome: "12 h" }],
      respostaCerta: "2 h",
      feedbackAcerto: "🎯 2 h.",
      feedbackErro: "120÷60=2.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "1 h 45 min = ? min",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "105" }, { nome: "145" }, { nome: "95" }],
      respostaCerta: "105",
      feedbackAcerto: "🎯 105 min.",
      feedbackErro: "60+45=105.",
    },
  },
  momento08_aplicacao: {
    contexto: "Um filme começou às 14 h e durou 1 h 50 min.",
    problema: "A que horas terminou?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "15 h 50 min" }, { nome: "15 h 10 min" }, { nome: "16 h 50 min" }],
      respostaCerta: "15 h 50 min",
      feedbackAcerto: "🎯 15 h 50 min.",
      feedbackErro: "14+1h=15h; +50min=15h50min.",
    },
  },
  momento09_revisao: {
    pontos: ["1 h = 60 min · 1 min = 60 s · 1 dia = 24 h."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "4 h = ? min", opcoes: ["240", "400", "40"], correta: 0, feedbackAcerto: "🎉 240.", feedbackErro: "×60." },
      { pergunta: "180 min = ? h", opcoes: ["3", "1,8", "30"], correta: 0, feedbackAcerto: "🎉 3.", feedbackErro: "÷60." },
      { pergunta: "2 h 15 min = ? min", opcoes: ["135", "215", "125"], correta: 0, feedbackAcerto: "🎉 135.", feedbackErro: "120+15=135." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Cronômetro em Casa",
    materiais: ["Relógio", "Papel"],
    passos: ["Cronometre 3 tarefas em minutos.", "Passe pra segundos.", "Some o total do dia."],
    registro: "📸 Foto da tabela.",
  },
  recompensa: { xp: 220, moedas: 110 },
};
