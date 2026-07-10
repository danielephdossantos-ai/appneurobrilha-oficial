import type { AulaGeoV1 } from "../../types";
import tectonica from "@/assets/geografia-6ano/tectonica-placas.jpg";

export const aula01: AulaGeoV1 = {
  slug: "aula-01-tectonica-placas",
  titulo: "Tectônica de Placas",
  iconeTrilha: "🌋",
  bncc: ["EF06GE02", "EF06GE03"],
  duracaoMin: 25,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Terremotos e vulcões não são aleatórios. Eles têm mapa.",
    mapaUrl: tectonica,
    imagemDestaqueUrl: tectonica,
    aurora:
      "Explorador, a crosta da Terra não é uma casca inteira — é quebrada em PLACAS TECTÔNICAS gigantes que flutuam sobre magma. Quando duas placas se chocam, sobem montanhas. Quando se afastam, jorra lava. Quando se roçam, TERREMOTO.",
    falaFinal: "A Terra parece firme, mas por baixo é um puzzle em movimento constante.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Por que o Japão tem tanto terremoto e o Brasil quase nenhum?",
    pergunta: "O que explica isso?",
    opcoes: [
      { id: "clima", titulo: "O CLIMA do Japão", subtitulo: "vulcões vêm do calor tropical", emoji: "🌡️", cor: "from-amber-400 to-orange-600" },
      { id: "placas", titulo: "Está em BORDA DE PLACA", subtitulo: "Brasil fica no MEIO da placa", emoji: "🌋", cor: "from-red-400 to-rose-600" },
    ],
    respostaCerta: "placas",
    feedbackAcerto: "Exato! Japão fica no CINTURÃO DE FOGO — onde placas se chocam. Brasil está no meio da placa Sul-Americana, longe das bordas.",
    feedbackErro: "Clima não tem nada a ver. É posição na PLACA: borda = tremor; meio = calma.",
    falaFinal: "Regra de ouro: onde placa se encontra, terra treme.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras da tectônica.",
    instrucao: "",
    cadernos: [
      { id: "placa", capa: "1. Placa tectônica", emoji: "🧩", cor: "from-sky-500 to-blue-700",
        conteudo: "PLACA é uma peça gigante da crosta da Terra. Existem 15 grandes. A do Brasil é a Sul-Americana. Elas se movem 2 a 10 cm por ano.",
        exemplo: "Ex.: Índia bateu na Ásia e criou o Himalaia." },
      { id: "vulcao", capa: "2. Vulcão", emoji: "🌋", cor: "from-red-500 to-rose-700",
        conteudo: "VULCÃO é uma abertura na crosta por onde escapa MAGMA (rocha derretida). Formam-se em bordas de placa e pontos quentes.",
        exemplo: "Ex.: Vulcão Fuji no Japão, Vesúvio na Itália." },
      { id: "terremoto", capa: "3. Terremoto", emoji: "💥", cor: "from-amber-500 to-orange-700",
        conteudo: "TERREMOTO acontece quando placas se travam e depois se soltam de repente. Libera energia = tremor. Medido pela escala Richter.",
        exemplo: "Ex.: Chile 2010, magnitude 8,8. Sentiu em SP." },
      { id: "tsunami", capa: "4. Tsunami", emoji: "🌊", cor: "from-emerald-500 to-teal-700",
        conteudo: "TSUNAMI é uma onda gigante formada por terremoto submarino. Pode ter 30 metros de altura e viajar a 800 km/h.",
        exemplo: "Ex.: Japão 2011, tsunami de 15 m." },
    ],
    falaFinal: "Placa, vulcão, terremoto, tsunami. Tudo conectado.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada zona quente do planeta.",
    instrucao: "Toque em cada balão",
    mapaUrl: tectonica,
    pontos: [
      { id: "fogo", x: 20, y: 40, emoji: "🔥", cor: "from-red-500 to-rose-700",
        titulo: "CINTURÃO DE FOGO DO PACÍFICO",
        texto: "Anel que rodeia o Pacífico. Concentra 75% dos vulcões e 90% dos terremotos do mundo. Passa por Japão, Chile, Alasca." },
      { id: "himalaia", x: 65, y: 35, emoji: "⛰️", cor: "from-amber-500 to-orange-700",
        titulo: "HIMALAIA",
        texto: "Placa Indiana batendo na Placa Euroasiática há 50 milhões de anos. Ainda cresce 5 mm por ano. Monte Everest = 8.849 m." },
      { id: "andes", x: 30, y: 70, emoji: "🏔️", cor: "from-slate-500 to-gray-700",
        titulo: "CORDILHEIRA DOS ANDES",
        texto: "Placa de Nazca mergulhando sob a Sul-Americana. Formou os Andes, cheios de vulcões e terremotos. Passa por Chile e Peru." },
      { id: "atlantico", x: 50, y: 55, emoji: "🌊", cor: "from-sky-500 to-blue-700",
        titulo: "DORSAL MESO-ATLÂNTICA",
        texto: "Fenda no meio do Oceano Atlântico onde placas se AFASTAM. Vulcões submarinos criam nova crosta. Islândia está bem em cima." },
    ],
    falaFinal: "4 pontos quentes. Todos em BORDA de placa. Brasil = interior tranquilo.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de geólogo.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Placa tectônica se move a...",
        cards: [
          { id: "lento", emoji: "🐢", titulo: "2 a 10 cm por ano", cor: "from-emerald-500 to-teal-700" },
          { id: "rapido", emoji: "🏃", titulo: "1 km por dia", cor: "from-red-500 to-rose-700" },
          { id: "parado", emoji: "🛑", titulo: "Não se move", cor: "from-slate-500 to-gray-700" },
        ], correta: "lento",
        feedbackAcerto: "Isso! Lentíssimo — cresce igual unha.", feedbackErro: "Muito lento. 2 a 10 cm por ANO." },
      { id: "q2", pergunta: "Local com MAIS vulcões e terremotos:",
        cards: [
          { id: "brasil", emoji: "🇧🇷", titulo: "Brasil", cor: "from-emerald-500 to-teal-700" },
          { id: "fogo", emoji: "🔥", titulo: "Cinturão de Fogo", cor: "from-red-500 to-rose-700" },
          { id: "eur", emoji: "🇪🇺", titulo: "Europa Central", cor: "from-sky-500 to-indigo-700" },
        ], correta: "fogo",
        feedbackAcerto: "Isso! Cinturão de Fogo = 90% dos terremotos.", feedbackErro: "Brasil e Europa central são calmos. Cinturão de Fogo concentra tudo." },
      { id: "q3", pergunta: "Tsunami é causado por:",
        cards: [
          { id: "vento", emoji: "💨", titulo: "Vento forte", cor: "from-sky-500 to-indigo-700" },
          { id: "sismo", emoji: "🌊", titulo: "Terremoto submarino", cor: "from-red-500 to-rose-700" },
          { id: "lua", emoji: "🌙", titulo: "Fase da Lua", cor: "from-purple-500 to-fuchsia-700" },
        ], correta: "sismo",
        feedbackAcerto: "Perfeito! Terremoto no oceano = tsunami.", feedbackErro: "Vento faz onda comum. Lua faz maré. Tsunami = TERREMOTO submarino." },
    ],
    falaFinal: "Radar afiado. Bora ver o Brasil.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "O Brasil quase não treme. Mas quando treme, é no ACRE! Marque os estados do NORTE onde já houve tremores importantes por causa da placa de Nazca.",
    instrucao: "Acenda os estados da Amazônia com registro sísmico",
    missao: {
      tipo: "selecionar",
      siglas: ["AC", "AM", "RO"],
      pergunta: "Onde o Brasil sente mais tremores?",
    },
    falaFinal:
      "AC, AM, RO — próximos aos Andes, sentem eco dos terremotos chilenos. Resto do Brasil está no interior seguro da placa.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize a formação de uma cordilheira, do começo ao fim.",
    instrucao: "Toque na ordem",
    pergunta: "Como surge uma cordilheira?",
    paradas: [
      { id: "movim", emoji: "🧩", rotulo: "1. Placas se movem",
        descricao: "Duas placas tectônicas viajam uma em direção à outra." },
      { id: "colisao", emoji: "💥", rotulo: "2. Colisão",
        descricao: "Encontro provoca pressão descomunal na borda." },
      { id: "dobra", emoji: "〰️", rotulo: "3. Dobramento da crosta",
        descricao: "A crosta se enruga como um lençol empurrado pelo pé." },
      { id: "sobe", emoji: "⛰️", rotulo: "4. Elevação",
        descricao: "Aos poucos, a área dobrada sobe e forma montanhas." },
      { id: "cordi", emoji: "🏔️", rotulo: "5. Cordilheira formada",
        descricao: "Depois de milhões de anos, temos Andes, Himalaia, Alpes." },
    ],
    ordemCerta: ["movim", "colisao", "dobra", "sobe", "cordi"],
    feedbackAcerto: "Perfeito! 50 milhões de anos numa linha só.",
    feedbackErro: "Comece pelo movimento. Depois colisão, dobra, elevação, cordilheira.",
    falaFinal: "Tudo devagar, tudo poderoso.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia e marque as chaves.",
    tituloLivro: "📘 Manual do Explorador Planetário",
    subtitulo: "Capítulo 3 — Tectônica",
    paragrafos: [
      { id: "p1", texto: "A crosta da Terra é dividida em grandes PLACAS TECTÔNICAS que se movem sobre o magma.",
        chaves: ["placas", "tectônicas", "magma"] },
      { id: "p2", texto: "Nas BORDAS DE PLACA acontecem quase todos os terremotos e vulcões do planeta.",
        chaves: ["bordas", "terremotos", "vulcões"] },
      { id: "p3", texto: "O CINTURÃO DE FOGO do Pacífico concentra 90% dos terremotos do mundo.",
        chaves: ["cinturão", "fogo", "pacífico", "90"] },
      { id: "p4", texto: "TSUNAMIS são ondas gigantes causadas por TERREMOTOS submarinos.",
        chaves: ["tsunamis", "ondas", "terremotos"] },
    ],
    falaFinal: "Leu tudo? Minijogo.",
  },

  cena09_minijogo: (() => {
    const cards = [
      { id: "vulcao", emoji: "", titulo: "Vulcão", cor: "from-slate-800 to-slate-900" },
      { id: "sismo", emoji: "", titulo: "Terremoto", cor: "from-slate-800 to-slate-900" },
      { id: "tsunami", emoji: "", titulo: "Tsunami", cor: "from-slate-800 to-slate-900" },
      { id: "cordilheira", emoji: "", titulo: "Cordilheira", cor: "from-slate-800 to-slate-900" },
      { id: "fossa", emoji: "", titulo: "Fossa oceânica", cor: "from-slate-800 to-slate-900" },
      { id: "dorsal", emoji: "", titulo: "Ilha vulcânica", cor: "from-slate-800 to-slate-900" },
    ];
    return {
      tipo: "quizRadar" as const,
      aurora: "Quiz rápido: pra cada situação, escolha o fenômeno geológico correto.",
      instrucao: "Escolha o fenômeno correto",
      perguntas: [
        { id: "r1", pergunta: "Duas placas se chocam de frente e a crosta se dobra formando picos altíssimos (como o Himalaia). Que formação surge?", cards, correta: "cordilheira",
          feedbackAcerto: "Isso. Colisão de placas dobra a crosta e forma CORDILHEIRAS.", feedbackErro: "É CORDILHEIRA. Placas em colisão empurram a crosta pra cima." },
        { id: "r2", pergunta: "Duas placas presas se soltam de repente, liberando muita energia e fazendo o solo tremer. Que fenômeno é esse?", cards, correta: "sismo",
          feedbackAcerto: "Isso. Energia acumulada liberada de vez = TERREMOTO.", feedbackErro: "É TERREMOTO. As placas destravam e liberam energia como ondas." },
        { id: "r3", pergunta: "Magma escapa da crosta terrestre e chega à superfície como lava, junto com cinza e gases. Que formação é essa?", cards, correta: "vulcao",
          feedbackAcerto: "Isso. Magma que sai à superfície forma o VULCÃO.", feedbackErro: "É VULCÃO. Ele é a passagem do magma da profundeza até a superfície." },
        { id: "r4", pergunta: "Um terremoto no fundo do oceano empurra a água e gera uma onda gigante que atinge a costa. Que fenômeno é esse?", cards, correta: "tsunami",
          feedbackAcerto: "Isso. Terremoto submarino desloca a água e gera TSUNAMI.", feedbackErro: "É TSUNAMI. A energia do terremoto empurra a coluna d'água." },
        { id: "r5", pergunta: "Uma placa oceânica mergulha por baixo de uma continental (subducção), formando uma vala profundíssima no oceano. Que formação é essa?", cards, correta: "fossa",
          feedbackAcerto: "Isso. Subducção cria FOSSAS OCEÂNICAS, como a das Marianas.", feedbackErro: "É FOSSA OCEÂNICA. A placa que mergulha rasga o fundo do mar." },
        { id: "r6", pergunta: "Um vulcão submarino cresce ao longo de milhões de anos até romper a superfície da água. Que formação surge (como Havaí e Fernando de Noronha)?", cards, correta: "dorsal",
          feedbackAcerto: "Isso. Vulcão submarino que emerge = ILHA VULCÂNICA.", feedbackErro: "É ILHA VULCÂNICA. Havaí e Noronha nasceram assim." },
      ],
      falaFinal: "6 perguntas, 6 fenômenos identificados. Geólogo formado.",
    };
  })(),


  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da CROSTA: dois tipos.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "conti", rotulo: "Crosta continental (30%)", emoji: "🏔️", percentual: 30, cor: "#a16207",
        descricao: "Espessa (30-70 km), leve, formada por rochas antigas. Onde vivemos.",
        exemplos: ["🇧🇷 Brasil", "🏔️ Himalaia", "🏙️ Cidades"] },
      { id: "ocean", rotulo: "Crosta oceânica (70%)", emoji: "🌊", percentual: 70, cor: "#0284c7",
        descricao: "Fina (5-10 km), densa, formada por basalto. Fundo dos oceanos.",
        exemplos: ["🌊 Pacífico", "🌊 Atlântico", "🐟 Fundo do mar"] },
    ],
    falaFinal: "70% da crosta está debaixo d'água. Mundo submerso.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Terremotos e vulcões acontecem principalmente em:",
        opcoes: [
          { id: "a", texto: "Meio das placas", correta: false },
          { id: "b", texto: "Bordas de placas tectônicas", correta: true },
          { id: "c", texto: "Regiões frias", correta: false },
        ],
        feedbackAcerto: "Isso! BORDAS de placa = zona quente.", feedbackErro: "Sempre nas BORDAS de placa, não no meio." },
      { id: "av2", pergunta: "O CINTURÃO DE FOGO fica no:",
        opcoes: [
          { id: "a", texto: "Oceano Atlântico", correta: false },
          { id: "b", texto: "Oceano Pacífico", correta: true },
          { id: "c", texto: "Deserto do Saara", correta: false },
        ],
        feedbackAcerto: "Isso! Cinturão de Fogo do PACÍFICO.", feedbackErro: "Fica ao redor do PACÍFICO." },
      { id: "av3", pergunta: "TSUNAMI é resultado de:",
        opcoes: [
          { id: "a", texto: "Vento forte no oceano", correta: false },
          { id: "b", texto: "Terremoto submarino", correta: true },
          { id: "c", texto: "Fase da Lua", correta: false },
        ],
        feedbackAcerto: "Isso! Tsunami = TERREMOTO submarino.", feedbackErro: "Vento = onda comum. Lua = marés. TSUNAMI = terremoto submarino." },
    ],
    selo: { nome: "Geólogo Iniciante", subtitulo: "Insígnia do Explorador Planetário", emoji: "🌋", cor: "from-red-500 to-rose-700" },
    falaFinal: "Insígnia sísmica conquistada!",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Geólogo Iniciante" },
};
