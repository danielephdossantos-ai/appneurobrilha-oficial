import type { AulaIng } from "./types";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as num3 } from "@/assets/banco-midias/numeros/numero-3.png.asset.json";
import { url as num4 } from "@/assets/banco-midias/numeros/numero-4.png.asset.json";
import { url as num5 } from "@/assets/banco-midias/numeros/numero-5.png.asset.json";
import { url as num2 } from "@/assets/banco-midias/numeros/numero-2.png.asset.json";
import { url as num6 } from "@/assets/banco-midias/numeros/numero-6.png.asset.json";

/**
 * Inglês EI — Pré I · Nível 3 · Semana 1
 * "I Can Say — How old are you?"
 *
 * Frame fixo: Q: "How old are you?"  A: "I'm three/four/five."
 * Pré I é 4–5 anos, então a resposta central é "I'm four" ou "I'm five".
 * Números já vistos no N2/S2 são reciclados para focar na estrutura
 * (Nation 2001; Ellis 2003).
 */

const n3S1A01: AulaIng = {
  slug: "n3-s1-a01-how-old-3-4",
  titulo: "How old are you? — three & four",
  subtitulo: "Nível 3 · Semana 1 · Dia 1",
  icone: "🎂",
  duracaoMin: 6,
  baseCientifica:
    "Formulaic language ('I'm ___') como rota rápida de produção precoce em L2 (Ellis 2003). Reciclagem de números do N2 reduz carga.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, friend! Teacher Buddy aqui. Hoje eu vou perguntar: "How old are you?". Isso quer dizer "Quantos anos você tem?". A resposta é fácil: "I\'m three!" ou "I\'m four!".',
      legenda: "Mostre com os dedinhos quantos anos você tem.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio:
        'Toca em cada figura e escuta: "three" (três velinhas), "four" (quatro velinhas).',
      itens: [
        { en: "Three", pt: "Três", imagemUrl: num3 },
        { en: "Four", pt: "Quatro", imagemUrl: num4 },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio:
        '"How old are you? I\'m… three!". Toca no bolinho com TRÊS velinhas.',
      palavraAlvoEn: "Three",
      opcoes: [
        { nome: "três", imagemUrl: num3, correta: true },
        { nome: "quatro", imagemUrl: num4, correta: false },
        { nome: "coração", imagemUrl: num2, correta: false },
      ],
      feedbackAcerto: 'Yes! "I\'m three!". Três dedinhos!',
      feedbackErro: 'Escuta de novo: "three" é 1, 2, 3.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"How old are you? I\'m… four!". Toca no que mostra QUATRO.',
      palavraAlvoEn: "Four",
      opcoes: [
        { nome: "quatro balões", imagemUrl: num4, correta: true },
        { nome: "três", imagemUrl: num3, correta: false },
        { nome: "num5", imagemUrl: num5, correta: false },
      ],
      feedbackAcerto: 'Perfect! "I\'m four!". Quatro dedinhos!',
      feedbackErro: '"Four" é 1, 2, 3, 4. Mostra 4 dedinhos.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio:
        'E você? Quantos anos você tem? Toca no número certo pra você.',
      palavraAlvoEn: "I'm",
      opcoes: [
        { nome: "quatro", imagemUrl: num4, correta: true },
        { nome: "três", imagemUrl: num3, correta: false },
        { nome: "num6", imagemUrl: num6, correta: false },
      ],
      feedbackAcerto: 'Great! Fala alto: "I\'m four!".',
      feedbackErro: 'Sem problema. Fala com a família e escolhe de novo.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: num3,
      convite:
        'Sua vez! Mostra os dedinhos da sua idade e fala bem alto: "I\'m three!" ou "I\'m four!". Como se fosse uma festinha!',
      dica: "Vale bater palma no ritmo: I'm — four!",
    },
    {
      tipo: "celebracao",
      medalha: "I Can Say — My Age",
      mascoteUrl: buddy,
      falaFinal:
        'Amazing! Você já responde: "I\'m three!" ou "I\'m four!". You can say!',
    },
  ],
};

const n3S1A02: AulaIng = {
  slug: "n3-s1-a02-how-old-5-friends",
  titulo: "How old are you? — five & friends",
  subtitulo: "Nível 3 · Semana 1 · Dia 2",
  icone: "🖐️",
  duracaoMin: 6,
  baseCientifica:
    "Consolidação do frame com ampliação (five) e transferência a terceiros ('He is / She is') — extensão gradual da estrutura (DeKeyser 2007).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi again! Hoje entra um número novo: "five" — CINCO! High five! ✋. Se você tem 5 anos: "I\'m five!".',
      legenda: "Bata um high five com quem estiver perto.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca e escuta: "three", "four", "five".',
      itens: [
        { en: "Three", pt: "Três", imagemUrl: num3 },
        { en: "Four", pt: "Quatro", imagemUrl: num4 },
        { en: "Five", pt: "Cinco", imagemUrl: num5 },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"How old are you? I\'m… five!". Toca na estrelinha de CINCO pontas.',
      palavraAlvoEn: "Five",
      opcoes: [
        { nome: "cinco", imagemUrl: num5, correta: true },
        { nome: "quatro", imagemUrl: num4, correta: false },
        { nome: "três", imagemUrl: num3, correta: false },
      ],
      feedbackAcerto: 'Yes! "I\'m five!". High five! ✋',
      feedbackErro: 'A estrelinha tem 5 pontinhas. Isso é "five".',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio:
        'Um amigo tem 4 anos. Ele diz: "I\'m… four!". Toca no QUATRO.',
      palavraAlvoEn: "Four",
      opcoes: [
        { nome: "quatro", imagemUrl: num4, correta: true },
        { nome: "cinco", imagemUrl: num5, correta: false },
        { nome: "três", imagemUrl: num3, correta: false },
      ],
      feedbackAcerto: 'Perfect! "He is four!".',
      feedbackErro: '"Four" — 1, 2, 3, 4 balõezinhos.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio:
        'E a irmãzinha bebê? "I\'m… three!". Toca no bolinho de TRÊS velinhas.',
      palavraAlvoEn: "Three",
      opcoes: [
        { nome: "três", imagemUrl: num3, correta: true },
        { nome: "cinco", imagemUrl: num5, correta: false },
        { nome: "quatro", imagemUrl: num4, correta: false },
      ],
      feedbackAcerto: 'Great! "She is three!".',
      feedbackErro: '"Three" — mostra 3 dedinhos.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: num5,
      convite:
        'Pergunta pra alguém da família: "How old are you?". Depois responde a sua: "I\'m four!" ou "I\'m five!". Termina com high five! ✋',
      dica: "Vale perguntar até pro pelúcia.",
    },
    {
      tipo: "celebracao",
      medalha: "I Can Say — High Five",
      mascoteUrl: buddy,
      falaFinal:
        'Excellent! Você já pergunta E responde: "How old are you? I\'m five!". High five, star!',
    },
  ],
};

export const n3Pre1_semana1 = {
  slug: "n3-semana-1",
  numero: 1,
  titulo: "Semana 1 — How old are you?",
  subtitulo: "Primeira pergunta pessoal + resposta 'I'm ___'",
  aulas: [n3S1A01, n3S1A02],
};
