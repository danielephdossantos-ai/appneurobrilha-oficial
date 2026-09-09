import type { AulaIng, NivelIng } from "./types";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as mae } from "@/assets/neuro-treino/objetos/mae.png.asset.json";
import { url as pai } from "@/assets/neuro-treino/objetos/pai.png.asset.json";
import { url as bebe } from "@/assets/neuro-treino/objetos/bebe.png.asset.json";
import { url as abraco } from "@/assets/neuro-treino/objetos/abraco.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as cadeira } from "@/assets/neuro-treino/objetos/cadeira.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as nuvem } from "@/assets/neuro-treino/objetos/nuvem.png.asset.json";
import { url as arcoIris } from "@/assets/neuro-treino/objetos/arco-iris.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as bolo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as agua } from "@/assets/neuro-treino/objetos/cristal-agua.png.asset.json";

/**
 * Inglês EI — Pré II · Nível 1 · Baby English (5–6 anos)
 *
 * Recomeço leve para quem nunca teve inglês. Mesmo esqueleto de 7 momentos
 * do Maternal/Pré I N1: 2 palavras/aula, sem música, sem história.
 */

function baby(
  slug: string,
  titulo: string,
  subtitulo: string,
  icone: string,
  intro: string,
  w1: { en: string; pt: string; img: string; feedbackOk: string; feedbackNo: string },
  w2: { en: string; pt: string; img: string; feedbackOk: string; feedbackNo: string },
  medalha: string,
  falaFinal: string,
  convite: string,
  dica: string,
): AulaIng {
  return {
    slug,
    titulo,
    subtitulo,
    icone,
    duracaoMin: 4,
    baseCientifica:
      "2 palavras/aula com repetição 4x (Cowan 2010; Ellis 2003). Ancoragem em objetos prototípicos (Rosch 1978).",
    momentos: [
      { tipo: "boasVindas", mascoteUrl: buddy, falaMascote: intro, legenda: "Aponte enquanto ouve." },
      {
        tipo: "vocabEn",
        instrucaoAudio: `Toca e escuta: "${w1.en}" e "${w2.en}".`,
        itens: [
          { en: w1.en, pt: w1.pt, imagemUrl: w1.img },
          { en: w2.en, pt: w2.pt, imagemUrl: w2.img },
        ],
      },
      {
        tipo: "vocabEn",
        instrucaoAudio: `Uma vez mais, repete alto: "${w1.en}"… "${w2.en}".`,
        itens: [
          { en: w1.en, pt: w1.pt, imagemUrl: w1.img },
          { en: w2.en, pt: w2.pt, imagemUrl: w2.img },
        ],
      },
      {
        tipo: "escolhaImagem",
        instrucaoAudio: `Toca no que é "${w1.en}".`,
        palavraAlvoEn: w1.en,
        opcoes: [
          { nome: w1.pt, imagemUrl: w1.img, correta: true },
          { nome: w2.pt, imagemUrl: w2.img, correta: false },
        ],
        feedbackAcerto: w1.feedbackOk,
        feedbackErro: w1.feedbackNo,
      },
      {
        tipo: "escolhaImagem",
        instrucaoAudio: `Agora toca no que é "${w2.en}".`,
        palavraAlvoEn: w2.en,
        opcoes: [
          { nome: w2.pt, imagemUrl: w2.img, correta: true },
          { nome: w1.pt, imagemUrl: w1.img, correta: false },
        ],
        feedbackAcerto: w2.feedbackOk,
        feedbackErro: w2.feedbackNo,
      },
      { tipo: "fazDeConta", imagemUrl: w1.img, convite, dica },
      { tipo: "celebracao", medalha, mascoteUrl: buddy, falaFinal },
    ],
  };
}

