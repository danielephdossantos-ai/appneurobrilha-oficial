import type { AulaArteV1 } from "../../types";
import vocabLandart from "@/assets/arte-2ano/u7-vocab-landart.jpg";
import vocabEfemero from "@/assets/arte-2ano/u7-vocab-efemero.jpg";
import vocabMandala from "@/assets/arte-2ano/u7-vocab-mandala.jpg";
import vocabNatureza from "@/assets/arte-2ano/u7-vocab-natureza.jpg";
import pigFolhas from "@/assets/arte-2ano/u7-pig-folhas.jpg";
import pigPedras from "@/assets/arte-2ano/u7-pig-pedras.jpg";
import pigPetalas from "@/assets/arte-2ano/u7-pig-petalas.jpg";
import pigMusgo from "@/assets/arte-2ano/u7-pig-musgo.jpg";
import animalMandala from "@/assets/arte-2ano/u7-animal-mandala.jpg";
import animalTorre from "@/assets/arte-2ano/u7-animal-torre.jpg";
import animalCaminho from "@/assets/arte-2ano/u7-animal-caminho.jpg";
import u7passo1 from "@/assets/arte-2ano/u7-passo1-sair.jpg";
import u7passo2 from "@/assets/arte-2ano/u7-passo2-coletar.jpg";
import u7passo3 from "@/assets/arte-2ano/u7-passo3-circulo.jpg";
import u7passo4 from "@/assets/arte-2ano/u7-passo4-organizar.jpg";
import u7passo5 from "@/assets/arte-2ano/u7-passo5-foto.jpg";

