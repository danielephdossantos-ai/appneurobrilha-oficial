import type { AulaGeoV1 } from "../../types";

/**
 * Geografia · 6º Ano · Unidade 3 · Aula 02
 * "Vulcões, Terremotos e Tsunamis" — EF06GE05, EF06GE06
 */
export const aula02: AulaGeoV1 = {
  slug: "aula-02-vulcoes-e-terremotos",
  titulo: "Vulcões, Terremotos e Tsunamis",
  iconeTrilha: "🌋",
  bncc: ["EF06GE05", "EF06GE06"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe: a Terra se manifestando.",
    mapaUrl: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=800",
    imagemDestaqueUrl: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=800",
    aurora: "Explorador, quando as placas tectônicas se movem, elas SOLTAM energia gigante. Isso pode virar TERREMOTO, VULCÃO ou até TSUNAMI. O CINTURÃO DE FOGO DO PACÍFICO concentra 90% desses eventos!",
    falaFinal: "Placas em movimento = eventos gigantes. Bora entender.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Explorador, quando as placas tectônicas se movem, elas SOLTAM energia gigante. Isso pode virar TERREMOTO, VULCÃO ou até TSUNAMI. O CINTURÃO DE FOGO DO PACÍFICO concentra 90% desses eventos!",
    pergunta: "O que causa um TSUNAMI?",
    opcoes: [
      { id: "certo", titulo: "Terremoto no FUNDO do mar", subtitulo: "empurra a água formando ondas gigantes", emoji: "✅", cor: "from-emerald-400 to-green-600" },
      { id: "errado", titulo: "Muito VENTO", subtitulo: "faz onda subir sozinha", emoji: "❌", cor: "from-slate-400 to-gray-600" },
    ],
    respostaCerta: "certo",
    feedbackAcerto: "Isso! Terremoto no fundo do mar = tsunami.",
    feedbackErro: "Vento faz onda pequena. TSUNAMI = terremoto no fundo do mar.",
    falaFinal: "Origem geológica, não meteorológica. Bora.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras-chave desta aula.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      { id: "vulcao", capa: "1. Vulcão", emoji: "🌋", cor: "from-red-500 to-orange-600", conteudo: "VULCÃO é uma abertura na crosta por onde sai MAGMA, GASES e CINZAS. Quando explode, chamamos ERUPÇÃO.", exemplo: "Ex.: Vesúvio (Itália), Krakatoa (Indonésia)." },
      { id: "terremoto", capa: "2. Terremoto", emoji: "⚡", cor: "from-amber-500 to-orange-700", conteudo: "TERREMOTO é o tremor do solo quando placas se chocam. Medido em GRAUS na escala Richter (1 a 10).", exemplo: "Ex.: Japão 2011 (9,1 graus), Chile 1960 (9,5 graus)." },
      { id: "tsunami", capa: "3. Tsunami", emoji: "🌊", cor: "from-sky-500 to-blue-700", conteudo: "TSUNAMI é uma onda GIGANTE causada por terremoto no fundo do mar. Pode ter 30 metros de altura!", exemplo: "Ex.: Tsunami do Índico 2004, Japão 2011." },
      { id: "cinturao", capa: "4. Cinturão de Fogo", emoji: "🔥", cor: "from-purple-500 to-red-700", conteudo: "CINTURÃO DE FOGO é uma faixa em volta do Oceano Pacífico com 452 vulcões ativos e 90% dos terremotos do mundo.", exemplo: "Ex.: Japão, Chile, Califórnia, Filipinas." }
    ],
    falaFinal: "4 chaves: vulcão, terremoto, tsunami, cinturão de fogo.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada ponto quente do planeta.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    pontos: [
      { id: "japao", x: 82, y: 30, emoji: "🇯🇵", cor: "from-red-500 to-orange-600", titulo: "JAPÃO — Cinturão de Fogo", texto: "1.500 terremotos por ano. Está sobre 4 placas tectônicas!" },
      { id: "chile", x: 30, y: 75, emoji: "🇨🇱", cor: "from-amber-500 to-orange-700", titulo: "CHILE — recorde mundial", texto: "Maior terremoto já registrado: 9,5 graus em 1960." },
      { id: "california", x: 15, y: 35, emoji: "🇺🇸", cor: "from-purple-500 to-fuchsia-700", titulo: "CALIFÓRNIA — Falha de San Andreas", texto: "Falha gigante onde duas placas se arrastam." },
      { id: "italia", x: 55, y: 35, emoji: "🇮🇹", cor: "from-emerald-500 to-green-700", titulo: "ITÁLIA — Vesúvio", texto: "Vulcão que destruiu Pompeia em 79 d.C. Ainda ativo!" }
    ],
    falaFinal: "4 pontos quentes onde a Terra se manifesta.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "O que sai de um VULCÃO?", cards: [{ id: "ma", emoji: "🌋", titulo: "Magma e gases", cor: "from-red-500 to-orange-600" }, { id: "ag", emoji: "💧", titulo: "Só água", cor: "from-sky-500 to-blue-700" }, { id: "ge", emoji: "❄️", titulo: "Só gelo", cor: "from-cyan-500 to-blue-600" }], correta: "ma", feedbackAcerto: "Isso! Magma, gases e cinzas.", feedbackErro: "Vulcão solta MAGMA quente + gases, nunca água ou gelo." },
      { id: "q2", pergunta: "O que causa um TSUNAMI?", cards: [{ id: "te", emoji: "⚡", titulo: "Terremoto no mar", cor: "from-amber-500 to-orange-700" }, { id: "ve", emoji: "🌬️", titulo: "Vento forte", cor: "from-slate-500 to-gray-600" }, { id: "chuva", emoji: "🌧️", titulo: "Chuva", cor: "from-sky-500 to-blue-700" }], correta: "te", feedbackAcerto: "Perfeito! Terremoto submarino = tsunami.", feedbackErro: "Vento e chuva não. TSUNAMI = terremoto no fundo do mar." },
      { id: "q3", pergunta: "Cinturão de Fogo fica em volta de qual oceano?", cards: [{ id: "pa", emoji: "🌏", titulo: "Pacífico", cor: "from-red-500 to-orange-600" }, { id: "at", emoji: "🌊", titulo: "Atlântico", cor: "from-sky-500 to-blue-700" }, { id: "in", emoji: "🌀", titulo: "Índico", cor: "from-purple-500 to-fuchsia-700" }], correta: "pa", feedbackAcerto: "Isso! Cinturão de Fogo = ao redor do PACÍFICO.", feedbackErro: "Cinturão de Fogo do PACÍFICO. 90% dos terremotos do mundo." }
    ],
    falaFinal: "Radar afiado. Eventos geológicos decodificados.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "O Brasil quase não tem terremotos, mas alguns estados do NORDESTE e AMAZÔNIA já registraram tremores fracos por reajuste de placa. Toque nos 4 estados que MAIS registram tremores no Brasil!",
    instrucao: "Toque em AC, MT, RN e CE",
    missao: { tipo: "selecionar", siglas: ["AC", "MT", "RN", "CE"], pergunta: "Toque nos 4 estados brasileiros com mais tremores registrados" },
    falaFinal: "4 estados marcados. Brasil tem tremores raros e fracos!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos organizar a ORDEM de um tsunami.",
    instrucao: "Toque na ordem correta",
    pergunta: "Como se forma um tsunami?",
    paradas: [
      { id: "placas", emoji: "🧩", rotulo: "1. Placas se chocam", descricao: "No fundo do oceano." },
      { id: "terremoto", emoji: "⚡", rotulo: "2. Terremoto submarino", descricao: "Libera energia enorme." },
      { id: "empurra", emoji: "💥", rotulo: "3. Água é empurrada", descricao: "Fundo do mar sobe/desce." },
      { id: "onda", emoji: "🌊", rotulo: "4. Onda gigante chega", descricao: "Pode ter 30 metros de altura." }
    ],
    ordemCerta: ["placas", "terremoto", "empurra", "onda"],
    feedbackAcerto: "Ordem certa! Do choque de placas à onda gigante.",
    feedbackErro: "Comece pelo choque de placas e siga até a onda chegar na costa.",
    falaFinal: "4 passos do tsunami. Origem geológica.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Aurora fica quieta. Leia e marque as palavras-chave.",
    tituloLivro: "🌍 Atlas do Mestre do Planeta",
    subtitulo: "Página 3b — Eventos Geológicos",
    paragrafos: [
      { id: "p1", texto: "VULCÃO é a abertura por onde sai MAGMA. Quando explode, é uma ERUPÇÃO.", chaves: ["vulcão", "magma", "erupção"] },
      { id: "p2", texto: "TERREMOTO é o tremor do solo. Medido na ESCALA RICHTER de 1 a 10.", chaves: ["terremoto", "richter"] },
      { id: "p3", texto: "TSUNAMI é uma onda gigante causada por TERREMOTO NO FUNDO DO MAR.", chaves: ["tsunami", "onda"] },
      { id: "p4", texto: "O CINTURÃO DE FOGO DO PACÍFICO concentra 90% dos vulcões e terremotos do mundo.", chaves: ["cinturão", "pacífico"] }
    ],
    falaFinal: "Leu tudo? Bora ao minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo rápido! Que evento é esse?",
    instrucao: "⏱️ Vulcão, Terremoto ou Tsunami?",
    duracaoSegundos: 12,
    pecas: [
      { id: "vu", emoji: "🌋", rotulo: "Vulcão" },
      { id: "te", emoji: "⚡", rotulo: "Terremoto" },
      { id: "ts", emoji: "🌊", rotulo: "Tsunami" }
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Chão treme", emoji: "🏚️", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Placas se chocam", emoji: "⚡", cor: "from-red-400 to-orange-600" }, contexto: "Tremor forte no solo. É?", pecaCertaId: "te", feedbackAcerto: "Isso! Chão treme = TERREMOTO.", feedbackErro: "Solo tremendo = TERREMOTO." },
      { id: "r2", municipioA: { nome: "Lava escorrendo", emoji: "🔥", cor: "from-red-500 to-orange-700" }, municipioB: { nome: "Cinzas no céu", emoji: "💨", cor: "from-slate-400 to-gray-600" }, contexto: "Rocha derretida saindo da terra. É?", pecaCertaId: "vu", feedbackAcerto: "Perfeito! Lava e cinzas = VULCÃO.", feedbackErro: "Lava saindo = VULCÃO em erupção." },
      { id: "r3", municipioA: { nome: "Onda de 30m", emoji: "🌊", cor: "from-sky-400 to-blue-700" }, municipioB: { nome: "Vem do oceano", emoji: "🌀", cor: "from-cyan-400 to-blue-600" }, contexto: "Onda gigante engolindo a costa. É?", pecaCertaId: "ts", feedbackAcerto: "Isso! Onda gigante = TSUNAMI.", feedbackErro: "Onda gigante do mar = TSUNAMI." },
      { id: "r4", municipioA: { nome: "Escala Richter 8", emoji: "📊", cor: "from-amber-400 to-red-600" }, municipioB: { nome: "Prédios balançam", emoji: "🏢", cor: "from-slate-400 to-gray-600" }, contexto: "Medido de 1 a 10. Prédios sacodem. É?", pecaCertaId: "te", feedbackAcerto: "Isso! Richter mede TERREMOTO.", feedbackErro: "Escala Richter = TERREMOTO." },
      { id: "r5", municipioA: { nome: "Vesúvio", emoji: "🌋", cor: "from-red-500 to-orange-700" }, municipioB: { nome: "Destruiu Pompeia", emoji: "🏛️", cor: "from-amber-500 to-yellow-600" }, contexto: "Explosão que destruiu uma cidade romana. É?", pecaCertaId: "vu", feedbackAcerto: "Isso! Vesúvio = VULCÃO.", feedbackErro: "Vesúvio é um VULCÃO da Itália." },
      { id: "r6", municipioA: { nome: "Japão 2011", emoji: "🇯🇵", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Onda após tremor", emoji: "🌊", cor: "from-sky-400 to-blue-700" }, contexto: "Terremoto submarino gerou onda gigante. Foi?", pecaCertaId: "ts", feedbackAcerto: "Isso! Japão 2011 = TSUNAMI histórico.", feedbackErro: "Onda gigante após terremoto = TSUNAMI." }
    ],
    falaFinal: "6 eventos identificados! Sismólogo pronto.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Onde acontecem os terremotos e vulcões do mundo:",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "cinturao", rotulo: "Cinturão de Fogo (90%)", emoji: "🔥", percentual: 90, cor: "#dc2626", descricao: "Ao redor do Pacífico. 452 vulcões ativos. 90% dos terremotos do mundo.", exemplos: ["🇯🇵 Japão", "🇨🇱 Chile", "🇺🇸 Califórnia", "🇵🇭 Filipinas"] },
      { id: "resto", rotulo: "Resto do mundo (10%)", emoji: "🌍", percentual: 10, cor: "#10b981", descricao: "Outras zonas de placas: Mediterrâneo, Himalaia, Rift Africano.", exemplos: ["🇮🇹 Itália", "🇹🇷 Turquia", "🇮🇳 Índia"] }
    ],
    falaFinal: "90% no Cinturão de Fogo. O Brasil está fora, seguro.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia " + "Sismólogo Vigilante" + ".",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "O que causa um TSUNAMI?", opcoes: [{ id: "a", texto: "Vento forte", correta: false }, { id: "b", texto: "Terremoto no fundo do mar", correta: true }, { id: "c", texto: "Chuva de verão", correta: false }], feedbackAcerto: "Isso! Terremoto submarino = tsunami.", feedbackErro: "Vento não faz tsunami. Origem é TERREMOTO SUBMARINO." },
      { id: "av2", pergunta: "O que sai de um vulcão em erupção?", opcoes: [{ id: "a", texto: "Água doce", correta: false }, { id: "b", texto: "Magma, gases e cinzas", correta: true }, { id: "c", texto: "Só fumaça branca", correta: false }], feedbackAcerto: "Perfeito! Magma, gases, cinzas.", feedbackErro: "Vulcão solta MAGMA, GASES e CINZAS." },
      { id: "av3", pergunta: "Onde estão 90% dos terremotos e vulcões?", opcoes: [{ id: "a", texto: "Cinturão de Fogo do Pacífico", correta: true }, { id: "b", texto: "No meio da Amazônia", correta: false }, { id: "c", texto: "No Saara", correta: false }], feedbackAcerto: "Isso! Cinturão de Fogo = 90%.", feedbackErro: "Cinturão de Fogo do PACÍFICO concentra 90%." }
    ],
    selo: {
      nome: "Sismólogo Vigilante",
      subtitulo: "Insígnia do Mestre do Planeta",
      emoji: "🌋",
      cor: "from-red-400 to-orange-600",
    },
    falaFinal: "Insígnia conquistada!",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Sismólogo Vigilante" },
};
