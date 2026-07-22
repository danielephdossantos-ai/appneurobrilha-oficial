import type { AulaIng, NivelIng } from "./types";
import { n1Semana2 } from "./ingles-maternal-n1-s2";
import { n1Semana3 } from "./ingles-maternal-n1-s3";
import { n1Semana4 } from "./ingles-maternal-n1-s4";
import { url as brilha } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import appleRed from "@/assets/ingles-ei/n1-colors/apple-red.png";
import ballBlue from "@/assets/ingles-ei/n1-colors/ball-blue.png";
import sunYellow from "@/assets/ingles-ei/n1-colors/sun-yellow.png";
import frogGreen from "@/assets/ingles-ei/n1-colors/frog-green.png";

/**
 * Inglês EI — Maternal · Nível 1 · Baby English (3 anos+)
 *
 * Recomeço do zero, mais leve que o Nível 2:
 *  - 2 palavras novas por aula (não 3).
 *  - Sem música, sem história, sem missão em família.
 *  - 5 momentos: boasVindas → vocab (2 itens) → escolhaImagem →
 *    fazDeConta → celebracao.
 *  - Cada palavra reaparece 4x na mesma aula.
 *
 * Semana 1 · COLORS — só cores (red, blue, yellow, green).
 * 2 aulas de 4–5 minutos.
 */

// ============================================================
// AULA 01 — Red & Blue
// ============================================================
const n1S1A01: AulaIng = {
  slug: "n1-s1-a01-red-blue",
  titulo: "Red & Blue",
  subtitulo: "Nível 1 · Semana 1 · Dia 1",
  icone: "🔴",
  duracaoMin: 4,
  baseCientifica:
    "Aquisição inicial (Krashen — input compreensível). 2 palavras/aula com repetição 4x mantém carga cognitiva compatível com 3 anos (Cowan 2010).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Hi, baby! Hoje só duas palavras: "red" e "blue". "Red" é vermelho, "blue" é azul.',
      legenda: "Aponte para algo vermelho e algo azul enquanto ouve.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca na maçã e escuta: "red". Toca na bola e escuta: "blue".',
      itens: [
        { en: "Red", pt: "Vermelho", imagemUrl: appleRed },
        { en: "Blue", pt: "Azul", imagemUrl: ballBlue },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Uma vez mais, agora repete alto: "red"… "blue".',
      itens: [
        { en: "Red", pt: "Vermelho", imagemUrl: appleRed },
        { en: "Blue", pt: "Azul", imagemUrl: ballBlue },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toca no que é "red".',
      palavraAlvoEn: "Red",
      opcoes: [
        { nome: "maçã vermelha", imagemUrl: appleRed, correta: true },
        { nome: "bola azul", imagemUrl: ballBlue, correta: false },
      ],
      feedbackAcerto: 'Yes! A maçã é "red".',
      feedbackErro: 'Escuta de novo: "red" é vermelho. Toca na maçã.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Agora toca no que é "blue".',
      palavraAlvoEn: "Blue",
      opcoes: [
        { nome: "bola azul", imagemUrl: ballBlue, correta: true },
        { nome: "maçã vermelha", imagemUrl: appleRed, correta: false },
      ],
      feedbackAcerto: 'Yes! A bola é "blue".',
      feedbackErro: '"Blue" é azul. Toca na bola.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: appleRed,
      convite:
        'Agora sua vez! Aponte para uma coisa vermelha na sua casa e diga "red!". Depois algo azul e diga "blue!".',
      dica: "Vale roupa, brinquedo, almofada — o que estiver perto.",
    },
    {
      tipo: "celebracao",
      medalha: "Baby Colors — Red & Blue",
      mascoteUrl: brilha,
      falaFinal: 'Você já sabe duas cores: "red" e "blue". Yay!',
    },
  ],
};

// ============================================================
// AULA 02 — Yellow & Green
// ============================================================
const n1S1A02: AulaIng = {
  slug: "n1-s1-a02-yellow-green",
  titulo: "Yellow & Green",
  subtitulo: "Nível 1 · Semana 1 · Dia 2",
  icone: "🟡",
  duracaoMin: 4,
  baseCientifica:
    "Reciclagem: 'red'/'blue' voltam na escolha para reforçar (repetição espaçada, Ellis 2003).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Hi again! Hoje mais duas cores: "yellow" e "green". "Yellow" é amarelo, "green" é verde.',
      legenda: "Aponte para o sol e para uma planta enquanto ouve.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca no sol: "yellow". Toca no sapinho: "green".',
      itens: [
        { en: "Yellow", pt: "Amarelo", imagemUrl: sunYellow },
        { en: "Green", pt: "Verde", imagemUrl: frogGreen },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Repete comigo: "yellow"… "green".',
      itens: [
        { en: "Yellow", pt: "Amarelo", imagemUrl: sunYellow },
        { en: "Green", pt: "Verde", imagemUrl: frogGreen },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toca no que é "yellow".',
      palavraAlvoEn: "Yellow",
      opcoes: [
        { nome: "sol amarelo", imagemUrl: sunYellow, correta: true },
        { nome: "sapinho verde", imagemUrl: frogGreen, correta: false },
      ],
      feedbackAcerto: 'Yes! O sol é "yellow".',
      feedbackErro: '"Yellow" é amarelo. Toca no sol.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Agora toca no que é "green".',
      palavraAlvoEn: "Green",
      opcoes: [
        { nome: "sapinho verde", imagemUrl: frogGreen, correta: true },
        { nome: "maçã vermelha", imagemUrl: appleRed, correta: false },
        { nome: "bola azul", imagemUrl: ballBlue, correta: false },
      ],
      feedbackAcerto: 'Yes! O sapinho é "green".',
      feedbackErro: '"Green" é verde, como folhinha. Toca no sapinho.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: frogGreen,
      convite:
        'Vamos revisar tudo! Aponta e fala alto: "red"… "blue"… "yellow"… "green"!',
      dica: "Se lembrar só 2, tá ótimo. Amanhã a gente treina de novo.",
    },
    {
      tipo: "celebracao",
      medalha: "Baby Colors — Rainbow Star",
      mascoteUrl: brilha,
      falaFinal:
        'Congratulations! 4 cores em inglês: "red", "blue", "yellow", "green". You are a Baby Star!',
    },
  ],
};

// ============================================================
// NÍVEL 1 · BABY ENGLISH
// ============================================================
export const nivel1Maternal: NivelIng = {
  slug: "n1",
  numero: 1,
  titulo: "Nível 1 · Baby English",
  subtitulo: "First words — 2 palavras por aula, bem leve",
  destravado: true,
  unidades: [
    {
      slug: "n1-semana-1",
      numero: 1,
      titulo: "Semana 1 — Colors",
      subtitulo: "Só cores: red, blue, yellow, green",
      aulas: [n1S1A01, n1S1A02],
    },
    n1Semana2,
    n1Semana3,
    n1Semana4,
  ],
};
