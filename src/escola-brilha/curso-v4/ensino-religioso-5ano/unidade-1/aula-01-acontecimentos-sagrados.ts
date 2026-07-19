import type { AulaGeoV1 } from "../../types";
import { url as diversidade } from "@/assets/ensino-religioso-5ano/01-diversidade.jpg.asset.json";
import { url as natal } from "@/assets/ensino-religioso-5ano/02-natal-crista.jpg.asset.json";
import { url as eid } from "@/assets/ensino-religioso-5ano/03-eid-muculmana.jpg.asset.json";
import { url as hanuka } from "@/assets/ensino-religioso-5ano/04-hanuka-judaica.jpg.asset.json";
import { url as indigena } from "@/assets/ensino-religioso-5ano/05-indigena.jpg.asset.json";
import { url as afro } from "@/assets/ensino-religioso-5ano/06-afro-brasileira.jpg.asset.json";

/**
 * Ensino Religioso · 5º Ano · Unidade 1 · Aula 01
 * "Acontecimentos Sagrados e Memória dos Povos" — EF05ER01
 *
 * PRINCÍPIO NORTEADOR:
 *  - Aula NÃO CONFESSIONAL: nenhuma tradição é apresentada como "a certa".
 *  - Diversidade real: cristianismo, islamismo, judaísmo, tradições
 *    indígenas e afro-brasileiras aparecem lado a lado, com o MESMO respeito.
 *  - Foco: entender que TODO povo tem datas e acontecimentos sagrados que
 *    ajudam a preservar sua MEMÓRIA e IDENTIDADE.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-acontecimentos-sagrados",
  titulo: "Datas Sagradas: A Memória dos Povos",
  iconeTrilha: "🕊️",
  bncc: ["EF05ER01"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe: mãos diferentes, uma mesma mesa.",
    mapaUrl: diversidade,
    imagemDestaqueUrl: diversidade,
    aurora:
      "Explorador, olha essa mesa. Mãos de idades diferentes, cores diferentes, tradições diferentes. Cada uma segura um objeto que representa algo SAGRADO pra sua família: uma vela, um livro, uma folha, um colar. São coisas que ajudam essas pessoas a LEMBRAR quem elas são.",
    falaFinal:
      "Nesta aula, vamos conhecer datas e acontecimentos sagrados de várias tradições. Sem julgar. Só entender.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite rápido: por que quase todo povo do mundo tem datas ou celebrações SAGRADAS?",
    pergunta: "Pra que servem as datas sagradas?",
    opcoes: [
      {
        id: "memoria",
        titulo: "PRESERVAR a memória",
        subtitulo: "lembrar de quem somos, de onde viemos",
        emoji: "🕯️",
        cor: "from-amber-400 to-orange-600",
      },
      {
        id: "moda",
        titulo: "Só por MODA",
        subtitulo: "porque é bonito",
        emoji: "🎈",
        cor: "from-slate-400 to-gray-600",
      },
    ],
    respostaCerta: "memoria",
    feedbackAcerto:
      "Isso! Cada celebração é uma forma do povo LEMBRAR sua história e passar pros filhos.",
    feedbackErro:
      "Não é moda. Essas datas guardam MEMÓRIA — histórias, valores, sabedoria que atravessam gerações.",
    falaFinal: "Memória viva. É por isso que existem. Bora conhecer algumas.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras-chave pra entender o que é SAGRADO pra um povo.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "sagrado",
        capa: "1. Sagrado",
        emoji: "✨",
        cor: "from-purple-500 to-fuchsia-700",
        conteudo:
          "SAGRADO é aquilo que uma tradição considera muito importante, com um valor especial que merece respeito. Pode ser uma pessoa, um lugar, um objeto, uma data ou uma história.",
        exemplo: "Ex.: uma vela acesa numa celebração; uma árvore antiga na aldeia.",
        fotoUrl: diversidade,
      },
      {
        id: "tradicao",
        capa: "2. Tradição",
        emoji: "🧭",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "TRADIÇÃO é o conjunto de costumes, histórias e celebrações que um povo passa dos avós pros pais e dos pais pros filhos. É jeito de viver herdado.",
        exemplo: "Ex.: cantar músicas antigas em festa de família.",
      },
      {
        id: "memoria",
        capa: "3. Memória",
        emoji: "📜",
        cor: "from-emerald-500 to-green-700",
        conteudo:
          "MEMÓRIA é a lembrança viva de acontecimentos importantes. As celebrações sagradas ajudam a manter essa memória acesa através dos anos.",
        exemplo: "Ex.: relembrar todo ano a história dos antepassados.",
      },
      {
        id: "diversidade",
        capa: "4. Diversidade religiosa",
        emoji: "🌍",
        cor: "from-red-500 to-rose-700",
        conteudo:
          "DIVERSIDADE RELIGIOSA é a existência de MUITAS tradições diferentes num mesmo país ou mundo. Cada uma com seu jeito de celebrar o sagrado. Respeitar todas é dever de cidadão.",
        exemplo: "Ex.: no Brasil convivem cristãos, muçulmanos, judeus, indígenas, afros, ateus.",
        fotoUrl: diversidade,
      },
    ],
    falaFinal: "Sagrado, tradição, memória, diversidade. Quatro palavras-guia.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Vamos conhecer 4 celebrações de tradições bem diferentes. Toque em cada balão pra ouvir. Nenhuma é 'a certa' — todas guardam memória.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: diversidade,
    pontos: [
      {
        id: "natal",
        x: 25,
        y: 35,
        emoji: "🕯️",
        cor: "from-amber-500 to-orange-700",
        titulo: "NATAL — tradição cristã",
        texto:
          "Cristãos do mundo inteiro celebram, em 25 de dezembro, o nascimento de Jesus. Famílias acendem velas, montam presépios e cantam músicas antigas. É uma data que lembra o valor do cuidado com quem está começando a vida.",
        fotoUrl: natal,
      },
      {
        id: "eid",
        x: 70,
        y: 30,
        emoji: "🌙",
        cor: "from-emerald-500 to-green-700",
        titulo: "EID AL-FITR — tradição muçulmana",
        texto:
          "Depois de um mês de jejum chamado Ramadã, muçulmanos celebram o Eid al-Fitr: se vestem com roupas especiais, abraçam parentes e amigos, e compartilham comidas doces. É uma festa de reencontro e generosidade.",
        fotoUrl: eid,
      },
      {
        id: "hanuka",
        x: 30,
        y: 70,
        emoji: "🕎",
        cor: "from-sky-500 to-blue-700",
        titulo: "HANUKÁ — tradição judaica",
        texto:
          "Famílias judias acendem uma vela por noite, durante 8 noites, num candelabro chamado menorá. Comem comidas fritas e brincam com o piãozinho dreidel. Celebram a coragem de manter viva sua fé mesmo em tempos difíceis.",
        fotoUrl: hanuka,
      },
      {
        id: "indigena",
        x: 75,
        y: 68,
        emoji: "🪶",
        cor: "from-red-500 to-rose-700",
        titulo: "RITUAIS INDÍGENAS — tradições originárias",
        texto:
          "Cada povo indígena do Brasil tem suas próprias celebrações ao redor do fogo, com pinturas, cantos e danças. Elas honram os antepassados e a natureza — a floresta, os rios, os animais que sustentam a vida.",
        fotoUrl: indigena,
      },
    ],
    falaFinal:
      "Quatro tradições, quatro jeitos de celebrar. Todas guardam memória viva de um povo.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas pra fixar o que aprendemos.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "O que é uma data SAGRADA pra um povo?",
        fotoUrl: natal,
        cards: [
          { id: "memoria", emoji: "📜", titulo: "Guarda memória", cor: "from-emerald-500 to-green-700" },
          { id: "feriado", emoji: "🏖️", titulo: "Só um feriado", cor: "from-sky-500 to-blue-700" },
          { id: "moda", emoji: "🎈", titulo: "Uma moda antiga", cor: "from-slate-400 to-gray-600" },
        ],
        correta: "memoria",
        feedbackAcerto:
          "Isso! Data sagrada guarda MEMÓRIA — história, valores, sabedoria dos antigos.",
        feedbackErro:
          "Feriado é só o dia livre. SAGRADO é o que guarda memória viva de um povo.",
      },
      {
        id: "q2",
        pergunta: "Quantas velas são acesas no Hanuká?",
        fotoUrl: hanuka,
        cards: [
          { id: "8", emoji: "🕎", titulo: "8 velas em 8 noites", cor: "from-sky-500 to-blue-700" },
          { id: "1", emoji: "🕯️", titulo: "Uma só, no dia 25", cor: "from-amber-500 to-orange-700" },
          { id: "100", emoji: "✨", titulo: "100 de uma vez", cor: "from-red-500 to-rose-700" },
        ],
        correta: "8",
        feedbackAcerto: "Perfeito! Uma vela por noite, durante 8 noites.",
        feedbackErro:
          "No Hanuká acende UMA vela por noite, durante OITO noites, na menorá.",
      },
      {
        id: "q3",
        pergunta: "Rituais indígenas ao redor do fogo honram principalmente...",
        fotoUrl: indigena,
        cards: [
          { id: "antepassados", emoji: "🪶", titulo: "Antepassados e natureza", cor: "from-emerald-500 to-green-700" },
          { id: "reis", emoji: "👑", titulo: "Reis europeus", cor: "from-purple-500 to-fuchsia-700" },
          { id: "dinheiro", emoji: "💰", titulo: "O dinheiro", cor: "from-slate-400 to-gray-600" },
        ],
        correta: "antepassados",
        feedbackAcerto:
          "Isso! Rituais indígenas honram os ANTEPASSADOS e a natureza que sustenta a vida.",
        feedbackErro:
          "Povos indígenas honram os ANTEPASSADOS e a natureza — floresta, rios, animais.",
      },
    ],
    falaFinal: "Radar afinado! Você entende o valor de cada tradição.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "O Brasil tem MUITAS tradições religiosas convivendo. Toque nos 5 estados onde a diversidade religiosa é bem visível em festas populares.",
    instrucao: "Acenda 5 estados de forte diversidade religiosa",
    missao: {
      tipo: "selecionar",
      siglas: ["BA", "PE", "RJ", "SP", "AM"],
      pergunta: "Quais 5 estados têm forte presença de MÚLTIPLAS tradições religiosas em suas festas populares?",
    },
    falaFinal:
      "Bahia (afro), Pernambuco (Frevo e Xangô), Rio, São Paulo (todas juntas), Amazonas (indígenas). O Brasil inteiro é mosaico.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Vamos organizar como uma tradição religiosa PRESERVA sua memória através do tempo. Coloque na ordem certa.",
    instrucao: "Toque na ordem correta",
    pergunta: "Como uma tradição guarda sua memória?",
    paradas: [
      {
        id: "acontecimento",
        emoji: "⭐",
        rotulo: "1. Um ACONTECIMENTO marca o povo",
        descricao:
          "Algo importante acontece: um nascimento, uma travessia, uma libertação, um encontro com o sagrado.",
      },
      {
        id: "historia",
        emoji: "🗣️",
        rotulo: "2. Vira HISTÓRIA contada",
        descricao:
          "Os mais velhos começam a contar o que aconteceu pros mais novos, geração após geração.",
      },
      {
        id: "data",
        emoji: "📅",
        rotulo: "3. Ganha uma DATA no calendário",
        descricao: "O povo escolhe um dia certo do ano pra lembrar juntos.",
      },
      {
        id: "celebracao",
        emoji: "🕯️",
        rotulo: "4. Vira CELEBRAÇÃO com símbolos",
        descricao:
          "Velas, cantos, comidas, roupas especiais — cada gesto lembra parte da história.",
      },
      {
        id: "memoria",
        emoji: "🌱",
        rotulo: "5. A MEMÓRIA se mantém viva",
        descricao:
          "As crianças crescem participando, aprendem, e um dia contam pros próprios filhos.",
      },
    ],
    ordemCerta: ["acontecimento", "historia", "data", "celebracao", "memoria"],
    feedbackAcerto:
      "Isso! Acontecimento → história → data → celebração → memória viva. Ciclo perfeito.",
    feedbackErro:
      "Repensa: primeiro ACONTECE algo, depois vira HISTÓRIA, depois DATA, depois CELEBRAÇÃO, aí a MEMÓRIA continua viva.",
    falaFinal: "5 passos, uma tradição viva.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Aurora fica quieta. Leia com atenção e marque as palavras-chave.",
    tituloLivro: "📔 Diário do Explorador de Tradições",
    subtitulo: "Página 1 — Datas Sagradas e Memória",
    paragrafos: [
      {
        id: "p1",
        texto:
          "SAGRADO é o que uma tradição considera muito importante e digno de RESPEITO. Pode ser uma pessoa, um lugar, um objeto ou uma data.",
        chaves: ["sagrado", "respeito"],
      },
      {
        id: "p2",
        texto:
          "As DATAS SAGRADAS existem em quase todas as tradições. Elas ajudam o povo a preservar sua MEMÓRIA — quem são, de onde vieram, no que acreditam.",
        chaves: ["datas", "memoria"],
      },
      {
        id: "p3",
        texto:
          "Natal, Eid al-Fitr, Hanuká, rituais indígenas e celebrações afro-brasileiras são todas formas legítimas de guardar TRADIÇÃO. Nenhuma vale mais que a outra.",
        chaves: ["tradicao", "legitimas"],
      },
      {
        id: "p4",
        texto:
          "O Brasil é um país de DIVERSIDADE religiosa. Respeitar todas as tradições é uma escolha de cidadão consciente e um DIREITO garantido pela Constituição.",
        chaves: ["diversidade", "direito"],
      },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo dos símbolos.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Minijogo GUARDIÃO DAS TRADIÇÕES! Cada rodada mostra dois nomes da mesma celebração. Escolha o SÍMBOLO certo dela.",
    instrucao: "⏱️ Qual símbolo pertence a essa celebração?",
    duracaoSegundos: 12,
    pecas: [
      { id: "vela", emoji: "🕯️", rotulo: "Vela / Presépio" },
      { id: "menora", emoji: "🕎", rotulo: "Menorá (candelabro)" },
      { id: "lua", emoji: "🌙", rotulo: "Lua e tâmaras" },
      { id: "cocar", emoji: "🪶", rotulo: "Cocar e fogo" },
      { id: "atabaque", emoji: "🥁", rotulo: "Atabaque e branco" },
      { id: "livro", emoji: "📖", rotulo: "Livro sagrado" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Natal", emoji: "🎄", cor: "from-red-400 to-rose-600" },
        municipioB: { nome: "25 de dezembro", emoji: "🕯️", cor: "from-amber-400 to-orange-600" },
        contexto: "Celebração cristã do nascimento de Jesus.",
        pecaCertaId: "vela",
        feedbackAcerto: "Isso! No Natal cristão, vela acesa e presépio são símbolos centrais.",
        feedbackErro: "No Natal cristão: VELA e PRESÉPIO. Os outros símbolos são de outras tradições.",
      },
      {
        id: "r2",
        municipioA: { nome: "Hanuká", emoji: "🕎", cor: "from-sky-400 to-blue-600" },
        municipioB: { nome: "Festa das Luzes", emoji: "✨", cor: "from-indigo-400 to-blue-700" },
        contexto: "Celebração judaica de 8 noites.",
        pecaCertaId: "menora",
        feedbackAcerto: "Perfeito! A MENORÁ com 8 velas é o coração do Hanuká.",
        feedbackErro: "Hanuká = MENORÁ, o candelabro com 8 velas acesas uma por noite.",
      },
      {
        id: "r3",
        municipioA: { nome: "Eid al-Fitr", emoji: "🌙", cor: "from-emerald-400 to-green-600" },
        municipioB: { nome: "Fim do Ramadã", emoji: "🕌", cor: "from-teal-400 to-emerald-700" },
        contexto: "Celebração muçulmana após um mês de jejum.",
        pecaCertaId: "lua",
        feedbackAcerto: "Isso! LUA (símbolo islâmico) e TÂMARAS (fruta tradicional) marcam o Eid.",
        feedbackErro: "Eid al-Fitr = LUA e TÂMARAS. É a festa que fecha o Ramadã.",
      },
      {
        id: "r4",
        municipioA: { nome: "Ritual indígena", emoji: "🪶", cor: "from-red-400 to-orange-600" },
        municipioB: { nome: "Dança ao redor do fogo", emoji: "🔥", cor: "from-amber-400 to-red-600" },
        contexto: "Celebração dos povos originários do Brasil.",
        pecaCertaId: "cocar",
        feedbackAcerto: "Boa! COCAR e FOGO central são elementos dos rituais indígenas.",
        feedbackErro: "Rituais indígenas: COCAR, pinturas e FOGO no centro da roda.",
      },
      {
        id: "r5",
        municipioA: { nome: "Terreiro de Candomblé", emoji: "⚪", cor: "from-slate-300 to-slate-500" },
        municipioB: { nome: "Roda com atabaques", emoji: "🥁", cor: "from-amber-400 to-orange-600" },
        contexto: "Celebração afro-brasileira de matriz iorubá.",
        pecaCertaId: "atabaque",
        feedbackAcerto: "Isso! ATABAQUE (tambor) e roupas BRANCAS marcam o Candomblé.",
        feedbackErro: "Candomblé: ATABAQUES tocando e roupas BRANCAS de respeito aos orixás.",
      },
      {
        id: "r6",
        municipioA: { nome: "Torá / Bíblia / Alcorão", emoji: "📖", cor: "from-purple-400 to-indigo-600" },
        municipioB: { nome: "Palavra escrita", emoji: "✍️", cor: "from-violet-400 to-purple-600" },
        contexto: "Muitas tradições têm um texto considerado sagrado.",
        pecaCertaId: "livro",
        feedbackAcerto: "Perfeito! LIVRO SAGRADO é comum a várias tradições — cada uma com o seu.",
        feedbackErro:
          "Judaísmo tem Torá, cristianismo tem Bíblia, islamismo tem Alcorão. Cada uma respeita SEU livro sagrado.",
      },
    ],
    falaFinal: "6 símbolos reconhecidos! Você vira Guardião das Tradições.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Pizza da DIVERSIDADE RELIGIOSA no Brasil (censo IBGE mais recente). Toque em cada fatia.",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "cristas",
        rotulo: "Tradições cristãs (~65%)",
        emoji: "✝️",
        percentual: 65,
        cor: "#3b82f6",
        descricao:
          "A maioria dos brasileiros se declara cristã: católicos, evangélicos, ortodoxos. Muitas igrejas, muitas festas do calendário cristão.",
        exemplos: ["🕯️ Natal", "🐣 Páscoa", "⛪ Festas de santos"],
      },
      {
        id: "outras",
        rotulo: "Outras tradições e sem religião (~35%)",
        emoji: "🌍",
        percentual: 35,
        cor: "#10b981",
        descricao:
          "Judeus, muçulmanos, hindus, budistas, espíritas, umbandistas, candomblecistas, tradições indígenas, ateus e agnósticos. Uma parte enorme e diversa da população.",
        exemplos: ["🕎 Hanuká", "🌙 Eid", "🥁 Terreiros", "🪶 Rituais originários"],
      },
    ],
    falaFinal:
      "Maioria cristã, mas um mosaico enorme convivendo. Respeitar todos = Brasil melhor.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "3 perguntas finais pra conquistar a insígnia GUARDIÃO DAS TRADIÇÕES.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "Pra que servem as datas SAGRADAS de um povo?",
        opcoes: [
          { id: "a", texto: "Só pra ter feriado", correta: false },
          { id: "b", texto: "Preservar a MEMÓRIA e identidade do povo", correta: true },
          { id: "c", texto: "Provar que uma religião é melhor que outra", correta: false },
        ],
        feedbackAcerto:
          "Isso! Datas sagradas = MEMÓRIA viva de quem o povo é e de onde veio.",
        feedbackErro:
          "Não é feriado nem competição. Datas sagradas preservam MEMÓRIA e identidade.",
      },
      {
        id: "av2",
        pergunta: "Qual dessas afirmações mostra RESPEITO à diversidade religiosa?",
        opcoes: [
          { id: "a", texto: "'Só a minha religião é a certa'", correta: false },
          {
            id: "b",
            texto: "'Cada tradição tem valor e todas merecem respeito'",
            correta: true,
          },
          { id: "c", texto: "'Rituais indígenas não são religião de verdade'", correta: false },
        ],
        feedbackAcerto:
          "Perfeito! Respeitar todas as tradições é escolha de cidadão consciente.",
        feedbackErro:
          "Respeito = reconhecer que CADA tradição tem valor. Nenhuma é 'a única certa'.",
      },
      {
        id: "av3",
        pergunta: "O Hanuká, o Eid al-Fitr, o Natal e um ritual indígena têm em comum:",
        opcoes: [
          { id: "a", texto: "Todos usam vela azul", correta: false },
          {
            id: "b",
            texto: "Todos são formas de guardar a memória e a identidade de um povo",
            correta: true,
          },
          { id: "c", texto: "Todos acontecem em dezembro", correta: false },
        ],
        feedbackAcerto:
          "Isso! Cada um do seu jeito, mas todos guardam MEMÓRIA e IDENTIDADE.",
        feedbackErro:
          "Símbolos e datas mudam. O que TODOS têm em comum é preservar MEMÓRIA e identidade.",
      },
    ],
    selo: {
      nome: "Guardião das Tradições",
      subtitulo: "Insígnia do Explorador do Sagrado",
      emoji: "🕊️",
      cor: "from-amber-400 to-orange-600",
    },
    falaFinal:
      "Insígnia conquistada! Você entende que cada povo tem seu jeito de guardar o sagrado — e todos merecem respeito.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Guardião das Tradições" },
};
