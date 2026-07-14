import type { AulaGeoV1 } from "../../types";
import { url as mapaMunicipio } from "@/assets/geografia-3ano/mapa-municipio.jpg.asset.json";
import { url as comunidadeRibeirinha } from "@/assets/geografia-3ano/comunidade-ribeirinha.jpg.asset.json";
import { url as comunidadeIndigena } from "@/assets/geografia-3ano/comunidade-indigena.jpg.asset.json";
import { url as vistaCasa } from "@/assets/geografia-3ano/vista-de-cima-casa.jpg.asset.json";
import { url as feira } from "@/assets/geografia-3ano/feira-livre-bairro.jpg.asset.json";
import { url as sitio } from "@/assets/geografia-3ano/colheita-sitio-hortalicas.jpg.asset.json";
/**
 * Geografia · 2º Ano (v2) · Unidade 1 · Aula 01
 * "Os Lugares Onde Vivemos" — EF02GE01
 * Player AulaGeoV1, linguagem 2º ano (7 anos), tom lúdico do 3º ano.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-lugares-onde-vivemos",
  titulo: "O Lugar Onde Eu Vivo",
  iconeTrilha: "🏡",
  bncc: ["EF02GE01"],
  duracaoMin: 18,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a LUPA sobre o mapa. Cada família mora num LUGAR diferente — e cada lugar tem um tipo de casa.",
    mapaUrl: mapaMunicipio,
    aurora:
      "Oi, Brilha! Hoje eu virei uma cartógrafa e trouxe um MAPA especial. Cartógrafo é quem estuda os lugares. Pega a lupa e vem comigo descobrir onde as pessoas moram!",
    falaFinal:
      "Viu quanta coisa? Cada pontinho é uma FAMÍLIA morando de um jeito: apartamento, casa, sítio, casa no rio. Todo lugar é ESPECIAL!",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes de abrir tudo, quero seu palpite, pequeno cartógrafo! Qual dessas frases você acha que é VERDADE?",
    pergunta: "Como são os lugares onde as pessoas moram?",
    opcoes: [
      {
        id: "todos-iguais",
        titulo: "Todos iguais",
        subtitulo: "só apartamento",
        emoji: "🏢",
        cor: "from-slate-400 to-slate-600",
      },
      {
        id: "muitos-tipos",
        titulo: "Muitos tipos",
        subtitulo: "casa, sítio, apartamento, casa no rio…",
        emoji: "🏡🌾🏢",
        cor: "from-emerald-400 to-sky-500",
      },
    ],
    respostaCerta: "muitos-tipos",
    feedbackAcerto:
      "Isso mesmo! Cada família mora do jeito que combina com o LUGAR dela.",
    feedbackErro:
      "Quase! Nem todo mundo mora em apartamento. Cada lugar tem um tipo de casa.",
    falaFinal:
      "Guarda esse palpite. Você vai VER com seus olhos: cada família escolhe a casa que combina com o lugar.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Meu caderninho de cartógrafo tem 4 palavras mágicas de hoje. Toca em cada um pra abrir!",
    instrucao: "Toque em cada caderno",
    cadernos: [
      {
        id: "lugar",
        capa: "Lugar",
        emoji: "📍",
        cor: "from-rose-400 to-pink-600",
        conteudo:
          "É o ESPAÇO onde a gente vive. Sua casa, sua rua, sua escola — tudo isso é um LUGAR.",
        exemplo: "Fala o nome do seu lugar: eu moro em ______!",
      },
      {
        id: "moradia",
        capa: "Moradia",
        emoji: "🏡",
        cor: "from-amber-400 to-orange-600",
        conteudo:
          "É a CASA onde uma família vive. Pode ser casa, apartamento, sítio, oca ou casa no rio.",
        exemplo: "A minha MORADIA fica em... (na cidade? no campo?)",
      },
      {
        id: "bairro",
        capa: "Bairro",
        emoji: "🏘️",
        cor: "from-sky-400 to-indigo-600",
        conteudo:
          "É o pedaço da cidade onde muitas famílias moram juntas, com padaria, praça e escola perto.",
        exemplo: "Meu BAIRRO se chama... (pergunta pro adulto!)",
      },
      {
        id: "vizinho",
        capa: "Vizinho",
        emoji: "👋",
        cor: "from-emerald-400 to-teal-600",
        conteudo:
          "É a pessoa que mora PERTO da sua casa — na porta do lado, no andar de cima, na casa em frente.",
        exemplo: "O nome do meu VIZINHO é... (você lembra?)",
      },
    ],
    falaFinal:
      "Prontinho! Você já tem as 4 palavras do cartógrafo. Vamos usar TODAS agora!",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Agora eu te apresento o MAPA de verdade. Toca em cada balão que eu conto o que tem lá!",
    instrucao: "Toque nos balões pra ouvir a Aurora",
    mapaUrl: mapaMunicipio,
    pontos: [
      {
        id: "predio",
        x: 72,
        y: 55,
        emoji: "🏢",
        cor: "from-sky-400 to-indigo-500",
        titulo: "Apartamento na cidade",
        texto:
          "Aqui a família mora num APARTAMENTO alto. Perto tem padaria, escola e ônibus. É comum na CIDADE.",
        fotoUrl: vistaCasa,
      },
      {
        id: "sitio",
        x: 20,
        y: 30,
        emoji: "🌾",
        cor: "from-lime-400 to-emerald-600",
        titulo: "Casa no sítio",
        texto:
          "Essa família mora num SÍTIO — casa espaçosa, quintal grande, galinhas e plantação. É no CAMPO.",
        fotoUrl: sitio,
      },
      {
        id: "rio",
        x: 40,
        y: 72,
        emoji: "🚣",
        cor: "from-cyan-400 to-blue-600",
        titulo: "Casa no rio",
        texto:
          "Essa casa fica em cima do RIO! É uma casa RIBEIRINHA, feita de madeira, com o barco na porta.",
        fotoUrl: comunidadeRibeirinha,
      },
      {
        id: "oca",
        x: 85,
        y: 20,
        emoji: "🏹",
        cor: "from-amber-400 to-rose-600",
        titulo: "Aldeia indígena",
        texto:
          "Aqui uma família indígena mora numa OCA — casa da tradição, feita de palha e madeira, no meio da floresta.",
        fotoUrl: comunidadeIndigena,
      },
    ],
    falaFinal:
      "Cada família mora onde COMBINA com o lugar. Nenhuma moradia é melhor que a outra — só diferente!",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Radar do cartógrafo LIGADO! 3 perguntas e o radar pousa no card certo. Bora?",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Quem mora numa casa em cima do rio, com barco na porta?",
        cards: [
          { id: "ribeirinha", emoji: "🚣", titulo: "Família Ribeirinha", cor: "from-cyan-400 to-blue-600" },
          { id: "predio", emoji: "🏢", titulo: "Família de apartamento", cor: "from-sky-400 to-indigo-500" },
          { id: "sitio", emoji: "🌾", titulo: "Família do sítio", cor: "from-lime-400 to-emerald-600" },
        ],
        correta: "ribeirinha",
        feedbackAcerto: "Isso! RIBEIRINHA — família que mora em cima do rio.",
        feedbackErro: "Casa na água, barco na porta = família RIBEIRINHA.",
      },
      {
        id: "q2",
        pergunta: "Onde tem prédio alto, elevador e muitos vizinhos por andar?",
        cards: [
          { id: "sitio", emoji: "🌾", titulo: "No sítio", cor: "from-lime-400 to-emerald-600" },
          { id: "apto", emoji: "🏢", titulo: "No apartamento", cor: "from-sky-400 to-indigo-500" },
          { id: "oca", emoji: "🏹", titulo: "Na oca", cor: "from-amber-400 to-rose-600" },
        ],
        correta: "apto",
        feedbackAcerto: "Boa! Prédio + elevador = APARTAMENTO.",
        feedbackErro: "Prédio alto com elevador é o APARTAMENTO.",
      },
      {
        id: "q3",
        pergunta: "Qual dessas coisas é um VIZINHO?",
        cards: [
          { id: "vizinho", emoji: "👋", titulo: "Quem mora do lado", cor: "from-emerald-400 to-teal-600" },
          { id: "primo", emoji: "🧒", titulo: "Um primo longe", cor: "from-purple-400 to-pink-500" },
          { id: "prof", emoji: "🧑‍🏫", titulo: "A professora", cor: "from-amber-400 to-orange-500" },
        ],
        correta: "vizinho",
        feedbackAcerto: "Isso! VIZINHO é quem mora PERTO da gente.",
        feedbackErro: "Vizinho é quem mora perto — na casa do lado, no andar de cima.",
      },
    ],
    falaFinal: "Radar afiado! Você já reconhece cada tipo de moradia!",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Cada município tem CAMADAS. Vou dar dois interruptores: um acende as MORADIAS DA CIDADE e outro as MORADIAS DO CAMPO. Liga os dois!",
    instrucao: "Toque nos interruptores",
    mapaUrl: mapaMunicipio,
    camadas: [
      {
        id: "cidade",
        rotulo: "Moradias da Cidade",
        emoji: "🏙️",
        cor: "from-sky-500 to-indigo-600",
        rect: { x: 55, y: 40, w: 40, h: 45 },
        descricao: "Prédios, casas grudadas, ruas com asfalto. Muita gente morando junto.",
      },
      {
        id: "campo",
        rotulo: "Moradias do Campo",
        emoji: "🌾",
        cor: "from-lime-500 to-emerald-700",
        rect: { x: 5, y: 15, w: 45, h: 55 },
        descricao: "Sítios, fazendas, casas ribeirinhas, aldeias. Casa espalhada com muito verde.",
      },
    ],
    falaFinal: "Município tem os DOIS: moradias da cidade E do campo, tudo junto!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Vamos montar um dia da CRIANÇA RIBEIRINHA! Toca nas paradas na ordem certa.",
    instrucao: "Toque na ordem certa",
    pergunta: "Como é o dia da criança ribeirinha?",
    paradas: [
      { id: "acorda", emoji: "🌅", rotulo: "Acorda na casa do rio", descricao: "O sol nasce e reflete na água. A casa balança devagarinho." },
      { id: "barco", emoji: "🛶", rotulo: "Pega o barco escolar", descricao: "Vai pra escola de BARCO, porque não tem rua." },
      { id: "escola", emoji: "🏫", rotulo: "Aula na escola do rio", descricao: "Aprende matemática, português e sobre o rio!" },
      { id: "volta", emoji: "🐟", rotulo: "Volta pescando com o pai", descricao: "Depois da aula, ajuda a pescar o jantar." },
    ],
    ordemCerta: ["acorda", "barco", "escola", "volta"],
    feedbackAcerto: "Dia completo! Todo ribeirinho vive assim.",
    feedbackErro: "Pensa: primeiro acorda, depois vai pra escola, aula, e depois volta.",
    falaFinal: "Viu? Cada moradia tem uma ROTINA diferente. E cada rotina é linda do seu jeito.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Agora é sua vez, cartógrafo! Vou ficar CALADA. Você lê o Diário e vai tocando nas palavras importantes conforme lê.",
    tituloLivro: "📔 Diário do Cartógrafo",
    subtitulo: "Página 1 — Os Lugares Onde Vivemos",
    paragrafos: [
      {
        id: "p1",
        texto:
          "O LUGAR é o espaço onde a gente vive todo dia. Cada família tem uma MORADIA que combina com o lugar dela.",
        chaves: ["lugar", "moradia"],
      },
      {
        id: "p2",
        texto:
          "Na cidade tem muito apartamento e casa grudadinha. No campo tem sítio, fazenda e muito verde ao redor.",
        chaves: ["apartamento", "sítio"],
      },
      {
        id: "p3",
        texto:
          "Perto do rio tem casa RIBEIRINHA — de madeira, com o barco na porta. Na floresta tem OCA indígena, feita de palha.",
        chaves: ["ribeirinha", "oca"],
      },
      {
        id: "p4",
        texto:
          "No BAIRRO onde a gente mora, os VIZINHOS são as pessoas mais próximas: quem mora do lado, na frente, no andar de cima.",
        chaves: ["bairro", "vizinhos"],
      },
    ],
    falaFinal: "Leitura de cartógrafo! Você já explica sozinho: lugar, moradia, bairro e vizinho.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Minijogo do CARTÓGRAFO CONTRA O TEMPO! Cada rodada mostra um LUGAR e você escolhe a MORADIA que combina — antes do relógio zerar!",
    instrucao: "⏱️ Leia a pista e toque na peça certa!",
    duracaoSegundos: 15,
    pecas: [
      { id: "apto", emoji: "🏢", rotulo: "Apartamento" },
      { id: "sitio", emoji: "🌾", rotulo: "Sítio" },
      { id: "ribeirinha", emoji: "🚣", rotulo: "Casa no rio" },
      { id: "oca", emoji: "🏹", rotulo: "Oca" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Cidade Alta", emoji: "🏙️", cor: "from-sky-500 to-indigo-700" },
        municipioB: { nome: "Família 1", emoji: "👨‍👩‍👧", cor: "from-pink-400 to-rose-600" },
        contexto: "A família mora no centro da cidade, num prédio de 10 andares, com elevador.",
        pecaCertaId: "apto",
        feedbackAcerto: "Combo! Prédio alto = APARTAMENTO.",
        feedbackErro: "Prédio de 10 andares = APARTAMENTO 🏢.",
      },
      {
        id: "r2",
        municipioA: { nome: "Beira do Rio", emoji: "🌊", cor: "from-cyan-500 to-blue-700" },
        municipioB: { nome: "Família 2", emoji: "🎣", cor: "from-teal-400 to-emerald-600" },
        contexto: "A casa fica em cima da água. Tem um barco amarrado na varanda pra ir pra escola.",
        pecaCertaId: "ribeirinha",
        feedbackAcerto: "Boa! Casa na água + barco = RIBEIRINHA.",
        feedbackErro: "Casa em cima da água é a RIBEIRINHA 🚣.",
      },
      {
        id: "r3",
        municipioA: { nome: "Zona Rural", emoji: "🌾", cor: "from-lime-500 to-emerald-700" },
        municipioB: { nome: "Família 3", emoji: "👩‍🌾", cor: "from-amber-400 to-orange-600" },
        contexto: "A família tem galinha no quintal, planta milho e tem espaço enorme pra correr.",
        pecaCertaId: "sitio",
        feedbackAcerto: "Isso! Quintal grande + galinha = SÍTIO.",
        feedbackErro: "Casa com galinha e plantação é o SÍTIO 🌾.",
      },
      {
        id: "r4",
        municipioA: { nome: "Aldeia", emoji: "🌳", cor: "from-emerald-600 to-teal-800" },
        municipioB: { nome: "Família 4", emoji: "🏹", cor: "from-amber-500 to-rose-600" },
        contexto: "Família indígena que mora na floresta, em casa de palha, com muitas famílias juntas.",
        pecaCertaId: "oca",
        feedbackAcerto: "Perfeito! Casa de palha na floresta = OCA.",
        feedbackErro: "Casa indígena de palha é a OCA 🏹.",
      },
    ],
    falaFinal: "Cartógrafo oficial! Você já sabe: cada lugar pede uma moradia diferente.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Hora de olhar o município de cima, tipo pizza. Cada fatia é um TIPO de moradia. Toca em cada uma!",
    instrucao: "🍕 Toque nas fatias",
    fatias: [
      {
        id: "urbana",
        rotulo: "Moradias na cidade",
        emoji: "🏙️",
        percentual: 60,
        cor: "#4f46e5",
        descricao: "60% das famílias moram na CIDADE — apartamentos e casas grudadinhas.",
        exemplos: ["Apartamento", "Casa geminada", "Sobrado"],
      },
      {
        id: "rural",
        rotulo: "Moradias no campo",
        emoji: "🌾",
        percentual: 40,
        cor: "#16a34a",
        descricao: "40% moram no CAMPO ou perto do rio/floresta — sítios, aldeias, ribeirinhas.",
        exemplos: ["Sítio", "Casa ribeirinha", "Oca indígena"],
      },
    ],
    falaFinal: "Cada tipo é IMPORTANTE. O município é feito de MUITAS moradias diferentes!",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Última missão, cartógrafo! 3 perguntas pra ganhar sua insígnia.",
    instrucao: "Toque na resposta certa. 1 chance!",
    perguntas: [
      {
        id: "p1",
        pergunta: "O que é uma MORADIA?",
        opcoes: [
          { id: "a", texto: "Um brinquedo grande." },
          { id: "b", texto: "A casa onde uma família mora.", correta: true },
          { id: "c", texto: "Uma escola." },
        ],
        feedbackAcerto: "Isso! MORADIA é o lugar onde a família mora.",
        feedbackErro: "MORADIA é a CASA onde uma família mora.",
      },
      {
        id: "p2",
        pergunta: "Quem mora do lado da sua casa é...",
        opcoes: [
          { id: "a", texto: "Vizinho.", correta: true },
          { id: "b", texto: "Primo." },
          { id: "c", texto: "Professor." },
        ],
        feedbackAcerto: "Boa! VIZINHO é quem mora perto.",
        feedbackErro: "Vizinho = quem mora PERTO da sua casa.",
      },
      {
        id: "p3",
        pergunta: "Uma família que mora em cima do rio é...",
        opcoes: [
          { id: "a", texto: "Família de apartamento." },
          { id: "b", texto: "Família do sítio." },
          { id: "c", texto: "Família ribeirinha.", correta: true },
        ],
        feedbackAcerto: "Exato! RIBEIRINHA vive perto do rio.",
        feedbackErro: "Casa no rio + barco = família RIBEIRINHA.",
      },
    ],
    selo: {
      nome: "Pequeno Cartógrafo dos Lugares",
      subtitulo: "Insígnia oficial — Aula 01",
      emoji: "📍",
      cor: "from-emerald-300 to-teal-500",
    },
    falaFinal: "Sua primeira insígnia está guardada! Próxima missão: descobrir como as pessoas CONVIVEM no bairro.",
  },

  recompensa: { xp: 100, moedas: 20, medalha: "Pequeno Cartógrafo" },
};
