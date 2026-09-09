import type { AulaIng } from "./types";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as bolo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as carro } from "@/assets/neuro-treino/objetos/carro.png.asset.json";
import { url as ursinho } from "@/assets/neuro-treino/objetos/ursinho.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";

/**
 * Inglês EI — Pré I · Nível 3 · Semana 3
 * "I Can Say — Do you like…?"
 *
 * Frame: Q: "Do you like ___?"  A: "Yes, I like!" / "No, thank you."
 * Introduz a primeira resposta binária Yes/No + fórmula "I like".
 * Formulaic chunks reduzem carga (Ellis 2003).
 */

const n3S3A01: AulaIng = {
  slug: "n3-s3-a01-do-you-like-food",
  titulo: "Do you like…? — food",
  subtitulo: "Nível 3 · Semana 3 · Dia 1",
  icone: "🍎",
  duracaoMin: 6,
  baseCientifica:
    "Respostas curtas Yes/No como rota de produção precoce. Preferências pessoais aumentam engajamento afetivo (Krashen 1982).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi! Hoje eu vou perguntar: "Do you like…?". Se você gosta, fala: "Yes, I like!". Se não gosta, fala: "No, thank you.".',
      legenda: "Balance a cabeça sim ou não ao responder.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada comidinha: "apple", "banana", "cake".',
      itens: [
        { en: "Apple", pt: "Maçã", imagemUrl: maca },
        { en: "Banana", pt: "Banana", imagemUrl: banana },
        { en: "Cake", pt: "Bolo", imagemUrl: bolo },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio:
        '"Do you like apple?". Se VOCÊ gosta de maçã, toca na maçã e diz "Yes, I like!".',
      palavraAlvoEn: "Apple",
      opcoes: [
        { nome: "maçã", imagemUrl: maca, correta: true },
        { nome: "banana", imagemUrl: banana, correta: false },
        { nome: "bolo", imagemUrl: bolo, correta: false },
      ],
      feedbackAcerto: 'Yes! "I like apple!". Fruta gostosa.',
      feedbackErro: 'Escuta: "apple" é a maçã.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Do you like cake?". Toca no bolo pra dizer "Yes, I like cake!".',
      palavraAlvoEn: "Cake",
      opcoes: [
        { nome: "bolo", imagemUrl: bolo, correta: true },
        { nome: "maçã", imagemUrl: maca, correta: false },
        { nome: "banana", imagemUrl: banana, correta: false },
      ],
      feedbackAcerto: 'Yummy! "I like cake!".',
      feedbackErro: '"Cake" é o bolo de aniversário.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio:
        '"Do you like banana?". Toca na banana pra dizer "Yes, I like banana!".',
      palavraAlvoEn: "Banana",
      opcoes: [
        { nome: "banana", imagemUrl: banana, correta: true },
        { nome: "maçã", imagemUrl: maca, correta: false },
        { nome: "bolo", imagemUrl: bolo, correta: false },
      ],
      feedbackAcerto: 'Great! "I like banana!". Amarela e docinha.',
      feedbackErro: '"Banana" é comprida e amarela.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: maca,
      convite:
        'Vai na cozinha e olha 3 comidas. Pra cada uma, responde: "Yes, I like!" ou "No, thank you.". Você é a chef!',
      dica: "Vale balançar a cabeça sim/não bem forte.",
    },
    {
      tipo: "celebracao",
      medalha: "I Can Say — I Like",
      mascoteUrl: buddy,
      falaFinal:
        'Amazing! Você já responde: "Yes, I like!" ou "No, thank you.". You can choose in English!',
    },
  ],
};

const n3S3A02: AulaIng = {
  slug: "n3-s3-a02-do-you-like-toys",
  titulo: "Do you like…? — toys & pets",
  subtitulo: "Nível 3 · Semana 3 · Dia 2",
  icone: "🧸",
  duracaoMin: 6,
  baseCientifica:
    "Segunda passada do frame 'Do you like?' com campo lexical novo — brinquedos e pets. Transferência de forma para conteúdo (DeKeyser 2007).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi again! Mesma pergunta de ontem: "Do you like…?". Hoje sobre brinquedos e bichinhos: "Do you like the ball? The teddy bear? The dog?".',
      legenda: "Balance a cabeça sim/não pra cada figura.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura: "ball", "car", "teddy bear", "dog", "rabbit".',
      itens: [
        { en: "Ball", pt: "Bola", imagemUrl: bola },
        { en: "Car", pt: "Carro", imagemUrl: carro },
        { en: "Teddy bear", pt: "Ursinho", imagemUrl: ursinho },
        { en: "Dog", pt: "Cachorro", imagemUrl: cachorro },
        { en: "Rabbit", pt: "Coelho", imagemUrl: coelho },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Do you like the ball?". Toca na bola pra dizer "Yes, I like!".',
      palavraAlvoEn: "Ball",
      opcoes: [
        { nome: "bola", imagemUrl: bola, correta: true },
        { nome: "carro", imagemUrl: carro, correta: false },
        { nome: "ursinho", imagemUrl: ursinho, correta: false },
      ],
      feedbackAcerto: 'Yes! "I like the ball!".',
      feedbackErro: '"Ball" é a bolinha de brincar.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Do you like the dog?". Toca no cachorrinho.',
      palavraAlvoEn: "Dog",
      opcoes: [
        { nome: "cachorro", imagemUrl: cachorro, correta: true },
        { nome: "coelho", imagemUrl: coelho, correta: false },
        { nome: "carro", imagemUrl: carro, correta: false },
      ],
      feedbackAcerto: 'Woof! "I like the dog!".',
      feedbackErro: 'O "dog" faz "woof, woof!".',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Último! "Do you like the teddy bear?". Toca no ursinho.',
      palavraAlvoEn: "Teddy bear",
      opcoes: [
        { nome: "ursinho", imagemUrl: ursinho, correta: true },
        { nome: "coelho", imagemUrl: coelho, correta: false },
        { nome: "bola", imagemUrl: bola, correta: false },
      ],
      feedbackAcerto: 'Cute! "I like my teddy bear!".',
      feedbackErro: '"Teddy bear" é o ursinho de pelúcia.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: ursinho,
      convite:
        'Pega 3 brinquedos de verdade. Pra cada um responde: "Yes, I like!" ou "No, thank you.". Um verdadeiro talker!',
      dica: "Fala olhando pro brinquedo, como se fosse gente.",
    },
    {
      tipo: "celebracao",
      medalha: "I Can Say — My Favorites",
      mascoteUrl: buddy,
      falaFinal:
        'Wonderful! Você já fala do que gosta em inglês: "Yes, I like!". You can share your favorites!',
    },
  ],
};

export const n3Pre1_semana3 = {
  slug: "n3-semana-3",
  numero: 3,
  titulo: "Semana 3 — Do you like…?",
  subtitulo: "Yes / No + 'I like'",
  aulas: [n3S3A01, n3S3A02],
};
