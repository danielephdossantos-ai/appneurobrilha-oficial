import type { AulaArteV1, PotePrimario } from "../../types";
import vocabPrimaria from "@/assets/arte-2ano/u1-vocab-primaria.jpg";
import vocabSecundaria from "@/assets/arte-2ano/u1-vocab-secundaria.jpg";
import vocabMistura from "@/assets/arte-2ano/u1-vocab-mistura.jpg";
import vocabPigmento from "@/assets/arte-2ano/u1-vocab-pigmento.jpg";
import pigVermelho from "@/assets/arte-2ano/u1-pig-vermelho-terra.jpg";
import pigUrucum from "@/assets/arte-2ano/u1-pig-urucum.jpg";
import pigFolha from "@/assets/arte-2ano/u1-pig-folha-verde.jpg";
import pigAnil from "@/assets/arte-2ano/u1-pig-anil.jpg";
import animalSapo from "@/assets/arte-2ano/u1-animal-sapo.jpg";
import animalRaposa from "@/assets/arte-2ano/u1-animal-raposa.jpg";
import animalBorboleta from "@/assets/arte-2ano/u1-animal-borboleta.jpg";
import passo1Img from "@/assets/arte-2ano/u1-passo1-escolho.jpg";
import passo2Img from "@/assets/arte-2ano/u1-passo2-cauldron.jpg";
import passo3Img from "@/assets/arte-2ano/u1-passo3-segunda.jpg";
import passo4Img from "@/assets/arte-2ano/u1-passo4-misturo.jpg";
import passo5Img from "@/assets/arte-2ano/u1-passo5-nasce.jpg";

const VERMELHO: PotePrimario = { id: "vermelho", hex: "#ef4444", nome: "Vermelho" };
const AZUL: PotePrimario = { id: "azul", hex: "#2563eb", nome: "Azul" };
const AMARELO: PotePrimario = { id: "amarelo", hex: "#facc15", nome: "Amarelo" };

const VERDE = { nome: "Verde", hex: "#22c55e" };
const LARANJA = { nome: "Laranja", hex: "#f97316" };
const ROXO = { nome: "Roxo", hex: "#8b5cf6" };

