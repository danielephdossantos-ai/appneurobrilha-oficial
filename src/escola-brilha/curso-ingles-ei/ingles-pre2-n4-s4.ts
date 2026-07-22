import type { AulaIng } from "./types";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as festa } from "@/assets/neuro-treino/objetos/festa.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as criancas } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as escola } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as parque } from "@/assets/neuro-treino/objetos/parque.png.asset.json";
import { url as familia } from "@/assets/neuro-treino/objetos/familia-tradicional.png.asset.json";
import { url as abraco } from "@/assets/neuro-treino/objetos/abraco.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as alegre } from "@/assets/neuro-treino/objetos/quadro-alegre.png.asset.json";

/**
 * Inglês EI — Pré II · Nível 4 · Semana 4
 * "My big story!" + Formatura do Nível 4 e do Pré II inteiro.
 */

const n4S4A01: AulaIng = {
  slug: "n4-s4-a01-my-big-story",
  titulo: "My big story!",
  subtitulo: "Nível 4 · Semana 4 · Dia 1",
  icone: "📖",
  duracaoMin: 8,
  baseCientifica:
    "Produção narrativa autônoma (Berman & Slobin 1994) — Pré II encadeia 5–6 frases com estruturas dominadas.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, storyteller! Hoje VOCÊ conta sua GRANDE história. Junta tudo: casa, escola, comer, amigos, família!',
      legenda: "Fique confortável. É hora de contar.",
    },
    {
      tipo: "historiaEn",
      titulo: "My big day (model)",
      cenas: [
        { imagemUrl: sol, narracao: '"Good morning! It\'s sunny! I feel happy!".' },
        { imagemUrl: escola, narracao: '"Let\'s go to school! I take my backpack!".' },
        { imagemUrl: maca, narracao: '"I want an apple, please! Thank you!".' },
        { imagemUrl: parque, narracao: '"Let\'s go to the park! I play with my friends!".' },
        { imagemUrl: familia, narracao: '"Good night! I love my family!".' },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"How\'s the weather?" — toca no SOL.',
      palavraAlvoEn: "Sunny",
      opcoes: [
        { nome: "sol", imagemUrl: sol, correta: true },
        { nome: "parque", imagemUrl: parque, correta: false },
        { nome: "escola", imagemUrl: escola, correta: false },
      ],
      feedbackAcerto: 'Yes! "It\'s sunny!".',
      feedbackErro: 'Sol = "sunny".',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Let\'s go to __!". Toca no PARQUE.',
      palavraAlvoEn: "Park",
      opcoes: [
        { nome: "parque", imagemUrl: parque, correta: true },
        { nome: "escola", imagemUrl: escola, correta: false },
        { nome: "família", imagemUrl: familia, correta: false },
      ],
      feedbackAcerto: 'Perfect! "Let\'s go to the park!".',
      feedbackErro: '"Park" é o parquinho.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: criancas,
      convite:
        'Agora VOCÊ! Fala 5 frases sobre um dia: "Good morning!", "It\'s sunny!", "I want __!", "Let\'s go to __!", "I love my family!".',
      dica: "Se travar, olhe as figuras.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: menina,
      pergunta:
        'Qual foi a MELHOR parte do seu dia HOJE? Tenta contar em inglês: "I like…", "I feel happy!", "I want…".',
    },
    {
      tipo: "celebracao",
      medalha: "Big Storyteller — My Day",
      mascoteUrl: buddy,
      falaFinal: 'Wow! Você contou uma HISTÓRIA GRANDE em inglês! Você é um storyteller de verdade!',
    },
  ],
};

const n4S4A02: AulaIng = {
  slug: "n4-s4-a02-graduation-pre2",
  titulo: "Graduation Pré II!",
  subtitulo: "Nível 4 · Semana 4 · Dia 2 · Formatura do Pré II',",
  icone: "🎓",
  duracaoMin: 9,
  baseCientifica:
    "Revisão intercalada + celebração identitária (Dörnyei 2009) marcam a transição para 1º ano do Fundamental.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Wow, my friend! Hoje é a FORMATURA do Pré II inteiro! Nível 1, 2, 3 e 4 — você aprendeu MUITO!',
      legenda: "Aplauda antes de começar!",
    },
    {
      tipo: "musicaEn",
      imagemUrl: festa,
      versos: [
        { en: "Hello! How are you today?", pt: "Olá! Como você está?", gesto: "👋" },
        { en: "I feel happy! I feel great!", pt: "Me sinto feliz! Ótimo!", gesto: "😊" },
        { en: "I speak English! Yes, I can!", pt: "Eu falo inglês! Sim, consigo!", gesto: "🎉" },
      ],
      legenda: "Cante alto e mexa o corpo!",
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Revisão N1: qual é a "apple"? Toca na MAÇÃ.',
      palavraAlvoEn: "Apple",
      opcoes: [
        { nome: "maçã", imagemUrl: maca, correta: true },
        { nome: "casa", imagemUrl: casa, correta: false },
        { nome: "escola", imagemUrl: escola, correta: false },
      ],
      feedbackAcerto: 'Yes! "Apple!". Yummy!',
      feedbackErro: '"Apple" é maçã.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Revisão N3: "I feel happy!". Toca na cara FELIZ.',
      palavraAlvoEn: "Happy",
      opcoes: [
        { nome: "cara feliz", imagemUrl: alegre, correta: true },
        { nome: "casa", imagemUrl: casa, correta: false },
        { nome: "maçã", imagemUrl: maca, correta: false },
      ],
      feedbackAcerto: 'Right! "I feel happy!".',
      feedbackErro: 'Feliz = "happy".',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Revisão N4: "Let\'s go to __!". Toca no PARQUE.',
      palavraAlvoEn: "Park",
      opcoes: [
        { nome: "parque", imagemUrl: parque, correta: true },
        { nome: "casa", imagemUrl: casa, correta: false },
        { nome: "família", imagemUrl: familia, correta: false },
      ],
      feedbackAcerto: 'Perfect! "Let\'s go to the park!".',
      feedbackErro: '"Park" é o parquinho.',
    },
    {
      tipo: "historiaEn",
      titulo: "A perfect Pré II year",
      cenas: [
        { imagemUrl: menina, narracao: 'Lily começou: "Hello! My name is Lily!".' },
        { imagemUrl: menino, narracao: 'Depois: "I feel happy! I want an apple, please!".' },
        { imagemUrl: abraco, narracao: '"Thank you, Buddy! I speak English! Bye Pré II! Hello 1st grade!".' },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: festa,
      convite:
        'Show final! Escolhe 4 frases favoritas pra falar pra família: "Hello!", "I feel happy!", "I want __!", "Let\'s go!". Aplausos!',
      dica: "Você mereceu o diploma!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Pré II English Star",
      convite:
        'Missão de formatura: grave um vídeo curtinho falando 4 frases em inglês pra família guardar. Coloque no álbum de recordações!',
      dicaAdulto: "Faça um mini-diploma em papel. É simbólico e marca!",
    },
    {
      tipo: "celebracao",
      medalha: "🎓 Pré II Graduate — English Star!",
      mascoteUrl: buddy,
      falaFinal:
        'Congratulations! Você terminou o PRÉ II inteiro em inglês! Nível 1, 2, 3 e 4! Você é uma English Star! Ready for 1st grade!',
    },
  ],
};

export const n4Pre2_semana4 = {
  slug: "n4-semana-4",
  numero: 4,
  titulo: "Semana 4 — My big story! + Formatura",
  subtitulo: "Storytelling e cerimônia de formatura do Pré II",
  aulas: [n4S4A01, n4S4A02],
};
