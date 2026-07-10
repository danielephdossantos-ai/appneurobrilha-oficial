import type { AulaGeoV1 } from "../../types";

/**
 * Geografia · 6º Ano · Unidade 1 · Aula 01
 * "A Terra no Espaço e Seus Movimentos" — EF06GE03
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-terra-no-espaco",
  titulo: "A Terra no Espaço e Seus Movimentos",
  iconeTrilha: "🌍",
  bncc: ["EF06GE03"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe: o planeta em ação.",
    mapaUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    imagemDestaqueUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    aurora: "Explorador, o Globo das Descobertas nos levou pro ESPAÇO! A Terra faz DOIS movimentos ao mesmo tempo: gira em torno de si (Rotação) e viaja ao redor do Sol (Translação). Isso cria o DIA, a NOITE e as ESTAÇÕES do ano.",
    falaFinal: "Um planeta em movimento constante. Bora entender direito.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Explorador, o Globo das Descobertas nos levou pro ESPAÇO! A Terra faz DOIS movimentos ao mesmo tempo: gira em torno de si (Rotação) e viaja ao redor do Sol (Translação). Isso cria o DIA, a NOITE e as ESTAÇÕES do ano.",
    pergunta: "Por que existem 4 estações do ano?",
    opcoes: [
      { id: "eixo", titulo: "PORQUE o eixo é INCLINADO", subtitulo: "diferente luz solar em cada época", emoji: "✅", cor: "from-emerald-400 to-green-600" },
      { id: "errado", titulo: "PORQUE o Sol se apaga", subtitulo: "no inverno", emoji: "❌", cor: "from-slate-400 to-gray-600" },
    ],
    respostaCerta: "eixo",
    feedbackAcerto: "Isso! A inclinação do eixo faz a luz do Sol bater diferente ao longo do ano.",
    feedbackErro: "O Sol nunca se apaga. É a INCLINAÇÃO da Terra que cria as estações.",
    falaFinal: "Eixo inclinado = 4 estações. Bora ver mais.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras-chave desta unidade.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      { id: "rotacao", capa: "1. Rotação", emoji: "🔄", cor: "from-sky-500 to-blue-700", conteudo: "ROTAÇÃO é a Terra girando em torno de si mesma. Dura 24 HORAS. Cria o DIA (lado iluminado) e a NOITE (lado escuro).", exemplo: "Ex.: sol nasce no leste, se põe no oeste." },
      { id: "translacao", capa: "2. Translação", emoji: "🌍", cor: "from-amber-500 to-orange-700", conteudo: "TRANSLAÇÃO é a Terra viajando ao redor do Sol. Dura 365 DIAS e 6 HORAS. Cria o ANO e as ESTAÇÕES.", exemplo: "Ex.: a cada 4 anos, ano bissexto com 366 dias." },
      { id: "eixo", capa: "3. Eixo inclinado", emoji: "📐", cor: "from-purple-500 to-fuchsia-700", conteudo: "O eixo da Terra é INCLINADO em 23,5°. Sem essa inclinação, não existiriam estações.", exemplo: "Ex.: no verão do sul, é inverno no norte." },
      { id: "estacoes", capa: "4. Estações", emoji: "🍂", cor: "from-emerald-500 to-green-700", conteudo: "As 4 estações: PRIMAVERA (flores), VERÃO (calor), OUTONO (folhas caem), INVERNO (frio).", exemplo: "Ex.: no Brasil o verão começa em dezembro." }
    ],
    falaFinal: "Rotação, translação, eixo, estações. 4 chaves do espaço.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada ponto e ouça.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800",
    pontos: [
      { id: "dia", x: 30, y: 30, emoji: "☀️", cor: "from-amber-500 to-yellow-600", titulo: "DIA — lado iluminado", texto: "O hemisfério voltado pro Sol recebe luz. É o DIA. Dura cerca de 12 horas." },
      { id: "noite", x: 70, y: 30, emoji: "🌙", cor: "from-slate-600 to-indigo-800", titulo: "NOITE — lado escuro", texto: "O hemisfério oposto ao Sol fica na sombra. É a NOITE." },
      { id: "verao", x: 30, y: 70, emoji: "🌞", cor: "from-red-500 to-orange-600", titulo: "VERÃO", texto: "Quando o hemisfério fica MAIS inclinado pro Sol, recebe mais luz direta. Calor forte." },
      { id: "inverno", x: 70, y: 70, emoji: "❄️", cor: "from-sky-500 to-blue-700", titulo: "INVERNO", texto: "Quando o hemisfério fica MENOS inclinado pro Sol, recebe luz de raspão. Frio." }
    ],
    falaFinal: "Dia, noite, verão, inverno — tudo por causa do movimento.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Quanto tempo dura a ROTAÇÃO?", cards: [{ id: "h24", emoji: "⏰", titulo: "24 horas", cor: "from-sky-500 to-blue-700" }, { id: "h1", emoji: "🕐", titulo: "1 hora", cor: "from-amber-500 to-orange-700" }, { id: "ano", emoji: "📅", titulo: "1 ano", cor: "from-red-500 to-rose-700" }], correta: "h24", feedbackAcerto: "Isso! 24 horas = 1 dia completo.", feedbackErro: "Rotação = 24h. Translação = 365 dias." },
      { id: "q2", pergunta: "O que causa as 4 ESTAÇÕES?", cards: [{ id: "eixo", emoji: "📐", titulo: "Eixo inclinado", cor: "from-purple-500 to-fuchsia-700" }, { id: "sol", emoji: "🌞", titulo: "Sol pisca", cor: "from-amber-500 to-yellow-600" }, { id: "lua", emoji: "🌙", titulo: "A Lua", cor: "from-slate-500 to-gray-700" }], correta: "eixo", feedbackAcerto: "Perfeito! Eixo inclinado + translação = estações.", feedbackErro: "O Sol e a Lua não mudam. É o EIXO INCLINADO da Terra." },
      { id: "q3", pergunta: "Quando é DIA no Brasil, no Japão é...", cards: [{ id: "noite", emoji: "🌙", titulo: "Noite", cor: "from-slate-600 to-indigo-800" }, { id: "dia", emoji: "☀️", titulo: "Dia também", cor: "from-amber-500 to-yellow-600" }, { id: "por", emoji: "🌅", titulo: "Sempre pôr do sol", cor: "from-red-500 to-rose-700" }], correta: "noite", feedbackAcerto: "Isso! Enquanto um lado da Terra tem dia, o outro tem noite.", feedbackErro: "Rotação: cada lado do planeta recebe Sol em horários diferentes." }
    ],
    falaFinal: "Radar afiado! Você mapeou os movimentos da Terra.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Como a Terra é gigante e gira, cada parte do mundo vê o Sol em horário diferente. Isso são os FUSOS HORÁRIOS. No Brasil temos 4 fusos.",
    instrucao: "Toque em 5 estados que ficam em fusos horários próximos do centro do Brasil",
    missao: { tipo: "selecionar", siglas: ["AM", "PA", "MT", "BA", "MG"], pergunta: "Toque em 5 estados que ficam em fusos horários próximos do centro do Brasil" },
    falaFinal: "5 estados iluminados. Fusos horários entendidos.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos organizar na ordem certa.",
    instrucao: "Toque na ordem correta",
    pergunta: "Ordem das ESTAÇÕES no hemisfério sul (começando por dezembro):",
    paradas: [
      { id: "verao", emoji: "☀️", rotulo: "1. Verão (dez a mar)", descricao: "Calor forte, dias longos." },
      { id: "outono", emoji: "🍂", rotulo: "2. Outono (mar a jun)", descricao: "Folhas caem, temperatura amena." },
      { id: "inverno", emoji: "❄️", rotulo: "3. Inverno (jun a set)", descricao: "Frio, dias curtos, noites longas." },
      { id: "primavera", emoji: "🌸", rotulo: "4. Primavera (set a dez)", descricao: "Flores, tudo renasce, clima ameno." }
    ],
    ordemCerta: ["verao", "outono", "inverno", "primavera"],
    feedbackAcerto: "Ordem certa! O ciclo das estações se repete todo ano.",
    feedbackErro: "Começa no verão (dez), depois outono, inverno, primavera.",
    falaFinal: "365 dias, 4 estações, 1 ciclo perfeito.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Aurora fica quieta. Leia e marque as palavras-chave.",
    tituloLivro: "🌍 Atlas do Mestre do Planeta",
    subtitulo: "Página 1 — A Terra no Espaço",
    paragrafos: [
      { id: "p1", texto: "A ROTAÇÃO da Terra dura 24 horas e cria o DIA e a NOITE.", chaves: ["rotação", "dia", "noite"] },
      { id: "p2", texto: "A TRANSLAÇÃO dura 365 dias e cria o ANO ao redor do Sol.", chaves: ["translação", "365", "ano"] },
      { id: "p3", texto: "O EIXO INCLINADO em 23,5° gera as 4 ESTAÇÕES do ano.", chaves: ["eixo", "inclinado", "estações"] },
      { id: "p4", texto: "Quando é VERÃO no sul, é INVERNO no norte. Os hemisférios têm estações opostas.", chaves: ["verão", "inverno", "hemisférios"] }
    ],
    falaFinal: "Leu tudo? Agora o minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo rápido! Escolha a peça certa.",
    instrucao: "⏱️ Qual movimento causa isso?",
    duracaoSegundos: 12,
    pecas: [
      { id: "rot", emoji: "🔄", rotulo: "Rotação" },
      { id: "tra", emoji: "🌍", rotulo: "Translação" },
      { id: "eixo", emoji: "📐", rotulo: "Eixo inclinado" }
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Dia e noite", emoji: "☀️", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Noite chegando", emoji: "🌙", cor: "from-slate-500 to-indigo-700" }, contexto: "O Sol sumiu no horizonte. O que causa isso?", pecaCertaId: "rot", feedbackAcerto: "Isso! Rotação = dia e noite.", feedbackErro: "Alternância dia/noite = ROTAÇÃO." },
      { id: "r2", municipioA: { nome: "Ano novo", emoji: "🎉", cor: "from-purple-400 to-fuchsia-600" }, municipioB: { nome: "365 dias", emoji: "📅", cor: "from-sky-400 to-blue-600" }, contexto: "A Terra completou uma volta ao Sol. Que movimento é esse?", pecaCertaId: "tra", feedbackAcerto: "Perfeito! 365 dias = TRANSLAÇÃO.", feedbackErro: "Volta ao Sol = TRANSLAÇÃO." },
      { id: "r3", municipioA: { nome: "Verão", emoji: "🌞", cor: "from-red-400 to-orange-600" }, municipioB: { nome: "Calor forte", emoji: "🔥", cor: "from-amber-400 to-yellow-600" }, contexto: "Está muito calor no sul do Brasil. O que faz existir verão?", pecaCertaId: "eixo", feedbackAcerto: "Isso! Eixo inclinado cria as estações.", feedbackErro: "Estações = EIXO INCLINADO + translação." },
      { id: "r4", municipioA: { nome: "Inverno no Japão", emoji: "❄️", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Neve", emoji: "🌨️", cor: "from-slate-300 to-blue-500" }, contexto: "Enquanto é verão aqui, no Japão neva. Por quê?", pecaCertaId: "eixo", feedbackAcerto: "Isso! Hemisférios opostos por causa do eixo.", feedbackErro: "EIXO INCLINADO = estações opostas nos hemisférios." },
      { id: "r5", municipioA: { nome: "Trabalho no jantar", emoji: "🍽️", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Sol se pôs", emoji: "🌇", cor: "from-amber-400 to-red-600" }, contexto: "O céu escurece toda noite. Qual movimento?", pecaCertaId: "rot", feedbackAcerto: "Isso! ROTAÇÃO faz o Sol 'sumir' cada dia.", feedbackErro: "Sol nasce/põe = ROTAÇÃO." },
      { id: "r6", municipioA: { nome: "Meu aniversário", emoji: "🎂", cor: "from-pink-400 to-rose-600" }, municipioB: { nome: "Chegou de novo", emoji: "🎁", cor: "from-purple-400 to-indigo-600" }, contexto: "Toda vez que passa 1 ano, faço aniversário. Que movimento?", pecaCertaId: "tra", feedbackAcerto: "Isso! TRANSLAÇÃO = 1 ano completo.", feedbackErro: "Um ano = TRANSLAÇÃO da Terra." }
    ],
    falaFinal: "6 movimentos identificados! Você é um astrônomo.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Divisão do dia na LINHA DO EQUADOR:",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "dia", rotulo: "Dia (50%)", emoji: "☀️", percentual: 50, cor: "#f59e0b", descricao: "Na Linha do Equador, o dia dura cerca de 12 horas o ano todo.", exemplos: ["🌞 12h de sol", "🌅 nascer 6h", "🌇 pôr 18h"] },
      { id: "noite", rotulo: "Noite (50%)", emoji: "🌙", percentual: 50, cor: "#1e3a8a", descricao: "A noite também dura cerca de 12 horas. Equilíbrio perfeito.", exemplos: ["🌙 12h escuro", "⭐ estrelas", "🌃 clima ameno"] }
    ],
    falaFinal: "12h de dia e 12h de noite. Equador é equilíbrio.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia " + "Astrônomo Geógrafo" + ".",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Qual é a duração da ROTAÇÃO?", opcoes: [{ id: "a", texto: "365 dias", correta: false }, { id: "b", texto: "24 horas", correta: true }, { id: "c", texto: "1 minuto", correta: false }], feedbackAcerto: "Isso! Rotação = 24h.", feedbackErro: "Rotação = 24h. Translação = 365 dias." },
      { id: "av2", pergunta: "O que causa as ESTAÇÕES?", opcoes: [{ id: "a", texto: "Distância do Sol", correta: false }, { id: "b", texto: "Inclinação do eixo + translação", correta: true }, { id: "c", texto: "Cor do céu", correta: false }], feedbackAcerto: "Perfeito! Eixo inclinado + translação = estações.", feedbackErro: "É o EIXO INCLINADO que cria as estações." },
      { id: "av3", pergunta: "Quando é DIA no Brasil, no Japão é...", opcoes: [{ id: "a", texto: "Dia também", correta: false }, { id: "b", texto: "Noite", correta: true }, { id: "c", texto: "Pôr do sol", correta: false }], feedbackAcerto: "Isso! Hemisférios opostos por causa da rotação.", feedbackErro: "Rotação faz o outro lado ficar em NOITE." }
    ],
    selo: {
      nome: "Astrônomo Geógrafo",
      subtitulo: "Insígnia do Mestre do Planeta",
      emoji: "🔭",
      cor: "from-sky-400 to-blue-600",
    },
    falaFinal: "Insígnia conquistada!",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Astrônomo Geógrafo" },
};
