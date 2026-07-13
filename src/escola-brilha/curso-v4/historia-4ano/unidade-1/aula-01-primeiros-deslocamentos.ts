import type { AulaGeoV1 } from "../../types";
import imgPinturas from "@/assets/historia-4ano/pinturas-rupestres.jpg";
import imgFerramentas from "@/assets/historia-4ano/ferramentas-pedra-lascada.jpg";
import imgMapaMigracoes from "@/assets/historia-4ano/mapa-migracoes-humanas.jpg";
import imgSavana from "@/assets/historia-4ano/savana-africa.jpg";
import imgNomades from "@/assets/historia-4ano/nomades-caminhando.jpg";
import imgCaverna from "@/assets/historia-4ano/caverna-fogueira.jpg";
import imgAldeia from "@/assets/historia-4ano/aldeia-neolitica.jpg";
import imgSerra from "@/assets/historia-4ano/serra-capivara.jpg";
import imgLanca from "@/assets/historia-4ano/ponta-lanca-quartzo.jpg";
import imgComparativo from "@/assets/historia-4ano/infografico-nomade-sedentario.jpg";

/**
 * História · 4º Ano · Unidade 1 · Aula 01
 * "Os Primeiros Deslocamentos Humanos" — Nomadismo × Sedentarismo.
 * Restaura a Página 1 das Crônicas das Grandes Rotas: A Trilha dos Primeiros Nômades.
 * Skin visual: fotografia real + infográfico cartográfico. Zero cartoon.
 * Linguagem calibrada pra 9 anos: mais técnica que o 3º ano, com vocabulário
 * de arqueologia (pistas, vestígios, sítio, período) sempre com definição visível.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-primeiros-deslocamentos",
  titulo: "Os Primeiros Deslocamentos Humanos",
  iconeTrilha: "🦴",
  bncc: ["EF04HI02", "EF04HI04"],
  duracaoMin: 24,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a LUPA sobre a fotografia. Você está vendo uma parede real de caverna pintada há milhares de anos por caçadores que atravessavam continentes a pé.",
    mapaUrl: imgPinturas,
    imagemDestaqueUrl: imgMapaMigracoes,
    aurora:
      "Pequeno Historiador, se cada pessoa nasceu em um lugar diferente do planeta, como a Terra INTEIRA ficou cheia de gente? A resposta está nessas paredes. Os nossos primeiros antepassados surgiram na África e caminharam MILHARES DE QUILÔMETROS a pé, arrastando famílias inteiras em busca de comida.",
    falaFinal:
      "Eles não tinham casa fixa: eram NÔMADES. Nesta aula vamos acender o primeiro ponto do mapa das Crônicas: a Rota dos Ancestrais.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes de eu explicar, quero seu palpite de investigador. Se os primeiros humanos surgiram todos no mesmo continente (África), por que hoje eles vivem em todos os continentes do planeta?",
    pergunta: "Como os humanos chegaram a todos os continentes?",
    fotoUrl: imgMapaMigracoes,
    opcoes: [
      {
        id: "migrando",
        titulo: "Migraram a pé por milhares de anos",
        subtitulo: "grupos nômades atravessaram continentes procurando alimento",
        emoji: "👣",
        cor: "from-amber-600 to-orange-800",
        fotoUrl: imgNomades,
      },
      {
        id: "surgiram-tudo",
        titulo: "Surgiram já em cada continente",
        subtitulo: "cada país teve seus próprios primeiros humanos",
        emoji: "🌍",
        cor: "from-slate-500 to-slate-700",
        fotoUrl: imgSavana,
      },
    ],
    respostaCerta: "migrando",
    feedbackAcerto:
      "Correto! A ciência prova, com DNA e fósseis, que TODA a humanidade veio da África e migrou a pé por gerações. Foi a maior viagem já feita pelos seres humanos.",
    feedbackErro:
      "Quase. Todos os humanos vieram do MESMO ponto (África) e se espalharam MIGRANDO a pé. Ossos e ferramentas encontrados no caminho comprovam a rota.",
    falaFinal:
      "Guarde essa ideia: a história da humanidade começa com MOVIMENTO. Ninguém ficou parado no primeiro dia.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Três palavras técnicas que todo historiador do 4º ano precisa dominar quando estuda os povos antigos. Cada caderno está aberto com foto real e definição.",
    instrucao: "Leia os três cadernos abertos",
    cadernos: [
      {
        id: "nomade",
        capa: "Nomadismo",
        emoji: "🚶",
        cor: "from-amber-600 to-orange-800",
        fotoUrl: imgNomades,
        conteudo:
          "NOMADISMO é o modo de vida em que um grupo NÃO tem moradia fixa. Quando os frutos, a caça e a água acabam num lugar, o grupo recolhe tudo e migra pra outra região. Passa a vida em movimento.",
        exemplo:
          "Exemplo: os primeiros Homo sapiens que saíram da África há 70 mil anos eram caçadores-coletores nômades.",
      },
      {
        id: "sedentario",
        capa: "Sedentarismo",
        emoji: "🌾",
        cor: "from-emerald-600 to-teal-800",
        fotoUrl: imgAldeia,
        conteudo:
          "SEDENTARISMO é o modo de vida FIXO. Depois que os humanos aprenderam a plantar (AGRICULTURA) e criar animais (DOMESTICAÇÃO), passaram a produzir o próprio alimento e não precisaram mais migrar. Nasceram as primeiras aldeias.",
        exemplo:
          "Exemplo: há cerca de 10 mil anos, no Oriente Médio, surgiram as primeiras aldeias de agricultores que viraram cidades.",
      },
      {
        id: "arqueologia",
        capa: "Vestígio Arqueológico",
        emoji: "🦴",
        cor: "from-slate-600 to-slate-800",
        fotoUrl: imgFerramentas,
        conteudo:
          "VESTÍGIO é qualquer PISTA que um povo antigo deixou pra trás: pintura na caverna, ossos, ferramentas de pedra, cinzas de fogueira. O ARQUEÓLOGO estuda vestígios pra descobrir como as pessoas viviam.",
        exemplo:
          "Exemplo: fogueiras + ossos de animais + ferramentas em cavernas distantes = prova de grupo nômade.",
      },
    ],
    falaFinal:
      "Nomadismo, Sedentarismo e Vestígio Arqueológico. Esse é o vocabulário técnico da aula. Vamos usar o tempo inteiro.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Este é o mapa oficial das primeiras migrações humanas. Toque em cada ponto pra eu explicar o que aconteceu em cada etapa da grande viagem dos nossos ancestrais.",
    instrucao: "Toque em cada ponto do mapa pra ouvir a explicação",
    mapaUrl: imgMapaMigracoes,
    pontos: [
      {
        id: "africa",
        x: 48,
        y: 55,
        emoji: "🌍",
        cor: "from-amber-600 to-orange-800",
        fotoUrl: imgSavana,
        titulo: "1. ÁFRICA — o começo (300.000 anos atrás)",
        texto:
          "Todo ser humano moderno (Homo sapiens) surgiu aqui, nas savanas do leste africano. Caçava, coletava frutos e vivia em pequenos grupos nômades. Era o único continente com humanos por muito tempo.",
      },
      {
        id: "asia",
        x: 65,
        y: 40,
        emoji: "👣",
        cor: "from-orange-600 to-red-800",
        fotoUrl: imgNomades,
        titulo: "2. ÁSIA e EUROPA (70.000 anos atrás)",
        texto:
          "Grupos nômades saíram da África caminhando pelo Oriente Médio. Uns subiram pra Europa, outros seguiram pelo sul da Ásia. Levaram séculos e séculos migrando família por família.",
      },
      {
        id: "oceania",
        x: 82,
        y: 70,
        emoji: "🛶",
        cor: "from-sky-600 to-blue-800",
        fotoUrl: imgCaverna,
        titulo: "3. OCEANIA (50.000 anos atrás)",
        texto:
          "Atravessaram até a Austrália em barcos primitivos e a pé, aproveitando o nível do mar mais baixo na Idade do Gelo. Foi a primeira grande travessia marítima da humanidade.",
      },
      {
        id: "america",
        x: 18,
        y: 45,
        emoji: "❄️",
        cor: "from-slate-600 to-slate-800",
        fotoUrl: imgSerra,
        titulo: "4. AMÉRICAS (15.000 anos atrás)",
        texto:
          "Chegaram por último. Passaram pelo Estreito de Bering (então congelado, era terra firme) do nordeste da Ásia pra Alasca. Depois desceram até a Patagônia. O Brasil foi habitado — Serra da Capivara prova.",
      },
    ],
    falaFinal:
      "África → Ásia/Europa → Oceania → Américas. Essa é a Rota dos Ancestrais, feita SÓ com os pés e a coragem de gerações inteiras.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Três perguntas rápidas de investigador. Cada uma testa se você domina o vocabulário técnico da aula.",
    instrucao: "Toque no card correto pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "Um grupo humano que NÃO tem moradia fixa e migra atrás de comida é chamado de...",
        fotoUrl: imgNomades,
        cards: [
          { id: "no", emoji: "🚶", titulo: "Nômade", cor: "from-amber-500 to-orange-700" },
          { id: "se", emoji: "🌾", titulo: "Sedentário", cor: "from-emerald-500 to-teal-700" },
          { id: "ur", emoji: "🏙️", titulo: "Urbano", cor: "from-slate-500 to-slate-700" },
        ],
        correta: "no",
        feedbackAcerto:
          "Correto. Sem moradia fixa e sempre em movimento = NÔMADE. Foi o modo de vida da humanidade por quase toda a nossa história.",
        feedbackErro:
          "Sedentário é o CONTRÁRIO — fixo num lugar. Urbano é quem mora em cidade. Sem moradia fixa e em movimento = NÔMADE.",
      },
      {
        id: "q2",
        pergunta: "Qual descoberta permitiu ao ser humano PARAR de migrar e virar sedentário?",
        fotoUrl: imgAldeia,
        cards: [
          { id: "ag", emoji: "🌾", titulo: "A agricultura (plantio)", cor: "from-emerald-500 to-teal-700" },
          { id: "es", emoji: "💻", titulo: "A escrita digital", cor: "from-slate-500 to-slate-700" },
          { id: "el", emoji: "⚡", titulo: "A eletricidade", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "ag",
        feedbackAcerto:
          "Exato. A AGRICULTURA permitiu produzir comida no mesmo lugar, sem precisar migrar. Nasceram as primeiras aldeias fixas.",
        feedbackErro:
          "Escrita e eletricidade são MUITO recentes. O que fixou a humanidade há 10 mil anos foi a AGRICULTURA — aprender a plantar.",
      },
      {
        id: "q3",
        pergunta:
          "Um arqueólogo achou pinturas nas paredes de uma caverna, fogueiras antigas e ferramentas de pedra lascada. Isso é o quê?",
        fotoUrl: imgFerramentas,
        cards: [
          { id: "ve", emoji: "🦴", titulo: "Vestígios arqueológicos", cor: "from-slate-500 to-slate-700" },
          { id: "li", emoji: "📚", titulo: "Documentos oficiais", cor: "from-emerald-500 to-teal-700" },
          { id: "no", emoji: "📰", titulo: "Notícias de jornal", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "ve",
        feedbackAcerto:
          "Certeza. Toda PISTA deixada por um povo antigo — pintura, osso, ferramenta, cinza — é VESTÍGIO ARQUEOLÓGICO.",
        feedbackErro:
          "Documentos e jornais nem existiam ainda. As pistas físicas que povos antigos deixaram são VESTÍGIOS ARQUEOLÓGICOS.",
      },
    ],
    falaFinal:
      "Radar afiado. Você já opera com o vocabulário técnico: nomadismo, sedentarismo, vestígio.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Vou ativar dois interruptores em cima do mesmo infográfico: um destaca a vida NÔMADE (grupo em movimento), outro destaca a vida SEDENTÁRIA (aldeia fixa). Veja o contraste entre os dois modos de vida.",
    instrucao: "Toque nos interruptores pra ver cada modo de vida",
    mapaUrl: imgComparativo,
    camadas: [
      {
        id: "nomade",
        rotulo: "Nômade",
        emoji: "🚶",
        cor: "from-amber-600 to-orange-800",
        rect: { x: 0, y: 15, w: 50, h: 75 },
        descricao:
          "O NÔMADE mora em cavernas ou tendas temporárias, veste peles de animais, caça e coleta frutos. Quando o inverno chega ou a comida acaba, migra pra outra região. Depende do que a natureza oferece.",
      },
      {
        id: "sedentario",
        rotulo: "Sedentário",
        emoji: "🌾",
        cor: "from-emerald-600 to-teal-800",
        rect: { x: 50, y: 15, w: 50, h: 75 },
        descricao:
          "O SEDENTÁRIO mora em casa fixa de tijolo de barro, planta trigo e cria animais em cercado. Produz o próprio alimento e estoca em vasos. Nascem as primeiras cidades. NÃO depende mais de migrar.",
      },
    ],
    falaFinal:
      "Dois modos de vida, uma única humanidade. A passagem do nômade pro sedentário é chamada de REVOLUÇÃO AGRÍCOLA.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Vamos rastrear a Grande Migração Humana desde a África até a chegada no Brasil. Organize as 4 etapas na ordem certa da história.",
    instrucao: "Toque nas etapas na ordem certa (do começo ao fim)",
    pergunta: "Como o ser humano chegou até o Brasil?",
    paradas: [
      {
        id: "africa",
        emoji: "🌍",
        rotulo: "1. Origem na África",
        fotoUrl: imgSavana,
        descricao:
          "Etapa 1: há cerca de 300 mil anos, o Homo sapiens surgiu na savana africana. Único continente com humanos por muito tempo.",
      },
      {
        id: "saida",
        emoji: "👣",
        rotulo: "2. Saída pela Ásia",
        fotoUrl: imgNomades,
        descricao:
          "Etapa 2: há 70 mil anos, grupos nômades cruzaram o Oriente Médio a pé, indo pra Europa e Ásia. Levaram gerações e gerações migrando.",
      },
      {
        id: "bering",
        emoji: "❄️",
        rotulo: "3. Travessia de Bering",
        fotoUrl: imgCaverna,
        descricao:
          "Etapa 3: há 15 mil anos, na Idade do Gelo, o Estreito de Bering estava CONGELADO. Grupos passaram a pé da Sibéria pra Alasca — a porta de entrada das Américas.",
      },
      {
        id: "brasil",
        emoji: "🇧🇷",
        rotulo: "4. Chegada ao Brasil",
        fotoUrl: imgSerra,
        descricao:
          "Etapa 4: descendo pelas Américas, grupos chegaram ao Brasil. Serra da Capivara (PI) guarda pinturas com mais de 12 mil anos, provando essa presença.",
      },
    ],
    ordemCerta: ["africa", "saida", "bering", "brasil"],
    feedbackAcerto:
      "Rota completa. África → Ásia → Bering → Brasil. Essa é a maior caminhada da história humana, feita em milhares de gerações.",
    feedbackErro:
      "Essa não é a próxima etapa. Pense: onde a humanidade SURGIU e por onde precisou passar antes de chegar nas Américas?",
    falaFinal:
      "Você acabou de mapear a MIGRAÇÃO HUMANA GLOBAL. É assim que arqueólogos e historiadores explicam o povoamento do planeta.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Silêncio agora. Leia a Página 1 das Crônicas das Grandes Rotas com seus próprios olhos e toque nas palavras destacadas quando quiser a definição.",
    tituloLivro: "📜 As Crônicas das Grandes Rotas",
    subtitulo: "Página 1 — A Trilha dos Primeiros Nômades",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Toda a humanidade veio da ÁFRICA. Há cerca de 300 mil anos, os primeiros seres humanos modernos (Homo sapiens) surgiram nas savanas do leste africano. Viviam em pequenos grupos NÔMADES: caçavam, coletavam frutos e migravam quando a comida acabava.",
        chaves: ["nômades", "Homo sapiens"],
        definicoes: {
          nômades:
            "Grupos humanos sem moradia fixa que se deslocam constantemente em busca de alimento, água e abrigo.",
          "Homo sapiens":
            "Nome científico da espécie humana atual. Todos nós — de qualquer país — pertencemos a esta espécie.",
        },
        fotoUrl: imgSavana,
      },
      {
        id: "p2",
        texto:
          "Há cerca de 70 mil anos, esses grupos começaram a MIGRAÇÃO. Saíram da África a pé, atravessaram o Oriente Médio e se espalharam pela Ásia e Europa. Levaram milhares de anos e cruzaram até a Oceania em barcos primitivos.",
        chaves: ["migração"],
        definicoes: {
          migração:
            "Deslocamento de um grupo humano de uma região pra outra, geralmente em busca de melhores condições de vida.",
        },
        fotoUrl: imgMapaMigracoes,
      },
      {
        id: "p3",
        texto:
          "As AMÉRICAS foram o último continente povoado. Na Idade do Gelo, o Estreito de Bering estava congelado, formando uma ponte de gelo entre a Sibéria e o Alasca. Grupos cruzaram a pé e desceram até o Brasil. Sítios como Serra da Capivara (PI) guardam pinturas de mais de 12 mil anos.",
        chaves: ["Estreito de Bering", "sítios"],
        definicoes: {
          "Estreito de Bering":
            "Faixa estreita de mar entre a Rússia e o Alasca. Na Idade do Gelo, ficou congelada e serviu de ponte terrestre.",
          sítios:
            "Sítios arqueológicos são lugares onde arqueólogos encontram vestígios (pinturas, ossos, ferramentas) de povos antigos.",
        },
        fotoUrl: imgSerra,
      },
      {
        id: "p4",
        texto:
          "Há cerca de 10 mil anos, aconteceu a REVOLUÇÃO AGRÍCOLA: os humanos aprenderam a plantar (agricultura) e a criar animais (domesticação). Não precisaram mais migrar — passaram a viver FIXOS em aldeias. Foi o começo das cidades e da história escrita.",
        chaves: ["Revolução Agrícola", "domesticação"],
        definicoes: {
          "Revolução Agrícola":
            "Grande mudança na história em que humanos deixaram de ser caçadores nômades e viraram agricultores sedentários.",
          domesticação:
            "Processo de criar animais selvagens em cercados até que eles se acostumem a viver com humanos (cabras, ovelhas, vacas, cães).",
        },
        fotoUrl: imgAldeia,
      },
    ],
    falaFinal:
      "Leitura concluída. Você já explica, com suas próprias palavras, por que a humanidade caminhou o planeta antes de parar em aldeias.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Missão de arqueólogo! Cada rodada mostra uma característica de povo antigo. Você tem que classificar rápido: é vida NÔMADE ou vida SEDENTÁRIA?",
    instrucao: "⏱️ Leia a pista e toque na classificação correta antes do tempo acabar",
    duracaoSegundos: 18,
    pecas: [
      { id: "no", emoji: "🚶", rotulo: "Nômade" },
      { id: "se", emoji: "🌾", rotulo: "Sedentário" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Moradia em caverna temporária", emoji: "🕳️", cor: "from-amber-600 to-orange-800" },
        municipioB: { nome: "Grupo pequeno em movimento", emoji: "👣", cor: "from-orange-500 to-red-700" },
        contexto: "Um grupo dorme em uma caverna esta noite e amanhã sai andando pra outra região.",
        pecaCertaId: "no",
        feedbackAcerto: "Certeza. Caverna temporária + movimento constante = NÔMADE.",
        feedbackErro: "Sedentário mora FIXO. Caverna temporária + movimento = NÔMADE.",
      },
      {
        id: "r2",
        municipioA: { nome: "Casa de tijolo de barro", emoji: "🏠", cor: "from-emerald-600 to-teal-800" },
        municipioB: { nome: "Aldeia com plantação", emoji: "🌾", cor: "from-green-600 to-emerald-800" },
        contexto: "Uma família mora numa casa de barro em uma aldeia e planta trigo no campo em volta.",
        pecaCertaId: "se",
        feedbackAcerto: "Perfeito. Casa fixa + plantação = SEDENTÁRIO. É o modo de vida da Revolução Agrícola.",
        feedbackErro: "Nômade não constrói casa fixa nem planta. Casa + plantação = SEDENTÁRIO.",
      },
      {
        id: "r3",
        municipioA: { nome: "Caça e coleta de frutos", emoji: "🏹", cor: "from-amber-600 to-orange-800" },
        municipioB: { nome: "Depende do que a natureza dá", emoji: "🌰", cor: "from-orange-500 to-red-700" },
        contexto:
          "Um grupo passa o dia caçando animais e coletando frutas e raízes. Quando acaba, precisa mudar de lugar.",
        pecaCertaId: "no",
        feedbackAcerto: "Isso. Caçadores-coletores dependem da natureza e migram = NÔMADE.",
        feedbackErro: "Sedentário PRODUZ o próprio alimento (planta e cria). Caçador-coletor é NÔMADE.",
      },
      {
        id: "r4",
        municipioA: { nome: "Cria cabras em cercado", emoji: "🐐", cor: "from-emerald-600 to-teal-800" },
        municipioB: { nome: "Estoca grãos em vasos", emoji: "🏺", cor: "from-teal-500 to-emerald-700" },
        contexto:
          "Um povo mantém rebanhos de cabras próximos das casas e guarda grãos colhidos em vasos de barro dentro dos armazéns.",
        pecaCertaId: "se",
        feedbackAcerto: "Boa! Domesticação de animais + estoque de grãos = SEDENTÁRIO.",
        feedbackErro: "Nômade não cria em cercado nem estoca. Rebanho fixo + armazém = SEDENTÁRIO.",
      },
      {
        id: "r5",
        municipioA: { nome: "Muda quando o inverno chega", emoji: "❄️", cor: "from-amber-600 to-orange-800" },
        municipioB: { nome: "Segue os rebanhos selvagens", emoji: "🦌", cor: "from-orange-500 to-red-700" },
        contexto:
          "Quando o inverno rigoroso congela a região, o grupo empacota tudo e migra pra um vale mais quente ao sul.",
        pecaCertaId: "no",
        feedbackAcerto: "Sim! Migrar por causa do clima ou da caça = NÔMADE.",
        feedbackErro: "Sedentário fica FIXO mesmo no inverno (estoca comida). Migrar = NÔMADE.",
      },
      {
        id: "r6",
        municipioA: { nome: "Constrói cidade com muralha", emoji: "🏛️", cor: "from-emerald-600 to-teal-800" },
        municipioB: { nome: "Vive na mesma aldeia por gerações", emoji: "🏘️", cor: "from-green-600 to-emerald-800" },
        contexto:
          "Uma comunidade vive na mesma aldeia há centenas de anos, constrói muralhas de pedra e passa o local pros filhos e netos.",
        pecaCertaId: "se",
        feedbackAcerto: "Excelente! Cidade permanente + herança geracional = SEDENTÁRIO puro.",
        feedbackErro: "Nômade não constrói cidade. Muralhas + gerações no mesmo lugar = SEDENTÁRIO.",
      },
    ],
    falaFinal: "6 acertos! Você diferencia nômade e sedentário como um arqueólogo de verdade.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Pizza da história da humanidade. Quanto tempo a humanidade viveu nômade? Quanto tempo já vive sedentária? A resposta vai te surpreender.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgComparativo,
    fatias: [
      {
        id: "nomade",
        rotulo: "Vida Nômade (~97%)",
        emoji: "🚶",
        percentual: 97,
        cor: "#b45309",
        descricao:
          "A humanidade passou QUASE TODA a sua história como nômade (cerca de 290 mil anos dos 300 mil anos). Caçando, coletando e migrando pelo planeta.",
        exemplos: ["🏹 Caçadores", "🌰 Coletores", "👣 Migrantes"],
      },
      {
        id: "sedentario",
        rotulo: "Vida Sedentária (~3%)",
        emoji: "🌾",
        percentual: 3,
        cor: "#0f766e",
        descricao:
          "Só nos últimos 10 mil anos (uma fatia MINÚSCULA) é que viramos sedentários com agricultura, cidades e escrita. Toda a história 'moderna' cabe aqui.",
        exemplos: ["🌾 Agricultura", "🏘️ Aldeias", "📜 Escrita"],
      },
    ],
    falaFinal:
      "Impressionante: 97% da nossa história foi nômade. A cidade que você conhece é uma invenção RECENTÍSSIMA.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Três perguntas finais pra ganhar a insígnia da Rota dos Ancestrais e restaurar a Página 1 das Crônicas.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgLanca,
    perguntas: [
      {
        id: "av1",
        pergunta: "Um grupo humano que NÃO tem moradia fixa e migra atrás de recursos é chamado de:",
        opcoes: [
          { id: "a", texto: "Sedentário.", correta: false },
          { id: "b", texto: "Nômade.", correta: true },
          { id: "c", texto: "Urbano moderno.", correta: false },
        ],
        feedbackAcerto: "Correto! Sem casa fixa + em movimento = NÔMADE.",
        feedbackErro: "Sedentário é o CONTRÁRIO (fixo). Sem moradia + em movimento = NÔMADE.",
      },
      {
        id: "av2",
        pergunta: "Qual descoberta permitiu à humanidade PARAR de migrar e viver fixa em aldeias?",
        opcoes: [
          { id: "a", texto: "A invenção da escrita digital.", correta: false },
          { id: "b", texto: "O desenvolvimento da agricultura.", correta: true },
          { id: "c", texto: "A energia elétrica.", correta: false },
        ],
        feedbackAcerto: "Perfeito! A AGRICULTURA permitiu produzir comida no mesmo lugar — Revolução Agrícola.",
        feedbackErro: "Escrita e eletricidade são recentes. Quem fixou a humanidade foi a AGRICULTURA.",
      },
      {
        id: "av3",
        pergunta:
          "Um arqueólogo encontra fogueiras + ossos de animais + ferramentas de pedra lascada em três cavernas distantes. O que isso indica?",
        opcoes: [
          { id: "a", texto: "Um único grupo NÔMADE que se deslocava entre as cavernas.", correta: true },
          { id: "b", texto: "Três cidades sedentárias já organizadas.", correta: false },
          { id: "c", texto: "Que os humanos surgiram em cada caverna.", correta: false },
        ],
        feedbackAcerto:
          "Isso! Vestígios iguais em cavernas distantes = mesmo grupo NÔMADE se deslocando.",
        feedbackErro:
          "Cidades sedentárias não são cavernas. Vestígios iguais em lugares distantes = grupo NÔMADE em migração.",
      },
    ],
    selo: {
      nome: "Rota dos Ancestrais",
      subtitulo: "Insígnia oficial das Crônicas das Grandes Rotas",
      emoji: "🦴",
      cor: "from-amber-400 to-orange-600",
      fotoUrl: imgLanca,
    },
    falaFinal:
      "Insígnia conquistada! Página 1 das Crônicas restaurada. O primeiro ponto luminoso brilha no mapa: a Rota dos Ancestrais.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Rota dos Ancestrais" },
};
