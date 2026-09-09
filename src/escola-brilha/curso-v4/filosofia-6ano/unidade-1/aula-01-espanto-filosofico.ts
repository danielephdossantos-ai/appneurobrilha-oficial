import type { AulaGeoV1 } from "../../types";
import { url as espanto } from "@/assets/filosofia-6ano/u1-espanto.jpg.asset.json";
import { url as atenas } from "@/assets/filosofia-6ano/u1-atenas.jpg.asset.json";
import { url as socrates } from "@/assets/filosofia-6ano/u1-socrates.jpg.asset.json";
import { url as dialogo } from "@/assets/filosofia-6ano/u1-dialogo.jpg.asset.json";

/**
 * Filosofia · 6º Ano · Unidade 1 · Aula 01
 * "O Espanto que Acorda a Filosofia" — EF06FI01 (autoral)
 * Tema: THAUMAZEIN (espanto), mito × logos, a primeira pergunta filosófica.
 * Tom: pré-adolescente investigador — sem infantilização, sem cristalização.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-espanto-filosofico",
  titulo: "O Espanto que Acorda a Filosofia",
  iconeTrilha: "🌌",
  bncc: ["EF06FI01"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olha esse céu. Sente antes de pensar.",
    mapaUrl: espanto,
    imagemDestaqueUrl: espanto,
    aurora:
      "Aprendiz, para tudo por um instante. Uma criança sobe um morro, olha pra cima e vê a Via Láctea inteira aberta sobre a cabeça. Bilhões de estrelas. E, sem querer, ela solta uma pergunta idiota — 'por que existe tudo isso em vez de nada?'. Essa pergunta boba tem nome sério: THAUMAZEIN. É o ESPANTO. E foi exatamente ele que, há 2600 anos, acordou algo novo no mundo: a filosofia.",
    falaFinal:
      "Nesta aula, você vai descobrir por que os gregos pararam de aceitar as histórias prontas dos deuses e começaram a PERGUNTAR.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite rápido antes de eu contar: o que é 'começar a filosofar'?",
    pergunta: "Filosofar começa quando…",
    opcoes: [
      {
        id: "perguntar",
        titulo: "Alguém PERGUNTA 'por quê?'",
        subtitulo: "e não aceita a primeira resposta pronta",
        emoji: "❓",
        cor: "from-violet-400 to-purple-600",
      },
      {
        id: "decorar",
        titulo: "Alguém DECORA respostas",
        subtitulo: "prontas dos livros antigos",
        emoji: "📚",
        cor: "from-slate-400 to-gray-600",
      },
    ],
    respostaCerta: "perguntar",
    feedbackAcerto:
      "Exato. Filosofia começa numa PERGUNTA — não numa resposta. Quem só decora, não filosofa.",
    feedbackErro:
      "Decorar é memorizar. Filosofar é PERGUNTAR — duvidar da resposta pronta e investigar o porquê por trás dela.",
    falaFinal: "Filosofia = a coragem de perguntar 'por quê?'.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave pra abrir o resto do ano.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "thaumazein",
        capa: "1. Thaumazein",
        emoji: "🌌",
        cor: "from-violet-500 to-purple-700",
        conteudo:
          "THAUMAZEIN (thau-má-dzein) é uma palavra grega antiga que significa ESPANTO ou ADMIRAÇÃO. Aristóteles disse: 'foi por causa do espanto que os homens começaram a filosofar'. Sem espanto, não há pergunta.",
        exemplo:
          "Ex.: olhar um céu estrelado e sentir 'como isso é possível?' — isso é thaumazein.",
        fotoUrl: espanto,
      },
      {
        id: "mito",
        capa: "2. Mito",
        emoji: "⚡",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "MITO é uma explicação sobre o mundo baseada em histórias de deuses, heróis e forças mágicas. Não pede prova nem argumento — pede fé na narrativa transmitida pelos mais velhos.",
        exemplo:
          "Ex.: 'Zeus jogou raios porque estava com raiva' explica o trovão sem investigar a causa física.",
        fotoUrl: atenas,
      },
      {
        id: "logos",
        capa: "3. Logos",
        emoji: "🧠",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "LOGOS é o outro caminho: explicar o mundo por RAZÃO e ARGUMENTO. Em vez de 'os deuses fizeram', o logos pergunta 'qual é a causa?' — e aceita ser corrigido se aparecer prova melhor.",
        exemplo:
          "Ex.: 'o trovão acontece porque há descarga elétrica entre nuvens' — resposta que se pode testar e refutar.",
        fotoUrl: dialogo,
      },
    ],
    falaFinal: "Espanto, mito, logos. Três chaves pra abrir a caixa.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Vamos passear por 4 momentos que marcam o nascimento da filosofia. Toque em cada balão.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: atenas,
    pontos: [
      {
        id: "grecia",
        x: 20,
        y: 32,
        emoji: "🏛️",
        cor: "from-amber-500 to-orange-700",
        titulo: "Grécia, séc. VI a.C. — o começo",
        texto:
          "Por volta de 600 anos antes de Cristo, na costa da atual Turquia (Grécia antiga), pensadores como Tales de Mileto começaram a perguntar 'de que é feito o mundo?' — e responderam SEM usar deuses. Foi o primeiro passo da filosofia.",
        fotoUrl: atenas,
      },
      {
        id: "mito-logos",
        x: 72,
        y: 30,
        emoji: "⚡",
        cor: "from-violet-500 to-purple-700",
        titulo: "Do mito ao logos",
        texto:
          "Antes: 'trovão = raio de Zeus'. Depois: 'trovão = causa natural que posso investigar'. Não é que o mito seja ruim — é bonito e importante. Mas o logos abre uma porta nova: a porta da PERGUNTA que pode ser respondida por qualquer um, não só por sacerdotes.",
        fotoUrl: espanto,
      },
      {
        id: "socrates",
        x: 28,
        y: 72,
        emoji: "🧔",
        cor: "from-slate-500 to-slate-700",
        titulo: "Sócrates — o professor chato-do-bem",
        texto:
          "Séc. V a.C., Atenas. Sócrates andava pela praça fazendo perguntas incômodas: 'o que é justiça?', 'o que é coragem?'. Ele não dava respostas — devolvia a pergunta melhor formulada. Chamou isso de MAIÊUTICA: 'parto das ideias'. Ajudar o outro a PENSAR sozinho.",
        fotoUrl: socrates,
      },
      {
        id: "hoje",
        x: 76,
        y: 70,
        emoji: "💬",
        cor: "from-emerald-500 to-teal-700",
        titulo: "Hoje — a filosofia continua na sua sala",
        texto:
          "Toda vez que você e um colega discutem 'isso é justo?' ou 'por que essa regra existe?', vocês estão fazendo o que Sócrates fazia. Filosofia não é livro velho — é o hábito de pensar junto, com respeito, sobre coisas que importam.",
        fotoUrl: dialogo,
      },
    ],
    falaFinal:
      "4 paradas: Grécia antiga → mito virando logos → Sócrates perguntando → você e seus colegas hoje. Mesma corrente.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas pra ver se pegou.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "O que é THAUMAZEIN?",
        fotoUrl: espanto,
        cards: [
          {
            id: "espanto",
            emoji: "🌌",
            titulo: "Espanto que faz surgir a pergunta",
            cor: "from-violet-500 to-purple-700",
          },
          {
            id: "medo",
            emoji: "😱",
            titulo: "Medo de fantasma",
            cor: "from-slate-400 to-gray-600",
          },
          {
            id: "sono",
            emoji: "😴",
            titulo: "Sono pesado depois do almoço",
            cor: "from-red-500 to-rose-700",
          },
        ],
        correta: "espanto",
        feedbackAcerto:
          "Isso. Thaumazein é o ESPANTO que faz o 'por quê?' aparecer.",
        feedbackErro:
          "Não é medo nem sono. É o ESPANTO — a admiração que faz nascer a pergunta filosófica.",
      },
      {
        id: "q2",
        pergunta: "Qual é a diferença central entre MITO e LOGOS?",
        fotoUrl: atenas,
        cards: [
          {
            id: "argumento",
            emoji: "🧠",
            titulo: "Logos aceita argumento e prova; mito, não",
            cor: "from-sky-500 to-blue-700",
          },
          {
            id: "idade",
            emoji: "📅",
            titulo: "Mito é antigo; logos é moderno",
            cor: "from-slate-400 to-gray-600",
          },
          {
            id: "lingua",
            emoji: "🗣️",
            titulo: "Mito é em grego; logos, em português",
            cor: "from-amber-500 to-orange-700",
          },
        ],
        correta: "argumento",
        feedbackAcerto:
          "Perfeito. O logos exige argumento e aceita ser corrigido — o mito pede fé na narrativa.",
        feedbackErro:
          "Não é idade nem idioma. O logos se sustenta por ARGUMENTO e pode ser refutado; o mito, não.",
      },
      {
        id: "q3",
        pergunta: "O método de Sócrates (MAIÊUTICA) consiste em…",
        fotoUrl: socrates,
        cards: [
          {
            id: "perguntar",
            emoji: "❓",
            titulo: "Fazer PERGUNTAS pra o outro pensar sozinho",
            cor: "from-emerald-500 to-teal-700",
          },
          {
            id: "gritar",
            emoji: "📢",
            titulo: "Gritar a resposta certa até decorarem",
            cor: "from-red-500 to-rose-700",
          },
          {
            id: "livro",
            emoji: "📖",
            titulo: "Mandar ler um livro grosso em silêncio",
            cor: "from-slate-400 to-gray-600",
          },
        ],
        correta: "perguntar",
        feedbackAcerto:
          "Isso. Sócrates não dava respostas — devolvia perguntas melhores. Ajudar a pessoa a parir a ideia dela.",
        feedbackErro:
          "Sócrates não gritava nem mandava decorar. Ele PERGUNTAVA — e deixava o outro descobrir a resposta pensando.",
      },
    ],
    falaFinal: "Radar afinado. Você já pensa como filósofo.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "A filosofia hoje mora em escolas do Brasil inteiro. Escolha 5 estados que têm cursos famosos de Filosofia em universidades públicas.",
    instrucao: "Acenda 5 estados com forte pesquisa em Filosofia",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "RJ", "MG", "RS", "PE"],
      pergunta:
        "Quais 5 estados abrigam departamentos de Filosofia de referência no Brasil?",
    },
    falaFinal:
      "USP (SP), UFRJ e PUC-Rio (RJ), UFMG (MG), UFRGS (RS) e UFPE (PE). Filosofia brasileira, viva em todas as regiões.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Como uma pergunta VIRA reflexão filosófica de verdade? Coloque na ordem.",
    instrucao: "Toque na ordem correta",
    pergunta: "Do espanto à ideia:",
    paradas: [
      {
        id: "espanto",
        emoji: "🌌",
        rotulo: "1. ESPANTO",
        descricao:
          "Algo te para. Um céu, uma injustiça, uma frase estranha — thaumazein.",
      },
      {
        id: "pergunta",
        emoji: "❓",
        rotulo: "2. PERGUNTA",
        descricao:
          "O espanto vira uma pergunta escrita. 'Por que existe isso?', 'isso é justo?'.",
      },
      {
        id: "hipoteses",
        emoji: "💡",
        rotulo: "3. HIPÓTESES",
        descricao: "Você lista várias respostas possíveis. Nenhuma é sagrada.",
      },
      {
        id: "argumento",
        emoji: "🧠",
        rotulo: "4. ARGUMENTO",
        descricao:
          "Você examina cada hipótese com razões: qual delas se sustenta melhor?",
      },
      {
        id: "revisao",
        emoji: "🔁",
        rotulo: "5. REVISÃO",
        descricao:
          "Você aceita ser corrigido se alguém trouxer argumento melhor. Isso é filosofar.",
      },
    ],
    ordemCerta: ["espanto", "pergunta", "hipoteses", "argumento", "revisao"],
    feedbackAcerto:
      "Exato. Espanto → pergunta → hipóteses → argumento → revisão. Esse é o ciclo.",
    feedbackErro:
      "A ordem é: primeiro ESPANTO, que vira PERGUNTA, que gera HIPÓTESES, testadas por ARGUMENTO, e sempre abertas à REVISÃO.",
    falaFinal: "5 passos. Repetíveis a vida inteira.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Aurora fica quieta. Leia com atenção.",
    tituloLivro: "📔 Caderno do Aprendiz",
    subtitulo: "Página 1 — O Espanto",
    paragrafos: [
      {
        id: "p1",
        texto:
          "THAUMAZEIN é uma palavra grega que quer dizer ESPANTO. Aristóteles escreveu que foi por causa desse espanto que as pessoas começaram a filosofar — parar diante do mundo e perguntar 'por quê?'.",
        chaves: ["thaumazein", "espanto"],
      },
      {
        id: "p2",
        texto:
          "Antes da filosofia, o mundo era explicado por MITOS — histórias de deuses que davam sentido às coisas. O mito consola e organiza, mas não pede argumento: você acredita porque a tradição contou assim.",
        chaves: ["mitos", "tradição"],
      },
      {
        id: "p3",
        texto:
          "Por volta do século VI a.C., pensadores gregos começaram a preferir o LOGOS — a explicação por RAZÃO. Em vez de 'os deuses fizeram', perguntavam 'qual é a causa?', e aceitavam ser corrigidos se aparecesse argumento melhor.",
        chaves: ["logos", "razão"],
      },
      {
        id: "p4",
        texto:
          "Sócrates levou isso à praça. Não dava respostas prontas: fazia perguntas. Chamou seu método de MAIÊUTICA — 'parto das ideias'. Sua missão era ajudar o outro a pensar sozinho, não obedecer.",
        chaves: ["Sócrates", "maiêutica"],
      },
    ],
    falaFinal: "Leu? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Minijogo CAÇADOR DE PERGUNTAS! Cada rodada mostra uma frase. Diga se é MITO, LOGOS ou PERGUNTA FILOSÓFICA.",
    instrucao: "⏱️ Que tipo de fala é essa?",
    duracaoSegundos: 12,
    pecas: [
      { id: "mito", emoji: "⚡", rotulo: "Mito (deuses/mágica)" },
      { id: "logos", emoji: "🧠", rotulo: "Logos (razão/prova)" },
      { id: "pergunta", emoji: "❓", rotulo: "Pergunta filosófica" },
      { id: "opiniao", emoji: "💬", rotulo: "Opinião solta" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: {
          nome: "'O trovão é a raiva de Zeus'",
          emoji: "⚡",
          cor: "from-amber-400 to-orange-600",
        },
        municipioB: {
          nome: "Explicação por deus",
          emoji: "🏛️",
          cor: "from-orange-400 to-red-600",
        },
        contexto: "História transmitida pela tradição, sem prova.",
        pecaCertaId: "mito",
        feedbackAcerto: "Isso. Explicação por deus, sem argumento — é MITO.",
        feedbackErro: "Isso é MITO — deus explica sem precisar de prova.",
      },
      {
        id: "r2",
        municipioA: {
          nome: "'O trovão é descarga elétrica'",
          emoji: "🧠",
          cor: "from-sky-400 to-blue-600",
        },
        municipioB: {
          nome: "Explicação testável",
          emoji: "🔬",
          cor: "from-cyan-400 to-blue-600",
        },
        contexto: "Pode ser medida, testada e refutada.",
        pecaCertaId: "logos",
        feedbackAcerto: "Perfeito. Explicação por RAZÃO — é LOGOS.",
        feedbackErro: "É LOGOS: explicação que se sustenta por prova e argumento.",
      },
      {
        id: "r3",
        municipioA: {
          nome: "'O que é uma amizade justa?'",
          emoji: "❓",
          cor: "from-violet-400 to-purple-600",
        },
        municipioB: {
          nome: "Convida a pensar junto",
          emoji: "💭",
          cor: "from-fuchsia-400 to-purple-600",
        },
        contexto: "Não tem resposta pronta em livro nenhum.",
        pecaCertaId: "pergunta",
        feedbackAcerto:
          "Isso. Não é opinião, é uma PERGUNTA FILOSÓFICA — aberta e séria.",
        feedbackErro:
          "É PERGUNTA FILOSÓFICA: convida qualquer pessoa a pensar e argumentar.",
      },
      {
        id: "r4",
        municipioA: {
          nome: "'Odeio segunda-feira'",
          emoji: "💬",
          cor: "from-slate-400 to-gray-600",
        },
        municipioB: {
          nome: "Sem argumento nem investigação",
          emoji: "🤷",
          cor: "from-gray-400 to-slate-600",
        },
        contexto: "É um sentimento pessoal, não pede prova nem pergunta o porquê.",
        pecaCertaId: "opiniao",
        feedbackAcerto: "Boa. É só OPINIÃO solta — não é mito, logos, nem pergunta filosófica.",
        feedbackErro: "É OPINIÃO SOLTA: gosto pessoal, sem argumento nem investigação.",
      },
      {
        id: "r5",
        municipioA: {
          nome: "'Se todos merecem respeito, por que xingamos?'",
          emoji: "❓",
          cor: "from-violet-400 to-purple-600",
        },
        municipioB: {
          nome: "Pergunta que abre debate ético",
          emoji: "⚖️",
          cor: "from-purple-400 to-fuchsia-600",
        },
        contexto: "Convida à reflexão sobre coerência entre valor e ação.",
        pecaCertaId: "pergunta",
        feedbackAcerto: "Isso. PERGUNTA FILOSÓFICA — abre um debate ético real.",
        feedbackErro: "É PERGUNTA FILOSÓFICA: examina a coerência de um valor.",
      },
      {
        id: "r6",
        municipioA: {
          nome: "'A Terra é redonda — foi medida'",
          emoji: "🧠",
          cor: "from-sky-400 to-blue-600",
        },
        municipioB: {
          nome: "Baseada em medida e prova",
          emoji: "📏",
          cor: "from-blue-400 to-indigo-600",
        },
        contexto: "Sustenta-se por observação e cálculo.",
        pecaCertaId: "logos",
        feedbackAcerto: "Perfeito. LOGOS — argumento com base em medida.",
        feedbackErro: "É LOGOS: se sustenta por observação e cálculo, não por deuses.",
      },
    ],
    falaFinal:
      "6 rodadas. Você já distingue mito, logos, pergunta e opinião. Isso é enorme.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Pizza rápida: 2 formas históricas de explicar o mundo. Ambas vivem até hoje.",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "mito",
        rotulo: "MITO (narrativa/tradição)",
        emoji: "⚡",
        percentual: 50,
        cor: "#f59e0b",
        descricao:
          "Explica por histórias de deuses, heróis e forças. Consola, organiza, dá sentido — mas não pede argumento. Ainda vive em religiões, contos populares e cinema.",
        exemplos: ["🏛️ Zeus e o trovão", "🐍 Cobra que engoliu o sol", "🎬 Filmes de super-herói"],
      },
      {
        id: "logos",
        rotulo: "LOGOS (razão/argumento)",
        emoji: "🧠",
        percentual: 50,
        cor: "#8b5cf6",
        descricao:
          "Explica por causas, provas e argumentos que podem ser corrigidos. Nasceu com os primeiros filósofos gregos e vive hoje na ciência, na filosofia e no debate público sério.",
        exemplos: ["🔬 Física do trovão", "⚖️ Debate no tribunal", "💬 Roda de filosofia na escola"],
      },
    ],
    falaFinal:
      "Duas formas legítimas de dar sentido ao mundo. Filosofia mora do lado do logos, mas respeita o mito.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia APRENDIZ DO ESPANTO.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "O que faz uma pergunta ser FILOSÓFICA?",
        opcoes: [
          { id: "a", texto: "Ter resposta pronta no fim do livro", correta: false },
          {
            id: "b",
            texto: "Nascer do espanto e convidar à investigação por argumentos",
            correta: true,
          },
          { id: "c", texto: "Ser feita só por adultos com diploma", correta: false },
        ],
        feedbackAcerto:
          "Isso. Pergunta filosófica nasce do ESPANTO e se sustenta por ARGUMENTO — não por autoridade.",
        feedbackErro:
          "Não é resposta pronta nem diploma. É a pergunta que nasce do espanto e se investiga por argumentos.",
      },
      {
        id: "av2",
        pergunta: "A diferença central entre MITO e LOGOS é:",
        opcoes: [
          {
            id: "a",
            texto: "O logos aceita ser corrigido por argumento; o mito, não",
            correta: true,
          },
          { id: "b", texto: "O mito é falso e o logos é verdadeiro", correta: false },
          { id: "c", texto: "O logos é mais antigo que o mito", correta: false },
        ],
        feedbackAcerto:
          "Perfeito. O logos se abre à REFUTAÇÃO; o mito pede fé na narrativa. Nenhum é 'errado' — são caminhos diferentes.",
        feedbackErro:
          "Mito não é 'falso' — é outro tipo de explicação. O que muda é que o LOGOS aceita ser corrigido por argumento; o mito, não.",
      },
      {
        id: "av3",
        pergunta: "O método de Sócrates (MAIÊUTICA) serve pra…",
        opcoes: [
          { id: "a", texto: "Ganhar discussão gritando alto", correta: false },
          {
            id: "b",
            texto: "Ajudar a outra pessoa a PENSAR sozinha por meio de perguntas",
            correta: true,
          },
          { id: "c", texto: "Provar que professor sabe tudo", correta: false },
        ],
        feedbackAcerto:
          "Isso. Maiêutica é ajudar o outro a PARIR a própria ideia — não vencer, não humilhar.",
        feedbackErro:
          "Sócrates não gritava nem provava saber tudo. A maiêutica ajuda o OUTRO a pensar sozinho por perguntas.",
      },
    ],
    selo: {
      nome: "Aprendiz do Espanto",
      subtitulo: "Insígnia do Nascimento da Filosofia",
      emoji: "🌌",
      cor: "from-violet-400 to-purple-700",
    },
    falaFinal:
      "Insígnia conquistada! Você agora sabe reconhecer quando uma conversa VIRA filosofia.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Aprendiz do Espanto" },
};
