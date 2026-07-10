import type { AulaGeoV1 } from "../../types";

const IMG_GLOBO = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800";
const IMG_ATLAS = "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800";
const IMG_MAPA_ANTIGO = "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=800";
const IMG_BUSSOLA = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800";

/**
 * Geografia · 5º Ano · Unidade 3 · Aula 02
 * "Cartógrafo Mestre: Escala, Legenda e Tipos de Mapa" — EF05GE09
 */
export const aula02: AulaGeoV1 = {
  slug: "aula-02-escala-e-legenda",
  titulo: "Cartógrafo Mestre: Escala e Legenda",
  iconeTrilha: "🗺️",
  bncc: ["EF05GE09"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe o globo. O mundo inteiro couber numa bola.",
    mapaUrl: IMG_GLOBO,
    imagemDestaqueUrl: IMG_GLOBO,
    aurora:
      "Explorador, o Brasil é gigante — 8,5 milhões de km². Mas o mapa do Brasil cabe numa folha! Como? Usando ESCALA. E pra saber o que cada cor e símbolo quer dizer, usamos a LEGENDA.",
    falaFinal: "Bora virar cartógrafo mestre e ler qualquer mapa do mundo.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: por que um mapa nunca é do mesmo TAMANHO do lugar real?",
    pergunta: "Por que usar escala?",
    opcoes: [
      {
        id: "escala",
        titulo: "Pra CABER na folha",
        subtitulo: "reduzimos proporcionalmente",
        emoji: "📏",
        cor: "from-purple-400 to-fuchsia-600",
      },
      {
        id: "arte",
        titulo: "Só por CAPRICHO",
        subtitulo: "pra ficar bonitinho",
        emoji: "🎨",
        cor: "from-pink-400 to-rose-600",
      },
    ],
    respostaCerta: "escala",
    feedbackAcerto: "Isso! ESCALA é a redução proporcional pra tudo caber e você entender.",
    feedbackErro: "Não é capricho. É ESCALA — reduzir na mesma proporção.",
    falaFinal: "Escala é matemática. Reduz mantendo a proporção.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 ferramentas do cartógrafo mestre.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "escala",
        capa: "1. Escala",
        emoji: "📏",
        cor: "from-purple-500 to-fuchsia-700",
        conteudo:
          "ESCALA é quanto o mapa foi REDUZIDO. Escala 1:100.000 = 1cm no mapa vale 100.000cm (1km) na realidade.",
        exemplo: "Ex.: mapa do bairro tem escala grande. Mapa do mundo tem escala pequena.",
      },
      {
        id: "legenda",
        capa: "2. Legenda",
        emoji: "🔑",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "LEGENDA é a CHAVE do mapa. Explica o que cada cor, linha ou símbolo significa. Sem legenda, o mapa é enigma.",
        exemplo: "Ex.: linha azul = rio. Ponto vermelho = capital. Verde = floresta.",
        fotoUrl: IMG_ATLAS,
      },
      {
        id: "rosa",
        capa: "3. Rosa dos ventos",
        emoji: "🧭",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "ROSA DOS VENTOS mostra os pontos cardeais: Norte, Sul, Leste, Oeste. Serve pra você se orientar no mapa.",
        exemplo: "Ex.: N em cima, S embaixo, L direita, O esquerda.",
        fotoUrl: IMG_BUSSOLA,
      },
      {
        id: "tipos",
        capa: "4. Tipos de mapa",
        emoji: "🗺️",
        cor: "from-emerald-500 to-green-700",
        conteudo:
          "Existem vários MAPAS: POLÍTICO (mostra países/estados), FÍSICO (relevo/rios), TEMÁTICO (economia, clima), MÚNDI (o mundo todo).",
        exemplo: "Ex.: pra viajar, use POLÍTICO. Pra achar montanha, FÍSICO.",
      },
    ],
    falaFinal: "Escala, legenda, rosa dos ventos, tipos de mapa. 4 ferramentas.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Toque em cada elemento do mapa pra descobrir sua função.",
    instrucao: "Toque nos pontos",
    mapaUrl: IMG_MAPA_ANTIGO,
    pontos: [
      {
        id: "titulo",
        x: 30,
        y: 15,
        emoji: "📌",
        cor: "from-red-500 to-rose-700",
        titulo: "TÍTULO",
        texto: "Diz o que o mapa mostra. Ex.: 'Mapa Político do Brasil'. Sem título, você não sabe o assunto.",
      },
      {
        id: "escala",
        x: 25,
        y: 80,
        emoji: "📏",
        cor: "from-purple-500 to-fuchsia-700",
        titulo: "ESCALA",
        texto: "Mostra a redução. 1:1.000.000 = 1cm no mapa é 10km reais.",
      },
      {
        id: "legenda",
        x: 75,
        y: 75,
        emoji: "🔑",
        cor: "from-amber-500 to-orange-700",
        titulo: "LEGENDA",
        texto: "Explica cores e símbolos. É o dicionário do mapa.",
        fotoUrl: IMG_ATLAS,
      },
      {
        id: "rosa",
        x: 80,
        y: 20,
        emoji: "🧭",
        cor: "from-sky-500 to-blue-700",
        titulo: "ROSA DOS VENTOS",
        texto: "Aponta o Norte. Ajuda você a se orientar.",
        fotoUrl: IMG_BUSSOLA,
      },
    ],
    falaFinal: "Título, escala, legenda, rosa dos ventos: 4 elementos obrigatórios.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de cartógrafo.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "O que serve pra saber o SIGNIFICADO das cores no mapa?",
        cards: [
          { id: "leg", emoji: "🔑", titulo: "Legenda", cor: "from-amber-500 to-orange-700" },
          { id: "esc", emoji: "📏", titulo: "Escala", cor: "from-purple-500 to-fuchsia-700" },
          { id: "tit", emoji: "📌", titulo: "Título", cor: "from-red-500 to-rose-700" },
        ],
        correta: "leg",
        feedbackAcerto: "Isso! LEGENDA explica as cores.",
        feedbackErro: "Cor tem significado explicado pela LEGENDA.",
      },
      {
        id: "q2",
        pergunta: "Rosa dos ventos aponta principalmente pro...",
        fotoUrl: IMG_BUSSOLA,
        cards: [
          { id: "n", emoji: "⬆️", titulo: "Norte", cor: "from-sky-500 to-blue-700" },
          { id: "s", emoji: "⬇️", titulo: "Sul", cor: "from-amber-500 to-orange-700" },
          { id: "l", emoji: "➡️", titulo: "Leste", cor: "from-red-500 to-rose-700" },
        ],
        correta: "n",
        feedbackAcerto: "Perfeito! Rosa dos ventos aponta o NORTE.",
        feedbackErro: "Ponto principal = NORTE (o 'N' grande).",
      },
      {
        id: "q3",
        pergunta: "Escala 1:100.000 significa que 1cm no mapa vale...",
        cards: [
          { id: "km", emoji: "🏙️", titulo: "1 km real", cor: "from-emerald-500 to-green-700" },
          { id: "cm", emoji: "📏", titulo: "1 cm real", cor: "from-red-500 to-rose-700" },
          { id: "m", emoji: "📐", titulo: "1 metro real", cor: "from-sky-500 to-blue-700" },
        ],
        correta: "km",
        feedbackAcerto: "Isso! 100.000 cm = 1 km. Cabeça matemática!",
        feedbackErro: "100.000 cm = 1000 metros = 1 KM.",
      },
    ],
    falaFinal: "Radar afiado! Você virou cartógrafo.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Localize os 4 pontos cardeais do Brasil. O estado mais ao Norte, ao Sul, Leste e Oeste.",
    instrucao: "Acenda os estados dos 4 extremos do Brasil",
    missao: {
      tipo: "selecionar",
      siglas: ["RR", "RS", "PB", "AC"],
      pergunta: "Quais estados são os EXTREMOS N, S, L, O do Brasil?",
    },
    falaFinal: "RR ao Norte, RS ao Sul, PB no Leste, AC no Oeste. Extremos mapeados!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize os elementos de um mapa completo, do maior pro menor detalhe.",
    instrucao: "Toque na ordem",
    pergunta: "Do geral pro específico:",
    paradas: [
      {
        id: "mundi",
        emoji: "🌍",
        rotulo: "1. Mapa-múndi",
        descricao: "Mostra o planeta inteiro. Escala minúscula.",
      },
      {
        id: "continente",
        emoji: "🗺️",
        rotulo: "2. Mapa da América do Sul",
        descricao: "Zoom no continente. Escala menor.",
      },
      {
        id: "pais",
        emoji: "🇧🇷",
        rotulo: "3. Mapa do Brasil",
        descricao: "Só o país. Estados aparecem.",
      },
      {
        id: "estado",
        emoji: "📍",
        rotulo: "4. Mapa do estado",
        descricao: "Só o estado. Cidades aparecem.",
      },
      {
        id: "bairro",
        emoji: "🏘️",
        rotulo: "5. Mapa do bairro",
        descricao: "Zoom máximo. Ruas e casas aparecem.",
      },
    ],
    ordemCerta: ["mundi", "continente", "pais", "estado", "bairro"],
    feedbackAcerto: "Ordem perfeita! Do planeta ao seu quarteirão.",
    feedbackErro: "Repense: mundo primeiro, bairro por último.",
    falaFinal: "5 escalas, do maior pro menor.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia e marque as palavras-chave.",
    tituloLivro: "📔 Atlas do Eco-Cidadão",
    subtitulo: "Página 4 — Ferramentas do Mapa",
    paragrafos: [
      {
        id: "p1",
        texto: "ESCALA mostra a redução do mapa. 1:100.000 quer dizer que 1cm vale 1 km real.",
        chaves: ["escala", "redução"],
      },
      {
        id: "p2",
        texto: "LEGENDA explica o significado de cada cor, linha e símbolo. É a chave do mapa.",
        chaves: ["legenda", "cor", "símbolo"],
      },
      {
        id: "p3",
        texto: "ROSA DOS VENTOS mostra os pontos cardeais: Norte, Sul, Leste e Oeste.",
        chaves: ["rosa", "cardeais", "norte"],
      },
      {
        id: "p4",
        texto: "Mapas podem ser POLÍTICOS (países), FÍSICOS (relevo) ou TEMÁTICOS (clima, economia).",
        chaves: ["político", "físico", "temático"],
      },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo CARTÓGRAFO! Cada rodada, escolha o TIPO DE MAPA certo pra resolver o problema.",
    instrucao: "⏱️ Qual mapa usar?",
    duracaoSegundos: 12,
    pecas: [
      { id: "politico", emoji: "🇧🇷", rotulo: "Político" },
      { id: "fisico", emoji: "⛰️", rotulo: "Físico" },
      { id: "clima", emoji: "☁️", rotulo: "Climático" },
      { id: "rodo", emoji: "🛣️", rotulo: "Rodoviário" },
      { id: "populacao", emoji: "👥", rotulo: "Populacional" },
      { id: "mundi", emoji: "🌍", rotulo: "Múndi" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Quero saber", emoji: "❓", cor: "from-sky-400 to-blue-600" },
        municipioB: { nome: "onde é o Japão", emoji: "🗾", cor: "from-red-400 to-rose-600" },
        contexto: "Quer saber em que continente fica o Japão. Qual mapa?",
        pecaCertaId: "mundi",
        feedbackAcerto: "Isso! MAPA-MÚNDI mostra o mundo inteiro.",
        feedbackErro: "Pra ver o mundo todo = MAPA-MÚNDI.",
      },
      {
        id: "r2",
        municipioA: { nome: "Viagem", emoji: "🚗", cor: "from-amber-400 to-orange-600" },
        municipioB: { nome: "SP → RJ", emoji: "🛣️", cor: "from-slate-400 to-gray-600" },
        contexto: "Vai dirigir de SP pro RJ. Qual mapa?",
        pecaCertaId: "rodo",
        feedbackAcerto: "Boa! MAPA RODOVIÁRIO mostra estradas.",
        feedbackErro: "Estradas = MAPA RODOVIÁRIO.",
      },
      {
        id: "r3",
        municipioA: { nome: "Escalar", emoji: "⛰️", cor: "from-emerald-400 to-green-600" },
        municipioB: { nome: "montanha", emoji: "🥾", cor: "from-amber-400 to-orange-600" },
        contexto: "Vai escalar uma serra. Precisa saber a altura do terreno. Qual mapa?",
        pecaCertaId: "fisico",
        feedbackAcerto: "Perfeito! MAPA FÍSICO mostra relevo.",
        feedbackErro: "Altura e relevo = MAPA FÍSICO.",
      },
      {
        id: "r4",
        municipioA: { nome: "Fronteiras", emoji: "🚧", cor: "from-red-400 to-rose-600" },
        municipioB: { nome: "dos estados", emoji: "🗺️", cor: "from-sky-400 to-blue-600" },
        contexto: "Quer aprender quais estados fazem fronteira. Qual mapa?",
        pecaCertaId: "politico",
        feedbackAcerto: "Isso! MAPA POLÍTICO mostra estados e fronteiras.",
        feedbackErro: "Fronteiras entre estados = MAPA POLÍTICO.",
      },
      {
        id: "r5",
        municipioA: { nome: "Chuva", emoji: "🌧️", cor: "from-sky-400 to-blue-600" },
        municipioB: { nome: "no Amazonas", emoji: "🌴", cor: "from-emerald-400 to-green-600" },
        contexto: "Quer saber quanto chove por região. Qual mapa?",
        pecaCertaId: "clima",
        feedbackAcerto: "Isso! MAPA CLIMÁTICO mostra chuva e temperatura.",
        feedbackErro: "Chuva e clima = MAPA CLIMÁTICO.",
      },
      {
        id: "r6",
        municipioA: { nome: "Quantas", emoji: "👥", cor: "from-purple-400 to-indigo-600" },
        municipioB: { nome: "pessoas", emoji: "🏙️", cor: "from-red-400 to-rose-600" },
        contexto: "Quer descobrir onde vive mais gente. Qual mapa?",
        pecaCertaId: "populacao",
        feedbackAcerto: "Perfeito! MAPA POPULACIONAL mostra concentração de gente.",
        feedbackErro: "Gente = MAPA POPULACIONAL.",
      },
    ],
    falaFinal: "6 mapas certos! Você virou cartógrafo mestre.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza dos elementos essenciais que TODO mapa deve ter.",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "conteudo",
        rotulo: "Conteúdo (50%)",
        emoji: "🗺️",
        percentual: 50,
        cor: "#a855f7",
        descricao: "O DESENHO do mapa: países, rios, cidades — o que o mapa mostra.",
        exemplos: ["🇧🇷 Estados", "🏞️ Rios", "🏙️ Capitais"],
      },
      {
        id: "elementos",
        rotulo: "Elementos guia (50%)",
        emoji: "🔑",
        percentual: 50,
        cor: "#f59e0b",
        descricao: "Título, escala, legenda e rosa dos ventos — sem eles o mapa é enigma.",
        exemplos: ["📌 Título", "📏 Escala", "🔑 Legenda", "🧭 Rosa dos ventos"],
      },
    ],
    falaFinal: "4 elementos: sem UM deles, o mapa é incompleto.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Cartógrafo Mestre.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "Escala num mapa serve pra...",
        opcoes: [
          { id: "a", texto: "Deixar o mapa mais bonito", correta: false },
          { id: "b", texto: "Mostrar a redução proporcional da realidade", correta: true },
          { id: "c", texto: "Contar quantos habitantes tem o país", correta: false },
        ],
        feedbackAcerto: "Isso! Escala = REDUÇÃO PROPORCIONAL.",
        feedbackErro: "Escala é REDUÇÃO PROPORCIONAL do real.",
      },
      {
        id: "av2",
        pergunta: "Legenda serve pra:",
        opcoes: [
          { id: "a", texto: "Explicar cores, linhas e símbolos do mapa", correta: true },
          { id: "b", texto: "Contar uma história antiga", correta: false },
          { id: "c", texto: "Mostrar a escala", correta: false },
        ],
        feedbackAcerto: "Perfeito! Legenda TRADUZ os símbolos.",
        feedbackErro: "Legenda é a CHAVE dos símbolos.",
      },
      {
        id: "av3",
        pergunta: "Mapa temático é aquele que:",
        opcoes: [
          { id: "a", texto: "Mostra só as fronteiras políticas", correta: false },
          { id: "b", texto: "Mostra um TEMA específico: clima, população, economia", correta: true },
          { id: "c", texto: "Mostra só as montanhas", correta: false },
        ],
        feedbackAcerto: "Isso! TEMÁTICO = foco num TEMA.",
        feedbackErro: "TEMÁTICO = tem um TEMA específico (clima, gente, dinheiro).",
      },
    ],
    selo: {
      nome: "Cartógrafo Mestre",
      subtitulo: "Insígnia do Explorador Eco-Cidadão",
      emoji: "🗺️",
      cor: "from-purple-400 to-fuchsia-600",
    },
    falaFinal: "Insígnia conquistada! Nenhum mapa te engana mais.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Cartógrafo Mestre" },
};
