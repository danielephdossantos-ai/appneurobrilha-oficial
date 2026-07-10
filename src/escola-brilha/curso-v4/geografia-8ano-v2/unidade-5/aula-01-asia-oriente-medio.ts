import type { AulaGeoV1 } from "../../types";
import hero from "@/assets/geografia-8ano/asia-oriente-medio.jpg";

/**
 * Geografia · 8º Ano · Unidade 5 · Aula 01
 * Ásia e Oriente Médio
 * BNCC: EF08GE08, EF08GE09
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-asia-oriente-medio",
  titulo: "Ásia e Oriente Médio",
  iconeTrilha: "🕌",
  bncc: ["EF08GE08", "EF08GE09"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Por que o Oriente Médio vive em guerra?",
    mapaUrl: hero,
    imagemDestaqueUrl: hero,
    aurora: "Explorador, o Oriente Médio tem 5% da população mundial e 50% do petróleo. Onde há petróleo, há dinheiro. Onde há dinheiro, há disputa. Some a isso 3 religiões monoteístas nascidas na mesma região (judaísmo, cristianismo, islamismo) e você tem o barril de pólvora do planeta.",
    falaFinal: "Petróleo + religião + potências externas = conflito permanente.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "O que MAIS causa conflitos no Oriente Médio?",
    pergunta: "O que MAIS causa conflitos no Oriente Médio?",
    opcoes: [
      { id: "clima", titulo: "O calor do deserto", subtitulo: "gente fica nervosa", emoji: "🌡️", cor: "from-slate-400 to-slate-600" },
      { id: "petroleo", titulo: "PETRÓLEO + religião", subtitulo: "riqueza + disputas históricas", emoji: "🛢️", cor: "from-slate-400 to-slate-600" }
    ],
    respostaCerta: "petroleo",
    feedbackAcerto: "Isso! Petróleo atrai potências (EUA, Rússia). Religião divide povos. Conflito permanente.",
    feedbackErro: "Clima não gera guerras. Petróleo e religião SIM.",
    falaFinal: "Onde há óleo e fé, há disputa.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Conceitos-chave desta aula.",
    instrucao: "Leia cada caderno",
    cadernos: [
      {
        id: "opep",
        capa: "1. OPEP",
        emoji: "🛢️",
        cor: "from-slate-500 to-slate-700",
        conteudo: "OPEP (Organização dos Países Exportadores de Petróleo): cartel que controla os preços mundiais do petróleo. Reúne 13 países, sendo 6 do Oriente Médio.",
        exemplo: "Ex.: quando a OPEP corta produção, o preço da gasolina sobe no mundo todo.",
      },
      {
        id: "islamismo",
        capa: "2. Islamismo",
        emoji: "☪️",
        cor: "from-slate-500 to-slate-700",
        conteudo: "ISLAMISMO: religião monoteísta fundada por Maomé no séc. VII. 2 bilhões de fiéis. Divide-se em sunitas (85%) e xiitas (15%).",
        exemplo: "Ex.: rivalidade entre Arábia Saudita (sunita) e Irã (xiita) explica muitos conflitos.",
      },
      {
        id: "conflito",
        capa: "3. Israel × Palestina",
        emoji: "🕊️",
        cor: "from-slate-500 to-slate-700",
        conteudo: "CONFLITO ISRAEL-PALESTINA: disputa por terra desde 1948, quando a ONU criou o Estado de Israel em território palestino. Guerras sucessivas até hoje.",
        exemplo: "Ex.: Faixa de Gaza, Cisjordânia, Jerusalém — territórios em disputa.",
      },
      {
        id: "tigres",
        capa: "4. Tigres Asiáticos",
        emoji: "🐅",
        cor: "from-slate-500 to-slate-700",
        conteudo: "TIGRES ASIÁTICOS: Coreia do Sul, Cingapura, Taiwan e Hong Kong. Cresceram rapidamente entre 1960–90 investindo em educação e tecnologia.",
        exemplo: "Ex.: Samsung (Coreia), Foxconn (Taiwan) — potências industriais.",
      }
    ],
    falaFinal: "OPEP, islamismo, Israel-Palestina, Tigres. 4 conceitos para entender a Ásia.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada região asiática.",
    instrucao: "Toque em cada balão",
    mapaUrl: hero,
    pontos: [
      {
        id: "orientemedio",
        x: 30, y: 40,
        emoji: "🛢️",
        cor: "from-slate-500 to-slate-700",
        titulo: "Oriente Médio",
        texto: "Arábia Saudita, Irã, Iraque. Petróleo + islamismo + conflitos.",
      },
      {
        id: "sudeste",
        x: 70, y: 60,
        emoji: "🌏",
        cor: "from-slate-500 to-slate-700",
        titulo: "Sudeste Asiático",
        texto: "Vietnã, Tailândia, Indonésia. ASEAN. Indústria têxtil e eletrônica.",
      },
      {
        id: "china",
        x: 65, y: 35,
        emoji: "🏭",
        cor: "from-slate-500 to-slate-700",
        titulo: "China",
        texto: "1,4 bilhão. Fábrica do mundo. 2ª maior economia.",
      },
      {
        id: "japao",
        x: 85, y: 35,
        emoji: "🌸",
        cor: "from-slate-500 to-slate-700",
        titulo: "Japão",
        texto: "Tecnologia de ponta. 3ª maior economia. Sociedade envelhecida.",
      }
    ],
    falaFinal: "Ásia = petróleo + fábrica + tecnologia. 60% da humanidade em um continente.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de analista.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "O maior produtor de petróleo do Oriente Médio é:",
        cards: [
          { id: "a", emoji: "🇸🇦", titulo: "Arábia Saudita", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🇮🇱", titulo: "Israel", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "🇦🇪", titulo: "Emirados Árabes", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a",
        feedbackAcerto: "Isso! Arábia Saudita = líder mundial junto com EUA e Rússia.",
        feedbackErro: "Emirados também produz, mas Arábia é o maior do OM.",
      },
      {
        id: "q2",
        pergunta: "O conflito Israel × Palestina começou em:",
        cards: [
          { id: "a", emoji: "🗓️", titulo: "1948, com a criação de Israel", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🗓️", titulo: "2001, com o 11 de setembro", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "🗓️", titulo: "1990, na Guerra do Golfo", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a",
        feedbackAcerto: "Boa! ONU criou Israel em território palestino.",
        feedbackErro: "11/9 e Guerra do Golfo são outros conflitos. Israel-Palestina = 1948.",
      },
      {
        id: "q3",
        pergunta: "Os 'Tigres Asiáticos' cresceram investindo em:",
        cards: [
          { id: "a", emoji: "📚", titulo: "Educação e tecnologia", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🌾", titulo: "Agricultura", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "⛏️", titulo: "Mineração", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a",
        feedbackAcerto: "Isso! Escolas + fábricas de eletrônicos.",
        feedbackErro: "Tigres = investimento pesado em educação e indústria de alta tecnologia.",
      }
    ],
    falaFinal: "Radar ok. Ao mapa.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Marque potências econômicas asiáticas.",
    instrucao: "Acenda 4 potências asiáticas",
    missao: {
      tipo: "selecionar",
      siglas: ["CN", "JP", "IN", "KR"],
      pergunta: "Quais 4 países são as maiores potências econômicas da Ásia?",
    },
    falaFinal: "China (2º PIB), Japão (3º), Índia (5º), Coreia do Sul (13º). Juntas movem 40% da economia mundial.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize a linha do tempo.",
    instrucao: "Arraste cada evento pra ordem certa",
    pergunta: "Ordem cronológica dos eventos asiáticos:",
    paradas: [
      {
        id: "islamismo",
        emoji: "☪️",
        rotulo: "1. Fundação do Islamismo (622 d.C.)",
        descricao: "Maomé funda a religião em Meca. Se espalha por Ásia e África.",
      },
      {
        id: "colonizacao",
        emoji: "🇬🇧",
        rotulo: "2. Colonização Europeia (1500–1900)",
        descricao: "Inglaterra na Índia, França no Vietnã, Portugal em Macau.",
      },
      {
        id: "descolonizacao",
        emoji: "🎆",
        rotulo: "3. Independências (1947–1975)",
        descricao: "Índia (1947), Vietnã (1954), etc.",
      },
      {
        id: "tigres",
        emoji: "🐅",
        rotulo: "4. Tigres Asiáticos (1960–1990)",
        descricao: "Coreia do Sul, Cingapura, Taiwan crescem rapidamente.",
      },
      {
        id: "china",
        emoji: "🏭",
        rotulo: "5. Ascensão da China (1978+)",
        descricao: "Deng Xiaoping abre a economia. China vira fábrica do mundo.",
      }
    ],
    ordemCerta: ["islamismo", "colonizacao", "descolonizacao", "tigres", "china"],
    feedbackAcerto: "Perfeito! Do Islã à China moderna.",
    feedbackErro: "Comece pelo islamismo (622) e termine na China atual.",
    falaFinal: "1400 anos em 5 marcos.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com atenção. Marque as palavras-chave.",
    tituloLivro: "📘 Manual da Ásia",
    subtitulo: "Capítulo 5 — Petróleo, fé e fábrica",
    paragrafos: [
      {
        id: "p1",
        texto: "A ÁSIA é o MAIOR continente, com 4,7 BILHÕES de habitantes — 60% da humanidade. China e Índia sozinhas têm 2,8 bilhões.",
        chaves: ["ásia", "4,7 bilhões", "60%"],
      },
      {
        id: "p2",
        texto: "O ORIENTE MÉDIO detém metade das reservas mundiais de PETRÓLEO. A OPEP, cartel que reúne grandes produtores, controla os preços globais.",
        chaves: ["oriente médio", "petróleo", "opep"],
      },
      {
        id: "p3",
        texto: "O ISLAMISMO é a religião predominante do OM. Divide-se em SUNITAS (Arábia Saudita) e XIITAS (Irã) — rivalidade que causa guerras.",
        chaves: ["islamismo", "sunitas", "xiitas"],
      },
      {
        id: "p4",
        texto: "A CHINA é a fábrica do mundo (2ª maior economia). O JAPÃO lidera em tecnologia. Os TIGRES ASIÁTICOS (Coreia, Cingapura) também são potências.",
        chaves: ["china", "japão", "tigres asiáticos"],
      }
    ],
    falaFinal: "Leu tudo? Bora ao minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo ANALISTA EXPRESS! Qual conceito explica cada situação?",
    instrucao: "⏱️ Escolha o conceito certo",
    duracaoSegundos: 15,
    pecas: [
      { id: "opep", emoji: "🛢️", rotulo: "OPEP" },
      { id: "isl", emoji: "☪️", rotulo: "Islamismo" },
      { id: "isr", emoji: "🕊️", rotulo: "Israel-Palestina" },
      { id: "tig", emoji: "🐅", rotulo: "Tigres Asiáticos" },
      { id: "cn", emoji: "🏭", rotulo: "China" },
      { id: "jp", emoji: "🌸", rotulo: "Japão" }
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "13 países produtores", emoji: "🛢️", cor: "from-amber-400 to-orange-600" },
        municipioB: { nome: "Controla preços", emoji: "💰", cor: "from-red-400 to-rose-600" },
        contexto: "Cartel que controla o preço mundial do petróleo:",
        pecaCertaId: "opep",
        feedbackAcerto: "Isso! OPEP — Arábia Saudita, Irã, Iraque, Venezuela…",
        feedbackErro: "Cartel + petróleo = OPEP.",
      },
      {
        id: "r2",
        municipioA: { nome: "Maomé (séc. VII)", emoji: "👤", cor: "from-emerald-400 to-teal-600" },
        municipioB: { nome: "2 bilhões de fiéis", emoji: "🕌", cor: "from-red-400 to-rose-600" },
        contexto: "Religião monoteísta fundada em Meca:",
        pecaCertaId: "isl",
        feedbackAcerto: "Boa! ISLAMISMO — 2ª maior religião do mundo.",
        feedbackErro: "Maomé + Meca = ISLAMISMO.",
      },
      {
        id: "r3",
        municipioA: { nome: "Desde 1948", emoji: "📅", cor: "from-sky-400 to-indigo-600" },
        municipioB: { nome: "Faixa de Gaza", emoji: "🕊️", cor: "from-emerald-400 to-teal-600" },
        contexto: "Conflito por território iniciado com a criação de Israel:",
        pecaCertaId: "isr",
        feedbackAcerto: "Isso! ISRAEL-PALESTINA — 76 anos de guerra.",
        feedbackErro: "1948 + Gaza = ISRAEL-PALESTINA.",
      },
      {
        id: "r4",
        municipioA: { nome: "Coreia + Cingapura", emoji: "🐅", cor: "from-sky-400 to-blue-600" },
        municipioB: { nome: "Cresceram nos anos 60–90", emoji: "📈", cor: "from-purple-400 to-fuchsia-600" },
        contexto: "Grupo de países asiáticos que se industrializaram rapidamente:",
        pecaCertaId: "tig",
        feedbackAcerto: "Boa! TIGRES ASIÁTICOS — modelo de crescimento.",
        feedbackErro: "Coreia + Cingapura + Taiwan = TIGRES ASIÁTICOS.",
      },
      {
        id: "r5",
        municipioA: { nome: "1,4 bilhão", emoji: "👥", cor: "from-yellow-400 to-amber-600" },
        municipioB: { nome: "Fábrica do mundo", emoji: "🏭", cor: "from-orange-400 to-red-600" },
        contexto: "País mais populoso e 2ª maior economia do mundo:",
        pecaCertaId: "cn",
        feedbackAcerto: "Isso! CHINA — cresceu 10x em 30 anos.",
        feedbackErro: "Populoso + fábrica = CHINA.",
      },
      {
        id: "r6",
        municipioA: { nome: "Tecnologia de ponta", emoji: "🤖", cor: "from-emerald-400 to-green-600" },
        municipioB: { nome: "Ilhas + samurais", emoji: "🗾", cor: "from-amber-400 to-orange-600" },
        contexto: "País asiático líder em tecnologia e 3ª economia mundial:",
        pecaCertaId: "jp",
        feedbackAcerto: "Isso! JAPÃO — Toyota, Sony, Nintendo.",
        feedbackErro: "Alta tech + ilhas = JAPÃO.",
      }
    ],
    falaFinal: "6 conceitos, 6 acertos. Você entende a Ásia.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da ÁSIA por PIB:",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "china",
        rotulo: "China",
        emoji: "🇨🇳",
        percentual: 45,
        cor: "#dc2626",
        descricao: "2ª maior economia mundial. 45% do PIB asiático. Fábrica global.",
        exemplos: [],
      },
      {
        id: "japao",
        rotulo: "Japão",
        emoji: "🇯🇵",
        percentual: 15,
        cor: "#f59e0b",
        descricao: "3ª economia mundial. Tecnologia e automóveis. Sociedade envelhecida.",
        exemplos: [],
      },
      {
        id: "india",
        rotulo: "Índia",
        emoji: "🇮🇳",
        percentual: 15,
        cor: "#10b981",
        descricao: "5ª economia mundial. TI (Bangalore). População jovem.",
        exemplos: [],
      },
      {
        id: "resto",
        rotulo: "Resto da Ásia",
        emoji: "🌏",
        percentual: 25,
        cor: "#8b5cf6",
        descricao: "Coreia do Sul, Indonésia, Turquia, Arábia Saudita e outros 40+ países.",
        exemplos: [],
      }
    ],
    falaFinal: "China + Japão + Índia = 75% do PIB asiático.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas para o selo Explorador Asiático.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "A OPEP é:",
        opcoes: [
          { id: "a", texto: "a", correta: true },
          { id: "b", texto: "b", correta: true },
          { id: "c", texto: "c", correta: true },
        ],
        feedbackAcerto: "Isso! Controla preços mundiais.",
        feedbackErro: "OPEP = cartel dos produtores de petróleo.",
      },
      {
        id: "av2",
        pergunta: "O conflito Israel-Palestina começou em:",
        opcoes: [
          { id: "a", texto: "a", correta: true },
          { id: "b", texto: "b", correta: true },
          { id: "c", texto: "c", correta: true },
        ],
        feedbackAcerto: "Perfeito! ONU criou Israel em território palestino.",
        feedbackErro: "1948 — ONU + Israel = início do conflito.",
      },
      {
        id: "av3",
        pergunta: "Os 'Tigres Asiáticos' incluem:",
        opcoes: [
          { id: "a", texto: "a", correta: true },
          { id: "b", texto: "b", correta: true },
          { id: "c", texto: "c", correta: true },
        ],
        feedbackAcerto: "Isso! Coreia, Cingapura, Taiwan, Hong Kong.",
        feedbackErro: "China e Japão são outra categoria. Tigres = 4 economias menores que cresceram rápido.",
      }
    ],
    selo: {
      nome: "Explorador Asiático",
      subtitulo: "Insígnia do Analista Oriental",
      emoji: "🕌",
      cor: "from-red-400 to-rose-600",
    },
    falaFinal: "Insígnia conquistada! Você entende a Ásia contemporânea.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Explorador Asiático" },
};
