import type { AulaIng } from "./types";
import { url as brilha } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as bolo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as suco } from "@/assets/neuro-treino/objetos/suco.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";

/**
 * Inglês EI — Maternal · Nível 4 · Semana 2
 * "I like…" — expressando preferências.
 *
 * Estrutura fixa: pergunta ("Do you like…?") → resposta ("Yes, I do!" /
 * "I like…"). Primeiro passo da fala afirmativa própria.
 */

const n4S2A01: AulaIng = {
  slug: "n4-s2-a01-i-like-food",
  titulo: "I like apple!",
  subtitulo: "Nível 4 · Semana 2 · Dia 1",
  icone: "🍎",
  duracaoMin: 6,
  baseCientifica:
    "Frames afetivos ('I like…') ativam engajamento emocional, aumentando retenção lexical (Immordino-Yang 2016).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Hi! Hoje a gente vai dizer o que a gente GOSTA em inglês. Eu falo: "I like apple!". Você fala igual: "I like banana!", "I like cake!".',
      legenda: "Esfregue a barriga ao dizer 'I like'.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Escuta: "I like apple", "I like banana", "I like cake".',
      itens: [
        { en: "I like apple", pt: "Eu gosto de maçã", imagemUrl: maca },
        { en: "I like banana", pt: "Eu gosto de banana", imagemUrl: banana },
        { en: "I like cake", pt: "Eu gosto de bolo", imagemUrl: bolo },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"I like apple!". Toca na "apple".',
      palavraAlvoEn: "Apple",
      opcoes: [
        { nome: "maçã", imagemUrl: maca, correta: true },
        { nome: "banana", imagemUrl: banana, correta: false },
        { nome: "bolo", imagemUrl: bolo, correta: false },
      ],
      feedbackAcerto: 'Yes! "I like apple!". Vermelhinha!',
      feedbackErro: '"Apple" é a maçã redondinha.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"I like cake!". Toca no "cake".',
      palavraAlvoEn: "Cake",
      opcoes: [
        { nome: "bolo", imagemUrl: bolo, correta: true },
        { nome: "maçã", imagemUrl: maca, correta: false },
        { nome: "suco", imagemUrl: suco, correta: false },
      ],
      feedbackAcerto: 'Yummy! "I like cake!".',
      feedbackErro: 'O "cake" é o bolo doce.',
    },
    {
      tipo: "historiaEn",
      titulo: "Snack time!",
      cenas: [
        {
          imagemUrl: menina,
          narracao: 'Lily olha pro lanche e diz: "I like apple!". Ela come feliz.',
        },
        {
          imagemUrl: menino,
          narracao: 'Tom pega o dele e fala: "I like banana!". Yummy!',
        },
        {
          imagemUrl: bolo,
          narracao: 'No fim, todo mundo grita junto: "I like cake!". Que lanche gostoso!',
        },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: maca,
      convite:
        'Aponta pra 3 comidinhas na cozinha. Pra cada uma, fala: "I like __!" (banana, apple, cake, ou qualquer coisa que gostar).',
      dica: "Vale usar comidinha de brinquedo.",
    },
    {
      tipo: "celebracao",
      medalha: "Little Talker — I Like",
      mascoteUrl: brilha,
      falaFinal:
        'Yummy! Você já diz o que gosta em inglês: "I like apple!". You are a talker!',
    },
  ],
};

const n4S2A02: AulaIng = {
  slug: "n4-s2-a02-do-you-like",
  titulo: "Do you like…?",
  subtitulo: "Nível 4 · Semana 2 · Dia 2",
  icone: "❓",
  duracaoMin: 6,
  baseCientifica:
    "Respostas curtas ('Yes, I do!' / 'No, I don\\'t!') ancoram o par pergunta-resposta antes da produção livre (Cameron 2001).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Hi! Hoje eu pergunto e você responde. "Do you like apple?". Se gostar: "Yes, I do!". Se não gostar: "No, I don\'t!".',
      legenda: "Balance a cabeça sim ou não junto com a resposta.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Escuta as respostas: "Yes, I do!" e "No, I don\'t!".',
      itens: [
        { en: "Yes, I do", pt: "Sim, eu gosto", imagemUrl: menina },
        { en: "No, I don't", pt: "Não, eu não gosto", imagemUrl: menino },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Do you like dog?". Se você gosta, toca no "dog"!',
      palavraAlvoEn: "Dog",
      opcoes: [
        { nome: "cachorro", imagemUrl: cachorro, correta: true },
        { nome: "gato", imagemUrl: gato, correta: false },
        { nome: "maçã", imagemUrl: maca, correta: false },
      ],
      feedbackAcerto: 'Yes! "I like dog! Woof woof!".',
      feedbackErro: 'O "dog" é o cachorrinho.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Do you like banana?". Toca na "banana"!',
      palavraAlvoEn: "Banana",
      opcoes: [
        { nome: "banana", imagemUrl: banana, correta: true },
        { nome: "bolo", imagemUrl: bolo, correta: false },
        { nome: "suco", imagemUrl: suco, correta: false },
      ],
      feedbackAcerto: 'Yes, I do! "I like banana!".',
      feedbackErro: 'A "banana" é a amarelinha.',
    },
    {
      tipo: "historiaEn",
      titulo: "The picky cat",
      cenas: [
        {
          imagemUrl: gato,
          narracao: 'A "cat" olha o lanche. Lily pergunta: "Do you like cake?".',
        },
        {
          imagemUrl: bolo,
          narracao: 'A cat cheira o bolo e faz cara feia: "No, I don\'t!". Ela não gosta!',
        },
        {
          imagemUrl: suco,
          narracao: 'Lily pergunta: "Do you like milk?". A cat sorri: "Yes, I do!". Ela adora leite!',
        },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: menina,
      convite:
        'Sua vez! O adulto pergunta: "Do you like apple?", "Do you like banana?", "Do you like cake?". Você responde: "Yes, I do!" ou "No, I don\'t!".',
      dica: "Faça pelo menos 3 perguntas seguidas.",
    },
    {
      tipo: "celebracao",
      medalha: "Little Talker — Yes I Do",
      mascoteUrl: brilha,
      falaFinal:
        'Yes, you do! Você já responde perguntas em inglês. Big talker!',
    },
  ],
};

export const n4Maternal_semana2 = {
  slug: "n4-semana-2",
  numero: 2,
  titulo: "Semana 2 — I like…",
  subtitulo: "Preferências: dizer e responder o que gosta",
  aulas: [n4S2A01, n4S2A02],
};
