import type { AulaIng } from "./types";
import { url as brilha } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as passaro } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as peixe } from "@/assets/neuro-treino/objetos/peixe.png.asset.json";
import { url as borboleta } from "@/assets/neuro-treino/objetos/borboleta.png.asset.json";

/**
 * Inglês EI — Maternal · Nível 3 · Semana 2
 * "What's this? — Animals"
 *
 * Continua a estrutura pergunta-resposta ("It's a __") introduzida na S1,
 * agora com animais (contexto altamente motivador em EI — Perry 2015).
 * Recicla dog/cat vistos no N2 para consolidar e adiciona rabbit/bird/fish.
 */

// ============================================================
// AULA 01 — What's this? (pets)
// ============================================================
const n3S2A01: AulaIng = {
  slug: "n3-s2-a01-whats-this-pets",
  titulo: "What's this? — Pets",
  subtitulo: "Nível 3 · Semana 2 · Dia 1",
  icone: "🐶",
  duracaoMin: 5,
  baseCientifica:
    "Reciclagem da estrutura 'It's a __' com campo lexical de alta motivação (animais domésticos). Transferência de forma para conteúdo novo (DeKeyser 2007).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Hi again! Lembra da pergunta: "What\'s this?". Hoje a resposta são bichinhos: "It\'s a dog!", "It\'s a cat!", "It\'s a rabbit!".',
      legenda: "Se tiver bichinho de pelúcia, pega um pra usar junto.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio:
        'Toca em cada bichinho e escuta: "dog", "cat", "rabbit".',
      itens: [
        { en: "Dog", pt: "Cachorro", imagemUrl: cachorro },
        { en: "Cat", pt: "Gato", imagemUrl: gato },
        { en: "Rabbit", pt: "Coelho", imagemUrl: coelho },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"What\'s this? It\'s a… dog!". Toca no "dog".',
      palavraAlvoEn: "Dog",
      opcoes: [
        { nome: "cachorro", imagemUrl: cachorro, correta: true },
        { nome: "gato", imagemUrl: gato, correta: false },
        { nome: "coelho", imagemUrl: coelho, correta: false },
      ],
      feedbackAcerto: 'Yes! "It\'s a dog!". Woof, woof!',
      feedbackErro: 'O "dog" faz woof-woof. Tenta o cachorrinho.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"What\'s this? It\'s a… cat!". Toca no "cat".',
      palavraAlvoEn: "Cat",
      opcoes: [
        { nome: "gato", imagemUrl: gato, correta: true },
        { nome: "coelho", imagemUrl: coelho, correta: false },
        { nome: "cachorro", imagemUrl: cachorro, correta: false },
      ],
      feedbackAcerto: 'Perfect! "It\'s a cat!". Meow!',
      feedbackErro: 'O "cat" faz meow. Tenta o gatinho.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Último! "What\'s this? It\'s a… rabbit!". Toca no coelho.',
      palavraAlvoEn: "Rabbit",
      opcoes: [
        { nome: "coelho", imagemUrl: coelho, correta: true },
        { nome: "cachorro", imagemUrl: cachorro, correta: false },
        { nome: "gato", imagemUrl: gato, correta: false },
      ],
      feedbackAcerto: 'Yes! "It\'s a rabbit!". Hop, hop!',
      feedbackErro: '"Rabbit" é o coelhinho de orelha comprida.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: coelho,
      convite:
        'Sua vez! Pega um bichinho de pelúcia (ou aponta pra um bicho de verdade) e responde: "It\'s a dog!", "It\'s a cat!" ou "It\'s a rabbit!".',
      dica: "Se não tiver o bicho certo, vale imitar o som e falar em inglês.",
    },
    {
      tipo: "celebracao",
      medalha: "I Can Say — Pets",
      mascoteUrl: brilha,
      falaFinal:
        'Amazing! Você responde sobre pets em inglês: "It\'s a dog", "It\'s a cat", "It\'s a rabbit". Well done!',
    },
  ],
};

// ============================================================
// AULA 02 — What's this? (outside animals)
// ============================================================
const n3S2A02: AulaIng = {
  slug: "n3-s2-a02-whats-this-outside",
  titulo: "What's this? — Outside animals",
  subtitulo: "Nível 3 · Semana 2 · Dia 2",
  icone: "🐦",
  duracaoMin: 5,
  baseCientifica:
    "Nova reciclagem da estrutura com bichos do quintal — repetição espaçada entre aulas (Nation 2001) consolida a rotina pergunta-resposta.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Hi! Hoje os bichinhos são de fora de casa: "It\'s a bird!", "It\'s a fish!", "It\'s a butterfly!". Mesma pergunta: "What\'s this?".',
      legenda: "Olhe pela janela procurando um passarinho de verdade.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada bichinho: "bird", "fish", "butterfly".',
      itens: [
        { en: "Bird", pt: "Passarinho", imagemUrl: passaro },
        { en: "Fish", pt: "Peixinho", imagemUrl: peixe },
        { en: "Butterfly", pt: "Borboleta", imagemUrl: borboleta },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"What\'s this? It\'s a… bird!". Toca no "bird".',
      palavraAlvoEn: "Bird",
      opcoes: [
        { nome: "passarinho", imagemUrl: passaro, correta: true },
        { nome: "peixe", imagemUrl: peixe, correta: false },
        { nome: "borboleta", imagemUrl: borboleta, correta: false },
      ],
      feedbackAcerto: 'Yes! "It\'s a bird!". Tweet, tweet!',
      feedbackErro: 'O "bird" voa e faz tweet-tweet. Tenta o passarinho.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"What\'s this? It\'s a… fish!". Toca no "fish".',
      palavraAlvoEn: "Fish",
      opcoes: [
        { nome: "peixe", imagemUrl: peixe, correta: true },
        { nome: "passarinho", imagemUrl: passaro, correta: false },
        { nome: "borboleta", imagemUrl: borboleta, correta: false },
      ],
      feedbackAcerto: 'Perfect! "It\'s a fish!". Splash!',
      feedbackErro: 'O "fish" vive na água. Tenta o peixinho.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Último! "What\'s this? It\'s a… butterfly!". Toca na borboleta.',
      palavraAlvoEn: "Butterfly",
      opcoes: [
        { nome: "borboleta", imagemUrl: borboleta, correta: true },
        { nome: "passarinho", imagemUrl: passaro, correta: false },
        { nome: "peixe", imagemUrl: peixe, correta: false },
      ],
      feedbackAcerto: 'Beautiful! "It\'s a butterfly!". Colorida!',
      feedbackErro: '"Butterfly" tem asas coloridas. É a borboleta.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: borboleta,
      convite:
        'Vai até a janela ou o quintal com o adulto. Aponta pra um bicho que ver e diz: "It\'s a bird!" ou "It\'s a butterfly!".',
      dica: "Se não aparecer nenhum, vale apontar pra figura no livro.",
    },
    {
      tipo: "celebracao",
      medalha: "I Can Say — Semana 2",
      mascoteUrl: brilha,
      falaFinal:
        'Wow! Você já responde sobre 6 bichinhos em inglês. "It\'s a dog, cat, rabbit, bird, fish, butterfly". Amazing!',
    },
  ],
};

export const n3Maternal_semana2 = {
  slug: "n3-semana-2",
  numero: 2,
  titulo: "Semana 2 — What's this? Animals",
  subtitulo: "Pergunta-resposta com bichinhos de casa e do quintal",
  aulas: [n3S2A01, n3S2A02],
};
