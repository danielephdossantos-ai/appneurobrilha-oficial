import type { AulaIng, UnidadeIng } from "./types";
import { url as brilha } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import mommy from "@/assets/ingles-ei/n1-week4/mommy.png";
import daddy from "@/assets/ingles-ei/n1-week4/daddy.png";
import baby from "@/assets/ingles-ei/n1-week4/baby.png";
import dog from "@/assets/ingles-ei/n1-week3/dog.png";
import cat from "@/assets/ingles-ei/n1-week3/cat.png";

/**
 * Nível 1 · Semana 4 — My family (fecho do Nível 1)
 * Palavras afetivas ancoram a L2 no mundo emocional da criança (Bloom 2000).
 */

const n1S4A01: AulaIng = {
  slug: "n1-s4-a01-mommy-daddy",
  titulo: "Mommy & Daddy",
  subtitulo: "Nível 1 · Semana 4 · Dia 1",
  icone: "👩",
  duracaoMin: 4,
  baseCientifica:
    "Vocabulário afetivo tem primazia na aquisição (Bloom & Tinker 2001).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Hi, baby! Hoje as pessoas mais queridas: "mommy" e "daddy". "Mommy" é mamãe, "daddy" é papai.',
      legenda: "Se tiver mamãe ou papai perto, dá tchau pra eles.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca na mamãe: "mommy". Toca no papai: "daddy".',
      itens: [
        { en: "Mommy", pt: "Mamãe", imagemUrl: mommy },
        { en: "Daddy", pt: "Papai", imagemUrl: daddy },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Repete comigo: "mommy"… "daddy".',
      itens: [
        { en: "Mommy", pt: "Mamãe", imagemUrl: mommy },
        { en: "Daddy", pt: "Papai", imagemUrl: daddy },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toca em quem é "mommy".',
      palavraAlvoEn: "Mommy",
      opcoes: [
        { nome: "mamãe", imagemUrl: mommy, correta: true },
        { nome: "papai", imagemUrl: daddy, correta: false },
      ],
      feedbackAcerto: 'Yes! "Mommy" é a mamãe.',
      feedbackErro: '"Mommy" é a mamãe. Toca nela.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Agora toca em quem é "daddy".',
      palavraAlvoEn: "Daddy",
      opcoes: [
        { nome: "papai", imagemUrl: daddy, correta: true },
        { nome: "mamãe", imagemUrl: mommy, correta: false },
      ],
      feedbackAcerto: 'Yes! "Daddy" é o papai.',
      feedbackErro: '"Daddy" é o papai. Toca nele.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: mommy,
      convite:
        'Vai até a "mommy" ou o "daddy" e dá um beijo. Fala alto: "I love you, mommy!" ou "I love you, daddy!".',
      dica: 'Se não estiverem perto, manda um beijinho no ar.',
    },
    {
      tipo: "celebracao",
      medalha: "Baby Family — Mommy & Daddy",
      mascoteUrl: brilha,
      falaFinal: 'Aww! Você já sabe chamar a "mommy" e o "daddy" em inglês!',
    },
  ],
};

const n1S4A02: AulaIng = {
  slug: "n1-s4-a02-baby-me",
  titulo: "Baby & Me",
  subtitulo: "Nível 1 · Semana 4 · Dia 2 · Graduation",
  icone: "👶",
  duracaoMin: 5,
  baseCientifica:
    "Fecho de nível com recuperação ativa de tudo que viu (testing effect · Roediger & Karpicke 2006).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Hi, star! Hoje é dia especial: "baby" (nenê) e "me" (eu). E no fim tem festa de formatura do Nível 1!',
      legenda: "Aponta pra você quando ouvir 'me'.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca no nenê: "baby". Depois aponta pra você e fala "me".',
      itens: [
        { en: "Baby", pt: "Nenê", imagemUrl: baby },
        { en: "Me", pt: "Eu", imagemUrl: baby },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toca no que é "baby".',
      palavraAlvoEn: "Baby",
      opcoes: [
        { nome: "nenê", imagemUrl: baby, correta: true },
        { nome: "mamãe", imagemUrl: mommy, correta: false },
        { nome: "papai", imagemUrl: daddy, correta: false },
      ],
      feedbackAcerto: 'Yes! "Baby" é o nenê pequenininho.',
      feedbackErro: '"Baby" é o bebezinho. Toca nele.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Grande revisão: toca no "dog".',
      palavraAlvoEn: "Dog",
      opcoes: [
        { nome: "cachorro", imagemUrl: dog, correta: true },
        { nome: "gato", imagemUrl: cat, correta: false },
        { nome: "mamãe", imagemUrl: mommy, correta: false },
      ],
      feedbackAcerto: 'Yes! Você lembrou! "Dog" faz woof.',
      feedbackErro: '"Dog" é o cachorrinho. Toca nele.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Última: toca no "cat".',
      palavraAlvoEn: "Cat",
      opcoes: [
        { nome: "gato", imagemUrl: cat, correta: true },
        { nome: "nenê", imagemUrl: baby, correta: false },
        { nome: "papai", imagemUrl: daddy, correta: false },
      ],
      feedbackAcerto: 'Yes! "Cat" faz meow. Você é um Baby Star!',
      feedbackErro: '"Cat" é o gatinho. Toca nele.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: baby,
      convite:
        'Aponta pra você e diz alto: "Me! I am a Baby Star!". Depois abraça a "mommy" ou o "daddy".',
      dica: "Você aprendeu 12 palavras em inglês no Nível 1!",
    },
    {
      tipo: "celebracao",
      medalha: "Baby English — Level 1 Graduation",
      mascoteUrl: brilha,
      falaFinal:
        'Congratulations, Baby Star! Você terminou o Nível 1: red, blue, yellow, green, apple, banana, orange, grape, dog, cat, bird, fish, mommy, daddy, baby, me! You are amazing!',
    },
  ],
};

export const n1Semana4: UnidadeIng = {
  slug: "n1-semana-4",
  numero: 4,
  titulo: "Semana 4 — My family",
  subtitulo: "Mommy, daddy, baby & me · Formatura do Nível 1",
  aulas: [n1S4A01, n1S4A02],
};
