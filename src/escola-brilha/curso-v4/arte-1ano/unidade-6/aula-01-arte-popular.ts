import type { AulaArteV1 } from "../../types";
import vocabArtesao from "@/assets/arte-2ano/u6-vocab-artesao.jpg";
import vocabCordel from "@/assets/arte-2ano/u6-vocab-cordel.jpg";
import vocabCeramica from "@/assets/arte-2ano/u6-vocab-ceramica.jpg";
import vocabCultura from "@/assets/arte-2ano/u6-vocab-cultura.jpg";
import pigCarranca from "@/assets/arte-2ano/u6-pig-carranca.jpg";
import pigBonecas from "@/assets/arte-2ano/u6-pig-bonecas.jpg";
import pigCordel from "@/assets/arte-2ano/u6-pig-cordel.jpg";
import pigBoi from "@/assets/arte-2ano/u6-pig-boi.jpg";
import animalBoi from "@/assets/arte-2ano/u6-animal-boi.jpg";
import animalCarranca from "@/assets/arte-2ano/u6-animal-carranca.jpg";
import animalBonecas from "@/assets/arte-2ano/u6-animal-bonecas.jpg";
import u6passo1 from "@/assets/arte-2ano/u6-passo1-barro.jpg";
import u6passo2 from "@/assets/arte-2ano/u6-passo2-amassar.jpg";
import u6passo3 from "@/assets/arte-2ano/u6-passo3-modelar.jpg";
import u6passo4 from "@/assets/arte-2ano/u6-passo4-secar.jpg";
import u6passo5 from "@/assets/arte-2ano/u6-passo5-pintar.jpg";