// ============================================================
// SEMANA 1 — Family: Mommy & Daddy / Baby & Hug
// ============================================================
const s1a1 = baby(
  "pre2-n1-s1-a01-mommy-daddy",
  "Mommy & Daddy",
  "Nível 1 · Semana 1 · Dia 1",
  "👩",
  'Hi, friend! Family time! "Mommy" é mamãe, "daddy" é papai.',
  { en: "Mommy", pt: "Mamãe", img: mae, feedbackOk: 'Yes! "Mommy" — mamãe!', feedbackNo: '"Mommy" é a mamãe.' },
  { en: "Daddy", pt: "Papai", img: pai, feedbackOk: 'Yes! "Daddy" — papai!', feedbackNo: '"Daddy" é o papai.' },
  "Baby Family — Mommy & Daddy",
  'Great! "Mommy" e "daddy" — sua família em inglês!',
  'Aponta pra sua família e diz: "Mommy!" ou "Daddy!".',
  "Vale abraçar cada um ao apontar.",
);

const s1a2 = baby(
  "pre2-n1-s1-a02-baby-hug",
  "Baby & Hug",
  "Nível 1 · Semana 1 · Dia 2",
  "👶",
  'Hi again! Mais dois: "baby" é bebê, "hug" é abraço.',
  { en: "Baby", pt: "Bebê", img: bebe, feedbackOk: 'Yes! "Baby"!', feedbackNo: '"Baby" é o bebezinho.' },
  { en: "Hug", pt: "Abraço", img: abraco, feedbackOk: 'Yes! Big "hug"!', feedbackNo: '"Hug" é um abraço apertado.' },
  "Baby Family — Big Hug",
  'Awww! "Mommy, daddy, baby, hug" — família completa!',
  'Dá um abraço bem gostoso na mamãe/papai e diz: "Big hug!".',
  "Fecha os olhinhos.",
);

// ============================================================
// SEMANA 2 — Home: House & Chair / Book & Ball
// ============================================================
const s2a1 = baby(
  "pre2-n1-s2-a01-house-chair",
  "House & Chair",
  "Nível 1 · Semana 2 · Dia 1",
  "🏠",
  'Hi! Home time! "House" é casa, "chair" é cadeira.',
  { en: "House", pt: "Casa", img: casa, feedbackOk: 'Yes! "House"!', feedbackNo: '"House" é onde você mora.' },
  { en: "Chair", pt: "Cadeira", img: cadeira, feedbackOk: 'Yes! "Chair"!', feedbackNo: '"Chair" é onde você senta.' },
  "Baby Home — House & Chair",
  'Nice! "House" e "chair" — sua casinha em inglês!',
  'Aponta pra casa (janela) e diz "house!". Senta na cadeira e diz "chair!".',
  "Vale bater levinho na cadeira.",
);

const s2a2 = baby(
  "pre2-n1-s2-a02-book-ball",
  "Book & Ball",
  "Nível 1 · Semana 2 · Dia 2",
  "📚",
  'Hi! Coisas de casa: "book" é livro, "ball" é bola.',
  { en: "Book", pt: "Livro", img: livro, feedbackOk: 'Yes! "Book"!', feedbackNo: '"Book" é o livrinho.' },
  { en: "Ball", pt: "Bola", img: bola, feedbackOk: 'Yes! "Ball"!', feedbackNo: '"Ball" é a bola que rola.' },
  "Baby Home — Book & Ball",
  '4 coisas de casa: "house, chair, book, ball"!',
  'Pega um livro e uma bola. Aponta e fala: "book!", "ball!".',
  "Se não tiver, finge com a mão.",
);

// ============================================================
// SEMANA 3 — Weather: Sun & Rain / Cloud & Rainbow
// ============================================================
const s3a1 = baby(
  "pre2-n1-s3-a01-sun-rain",
  "Sun & Rain",
  "Nível 1 · Semana 3 · Dia 1",
  "☀️",
  'Hi! Weather time! "Sun" é sol, "rain" é chuva.',
  { en: "Sun", pt: "Sol", img: sol, feedbackOk: 'Yes! Bright "sun"!', feedbackNo: '"Sun" brilha e esquenta.' },
  { en: "Rain", pt: "Chuva", img: chuva, feedbackOk: 'Yes! "Rain" cai!', feedbackNo: '"Rain" é a chuva que molha.' },
  "Baby Weather — Sun & Rain",
  'Good! "Sun" e "rain" — você já sabe o tempo!',
  'Olha pela janela. Se tiver sol: "sun!". Se tiver chuva: "rain!".',
  "Faz o barulho da chuva com os dedos.",
);

