import type { AulaGeoV1 } from "../../types";

/**
 * Geografia · 6º Ano · Unidade 4 · Aula 01
 * "Agentes que Moldam o Relevo" — EF06GE04
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-agentes-do-relevo",
  titulo: "Agentes que Moldam o Relevo",
  iconeTrilha: "🏔️",
  bncc: ["EF06GE04"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe: o planeta em ação.",
    mapaUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    imagemDestaqueUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    aurora: "Explorador, quem esculpe as PAISAGENS? Existem 2 tipos de agentes: os INTERNOS (vulcões, terremotos) que vêm de DENTRO da Terra, e os EXTERNOS (chuva, vento, rio) que agem POR FORA.",
    falaFinal: "Dentro constrói, fora desgasta. Bora ver como.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Explorador, quem esculpe as PAISAGENS? Existem 2 tipos de agentes: os INTERNOS (vulcões, terremotos) que vêm de DENTRO da Terra, e os EXTERNOS (chuva, vento, rio) que agem POR FORA.",
    pergunta: "Como um rio cava um CÂNION profundo?",
    opcoes: [
      { id: "erosao", titulo: "EROSÃO contínua da água", subtitulo: "milhares de anos desgastando", emoji: "✅", cor: "from-emerald-400 to-green-600" },
      { id: "errado", titulo: "Um METEORO caiu", subtitulo: "cavou de uma vez só", emoji: "❌", cor: "from-slate-400 to-gray-600" },
    ],
    respostaCerta: "erosao",
    feedbackAcerto: "Isso! Água desgastando lentamente por milhares de anos = EROSÃO.",
    feedbackErro: "Meteoro deixa cratera. Cânion = EROSÃO da água ao longo do tempo.",
    falaFinal: "Água mole em pedra dura. Bora entender.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras-chave desta unidade.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      { id: "interno", capa: "1. Agentes internos", emoji: "🌋", cor: "from-red-500 to-orange-600", conteudo: "AGENTES INTERNOS vêm de DENTRO da Terra: vulcanismo, tectonismo, terremotos. CONSTROEM o relevo (montanhas, planaltos).", exemplo: "Ex.: Cordilheira dos Andes surgiu do choque de placas." },
      { id: "externo", capa: "2. Agentes externos", emoji: "💧", cor: "from-sky-500 to-blue-700", conteudo: "AGENTES EXTERNOS agem POR FORA: chuva, vento, rios, gelo, temperatura. DESGASTAM o relevo (cânions, dunas).", exemplo: "Ex.: Grand Canyon foi esculpido pelo rio Colorado." },
      { id: "intemperismo", capa: "3. Intemperismo", emoji: "🌦️", cor: "from-purple-500 to-fuchsia-700", conteudo: "INTEMPERISMO é a QUEBRA das rochas por ação do tempo: calor, frio, chuva ácida, raízes de plantas.", exemplo: "Ex.: rocha que estala com o calor do sol e racha." },
      { id: "erosao", capa: "4. Erosão", emoji: "🌊", cor: "from-emerald-500 to-green-700", conteudo: "EROSÃO é o TRANSPORTE dos pedaços quebrados. Água, vento e gelo levam sedimentos pra longe.", exemplo: "Ex.: rio carregando areia pro mar." }
    ],
    falaFinal: "4 chaves: internos, externos, intemperismo, erosão.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada ponto e ouça.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
    pontos: [
      { id: "montanha", x: 30, y: 30, emoji: "⛰️", cor: "from-slate-500 to-gray-700", titulo: "MONTANHA — agente interno", texto: "Placas se chocaram, dobraram a crosta e ergueram uma montanha. Ex.: Everest, Andes." },
      { id: "vulcao", x: 70, y: 30, emoji: "🌋", cor: "from-red-500 to-orange-600", titulo: "VULCÃO — agente interno", texto: "Magma sobe pela crosta e explode. Cria ilhas e cones vulcânicos. Ex.: Havaí, Vesúvio." },
      { id: "canyon", x: 30, y: 70, emoji: "🏜️", cor: "from-amber-500 to-orange-700", titulo: "CÂNION — agente externo", texto: "Rio cavou a rocha por milhões de anos. Erosão profunda. Ex.: Grand Canyon." },
      { id: "dunas", x: 70, y: 70, emoji: "🏖️", cor: "from-yellow-500 to-amber-600", titulo: "DUNAS — agente externo", texto: "Vento carregando areia forma montinhas móveis. Ex.: Lençóis Maranhenses." }
    ],
    falaFinal: "Dentro constrói montanhas. Fora esculpe cânions e dunas.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Vulcão é agente...", cards: [{ id: "in", emoji: "🌋", titulo: "Interno", cor: "from-red-500 to-orange-600" }, { id: "ex", emoji: "💧", titulo: "Externo", cor: "from-sky-500 to-blue-700" }, { id: "ne", emoji: "🌪️", titulo: "Neutro", cor: "from-slate-500 to-gray-700" }], correta: "in", feedbackAcerto: "Isso! Vulcão vem de DENTRO da Terra.", feedbackErro: "Vulcão = magma de dentro = INTERNO." },
      { id: "q2", pergunta: "Cânion é feito por qual agente?", cards: [{ id: "ag", emoji: "💧", titulo: "Água (externo)", cor: "from-sky-500 to-blue-700" }, { id: "va", emoji: "🌋", titulo: "Vulcão", cor: "from-red-500 to-orange-600" }, { id: "te", emoji: "⚡", titulo: "Terremoto", cor: "from-purple-500 to-fuchsia-700" }], correta: "ag", feedbackAcerto: "Perfeito! Água esculpe o cânion.", feedbackErro: "Cânion = erosão da ÁGUA." },
      { id: "q3", pergunta: "Dunas são formadas por...", cards: [{ id: "ve", emoji: "🌬️", titulo: "Vento", cor: "from-sky-400 to-blue-500" }, { id: "gel", emoji: "🧊", titulo: "Gelo", cor: "from-blue-500 to-indigo-700" }, { id: "fo", emoji: "🔥", titulo: "Fogo", cor: "from-red-500 to-orange-600" }], correta: "ve", feedbackAcerto: "Isso! VENTO carrega areia e forma dunas.", feedbackErro: "Vento move areia = DUNAS." }
    ],
    falaFinal: "Radar afiado. Você é um escultor de paisagens.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "O Brasil tem relevos incríveis moldados por milhões de anos: Serra do Mar, Chapada Diamantina, Pantanal. Vamos localizar 5 estados com relevo marcante.",
    instrucao: "Toque em 5 estados com relevos famosos (planaltos, serras, montanhas)",
    missao: { tipo: "selecionar", siglas: ["AM", "PA", "MG", "SP", "RS"], pergunta: "Toque em 5 estados com relevos famosos (planaltos, serras, montanhas)" },
    falaFinal: "5 relevos brasileiros iluminados. Cada um com sua história.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos organizar na ordem certa.",
    instrucao: "Toque na ordem correta",
    pergunta: "Ordem da EROSÃO de uma rocha:",
    paradas: [
      { id: "rocha", emoji: "🪨", rotulo: "1. Rocha inteira", descricao: "Sólida, resistente." },
      { id: "racha", emoji: "⚡", rotulo: "2. Rocha racha (intemperismo)", descricao: "Calor, frio e chuva quebram." },
      { id: "frag", emoji: "🧱", rotulo: "3. Fragmentos soltos", descricao: "Pedaços caem no chão." },
      { id: "trans", emoji: "💧", rotulo: "4. Erosão transporta", descricao: "Água, vento levam os pedaços." },
      { id: "depo", emoji: "🏖️", rotulo: "5. Depósito de sedimentos", descricao: "Areia se acumula longe." }
    ],
    ordemCerta: ["rocha", "racha", "frag", "trans", "depo"],
    feedbackAcerto: "Sequência certa! Da rocha à areia da praia.",
    feedbackErro: "Comece pela rocha inteira, depois racha, fragmentos, transporte, depósito.",
    falaFinal: "5 fases, 1 paisagem transformada.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Aurora fica quieta. Leia e marque as palavras-chave.",
    tituloLivro: "🌍 Atlas do Mestre do Planeta",
    subtitulo: "Página 4 — Agentes do Relevo",
    paragrafos: [
      { id: "p1", texto: "AGENTES INTERNOS (vulcões, tectonismo) CONSTROEM o relevo.", chaves: ["internos", "constroem"] },
      { id: "p2", texto: "AGENTES EXTERNOS (água, vento, gelo) DESGASTAM o relevo.", chaves: ["externos", "desgastam"] },
      { id: "p3", texto: "INTEMPERISMO quebra a rocha. EROSÃO transporta os pedaços.", chaves: ["intemperismo", "erosão"] },
      { id: "p4", texto: "Um CÂNION leva MILHÕES de anos pra ser esculpido pela água.", chaves: ["cânion", "milhões", "água"] }
    ],
    falaFinal: "Leu tudo? Bora ao minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo rápido! Escolha a peça certa.",
    instrucao: "⏱️ Interno ou Externo?",
    duracaoSegundos: 12,
    pecas: [
      { id: "int", emoji: "🌋", rotulo: "Interno" },
      { id: "ext", emoji: "💧", rotulo: "Externo" },
      { id: "bio", emoji: "🌱", rotulo: "Biológico" }
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Vulcão explode", emoji: "🌋", cor: "from-red-400 to-orange-600" }, municipioB: { nome: "Lava saindo", emoji: "🔥", cor: "from-amber-400 to-yellow-600" }, contexto: "Um cone vulcânico se formou. Que agente é?", pecaCertaId: "int", feedbackAcerto: "Isso! Vulcão = INTERNO.", feedbackErro: "Vulcão vem de dentro = INTERNO." },
      { id: "r2", municipioA: { nome: "Rio cavando", emoji: "🏞️", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Água correndo", emoji: "💧", cor: "from-blue-400 to-indigo-600" }, contexto: "Um rio esculpiu um vale profundo. Que agente?", pecaCertaId: "ext", feedbackAcerto: "Perfeito! Rio = EXTERNO.", feedbackErro: "Água = agente EXTERNO." },
      { id: "r3", municipioA: { nome: "Vento em duna", emoji: "🌪️", cor: "from-amber-400 to-yellow-600" }, municipioB: { nome: "Areia voando", emoji: "🏜️", cor: "from-yellow-400 to-orange-600" }, contexto: "Vento formou dunas gigantes. Que agente?", pecaCertaId: "ext", feedbackAcerto: "Isso! Vento = EXTERNO.", feedbackErro: "Vento sopra por fora = EXTERNO." },
      { id: "r4", municipioA: { nome: "Terremoto", emoji: "⚡", cor: "from-red-400 to-orange-600" }, municipioB: { nome: "Terra tremendo", emoji: "🌍", cor: "from-purple-400 to-indigo-600" }, contexto: "Placas se chocaram e a terra tremeu. Que agente?", pecaCertaId: "int", feedbackAcerto: "Isso! Terremoto = INTERNO.", feedbackErro: "Placas = movimento INTERNO." },
      { id: "r5", municipioA: { nome: "Raiz de árvore", emoji: "🌱", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Rachando pedra", emoji: "🪨", cor: "from-slate-400 to-gray-600" }, contexto: "A raiz de uma figueira rachou a rocha. Que agente?", pecaCertaId: "bio", feedbackAcerto: "Isso! Ser vivo = BIOLÓGICO (parte dos externos).", feedbackErro: "Raízes = agente BIOLÓGICO (externo)." },
      { id: "r6", municipioA: { nome: "Montanha subindo", emoji: "⛰️", cor: "from-slate-500 to-gray-700" }, municipioB: { nome: "Placas se chocam", emoji: "🧩", cor: "from-purple-400 to-indigo-600" }, contexto: "Duas placas se chocaram e ergueram os Andes. Que agente?", pecaCertaId: "int", feedbackAcerto: "Isso! Montanha = INTERNO.", feedbackErro: "Placas erguem montanhas = INTERNO." }
    ],
    falaFinal: "6 agentes identificados! Você lê a paisagem.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Origem do RELEVO mundial:",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "interno", rotulo: "Agentes internos (50%)", emoji: "🌋", percentual: 50, cor: "#dc2626", descricao: "Vulcanismo e tectonismo formam montanhas, planaltos e cadeias.", exemplos: ["🌋 Vulcões", "⛰️ Andes", "🗻 Himalaia"] },
      { id: "externo", rotulo: "Agentes externos (50%)", emoji: "💧", percentual: 50, cor: "#0284c7", descricao: "Chuva, vento e rio esculpem cânions, dunas e vales.", exemplos: ["🏜️ Cânions", "🏖️ Dunas", "🏞️ Vales"] }
    ],
    falaFinal: "50/50: internos constroem, externos esculpem. Dupla dinâmica.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia " + "Escultor de Paisagens" + ".",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Vulcão é agente...", opcoes: [{ id: "a", texto: "Externo", correta: false }, { id: "b", texto: "Interno", correta: true }, { id: "c", texto: "Meteorológico", correta: false }], feedbackAcerto: "Isso! Vulcão vem de dentro = INTERNO.", feedbackErro: "Vulcão = agente INTERNO." },
      { id: "av2", pergunta: "O que faz um CÂNION?", opcoes: [{ id: "a", texto: "Erosão da água por milhões de anos", correta: true }, { id: "b", texto: "Meteoro caindo", correta: false }, { id: "c", texto: "Vulcão explodindo", correta: false }], feedbackAcerto: "Perfeito! Água esculpe o cânion lentamente.", feedbackErro: "Cânion = EROSÃO da água." },
      { id: "av3", pergunta: "INTEMPERISMO é...", opcoes: [{ id: "a", texto: "O tempo passando no relógio", correta: false }, { id: "b", texto: "A quebra natural das rochas por ação do tempo", correta: true }, { id: "c", texto: "O nome de um vulcão", correta: false }], feedbackAcerto: "Isso! Intemperismo quebra a rocha.", feedbackErro: "Intemperismo = QUEBRA das rochas." }
    ],
    selo: {
      nome: "Escultor de Paisagens",
      subtitulo: "Insígnia do Mestre do Planeta",
      emoji: "🏔️",
      cor: "from-sky-400 to-blue-600",
    },
    falaFinal: "Insígnia conquistada!",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Escultor de Paisagens" },
};