/** Arte · 1º Ano · Unidade 7 · Aula 01 — "Minha Primeira Galeria da Natureza" (EF15AR05/25) */
export const aula01: AulaArteV1 = {
  slug: "aula-01-galeria-natureza",
  titulo: "Minha Primeira Galeria da Natureza",
  iconeTrilha: "🖼️",
  bncc: ["EF15AR05", "EF15AR06"],
  duracaoMin: 15,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora: "Sabia que dá pra fazer arte usando só folhas, pedras e pétalas? Toca em cada uma!",
    titulo: "Ateliê da Natureza",
    instrucao: "Toca em cada material",
    itens: [
      { emoji: "🍃", rotulo: "Folhas", descricao: "Verdes, amarelas, secas — todas viram arte.", cor: "#16a34a" },
      { emoji: "🪨", rotulo: "Pedras", descricao: "Redondas, empilhadas, formam torres.", cor: "#6b7280" },
      { emoji: "🌸", rotulo: "Pétalas", descricao: "Cores lindas viram mandalas.", cor: "#f472b6" },
      { emoji: "🌿", rotulo: "Musgo", descricao: "Verdinho e macio, faz o tapete da arte.", cor: "#22c55e" },
    ],
    falaFinal: "A natureza é o maior ateliê do mundo!",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Adivinha!",
    perguntas: [
      { pergunta: "Pra fazer arte da natureza eu uso...",
        alternativas: [{ texto: "Folhas, pedras, pétalas", correta: true }, { texto: "Tinta de tubo", correta: false }],
        feedbackAcerto: "Isso!", feedbackErro: "Land art é só natureza." },
      { pergunta: "Uma torre de pedras é feita...",
        alternativas: [{ texto: "Empilhando", correta: true }, { texto: "Colando", correta: false }],
        feedbackAcerto: "Empilhando!", feedbackErro: "Só empilhar equilibrado." },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Palavras do artista da natureza!",
    cards: [
      { termo: "Land Art", definicao: "Arte feita com a natureza, ao ar livre.", emoji: "🌍", cor: "#16a34a", fotoUrl: vocabLandart },
      { termo: "Efêmero", definicao: "Que dura pouquinho, o vento leva.", emoji: "💨", cor: "#0ea5e9", fotoUrl: vocabEfemero },
      { termo: "Mandala", definicao: "Desenho redondo, do meio pras bordas.", emoji: "🌸", cor: "#f472b6", fotoUrl: vocabMandala },
      { termo: "Natureza", definicao: "Árvore, pedra, flor, tudo do lado de fora.", emoji: "🌳", cor: "#22c55e", fotoUrl: vocabNatureza },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Tem um artista chamado Andy Goldsworthy que faz arte só com a natureza!",
    paragrafos: [
      "Ele sai pra floresta e junta folhas, pedras e galhos.",
      "Faz mandalas, torres e caminhos coloridos.",
      "Depois o vento leva embora — e ele TIRA UMA FOTO pra guardar!",
    ],
    pigmentos: [
      { nome: "Folhas coloridas", hex: "#eab308", fonte: "Outono", emoji: "🍁", fotoUrl: pigFolhas },
      { nome: "Pedras do rio", hex: "#6b7280", fonte: "Redondas", emoji: "🪨", fotoUrl: pigPedras },
      { nome: "Pétalas", hex: "#f472b6", fonte: "Flores", emoji: "🌸", fotoUrl: pigPetalas },
      { nome: "Musgo", hex: "#22c55e", fonte: "Fofinho e verde", emoji: "🌿", fotoUrl: pigMusgo },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Vamos ver!",
    perguntas: [
      { pergunta: "Land Art é feita...",
        alternativas: [{ texto: "Na natureza", correta: true }, { texto: "No shopping", correta: false }],
        feedbackAcerto: "Na natureza!", feedbackErro: "Land Art é ao ar livre." },
      { pergunta: "A obra some porque...",
        alternativas: [{ texto: "O vento e a chuva levam", correta: true }, { texto: "Alguém apaga", correta: false }],
        feedbackAcerto: "É efêmera!", feedbackErro: "A natureza leva embora." },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Que obra é essa?",
    animais: [
      { nome: "Mandala", emoji: "🌸", fotoUrl: animalMandala,
        corAlvo: { nome: "Pétalas", hex: "#f472b6" },
        opcoes: [{ nome: "Pétalas", hex: "#f472b6" }, { nome: "Pedras", hex: "#6b7280" }],
        falaAcerto: "Mandala de pétalas!" },
      { nome: "Torre", emoji: "🗿", fotoUrl: animalTorre,
        corAlvo: { nome: "Pedras", hex: "#6b7280" },
        opcoes: [{ nome: "Pedras", hex: "#6b7280" }, { nome: "Folhas", hex: "#16a34a" }],
        falaAcerto: "Torre de pedras!" },
      { nome: "Caminho", emoji: "🍂", fotoUrl: animalCaminho,
        corAlvo: { nome: "Folhas", hex: "#eab308" },
        opcoes: [{ nome: "Folhas", hex: "#eab308" }, { nome: "Pétalas", hex: "#f472b6" }],
        falaAcerto: "Caminho de folhas!" },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Como fazer sua Land Art!",
    passos: [
      { id: "p1", texto: "Vou pro quintal", emoji: "🌳", ordem: 1, fotoUrl: u7passo1 },
      { id: "p2", texto: "Coleto folhas e pedras", emoji: "🍃", ordem: 2, fotoUrl: u7passo2 },
      { id: "p3", texto: "Faço um círculo no chão", emoji: "🔵", ordem: 3, fotoUrl: u7passo3 },
      { id: "p4", texto: "Organizo por cor", emoji: "🎨", ordem: 4, fotoUrl: u7passo4 },
      { id: "p5", texto: "Tiro uma foto!", emoji: "📸", ordem: 5, fotoUrl: u7passo5 },
    ],
    falaAcerto: "Sua obra ficou pronta!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Toca nas palavras!",
    titulo: "Meu Diário de Artista",
    trechos: [
      { texto: "Juntei muitas", palavraDestaque: "folhas", corDestaque: "#eab308" },
      { texto: "Empilhei", palavraDestaque: "pedras", corDestaque: "#6b7280" },
      { texto: "E fiz uma", palavraDestaque: "mandala", corDestaque: "#f472b6" },
      { texto: "A natureza é meu ateliê!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "Toque em cada material da natureza!",
    titulo: "🍃 Coleta Rápida",
    instrucao: "Toque em tudo!",
    tempoSeg: 45,
    itens: [
      { emoji: "🍁", rotulo: "Folha", cor: "#eab308" },
      { emoji: "🪨", rotulo: "Pedra", cor: "#6b7280" },
      { emoji: "🌸", rotulo: "Pétala", cor: "#f472b6" },
      { emoji: "🌿", rotulo: "Musgo", cor: "#22c55e" },
    ],
    falaFinal: "Coletou tudo!",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Revisando tudo do ano!",
    titulo: "🎓 Fim do Baú de Aurora",
    itens: [
      { emoji: "🌈", rotulo: "Cores", descricao: "Primárias e secundárias.", cor: "#f97316" },
      { emoji: "📐", rotulo: "Formas", descricao: "Círculo, quadrado, triângulo.", cor: "#a855f7" },
      { emoji: "🖐️", rotulo: "Texturas", descricao: "Áspero, liso, macio.", cor: "#78350f" },
      { emoji: "🥁", rotulo: "Sons", descricao: "Grave e agudo.", cor: "#dc2626" },
      { emoji: "🎭", rotulo: "Sombras", descricao: "Luz vira personagem.", cor: "#1f2937" },
      { emoji: "🇧🇷", rotulo: "Brasil", descricao: "Arte do nosso povo.", cor: "#16a34a" },
    ],
    falaFinal: "Você fez TUDO! É um Pequeno Artista!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Última missão da jornada!",
    quiz: {
      pergunta: "O que é Land Art?",
      alternativas: [{ texto: "Arte feita com a natureza", correta: true }, { texto: "Arte só com tinta", correta: false }],
      feedback: "Isso! A natureza é o ateliê!",
    },
    missaoFamilia: "🏠 Galeria Final: com a família, saiam pro quintal ou pra praça. Juntem folhas e pedras e criem UMA mandala. Tirem foto pra guardar pra sempre!",
    recompensaTitulo: "🎓 Você formou no Baú de Cores da Aurora!",
    recompensaItem: "🏆 Diploma Pequeno Artista",
  },
  recompensa: { xp: 100, moedas: 50, medalha: "Pequeno Artista de Aurora" },
};
