import type { AulaIng } from "./types";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as cadeira } from "@/assets/neuro-treino/objetos/cadeira.png.asset.json";
import { url as familia } from "@/assets/neuro-treino/objetos/familia-tradicional.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as alegre } from "@/assets/neuro-treino/objetos/quadro-alegre.png.asset.json";
import { url as camiseta } from "@/assets/neuro-treino/objetos/camiseta.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as festa } from "@/assets/neuro-treino/objetos/festa.png.asset.json";

/**
 * Inglês EI — Pré II · Nível 3 · Semana 4
 * "This is my house!" + Formatura do Nível 3.
 */

const n3S4A01: AulaIng = {
  slug: "n3-s4-a01-my-house",
  titulo: "This is my house!",
  subtitulo: "Nível 3 · Semana 4 · Dia 1",
  icone: "🏠",
  duracaoMin: 7,
  baseCientifica:
    "Ambientes familiares como âncora lexical (Halliday 1975) — casa e família ativam vocabulário afetivo.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote: 'Hi! Hoje mostro a MINHA CASA em inglês: "This is my house!", "This is my chair!".',
      legenda: "Olha em volta.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Escuta: "house" (casa), "chair" (cadeira).',
      itens: [
        { en: "House", pt: "Casa", imagemUrl: casa },
        { en: "Chair", pt: "Cadeira", imagemUrl: cadeira },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"This is my house!". Toca na CASA.',
      palavraAlvoEn: "House",
      opcoes: [
        { nome: "casa", imagemUrl: casa, correta: true },
        { nome: "cadeira", imagemUrl: cadeira, correta: false },
        { nome: "família", imagemUrl: familia, correta: false },
      ],
      feedbackAcerto: 'Yes! "This is my house!". Home sweet home!',
      feedbackErro: '"House" é a casa onde você mora.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"I sit on my chair!". Toca na CADEIRA.',
      palavraAlvoEn: "Chair",
      opcoes: [
        { nome: "cadeira", imagemUrl: cadeira, correta: true },
        { nome: "casa", imagemUrl: casa, correta: false },
      ],
      feedbackAcerto: 'Right! "My chair!".',
      feedbackErro: '"Chair" é a cadeira de sentar.',
    },
    {
      tipo: "historiaEn",
      titulo: "Welcome to my house",
      cenas: [
        { imagemUrl: casa, narracao: 'Lily abre a porta: "Welcome! This is my house!".' },
        { imagemUrl: cadeira, narracao: '"Sit down on the chair, please!".' },
        { imagemUrl: familia, narracao: '"This is my family. Nice to meet you!".' },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: menino,
      convite:
        'Vira guia da sua casa! Aponta e fala: "This is my house!", "This is my chair!", "This is my family!". 3 apresentações!',
      dica: "Fala com carinho.",
    },
    {
      tipo: "celebracao",
      medalha: "Home Guide — My House",
      mascoteUrl: buddy,
      falaFinal: 'Great! Você já apresenta sua casa em inglês!',
    },
  ],
};

const n3S4A02: AulaIng = {
  slug: "n3-s4-a02-graduation-n3",
  titulo: "Graduation Level 3!",
  subtitulo: "Nível 3 · Semana 4 · Dia 2 · Formatura",
  icone: "🎓",
  duracaoMin: 8,
  baseCientifica:
    "Revisão intercalada (Rohrer & Taylor 2007) — misturar clima, sentimento, roupa e casa fixa o Nível 3 inteiro.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Wow! Hoje é a FORMATURA do Nível 3! Você aprendeu clima, sentimentos, roupas e casa. Parabéns!',
      legenda: "Aplauda antes de começar!",
    },
    {
      tipo: "musicaEn",
      imagemUrl: festa,
      versos: [
        { en: "How's the weather? It's sunny!", pt: "Como está o tempo? Ensolarado!", gesto: "☀️" },
        { en: "How do you feel? I feel happy!", pt: "Como se sente? Feliz!", gesto: "😊" },
        { en: "This is my house! Welcome in!", pt: "Essa é minha casa! Entra!", gesto: "🏠" },
      ],
      legenda: "Cante alto e mexa o corpo!",
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Revisão clima: "It\'s sunny!". Toca no SOL.',
      palavraAlvoEn: "Sunny",
      opcoes: [
        { nome: "sol", imagemUrl: sol, correta: true },
        { nome: "casa", imagemUrl: casa, correta: false },
        { nome: "cadeira", imagemUrl: cadeira, correta: false },
      ],
      feedbackAcerto: 'Yes! "It\'s sunny!".',
      feedbackErro: 'Sol = "sunny".',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Revisão sentimento: "I feel happy!". Toca na cara FELIZ.',
      palavraAlvoEn: "Happy",
      opcoes: [
        { nome: "cara feliz", imagemUrl: alegre, correta: true },
        { nome: "casa", imagemUrl: casa, correta: false },
        { nome: "camiseta", imagemUrl: camiseta, correta: false },
      ],
      feedbackAcerto: 'Right! "I feel happy!".',
      feedbackErro: 'Feliz = "happy".',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Revisão roupa: "I wear a __!". Toca na CAMISETA.',
      palavraAlvoEn: "T-shirt",
      opcoes: [
        { nome: "camiseta", imagemUrl: camiseta, correta: true },
        { nome: "casa", imagemUrl: casa, correta: false },
        { nome: "sol", imagemUrl: sol, correta: false },
      ],
      feedbackAcerto: 'Perfect! "I wear a T-shirt!".',
      feedbackErro: 'Camiseta = "T-shirt".',
    },
    {
      tipo: "historiaEn",
      titulo: "My Level 3 story",
      cenas: [
        { imagemUrl: sol, narracao: '"It\'s sunny today! I feel happy!".' },
        { imagemUrl: camiseta, narracao: '"I wear a T-shirt and my backpack.".' },
        { imagemUrl: casa, narracao: '"This is my house! Welcome!".' },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: menina,
      convite:
        'Show final! Escolhe 3 frases favoritas: "It\'s sunny!", "I feel happy!", "This is my house!". Fala pra família!',
      dica: "Mereceu o diploma!",
    },
    {
      tipo: "celebracao",
      medalha: "🎓 Level 3 Graduate — I Can Say",
      mascoteUrl: buddy,
      falaFinal:
        'Congratulations! Nível 3 completo! Você já fala em inglês do tempo, dos sentimentos e da sua casa!',
    },
  ],
};

export const n3Pre2_semana4 = {
  slug: "n3-semana-4",
  numero: 4,
  titulo: "Semana 4 — This is my house! + Formatura",
  subtitulo: "Revisão e cerimônia do Nível 3",
  aulas: [n3S4A01, n3S4A02],
};
