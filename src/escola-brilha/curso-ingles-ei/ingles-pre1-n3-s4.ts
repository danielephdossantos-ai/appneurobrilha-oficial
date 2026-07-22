import type { AulaIng } from "./types";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as mae } from "@/assets/neuro-treino/objetos/mae.png.asset.json";
import { url as pai } from "@/assets/neuro-treino/objetos/pai.png.asset.json";
import { url as bebe } from "@/assets/neuro-treino/objetos/bebe.png.asset.json";
import { url as avoMulher } from "@/assets/neuro-treino/objetos/avo-mulher.png.asset.json";
import { url as avoHomem } from "@/assets/neuro-treino/objetos/avo-homem.png.asset.json";
import { url as familiaGrande } from "@/assets/neuro-treino/objetos/familia-grande.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as bolo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";

/**
 * Inglês EI — Pré I · Nível 3 · Semana 4
 * "I Can Say — Who is this?" + Formatura N3
 *
 * Frame: Q: "Who is this?"  A: "This is my mommy / daddy / baby brother."
 * Fecha o N3 com estrutura afetiva (família) e a medalha "I Can Say Star".
 */

const n3S4A01: AulaIng = {
  slug: "n3-s4-a01-who-is-this-family",
  titulo: "Who is this? — my family",
  subtitulo: "Nível 3 · Semana 4 · Dia 1",
  icone: "👨‍👩‍👧",
  duracaoMin: 6,
  baseCientifica:
    "Aprendizado ancorado em vínculos afetivos primários (mommy/daddy) — alta saliência emocional acelera fixação (Krashen 1982).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi! Hoje eu pergunto: "Who is this?" — "quem é essa pessoa?". Resposta: "This is my mommy!", "This is my daddy!".',
      legenda: "Aponte para uma foto da família se puder.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada pessoa: "mommy", "daddy", "baby".',
      itens: [
        { en: "Mommy", pt: "Mamãe", imagemUrl: mae },
        { en: "Daddy", pt: "Papai", imagemUrl: pai },
        { en: "Baby", pt: "Bebê", imagemUrl: bebe },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Who is this? This is my… mommy!". Toca na mamãe.',
      palavraAlvoEn: "Mommy",
      opcoes: [
        { nome: "mamãe", imagemUrl: mae, correta: true },
        { nome: "papai", imagemUrl: pai, correta: false },
        { nome: "bebê", imagemUrl: bebe, correta: false },
      ],
      feedbackAcerto: 'Yes! "This is my mommy!". ❤️',
      feedbackErro: '"Mommy" é a mamãe.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Who is this? This is my… daddy!". Toca no papai.',
      palavraAlvoEn: "Daddy",
      opcoes: [
        { nome: "papai", imagemUrl: pai, correta: true },
        { nome: "mamãe", imagemUrl: mae, correta: false },
        { nome: "bebê", imagemUrl: bebe, correta: false },
      ],
      feedbackAcerto: 'Perfect! "This is my daddy!".',
      feedbackErro: '"Daddy" é o papai.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Who is this? This is my… baby brother!". Toca no bebê.',
      palavraAlvoEn: "Baby",
      opcoes: [
        { nome: "bebê", imagemUrl: bebe, correta: true },
        { nome: "papai", imagemUrl: pai, correta: false },
        { nome: "mamãe", imagemUrl: mae, correta: false },
      ],
      feedbackAcerto: 'Cute! "This is my baby brother!".',
      feedbackErro: '"Baby" é o neném pequeninho.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: coracao,
      convite:
        'Pega uma foto ou chama alguém da casa. Aponta e responde: "This is my mommy!" ou "This is my daddy!". Um abraço no final!',
      dica: "Vale falar do pelúcia também: 'This is my teddy bear!'.",
    },
    {
      tipo: "celebracao",
      medalha: "I Can Say — My Family",
      mascoteUrl: buddy,
      falaFinal:
        'Amazing! Você já apresenta a família: "This is my mommy, daddy, baby!". So sweet!',
    },
  ],
};

const n3S4A02: AulaIng = {
  slug: "n3-s4-a02-grandparents-formatura",
  titulo: "Who is this? — grandparents · Formatura N3",
  subtitulo: "Nível 3 · Semana 4 · Dia 2",
  icone: "🎓",
  duracaoMin: 7,
  baseCientifica:
    "Consolidação por revisão espaçada: mistura de todos os frames do N3 ('It's a', 'It's red', 'I like', 'This is my') antes da formatura (Nation 2001).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, star! Última aula do Nível 3! Hoje entram "grandma" (vovó) e "grandpa" (vovô). Depois — formatura!',
      legenda: "Se tiver foto dos avós por perto, mostre.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada avó/avô: "grandma", "grandpa", "family".',
      itens: [
        { en: "Grandma", pt: "Vovó", imagemUrl: avoMulher },
        { en: "Grandpa", pt: "Vovô", imagemUrl: avoHomem },
        { en: "Family", pt: "Família", imagemUrl: familiaGrande },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Who is this? This is my… grandma!". Toca na vovó.',
      palavraAlvoEn: "Grandma",
      opcoes: [
        { nome: "vovó", imagemUrl: avoMulher, correta: true },
        { nome: "vovô", imagemUrl: avoHomem, correta: false },
        { nome: "mamãe", imagemUrl: mae, correta: false },
      ],
      feedbackAcerto: 'Yes! "This is my grandma!". ❤️',
      feedbackErro: '"Grandma" é a vovó.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Who is this? This is my… grandpa!". Toca no vovô.',
      palavraAlvoEn: "Grandpa",
      opcoes: [
        { nome: "vovô", imagemUrl: avoHomem, correta: true },
        { nome: "vovó", imagemUrl: avoMulher, correta: false },
        { nome: "papai", imagemUrl: pai, correta: false },
      ],
      feedbackAcerto: 'Perfect! "This is my grandpa!".',
      feedbackErro: '"Grandpa" é o vovô.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Grande revisão! "Do you like cake?". Toca no bolo pra dizer "Yes!".',
      palavraAlvoEn: "Cake",
      opcoes: [
        { nome: "bolo", imagemUrl: bolo, correta: true },
        { nome: "vovó", imagemUrl: avoMulher, correta: false },
        { nome: "família", imagemUrl: familiaGrande, correta: false },
      ],
      feedbackAcerto: 'Yummy! "Yes, I like cake!". Bolo da formatura!',
      feedbackErro: '"Cake" é o bolo de festa.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: familiaGrande,
      convite:
        'Sua formatura! Chama a família e apresenta cada um em inglês: "This is my mommy! This is my daddy! This is my grandma!". Termina com um abraço!',
      dica: "Vale filminho curto pra guardar de recordação.",
    },
    {
      tipo: "celebracao",
      medalha: "I Can Say Star — Nível 3 Pré I",
      mascoteUrl: buddy,
      falaFinal:
        'You did it! Você terminou o Nível 3! Já pergunta, responde e apresenta em inglês. You are an I Can Say Star! Congratulations!',
    },
  ],
};

export const n3Pre1_semana4 = {
  slug: "n3-semana-4",
  numero: 4,
  titulo: "Semana 4 — Who is this? + Formatura",
  subtitulo: "Família + medalha 'I Can Say Star'",
  aulas: [n3S4A01, n3S4A02],
};