/** Arte · 1º Ano · Unidade 6 · Aula 01 — "Cores do Meu Brasil" (EF15AR03/06) */
export const aula01: AulaArteV1 = {
  slug: "aula-01-arte-popular",
  titulo: "Cores do Meu Brasil",
  iconeTrilha: "🇧🇷",
  bncc: ["EF15AR03", "EF15AR06"],
  duracaoMin: 15,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora: "O Brasil tem arte de norte a sul! Toca em cada uma!",
    titulo: "Arte do Brasil",
    instrucao: "Toca em cada obra",
    itens: [
      { emoji: "🎨", rotulo: "Carrancas", descricao: "Cabeças de madeira nos barcos do rio São Francisco.", cor: "#dc2626" },
      { emoji: "🏺", rotulo: "Bonecas de barro", descricao: "De Minas Gerais, feitas por artesãs.", cor: "#78350f" },
      { emoji: "📚", rotulo: "Cordel", descricao: "Livrinhos com desenho preto do Nordeste.", cor: "#1f2937" },
      { emoji: "🐂", rotulo: "Bumba-meu-boi", descricao: "Festa colorida do Maranhão.", cor: "#eab308" },
    ],
    falaFinal: "Arte popular é a arte do povo!",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Adivinha!",
    perguntas: [
      { pergunta: "Bumba-meu-boi é uma...",
        alternativas: [{ texto: "Festa", correta: true }, { texto: "Comida", correta: false }],
        feedbackAcerto: "Festa colorida!", feedbackErro: "Bumba-meu-boi é festa!" },
      { pergunta: "Cordel é feito com...",
        alternativas: [{ texto: "Papel e desenho", correta: true }, { texto: "Água", correta: false }],
        feedbackAcerto: "Papel!", feedbackErro: "Cordel é livrinho de papel." },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Palavras da nossa cultura!",
    cards: [
      { termo: "Artesão", definicao: "Pessoa que faz arte com as mãos.", emoji: "🖐️", cor: "#f97316", fotoUrl: vocabArtesao },
      { termo: "Cordel", definicao: "Livrinho de poesia com desenho.", emoji: "📚", cor: "#1f2937", fotoUrl: vocabCordel },
      { termo: "Cerâmica", definicao: "Arte com barro e argila.", emoji: "🏺", cor: "#78350f", fotoUrl: vocabCeramica },
      { termo: "Cultura", definicao: "O jeito do nosso povo.", emoji: "🌎", cor: "#22c55e", fotoUrl: vocabCultura },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Cada região do Brasil tem arte diferente!",
    paragrafos: [
      "No Nordeste: cordel, bumba-meu-boi e carrancas.",
      "Em Minas: bonecas de barro do Vale do Jequitinhonha.",
      "Cada arte conta uma história do nosso Brasil!",
    ],
    pigmentos: [
      { nome: "Carranca", hex: "#dc2626", fonte: "São Francisco", emoji: "🗿", fotoUrl: pigCarranca },
      { nome: "Bonecas", hex: "#78350f", fonte: "Vale do Jequitinhonha", emoji: "👧", fotoUrl: pigBonecas },
      { nome: "Cordel", hex: "#1f2937", fonte: "Nordeste", emoji: "📚", fotoUrl: pigCordel },
      { nome: "Bumba-meu-boi", hex: "#eab308", fonte: "Maranhão", emoji: "🐂", fotoUrl: pigBoi },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Vamos ver!",
    perguntas: [
      { pergunta: "As bonecas de barro são feitas de...",
        alternativas: [{ texto: "Argila", correta: true }, { texto: "Vidro", correta: false }],
        feedbackAcerto: "Argila!", feedbackErro: "É feito com argila do rio." },
      { pergunta: "Onde ficam as carrancas?",
        alternativas: [{ texto: "Na frente do barco", correta: true }, { texto: "No teto de casa", correta: false }],
        feedbackAcerto: "Na frente do barco!", feedbackErro: "Ficam no barco pra proteger." },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Que arte é cada uma?",
    animais: [
      { nome: "Boi", emoji: "🐂", fotoUrl: animalBoi,
        corAlvo: { nome: "Festa", hex: "#eab308" },
        opcoes: [{ nome: "Festa", hex: "#eab308" }, { nome: "Livro", hex: "#1f2937" }],
        falaAcerto: "Festa do bumba!" },
      { nome: "Carranca", emoji: "🗿", fotoUrl: animalCarranca,
        corAlvo: { nome: "Madeira", hex: "#78350f" },
        opcoes: [{ nome: "Madeira", hex: "#78350f" }, { nome: "Vidro", hex: "#0ea5e9" }],
        falaAcerto: "Feita de madeira!" },
      { nome: "Bonecas", emoji: "👧", fotoUrl: animalBonecas,
        corAlvo: { nome: "Barro", hex: "#a16207" },
        opcoes: [{ nome: "Barro", hex: "#a16207" }, { nome: "Papel", hex: "#f3f4f6" }],
        falaAcerto: "Feitas de barro!" },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordem de fazer boneca de barro!",
    passos: [
      { id: "p1", texto: "Pego o barro", emoji: "🪨", ordem: 1, fotoUrl: u6passo1 },
      { id: "p2", texto: "Amasso bem", emoji: "🖐️", ordem: 2, fotoUrl: u6passo2 },
      { id: "p3", texto: "Modelo o formato", emoji: "👧", ordem: 3, fotoUrl: u6passo3 },
      { id: "p4", texto: "Deixo secar", emoji: "☀️", ordem: 4, fotoUrl: u6passo4 },
      { id: "p5", texto: "Pinto com cor", emoji: "🎨", ordem: 5, fotoUrl: u6passo5 },
    ],
    falaAcerto: "Sua boneca ficou pronta!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Toca nas palavras!",
    titulo: "Meu Diário",
    trechos: [
      { texto: "O Brasil tem", palavraDestaque: "cordel", corDestaque: "#1f2937" },
      { texto: "Tem também", palavraDestaque: "cerâmica", corDestaque: "#78350f" },
      { texto: "E a festa do", palavraDestaque: "boi", corDestaque: "#eab308" },
      { texto: "Amo o Brasil!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "Toque em cada arte!",
    titulo: "🇧🇷 Viagem pela Arte",
    instrucao: "Toque em cada obra!",
    tempoSeg: 45,
    itens: [
      { emoji: "🎨", rotulo: "Carranca", cor: "#dc2626" },
      { emoji: "🏺", rotulo: "Cerâmica", cor: "#78350f" },
      { emoji: "📚", rotulo: "Cordel", cor: "#1f2937" },
      { emoji: "🐂", rotulo: "Boi", cor: "#eab308" },
    ],
    falaFinal: "Viajou pelo Brasil!",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Revisando!",
    titulo: "🔁 Arte do Brasil",
    itens: [
      { emoji: "🖐️", rotulo: "Artesão", descricao: "Faz arte com as mãos.", cor: "#f97316" },
      { emoji: "🏺", rotulo: "Cerâmica", descricao: "Arte com barro.", cor: "#78350f" },
      { emoji: "📚", rotulo: "Cordel", descricao: "Livrinho do Nordeste.", cor: "#1f2937" },
    ],
    falaFinal: "Você conhece a arte do Brasil!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Última!",
    quiz: {
      pergunta: "Quem faz a arte popular?",
      alternativas: [{ texto: "O povo, os artesãos", correta: true }, { texto: "Só quem estudou muito", correta: false }],
      feedback: "Isso! Arte popular é do povo!",
    },
    missaoFamilia: "🏠 Descobrindo o Brasil: com a família, escolham uma arte popular (cordel, barro, xilogravura) e tentem criar uma em casa!",
    recompensaTitulo: "🇧🇷 Sexta página aberta!",
    recompensaItem: "🏺 Vasinho de Barro",
  },
  recompensa: { xp: 50, moedas: 25, medalha: "Vasinho de Barro" },
};