const s3a2 = baby(
  "pre2-n1-s3-a02-cloud-rainbow",
  "Cloud & Rainbow",
  "Nível 1 · Semana 3 · Dia 2",
  "🌈",
  'Hi! Mais tempo: "cloud" é nuvem, "rainbow" é arco-íris.',
  { en: "Cloud", pt: "Nuvem", img: nuvem, feedbackOk: 'Yes! Fluffy "cloud"!', feedbackNo: '"Cloud" é a nuvem fofinha.' },
  { en: "Rainbow", pt: "Arco-íris", img: arcoIris, feedbackOk: 'Yes! Beautiful "rainbow"!', feedbackNo: '"Rainbow" tem várias cores.' },
  "Baby Weather — Rainbow Sky",
  '4 palavras do céu: "sun, rain, cloud, rainbow"!',
  'Desenha no ar um arco-íris grande e diz "rainbow!". Faz nuvem com as mãos: "cloud!".',
  "Vale usar os braços.",
);

// ============================================================
// SEMANA 4 — Yummy: Apple & Banana / Cake & Water
// ============================================================
const s4a1 = baby(
  "pre2-n1-s4-a01-apple-banana",
  "Apple & Banana",
  "Nível 1 · Semana 4 · Dia 1",
  "🍎",
  'Hi! Snack time! "Apple" é maçã, "banana" é banana.',
  { en: "Apple", pt: "Maçã", img: maca, feedbackOk: 'Yummy! "Apple"!', feedbackNo: '"Apple" é a maçã vermelha.' },
  { en: "Banana", pt: "Banana", img: banana, feedbackOk: 'Yummy! "Banana"!', feedbackNo: '"Banana" é amarela e comprida.' },
  "Baby Yummy — Apple & Banana",
  'Yummy! Fruta em inglês na ponta da língua!',
  'Faz de conta que morde: "Mmm, apple!", "Mmm, banana!".',
  "Esfrega a barriga.",
);

const s4a2 = baby(
  "pre2-n1-s4-a02-cake-water",
  "Cake & Water — Baby Star!",
  "Nível 1 · Semana 4 · Dia 2",
  "🎂",
  'Hi! Última aula do Baby! "Cake" é bolo, "water" é água.',
  { en: "Cake", pt: "Bolo", img: bolo, feedbackOk: 'Yes! "Cake"!', feedbackNo: '"Cake" é o bolo doce.' },
  { en: "Water", pt: "Água", img: agua, feedbackOk: 'Yes! "Water"!', feedbackNo: '"Water" é a água que bebemos.' },
  "Baby Pré II — Little Baby Star!",
  'Congratulations! Terminou o Nível 1 do Pré II! 8 aulas, 16 palavras. You are a Little Baby Star!',
  'Aponta e fala tudo: "mommy, daddy, house, ball, sun, rain, apple, cake"!',
  "Vale só falar 3 que lembrar.",
);

// ============================================================
// NÍVEL 1 · BABY ENGLISH — Pré II
// ============================================================
export const nivel1Pre2: NivelIng = {
  slug: "n1",
  numero: 1,
  titulo: "Nível 1 · Baby English",
  subtitulo: "Recomeço leve — 2 palavras por aula",
  destravado: true,
  unidades: [
    {
      slug: "pre2-n1-s1",
      numero: 1,
      titulo: "Semana 1 — Family",
      subtitulo: "Mommy, daddy, baby, hug",
      aulas: [s1a1, s1a2],
    },
    {
      slug: "pre2-n1-s2",
      numero: 2,
      titulo: "Semana 2 — Home",
      subtitulo: "House, chair, book, ball",
      aulas: [s2a1, s2a2],
    },
    {
      slug: "pre2-n1-s3",
      numero: 3,
      titulo: "Semana 3 — Weather",
      subtitulo: "Sun, rain, cloud, rainbow",
      aulas: [s3a1, s3a2],
    },
    {
      slug: "pre2-n1-s4",
      numero: 4,
      titulo: "Semana 4 — Yummy",
      subtitulo: "Apple, banana, cake, water",
      aulas: [s4a1, s4a2],
    },
  ],
};
