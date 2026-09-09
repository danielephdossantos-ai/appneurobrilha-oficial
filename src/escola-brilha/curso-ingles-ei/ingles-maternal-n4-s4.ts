import type { AulaIng } from "./types";
import { url as brilha } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as ursinho } from "@/assets/neuro-treino/objetos/ursinho.png.asset.json";
import { url as carro } from "@/assets/neuro-treino/objetos/carro.png.asset.json";
import { url as festa } from "@/assets/neuro-treino/objetos/festa.png.asset.json";
import { url as criancas } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as abraco } from "@/assets/neuro-treino/objetos/abraco.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";

/**
 * Inglês EI — Maternal · Nível 4 · Semana 4
 * "Let's play!" + Formatura do Nível 4 (e do Maternal inteiro).
 */

const n4S4A01: AulaIng = {
  slug: "n4-s4-a01-lets-play",
  titulo: "Let's play!",
  subtitulo: "Nível 4 · Semana 4 · Dia 1",
  icone: "⚽",
  duracaoMin: 6,
  baseCientifica:
    "Convites ('Let\\'s…') são atos performativos que criam intersubjetividade — pré-requisito para conversação plena (Bruner 1983).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Hi! Última semana do Nível 4! Hoje é dia de convidar pra brincar: "Let\'s play!" quer dizer BORA BRINCAR!',
      legenda: "Estenda a mão como se estivesse chamando alguém.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Escuta: "Let\'s play ball!", "Let\'s play with teddy!", "Let\'s play car!".',
      itens: [
        { en: "Let's play ball", pt: "Bora jogar bola", imagemUrl: bola },
        { en: "Let's play with teddy", pt: "Bora brincar com o ursinho", imagemUrl: ursinho },
        { en: "Let's play car", pt: "Bora brincar de carrinho", imagemUrl: carro },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Let\'s play ball!". Toca na "ball".',
      palavraAlvoEn: "Ball",
      opcoes: [
        { nome: "bola", imagemUrl: bola, correta: true },
        { nome: "ursinho", imagemUrl: ursinho, correta: false },
        { nome: "carro", imagemUrl: carro, correta: false },
      ],
      feedbackAcerto: 'Yes! "Let\'s play ball!". Kick kick!',
      feedbackErro: 'A "ball" é a bolinha.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Let\'s play car!". Toca no "car".',
      palavraAlvoEn: "Car",
      opcoes: [
        { nome: "carrinho", imagemUrl: carro, correta: true },
        { nome: "bola", imagemUrl: bola, correta: false },
        { nome: "ursinho", imagemUrl: ursinho, correta: false },
      ],
      feedbackAcerto: 'Vroom vroom! "Let\'s play car!".',
      feedbackErro: 'O "car" é o carrinho.',
    },
    {
      tipo: "historiaEn",
      titulo: "Play time!",
      cenas: [
        {
          imagemUrl: menino,
          narracao: 'Tom pega a bola e chama Lily: "Let\'s play ball!".',
        },
        {
          imagemUrl: menina,
          narracao: 'Lily corre e responde: "Yes! Let\'s play!".',
        },
        {
          imagemUrl: criancas,
          narracao: 'Todo mundo brinca junto. "Play time" é o melhor!',
        },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: bola,
      convite:
        'Chama o adulto pra brincar em inglês: "Let\'s play ball!", "Let\'s play car!". Depois brinquem juntos de verdade por 1 minutinho.',
      dica: "A brincadeira real fixa o vocabulário.",
    },
    {
      tipo: "celebracao",
      medalha: "Little Talker — Let's Play",
      mascoteUrl: brilha,
      falaFinal:
        'Great! Você já convida pra brincar em inglês: "Let\'s play!". You are a real talker!',
    },
  ],
};

