import type { AulaIng } from "./types";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as parque } from "@/assets/neuro-treino/objetos/parque.png.asset.json";
import { url as escola } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as mercado } from "@/assets/neuro-treino/objetos/mercado.png.asset.json";
import { url as praca } from "@/assets/neuro-treino/objetos/praca.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as criancas } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";

/**
 * Inglês EI — Pré II · Nível 4 · Semana 2
 * "Let's go!" — lugares. Frame: "Let's go to the park!".
 */

const n4S2A01: AulaIng = {
  slug: "n4-s2-a01-lets-go-park-school",
  titulo: "Let's go to the park!",
  subtitulo: "Nível 4 · Semana 2 · Dia 1",
  icone: "🌳",
  duracaoMin: 7,
  baseCientifica:
    "Propostas colaborativas com 'Let\\'s' (Cameron 2001) — estrutura pronta que a criança usa para convidar.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi! Hoje CONVIDAMOS as pessoas! "Let\'s go to the park!" (Vamos ao parque!). Faz o gesto de "vem"!',
      legenda: "Fala animado!",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Escuta: "park" (parque), "school" (escola).',
      itens: [
        { en: "Park", pt: "Parque", imagemUrl: parque },
        { en: "School", pt: "Escola", imagemUrl: escola },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Let\'s go to the park!". Toca no PARQUE.',
      palavraAlvoEn: "Park",
      opcoes: [
        { nome: "parque", imagemUrl: parque, correta: true },
        { nome: "escola", imagemUrl: escola, correta: false },
        { nome: "mercado", imagemUrl: mercado, correta: false },
      ],
      feedbackAcerto: 'Yes! "Let\'s go! Play in the park!".',
      feedbackErro: '"Park" é o parquinho.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Let\'s go to school!". Toca na ESCOLA.',
      palavraAlvoEn: "School",
      opcoes: [
        { nome: "escola", imagemUrl: escola, correta: true },
        { nome: "parque", imagemUrl: parque, correta: false },
      ],
      feedbackAcerto: 'Right! "Learn something new!".',
      feedbackErro: '"School" é a escola.',
    },
    {
      tipo: "historiaEn",
      titulo: "Where to go?",
      cenas: [
        { imagemUrl: escola, narracao: 'De manhã: "Let\'s go to school!".' },
        { imagemUrl: parque, narracao: 'De tarde: "Let\'s go to the park!".' },
        { imagemUrl: criancas, narracao: '"Yay! We\'re together!".' },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: menino,
      convite:
        'Convida a família AGORA: "Let\'s go to the kitchen!", "Let\'s go to bed!". Fala com energia!',
      dica: '"Let\'s" = vamos!',
    },
    {
      tipo: "celebracao",
      medalha: "Little Guide — Let's go 1",
      mascoteUrl: buddy,
      falaFinal: 'Great! Você já convida as pessoas em inglês!',
    },
  ],
};

const n4S2A02: AulaIng = {
  slug: "n4-s2-a02-lets-go-market-square",
  titulo: "Market and square!",
  subtitulo: "Nível 4 · Semana 2 · Dia 2",
  icone: "🏪",
  duracaoMin: 7,
  baseCientifica:
    "Rotinas comunitárias (Rogoff 2003) — mercado e praça fazem parte do mundo real da criança e viram gancho para linguagem.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote: 'Hi! Mais dois lugares: "market" (mercado) e "square" (praça)!',
      legenda: "Onde você foi ontem?",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Escuta: "market" e "square".',
      itens: [
        { en: "Market", pt: "Mercado", imagemUrl: mercado },
        { en: "Square", pt: "Praça", imagemUrl: praca },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Let\'s go to the market!". Toca no MERCADO.',
      palavraAlvoEn: "Market",
      opcoes: [
        { nome: "mercado", imagemUrl: mercado, correta: true },
        { nome: "praça", imagemUrl: praca, correta: false },
        { nome: "escola", imagemUrl: escola, correta: false },
      ],
      feedbackAcerto: 'Yes! "Let\'s buy food!".',
      feedbackErro: '"Market" é o mercado.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Let\'s go to the square!". Toca na PRAÇA.',
      palavraAlvoEn: "Square",
      opcoes: [
        { nome: "praça", imagemUrl: praca, correta: true },
        { nome: "mercado", imagemUrl: mercado, correta: false },
        { nome: "parque", imagemUrl: parque, correta: false },
      ],
      feedbackAcerto: 'Right! "Let\'s meet friends!".',
      feedbackErro: '"Square" é a praça da cidade.',
    },
    {
      tipo: "historiaEn",
      titulo: "A day out",
      cenas: [
        { imagemUrl: mercado, narracao: 'Mãe: "Let\'s go to the market! We need apples!".' },
        { imagemUrl: praca, narracao: 'Depois: "Let\'s go to the square!".' },
        { imagemUrl: parque, narracao: '"And to the park! Yay!".' },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: menina,
      convite:
        'Planeja um passeio! Fala 3 lugares: "Let\'s go to the __!" — park, market, square. Faz um roteiro!',
      dica: "Pode desenhar a rota no ar.",
    },
    {
      tipo: "celebracao",
      medalha: "Little Guide — 4 places",
      mascoteUrl: buddy,
      falaFinal: 'Awesome! Você já convida pra 4 lugares em inglês!',
    },
  ],
};

export const n4Pre2_semana2 = {
  slug: "n4-semana-2",
  numero: 2,
  titulo: "Semana 2 — Let's go!",
  subtitulo: "Park, school, market, square",
  aulas: [n4S2A01, n4S2A02],
};