/**
 * Arte · 1º Ano · Unidade 1 · Aula 01 — "As Cores Que Eu Vejo"
 * (EF15AR04)
 * Versão Kids-Iniciante (6 anos): mesma estrutura do 2º Ano, mas com
 * fala da Aurora BEM mais curta, menos perguntas por bloco e foco em
 * IMAGEM em vez de leitura. Reutiliza os assets de cores primárias do
 * curso arte-2ano (mesma temática) — assets próprios entram nas U2-U7.
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-cores-que-eu-vejo",
  titulo: "As Cores Que Eu Vejo",
  iconeTrilha: "🌈",
  bncc: ["EF15AR04"],
  duracaoMin: 15,

  // 🎬 1 — MOTIVAÇÃO
  cena01_motivacao: {
    tipo: "misturaCores",
    aurora:
      "Oi, artista! Sou a Aurora. Olha esses três potes: vermelho, azul e amarelo. Arrasta DOIS potes pro caldeirão e vamos ver a mágica!",
    instrucao: "Arraste 2 potes pro caldeirão",
    misturas: [
      { id: "verde", primariaA: AZUL, primariaB: AMARELO, resultado: VERDE,
        falaAcerto: "Nasceu verde! Cor da folha!" },
      { id: "laranja", primariaA: VERMELHO, primariaB: AMARELO, resultado: LARANJA,
        falaAcerto: "Nasceu laranja! Cor do sol!" },
      { id: "roxo", primariaA: VERMELHO, primariaB: AZUL, resultado: ROXO,
        falaAcerto: "Nasceu roxo! Cor da uva!" },
    ],
    falaFinal: "Você fez três cores novas: verde, laranja e roxo!",
  },

  // 🔮 2 — PREVISÃO
  cena02_previsao: {
    tipo: "previsaoCores",
    aurora: "Agora adivinha antes de misturar. Qual cor vai nascer?",
    rodadas: [
      {
        primariaA: AZUL, primariaB: AMARELO,
        opcoes: [
          { nome: "Verde", hex: VERDE.hex, correta: true },
          { nome: "Roxo", hex: ROXO.hex, correta: false },
        ],
        feedbackAcerto: "Verde! Cor da folhinha!",
      },
      {
        primariaA: VERMELHO, primariaB: AMARELO,
        opcoes: [
          { nome: "Laranja", hex: LARANJA.hex, correta: true },
          { nome: "Verde", hex: VERDE.hex, correta: false },
        ],
        feedbackAcerto: "Laranja! Cor do sol!",
      },
      {
        primariaA: VERMELHO, primariaB: AZUL,
        opcoes: [
          { nome: "Roxo", hex: ROXO.hex, correta: true },
          { nome: "Laranja", hex: LARANJA.hex, correta: false },
        ],
        feedbackAcerto: "Roxo! Cor da uva!",
      },
    ],
  },

  // 📚 3 — VOCABULÁRIO
  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Toca em cada cartinha pra ouvir o nome.",
    cards: [
      { termo: "Primária", definicao: "Cor pura: vermelho, azul, amarelo.", emoji: "🎨", cor: "#ef4444", fotoUrl: vocabPrimaria },
      { termo: "Secundária", definicao: "Cor que nasce da mistura de duas primárias.", emoji: "🌈", cor: "#8b5cf6", fotoUrl: vocabSecundaria },
      { termo: "Mistura", definicao: "Juntar duas cores e virar uma cor nova.", emoji: "🫙", cor: "#f97316", fotoUrl: vocabMistura },
      { termo: "Cor", definicao: "É o que a gente vê no mundo todo!", emoji: "🌿", cor: "#22c55e", fotoUrl: vocabPigmento },
    ],
  },

  // 📖 4 — LEITURA GUIADA
  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Antes existia tinta na terra, na folha, no fruto. Olha só!",
    paragrafos: [
      "A terra vermelha dava a cor VERMELHA.",
      "A folha amassada dava a cor VERDE.",
      "O urucum, um fruto, dava a cor LARANJA.",
    ],
    pigmentos: [
      { nome: "Vermelho da terra", hex: "#b91c1c", fonte: "Terra", emoji: "🟫", fotoUrl: pigVermelho },
      { nome: "Amarelo do urucum", hex: "#eab308", fonte: "Urucum", emoji: "🌰", fotoUrl: pigUrucum },
      { nome: "Verde da folha", hex: "#16a34a", fonte: "Folha", emoji: "🍃", fotoUrl: pigFolha },
      { nome: "Azul do anil", hex: "#1d4ed8", fonte: "Planta anil", emoji: "🌿", fotoUrl: pigAnil },
    ],
  },

  // 🧠 5 — COMPREENSÃO
  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Vamos ver o que você aprendeu!",
    perguntas: [
      {
        pergunta: "Qual dessas é uma cor PRIMÁRIA?",
        alternativas: [
          { texto: "Vermelho", correta: true },
          { texto: "Verde", correta: false },
        ],
        feedbackAcerto: "Isso! Vermelho é primária.",
        feedbackErro: "Verde é secundária. Vermelho, azul e amarelo são primárias.",
      },
      {
        pergunta: "Azul + amarelo faz qual cor?",
        alternativas: [
          { texto: "Verde", correta: true },
          { texto: "Roxo", correta: false },
        ],
        feedbackAcerto: "Verde, cor da folha!",
        feedbackErro: "Azul + amarelo = VERDE.",
      },
    ],
  },

  // 🎭 6 — ATELIÊ
  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Os bichinhos perderam a cor. Escolha a cor certa!",
    animais: [
      {
        nome: "Sapo", emoji: "🐸", fotoUrl: animalSapo,
        corAlvo: VERDE, opcoes: [VERDE, ROXO, LARANJA],
        falaAcerto: "Verde! O sapinho ficou feliz!",
      },
      {
        nome: "Raposa", emoji: "🦊", fotoUrl: animalRaposa,
        corAlvo: LARANJA, opcoes: [VERDE, LARANJA, ROXO],
        falaAcerto: "Laranja! A raposa voltou a brilhar!",
      },
      {
        nome: "Borboleta", emoji: "🦋", fotoUrl: animalBorboleta,
        corAlvo: ROXO, opcoes: [ROXO, VERDE, LARANJA],
        falaAcerto: "Roxo! A borboleta abriu as asas!",
      },
    ],
  },

  // 🧩 7 — SEQUÊNCIA
  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Toca nos passos na ordem certa da mistura mágica.",
    passos: [
      { id: "p1", texto: "Pego a primeira tinta", emoji: "🫙", ordem: 1, fotoUrl: passo1Img },
      { id: "p2", texto: "Coloco no caldeirão", emoji: "⚗️", ordem: 2, fotoUrl: passo2Img },
      { id: "p3", texto: "Pego a segunda tinta", emoji: "🎨", ordem: 3, fotoUrl: passo3Img },
      { id: "p4", texto: "Misturo bem", emoji: "🥄", ordem: 4, fotoUrl: passo4Img },
      { id: "p5", texto: "A cor nova aparece!", emoji: "🌈", ordem: 5, fotoUrl: passo5Img },
    ],
    falaAcerto: "Você sabe a receita!",
  },

  // 💪 8 — VOCÊ LÊ (fala guiada)
  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora escuta o diário. Toca nas palavras coloridas!",
    titulo: "Diário do Pequeno Pintor",
    trechos: [
      { texto: "Hoje pintei um sapo", palavraDestaque: "verde", corDestaque: VERDE.hex },
      { texto: "E também um sol", palavraDestaque: "laranja", corDestaque: LARANJA.hex },
      { texto: "E uma flor", palavraDestaque: "roxa", corDestaque: ROXO.hex },
      { texto: "Eu sou um artista!" },
    ],
  },

  // 🎮 9 — MINIJOGO
  cena09_minijogo: {
    tipo: "fabricaPocoes",
    aurora: "Rápido! Toca nas DUAS tintas certas pra cada cor!",
    tempoSeg: 60,
    pedidos: [
      { corAlvo: VERDE, ingredientes: [AZUL, AMARELO] },
      { corAlvo: LARANJA, ingredientes: [VERMELHO, AMARELO] },
      { corAlvo: ROXO, ingredientes: [VERMELHO, AZUL] },
      { corAlvo: VERDE, ingredientes: [AZUL, AMARELO] },
    ],
    potes: [VERMELHO, AZUL, AMARELO],
  },

  // 🔁 10 — REVISÃO
  cena10_revisao: {
    tipo: "rodaCores",
    aurora: "A roda das cores! Toca em cada primária.",
    primarias: [VERMELHO, AZUL, AMARELO],
    secundarias: [
      { nome: "Verde", hex: VERDE.hex, entre: ["azul", "amarelo"] },
      { nome: "Laranja", hex: LARANJA.hex, entre: ["vermelho", "amarelo"] },
      { nome: "Roxo", hex: ROXO.hex, entre: ["vermelho", "azul"] },
    ],
  },

  // ✅ 11 — AVALIAÇÃO + MISSÃO FAMÍLIA
  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Última missão! Quais são as 3 cores primárias?",
    quiz: {
      pergunta: "Quais são as cores PRIMÁRIAS?",
      alternativas: [
        { texto: "Vermelho, Azul e Amarelo", correta: true },
        { texto: "Verde, Roxo e Laranja", correta: false },
      ],
      feedback: "Isso! Com essas três você faz TODAS as outras!",
    },
    missaoFamilia:
      "🏠 Caça às Cores: com a família, ache 3 objetos vermelhos, 3 azuis e 3 amarelos em casa. Tire uma foto do seu tesouro colorido!",
    recompensaTitulo: "🌈 Primeira página do Baú de Cores da Aurora aberta!",
    recompensaItem: "🎨 Pincelzinho de Aurora",
  },

  recompensa: { xp: 50, moedas: 25, medalha: "Pincelzinho de Aurora" },
};
