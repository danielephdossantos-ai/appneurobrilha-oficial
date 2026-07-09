import type { AulaGeoV1 } from "../../types";
import mapaMunicipio from "@/assets/geografia-3ano/mapa-municipio.jpg";

/**
 * Geografia · 3º Ano · Unidade 1 · Aula 02
 * "Marcas dos Vovôs" — EF03GE02
 * Contribuições culturais e econômicas de grupos de diferentes origens
 * (imigrantes, indígenas, africanos, portugueses) no meu município.
 *
 * Mesmo esqueleto de 11 cenas do PlayerGeoV1. Reaproveita mapaMunicipio
 * como cenário (feira do município na visão de cima).
 */
export const aula02: AulaGeoV1 = {
  slug: "aula-02-marcas-dos-vovos",
  titulo: "Marcas dos Vovôs no Município",
  iconeTrilha: "🎭",
  bncc: ["EF03GE02"],
  duracaoMin: 20,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Arraste a LUPA sobre o mapa da FEIRA do município. Você vai descobrir MARCAS deixadas por diferentes grupos de vovôs que ajudaram a formar o nosso lugar.",
    mapaUrl: mapaMunicipio,
    aurora:
      "Brilha, hoje a mesa do cartógrafo virou uma feira! Cada canto do município guarda uma MARCA deixada por um povo diferente. Passa a lupa devagar e vamos encontrar essas marcas.",
    falaFinal:
      "Viu quantas marcas? Comida, música, jeito de trabalhar, artesanato — tudo isso veio de grupos DIFERENTES que chegaram no nosso município ao longo do tempo.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes de investigar a fundo, quero seu palpite, explorador! Quem você acha que trouxe todas essas marcas culturais pro nosso município?",
    pergunta: "De onde vêm as marcas do nosso município?",
    opcoes: [
      {
        id: "uma-familia",
        titulo: "Só uma família antiga",
        subtitulo: "os primeiros moradores",
        emoji: "👨‍👩‍👧",
        cor: "from-rose-400 to-pink-600",
      },
      {
        id: "muitos-grupos",
        titulo: "Muitos grupos diferentes",
        subtitulo: "indígenas, africanos, imigrantes",
        emoji: "🌍",
        cor: "from-emerald-400 to-sky-500",
      },
    ],
    respostaCerta: "muitos-grupos",
    feedbackAcerto:
      "Exato! Todo município é feito por MUITOS grupos que chegaram em tempos diferentes e deixaram suas marcas.",
    feedbackErro:
      "Quase! Uma família só não faz um município. Foram MUITOS grupos — indígenas, africanos e imigrantes de vários países.",
    falaFinal:
      "Guarda esse palpite. Nas próximas cenas você vai VER as marcas de cada grupo espalhadas no nosso município.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Antes de sair investigando, precisa entender 4 palavras que todo bom pesquisador de heranças usa. Toca em cada caderno.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "heranca",
        capa: "Herança",
        emoji: "🎁",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "É tudo aquilo que um grupo DEIXA pra quem vem depois: receita, música, jeito de dançar, palavra, brincadeira.",
        exemplo: "Sua avó te ensinou a fazer bolo? Isso é uma HERANÇA da família dela.",
      },
      {
        id: "imigrante",
        capa: "Imigrante",
        emoji: "🚢",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "É a pessoa que veio de OUTRO país pra viver aqui. Trouxe na mala a comida, a língua e o jeito do lugar de origem.",
        exemplo: "Muitos italianos, japoneses e alemães vieram morar no Brasil.",
      },
      {
        id: "cultura",
        capa: "Cultura",
        emoji: "🎭",
        cor: "from-purple-500 to-fuchsia-700",
        conteudo:
          "É o JEITO de um povo viver: o que come, como canta, no que acredita, como festeja, como se veste.",
        exemplo: "Feijoada, samba, forró, festa junina — tudo é cultura brasileira.",
      },
      {
        id: "contribuicao-econ",
        capa: "Contribuição Econômica",
        emoji: "💰",
        cor: "from-lime-500 to-emerald-700",
        conteudo:
          "É quando um grupo ajuda o município a CRESCER com um trabalho ou produto que ele trouxe: comércio, plantação, artesanato.",
        exemplo: "Os japoneses trouxeram jeitos novos de plantar hortaliças no Brasil.",
      },
    ],
    falaFinal:
      "Agora você tem as 4 palavras do pesquisador de heranças. Bora aplicar no mapa da feira!",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Voltei ao mapa do município e marquei 4 pontos com MARCAS diferentes. Toca em cada balão que eu conto qual grupo deixou aquela marca.",
    instrucao: "Toque em cada balão pra ouvir a história da marca",
    mapaUrl: mapaMunicipio,
    pontos: [
      {
        id: "indigena",
        x: 20,
        y: 30,
        emoji: "🪶",
        cor: "from-emerald-400 to-lime-600",
        titulo: "Marca Indígena",
        texto:
          "Aqui, na beira do rio, tem uma aldeia antiga. Os povos INDÍGENAS foram os PRIMEIROS a viver nessa terra. Eles deixaram o nome de rios, comidas como a mandioca, e o jeito de fazer cestos e redes.",
      },
      {
        id: "africana",
        x: 45,
        y: 60,
        emoji: "🥁",
        cor: "from-orange-500 to-red-600",
        titulo: "Marca Africana",
        texto:
          "Nessa praça tem roda de tambor todo sábado. Os povos AFRICANOS trazidos há muito tempo deixaram marca forte: samba, capoeira, feijoada, acarajé, e muitas palavras que a gente fala todo dia.",
      },
      {
        id: "italiana",
        x: 75,
        y: 45,
        emoji: "🍕",
        cor: "from-red-500 to-amber-500",
        titulo: "Marca Italiana",
        texto:
          "Aqui na cidade tem uma cantina antiga. A família ITALIANA que chegou de navio trouxe pizza, macarrão, o jeito de fazer vinho, e ajudou a plantar uvas nas fazendas da região.",
      },
      {
        id: "portuguesa",
        x: 60,
        y: 25,
        emoji: "⛪",
        cor: "from-blue-400 to-indigo-600",
        titulo: "Marca Portuguesa",
        texto:
          "A igreja no centro é PORTUGUESA. Os portugueses foram os primeiros europeus a chegar. Deixaram a LÍNGUA que a gente fala, as festas de padroeiro e o traçado das ruas do centro velho.",
      },
    ],
    falaFinal:
      "Viu? Cada grupo deixou uma marca DIFERENTE no MESMO município. Todas essas heranças juntas formam o nosso jeito de viver aqui.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Radar do cartógrafo ligado! 3 perguntas curtas sobre as marcas que a gente descobriu. Toca no card certo pra o radar pousar.",
    instrucao: "Toque no card certo pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "Quem deixou a MANDIOCA e o nome dos rios como herança pro nosso município?",
        cards: [
          { id: "indigena", emoji: "🪶", titulo: "Povos Indígenas", cor: "from-emerald-400 to-lime-600" },
          { id: "italiana", emoji: "🍕", titulo: "Imigrantes Italianos", cor: "from-red-500 to-amber-500" },
          { id: "portuguesa", emoji: "⛪", titulo: "Portugueses", cor: "from-blue-400 to-indigo-600" },
        ],
        correta: "indigena",
        feedbackAcerto:
          "Isso! Os povos INDÍGENAS foram os primeiros aqui. Nomes de rio, mandioca, cesto e rede vêm deles.",
        feedbackErro:
          "Quase! Mandioca e nome de rio são herança dos povos INDÍGENAS — os primeiros habitantes.",
      },
      {
        id: "q2",
        pergunta: "De qual grupo veio a PIZZA e o jeito de plantar UVA na nossa região?",
        cards: [
          { id: "africana", emoji: "🥁", titulo: "Africanos", cor: "from-orange-500 to-red-600" },
          { id: "italiana", emoji: "🍕", titulo: "Imigrantes Italianos", cor: "from-red-500 to-amber-500" },
          { id: "indigena", emoji: "🪶", titulo: "Indígenas", cor: "from-emerald-400 to-lime-600" },
        ],
        correta: "italiana",
        feedbackAcerto:
          "Boa! A família ITALIANA trouxe a pizza, o macarrão e ajudou a plantar uva no município.",
        feedbackErro:
          "Não é aí. Pizza, macarrão e uva vieram com os IMIGRANTES ITALIANOS que chegaram de navio.",
      },
      {
        id: "q3",
        pergunta: "Qual é a LÍNGUA que a gente fala hoje, herança dos primeiros europeus que chegaram aqui?",
        cards: [
          { id: "portugues", emoji: "🇵🇹", titulo: "Português", cor: "from-blue-400 to-indigo-600" },
          { id: "italiano", emoji: "🇮🇹", titulo: "Italiano", cor: "from-red-500 to-amber-500" },
          { id: "indigena", emoji: "🪶", titulo: "Só línguas indígenas", cor: "from-emerald-400 to-lime-600" },
        ],
        correta: "portugues",
        feedbackAcerto:
          "Exato! O PORTUGUÊS que a gente fala é herança dos portugueses — os primeiros europeus a chegar.",
        feedbackErro:
          "Repara: a gente fala PORTUGUÊS todo dia. Essa é a herança da língua dos PORTUGUESES.",
      },
    ],
    falaFinal:
      "Radar afiadíssimo! Você já sabe reconhecer marca indígena, africana, italiana e portuguesa no município.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Cada herança tem DOIS lados. Um interruptor acende a CULTURAL — comida, música, festa. O outro acende a ECONÔMICA — trabalho, produto, comércio. Liga os dois pra ver o município INTEIRO iluminado de heranças.",
    instrucao: "Toque nos interruptores pra acender cada tipo de herança",
    mapaUrl: mapaMunicipio,
    camadas: [
      {
        id: "cultural",
        rotulo: "Herança Cultural",
        emoji: "🎭",
        cor: "from-purple-500 to-fuchsia-700",
        rect: { x: 10, y: 25, w: 45, h: 55 },
        descricao:
          "A camada CULTURAL: festas juninas, samba, capoeira, tambor, comidas típicas, palavras do dia a dia, danças e crenças que vieram dos grupos que formaram o município.",
      },
      {
        id: "economica",
        rotulo: "Herança Econômica",
        emoji: "💰",
        cor: "from-lime-500 to-emerald-700",
        rect: { x: 55, y: 40, w: 40, h: 45 },
        descricao:
          "A camada ECONÔMICA: cantinas italianas, feiras livres, plantação de uva, hortas de imigrantes, comércio no centro velho, artesanato indígena vendido pra fora — tudo que faz dinheiro girar.",
      },
    ],
    falaFinal:
      "Viu? Cultura E economia caminham JUNTAS. Quando um italiano abre uma cantina, ele traz cultura (a receita) E economia (o negócio) ao mesmo tempo.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Vamos montar a viagem de UMA herança até o seu município? A pizza, por exemplo, não nasceu aqui. Toca nas paradas na ORDEM certa pra ver como ela chegou até a sua cidade.",
    instrucao: "Toque nas paradas na ORDEM certa",
    pergunta: "Como a pizza virou uma herança do meu município?",
    paradas: [
      {
        id: "italia",
        emoji: "🇮🇹",
        rotulo: "Itália",
        descricao: "Tudo começa na Itália, onde a receita da pizza já existia há muito tempo.",
      },
      {
        id: "navio",
        emoji: "🚢",
        rotulo: "Navio",
        descricao: "Uma família italiana embarca num navio, atravessa o oceano e chega ao Brasil.",
      },
      {
        id: "chegada",
        emoji: "🏡",
        rotulo: "Chegada ao município",
        descricao: "A família se instala no município, aluga uma casa e começa a plantar.",
      },
      {
        id: "cantina",
        emoji: "🍕",
        rotulo: "Abre a cantina",
        descricao: "Anos depois, os filhos abrem uma cantina e vendem a pizza da vovó pros vizinhos.",
      },
      {
        id: "festa",
        emoji: "🎉",
        rotulo: "Vira festa da cidade",
        descricao: "Hoje a pizza faz parte do sábado de MUITAS famílias — virou herança do município.",
      },
    ],
    ordemCerta: ["italia", "navio", "chegada", "cantina", "festa"],
    feedbackAcerto: "Rota completa! Da Itália até virar tradição da sua cidade, sem pular etapa.",
    feedbackErro:
      "Essa não é a próxima parada. Pensa: uma herança precisa NASCER, VIAJAR, CHEGAR, VIRAR NEGÓCIO e depois se ESPALHAR pra virar tradição.",
    falaFinal:
      "Viu como uma herança leva TEMPO pra virar parte do município? Ela sai de longe, atravessa o mundo e vai virando o jeito de viver daqui.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez, explorador! Eu vou ficar CALADA. Você lê o Diário das Heranças com seus próprios olhos e toca nas palavras importantes pra provar que entendeu.",
    tituloLivro: "📔 Diário das Heranças",
    subtitulo: "Página 4 — As marcas dos vovôs no município",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Nenhum município é feito por um povo só. Vários grupos chegaram em tempos diferentes e deixaram suas marcas: uma comida, uma música, uma palavra, um jeito de trabalhar. A essas marcas a gente chama de herança.",
        chaves: ["município", "grupos", "herança"],
      },
      {
        id: "p2",
        texto:
          "Os povos indígenas foram os primeiros. Deixaram o nome de rios, a mandioca, o milho, o cesto, a rede e muitas palavras que a gente usa até hoje sem perceber.",
        chaves: ["indígenas", "mandioca", "rede"],
      },
      {
        id: "p3",
        texto:
          "Depois vieram os portugueses, que trouxeram a língua que a gente fala. Também chegaram os povos africanos, com o tambor, o samba, a capoeira, a feijoada e o acarajé. Cada grupo somou uma camada nova ao município.",
        chaves: ["portugueses", "africanos", "camada"],
      },
      {
        id: "p4",
        texto:
          "Mais tarde chegaram os imigrantes italianos, japoneses e alemães. Eles abriram cantinas, plantaram hortas novas, ensinaram receitas e ajudaram a economia do município a crescer com o comércio deles.",
        chaves: ["imigrantes", "cantinas", "economia"],
      },
    ],
    falaFinal:
      "Leitura de historiador! Você já sabe explicar SEM ajuda: cada município tem várias camadas de heranças, culturais E econômicas. Bora pro minijogo!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Chegou o minijogo do pesquisador contra o tempo! Cada rodada mostra DOIS grupos e uma marca do município. Você lê a pista, olha as peças embaixo e toca na peça que representa a ORIGEM CERTA daquela marca — antes do relógio zerar!",
    instrucao: "⏱️ Leia a pista e toque na peça de origem certa antes do tempo acabar!",
    duracaoSegundos: 15,
    pecas: [
      { id: "indigena", emoji: "🪶", rotulo: "Indígena" },
      { id: "africana", emoji: "🥁", rotulo: "Africana" },
      { id: "italiana", emoji: "🍕", rotulo: "Italiana" },
      { id: "portuguesa", emoji: "⛪", rotulo: "Portuguesa" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: {
          nome: "Bairro do Rio",
          emoji: "🌊",
          cor: "from-emerald-500 to-lime-700",
        },
        municipioB: {
          nome: "Feira do Centro",
          emoji: "🥔",
          cor: "from-amber-500 to-orange-700",
        },
        contexto:
          "Na feira aparece um saco de MANDIOCA e um cesto de palha trançada. Qual grupo deixou essa marca?",
        pecaCertaId: "indigena",
        feedbackAcerto:
          "Combo! Mandioca e cesto de palha são herança INDÍGENA — dos primeiros habitantes.",
        feedbackErro:
          "Quase! Mandioca e cesto de palha vêm dos povos INDÍGENAS 🪶.",
      },
      {
        id: "r2",
        municipioA: {
          nome: "Praça do Tambor",
          emoji: "🥁",
          cor: "from-orange-500 to-red-700",
        },
        municipioB: {
          nome: "Rua da Feijoada",
          emoji: "🍲",
          cor: "from-amber-700 to-stone-700",
        },
        contexto:
          "Todo sábado tem roda de TAMBOR e o cheiro de FEIJOADA no ar. Qual grupo deixou essa marca?",
        pecaCertaId: "africana",
        feedbackAcerto:
          "Boa! Tambor, samba e feijoada são heranças AFRICANAS 🥁 fortíssimas no Brasil.",
        feedbackErro:
          "Repara: tambor + feijoada é marca AFRICANA 🥁.",
      },
      {
        id: "r3",
        municipioA: {
          nome: "Cantina da Nonna",
          emoji: "🍝",
          cor: "from-red-500 to-amber-500",
        },
        municipioB: {
          nome: "Vinhedo do Sítio",
          emoji: "🍇",
          cor: "from-purple-500 to-rose-700",
        },
        contexto:
          "Uma cantina serve MACARRÃO da nonna e o sítio ao lado planta UVA pra fazer vinho. Qual grupo trouxe essas marcas?",
        pecaCertaId: "italiana",
        feedbackAcerto:
          "Isso! Macarrão da nonna e uva pra vinho são clássicos da imigração ITALIANA 🍕.",
        feedbackErro:
          "Ops! Macarrão + uva pra vinho é marca ITALIANA 🍕.",
      },
      {
        id: "r4",
        municipioA: {
          nome: "Igreja Matriz",
          emoji: "⛪",
          cor: "from-blue-500 to-indigo-700",
        },
        municipioB: {
          nome: "Centro Velho",
          emoji: "🗣️",
          cor: "from-stone-500 to-stone-800",
        },
        contexto:
          "A igreja do centro é a mais antiga e a LÍNGUA que todo mundo fala aqui veio desses primeiros europeus. Qual grupo é esse?",
        pecaCertaId: "portuguesa",
        feedbackAcerto:
          "Combo perfeito! Igreja matriz + a língua portuguesa que a gente fala = herança PORTUGUESA ⛪.",
        feedbackErro:
          "Atenção: a língua que a gente fala é o PORTUGUÊS ⛪ — herança dos portugueses.",
      },
    ],
    falaFinal:
      "Pesquisador de heranças oficial! Você já reconhece as 4 marcas do município: indígena, africana, italiana e portuguesa. Cada grupo somou uma camada.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Bora olhar as heranças do município como uma pizza dividida em DUAS fatias: a cultural e a econômica. Toca em cada fatia pra ver o que tem lá dentro.",
    instrucao: "🍕 Toque nas fatias pra ouvir sobre cada tipo de herança",
    fatias: [
      {
        id: "cultural",
        rotulo: "Herança Cultural",
        emoji: "🎭",
        percentual: 50,
        cor: "#a855f7",
        descricao:
          "Herança CULTURAL: metade das marcas do município. É comida típica, música, dança, festa, palavra, jeito de rezar, brincadeira de rua — tudo que faz a alma do lugar.",
        exemplos: ["Feijoada, pizza e mandioca", "Samba, tambor e forró", "Festa junina e padroeiro"],
      },
      {
        id: "economica",
        rotulo: "Herança Econômica",
        emoji: "💰",
        percentual: 50,
        cor: "#16a34a",
        descricao:
          "Herança ECONÔMICA: a outra metade. É o trabalho e o negócio que cada grupo trouxe — cantinas, feiras, hortas, plantações, artesanato pra vender e comércio no centro da cidade.",
        exemplos: ["Cantinas e restaurantes", "Vinhedos e hortas", "Artesanato indígena vendido"],
      },
    ],
    falaFinal:
      "Sacou? Cultura e economia andam JUNTAS. Toda herança tem os dois lados — o jeito de fazer E o jeito de ganhar a vida com aquilo.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última prova, explorador! 3 perguntas rápidas pra ganhar sua insígnia de Guardião das Heranças.",
    instrucao: "Toque na resposta certa. Você tem 1 chance por pergunta.",
    perguntas: [
      {
        id: "p1",
        pergunta: "O que é uma HERANÇA cultural do município?",
        opcoes: [
          { id: "a", texto: "Um objeto caro que a família guarda no cofre." },
          { id: "b", texto: "Comida, música, festa ou jeito de viver deixado por um grupo pra quem vem depois.", correta: true },
          { id: "c", texto: "Uma lei nova que o prefeito criou." },
        ],
        feedbackAcerto: "Isso! Herança cultural é tudo que um grupo DEIXA pros próximos: comida, música, festa, jeito.",
        feedbackErro: "Quase! Herança é o que um grupo DEIXA pros próximos — comida, música, festa, jeito de viver.",
      },
      {
        id: "p2",
        pergunta: "Quem deixou a MANDIOCA, o CESTO de palha e vários nomes de rio no nosso município?",
        opcoes: [
          { id: "a", texto: "Os imigrantes italianos." },
          { id: "b", texto: "Os povos indígenas — os primeiros habitantes.", correta: true },
          { id: "c", texto: "Os portugueses que chegaram de navio." },
        ],
        feedbackAcerto: "Perfeito! Mandioca, cesto e nomes de rio são herança INDÍGENA — os primeiros aqui.",
        feedbackErro: "Ops! Mandioca, cesto de palha e nomes de rio são herança dos povos INDÍGENAS.",
      },
      {
        id: "p3",
        pergunta: "Uma família italiana abre uma cantina no centro. Isso é herança…",
        opcoes: [
          { id: "a", texto: "Só cultural, porque é comida." },
          { id: "b", texto: "Só econômica, porque vende pizza." },
          { id: "c", texto: "Cultural E econômica ao mesmo tempo — a receita é cultura, o negócio é economia.", correta: true },
        ],
        feedbackAcerto: "Exato! Toda cantina traz OS DOIS lados: a receita (cultura) e o negócio (economia).",
        feedbackErro: "Repensa: a cantina traz a receita da nonna (cultura) E o negócio que gera dinheiro (economia). São os DOIS.",
      },
    ],
    selo: {
      nome: "Guardião das Heranças",
      subtitulo: "Insígnia oficial do Atlas Municipal — Aula 02",
      emoji: "🎭",
      cor: "from-purple-400 to-fuchsia-500",
    },
    falaFinal:
      "Segunda página do Atlas Municipal desbloqueada! Você agora reconhece as heranças indígenas, africanas, italianas e portuguesas do seu município — nas duas camadas, cultural e econômica.",
  },

  recompensa: { xp: 110, moedas: 22, medalha: "Guardião das Heranças" },
};
