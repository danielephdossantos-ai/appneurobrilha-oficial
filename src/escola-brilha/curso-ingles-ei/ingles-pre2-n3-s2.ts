import type { AulaIng } from "./types";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as alegre } from "@/assets/neuro-treino/objetos/quadro-alegre.png.asset.json";
import { url as triste } from "@/assets/neuro-treino/objetos/quadro-triste.png.asset.json";
import { url as surpreso } from "@/assets/neuro-treino/objetos/quadro-surpreso.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as abraco } from "@/assets/neuro-treino/objetos/abraco.png.asset.json";

/**
 * Inglês EI — Pré II · Nível 3 · Semana 2
 * "How do you feel?" — sentimentos. Frame: Q "How do you feel?" A "I feel happy!".
 */

const n3S2A01: AulaIng = {
  slug: "n3-s2-a01-happy-sad",
  titulo: "I feel happy! I feel sad!",
  subtitulo: "Nível 3 · Semana 2 · Dia 1",
  icone: "😊",
  duracaoMin: 7,
  baseCientifica:
    "Nomear emoções em L2 aumenta consciência socioemocional (Denham 1998) e cria ponte afetiva com a nova língua.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi! Hoje falamos dos SENTIMENTOS. "How do you feel?" — "I feel happy!" ou "I feel sad!".',
      legenda: "Faça a cara do sentimento.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Escuta: "happy" (feliz), "sad" (triste).',
      itens: [
        { en: "Happy", pt: "Feliz", imagemUrl: alegre },
        { en: "Sad", pt: "Triste", imagemUrl: triste },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"I feel happy!". Toca na cara FELIZ.',
      palavraAlvoEn: "Happy",
      opcoes: [
        { nome: "cara feliz", imagemUrl: alegre, correta: true },
        { nome: "cara triste", imagemUrl: triste, correta: false },
        { nome: "cara surpresa", imagemUrl: surpreso, correta: false },
      ],
      feedbackAcerto: 'Yes! "I feel happy!". Sorri!',
      feedbackErro: '"Happy" é sorrindo, feliz!',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"I feel sad.". Toca na cara TRISTE.',
      palavraAlvoEn: "Sad",
      opcoes: [
        { nome: "cara triste", imagemUrl: triste, correta: true },
        { nome: "cara feliz", imagemUrl: alegre, correta: false },
      ],
      feedbackAcerto: 'Right. "I feel sad.". Um abraço?',
      feedbackErro: '"Sad" é o rostinho triste.',
    },
    {
      tipo: "historiaEn",
      titulo: "Feelings today",
      cenas: [
        { imagemUrl: alegre, narracao: 'Lily ganha presente: "I feel happy!".' },
        { imagemUrl: triste, narracao: 'Tom perdeu o brinquedo: "I feel sad.".' },
        { imagemUrl: abraco, narracao: 'Lily abraça: "Don\'t be sad! Let\'s play!".' },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: menina,
      convite:
        'Faça 2 caras! Cara feliz e diz: "I feel happy!". Cara triste e diz: "I feel sad.". Agora, e AGORA como você se sente?',
      dica: "Não tem resposta certa — o importante é dizer.",
    },
    {
      tipo: "celebracao",
      medalha: "Feelings Friend — Happy/Sad",
      mascoteUrl: buddy,
      falaFinal: 'Great! Você já fala dos seus sentimentos em inglês!',
    },
  ],
};

const n3S2A02: AulaIng = {
  slug: "n3-s2-a02-angry-surprised",
  titulo: "Angry and surprised!",
  subtitulo: "Nível 3 · Semana 2 · Dia 2",
  icone: "😮",
  duracaoMin: 7,
  baseCientifica:
    "Expansão de repertório emocional em L2 (Pons et al. 2004) — mais palavras = mais regulação de sentimentos.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote: 'Hi! Mais dois sentimentos: "angry" (bravo) e "surprised" (surpreso)! 😮',
      legenda: "Cara de bravo e cara de surpresa!",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Escuta: "angry" e "surprised".',
      itens: [
        { en: "Angry", pt: "Bravo", imagemUrl: triste },
        { en: "Surprised", pt: "Surpreso", imagemUrl: surpreso },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"I feel surprised!". Toca na cara de SURPRESA.',
      palavraAlvoEn: "Surprised",
      opcoes: [
        { nome: "cara surpresa", imagemUrl: surpreso, correta: true },
        { nome: "cara feliz", imagemUrl: alegre, correta: false },
        { nome: "cara triste", imagemUrl: triste, correta: false },
      ],
      feedbackAcerto: 'Yes! "I feel surprised! Wow!". Boca aberta!',
      feedbackErro: '"Surprised" é cara de "UAU!".',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Revisão: "I feel happy!". Toca na cara FELIZ.',
      palavraAlvoEn: "Happy",
      opcoes: [
        { nome: "cara feliz", imagemUrl: alegre, correta: true },
        { nome: "cara surpresa", imagemUrl: surpreso, correta: false },
        { nome: "cara triste", imagemUrl: triste, correta: false },
      ],
      feedbackAcerto: 'Perfect! "I feel happy!".',
      feedbackErro: 'Feliz = "happy".',
    },
    {
      tipo: "historiaEn",
      titulo: "Big surprise",
      cenas: [
        { imagemUrl: surpreso, narracao: 'Lily abre o presente: "Wow! I feel surprised!".' },
        { imagemUrl: alegre, narracao: '"It\'s a puppy! I feel happy!".' },
        { imagemUrl: abraco, narracao: '"Thank you, mommy! I love it!".' },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: menino,
      convite:
        'Vira "Feelings Master"! Faz as 4 caras: "happy", "sad", "angry", "surprised". Fala cada uma bem alto!',
      dica: "Pode fazer no espelho.",
    },
    {
      tipo: "celebracao",
      medalha: "Feelings Master — 4 emotions",
      mascoteUrl: buddy,
      falaFinal: 'Amazing! Você já sabe 4 sentimentos em inglês! You\'re a Feelings Master!',
    },
  ],
};

export const n3Pre2_semana2 = {
  slug: "n3-semana-2",
  numero: 2,
  titulo: "Semana 2 — How do you feel?",
  subtitulo: "Happy, sad, angry, surprised",
  aulas: [n3S2A01, n3S2A02],
};
