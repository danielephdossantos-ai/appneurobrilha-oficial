import type { AulaIng } from "./types";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as festa } from "@/assets/neuro-treino/objetos/festa.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as criancas } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as parque } from "@/assets/neuro-treino/objetos/parque.png.asset.json";
import { url as escola } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as abraco } from "@/assets/neuro-treino/objetos/abraco.png.asset.json";
import { url as familia } from "@/assets/neuro-treino/objetos/familia-tradicional.png.asset.json";

/**
 * Inglês EI — Pré I · Nível 4 · Semana 4
 * "Tell a story!" + Formatura do Nível 4 e do Pré I inteiro.
 */

const n4S4A01: AulaIng = {
  slug: "n4-s4-a01-my-perfect-day",
  titulo: "Tell my perfect day",
  subtitulo: "Nível 4 · Semana 4 · Dia 1",
  icone: "📖",
  duracaoMin: 8,
  baseCientifica:
    "Produção narrativa própria (Berman & Slobin 1994) — a criança encadeia 4–5 frases usando estruturas já dominadas.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, storyteller! Hoje VOCÊ conta sua história perfeita. Junta tudo: manhã, escola, brincar, comer, dormir!',
      legenda: "Fique confortável. É hora de contar.",
    },
    {
      tipo: "historiaEn",
      titulo: "My perfect day (model)",
      cenas: [
        { imagemUrl: sol, narracao: 'Lily conta: "I wake up with the sun. I\'m happy!".' },
        { imagemUrl: escola, narracao: '"I go to school. I can dance. I can run.".' },
        { imagemUrl: parque, narracao: '"I play at the park. I like ice cream!".' },
        { imagemUrl: familia, narracao: '"I go home. This is my mommy. I love my family. Good night!".' },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Revisão: onde a Lily está de manhã? "I\'m at home!". Toca na cena.',
      palavraAlvoEn: "Home",
      opcoes: [
        { nome: "sol de manhã", imagemUrl: sol, correta: true },
        { nome: "parque", imagemUrl: parque, correta: false },
        { nome: "escola", imagemUrl: escola, correta: false },
      ],
      feedbackAcerto: 'Yes! De manhã ela acorda em casa!',
      feedbackErro: 'De manhã ela acorda em casa, com o sol.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"I play at the __!". Toca no parque.',
      palavraAlvoEn: "Park",
      opcoes: [
        { nome: "parque", imagemUrl: parque, correta: true },
        { nome: "escola", imagemUrl: escola, correta: false },
        { nome: "família", imagemUrl: familia, correta: false },
      ],
      feedbackAcerto: 'Perfect! "I play at the park!".',
      feedbackErro: '"Park" é o parquinho.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: criancas,
      convite:
        'Agora VOCÊ! Fala 4 frases sobre seu dia perfeito: "I wake up. I go to school. I play. I go home.". Adicione uma: "I like…" ou "I can…"!',
      dica: "Se travar, olhe as figuras. É pra tentar!",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: menina,
      pergunta:
        'Qual foi a melhor parte do seu dia HOJE? Fala em inglês: "I like…", "I play…", "I\'m happy!".',
    },
    {
      tipo: "celebracao",
      medalha: "Little Storyteller — My Day",
      mascoteUrl: buddy,
      falaFinal: 'Wow! Você contou uma HISTÓRIA inteira em inglês! Você é um storyteller!',
    },
  ],
};

const n4S4A02: AulaIng = {
  slug: "n4-s4-a02-graduation-pre1",
  titulo: "Graduation Pré I!",
  subtitulo: "Nível 4 · Semana 4 · Dia 2 · Formatura do Pré I",
  icone: "🎓",
  duracaoMin: 9,
  baseCientifica:
    "Revisão intercalada (Rohrer & Taylor 2007) + celebração identitária (Dörnyei 2009) marcam a transição para Pré II.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Wow, my friend! Hoje é a FORMATURA do Pré I inteiro! Nível 1, 2, 3 e 4 — você conquistou tudo!',
      legenda: "Aplauda antes de começar!",
    },
    {
      tipo: "musicaEn",
      imagemUrl: festa,
      versos: [
        { en: "I can jump, I can dance!", pt: "Eu pulo, eu danço!", gesto: "🤸" },
        { en: "I can speak English too!", pt: "Eu falo inglês também!", gesto: "🗣️" },
        { en: "Yes, I can! Yes, I can!", pt: "Sim, eu consigo!", gesto: "🎉" },
      ],
      legenda: "Cante alto e mexa o corpo!",
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Revisão N2: qual é "red"? Toca na maçã.',
      palavraAlvoEn: "Red",
      opcoes: [
        { nome: "maçã vermelha", imagemUrl: maca, correta: true },
        { nome: "bola", imagemUrl: bola, correta: false },
        { nome: "criança", imagemUrl: menina, correta: false },
      ],
      feedbackAcerto: 'Yes! "Red apple!". Você lembra!',
      feedbackErro: '"Red" é vermelho — a maçã.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Revisão N3: "Do you like cake?" — toca em algo gostoso.',
      palavraAlvoEn: "I like",
      opcoes: [
        { nome: "maçã", imagemUrl: maca, correta: true },
        { nome: "escola", imagemUrl: escola, correta: false },
        { nome: "bola", imagemUrl: bola, correta: false },
      ],
      feedbackAcerto: 'Yummy! "Yes, I like apple!".',
      feedbackErro: 'Escolhe uma comidinha pra dizer "I like".',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Revisão N4: "Where do you play?". Toca no parque.',
      palavraAlvoEn: "Park",
      opcoes: [
        { nome: "parque", imagemUrl: parque, correta: true },
        { nome: "família", imagemUrl: familia, correta: false },
        { nome: "sol", imagemUrl: sol, correta: false },
      ],
      feedbackAcerto: 'Yes! "I play at the park!".',
      feedbackErro: 'A gente brinca no parquinho.',
    },
    {
      tipo: "historiaEn",
      titulo: "A perfect Pré I year",
      cenas: [
        { imagemUrl: menina, narracao: 'Lily começou pequenininha: "Hello! My name is Lily!".' },
        { imagemUrl: menino, narracao: 'Depois: "I like red! I can dance! Do you like it?".' },
        { imagemUrl: abraco, narracao: '"Thank you, Buddy! I speak English now! Bye Pré I! Hello Pré II!".' },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: festa,
      convite:
        'Show final! Escolhe 3 frases favoritas pra falar bem alto pra família: "Hello! My name is __!", "I like __!", "I can __!". Aplausos!',
      dica: "Você mereceu o diploma!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Pré I English Star",
      convite:
        'Missão de formatura: grave um vídeo curtinho falando 3 frases em inglês pra família guardar. Coloque no álbum de recordações!',
      dicaAdulto: "Faça um mini-diploma em papel. É simbólico e marca!",
    },
    {
      tipo: "celebracao",
      medalha: "🎓 Pré I Graduate — English Star!",
      mascoteUrl: buddy,
      falaFinal:
        'Congratulations! Você terminou o PRÉ I inteiro em inglês! Nível 1, 2, 3 e 4! Você é uma English Star de verdade! See you no Pré II!',
    },
  ],
};

export const n4Pre1_semana4 = {
  slug: "n4-semana-4",
  numero: 4,
  titulo: "Semana 4 — Tell a story! + Formatura",
  subtitulo: "Storytelling e cerimônia de formatura do Pré I",
  aulas: [n4S4A01, n4S4A02],
};
