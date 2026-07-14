import type { AulaGeoV1 } from "../../types";
import { url as cartografia } from "@/assets/geografia-6ano/cartografia-coordenadas.jpg.asset.json";
import { url as globoEquador } from "@/assets/geografia-6ano/globo-equador.jpg.asset.json";
import { url as globoGreenwich } from "@/assets/geografia-6ano/globo-greenwich.jpg.asset.json";
import { url as globoLatitude } from "@/assets/geografia-6ano/globo-latitude.jpg.asset.json";
import { url as globoLongitude } from "@/assets/geografia-6ano/globo-longitude.jpg.asset.json";
import { url as escalaMapas } from "@/assets/geografia-6ano/escala-mapas.jpg.asset.json";
import { url as legendaMapa } from "@/assets/geografia-6ano/legenda-mapa.jpg.asset.json";
import { url as tropicosGlobo } from "@/assets/geografia-6ano/tropicos-globo.jpg.asset.json";
import { url as circulosPolares } from "@/assets/geografia-6ano/circulos-polares.jpg.asset.json";
/**
 * Geografia · 6º Ano (PILOTO v2) · Unidade 2 · Aula 01
 * "Cartografia e Coordenadas Geográficas" — BNCC EF06GE04, EF06GE05
 *
 * Padrão U1: imagens reais em toda cena, curiosidades científicas,
 * definições nos chips, feedback longo, quiz de 4 perguntas.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-cartografia-coordenadas",
  titulo: "Cartografia e Coordenadas",
  iconeTrilha: "🧭",
  bncc: ["EF06GE04", "EF06GE05"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: globoLongitude,
    imagemDestaqueUrl: globoLongitude,
    aurora:
      "Seu celular sabe EXATAMENTE onde você está — com precisão de 5 metros. Ele consulta 24 satélites da constelação GPS a 20.200 km de altura, orbitando a 14.000 km/h. Cada satélite envia sinal com o horário atômico exato. Com 4 sinais, seu telefone calcula 2 números: LATITUDE e LONGITUDE. Toda a navegação humana — de Colombo em 1492 aos aviões de hoje — depende dessa grade invisível cravada no planeta.",
    falaFinal: "Latitude + Longitude. Duas coordenadas. Qualquer ponto do planeta localizado.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes de estudar, chuta: se você quer dividir o planeta em Hemisfério NORTE e Hemisfério SUL, qual linha usa como referência?",
    pergunta: "Divisão norte–sul do planeta:",
    opcoes: [
      {
        id: "equador",
        titulo: "Linha do EQUADOR",
        subtitulo: "latitude 0°, corta o meio do globo horizontalmente",
        emoji: "🌎",
        cor: "from-emerald-800 to-slate-950",
      },
      {
        id: "greenwich",
        titulo: "Meridiano de GREENWICH",
        subtitulo: "longitude 0°, passa pela Inglaterra verticalmente",
        emoji: "🇬🇧",
        cor: "from-sky-800 to-slate-950",
      },
    ],
    respostaCerta: "equador",
    feedbackAcerto:
      "Exato! O EQUADOR é a maior linha horizontal do planeta (40.075 km de perímetro) e divide Norte e Sul. O Brasil está quase todo no hemisfério SUL — só uma parte de AP, PA, RR e AM ficam no Norte.",
    feedbackErro:
      "Confusão comum. GREENWICH é uma linha VERTICAL — divide LESTE e OESTE. Foi escolhida em 1884 por passar no observatório real de Londres, capital do maior império da época. Quem divide NORTE e SUL é o EQUADOR (horizontal, latitude 0°).",
    falaFinal: "Equador = horizontal, divide N/S. Greenwich = vertical, divide L/O. Grave essa diferença.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos-chave da cartografia. Cada card traz explicação, exemplo real e curiosidade científica.",
    instrucao: "",
    cadernos: [
      {
        id: "latitude",
        capa: "1. Latitude",
        emoji: "↕️",
        cor: "from-sky-800 to-slate-950",
        conteudo:
          "LATITUDE mede a distância em GRAUS ao NORTE ou ao SUL da linha do Equador (0°). Vai de 0° no Equador até 90° nos Polos. São linhas HORIZONTAIS chamadas PARALELOS, e definem se um lugar é quente (perto do Equador) ou frio (perto dos polos).",
        exemplo:
          "Curiosidade: 1° de latitude = 111 km de distância na superfície da Terra, SEMPRE. É por isso que astrônomos antigos conseguiam medir o tamanho do planeta só olhando a sombra do Sol em cidades diferentes — Eratóstenes fez isso há 2.300 anos e errou por menos de 2%.",
        fotoUrl: globoLatitude,
      },
      {
        id: "longitude",
        capa: "2. Longitude",
        emoji: "↔️",
        cor: "from-indigo-800 to-slate-950",
        conteudo:
          "LONGITUDE mede a distância em GRAUS a LESTE ou a OESTE do Meridiano de Greenwich (0°). Vai de 0° até 180°. São linhas VERTICAIS chamadas MERIDIANOS, indo de polo a polo. Cada 15° de longitude = 1 fuso horário (1 hora de diferença).",
        exemplo:
          "Curiosidade: medir longitude foi o maior problema da navegação por 200 anos. Barcos se perdiam e naufragavam sem conseguir medir. Só foi resolvido em 1761 quando John Harrison inventou o cronômetro marítimo — um relógio que funcionava dentro de um navio balançando.",
        fotoUrl: globoLongitude,
      },
      {
        id: "escala",
        capa: "3. Escala",
        emoji: "📏",
        cor: "from-amber-800 to-amber-950",
        conteudo:
          "ESCALA diz quantas vezes o mapa é MENOR que a realidade. Escrita como 1:X — na escala 1:100.000, cada 1 cm no mapa vale 100.000 cm (1 km) reais. Escala GRANDE (1:1.000) mostra pouco espaço com muito detalhe. Escala PEQUENA (1:100.000.000) mostra o planeta inteiro sem detalhe.",
        exemplo:
          "Curiosidade: o Google Maps troca a escala automaticamente conforme você dá zoom — no zoom máximo, a escala fica em torno de 1:500 (você vê carros). No zoom mínimo, cerca de 1:150 milhões (você vê o planeta inteiro).",
        fotoUrl: escalaMapas,
      },
      {
        id: "legenda",
        capa: "4. Legenda",
        emoji: "🗺️",
        cor: "from-emerald-800 to-slate-950",
        conteudo:
          "LEGENDA é a chave que explica as CORES e SÍMBOLOS de um mapa. Sem ela, o mapa vira rabisco. Convenções cartográficas mundiais: AZUL = água (rios, oceanos), VERDE = vegetação/planícies, MARROM = montanhas, AMARELO/BEGE = desertos, PONTO VERMELHO = capital, ESTRELA = capital do país.",
        exemplo:
          "Curiosidade: as cores de mapa foram padronizadas em 1891 no Congresso Internacional de Geografia em Berna. Antes disso, cada país usava as próprias cores e um mapa francês era ilegível pra um alemão.",
        fotoUrl: legendaMapa,
      },
    ],
    falaFinal: "Latitude, longitude, escala, legenda. 4 ferramentas de todo cartógrafo — do GPS ao livro didático.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Cada card abaixo é uma linha imaginária do planeta. Toque em um card pra entender o que ela faz, onde passa e por que existe.",
    instrucao: "Toque nos 4 cards pra ouvir cada linha",
    mapaUrl: cartografia,
    pontos: [
      {
        id: "equador",
        x: 12,
        y: 50,
        emoji: "🌎",
        cor: "from-emerald-800 to-slate-950",
        titulo: "EQUADOR — Latitude 0°",
        texto:
          "A maior linha imaginária do planeta (40.075 km). Divide Norte e Sul. No Brasil, passa por Macapá (AP) — há um marco no meio da cidade onde você pode pisar com um pé em cada hemisfério. É a região mais quente do planeta porque recebe raios solares perpendiculares o ano inteiro.",
        fotoUrl: globoEquador,
      },
      {
        id: "greenwich",
        x: 50,
        y: 12,
        emoji: "🇬🇧",
        cor: "from-sky-800 to-slate-950",
        titulo: "MERIDIANO DE GREENWICH — Longitude 0°",
        texto:
          "Linha vertical de polo a polo. Passa pelo Real Observatório de Greenwich, em Londres. É o marco zero dos FUSOS HORÁRIOS: quando é meio-dia em Greenwich, é 9h em Brasília (3 fusos a oeste). Foi escolhido em 1884 por 25 países numa conferência em Washington.",
        fotoUrl: globoGreenwich,
      },
      {
        id: "tropicos",
        x: 88,
        y: 50,
        emoji: "☀️",
        cor: "from-amber-800 to-amber-950",
        titulo: "TRÓPICOS (23,5° N e S)",
        texto:
          "Trópico de CÂNCER no norte (23,5° N) e Trópico de CAPRICÓRNIO no sul (23,5° S). Marcam os limites onde o Sol fica EXATAMENTE a pino ao meio-dia nos solstícios. Capricórnio corta o Brasil bem em cima de São Paulo. Entre os dois trópicos = zona INTERTROPICAL, a mais quente do planeta.",
        fotoUrl: tropicosGlobo,
      },
      {
        id: "polos",
        x: 50,
        y: 88,
        emoji: "❄️",
        cor: "from-cyan-800 to-slate-950",
        titulo: "CÍRCULOS POLARES (66,5° N e S)",
        texto:
          "Círculo Polar ÁRTICO (66,5° N) e ANTÁRTICO (66,5° S). Delimitam a região onde acontece o Sol da meia-noite (24h de luz) no verão e a noite polar (24h de escuridão) no inverno. Cidades como Tromsø na Noruega ficam 2 meses sem ver o Sol.",
        fotoUrl: circulosPolares,
      },
    ],
    falaFinal:
      "Equador (0°), Trópicos (23,5°), Círculos Polares (66,5°), Polos (90°). Grade global. Sem elas, sem GPS.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "4 perguntas pra fixar. Sem cola.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "A linha de LATITUDE 0° se chama:",
        fotoUrl: globoEquador,
        cards: [
          { id: "e", emoji: "🌎", titulo: "Equador", cor: "from-emerald-800 to-slate-950" },
          { id: "g", emoji: "🇬🇧", titulo: "Greenwich", cor: "from-sky-800 to-slate-950" },
          { id: "t", emoji: "☀️", titulo: "Trópico", cor: "from-amber-800 to-amber-950" },
        ],
        correta: "e",
        feedbackAcerto: "Isso! EQUADOR = latitude 0°, divide o planeta em Norte e Sul.",
        feedbackErro: "Greenwich é longitude 0°. Trópicos ficam a 23,5°. Latitude 0° = EQUADOR.",
      },
      {
        id: "q2",
        pergunta: "Um mapa com escala 1:50.000 significa que:",
        fotoUrl: escalaMapas,
        cards: [
          { id: "a", emoji: "🔍", titulo: "1 cm = 500 m reais", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "📏", titulo: "1 cm = 50 km reais", cor: "from-amber-800 to-amber-950" },
          { id: "c", emoji: "🗺️", titulo: "1 cm = 50.000 km reais", cor: "from-rose-800 to-slate-950" },
        ],
        correta: "a",
        feedbackAcerto: "Boa! 1 cm no mapa × 50.000 = 50.000 cm reais = 500 metros.",
        feedbackErro: "Conta: 50.000 cm = 500 m (não 50 km). Sempre divida por 100 pra sair de cm pra m.",
      },
      {
        id: "q3",
        pergunta: "Pra saber o que cada COR do mapa significa, você consulta:",
        fotoUrl: legendaMapa,
        cards: [
          { id: "leg", emoji: "🗺️", titulo: "Legenda", cor: "from-emerald-800 to-slate-950" },
          { id: "esc", emoji: "📏", titulo: "Escala", cor: "from-amber-800 to-amber-950" },
          { id: "tit", emoji: "📝", titulo: "Título", cor: "from-sky-800 to-slate-950" },
        ],
        correta: "leg",
        feedbackAcerto: "Perfeito! LEGENDA explica cores e símbolos. Sem ela, o mapa vira rabisco colorido.",
        feedbackErro: "Escala mostra distâncias. Título dá o assunto. Cores e símbolos = LEGENDA.",
      },
      {
        id: "q4",
        pergunta: "Pra localizar EXATAMENTE um ponto qualquer do planeta, o GPS precisa de:",
        fotoUrl: globoLongitude,
        cards: [
          { id: "so-lat", emoji: "↕️", titulo: "Só latitude", cor: "from-sky-800 to-slate-950" },
          { id: "dois", emoji: "🎯", titulo: "Latitude E longitude", cor: "from-emerald-800 to-slate-950" },
          { id: "nome", emoji: "🏙️", titulo: "Só o nome da cidade", cor: "from-slate-800 to-slate-950" },
        ],
        correta: "dois",
        feedbackAcerto: "Isso! Só latitude te dá uma LINHA inteira ao redor do planeta. Precisa das duas coordenadas pra cravar UM ponto.",
        feedbackErro: "Uma coordenada só define uma LINHA. Você precisa das DUAS (latitude + longitude) pra cravar um PONTO exato.",
      },
    ],
    falaFinal: "4 acertos = você já pensa como cartógrafo.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "A LINHA DO EQUADOR corta 4 estados do Brasil na região Norte. Nesses estados o clima é quente e chuvoso o ano todo — o Sol bate quase perpendicular todos os dias. Marque quais são os 4 estados.",
    instrucao: "Acenda os 4 estados cortados pelo Equador",
    missao: {
      tipo: "selecionar",
      siglas: ["AP", "PA", "RR", "AM"],
      pergunta: "Quais estados o Equador atravessa?",
    },
    falaFinal:
      "AP, PA, RR e AM. Todos ficam colados no Equador — por isso são os mais quentes e chuvosos do país, com floresta amazônica em quase toda extensão.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize os mapas do MAIOR (planeta inteiro) pro MENOR (uma rua). Cada escala serve pra uma coisa.",
    instrucao: "Toque na ordem cronológica",
    pergunta: "Do mapa mais amplo pro mais detalhado:",
    paradas: [
      {
        id: "mundo",
        emoji: "🌍",
        rotulo: "1. Mapa-múndi",
        descricao:
          "Escala pequena (1:100.000.000). Mostra continentes e oceanos. Zero detalhe local — nem cidades pequenas aparecem.",
        fotoUrl: escalaMapas,
      },
      {
        id: "pais",
        emoji: "🇧🇷",
        rotulo: "2. Mapa do Brasil",
        descricao:
          "Escala 1:5.000.000. Mostra os 26 estados + DF, capitais e rios principais. É o mapa mais comum em sala de aula.",
      },
      {
        id: "estado",
        emoji: "🏞️",
        rotulo: "3. Mapa de um estado",
        descricao:
          "Escala 1:500.000. Mostra todos os municípios, rodovias federais e estaduais. Serve pra planejar uma viagem interestadual.",
      },
      {
        id: "cidade",
        emoji: "🏙️",
        rotulo: "4. Mapa da cidade",
        descricao: "Escala 1:10.000. Mostra bairros, avenidas principais, hospitais, escolas. É o que o Waze usa quando você digita uma cidade.",
      },
      {
        id: "rua",
        emoji: "📍",
        rotulo: "5. Planta do quarteirão",
        descricao: "Escala 1:1.000 ou maior. Mostra CADA casa, cada esquina. É o que arquitetos e o Google Street View usam.",
      },
    ],
    ordemCerta: ["mundo", "pais", "estado", "cidade", "rua"],
    feedbackAcerto: "Perfeita! Do global ao local. Escala grande = detalhe. Escala pequena = área ampla.",
    feedbackErro:
      "Repense: comece pelo mundo inteiro (menos detalhe), depois país, depois estado, cidade, e no fim a planta da rua (mais detalhe).",
    falaFinal: "5 escalas, 5 usos. O cartógrafo escolhe a certa pra cada situação.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com calma. Os TERMOS-CHAVE ficam destacados — toque em qualquer um pra ver a definição rápida.",
    tituloLivro: "📘 Manual do Explorador Planetário",
    subtitulo: "Capítulo 2 — Cartografia e Coordenadas",
    paragrafos: [
      {
        id: "p1",
        texto:
          "A LATITUDE mede a distância em graus ao NORTE ou ao SUL da linha do EQUADOR (0°). Vai de 0° no Equador até 90° nos POLOS.",
        chaves: ["LATITUDE", "NORTE", "SUL", "EQUADOR", "POLOS"],
        definicoes: {
          "LATITUDE":
            "Coordenada geográfica horizontal. Mede o ângulo entre um ponto do planeta e o Equador, indo até 90° em cada polo.",
          "NORTE":
            "Metade do planeta ACIMA do Equador. Inclui EUA, Europa, China, quase toda a Ásia e norte do Brasil.",
          "SUL":
            "Metade do planeta ABAIXO do Equador. Inclui quase todo o Brasil, Austrália, África do Sul, Argentina, Nova Zelândia.",
          "EQUADOR":
            "Maior linha horizontal do planeta, no meio exato entre os polos. Latitude 0°. Passa por Macapá no Brasil.",
          "POLOS":
            "Os dois pontos extremos do eixo da Terra: Polo Norte (90° N, no Ártico) e Polo Sul (90° S, na Antártida).",
        },
        fotoUrl: globoLatitude,
      },
      {
        id: "p2",
        texto:
          "A LONGITUDE mede a distância em graus a LESTE ou a OESTE do MERIDIANO DE GREENWICH (0°). Cada 15° de longitude equivale a 1 FUSO HORÁRIO de diferença.",
        chaves: ["LONGITUDE", "LESTE", "OESTE", "MERIDIANO DE GREENWICH", "FUSO HORÁRIO"],
        definicoes: {
          "LONGITUDE":
            "Coordenada geográfica vertical. Mede o ângulo entre um ponto e o Meridiano de Greenwich, de 0° a 180°.",
          "LESTE":
            "Direção da metade do planeta onde o Sol nasce mais cedo (Ásia, Oceania, África, leste da Europa).",
          "OESTE":
            "Direção da metade do planeta onde o Sol nasce mais tarde (Américas, oeste da Europa e África).",
          "MERIDIANO DE GREENWICH":
            "Linha vertical que passa pelo observatório de Greenwich, em Londres. Longitude 0°, referência mundial desde 1884.",
          "FUSO HORÁRIO":
            "Faixa vertical de 15° de longitude com o mesmo horário. O planeta tem 24 fusos — um pra cada hora do dia.",
        },
        fotoUrl: globoGreenwich,
      },
      {
        id: "p3",
        texto:
          "A ESCALA de um mapa mostra QUANTAS VEZES ele foi reduzido em relação à realidade. Escala GRANDE = muito detalhe, pouca área. Escala PEQUENA = pouca área detalhada, planeta inteiro.",
        chaves: ["ESCALA", "REDUZIDO", "GRANDE", "PEQUENA"],
        definicoes: {
          "ESCALA":
            "Relação matemática entre distância no mapa e distância real. Escrita como 1:X (ex: 1:100.000).",
          "REDUZIDO":
            "Todo mapa é MENOR que a realidade. A escala diz exatamente quantas vezes menor: 1:1.000 = mil vezes menor.",
          "GRANDE":
            "Escala grande (ex: 1:1.000) mostra ÁREA PEQUENA com MUITO DETALHE. Bom pra planta de casa, bairro.",
          "PEQUENA":
            "Escala pequena (ex: 1:100.000.000) mostra ÁREA GRANDE com POUCO DETALHE. Bom pra mapa-múndi.",
        },
        fotoUrl: escalaMapas,
      },
      {
        id: "p4",
        texto:
          "A LEGENDA é a chave que explica as CORES e os SÍMBOLOS usados no mapa. Sem ela, o mapa vira rabisco colorido. As CONVENÇÕES cartográficas são padronizadas mundialmente.",
        chaves: ["LEGENDA", "CORES", "SÍMBOLOS", "CONVENÇÕES"],
        definicoes: {
          "LEGENDA":
            "Quadro (normalmente no canto do mapa) que traduz cores e símbolos em significado.",
          "CORES":
            "Convenção mundial: azul = água, verde = planície/vegetação, marrom = montanha, amarelo = deserto.",
          "SÍMBOLOS":
            "Ícones do mapa: ponto vermelho = capital, estrela = capital do país, cruz = igreja, triângulo = pico.",
          "CONVENÇÕES":
            "Regras cartográficas internacionais decididas em 1891 no Congresso de Berna, pra qualquer geógrafo entender qualquer mapa.",
        },
        fotoUrl: legendaMapa,
      },
    ],
    falaFinal: "Leu, marcou, entendeu? Bora pro quiz final antes da insígnia.",
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
        {
          id: "r1",
          pergunta: "Você quer saber a que distância NORTE ou SUL do Equador está uma cidade. Qual ferramenta usa?",
          cards,
          correta: "lat",
          feedbackAcerto: "Isso. LATITUDE mede a distância Norte/Sul do Equador.",
          feedbackErro: "É LATITUDE. Ela mede a distância em relação ao Equador (N/S).",
        },
        {
          id: "r2",
          pergunta: "Pra localizar um navio no meio do oceano, o GPS precisa de qual informação?",
          cards,
          correta: "coord",
          feedbackAcerto: "Boa. GPS combina LATITUDE + LONGITUDE pra dar um ponto exato.",
          feedbackErro: "GPS precisa dos DOIS: latitude E longitude, senão o ponto não é exato.",
        },
        {
          id: "r3",
          pergunta: "Um mapa avisa: 1:50.000. Que elemento cartográfico é esse?",
          cards,
          correta: "esc",
          feedbackAcerto: "Isso. A ESCALA mostra quantas vezes o real foi reduzido no mapa.",
          feedbackErro: "É a ESCALA. Ela indica a relação entre o mapa e o tamanho real.",
        },
        {
          id: "r4",
          pergunta: "Pra entender o que cada cor do mapa representa (verde = floresta, azul = rio), você consulta o quê?",
          cards,
          correta: "leg",
          feedbackAcerto: "Isso. A LEGENDA explica o significado das cores e símbolos.",
          feedbackErro: "É a LEGENDA. Cores e símbolos só fazem sentido com ela.",
        },
        {
          id: "r5",
          pergunta: "Pra medir a distância LESTE ou OESTE do Meridiano de Greenwich, você usa:",
          cards,
          correta: "lon",
          feedbackAcerto: "Isso. LONGITUDE mede L/O em relação ao Meridiano de Greenwich.",
          feedbackErro: "É LONGITUDE. Greenwich é o marco zero dessa medição.",
        },
        {
          id: "r6",
          pergunta: "Pra saber pra onde fica o Norte no mapa, você olha:",
          cards,
          correta: "ros",
          feedbackAcerto: "Isso. A ROSA DOS VENTOS mostra as direções (N, S, L, O).",
          feedbackErro: "É a ROSA DOS VENTOS. Ela indica as direções cardeais no mapa.",
        },
      ],
      falaFinal: "6 perguntas, 6 ferramentas certas. Cartógrafo experiente.",
    };
  })(),

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da CARTOGRAFIA: dois grupos de coordenadas dividem o planeta inteiro.",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "latitude",
        rotulo: "Latitude (paralelos)",
        emoji: "↕️",
        percentual: 50,
        cor: "#0369a1",
        descricao:
          "Linhas HORIZONTAIS. Medem distância NORTE ou SUL do Equador. Vão de 0° a 90°. Definem se um lugar é quente ou frio.",
        exemplos: ["🌎 Equador (0°)", "☀️ Trópicos (23,5°)", "❄️ Círculos polares (66,5°)"],
      },
      {
        id: "longitude",
        rotulo: "Longitude (meridianos)",
        emoji: "↔️",
        percentual: 50,
        cor: "#7c3aed",
        descricao:
          "Linhas VERTICAIS. Medem distância LESTE ou OESTE de Greenwich. Vão de 0° a 180°. Definem o fuso horário.",
        exemplos: ["🇬🇧 Greenwich (0°)", "🕐 24 fusos horários", "📅 Linha internacional da data (180°)"],
      },
    ],
    falaFinal: "Duas coordenadas, planeta inteiro localizado com 5 metros de precisão.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Cartógrafo Global.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "A linha que divide os hemisférios NORTE e SUL é:",
        opcoes: [
          { id: "a", texto: "Meridiano de Greenwich", correta: false },
          { id: "b", texto: "Linha do Equador", correta: true },
          { id: "c", texto: "Trópico de Capricórnio", correta: false },
        ],
        feedbackAcerto: "Isso! EQUADOR (horizontal, latitude 0°) divide N/S.",
        feedbackErro: "Greenwich é vertical (L/O). Capricórnio é a 23,5° S. Quem divide N/S é o EQUADOR.",
      },
      {
        id: "av2",
        pergunta: "Escala 1:100.000 significa:",
        opcoes: [
          { id: "a", texto: "1 cm no mapa = 100.000 km reais", correta: false },
          { id: "b", texto: "1 cm no mapa = 1 km real", correta: true },
          { id: "c", texto: "1 cm no mapa = 100 m reais", correta: false },
        ],
        feedbackAcerto: "Perfeito! 100.000 cm = 1.000 m = 1 km.",
        feedbackErro: "Conta: 1 cm × 100.000 = 100.000 cm = 1.000 m = 1 km real.",
      },
      {
        id: "av3",
        pergunta: "Pra localizar um ponto EXATO no planeta você precisa de:",
        opcoes: [
          { id: "a", texto: "Só latitude", correta: false },
          { id: "b", texto: "Latitude E longitude", correta: true },
          { id: "c", texto: "Só o nome da cidade", correta: false },
        ],
        feedbackAcerto: "Isso! GPS usa latitude + longitude — uma dá LINHA, duas dão PONTO.",
        feedbackErro: "Uma coordenada só = uma linha inteira. Precisa das DUAS pra cravar um ponto.",
      },
    ],
    selo: {
      nome: "Cartógrafo Global",
      subtitulo: "Insígnia do Explorador Planetário",
      emoji: "🧭",
      cor: "from-cyan-800 to-slate-950",
    },
    falaFinal: "Insígnia conquistada! Você domina a grade do planeta.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Cartógrafo Global" },
};
