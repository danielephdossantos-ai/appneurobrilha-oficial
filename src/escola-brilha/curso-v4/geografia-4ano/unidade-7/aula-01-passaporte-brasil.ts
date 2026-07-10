import type { AulaGeoV1 } from "../../types";
import passaporte from "@/assets/geografia-4ano/passaporte-brasil.jpg";
import mapaEstados from "@/assets/geografia-4ano/mapa-brasil-estados.jpg";
import diversidade from "@/assets/geografia-4ano/diversidade-povo-brasileiro.jpg";
import relevo from "@/assets/geografia-4ano/relevo-planalto-planicie.jpg";
import caatinga from "@/assets/geografia-4ano/bioma-caatinga.jpg";
import primario from "@/assets/geografia-4ano/setor-primario-agricultura.jpg";
import sustentavel from "@/assets/geografia-4ano/sustentabilidade-crianca.jpg";

/**
 * Geografia · 4º Ano · Unidade 7 · Aula 01
 * "Passaporte Brasil" — Consolidação de toda a jornada
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-passaporte-brasil",
  titulo: "Passaporte Brasil: Toda a Jornada",
  iconeTrilha: "📘",
  bncc: ["EF04GE01", "EF04GE02", "EF04GE04", "EF04GE05", "EF04GE06", "EF04GE07"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Toque no passaporte. Aurora vai carimbar cada continente do Brasil que você já explorou.",
    mapaUrl: passaporte,
    imagemDestaqueUrl: passaporte,
    aurora:
      "Explorador, olha só quanto chão! Você viu o mapa, conheceu as 5 regiões, entendeu nosso povo, subiu chapadas, atravessou biomas, aprendeu os setores da economia e virou EcoGuardião. Agora é hora de carimbar TUDO no seu Passaporte Brasil.",
    falaFinal: "Uma última expedição: rever tudo e receber o carimbo definitivo.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite final: quem é o VERDADEIRO responsável por cuidar do Brasil?",
    pergunta: "Quem cuida do território brasileiro?",
    opcoes: [
      {
        id: "todos",
        titulo: "TODOS NÓS",
        subtitulo: "cada cidadão, cada dia",
        emoji: "🤝",
        cor: "from-emerald-500 to-green-700",
      },
      {
        id: "capital",
        titulo: "Só quem mora em Brasília",
        subtitulo: "capital do país",
        emoji: "🏛️",
        cor: "from-amber-400 to-yellow-600",
      },
    ],
    respostaCerta: "todos",
    feedbackAcerto:
      "Isso! O Brasil é de TODOS. Cada cidadão cuidando do seu pedaço, respeitando a natureza e as pessoas — é assim que o país cresce.",
    feedbackErro:
      "Brasília é a capital, mas o Brasil é um país inteiro. TODO cidadão é responsável.",
    falaFinal: "Cada um faz sua parte. Você é parte do Brasil.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "6 palavrões que você DOMINOU nas 6 unidades. Abra e reveja.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      {
        id: "regioes",
        capa: "1. Regiões (U1)",
        emoji: "🗺️",
        cor: "from-blue-500 to-indigo-700",
        conteudo:
          "O Brasil é dividido em 5 REGIÕES: Norte, Nordeste, Centro-Oeste, Sudeste e Sul.",
        exemplo: "IBGE = quem organiza essa divisão.",
        fotoUrl: mapaEstados,
      },
      {
        id: "populacao",
        capa: "2. População (U2)",
        emoji: "👥",
        cor: "from-pink-500 to-rose-700",
        conteudo:
          "Nossa gente veio de MUITOS lugares: indígenas, africanos, europeus, asiáticos.",
        exemplo: "Migração interna = mudar dentro do Brasil.",
        fotoUrl: diversidade,
      },
      {
        id: "relevo",
        capa: "3. Relevo (U3)",
        emoji: "⛰️",
        cor: "from-orange-500 to-red-700",
        conteudo:
          "PLANALTO (alto plano), PLANÍCIE (baixo plano), DEPRESSÃO (rebaixado).",
        exemplo: "Brasil = país de planaltos = país de hidrelétricas.",
        fotoUrl: relevo,
      },
      {
        id: "bioma",
        capa: "4. Bioma (U4)",
        emoji: "🌱",
        cor: "from-emerald-500 to-green-700",
        conteudo:
          "6 biomas: Amazônia, Caatinga, Cerrado, Mata Atlântica, Pampa e Pantanal.",
        exemplo: "Caatinga só existe no Brasil.",
        fotoUrl: caatinga,
      },
      {
        id: "setor",
        capa: "5. Setores (U5)",
        emoji: "🏭",
        cor: "from-slate-500 to-gray-700",
        conteudo:
          "3 setores: PRIMÁRIO (natureza), SECUNDÁRIO (fábrica), TERCIÁRIO (serviços).",
        exemplo: "70% dos brasileiros trabalham em SERVIÇOS.",
        fotoUrl: primario,
      },
      {
        id: "sustentavel",
        capa: "6. Sustentável (U6)",
        emoji: "♻️",
        cor: "from-lime-500 to-emerald-700",
        conteudo:
          "Consumir HOJE sem estragar pra AMANHÃ. Reduzir, reutilizar, reciclar, reflorestar.",
        exemplo: "5 R's = repensar, recusar, reduzir, reutilizar, reciclar.",
        fotoUrl: sustentavel,
      },
    ],
    falaFinal: "6 palavras, 6 unidades, 1 país inteiro na cabeça.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Mural do Brasil. Toque em cada carimbo do passaporte.",
    instrucao: "Toque em cada balão",
    mapaUrl: mapaEstados,
    pontos: [
      {
        id: "norte",
        x: 25,
        y: 30,
        emoji: "🌳",
        cor: "from-emerald-600 to-green-800",
        titulo: "NORTE — Floresta Amazônica",
        texto:
          "Bioma Amazônia, rio Amazonas, povos indígenas, extrativismo. Pulmão do planeta.",
      },
      {
        id: "nordeste",
        x: 70,
        y: 35,
        emoji: "🏖️",
        cor: "from-amber-400 to-yellow-600",
        titulo: "NORDESTE — Praia + Sertão",
        texto:
          "Litoral com turismo. Interior com caatinga. Herança africana forte na cultura.",
      },
      {
        id: "centro",
        x: 45,
        y: 55,
        emoji: "🌾",
        cor: "from-yellow-500 to-amber-700",
        titulo: "CENTRO-OESTE — Cerrado + Agro",
        texto:
          "Bioma cerrado, agricultura de soja e pecuária. Brasília, a capital do país.",
      },
      {
        id: "sudeste",
        x: 60,
        y: 65,
        emoji: "🏙️",
        cor: "from-red-500 to-rose-700",
        titulo: "SUDESTE — Metrópoles + Indústria",
        texto:
          "Região mais populosa e industrializada. SP, RJ, MG e ES.",
      },
      {
        id: "sul",
        x: 45,
        y: 85,
        emoji: "🍇",
        cor: "from-sky-500 to-blue-700",
        titulo: "SUL — Serra + Pampa",
        texto:
          "Clima mais frio, imigração europeia, vinhos e Oktoberfest.",
      },
    ],
    falaFinal: "5 regiões, 5 carimbos. Passaporte completo.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas MISTURANDO tudo que você aprendeu.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Bioma da região NORTE é...",
        cards: [
          { id: "a", emoji: "🌳", titulo: "Amazônia", cor: "from-emerald-600 to-green-800" },
          { id: "b", emoji: "🌵", titulo: "Caatinga", cor: "from-amber-500 to-orange-700" },
          { id: "c", emoji: "🐎", titulo: "Pampa", cor: "from-teal-500 to-emerald-700" },
        ],
        correta: "a",
        feedbackAcerto: "Isso! Norte = AMAZÔNIA.",
        feedbackErro: "Norte é AMAZÔNIA. Caatinga é do Nordeste.",
      },
      {
        id: "q2",
        pergunta: "Agricultor é do setor...",
        cards: [
          { id: "p", emoji: "🌾", titulo: "Primário", cor: "from-emerald-500 to-green-700" },
          { id: "s", emoji: "🏭", titulo: "Secundário", cor: "from-slate-500 to-gray-700" },
          { id: "t", emoji: "🏥", titulo: "Terciário", cor: "from-sky-500 to-blue-700" },
        ],
        correta: "p",
        feedbackAcerto: "Perfeito! Agricultura = PRIMÁRIO.",
        feedbackErro: "Tira da natureza = PRIMÁRIO.",
      },
      {
        id: "q3",
        pergunta: "Uma família nordestina indo morar em SP faz uma...",
        cards: [
          { id: "t", emoji: "🏖️", titulo: "Turismo", cor: "from-sky-500 to-blue-700" },
          { id: "m", emoji: "🚚", titulo: "Migração interna", cor: "from-amber-500 to-orange-700" },
          { id: "i", emoji: "✈️", titulo: "Imigração", cor: "from-emerald-500 to-green-700" },
        ],
        correta: "m",
        feedbackAcerto: "Boa! MIGRAÇÃO INTERNA.",
        feedbackErro: "Dentro do Brasil = MIGRAÇÃO INTERNA.",
      },
    ],
    falaFinal: "Radar afiado! Você domina o Brasil todo.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "DESAFIO FINAL! Acenda TODOS os 27 estados do Brasil. Você já conhece cada um.",
    instrucao: "Toque em cada estado — as 5 cores mostram as regiões",
    missao: {
      tipo: "grupos",
      grupos: [
        {
          id: "norte",
          rotulo: "Norte",
          emoji: "🌳",
          cor: "from-emerald-500 to-green-700",
          siglas: ["AM", "PA", "AC", "RO", "RR", "AP", "TO"],
          descricao: "Região NORTE — Amazônia, indígenas, extrativismo.",
        },
        {
          id: "nordeste",
          rotulo: "Nordeste",
          emoji: "🏖️",
          cor: "from-amber-400 to-yellow-600",
          siglas: ["MA", "PI", "CE", "RN", "PB", "PE", "AL", "SE", "BA"],
          descricao: "Região NORDESTE — praia, sertão, cultura africana.",
        },
        {
          id: "centro-oeste",
          rotulo: "Centro-Oeste",
          emoji: "⭐",
          cor: "from-orange-400 to-amber-600",
          siglas: ["MT", "MS", "GO", "DF"],
          descricao: "CENTRO-OESTE — cerrado, agro, Brasília.",
        },
        {
          id: "sudeste",
          rotulo: "Sudeste",
          emoji: "🏙️",
          cor: "from-red-500 to-rose-700",
          siglas: ["MG", "ES", "RJ", "SP"],
          descricao: "SUDESTE — metrópoles, indústria, maior população.",
        },
        {
          id: "sul",
          rotulo: "Sul",
          emoji: "🍇",
          cor: "from-sky-500 to-blue-700",
          siglas: ["PR", "SC", "RS"],
          descricao: "SUL — clima frio, imigração europeia, pampa.",
        },
      ],
    },
    falaFinal: "27 estados. 5 regiões. 1 Brasil. Você conhece TODOS.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos organizar a JORNADA das 6 unidades na ordem que você fez.",
    instrucao: "Toque na ordem certa",
    pergunta: "Ordene as 6 unidades do 4º ano:",
    paradas: [
      {
        id: "u1",
        emoji: "🗺️",
        rotulo: "1. Mapa e Regiões",
        descricao: "Você começou aprendendo as 5 regiões, estados, coordenadas e leitura de mapa.",
      },
      {
        id: "u2",
        emoji: "👥",
        rotulo: "2. População e Migrações",
        descricao: "Depois entendeu quem é o povo brasileiro e como se movimenta.",
      },
      {
        id: "u3",
        emoji: "⛰️",
        rotulo: "3. Relevo e Rios",
        descricao: "Subiu chapadas, desceu hidrelétricas, entendeu planaltos e planícies.",
      },
      {
        id: "u4",
        emoji: "🌱",
        rotulo: "4. Clima e Biomas",
        descricao: "Conheceu Amazônia, Caatinga, Cerrado, Mata Atlântica, Pampa e Pantanal.",
      },
      {
        id: "u5",
        emoji: "🏭",
        rotulo: "5. Trabalho e Economia",
        descricao: "Aprendeu os 3 setores: primário, secundário e terciário.",
      },
      {
        id: "u6",
        emoji: "♻️",
        rotulo: "6. Preservação",
        descricao: "Virou EcoGuardião: 5 R's, reflorestar, denunciar.",
      },
    ],
    ordemCerta: ["u1", "u2", "u3", "u4", "u5", "u6"],
    feedbackAcerto: "Jornada inteira mapeada! Você fez tudo.",
    feedbackErro: "Repensa: começa pelo MAPA e termina em PRESERVAÇÃO.",
    falaFinal: "6 etapas. 1 exploração completa.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Última leitura. Marque as chaves.",
    tituloLivro: "📔 Atlas do Explorador Brasileiro",
    subtitulo: "Página final — Meu Passaporte",
    paragrafos: [
      {
        id: "p1",
        texto:
          "O BRASIL é dividido em 5 REGIÕES e 27 estados. Cada região tem sua paisagem, seu povo e sua economia.",
        chaves: ["brasil", "regiões", "estados"],
      },
      {
        id: "p2",
        texto:
          "Nossa GENTE é a mistura de indígenas, africanos, europeus e asiáticos. Uma DIVERSIDADE única no mundo.",
        chaves: ["gente", "diversidade"],
      },
      {
        id: "p3",
        texto:
          "Nossos RIOS descem PLANALTOS e viram ENERGIA. Nossos BIOMAS abrigam bichos que só existem aqui.",
        chaves: ["rios", "planaltos", "energia", "biomas"],
      },
      {
        id: "p4",
        texto:
          "Proteger o Brasil é dever de TODOS. Cada cidadão CUIDANDO do seu pedaço.",
        chaves: ["proteger", "todos", "cuidando"],
      },
    ],
    falaFinal: "Leu tudo. Passaporte quase carimbado.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo REVISÃO GERAL! Acerte a resposta certa pra cada pista do Brasil.",
    instrucao: "⏱️ Qual a resposta?",
    duracaoSegundos: 12,
    pecas: [
      { id: "norte", emoji: "🌳", rotulo: "Norte / Amazônia" },
      { id: "nordeste", emoji: "🌵", rotulo: "Nordeste / Caatinga" },
      { id: "sudeste", emoji: "🏙️", rotulo: "Sudeste / Indústria" },
      { id: "sul", emoji: "🍇", rotulo: "Sul / Serra" },
      { id: "centro", emoji: "🌾", rotulo: "Centro-Oeste / Cerrado" },
      { id: "todos", emoji: "🤝", rotulo: "Todo cidadão" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Rio Amazonas + onça", emoji: "🌊", cor: "from-emerald-600 to-green-800" },
        municipioB: { nome: "Maior floresta", emoji: "🌳", cor: "from-green-500 to-emerald-700" },
        contexto: "Rio Amazonas, onça-pintada e floresta imensa. Qual região?",
        pecaCertaId: "norte",
        feedbackAcerto: "Isso! NORTE = Amazônia.",
        feedbackErro: "Amazonas + floresta = NORTE.",
      },
      {
        id: "r2",
        municipioA: { nome: "Mandacaru + sertão", emoji: "🌵", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Semiárido brasileiro", emoji: "☀️", cor: "from-yellow-500 to-orange-700" },
        contexto: "Mandacaru, sertão e forró vêm de qual região?",
        pecaCertaId: "nordeste",
        feedbackAcerto: "Perfeito! NORDESTE = Caatinga + cultura forte.",
        feedbackErro: "Mandacaru e sertão = NORDESTE.",
      },
      {
        id: "r3",
        municipioA: { nome: "SP + fábricas", emoji: "🏭", cor: "from-red-500 to-rose-700" },
        municipioB: { nome: "Maior indústria do país", emoji: "🏙️", cor: "from-rose-500 to-red-700" },
        contexto: "SP, RJ, MG concentram indústria. Qual região?",
        pecaCertaId: "sudeste",
        feedbackAcerto: "Boa! SUDESTE = indústria + metrópole.",
        feedbackErro: "SP + indústria = SUDESTE.",
      },
      {
        id: "r4",
        municipioA: { nome: "Uva + Oktoberfest", emoji: "🍇", cor: "from-purple-500 to-fuchsia-700" },
        municipioB: { nome: "Serra + imigração alemã/italiana", emoji: "🏔️", cor: "from-sky-500 to-blue-700" },
        contexto: "Uva, serra, frio e Oktoberfest são de qual região?",
        pecaCertaId: "sul",
        feedbackAcerto: "Combo! SUL = imigração europeia.",
        feedbackErro: "Oktoberfest e uva = SUL.",
      },
      {
        id: "r5",
        municipioA: { nome: "Brasília + soja + cerrado", emoji: "🌾", cor: "from-yellow-500 to-amber-700" },
        municipioB: { nome: "Capital do Brasil", emoji: "🏛️", cor: "from-orange-500 to-amber-700" },
        contexto: "Brasília, cerrado e soja são de qual região?",
        pecaCertaId: "centro",
        feedbackAcerto: "Isso! CENTRO-OESTE = capital + agro.",
        feedbackErro: "Brasília + cerrado = CENTRO-OESTE.",
      },
      {
        id: "r6",
        municipioA: { nome: "Quem cuida do Brasil?", emoji: "🇧🇷", cor: "from-emerald-500 to-green-700" },
        municipioB: { nome: "Todos os brasileiros", emoji: "🤝", cor: "from-yellow-500 to-green-700" },
        contexto: "Quem é responsável por proteger o território brasileiro?",
        pecaCertaId: "todos",
        feedbackAcerto: "Perfeito! TODOS NÓS somos responsáveis.",
        feedbackErro: "Cada CIDADÃO faz sua parte. É de TODOS.",
      },
    ],
    falaFinal: "6 acertos = Brasil dominado. Você é EMBAIXADOR!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da JORNADA: quanto do 4º ano de Geografia você já dominou?",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "conquistado",
        rotulo: "6 unidades conquistadas (100%)",
        emoji: "🏆",
        percentual: 100,
        cor: "#10b981",
        descricao:
          "Você completou TUDO: mapa, população, relevo, biomas, economia, preservação. 6 insígnias no peito.",
        exemplos: ["🗺️ Cartógrafo Mestre", "👥 Historiador da Gente", "⛰️ Explorador de Montanhas"],
      },
      {
        id: "proximo",
        rotulo: "Próximo passo (5º ano)",
        emoji: "🚀",
        percentual: 0,
        cor: "#3b82f6",
        descricao:
          "No 5º ano você vai virar Investigador Territorial: economia, cidades, campo × cidade em profundidade.",
        exemplos: ["🔍 Investigar", "🏙️ Cidades", "🌾 Rural"],
      },
    ],
    falaFinal: "100% do 4º ano! Você está pronto pro próximo desafio.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "PROVA FINAL. 3 perguntas — se acertar, ganha a insígnia máxima: Embaixador do Território.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "Em quantas REGIÕES o IBGE dividiu o Brasil?",
        opcoes: [
          { id: "a", texto: "3 regiões", correta: false },
          { id: "b", texto: "5 regiões", correta: true },
          { id: "c", texto: "27 regiões", correta: false },
        ],
        feedbackAcerto: "Isso! 5 REGIÕES: Norte, Nordeste, Centro-Oeste, Sudeste e Sul.",
        feedbackErro: "27 são os ESTADOS. Regiões são 5.",
      },
      {
        id: "av2",
        pergunta: "Qual bioma SÓ existe no Brasil?",
        opcoes: [
          { id: "a", texto: "Amazônia", correta: false },
          { id: "b", texto: "Caatinga", correta: true },
          { id: "c", texto: "Cerrado", correta: false },
        ],
        feedbackAcerto: "Perfeito! CAATINGA — exclusiva do Brasil.",
        feedbackErro: "Amazônia está em outros países. Só a CAATINGA é exclusiva.",
      },
      {
        id: "av3",
        pergunta: "Quem é RESPONSÁVEL por cuidar do território brasileiro?",
        opcoes: [
          { id: "a", texto: "Todos nós — cada cidadão", correta: true },
          { id: "b", texto: "Só o presidente", correta: false },
          { id: "c", texto: "Só quem mora em Brasília", correta: false },
        ],
        feedbackAcerto: "Isso! O Globo das Descobertas do 4º ano está oficialmente RESTAURADO.",
        feedbackErro: "É de TODOS. Cada cidadão cuidando do seu pedaço.",
      },
    ],
    selo: {
      nome: "Embaixador do Território",
      subtitulo: "Insígnia MÁXIMA do 4º ano de Geografia",
      emoji: "🏆",
      cor: "from-amber-400 to-yellow-600",
    },
    falaFinal:
      "PARABÉNS, EMBAIXADOR DO TERRITÓRIO! Você fechou o 4º ano inteiro. Cartógrafo, Historiador, Explorador de Montanhas, Biomestre, Supervisor Econômico, EcoGuardião — e agora Embaixador. O Brasil é seu.",
  },

  recompensa: { xp: 600, moedas: 400, medalha: "Embaixador do Território" },
};
