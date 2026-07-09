import type { AulaGeoV1 } from "../../types";
import mapaEstados from "@/assets/geografia-4ano/mapa-brasil-estados.jpg";
import heroEstados from "@/assets/geografia-4ano/hero-estados-brasil.jpg";
import brasiliaDF from "@/assets/geografia-4ano/brasilia-df.jpg";
import bandeiras from "@/assets/geografia-4ano/bandeiras-estados.jpg";
import lupaEstado from "@/assets/geografia-4ano/lupa-estado.jpg";
import norte from "@/assets/geografia-4ano/regiao-norte-amazonia.jpg";
import nordeste from "@/assets/geografia-4ano/regiao-nordeste-praia.jpg";
import sudeste from "@/assets/geografia-4ano/regiao-sudeste-metropole.jpg";
import sul from "@/assets/geografia-4ano/regiao-sul-serra.jpg";

/**
 * Geografia · 4º Ano · Unidade 1 · Aula 02
 * "Os 26 Estados + o Distrito Federal" — EF04GE02
 *
 * A criança sai do "mapa das regiões" e mergulha nos 26 ESTADOS + DF.
 * Descobre que cada estado tem NOME, CAPITAL, SIGLA e BANDEIRA — e que
 * Brasília não é estado, é o Distrito Federal, onde mora o governo do
 * Brasil.
 */
