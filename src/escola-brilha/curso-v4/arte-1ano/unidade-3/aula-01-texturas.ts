import type { AulaArteV1 } from "../../types";
import vocabAspero from "@/assets/arte-2ano/u3-vocab-aspero.jpg";
import vocabLiso from "@/assets/arte-2ano/u3-vocab-liso.jpg";
import vocabMacio from "@/assets/arte-2ano/u3-vocab-macio.jpg";
import vocabFrotagem from "@/assets/arte-2ano/u3-vocab-frotagem.jpg";
import pigMadeira from "@/assets/arte-2ano/u3-pig-madeira.jpg";
import pigFolha from "@/assets/arte-2ano/u3-pig-folha.jpg";
import pigMoeda from "@/assets/arte-2ano/u3-pig-moeda.jpg";
import pigTijolo from "@/assets/arte-2ano/u3-pig-tijolo.jpg";
import animalOvelha from "@/assets/arte-2ano/u3-animal-ovelha.jpg";
import animalPeixe from "@/assets/arte-2ano/u3-animal-peixe.jpg";
import animalTatu from "@/assets/arte-2ano/u3-animal-tatu.jpg";
import passo1Img from "@/assets/arte-2ano/u3-passo1-folha.jpg";
import passo2Img from "@/assets/arte-2ano/u3-passo2-papel.jpg";
import passo3Img from "@/assets/arte-2ano/u3-passo3-lapis.jpg";
import passo4Img from "@/assets/arte-2ano/u3-passo4-esfregar.jpg";
import passo5Img from "@/assets/arte-2ano/u3-passo5-magico.jpg";

