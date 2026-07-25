import type { AulaV4 } from "../../types";

export const aula01_ideiaDividir: AulaV4 = {
  slug: "u4-01-ideia-dividir",
  titulo: "Repartir Igualmente",
  iconeTrilha: "➗",
  bncc: ["EF03MA10"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Um pra cada",
    historia: "12 balas para 4 amigos: quantas cada um recebe? Dividir = repartir em partes IGUAIS.",
  },
  momento02_exploracao: {
    instrucao: "Dividir é o inverso de multiplicar.",
    cenas: [
      { tipo: "texto", texto: "12 ÷ 4 = 3." },
      { tipo: "texto", texto: "Porque 3 × 4 = 12.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como fazer 20 ÷ 5?",
    pista: "Quantas vezes o 5 cabe em 20?",
    revelacao: "20 ÷ 5 = 4, porque 4 × 5 = 20.",
  },
  momento04_explicacao: {
    titulo: "Como repartir 15 doces entre 3 crianças",
    etapas: [
      {
        texto: "Temos 15 doces e 3 crianças (A, B, C). Vamos dar 1 doce pra cada uma, dando a volta várias vezes, até acabar. No final, contamos quantos cada uma recebeu.",
      },
      {
        texto: "Rodada 1 — dou 1 pra A, 1 pra B, 1 pra C. Já dei 3 doces. Sobram 15 − 3 = 12. Cada uma tem 1.",
      },
      {
        texto: "Rodada 2 — dou mais 1 pra A, B e C. Já dei 6 doces. Sobram 15 − 6 = 9. Cada uma tem 2.",
      },
      {
        texto: "Rodada 3 — dou mais 1 pra cada. Já dei 9. Sobram 15 − 9 = 6. Cada uma tem 3.",
      },
      {
        texto: "Rodada 4 — dou mais 1 pra cada. Já dei 12. Sobram 15 − 12 = 3. Cada uma tem 4.",
      },
      {
        texto: "Rodada 5 — dou o último pra cada. Já dei 15. Sobram 0. Cada uma tem 5. Acabou!",
        exemploReal: {
          contexto: "Foram 5 rodadas até acabar os 15 doces. Por isso 15 ÷ 3 = 5.",
          destaque: "15 ÷ 3 = 5 (cada criança ficou com 5).",
        },
      },
      {
        texto: "Atalho da tabuada: qual número vezes 3 dá 15? 5 × 3 = 15. Então 15 ÷ 3 = 5. Dividir é o inverso de multiplicar.",
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "18 ÷ 2 = ?",
    passos: [
      "18 doces, 2 crianças. Vou dando 1 pra cada e contando as rodadas.",
      "Rodadas: 1, 2, 3, 4, 5, 6, 7, 8, 9 — a cada rodada saem 2 doces (2, 4, 6, 8, 10, 12, 14, 16, 18).",
      "Na 9ª rodada acabaram os 18. Então cada criança ficou com 9.",
      "Confere com a tabuada: 9 × 2 = 18. Logo 18 ÷ 2 = 9.",
    ],
    resposta: "18 ÷ 2 = 9",
    casasValor: { numero: 9, mostrarDecomposicao: true, extenso: "nove" },
  },
  momento06_praticaGuiada: {
    enunciado: "10 ÷ 5 = ?",
    dica: "Quantas vezes o 5 cabe em 10?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2" }, { nome: "3" }, { nome: "5" }],
      respostaCerta: "2",
      feedbackAcerto: "🎉 5+5=10.",
      feedbackErro: "2×5=10.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "24 ÷ 4 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "6" }, { nome: "5" }, { nome: "7" }],
      respostaCerta: "6",
      feedbackAcerto: "🎯 6.",
      feedbackErro: "6×4=24.",
    },
  },
  momento08_aplicacao: {
    contexto: "16 lápis serão divididos em 4 estojos iguais.",
    problema: "Cada estojo:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4" }, { nome: "3" }, { nome: "5" }],
      respostaCerta: "4",
      feedbackAcerto: "🎯 16 ÷ 4 = 4.",
      feedbackErro: "4×4=16.",
    },
  },
  momento09_revisao: {
    pontos: ["Dividir = repartir igual.", "É o inverso da multiplicação."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "20 ÷ 4 = ?",
      opcoes: [{ nome: "5" }, { nome: "4" }, { nome: "6" }],
      respostaCerta: "5",
      feedbackAcerto: "🎉 5.",
      feedbackErro: "5×4=20.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "12 ÷ 3 = ?", opcoes: ["4", "3", "5"], correta: 0, feedbackAcerto: "🎉 4.", feedbackErro: "4×3=12." },
      { pergunta: "30 ÷ 5 = ?", opcoes: ["6", "5", "7"], correta: 0, feedbackAcerto: "🎉 6.", feedbackErro: "6×5=30." },
      { pergunta: "28 ÷ 4 = ?", opcoes: ["7", "6", "8"], correta: 0, feedbackAcerto: "🎉 7.", feedbackErro: "7×4=28." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Repartir do jantar",
    materiais: ["Fatias de fruta"],
    passos: ["Corte 8 fatias.", "Reparta entre os moradores da casa."],
    registro: "📸 Foto da divisão.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
