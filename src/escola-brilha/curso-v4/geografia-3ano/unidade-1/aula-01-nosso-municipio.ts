import type { AulaGeoV1 } from "../../types";
import mapaMunicipio from "@/assets/geografia-3ano/mapa-municipio.jpg";

/**
 * Geografia · 3º Ano · Unidade 1 · Aula 01
 * "Meu Município tem Cidade e Campo" — EF03GE01
 *
 * Player customizado (exceção formal ao padrão único, ver
 * .lovable/mem/constraints/geografia-3ao9-player-custom.md).
 * Cena 1 já entregue com interação real (lupa arrastável revelando o
 * mapa). Cenas 2–11 entram como placeholder navegável — vão ser
 * construídas uma por uma com aprovação cena a cena.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-nosso-municipio",
  titulo: "Meu Município: Cidade + Campo",
  iconeTrilha: "🗺️",
  bncc: ["EF03GE01"],
  duracaoMin: 20,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Arraste a LUPA sobre o mapa. Você vai descobrir que o município tem DOIS pedaços: um com casinhas juntas e outro com plantação.",
    mapaUrl: mapaMunicipio,
    aurora:
      "Brilha, cheguei com uma mesa de cartógrafo! Cartógrafo é quem faz mapas. Nossa missão é DESCOBRIR o município — pega a lupa e passa devagar sobre o mapa.",
    falaFinal:
      "Viu? De um lado a CIDADE — muitas casinhas juntas. Do outro lado o CAMPO — plantações e o rio. Os DOIS pedaços juntos formam UM município.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes de abrir o mapa inteiro, quero seu palpite, explorador! O que você acha que tem dentro do nosso município?",
    pergunta: "O que forma o nosso município?",
    opcoes: [
      {
        id: "so-cidade",
        titulo: "Só cidade",
        subtitulo: "prédios, ruas e praças",
        emoji: "🏙️",
        cor: "from-sky-400 to-indigo-500",
      },
      {
        id: "cidade-campo",
        titulo: "Cidade + campo juntos",
        subtitulo: "casas, plantações e rio",
        emoji: "🏙️🌾",
        cor: "from-emerald-400 to-amber-500",
      },
    ],
    respostaCerta: "cidade-campo",
    feedbackAcerto:
      "Isso mesmo! O município é feito da cidade E do campo — os dois pedaços juntos.",
    feedbackErro:
      "Quase! Só a cidade é uma parte. O município inteiro tem cidade E campo dentro dele.",
    falaFinal:
      "Guarda esse palpite. Nas próximas cenas você vai ver com seus olhos: casas juntas de um lado, plantações do outro — tudo dentro do mesmo município.",
  },
  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Todo cartógrafo tem um caderno de campo. Aqui estão os meus: toca em cada um pra descobrir 4 palavras importantes que a gente vai usar hoje.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "municipio",
        capa: "Município",
        emoji: "🗺️",
        cor: "from-emerald-500 to-teal-700",
        conteudo:
          "É o pedaço do país que tem UMA prefeitura, UM prefeito, e junta cidade + campo.",
        exemplo: "A gente mora no município de _______ (fala o seu!).",
      },
      {
        id: "zona-urbana",
        capa: "Zona Urbana",
        emoji: "🏙️",
        cor: "from-sky-500 to-indigo-700",
        conteudo:
          "É a parte do município com muitas casas juntas, ruas, prédios, praças e lojas. É a CIDADE.",
        exemplo: "Padaria, escola no meio dos prédios, semáforo — zona urbana.",
      },
      {
        id: "zona-rural",
        capa: "Zona Rural",
        emoji: "🌾",
        cor: "from-lime-500 to-emerald-700",
        conteudo:
          "É a parte do município com plantações, animais, matas e rios. É o CAMPO.",
        exemplo: "Sítio, fazenda, roça de milho — zona rural.",
      },
      {
        id: "fronteira",
        capa: "Fronteira",
        emoji: "🚧",
        cor: "from-amber-500 to-rose-600",
        conteudo:
          "É a linha imaginária que separa UM município do outro. Do outro lado, começa outra prefeitura.",
        exemplo: "A placa 'Bem-vindo a...' avisa que você cruzou uma fronteira.",
      },
    ],
    falaFinal:
      "Agora você tem as 4 palavras do cartógrafo. Vamos usar TODAS elas nas próximas cenas!",
  },
  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Agora que você conhece as palavras, deixa eu te apresentar o mapa DE VERDADE. Toca em cada balão que eu conto o que tem naquele pedaço do município.",
    instrucao: "Toque em cada balão pra ouvir a Aurora contar",
    mapaUrl: mapaMunicipio,
    pontos: [
      {
        id: "urbana",
        x: 75,
        y: 55,
        emoji: "🏙️",
        cor: "from-sky-400 to-indigo-500",
        titulo: "Zona Urbana",
        texto:
          "Esse pedaço é a CIDADE. Tem muitas casas juntinhas, ruas de asfalto, prédios, praça, escola e mercado. É onde a maioria das pessoas do município mora.",
      },
      {
        id: "rural",
        x: 25,
        y: 35,
        emoji: "🌾",
        cor: "from-lime-400 to-emerald-600",
        titulo: "Zona Rural",
        texto:
          "Esse pedaço é o CAMPO. Tem plantação, sítio, fazenda, animais e muito verde. É de onde vem grande parte da comida que a gente come na cidade.",
      },
      {
        id: "rio",
        x: 35,
        y: 65,
        emoji: "🌊",
        cor: "from-cyan-400 to-blue-600",
        titulo: "Rio do Município",
        texto:
          "O rio atravessa o município INTEIRO. Ele passa pelo campo e chega perto da cidade. Serve pra beber, pra plantar e pra dar vida pros bichos.",
      },
      {
        id: "fronteira",
        x: 90,
        y: 20,
        emoji: "🚧",
        cor: "from-amber-400 to-rose-600",
        titulo: "Fronteira",
        texto:
          "Aqui é a FRONTEIRA. Depois dessa linha, começa OUTRO município, com outra prefeitura. Tudo que está antes dela ainda é o nosso município.",
      },
    ],
    falaFinal:
      "Viu como o município é grande? Cidade, campo, rio e fronteira — tudo faz parte do MESMO lugar onde a gente vive.",
  },
  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Agora liguei o radar do cartógrafo! Vou fazer 3 perguntas — você escolhe o card certo e o radar pousa nele. Bora testar o que você aprendeu?",
    instrucao: "Toque no card certo pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "Onde tem muitas casas juntas, ruas de asfalto e prédios?",
        cards: [
          { id: "urbana", emoji: "🏙️", titulo: "Zona Urbana", cor: "from-sky-400 to-indigo-500" },
          { id: "rural", emoji: "🌾", titulo: "Zona Rural", cor: "from-lime-400 to-emerald-600" },
          { id: "fronteira", emoji: "🚧", titulo: "Fronteira", cor: "from-amber-400 to-rose-600" },
        ],
        correta: "urbana",
        feedbackAcerto:
          "Isso! Casas juntas, asfalto e prédios são marcas da ZONA URBANA — a cidade.",
        feedbackErro:
          "Quase! Onde tem MUITAS casas grudadas, prédios e asfalto é a ZONA URBANA (cidade).",
      },
      {
        id: "q2",
        pergunta: "Em qual pedaço do município ficam plantações, sítios e animais?",
        cards: [
          { id: "urbana", emoji: "🏙️", titulo: "Zona Urbana", cor: "from-sky-400 to-indigo-500" },
          { id: "rural", emoji: "🌾", titulo: "Zona Rural", cor: "from-lime-400 to-emerald-600" },
          { id: "rio", emoji: "🌊", titulo: "Só no Rio", cor: "from-cyan-400 to-blue-600" },
        ],
        correta: "rural",
        feedbackAcerto:
          "Boa! Plantação, sítio e animais moram na ZONA RURAL — o campo do município.",
        feedbackErro:
          "Não é aí. Plantações, sítios e animais ficam no CAMPO — a ZONA RURAL.",
      },
      {
        id: "q3",
        pergunta: "O que separa UM município do outro?",
        cards: [
          { id: "fronteira", emoji: "🚧", titulo: "A Fronteira", cor: "from-amber-400 to-rose-600" },
          { id: "rio", emoji: "🌊", titulo: "O Rio", cor: "from-cyan-400 to-blue-600" },
          { id: "praca", emoji: "🌳", titulo: "A Praça", cor: "from-emerald-400 to-teal-600" },
        ],
        correta: "fronteira",
        feedbackAcerto:
          "Exato! A FRONTEIRA é a linha imaginária que marca onde acaba um município e começa outro.",
        feedbackErro:
          "Ainda não. Rio e praça ficam DENTRO do município. Quem separa municípios é a FRONTEIRA.",
      },
    ],
    falaFinal:
      "Radar afiado! Você já sabe reconhecer zona urbana, zona rural e a fronteira no seu município.",
  },
  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Cada município tem CAMADAS. Vou te dar dois interruptores: um acende a ZONA URBANA no mapa, outro acende a ZONA RURAL. Liga os dois pra ver o município INTEIRO iluminado!",
    instrucao: "Toque nos interruptores pra acender cada parte do mapa",
    mapaUrl: mapaMunicipio,
    camadas: [
      {
        id: "urbana",
        rotulo: "Zona Urbana",
        emoji: "🏙️",
        cor: "from-sky-500 to-indigo-600",
        rect: { x: 55, y: 40, w: 40, h: 45 },
        descricao:
          "Aqui é a parte com muitas casas juntas, ruas e prédios. É onde ficam a escola, a padaria e a praça.",
      },
      {
        id: "rural",
        rotulo: "Zona Rural",
        emoji: "🌾",
        cor: "from-lime-500 to-emerald-700",
        rect: { x: 5, y: 15, w: 45, h: 55 },
        descricao:
          "Aqui é o campo — plantações, sítios, matas e o rio passando. É de onde vem grande parte da comida da cidade.",
      },
    ],
    falaFinal:
      "Viu? As duas camadas juntas formam o município INTEIRO. Cidade + campo iluminados no mesmo mapa.",
  },
  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Todo dia sai um caminhão do campo com comida pra cidade. Vamos montar o caminho da alface até a sua casa? Toque nas paradas na ORDEM certa.",
    instrucao: "Toque nas paradas na ORDEM certa",
    pergunta: "Como a alface chega até a sua casa?",
    paradas: [
      {
        id: "fazenda",
        emoji: "🌾",
        rotulo: "Fazenda",
        descricao: "A alface nasce e cresce na zona rural, na horta da fazenda.",
      },
      {
        id: "estrada",
        emoji: "🛣️",
        rotulo: "Estrada",
        descricao: "O caminhão pega a estrada que liga o campo até a cidade.",
      },
      {
        id: "mercado",
        emoji: "🏪",
        rotulo: "Mercado",
        descricao: "Na zona urbana, o mercado recebe a alface e coloca na prateleira.",
      },
      {
        id: "casa",
        emoji: "🏠",
        rotulo: "Sua casa",
        descricao: "A família compra a alface e leva pra casa — pronto pro almoço!",
      },
    ],
    ordemCerta: ["fazenda", "estrada", "mercado", "casa"],
    feedbackAcerto: "Caminho completo! Do campo até a mesa, sem pular nenhuma parada.",
    feedbackErro:
      "Essa não é a próxima parada. Pensa: onde a alface está agora e pra onde ela vai depois?",
    falaFinal:
      "Viu como campo e cidade dependem um do outro? Sem a fazenda não tem alface. Sem a estrada, ela não chega. Sem o mercado, a família não encontra.",
  },
  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Agora é sua vez, explorador! Eu vou ficar CALADA. Você lê o Diário do Cartógrafo com seus próprios olhos e vai TOCANDO nas palavras importantes conforme for lendo. Assim eu sei que você entendeu.",
    tituloLivro: "📔 Diário do Cartógrafo",
    subtitulo: "Página 3 — O nosso Município",
    paragrafos: [
      {
        id: "p1",
        texto:
          "O município é o pedaço da terra onde a gente mora. Ele tem UMA prefeitura só e é comandado por um prefeito. Dentro dele cabem casas, escolas, praças, plantações e rios.",
        chaves: ["município", "prefeitura", "prefeito"],
      },
      {
        id: "p2",
        texto:
          "Toda cidade fica na zona urbana. Ali as casas ficam bem juntinhas, tem ruas de asfalto, prédios e semáforos. É onde a maioria das pessoas do município mora e trabalha.",
        chaves: ["zona urbana", "asfalto"],
      },
      {
        id: "p3",
        texto:
          "Já a zona rural é o campo. Ali tem plantação, sítio, fazenda, animais e muito verde. É de lá que sai grande parte da comida que chega até o mercado da cidade.",
        chaves: ["zona rural", "campo", "plantação"],
      },
      {
        id: "p4",
        texto:
          "Todo município tem uma fronteira. Ela é uma linha imaginária que marca onde acaba o nosso município e começa outro, com outra prefeitura. Passou da placa, mudou de município!",
        chaves: ["fronteira", "linha imaginária"],
      },
    ],
    falaFinal:
      "Leitura de cartógrafo profissional! Você já sabe explicar o município SEM ajuda: prefeitura, zona urbana, zona rural e fronteira. Guarda essas palavras — vamos usar no minijogo agora.",
  },
  cena09_minijogo: {
    tipo: "fronteirasVivas",
    aurora:
      "Chegou o minijogo do cartógrafo! Você vai ver DOIS municípios grudados. Sua missão é arrastar a LINHA PONTILHADA até o lugar certo da fronteira. Fica esperto na pista — pode ser um rio, uma placa ou um muro!",
    instrucao: "Arraste a linha 🚧 até a fronteira e toque em MARCAR FRONTEIRA",
    rodadas: [
      {
        id: "r1",
        municipioA: {
          nome: "Riacho Doce",
          emoji: "🏙️",
          cor: "from-sky-500 to-indigo-700",
        },
        municipioB: {
          nome: "Serra Verde",
          emoji: "🌾",
          cor: "from-lime-500 to-emerald-700",
        },
        pistaEmoji: "🌊",
        pistaRotulo: "rio",
        xCerto: 55,
        tolerancia: 6,
        feedbackAcerto:
          "Perfeito! O RIO separa Riacho Doce de Serra Verde — a fronteira passa em cima do rio.",
        feedbackErro:
          "Olha a pista: o rio 🌊 marca onde um município acaba e o outro começa. Puxa a linha até ele.",
      },
      {
        id: "r2",
        municipioA: {
          nome: "Vila do Sol",
          emoji: "🌻",
          cor: "from-amber-500 to-orange-600",
        },
        municipioB: {
          nome: "Bosque Azul",
          emoji: "🌲",
          cor: "from-emerald-600 to-teal-800",
        },
        pistaEmoji: "🪧",
        pistaRotulo: "placa",
        xCerto: 40,
        tolerancia: 6,
        feedbackAcerto:
          "Isso! A PLACA 🪧 avisa o motorista: passou daqui, mudou de município. É a fronteira oficial.",
        feedbackErro:
          "A placa 🪧 na beira da estrada é quem avisa que trocou de município. Leva a linha até a placa.",
      },
      {
        id: "r3",
        municipioA: {
          nome: "Alto do Morro",
          emoji: "⛰️",
          cor: "from-stone-500 to-stone-800",
        },
        municipioB: {
          nome: "Campo Novo",
          emoji: "🚜",
          cor: "from-yellow-500 to-lime-700",
        },
        pistaEmoji: "🧱",
        pistaRotulo: "muro",
        xCerto: 68,
        tolerancia: 6,
        feedbackAcerto:
          "Boa! O MURO 🧱 aqui virou o marco: de um lado, Alto do Morro; do outro, Campo Novo.",
        feedbackErro:
          "Repara no muro 🧱 — ele é o marco da fronteira nessa rodada. Arraste a linha até bater nele.",
      },
    ],
    falaFinal:
      "Cartógrafo dos bons! Fronteira NÃO é uma linha visível no chão — é o marco combinado (rio, placa, muro) que separa DOIS municípios. Cada um com sua prefeitura e seu prefeito.",
  },
  cena10_revisao: {
    tipo: "placeholder",
    titulo: "Pizza do Município",
    descricao: "Pizza clicável (urbana × rural) que fala % ao tocar.",
  },
  cena11_avaliacao: {
    tipo: "placeholder",
    titulo: "Selo do Atlas",
    descricao: "Adicionar página no Atlas Municipal — insígnia ‘Mestre dos Mapas e Fronteiras’.",
  },

  recompensa: { xp: 100, moedas: 20, medalha: "Cartógrafo Iniciante" },
};
