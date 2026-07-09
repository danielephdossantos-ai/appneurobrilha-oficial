import type { AulaGeoV1 } from "../../types";
import mapaMunicipio from "@/assets/geografia-3ano/mapa-municipio.jpg";
import paisagemTransformacao from "@/assets/geografia-3ano/paisagem-transformacao-antes-agora.jpg";

/**
 * Geografia · 3º Ano · Unidade 1 · Aula 04
 * "Paisagens em Transformação" — EF03GE04
 * Explicar como as paisagens do município se transformam pela ação da
 * natureza e pela ação humana ao longo do tempo.
 * Mesmo esqueleto de 11 cenas do PlayerGeoV1 e mesmo mapa das aulas anteriores.
 */
export const aula04: AulaGeoV1 = {
  slug: "aula-04-paisagens-em-transformacao",
  titulo: "Paisagens em Transformação",
  iconeTrilha: "🌄",
  bncc: ["EF03GE04"],
  duracaoMin: 20,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Arraste a LUPA sobre o mapa. Hoje você vai comparar o município de ANTES com o de AGORA e descobrir o que MUDOU.",
    mapaUrl: mapaMunicipio,
    imagemDestaqueUrl: paisagemTransformacao,
    aurora:
      "Brilha, olha bem: esse mesmo lugar era MUITO diferente há 50 anos. Tinha mais mata, menos rua, menos prédio. Vamos investigar o que MUDA numa paisagem?",
    falaFinal:
      "Viu? Nenhuma paisagem fica igual pra sempre. Toda paisagem se TRANSFORMA — às vezes pela natureza, às vezes pela mão do ser humano.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes de investigar, quero seu palpite: quem MAIS transforma a paisagem do município hoje em dia?",
    pergunta: "Quem transforma mais a paisagem do município?",
    opcoes: [
      {
        id: "natureza",
        titulo: "Só a natureza",
        subtitulo: "chuva, vento, rio",
        emoji: "🌧️",
        cor: "from-sky-400 to-blue-600",
      },
      {
        id: "ambos",
        titulo: "Natureza E ser humano",
        subtitulo: "os dois trabalham juntos",
        emoji: "🤝",
        cor: "from-emerald-400 to-amber-500",
      },
    ],
    respostaCerta: "ambos",
    feedbackAcerto:
      "Exato! A natureza transforma devagar (chuva, rio, vento) e o ser humano transforma rápido (construção, plantio, desmatamento). Os DOIS mudam a paisagem.",
    feedbackErro:
      "Quase! A natureza muda a paisagem sozinha, mas o SER HUMANO muda muito mais rápido — abrindo ruas, plantando roça, construindo prédio.",
    falaFinal:
      "Guarda esse palpite. Nas próximas cenas você vai VER exemplos das duas forças em ação.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Antes de sair investigando, abra 4 cadernos. Cada um explica uma palavra que todo bom detetive de paisagens usa.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "paisagem",
        capa: "Paisagem",
        emoji: "🌄",
        cor: "from-emerald-500 to-teal-700",
        conteudo:
          "É tudo o que a gente VÊ de um lugar: casa, rua, rio, morro, árvore, prédio, pessoas passando. Um retrato do lugar num momento.",
        exemplo: "A paisagem da sua rua hoje é diferente da paisagem da rua da sua avó quando ela era criança.",
      },
      {
        id: "natural",
        capa: "Ação Natural",
        emoji: "🌧️",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "É a mudança feita pela NATUREZA: chuva que gasta a rocha, rio que muda de caminho, vento que derruba árvore, terremoto, erosão.",
        exemplo: "A chuva forte fez uma cratera no meio da rua — isso foi ação da natureza.",
      },
      {
        id: "humana",
        capa: "Ação Humana",
        emoji: "🚧",
        cor: "from-orange-500 to-red-700",
        conteudo:
          "É a mudança feita pelo SER HUMANO: construir casa, abrir rua, derrubar mata, plantar roça, cavar poço, colocar poste, asfaltar.",
        exemplo: "O prédio novo no lugar do antigo terreno vazio é ação humana.",
      },
      {
        id: "transformacao",
        capa: "Transformação",
        emoji: "🔄",
        cor: "from-purple-500 to-fuchsia-700",
        conteudo:
          "É a MUDANÇA da paisagem ao longo do tempo. Pode ser rápida (uma obra em 1 mês) ou lenta (um rio que gasta a rocha em 100 anos).",
        exemplo: "O terreno que era mata virou bairro em 10 anos — isso é transformação.",
      },
    ],
    falaFinal:
      "Agora você tem as 4 palavras do detetive de paisagens. Bora aplicar no mapa!",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Voltei ao mapa e marquei 4 lugares que MUDARAM muito nos últimos anos. Toca em cada balão pra ouvir o ANTES e o AGORA de cada um.",
    instrucao: "Toque em cada balão pra ouvir a transformação daquele lugar",
    mapaUrl: mapaMunicipio,
    pontos: [
      {
        id: "rio",
        x: 20,
        y: 50,
        emoji: "🌊",
        cor: "from-sky-500 to-blue-700",
        titulo: "O rio mudou de caminho",
        texto:
          "ANTES o rio corria bem no meio dessa parte do município. Depois de muitas chuvas fortes, ele foi CAVANDO uma nova rota e hoje passa mais pra baixo. Ação NATURAL, lenta, mas mudou tudo.",
      },
      {
        id: "mata",
        x: 60,
        y: 20,
        emoji: "🌳",
        cor: "from-emerald-500 to-lime-700",
        titulo: "A mata virou pasto",
        texto:
          "ANTES aqui era mata fechada, cheia de bichos. AGORA virou pasto com gado. Foi o SER HUMANO que derrubou as árvores pra criar boi. Ação humana, rápida.",
      },
      {
        id: "bairro",
        x: 70,
        y: 60,
        emoji: "🏘️",
        cor: "from-orange-500 to-red-700",
        titulo: "O terreno virou bairro",
        texto:
          "ANTES esse pedaço era um terreno vazio com capim. AGORA tem 200 casas, uma escola e uma padaria. Ação humana, muito rápida — mudou em menos de 10 anos.",
      },
      {
        id: "morro",
        x: 40,
        y: 30,
        emoji: "⛰️",
        cor: "from-stone-500 to-amber-700",
        titulo: "O morro perdeu terra",
        texto:
          "As chuvas de todo ano vão levando um pouco da terra do morro pra baixo. Depois de MUITO tempo, ele fica mais baixo e arredondado. Ação NATURAL, lenta.",
      },
    ],
    falaFinal:
      "4 mudanças, 4 histórias. Algumas foram da NATUREZA, outras do SER HUMANO. Toda paisagem carrega essas marcas.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Radar do detetive ligado! 3 perguntas pra ver se você separa AÇÃO NATURAL de AÇÃO HUMANA.",
    instrucao: "Toque no card certo pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "A CHUVA forte cavou uma cratera na rua. Que tipo de ação transformou a paisagem?",
        cards: [
          { id: "natural", emoji: "🌧️", titulo: "Ação natural", cor: "from-sky-500 to-blue-700" },
          { id: "humana", emoji: "🚧", titulo: "Ação humana", cor: "from-orange-500 to-red-700" },
          { id: "nenhuma", emoji: "❓", titulo: "Nenhuma das duas", cor: "from-stone-400 to-stone-600" },
        ],
        correta: "natural",
        feedbackAcerto: "Isso! Chuva é NATUREZA 🌧️ — mesmo passando na cidade, quem cavou foi a água.",
        feedbackErro: "Quase! Quem cavou foi a CHUVA — isso é ação NATURAL 🌧️, mesmo que aconteça na rua.",
      },
      {
        id: "q2",
        pergunta: "Uma mata foi DERRUBADA pra virar pasto de gado. Que tipo de ação foi essa?",
        cards: [
          { id: "natural", emoji: "🌧️", titulo: "Ação natural", cor: "from-sky-500 to-blue-700" },
          { id: "humana", emoji: "🚧", titulo: "Ação humana", cor: "from-orange-500 to-red-700" },
          { id: "mista", emoji: "🤷", titulo: "Foi por acaso", cor: "from-stone-400 to-stone-600" },
        ],
        correta: "humana",
        feedbackAcerto: "Boa! Derrubar mata pra pasto é AÇÃO HUMANA 🚧 — feita com trator e motosserra.",
        feedbackErro: "Repara: mata não cai sozinha pra virar pasto. Quem derruba é o SER HUMANO 🚧.",
      },
      {
        id: "q3",
        pergunta: "O rio, depois de muitos anos, ABRIU um novo caminho no meio da rocha. Qual ação?",
        cards: [
          { id: "humana", emoji: "🚧", titulo: "Ação humana", cor: "from-orange-500 to-red-700" },
          { id: "natural", emoji: "🌊", titulo: "Ação natural", cor: "from-sky-500 to-blue-700" },
          { id: "prefeito", emoji: "🏛️", titulo: "O prefeito mandou", cor: "from-stone-400 to-stone-600" },
        ],
        correta: "natural",
        feedbackAcerto: "Exato! O RIO cavando rocha ao longo do tempo é ação NATURAL 🌊 — lenta, mas poderosa.",
        feedbackErro: "Ops! Rio cavando rocha em muitos anos é ação NATURAL 🌊. Ninguém mandou fazer.",
      },
    ],
    falaFinal:
      "Radar afiado! Você já sabe separar o que a natureza muda do que o ser humano muda.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Duas FORÇAS transformam o município. Um interruptor acende as áreas mudadas pela NATUREZA. O outro acende as áreas mudadas pelo SER HUMANO. Liga os dois pra ver o município inteiro em transformação.",
    instrucao: "Toque nos interruptores pra acender cada tipo de transformação",
    mapaUrl: mapaMunicipio,
    camadas: [
      {
        id: "natureza",
        rotulo: "Transformação Natural",
        emoji: "🌊",
        cor: "from-sky-500 to-blue-700",
        rect: { x: 10, y: 15, w: 40, h: 55 },
        descricao:
          "Áreas transformadas pela NATUREZA: o rio que muda de caminho, o morro que perde terra pela chuva, a mata que cresce sozinha, o vento que empurra areia. Mudanças LENTAS.",
      },
      {
        id: "humano",
        rotulo: "Transformação Humana",
        emoji: "🚧",
        cor: "from-orange-500 to-red-700",
        rect: { x: 50, y: 35, w: 45, h: 50 },
        descricao:
          "Áreas transformadas pelo SER HUMANO: bairros novos, ruas asfaltadas, mata derrubada, pasto, plantação, prédios e pontes. Mudanças RÁPIDAS.",
      },
    ],
    falaFinal:
      "Viu? As duas forças trabalham no MESMO município. Uma é lenta, outra é rápida — mas as duas mudam a paisagem pra sempre.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Bora ver como um TERRENO VAZIO virou um BAIRRO em poucos anos? Toca nas paradas na ORDEM certa pra ver a transformação passo a passo.",
    instrucao: "Toque nas paradas na ORDEM certa",
    pergunta: "Como um terreno vazio virou um bairro?",
    paradas: [
      {
        id: "mato",
        emoji: "🌾",
        rotulo: "Terreno com mato",
        descricao: "No início, era um pedaço de terra com mato alto, sem ninguém morando.",
      },
      {
        id: "trator",
        emoji: "🚜",
        rotulo: "Trator limpa o terreno",
        descricao: "Chega o trator e limpa toda a área, deixando o chão pronto pra receber obras.",
      },
      {
        id: "ruas",
        emoji: "🛣️",
        rotulo: "Abrem as ruas",
        descricao: "Máquinas abrem as ruas, colocam meio-fio e depois o asfalto por cima.",
      },
      {
        id: "casas",
        emoji: "🏘️",
        rotulo: "Constroem as casas",
        descricao: "Operários levantam as casas uma por uma, com tijolo, telhado e portão.",
      },
      {
        id: "escola",
        emoji: "🏫",
        rotulo: "Chegam escola e comércio",
        descricao: "Depois vem a escola, a padaria, o mercadinho — e o bairro fica vivo.",
      },
    ],
    ordemCerta: ["mato", "trator", "ruas", "casas", "escola"],
    feedbackAcerto: "Rota completa! Do mato até virar bairro cheio de gente, sem pular etapa.",
    feedbackErro:
      "Essa não é a próxima parada. Pensa: primeiro LIMPA o terreno, depois ABRE as ruas, DEPOIS constrói as casas, e só no final chegam a escola e o comércio.",
    falaFinal:
      "Viu como uma transformação HUMANA tem várias etapas? E cada etapa muda mais um pedacinho da paisagem.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez, explorador! Eu fico caladinha. Você lê o Diário das Paisagens sozinho e toca nas palavras chave pra provar que entendeu.",
    tituloLivro: "📔 Diário das Paisagens",
    subtitulo: "Página 6 — Como as paisagens se transformam",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Nenhuma paisagem fica igual pra sempre. Toda paisagem se transforma ao longo do tempo — às vezes por causa da NATUREZA, às vezes por causa do SER HUMANO.",
        chaves: ["paisagem", "transforma", "tempo"],
      },
      {
        id: "p2",
        texto:
          "As transformações NATURAIS costumam ser LENTAS. A chuva gasta a rocha, o rio muda de caminho, o vento carrega areia e o morro fica mais baixo depois de muitos anos.",
        chaves: ["naturais", "lentas", "chuva"],
      },
      {
        id: "p3",
        texto:
          "Já as transformações feitas pelo SER HUMANO são RÁPIDAS. Em poucos anos, um terreno vazio vira bairro, uma mata vira pasto e uma estrada corta o município no meio.",
        chaves: ["humano", "rápidas", "bairro"],
      },
      {
        id: "p4",
        texto:
          "Cuidar da paisagem é olhar pra essas mudanças com atenção. Nem toda transformação é boa: derrubar toda a mata ou sujar o rio prejudica quem mora ali e os bichos também.",
        chaves: ["cuidar", "atenção", "mata"],
      },
    ],
    falaFinal:
      "Leitura de detetive! Você já sabe explicar SOZINHO como as paisagens do município se transformam. Bora pro minijogo!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Minijogo do detetive contra o tempo! Cada rodada mostra uma paisagem que MUDOU. Lê a pista, olha as peças embaixo e toca no TIPO de transformação certo antes do relógio zerar.",
    instrucao: "⏱️ Leia a pista e toque na peça de transformação certa antes do tempo acabar!",
    duracaoSegundos: 15,
    pecas: [
      { id: "natural", emoji: "🌧️", rotulo: "Natural" },
      { id: "humana", emoji: "🚧", rotulo: "Humana" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Mata antiga", emoji: "🌳", cor: "from-emerald-500 to-lime-700" },
        municipioB: { nome: "Pasto novo", emoji: "🐄", cor: "from-amber-500 to-yellow-600" },
        contexto:
          "Onde tinha mata fechada com árvores altas, agora tem pasto com gado. Que tipo de transformação aconteceu?",
        pecaCertaId: "humana",
        feedbackAcerto: "Combo! Mata que vira pasto é AÇÃO HUMANA 🚧 — feita com motosserra e trator.",
        feedbackErro: "Repara: mata não cai sozinha pra virar pasto. Isso é AÇÃO HUMANA 🚧.",
      },
      {
        id: "r2",
        municipioA: { nome: "Morro alto", emoji: "⛰️", cor: "from-stone-500 to-amber-700" },
        municipioB: { nome: "Morro gasto", emoji: "🏔️", cor: "from-stone-400 to-stone-600" },
        contexto:
          "O morro ficou MAIS BAIXO depois de 50 anos de chuva forte todo verão. Que tipo de transformação foi essa?",
        pecaCertaId: "natural",
        feedbackAcerto: "Boa! Chuva gastando o morro em 50 anos é AÇÃO NATURAL 🌧️ — lenta e poderosa.",
        feedbackErro: "Ops! Chuva desgastando o morro em muitos anos é AÇÃO NATURAL 🌧️.",
      },
      {
        id: "r3",
        municipioA: { nome: "Terreno vazio", emoji: "🌾", cor: "from-lime-400 to-amber-500" },
        municipioB: { nome: "Bairro novo", emoji: "🏘️", cor: "from-orange-500 to-red-700" },
        contexto:
          "Onde tinha só mato e capim, agora tem 200 casas, ruas asfaltadas e uma escola. Qual foi a transformação?",
        pecaCertaId: "humana",
        feedbackAcerto: "Isso! Bairro no lugar de terreno vazio é AÇÃO HUMANA 🚧 — máquinas, tijolo e trabalho.",
        feedbackErro: "Atenção: bairro não nasce sozinho. Isso é AÇÃO HUMANA 🚧, feita por operários e máquinas.",
      },
      {
        id: "r4",
        municipioA: { nome: "Rio no caminho antigo", emoji: "🌊", cor: "from-sky-500 to-blue-700" },
        municipioB: { nome: "Rio no caminho novo", emoji: "🏞️", cor: "from-teal-500 to-emerald-700" },
        contexto:
          "O rio, depois de muitos anos, foi cavando a rocha e ABRIU um caminho novo. Que ação foi essa?",
        pecaCertaId: "natural",
        feedbackAcerto: "Combo perfeito! Rio cavando rocha em muitos anos é AÇÃO NATURAL 🌊.",
        feedbackErro: "Repara: rio mudando de caminho sozinho ao longo do tempo é AÇÃO NATURAL 🌊.",
      },
    ],
    falaFinal:
      "Detetive de paisagens oficial! Você separa AÇÃO NATURAL de AÇÃO HUMANA com um olhar.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Bora olhar as transformações do município como uma pizza dividida em DUAS fatias. Toca em cada fatia pra ouvir sobre cada tipo.",
    instrucao: "🍕 Toque nas fatias pra ouvir sobre cada tipo de transformação",
    fatias: [
      {
        id: "natural",
        rotulo: "Transformação Natural",
        emoji: "🌧️",
        percentual: 40,
        cor: "#0ea5e9",
        descricao:
          "Transformação NATURAL: chuva que gasta rocha, rio que muda de caminho, vento que carrega areia, morro que perde terra. Muda a paisagem DEVAGAR, ao longo de muitos anos.",
        exemplos: ["Chuva desgastando a rocha", "Rio mudando de caminho", "Morro ficando mais baixo"],
      },
      {
        id: "humana",
        rotulo: "Transformação Humana",
        emoji: "🚧",
        percentual: 60,
        cor: "#ea580c",
        descricao:
          "Transformação HUMANA: mata que vira pasto, terreno que vira bairro, estrada nova, prédio no lugar da casa antiga. Muda a paisagem RÁPIDO, em poucos anos.",
        exemplos: ["Mata virando pasto", "Terreno virando bairro", "Rua nova asfaltada"],
      },
    ],
    falaFinal:
      "Sacou? As duas transformações acontecem AO MESMO TEMPO no município. A natural é lenta, a humana é rápida — e as duas deixam marca na paisagem.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última prova, explorador! 3 perguntas pra ganhar sua insígnia de Guardião das Paisagens.",
    instrucao: "Toque na resposta certa. Você tem 1 chance por pergunta.",
    perguntas: [
      {
        id: "p1",
        pergunta: "O que é uma PAISAGEM do município?",
        opcoes: [
          { id: "a", texto: "Só a mata que fica longe da cidade." },
          { id: "b", texto: "Tudo o que a gente VÊ de um lugar: casa, rua, rio, morro, árvore, prédio.", correta: true },
          { id: "c", texto: "Uma foto antiga guardada no álbum da família." },
        ],
        feedbackAcerto: "Isso! Paisagem é TUDO o que a gente vê num lugar — natural e construído.",
        feedbackErro: "Quase! Paisagem é TUDO o que a gente vê do lugar, não só a mata.",
      },
      {
        id: "p2",
        pergunta: "Uma CHUVA muito forte cavou uma cratera no morro. Que tipo de transformação foi essa?",
        opcoes: [
          { id: "a", texto: "Ação humana, porque foi na cidade." },
          { id: "b", texto: "Ação natural — quem cavou foi a chuva.", correta: true },
          { id: "c", texto: "Nenhuma das duas — foi por acaso." },
        ],
        feedbackAcerto: "Perfeito! Chuva é NATUREZA — mesmo passando na cidade.",
        feedbackErro: "Ops! Quem cavou foi a chuva. Isso é AÇÃO NATURAL.",
      },
      {
        id: "p3",
        pergunta: "Qual é a diferença entre a transformação NATURAL e a transformação HUMANA?",
        opcoes: [
          { id: "a", texto: "A natural é boa e a humana é ruim." },
          { id: "b", texto: "Não existe diferença — é tudo igual." },
          { id: "c", texto: "A natural costuma ser LENTA (muitos anos) e a humana costuma ser RÁPIDA (poucos anos).", correta: true },
        ],
        feedbackAcerto: "Exato! Natureza muda LENTO, ser humano muda RÁPIDO. Nenhuma é 'melhor' — são forças diferentes.",
        feedbackErro: "Repensa: a natural é LENTA (leva muitos anos) e a humana é RÁPIDA (poucos anos).",
      },
    ],
    selo: {
      nome: "Guardião das Paisagens",
      subtitulo: "Insígnia oficial do Atlas Municipal — Aula 04",
      emoji: "🌄",
      cor: "from-sky-400 to-emerald-500",
    },
    falaFinal:
      "Quarta página do Atlas Municipal desbloqueada! Você agora enxerga toda paisagem como uma HISTÓRIA em transformação — pela natureza e pelo ser humano.",
  },

  recompensa: { xp: 120, moedas: 24, medalha: "Guardião das Paisagens" },
};
