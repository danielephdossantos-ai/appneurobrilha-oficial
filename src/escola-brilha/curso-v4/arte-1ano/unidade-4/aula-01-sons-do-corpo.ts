import type { AulaArteV1 } from "../../types";
import vocabRitmo from "@/assets/arte-2ano/u4-vocab-ritmo.jpg";
import vocabGrave from "@/assets/arte-2ano/u4-vocab-grave.jpg";
import vocabAgudo from "@/assets/arte-2ano/u4-vocab-agudo.jpg";
import vocabPercussao from "@/assets/arte-2ano/u4-vocab-percussao.jpg";
import pigPeito from "@/assets/arte-2ano/u4-pig-peito.jpg";
import pigBoca from "@/assets/arte-2ano/u4-pig-boca.jpg";
import pigCoxa from "@/assets/arte-2ano/u4-pig-coxa.jpg";
import pigVoz from "@/assets/arte-2ano/u4-pig-voz.jpg";
import animalLeao from "@/assets/arte-2ano/u4-animal-leao.jpg";
import animalPassarinho from "@/assets/arte-2ano/u4-animal-passarinho.jpg";
import animalElefante from "@/assets/arte-2ano/u4-animal-elefante.jpg";
import passo1Img from "@/assets/arte-2ano/u4-passo1-palma.jpg";
import passo2Img from "@/assets/arte-2ano/u4-passo2-coxa.jpg";
import passo3Img from "@/assets/arte-2ano/u4-passo3-estalo.jpg";
import passo4Img from "@/assets/arte-2ano/u4-passo4-pe.jpg";
import passo5Img from "@/assets/arte-2ano/u4-passo5-musica.jpg";

