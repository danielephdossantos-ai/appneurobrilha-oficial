import type { AulaGeoV1 } from "../../types";
import imgPiramides from "@/assets/historia-6ano/u3-piramides-egito.jpg";
import imgHamurabi from "@/assets/historia-6ano/u3-hamurabi.jpg";
import imgTabua from "@/assets/historia-6ano/u3-tabua-cuneiforme.jpg";
import imgNilo from "@/assets/historia-6ano/u3-nilo-canais.jpg";
import imgCrescente from "@/assets/historia-6ano/u3-infografico-crescente.jpg";

export const aula01: AulaGeoV1 = {
  slug: "aula-01-civilizacoes-hidraulicas",
  titulo: "Neolítico, Mesopotâmia e Egito",
  iconeTrilha: "🏺",
  bncc: ["EF06HI05", "EF06HI06"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgPiramides,
    imagemDestaqueUrl: imgCrescente,
    aurora:
      "Pirâmides do Egito. Estela do Código de Hamurabi. Tabuletas cuneiformes da Suméria. Três civilizações nasceram em beira de rio — Nilo, Tigre e Eufrates. Não foi coincidência: onde tinha ÁGUA e TERRA FÉRTIL, surgiu civilização.",
    falaFinal:
      "Nesta aula você desbloqueia o Fragmento 3 do Códice: O Selo do Escriba Real.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "As primeiras grandes cidades da história surgiram em regiões específicas do planeta. O que essas regiões tinham em comum?",
    pergunta: "Por que as primeiras civilizações nasceram onde nasceram?",
    fotoUrl: imgNilo,
    opcoes: [
      {
        id: "rios",
        titulo: "GRANDES RIOS + TERRA FÉRTIL",
        subtitulo: "Nilo, Tigre, Eufrates, Indo, Amarelo",
        emoji: "🌊",
        cor: "from-cyan-800 to-slate-950",
      },
      {
        id: "sorte",
        titulo: "PURA SORTE",
        subtitulo: "aconteceu por acaso em qualquer lugar",
        emoji: "❌",
        cor: "from-amber-900 to-slate-950",
      },
    ],
    respostaCerta: "rios",
    feedbackAcerto:
      "Correto. As civilizações HIDRÁULICAS nasceram em vales de grandes rios porque a água + a terra fértil permitiam agricultura em larga escala — o que sustenta cidades.",
    feedbackErro:
      "Não é sorte. É GEOGRAFIA. Todas as primeiras civilizações da história nasceram em vales de grandes rios: Egito (Nilo), Mesopotâmia (Tigre/Eufrates), Índia (Indo), China (Amarelo).",
    falaFinal:
      "Guarde: onde tem RIO + TERRA FÉRTIL, nasce civilização.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Quatro conceitos-chave das primeiras civilizações urbanas.",
    instrucao: "",
    cadernos: [
      {
        id: "civ",
        capa: "Civilização Hidráulica",
        emoji: "🌊",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgNilo,
        conteudo:
          "CIVILIZAÇÃO HIDRÁULICA é toda sociedade antiga que dependia do CONTROLE DA ÁGUA pra sobreviver. Construíam canais, diques, reservatórios pra irrigar plantações em beira de rio.",
        exemplo:
          "Exemplo: o Egito construiu canais que distribuíam a água da cheia anual do Nilo pros campos de trigo. Sem esse controle, o deserto engolia tudo.",
      },
      {
        id: "escrita",
        capa: "Escrita",
        emoji: "📜",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgTabua,
        conteudo:
          "ESCRITA surgiu por volta de 3500 a.C. na Suméria (CUNEIFORME) e no Egito (HIERÓGLIFOS). Nasceu pra REGISTRAR estoques, dívidas e leis — não pra poesia.",
        exemplo:
          "Exemplo: as primeiras tabuletas cuneiformes anotam quanto grão cada agricultor devia ao templo. Contabilidade primeiro, literatura depois.",
      },
      {
        id: "estado",
        capa: "Estado",
        emoji: "👑",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgPiramides,
        conteudo:
          "ESTADO é a estrutura de poder que organiza uma sociedade grande: rei, funcionários, exército, cobrança de impostos, leis. Só existe onde tem excedente agrícola pra sustentar não-agricultores.",
        exemplo:
          "Exemplo: o faraó no Egito era rei, sacerdote e considerado divindade. Comandava obras gigantes como as pirâmides usando milhares de trabalhadores organizados.",
      },
      {
        id: "lei",
        capa: "Código Escrito",
        emoji: "⚖️",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgHamurabi,
        conteudo:
          "CÓDIGO ESCRITO de leis é a organização das regras num texto público. Antes, quem julgava era o rei ou o costume — o que gerava injustiça. Escrever a lei limita o poder.",
        exemplo:
          "Exemplo: o CÓDIGO DE HAMURABI (Babilônia, ~1750 a.C.) tem 282 leis gravadas em pedra. É famoso pela regra 'olho por olho, dente por dente'.",
      },
    ],
    falaFinal:
      "Civilização + Escrita + Estado + Lei. Base das sociedades urbanas antigas.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Infográfico do CRESCENTE FÉRTIL — a região onde nasceu a agricultura, a escrita e as primeiras cidades. Toque nos pontos.",
    instrucao: "Toque nos pontos do infográfico",
    mapaUrl: imgCrescente,
    pontos: [
      {
        id: "mes",
        x: 65,
        y: 45,
        emoji: "🏛️",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgTabua,
        titulo: "1. MESOPOTÂMIA",
        texto:
          "Entre os rios Tigre e Eufrates (atual Iraque). Sumérios, acádios, babilônios, assírios. Cidades-estado como Ur, Uruk e Babilônia. Berço da escrita cuneiforme.",
      },
      {
        id: "egi",
        x: 30,
        y: 60,
        emoji: "🔺",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgPiramides,
        titulo: "2. EGITO",
        texto:
          "Ao longo do rio Nilo. Faraós, hieróglifos, pirâmides, mumificação. Império unificado por mais de 3 mil anos.",
      },
      {
        id: "fer",
        x: 45,
        y: 25,
        emoji: "🌾",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgNilo,
        titulo: "3. AGRICULTURA IRRIGADA",
        texto:
          "Canais, diques e represas transformavam vales de rio em campos ricos. Sustentavam populações urbanas de dezenas de milhares.",
      },
      {
        id: "esc",
        x: 75,
        y: 65,
        emoji: "📜",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgTabua,
        titulo: "4. NASCE A ESCRITA",
        texto:
          "~3500 a.C. na Suméria. Cuneiforme em tabuletas de argila. Registrava estoques, dívidas, contratos e depois leis e literatura.",
      },
    ],
    falaFinal:
      "Crescente Fértil = nascimento da agricultura, das cidades e da escrita. Marco zero da história.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas de escriba real.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual rio dava vida à civilização egípcia?",
        fotoUrl: imgNilo,
        cards: [
          { id: "n", emoji: "🌊", titulo: "Nilo", cor: "from-teal-600 to-slate-900" },
          { id: "a", emoji: "🌊", titulo: "Amazonas", cor: "from-cyan-600 to-slate-900" },
          { id: "t", emoji: "🌊", titulo: "Tâmisa", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "n",
        feedbackAcerto: "Correto. O NILO cheia anual fertilizava as margens e sustentava o Egito.",
        feedbackErro: "É o NILO. O rio mais importante do Egito antigo.",
      },
      {
        id: "q2",
        pergunta: "Qual foi a primeira escrita da humanidade?",
        fotoUrl: imgTabua,
        cards: [
          { id: "c", emoji: "📜", titulo: "Cuneiforme (Suméria)", cor: "from-amber-600 to-slate-900" },
          { id: "l", emoji: "🔤", titulo: "Alfabeto latino", cor: "from-teal-600 to-slate-900" },
          { id: "e", emoji: "💻", titulo: "Emoji", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "c",
        feedbackAcerto: "Correto. CUNEIFORME, ~3500 a.C., feita com estilete em argila.",
        feedbackErro: "CUNEIFORME, da Suméria. O alfabeto latino veio muito depois.",
      },
      {
        id: "q3",
        pergunta: "O Código de Hamurabi é famoso por qual princípio?",
        fotoUrl: imgHamurabi,
        cards: [
          {
            id: "o",
            emoji: "⚖️",
            titulo: "Olho por olho, dente por dente",
            cor: "from-teal-600 to-slate-900",
          },
          {
            id: "p",
            emoji: "❤️",
            titulo: "Ame o próximo como a ti mesmo",
            cor: "from-amber-600 to-slate-900",
          },
          {
            id: "l",
            emoji: "💰",
            titulo: "Todos ganham igual",
            cor: "from-slate-600 to-slate-900",
          },
        ],
        correta: "o",
        feedbackAcerto:
          "Correto. Lei de talião: quem causou o mal sofria mal proporcional. Duro, mas escrito e público.",
        feedbackErro:
          "É 'olho por olho, dente por dente'. Lei de TALIÃO — pena proporcional ao crime.",
      },
    ],
    falaFinal: "Radar afiado. Você já reconhece as marcas das primeiras civilizações.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois filtros sobre o Crescente Fértil. Um destaca as sociedades PODEROSAS; outro os TRABALHADORES invisíveis.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgCrescente,
    camadas: [
      {
        id: "elite",
        rotulo: "Elites e templos",
        emoji: "👑",
        cor: "from-amber-700 to-slate-900",
        rect: { x: 25, y: 20, w: 50, h: 35 },
        descricao:
          "Faraós, sacerdotes, escribas, altos funcionários. Controlavam terra, escrita, ritual e cobrança de impostos. Enterrados em pirâmides e tumbas monumentais.",
      },
      {
        id: "camp",
        rotulo: "Camponeses e escravos",
        emoji: "⚒️",
        cor: "from-cyan-700 to-slate-900",
        rect: { x: 15, y: 55, w: 70, h: 40 },
        descricao:
          "Maioria da população. Cultivavam a terra, construíam obras, sustentavam a elite com impostos e trabalho forçado. Raramente aparecem nos registros oficiais.",
      },
    ],
    falaFinal:
      "As pirâmides são incríveis — mas foram construídas por dezenas de milhares de trabalhadores anônimos.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Ordene a linha do tempo da formação das primeiras civilizações.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Passos até a civilização",
    paradas: [
      {
        id: "agri",
        emoji: "🌾",
        rotulo: "1. Revolução Agrícola",
        fotoUrl: imgNilo,
        descricao: "~10 mil a.C. — humanos domesticam plantas e animais.",
      },
      {
        id: "ald",
        emoji: "🏘️",
        rotulo: "2. Aldeias sedentárias",
        fotoUrl: imgCrescente,
        descricao: "Vida fixa perto das plantações, cerâmica, tecelagem.",
      },
      {
        id: "cid",
        emoji: "🏛️",
        rotulo: "3. Primeiras cidades",
        fotoUrl: imgTabua,
        descricao: "~4000 a.C. — Uruk, Ur, cidades-estado sumérias.",
      },
      {
        id: "esc",
        emoji: "📜",
        rotulo: "4. Escrita e Estado",
        fotoUrl: imgHamurabi,
        descricao: "~3500 a.C. — cuneiforme, registros, leis, impostos.",
      },
    ],
    ordemCerta: ["agri", "ald", "cid", "esc"],
    feedbackAcerto: "Perfeito. Agricultura → aldeia → cidade → escrita/Estado. Cadeia lógica.",
    feedbackErro: "Essa não é a próxima. Sem agricultura, não tem excedente. Sem excedente, não tem cidade.",
    falaFinal: "Você acabou de descrever a formação das primeiras sociedades urbanas.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez. Fragmento 3 do Códice. Toque nos termos técnicos.",
    tituloLivro: "📜 Códice dos Impérios Perdidos",
    subtitulo: "Fragmento 3 — O Selo do Escriba Real",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Por volta de 10 mil a.C., no CRESCENTE FÉRTIL, humanos domesticaram trigo e cevada. Foi a REVOLUÇÃO AGRÍCOLA. O excedente de alimento permitiu que algumas pessoas parassem de plantar e virassem sacerdotes, artesãos e guerreiros.",
        chaves: ["Crescente Fértil"],
        definicoes: {
          "Crescente Fértil":
            "Região do Oriente Médio em forma de arco (do Egito ao Iraque) onde nasceu a agricultura, a escrita e as primeiras cidades.",
        },
        fotoUrl: imgCrescente,
      },
      {
        id: "p2",
        texto:
          "Na MESOPOTÂMIA, entre os rios Tigre e Eufrates, surgiram as primeiras cidades-estado: Ur, Uruk, Babilônia. Os sumérios inventaram a ESCRITA CUNEIFORME por volta de 3500 a.C., pra registrar estoques e dívidas em tabuletas de argila.",
        chaves: ["Mesopotâmia", "Escrita Cuneiforme"],
        definicoes: {
          Mesopotâmia:
            "Palavra grega: 'terra entre rios'. Região do atual Iraque, entre Tigre e Eufrates.",
          "Escrita Cuneiforme":
            "Primeira escrita do mundo, feita com um estilete pressionando marcas em forma de cunha em argila mole.",
        },
        fotoUrl: imgTabua,
      },
      {
        id: "p3",
        texto:
          "No EGITO, o rio NILO transbordava todo ano e fertilizava as margens. Isso sustentou uma civilização unificada por mais de 3 mil anos, governada por FARAÓS considerados divinos, com hieróglifos, mumificação e pirâmides monumentais.",
        chaves: ["Faraós"],
        definicoes: {
          Faraós:
            "Reis do Egito antigo. Concentravam poder político, militar e religioso. Considerados encarnações do deus Hórus.",
        },
        fotoUrl: imgPiramides,
      },
      {
        id: "p4",
        texto:
          "O CÓDIGO DE HAMURABI, na Babilônia (~1750 a.C.), é o primeiro grande código de leis escrito conhecido. Suas 282 regras cobriam comércio, família e crimes — famosa é a lei do TALIÃO: 'olho por olho, dente por dente'.",
        chaves: ["Código de Hamurabi"],
        definicoes: {
          "Código de Hamurabi":
            "Conjunto de 282 leis do rei Hamurabi da Babilônia, gravadas em uma estela de pedra. Um dos primeiros códigos escritos da história.",
        },
        fotoUrl: imgHamurabi,
      },
    ],
    falaFinal:
      "Leitura concluída. Você já explica, com vocabulário técnico, o nascimento das primeiras civilizações urbanas.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Missão de curador de museu. Classifique cada peça em MESOPOTÂMIA ou EGITO.",
    instrucao: "⏱️ Toque na civilização correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "me", emoji: "🏛️", rotulo: "Mesopotâmia" },
      { id: "eg", emoji: "🔺", rotulo: "Egito" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Pirâmides de Gizé", emoji: "🔺", cor: "from-teal-700 to-slate-900" },
        municipioB: { nome: "Túmulos monumentais", emoji: "🏛️", cor: "from-teal-600 to-slate-900" },
        contexto: "Construções de pedra para faraós.",
        pecaCertaId: "eg",
        feedbackAcerto: "Correto. Pirâmides = EGITO.",
        feedbackErro: "Pirâmides ficam no EGITO.",
      },
      {
        id: "r2",
        municipioA: { nome: "Tabuletas cuneiformes", emoji: "📜", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Escrita em argila", emoji: "📝", cor: "from-amber-600 to-slate-900" },
        contexto: "Registros comerciais e leis em barro.",
        pecaCertaId: "me",
        feedbackAcerto: "Correto. Cuneiforme = MESOPOTÂMIA (Suméria).",
        feedbackErro: "Cuneiforme é da MESOPOTÂMIA.",
      },
      {
        id: "r3",
        municipioA: { nome: "Hieróglifos em templo", emoji: "🔤", cor: "from-cyan-700 to-slate-900" },
        municipioB: { nome: "Escrita com desenhos", emoji: "✍️", cor: "from-cyan-600 to-slate-900" },
        contexto: "Símbolos gravados nas paredes dos templos.",
        pecaCertaId: "eg",
        feedbackAcerto: "Correto. Hieróglifos = EGITO.",
        feedbackErro: "Hieróglifos são a escrita do EGITO.",
      },
      {
        id: "r4",
        municipioA: { nome: "Código de Hamurabi", emoji: "⚖️", cor: "from-slate-700 to-slate-900" },
        municipioB: { nome: "Leis em estela de pedra", emoji: "📜", cor: "from-slate-600 to-slate-900" },
        contexto: "282 leis gravadas em pedra pelo rei da Babilônia.",
        pecaCertaId: "me",
        feedbackAcerto: "Correto. Hamurabi = MESOPOTÂMIA (Babilônia).",
        feedbackErro: "Hamurabi era rei da BABILÔNIA — na Mesopotâmia.",
      },
      {
        id: "r5",
        municipioA: { nome: "Múmias e sarcófagos", emoji: "⚱️", cor: "from-teal-700 to-slate-900" },
        municipioB: { nome: "Preparação para a vida após a morte", emoji: "🌟", cor: "from-teal-600 to-slate-900" },
        contexto: "Corpos preservados por milênios.",
        pecaCertaId: "eg",
        feedbackAcerto: "Correto. Mumificação = EGITO.",
        feedbackErro: "Múmias são do EGITO — crença na vida após a morte.",
      },
      {
        id: "r6",
        municipioA: { nome: "Ziggurat", emoji: "🏛️", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Templo em degraus", emoji: "🕌", cor: "from-amber-600 to-slate-900" },
        contexto: "Templo religioso em forma de pirâmide escalonada.",
        pecaCertaId: "me",
        feedbackAcerto: "Correto. Ziggurats = MESOPOTÂMIA.",
        feedbackErro: "Ziggurats são templos MESOPOTÂMICOS.",
      },
    ],
    falaFinal:
      "6 rodadas! Você já distingue Mesopotâmia de Egito como um curador de museu.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Pizza da população egípcia. Proporção entre ELITE (faraó, sacerdotes, funcionários) e CAMPONESES/ARTESÃOS.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgPiramides,
    fatias: [
      {
        id: "eli",
        rotulo: "Elite (~10%)",
        emoji: "👑",
        percentual: 10,
        cor: "#b45309",
        descricao:
          "Faraó, familiares reais, sacerdotes, escribas, altos funcionários e militares. Controlavam terra, ritual e escrita.",
        exemplos: ["👑 Faraó", "🙏 Sacerdotes", "📜 Escribas"],
      },
      {
        id: "cam",
        rotulo: "Trabalhadores (~90%)",
        emoji: "⚒️",
        percentual: 90,
        cor: "#0f766e",
        descricao:
          "Camponeses, artesãos, servos, escravos. Sustentavam com trabalho e impostos toda a estrutura da civilização.",
        exemplos: ["🌾 Camponeses", "🪨 Construtores", "🛠️ Artesãos"],
      },
    ],
    falaFinal: "Poucos comandavam. Muitos sustentavam. Padrão que se repete.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Três perguntas finais pra desbloquear o Selo do Escriba Real.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgHamurabi,
    perguntas: [
      {
        id: "av1",
        pergunta: "Por que as primeiras civilizações nasceram em vales de grandes rios?",
        opcoes: [
          { id: "a", texto: "Por causa da agricultura irrigada e do excedente de alimento.", correta: true },
          { id: "b", texto: "Por sorte, sem relação com geografia.", correta: false },
          { id: "c", texto: "Por causa do turismo.", correta: false },
        ],
        feedbackAcerto: "Correto. Água + terra fértil = agricultura em escala = cidades.",
        feedbackErro: "Foi por causa da AGRICULTURA IRRIGADA, que exige rio grande.",
      },
      {
        id: "av2",
        pergunta: "Qual foi a primeira ESCRITA da humanidade?",
        opcoes: [
          { id: "a", texto: "Emoji.", correta: false },
          { id: "b", texto: "Cuneiforme, criada pelos sumérios.", correta: true },
          { id: "c", texto: "Alfabeto grego.", correta: false },
        ],
        feedbackAcerto: "Correto. CUNEIFORME, na Suméria, ~3500 a.C.",
        feedbackErro: "CUNEIFORME, na Suméria. Alfabeto grego veio milênios depois.",
      },
      {
        id: "av3",
        pergunta: "O que é o CÓDIGO DE HAMURABI?",
        opcoes: [
          { id: "a", texto: "Um livro de receitas.", correta: false },
          { id: "b", texto: "Um dos primeiros códigos de leis escritos, na Babilônia.", correta: true },
          { id: "c", texto: "Um monumento romano.", correta: false },
        ],
        feedbackAcerto: "Correto. 282 leis gravadas em pedra, ~1750 a.C., Babilônia.",
        feedbackErro: "É o primeiro grande CÓDIGO DE LEIS escrito, do rei Hamurabi da Babilônia.",
      },
    ],
    selo: {
      nome: "Selo do Escriba Real",
      subtitulo: "Fragmento 3 do Códice",
      emoji: "📜",
      cor: "from-amber-500 to-slate-900",
      fotoUrl: imgHamurabi,
    },
    falaFinal:
      "Fragmento 3 restaurado. Você agora entende como nasceram as primeiras cidades, a escrita e o Estado.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Selo do Escriba Real" },
};
