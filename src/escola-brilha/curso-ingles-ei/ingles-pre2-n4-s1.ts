import type { AulaIng } from "./types";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as agua } from "@/assets/neuro-treino/objetos/cristal-agua.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";

/**
 * Inglês EI — Pré II · Nível 4 · Semana 1
 * "I want / I need" — pedidos. Frame: "I want an apple!", "I need water!".
 */

const n4S1A01: AulaIng = {
  slug: "n4-s1-a01-i-want",
  titulo: "I want an apple!",
  subtitulo: "Nível 4 · Semana 1 · Dia 1",
  icone: "🍎",
  duracaoMin: 7,
  baseCientifica:
    "Atos de fala funcionais (Halliday 1975) — 'querer' é uma das primeiras funções que a criança precisa em L2.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi! Hoje aprendemos a PEDIR em inglês: "I want an apple!", "I want a ball!". Fala do jeito educado!',
      legenda: "Fala com sorriso.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Escuta: "I want an apple", "I want a ball".',
      itens: [
        { en: "Apple", pt: "Maçã", imagemUrl: maca },
        { en: "Ball", pt: "Bola", imagemUrl: bola },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"I want an apple, please!". Toca na MAÇÃ.',
      palavraAlvoEn: "Apple",
      opcoes: [
        { nome: "maçã", imagemUrl: maca, correta: true },
        { nome: "bola", imagemUrl: bola, correta: false },
        { nome: "livro", imagemUrl: livro, correta: false },
      ],
      feedbackAcerto: 'Yes! "Here\'s your apple!". Yummy!',
      feedbackErro: '"Apple" é maçã pra comer.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"I want a ball, please!". Toca na BOLA.',
      palavraAlvoEn: "Ball",
      opcoes: [
        { nome: "bola", imagemUrl: bola, correta: true },
        { nome: "maçã", imagemUrl: maca, correta: false },
      ],
      feedbackAcerto: 'Right! "Let\'s play!".',
      feedbackErro: '"Ball" é a bola de brincar.',
    },
    {
      tipo: "historiaEn",
      titulo: "At the shop",
      cenas: [
        { imagemUrl: maca, narracao: 'Lily: "I want an apple, please!". Vendedora: "Here you go!".' },
        { imagemUrl: bola, narracao: 'Tom: "I want a ball, please!". "Sure!".' },
        { imagemUrl: livro, narracao: '"Thank you! Bye-bye!".' },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: menina,
      convite:
        'Faz de conta que está na loja! Pede 3 coisas: "I want a __, please!". Adulto entrega e você diz "Thank you!".',
      dica: "Sempre com 'please' e 'thank you'.",
    },
    {
      tipo: "celebracao",
      medalha: "Polite Kid — I want",
      mascoteUrl: buddy,
      falaFinal: 'Great! Você já pede as coisas com educação em inglês!',
    },
  ],
};

const n4S1A02: AulaIng = {
  slug: "n4-s1-a02-i-need",
  titulo: "I need water!",
  subtitulo: "Nível 4 · Semana 1 · Dia 2",
  icone: "💧",
  duracaoMin: 7,
  baseCientifica:
    "Contraste want × need (Tomasello 2003) — a criança distingue desejo e necessidade, base de comunicação clara.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi! "I want" é QUERO. "I need" é PRECISO. Hoje: "I need water!", "I need a book!".',
      legenda: "Precisar é mais forte que querer.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Escuta: "water" (água), "book" (livro).',
      itens: [
        { en: "Water", pt: "Água", imagemUrl: agua },
        { en: "Book", pt: "Livro", imagemUrl: livro },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"I\'m thirsty! I need water!". Toca na ÁGUA.',
      palavraAlvoEn: "Water",
      opcoes: [
        { nome: "água", imagemUrl: agua, correta: true },
        { nome: "livro", imagemUrl: livro, correta: false },
        { nome: "bola", imagemUrl: bola, correta: false },
      ],
      feedbackAcerto: 'Yes! "Here\'s water!". Bebe devagar.',
      feedbackErro: 'Sede = "water" (água).',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"I need a book!". Toca no LIVRO.',
      palavraAlvoEn: "Book",
      opcoes: [
        { nome: "livro", imagemUrl: livro, correta: true },
        { nome: "água", imagemUrl: agua, correta: false },
        { nome: "maçã", imagemUrl: maca, correta: false },
      ],
      feedbackAcerto: 'Perfect! "Let\'s read!".',
      feedbackErro: '"Book" é livro pra ler.',
    },
    {
      tipo: "historiaEn",
      titulo: "I need help!",
      cenas: [
        { imagemUrl: agua, narracao: 'Lily: "Mom! I need water! I\'m thirsty!".' },
        { imagemUrl: livro, narracao: 'Tom: "I need a book! I want to read!".' },
        { imagemUrl: menina, narracao: '"Thank you, mommy! You\'re the best!".' },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: menino,
      convite:
        'Fala pra alguém da família AGORA (de verdade): "I need water, please!" ou "I need a hug!". Espera a resposta!',
      dica: "Pode combinar com o adulto antes.",
    },
    {
      tipo: "celebracao",
      medalha: "Polite Kid — I need",
      mascoteUrl: buddy,
      falaFinal: 'Awesome! Você já pede o que precisa em inglês!',
    },
  ],
};

export const n4Pre2_semana1 = {
  slug: "n4-semana-1",
  numero: 1,
  titulo: "Semana 1 — I want / I need",
  subtitulo: "Pedidos com educação",
  aulas: [n4S1A01, n4S1A02],
};
