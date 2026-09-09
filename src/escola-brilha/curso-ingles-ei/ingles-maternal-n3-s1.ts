import type { AulaIng } from "./types";
import { url as brilha } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as carro } from "@/assets/neuro-treino/objetos/carro.png.asset.json";
import { url as ursinho } from "@/assets/neuro-treino/objetos/ursinho.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as bolo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";

/**
 * Inglês EI — Maternal · Nível 3 · Semana 1
 * "I Can Say — What's this?"
 *
 * Introduz a PRIMEIRA pergunta/resposta em inglês:
 *   Q: "What's this?"   A: "It's a ______."
 *
 * Padrão N3: 3 palavras/aula + 1 estrutura de frase curta,
 * ainda oral (nunca ler). Mantém 5–7 momentos, sem sobrecarga.
 * Recicla itens já conhecidos do N1/N2 (bola, carro, ursinho, maçã,
 * banana, bolo) para focar carga cognitiva na frase-alvo
 * (Nation 2001 — recycling; VanPatten 2003 — input processing).
 */

// ============================================================
// AULA 01 — What's this? (toys)
// ============================================================
const n3S1A01: AulaIng = {
  slug: "n3-s1-a01-whats-this-toys",
  titulo: "What's this? — Toys",
  subtitulo: "Nível 3 · Semana 1 · Dia 1",
  icone: "🧸",
  duracaoMin: 5,
  baseCientifica:
    "Primeira estrutura pergunta-resposta com formato fixo ('It's a __'). Rotinas de fala reduzem carga e favorecem produção precoce (Ellis 2003; Cameron 2001).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Hi! Hoje eu vou perguntar: "What\'s this?". Isso quer dizer "o que é isso?". Você responde: "It\'s a ball!", "It\'s a car!".',
      legenda: "Aponte para um brinquedo perto ao ouvir a pergunta.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio:
        'Toca em cada brinquedo e escuta: "ball", "car", "teddy bear".',
      itens: [
        { en: "Ball", pt: "Bola", imagemUrl: bola },
        { en: "Car", pt: "Carro", imagemUrl: carro },
        { en: "Teddy bear", pt: "Ursinho", imagemUrl: ursinho },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Eu pergunto: "What\'s this? It\'s a… ball!". Toca na "ball".',
      palavraAlvoEn: "Ball",
      opcoes: [
        { nome: "bola", imagemUrl: bola, correta: true },
        { nome: "carro", imagemUrl: carro, correta: false },
        { nome: "ursinho", imagemUrl: ursinho, correta: false },
      ],
      feedbackAcerto: 'Yes! "It\'s a ball!".',
      feedbackErro: 'Escuta de novo: "It\'s a ball". Toca na bola.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"What\'s this? It\'s a… car!". Toca no "car".',
      palavraAlvoEn: "Car",
      opcoes: [
        { nome: "carro", imagemUrl: carro, correta: true },
        { nome: "ursinho", imagemUrl: ursinho, correta: false },
        { nome: "bola", imagemUrl: bola, correta: false },
      ],
      feedbackAcerto: 'Perfect! "It\'s a car!".',
      feedbackErro: 'O "car" faz vroom-vroom. Tenta o carrinho.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Último! "What\'s this? It\'s a… teddy bear!". Toca no ursinho.',
      palavraAlvoEn: "Teddy bear",
      opcoes: [
        { nome: "ursinho", imagemUrl: ursinho, correta: true },
        { nome: "bola", imagemUrl: bola, correta: false },
        { nome: "carro", imagemUrl: carro, correta: false },
      ],
      feedbackAcerto: 'Yes! "It\'s a teddy bear!". Fofo!',
      feedbackErro: '"Teddy bear" é o ursinho de pelúcia.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: ursinho,
      convite:
        'Sua vez! Pega um brinquedo de verdade, mostra e fala: "It\'s a ball!" ou "It\'s a car!" ou "It\'s a teddy bear!".',
      dica: "Vale qualquer brinquedo perto. Fale bem alto e sorrindo.",
    },
    {
      tipo: "celebracao",
      medalha: "I Can Say — Toys",
      mascoteUrl: brilha,
      falaFinal:
        'Amazing! Você já responde: "It\'s a ball", "It\'s a car", "It\'s a teddy bear". You can say!',
    },
  ],
};

// ============================================================
// AULA 02 — What's this? (food)
// ============================================================
const n3S1A02: AulaIng = {
  slug: "n3-s1-a02-whats-this-food",
  titulo: "What's this? — Food",
  subtitulo: "Nível 3 · Semana 1 · Dia 2",
  icone: "🍎",
  duracaoMin: 5,
  baseCientifica:
    "Reciclagem da mesma estrutura ('It's a __') com campo lexical novo — transferência de forma para conteúdo (Skill Acquisition Theory, DeKeyser 2007).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Hi again! Mesma pergunta de ontem: "What\'s this?". Hoje a resposta é comidinha: "It\'s an apple!", "It\'s a banana!", "It\'s a cake!".',
      legenda: "Aponte para algo comestível enquanto ouve.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada comida: "apple", "banana", "cake".',
      itens: [
        { en: "Apple", pt: "Maçã", imagemUrl: maca },
        { en: "Banana", pt: "Banana", imagemUrl: banana },
        { en: "Cake", pt: "Bolo", imagemUrl: bolo },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"What\'s this? It\'s an… apple!". Toca na "apple".',
      palavraAlvoEn: "Apple",
      opcoes: [
        { nome: "maçã", imagemUrl: maca, correta: true },
        { nome: "banana", imagemUrl: banana, correta: false },
        { nome: "bolo", imagemUrl: bolo, correta: false },
      ],
      feedbackAcerto: 'Yes! "It\'s an apple!".',
      feedbackErro: 'A "apple" é vermelhinha e redonda.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"What\'s this? It\'s a… banana!". Toca na "banana".',
      palavraAlvoEn: "Banana",
      opcoes: [
        { nome: "banana", imagemUrl: banana, correta: true },
        { nome: "maçã", imagemUrl: maca, correta: false },
        { nome: "bolo", imagemUrl: bolo, correta: false },
      ],
      feedbackAcerto: 'Perfect! "It\'s a banana!".',
      feedbackErro: 'A "banana" é amarela e comprida.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'E agora — mistura! "What\'s this? It\'s a… cake!".',
      palavraAlvoEn: "Cake",
      opcoes: [
        { nome: "bolo", imagemUrl: bolo, correta: true },
        { nome: "carro", imagemUrl: carro, correta: false },
        { nome: "bola", imagemUrl: bola, correta: false },
      ],
      feedbackAcerto: 'Yummy! "It\'s a cake!".',
      feedbackErro: '"Cake" é o bolo de aniversário.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: maca,
      convite:
        'Vai na cozinha com o adulto. Aponta pra uma comida e responde: "It\'s a…!" — em inglês, do jeitinho que aprendeu.',
      dica: "Se não souber o nome em inglês, vale só apontar e imitar 'yummy!'.",
    },
    {
      tipo: "celebracao",
      medalha: "I Can Say — Semana 1",
      mascoteUrl: brilha,
      falaFinal:
        'Wow! Você já responde perguntas em inglês: "It\'s a ball", "It\'s an apple", "It\'s a cake". You can talk!',
    },
  ],
};

export const n3Maternal_semana1 = {
  slug: "n3-semana-1",
  numero: 1,
  titulo: "Semana 1 — What's this?",
  subtitulo: "Primeira pergunta em inglês + resposta 'It's a…'",
  aulas: [n3S1A01, n3S1A02],
};
