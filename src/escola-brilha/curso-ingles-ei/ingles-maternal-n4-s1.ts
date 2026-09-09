import type { AulaIng } from "./types";
import { url as brilha } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as abraco } from "@/assets/neuro-treino/objetos/abraco.png.asset.json";
import { url as quadroTriste } from "@/assets/neuro-treino/objetos/quadro-triste.png.asset.json";
import { url as festa } from "@/assets/neuro-treino/objetos/festa.png.asset.json";
import { url as criancas } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";

/**
 * Inglês EI — Maternal · Nível 4 · Semana 1
 * "How are you? I'm happy!" — primeiro mini-diálogo.
 *
 * N4 = Little Talker: a criança começa a PRODUZIR frases curtas em
 * resposta a perguntas do Buddy. Dois turnos: pergunta + resposta.
 */

const n4S1A01: AulaIng = {
  slug: "n4-s1-a01-how-are-you",
  titulo: "How are you?",
  subtitulo: "Nível 4 · Semana 1 · Dia 1",
  icone: "😊",
  duracaoMin: 6,
  baseCientifica:
    "Rotinas conversacionais fixam 'adjacency pairs' (Schegloff 2007) — pergunta + resposta é a menor unidade de fala real.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Hi, friend! Nível 4 é o nível dos que já FALAM! Eu pergunto: "How are you?". Você responde: "I\'m happy!" ou "I\'m sad!".',
      legenda: "Faça carinha alegre e triste com a criança.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada carinha: "happy" (feliz) e "sad" (triste).',
      itens: [
        { en: "Happy", pt: "Feliz", imagemUrl: menina },
        { en: "Sad", pt: "Triste", imagemUrl: quadroTriste },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"How are you? I\'m happy!". Toca em quem está "happy".',
      palavraAlvoEn: "Happy",
      opcoes: [
        { nome: "menina feliz", imagemUrl: menina, correta: true },
        { nome: "carinha triste", imagemUrl: quadroTriste, correta: false },
      ],
      feedbackAcerto: 'Yes! "I\'m happy!" — sorriso grande!',
      feedbackErro: '"Happy" é a carinha que sorri.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"How are you? I\'m sad…". Toca em quem está "sad".',
      palavraAlvoEn: "Sad",
      opcoes: [
        { nome: "carinha triste", imagemUrl: quadroTriste, correta: true },
        { nome: "menina feliz", imagemUrl: menina, correta: false },
      ],
      feedbackAcerto: 'Perfect! "I\'m sad" — a gente abraça pra passar.',
      feedbackErro: '"Sad" é a carinha triste, quando a gente chora.',
    },
    {
      tipo: "historiaEn",
      titulo: "Tom and Lily",
      cenas: [
        {
          imagemUrl: menino,
          narracao: 'Tom encontra a Lily no parque. Ele pergunta: "Hi, Lily! How are you?".',
        },
        {
          imagemUrl: menina,
          narracao: 'Lily sorri e responde: "I\'m happy, Tom! And you?".',
        },
        {
          imagemUrl: abraco,
          narracao: 'Tom fala: "I\'m happy too!". E eles se abraçam.',
        },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: menina,
      convite:
        'Sua vez! O adulto pergunta: "How are you?". Você responde bem alto: "I\'m happy!". Depois troca: você pergunta e o adulto responde.',
      dica: "Faça 3 rodadas de pergunta e resposta.",
    },
    {
      tipo: "celebracao",
      medalha: "Little Talker — How are you?",
      mascoteUrl: brilha,
      falaFinal:
        'Wow! Você já sabe responder em inglês: "I\'m happy!". Isso é conversar!',
    },
  ],
};

const n4S1A02: AulaIng = {
  slug: "n4-s1-a02-my-name-is",
  titulo: "My name is…",
  subtitulo: "Nível 4 · Semana 1 · Dia 2",
  icone: "🙋",
  duracaoMin: 6,
  baseCientifica:
    "Apresentação pessoal é o primeiro ato de fala funcional (Halliday 1975) — dá agência à criança na L2.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Hi! Hoje vou te ensinar a dizer seu nome em inglês. Eu falo: "Hello! My name is Buddy!". Sua vez: "My name is…" e diz seu nome!',
      legenda: "Estimule a criança a completar com o próprio nome.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Escuta o Buddy se apresentar: "Hello!", "My name is Buddy!".',
      itens: [
        { en: "Hello", pt: "Olá", imagemUrl: brilha },
        { en: "My name is Buddy", pt: "Meu nome é Buddy", imagemUrl: brilha },
      ],
    },
    {
      tipo: "historiaEn",
      titulo: "New friends at school",
      cenas: [
        {
          imagemUrl: menino,
          narracao: 'É o primeiro dia de escola. Tom chega e fala: "Hello! My name is Tom!".',
        },
        {
          imagemUrl: menina,
          narracao: 'Lily responde: "Hi, Tom! My name is Lily. Nice to meet you!".',
        },
        {
          imagemUrl: criancas,
          narracao: 'Agora todos os amigos falam o nome deles. Que legal fazer amigos em inglês!',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Quem está dizendo "My name is Tom!"? Toca no menino.',
      palavraAlvoEn: "Tom",
      opcoes: [
        { nome: "menino", imagemUrl: menino, correta: true },
        { nome: "menina", imagemUrl: menina, correta: false },
      ],
      feedbackAcerto: 'Yes! Tom é o menino que se apresentou.',
      feedbackErro: 'Tom é o menininho da historinha.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: menina,
      convite:
        'Faz de conta que você conhece o Buddy agora. Fala bem alto: "Hello! My name is __" e completa com o seu nome!',
      dica: "Repita 3 vezes olhando pro adulto.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: criancas,
      pergunta:
        'Quais amiguinhos seus você conhece? Como eles diriam o nome em inglês? "My name is Ana!", "My name is João!". Vamos brincar de apresentar?',
    },
    {
      tipo: "celebracao",
      medalha: "Little Talker — My Name",
      mascoteUrl: brilha,
      falaFinal:
        'Amazing! Você já se apresenta em inglês: "Hello! My name is __!". Nice to meet you!',
    },
  ],
};

export const n4Maternal_semana1 = {
  slug: "n4-semana-1",
  numero: 1,
  titulo: "Semana 1 — How are you?",
  subtitulo: "Primeiros mini-diálogos: cumprimentar e apresentar",
  aulas: [n4S1A01, n4S1A02],
};
