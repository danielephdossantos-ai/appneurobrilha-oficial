import type { AulaGeoV1 } from "../../types";
import { url as mapaTematico } from "@/assets/geografia-5ano/mapa-tematico.jpg.asset.json";
import { url as desigualdade } from "@/assets/geografia-5ano/desigualdade-regional.jpg.asset.json";
/**
 * Geografia · 5º Ano · Unidade 3 · Aula 01
 * "Mapas Temáticos e Diferenças Regionais" — EF05GE05 / EF05GE09
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-mapas-tematicos",
  titulo: "Mapas Temáticos e Diferenças Regionais",
  iconeTrilha: "🗺️",
  bncc: ["EF05GE05", "EF05GE09"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe: cada cor conta uma história.",
    mapaUrl: mapaTematico,
    imagemDestaqueUrl: mapaTematico,
    aurora:
      "Explorador, mapas não mostram só estradas! Existem mapas TEMÁTICOS que revelam DENSIDADE, CLIMA, DESMATAMENTO, POBREZA. Cada cor conta um pedaço da história do Brasil.",
    falaFinal: "Ler mapa temático é ler o país. Vamos aprender.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite: num mapa de POLUIÇÃO, o que uma mancha VERMELHA ESCURA representa?",
    pergunta: "Vermelho escuro = ?",
    opcoes: [
      {
        id: "muito",
        titulo: "MUITA poluição",
        subtitulo: "concentração alta",
        emoji: "🔴",
        cor: "from-red-500 to-rose-700",
      },
      {
        id: "pouca",
        titulo: "POUCA poluição",
        subtitulo: "área limpa",
        emoji: "🟢",
        cor: "from-emerald-500 to-green-700",
      },
    ],
    respostaCerta: "muito",
    feedbackAcerto:
      "Isso! Cores FORTES (vermelho) = concentração ALTA do que o mapa está medindo.",
    feedbackErro: "Áreas limpas costumam ser VERDES. VERMELHO ESCURO = alerta, alta concentração.",
    falaFinal: "Cores forte = muito. Cores frias/claras = pouco. Regra do mapa.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras de quem lê mapas.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "tematico",
        capa: "1. Mapa temático",
        emoji: "🗺️",
        cor: "from-purple-500 to-fuchsia-700",
        conteudo:
          "MAPA TEMÁTICO mostra UM tema específico — clima, população, desmatamento, riqueza — usando cores.",
        exemplo: "Ex.: mapa da densidade demográfica, mapa dos biomas.",
        fotoUrl: mapaTematico,
      },
      {
        id: "legenda",
        capa: "2. Legenda",
        emoji: "🔑",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "LEGENDA explica o que cada cor ou símbolo significa. Sem legenda, o mapa é só desenho colorido.",
        exemplo: "Ex.: verde = floresta, marrom = solo exposto.",
      },
      {
        id: "escala-cor",
        capa: "3. Escala de cores",
        emoji: "🌈",
        cor: "from-red-500 to-rose-700",
        conteudo:
          "ESCALA DE CORES vai de cor CLARA (pouco) até cor ESCURA (muito). É como um termômetro visual.",
        exemplo: "Ex.: amarelo → laranja → vermelho = poluição aumentando.",
      },
      {
        id: "desigualdade",
        capa: "4. Desigualdade regional",
        emoji: "⚖️",
        cor: "from-emerald-500 to-green-700",
        conteudo:
          "DESIGUALDADE REGIONAL é quando REGIÕES do país têm acessos MUITO diferentes a escola, saúde, renda.",
        exemplo: "Ex.: Sudeste com mais fábricas, Norte com menos hospitais.",
        fotoUrl: desigualdade,
      },
    ],
    falaFinal: "Tema, legenda, escala, desigualdade. 4 chaves.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada parte do mapa e ouça a leitura da Aurora.",
    instrucao: "Toque em cada balão",
    mapaUrl: mapaTematico,
    pontos: [
      {
        id: "vermelho",
        x: 55,
        y: 55,
        emoji: "🔴",
        cor: "from-red-500 to-rose-700",
        titulo: "VERMELHO = alta",
        texto: "Vermelho escuro mostra ALTÍSSIMA concentração do que o mapa mede — atenção!",
      },
      {
        id: "amarelo",
        x: 35,
        y: 40,
        emoji: "🟡",
        cor: "from-amber-500 to-yellow-600",
        titulo: "AMARELO/LARANJA = média",
        texto: "Cores intermediárias mostram concentração MÉDIA. Área em transição.",
      },
      {
        id: "verde",
        x: 30,
        y: 70,
        emoji: "🟢",
        cor: "from-emerald-500 to-green-700",
        titulo: "VERDE = baixa",
        texto: "Verde mostra POUCA concentração. Áreas menos afetadas ou menos populosas.",
      },
      {
        id: "legenda",
        x: 75,
        y: 20,
        emoji: "🔑",
        cor: "from-purple-500 to-fuchsia-700",
        titulo: "LEGENDA no canto",
        texto: "Sempre olhe a LEGENDA primeiro. Ela é a chave que abre o mapa.",
      },
    ],
    falaFinal: "Cor + legenda = história completa.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas pra ler mapa como um mestre.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Num mapa de calor (poluição), vermelho escuro significa:",
        fotoUrl: mapaTematico,
        cards: [
          { id: "alta", emoji: "🔴", titulo: "Alta poluição", cor: "from-red-500 to-rose-700" },
          { id: "baixa", emoji: "🟢", titulo: "Baixa poluição", cor: "from-emerald-500 to-green-700" },
          { id: "nula", emoji: "⚪", titulo: "Sem poluição", cor: "from-slate-400 to-gray-600" },
        ],
        correta: "alta",
        feedbackAcerto: "Isso! Vermelho escuro = ALTA concentração — alerta.",
        feedbackErro: "Verde é baixa, branco é sem dado. Vermelho escuro = ALTA.",
      },
      {
        id: "q2",
        pergunta: "O que explica as cores de um mapa?",
        cards: [
          { id: "ti", emoji: "📌", titulo: "Título", cor: "from-sky-500 to-blue-700" },
          { id: "le", emoji: "🔑", titulo: "Legenda", cor: "from-amber-500 to-orange-700" },
          { id: "es", emoji: "📏", titulo: "Escala numérica", cor: "from-purple-500 to-fuchsia-700" },
        ],
        correta: "le",
        feedbackAcerto: "Perfeito! LEGENDA é a chave do mapa.",
        feedbackErro: "Título diz o tema, escala diz o tamanho. Cores = LEGENDA.",
      },
      {
        id: "q3",
        pergunta: "Regiões do Brasil com acessos diferentes a escola e saúde mostra:",
        fotoUrl: desigualdade,
        cards: [
          { id: "de", emoji: "⚖️", titulo: "Desigualdade regional", cor: "from-emerald-500 to-green-700" },
          { id: "cl", emoji: "☀️", titulo: "Clima diferente", cor: "from-amber-500 to-orange-700" },
          { id: "re", emoji: "⛰️", titulo: "Relevo diferente", cor: "from-slate-500 to-gray-700" },
        ],
        correta: "de",
        feedbackAcerto: "Isso! DESIGUALDADE REGIONAL — diferenças entre regiões.",
        feedbackErro: "Clima e relevo são físicos. Escola/saúde diferentes = DESIGUALDADE.",
      },
    ],
    falaFinal: "Radar afiado! Você lê mapa temático.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "Vamos comparar 2 grupos: os 3 estados MAIS RICOS (mais indústria e renda) e os 3 MAIS POBRES (menor renda média). Isso é DESIGUALDADE REGIONAL no mapa.",
    instrucao: "Toque nos estados dos dois grupos",
    missao: {
      tipo: "grupos",
      grupos: [
        {
          id: "ricos",
          rotulo: "Mais ricos (renda alta)",
          emoji: "💰",
          cor: "from-emerald-400 to-green-600",
          siglas: ["SP", "DF", "RJ"],
          descricao: "SP, DF e RJ concentram indústria, serviços e renda alta.",
        },
        {
          id: "pobres",
          rotulo: "Renda mais baixa",
          emoji: "📉",
          cor: "from-amber-400 to-orange-600",
          siglas: ["MA", "PI", "AL"],
          descricao: "MA, PI e AL têm menor renda média e mais desafios sociais.",
        },
      ],
    },
    falaFinal: "Sudeste concentra riqueza. Nordeste enfrenta mais desigualdade. Mapa denuncia.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como ler um mapa temático PASSO A PASSO?",
    instrucao: "Toque na ordem certa",
    pergunta: "Ordem pra ler qualquer mapa temático:",
    paradas: [
      {
        id: "titulo",
        emoji: "📌",
        rotulo: "1. Ler o TÍTULO",
        descricao: "O título diz QUAL tema o mapa está mostrando (ex.: densidade, clima).",
      },
      {
        id: "legenda",
        emoji: "🔑",
        rotulo: "2. Estudar a LEGENDA",
        descricao: "A legenda explica o que cada cor ou símbolo significa.",
      },
      {
        id: "cores",
        emoji: "🌈",
        rotulo: "3. Observar as CORES",
        descricao: "Ver onde estão as cores fortes (muito) e claras (pouco).",
      },
      {
        id: "comparar",
        emoji: "⚖️",
        rotulo: "4. COMPARAR regiões",
        descricao: "Comparar Norte × Sul, litoral × interior — achar diferenças.",
      },
      {
        id: "conclusao",
        emoji: "💡",
        rotulo: "5. Tirar CONCLUSÃO",
        descricao: "Fechar com uma frase: 'O Sudeste tem mais que o Norte porque...'",
      },
    ],
    ordemCerta: ["titulo", "legenda", "cores", "comparar", "conclusao"],
    feedbackAcerto: "Passo a passo perfeito! Você virou leitor de mapas.",
    feedbackErro: "Repensa: título → legenda → cores → comparar → conclusão.",
    falaFinal: "5 passos, qualquer mapa se abre.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia e marque as chaves.",
    tituloLivro: "📔 Atlas do Eco-Cidadão",
    subtitulo: "Página 3 — Ler Mapas",
    paragrafos: [
      {
        id: "p1",
        texto:
          "MAPAS TEMÁTICOS mostram UM tema (clima, população, poluição) usando CORES diferentes.",
        chaves: ["mapas", "temáticos", "cores"],
      },
      {
        id: "p2",
        texto:
          "A LEGENDA é a CHAVE do mapa. Ela explica o que cada cor significa.",
        chaves: ["legenda", "chave"],
      },
      {
        id: "p3",
        texto:
          "Cor FORTE = muito. Cor CLARA = pouco. Vermelho escuro em poluição = ALTA concentração.",
        chaves: ["forte", "clara", "alta"],
      },
      {
        id: "p4",
        texto:
          "Comparar regiões mostra a DESIGUALDADE do Brasil. Sudeste concentra mais renda que Norte e Nordeste.",
        chaves: ["desigualdade", "renda", "sudeste"],
      },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo LEGENDA CERTA! Cada rodada, escolha o tema pelo mapa colorido.",
    instrucao: "⏱️ Qual tema o mapa está mostrando?",
    duracaoSegundos: 12,
    pecas: [
      { id: "populacao", emoji: "👥", rotulo: "Densidade" },
      { id: "clima", emoji: "🌡️", rotulo: "Clima" },
      { id: "biomas", emoji: "🌳", rotulo: "Biomas" },
      { id: "renda", emoji: "💰", rotulo: "Renda" },
      { id: "chuva", emoji: "🌧️", rotulo: "Chuvas" },
      { id: "desmate", emoji: "🪓", rotulo: "Desmatamento" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "SP escuro", emoji: "🟥", cor: "from-red-400 to-rose-600" },
        municipioB: { nome: "AM claro", emoji: "🟩", cor: "from-emerald-400 to-green-600" },
        contexto: "SP tem cor forte, Amazonas cor clara. Qual tema é esse?",
        pecaCertaId: "populacao",
        feedbackAcerto: "Isso! SP amontoado, AM vazio = DENSIDADE demográfica.",
        feedbackErro: "SP tem MUITA gente, AM tem POUCA gente = DENSIDADE.",
      },
      {
        id: "r2",
        municipioA: { nome: "Verde Amazônia", emoji: "🌳", cor: "from-emerald-400 to-green-600" },
        municipioB: { nome: "Marrom sertão", emoji: "🌵", cor: "from-amber-400 to-orange-600" },
        contexto: "Norte verde, Nordeste marrom. Qual tema?",
        pecaCertaId: "biomas",
        feedbackAcerto: "Perfeito! Amazônia vs Caatinga = BIOMAS.",
        feedbackErro: "Verde = floresta, marrom = caatinga. Tema = BIOMAS.",
      },
      {
        id: "r3",
        municipioA: { nome: "Sul frio", emoji: "🥶", cor: "from-sky-400 to-blue-600" },
        municipioB: { nome: "Norte quente", emoji: "🥵", cor: "from-red-400 to-rose-600" },
        contexto: "Cores por temperatura. Qual tema?",
        pecaCertaId: "clima",
        feedbackAcerto: "Isso! Frio × quente = CLIMA.",
        feedbackErro: "Temperatura no mapa = CLIMA.",
      },
      {
        id: "r4",
        municipioA: { nome: "SP dourado", emoji: "💵", cor: "from-amber-400 to-yellow-600" },
        municipioB: { nome: "MA claro", emoji: "🕊️", cor: "from-slate-400 to-gray-600" },
        contexto: "SP e Sul com cor rica, Nordeste com cor pobre. Tema?",
        pecaCertaId: "renda",
        feedbackAcerto: "Boa! Diferença econômica = RENDA.",
        feedbackErro: "Rico × pobre no mapa = RENDA.",
      },
      {
        id: "r5",
        municipioA: { nome: "Amazônia chuvosa", emoji: "🌧️", cor: "from-sky-400 to-blue-600" },
        municipioB: { nome: "Sertão seco", emoji: "☀️", cor: "from-amber-400 to-yellow-600" },
        contexto: "Norte molhado, Nordeste seco. Tema?",
        pecaCertaId: "chuva",
        feedbackAcerto: "Isso! Quanto chove por ano = CHUVAS.",
        feedbackErro: "Molhado × seco = mapa de CHUVAS.",
      },
      {
        id: "r6",
        municipioA: { nome: "Arco do fogo", emoji: "🔥", cor: "from-red-400 to-rose-600" },
        municipioB: { nome: "Amazônia perdida", emoji: "🪓", cor: "from-amber-400 to-orange-600" },
        contexto: "Norte com áreas queimadas e sem floresta. Tema?",
        pecaCertaId: "desmate",
        feedbackAcerto: "Perfeito! Floresta perdida = DESMATAMENTO.",
        feedbackErro: "Queimada + floresta perdida = DESMATAMENTO.",
      },
    ],
    falaFinal: "6 mapas lidos corretamente! Você é um cartógrafo temático.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da LEITURA: o que faz um bom leitor de mapa?",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "legenda",
        rotulo: "Legenda (60%)",
        emoji: "🔑",
        percentual: 60,
        cor: "#f59e0b",
        descricao:
          "A maior parte da leitura vem de ENTENDER a LEGENDA — sem ela, cor é só desenho.",
        exemplos: ["🌈 Cores", "🔤 Símbolos", "📊 Categorias"],
      },
      {
        id: "observacao",
        rotulo: "Observar (40%)",
        emoji: "👁️",
        percentual: 40,
        cor: "#8b5cf6",
        descricao:
          "Depois é observar CORES e comparar REGIÕES pra tirar conclusões.",
        exemplos: ["⚖️ Comparar", "💡 Concluir", "🌍 Regiões"],
      },
    ],
    falaFinal: "Legenda + observação = mapa aberto.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas pra ganhar a insígnia Mestre de Mapas.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "Em um mapa de calor sobre poluição, mancha VERMELHA ESCURA representa:",
        opcoes: [
          { id: "a", texto: "Área com pouquíssima poluição", correta: false },
          { id: "b", texto: "Área com grande concentração de poluição", correta: true },
          { id: "c", texto: "Área sem informação", correta: false },
        ],
        feedbackAcerto: "Isso! Cores fortes marcam alta concentração — precisa de investimento.",
        feedbackErro: "Vermelho escuro = MUITA poluição, área crítica.",
      },
      {
        id: "av2",
        pergunta: "O que explica o significado das cores em um mapa?",
        opcoes: [
          { id: "a", texto: "O título", correta: false },
          { id: "b", texto: "A legenda", correta: true },
          { id: "c", texto: "A escala numérica", correta: false },
        ],
        feedbackAcerto: "Perfeito! LEGENDA é a chave do mapa.",
        feedbackErro: "Título diz o tema, escala diz tamanho. Cores = LEGENDA.",
      },
      {
        id: "av3",
        pergunta: "Sudeste com mais renda e Norte com menos renda mostra:",
        opcoes: [
          { id: "a", texto: "Clima igual", correta: false },
          { id: "b", texto: "Desigualdade regional", correta: true },
          { id: "c", texto: "Mesmo bioma", correta: false },
        ],
        feedbackAcerto: "Isso! DESIGUALDADE REGIONAL fica clara no mapa temático.",
        feedbackErro: "Clima e bioma são físicos. Diferença de renda = DESIGUALDADE.",
      },
    ],
    selo: {
      nome: "Mestre de Mapas Temáticos",
      subtitulo: "Insígnia do Explorador Eco-Cidadão",
      emoji: "🗺️",
      cor: "from-purple-400 to-fuchsia-600",
    },
    falaFinal: "Insígnia conquistada! Você lê o Brasil pelas cores.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Mestre de Mapas Temáticos" },
};
