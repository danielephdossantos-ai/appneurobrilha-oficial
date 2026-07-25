import type { AulaV4 } from "../../types";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as coruja } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";

/**
 * Aula 8 — "Sequências Numéricas"
 * Curso: Matemática 3º Ano · Unidade 1
 *
 * Foco: descobrir o padrão (pulo) de uma sequência (de 1 em 1, de 10
 * em 10, de 100 em 100, de 5 em 5, de 2 em 2) e prever o próximo.
 * BNCC: EF03MA03.
 */
export const aula08_sequenciasNumericas: AulaV4 = {
  slug: "08-sequencias-numericas",
  titulo: "O Pulo dos Números",
  iconeTrilha: "🦘",
  bncc: ["EF03MA03"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "Números que PULAM!",
    historia:
      "A Prefeita mostrou uma trilha: 10, 20, 30, 40, ... 'Qual vem depois?', perguntou. Brilha viu o segredo: cada número PULA de 10 em 10! Números em sequência sempre têm um pulo escondido.",
    imagemUrl: coruja,
  },

  momento02_exploracao: {
    instrucao: "Olhe a sequência: 5, 10, 15, 20, ... Qual o pulo?",
    cenas: [
      { tipo: "texto", texto: "De 5 pra 10 → pulou 5." },
      { tipo: "texto", texto: "De 10 pra 15 → pulou 5.", destaque: true },
      { tipo: "texto", texto: "Sempre 5! Próximo: 25." },
    ],
    interacao: {
      tipo: "tapContar",
      imagemUrl: banana,
      quantidade: 5,
      itemPlural: "bananas",
      pergunta: "Quantas bananas em cada pulo? (5!)",
    },
  },

  momento03_descoberta: {
    perguntaGuia: "Como achar o PULO de qualquer sequência?",
    pista: "Subtrai o número da FRENTE menos o de TRÁS. Isso é o pulo.",
    revelacao:
      "PULO = 2º número − 1º número. Se todos os pulos forem iguais, você achou o padrão! Aí é só somar o pulo pra prever o próximo.",
  },

  momento04_explicacao: {
    titulo: "Pulos que a gente vai usar muito",
    etapas: [
      {
        texto: "De 1 em 1: 47, 48, 49, 50... (contagem normal).",
        exemplo: "Pulo = 1.",
      },
      {
        texto: "De 10 em 10: 120, 130, 140, 150... (só muda a DEZENA).",
        exemplo: "Pulo = 10. A unidade fica igual.",
      },
      {
        texto: "De 100 em 100: 250, 350, 450, 550... (só muda a CENTENA).",
        exemplo: "Pulo = 100.",
        agrupamentos: [
          { imagemUrl: maca, tamanhoGrupo: 100, qtdGrupos: 1, rotulo: "🏢 +1 prédio" },
        ],
      },
      {
        texto: "Pulos MENORES pra treinar: de 2 em 2 (par/ímpar), de 5 em 5 (contando na mão).",
        exemplo: "De 5 em 5: 5, 10, 15, 20... De 2 em 2: 2, 4, 6, 8...",
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha descobre o pulo de 30, 40, 50, 60, ?, ?",
    passos: [
      "40 − 30 = 10. Pulo é 10.",
      "50 − 40 = 10. Confirmado.",
      "60 − 50 = 10. Confirmado.",
      "Próximo: 60 + 10 = 70.",
      "Depois: 70 + 10 = 80. 🦘",
    ],
    resposta: "70, 80",
    visualUrl: brilha,
  },

  momento06_praticaGuiada: {
    enunciado: "Juntos! Qual é o próximo? 200, 300, 400, ...",
    dica: "Pulo = 300 − 200 = 100.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: banana, quantidade: 100, rotulo: "200" },
        { imagemUrl: banana, quantidade: 100, rotulo: "300" },
        { imagemUrl: banana, quantidade: 100, rotulo: "400" },
      ],
      pergunta: "Próximo:",
      opcoes: ["401", "410", "500"],
      correta: 2,
      feedbackAcerto: "🎉 Pulo 100. 400 + 100 = 500.",
      feedbackErro: "Pulo é 100 (de 100 em 100). 400 + 100 = 500.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Sua vez! Qual o pulo desta sequência: 8, 10, 12, 14, ?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 2, rotulo: "🍎+2" },
      ],
      pergunta: "Próximo da fila:",
      opcoes: ["15", "16", "20"],
      correta: 1,
      feedbackAcerto: "🎉 Pulo 2. 14 + 2 = 16.",
      feedbackErro: "10 − 8 = 2. Pulo é 2 (números pares). 14 + 2 = 16.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "A Prefeita organiza as barracas por NÚMERO: 105, 115, 125, 135, ... onde fica a próxima barraca?",
    problema: "Descubra o pulo e diga o número da 5ª barraca.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "5ª barraca:",
      opcoes: [
        { nome: "140", imagemUrl: banana },
        { nome: "145", imagemUrl: maca },
        { nome: "150", imagemUrl: coruja },
      ],
      respostaCerta: "145",
      feedbackAcerto:
        "🎯 Isso! Pulo = 10 (115−105). 135 + 10 = 145.",
      feedbackErro:
        "Pulo é 10 (só muda a dezena: 05, 15, 25, 35...). 135 + 10 = 145.",
    },
  },

  momento09_revisao: {
    pontos: [
      "SEQUÊNCIA = fila de números com um PULO fixo.",
      "PULO = próximo − anterior.",
      "Somando o pulo, prevejo o próximo.",
      "🎮 Adivinhe o próximo!",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: banana, quantidade: 100, rotulo: "165" },
        { imagemUrl: banana, quantidade: 100, rotulo: "170" },
        { imagemUrl: banana, quantidade: 100, rotulo: "175" },
      ],
      pergunta: "Sequência 165, 170, 175, ... próximo?",
      opcoes: ["176", "180", "185"],
      correta: 1,
      feedbackAcerto: "🎉 Pulo 5. 175 + 5 = 180.",
      feedbackErro: "170 − 165 = 5. Pulo 5. 175 + 5 = 180.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Sequência 400, 410, 420, ... próximo?",
        opcoes: ["421", "430", "440"],
        correta: 1,
        feedbackAcerto: "🎉 Pulo 10. 420 + 10 = 430.",
        feedbackErro: "410−400=10. 420+10=430.",
      },
      {
        pergunta: "Qual o pulo de 5, 10, 15, 20, 25?",
        opcoes: ["1", "2", "5"],
        correta: 2,
        feedbackAcerto: "Isso! Pulo de 5 em 5.",
        feedbackErro: "10 − 5 = 5. Pulo = 5.",
      },
      {
        pergunta: "Sequência 200, 300, 400, ..., 700. Quantos números tem?",
        opcoes: ["4", "5", "6"],
        correta: 2,
        feedbackAcerto: "🎉 200, 300, 400, 500, 600, 700 → 6 números.",
        feedbackErro: "Conta na fila: 200, 300, 400, 500, 600, 700. São 6.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Sequência da Escada",
    materiais: ["Escada da casa OU papel", "Caneta"],
    passos: [
      "Escolha um pulo: 5, 10 ou 100.",
      "Escreva os 5 primeiros números da sequência começando de qualquer lugar (ex.: 45, 55, 65, ...).",
      "Peça pra alguém adivinhar os próximos 2 números.",
      "Depois inverta.",
    ],
    registro: "📸 Foto da sequência escrita.",
  },
  recompensa: {
    xp: 120,
    moedas: 60,
    medalha: "Explorador(a) da Cidade dos Números",
  },
};
