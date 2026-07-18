import type { AulaArteV1 } from "../../types";
import vocabRupestre from "@/assets/arte-3ano/u1-vocab-rupestre.jpg";
import vocabOcre from "@/assets/arte-3ano/u1-vocab-ocre.jpg";
import vocabPigmento from "@/assets/arte-3ano/u1-vocab-pigmento.jpg";
import vocabTerrosas from "@/assets/arte-3ano/u1-vocab-terrosas.jpg";
import pigVermelho from "@/assets/arte-3ano/u1-pig-vermelho.jpg";
import pigOcre from "@/assets/arte-3ano/u1-pig-ocre.jpg";
import pigCarvao from "@/assets/arte-3ano/u1-pig-carvao.jpg";
import pigArgila from "@/assets/arte-3ano/u1-pig-argila.jpg";
import animalBisao from "@/assets/arte-3ano/u1-animal-bisao.jpg";
import animalVeado from "@/assets/arte-3ano/u1-animal-veado.jpg";
import animalMao from "@/assets/arte-3ano/u1-animal-mao.jpg";
import u1passo1 from "@/assets/arte-3ano/u1-passo1-coletar.jpg";
import u1passo2 from "@/assets/arte-3ano/u1-passo2-triturar.jpg";
import u1passo3 from "@/assets/arte-3ano/u1-passo3-misturar.jpg";
import u1passo4 from "@/assets/arte-3ano/u1-passo4-pintar.jpg";
import u1passo5 from "@/assets/arte-3ano/u1-passo5-soprar.jpg";
import mapaLascaux from "@/assets/arte-3ano/u1-mapa-lascaux.jpg";
import mapaCapivara from "@/assets/arte-3ano/u1-mapa-capivara.jpg";
import mapaPincel from "@/assets/arte-3ano/u1-mapa-pincel-osso.jpg";
import mapaCarvao from "@/assets/arte-3ano/u1-mapa-carvao.jpg";

