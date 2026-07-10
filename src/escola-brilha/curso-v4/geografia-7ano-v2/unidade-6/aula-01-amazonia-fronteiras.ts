import type { AulaGeoV1 } from "../../types";
import amaz from "@/assets/geografia-7ano/amazonia-aerea.jpg";
import desmate from "@/assets/geografia-7ano/desmatamento-arco.jpg";
import garimpo from "@/assets/geografia-7ano/garimpo-ilegal-amazonia.jpg";
import indigena from "@/assets/geografia-7ano/terra-indigena.jpg";

/**
 * Geografia · 7º Ano · Unidade 6 · Aula 01
 * "Amazônia e Novas Fronteiras" — BNCC EF07GE11, EF07GE12
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-amazonia-fronteiras",
  titulo: "Amazônia e Novas Fronteiras",
  iconeTrilha: "🌳",
  bncc: ["EF07GE11", "EF07GE12"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: amaz,
    imagemDestaqueUrl: amaz,
    aurora:
      "A AMAZÔNIA LEGAL cobre 5 milhões de km² (60% do Brasil) e envolve 9 estados. Abriga a maior floresta tropical do mundo, o maior rio em vazão (Amazonas), 300 povos indígenas e 10% de toda a biodiversidade do planeta. Mas também é uma FRONTEIRA em disputa: agronegócio, madeireiras e GARIMPO ilegal avançam sobre a floresta. Desde 1970, a Amazônia perdeu 20% de sua área original. O ARCO DO DESMATAMENTO — faixa que vai do MA ao AC — é onde a floresta encontra o boi, a soja e a motosserra.",
    falaFinal: "5 milhões de km². 300 povos. Uma disputa que decide o clima do planeta.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Chuta: qual é a PRINCIPAL causa do desmatamento na Amazônia brasileira hoje?",
    pergunta: "O que mais derruba floresta:",
    opcoes: [
      { id: "pec", titulo: "PECUÁRIA (boi)", subtitulo: "abrir pasto pra gado", emoji: "🐄", cor: "from-emerald-800 to-slate-950" },
      { id: "cid", titulo: "Cidades crescendo", subtitulo: "novos bairros ocupam a mata", emoji: "🏙️", cor: "from-sky-800 to-slate-950" },
    ],
    respostaCerta: "pec",
    feedbackAcerto:
      "Exato! 80% do desmatamento amazônico vira PASTAGEM para GADO. O boi é o principal motor. Depois vem soja (indiretamente, ocupando ex-pastos) e madeira ilegal. Cidades quase não contam.",
    feedbackErro:
      "Cidades quase não desmatam a Amazônia (elas são poucas). O motor é PECUÁRIA: 80% do desmatamento vira pasto pra boi. Depois soja, madeira e garimpo.",
    falaFinal: "Regra da Amazônia: onde tem desmate novo, quase sempre chega o boi primeiro.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos da Amazônia contemporânea. Cada card traz explicação, exemplo real e curiosidade.",
    instrucao: "",
    cadernos: [
      { id: "legal", capa: "1. Amazônia Legal", emoji: "🗺️", cor: "from-emerald-800 to-slate-950",
        conteudo: "AMAZÔNIA LEGAL é a região administrativa criada em 1953 pelo governo brasileiro. Abrange 9 estados: AM, PA, AC, RO, RR, AP, TO, MA e MT. Cobre 5 milhões de km² (60% do Brasil).",
        exemplo: "Curiosidade: essa delimitação existe pra receber políticas públicas específicas de proteção e desenvolvimento. É maior que a União Europeia inteira. Se fosse país, seria o 7º maior do mundo em território.",
        fotoUrl: amaz },
      { id: "arco", capa: "2. Arco do Desmatamento", emoji: "🪓", cor: "from-amber-800 to-orange-950",
        conteudo: "ARCO DO DESMATAMENTO é a faixa em forma de arco que vai do MA ao AC, passando pelo PA, TO, MT e RO. É onde a FRONTEIRA AGRÍCOLA avança sobre a floresta.",
        exemplo: "Curiosidade: 90% do desmatamento amazônico dos últimos 40 anos aconteceu no arco. Cidades como Sinop (MT), Marabá (PA) e Ariquemes (RO) cresceram como polos agropecuários no meio da floresta destruída.",
        fotoUrl: desmate },
      { id: "gar", capa: "3. Garimpo ilegal", emoji: "⛏️", cor: "from-red-800 to-slate-950",
        conteudo: "GARIMPO ILEGAL é a extração clandestina de ouro em terras protegidas (indígenas, unidades de conservação). Contamina rios com MERCÚRIO, destrói florestas e invade territórios indígenas.",
        exemplo: "Curiosidade: em 2023, garimpeiros ilegais na Terra Indígena Yanomami (RR) destruíram 5.500 hectares de floresta e contaminaram rios com mercúrio. 570 crianças yanomami morreram de desnutrição em 2022-23. Crise humanitária declarada.",
        fotoUrl: garimpo },
      { id: "ti", capa: "4. Terras Indígenas", emoji: "🏹", cor: "from-sky-800 to-slate-950",
        conteudo: "TERRAS INDÍGENAS (TIs) são áreas oficialmente demarcadas pelo governo para uso EXCLUSIVO de povos originários. O Brasil tem 725 TIs, cobrindo 13% do território nacional (majoritariamente na Amazônia).",
        exemplo: "Curiosidade: as TIs são as áreas com MENOS desmatamento da Amazônia. Onde vivem indígenas, a floresta se mantém em pé. Pesquisas mostram que os povos originários são os melhores GUARDIÕES da floresta — não é opinião, é dado científico.",
        fotoUrl: indigena },
    ],
    falaFinal: "Amazônia Legal, arco, garimpo, TIs. 4 conceitos que definem a disputa pela floresta.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Cada card é uma FORÇA que atua na Amazônia hoje. Toque em cada uma pra ver a foto real.",
    instrucao: "Toque nos 4 cards pra ouvir cada força",
    mapaUrl: amaz,
    pontos: [
      { id: "flor", x: 20, y: 30, emoji: "🌳", cor: "from-emerald-800 to-slate-950",
        titulo: "FLORESTA PRESERVADA — 80%",
        texto: "5 milhões de km² de floresta densa, rios gigantes, 40 mil espécies de plantas, 300 povos indígenas. Ainda 80% intacta. Regula o clima de metade do continente.",
        fotoUrl: amaz },
      { id: "des", x: 55, y: 45, emoji: "🪓", cor: "from-amber-800 to-orange-950",
        titulo: "DESMATAMENTO — 20% perdido",
        texto: "Arco do Desmatamento: MA → AC. 90% vira pasto pra gado. Cerca de 1 milhão de km² já destruídos em 50 anos. Cada árvore derrubada libera CO₂ e reduz chuva no Sudeste.",
        fotoUrl: desmate },
      { id: "gar", x: 45, y: 60, emoji: "⛏️", cor: "from-red-800 to-slate-950",
        titulo: "GARIMPO ILEGAL — Invasão",
        texto: "50 mil garimpeiros só em terras Yanomami em 2022. Contaminam rios com mercúrio. Destroem floresta pra escavar ouro. Financiado por rede internacional.",
        fotoUrl: garimpo },
      { id: "ind", x: 70, y: 75, emoji: "🏹", cor: "from-sky-800 to-slate-950",
        titulo: "POVOS ORIGINÁRIOS — Guardiões",
        texto: "1 milhão de indígenas vivem no Brasil, maioria na Amazônia. 305 povos falam 274 línguas diferentes. Suas terras são os pontos mais preservados da floresta.",
        fotoUrl: indigena },
    ],
    falaFinal: "4 forças, 1 floresta. Disputa que vai decidir o clima do planeta neste século.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "4 perguntas de biólogo florestal.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "AMAZÔNIA LEGAL cobre qual % do Brasil?",
        fotoUrl: amaz,
        cards: [
          { id: "a", emoji: "📊", titulo: "60% do território", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "📈", titulo: "10% do território", cor: "from-amber-800 to-orange-950" },
          { id: "c", emoji: "📉", titulo: "90% do território", cor: "from-sky-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso! 60% do Brasil — 5 milhões de km². 9 estados.",
        feedbackErro: "É 60% — 5 milhões de km² espalhados por 9 estados." },
      { id: "q2", pergunta: "Principal CAUSA do desmatamento amazônico:",
        fotoUrl: desmate,
        cards: [
          { id: "a", emoji: "🐄", titulo: "Pecuária (pasto pra boi)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🏙️", titulo: "Cidades crescendo", cor: "from-sky-800 to-slate-950" },
          { id: "c", emoji: "🏭", titulo: "Fábricas se instalando", cor: "from-amber-800 to-orange-950" },
        ], correta: "a",
        feedbackAcerto: "Isso! 80% do desmatamento vira PASTO. O boi é o principal motor.",
        feedbackErro: "Cidades e fábricas quase não desmatam a Amazônia. O boi é o vilão principal." },
      { id: "q3", pergunta: "O que caracteriza o GARIMPO ILEGAL na Amazônia:",
        fotoUrl: garimpo,
        cards: [
          { id: "a", emoji: "☠️", titulo: "Contamina rios com mercúrio", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🌊", titulo: "Melhora a navegação dos rios", cor: "from-sky-800 to-slate-950" },
          { id: "c", emoji: "🌳", titulo: "Preserva a floresta", cor: "from-amber-800 to-orange-950" },
        ], correta: "a",
        feedbackAcerto: "Isso! Mercúrio contamina peixes, água e indígenas. Crise humanitária.",
        feedbackErro: "Garimpo destrói tudo. CONTAMINA rios com mercúrio, mata peixes e envenena povos indígenas." },
      { id: "q4", pergunta: "Onde a floresta amazônica está MAIS preservada:",
        fotoUrl: indigena,
        cards: [
          { id: "a", emoji: "🏹", titulo: "Nas Terras Indígenas", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🚜", titulo: "Nas grandes fazendas", cor: "from-amber-800 to-orange-950" },
          { id: "c", emoji: "🏗️", titulo: "Nas áreas urbanas", cor: "from-sky-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso! Indígenas = melhores GUARDIÕES da floresta. Fato científico.",
        feedbackErro: "Fazendas e cidades desmatam. Nas TERRAS INDÍGENAS a floresta se mantém em pé." },
    ],
    falaFinal: "4 acertos = biólogo florestal em formação.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "A AMAZÔNIA LEGAL cobre 9 estados. Marque os 4 estados MAIS afetados pelo ARCO DO DESMATAMENTO (onde mais se desmata).",
    instrucao: "Acenda os 4 estados do arco",
    missao: {
      tipo: "selecionar",
      siglas: ["PA", "MT", "RO", "MA"],
      pergunta: "Quais estados sofrem mais desmatamento?",
    },
    falaFinal:
      "PA, MT, RO, MA. Coração do arco do desmatamento. Onde o boi encontra a floresta.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como uma FAZENDA nasce no meio da Amazônia? Organize as etapas do desmatamento típico.",
    instrucao: "Toque na ordem",
    pergunta: "Da floresta ao pasto:",
    paradas: [
      { id: "1", emoji: "🌳", rotulo: "1. Floresta original",
        descricao: "Floresta densa há milhões de anos. Milhares de espécies convivem.", fotoUrl: amaz },
      { id: "2", emoji: "🪚", rotulo: "2. Corte da madeira nobre",
        descricao: "Madeireiros ilegais entram e cortam mogno, cedro, ipê. Vendem no mercado ilegal." },
      { id: "3", emoji: "🔥", rotulo: "3. Queimada",
        descricao: "Restante da floresta é queimado. Fumaça sobe, CO₂ vai pra atmosfera.", fotoUrl: desmate },
      { id: "4", emoji: "🌱", rotulo: "4. Plantação de capim",
        descricao: "Semeiam capim braquiária. Vira pasto pra gado." },
      { id: "5", emoji: "🐄", rotulo: "5. Boi chega e ocupa",
        descricao: "Rebanho pasta. Terra é regularizada com títulos fraudados. Fazenda 'legal'." },
    ],
    ordemCerta: ["1", "2", "3", "4", "5"],
    feedbackAcerto: "Perfeito! Ciclo trágico repetido em milhões de hectares.",
    feedbackErro: "Comece pela floresta original. Depois madeira, queimada, capim, boi.",
    falaFinal: "5 etapas. 20% da Amazônia derrubada seguindo essa mesma receita.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com calma. Os TERMOS-CHAVE ficam destacados — toque em qualquer um pra ver a definição.",
    tituloLivro: "📘 Manual do Explorador do Brasil",
    subtitulo: "Capítulo 6 — Amazônia e Novas Fronteiras",
    paragrafos: [
      { id: "p1",
        texto: "A AMAZÔNIA LEGAL é a região administrativa que cobre 60% do Brasil. Abriga a maior FLORESTA TROPICAL do planeta.",
        chaves: ["AMAZÔNIA LEGAL", "FLORESTA TROPICAL"],
        definicoes: {
          "AMAZÔNIA LEGAL": "Criada em 1953. Abrange AM, PA, AC, RO, RR, AP, TO, MA e MT. 5 milhões de km².",
          "FLORESTA TROPICAL": "Vegetação densa em regiões quentes e úmidas. Amazônia é a MAIOR do planeta.",
        },
        fotoUrl: amaz,
      },
      { id: "p2",
        texto: "O ARCO DO DESMATAMENTO é a faixa onde a FRONTEIRA AGRÍCOLA avança sobre a floresta. Vai do MA ao AC.",
        chaves: ["ARCO DO DESMATAMENTO", "FRONTEIRA AGRÍCOLA"],
        definicoes: {
          "ARCO DO DESMATAMENTO": "Curva onde 90% do desmatamento amazônico acontece. Passa por MA, TO, PA, MT, RO, AC.",
          "FRONTEIRA AGRÍCOLA": "Faixa em expansão onde a agropecuária avança sobre biomas naturais.",
        },
        fotoUrl: desmate,
      },
      { id: "p3",
        texto: "O GARIMPO ILEGAL contamina rios com MERCÚRIO e invade TERRAS INDÍGENAS. Financiado por redes criminosas internacionais.",
        chaves: ["GARIMPO ILEGAL", "MERCÚRIO", "TERRAS INDÍGENAS"],
        definicoes: {
          "GARIMPO ILEGAL": "Mineração clandestina em áreas protegidas. Cria buracos, contamina, invade.",
          "MERCÚRIO": "Metal tóxico usado para separar o ouro. Envenena peixes, água, indígenas.",
          "TERRAS INDÍGENAS": "725 áreas oficialmente demarcadas para uso exclusivo dos povos originários.",
        },
        fotoUrl: garimpo,
      },
      { id: "p4",
        texto: "POVOS ORIGINÁRIOS são os melhores GUARDIÕES da floresta. Pesquisas mostram que as Terras Indígenas têm o MENOR desmatamento da Amazônia.",
        chaves: ["POVOS ORIGINÁRIOS", "GUARDIÕES"],
        definicoes: {
          "POVOS ORIGINÁRIOS": "1 milhão de indígenas no Brasil, 305 povos, 274 línguas. Maioria vive na Amazônia.",
          "GUARDIÕES": "Nas TIs, o desmatamento é 10x menor que em fazendas. Fato comprovado por satélite.",
        },
        fotoUrl: indigena,
      },
    ],
    falaFinal: "Leu tudo? Bora pro quiz final.",
  },

  cena09_minijogo: (() => {
    const cards = [
      { id: "legal", emoji: "", titulo: "Amazônia Legal", cor: "from-slate-800 to-slate-900" },
      { id: "arco", emoji: "", titulo: "Arco do Desmatamento", cor: "from-slate-800 to-slate-900" },
      { id: "gar", emoji: "", titulo: "Garimpo ilegal", cor: "from-slate-800 to-slate-900" },
      { id: "ti", emoji: "", titulo: "Terras Indígenas", cor: "from-slate-800 to-slate-900" },
      { id: "pec", emoji: "", titulo: "Pecuária extensiva", cor: "from-slate-800 to-slate-900" },
      { id: "merc", emoji: "", titulo: "Mercúrio", cor: "from-slate-800 to-slate-900" },
    ];
    return {
      tipo: "quizRadar" as const,
      aurora: "Quiz rápido: pra cada descrição, escolha o conceito correto.",
      instrucao: "Escolha o conceito correto",
      perguntas: [
        { id: "r1", pergunta: "Região administrativa criada em 1953 que abrange 9 estados e 60% do Brasil.", cards, correta: "legal",
          feedbackAcerto: "Isso. 9 estados + 60% do Brasil = AMAZÔNIA LEGAL.", feedbackErro: "É a AMAZÔNIA LEGAL. 5 milhões de km²." },
        { id: "r2", pergunta: "Faixa em curva onde 90% do desmatamento amazônico acontece.", cards, correta: "arco",
          feedbackAcerto: "Isso. Faixa em curva do desmate = ARCO DO DESMATAMENTO.", feedbackErro: "É o ARCO DO DESMATAMENTO. Do MA ao AC." },
        { id: "r3", pergunta: "Mineração clandestina de ouro que contamina rios e invade terras indígenas.", cards, correta: "gar",
          feedbackAcerto: "Isso. Mineração clandestina = GARIMPO ILEGAL.", feedbackErro: "É o GARIMPO ILEGAL. Envenena rios e comunidades." },
        { id: "r4", pergunta: "Áreas oficialmente demarcadas para uso exclusivo dos povos originários — melhores preservadas.", cards, correta: "ti",
          feedbackAcerto: "Isso. Áreas indígenas oficiais = TERRAS INDÍGENAS.", feedbackErro: "São as TERRAS INDÍGENAS. Onde a floresta mais se preserva." },
        { id: "r5", pergunta: "Principal atividade que causa 80% do desmatamento amazônico: criação de gado em grandes áreas.", cards, correta: "pec",
          feedbackAcerto: "Isso. Gado em pasto extenso = PECUÁRIA EXTENSIVA.", feedbackErro: "É a PECUÁRIA EXTENSIVA. 80% do desmate vira pasto." },
        { id: "r6", pergunta: "Metal tóxico usado pelo garimpo que contamina peixes e envenena comunidades ribeirinhas e indígenas.", cards, correta: "merc",
          feedbackAcerto: "Isso. Metal tóxico do garimpo = MERCÚRIO.", feedbackErro: "É o MERCÚRIO. Usado pra separar o ouro e envenena tudo depois." },
      ],
      falaFinal: "6 perguntas, 6 conceitos. Guardião da floresta em formação.",
    };
  })(),

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da Amazônia hoje: floresta em pé × área já desmatada.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "flor", rotulo: "Floresta preservada (80%)", emoji: "🌳", percentual: 80, cor: "#059669",
        descricao: "Ainda 4 milhões de km² em pé. Onde vivem indígenas, castanheiros, ribeirinhos.",
        exemplos: ["🌳 Copas altas", "🐆 Onça", "🦜 Arara"] },
      { id: "des", rotulo: "Área desmatada (20%)", emoji: "🪓", percentual: 20, cor: "#b45309",
        descricao: "1 milhão de km² perdidos em 50 anos. 90% virou pasto pra gado.",
        exemplos: ["🐄 Boi", "🌾 Soja", "⛏️ Garimpo"] },
    ],
    falaFinal: "80% em pé. 20% perdidos. Cada árvore que cai libera CO₂ e seca o Sudeste.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Guardião da Amazônia.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "AMAZÔNIA LEGAL cobre quantos estados brasileiros?",
        opcoes: [
          { id: "a", texto: "3 estados", correta: false },
          { id: "b", texto: "9 estados", correta: true },
          { id: "c", texto: "20 estados", correta: false },
        ],
        feedbackAcerto: "Isso! 9 estados: AM, PA, AC, RO, RR, AP, TO, MA, MT.",
        feedbackErro: "São 9 estados. 60% do Brasil." },
      { id: "av2", pergunta: "Principal causa do desmatamento amazônico:",
        opcoes: [
          { id: "a", texto: "Cidades crescendo", correta: false },
          { id: "b", texto: "Pecuária (pasto pra boi)", correta: true },
          { id: "c", texto: "Turismo ecológico", correta: false },
        ],
        feedbackAcerto: "Isso! 80% do desmate vira pasto pra boi.",
        feedbackErro: "Cidades e turismo quase não desmatam. É PECUÁRIA (80%)." },
      { id: "av3", pergunta: "Onde a floresta amazônica está mais preservada:",
        opcoes: [
          { id: "a", texto: "Nas grandes fazendas", correta: false },
          { id: "b", texto: "Nas Terras Indígenas", correta: true },
          { id: "c", texto: "Nas áreas urbanas", correta: false },
        ],
        feedbackAcerto: "Isso! Indígenas = melhores guardiões da floresta.",
        feedbackErro: "Fazendas desmatam. Cidades também. As TERRAS INDÍGENAS preservam." },
    ],
    selo: { nome: "Guardião da Amazônia", subtitulo: "Insígnia do Explorador do Brasil", emoji: "🌳", cor: "from-emerald-800 to-slate-950" },
    falaFinal: "Insígnia conquistada! Você conhece a Amazônia e suas disputas.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Guardião da Amazônia" },
};
