import type { AulaIng } from "./types";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as escovarDentes } from "@/assets/neuro-treino/objetos/escovar-dentes.png.asset.json";
import { url as banho } from "@/assets/neuro-treino/objetos/banho.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as escola } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";

/**
 * Inglês EI — Pré I · Nível 4 · Semana 1
 * "My day!" — rotina como primeira micro-narrativa em 1ª pessoa.
 *
 * N4 Pré I = Little Storyteller: a criança encadeia 2–3 frases sobre si.
 * Frame: "I wake up. I eat. I play."
 */

const n4S1A01: AulaIng = {
  slug: "n4-s1-a01-morning",
  titulo: "Good morning!",
  subtitulo: "Nível 4 · Semana 1 · Dia 1",
  icone: "🌞",
  duracaoMin: 7,
  baseCientifica:
    "Rotinas diárias são script-based knowledge (Nelson 1986) — a criança já domina o roteiro em L1, o que reduz carga cognitiva ao migrar pra L2.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, friend! Nível 4 do Pré I é o nível dos que já CONTAM historinhas! Hoje: sua manhã. "I wake up. I brush my teeth. I eat.".',
      legenda: "Faça mímica de acordar e espreguiçar.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura: "wake up" (acordar), "brush teeth" (escovar), "eat" (comer).',
      itens: [
        { en: "Wake up", pt: "Acordar", imagemUrl: sol },
        { en: "Brush teeth", pt: "Escovar os dentes", imagemUrl: escovarDentes },
        { en: "Eat breakfast", pt: "Comer o café da manhã", imagemUrl: maca },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"I wake up with the sun!". Toca no sol.',
      palavraAlvoEn: "Wake up",
      opcoes: [
        { nome: "sol", imagemUrl: sol, correta: true },
        { nome: "lua", imagemUrl: lua, correta: false },
        { nome: "bola", imagemUrl: bola, correta: false },
      ],
      feedbackAcerto: 'Yes! "I wake up with the sun!".',
      feedbackErro: '"Wake up" é acordar — quando o sol nasce.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"I brush my teeth!". Toca na escovinha.',
      palavraAlvoEn: "Brush teeth",
      opcoes: [
        { nome: "escovar dentes", imagemUrl: escovarDentes, correta: true },
        { nome: "sol", imagemUrl: sol, correta: false },
        { nome: "maçã", imagemUrl: maca, correta: false },
      ],
      feedbackAcerto: 'Perfect! "I brush my teeth!". Shhh shhh!',
      feedbackErro: '"Brush teeth" é escovar os dentinhos.',
    },
    {
      tipo: "historiaEn",
      titulo: "Lily's morning",
      cenas: [
        { imagemUrl: sol, narracao: 'O sol nasce. Lily abre os olhinhos: "I wake up! Good morning!".' },
        { imagemUrl: escovarDentes, narracao: 'Ela vai no banheiro: "I brush my teeth!". Bem branquinhos!' },
        { imagemUrl: maca, narracao: 'Depois: "I eat an apple!". Yummy! Manhã completa!' },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: sol,
      convite:
        'Sua vez de contar! Faça a mímica da sua manhã e diga em ordem: "I wake up! I brush my teeth! I eat!". Três frases, em pé!',
      dica: "Cada frase, um gesto grande.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: menina,
      pergunta:
        'O que você come no café da manhã? "I eat…" — bread? milk? apple? Fala em inglês o que tomou hoje!',
    },
    {
      tipo: "celebracao",
      medalha: "Little Storyteller — Morning",
      mascoteUrl: buddy,
      falaFinal: 'Amazing! Você já conta sua manhã em inglês com 3 frases!',
    },
  ],
};

const n4S1A02: AulaIng = {
  slug: "n4-s1-a02-school-day",
  titulo: "I go to school!",
  subtitulo: "Nível 4 · Semana 1 · Dia 2",
  icone: "🎒",
  duracaoMin: 7,
  baseCientifica:
    "Sequenciamento temporal ('then', 'after') sustenta a construção de narrativa (Berman & Slobin 1994).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi again! Depois do café, é hora da escola! "I go to school. I play. I go home.".',
      legenda: "Finja pegar uma mochila.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca: "go to school" (ir pra escola), "play" (brincar), "go home" (ir pra casa).',
      itens: [
        { en: "Go to school", pt: "Ir pra escola", imagemUrl: escola },
        { en: "Play", pt: "Brincar", imagemUrl: bola },
        { en: "Go home", pt: "Ir pra casa", imagemUrl: lua },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"I go to school!". Toca na escola.',
      palavraAlvoEn: "School",
      opcoes: [
        { nome: "escola", imagemUrl: escola, correta: true },
        { nome: "bola", imagemUrl: bola, correta: false },
        { nome: "sol", imagemUrl: sol, correta: false },
      ],
      feedbackAcerto: 'Yes! "I go to school!".',
      feedbackErro: '"School" é a escola.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"I play with my friends!". Toca na bolinha.',
      palavraAlvoEn: "Play",
      opcoes: [
        { nome: "bola", imagemUrl: bola, correta: true },
        { nome: "escola", imagemUrl: escola, correta: false },
        { nome: "banho", imagemUrl: banho, correta: false },
      ],
      feedbackAcerto: 'Perfect! "I play ball!".',
      feedbackErro: '"Play" é brincar — com bola, boneca, carrinho.',
    },
    {
      tipo: "historiaEn",
      titulo: "Tom's school day",
      cenas: [
        { imagemUrl: escola, narracao: 'Tom pega a mochila: "I go to school!".' },
        { imagemUrl: bola, narracao: 'Na hora do recreio: "I play with my friends!".' },
        { imagemUrl: banho, narracao: 'Em casa: "I take a bath!" e "I go to bed!". Good night!' },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: escola,
      convite:
        'Conta seu dia inteiro em 3 frases! "I go to school. I play. I go home.". Aponta pra cada figura enquanto fala!',
      dica: "Grave um áudio pro adulto guardar.",
    },
    {
      tipo: "celebracao",
      medalha: "Little Storyteller — My Day",
      mascoteUrl: buddy,
      falaFinal: 'Wow! Você conta o dia inteiro em inglês! Você virou storyteller!',
    },
  ],
};

export const n4Pre1_semana1 = {
  slug: "n4-semana-1",
  numero: 1,
  titulo: "Semana 1 — My day!",
  subtitulo: "Minha rotina em inglês: 3 frases seguidas",
  aulas: [n4S1A01, n4S1A02],
};