/**
 * Arte · 3º Ano · Unidade 1 · Aula 01 — "Os Segredos das Cores Terrosas e a Pintura Rupestre"
 * Metanarrativa: 🕵️ Os Exploradores do Tempo e do Espaço
 * (EF15AR01 / EF15AR03 / EF15AR04)
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-cores-terrosas",
  titulo: "Os Segredos das Cores Terrosas e a Pintura Rupestre",
  iconeTrilha: "🕵️",
  bncc: ["EF15AR01", "EF15AR03", "EF15AR04"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Explorador! Nossa primeira expedição desce até uma caverna com paredes cheias de bisões e caçadores. Sem canetinha, sem papelaria — como pintaram isso há milhares de anos? Toca em cada pista pra descobrir!",
    titulo: "🔍 O Mapa na Parede da Caverna",
    instrucao: "Toca em cada pista pra investigar",
    itens: [
      { emoji: "🕳️", rotulo: "Caverna de Lascaux (França)", descricao: "Descoberta em 1940 por 4 meninos e um cão. Cheia de bisões, cavalos e cervos em ocre e carvão.", cor: "#78350f", fotoUrl: mapaLascaux },
      { emoji: "🏞️", rotulo: "Serra da Capivara (Piauí, Brasil)", descricao: "As pinturas mais antigas das Américas — caçadores, danças e árvores em vermelho-ocre.", cor: "#dc2626", fotoUrl: mapaCapivara },
      { emoji: "🦴", rotulo: "Pincel de osso e pelo", descricao: "Nossos ancestrais usavam pelos de animal amarrados em ossos ou pontas de galho mastigadas.", cor: "#a16207", fotoUrl: mapaPincel },
      { emoji: "🔥", rotulo: "Carvão da fogueira", descricao: "Depois de queimar madeira, o pedaço preto virava o primeiro lápis da humanidade.", cor: "#1f2937", fotoUrl: mapaCarvao },
    ],
    falaFinal: "Eles inventaram a PRIMEIRA PALETA da humanidade — as Cores Terrosas: tudo vindo direto do chão.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Antes de descer mais fundo na caverna, treina o olho de arqueólogo!",
    perguntas: [
      {
        pergunta: "As pinturas rupestres eram feitas com…",
        alternativas: [
          { texto: "Tinta acrílica comprada em loja", correta: false },
          { texto: "Terra, pedras trituradas e carvão", correta: true },
        ],
        feedbackAcerto: "Isso! Os pigmentos vinham DIRETO do chão — minerais e carvão.",
        feedbackErro: "Loja não existia! Eles trituravam MINERAIS e usavam CARVÃO da fogueira.",
      },
      {
        pergunta: "Qual dessas cores VOCÊ NÃO encontra nas paredes de Lascaux?",
        alternativas: [
          { texto: "Azul-neon brilhante", correta: true },
          { texto: "Marrom, ocre e vermelho-escuro", correta: false },
        ],
        feedbackAcerto: "Certo! Não tinha azul-neon. Só cores da terra: marrom, ocre e vermelho.",
        feedbackErro: "Ao contrário: azul-neon é INVENÇÃO moderna. Na Pré-História só havia tons terrosos.",
      },
      {
        pergunta: "Um dos pincéis pré-históricos era feito de…",
        alternativas: [
          { texto: "Pelos de animal amarrados em osso", correta: true },
          { texto: "Cerdas plásticas coloridas", correta: false },
        ],
        feedbackAcerto: "Perfeito, arqueólogo! Osso + pelo = primeiro pincel do mundo.",
        feedbackErro: "Plástico só existe há pouco tempo. O pincel deles era OSSO + PELO.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Palavras da nossa expedição — toca em cada uma pra desbloquear seu diário.",
    cards: [
      { termo: "Arte Rupestre", definicao: "Pintura ou gravura feita em ROCHAS e cavernas há milhares de anos.", emoji: "🕳️", cor: "#78350f", fotoUrl: vocabRupestre },
      { termo: "Ocre", definicao: "Cor amarelo-queimado ou vermelho-escuro tirada da TERRA rica em ferro.", emoji: "🟡", cor: "#eab308", fotoUrl: vocabOcre },
      { termo: "Pigmento", definicao: "PÓ COLORIDO que dá cor à tinta — pode vir de minerais, plantas ou carvão.", emoji: "🎨", cor: "#dc2626", fotoUrl: vocabPigmento },
      { termo: "Cores Terrosas", definicao: "Cores parecidas com o SOLO: marrom, bege, ocre, terracota.", emoji: "🟤", cor: "#92400e", fotoUrl: vocabTerrosas },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Vou te contar como o primeiro artista da humanidade inventava suas cores. Fica atento à receita!",
    paragrafos: [
      "Há mais de 30 mil anos, os primeiros humanos observaram que a TERRA tinha cores diferentes em cada lugar — vermelha aqui, amarela ali, quase preta lá.",
      "Eles cavavam esses minerais coloridos, TRITURAVAM em pedras planas até virar pó fino e misturavam com ÁGUA e um pouco de GORDURA animal pra grudar melhor.",
      "Para PRETO, usavam carvão da fogueira. Para VERMELHO e AMARELO, óxidos de ferro (a mesma cor da ferrugem). Para BRANCO, argila clara ou giz.",
      "Depois aplicavam com os DEDOS, com pincéis de pelos ou SOPRAVAM a tinta por dentro de ossos ocos — um dos primeiros 'sprays' da história!",
    ],
    pigmentos: [
      { nome: "Vermelho-terra", hex: "#b91c1c", fonte: "Óxido de ferro (hematita)", emoji: "🔴", fotoUrl: pigVermelho },
      { nome: "Ocre amarelo", hex: "#eab308", fonte: "Óxido de ferro amarelo", emoji: "🟡", fotoUrl: pigOcre },
      { nome: "Preto de carvão", hex: "#1f2937", fonte: "Madeira queimada", emoji: "⚫", fotoUrl: pigCarvao },
      { nome: "Marrom de argila", hex: "#78350f", fonte: "Barro rico em minerais", emoji: "🟤", fotoUrl: pigArgila },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Confere o que ficou no seu caderno de expedição!",
    perguntas: [
      {
        pergunta: "De onde vem a cor VERMELHA das pinturas rupestres?",
        alternativas: [
          { texto: "De sangue de animal", correta: false },
          { texto: "De minerais com óxido de ferro (hematita)", correta: true },
        ],
        feedbackAcerto: "Sim! É o MESMO ferro que enferruja um portão — só que em pó.",
        feedbackErro: "Não é sangue. É o FERRO da terra oxidado — a hematita — que dá vermelho.",
      },
      {
        pergunta: "Pra fazer a tinta grudar na parede, misturavam o pigmento com…",
        alternativas: [
          { texto: "Água + gordura animal", correta: true },
          { texto: "Cola branca escolar", correta: false },
        ],
        feedbackAcerto: "Certo, arqueólogo! Gordura funcionava como cola natural.",
        feedbackErro: "Cola escolar não existia. Eles usavam ÁGUA + GORDURA de animal.",
      },
      {
        pergunta: "As mãos em negativo (spray) das cavernas eram feitas…",
        alternativas: [
          { texto: "Soprando a tinta por um osso oco em volta da mão", correta: true },
          { texto: "Pintando com um rolinho de espuma", correta: false },
        ],
        feedbackAcerto: "Perfeito! Osso oco = primeiro spray da humanidade.",
        feedbackErro: "Nem rolinho, nem spray moderno. Eles SOPRAVAM tinta por um OSSO oco.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada pintura veio de um lugar do planeta. Qual pigmento combina com cada uma?",
    animais: [
      {
        nome: "Bisão de Lascaux (França)", emoji: "🐃", fotoUrl: animalBisao,
        corAlvo: { nome: "Ocre vermelho + carvão", hex: "#b45309" },
        opcoes: [
          { nome: "Azul-neon industrial", hex: "#38bdf8" },
          { nome: "Ocre vermelho + carvão", hex: "#b45309" },
          { nome: "Verde-limão sintético", hex: "#84cc16" },
        ],
        falaAcerto: "Bisão feito em ocre vermelho e contorno de carvão — 17 mil anos atrás!",
      },
      {
        nome: "Cena de caça — Serra da Capivara (BR)", emoji: "🦌", fotoUrl: animalVeado,
        corAlvo: { nome: "Vermelho de hematita", hex: "#dc2626" },
        opcoes: [
          { nome: "Rosa-choque moderno", hex: "#ec4899" },
          { nome: "Vermelho de hematita", hex: "#dc2626" },
          { nome: "Roxo de anilina", hex: "#a855f7" },
        ],
        falaAcerto: "Vermelho de hematita! No Piauí, é a cor MAIS antiga das Américas.",
      },
      {
        nome: "Mão em negativo (Argentina/Espanha)", emoji: "🖐️", fotoUrl: animalMao,
        corAlvo: { nome: "Ocre soprado por osso", hex: "#c2410c" },
        opcoes: [
          { nome: "Tinta em spray de lata", hex: "#64748b" },
          { nome: "Ocre soprado por osso", hex: "#c2410c" },
          { nome: "Aquarela em tubo", hex: "#3b82f6" },
        ],
        falaAcerto: "Ocre soprado por osso oco em volta da mão — 'assinatura' pré-histórica.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena a receita da tinta pré-histórica — 5 passos que os artistas de Lascaux repetiam.",
    passos: [
      { id: "p1", texto: "COLETO terra colorida e carvão", emoji: "⛏️", ordem: 1, fotoUrl: u1passo1 },
      { id: "p2", texto: "TRITURO os minerais até virar pó fino", emoji: "🪨", ordem: 2, fotoUrl: u1passo2 },
      { id: "p3", texto: "MISTURO o pó com água e gordura", emoji: "🥣", ordem: 3, fotoUrl: u1passo3 },
      { id: "p4", texto: "APLICO com os dedos ou pincel de pelo", emoji: "🖐️", ordem: 4, fotoUrl: u1passo4 },
      { id: "p5", texto: "SOPRO pigmento pelo osso oco pro contorno", emoji: "💨", ordem: 5, fotoUrl: u1passo5 },
    ],
    falaAcerto: "Sua tinta rupestre está pronta! É a MESMA receita de 30 mil anos atrás.",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do explorador. Toca nas palavras coloridas pra ouvir.",
    titulo: "Diário do Explorador do Tempo",
    trechos: [
      { texto: "Desci na caverna e vi paredes cobertas de arte", palavraDestaque: "rupestre", corDestaque: "#78350f" },
      { texto: "Os pintores misturavam minerais pra fazer o", palavraDestaque: "pigmento", corDestaque: "#dc2626" },
      { texto: "A cor amarelo-queimada da terra chama-se", palavraDestaque: "ocre", corDestaque: "#eab308" },
      { texto: "Só usavam tons da terra: as cores", palavraDestaque: "terrosas", corDestaque: "#92400e" },
      { texto: "Sou um Explorador do Tempo — a história começa aqui!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🧪 Alquimia da Caverna! Toca em CADA ingrediente antes da tocha apagar pra atingir o tom exato do ocre.",
    titulo: "🧪 Alquimia da Caverna",
    instrucao: "Toque em todos os ingredientes antes do tempo acabar!",
    tempoSeg: 35,
    itens: [
      { emoji: "🪨", rotulo: "Pedra de hematita", cor: "#b91c1c" },
      { emoji: "🟡", rotulo: "Pó de ocre amarelo", cor: "#eab308" },
      { emoji: "⚫", rotulo: "Carvão da fogueira", cor: "#1f2937" },
      { emoji: "💧", rotulo: "Água do rio", cor: "#0ea5e9" },
      { emoji: "🫙", rotulo: "Gordura animal", cor: "#fbbf24" },
      { emoji: "🦴", rotulo: "Osso oco (spray)", cor: "#a16207" },
    ],
    falaFinal: "Alquimia completa! Seu pote de ocre está brilhando na luz da tocha.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o caderno da expedição repassando cada achado. Toca em cada verbete!",
    titulo: "📓 Caderno da Expedição Rupestre",
    itens: [
      { emoji: "🕳️", rotulo: "Arte Rupestre", descricao: "Pintura em rocha — a mais antiga da humanidade.", cor: "#78350f" },
      { emoji: "🟡", rotulo: "Ocre", descricao: "Amarelo/vermelho vindo de óxido de ferro.", cor: "#eab308" },
      { emoji: "🎨", rotulo: "Pigmento", descricao: "Pó colorido dissolvido em água + gordura.", cor: "#dc2626" },
      { emoji: "🟤", rotulo: "Cores Terrosas", descricao: "Paleta que imita o solo — marrom, bege, terracota.", cor: "#92400e" },
      { emoji: "🐃", rotulo: "Lascaux", descricao: "Caverna francesa: bisões em ocre e carvão.", cor: "#b45309" },
      { emoji: "🦌", rotulo: "Serra da Capivara", descricao: "Piauí, Brasil — arte mais antiga das Américas.", cor: "#dc2626" },
      { emoji: "🖐️", rotulo: "Mão em negativo", descricao: "Assinatura feita soprando pigmento por osso.", cor: "#c2410c" },
    ],
    falaFinal: "Primeira página do Atlas dos Exploradores DESBLOQUEADA!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final da expedição, explorador — mostra o que aprendeu!",
    quiz: {
      pergunta: "De onde os artistas da Pré-História retiravam os pigmentos para fazer as cores terrosas?",
      alternativas: [
        { texto: "Da terra, de rochas trituradas e do carvão", correta: true },
        { texto: "De fábricas de tintas modernas", correta: false },
      ],
      feedback: "Isso! Os pigmentos vinham DIRETO do solo — minerais de ferro pra vermelho/amarelo e carvão pra preto. Sem indústria, sem canetinha.",
    },
    missaoFamilia:
      "🟤 Tinta de Terra: em família, peguem uma colher de terra do quintal ou de um vaso, misturem com um pouco de água e uma colher de cola branca. Usem essa tinta caseira pra desenhar um animal em papel pardo. Sintam a TEXTURA do solo virar arte.",
    recompensaTitulo: "📜 Página 1 restaurada — O Painel dos Primeiros Homens.",
    recompensaItem: "🖤 Carvão Sagrado de Lascaux",
  },

  recompensa: { xp: 80, moedas: 40, medalha: "Carvão Sagrado de Lascaux" },
};
