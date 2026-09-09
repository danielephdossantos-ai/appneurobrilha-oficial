import type { AulaIng } from "./types";
import { url as brilha } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as cadeira } from "@/assets/neuro-treino/objetos/cadeira.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as ursinho } from "@/assets/neuro-treino/objetos/ursinho.png.asset.json";
import { url as carro } from "@/assets/neuro-treino/objetos/carro.png.asset.json";

/**
 * Inglês EI — Maternal · Nível 3 · Semana 4
 * "What's this? — Home" + Formatura do Nível 3
 *
 * Fecha o N3 com objetos de casa e uma aula-mix de formatura que
 * revisita as 4 semanas do nível. Mantém "What's this? → It's a __".
 */

// ============================================================
// AULA 01 — What's this? (home)
// ============================================================
const n3S4A01: AulaIng = {
  slug: "n3-s4-a01-whats-this-home",
  titulo: "What's this? — Home",
  subtitulo: "Nível 3 · Semana 4 · Dia 1",
  icone: "🏠",
  duracaoMin: 5,
  baseCientifica:
    "Objetos do ambiente imediato reforçam mapeamento imagem-palavra (Krashen — comprehensible input) e sustentam a rotina 'It's a __'.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Hi! Hoje a gente olha pra dentro de casa. Eu pergunto: "What\'s this?". Você responde: "It\'s a house!", "It\'s a chair!", "It\'s a book!".',
      legenda: "Aponte para móveis reais da sala ao ouvir.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio:
        'Toca em cada coisa de casa: "house", "chair", "book".',
      itens: [
        { en: "House", pt: "Casa", imagemUrl: casa },
        { en: "Chair", pt: "Cadeira", imagemUrl: cadeira },
        { en: "Book", pt: "Livro", imagemUrl: livro },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"What\'s this? It\'s a… house!". Toca na "house".',
      palavraAlvoEn: "House",
      opcoes: [
        { nome: "casa", imagemUrl: casa, correta: true },
        { nome: "cadeira", imagemUrl: cadeira, correta: false },
        { nome: "livro", imagemUrl: livro, correta: false },
      ],
      feedbackAcerto: 'Yes! "It\'s a house!". A gente mora dentro!',
      feedbackErro: 'A "house" é a casinha inteirinha.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"What\'s this? It\'s a… chair!". Toca na "chair".',
      palavraAlvoEn: "Chair",
      opcoes: [
        { nome: "cadeira", imagemUrl: cadeira, correta: true },
        { nome: "casa", imagemUrl: casa, correta: false },
        { nome: "livro", imagemUrl: livro, correta: false },
      ],
      feedbackAcerto: 'Perfect! "It\'s a chair!". A gente senta!',
      feedbackErro: 'A "chair" é onde a gente senta.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"What\'s this? It\'s a… book!". Toca no "book".',
      palavraAlvoEn: "Book",
      opcoes: [
        { nome: "livro", imagemUrl: livro, correta: true },
        { nome: "cadeira", imagemUrl: cadeira, correta: false },
        { nome: "casa", imagemUrl: casa, correta: false },
      ],
      feedbackAcerto: 'Yes! "It\'s a book!". A gente lê história!',
      feedbackErro: 'O "book" é o livrinho, tem folhas com desenhos.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: casa,
      convite:
        'Anda pela casa com o adulto. Aponta pra 3 coisas e fala: "It\'s a house!", "It\'s a chair!", "It\'s a book!".',
      dica: "Vale apontar até pra livros e cadeiras de brinquedo.",
    },
    {
      tipo: "celebracao",
      medalha: "I Can Say — Home",
      mascoteUrl: brilha,
      falaFinal:
        'Great job! Você já fala da sua casa em inglês: "It\'s a house", "It\'s a chair", "It\'s a book"!',
    },
  ],
};

