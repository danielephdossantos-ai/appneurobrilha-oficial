import type { AulaIng } from "./types";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as camiseta } from "@/assets/neuro-treino/objetos/camiseta.png.asset.json";
import { url as casaco } from "@/assets/neuro-treino/objetos/casaco.png.asset.json";
import { url as mochila } from "@/assets/neuro-treino/objetos/mochila.png.asset.json";
import { url as lenco } from "@/assets/neuro-treino/objetos/lenco.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";

/**
 * Inglês EI — Pré II · Nível 3 · Semana 3
 * "I wear…" — roupas. Frame: "I wear a T-shirt / a jacket.".
 */

const n3S3A01: AulaIng = {
  slug: "n3-s3-a01-t-shirt-jacket",
  titulo: "I wear a T-shirt!",
  subtitulo: "Nível 3 · Semana 3 · Dia 1",
  icone: "👕",
  duracaoMin: 7,
  baseCientifica:
    "Vocabulário de vida diária (Cameron 2001) — mais fácil fixar palavras ligadas à rotina real da criança.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote: 'Hi! Hoje vamos falar das ROUPAS! "I wear a T-shirt!", "I wear a jacket!".',
      legenda: "Olha para o que você está vestindo.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Escuta: "T-shirt" (camiseta), "jacket" (casaco).',
      itens: [
        { en: "T-shirt", pt: "Camiseta", imagemUrl: camiseta },
        { en: "Jacket", pt: "Casaco", imagemUrl: casaco },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"It\'s sunny! I wear a T-shirt!". Toca na CAMISETA.',
      palavraAlvoEn: "T-shirt",
      opcoes: [
        { nome: "camiseta", imagemUrl: camiseta, correta: true },
        { nome: "casaco", imagemUrl: casaco, correta: false },
        { nome: "mochila", imagemUrl: mochila, correta: false },
      ],
      feedbackAcerto: 'Yes! "I wear a T-shirt!". Vamos brincar no sol!',
      feedbackErro: '"T-shirt" é a camiseta.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"It\'s cold! I wear a jacket!". Toca no CASACO.',
      palavraAlvoEn: "Jacket",
      opcoes: [
        { nome: "casaco", imagemUrl: casaco, correta: true },
        { nome: "camiseta", imagemUrl: camiseta, correta: false },
      ],
      feedbackAcerto: 'Right! "I wear a jacket!". Quentinho!',
      feedbackErro: '"Jacket" é o casaco pra frio.',
    },
    {
      tipo: "historiaEn",
      titulo: "Sunny or cold?",
      cenas: [
        { imagemUrl: sol, narracao: '"It\'s sunny!" Lily fala: "I wear a T-shirt!".' },
        { imagemUrl: chuva, narracao: '"It\'s cold!" Tom fala: "I wear a jacket!".' },
        { imagemUrl: menina, narracao: '"We\'re ready! Let\'s go!".' },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: menino,
      convite:
        'Olha o clima hoje! Se está SOL, fala: "I wear a T-shirt!". Se está FRIO: "I wear a jacket!". Aponta pra sua roupa.',
      dica: "Você é o dono da escolha!",
    },
    {
      tipo: "celebracao",
      medalha: "Fashion Kid — T-shirt/Jacket",
      mascoteUrl: buddy,
      falaFinal: 'Great! Você já sabe falar das suas roupas em inglês!',
    },
  ],
};

const n3S3A02: AulaIng = {
  slug: "n3-s3-a02-backpack-scarf",
  titulo: "Backpack and scarf!",
  subtitulo: "Nível 3 · Semana 3 · Dia 2",
  icone: "🎒",
  duracaoMin: 7,
  baseCientifica:
    "Ampliação lexical em campo semântico (Aitchison 2012): agrupar 'coisas que eu levo' fixa melhor que palavras avulsas.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote: 'Hi! Mais duas coisas que a gente usa: "backpack" (mochila) e "scarf" (cachecol/lenço).',
      legenda: "Cadê a sua mochila?",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Escuta: "backpack" e "scarf".',
      itens: [
        { en: "Backpack", pt: "Mochila", imagemUrl: mochila },
        { en: "Scarf", pt: "Cachecol", imagemUrl: lenco },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"I go to school. I take my backpack!". Toca na MOCHILA.',
      palavraAlvoEn: "Backpack",
      opcoes: [
        { nome: "mochila", imagemUrl: mochila, correta: true },
        { nome: "casaco", imagemUrl: casaco, correta: false },
        { nome: "camiseta", imagemUrl: camiseta, correta: false },
      ],
      feedbackAcerto: 'Yes! "My backpack!". Vamos pra escola!',
      feedbackErro: '"Backpack" é a mochila das costas.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Revisão: "It\'s cold! I wear a __!". Toca no CASACO.',
      palavraAlvoEn: "Jacket",
      opcoes: [
        { nome: "casaco", imagemUrl: casaco, correta: true },
        { nome: "camiseta", imagemUrl: camiseta, correta: false },
        { nome: "mochila", imagemUrl: mochila, correta: false },
      ],
      feedbackAcerto: 'Perfect! "I wear a jacket!".',
      feedbackErro: 'Frio = casaco = "jacket".',
    },
    {
      tipo: "historiaEn",
      titulo: "Ready for school",
      cenas: [
        { imagemUrl: camiseta, narracao: 'Lily: "I wear my T-shirt.".' },
        { imagemUrl: casaco, narracao: '"And my jacket. It\'s cold!".' },
        { imagemUrl: mochila, narracao: '"My backpack! Ready! Let\'s go to school!".' },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: menina,
      convite:
        'Faz de conta que se prepara! Fala uma por uma: "T-shirt!", "Jacket!", "Backpack!", "Scarf!". Aponta ou toca em cada.',
      dica: "Vira uma sequência de vestir.",
    },
    {
      tipo: "celebracao",
      medalha: "Fashion Kid — 4 clothes",
      mascoteUrl: buddy,
      falaFinal: 'Awesome! Você já sabe se vestir em inglês! 4 palavras novas!',
    },
  ],
};

export const n3Pre2_semana3 = {
  slug: "n3-semana-3",
  numero: 3,
  titulo: "Semana 3 — I wear…",
  subtitulo: "T-shirt, jacket, backpack, scarf",
  aulas: [n3S3A01, n3S3A02],
};
