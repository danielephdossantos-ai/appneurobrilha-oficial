import type { AulaIng, UnidadeIng } from "./types";
import { url as brilha } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import appleRed from "@/assets/ingles-ei/n1-colors/apple-red.png";
import banana from "@/assets/ingles-ei/n1-week2/banana.png";
import orange from "@/assets/ingles-ei/n1-week2/orange.png";
import grape from "@/assets/ingles-ei/n1-week2/grape.png";

/**
 * Nível 1 · Semana 2 — Fruits
 * 2 palavras/aula, esqueleto leve (boasVindas → vocab x2 → escolha x2 → fazDeConta → celebracao).
 * Recicla "apple" da semana 1 na aula 2 pra reforço espaçado (Ellis 2003).
 */

const n1S2A01: AulaIng = {
  slug: "n1-s2-a01-apple-banana",
  titulo: "Apple & Banana",
  subtitulo: "Nível 1 · Semana 2 · Dia 1",
  icone: "🍎",
  duracaoMin: 4,
  baseCientifica:
    "Vocabulário concreto do cotidiano (comida) tem alta memorabilidade em L2 inicial (Nation 2001). 2 palavras + repetição 4x.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Hi, baby! Hoje frutinhas: "apple" e "banana". "Apple" é maçã, "banana" é banana.',
      legenda: "Se tiver uma fruta perto, aponta enquanto ouve.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca na maçã: "apple". Toca na banana: "banana".',
      itens: [
        { en: "Apple", pt: "Maçã", imagemUrl: appleRed },
        { en: "Banana", pt: "Banana", imagemUrl: banana },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Repete alto comigo: "apple"… "banana".',
      itens: [
        { en: "Apple", pt: "Maçã", imagemUrl: appleRed },
        { en: "Banana", pt: "Banana", imagemUrl: banana },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toca no que é "apple".',
      palavraAlvoEn: "Apple",
      opcoes: [
        { nome: "maçã", imagemUrl: appleRed, correta: true },
        { nome: "banana", imagemUrl: banana, correta: false },
      ],
      feedbackAcerto: 'Yes! Essa é a "apple".',
      feedbackErro: '"Apple" é a maçã, redondinha. Tenta de novo.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Agora toca no que é "banana".',
      palavraAlvoEn: "Banana",
      opcoes: [
        { nome: "banana", imagemUrl: banana, correta: true },
        { nome: "maçã", imagemUrl: appleRed, correta: false },
      ],
      feedbackAcerto: 'Yes! "Banana" é amarela e comprida.',
      feedbackErro: '"Banana" é a amarela. Toca nela.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: banana,
      convite:
        'Faz de conta que tá comendo! Segura uma "apple" imaginária e diz "yum, apple!". Depois uma "banana" e diz "yum, banana!".',
      dica: "Vale usar as mãos como se estivesse mordendo.",
    },
    {
      tipo: "celebracao",
      medalha: "Baby Fruits — Apple & Banana",
      mascoteUrl: brilha,
      falaFinal: 'Yay! Você já sabe pedir "apple" e "banana" em inglês!',
    },
  ],
};

const n1S2A02: AulaIng = {
  slug: "n1-s2-a02-orange-grape",
  titulo: "Orange & Grape",
  subtitulo: "Nível 1 · Semana 2 · Dia 2",
  icone: "🍊",
  duracaoMin: 4,
  baseCientifica:
    "Reciclagem: 'apple' e 'banana' reaparecem na escolha final (repetição espaçada).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Hi again! Mais 2 frutinhas: "orange" e "grape". "Orange" é laranja, "grape" é uva.',
      legenda: "Aponta pra algo laranja ou roxo perto de você.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca na laranja: "orange". Toca na uva: "grape".',
      itens: [
        { en: "Orange", pt: "Laranja", imagemUrl: orange },
        { en: "Grape", pt: "Uva", imagemUrl: grape },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Repete comigo: "orange"… "grape".',
      itens: [
        { en: "Orange", pt: "Laranja", imagemUrl: orange },
        { en: "Grape", pt: "Uva", imagemUrl: grape },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toca no que é "orange".',
      palavraAlvoEn: "Orange",
      opcoes: [
        { nome: "laranja", imagemUrl: orange, correta: true },
        { nome: "uva", imagemUrl: grape, correta: false },
      ],
      feedbackAcerto: 'Yes! Essa é a "orange".',
      feedbackErro: '"Orange" é a laranja, cor de laranja. Toca nela.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Agora toca no que é "grape".',
      palavraAlvoEn: "Grape",
      opcoes: [
        { nome: "uva", imagemUrl: grape, correta: true },
        { nome: "maçã", imagemUrl: appleRed, correta: false },
        { nome: "banana", imagemUrl: banana, correta: false },
      ],
      feedbackAcerto: 'Yes! "Grape" é a uva roxinha.',
      feedbackErro: '"Grape" é a uva. Toca no cacho roxo.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: grape,
      convite:
        'Fala alto o nome de todas as frutas: "apple"… "banana"… "orange"… "grape"!',
      dica: "Se lembrar 2 já é vitória. Amanhã treina de novo.",
    },
    {
      tipo: "celebracao",
      medalha: "Baby Fruits — Fruit Salad Star",
      mascoteUrl: brilha,
      falaFinal:
        'Congratulations! 4 frutas em inglês: "apple", "banana", "orange", "grape". You are a Fruit Star!',
    },
  ],
};

export const n1Semana2: UnidadeIng = {
  slug: "n1-semana-2",
  numero: 2,
  titulo: "Semana 2 — Fruits",
  subtitulo: "Só frutinhas: apple, banana, orange, grape",
  aulas: [n1S2A01, n1S2A02],
};
