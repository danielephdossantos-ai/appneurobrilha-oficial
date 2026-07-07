import type { AulaV4 } from "../../types";
import maca from "@/assets/neuro-treino/objetos/maca.png";
import flor from "@/assets/neuro-treino/objetos/flor.png";
import bola from "@/assets/neuro-treino/objetos/bola.png";
import livro from "@/assets/neuro-treino/objetos/livro.png";
import estrela from "@/assets/neuro-treino/objetos/estrela.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";

/**
 * Unidade 5 · Aula 5 — "Missão Final do Mercado"
 * BNCC EF02MA06, EF02MA07.
 *
 * Fecha a Unidade 5. 5 desafios integrando tudo:
 *   1) Problema de soma · 2) Problema de subtração ·
 *   3) Escolher a operação · 4) Duas etapas · 5) Conferir a resposta.
 * Conquista: 🏅 Mestre dos Problemas Matemáticos.
 * Desbloqueio: 🛒 Carrinho Dourado da Feira.
 */
export const aula05_missaoFinal: AulaV4 = {
  slug: "u5-05-missao-final-mercado",
  titulo: "Missão Final do Mercado",
  iconeTrilha: "🛒",
  bncc: ["EF02MA06", "EF02MA07"],
  duracaoMin: 28,

  momento01_motivacao: {
    titulo: "A feira vai fechar!",
    historia:
      "A Coruja tocou o sino: 'A feira vai fechar em 5 minutos! TODOS os comerciantes precisam de ajuda antes.' Brilha respirou fundo: 5 desafios finais. Se conseguir, ganha a medalha MESTRE DOS PROBLEMAS e o 🛒 CARRINHO DOURADO DA FEIRA!",
    imagemUrl: brilha,
  },

  // Desafio 1 — PROBLEMA DE SOMA (9 + 6)
  momento02_exploracao: {
    instrucao:
      "Desafio 1 de 5 — 'Dona Coelha tinha 9 maçãs. Chegaram 6.' Toque nas maçãs pra contar tudo:",
    cenas: [],
    interacao: {
      tipo: "tapContar",
      imagemUrl: maca,
      quantidade: 15,
      itemPlural: "maçãs",
      pergunta: "9 + 6 = ?",
    },
  },

  momento03_descoberta: {
    perguntaGuia:
      "Você lembra tudo que aprendeu no Mercado?",
    pista:
      "4 passos, palavras-chave, soma, subtração, duas etapas, conferir.",
    revelacao:
      "É! Agora é hora de ajudar TODOS os comerciantes em 5 desafios!",
  },

  momento04_explicacao: {
    titulo: "Como funciona a missão",
    etapas: [
      {
        texto: "5 desafios em sequência. Cada um ajuda um comerciante.",
        exemplo:
          "1) Soma · 2) Subtração · 3) Escolher · 4) Duas etapas · 5) Conferir.",
      },
      {
        texto: "Se errar, Brilha ensina e você tenta de novo.",
        exemplo: "O importante é chegar até o fim.",
      },
      {
        texto:
          "No final: 🏅 medalha, XP, moedas e 🛒 CARRINHO DOURADO destravado.",
        exemplo: "É o item mais raro do Mercado!",
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "EU FAÇO — Brilha revisa cada desafio:",
    passos: [
      "1) Soma: 9 + 6 = 15.",
      "2) Subtração: 15 − 6 = 9.",
      "3) Escolher: 'foi embora' = SUBTRAÇÃO.",
      "4) Duas etapas: 10 + 5 − 3 = 12.",
      "5) Conferir: 'faz sentido?' antes de fechar.",
    ],
    resposta: "Pronto pra ajudar todo mundo!",
    visualUrl: brilha,
  },

  // Desafio 2 — SUBTRAÇÃO (14 - 6)
  momento06_praticaGuiada: {
    enunciado:
      "Desafio 2 de 5 — 'Padeiro fez 14 pães. Vendeu 6.' Sobraram?",
    dica: "'Vendeu' = subtração. 14 − 6 = 8.",
    interacao: {
      tipo: "operacaoVisual",
      operacao: "subtracao",
      imagemUrl: bola,
      itemPlural: "pães",
      a: 14,
      b: 6,
      legenda: "14 − 6 = 8 pães",
    },
  },

  // Desafio 3 — ESCOLHER OPERAÇÃO
  momento07_praticaIndependente: {
    enunciado:
      "Desafio 3 de 5 — 'Foram embora 7 clientes.' Que operação usar?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: estrela, quantidade: 7, rotulo: "Foram" },
      ],
      pergunta: "Que sinal?",
      opcoes: ["+", "−", "="],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 'Foram embora' = SUBTRAÇÃO (−).",
      feedbackErro: "Diminui → SUBTRAÇÃO.",
    },
  },

  // Desafio 4 — DUAS ETAPAS (10 + 5 - 3)
  momento08_aplicacao: {
    contexto:
      "Desafio 4 de 5 — 'A florista tinha 10 flores. Colheu mais 5. Vendeu 3.'",
    problema:
      "Quantas sobraram?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: flor, quantidade: 10, rotulo: "Tinha" },
        { imagemUrl: flor, quantidade: 5, rotulo: "Colheu" },
      ],
      pergunta: "10 + 5 − 3 = ?",
      opcoes: ["10", "12", "15"],
      correta: 1,
      feedbackAcerto:
        "🎉 Uau! 10+5=15, 15−3=12 flores.",
      feedbackErro:
        "1) 10+5=15. 2) 15−3=12.",
    },
  },

  momento09_revisao: {
    pontos: [
      "4 desafios completos! Falta CONFERIR uma resposta.",
      "🎯 ÚLTIMO DESAFIO: verificar se a resposta faz sentido.",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: livro, quantidade: 8, rotulo: "Tinha" },
      ],
      pergunta:
        "Desafio 5 — 'Havia 8 livros. Emprestaram 3. Alguém respondeu 20.' Faz sentido?",
      opcoes: [
        "Sim, porque tinha muitos livros",
        "Não, sobra tem que ser MENOR que 8",
        "Só se ganhou mais",
      ],
      correta: 1,
      feedbackAcerto:
        "🎉 MISSÃO CUMPRIDA! Quando TIRA, a sobra é MENOR que o início. 20 não faz sentido. Certo é 8−3=5. 🏅",
      feedbackErro:
        "Se emprestou 3 de 8, tem que SOBRAR menos de 8. Resposta certa é 5.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta:
          "Ritual 1 de 5 — 'Tinha 9 maçãs, chegaram 6.' Total?",
        opcoes: ["14", "15", "16"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 9, rotulo: "Tinha" },
          { imagemUrl: maca, quantidade: 6, rotulo: "Chegaram" },
        ],
        feedbackAcerto: "🎉 Isso! 9 + 6 = 15.",
        feedbackErro: "'Chegaram' = soma. 9 + 6 = 15.",
      },
      {
        pergunta:
          "Ritual 2 de 5 — 'Fez 14 pães, vendeu 6.' Sobraram?",
        opcoes: ["7", "8", "9"],
        correta: 1,
        visualGrupos: [{ imagemUrl: bola, quantidade: 14, rotulo: "Tinha" }],
        tirar: 6,
        feedbackAcerto: "🎉 Boa! 14 − 6 = 8.",
        feedbackErro: "'Vendeu' = tirar. 14 − 6 = 8.",
      },
      {
        pergunta:
          "Ritual 3 de 5 — 'Foram embora 7 clientes.' Sinal?",
        opcoes: ["+", "−", "="],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Foram embora' = SUBTRAÇÃO.",
        feedbackErro: "Diminui → SUBTRAÇÃO (−).",
      },
      {
        pergunta:
          "Ritual 4 de 5 — 'Tinha 10, colheu 5, vendeu 3.' Sobraram?",
        opcoes: ["10", "12", "15"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: flor, quantidade: 10, rotulo: "Tinha" },
          { imagemUrl: flor, quantidade: 5, rotulo: "Colheu" },
        ],
        feedbackAcerto: "🎉 Uau! 10+5=15, 15−3=12.",
        feedbackErro: "Em 2 passos: 10+5=15, 15−3=12.",
      },
      {
        pergunta:
          "Ritual 5 de 5 — Qual é o passo final ao resolver um problema?",
        opcoes: [
          "Escrever a resposta e pronto",
          "CONFERIR se a resposta faz sentido",
          "Apagar a conta",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 MISSÃO COMPLETA! Você é MESTRE DOS PROBLEMAS MATEMÁTICOS! 🏅 🛒 Carrinho Dourado destravado!",
        feedbackErro:
          "O 4º passo é CONFERIR se a resposta faz sentido.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🛒 Mercadinho de Verdade",
    materiais: [
      "5 objetos de casa (frutas, biscoitos, brinquedos)",
      "Papel e lápis",
      "Um cartão desenhado — o CARRINHO DOURADO",
    ],
    passos: [
      "1) A família cria 5 problemas curtos usando os objetos.",
      "2) A criança segue os 4 PASSOS pra cada um.",
      "3) Um dos problemas precisa ter DUAS ETAPAS.",
      "4) A criança CONFERE cada resposta em voz alta.",
      "5) A família entrega o CARRINHO DOURADO junto com a medalha.",
    ],
    registro:
      "📸 Foto dos 5 problemas resolvidos e da criança com o Carrinho Dourado.",
  },

  recompensa: {
    xp: 600,
    moedas: 400,
    medalha: "Mestre dos Problemas Matemáticos",
  },
};
