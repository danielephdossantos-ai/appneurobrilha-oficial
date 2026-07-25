import type { AulaV4 } from "../../types";

export const aula01_bilhao: AulaV4 = {
  slug: "u1-01-bilhao",
  titulo: "Do milhão ao bilhão",
  iconeTrilha: "🔬",
  bncc: ["EF06MA01"],
  duracaoMin: 22,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "O Laboratório abriu as portas",
    historia:
      "{NOME}, você foi chamado(a) ao LABORATÓRIO. A primeira missão: entender números TÃO grandes que passam do milhão. Chegam ao BILHÃO. Aqui, todo número é uma HIPÓTESE que a gente testa.",
  },
  momento02_exploracao: {
    instrucao: "Classes do sistema decimal (grupos de 3 dígitos, da direita para a esquerda).",
    cenas: [
      { tipo: "texto", texto: "Classes: unidades · milhar · milhão · bilhão.", destaque: true },
      { tipo: "texto", texto: "1.000 unidades = 1 milhar. 1.000 milhares = 1 milhão. 1.000 milhões = 1 bilhão." },
      { tipo: "texto", texto: "Leitura: leia cada classe e diga o nome dela. Ex.: 2.345.678.901 → 2 bilhões, 345 milhões, 678 mil, 901." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Quantos milhões cabem em 1 bilhão?",
    pista: "Cada classe é ×1.000 da anterior.",
    revelacao: "1 bilhão = 1.000 milhões = 1.000.000.000.",
  },
  momento04_explicacao: {
    titulo: "Leitura por classes",
    etapas: [
      { texto: "1.250.000 → 1 milhão, 250 mil." },
      { texto: "42.700.000 → 42 milhões, 700 mil." },
      { texto: "3.005.000.000 → 3 bilhões, 5 milhões." },
      { texto: "Dica científica: separe pelos pontos e leia CLASSE por CLASSE." },
    ],
  },
  momento05_modelagem: {
    enunciado: "Escreva por extenso: 1.200.000.000.",
    resposta: "Um bilhão e duzentos milhões",
    passos: [
      "Separe as classes: 1 · 200 · 000 · 000.",
      "Nomeie da esquerda: 1 bilhão, 200 milhões, 0 mil, 0.",
      "Leia junto: um bilhão e duzentos milhões.",
    ],
  },
  momento06_praticaGuiada: {
    enunciado: "Como se lê 5.030.000?",
    dica: "5 milhões · 30 mil · 0.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "Cinco milhões e trinta mil" },
        { nome: "Cinco milhões e trezentos mil" },
        { nome: "Cinquenta milhões e trinta mil" },
      ],
      respostaCerta: "Cinco milhões e trinta mil",
      feedbackAcerto: "🎯 Classes lidas corretamente.",
      feedbackErro: "Separe: 5 · 030 · 000. Fica cinco milhões e trinta mil.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "2.400.000.000 é igual a…",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "2 bilhões e 400 milhões" },
        { nome: "24 bilhões" },
        { nome: "240 milhões" },
      ],
      respostaCerta: "2 bilhões e 400 milhões",
      feedbackAcerto: "🎯",
      feedbackErro: "2 · 400 · 000 · 000 → 2 bi + 400 mi.",
    },
  },
  momento08_aplicacao: {
    contexto: "A população do Brasil em 2022: cerca de 203.000.000 pessoas. A do mundo: cerca de 8.000.000.000.",
    problema: "Quantas vezes o mundo tem mais habitantes que o Brasil (aproximado)?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Cerca de 40 vezes" }, { nome: "Cerca de 4 vezes" }, { nome: "Cerca de 400 vezes" }],
      respostaCerta: "Cerca de 40 vezes",
      feedbackAcerto: "🎯 8.000 ÷ 203 ≈ 40.",
      feedbackErro: "8 bilhões ÷ 200 milhões ≈ 40.",
    },
  },
  momento09_revisao: {
    pontos: [
      "Cada classe = 3 dígitos, ×1.000 da anterior.",
      "Leia da esquerda pra direita, classe por classe.",
      "Bilhão = 1.000 milhões = 1.000.000.000.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1 bilhão é igual a:",
        opcoes: ["1.000 milhões", "100 milhões", "10 milhões"],
        correta: 0,
        feedbackAcerto: "🎉",
        feedbackErro: "1 bi = 1.000 mi.",
      },
      {
        pergunta: "Como se lê 12.500.000?",
        opcoes: ["Doze milhões e quinhentos mil", "Um bilhão e 250 mil", "Cento e vinte e cinco milhões"],
        correta: 0,
        feedbackAcerto: "🎉",
        feedbackErro: "12 mi · 500 mil.",
      },
      {
        pergunta: "3.000.000.000 é:",
        opcoes: ["3 bilhões", "3 milhões", "300 milhões"],
        correta: 0,
        feedbackAcerto: "🎉",
        feedbackErro: "3 bi.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Caça-bilhão",
    materiais: ["Jornal ou site de notícias"],
    passos: [
      "Encontre uma notícia com um número ≥ 1 milhão.",
      "Copie o número e escreva por extenso.",
      "Diga a que classe pertence o dígito mais à esquerda.",
    ],
    registro: "📸 Foto da manchete + seu registro.",
  },
  recompensa: { xp: 160, moedas: 85 },
};
