import type { AulaGeoV1 } from "../../types";
import hero from "@/assets/geografia-8ano/migracoes-refugiados.jpg";

/**
 * Geografia · 8º Ano · Unidade 7 · Aula 01
 * Migrações e Refugiados
 * BNCC: EF08GE12, EF08GE13
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-migracoes-refugiados",
  titulo: "Migrações e Refugiados",
  iconeTrilha: "🚶",
  bncc: ["EF08GE12", "EF08GE13"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Por que 280 milhões de pessoas vivem fora do próprio país?",
    mapaUrl: hero,
    imagemDestaqueUrl: hero,
    aurora: "Explorador, hoje há 280 milhões de migrantes internacionais e 108 milhões de refugiados no mundo. Sírios fugindo da guerra, venezuelanos fugindo da crise, africanos atravessando o Mediterrâneo. Nunca tanta gente esteve em movimento — desde a Segunda Guerra.",
    falaFinal: "Bora entender por que as pessoas migram — e o que enfrentam.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Qual é a MAIOR causa de migrações atuais?",
    pergunta: "Qual é a MAIOR causa de migrações atuais?",
    opcoes: [
      { id: "aventura", titulo: "Vontade de conhecer o mundo", subtitulo: "turismo prolongado", emoji: "🎒", cor: "from-slate-400 to-slate-600" },
      { id: "necessidade", titulo: "Guerras, fome e crises", subtitulo: "migração forçada", emoji: "🆘", cor: "from-slate-400 to-slate-600" }
    ],
    respostaCerta: "necessidade",
    feedbackAcerto: "Isso! A grande maioria FOGE — de guerra, fome, perseguição, mudança climática.",
    feedbackErro: "Turismo é escolha. Migração hoje é, na maioria, FUGA de crise.",
    falaFinal: "Ninguém deixa a casa por prazer. Deixa por necessidade.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Conceitos-chave desta aula.",
    instrucao: "Leia cada caderno",
    cadernos: [
      {
        id: "migrante",
        capa: "1. Migrante",
        emoji: "🚶",
        cor: "from-slate-500 to-slate-700",
        conteudo: "MIGRANTE: pessoa que se muda para outro país por escolha — geralmente em busca de trabalho ou melhor qualidade de vida.",
        exemplo: "Ex.: brasileiros que vão para Portugal trabalhar.",
      },
      {
        id: "refugiado",
        capa: "2. Refugiado",
        emoji: "🆘",
        cor: "from-slate-500 to-slate-700",
        conteudo: "REFUGIADO: pessoa que FOGE do próprio país por medo de perseguição, guerra ou violência. Protegido pela ONU (ACNUR).",
        exemplo: "Ex.: sírios que fugiram da guerra civil desde 2011.",
      },
      {
        id: "xenofobia",
        capa: "3. Xenofobia",
        emoji: "🚫",
        cor: "from-slate-500 to-slate-700",
        conteudo: "XENOFOBIA: ódio ou medo de estrangeiros. Ataques, discriminação e leis contra imigrantes.",
        exemplo: "Ex.: ataques a haitianos e venezuelanos no Brasil.",
      },
      {
        id: "climatico",
        capa: "4. Refugiado Climático",
        emoji: "🌊",
        cor: "from-slate-500 to-slate-700",
        conteudo: "REFUGIADO CLIMÁTICO: quem foge por causa de secas, inundações ou aumento do mar. Ainda não é oficialmente reconhecido pela ONU.",
        exemplo: "Ex.: moradores de Tuvalu fugindo da elevação do Pacífico.",
      }
    ],
    falaFinal: "Migrante, refugiado, xenofobia, climático. 4 palavras da nossa época.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada grande rota migratória atual.",
    instrucao: "Toque em cada balão",
    mapaUrl: hero,
    pontos: [
      {
        id: "mediterraneo",
        x: 50, y: 35,
        emoji: "🌊",
        cor: "from-slate-500 to-slate-700",
        titulo: "Mediterrâneo",
        texto: "Africanos fugindo em barcos para a Europa. Milhares morrem por ano no mar.",
      },
      {
        id: "mexico",
        x: 25, y: 50,
        emoji: "🌵",
        cor: "from-slate-500 to-slate-700",
        titulo: "EUA-México",
        texto: "Latino-americanos atravessando o deserto rumo aos EUA. Muro na fronteira.",
      },
      {
        id: "siria",
        x: 55, y: 45,
        emoji: "🕌",
        cor: "from-slate-500 to-slate-700",
        titulo: "Síria-Turquia",
        texto: "6 milhões de sírios refugiados na Turquia, Líbano e Jordânia.",
      },
      {
        id: "venezuela",
        x: 30, y: 70,
        emoji: "🇻🇪",
        cor: "from-slate-500 to-slate-700",
        titulo: "Venezuela",
        texto: "7 milhões de venezuelanos migraram: para Colômbia, Peru, Brasil e Chile.",
      }
    ],
    falaFinal: "4 rotas, milhões de histórias. O mundo em movimento.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de analista.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Refugiado é diferente de migrante porque:",
        cards: [
          { id: "a", emoji: "🆘", titulo: "Foge por medo de perseguição/guerra", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🎒", titulo: "Viaja por turismo", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "💼", titulo: "Vai a trabalho", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a",
        feedbackAcerto: "Isso! Refugiado é FORÇADO a fugir; migrante ESCOLHE.",
        feedbackErro: "Migrante escolhe. Refugiado foge por necessidade.",
      },
      {
        id: "q2",
        pergunta: "O maior grupo de refugiados atuais vem da:",
        cards: [
          { id: "a", emoji: "🇸🇾", titulo: "Síria", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🇧🇷", titulo: "Brasil", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "🇯🇵", titulo: "Japão", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a",
        feedbackAcerto: "Boa! 6 milhões desde 2011.",
        feedbackErro: "Brasil e Japão não são origem de refugiados. Síria = maior êxodo atual.",
      },
      {
        id: "q3",
        pergunta: "Xenofobia é:",
        cards: [
          { id: "a", emoji: "🚫", titulo: "Ódio a estrangeiros", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "❤️", titulo: "Amor por outra cultura", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "📚", titulo: "Estudo de línguas", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a",
        feedbackAcerto: "Isso! 'Xeno' = estrangeiro; 'fobia' = medo.",
        feedbackErro: "Xenofobia = discriminação e ataques a imigrantes.",
      }
    ],
    falaFinal: "Radar ok. Ao mapa.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Marque 4 países que MAIS RECEBEM refugiados.",
    instrucao: "Acenda os 4 maiores receptores",
    missao: {
      tipo: "selecionar",
      siglas: ["TR", "DE", "US", "CO"],
      pergunta: "Quais 4 países recebem MAIS refugiados hoje?",
    },
    falaFinal: "Turquia (sírios), Alemanha (sírios e afegãos), EUA (latinos), Colômbia (venezuelanos).",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize a linha do tempo.",
    instrucao: "Arraste cada evento pra ordem certa",
    pergunta: "Fluxos migratórios em ordem histórica:",
    paradas: [
      {
        id: "escravos",
        emoji: "⛓️",
        rotulo: "1. Tráfico de escravizados (1500–1888)",
        descricao: "12 milhões de africanos forçados para as Américas.",
      },
      {
        id: "europeus",
        emoji: "⛵",
        rotulo: "2. Europeus para as Américas (1850–1930)",
        descricao: "Milhões de italianos, alemães, japoneses vieram fugindo da fome.",
      },
      {
        id: "guerra",
        emoji: "🕊️",
        rotulo: "3. Pós-2ª Guerra (1945–1980)",
        descricao: "Judeus para Israel, europeus para EUA e Austrália.",
      },
      {
        id: "sul-norte",
        emoji: "🚶",
        rotulo: "4. Sul-Norte (1980+)",
        descricao: "Latinos para EUA, africanos para Europa, asiáticos para Golfo.",
      },
      {
        id: "refugiados",
        emoji: "🆘",
        rotulo: "5. Crise dos refugiados (2011+)",
        descricao: "Sírios, afegãos, venezuelanos. Ondas massivas por guerra e crise.",
      }
    ],
    ordemCerta: ["escravos", "europeus", "guerra", "sul-norte", "refugiados"],
    feedbackAcerto: "Perfeito! 500 anos de movimento humano.",
    feedbackErro: "Comece pelo tráfico e termine na crise atual.",
    falaFinal: "5 fases, milhões de histórias.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com atenção. Marque as palavras-chave.",
    tituloLivro: "📘 Manual das Migrações",
    subtitulo: "Capítulo 7 — Um mundo em movimento",
    paragrafos: [
      {
        id: "p1",
        texto: "Hoje há 280 MILHÕES de MIGRANTES internacionais e 108 MILHÕES de REFUGIADOS no mundo — o maior número desde a Segunda Guerra Mundial.",
        chaves: ["migrantes", "refugiados", "280 milhões"],
      },
      {
        id: "p2",
        texto: "MIGRANTE é quem se muda por ESCOLHA (trabalho, estudo). REFUGIADO é quem FOGE por medo de PERSEGUIÇÃO, GUERRA ou VIOLÊNCIA.",
        chaves: ["migrante", "refugiado", "fuga"],
      },
      {
        id: "p3",
        texto: "As principais rotas atuais são: MEDITERRÂNEO (África→Europa), EUA-MÉXICO, SÍRIA-TURQUIA e a diáspora VENEZUELANA na América do Sul.",
        chaves: ["mediterrâneo", "síria", "venezuela"],
      },
      {
        id: "p4",
        texto: "Muitos migrantes enfrentam XENOFOBIA — ódio e discriminação. Novos casos: REFUGIADOS CLIMÁTICOS, que fogem de secas e inundações.",
        chaves: ["xenofobia", "refugiados climáticos"],
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
      { id: "mig", emoji: "🚶", rotulo: "Migrante" },
      { id: "ref", emoji: "🆘", rotulo: "Refugiado" },
      { id: "xen", emoji: "🚫", rotulo: "Xenofobia" },
      { id: "cli", emoji: "🌊", rotulo: "Ref. climático" },
      { id: "sir", emoji: "🇸🇾", rotulo: "Síria" },
      { id: "ven", emoji: "🇻🇪", rotulo: "Venezuela" }
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Vai por trabalho", emoji: "💼", cor: "from-amber-400 to-orange-600" },
        municipioB: { nome: "Escolha própria", emoji: "✅", cor: "from-red-400 to-rose-600" },
        contexto: "Pessoa que se muda para outro país POR ESCOLHA:",
        pecaCertaId: "mig",
        feedbackAcerto: "Isso! MIGRANTE — mudança voluntária.",
        feedbackErro: "Escolha + trabalho = MIGRANTE.",
      },
      {
        id: "r2",
        municipioA: { nome: "Foge de guerra", emoji: "🆘", cor: "from-emerald-400 to-teal-600" },
        municipioB: { nome: "Protegido pela ONU", emoji: "🕊️", cor: "from-red-400 to-rose-600" },
        contexto: "Pessoa que foge do país por perseguição ou guerra:",
        pecaCertaId: "ref",
        feedbackAcerto: "Boa! REFUGIADO — fuga forçada, protegido pela ACNUR.",
        feedbackErro: "Foge + guerra = REFUGIADO.",
      },
      {
        id: "r3",
        municipioA: { nome: "Ódio a estrangeiros", emoji: "🚫", cor: "from-sky-400 to-indigo-600" },
        municipioB: { nome: "Ataques a imigrantes", emoji: "💢", cor: "from-emerald-400 to-teal-600" },
        contexto: "Discriminação e ódio contra pessoas de outros países:",
        pecaCertaId: "xen",
        feedbackAcerto: "Isso! XENOFOBIA — combate exige leis e educação.",
        feedbackErro: "Ódio + estrangeiro = XENOFOBIA.",
      },
      {
        id: "r4",
        municipioA: { nome: "Foge da seca", emoji: "🌵", cor: "from-sky-400 to-blue-600" },
        municipioB: { nome: "Ilha afundando", emoji: "🌊", cor: "from-purple-400 to-fuchsia-600" },
        contexto: "Novo tipo de refugiado que foge por causa do clima:",
        pecaCertaId: "cli",
        feedbackAcerto: "Boa! REFUGIADO CLIMÁTICO — categoria em crescimento.",
        feedbackErro: "Seca + clima = REFUGIADO CLIMÁTICO.",
      },
      {
        id: "r5",
        municipioA: { nome: "6 milhões fugiram", emoji: "🆘", cor: "from-yellow-400 to-amber-600" },
        municipioB: { nome: "Guerra desde 2011", emoji: "💣", cor: "from-orange-400 to-red-600" },
        contexto: "País que gerou a maior onda de refugiados atual:",
        pecaCertaId: "sir",
        feedbackAcerto: "Isso! SÍRIA — 6 milhões refugiados na Turquia e Europa.",
        feedbackErro: "Guerra 2011 + 6 milhões = SÍRIA.",
      },
      {
        id: "r6",
        municipioA: { nome: "7 milhões saíram", emoji: "🚶", cor: "from-emerald-400 to-green-600" },
        municipioB: { nome: "Vão para Colômbia e Brasil", emoji: "🇻🇪", cor: "from-amber-400 to-orange-600" },
        contexto: "País latino que perdeu 7 milhões de habitantes por crise:",
        pecaCertaId: "ven",
        feedbackAcerto: "Isso! VENEZUELA — maior êxodo da história latino-americana.",
        feedbackErro: "7 milhões + AL = VENEZUELA.",
      }
    ],
    falaFinal: "6 conceitos, 6 acertos. Você entende a crise migratória.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza dos REFUGIADOS por origem (108 mi total):",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "siria",
        rotulo: "Síria",
        emoji: "🇸🇾",
        percentual: 30,
        cor: "#dc2626",
        descricao: "6 milhões desde 2011. Guerra civil. Espalhados na Turquia, Líbano, Jordânia, Alemanha.",
        exemplos: [],
      },
      {
        id: "ven",
        rotulo: "Venezuela",
        emoji: "🇻🇪",
        percentual: 20,
        cor: "#f59e0b",
        descricao: "7 milhões. Crise econômica. Vão para Colômbia (2,5 mi), Peru, Brasil e Chile.",
        exemplos: [],
      },
      {
        id: "ucrania",
        rotulo: "Ucrânia",
        emoji: "🇺🇦",
        percentual: 15,
        cor: "#0ea5e9",
        descricao: "6 milhões desde 2022, com a invasão russa. Vão para Polônia e Alemanha.",
        exemplos: [],
      },
      {
        id: "outros",
        rotulo: "Outros",
        emoji: "🌍",
        percentual: 35,
        cor: "#8b5cf6",
        descricao: "Afegãos, sudaneses do Sul, mianmarenses (rohingya) e mais. Todos os continentes.",
        exemplos: [],
      }
    ],
    falaFinal: "Síria + Venezuela + Ucrânia = 65% dos refugiados atuais.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas para o selo Cidadão do Mundo.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "Refugiado é diferente de migrante porque:",
        opcoes: [
          { id: "a", texto: "a", correta: true },
          { id: "b", texto: "b", correta: true },
          { id: "c", texto: "c", correta: true },
        ],
        feedbackAcerto: "Isso! Refugiado FOGE; migrante ESCOLHE.",
        feedbackErro: "Refugiado = fuga forçada. Migrante = escolha.",
      },
      {
        id: "av2",
        pergunta: "A maior origem de refugiados atualmente é:",
        opcoes: [
          { id: "a", texto: "a", correta: true },
          { id: "b", texto: "b", correta: true },
          { id: "c", texto: "c", correta: true },
        ],
        feedbackAcerto: "Perfeito! 6 milhões desde 2011.",
        feedbackErro: "Brasil e Japão não geram refugiados. Síria = maior êxodo.",
      },
      {
        id: "av3",
        pergunta: "Xenofobia é:",
        opcoes: [
          { id: "a", texto: "a", correta: true },
          { id: "b", texto: "b", correta: true },
          { id: "c", texto: "c", correta: true },
        ],
        feedbackAcerto: "Isso! Combate exige leis e educação.",
        feedbackErro: "Xenofobia = discriminação contra estrangeiros.",
      }
    ],
    selo: {
      nome: "Cidadão do Mundo",
      subtitulo: "Insígnia do Humanitário",
      emoji: "🚶",
      cor: "from-amber-400 to-orange-700",
    },
    falaFinal: "Insígnia conquistada! Você entende as migrações do séc. XXI.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Cidadão do Mundo" },
};
