import type { AulaIng } from "./types";
import { url as brilha } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as arcoiris } from "@/assets/neuro-treino/objetos/arco-iris.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";

/**
 * Inglês EI — Maternal · Nível 3 · Semana 3
 * "What's this? — Nature"
 *
 * Terceira semana do N3 mantém a estrutura fixa pergunta-resposta
 * ("What's this? → It's a…"), agora aplicada à natureza. Reciclagem
 * de itens já vistos no N2/S2 (sol, lua, chuva, arco-íris) para
 * automatizar a frase-alvo (Nation 2001; DeKeyser 2007).
 */

// ============================================================
// AULA 01 — What's this? (sky)
// ============================================================
const n3S3A01: AulaIng = {
  slug: "n3-s3-a01-whats-this-sky",
  titulo: "What's this? — Sky",
  subtitulo: "Nível 3 · Semana 3 · Dia 1",
  icone: "☀️",
  duracaoMin: 5,
  baseCientifica:
    "Reciclagem do vocabulário do céu (visto no N2/S2) dentro do frame 'It's a __' — automatização por prática distribuída (Ellis 2003).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Hi! Olha lá no céu. Eu pergunto: "What\'s this?". Hoje as respostas são: "It\'s the sun!", "It\'s the moon!", "It\'s a rainbow!".',
      legenda: "Aponte para a janela ou para o teto ao ouvir cada palavra.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio:
        'Toca em cada figura do céu: "sun", "moon", "rainbow".',
      itens: [
        { en: "Sun", pt: "Sol", imagemUrl: sol },
        { en: "Moon", pt: "Lua", imagemUrl: lua },
        { en: "Rainbow", pt: "Arco-íris", imagemUrl: arcoiris },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"What\'s this? It\'s the… sun!". Toca no "sun".',
      palavraAlvoEn: "Sun",
      opcoes: [
        { nome: "sol", imagemUrl: sol, correta: true },
        { nome: "lua", imagemUrl: lua, correta: false },
        { nome: "arco-íris", imagemUrl: arcoiris, correta: false },
      ],
      feedbackAcerto: 'Yes! "It\'s the sun!". Bem amarelinho!',
      feedbackErro: 'O "sun" é amarelo e brilha de dia.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"What\'s this? It\'s the… moon!". Toca na "moon".',
      palavraAlvoEn: "Moon",
      opcoes: [
        { nome: "lua", imagemUrl: lua, correta: true },
        { nome: "sol", imagemUrl: sol, correta: false },
        { nome: "arco-íris", imagemUrl: arcoiris, correta: false },
      ],
      feedbackAcerto: 'Perfect! "It\'s the moon!". Aparece à noite.',
      feedbackErro: 'A "moon" a gente vê à noite.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Último! "What\'s this? It\'s a… rainbow!".',
      palavraAlvoEn: "Rainbow",
      opcoes: [
        { nome: "arco-íris", imagemUrl: arcoiris, correta: true },
        { nome: "sol", imagemUrl: sol, correta: false },
        { nome: "lua", imagemUrl: lua, correta: false },
      ],
      feedbackAcerto: 'Wow! "It\'s a rainbow!". Cheio de cores!',
      feedbackErro: 'O "rainbow" aparece depois da chuva, cheio de cores.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: sol,
      convite:
        'Vai até a janela com o adulto. Olha pra fora e fala: "It\'s the sun!" se for de dia, ou "It\'s the moon!" se for de noite.',
      dica: "Aponte com o dedinho para o céu ao falar.",
    },
    {
      tipo: "celebracao",
      medalha: "I Can Say — Sky",
      mascoteUrl: brilha,
      falaFinal:
        'Amazing! Você já responde sobre o céu: "It\'s the sun", "It\'s the moon", "It\'s a rainbow". You can say!',
    },
  ],
};

// ============================================================
// AULA 02 — What's this? (garden)
// ============================================================
const n3S3A02: AulaIng = {
  slug: "n3-s3-a02-whats-this-garden",
  titulo: "What's this? — Garden",
  subtitulo: "Nível 3 · Semana 3 · Dia 2",
  icone: "🌳",
  duracaoMin: 5,
  baseCientifica:
    "Segunda passada do frame 'It's a __' com campo lexical de jardim. Ampliação de contexto sem trocar a estrutura (VanPatten 2003).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Hi again! Vamos pro jardim! Mesma pergunta: "What\'s this?". Hoje as respostas são: "It\'s a tree!", "It\'s a flower!", "It\'s rain!".',
      legenda: "Aponte para plantas de verdade ou fotos ao ouvir.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada coisa do jardim: "tree", "flower", "rain".',
      itens: [
        { en: "Tree", pt: "Árvore", imagemUrl: arvore },
        { en: "Flower", pt: "Flor", imagemUrl: flor },
        { en: "Rain", pt: "Chuva", imagemUrl: chuva },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"What\'s this? It\'s a… tree!". Toca na "tree".',
      palavraAlvoEn: "Tree",
      opcoes: [
        { nome: "árvore", imagemUrl: arvore, correta: true },
        { nome: "flor", imagemUrl: flor, correta: false },
        { nome: "chuva", imagemUrl: chuva, correta: false },
      ],
      feedbackAcerto: 'Yes! "It\'s a tree!". Bem grandona!',
      feedbackErro: 'A "tree" é a árvore. Alta, com folhas verdes.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"What\'s this? It\'s a… flower!". Toca na "flower".',
      palavraAlvoEn: "Flower",
      opcoes: [
        { nome: "flor", imagemUrl: flor, correta: true },
        { nome: "árvore", imagemUrl: arvore, correta: false },
        { nome: "chuva", imagemUrl: chuva, correta: false },
      ],
      feedbackAcerto: 'Perfect! "It\'s a flower!". Que cheirinho bom!',
      feedbackErro: 'A "flower" é a florzinha colorida.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'E agora! "What\'s this? It\'s… rain!".',
      palavraAlvoEn: "Rain",
      opcoes: [
        { nome: "chuva", imagemUrl: chuva, correta: true },
        { nome: "árvore", imagemUrl: arvore, correta: false },
        { nome: "flor", imagemUrl: flor, correta: false },
      ],
      feedbackAcerto: 'Yes! "It\'s rain!". Splish, splash!',
      feedbackErro: '"Rain" é a chuvinha que cai do céu.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: flor,
      convite:
        'Vai no jardim ou na janela e aponta pra cada coisa que ver. Fala: "It\'s a tree!", "It\'s a flower!" ou "It\'s rain!".',
      dica: "Se não tiver jardim, vale apontar pra desenhos ou fotos.",
    },
    {
      tipo: "celebracao",
      medalha: "I Can Say — Nature",
      mascoteUrl: brilha,
      falaFinal:
        'Wow! Você já fala do jardim em inglês: "It\'s a tree", "It\'s a flower", "It\'s rain". Little nature explorer!',
    },
  ],
};

export const n3Maternal_semana3 = {
  slug: "n3-semana-3",
  numero: 3,
  titulo: "Semana 3 — What's this? · Nature",
  subtitulo: "Céu e jardim com a mesma frase 'It's a…'",
  aulas: [n3S3A01, n3S3A02],
};