export const aula02: AulaGeoV1 = {
  slug: "aula-02-estados-e-df",
  titulo: "Os 26 Estados + o DF",
  iconeTrilha: "🚩",
  bncc: ["EF04GE02"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Arraste a LUPA sobre o mapa. Cada pedacinho colorido é um ESTADO — e o Brasil tem 26 deles + o Distrito Federal!",
    mapaUrl: mapaEstados,
    imagemDestaqueUrl: heroEstados,
    aurora:
      "Explorador, agora vamos APROXIMAR o mapa! Dentro das 5 regiões, o Brasil tem 26 ESTADOS + 1 Distrito Federal. Cada um com seu nome, sua capital, sua bandeira e uma SIGLA de 2 letras. Bora conhecer?",
    falaFinal:
      "26 estados + 1 DF = 27 pedaços que juntos formam o Brasil. Cada um único, todos brasileiros.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite rápido: Brasília, a capital do Brasil, é um ESTADO como São Paulo e Bahia?",
    pergunta: "O que é Brasília?",
    opcoes: [
      {
        id: "estado",
        titulo: "É um ESTADO",
        subtitulo: "igual a São Paulo, Bahia, Amazonas",
        emoji: "🏛️",
        cor: "from-rose-400 to-red-600",
      },
      {
        id: "df",
        titulo: "É o DISTRITO FEDERAL",
        subtitulo: "um lugar especial só pra ser capital",
        emoji: "⭐",
        cor: "from-amber-400 to-yellow-600",
      },
    ],
    respostaCerta: "df",
    feedbackAcerto:
      "Isso! Brasília é o DISTRITO FEDERAL — um território ESPECIAL criado só pra abrigar o governo do Brasil. Não é estado.",
    feedbackErro:
      "Repensa: Brasília é o DF (Distrito Federal). Foi criado em 1960 só pra ser a capital. Ele não é estado.",
    falaFinal:
      "Guarda esse palpite. Bora ver os 26 estados um por um.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Cada estado brasileiro tem 4 coisas importantes. Abre os 4 cadernos e descobre o que TODO estado tem.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "nome",
        capa: "1. Nome",
        emoji: "🏷️",
        cor: "from-emerald-500 to-green-700",
        conteudo:
          "Todo estado tem um NOME. Alguns vieram de povos indígenas (Piauí, Paraná), outros de santos (São Paulo), outros de acidentes geográficos (Rio Grande do Sul, Mato Grosso).",
        exemplo: "Ex.: BAHIA, AMAZONAS, MINAS GERAIS, CEARÁ.",
        fotoUrl: nordeste,
      },
      {
        id: "capital",
        capa: "2. Capital",
        emoji: "🏙️",
        cor: "from-red-500 to-rose-700",
        conteudo:
          "Toda capital é a cidade mais IMPORTANTE do estado — onde fica o governador e o palácio do governo estadual. Nem sempre é a maior em tamanho, mas é a sede do estado.",
        exemplo: "Ex.: SP → São Paulo · BA → Salvador · MG → Belo Horizonte · CE → Fortaleza.",
        fotoUrl: sudeste,
      },
      {
        id: "sigla",
        capa: "3. Sigla",
        emoji: "🔤",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "SIGLA é o apelido de 2 LETRAS. Aparece nas placas de carro, nos endereços e nos telejornais. Facilita escrever rápido.",
        exemplo: "Ex.: SP = São Paulo · RJ = Rio de Janeiro · RS = Rio Grande do Sul · AM = Amazonas.",
        fotoUrl: lupaEstado,
      },
      {
        id: "bandeira",
        capa: "4. Bandeira",
        emoji: "🚩",
        cor: "from-amber-400 to-yellow-600",
        conteudo:
          "Cada estado tem sua BANDEIRA — com cores e símbolos que contam a história e a cultura do lugar. Ela representa o povo daquele estado.",
        exemplo: "Ex.: SP tem 13 listras pretas e brancas + um mapa amarelo. MG tem um triângulo vermelho.",
        fotoUrl: bandeiras,
      },
    ],
    falaFinal:
      "NOME + CAPITAL + SIGLA + BANDEIRA. Toda vez que estudar um estado, procura essas 4 coisas.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Marquei 5 estados FAMOSOS no mapa — um de cada região. Toca em cada balão pra Aurora te contar o nome, a capital e a sigla.",
    instrucao: "Toque em cada ponto pra abrir a ficha do estado",
    mapaUrl: mapaEstados,
    pontos: [
      {
        id: "am",
        x: 25,
        y: 25,
        emoji: "🌳",
        cor: "from-emerald-500 to-green-700",
        titulo: "AMAZONAS (AM)",
        texto:
          "Estado do NORTE. Capital: MANAUS. É o MAIOR estado do Brasil em tamanho — cabe a França inteira dentro dele! Tem o rio Amazonas e a maior floresta do mundo.",
        fotoUrl: norte,
      },
      {
        id: "ba",
        x: 75,
        y: 40,
        emoji: "🏖️",
        cor: "from-amber-400 to-yellow-600",
        titulo: "BAHIA (BA)",
        texto:
          "Estado do NORDESTE. Capital: SALVADOR. É famoso pelo acarajé, pelo axé e pelas praias. Foi a primeira capital do Brasil antes de Brasília!",
        fotoUrl: nordeste,
      },
      {
        id: "df",
        x: 55,
        y: 55,
        emoji: "⭐",
        cor: "from-orange-400 to-amber-600",
        titulo: "DISTRITO FEDERAL (DF)",
        texto:
          "Não é estado — é o DISTRITO FEDERAL. Abriga BRASÍLIA, a capital do Brasil. Foi inaugurado em 21 de abril de 1960 e ali mora o Presidente da República.",
        fotoUrl: brasiliaDF,
      },
      {
        id: "sp",
        x: 62,
        y: 70,
        emoji: "🏙️",
        cor: "from-red-500 to-rose-700",
        titulo: "SÃO PAULO (SP)",
        texto:
          "Estado do SUDESTE. Capital: SÃO PAULO (a cidade tem o mesmo nome do estado!). É o estado MAIS POVOADO do Brasil, com muitas indústrias e a maior cidade do país.",
        fotoUrl: sudeste,
      },
      {
        id: "rs",
        x: 45,
        y: 90,
        emoji: "🍇",
        cor: "from-sky-500 to-blue-700",
        titulo: "RIO GRANDE DO SUL (RS)",
        texto:
          "Estado do SUL. Capital: PORTO ALEGRE. Terra do chimarrão, do churrasco e dos gaúchos. No inverno pode NEVAR nas serras!",
        fotoUrl: sul,
      },
    ],
    falaFinal:
      "5 estados, 5 histórias — e todos são Brasil. Cada um dos 26 tem uma ficha parecida com essa.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Radar ligado! 3 perguntas rápidas sobre estados, capitais e siglas.",
    instrucao: "Toque no card certo pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual é a capital do estado de SÃO PAULO?",
        fotoUrl: sudeste,
        cards: [
          { id: "campinas", emoji: "🏙️", titulo: "Campinas", cor: "from-slate-400 to-slate-600" },
          { id: "saopaulo", emoji: "🌆", titulo: "São Paulo", cor: "from-red-500 to-rose-700" },
          { id: "santos", emoji: "⚓", titulo: "Santos", cor: "from-sky-500 to-blue-700" },
        ],
        correta: "saopaulo",
        feedbackAcerto: "Isso! A CAPITAL do estado de SP é a cidade de São Paulo — mesmo nome!",
        feedbackErro: "Repensa: a capital de SP tem o mesmo NOME do estado — é a cidade de São Paulo.",
      },
      {
        id: "q2",
        pergunta: "Qual é a SIGLA do estado do Rio Grande do Sul?",
        fotoUrl: sul,
        cards: [
          { id: "rg", emoji: "🔤", titulo: "RG", cor: "from-slate-400 to-slate-600" },
          { id: "rs", emoji: "🔤", titulo: "RS", cor: "from-sky-500 to-blue-700" },
          { id: "rn", emoji: "🔤", titulo: "RN", cor: "from-amber-400 to-yellow-600" },
        ],
        correta: "rs",
        feedbackAcerto: "Perfeito! RS = Rio Grande do SUL. RN é Rio Grande do NORTE (Nordeste).",
        feedbackErro: "Repensa: Rio Grande do SUL → RS. RN é o Rio Grande do NORTE.",
      },
      {
        id: "q3",
        pergunta: "Brasília é a capital do Brasil. Ela fica em qual território?",
        fotoUrl: brasiliaDF,
        cards: [
          { id: "estado-df", emoji: "🏛️", titulo: "Estado do DF", cor: "from-rose-400 to-red-600" },
          { id: "distrito", emoji: "⭐", titulo: "Distrito Federal", cor: "from-amber-400 to-yellow-600" },
          { id: "goias", emoji: "🌾", titulo: "Estado de Goiás", cor: "from-emerald-400 to-green-600" },
        ],
        correta: "distrito",
        feedbackAcerto: "Exato! Brasília fica no DISTRITO FEDERAL — que NÃO é um estado, é um território especial.",
        feedbackErro:
          "Atenção: o DF não é 'estado do DF'. É o DISTRITO FEDERAL, um território especial só pra abrigar a capital.",
      },
    ],
    falaFinal:
      "Radar afiado! Você já sabe reconhecer siglas e capitais. Bora ver como os estados se agrupam.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "Agora o mapa é SEU. Toca em CADA estado pra descobrir o nome, a capital e a sigla. Compare dois grupos: os 5 mais POPULOSOS × os 5 MAIORES em tamanho.",
    instrucao: "Toque em cada estado colorido no mapa",
    missao: {
      tipo: "grupos",
      grupos: [
        {
          id: "populosos",
          rotulo: "5 mais POPULOSOS",
          emoji: "👥",
          cor: "from-red-500 to-rose-700",
          siglas: ["SP", "MG", "RJ", "BA", "RS"],
          descricao:
            "SP, MG, RJ (Sudeste) + BA (Nordeste) + RS (Sul) concentram mais da METADE da população brasileira.",
        },
        {
          id: "grandes",
          rotulo: "5 MAIORES em tamanho",
          emoji: "📏",
          cor: "from-emerald-500 to-green-700",
          siglas: ["AM", "PA", "MT", "MG", "BA"],
          descricao:
            "AM, PA, MT, MG e BA são os 5 maiores em km². O Amazonas sozinho é 4× maior que a Alemanha!",
        },
      ],
    },
    falaFinal:
      "Percebeu? Grande em TAMANHO nem sempre é grande em POPULAÇÃO. MG e BA aparecem nos DOIS grupos — são gigantes e cheios de gente.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Bora conectar 5 estados numa VIAGEM de norte a sul, passando por Brasília! Toca na ordem certa.",
    instrucao: "Toque na sequência de estados de CIMA pra BAIXO",
    pergunta: "Coloque os estados na ordem, do NORTE ao SUL:",
    paradas: [
      {
        id: "am",
        emoji: "🌳",
        rotulo: "1. Amazonas (AM)",
        descricao: "Começamos no Norte — o MAIOR estado do Brasil, cheio de floresta.",
      },
      {
        id: "ce",
        emoji: "🏖️",
        rotulo: "2. Ceará (CE)",
        descricao: "Subimos pro Nordeste — praias de Fortaleza e o sertão.",
      },
      {
        id: "df",
        emoji: "⭐",
        rotulo: "3. Distrito Federal (DF)",
        descricao: "No coração do país: Brasília, a capital federal.",
      },
      {
        id: "sp",
        emoji: "🏙️",
        rotulo: "4. São Paulo (SP)",
        descricao: "Descemos pro Sudeste — o estado mais povoado.",
      },
      {
        id: "rs",
        emoji: "🍇",
        rotulo: "5. Rio Grande do Sul (RS)",
        descricao: "Chegamos no Sul — chimarrão, churrasco e serras.",
      },
    ],
    ordemCerta: ["am", "ce", "df", "sp", "rs"],
    feedbackAcerto: "Viagem completa! Você cruzou o Brasil passando por 5 estados de regiões diferentes.",
    feedbackErro:
      "Essa não é a próxima parada. Lembra: AM (Norte) → CE (Nordeste) → DF (Centro) → SP (Sudeste) → RS (Sul).",
    falaFinal:
      "Do topo do mapa até lá embaixo: 5 estados, 5 regiões, 1 Brasil.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez! Aurora fica caladinha. Você lê e toca nas palavras-chave pra provar que entendeu.",
    tituloLivro: "📔 Atlas do Explorador Brasileiro",
    subtitulo: "Página 2 — Os Estados e o Distrito Federal",
    paragrafos: [
      {
        id: "p1",
        texto:
          "O Brasil tem 26 ESTADOS mais 1 DISTRITO FEDERAL. Cada estado é como uma 'peça' do quebra-cabeça do país, com seu próprio governador.",
        chaves: ["estados", "distrito", "governador"],
      },
      {
        id: "p2",
        texto:
          "Toda CAPITAL é a cidade mais importante do estado — é onde fica o governo estadual. São Paulo tem SP como capital, o Rio Grande do Sul tem PORTO ALEGRE.",
        chaves: ["capital", "governo", "porto alegre"],
      },
      {
        id: "p3",
        texto:
          "Cada estado também tem uma SIGLA de duas letras. SP, RJ, MG, BA, RS. As siglas aparecem nas placas de CARRO e nos endereços.",
        chaves: ["sigla", "duas letras", "carro"],
      },
      {
        id: "p4",
        texto:
          "BRASÍLIA é diferente. Não é estado — é o DISTRITO FEDERAL, criado em 1960 só pra ser a CAPITAL do Brasil, onde mora o presidente.",
        chaves: ["brasília", "distrito federal", "capital"],
      },
    ],
    falaFinal:
      "Você leu sozinho e já entende a diferença entre estado e Distrito Federal. Bora pro minijogo!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Minijogo do EXPLORADOR RELÂMPAGO! Cada rodada mostra uma pista sobre um estado. Toca no estado certo antes do relógio zerar!",
    instrucao: "⏱️ Leia a pista e toque no estado certo antes do tempo acabar!",
    duracaoSegundos: 15,
    pecas: [
      { id: "am", emoji: "🌳", rotulo: "Amazonas (AM)" },
      { id: "ba", emoji: "🏖️", rotulo: "Bahia (BA)" },
      { id: "df", emoji: "⭐", rotulo: "Distrito Federal (DF)" },
      { id: "sp", emoji: "🏙️", rotulo: "São Paulo (SP)" },
      { id: "rs", emoji: "🍇", rotulo: "Rio Grande do Sul (RS)" },
      { id: "rj", emoji: "🏝️", rotulo: "Rio de Janeiro (RJ)" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Salvador é a capital", emoji: "🏖️", cor: "from-amber-400 to-yellow-600" },
        municipioB: { nome: "Terra do axé", emoji: "🎵", cor: "from-yellow-400 to-orange-600" },
        contexto: "Capital Salvador, primeiro estado colonizado pelos portugueses. Qual é?",
        pecaCertaId: "ba",
        feedbackAcerto: "Boa! BAHIA (BA) — capital Salvador, terra do axé.",
        feedbackErro: "Repensa: Salvador é capital da BAHIA (BA).",
      },
      {
        id: "r2",
        municipioA: { nome: "Manaus é a capital", emoji: "🌳", cor: "from-emerald-500 to-green-700" },
        municipioB: { nome: "Maior estado", emoji: "📏", cor: "from-lime-400 to-emerald-600" },
        contexto: "MAIOR estado do Brasil em tamanho, com a Floresta Amazônica. Capital Manaus.",
        pecaCertaId: "am",
        feedbackAcerto: "Perfeito! AMAZONAS (AM) — o gigante do Norte.",
        feedbackErro: "Pensa grande: o maior estado é o AMAZONAS (AM).",
      },
      {
        id: "r3",
        municipioA: { nome: "Não é estado", emoji: "⭐", cor: "from-orange-400 to-amber-600" },
        municipioB: { nome: "Onde fica Brasília", emoji: "🏛️", cor: "from-amber-400 to-yellow-600" },
        contexto: "Território ESPECIAL, criado em 1960 pra ser a capital do Brasil. Não é estado.",
        pecaCertaId: "df",
        feedbackAcerto: "Combo! DISTRITO FEDERAL (DF) — casa da capital Brasília.",
        feedbackErro: "Atenção: Brasília fica no DF (Distrito Federal), não em um estado.",
      },
      {
        id: "r4",
        municipioA: { nome: "Capital tem o mesmo nome", emoji: "🏙️", cor: "from-red-500 to-rose-700" },
        municipioB: { nome: "Estado mais populoso", emoji: "👥", cor: "from-rose-400 to-red-600" },
        contexto: "Estado MAIS POVOADO do Brasil. Sua capital tem o MESMO nome do estado. Qual é?",
        pecaCertaId: "sp",
        feedbackAcerto: "Isso! SÃO PAULO (SP) — estado e cidade com o mesmo nome.",
        feedbackErro: "Repensa: capital com o mesmo nome do estado = SÃO PAULO (SP).",
      },
      {
        id: "r5",
        municipioA: { nome: "Porto Alegre é a capital", emoji: "🍇", cor: "from-sky-500 to-blue-700" },
        municipioB: { nome: "Terra do chimarrão", emoji: "🧉", cor: "from-blue-400 to-indigo-600" },
        contexto: "Terra do chimarrão, do churrasco e dos gaúchos. Fica lá no Sul. Capital: Porto Alegre.",
        pecaCertaId: "rs",
        feedbackAcerto: "Perfeito! RIO GRANDE DO SUL (RS) — capital Porto Alegre.",
        feedbackErro: "Ops: chimarrão e gaúchos = RIO GRANDE DO SUL (RS).",
      },
      {
        id: "r6",
        municipioA: { nome: "Cristo Redentor", emoji: "🗿", cor: "from-pink-400 to-rose-600" },
        municipioB: { nome: "Praia de Copacabana", emoji: "🏝️", cor: "from-cyan-400 to-blue-600" },
        contexto: "Estado do Cristo Redentor, do Pão de Açúcar e das praias famosas. Capital com o mesmo nome.",
        pecaCertaId: "rj",
        feedbackAcerto: "Boa! RIO DE JANEIRO (RJ) — Cristo, Copacabana e capital de mesmo nome.",
        feedbackErro: "Pensa no Cristo Redentor: é o RIO DE JANEIRO (RJ).",
      },
    ],
    falaFinal:
      "6 estados dominados! Você já reconhece pelas capitais, pelas siglas e pelas paisagens.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Bora ver a PIZZA da população brasileira! Duas fatias mostram onde mora a maior parte da gente.",
    instrucao: "Toque em cada fatia pra ouvir a explicação",
    fatias: [
      {
        id: "top5",
        rotulo: "Top 5 estados mais populosos",
        emoji: "👥",
        percentual: 55,
        cor: "#ef4444",
        descricao:
          "Só 5 estados (SP, MG, RJ, BA, RS) concentram cerca de 55% de toda a população do Brasil. Mais da METADE dos brasileiros!",
        exemplos: ["São Paulo 🏙️", "Minas Gerais ⛰️", "Rio de Janeiro 🏝️"],
      },
      {
        id: "outros",
        rotulo: "Os outros 21 estados + DF",
        emoji: "🗺️",
        percentual: 45,
        cor: "#0ea5e9",
        descricao:
          "Os outros 22 territórios juntos têm cerca de 45% da população. Muitos são gigantes em tamanho (como AM e PA), mas têm menos gente por quilômetro quadrado.",
        exemplos: ["Amazonas 🌳", "Pará 🌴", "Distrito Federal ⭐"],
      },
    ],
    falaFinal:
      "5 estados = metade dos brasileiros. Isso mostra como a população se CONCENTRA no Sudeste.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última etapa! 3 perguntas pra ganhar a insígnia oficial: Guardião das Bandeiras.",
    instrucao: "Responda as 3 e ganhe seu selo",
    perguntas: [
      {
        id: "av1",
        pergunta: "Quantos estados o Brasil tem, além do Distrito Federal?",
        opcoes: [
          { id: "a", texto: "20 estados", correta: false },
          { id: "b", texto: "26 estados", correta: true },
          { id: "c", texto: "27 estados", correta: false },
        ],
        feedbackAcerto: "Isso! 26 estados + 1 Distrito Federal = 27 territórios.",
        feedbackErro: "Repensa: são 26 estados. Somando o DF dá 27 no total.",
      },
      {
        id: "av2",
        pergunta: "Qual é a sigla do estado do RIO DE JANEIRO?",
        opcoes: [
          { id: "a", texto: "RJ", correta: true },
          { id: "b", texto: "RD", correta: false },
          { id: "c", texto: "RN", correta: false },
        ],
        feedbackAcerto: "Perfeito! RJ = Rio de Janeiro. RN é Rio Grande do Norte.",
        feedbackErro: "Repensa: Rio de Janeiro → RJ (as 2 primeiras letras importantes).",
      },
      {
        id: "av3",
        pergunta: "Brasília, a capital do Brasil, fica em qual território?",
        opcoes: [
          { id: "a", texto: "No estado de Goiás", correta: false },
          { id: "b", texto: "No Distrito Federal (DF)", correta: true },
          { id: "c", texto: "No estado de São Paulo", correta: false },
        ],
        feedbackAcerto: "Isso! Brasília fica no DISTRITO FEDERAL — um território especial, não um estado.",
        feedbackErro: "Repensa: Brasília fica no DF (Distrito Federal), não em Goiás nem em SP.",
      },
    ],
    selo: {
      nome: "Guardião das Bandeiras",
      subtitulo: "Insígnia dos 26 estados + DF",
      emoji: "🚩",
      cor: "from-amber-400 to-red-600",
    },
    falaFinal:
      "PARABÉNS, Guardião das Bandeiras! Você agora conhece os estados, capitais e siglas do Brasil.",
  },

  recompensa: {
    xp: 300,
    moedas: 200,
    medalha: "Guardião das Bandeiras",
  },
};
