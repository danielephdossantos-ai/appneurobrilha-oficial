import type { AulaGeoV1 } from "../../types";
import cartografia from "@/assets/geografia-6ano/cartografia-coordenadas.jpg";

export const aula01: AulaGeoV1 = {
  slug: "aula-01-cartografia-coordenadas",
  titulo: "Cartografia e Coordenadas",
  iconeTrilha: "🧭",
  bncc: ["EF06GE04", "EF06GE05"],
  duracaoMin: 25,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Um GPS acha qualquer lugar do planeta com 2 números. Como?",
    mapaUrl: cartografia,
    imagemDestaqueUrl: cartografia,
    aurora:
      "Explorador, seu celular sabe EXATAMENTE onde você está — rua, número, cidade. Ele usa duas coordenadas: LATITUDE e LONGITUDE. Elas são linhas imaginárias que dividem o planeta em uma grade gigante.",
    falaFinal: "Sem essa grade, ninguém acharia navio no oceano, avião no céu, ou você no mapa.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Qual dessas linhas divide a Terra em Hemisfério NORTE e Hemisfério SUL?",
    pergunta: "Divisão norte–sul do planeta:",
    opcoes: [
      { id: "equador", titulo: "Linha do EQUADOR", subtitulo: "latitude 0°, ao meio do globo", emoji: "🌎", cor: "from-emerald-400 to-teal-600" },
      { id: "greenwich", titulo: "Meridiano de GREENWICH", subtitulo: "longitude 0°, corta a Inglaterra", emoji: "🇬🇧", cor: "from-sky-400 to-indigo-600" },
    ],
    respostaCerta: "equador",
    feedbackAcerto: "Isso! EQUADOR divide o planeta em Norte e Sul. Brasil quase todo no Sul.",
    feedbackErro: "Greenwich divide LESTE e OESTE. O EQUADOR divide Norte e Sul.",
    falaFinal: "Duas linhas mestras: Equador (horizontal) e Greenwich (vertical). O resto é grade.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos que o GPS usa o tempo todo.",
    instrucao: "",
    cadernos: [
      { id: "latitude", capa: "1. Latitude", emoji: "↕️", cor: "from-sky-500 to-blue-700",
        conteudo: "LATITUDE mede a distância NORTE ou SUL do Equador (0°). Vai de 0° (Equador) até 90° (Polos).",
        exemplo: "Ex.: São Paulo está a 23° de latitude SUL." },
      { id: "longitude", capa: "2. Longitude", emoji: "↔️", cor: "from-purple-500 to-fuchsia-700",
        conteudo: "LONGITUDE mede a distância LESTE ou OESTE do meridiano de Greenwich (0°). Vai de 0° até 180°.",
        exemplo: "Ex.: São Paulo está a 46° de longitude OESTE." },
      { id: "escala", capa: "3. Escala", emoji: "📏", cor: "from-amber-500 to-orange-700",
        conteudo: "ESCALA diz quantas vezes o mapa é MENOR que a realidade. 1:100.000 = 1 cm no mapa = 100.000 cm (1 km) na vida real.",
        exemplo: "Ex.: mapa do bairro (grande escala) vs mapa do mundo (pequena escala)." },
      { id: "legenda", capa: "4. Legenda", emoji: "🗺️", cor: "from-emerald-500 to-green-700",
        conteudo: "LEGENDA é a lista que explica as CORES e SÍMBOLOS do mapa. Sem ela, o mapa é rabisco.",
        exemplo: "Ex.: azul = rio, verde = floresta, vermelho = capital." },
    ],
    falaFinal: "Latitude, longitude, escala, legenda. 4 ferramentas de todo cartógrafo.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada linha imaginária no globo. Ouça o que ela faz.",
    instrucao: "Toque em cada balão",
    mapaUrl: cartografia,
    pontos: [
      { id: "equador", x: 50, y: 50, emoji: "🌎", cor: "from-emerald-400 to-teal-600",
        titulo: "EQUADOR (latitude 0°)",
        texto: "Linha horizontal maior do planeta. Divide Norte e Sul. Passa por Macapá (AP), no Brasil." },
      { id: "greenwich", x: 55, y: 30, emoji: "🇬🇧", cor: "from-sky-400 to-indigo-600",
        titulo: "MERIDIANO DE GREENWICH (longitude 0°)",
        texto: "Linha vertical de referência. Passa pelo observatório de Greenwich, em Londres. Divide Leste e Oeste." },
      { id: "tropicos", x: 30, y: 65, emoji: "☀️", cor: "from-amber-400 to-orange-600",
        titulo: "TRÓPICOS (23,5° N e S)",
        texto: "Marcam onde o Sol fica a pino ao meio-dia nos solstícios. Trópico de Capricórnio passa por SP." },
      { id: "polos", x: 75, y: 80, emoji: "❄️", cor: "from-sky-500 to-blue-700",
        titulo: "CÍRCULOS POLARES (66,5° N e S)",
        texto: "Regiões com dias de 24h de sol no verão e 24h de noite no inverno. Frio extremo." },
    ],
    falaFinal: "Equador, Greenwich, Trópicos, Polares. Grade global. Sem elas, sem GPS.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de cartógrafo.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Linha de latitude 0° se chama:",
        cards: [
          { id: "e", emoji: "🌎", titulo: "Equador", cor: "from-emerald-500 to-teal-700" },
          { id: "g", emoji: "🇬🇧", titulo: "Greenwich", cor: "from-sky-500 to-indigo-700" },
          { id: "t", emoji: "☀️", titulo: "Trópico", cor: "from-amber-500 to-orange-700" },
        ], correta: "e",
        feedbackAcerto: "Isso! EQUADOR = latitude 0°.", feedbackErro: "Greenwich é longitude. Equador = latitude 0°." },
      { id: "q2", pergunta: "Mapa 1:50.000 significa:",
        cards: [
          { id: "a", emoji: "🔍", titulo: "1 cm = 50.000 cm (500 m)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "📏", titulo: "1 cm = 50 km", cor: "from-amber-500 to-orange-700" },
          { id: "c", emoji: "🗺️", titulo: "50.000 cidades", cor: "from-red-500 to-rose-700" },
        ], correta: "a",
        feedbackAcerto: "Boa! 1:50.000 = 1 cm no mapa = 50.000 cm = 500 m reais.", feedbackErro: "Escala 1:50.000 = 1 cm = 500 m (não 50 km)." },
      { id: "q3", pergunta: "Pra saber o que cada cor de um mapa significa, olhe:",
        cards: [
          { id: "leg", emoji: "🗺️", titulo: "Legenda", cor: "from-emerald-500 to-teal-700" },
          { id: "esc", emoji: "📏", titulo: "Escala", cor: "from-amber-500 to-orange-700" },
          { id: "tit", emoji: "📝", titulo: "Título", cor: "from-sky-500 to-indigo-700" },
        ], correta: "leg",
        feedbackAcerto: "Isso! LEGENDA explica cores e símbolos.", feedbackErro: "Escala mostra distância. Legenda = cores e símbolos." },
    ],
    falaFinal: "Radar ok. Vamos praticar no mapa do Brasil.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "A LINHA DO EQUADOR corta 4 estados no Brasil. Marque quais.",
    instrucao: "Acenda os estados cortados pelo Equador",
    missao: {
      tipo: "selecionar",
      siglas: ["AP", "PA", "RR", "AM"],
      pergunta: "Quais estados o Equador atravessa?",
    },
    falaFinal:
      "AP, PA, RR e AM ficam quase colados no Equador. Por isso são quentes e chuvosos o ano todo.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize as escalas do MAIOR (planeta) pro MENOR (rua).",
    instrucao: "Toque na ordem correta",
    pergunta: "Do mapa mais amplo pro mais detalhado:",
    paradas: [
      { id: "mundo", emoji: "🌍", rotulo: "1. Mapa-múndi",
        descricao: "Escala pequena (1:100.000.000). Mostra continentes." },
      { id: "pais", emoji: "🇧🇷", rotulo: "2. Mapa do Brasil",
        descricao: "Escala 1:5.000.000. Mostra estados e capitais." },
      { id: "estado", emoji: "🏞️", rotulo: "3. Mapa do estado",
        descricao: "Escala 1:500.000. Mostra municípios e estradas." },
      { id: "cidade", emoji: "🏙️", rotulo: "4. Mapa da cidade",
        descricao: "Escala 1:10.000. Mostra bairros e avenidas." },
      { id: "rua", emoji: "📍", rotulo: "5. Planta do bairro",
        descricao: "Escala 1:1.000. Mostra cada casa e rua." },
    ],
    ordemCerta: ["mundo", "pais", "estado", "cidade", "rua"],
    feedbackAcerto: "Perfeito! Do global ao local. Cada escala tem seu uso.",
    feedbackErro: "Comece pelo mundo, depois país, estado, cidade, rua.",
    falaFinal: "5 escalas, 5 usos. Cartógrafo escolhe a certa pra cada situação.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com atenção. Marque as palavras-chave.",
    tituloLivro: "📘 Manual do Explorador Planetário",
    subtitulo: "Capítulo 2 — Cartografia",
    paragrafos: [
      { id: "p1", texto: "A LATITUDE mede a distância em graus ao NORTE ou ao SUL da linha do EQUADOR (0°).",
        chaves: ["latitude", "norte", "sul", "equador"] },
      { id: "p2", texto: "A LONGITUDE mede a distância em graus a LESTE ou a OESTE do meridiano de GREENWICH (0°).",
        chaves: ["longitude", "leste", "oeste", "greenwich"] },
      { id: "p3", texto: "A ESCALA de um mapa mostra QUANTAS VEZES ele foi reduzido em relação à realidade.",
        chaves: ["escala", "reduzido", "realidade"] },
      { id: "p4", texto: "A LEGENDA é a chave que explica as CORES e os SÍMBOLOS usados no mapa.",
        chaves: ["legenda", "cores", "símbolos"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: (() => {
    const cards = [
      { id: "lat", emoji: "", titulo: "Latitude", cor: "from-slate-800 to-slate-900" },
      { id: "lon", emoji: "", titulo: "Longitude", cor: "from-slate-800 to-slate-900" },
      { id: "esc", emoji: "", titulo: "Escala", cor: "from-slate-800 to-slate-900" },
      { id: "leg", emoji: "", titulo: "Legenda", cor: "from-slate-800 to-slate-900" },
      { id: "ros", emoji: "", titulo: "Rosa dos ventos", cor: "from-slate-800 to-slate-900" },
      { id: "coord", emoji: "", titulo: "Latitude + Longitude", cor: "from-slate-800 to-slate-900" },
    ];
    return {
      tipo: "quizRadar" as const,
      aurora: "Quiz rápido: pra cada situação, escolha a ferramenta cartográfica certa.",
      instrucao: "Escolha a ferramenta correta",
      perguntas: [
        { id: "r1", pergunta: "Você quer saber a que distância NORTE ou SUL do Equador está uma cidade. Qual ferramenta usar?", cards, correta: "lat",
          feedbackAcerto: "Isso. LATITUDE mede a distância Norte/Sul do Equador.", feedbackErro: "É LATITUDE. Ela mede a distância em relação ao Equador (N/S)." },
        { id: "r2", pergunta: "Pra localizar um navio no meio do oceano, o GPS precisa de qual informação?", cards, correta: "coord",
          feedbackAcerto: "Boa. GPS combina LATITUDE + LONGITUDE pra dar um ponto exato.", feedbackErro: "GPS precisa dos DOIS: latitude E longitude, senão o ponto não é exato." },
        { id: "r3", pergunta: "Um mapa avisa: 1:50.000. Que elemento cartográfico é esse?", cards, correta: "esc",
          feedbackAcerto: "Isso. A ESCALA mostra quantas vezes o real foi reduzido no mapa.", feedbackErro: "É a ESCALA. Ela indica a relação entre o mapa e o tamanho real." },
        { id: "r4", pergunta: "Pra entender o que cada cor do mapa representa (verde = floresta, azul = rio), você consulta o quê?", cards, correta: "leg",
          feedbackAcerto: "Isso. A LEGENDA explica o significado das cores e símbolos.", feedbackErro: "É a LEGENDA. Cores e símbolos só fazem sentido com ela." },
        { id: "r5", pergunta: "Pra medir a distância LESTE ou OESTE do Meridiano de Greenwich, você usa:", cards, correta: "lon",
          feedbackAcerto: "Isso. LONGITUDE mede L/O em relação ao Meridiano de Greenwich.", feedbackErro: "É LONGITUDE. Greenwich é o marco zero dessa medição." },
        { id: "r6", pergunta: "Pra saber pra onde fica o Norte no mapa, você olha:", cards, correta: "ros",
          feedbackAcerto: "Isso. A ROSA DOS VENTOS mostra as direções (N, S, L, O).", feedbackErro: "É a ROSA DOS VENTOS. Ela indica as direções cardeais no mapa." },
      ],
      falaFinal: "6 perguntas, 6 ferramentas certas. Cartógrafo experiente.",
    };
  })(),


  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da CARTOGRAFIA: dois grupos de coordenadas.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "latitude", rotulo: "Latitude (paralelos)", emoji: "↕️", percentual: 50, cor: "#0ea5e9",
        descricao: "Linhas HORIZONTAIS. Medem distância NORTE ou SUL do Equador. Vão de 0° a 90°.",
        exemplos: ["🌎 Equador", "☀️ Trópicos", "❄️ Círculos polares"] },
      { id: "longitude", rotulo: "Longitude (meridianos)", emoji: "↔️", percentual: 50, cor: "#a855f7",
        descricao: "Linhas VERTICAIS. Medem distância LESTE ou OESTE de Greenwich. Vão de 0° a 180°.",
        exemplos: ["🇬🇧 Greenwich", "🕐 Fusos horários", "📅 Linha internacional da data"] },
    ],
    falaFinal: "Duas coordenadas, planeta inteiro localizado.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Cartógrafo Global.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "A linha que divide os hemisférios NORTE e SUL é:",
        opcoes: [
          { id: "a", texto: "Meridiano de Greenwich", correta: false },
          { id: "b", texto: "Linha do Equador", correta: true },
          { id: "c", texto: "Trópico de Capricórnio", correta: false },
        ],
        feedbackAcerto: "Isso! EQUADOR divide N/S.", feedbackErro: "Greenwich é L/O. Equador = N/S." },
      { id: "av2", pergunta: "Escala 1:100.000 significa:",
        opcoes: [
          { id: "a", texto: "1 cm no mapa = 100.000 km reais", correta: false },
          { id: "b", texto: "1 cm no mapa = 1 km real", correta: true },
          { id: "c", texto: "1 cm no mapa = 100 m reais", correta: false },
        ],
        feedbackAcerto: "Perfeito! 100.000 cm = 1.000 m = 1 km.", feedbackErro: "1:100.000 = 1 cm no mapa = 100.000 cm = 1 km real." },
      { id: "av3", pergunta: "Pra localizar um ponto EXATO no planeta você precisa de:",
        opcoes: [
          { id: "a", texto: "Só latitude", correta: false },
          { id: "b", texto: "Latitude E longitude", correta: true },
          { id: "c", texto: "Só o nome da cidade", correta: false },
        ],
        feedbackAcerto: "Isso! GPS usa latitude + longitude.", feedbackErro: "Precisa dos DOIS: latitude E longitude." },
    ],
    selo: { nome: "Cartógrafo Global", subtitulo: "Insígnia do Explorador Planetário", emoji: "🧭", cor: "from-emerald-400 to-teal-600" },
    falaFinal: "Insígnia conquistada! Você domina a grade do planeta.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Cartógrafo Global" },
};
