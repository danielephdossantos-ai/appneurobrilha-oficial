import type { AulaGeoV1 } from "../../types";
import { url as mapaMunicipio } from "@/assets/geografia-3ano/mapa-municipio.jpg.asset.json";
import { url as modosDeVida } from "@/assets/geografia-3ano/modos-de-vida-comunidades.jpg.asset.json";
/**
 * Geografia · 3º Ano · Unidade 1 · Aula 03
 * "Modos de Vida" — EF03GE03
 * Reconhecer os diferentes modos de vida de povos e comunidades tradicionais
 * (indígenas, quilombolas, ribeirinhos, agricultores familiares) em distintos lugares.
 * Mesmo esqueleto de 11 cenas do PlayerGeoV1 e mesmo mapa da Aula 01/02.
 */
export const aula03: AulaGeoV1 = {
  slug: "aula-03-modos-de-vida",
  titulo: "Modos de Vida no Município",
  iconeTrilha: "🏕️",
  bncc: ["EF03GE03"],
  duracaoMin: 20,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Arraste a LUPA sobre o mapa. Hoje você vai espiar CASAS diferentes: cada uma tem um jeito próprio de acordar, trabalhar e viver.",
    mapaUrl: mapaMunicipio,
    imagemDestaqueUrl: modosDeVida,
    aurora:
      "Brilha, cada família do município acorda de um jeito. Uns pescam no rio, outros plantam roça, outros abrem loja no centro. Vamos descobrir esses MODOS de vida?",
    falaFinal:
      "Cada casa que a lupa mostrou tem um MODO DE VIDA diferente — e todos são importantes pro município.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes de investigar, quero seu palpite: será que todo mundo do município vive do mesmo jeito?",
    pergunta: "Todo mundo do município vive do mesmo jeito?",
    opcoes: [
      {
        id: "igual",
        titulo: "Sim, todos vivem igual",
        subtitulo: "mesma rotina pra todo mundo",
        emoji: "🟰",
        cor: "from-rose-400 to-pink-600",
      },
      {
        id: "diferente",
        titulo: "Não, cada grupo tem seu jeito",
        subtitulo: "rio, roça, floresta, cidade",
        emoji: "🌈",
        cor: "from-emerald-400 to-sky-500",
      },
    ],
    respostaCerta: "diferente",
    feedbackAcerto:
      "Exato! Cada comunidade tem UM JEITO de viver ligado ao lugar onde mora — beira do rio, floresta, roça, cidade.",
    feedbackErro:
      "Quase! Se a pessoa mora na beira do rio, ela vive DIFERENTE de quem mora no meio da cidade. Cada lugar tem seu modo.",
    falaFinal:
      "Guarda esse palpite. Nas próximas cenas você vai VER 4 modos de vida bem diferentes dentro do MESMO município.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Antes de sair investigando, abra 4 cadernos de campo. Cada um explica um GRUPO tradicional que vive no nosso município.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "ribeirinho",
        capa: "Ribeirinho",
        emoji: "🛶",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "É quem mora na BEIRA DO RIO. Anda de canoa, pesca, planta na várzea e conhece as cheias e secas melhor que ninguém.",
        exemplo: "Uma família ribeirinha usa o rio pra chegar na escola, na feira e no posto de saúde.",
      },
      {
        id: "quilombola",
        capa: "Quilombola",
        emoji: "🥁",
        cor: "from-orange-500 to-red-700",
        conteudo:
          "É a comunidade formada por descendentes de africanos que se libertaram e mantêm até hoje a terra, a comida, a dança e as festas dos antepassados.",
        exemplo: "No quilombo se reza, se planta e se cozinha do jeito que os avós ensinaram há muito tempo.",
      },
      {
        id: "indigena",
        capa: "Indígena",
        emoji: "🪶",
        cor: "from-emerald-500 to-lime-700",
        conteudo:
          "São os povos ORIGINÁRIOS da terra. Vivem em aldeia, falam sua própria língua, cuidam da floresta e passam os saberes de geração em geração.",
        exemplo: "Numa aldeia, as crianças aprendem a pescar, tecer e ouvir histórias com os mais velhos.",
      },
      {
        id: "agricultor",
        capa: "Agricultor Familiar",
        emoji: "🌱",
        cor: "from-amber-500 to-yellow-600",
        conteudo:
          "É a família que planta uma ROÇA pequena pro próprio sustento e vende o que sobra na feira do município. Trabalha junto — pai, mãe, filhos, avós.",
        exemplo: "O sítio da família tem galinha, horta, milho e leva alface pra feira de sábado.",
      },
    ],
    falaFinal:
      "4 modos de vida, 4 cadernos. Cada um vive DIFERENTE, mas todos formam o mesmo município.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Voltei ao mapa e marquei ONDE cada comunidade vive. Toca em cada balão pra ouvir a história do modo de vida daquele lugar.",
    instrucao: "Toque em cada balão pra ouvir a rotina de cada comunidade",
    mapaUrl: mapaMunicipio,
    pontos: [
      {
        id: "ribeirinho",
        x: 18,
        y: 55,
        emoji: "🛶",
        cor: "from-sky-500 to-blue-700",
        titulo: "Comunidade Ribeirinha",
        texto:
          "Aqui, na beira do rio, dona Val acorda cedo, entra na canoa e vai pescar. As crianças vão pra escola de barco. Quando o rio enche, a casa sobe em palafita.",
      },
      {
        id: "quilombola",
        x: 40,
        y: 75,
        emoji: "🥁",
        cor: "from-orange-500 to-red-700",
        titulo: "Comunidade Quilombola",
        texto:
          "Nessa comunidade, seu Zé toca tambor no fim de tarde. Todo mundo planta junto num terreno comum, faz farinha na casa de farinha e dança jongo nas festas.",
      },
      {
        id: "indigena",
        x: 70,
        y: 25,
        emoji: "🪶",
        cor: "from-emerald-500 to-lime-700",
        titulo: "Aldeia Indígena",
        texto:
          "Na aldeia, as crianças falam a língua do povo delas antes do português. Aprendem a pescar de arco, a tecer rede e a cuidar da mata que fica ao redor.",
      },
      {
        id: "agricultor",
        x: 55,
        y: 45,
        emoji: "🌱",
        cor: "from-amber-500 to-yellow-600",
        titulo: "Sítio Familiar",
        texto:
          "No sítio de dona Rita, o dia começa tirando leite. Depois é colher tomate, alface e cebolinha. Sábado a família enche a caminhonete e leva tudo pra feira do centro.",
      },
    ],
    falaFinal:
      "4 casas, 4 rotinas, um município só. Cada modo de vida está LIGADO ao lugar em que a família mora.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Radar do explorador ligado! 3 perguntas rápidas pra ver se você reconhece cada modo de vida.",
    instrucao: "Toque no card certo pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual comunidade usa CANOA pra ir na escola e sobe a casa em palafita quando o rio enche?",
        cards: [
          { id: "ribeirinho", emoji: "🛶", titulo: "Ribeirinha", cor: "from-sky-500 to-blue-700" },
          { id: "agricultor", emoji: "🌱", titulo: "Agricultor familiar", cor: "from-amber-500 to-yellow-600" },
          { id: "indigena", emoji: "🪶", titulo: "Indígena", cor: "from-emerald-500 to-lime-700" },
        ],
        correta: "ribeirinho",
        feedbackAcerto: "Isso! Quem mora na beira do rio é RIBEIRINHO 🛶. A vida gira em torno do rio.",
        feedbackErro: "Quase! Canoa, palafita, cheia do rio = comunidade RIBEIRINHA 🛶.",
      },
      {
        id: "q2",
        pergunta: "Onde as crianças aprendem PRIMEIRO a língua do próprio povo e depois o português?",
        cards: [
          { id: "quilombola", emoji: "🥁", titulo: "Quilombola", cor: "from-orange-500 to-red-700" },
          { id: "indigena", emoji: "🪶", titulo: "Aldeia indígena", cor: "from-emerald-500 to-lime-700" },
          { id: "ribeirinho", emoji: "🛶", titulo: "Ribeirinha", cor: "from-sky-500 to-blue-700" },
        ],
        correta: "indigena",
        feedbackAcerto: "Boa! Na ALDEIA INDÍGENA 🪶 a criança aprende primeiro a língua do povo dela.",
        feedbackErro: "Repara: essa é a marca dos povos INDÍGENAS 🪶 — cada povo tem sua própria língua.",
      },
      {
        id: "q3",
        pergunta: "Quem planta no sítio, tira leite e leva verdura pra feira do sábado?",
        cards: [
          { id: "quilombola", emoji: "🥁", titulo: "Quilombola", cor: "from-orange-500 to-red-700" },
          { id: "ribeirinho", emoji: "🛶", titulo: "Ribeirinho", cor: "from-sky-500 to-blue-700" },
          { id: "agricultor", emoji: "🌱", titulo: "Agricultor familiar", cor: "from-amber-500 to-yellow-600" },
        ],
        correta: "agricultor",
        feedbackAcerto: "Exato! O AGRICULTOR FAMILIAR 🌱 planta pro sustento e vende o que sobra na feira.",
        feedbackErro: "Ops! Sítio + leite + feira = AGRICULTOR FAMILIAR 🌱.",
      },
    ],
    falaFinal:
      "Radar afiado! Você já reconhece ribeirinho, quilombola, indígena e agricultor familiar sem confundir.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Cada modo de vida tem um LUGAR combinando com ele. Um interruptor acende as comunidades da ÁGUA E FLORESTA. O outro acende as comunidades da TERRA CULTIVADA. Liga os dois pra ver o município inteiro.",
    instrucao: "Toque nos interruptores pra acender cada tipo de modo de vida",
    mapaUrl: mapaMunicipio,
    camadas: [
      {
        id: "agua-floresta",
        rotulo: "Água e Floresta",
        emoji: "🌊",
        cor: "from-sky-500 to-emerald-600",
        rect: { x: 10, y: 15, w: 40, h: 65 },
        descricao:
          "Camada da ÁGUA E FLORESTA: ribeirinhos na beira do rio e aldeias indígenas na mata. A vida depende do rio, do peixe, das árvores e dos saberes antigos.",
      },
      {
        id: "terra-cultivada",
        rotulo: "Terra Cultivada",
        emoji: "🌾",
        cor: "from-amber-500 to-lime-700",
        rect: { x: 45, y: 40, w: 50, h: 45 },
        descricao:
          "Camada da TERRA CULTIVADA: quilombolas com plantio coletivo e agricultores familiares com sítio. A vida gira em torno da roça, dos animais e da feira.",
      },
    ],
    falaFinal:
      "Viu? Onde a família MORA muda o jeito de trabalhar, comer, festejar. Modo de vida e lugar andam JUNTOS.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Bora montar o dia de uma família RIBEIRINHA? Toca nas paradas na ORDEM certa pra ver como é o dia inteiro dela.",
    instrucao: "Toque nas paradas na ORDEM certa",
    pergunta: "Como é o dia de uma família ribeirinha?",
    paradas: [
      {
        id: "acordar",
        emoji: "🌅",
        rotulo: "Acordar cedo",
        descricao: "Antes do sol nascer, dona Val já acorda e prepara o café na beira do rio.",
      },
      {
        id: "canoa",
        emoji: "🛶",
        rotulo: "Sair de canoa",
        descricao: "Entra na canoa com a rede e vai pescar o café da manhã.",
      },
      {
        id: "escola",
        emoji: "📚",
        rotulo: "Levar filhos à escola",
        descricao: "No caminho de volta, deixa as crianças na escola ribeirinha.",
      },
      {
        id: "roca",
        emoji: "🌽",
        rotulo: "Cuidar da várzea",
        descricao: "Depois planta mandioca e milho na várzea que fica seca.",
      },
      {
        id: "feira",
        emoji: "🐟",
        rotulo: "Vender o peixe",
        descricao: "No fim da tarde, leva o peixe fresco pra vender na feira do município.",
      },
    ],
    ordemCerta: ["acordar", "canoa", "escola", "roca", "feira"],
    feedbackAcerto: "Rota do ribeirinho completa! Um dia inteiro girando ao redor do rio, sem pular etapa.",
    feedbackErro:
      "Essa não é a próxima parada. Pensa: primeiro ACORDA, depois vai pro rio, depois cuida das crianças e da roça, e no fim VENDE o que pescou.",
    falaFinal:
      "Viu? O rio é o CENTRO da vida ribeirinha — do café até a feira. Cada modo de vida tem sua rotina própria.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez, explorador! Eu fico caladinha. Você lê o Diário dos Modos de Vida com seus próprios olhos e toca nas palavras chave pra provar que entendeu.",
    tituloLivro: "📔 Diário dos Modos de Vida",
    subtitulo: "Página 5 — Como cada comunidade vive no município",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Dentro do mesmo município cabem muitos MODOS de vida. Cada família organiza o dia dela de acordo com o LUGAR em que mora e com os saberes que aprendeu com os mais velhos.",
        chaves: ["município", "modos", "lugar"],
      },
      {
        id: "p2",
        texto:
          "As comunidades ribeirinhas vivem na beira do rio, andam de canoa e dependem da pesca e das cheias. Os povos indígenas moram em aldeias, falam suas próprias línguas e cuidam da floresta.",
        chaves: ["ribeirinhas", "indígenas", "aldeias"],
      },
      {
        id: "p3",
        texto:
          "Os quilombolas descendem de africanos que se libertaram e mantêm a terra, as festas e a comida dos antepassados. Plantam juntos e passam os saberes de geração em geração.",
        chaves: ["quilombolas", "africanos", "saberes"],
      },
      {
        id: "p4",
        texto:
          "Os agricultores familiares plantam uma roça pequena com a família toda, tiram leite, criam galinhas e vendem o que sobra na feira do centro do município.",
        chaves: ["agricultores", "roça", "feira"],
      },
    ],
    falaFinal:
      "Leitura de historiador! Você já sabe explicar SEM ajuda os 4 modos de vida do município. Bora pro minijogo!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Minijogo do detetive contra o tempo! Cada rodada mostra uma CENA do município. Lê a pista, olha as peças embaixo e toca no MODO DE VIDA certo antes do relógio zerar.",
    instrucao: "⏱️ Leia a pista e toque no modo de vida certo antes do tempo acabar!",
    duracaoSegundos: 15,
    pecas: [
      { id: "ribeirinho", emoji: "🛶", rotulo: "Ribeirinho" },
      { id: "quilombola", emoji: "🥁", rotulo: "Quilombola" },
      { id: "indigena", emoji: "🪶", rotulo: "Indígena" },
      { id: "agricultor", emoji: "🌱", rotulo: "Agricultor" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Beira do rio", emoji: "🌊", cor: "from-sky-500 to-blue-700" },
        municipioB: { nome: "Palafita", emoji: "🏚️", cor: "from-amber-500 to-stone-600" },
        contexto:
          "Uma casa em cima de estacas na beira do rio, canoa amarrada e rede de pesca secando no sol. Que comunidade vive aqui?",
        pecaCertaId: "ribeirinho",
        feedbackAcerto: "Combo! Palafita + canoa + rede = comunidade RIBEIRINHA 🛶.",
        feedbackErro: "Repara: casa em palafita e canoa são marca da comunidade RIBEIRINHA 🛶.",
      },
      {
        id: "r2",
        municipioA: { nome: "Casa de farinha", emoji: "🌾", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Roda de tambor", emoji: "🥁", cor: "from-orange-500 to-red-700" },
        contexto:
          "Comunidade com casa de farinha coletiva, jongo tocando no fim de tarde e história dos antepassados africanos. Qual grupo é esse?",
        pecaCertaId: "quilombola",
        feedbackAcerto: "Boa! Farinha coletiva + jongo + antepassados africanos = QUILOMBOLAS 🥁.",
        feedbackErro: "Ops! Farinha coletiva e jongo são marca das comunidades QUILOMBOLAS 🥁.",
      },
      {
        id: "r3",
        municipioA: { nome: "Aldeia na mata", emoji: "🌳", cor: "from-emerald-500 to-lime-700" },
        municipioB: { nome: "Língua própria", emoji: "🗣️", cor: "from-teal-500 to-emerald-700" },
        contexto:
          "Aldeia dentro da mata, crianças falando uma língua própria e aprendendo a tecer rede com os mais velhos. Quem vive aqui?",
        pecaCertaId: "indigena",
        feedbackAcerto: "Isso! Aldeia + língua própria + rede = povos INDÍGENAS 🪶.",
        feedbackErro: "Atenção: aldeia e língua própria são marca dos povos INDÍGENAS 🪶.",
      },
      {
        id: "r4",
        municipioA: { nome: "Sítio da família", emoji: "🚜", cor: "from-amber-500 to-yellow-600" },
        municipioB: { nome: "Feira de sábado", emoji: "🥬", cor: "from-lime-500 to-green-700" },
        contexto:
          "Um sítio pequeno com horta, galinheiro e curral. Sábado a família enche a caminhonete de verdura e leva pra feira. Quem é essa comunidade?",
        pecaCertaId: "agricultor",
        feedbackAcerto: "Combo perfeito! Sítio + horta + feira = AGRICULTOR FAMILIAR 🌱.",
        feedbackErro: "Repara: sítio pequeno da família + feira é AGRICULTOR FAMILIAR 🌱.",
      },
    ],
    falaFinal:
      "Detetive de comunidades oficial! Você reconhece ribeirinho, quilombola, indígena e agricultor familiar no olhar.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Bora olhar o município como uma pizza dividida por MODOS DE VIDA. Toca em cada fatia pra ouvir sobre cada grupo.",
    instrucao: "🍕 Toque nas fatias pra ouvir sobre cada modo de vida",
    fatias: [
      {
        id: "agua-floresta",
        rotulo: "Água & Floresta",
        emoji: "🌊",
        percentual: 45,
        cor: "#0ea5e9",
        descricao:
          "Modos de vida da ÁGUA E FLORESTA: ribeirinhos e povos indígenas. A vida gira em torno do rio, da mata, da pesca e dos saberes tradicionais.",
        exemplos: ["Canoa e palafita", "Aldeia na mata", "Pesca e rede"],
      },
      {
        id: "terra-cultivada",
        rotulo: "Terra Cultivada",
        emoji: "🌾",
        percentual: 55,
        cor: "#65a30d",
        descricao:
          "Modos de vida da TERRA CULTIVADA: quilombolas com plantio coletivo e agricultores familiares com sítio próprio. A vida gira em torno da roça e da feira.",
        exemplos: ["Casa de farinha", "Horta e galinheiro", "Feira de sábado"],
      },
    ],
    falaFinal:
      "Sacou? Cada MODO DE VIDA nasce do LUGAR onde a comunidade vive. Nada é por acaso — é o lugar que ensina o jeito.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última prova, explorador! 3 perguntas pra ganhar sua insígnia de Guardião dos Modos de Vida.",
    instrucao: "Toque na resposta certa. Você tem 1 chance por pergunta.",
    perguntas: [
      {
        id: "p1",
        pergunta: "O que é um MODO DE VIDA de uma comunidade?",
        opcoes: [
          { id: "a", texto: "O carro que a família usa pra passear no fim de semana." },
          { id: "b", texto: "O jeito de acordar, trabalhar, comer e festejar ligado ao lugar onde a comunidade mora.", correta: true },
          { id: "c", texto: "A cor da casa que a família escolheu pintar." },
        ],
        feedbackAcerto: "Isso! Modo de vida é o JEITO da comunidade viver, ligado ao lugar onde ela mora.",
        feedbackErro: "Quase! Modo de vida é o JEITO de acordar, trabalhar e festejar — combinado com o lugar.",
      },
      {
        id: "p2",
        pergunta: "Quem vive na BEIRA DO RIO, anda de canoa e planta na várzea?",
        opcoes: [
          { id: "a", texto: "Comunidade quilombola." },
          { id: "b", texto: "Comunidade ribeirinha.", correta: true },
          { id: "c", texto: "Agricultor familiar do sítio." },
        ],
        feedbackAcerto: "Perfeito! Canoa + várzea + rio = comunidade RIBEIRINHA.",
        feedbackErro: "Ops! Canoa, várzea e beira do rio são marca da comunidade RIBEIRINHA.",
      },
      {
        id: "p3",
        pergunta: "Por que existem MODOS DE VIDA diferentes no mesmo município?",
        opcoes: [
          { id: "a", texto: "Porque uns são melhores que os outros." },
          { id: "b", texto: "Porque cada comunidade vive em um LUGAR diferente e mantém os saberes dos seus antepassados.", correta: true },
          { id: "c", texto: "Porque o prefeito escolheu quem vive de cada jeito." },
        ],
        feedbackAcerto: "Exato! Cada LUGAR ensina um jeito diferente — e cada grupo carrega os saberes dos avós.",
        feedbackErro: "Repensa: cada comunidade vive num LUGAR diferente e traz os saberes dos antepassados. Nenhum é melhor que o outro.",
      },
    ],
    selo: {
      nome: "Guardião dos Modos de Vida",
      subtitulo: "Insígnia oficial do Atlas Municipal — Aula 03",
      emoji: "🏕️",
      cor: "from-emerald-400 to-sky-500",
    },
    falaFinal:
      "Terceira página do Atlas Municipal desbloqueada! Você já reconhece os 4 modos de vida do município — ribeirinho, quilombola, indígena e agricultor familiar.",
  },

  recompensa: { xp: 110, moedas: 22, medalha: "Guardião dos Modos de Vida" },
};
