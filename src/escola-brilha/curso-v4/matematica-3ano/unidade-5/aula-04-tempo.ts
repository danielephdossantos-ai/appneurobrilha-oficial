import type { AulaV4 } from "../../types";

export const aula04_tempo: AulaV4 = {
  slug: "u5-04-tempo",
  titulo: "Horas e Minutos",
  iconeTrilha: "⏰",
  bncc: ["EF03MA22"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Que horas são?",
    historia: "1 hora = 60 minutos. O relógio tem ponteiro do minuto e da hora.",
  },
  momento02_exploracao: {
    instrucao: "Unidades de tempo.",
    cenas: [
      { tipo: "texto", texto: "1 h = 60 min · 1 min = 60 s · 1 dia = 24 h." },
      { tipo: "texto", texto: "Meia hora = 30 min. Um quarto de hora = 15 min.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como somar tempo?",
    pista: "Some horas com horas, minutos com minutos.",
    revelacao: "Se minutos passam de 60, vira 1 hora.",
  },
  momento04_explicacao: {
    titulo: "Tempo em partes",
    etapas: [
      {
        texto: "2 h 30 min tem quantos minutos?",
        exemploReal: {
          contexto: "2 × 60 + 30.",
          destaque: "150 minutos.",
          contaPassoAPasso: {
            operacao: "mult",
            operandos: [2, 60],
            resultado: 120,
            passos: [{ coluna: "U", fala: "2 × 60 = 120. Some 30 minutos = 150.", digito: 0 }],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "90 min = quantas horas?",
    passos: ["60 min = 1 h.", "Sobra 30 min.", "1 h e 30 min."],
    resposta: "1 h e 30 min",
    casasValor: { numero: 90, mostrarDecomposicao: true, extenso: "noventa" },
  },
  momento06_praticaGuiada: {
    enunciado: "3 horas = ? minutos",
    dica: "×60.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "180" }, { nome: "120" }, { nome: "240" }],
      respostaCerta: "180",
      feedbackAcerto: "🎉 3×60=180.",
      feedbackErro: "3×60=180.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Meia hora + 15 min = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "45 min" }, { nome: "30 min" }, { nome: "1 h" }],
      respostaCerta: "45 min",
      feedbackAcerto: "🎯 30+15=45.",
      feedbackErro: "30+15=45.",
    },
  },
  momento08_aplicacao: {
    contexto: "A aula começa 8h e dura 50 min.",
    problema: "A que horas acaba?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "8h50" }, { nome: "9h" }, { nome: "8h30" }],
      respostaCerta: "8h50",
      feedbackAcerto: "🎯 8h + 50 min = 8h50.",
      feedbackErro: "8h + 50 min = 8h50.",
    },
  },
  momento09_revisao: {
    pontos: ["1 h = 60 min.", "Meia hora = 30 min.", "1 dia = 24 h."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "2 h e 15 min = ? min",
      opcoes: [{ nome: "135" }, { nome: "120" }, { nome: "150" }],
      respostaCerta: "135",
      feedbackAcerto: "🎉 120+15=135.",
      feedbackErro: "2×60+15=135.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "1 h e meia = ? min", opcoes: ["90", "60", "120"], correta: 0, feedbackAcerto: "🎉 90.", feedbackErro: "60+30=90." },
      { pergunta: "120 min = ? h", opcoes: ["2", "1", "3"], correta: 0, feedbackAcerto: "🎉 2 horas.", feedbackErro: "2×60=120." },
      { pergunta: "1 quarto de hora = ?", opcoes: ["15 min", "30 min", "45 min"], correta: 0, feedbackAcerto: "🎉 15 min.", feedbackErro: "60÷4=15." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Cronômetro do dia",
    materiais: ["Relógio"],
    passos: ["Cronometre 3 atividades curtas.", "Anote em minutos."],
    registro: "📸 Foto do relógio.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
