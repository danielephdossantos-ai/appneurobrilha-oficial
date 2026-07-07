import type { AulaV4 } from "../../types";
import relogio from "@/assets/neuro-treino/objetos/relogio.png";
import garrafa from "@/assets/neuro-treino/objetos/garrafa.png";
import suco from "@/assets/neuro-treino/objetos/suco.png";
import lapis from "@/assets/neuro-treino/objetos/lapis.png";
import livro from "@/assets/neuro-treino/objetos/livro.png";
import bola from "@/assets/neuro-treino/objetos/bola.png";
import bolaPraia from "@/assets/neuro-treino/objetos/bola-praia.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";

/**
 * Unidade 6 · Aula 4 — "Medindo o Mundo"
 * Cidade das Descobertas · Grandezas e Medidas (2º ano).
 * Comprimento, capacidade, massa e tempo (horas cheias / meia hora).
 */
export const aula04_medindoOMundo: AulaV4 = {
  slug: "u6-04-medindo-o-mundo",
  titulo: "Medindo o Mundo",
  iconeTrilha: "📏",
  bncc: ["EF02MA16", "EF02MA17", "EF02MA18", "EF02MA19"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "O parque em construção",
    historia:
      "Brilha vai ajudar a construir um PARQUE! A Coruja avisou: 'Antes de construir a gente MEDE! Quanto mede o banco? Que garrafa cabe mais água? Quanto tempo dura o passeio?'",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao: "Quatro coisas pra medir hoje:",
    cenas: [
      { tipo: "texto", texto: "📏 COMPRIMENTO — quanto uma coisa é longa.", destaque: true },
      { tipo: "texto", texto: "⚖️ MASSA — quanto uma coisa pesa." },
      { tipo: "texto", texto: "🥛 CAPACIDADE — quanto de líquido cabe." },
      { tipo: "texto", texto: "🕒 TEMPO — que horas são." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Cada medida precisa de um INSTRUMENTO diferente. Qual usa qual?",
    pista: "Pra pesar usamos a balança. Pra medir o comprido, a régua…",
    revelacao:
      "📏 Régua = comprimento. ⚖️ Balança = massa. 🥛 Copo medidor = capacidade. 🕒 Relógio = tempo.",
  },

  momento04_explicacao: {
    titulo: "As 4 medidas",
    etapas: [
      { texto: "📏 COMPRIMENTO — comparo com a RÉGUA. Ex.: lápis grande × lápis pequeno.", exemplo: "Um lápis mede 15 cm." },
      { texto: "⚖️ MASSA — comparo com a BALANÇA. Ex.: livro pesado × folha leve." },
      { texto: "🥛 CAPACIDADE — comparo com o COPO. Ex.: garrafa grande cabe mais suco.", exemplo: "1 litro > 1 copo." },
      {
        texto: "🕒 TEMPO — leio o RELÓGIO. Ponteiro grande no 12 = hora CHEIA. No 6 = MEIA HORA.",
        exemplo: "3:00 (hora cheia) · 3:30 (três e meia).",
        imagemUrl: relogio,
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "EU FAÇO — Brilha compara dois LÁPIS:",
    passos: [
      "Pego a RÉGUA (medida de comprimento).",
      "Meço o lápis grande: 15 cm.",
      "Meço o lápis pequeno: 8 cm.",
      "15 é MAIOR que 8 → o grande é mais COMPRIDO.",
    ],
    resposta: "Lápis grande = 15 cm (mais comprido).",
    visualUrl: lapis,
  },

  momento06_praticaGuiada: {
    enunciado: "NÓS FAZEMOS — Que instrumento usamos pra saber quanto um livro PESA?",
    dica: "Peso = massa. Massa se mede com…",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Pra medir a MASSA de um livro, uso:",
      opcoes: [
        { nome: "Régua", imagemUrl: lapis },
        { nome: "Balança", imagemUrl: livro },
        { nome: "Relógio", imagemUrl: relogio },
      ],
      respostaCerta: "Balança",
      feedbackAcerto: "🎉 Isso! Massa (peso) = BALANÇA.",
      feedbackErro: "Peso/massa se mede com BALANÇA.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "VOCÊ FAZ — Qual garrafa cabe MAIS suco?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Uma garrafa grande × um copinho. Cabe mais em…",
      opcoes: [
        { nome: "Garrafa grande", imagemUrl: garrafa },
        { nome: "Copinho", imagemUrl: suco },
      ],
      respostaCerta: "Garrafa grande",
      feedbackAcerto: "🎉 A garrafa maior tem mais CAPACIDADE.",
      feedbackErro: "Quanto maior, MAIS líquido cabe.",
    },
  },

  momento08_aplicacao: {
    contexto: "APLICAÇÃO — O ponteiro grande está no 12 e o pequeno no 3.",
    problema: "Que horas o relógio marca?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Ponteiro grande no 12 = hora CHEIA. Que horas?",
      opcoes: [
        { nome: "3:00 (três horas)", imagemUrl: relogio },
        { nome: "3:30 (três e meia)", imagemUrl: relogio },
        { nome: "12:00 (meio-dia)", imagemUrl: relogio },
      ],
      respostaCerta: "3:00 (três horas)",
      feedbackAcerto: "🎉 Ponteiro grande no 12 + pequeno no 3 = 3:00.",
      feedbackErro: "Grande no 12 = hora cheia. Pequeno no 3 = 3:00.",
    },
  },

  momento09_revisao: {
    pontos: [
      "📏 Régua mede COMPRIMENTO.",
      "⚖️ Balança mede MASSA (peso).",
      "🥛 Copo medidor mede CAPACIDADE.",
      "🕒 Relógio: ponteiro grande no 12 = hora cheia; no 6 = meia hora.",
    ],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Qual bola é MAIOR?",
      opcoes: [
        { nome: "Bola de praia", imagemUrl: bolaPraia },
        { nome: "Bolinha pequena", imagemUrl: bola },
      ],
      respostaCerta: "Bola de praia",
      feedbackAcerto: "🎉 Isso! A bola de praia é maior.",
      feedbackErro: "A bola de praia é bem maior.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Pergunta 1 de 5 — Pra medir COMPRIMENTO uso…",
        opcoes: ["Balança", "Régua", "Relógio"],
        correta: 1,
        feedbackAcerto: "🎉 Comprimento = RÉGUA.",
        feedbackErro: "Régua mede COMPRIMENTO.",
      },
      {
        pergunta: "Pergunta 2 de 5 — Pra medir PESO (massa) uso…",
        opcoes: ["Régua", "Balança", "Copo"],
        correta: 1,
        feedbackAcerto: "🎉 Peso = BALANÇA.",
        feedbackErro: "Massa (peso) = BALANÇA.",
      },
      {
        pergunta: "Pergunta 3 de 5 — Pra saber quanto de suco cabe uso…",
        opcoes: ["Copo medidor", "Régua", "Relógio"],
        correta: 0,
        feedbackAcerto: "🎉 Capacidade = COPO MEDIDOR.",
        feedbackErro: "Líquido = capacidade = COPO MEDIDOR.",
      },
      {
        pergunta: "Pergunta 4 de 5 — Ponteiro grande no 12, pequeno no 6. Que horas?",
        opcoes: ["6:00", "6:30", "12:00"],
        correta: 0,
        feedbackAcerto: "🎉 Grande no 12 = hora cheia → 6:00.",
        feedbackErro: "Grande no 12 = hora cheia. Pequeno no 6 = 6:00.",
      },
      {
        pergunta: "Pergunta 5 de 5 — Ponteiro grande no 6 significa…",
        opcoes: ["Hora cheia", "Meia hora", "Um minuto"],
        correta: 1,
        feedbackAcerto: "🎉 Grande no 6 = MEIA HORA. 🏆",
        feedbackErro: "Grande no 6 = MEIA HORA (ex.: 3:30).",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "⏰ Oficina de Medidas em Casa",
    materiais: ["Régua", "Balança (se tiver)", "Copo medidor ou 2 copos", "Relógio"],
    passos: [
      "1) Meça 2 lápis com a régua. Qual é maior?",
      "2) Pese 2 objetos na balança. Qual pesa mais?",
      "3) Encha 2 copos de tamanhos diferentes. Qual cabe mais?",
      "4) Observe o relógio em uma HORA CHEIA e em uma MEIA HORA. Anote.",
    ],
    registro: "📸 Foto das 4 medições com o resultado.",
  },

  recompensa: {
    xp: 220,
    moedas: 110,
    medalha: "Medidor(a) do Parque",
  },
};
