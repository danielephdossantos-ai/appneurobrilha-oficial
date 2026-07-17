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
 * Arte · 2º Ano · Unidade 1 · Aula 01 — "As Cores Primárias e Secundárias"
 * (EF15AR04)
 * 11 cenas 100% interativas, todas ancoradas no universo do ateliê.
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-cores-magicas",
  titulo: "A Magia da Mistura de Cores",
  iconeTrilha: "🎨",
  bncc: ["EF15AR04"],
  duracaoMin: 22,

  // 🎬 1 — MOTIVAÇÃO (mistura livre no caldeirão)
  cena01_motivacao: {
    tipo: "misturaCores",
    aurora:
      "Brilha, olha o que eu tenho: três potes de tinta MÁGICA! Vermelho, azul e amarelo. São as cores primárias — cores que nasceram sozinhas. Arrasta DOIS potes para dentro do caldeirão e vamos ver que cor nova nasce!",
    instrucao: "Arraste 2 potes de tinta para dentro do caldeirão",
    misturas: [
      { id: "verde", primariaA: AZUL, primariaB: AMARELO, resultado: VERDE,
        falaAcerto: "Uau! Azul mais amarelo nasce VERDE — a cor das folhas da floresta!" },
      { id: "laranja", primariaA: VERMELHO, primariaB: AMARELO, resultado: LARANJA,
        falaAcerto: "Olha só! Vermelho mais amarelo nasce LARANJA — a cor do pôr do sol!" },
      { id: "roxo", primariaA: VERMELHO, primariaB: AZUL, resultado: ROXO,
        falaAcerto: "Que lindo! Vermelho mais azul nasce ROXO — a cor da uva docinha!" },
    ],
    falaFinal:
      "Você descobriu as três cores secundárias: VERDE, LARANJA e ROXO. Todas nascem misturando duas primárias!",
  },

  // 🔮 2 — PREVISÃO (adivinha antes de misturar)
  cena02_previsao: {
    tipo: "previsaoCores",
    aurora:
      "Agora vamos treinar o olho de artista! Antes de misturar, você VAI ADIVINHAR qual cor nasce. Concentra e escolhe!",
    rodadas: [
      {
        primariaA: AZUL, primariaB: AMARELO,
        opcoes: [
          { nome: "Verde", hex: VERDE.hex, correta: true },
          { nome: "Roxo", hex: ROXO.hex, correta: false },
          { nome: "Laranja", hex: LARANJA.hex, correta: false },
        ],
        feedbackAcerto: "Isso! Azul + Amarelo = Verde, a cor da floresta!",
      },
      {
        primariaA: VERMELHO, primariaB: AMARELO,
        opcoes: [
          { nome: "Roxo", hex: ROXO.hex, correta: false },
          { nome: "Laranja", hex: LARANJA.hex, correta: true },
          { nome: "Verde", hex: VERDE.hex, correta: false },
        ],
        feedbackAcerto: "Perfeito! Vermelho + Amarelo = Laranja, cor do pôr do sol!",
      },
      {
        primariaA: VERMELHO, primariaB: AZUL,
        opcoes: [
          { nome: "Laranja", hex: LARANJA.hex, correta: false },
          { nome: "Verde", hex: VERDE.hex, correta: false },
          { nome: "Roxo", hex: ROXO.hex, correta: true },
        ],
        feedbackAcerto: "Boa! Vermelho + Azul = Roxo, cor da uva!",
      },
    ],
  },

  // 📚 3 — VOCABULÁRIO (cartões que viram)
  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Toca em cada cartão para ouvir a palavra do ateliê e ver o que ela significa.",
    cards: [
      { termo: "Primária", definicao: "Cor pura que não vem de mistura: Vermelho, Azul e Amarelo.", emoji: "🎨", cor: "#ef4444", fotoUrl: vocabPrimaria },
      { termo: "Secundária", definicao: "Cor que nasce misturando DUAS primárias: Verde, Laranja e Roxo.", emoji: "🌈", cor: "#8b5cf6", fotoUrl: vocabSecundaria },
      { termo: "Mistura", definicao: "É quando duas tintas se juntam e viram uma cor nova.", emoji: "🫙", cor: "#f97316", fotoUrl: vocabMistura },
      { termo: "Pigmento", definicao: "Pozinho colorido que dá cor à tinta — pode vir de plantas e da terra.", emoji: "🌿", cor: "#22c55e", fotoUrl: vocabPigmento },
    ],
  },

  // 📖 4 — LEITURA GUIADA (ateliê das tintas naturais)
  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Vou te contar de onde vinham as tintas antes de existir tubinho de tinta na loja.",
    paragrafos: [
      "Há muito tempo, os artistas não compravam tinta pronta. Eles ANDAVAM pela natureza e olhavam tudo com olho de pintor.",
      "Da terra vermelha eles tiravam o VERMELHO. Das folhas amassadas nascia o VERDE. Do urucum, cor do fogo, saía o LARANJA.",
      "Cada pigmento era um segredo da natureza. E até hoje, quando misturamos duas cores primárias, a MESMA magia acontece.",
    ],
    pigmentos: [
      { nome: "Vermelho da terra", hex: "#b91c1c", fonte: "Terra argilosa", emoji: "🟫", fotoUrl: pigVermelho },
      { nome: "Amarelo do urucum", hex: "#eab308", fonte: "Sementes de urucum", emoji: "🌰", fotoUrl: pigUrucum },
      { nome: "Verde da folha", hex: "#16a34a", fonte: "Folhas amassadas", emoji: "🍃", fotoUrl: pigFolha },
      { nome: "Azul do anil", hex: "#1d4ed8", fonte: "Planta anileira", emoji: "🌿", fotoUrl: pigAnil },
    ],
  },

  // 🧠 5 — COMPREENSÃO (quiz encadeado)
  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Hora de mostrar o que aprendeu, artista!",
    perguntas: [
      {
        pergunta: "Quais são as três cores PRIMÁRIAS?",
        alternativas: [
          { texto: "Vermelho, Azul e Amarelo", correta: true },
          { texto: "Verde, Roxo e Laranja", correta: false },
        ],
        feedbackAcerto: "Isso! Primárias são puras, não vêm de mistura nenhuma.",
        feedbackErro: "Quase! Verde, Roxo e Laranja são SECUNDÁRIAS. As primárias são Vermelho, Azul e Amarelo.",
      },
      {
        pergunta: "Azul + Amarelo faz qual cor?",
        alternativas: [
          { texto: "Roxo", correta: false },
          { texto: "Verde", correta: true },
        ],
        feedbackAcerto: "Verde, cor da folha! Você é craque.",
        feedbackErro: "Roxo nasce de Vermelho + Azul. Azul + Amarelo = Verde.",
      },
      {
        pergunta: "Se eu quero fazer LARANJA, quais primárias misturo?",
        alternativas: [
          { texto: "Vermelho + Amarelo", correta: true },
          { texto: "Azul + Amarelo", correta: false },
        ],
        feedbackAcerto: "Perfeito! Laranja é vermelho + amarelo, cor do pôr do sol.",
        feedbackErro: "Azul + Amarelo dá Verde. Laranja é Vermelho + Amarelo.",
      },
    ],
  },

  // 🎭 6 — ATELIÊ (pintar animais da floresta)
  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora:
      "Os animais da floresta perderam o colorido! Escolha a cor SECUNDÁRIA certa para pintar cada um.",
    animais: [
      {
        nome: "Sapo da folha", emoji: "🐸", fotoUrl: animalSapo,
        corAlvo: VERDE,
        opcoes: [VERDE, ROXO, LARANJA],
        falaAcerto: "Verde igual à folha! O sapinho ficou feliz.",
      },
      {
        nome: "Raposa do pôr do sol", emoji: "🦊", fotoUrl: animalRaposa,
        corAlvo: LARANJA,
        opcoes: [VERDE, LARANJA, ROXO],
        falaAcerto: "Laranja brilhante! A raposa voltou a correr no fim da tarde.",
      },
      {
        nome: "Borboleta da uva", emoji: "🦋", fotoUrl: animalBorboleta,
        corAlvo: ROXO,
        opcoes: [ROXO, VERDE, LARANJA],
        falaAcerto: "Roxo lindo! A borboleta abriu as asas.",
      },
    ],
  },

  // 🧩 7 — SEQUÊNCIA (ordenar os passos)
  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Toca nos passos NA ORDEM CERTA de como fazemos uma mistura mágica.",
    passos: [
      { id: "p1", texto: "Escolho a primeira tinta primária", emoji: "🫙", ordem: 1, fotoUrl: passo1Img },
      { id: "p2", texto: "Coloco no caldeirão", emoji: "⚗️", ordem: 2, fotoUrl: passo2Img },
      { id: "p3", texto: "Escolho a segunda tinta primária", emoji: "🎨", ordem: 3, fotoUrl: passo3Img },
      { id: "p4", texto: "Misturo bem devagar", emoji: "🥄", ordem: 4, fotoUrl: passo4Img },
      { id: "p5", texto: "A cor secundária aparece!", emoji: "🌈", ordem: 5, fotoUrl: passo5Img },
    ],
    falaAcerto: "Uau! Você conhece a receita mágica da mistura!",
  },

  // 💪 8 — VOCÊ LÊ (diário do pintor)
  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do pequeno pintor. Toca em cada palavra colorida para ouvir.",
    titulo: "Diário do Pequeno Pintor",
    trechos: [
      { texto: "Hoje pintei um sapo bem", palavraDestaque: "verde", corDestaque: VERDE.hex },
      { texto: "Também fiz um sol", palavraDestaque: "laranja", corDestaque: LARANJA.hex },
      { texto: "No fim, uma flor bem", palavraDestaque: "roxa", corDestaque: ROXO.hex },
      { texto: "Todas essas cores nasceram da mistura mágica. Eu sou um artista!" },
    ],
  },

  // 🎮 9 — MINIJOGO (Fábrica de Poções cronometrada)
  cena09_minijogo: {
    tipo: "fabricaPocoes",
    aurora:
      "Rápido! A fábrica de poções coloridas quer os pedidos. Toca nas DUAS primárias que fazem cada cor antes do tempo acabar!",
    tempoSeg: 45,
    pedidos: [
      { corAlvo: VERDE, ingredientes: [AZUL, AMARELO] },
      { corAlvo: LARANJA, ingredientes: [VERMELHO, AMARELO] },
      { corAlvo: ROXO, ingredientes: [VERMELHO, AZUL] },
      { corAlvo: VERDE, ingredientes: [AZUL, AMARELO] },
      { corAlvo: ROXO, ingredientes: [VERMELHO, AZUL] },
      { corAlvo: LARANJA, ingredientes: [VERMELHO, AMARELO] },
    ],
    potes: [VERMELHO, AZUL, AMARELO],
  },

  // 🔁 10 — REVISÃO (roda das cores)
  cena10_revisao: {
    tipo: "rodaCores",
    aurora:
      "Toca em cada primária e veja o que ela produz junto da vizinha. Essa é a RODA DAS CORES do artista!",
    primarias: [VERMELHO, AZUL, AMARELO],
    secundarias: [
      { nome: "Verde", hex: VERDE.hex, entre: ["azul", "amarelo"] },
      { nome: "Laranja", hex: LARANJA.hex, entre: ["vermelho", "amarelo"] },
      { nome: "Roxo", hex: ROXO.hex, entre: ["vermelho", "azul"] },
    ],
  },

  // ✅ 11 — AVALIAÇÃO FINAL + MISSÃO FAMÍLIA
  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Última missão, artista! Prova pra mim que ativou o Pincel Mágico.",
    quiz: {
      pergunta: "Quais são as três cores primárias, aquelas que são puras e não precisam de mistura?",
      alternativas: [
        { texto: "Vermelho, Azul e Amarelo", correta: true },
        { texto: "Verde, Roxo e Laranja", correta: false },
      ],
      feedback:
        "Isso mesmo! Com Vermelho, Azul e Amarelo você cria TODAS as outras cores do universo!",
    },
    missaoFamilia:
      "🏠 Caçadores de Cores: procure em casa 3 objetos com cores primárias e 3 com cores secundárias. Tire uma foto bem bonita com sua família segurando esses tesouros coloridos!",
    recompensaTitulo: "🌈 Página 1 — O Portal das Cores Vivas restaurada!",
    recompensaItem: "🫙 Pote de Tinta Amarela Infinita",
  },

  recompensa: { xp: 60, moedas: 30, medalha: "Pote de Tinta Amarela Infinita" },
};