// ============================================================
// AULA 02 — What's this? (mix) + Formatura N3
// ============================================================
const n3S4A02: AulaIng = {
  slug: "n3-s4-a02-whats-this-mix",
  titulo: "What's this? — All together!",
  subtitulo: "Nível 3 · Semana 4 · Dia 2 · Formatura",
  icone: "🏆",
  duracaoMin: 6,
  baseCientifica:
    "Sessão de revisão intercalada (Rohrer & Taylor 2007) — mistura de campos lexicais do N3 dentro do mesmo frame consolida a produção da resposta.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Wow! Hoje é a formatura do Nível 3! Vou perguntar: "What\'s this?" e você responde tudo que aprendeu: brinquedos, comidas, animais, natureza e casa!',
      legenda: "Sente confortável — a criança vai responder várias.",
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"What\'s this? It\'s a… ball!". Toca na "ball".',
      palavraAlvoEn: "Ball",
      opcoes: [
        { nome: "bola", imagemUrl: bola, correta: true },
        { nome: "livro", imagemUrl: livro, correta: false },
        { nome: "ursinho", imagemUrl: ursinho, correta: false },
      ],
      feedbackAcerto: 'Yes! "It\'s a ball!".',
      feedbackErro: 'A "ball" é a bolinha redonda.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"What\'s this? It\'s a… teddy bear!". Toca no ursinho.',
      palavraAlvoEn: "Teddy bear",
      opcoes: [
        { nome: "ursinho", imagemUrl: ursinho, correta: true },
        { nome: "carro", imagemUrl: carro, correta: false },
        { nome: "bola", imagemUrl: bola, correta: false },
      ],
      feedbackAcerto: 'Perfect! "It\'s a teddy bear!".',
      feedbackErro: 'O "teddy bear" é o ursinho fofinho.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"What\'s this? It\'s a… book!". Toca no "book".',
      palavraAlvoEn: "Book",
      opcoes: [
        { nome: "livro", imagemUrl: livro, correta: true },
        { nome: "cadeira", imagemUrl: cadeira, correta: false },
        { nome: "bola", imagemUrl: bola, correta: false },
      ],
      feedbackAcerto: 'Yes! "It\'s a book!".',
      feedbackErro: 'O "book" é o livrinho.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"What\'s this? It\'s a… chair!". Toca na "chair".',
      palavraAlvoEn: "Chair",
      opcoes: [
        { nome: "cadeira", imagemUrl: cadeira, correta: true },
        { nome: "casa", imagemUrl: casa, correta: false },
        { nome: "carro", imagemUrl: carro, correta: false },
      ],
      feedbackAcerto: 'Perfect! "It\'s a chair!".',
      feedbackErro: 'A "chair" é onde a gente senta.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"What\'s this? It\'s a… house!". Toca na "house".',
      palavraAlvoEn: "House",
      opcoes: [
        { nome: "casa", imagemUrl: casa, correta: true },
        { nome: "cadeira", imagemUrl: cadeira, correta: false },
        { nome: "livro", imagemUrl: livro, correta: false },
      ],
      feedbackAcerto: 'Yes! "It\'s a house!".',
      feedbackErro: 'A "house" é a casa inteira.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: ursinho,
      convite:
        'Show final! Escolhe 3 coisas ao teu redor e apresenta pro adulto: "It\'s a…!". Pode ser brinquedo, móvel, comida — o que quiser!',
      dica: "Deixe a criança liderar. Aplauda cada resposta.",
    },
    {
      tipo: "celebracao",
      medalha: "Little Talker — Nível 3 Completo!",
      mascoteUrl: brilha,
      falaFinal:
        'You did it! Você terminou o Nível 3! Já responde perguntas em inglês: "What\'s this? It\'s a ball, a book, a house…". Congratulations, Little Talker!',
    },
  ],
};

export const n3Maternal_semana4 = {
  slug: "n3-semana-4",
  numero: 4,
  titulo: "Semana 4 — What's this? · Home + Formatura",
  subtitulo: "Objetos de casa e mix final do Nível 3",
  aulas: [n3S4A01, n3S4A02],
};