/** Arte · 1º Ano · Unidade 4 · Aula 01 — "Meu Corpo Faz Música" (EF15AR13/14) */
export const aula01: AulaArteV1 = {
  slug: "aula-01-sons-do-corpo",
  titulo: "Meu Corpo Faz Música",
  iconeTrilha: "🥁",
  bncc: ["EF15AR13", "EF15AR14"],
  duracaoMin: 15,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora: "Seu corpo faz som! Toca em cada parte!",
    titulo: "Orquestra do Corpo",
    instrucao: "Toque em cada parte",
    itens: [
      { emoji: "👏", rotulo: "Palmas", descricao: "Som alto e curto.", cor: "#f97316" },
      { emoji: "🦶", rotulo: "Pé no chão", descricao: "Som grave, como tambor.", cor: "#78350f" },
      { emoji: "🫰", rotulo: "Estalo", descricao: "Som fininho e curtinho.", cor: "#eab308" },
      { emoji: "🗣️", rotulo: "Voz", descricao: "O som mais bonito!", cor: "#dc2626" },
    ],
    falaFinal: "Seu corpo é uma bateria!",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Adivinha!",
    perguntas: [
      { pergunta: "Palma faz som...",
        alternativas: [{ texto: "Alto", correta: true }, { texto: "Silencioso", correta: false }],
        feedbackAcerto: "Alto!", feedbackErro: "Palma faz som alto." },
      { pergunta: "Pé no chão faz som...",
        alternativas: [{ texto: "Grave", correta: true }, { texto: "Agudo", correta: false }],
        feedbackAcerto: "Grave, como tambor!", feedbackErro: "Pé faz som grave." },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Palavras da música!",
    cards: [
      { termo: "Ritmo", definicao: "A batida que se repete.", emoji: "🥁", cor: "#f97316", fotoUrl: vocabRitmo },
      { termo: "Grave", definicao: "Som grosso, como trovão.", emoji: "⚡", cor: "#1f2937", fotoUrl: vocabGrave },
      { termo: "Agudo", definicao: "Som fino, como passarinho.", emoji: "🐦", cor: "#0ea5e9", fotoUrl: vocabAgudo },
      { termo: "Percussão", definicao: "Bater pra fazer som.", emoji: "🪘", cor: "#a855f7", fotoUrl: vocabPercussao },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Tem um grupo brasileiro chamado Barbatuques que faz música só com o corpo!",
    paragrafos: [
      "Eles batem palma, peito, coxa, pé.",
      "Estalam boca e dedos.",
      "Fazem música linda sem instrumento nenhum!",
    ],
    pigmentos: [
      { nome: "Peito", hex: "#dc2626", fonte: "Som grave", emoji: "🫀", fotoUrl: pigPeito },
      { nome: "Boca", hex: "#eab308", fonte: "Estalo", emoji: "👄", fotoUrl: pigBoca },
      { nome: "Coxa", hex: "#f97316", fonte: "Batida média", emoji: "🦵", fotoUrl: pigCoxa },
      { nome: "Voz", hex: "#a855f7", fonte: "Instrumento principal", emoji: "🗣️", fotoUrl: pigVoz },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Vamos ver!",
    perguntas: [
      { pergunta: "Passarinho canta som...",
        alternativas: [{ texto: "Agudo", correta: true }, { texto: "Grave", correta: false }],
        feedbackAcerto: "Agudo, fininho!", feedbackErro: "Passarinho é agudo." },
      { pergunta: "Leão faz som...",
        alternativas: [{ texto: "Grave", correta: true }, { texto: "Agudo", correta: false }],
        feedbackAcerto: "Grave, grosso!", feedbackErro: "Leão ruge grave." },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada bicho tem seu som!",
    animais: [
      { nome: "Leão", emoji: "🦁", fotoUrl: animalLeao,
        corAlvo: { nome: "Grave", hex: "#78350f" },
        opcoes: [{ nome: "Grave", hex: "#78350f" }, { nome: "Agudo", hex: "#0ea5e9" }],
        falaAcerto: "Grave! Roar!" },
      { nome: "Passarinho", emoji: "🐦", fotoUrl: animalPassarinho,
        corAlvo: { nome: "Agudo", hex: "#0ea5e9" },
        opcoes: [{ nome: "Agudo", hex: "#0ea5e9" }, { nome: "Grave", hex: "#78350f" }],
        falaAcerto: "Agudo! Piu-piu!" },
      { nome: "Elefante", emoji: "🐘", fotoUrl: animalElefante,
        corAlvo: { nome: "Grave", hex: "#6b7280" },
        opcoes: [{ nome: "Grave", hex: "#6b7280" }, { nome: "Agudo", hex: "#0ea5e9" }],
        falaAcerto: "Grave, gigante!" },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordem certa da bateria de corpo!",
    passos: [
      { id: "p1", texto: "Bato palma", emoji: "👏", ordem: 1, fotoUrl: passo1Img },
      { id: "p2", texto: "Bato na coxa", emoji: "🦵", ordem: 2, fotoUrl: passo2Img },
      { id: "p3", texto: "Estalo os dedos", emoji: "🫰", ordem: 3, fotoUrl: passo3Img },
      { id: "p4", texto: "Bato o pé", emoji: "🦶", ordem: 4, fotoUrl: passo4Img },
      { id: "p5", texto: "Vira música!", emoji: "🎵", ordem: 5, fotoUrl: passo5Img },
    ],
    falaAcerto: "Sua primeira música!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Toca nas palavras!",
    titulo: "Meu Diário",
    trechos: [
      { texto: "Bati muita", palavraDestaque: "palma", corDestaque: "#f97316" },
      { texto: "Fiz som", palavraDestaque: "grave", corDestaque: "#78350f" },
      { texto: "E também som", palavraDestaque: "agudo", corDestaque: "#0ea5e9" },
      { texto: "Sou músico!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "Toque em cada som!",
    titulo: "🥁 Bateria de Corpo",
    instrucao: "Toque em cada som!",
    tempoSeg: 45,
    itens: [
      { emoji: "👏", rotulo: "Palma", cor: "#f97316" },
      { emoji: "🦶", rotulo: "Pé", cor: "#78350f" },
      { emoji: "🫰", rotulo: "Estalo", cor: "#eab308" },
      { emoji: "🗣️", rotulo: "Voz", cor: "#dc2626" },
    ],
    falaFinal: "Você fez música!",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Revisando!",
    titulo: "🔁 Roda dos Sons",
    itens: [
      { emoji: "⚡", rotulo: "Grave", descricao: "Grosso, como trovão.", cor: "#1f2937" },
      { emoji: "🐦", rotulo: "Agudo", descricao: "Fino, como passarinho.", cor: "#0ea5e9" },
      { emoji: "🥁", rotulo: "Ritmo", descricao: "Batida que se repete.", cor: "#f97316" },
    ],
    falaFinal: "Você é músico!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Última!",
    quiz: {
      pergunta: "Quem faz som mais AGUDO?",
      alternativas: [{ texto: "Passarinho", correta: true }, { texto: "Leão", correta: false }],
      feedback: "Passarinho! Fininho!",
    },
    missaoFamilia: "🏠 Banda em Casa: com a família, criem uma música só com sons do corpo. Grave um videozinho!",
    recompensaTitulo: "🥁 Quarta página aberta!",
    recompensaItem: "🥁 Tamborzinho de Aurora",
  },
  recompensa: { xp: 50, moedas: 25, medalha: "Tamborzinho" },
};