/** Arte · 1º Ano · Unidade 3 · Aula 01 — "Texturas Que Eu Sinto" (EF15AR04/05) */
export const aula01: AulaArteV1 = {
  slug: "aula-01-texturas",
  titulo: "Texturas Que Eu Sinto",
  iconeTrilha: "🖐️",
  bncc: ["EF15AR04", "EF15AR05"],
  duracaoMin: 15,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora: "Cada coisa tem um jeito de a mão sentir. Toca em cada uma!",
    titulo: "Museu das Texturas",
    instrucao: "Toca em cada textura",
    itens: [
      { emoji: "🌳", rotulo: "Casca de árvore", descricao: "Áspera, cheia de sulcos.", cor: "#78350f" },
      { emoji: "🧽", rotulo: "Esponja", descricao: "Macia e cheia de furinhos.", cor: "#fbbf24" },
      { emoji: "🪨", rotulo: "Pedra", descricao: "Lisa e friinha.", cor: "#6b7280" },
      { emoji: "🐑", rotulo: "Lã", descricao: "Fofa e quentinha.", cor: "#f3f4f6" },
    ],
    falaFinal: "Textura é o que a mão sente!",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Adivinha a textura!",
    perguntas: [
      { pergunta: "Como é uma esponja?",
        alternativas: [{ texto: "Macia", correta: true }, { texto: "Áspera", correta: false }],
        feedbackAcerto: "Macia!", feedbackErro: "Esponja é macia." },
      { pergunta: "Como é uma casca de árvore?",
        alternativas: [{ texto: "Áspera", correta: true }, { texto: "Lisa", correta: false }],
        feedbackAcerto: "Áspera!", feedbackErro: "Casca de árvore é áspera." },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Palavras da textura!",
    cards: [
      { termo: "Áspero", definicao: "Rugoso, cheio de relevo.", emoji: "🪵", cor: "#78350f", fotoUrl: vocabAspero },
      { termo: "Liso", definicao: "Sem relevo, mão desliza.", emoji: "🪞", cor: "#6b7280", fotoUrl: vocabLiso },
      { termo: "Macio", definicao: "Fofinho, gostoso.", emoji: "🧸", cor: "#fbbf24", fotoUrl: vocabMacio },
      { termo: "Frotagem", definicao: "Papel em cima e lápis esfrega — a textura aparece!", emoji: "✏️", cor: "#a855f7", fotoUrl: vocabFrotagem },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Vou te ensinar um truque de artista!",
    paragrafos: [
      "Coloque uma folha em cima da textura.",
      "Passe o lápis deitado por cima.",
      "A textura aparece mágica no papel!",
    ],
    pigmentos: [
      { nome: "Madeira", hex: "#78350f", fonte: "Áspera", emoji: "🪵", fotoUrl: pigMadeira },
      { nome: "Folha", hex: "#22c55e", fonte: "Nervuras", emoji: "🍃", fotoUrl: pigFolha },
      { nome: "Moeda", hex: "#eab308", fonte: "Relevo do rosto", emoji: "🪙", fotoUrl: pigMoeda },
      { nome: "Tijolo", hex: "#dc2626", fonte: "Áspero", emoji: "🧱", fotoUrl: pigTijolo },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Vamos ver!",
    perguntas: [
      { pergunta: "Lã de ovelha é...",
        alternativas: [{ texto: "Macia", correta: true }, { texto: "Áspera", correta: false }],
        feedbackAcerto: "Macia e fofa!", feedbackErro: "Lã é macia." },
      { pergunta: "Pedra do rio é...",
        alternativas: [{ texto: "Lisa", correta: true }, { texto: "Áspera", correta: false }],
        feedbackAcerto: "Lisa!", feedbackErro: "A água deixa a pedra lisa." },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada bicho tem sua textura!",
    animais: [
      { nome: "Ovelha", emoji: "🐑", fotoUrl: animalOvelha,
        corAlvo: { nome: "Macia", hex: "#fbbf24" },
        opcoes: [{ nome: "Macia", hex: "#fbbf24" }, { nome: "Áspera", hex: "#78350f" }],
        falaAcerto: "Macia como algodão!" },
      { nome: "Peixe", emoji: "🐟", fotoUrl: animalPeixe,
        corAlvo: { nome: "Lisa", hex: "#0ea5e9" },
        opcoes: [{ nome: "Lisa", hex: "#0ea5e9" }, { nome: "Áspera", hex: "#78350f" }],
        falaAcerto: "Lisa e escorregadia!" },
      { nome: "Tatu", emoji: "🦔", fotoUrl: animalTatu,
        corAlvo: { nome: "Áspera", hex: "#78350f" },
        opcoes: [{ nome: "Áspera", hex: "#78350f" }, { nome: "Macia", hex: "#fbbf24" }],
        falaAcerto: "Casca áspera!" },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordem certa da frotagem!",
    passos: [
      { id: "p1", texto: "Escolho uma textura", emoji: "🍃", ordem: 1, fotoUrl: passo1Img },
      { id: "p2", texto: "Coloco a folha por cima", emoji: "📄", ordem: 2, fotoUrl: passo2Img },
      { id: "p3", texto: "Pego o lápis deitado", emoji: "✏️", ordem: 3, fotoUrl: passo3Img },
      { id: "p4", texto: "Esfrego devagar", emoji: "🖐️", ordem: 4, fotoUrl: passo4Img },
      { id: "p5", texto: "A textura aparece!", emoji: "✨", ordem: 5, fotoUrl: passo5Img },
    ],
    falaAcerto: "Truque mágico feito!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Toca nas palavras!",
    titulo: "Meu Diário",
    trechos: [
      { texto: "A lã é bem", palavraDestaque: "macia", corDestaque: "#fbbf24" },
      { texto: "A pedra é bem", palavraDestaque: "lisa", corDestaque: "#6b7280" },
      { texto: "A árvore é bem", palavraDestaque: "áspera", corDestaque: "#78350f" },
      { texto: "Eu sinto tudo com a mão!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "Toque em cada textura rapidinho!",
    titulo: "✨ Toca Tudo",
    instrucao: "Toque nas texturas!",
    tempoSeg: 45,
    itens: [
      { emoji: "🌳", rotulo: "Casca áspera", cor: "#78350f" },
      { emoji: "🧽", rotulo: "Esponja macia", cor: "#fbbf24" },
      { emoji: "🪨", rotulo: "Pedra lisa", cor: "#6b7280" },
      { emoji: "🐑", rotulo: "Lã fofa", cor: "#f3f4f6" },
    ],
    falaFinal: "Tocou em tudo!",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Revisando!",
    titulo: "🔁 Roda das Texturas",
    itens: [
      { emoji: "🪵", rotulo: "Áspero", descricao: "Rugoso, casca de árvore.", cor: "#78350f" },
      { emoji: "🪞", rotulo: "Liso", descricao: "Escorrega, pedra do rio.", cor: "#6b7280" },
      { emoji: "🧸", rotulo: "Macio", descricao: "Fofo, lã de ovelha.", cor: "#fbbf24" },
    ],
    falaFinal: "Você conhece as texturas!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Última!",
    quiz: {
      pergunta: "O que é textura?",
      alternativas: [{ texto: "O que a mão sente", correta: true }, { texto: "Uma cor", correta: false }],
      feedback: "Isso! Textura é o toque!",
    },
    missaoFamilia: "🏠 Museu de Texturas: com a família, ache 1 coisa áspera, 1 lisa e 1 macia. Faça uma frotagem no papel!",
    recompensaTitulo: "🖐️ Terceira página aberta!",
    recompensaItem: "🖐️ Mão Sensível de Aurora",
  },
  recompensa: { xp: 50, moedas: 25, medalha: "Mão Sensível" },
};
