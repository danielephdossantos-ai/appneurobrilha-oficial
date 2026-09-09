import type { AulaIng } from "./types";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as parque } from "@/assets/neuro-treino/objetos/parque.png.asset.json";
import { url as escola } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as caixa } from "@/assets/neuro-treino/objetos/caixa.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as cadeira } from "@/assets/neuro-treino/objetos/cadeira.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";

/**
 * Inglês EI — Pré I · Nível 4 · Semana 3
 * "Where is it?" — localização básica. Frame: "It's in the box." / "It's on the chair.".
 */

const n4S3A01: AulaIng = {
  slug: "n4-s3-a01-where-places",
  titulo: "Where are you?",
  subtitulo: "Nível 4 · Semana 3 · Dia 1",
  icone: "📍",
  duracaoMin: 7,
  baseCientifica:
    "Preposições básicas 'in/on/at' emergem cedo em L2 quando ancoradas em espaços conhecidos (Choi & Bowerman 1991).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi! Hoje é "Where?" — "onde?". "Where are you? I\'m at home!", "I\'m at school!", "I\'m at the park!".',
      legenda: "Aponte pra onde você está agora.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca: "home" (casa), "school" (escola), "park" (parque).',
      itens: [
        { en: "Home", pt: "Casa", imagemUrl: casa },
        { en: "School", pt: "Escola", imagemUrl: escola },
        { en: "Park", pt: "Parque", imagemUrl: parque },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Where are you? I\'m at home!". Toca na casa.',
      palavraAlvoEn: "Home",
      opcoes: [
        { nome: "casa", imagemUrl: casa, correta: true },
        { nome: "escola", imagemUrl: escola, correta: false },
        { nome: "parque", imagemUrl: parque, correta: false },
      ],
      feedbackAcerto: 'Yes! "I\'m at home!".',
      feedbackErro: '"Home" é a casa da gente.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"I\'m at the park!". Toca no parquinho.',
      palavraAlvoEn: "Park",
      opcoes: [
        { nome: "parque", imagemUrl: parque, correta: true },
        { nome: "casa", imagemUrl: casa, correta: false },
        { nome: "escola", imagemUrl: escola, correta: false },
      ],
      feedbackAcerto: 'Perfect! "I\'m at the park!". Balanço, escorrega!',
      feedbackErro: '"Park" é o parquinho com brinquedos.',
    },
    {
      tipo: "historiaEn",
      titulo: "Where is Lily?",
      cenas: [
        { imagemUrl: casa, narracao: 'De manhã Lily está em casa: "I\'m at home!".' },
        { imagemUrl: escola, narracao: 'Depois: "I\'m at school!". Estudar, brincar.' },
        { imagemUrl: parque, narracao: 'Fim do dia: "I\'m at the park!". Yay!' },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: casa,
      convite:
        'Faça um mapinha no ar com o dedo. Aponta pra cada lugar e fala: "I\'m at home!", "I go to school!", "I play at the park!".',
      dica: "3 lugares, 3 gestos.",
    },
    {
      tipo: "celebracao",
      medalha: "Little Storyteller — Places",
      mascoteUrl: buddy,
      falaFinal: 'Great! Você já diz ONDE está em inglês. 3 lugares importantes!',
    },
  ],
};

const n4S3A02: AulaIng = {
  slug: "n4-s3-a02-in-on-under",
  titulo: "In, on, under",
  subtitulo: "Nível 4 · Semana 3 · Dia 2",
  icone: "📦",
  duracaoMin: 7,
  baseCientifica:
    "Preposições espaciais fixam melhor com objetos concretos manipuláveis (Piaget 1954). A caixa e a bola bastam.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi! Hoje é a brincadeira da bolinha! "In the box" = dentro da caixa. "On the chair" = em cima da cadeira. "Under the chair" = embaixo!',
      legenda: "Se tiver caixa e bola em casa, pega!",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca: "in the box" (dentro da caixa), "on the chair" (em cima), "under" (embaixo).',
      itens: [
        { en: "In the box", pt: "Dentro da caixa", imagemUrl: caixa },
        { en: "On the chair", pt: "Em cima da cadeira", imagemUrl: cadeira },
        { en: "Under", pt: "Embaixo", imagemUrl: gato },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Where is the ball? It\'s IN the box!". Toca na caixa.',
      palavraAlvoEn: "In the box",
      opcoes: [
        { nome: "caixa", imagemUrl: caixa, correta: true },
        { nome: "cadeira", imagemUrl: cadeira, correta: false },
        { nome: "gato", imagemUrl: gato, correta: false },
      ],
      feedbackAcerto: 'Yes! "The ball is IN the box!".',
      feedbackErro: '"In" é dentro. Toca na caixa.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Where is the ball? It\'s ON the chair!". Toca na cadeira.',
      palavraAlvoEn: "On the chair",
      opcoes: [
        { nome: "cadeira", imagemUrl: cadeira, correta: true },
        { nome: "caixa", imagemUrl: caixa, correta: false },
        { nome: "bola", imagemUrl: bola, correta: false },
      ],
      feedbackAcerto: 'Perfect! "ON the chair!". Em cima!',
      feedbackErro: '"On" é em cima. Toca na cadeira.',
    },
    {
      tipo: "historiaEn",
      titulo: "Where is the ball?",
      cenas: [
        { imagemUrl: caixa, narracao: 'Lily procura a bola. "Where is the ball?". Ela olha na caixa: "It\'s IN the box!".' },
        { imagemUrl: cadeira, narracao: 'Ah não! Sumiu de novo! Agora está "ON the chair!".' },
        { imagemUrl: gato, narracao: 'O gatinho pegou! Agora a bola está UNDER the chair, com o gato!' },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: bola,
      convite:
        'Brinca de esconder! Peça o adulto pra esconder um brinquedo. Você pergunta: "Where is it?". Ele responde: "It\'s in the box!" ou "on the chair!" ou "under the chair!".',
      dica: "3 rodadas mínimo. Troca de esconder depois.",
    },
    {
      tipo: "celebracao",
      medalha: "Little Storyteller — Where",
      mascoteUrl: buddy,
      falaFinal: 'Wow! Você já diz ONDE as coisas estão: "in", "on", "under"!',
    },
  ],
};

export const n4Pre1_semana3 = {
  slug: "n4-semana-3",
  numero: 3,
  titulo: "Semana 3 — Where is it?",
  subtitulo: "Lugares, in/on/under, procurar e achar",
  aulas: [n4S3A01, n4S3A02],
};
