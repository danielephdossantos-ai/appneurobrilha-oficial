import type { AulaGeoV1 } from "../../types";
import { url as tectonica } from "@/assets/geografia-6ano/tectonica-placas.jpg.asset.json";
import { url as cinturaoFogo } from "@/assets/geografia-6ano/cinturao-fogo.jpg.asset.json";
import { url as himalaia } from "@/assets/geografia-6ano/himalaia.jpg.asset.json";
import { url as andes } from "@/assets/geografia-6ano/andes.jpg.asset.json";
import { url as vulcaoErupcao } from "@/assets/geografia-6ano/vulcao-erupcao.jpg.asset.json";
import { url as tsunami } from "@/assets/geografia-6ano/tsunami.jpg.asset.json";
import { url as placasCrosta } from "@/assets/geografia-6ano/placas-crosta.jpg.asset.json";
/**
 * Geografia · 6º Ano (PILOTO v2) · Unidade 3 · Aula 01
 * "Tectônica de Placas" — BNCC EF06GE02, EF06GE03
 * Padrão U1/U2: imagens reais em toda cena, curiosidades, definições, quiz 4 perguntas.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-tectonica-placas",
  titulo: "Tectônica de Placas",
  iconeTrilha: "🌋",
  bncc: ["EF06GE02", "EF06GE03"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: cinturaoFogo,
    imagemDestaqueUrl: cinturaoFogo,
    aurora:
      "A crosta da Terra parece firme, mas por baixo dos seus pés existem PEDAÇOS GIGANTES flutuando sobre rocha derretida a 1.200°C. São as PLACAS TECTÔNICAS — 15 grandes e várias menores, cada uma com milhares de km de largura. Elas se movem 2 a 10 cm por ano (a mesma velocidade que sua unha cresce). Onde duas placas se encontram, a Terra treme: 90% dos terremotos e 75% dos vulcões do planeta acontecem no CINTURÃO DE FOGO do Pacífico.",
    falaFinal: "A Terra parece parada, mas é um puzzle vivo em movimento constante.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Chuta antes: o Japão tem em média 1.500 terremotos por ano. O Brasil quase nenhum. Por que essa diferença brutal?",
    pergunta: "O que explica a diferença?",
    opcoes: [
      { id: "clima", titulo: "É o CLIMA do Japão", subtitulo: "vulcões vêm do calor tropical", emoji: "🌡️", cor: "from-amber-800 to-slate-950" },
      { id: "placas", titulo: "Japão fica em BORDA DE PLACA", subtitulo: "Brasil fica no MEIO da placa", emoji: "🌋", cor: "from-red-800 to-slate-950" },
    ],
    respostaCerta: "placas",
    feedbackAcerto:
      "Exato! Japão está EXATAMENTE em cima do encontro de 4 placas (Pacífica, Filipina, Norte-Americana e Euroasiática) — o coração do Cinturão de Fogo. Brasil está no MEIO da placa Sul-Americana, longe das bordas. Por isso Japão treme todo dia e Brasil quase nunca.",
    feedbackErro:
      "Clima não tem nada a ver — o Saara é quente e não treme, a Islândia é fria e treme muito. O que importa é POSIÇÃO na placa tectônica: borda = tremor; meio = calma. Japão está numa borda quádrupla.",
    falaFinal: "Regra de ouro: onde placas se encontram, a terra treme. Sempre.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras da tectônica. Cada card traz explicação, exemplo real e curiosidade científica.",
    instrucao: "",
    cadernos: [
      {
        id: "placa",
        capa: "1. Placa tectônica",
        emoji: "🧩",
        cor: "from-sky-800 to-slate-950",
        conteudo:
          "PLACA TECTÔNICA é um pedaço rígido da crosta da Terra que flutua sobre o MAGMA (rocha derretida do manto). Existem 15 grandes placas. A do Brasil se chama SUL-AMERICANA. Elas se movem 2 a 10 cm por ano em direções diferentes.",
        exemplo:
          "Curiosidade: há 200 milhões de anos, TODOS os continentes eram um só — o supercontinente PANGEIA. As placas se separaram tão devagar que só percebemos hoje: África e Brasil se encaixam como peças de quebra-cabeça.",
        fotoUrl: placasCrosta,
      },
      {
        id: "vulcao",
        capa: "2. Vulcão",
        emoji: "🌋",
        cor: "from-red-800 to-slate-950",
        conteudo:
          "VULCÃO é uma abertura na crosta por onde escapa MAGMA (rocha derretida), gases e cinza. Formam-se em bordas de placa ou em PONTOS QUENTES do manto. Existem cerca de 1.500 vulcões ativos no planeta.",
        exemplo:
          "Curiosidade: em 79 d.C., o Vesúvio explodiu e enterrou a cidade de POMPEIA em 6 metros de cinza vulcânica. Isso preservou tudo — casas, comida, corpos — como uma fotografia de 2.000 anos.",
        fotoUrl: vulcaoErupcao,
      },
      {
        id: "terremoto",
        capa: "3. Terremoto",
        emoji: "💥",
        cor: "from-amber-800 to-orange-950",
        conteudo:
          "TERREMOTO acontece quando duas placas se travam por décadas e depois se soltam de repente, liberando uma quantidade absurda de energia em forma de ondas sísmicas. A intensidade é medida pela escala RICHTER (0 a 10).",
        exemplo:
          "Curiosidade: o terremoto do Chile em 1960 foi o mais forte já registrado (9,5 na escala Richter). Foi tão forte que fez o planeta inteiro VIBRAR por semanas — cientistas mediram na Antártida.",
        fotoUrl: andes,
      },
      {
        id: "tsunami",
        capa: "4. Tsunami",
        emoji: "🌊",
        cor: "from-emerald-800 to-teal-950",
        conteudo:
          "TSUNAMI é uma onda gigante formada quando um terremoto SUBMARINO empurra a coluna de água. No mar aberto tem só 30 cm de altura, mas viaja a 800 km/h. Quando chega perto da costa, encolhe em comprimento e cresce em altura — até 30 metros.",
        exemplo:
          "Curiosidade: no tsunami do Japão em 2011, o mar recuou 500 metros antes de voltar como uma onda de 15 m. Esse recuo súbito é o AVISO NATURAL — quem viu, correu; quem não viu, morreu.",
        fotoUrl: tsunami,
      },
    ],
    falaFinal: "Placa, vulcão, terremoto, tsunami. 4 fenômenos, uma só causa: placas em movimento.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Cada card abaixo é uma ZONA QUENTE do planeta onde placas se encontram. Toque em cada um pra ver a foto real e entender por que ali é assim.",
    instrucao: "Toque nos 4 cards pra ouvir cada zona",
    mapaUrl: cinturaoFogo,
    pontos: [
      {
        id: "fogo",
        x: 15,
        y: 40,
        emoji: "🔥",
        cor: "from-red-800 to-slate-950",
        titulo: "CINTURÃO DE FOGO DO PACÍFICO",
        texto:
          "Anel de 40.000 km que contorna todo o Oceano Pacífico. Concentra 75% dos vulcões e 90% dos terremotos do planeta. Passa por Japão, Filipinas, Indonésia, Nova Zelândia, oeste dos EUA, Alasca, México, Chile e Peru. Formado pela borda da placa Pacífica.",
        fotoUrl: cinturaoFogo,
      },
      {
        id: "himalaia",
        x: 65,
        y: 30,
        emoji: "⛰️",
        cor: "from-amber-800 to-orange-950",
        titulo: "HIMALAIA — Colisão continental",
        texto:
          "A placa INDIANA vem colidindo com a placa EURASIÁTICA há 50 milhões de anos. A crosta se enrugou como um tapete empurrado — nasceu o Himalaia. O Monte Everest tem 8.849 m e AINDA cresce 5 mm por ano. É a maior cordilheira do planeta.",
        fotoUrl: himalaia,
      },
      {
        id: "andes",
        x: 30,
        y: 75,
        emoji: "🏔️",
        cor: "from-slate-700 to-slate-950",
        titulo: "CORDILHEIRA DOS ANDES",
        texto:
          "A placa oceânica de NAZCA mergulha por baixo da placa SUL-AMERICANA (processo chamado SUBDUCÇÃO). O atrito derrete rocha e forma vulcões; a compressão levanta os Andes. Passa por Chile, Argentina, Bolívia, Peru, Equador, Colômbia — 7.000 km de montanhas.",
        fotoUrl: andes,
      },
      {
        id: "vulcao",
        x: 50,
        y: 55,
        emoji: "🌋",
        cor: "from-red-800 to-slate-950",
        titulo: "VULCANISMO ATIVO",
        texto:
          "Um vulcão ativo entra em erupção liberando magma a 1.200°C. A lava mais famosa forma novos territórios: o HAVAÍ é uma cadeia de ilhas nascida assim há milhões de anos. FERNANDO DE NORONHA no Brasil também nasceu de vulcão submarino extinto.",
        fotoUrl: vulcaoErupcao,
      },
    ],
    falaFinal:
      "4 zonas quentes. Todas em BORDA de placa. Brasil = interior tranquilo da placa Sul-Americana.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "4 perguntas de geólogo pra fixar. Sem cola.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Uma placa tectônica se move em média a:",
        fotoUrl: placasCrosta,
        cards: [
          { id: "lento", emoji: "🐢", titulo: "2 a 10 cm por ano", cor: "from-emerald-800 to-teal-950" },
          { id: "rapido", emoji: "🏃", titulo: "1 km por dia", cor: "from-red-800 to-slate-950" },
          { id: "parado", emoji: "🛑", titulo: "Não se move", cor: "from-slate-700 to-slate-950" },
        ],
        correta: "lento",
        feedbackAcerto: "Isso! Lentíssimo — a mesma velocidade que uma unha cresce. Em 100 anos = 10 metros só.",
        feedbackErro: "Muito lento. 2 a 10 cm por ANO (não por dia). Igual crescimento de unha.",
      },
      {
        id: "q2",
        pergunta: "Local do planeta com MAIS vulcões e terremotos:",
        fotoUrl: cinturaoFogo,
        cards: [
          { id: "brasil", emoji: "🇧🇷", titulo: "Brasil", cor: "from-emerald-800 to-teal-950" },
          { id: "fogo", emoji: "🔥", titulo: "Cinturão de Fogo", cor: "from-red-800 to-slate-950" },
          { id: "eur", emoji: "🇪🇺", titulo: "Europa Central", cor: "from-sky-800 to-indigo-950" },
        ],
        correta: "fogo",
        feedbackAcerto: "Isso! Cinturão de Fogo do Pacífico = 90% dos terremotos e 75% dos vulcões.",
        feedbackErro: "Brasil está no meio da placa (calmo). Europa central também. O CINTURÃO DE FOGO do Pacífico concentra tudo.",
      },
      {
        id: "q3",
        pergunta: "Um TSUNAMI é causado por:",
        fotoUrl: tsunami,
        cards: [
          { id: "vento", emoji: "💨", titulo: "Vento forte", cor: "from-sky-800 to-indigo-950" },
          { id: "sismo", emoji: "🌊", titulo: "Terremoto submarino", cor: "from-red-800 to-slate-950" },
          { id: "lua", emoji: "🌙", titulo: "Fase da Lua", cor: "from-purple-800 to-fuchsia-950" },
        ],
        correta: "sismo",
        feedbackAcerto: "Perfeito! Terremoto no fundo do mar empurra a coluna de água e vira onda gigante.",
        feedbackErro: "Vento faz onda comum. Lua faz maré. TSUNAMI = TERREMOTO submarino que desloca a água.",
      },
      {
        id: "q4",
        pergunta: "O Himalaia se formou por:",
        fotoUrl: himalaia,
        cards: [
          { id: "col", emoji: "💥", titulo: "Colisão de placas", cor: "from-emerald-800 to-teal-950" },
          { id: "vul", emoji: "🌋", titulo: "Vulcão gigante", cor: "from-red-800 to-slate-950" },
          { id: "ero", emoji: "💨", titulo: "Erosão do vento", cor: "from-amber-800 to-orange-950" },
        ],
        correta: "col",
        feedbackAcerto: "Isso! Placa Indiana colidindo com a Euroasiática há 50 milhões de anos. Ainda cresce 5 mm por ano.",
        feedbackErro: "Não é vulcão nem erosão. É COLISÃO: a placa Indiana empurra a Euroasiática e enruga a crosta como tapete.",
      },
    ],
    falaFinal: "4 acertos = você já pensa como geólogo.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "O Brasil quase não treme porque fica no MEIO da placa Sul-Americana. Mas os estados do Norte, mais próximos da borda com a placa de Nazca (nos Andes), já sentiram tremores importantes. Marque quais.",
    instrucao: "Acenda os estados do Norte com registro sísmico",
    missao: {
      tipo: "selecionar",
      siglas: ["AC", "AM", "RO"],
      pergunta: "Onde o Brasil sente mais tremores?",
    },
    falaFinal:
      "AC, AM, RO — próximos aos Andes. Sentem o eco dos terremotos chilenos e bolivianos. Resto do Brasil está no interior seguro da placa.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Uma cordilheira gigante tipo o Himalaia não nasce de um dia pro outro. Organize as etapas — do primeiro movimento à cadeia formada.",
    instrucao: "Toque na ordem cronológica",
    pergunta: "Como surge uma cordilheira?",
    paradas: [
      { id: "movim", emoji: "🧩", rotulo: "1. Placas se movem",
        descricao: "Duas placas tectônicas viajam uma em direção à outra a 2-10 cm por ano.", fotoUrl: placasCrosta },
      { id: "colisao", emoji: "💥", rotulo: "2. Colisão",
        descricao: "O encontro provoca pressão descomunal nas bordas. As rochas começam a se deformar." },
      { id: "dobra", emoji: "〰️", rotulo: "3. Dobramento da crosta",
        descricao: "A crosta se enruga como um lençol empurrado pelo pé. Camadas de rocha se sobrepõem." },
      { id: "sobe", emoji: "⛰️", rotulo: "4. Elevação",
        descricao: "Aos poucos, a área dobrada sobe e forma montanhas cada vez mais altas." },
      { id: "cordi", emoji: "🏔️", rotulo: "5. Cordilheira formada",
        descricao: "Depois de milhões de anos, temos Andes (30M), Himalaia (50M), Alpes (65M).", fotoUrl: himalaia },
    ],
    ordemCerta: ["movim", "colisao", "dobra", "sobe", "cordi"],
    feedbackAcerto: "Perfeito! 50 milhões de anos numa linha só.",
    feedbackErro: "Comece pelo movimento. Depois colisão, dobra, elevação, cordilheira.",
    falaFinal: "Tudo devagar, tudo poderoso. Geologia é paciência.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com calma. Os TERMOS-CHAVE ficam destacados — toque em qualquer um pra ver a definição rápida.",
    tituloLivro: "📘 Manual do Explorador Planetário",
    subtitulo: "Capítulo 3 — Tectônica de Placas",
    paragrafos: [
      {
        id: "p1",
        texto:
          "A crosta da Terra é dividida em grandes PLACAS TECTÔNICAS que flutuam sobre o MAGMA. Elas se movem lentamente por causa das CORRENTES DE CONVECÇÃO do manto terrestre.",
        chaves: ["PLACAS TECTÔNICAS", "MAGMA", "CORRENTES DE CONVECÇÃO"],
        definicoes: {
          "PLACAS TECTÔNICAS":
            "Pedaços rígidos e gigantes da crosta terrestre. Existem 15 grandes, incluindo a Sul-Americana (Brasil).",
          "MAGMA":
            "Rocha derretida a mais de 1.000°C que fica no manto da Terra. Quando sai pela superfície, vira LAVA.",
          "CORRENTES DE CONVECÇÃO":
            "Movimento circular do magma quente subindo e do magma frio descendo. É o que empurra as placas.",
        },
        fotoUrl: placasCrosta,
      },
      {
        id: "p2",
        texto:
          "Nas BORDAS DE PLACA acontecem quase todos os TERREMOTOS e VULCÕES do planeta. Quando placas colidem, formam CORDILHEIRAS como o Himalaia.",
        chaves: ["BORDAS DE PLACA", "TERREMOTOS", "VULCÕES", "CORDILHEIRAS"],
        definicoes: {
          "BORDAS DE PLACA":
            "Linhas onde duas placas se encontram. Podem estar se AFASTANDO, COLIDINDO ou se ROÇANDO.",
          "TERREMOTOS":
            "Vibrações do solo causadas pela liberação súbita de energia acumulada entre placas travadas.",
          "VULCÕES":
            "Aberturas na crosta por onde escapa magma. Formam-se principalmente em bordas de placa.",
          "CORDILHEIRAS":
            "Cadeias de montanhas altas formadas pela colisão de placas continentais. Ex.: Andes, Himalaia, Alpes.",
        },
        fotoUrl: himalaia,
      },
      {
        id: "p3",
        texto:
          "O CINTURÃO DE FOGO do PACÍFICO concentra 90% dos terremotos e 75% dos VULCÕES ATIVOS do mundo. É um anel de 40.000 km ao redor do Oceano Pacífico.",
        chaves: ["CINTURÃO DE FOGO", "PACÍFICO", "VULCÕES ATIVOS"],
        definicoes: {
          "CINTURÃO DE FOGO":
            "Anel de zonas sísmicas e vulcânicas que contorna o Oceano Pacífico. Passa por Japão, Chile, Alasca e mais.",
          "PACÍFICO":
            "Maior oceano do planeta. Sua placa mergulha por baixo de várias outras, criando terremotos e vulcões.",
          "VULCÕES ATIVOS":
            "Vulcões que entraram em erupção nos últimos 10.000 anos. Existem cerca de 1.500 no planeta.",
        },
        fotoUrl: cinturaoFogo,
      },
      {
        id: "p4",
        texto:
          "TSUNAMIS são ondas gigantes causadas por TERREMOTOS SUBMARINOS. No mar aberto viajam a 800 km/h e chegam à costa com até 30 metros de altura.",
        chaves: ["TSUNAMIS", "TERREMOTOS SUBMARINOS"],
        definicoes: {
          "TSUNAMIS":
            "Ondas gigantes formadas quando um terremoto no fundo do mar desloca a coluna de água.",
          "TERREMOTOS SUBMARINOS":
            "Terremotos com epicentro no fundo do oceano. São os únicos capazes de gerar tsunamis grandes.",
        },
        fotoUrl: tsunami,
      },
    ],
    falaFinal: "Leu, marcou, entendeu? Bora pro quiz final antes da insígnia.",
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
    aurora: "Pizza da CROSTA: dois tipos formam o planeta inteiro.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "conti", rotulo: "Crosta continental (30%)", emoji: "🏔️", percentual: 30, cor: "#a16207",
        descricao: "Espessa (30-70 km), leve, formada por rochas antigas (até 4 bilhões de anos). Onde vivemos.",
        exemplos: ["🇧🇷 Brasil", "🏔️ Himalaia", "🏙️ Cidades"] },
      { id: "ocean", rotulo: "Crosta oceânica (70%)", emoji: "🌊", percentual: 70, cor: "#0284c7",
        descricao: "Fina (5-10 km), densa, formada por basalto. Fundo dos oceanos. Renovada constantemente pelas dorsais.",
        exemplos: ["🌊 Pacífico", "🌊 Atlântico", "🐟 Fundo do mar"] },
    ],
    falaFinal: "70% da crosta está debaixo d'água. Mundo submerso maior que o emerso.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Geólogo Iniciante.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Terremotos e vulcões acontecem principalmente em:",
        opcoes: [
          { id: "a", texto: "Meio das placas tectônicas", correta: false },
          { id: "b", texto: "Bordas de placas tectônicas", correta: true },
          { id: "c", texto: "Regiões frias do planeta", correta: false },
        ],
        feedbackAcerto: "Isso! BORDAS de placa = zona quente. 90% dos terremotos acontecem lá.",
        feedbackErro: "Sempre nas BORDAS de placa, não no meio nem em regiões frias específicas." },
      { id: "av2", pergunta: "O CINTURÃO DE FOGO fica ao redor do:",
        opcoes: [
          { id: "a", texto: "Oceano Atlântico", correta: false },
          { id: "b", texto: "Oceano Pacífico", correta: true },
          { id: "c", texto: "Deserto do Saara", correta: false },
        ],
        feedbackAcerto: "Isso! Cinturão de Fogo do PACÍFICO — anel de 40.000 km.",
        feedbackErro: "Fica ao redor do PACÍFICO, não do Atlântico nem no Saara." },
      { id: "av3", pergunta: "TSUNAMI é resultado de:",
        opcoes: [
          { id: "a", texto: "Vento forte no oceano", correta: false },
          { id: "b", texto: "Terremoto submarino", correta: true },
          { id: "c", texto: "Fase da Lua", correta: false },
        ],
        feedbackAcerto: "Isso! Tsunami = TERREMOTO submarino que empurra a coluna d'água.",
        feedbackErro: "Vento = onda comum. Lua = marés. TSUNAMI = terremoto submarino." },
    ],
    selo: { nome: "Geólogo Iniciante", subtitulo: "Insígnia do Explorador Planetário", emoji: "🌋", cor: "from-red-800 to-slate-950" },
    falaFinal: "Insígnia sísmica conquistada! Você entende como a Terra por dentro se move.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Geólogo Iniciante" },
};