const n4S4A02: AulaIng = {
  slug: "n4-s4-a02-graduation",
  titulo: "Graduation!",
  subtitulo: "Nível 4 · Semana 4 · Dia 2 · Formatura do Maternal",
  icone: "🎓",
  duracaoMin: 8,
  baseCientifica:
    "Revisão intercalada final (Rohrer & Taylor 2007) + celebração afetiva consolidam identidade de aprendiz de L2 (Dörnyei 2009).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Wow, friend! Hoje é a FORMATURA do Maternal inteiro! Nível 1, 2, 3 e 4 — você fez TUDO! Vamos revisar as coisas mais legais?',
      legenda: "Aplauda antes de começar!",
    },
    {
      tipo: "musicaEn",
      imagemUrl: festa,
      versos: [
        { en: "Hello, hello, how are you?", pt: "Olá, olá, como você está?", gesto: "👋" },
        { en: "I'm happy, thank you!", pt: "Estou feliz, obrigado!", gesto: "😊" },
        { en: "Yes, I can speak English too!", pt: "Sim, eu falo inglês também!", gesto: "🎉" },
      ],
      legenda: "Cante alto batendo palma.",
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Revisão: "Look! It\'s a dog!". Toca no "dog".',
      palavraAlvoEn: "Dog",
      opcoes: [
        { nome: "cachorro", imagemUrl: cachorro, correta: true },
        { nome: "bola", imagemUrl: bola, correta: false },
        { nome: "maçã", imagemUrl: maca, correta: false },
      ],
      feedbackAcerto: 'Yes! "It\'s a dog!". Você lembrou!',
      feedbackErro: 'O "dog" faz woof woof.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"I like apple!". Toca na "apple".',
      palavraAlvoEn: "Apple",
      opcoes: [
        { nome: "maçã", imagemUrl: maca, correta: true },
        { nome: "carro", imagemUrl: carro, correta: false },
        { nome: "ursinho", imagemUrl: ursinho, correta: false },
      ],
      feedbackAcerto: 'Yummy! "I like apple!".',
      feedbackErro: '"Apple" é vermelhinha.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Let\'s play ball!". Toca na "ball".',
      palavraAlvoEn: "Ball",
      opcoes: [
        { nome: "bola", imagemUrl: bola, correta: true },
        { nome: "carro", imagemUrl: carro, correta: false },
        { nome: "ursinho", imagemUrl: ursinho, correta: false },
      ],
      feedbackAcerto: 'Yes! "Let\'s play ball!".',
      feedbackErro: 'A "ball" é a bolinha.',
    },
    {
      tipo: "historiaEn",
      titulo: "A perfect day",
      cenas: [
        {
          imagemUrl: menina,
          narracao: 'Lily acorda e diz: "Hello, mommy! I\'m happy!".',
        },
        {
          imagemUrl: maca,
          narracao: 'Ela come e fala: "Yummy! I like apple!".',
        },
        {
          imagemUrl: abraco,
          narracao: 'No fim do dia: "Bye, friends! See you tomorrow!". Um dia perfeito em inglês!',
        },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: festa,
      convite:
        'Show final! Fala uma frase inteira em inglês pro adulto: pode ser "Hello! My name is __!", "I\'m happy!", "I like apple!" ou "Let\'s play!". Escolha a que gostou mais!',
      dica: "Aplauda com força. É formatura!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "English Star at Home",
      convite:
        'Missão de formatura: fala 3 frases em inglês pra família toda escutar: "Hello!", "I\'m happy!", "I like __!". Grave um vídeo pra guardar no álbum!',
      dicaAdulto: "Faça um mini-diploma em casa para marcar o momento.",
    },
    {
      tipo: "celebracao",
      medalha: "🎓 Maternal Graduate — English Star!",
      mascoteUrl: brilha,
      falaFinal:
        'Congratulations! Você terminou o MATERNAL inteiro em inglês! Nível 1, 2, 3 e 4! Você é uma English Star de verdade! See you no Pré I!',
    },
  ],
};

export const n4Maternal_semana4 = {
  slug: "n4-semana-4",
  numero: 4,
  titulo: "Semana 4 — Let's play! + Formatura",
  subtitulo: "Convite pra brincar e cerimônia de formatura do Maternal",
  aulas: [n4S4A01, n4S4A02],
};
