import type { AulaIng } from "./types";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as peixe } from "@/assets/neuro-treino/objetos/peixe.png.asset.json";
import { url as agua } from "@/assets/neuro-treino/objetos/cristal-agua.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as arcoIris } from "@/assets/neuro-treino/objetos/arco-iris.png.asset.json";

/**
 * Inglês EI — Pré I · Nível 3 · Semana 2
 * "I Can Say — What color is it?"
 *
 * Frame: Q: "What color is it?"  A: "It's red / yellow / blue / green."
 * Reciclagem das 4 cores da S1 do N2 dentro da nova estrutura.
 */

const n3S2A01: AulaIng = {
  slug: "n3-s2-a01-what-color-red-yellow",
  titulo: "What color is it? — red & yellow",
  subtitulo: "Nível 3 · Semana 2 · Dia 1",
  icone: "🎨",
  duracaoMin: 6,
  baseCientifica:
    "Frame de pergunta com atributo (color) — ampliação do 'It's a __' para 'It's ___' (adjetivo predicativo). Suporte visual mantém a carga baixa (VanPatten 2003).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi! Hoje a pergunta é: "What color is it?" — "de que cor é isso?". A resposta começa com "It\'s…" e a cor. "It\'s red!". "It\'s yellow!".',
      legenda: "Aponte para algo colorido perto ao ouvir.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura: "red apple", "red heart", "yellow sun", "yellow banana".',
      itens: [
        { en: "Red apple", pt: "Maçã vermelha", imagemUrl: maca },
        { en: "Red heart", pt: "Coração vermelho", imagemUrl: coracao },
        { en: "Yellow sun", pt: "Sol amarelo", imagemUrl: sol },
        { en: "Yellow banana", pt: "Banana amarela", imagemUrl: banana },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"What color is it? It\'s… red!". Toca no que é VERMELHO.',
      palavraAlvoEn: "Red",
      opcoes: [
        { nome: "maçã vermelha", imagemUrl: maca, correta: true },
        { nome: "sol amarelo", imagemUrl: sol, correta: false },
        { nome: "banana amarela", imagemUrl: banana, correta: false },
      ],
      feedbackAcerto: 'Yes! "It\'s red!". Maçã vermelhinha.',
      feedbackErro: '"Red" é a cor da maçã e do coração.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"What color is it? It\'s… yellow!". Toca no AMARELO.',
      palavraAlvoEn: "Yellow",
      opcoes: [
        { nome: "sol amarelo", imagemUrl: sol, correta: true },
        { nome: "coração vermelho", imagemUrl: coracao, correta: false },
        { nome: "maçã vermelha", imagemUrl: maca, correta: false },
      ],
      feedbackAcerto: 'Perfect! "It\'s yellow!". Cor do sol!',
      feedbackErro: '"Yellow" é a cor do sol e da banana.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'E agora: "What color is it? It\'s… red!". Qual é vermelho?',
      palavraAlvoEn: "Red",
      opcoes: [
        { nome: "coração vermelho", imagemUrl: coracao, correta: true },
        { nome: "banana amarela", imagemUrl: banana, correta: false },
        { nome: "sol amarelo", imagemUrl: sol, correta: false },
      ],
      feedbackAcerto: 'Yes! "It\'s red!". Coração vermelho.',
      feedbackErro: 'Escuta: "red". Procura o vermelho.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: sol,
      convite:
        'Pega dois brinquedos: um vermelho e um amarelo. Aponta e fala: "It\'s red!" e "It\'s yellow!". Como um pintor mostrando as cores!',
      dica: "Se não achar, pinta no ar com o dedinho.",
    },
    {
      tipo: "celebracao",
      medalha: "I Can Say — Red & Yellow",
      mascoteUrl: buddy,
      falaFinal:
        'Amazing! Você já responde: "It\'s red!" e "It\'s yellow!". You can say colors!',
    },
  ],
};

const n3S2A02: AulaIng = {
  slug: "n3-s2-a02-what-color-blue-green",
  titulo: "What color is it? — blue & green",
  subtitulo: "Nível 3 · Semana 2 · Dia 2",
  icone: "🌈",
  duracaoMin: 6,
  baseCientifica:
    "Reciclagem em par (blue+green) com contraste visual (mar/floresta). Contraste facilita categorização perceptual (Rosch 1978).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi again! Hoje mais duas cores: "blue" (azul, cor do mar) e "green" (verde, cor da árvore). Pergunta: "What color is it?" — resposta: "It\'s blue!" ou "It\'s green!".',
      legenda: "Olhe para o teto/janela e para uma planta.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura: "blue water", "blue fish", "green tree", "green leaf".',
      itens: [
        { en: "Blue water", pt: "Água azul", imagemUrl: agua },
        { en: "Blue fish", pt: "Peixe azul", imagemUrl: peixe },
        { en: "Green tree", pt: "Árvore verde", imagemUrl: arvore },
        { en: "Green leaf", pt: "Folha verde", imagemUrl: flor },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"What color is it? It\'s… blue!". Toca no AZUL.',
      palavraAlvoEn: "Blue",
      opcoes: [
        { nome: "peixe azul", imagemUrl: peixe, correta: true },
        { nome: "árvore verde", imagemUrl: arvore, correta: false },
        { nome: "maçã vermelha", imagemUrl: maca, correta: false },
      ],
      feedbackAcerto: 'Yes! "It\'s blue!". Peixinho azul.',
      feedbackErro: '"Blue" é a cor do mar e do céu.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"What color is it? It\'s… green!". Toca no VERDE.',
      palavraAlvoEn: "Green",
      opcoes: [
        { nome: "árvore verde", imagemUrl: arvore, correta: true },
        { nome: "água azul", imagemUrl: agua, correta: false },
        { nome: "sol amarelo", imagemUrl: sol, correta: false },
      ],
      feedbackAcerto: 'Perfect! "It\'s green!". Árvore verdinha.',
      feedbackErro: '"Green" é a cor da folha e da árvore.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Grande mistura! "It\'s a… rainbow!". Toca no arco-íris colorido.',
      palavraAlvoEn: "Rainbow",
      opcoes: [
        { nome: "arco-íris", imagemUrl: arcoIris, correta: true },
        { nome: "árvore verde", imagemUrl: arvore, correta: false },
        { nome: "peixe azul", imagemUrl: peixe, correta: false },
      ],
      feedbackAcerto: 'Wow! "It\'s a rainbow!". Cheio de cores!',
      feedbackErro: 'O "rainbow" tem todas as cores juntas.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: arcoIris,
      convite:
        'Aponta pra quatro coisas coloridas da casa e responde: "It\'s red! It\'s yellow! It\'s blue! It\'s green!". Formou seu próprio rainbow!',
      dica: "Se travar, o adulto pergunta: 'What color?'.",
    },
    {
      tipo: "celebracao",
      medalha: "I Can Say — Colors",
      mascoteUrl: buddy,
      falaFinal:
        'Excellent! Você já responde de 4 cores: "It\'s red, yellow, blue, green!". Rainbow talker!',
    },
  ],
};

export const n3Pre1_semana2 = {
  slug: "n3-semana-2",
  numero: 2,
  titulo: "Semana 2 — What color is it?",
  subtitulo: "Frame 'It's ___' com as 4 cores",
  aulas: [n3S2A01, n3S2A02],
};
