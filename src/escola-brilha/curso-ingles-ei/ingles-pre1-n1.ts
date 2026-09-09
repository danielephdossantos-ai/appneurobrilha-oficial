import type { AulaIng, NivelIng } from "./types";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as nuvem } from "@/assets/neuro-treino/objetos/nuvem.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as carro } from "@/assets/neuro-treino/objetos/carro.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as ursinho } from "@/assets/neuro-treino/objetos/ursinho.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as passaro } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as peixe } from "@/assets/neuro-treino/objetos/peixe.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as bolo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as agua } from "@/assets/neuro-treino/objetos/cristal-agua.png.asset.json";

/**
 * Inglês EI — Pré I · Nível 1 · Baby English (4–5 anos)
 *
 * Mesmo formato baby do Maternal N1: 2 palavras/aula, 7 momentos leves.
 * Recomeço para quem nunca teve inglês antes — sem música, sem história.
 */

// Helper para reduzir repetição
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
      "2 palavras/aula com repetição 4x (Cowan 2010; Ellis 2003). Input compreensível via imagem prototípica (Krashen; Rosch 1978).",
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
// SEMANA 1 — Sky: Sun & Moon / Star & Cloud
// ============================================================
const s1a1 = baby(
  "pre1-n1-s1-a01-sun-moon",
  "Sun & Moon",
  "Nível 1 · Semana 1 · Dia 1",
  "☀️",
  'Hi, friend! Duas palavras hoje: "sun" e "moon". "Sun" é sol, "moon" é lua.',
  { en: "Sun", pt: "Sol", img: sol, feedbackOk: 'Yes! O sol é "sun".', feedbackNo: '"Sun" é o sol lá em cima.' },
  { en: "Moon", pt: "Lua", img: lua, feedbackOk: 'Yes! A lua é "moon".', feedbackNo: '"Moon" é a lua da noite.' },
  "Baby Sky — Sun & Moon",
  'Great! Você já sabe "sun" e "moon". Yay!',
  'Aponte pra janela e diga "sun!" se for dia, "moon!" se for noite.',
  "Vale desenhar no ar um círculo grande pro sol.",
);

const s1a2 = baby(
  "pre1-n1-s1-a02-star-cloud",
  "Star & Cloud",
  "Nível 1 · Semana 1 · Dia 2",
  "⭐",
  'Hello again! Mais duas: "star" e "cloud". "Star" é estrela, "cloud" é nuvem.',
  { en: "Star", pt: "Estrela", img: estrela, feedbackOk: 'Yes! Estrela é "star".', feedbackNo: '"Star" brilha à noite.' },
  { en: "Cloud", pt: "Nuvem", img: nuvem, feedbackOk: 'Yes! Nuvem é "cloud".', feedbackNo: '"Cloud" é fofinha no céu.' },
  "Baby Sky — Starry Cloud",
  'Amazing! Céu completo: "sun", "moon", "star", "cloud"!',
  'Olha o céu pela janela. Aponta e diz: "cloud!" ou "star!".',
  "Se for dia sem nuvem, faz de conta.",
);

// ============================================================
// SEMANA 2 — Toys: Ball & Car / Book & Teddy
// ============================================================
const s2a1 = baby(
  "pre1-n1-s2-a01-ball-car",
  "Ball & Car",
  "Nível 1 · Semana 2 · Dia 1",
  "⚽",
  'Hi! Toy time! "Ball" é bola, "car" é carrinho.',
  { en: "Ball", pt: "Bola", img: bola, feedbackOk: 'Yes! "Ball"!', feedbackNo: '"Ball" é a bola que rola.' },
  { en: "Car", pt: "Carro", img: carro, feedbackOk: 'Yes! "Car"!', feedbackNo: '"Car" é o carrinho.' },
  "Baby Toys — Ball & Car",
  'Cool! Você tem "ball" e "car" agora!',
  'Pega um brinquedo de verdade e diz o nome em inglês: "ball!" ou "car!".',
  "Vale fingir com a mãozinha.",
);

const s2a2 = baby(
  "pre1-n1-s2-a02-book-teddy",
  "Book & Teddy",
  "Nível 1 · Semana 2 · Dia 2",
  "📚",
  'Hi again! Mais dois brinquedos: "book" é livro, "teddy" é ursinho.',
  { en: "Book", pt: "Livro", img: livro, feedbackOk: 'Yes! "Book"!', feedbackNo: '"Book" é o livrinho.' },
  { en: "Teddy", pt: "Ursinho", img: ursinho, feedbackOk: 'Yes! "Teddy"!', feedbackNo: '"Teddy" é o ursinho de pelúcia.' },
  "Baby Toys — Book & Teddy",
  '4 brinquedos: "ball", "car", "book", "teddy". You rock!',
  'Vai até seus brinquedos. Aponta e fala em inglês.',
  "Se não tiver, mostra na foto de um livro.",
);

