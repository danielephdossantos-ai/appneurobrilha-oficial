import type { AulaIng } from "./types";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as avoM } from "@/assets/neuro-treino/objetos/avo-mulher.png.asset.json";
import { url as avoH } from "@/assets/neuro-treino/objetos/avo-homem.png.asset.json";
import { url as familia } from "@/assets/neuro-treino/objetos/familia-tradicional.png.asset.json";
import { url as abraco } from "@/assets/neuro-treino/objetos/abraco.png.asset.json";

/**
 * Inglês EI — Pré II · Nível 4 · Semana 3
 * "Tell me about…" — descrever pessoas. Frame: "She is tall!", "He is nice!".
 */

const n4S3A01: AulaIng = {
  slug: "n4-s3-a01-she-is-he-is",
  titulo: "She is nice! He is tall!",
  subtitulo: "Nível 4 · Semana 3 · Dia 1",
  icone: "👧",
  duracaoMin: 7,
  baseCientifica:
    "Pronomes gênero he/she (Slobin 1985) — Pré II já distingue e pode aplicar em L2 com apoio visual.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi! Hoje DESCREVEMOS pessoas. "She" é ELA. "He" é ELE. "She is nice!", "He is tall!".',
      legenda: "Aponta enquanto fala.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Escuta: "She" (ela), "He" (ele).',
      itens: [
        { en: "She", pt: "Ela", imagemUrl: menina },
        { en: "He", pt: "Ele", imagemUrl: menino },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"She is nice!". Toca na MENINA.',
      palavraAlvoEn: "She",
      opcoes: [
        { nome: "menina", imagemUrl: menina, correta: true },
        { nome: "menino", imagemUrl: menino, correta: false },
        { nome: "vovô", imagemUrl: avoH, correta: false },
      ],
      feedbackAcerto: 'Yes! "She is nice!". Ela é legal!',
      feedbackErro: '"She" é para meninas ou mulheres.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"He is tall!". Toca no MENINO.',
      palavraAlvoEn: "He",
      opcoes: [
        { nome: "menino", imagemUrl: menino, correta: true },
        { nome: "menina", imagemUrl: menina, correta: false },
        { nome: "vovó", imagemUrl: avoM, correta: false },
      ],
      feedbackAcerto: 'Right! "He is tall!". Ele é alto!',
      feedbackErro: '"He" é para meninos ou homens.',
    },
    {
      tipo: "historiaEn",
      titulo: "My friends",
      cenas: [
        { imagemUrl: menina, narracao: 'Lily: "She is my friend. She is nice!".' },
        { imagemUrl: menino, narracao: '"He is Tom. He is tall!".' },
        { imagemUrl: abraco, narracao: '"We\'re best friends!".' },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: familia,
      convite:
        'Aponta pra alguém da família e fala: "She is my mommy! She is nice!" ou "He is my daddy! He is tall!".',
      dica: "3 pessoas: 3 frases.",
    },
    {
      tipo: "celebracao",
      medalha: "Describer — She/He",
      mascoteUrl: buddy,
      falaFinal: 'Great! Você já descreve pessoas em inglês!',
    },
  ],
};

const n4S3A02: AulaIng = {
  slug: "n4-s3-a02-grandma-grandpa",
  titulo: "My grandma and grandpa!",
  subtitulo: "Nível 4 · Semana 3 · Dia 2",
  icone: "👵",
  duracaoMin: 7,
  baseCientifica:
    "Família estendida como vocabulário afetivo (Halliday 1975) — nomear avós em L2 aproxima gerações.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote: 'Hi! Hoje conhecemos "grandma" (vovó) e "grandpa" (vovô).',
      legenda: "Cadê seus avós?",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Escuta: "grandma" e "grandpa".',
      itens: [
        { en: "Grandma", pt: "Vovó", imagemUrl: avoM },
        { en: "Grandpa", pt: "Vovô", imagemUrl: avoH },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"She is my grandma!". Toca na VOVÓ.',
      palavraAlvoEn: "Grandma",
      opcoes: [
        { nome: "vovó", imagemUrl: avoM, correta: true },
        { nome: "vovô", imagemUrl: avoH, correta: false },
        { nome: "menina", imagemUrl: menina, correta: false },
      ],
      feedbackAcerto: 'Yes! "My grandma is nice!".',
      feedbackErro: '"Grandma" é a vovó.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"He is my grandpa!". Toca no VOVÔ.',
      palavraAlvoEn: "Grandpa",
      opcoes: [
        { nome: "vovô", imagemUrl: avoH, correta: true },
        { nome: "vovó", imagemUrl: avoM, correta: false },
        { nome: "menino", imagemUrl: menino, correta: false },
      ],
      feedbackAcerto: 'Right! "My grandpa is funny!".',
      feedbackErro: '"Grandpa" é o vovô.',
    },
    {
      tipo: "historiaEn",
      titulo: "Grandparents day",
      cenas: [
        { imagemUrl: avoM, narracao: 'Lily: "She is my grandma. She cooks cake!".' },
        { imagemUrl: avoH, narracao: '"He is my grandpa. He tells stories!".' },
        { imagemUrl: abraco, narracao: '"I love my grandma and grandpa!".' },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: familia,
      convite:
        'Se você tem avós, faz uma ligação de faz-de-conta: "Hi, grandma! I love you!" ou "Hi, grandpa!".',
      dica: "Pode ser numa foto.",
    },
    {
      tipo: "celebracao",
      medalha: "Describer — Grandparents",
      mascoteUrl: buddy,
      falaFinal: 'Awesome! Você já fala dos seus avós em inglês!',
    },
  ],
};

export const n4Pre2_semana3 = {
  slug: "n4-semana-3",
  numero: 3,
  titulo: "Semana 3 — Tell me about…",
  subtitulo: "She/He, grandma, grandpa",
  aulas: [n4S3A01, n4S3A02],
};
