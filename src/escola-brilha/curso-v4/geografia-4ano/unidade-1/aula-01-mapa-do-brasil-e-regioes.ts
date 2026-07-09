import type { AulaGeoV1 } from "../../types";
import mapaBrasil from "@/assets/geografia-4ano/mapa-brasil-regioes.jpg";
import heroExplorador from "@/assets/geografia-4ano/hero-explorador-brasil.jpg";
import norte from "@/assets/geografia-4ano/regiao-norte-amazonia.jpg";
import nordeste from "@/assets/geografia-4ano/regiao-nordeste-praia.jpg";
import centroOeste from "@/assets/geografia-4ano/regiao-centro-oeste-cerrado.jpg";
import sudeste from "@/assets/geografia-4ano/regiao-sudeste-metropole.jpg";
import sul from "@/assets/geografia-4ano/regiao-sul-serra.jpg";

/**
 * Geografia · 4º Ano · Unidade 1 · Aula 01
 * "O Mapa do Brasil e Suas 5 Regiões" — EF04GE01
 *
 * Brilha abre o GLOBO DAS DESCOBERTAS e Aurora apresenta o Brasil dividido
 * pelo IBGE em 5 grandes regiões — cada uma com sua paisagem, seu povo e
 * seu jeito próprio. A criança viaja pelo mapa e descobre que dividir em
 * regiões AJUDA a estudar e organizar um país gigante.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-mapa-do-brasil-e-regioes",
  titulo: "O Mapa do Brasil e Suas 5 Regiões",
  iconeTrilha: "🗺️",
  bncc: ["EF04GE01"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Arraste os BINÓCULOS sobre o mapa. Hoje a gente vai explorar o Brasil INTEIRO — as 5 grandes regiões do nosso país gigante.",
    mapaUrl: mapaBrasil,
    imagemDestaqueUrl: heroExplorador,
    aurora:
      "Explorador, nosso país é ENORME! Pra estudar melhor, o IBGE dividiu o Brasil em 5 grandes regiões. Cada uma tem sua paisagem, sua comida, seu jeito de falar. Bora abrir o Globo das Descobertas?",
    falaFinal:
      "Dividir em regiões não SEPARA a gente — AJUDA a organizar, estudar e cuidar de um país imenso. Bora conhecer as 5!",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite rápido, explorador: por que será que o IBGE dividiu o Brasil em 5 regiões?",
    pergunta: "Pra que serve dividir o Brasil em regiões?",
    opcoes: [
      {
        id: "separar",
        titulo: "Pra SEPARAR",
        subtitulo: "impedir que gente de um lado visite o outro",
        emoji: "🚧",
        cor: "from-rose-400 to-red-600",
      },
      {
        id: "organizar",
        titulo: "Pra ORGANIZAR",
        subtitulo: "facilitar o estudo e cuidar de um país gigante",
        emoji: "🗂️",
        cor: "from-emerald-400 to-green-600",
      },
    ],
    respostaCerta: "organizar",
    feedbackAcerto:
      "Isso! Regiões ajudam a ESTUDAR, planejar escolas, hospitais e estradas em cada pedaço do Brasil.",
    feedbackErro:
      "Repensa: brasileiro de qualquer região pode visitar qualquer outra. As regiões existem pra ORGANIZAR o estudo, não pra separar.",
    falaFinal:
      "Guarda esse palpite. Bora conhecer as 5 regiões, uma por uma, e ver como cada uma é única.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Antes de sair viajando, abre 5 cadernos — um pra cada REGIÃO do Brasil. Cada capa mostra a paisagem típica daquele pedaço do país.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "norte",
        capa: "1. Região Norte",
        emoji: "🌳",
        cor: "from-emerald-500 to-green-700",
        conteudo:
          "A MAIOR região do Brasil em tamanho! Aqui vive a Floresta Amazônica, o Rio Amazonas e muitos povos indígenas. Clima quente e úmido o ano todo.",
        exemplo:
          "Estados: Amazonas, Pará, Acre, Rondônia, Roraima, Amapá e Tocantins.",
        fotoUrl: norte,
      },
      {
        id: "nordeste",
        capa: "2. Região Nordeste",
        emoji: "🏖️",
        cor: "from-amber-400 to-yellow-600",
        conteudo:
          "Terra das praias, do sertão e do axé! Tem litoral cheio de sol, culinária famosa (acarajé, tapioca) e forró. Também tem áreas mais secas na Caatinga.",
        exemplo:
          "Estados: Bahia, Pernambuco, Ceará, Maranhão, Piauí, Paraíba, Rio Grande do Norte, Alagoas e Sergipe.",
        fotoUrl: nordeste,
      },
      {
        id: "centro-oeste",
        capa: "3. Centro-Oeste",
        emoji: "🌾",
        cor: "from-orange-400 to-amber-600",
        conteudo:
          "Coração do Brasil! Aqui fica BRASÍLIA, a capital do país. Tem o bioma Cerrado, muitas fazendas de soja e gado, e o Pantanal cheio de bichos.",
        exemplo: "Estados: Goiás, Mato Grosso, Mato Grosso do Sul e o Distrito Federal (Brasília).",
        fotoUrl: centroOeste,
      },
      {
        id: "sudeste",
        capa: "4. Região Sudeste",
        emoji: "🏙️",
        cor: "from-red-500 to-rose-700",
        conteudo:
          "A região mais POVOADA e industrial do Brasil. Tem as maiores cidades — São Paulo e Rio de Janeiro — e muitas indústrias, escolas e universidades.",
        exemplo: "Estados: São Paulo, Rio de Janeiro, Minas Gerais e Espírito Santo.",
        fotoUrl: sudeste,
      },
      {
        id: "sul",
        capa: "5. Região Sul",
        emoji: "🍇",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "A MENOR região do Brasil, mas cheia de vida! Clima mais frio, com serras, vinhedos e imigrantes europeus. No inverno, chega a NEVAR em algumas cidades!",
        exemplo: "Estados: Paraná, Santa Catarina e Rio Grande do Sul.",
        fotoUrl: sul,
      },
    ],
    falaFinal:
      "5 cadernos, 5 regiões: NORTE, NORDESTE, CENTRO-OESTE, SUDESTE e SUL. Juntas, elas formam nosso Brasil de 26 estados + o Distrito Federal.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Marquei as 5 regiões no mapa. Toca em cada balão pra Aurora te contar o que tem em cada pedaço do Brasil.",
    instrucao: "Toque em cada ponto pra abrir a página do atlas",
    mapaUrl: mapaBrasil,
    pontos: [
      {
        id: "p-norte",
        x: 30,
        y: 22,
        emoji: "🌳",
        cor: "from-emerald-500 to-green-700",
        titulo: "NORTE — a floresta",
        texto:
          "Aqui é a maior região do Brasil. A Floresta Amazônica cobre quase tudo, o rio Amazonas atravessa a paisagem e povos indígenas cuidam da mata há milhares de anos.",
        fotoUrl: norte,
      },
      {
        id: "p-nordeste",
        x: 78,
        y: 32,
        emoji: "🏖️",
        cor: "from-amber-400 to-yellow-600",
        titulo: "NORDESTE — o litoral e o sertão",
        texto:
          "Nove estados com praias famosas, comida deliciosa e o sertão da Caatinga. É a terra do frevo, do forró e do axé.",
        fotoUrl: nordeste,
      },
      {
        id: "p-centro",
        x: 45,
        y: 52,
        emoji: "⭐",
        cor: "from-orange-400 to-amber-600",
        titulo: "CENTRO-OESTE — o coração",
        texto:
          "No meio do Brasil fica Brasília, a capital do país. Tem o Cerrado, o Pantanal e muitas fazendas que alimentam o Brasil inteiro.",
        fotoUrl: centroOeste,
      },
      {
        id: "p-sudeste",
        x: 70,
        y: 65,
        emoji: "🏙️",
        cor: "from-red-500 to-rose-700",
        titulo: "SUDESTE — as grandes cidades",
        texto:
          "A região mais povoada. São Paulo, Rio de Janeiro, Belo Horizonte e Vitória concentram indústrias, portos e milhões de pessoas.",
        fotoUrl: sudeste,
      },
      {
        id: "p-sul",
        x: 52,
        y: 86,
        emoji: "🍇",
        cor: "from-sky-500 to-blue-700",
        titulo: "SUL — o frio brasileiro",
        texto:
          "A menor em tamanho, mas cheia de serras, parreirais e cidades organizadas. Tem clima frio e no inverno pode até nevar.",
        fotoUrl: sul,
      },
    ],
    falaFinal:
      "5 balões, 5 paisagens diferentes — e TODAS são Brasil. Percebeu como nosso país é diverso?",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Radar do explorador ligado! 3 perguntas rápidas pra ver se você já sabe reconhecer cada região.",
    instrucao: "Toque no card certo pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "Em qual região fica a Floresta Amazônica e o rio Amazonas?",
        fotoUrl: norte,
        cards: [
          { id: "norte", emoji: "🌳", titulo: "Norte", cor: "from-emerald-500 to-green-700" },
          { id: "sul", emoji: "🍇", titulo: "Sul", cor: "from-sky-500 to-blue-700" },
          { id: "sudeste", emoji: "🏙️", titulo: "Sudeste", cor: "from-red-500 to-rose-700" },
        ],
        correta: "norte",
        feedbackAcerto: "Isso! A Amazônia fica no NORTE 🌳 — a maior região do Brasil.",
        feedbackErro: "Pensa na floresta grande: Amazônia é NORTE 🌳.",
      },
      {
        id: "q2",
        pergunta: "Onde fica Brasília, a capital do nosso país?",
        fotoUrl: centroOeste,
        cards: [
          { id: "nordeste", emoji: "🏖️", titulo: "Nordeste", cor: "from-amber-400 to-yellow-600" },
          { id: "centro-oeste", emoji: "⭐", titulo: "Centro-Oeste", cor: "from-orange-400 to-amber-600" },
          { id: "sul", emoji: "🍇", titulo: "Sul", cor: "from-sky-500 to-blue-700" },
        ],
        correta: "centro-oeste",
        feedbackAcerto: "Perfeito! Brasília fica no CENTRO-OESTE ⭐ — no coração do Brasil.",
        feedbackErro: "Repensa: a capital fica bem no MEIO do mapa — Centro-Oeste ⭐.",
      },
      {
        id: "q3",
        pergunta: "Qual é a região MENOR do Brasil, com clima mais frio e serras?",
        fotoUrl: sul,
        cards: [
          { id: "norte", emoji: "🌳", titulo: "Norte", cor: "from-emerald-500 to-green-700" },
          { id: "sudeste", emoji: "🏙️", titulo: "Sudeste", cor: "from-red-500 to-rose-700" },
          { id: "sul", emoji: "🍇", titulo: "Sul", cor: "from-sky-500 to-blue-700" },
        ],
        correta: "sul",
        feedbackAcerto: "Exato! A região SUL 🍇 é a menor e a mais fria — pode até nevar!",
        feedbackErro:
          "Repara: friozinho, serras e vinhedos ficam no SUL 🍇 — lá embaixo no mapa.",
      },
    ],
    falaFinal:
      "Radar afiado! Você já reconhece as regiões pelas paisagens. Bora ver como elas se ORGANIZAM no mapa.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Duas camadas pra você comparar. Um interruptor acende as regiões do NORTE do Brasil. O outro acende as do SUL. Liga os dois pra ver o país inteiro.",
    instrucao: "Toque nos interruptores pra acender cada camada",
    mapaUrl: mapaBrasil,
    camadas: [
      {
        id: "metade-norte",
        rotulo: "Metade Norte (Norte + Nordeste)",
        emoji: "🌳",
        cor: "from-emerald-500 to-green-700",
        rect: { x: 15, y: 5, w: 80, h: 45 },
        descricao:
          "A METADE NORTE do país é quente o ano todo. Tem a Amazônia (Norte) e o Nordeste com praias e sertão. Aqui vivem cerca de 82 milhões de brasileiros.",
      },
      {
        id: "metade-sul",
        rotulo: "Metade Sul (Centro-Oeste + Sudeste + Sul)",
        emoji: "🏙️",
        cor: "from-sky-500 to-blue-700",
        rect: { x: 25, y: 45, w: 65, h: 50 },
        descricao:
          "A METADE SUL concentra as grandes cidades (Sudeste), as fazendas (Centro-Oeste) e o frio (Sul). Aqui vivem cerca de 121 milhões de brasileiros — a maior parte da população.",
      },
    ],
    falaFinal:
      "Percebeu? O Brasil todo tem 5 regiões, 26 estados e 1 Distrito Federal — mais de 200 milhões de brasileiros no total!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Bora fazer a GRANDE VIAGEM pelo Brasil! Toca nas regiões na ORDEM certa, começando pelo Norte e descendo até o Sul.",
    instrucao: "Toque nas regiões de CIMA pra BAIXO no mapa",
    pergunta: "Qual é a ordem das regiões do Brasil, do NORTE ao SUL?",
    paradas: [
      {
        id: "s1-norte",
        emoji: "🌳",
        rotulo: "1. Norte",
        descricao: "Começamos pela maior região: a Amazônia e o rio Amazonas no topo do mapa.",
      },
      {
        id: "s2-nordeste",
        emoji: "🏖️",
        rotulo: "2. Nordeste",
        descricao: "Descemos um pouco e chegamos ao litoral e sertão dos 9 estados nordestinos.",
      },
      {
        id: "s3-centro",
        emoji: "⭐",
        rotulo: "3. Centro-Oeste",
        descricao: "No coração do país, encontramos Brasília e o Cerrado.",
      },
      {
        id: "s4-sudeste",
        emoji: "🏙️",
        rotulo: "4. Sudeste",
        descricao: "Passamos pelas grandes cidades: São Paulo, Rio e Belo Horizonte.",
      },
      {
        id: "s5-sul",
        emoji: "🍇",
        rotulo: "5. Sul",
        descricao: "Chegamos no fim: serras, vinhedos e o clima mais frio do Brasil.",
      },
    ],
    ordemCerta: ["s1-norte", "s2-nordeste", "s3-centro", "s4-sudeste", "s5-sul"],
    feedbackAcerto: "Viagem completa! Você atravessou o Brasil INTEIRO de norte a sul.",
    feedbackErro:
      "Essa não é a próxima. Lembra: NORTE → NORDESTE → CENTRO-OESTE → SUDESTE → SUL.",
    falaFinal:
      "5 regiões, uma seguida da outra. Agora você sabe a ordem oficial do mapa do Brasil.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez, explorador! Eu fico caladinha. Você lê o Atlas sozinho e toca nas palavras-chave pra provar que entendeu.",
    tituloLivro: "📔 Atlas do Explorador Brasileiro",
    subtitulo: "Página 1 — O Mapa do Brasil e Suas Regiões",
    paragrafos: [
      {
        id: "p1",
        texto:
          "O BRASIL é um país gigante. Pra estudar melhor, o IBGE dividiu nosso território em 5 REGIÕES: Norte, Nordeste, Centro-Oeste, Sudeste e Sul.",
        chaves: ["brasil", "regiões", "ibge"],
      },
      {
        id: "p2",
        texto:
          "Cada região tem 26 ESTADOS somados e mais o Distrito Federal, onde fica BRASÍLIA, a capital do nosso país.",
        chaves: ["estados", "brasília", "capital"],
      },
      {
        id: "p3",
        texto:
          "As regiões não SEPARAM as pessoas. Elas AJUDAM o governo, as escolas e os cientistas a organizar informações sobre um país tão diverso.",
        chaves: ["regiões", "ajudam", "organizar"],
      },
      {
        id: "p4",
        texto:
          "Cada pedaço do Brasil tem sua paisagem, sua comida, seu sotaque e sua história. JUNTOS, formamos um só país cheio de riqueza.",
        chaves: ["paisagem", "juntos", "país"],
      },
    ],
    falaFinal:
      "Você leu sozinho e já sabe explicar por que temos 5 regiões. Bora pro minijogo!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Minijogo do EXPLORADOR RELÂMPAGO! Cada rodada mostra uma pista. Toca na REGIÃO certa antes do relógio zerar!",
    instrucao: "⏱️ Leia a pista e toque na região certa antes do tempo acabar!",
    duracaoSegundos: 15,
    pecas: [
      { id: "norte", emoji: "🌳", rotulo: "Norte" },
      { id: "nordeste", emoji: "🏖️", rotulo: "Nordeste" },
      { id: "centro-oeste", emoji: "⭐", rotulo: "Centro-Oeste" },
      { id: "sudeste", emoji: "🏙️", rotulo: "Sudeste" },
      { id: "sul", emoji: "🍇", rotulo: "Sul" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Floresta Amazônica", emoji: "🌳", cor: "from-emerald-500 to-green-700" },
        municipioB: { nome: "Rio Amazonas", emoji: "🐟", cor: "from-lime-400 to-emerald-600" },
        contexto:
          "A maior floresta tropical do mundo fica aqui. Onças, macacos e o boto-cor-de-rosa vivem por essas águas. Qual região é?",
        pecaCertaId: "norte",
        feedbackAcerto: "Boa! Amazônia = NORTE 🌳, a maior região do Brasil.",
        feedbackErro: "Pensa: floresta e rio Amazonas ficam no NORTE 🌳.",
      },
      {
        id: "r2",
        municipioA: { nome: "Praias e coqueiros", emoji: "🏖️", cor: "from-amber-400 to-yellow-600" },
        municipioB: { nome: "Forró e acarajé", emoji: "🎶", cor: "from-yellow-400 to-orange-600" },
        contexto:
          "Terra do axé, do forró, das praias famosas e do acarajé. Nove estados formam essa região. Quem é?",
        pecaCertaId: "nordeste",
        feedbackAcerto: "Perfeito! NORDESTE 🏖️ — praias, festa e sertão.",
        feedbackErro: "Repensa: axé, forró e coqueiro é NORDESTE 🏖️.",
      },
      {
        id: "r3",
        municipioA: { nome: "Brasília, a capital", emoji: "⭐", cor: "from-orange-400 to-amber-600" },
        municipioB: { nome: "Cerrado e Pantanal", emoji: "🐊", cor: "from-amber-400 to-yellow-600" },
        contexto:
          "Coração do Brasil! Aqui fica a capital, o Cerrado e o Pantanal com jacarés e capivaras. Qual região?",
        pecaCertaId: "centro-oeste",
        feedbackAcerto: "Combo! Brasília + Pantanal = CENTRO-OESTE ⭐.",
        feedbackErro: "Atenção: capital do Brasil = CENTRO-OESTE ⭐.",
      },
      {
        id: "r4",
        municipioA: { nome: "São Paulo e Rio", emoji: "🏙️", cor: "from-red-500 to-rose-700" },
        municipioB: { nome: "Muitas indústrias", emoji: "🏭", cor: "from-rose-400 to-red-600" },
        contexto:
          "A região mais povoada, com as maiores cidades e a maior parte das indústrias do país. Quem é?",
        pecaCertaId: "sudeste",
        feedbackAcerto: "Isso! SUDESTE 🏙️ — as maiores cidades e indústrias.",
        feedbackErro: "Repensa: SP e RJ ficam no SUDESTE 🏙️.",
      },
      {
        id: "r5",
        municipioA: { nome: "Serras e vinhedos", emoji: "🍇", cor: "from-sky-500 to-blue-700" },
        municipioB: { nome: "Pode nevar!", emoji: "❄️", cor: "from-blue-400 to-indigo-600" },
        contexto:
          "A MENOR região em tamanho. Clima frio, serras verdes e no inverno pode até cair NEVE. Qual é?",
        pecaCertaId: "sul",
        feedbackAcerto: "Perfeito! SUL 🍇 — o frio brasileiro com direito a neve.",
        feedbackErro: "Ops: friozinho e neve = SUL 🍇, lá embaixo do mapa.",
      },
      {
        id: "r6",
        municipioA: { nome: "Fazendas de soja", emoji: "🌾", cor: "from-orange-400 to-amber-600" },
        municipioB: { nome: "Mato Grosso e Goiás", emoji: "🐂", cor: "from-amber-400 to-yellow-600" },
        contexto:
          "Grandes fazendas de soja, milho e gado alimentam o Brasil e o mundo. Estados: Mato Grosso, Goiás e MS. Qual região?",
        pecaCertaId: "centro-oeste",
        feedbackAcerto: "Isso! As fazendas gigantes ficam no CENTRO-OESTE ⭐.",
        feedbackErro: "Pensa nos estados MT, MS e GO: são todos do CENTRO-OESTE ⭐.",
      },
    ],
    falaFinal:
      "5 regiões dominadas! Você já é um verdadeiro Explorador Relâmpago do Brasil.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Bora ver a PIZZA do Brasil! Cada fatia mostra quanto o país é dividido em tipos de paisagem. Toca em cada fatia pra revisar.",
    instrucao: "Toque em cada fatia pra ouvir a explicação",
    fatias: [
      {
        id: "quente",
        rotulo: "Metade Quente (Norte + Nordeste)",
        emoji: "☀️",
        percentual: 60,
        cor: "#f59e0b",
        descricao:
          "Cerca de 60% do território brasileiro fica em clima quente e úmido o ano todo. É onde estão a Amazônia e o litoral nordestino.",
        exemplos: ["Amazonas 🌳", "Bahia 🏖️", "Ceará 🌴"],
      },
      {
        id: "temperado",
        rotulo: "Metade Temperada (CO + SE + Sul)",
        emoji: "🌤️",
        percentual: 40,
        cor: "#0ea5e9",
        descricao:
          "Os outros 40% têm estações mais marcadas: verão quente e inverno frio. É onde vive a maior parte da população brasileira.",
        exemplos: ["São Paulo 🏙️", "Brasília ⭐", "Curitiba ❄️"],
      },
    ],
    falaFinal:
      "Uma pizza dividida em duas grandes fatias — mas dentro, 5 regiões, 26 estados e 1 DF. Isso é BRASIL.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última etapa, explorador! 3 perguntas de fechamento pra ganhar sua insígnia oficial: Cartógrafo do Brasil.",
    instrucao: "Responda as 3 e ganhe seu selo",
    perguntas: [
      {
        id: "av1",
        pergunta: "Quantas regiões o IBGE dividiu o Brasil?",
        opcoes: [
          { id: "a", texto: "3 regiões", correta: false },
          { id: "b", texto: "5 regiões", correta: true },
          { id: "c", texto: "26 regiões", correta: false },
        ],
        feedbackAcerto: "Isso! 5 regiões: Norte, Nordeste, Centro-Oeste, Sudeste e Sul.",
        feedbackErro: "Repensa: são 5 regiões. 26 é o número de ESTADOS.",
      },
      {
        id: "av2",
        pergunta: "Em qual região fica Brasília, a capital do Brasil?",
        opcoes: [
          { id: "a", texto: "Centro-Oeste", correta: true },
          { id: "b", texto: "Sudeste", correta: false },
          { id: "c", texto: "Norte", correta: false },
        ],
        feedbackAcerto: "Perfeito! Brasília fica no coração do país — Centro-Oeste.",
        feedbackErro: "Repensa: a capital fica bem no MEIO do mapa. Centro-Oeste.",
      },
      {
        id: "av3",
        pergunta: "Pra que serve dividir o Brasil em regiões?",
        opcoes: [
          { id: "a", texto: "Pra separar as pessoas.", correta: false },
          { id: "b", texto: "Pra facilitar o estudo e a organização do país.", correta: true },
          { id: "c", texto: "Pra ninguém visitar outros estados.", correta: false },
        ],
        feedbackAcerto:
          "Isso! Regiões AJUDAM a estudar, governar e cuidar de um país tão grande.",
        feedbackErro:
          "Repensa: brasileiro pode ir a qualquer região. As divisões AJUDAM a organizar.",
      },
    ],
    selo: {
      nome: "Cartógrafo do Brasil",
      subtitulo: "Insígnia oficial da Expedição Nacional",
      emoji: "🗺️",
      cor: "from-emerald-400 to-sky-600",
    },
    falaFinal:
      "PARABÉNS, Cartógrafo do Brasil! Você abriu o Globo das Descobertas e conheceu as 5 regiões. Aurora está orgulhosa!",
  },

  recompensa: {
    xp: 300,
    moedas: 200,
    medalha: "Cartógrafo do Brasil",
  },
};
