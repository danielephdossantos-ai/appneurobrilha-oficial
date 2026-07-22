import type { AulaIng } from "./types";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as nuvem } from "@/assets/neuro-treino/objetos/nuvem.png.asset.json";
import { url as arcoIris } from "@/assets/neuro-treino/objetos/arco-iris.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";

/**
 * Inglês EI — Pré II · Nível 3 · Semana 1
 * "How's the weather?" — clima. Frame: Q "How's the weather?" A "It's sunny!".
 */

const n3S1A01: AulaIng = {
  slug: "n3-s1-a01-sunny-rainy",
  titulo: "It's sunny! It's rainy!",
  subtitulo: "Nível 3 · Semana 1 · Dia 1",
  icone: "☀️",
  duracaoMin: 7,
  baseCientifica:
    "Chunks funcionais fixos (Wray 2002): 'It's + adj' fica pronto para uso automático em conversação diária.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, friend! Hoje vamos falar do CLIMA em inglês. Toda manhã dá pra perguntar: "How\'s the weather?".',
      legenda: "Olhe pela janela antes.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca e escuta: "sunny" (ensolarado), "rainy" (chuvoso).',
      itens: [
        { en: "Sunny", pt: "Ensolarado", imagemUrl: sol },
        { en: "Rainy", pt: "Chuvoso", imagemUrl: chuva },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"How\'s the weather? It\'s sunny!". Toca no SOL.',
      palavraAlvoEn: "Sunny",
      opcoes: [
        { nome: "sol", imagemUrl: sol, correta: true },
        { nome: "chuva", imagemUrl: chuva, correta: false },
        { nome: "nuvem", imagemUrl: nuvem, correta: false },
      ],
      feedbackAcerto: 'Yes! "It\'s sunny!". Coloca o chapéu!',
      feedbackErro: '"Sunny" é o SOL brilhando.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"It\'s rainy!". Toca na CHUVA.',
      palavraAlvoEn: "Rainy",
      opcoes: [
        { nome: "chuva", imagemUrl: chuva, correta: true },
        { nome: "sol", imagemUrl: sol, correta: false },
        { nome: "arco-íris", imagemUrl: arcoIris, correta: false },
      ],
      feedbackAcerto: 'Right! "It\'s rainy!". Pega o guarda-chuva!',
      feedbackErro: '"Rainy" é a chuva caindo.',
    },
    {
      tipo: "historiaEn",
      titulo: "Weather day",
      cenas: [
        { imagemUrl: sol, narracao: 'De manhã: "Look! It\'s sunny! Let\'s play outside!".' },
        { imagemUrl: chuva, narracao: 'À tarde: "Oh! It\'s rainy! Come inside!".' },
        { imagemUrl: arcoIris, narracao: 'Depois: "Wow! A rainbow! Beautiful!".' },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: menina,
      convite:
        'Olha pela janela AGORA e responde: "How\'s the weather today?" — "It\'s sunny!" ou "It\'s rainy!".',
      dica: "Fala 3 vezes bem alto.",
    },
    {
      tipo: "celebracao",
      medalha: "Weather Reporter — Sunny/Rainy",
      mascoteUrl: buddy,
      falaFinal: 'Great job! Você já sabe falar do tempo em inglês: "It\'s sunny! It\'s rainy!".',
    },
  ],
};

const n3S1A02: AulaIng = {
  slug: "n3-s1-a02-cloudy-snowy",
  titulo: "Cloudy and snowy!",
  subtitulo: "Nível 3 · Semana 1 · Dia 2",
  icone: "☁️",
  duracaoMin: 7,
  baseCientifica:
    "Expansão gradual de vocabulário temático (Nation 2001) — depois de 2 palavras dominadas, adicionar 2 novas mantém a carga cognitiva viável.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote: 'Hi again! Hoje mais dois climas: "cloudy" (nublado) e "snowy" (com neve). Brrr!',
      legenda: "Faz cara de frio na hora de 'snowy'.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Escuta e repete: "cloudy" e "snowy".',
      itens: [
        { en: "Cloudy", pt: "Nublado", imagemUrl: nuvem },
        { en: "Snowy", pt: "Com neve", imagemUrl: nuvem },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"It\'s cloudy!". Toca na NUVEM.',
      palavraAlvoEn: "Cloudy",
      opcoes: [
        { nome: "nuvem", imagemUrl: nuvem, correta: true },
        { nome: "sol", imagemUrl: sol, correta: false },
        { nome: "chuva", imagemUrl: chuva, correta: false },
      ],
      feedbackAcerto: 'Yes! "It\'s cloudy!". Cadê o sol?',
      feedbackErro: '"Cloudy" é o céu com nuvens.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"How\'s the weather?". Escolhe: sol ou chuva? Toca no SOL.',
      palavraAlvoEn: "Sunny",
      opcoes: [
        { nome: "sol", imagemUrl: sol, correta: true },
        { nome: "chuva", imagemUrl: chuva, correta: false },
        { nome: "nuvem", imagemUrl: nuvem, correta: false },
      ],
      feedbackAcerto: 'Perfect! "It\'s sunny!".',
      feedbackErro: 'Sol = "sunny".',
    },
    {
      tipo: "historiaEn",
      titulo: "Four weathers",
      cenas: [
        { imagemUrl: sol, narracao: 'Segunda: "It\'s sunny!".' },
        { imagemUrl: chuva, narracao: 'Terça: "It\'s rainy!".' },
        { imagemUrl: nuvem, narracao: 'Quarta: "It\'s cloudy!".' },
        { imagemUrl: arcoIris, narracao: '"Wow! Look at the rainbow!".' },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: menino,
      convite:
        'Vira "Weather Reporter"! Faz de conta que está na TV: "Hello! Today it\'s sunny! Tomorrow it\'s rainy!". Fala com voz de repórter!',
      dica: "Segura um microfone imaginário.",
    },
    {
      tipo: "celebracao",
      medalha: "Weather Reporter — 4 seasons",
      mascoteUrl: buddy,
      falaFinal: 'Awesome! Você é um "weather reporter" oficial em inglês!',
    },
  ],
};

export const n3Pre2_semana1 = {
  slug: "n3-semana-1",
  numero: 1,
  titulo: "Semana 1 — How's the weather?",
  subtitulo: "Sunny, rainy, cloudy, snowy",
  aulas: [n3S1A01, n3S1A02],
};