// ============================================================
// SEMANA 3 — Animals: Dog & Cat / Bird & Fish
// ============================================================
const s3a1 = baby(
  "pre1-n1-s3-a01-dog-cat",
  "Dog & Cat",
  "Nível 1 · Semana 3 · Dia 1",
  "🐶",
  'Hi! Animal time! "Dog" é cachorro (woof!), "cat" é gato (meow!).',
  { en: "Dog", pt: "Cachorro", img: cachorro, feedbackOk: 'Woof! É o "dog"!', feedbackNo: '"Dog" faz woof woof.' },
  { en: "Cat", pt: "Gato", img: gato, feedbackOk: 'Meow! É o "cat"!', feedbackNo: '"Cat" faz meow.' },
  "Baby Animals — Dog & Cat",
  'Fantastic! "Dog" e "cat" — well done!',
  'Faz o som: "dog says woof!", "cat says meow!". Fala alto!',
  "Vale imitar o bicho com o corpo.",
);

const s3a2 = baby(
  "pre1-n1-s3-a02-bird-fish",
  "Bird & Fish",
  "Nível 1 · Semana 3 · Dia 2",
  "🐦",
  'Hi! Mais dois amigos: "bird" é passarinho, "fish" é peixe.',
  { en: "Bird", pt: "Passarinho", img: passaro, feedbackOk: 'Tweet tweet! "Bird"!', feedbackNo: '"Bird" voa no céu.' },
  { en: "Fish", pt: "Peixe", img: peixe, feedbackOk: 'Yes! "Fish" na água!', feedbackNo: '"Fish" nada na água.' },
  "Baby Animals — Bird & Fish",
  '4 bichos: "dog", "cat", "bird", "fish". Super!',
  'Faz o passarinho com os braços: "bird!". Faz o peixe nadando: "fish!".',
  "Solte bolhinha imaginária.",
);

// ============================================================
// SEMANA 4 — Yummy: Apple & Banana / Cake & Water
// ============================================================
const s4a1 = baby(
  "pre1-n1-s4-a01-apple-banana",
  "Apple & Banana",
  "Nível 1 · Semana 4 · Dia 1",
  "🍎",
  'Hi! Snack time! "Apple" é maçã, "banana" é banana.',
  { en: "Apple", pt: "Maçã", img: maca, feedbackOk: 'Yummy! "Apple"!', feedbackNo: '"Apple" é a maçã vermelha.' },
  { en: "Banana", pt: "Banana", img: banana, feedbackOk: 'Yummy! "Banana"!', feedbackNo: '"Banana" é amarela e comprida.' },
  "Baby Yummy — Apple & Banana",
  'Yummy! Você já pede fruta em inglês!',
  'Faz de conta que come: "Mmm, apple!", "Mmm, banana!".',
  "Esfrega a barriga: yummy!",
);

const s4a2 = baby(
  "pre1-n1-s4-a02-cake-water",
  "Cake & Water — Baby Star!",
  "Nível 1 · Semana 4 · Dia 2",
  "🎂",
  'Hi! Última aula do Baby! "Cake" é bolo, "water" é água.',
  { en: "Cake", pt: "Bolo", img: bolo, feedbackOk: 'Yes! "Cake" — happy day!', feedbackNo: '"Cake" é o bolo doce.' },
  { en: "Water", pt: "Água", img: agua, feedbackOk: 'Yes! "Water" pra beber!', feedbackNo: '"Water" é a água que bebemos.' },
  "Baby Pré I — Little Baby Star!",
  'Congratulations! Você terminou o Nível 1 do Pré I! 8 aulas, 16 palavras! You are a Little Baby Star!',
  'Aponta e fala: "sun, moon, ball, car, dog, cat, apple, banana"! Todas de novo!',
  "Vale só falar 3 que lembrar.",
);

// ============================================================
// NÍVEL 1 · BABY ENGLISH — Pré I
// ============================================================
export const nivel1Pre1: NivelIng = {
  slug: "n1",
  numero: 1,
  titulo: "Nível 1 · Baby English",
  subtitulo: "Recomeço leve — 2 palavras por aula",
  destravado: true,
  unidades: [
    {
      slug: "pre1-n1-s1",
      numero: 1,
      titulo: "Semana 1 — Sky",
      subtitulo: "Sun, moon, star, cloud",
      aulas: [s1a1, s1a2],
    },
    {
      slug: "pre1-n1-s2",
      numero: 2,
      titulo: "Semana 2 — Toys",
      subtitulo: "Ball, car, book, teddy",
      aulas: [s2a1, s2a2],
    },
    {
      slug: "pre1-n1-s3",
      numero: 3,
      titulo: "Semana 3 — Animals",
      subtitulo: "Dog, cat, bird, fish",
      aulas: [s3a1, s3a2],
    },
    {
      slug: "pre1-n1-s4",
      numero: 4,
      titulo: "Semana 4 — Yummy",
      subtitulo: "Apple, banana, cake, water",
      aulas: [s4a1, s4a2],
    },
  ],
};
