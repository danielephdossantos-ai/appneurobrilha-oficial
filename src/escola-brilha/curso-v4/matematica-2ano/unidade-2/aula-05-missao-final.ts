import type { AulaV4 } from "../../types";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";

/**
 * Unidade 2 · Aula 5 — "Missão Final da Cidade das Adições"
 * BNCC EF02MA05, EF02MA06.
 *
 * Fecha a Unidade 2. Sequência de 5 desafios, cada um resgatando
 * uma habilidade da unidade:
 *   1) Juntar frutas · 2) Resolver contas · 3) Escolher a operação ·
 *   4) Resolver problemas · 5) Explicar o resultado.
 * Conquista: 🏅 Construtor(a) da Cidade das Adições.
 * Desbloqueio: Mochila Matemática.
 */
export const aula05_missaoFinal: AulaV4 = {
  slug: "u2-05-missao-final-adicoes",
  titulo: "Missão Final da Cidade das Adições",
  iconeTrilha: "🏙️",
  bncc: ["EF02MA05", "EF02MA06"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "A Festa da Amizade vai começar!",
    historia:
      "Toda a Cidade das Adições está pronta pra Festa da Amizade! Cada rua acende uma luz quando Brilha resolve um desafio. Faltam 5 ruas pra iluminar. Se você conseguir, ganha a medalha de CONSTRUTOR(A) DA CIDADE e destranca a Mochila Matemática!",
    imagemUrl: brilha,
  },

  // Desafio 1 — JUNTAR FRUTAS (5 + 3)
  momento02_exploracao: {
    instrucao:
      "Desafio 1 de 5 — JUNTAR FRUTAS. Dona Coelha juntou duas cestas. Toque em cada maçã:",
    cenas: [],
    interacao: {
      tipo: "tapContar",
      imagemUrl: maca,
      quantidade: 8,
      itemPlural: "maçãs",
      pergunta: "5 + 3 = ?",
    },
  },

  momento03_descoberta: {
    perguntaGuia:
      "Você lembra tudo que aprendeu nesta unidade?",
    pista:
      "Juntar, sinais + e =, estratégias, conta horizontal, conta armada, problemas.",
    revelacao:
      "É! Agora é hora de mostrar tudo em 5 desafios seguidos. Vamos iluminar a cidade!",
  },

  momento04_explicacao: {
    titulo: "Como funciona a missão",
    etapas: [
      {
        texto: "5 desafios em sequência. Cada um vale UMA rua iluminada.",
        exemplo:
          "1) Juntar · 2) Resolver conta · 3) Escolher operação · 4) Problema · 5) Explicar.",
      },
      {
        texto:
          "Se errar, Brilha explica e você tenta outra vez. O importante é chegar até o fim.",
        exemplo: "Não é prova, é MISSÃO. Todo mundo pode!",
      },
      {
        texto:
          "No final: 🏅 medalha Construtor(a), XP, moedas e 🎒 Mochila Matemática destravada.",
        exemplo: "A Mochila leva tudo que você aprendeu pra Unidade 3.",
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "EU FAÇO — Brilha faz um treino rápido de cada desafio:",
    passos: [
      "1) Juntar: 5 bananas + 3 = 8.",
      "2) Conta: 6 + 3 = 9 na armada.",
      "3) Operação: 'ganhou mais' → SOMA (+).",
      "4) Problema: '10 bolas + 5 = 15 bolas'.",
      "5) Explicar: 'Juntei os dois grupos e contei tudo.'",
    ],
    resposta: "Pronto pra missão!",
    visualUrl: brilha,
  },

  // Desafio 2 — RESOLVER CONTA (7 + 3)
  momento06_praticaGuiada: {
    enunciado:
      "Desafio 2 de 5 — RESOLVER CONTA. Arme e resolva: 7 + 3.",
    dica: "7 + 3 fecha uma dezena. Comece no 7: oito, nove, dez.",
    interacao: {
      tipo: "operacaoVisual",
      operacao: "soma",
      imagemUrl: banana,
      itemPlural: "bananas",
      a: 7,
      b: 3,
      legenda: "7 + 3 = 10",
    },
  },

  // Desafio 3 — ESCOLHER A OPERAÇÃO
  momento07_praticaIndependente: {
    enunciado:
      "Desafio 3 de 5 — ESCOLHER A OPERAÇÃO. 'Pedro tinha 6 estrelas e GANHOU mais 4.' Qual operação resolve?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: estrela, quantidade: 6, rotulo: "Tinha" },
        { imagemUrl: estrela, quantidade: 4, rotulo: "Ganhou" },
      ],
      pergunta: "Qual conta certa?",
      opcoes: ["6 - 4 = 2", "6 + 4 = 10", "6 = 4"],
      correta: 1,
      feedbackAcerto:
        "🎉 Isso! 'GANHOU mais' = SOMA. 6 + 4 = 10 estrelas.",
      feedbackErro:
        "Palavra 'GANHOU MAIS' indica SOMA. Fica 6 + 4 = 10.",
    },
  },

  // Desafio 4 — RESOLVER PROBLEMA (12 + 5)
  momento08_aplicacao: {
    contexto:
      "Desafio 4 de 5 — RESOLVER PROBLEMA. 'Na festa havia 12 balões. Chegaram mais 5.'",
    problema:
      "Quantos balões na festa agora?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: bola, quantidade: 10, rotulo: "📦" },
        { imagemUrl: bola, quantidade: 2, rotulo: "⚽" },
        { imagemUrl: bola, quantidade: 5, rotulo: "⚽ +" },
      ],
      pergunta: "12 + 5 = ?",
      opcoes: ["15", "17", "22"],
      correta: 1,
      feedbackAcerto:
        "🎉 Uau! 12 + 5 = 17 balões. Uni: 2+5=7. Dez: 1.",
      feedbackErro:
        "Some só as unidades (2+5=7). Dezena continua 1. Fica 17.",
    },
  },

  momento09_revisao: {
    pontos: [
      "4 desafios completos! Faltam poucas ruas pra iluminar toda a Cidade das Adições.",
      "🎯 ÚLTIMO DESAFIO: EXPLICAR o resultado.",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 4, rotulo: "🍎" },
        { imagemUrl: maca, quantidade: 3, rotulo: "🍎" },
      ],
      pergunta:
        "Desafio 5 — Se 4 + 3 = 7, o que essa conta MOSTRA?",
      opcoes: [
        "Que sobraram 7",
        "Que juntamos dois grupos e o total é 7",
        "Que 4 é maior que 3",
      ],
      correta: 1,
      feedbackAcerto:
        "🎉 MISSÃO CUMPRIDA! Adição = juntar. 4 + 3 = 7 mostra o total de dois grupos. 🏅 Cidade iluminada!",
      feedbackErro:
        "Adição é JUNTAR. 4 + 3 = 7 diz: juntei 4 com 3 e o total deu 7.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Ritual 1 de 5 — 3 + 4 = ?",
        opcoes: ["6", "7", "8"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 3, rotulo: "🍎" },
          { imagemUrl: maca, quantidade: 4, rotulo: "🍎" },
        ],
        feedbackAcerto: "🎉 Isso! 3 + 4 = 7.",
        feedbackErro: "3 + 4: quatro, cinco, seis, sete. Fica 7.",
      },
      {
        pergunta:
          "Ritual 2 de 5 — Qual sinal significa JUNTAR (adição)?",
        opcoes: ["-", "+", "="],
        correta: 1,
        feedbackAcerto: "🎉 Boa! O '+' é adição.",
        feedbackErro: "Juntar = '+'. O '=' mostra o resultado.",
      },
      {
        pergunta: "Ritual 3 de 5 — 8 + 2 = ?",
        opcoes: ["9", "10", "11"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: bola, quantidade: 8, rotulo: "⚽" },
          { imagemUrl: bola, quantidade: 2, rotulo: "⚽" },
        ],
        feedbackAcerto: "🎉 Isso! 8 + 2 = 10.",
        feedbackErro: "8 + 2 fecha 10. Nove, dez.",
      },
      {
        pergunta:
          "Ritual 4 de 5 — 'Tinha 14 bananas e ganhou mais 3.' Total?",
        opcoes: ["16", "17", "18"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
          { imagemUrl: banana, quantidade: 4, rotulo: "🍌" },
          { imagemUrl: banana, quantidade: 3, rotulo: "🍌 +" },
        ],
        feedbackAcerto: "🎉 Uau! 14 + 3 = 17.",
        feedbackErro: "Uni: 4+3=7. Dez: 1. Fica 17.",
      },
      {
        pergunta:
          "Ritual 5 de 5 — Qual dessas frases MELHOR explica o que é uma ADIÇÃO?",
        opcoes: [
          "Comparar duas quantidades",
          "Juntar dois ou mais grupos e encontrar o total",
          "Tirar uma quantidade da outra",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 MISSÃO COMPLETA! Você é CONSTRUTOR(A) DA CIDADE DAS ADIÇÕES! 🏅 Mochila Matemática destravada! 🎒",
        feedbackErro:
          "Adição é JUNTAR grupos e achar o TOTAL. Comparar e tirar são outras operações.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏙️ Festa da Amizade em Casa",
    materiais: [
      "Papel colorido, fita, ou tudo o que servir de decoração",
      "Objetos pra contar",
      "Papel e lápis",
    ],
    passos: [
      "1) A família prepara uma mini-Festa da Amizade (com o que tiver em casa).",
      "2) A criança conta em voz alta quantas 'decorações' cada pessoa trouxe.",
      "3) SOMAM tudo pra saber o total.",
      "4) Escrevem a adição num cartaz: 'Nossa festa tem X + Y = Z decorações!'",
      "5) A criança recebe a medalha (desenhada ou de papelão): CONSTRUTOR(A) DA CIDADE DAS ADIÇÕES.",
    ],
    registro:
      "📸 Foto da mini-festa com o cartaz da soma e a medalha na criança.",
  },

  recompensa: {
    xp: 500,
    moedas: 300,
    medalha: "Construtor(a) da Cidade das Adições",
  },
};
