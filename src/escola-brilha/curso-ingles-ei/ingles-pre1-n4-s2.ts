import type { AulaIng } from "./types";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as pularCorda } from "@/assets/neuro-treino/objetos/pular-corda.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as criancas } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";

/**
 * Inglês EI — Pré I · Nível 4 · Semana 2
 * "Can you…?" — habilidades. Frame: Q "Can you jump?" A "Yes, I can!".
 */

const n4S2A01: AulaIng = {
  slug: "n4-s2-a01-i-can-jump",
  titulo: "I can jump!",
  subtitulo: "Nível 4 · Semana 2 · Dia 1",
  icone: "🤸",
  duracaoMin: 7,
  baseCientifica:
    "TPR (Asher 1977): mapear verbo → movimento com o corpo cria memória motora, mais duradoura que memória verbal.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi! Hoje o Nível 4 fica ativo! Vamos aprender coisas que você SABE FAZER: "I can jump!", "I can run!", "I can dance!".',
      legenda: "Fique em pé. É pra mexer!",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca e imita: "jump" (pular), "run" (correr), "dance" (dançar).',
      itens: [
        { en: "Jump", pt: "Pular", imagemUrl: pularCorda },
        { en: "Run", pt: "Correr", imagemUrl: menino },
        { en: "Dance", pt: "Dançar", imagemUrl: menina },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Can you jump? Yes, I can!". Toca em quem pula.',
      palavraAlvoEn: "Jump",
      opcoes: [
        { nome: "pular corda", imagemUrl: pularCorda, correta: true },
        { nome: "cachorro", imagemUrl: cachorro, correta: false },
        { nome: "gato", imagemUrl: gato, correta: false },
      ],
      feedbackAcerto: 'Yes! "I can jump!". Pula, pula!',
      feedbackErro: '"Jump" é pular no lugar.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Can you dance? Yes, I can!". Toca na menina dançando.',
      palavraAlvoEn: "Dance",
      opcoes: [
        { nome: "menina", imagemUrl: menina, correta: true },
        { nome: "bola", imagemUrl: bola, correta: false },
        { nome: "cachorro", imagemUrl: cachorro, correta: false },
      ],
      feedbackAcerto: 'Perfect! "I can dance!". Balança, balança!',
      feedbackErro: '"Dance" é dançar, mexer o corpo com música.',
    },
    {
      tipo: "historiaEn",
      titulo: "Show time!",
      cenas: [
        { imagemUrl: pularCorda, narracao: 'Lily pula alto: "Look! I can jump!".' },
        { imagemUrl: menino, narracao: 'Tom corre rápido: "I can run! Look at me!".' },
        { imagemUrl: criancas, narracao: 'Todo mundo dança junto: "We can dance! Yay!".' },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: pularCorda,
      convite:
        'Mostra o que você SABE FAZER! Fala e faz: "I can jump!" (pula!), "I can run!" (corre no lugar!), "I can dance!" (dança!).',
      dica: "Cada frase = 3 repetições do movimento.",
    },
    {
      tipo: "celebracao",
      medalha: "Little Storyteller — I Can",
      mascoteUrl: buddy,
      falaFinal: 'Great! Você já se orgulha em inglês: "I can!". Muito legal!',
    },
  ],
};

const n4S2A02: AulaIng = {
  slug: "n4-s2-a02-can-you",
  titulo: "Can you…?",
  subtitulo: "Nível 4 · Semana 2 · Dia 2",
  icone: "❓",
  duracaoMin: 7,
  baseCientifica:
    "Perguntas 'yes/no' em L2 (Lightbown & Spada 2013) — a criança aprende a responder antes de formular; esta aula treina a resposta bipolar.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi! Hoje eu vou te PERGUNTAR. Você responde: "Yes, I can!" ou "No, I can\'t.". Fácil!',
      legenda: "Faça 👍 para 'yes' e 👎 para 'no'.",
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Can you jump like a rabbit?". Você pode pular? Toca em "Yes, I can!".',
      palavraAlvoEn: "Yes I can",
      opcoes: [
        { nome: "criança pulando", imagemUrl: pularCorda, correta: true },
        { nome: "cachorro parado", imagemUrl: cachorro, correta: false },
      ],
      feedbackAcerto: 'Yes! "Can you jump? Yes, I can!". 👍',
      feedbackErro: 'Se você pula, a resposta é "Yes, I can!".',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Can you fly?". Você voa? Não voa, né? Toca em "No, I can\'t.".',
      palavraAlvoEn: "No I cant",
      opcoes: [
        { nome: "gato no chão", imagemUrl: gato, correta: true },
        { nome: "criança correndo", imagemUrl: menino, correta: false },
      ],
      feedbackAcerto: 'Right! Ninguém voa: "No, I can\'t.". 👎',
      feedbackErro: 'A gente não voa. A resposta é "No, I can\'t.".',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Can you dance?". Sim! Toca em "Yes, I can!".',
      palavraAlvoEn: "Dance",
      opcoes: [
        { nome: "menina dançando", imagemUrl: menina, correta: true },
        { nome: "cachorro dormindo", imagemUrl: cachorro, correta: false },
      ],
      feedbackAcerto: 'Yes! "I can dance!". 💃',
      feedbackErro: 'Dançar é fácil! "Yes, I can!".',
    },
    {
      tipo: "historiaEn",
      titulo: "Yes I can, no I can't",
      cenas: [
        { imagemUrl: menino, narracao: 'Tom pergunta: "Can you run?". Lily: "Yes, I can!".' },
        { imagemUrl: menina, narracao: 'Lily pergunta: "Can you fly?". Tom: "No, I can\'t!" e ri.' },
        { imagemUrl: criancas, narracao: 'Juntos: "We can play! We can dance! Yay!".' },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: menina,
      convite:
        'Faz de conta com o adulto. Ele pergunta: "Can you jump? Can you fly? Can you dance?". Você responde bem alto "Yes, I can!" ou "No, I can\'t!".',
      dica: "3 perguntas de ida, 3 de volta.",
    },
    {
      tipo: "celebracao",
      medalha: "Little Storyteller — Yes I Can",
      mascoteUrl: buddy,
      falaFinal: 'Awesome! Você já responde perguntas em inglês: "Yes, I can!" e "No, I can\'t!".',
    },
  ],
};

export const n4Pre1_semana2 = {
  slug: "n4-semana-2",
  numero: 2,
  titulo: "Semana 2 — Can you…?",
  subtitulo: "Habilidades, perguntas e respostas curtas",
  aulas: [n4S2A01, n4S2A02],
};
