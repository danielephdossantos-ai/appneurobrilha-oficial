import type { AulaGeoV1 } from "../../types";
import hero from "@/assets/geografia-8ano/africa.jpg";

/**
 * Geografia · 8º Ano · Unidade 4 · Aula 01
 * África — Colonização, Descolonização e Desafios
 * BNCC: EF08GE06, EF08GE07
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-africa-desafios",
  titulo: "África — Colonização e Descolonização",
  iconeTrilha: "🌍",
  bncc: ["EF08GE06", "EF08GE07"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Por que a África tem tantos conflitos hoje?",
    mapaUrl: hero,
    imagemDestaqueUrl: hero,
    aurora: "Explorador, em 1884 europeus se sentaram em uma sala em Berlim e desenharam o mapa da África COM RÉGUA. Ignoraram povos, línguas e religiões. Colocaram inimigos históricos no mesmo país. Hoje, 140 anos depois, é isso que explica muita guerra civil africana.",
    falaFinal: "A colonização terminou em 1960. Mas as fronteiras dela ainda causam guerras.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Por que a África tem tantos conflitos étnicos?",
    pergunta: "Por que a África tem tantos conflitos étnicos?",
    opcoes: [
      { id: "natureza", titulo: "É natureza dos africanos", subtitulo: "povos que sempre brigaram", emoji: "😠", cor: "from-slate-400 to-slate-600" },
      { id: "fronteiras", titulo: "FRONTEIRAS coloniais", subtitulo: "desenhadas na régua em Berlim", emoji: "📏", cor: "from-slate-400 to-slate-600" }
    ],
    respostaCerta: "fronteiras",
    feedbackAcerto: "Isso! Europeus juntaram povos rivais no mesmo país. Base de todos os conflitos.",
    feedbackErro: "Nenhum povo é 'naturalmente' violento. A CULPA é das fronteiras arbitrárias.",
    falaFinal: "Berlim 1884 — o mapa que virou tragédia.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Conceitos-chave desta aula.",
    instrucao: "Leia cada caderno",
    cadernos: [
      {
        id: "berlim",
        capa: "1. Conferência de Berlim (1884)",
        emoji: "📏",
        cor: "from-slate-500 to-slate-700",
        conteudo: "CONFERÊNCIA DE BERLIM: reunião em que 14 países europeus dividiram a África entre si sem consultar os africanos. Fronteiras traçadas com régua no mapa.",
        exemplo: "Ex.: os iorubás foram divididos entre Nigéria, Benin e Togo.",
      },
      {
        id: "apartheid",
        capa: "2. Apartheid",
        emoji: "🚫",
        cor: "from-slate-500 to-slate-700",
        conteudo: "APARTHEID: regime de SEGREGAÇÃO RACIAL na África do Sul (1948–1994). Negros e brancos separados em tudo: escolas, ônibus, praias, empregos.",
        exemplo: "Ex.: Nelson Mandela ficou 27 anos preso lutando contra o apartheid.",
      },
      {
        id: "descolonizacao",
        capa: "3. Descolonização",
        emoji: "🎆",
        cor: "from-slate-500 to-slate-700",
        conteudo: "DESCOLONIZAÇÃO: processo de independência das colônias africanas, principalmente entre 1957 (Gana) e 1975 (Moçambique).",
        exemplo: "Ex.: Em 1960, 17 países africanos ficaram independentes — o 'Ano da África'.",
      },
      {
        id: "subsaariana",
        capa: "4. África Subsaariana",
        emoji: "🏜️",
        cor: "from-slate-500 to-slate-700",
        conteudo: "SUBSAARIANA: parte da África ao SUL do deserto do Saara. Cerca de 50 países. Enfrenta pobreza extrema, mas cresce rápido em economia e população.",
        exemplo: "Ex.: Nigéria, Etiópia, RD Congo — todos subsaarianos.",
      }
    ],
    falaFinal: "Berlim, apartheid, descolonização, subsaariana. 4 palavras, 1 continente.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada momento da história africana.",
    instrucao: "Toque em cada balão",
    mapaUrl: hero,
    pontos: [
      {
        id: "berlim",
        x: 50, y: 25,
        emoji: "📏",
        cor: "from-slate-500 to-slate-700",
        titulo: "1884 — Conferência de Berlim",
        texto: "14 países europeus dividem a África na régua. Fronteiras cortam povos ao meio.",
      },
      {
        id: "colonizacao",
        x: 45, y: 50,
        emoji: "⛓️",
        cor: "from-slate-500 to-slate-700",
        titulo: "1885–1960 — Colonização",
        texto: "Extração de ouro, diamantes, marfim. Trabalho forçado. Milhões mortos.",
      },
      {
        id: "independencia",
        x: 50, y: 70,
        emoji: "🎆",
        cor: "from-slate-500 to-slate-700",
        titulo: "1957–1975 — Independências",
        texto: "Gana em 1957. 17 países em 1960. Moçambique em 1975.",
      },
      {
        id: "apartheid",
        x: 55, y: 90,
        emoji: "🚫",
        cor: "from-slate-500 to-slate-700",
        titulo: "1948–1994 — Apartheid",
        texto: "Segregação racial na África do Sul. Termina com Mandela presidente em 1994.",
      }
    ],
    falaFinal: "140 anos, 4 marcos. Da divisão europeia à democracia sul-africana.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de analista.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Na Conferência de Berlim, europeus dividiram a África:",
        cards: [
          { id: "a", emoji: "📏", titulo: "Com régua, ignorando povos", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🗳️", titulo: "Consultando os africanos", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "⚔️", titulo: "Depois de guerra entre eles", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a",
        feedbackAcerto: "Isso! Fronteiras retas em mapa, sem consultar quem morava.",
        feedbackErro: "Nenhum africano foi convidado. Só europeus decidiram.",
      },
      {
        id: "q2",
        pergunta: "O apartheid ocorreu em qual país?",
        cards: [
          { id: "a", emoji: "🇿🇦", titulo: "África do Sul", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🇳🇬", titulo: "Nigéria", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "🇪🇬", titulo: "Egito", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a",
        feedbackAcerto: "Boa! De 1948 a 1994.",
        feedbackErro: "Só a África do Sul teve apartheid oficial.",
      },
      {
        id: "q3",
        pergunta: "O 'Ano da África' foi em:",
        cards: [
          { id: "a", emoji: "🎆", titulo: "1960 — 17 países independentes", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🎆", titulo: "1975 — Moçambique", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "🎆", titulo: "1957 — Gana", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a",
        feedbackAcerto: "Isso! 1960 — 17 países ganharam independência.",
        feedbackErro: "Gana foi 1957 (o primeiro). 1960 = ano com MAIS independências.",
      }
    ],
    falaFinal: "Radar ok. Bora ao mapa.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Marque 4 países africanos importantes.",
    instrucao: "Acenda 4 potências africanas",
    missao: {
      tipo: "selecionar",
      siglas: ["NG", "ZA", "EG", "ET"],
      pergunta: "Quais são as 4 maiores potências econômicas da África?",
    },
    falaFinal: "Nigéria (petróleo), África do Sul (mineração), Egito (canal de Suez), Etiópia (crescimento).",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize a linha do tempo.",
    instrucao: "Arraste cada evento pra ordem certa",
    pergunta: "História da África em ordem:",
    paradas: [
      {
        id: "berco",
        emoji: "🧬",
        rotulo: "1. Berço da Humanidade",
        descricao: "Homo sapiens surgiu na África há 300 mil anos.",
      },
      {
        id: "berlim",
        emoji: "📏",
        rotulo: "2. Conferência de Berlim (1884)",
        descricao: "Europeus dividem a África na régua sem consultar.",
      },
      {
        id: "colonizacao",
        emoji: "⛓️",
        rotulo: "3. Colonização (1885–1960)",
        descricao: "Extração intensa. Milhões escravizados e mortos.",
      },
      {
        id: "independencia",
        emoji: "🎆",
        rotulo: "4. Descolonização (1957–1975)",
        descricao: "17 países independentes em 1960. Moçambique em 1975.",
      },
      {
        id: "presente",
        emoji: "🌍",
        rotulo: "5. África hoje",
        descricao: "54 países. Cresce rápido, mas com muitos conflitos e desigualdade.",
      }
    ],
    ordemCerta: ["berco", "berlim", "colonizacao", "independencia", "presente"],
    feedbackAcerto: "Perfeito! Do berço da humanidade ao continente jovem.",
    feedbackErro: "Comece pelo berço da humanidade e termine na África atual.",
    falaFinal: "300 mil anos em 5 marcos.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com atenção. Marque as palavras-chave.",
    tituloLivro: "📘 Manual da África",
    subtitulo: "Capítulo 4 — Um continente de contrastes",
    paragrafos: [
      {
        id: "p1",
        texto: "A ÁFRICA é o BERÇO DA HUMANIDADE: aqui nasceu o Homo sapiens há 300 mil anos. Hoje tem 54 países e 1,4 bilhão de habitantes.",
        chaves: ["berço da humanidade", "54 países", "1,4 bilhão"],
      },
      {
        id: "p2",
        texto: "Em 1884, na CONFERÊNCIA DE BERLIM, 14 países europeus DIVIDIRAM a África na RÉGUA, sem consultar os africanos. Isso gerou fronteiras artificiais.",
        chaves: ["conferência de berlim", "dividiram", "artificiais"],
      },
      {
        id: "p3",
        texto: "A COLONIZAÇÃO europeia (1885–1960) extraiu ouro, marfim e escravizou milhões. A DESCOLONIZAÇÃO veio principalmente entre 1957 e 1975.",
        chaves: ["colonização", "descolonização"],
      },
      {
        id: "p4",
        texto: "O APARTHEID (África do Sul, 1948–1994) foi o regime racista mais famoso. NELSON MANDELA lutou contra e virou presidente em 1994.",
        chaves: ["apartheid", "nelson mandela", "1994"],
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
      { id: "ber", emoji: "📏", rotulo: "Berlim 1884" },
      { id: "apa", emoji: "🚫", rotulo: "Apartheid" },
      { id: "man", emoji: "👨🏿", rotulo: "Mandela" },
      { id: "des", emoji: "🎆", rotulo: "Descolonização" },
      { id: "sub", emoji: "🏜️", rotulo: "Subsaariana" },
      { id: "nig", emoji: "🛢️", rotulo: "Nigéria" }
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "1884", emoji: "📅", cor: "from-amber-400 to-orange-600" },
        municipioB: { nome: "14 países europeus", emoji: "🇪🇺", cor: "from-red-400 to-rose-600" },
        contexto: "Reunião em que europeus dividiram a África na régua:",
        pecaCertaId: "ber",
        feedbackAcerto: "Isso! CONFERÊNCIA DE BERLIM — origem dos conflitos.",
        feedbackErro: "1884 + europeus dividindo = CONFERÊNCIA DE BERLIM.",
      },
      {
        id: "r2",
        municipioA: { nome: "Segregação racial", emoji: "🚫", cor: "from-emerald-400 to-teal-600" },
        municipioB: { nome: "África do Sul", emoji: "🇿🇦", cor: "from-red-400 to-rose-600" },
        contexto: "Regime que separava brancos e negros na África do Sul:",
        pecaCertaId: "apa",
        feedbackAcerto: "Boa! APARTHEID — durou de 1948 a 1994.",
        feedbackErro: "Segregação + África do Sul = APARTHEID.",
      },
      {
        id: "r3",
        municipioA: { nome: "Preso 27 anos", emoji: "⛓️", cor: "from-sky-400 to-indigo-600" },
        municipioB: { nome: "Presidente em 1994", emoji: "🗳️", cor: "from-emerald-400 to-teal-600" },
        contexto: "Líder sul-africano que derrubou o apartheid:",
        pecaCertaId: "man",
        feedbackAcerto: "Isso! NELSON MANDELA — herói mundial.",
        feedbackErro: "Preso 27 anos + presidente = MANDELA.",
      },
      {
        id: "r4",
        municipioA: { nome: "Independência", emoji: "🎆", cor: "from-sky-400 to-blue-600" },
        municipioB: { nome: "1957–1975", emoji: "📅", cor: "from-purple-400 to-fuchsia-600" },
        contexto: "Processo em que colônias africanas viraram países independentes:",
        pecaCertaId: "des",
        feedbackAcerto: "Boa! DESCOLONIZAÇÃO — Gana (1957) foi a primeira.",
        feedbackErro: "Colônias virando países = DESCOLONIZAÇÃO.",
      },
      {
        id: "r5",
        municipioA: { nome: "Ao sul do Saara", emoji: "🏜️", cor: "from-yellow-400 to-amber-600" },
        municipioB: { nome: "50 países", emoji: "🌍", cor: "from-orange-400 to-red-600" },
        contexto: "Parte da África ao sul do deserto do Saara:",
        pecaCertaId: "sub",
        feedbackAcerto: "Isso! ÁFRICA SUBSAARIANA — cresce rápido.",
        feedbackErro: "Sul do Saara = SUBSAARIANA.",
      },
      {
        id: "r6",
        municipioA: { nome: "Petróleo", emoji: "🛢️", cor: "from-emerald-400 to-green-600" },
        municipioB: { nome: "220 milhões de hab", emoji: "👥", cor: "from-amber-400 to-orange-600" },
        contexto: "País mais populoso da África, grande produtor de petróleo:",
        pecaCertaId: "nig",
        feedbackAcerto: "Isso! NIGÉRIA — maior economia africana.",
        feedbackErro: "Petróleo + populoso = NIGÉRIA.",
      }
    ],
    falaFinal: "6 conceitos, 6 acertos. Você entende a África.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da ÁFRICA: as duas grandes divisões:",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "norte",
        rotulo: "África Setentrional",
        emoji: "🕌",
        percentual: 25,
        cor: "#f59e0b",
        descricao: "Norte do Saara. Egito, Marrocos, Argélia, Tunísia, Líbia. Cultura árabe-muçulmana. Mais próxima da Europa.",
        exemplos: [],
      },
      {
        id: "sub",
        rotulo: "África Subsaariana",
        emoji: "🌍",
        percentual: 75,
        cor: "#059669",
        descricao: "Sul do Saara. Cerca de 50 países. Cultura negra-africana original. Nigéria, Etiópia, RD Congo, África do Sul.",
        exemplos: [],
      }
    ],
    falaFinal: "O Saara divide a África em dois mundos culturais.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas para o selo Africanista.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "Na Conferência de Berlim (1884), os europeus:",
        opcoes: [
          { id: "a", texto: "a", correta: true },
          { id: "b", texto: "b", correta: true },
          { id: "c", texto: "c", correta: true },
        ],
        feedbackAcerto: "Isso! Fronteiras na régua — origem dos conflitos.",
        feedbackErro: "Dividiram sem consultar. Ninguém africano foi convidado.",
      },
      {
        id: "av2",
        pergunta: "O apartheid ocorreu em:",
        opcoes: [
          { id: "a", texto: "a", correta: true },
          { id: "b", texto: "b", correta: true },
          { id: "c", texto: "c", correta: true },
        ],
        feedbackAcerto: "Perfeito! Único país com apartheid oficial.",
        feedbackErro: "Só a África do Sul teve apartheid formal (1948–1994).",
      },
      {
        id: "av3",
        pergunta: "Nelson Mandela foi:",
        opcoes: [
          { id: "a", texto: "a", correta: true },
          { id: "b", texto: "b", correta: true },
          { id: "c", texto: "c", correta: true },
        ],
        feedbackAcerto: "Isso! Nobel da Paz e primeiro presidente negro.",
        feedbackErro: "Mandela lutou contra o apartheid e virou presidente.",
      }
    ],
    selo: {
      nome: "Africanista",
      subtitulo: "Insígnia do Descolonizador",
      emoji: "🌍",
      cor: "from-orange-400 to-red-600",
    },
    falaFinal: "Insígnia conquistada! Você entende a África real.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Africanista" },
};
