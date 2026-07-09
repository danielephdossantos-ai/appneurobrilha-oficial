import type { AulaGeoV1 } from "../../types";
import mapaMunicipio from "@/assets/geografia-3ano/mapa-municipio.jpg";
import fotoIndigena from "@/assets/geografia-3ano/comunidade-indigena.jpg";
import fotoQuilombola from "@/assets/geografia-3ano/comunidade-quilombola.jpg";
import fotoRibeirinha from "@/assets/geografia-3ano/comunidade-ribeirinha.jpg";

/**
 * Geografia · 3º Ano · Unidade 2 · Aula 01
 * "O Balão das Comunidades" — EF03GE03
 *
 * Diário de Viagem Antropológico. Brilha e Aurora sobrevoam o município
 * de balão e pousam em 3 comunidades tradicionais (Indígena, Quilombola,
 * Ribeirinha) — investigam o modo de vida, o vínculo com a natureza e
 * a troca cultural/econômica com a cidade.
 *
 * Mesmo esqueleto de 11 cenas do PlayerGeoV1 (travado). O que muda é o
 * TEMA e o formato interno de cada cena.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-balao-das-comunidades",
  titulo: "O Balão das Comunidades",
  iconeTrilha: "🎈",
  bncc: ["EF03GE03"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Arraste os BINÓCULOS sobre o mapa. Nosso balão está sobrevoando o município procurando comunidades incríveis pra visitar.",
    mapaUrl: mapaMunicipio,
    aurora:
      "Explorador, nosso município tem comunidades incríveis com jeitos únicos de viver e cuidar da terra! Prepara o binóculo, porque hoje a gente vai visitá-las de balão pra aprender com elas.",
    falaFinal:
      "Achou! Cada ponto piscando no mapa é uma comunidade tradicional esperando a nossa visita. Bora subir de balão.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes de decolar, quero seu palpite: será que essas comunidades tradicionais também ajudam a cidade — ou vivem cada uma no seu canto?",
    pergunta: "As comunidades tradicionais e a cidade se ajudam?",
    opcoes: [
      {
        id: "separados",
        titulo: "Não, vivem separadas",
        subtitulo: "cada uma no seu mundo",
        emoji: "🚧",
        cor: "from-rose-400 to-pink-600",
      },
      {
        id: "trocam",
        titulo: "Sim, trocam o tempo todo",
        subtitulo: "comida, cultura, saber",
        emoji: "🤝",
        cor: "from-emerald-400 to-sky-500",
      },
    ],
    respostaCerta: "trocam",
    feedbackAcerto:
      "Exato! O peixe do ribeirinho chega na feira, o artesanato indígena vira presente na cidade, o mel quilombola vai pra padaria. Elas TROCAM riqueza e cultura o tempo todo.",
    feedbackErro:
      "Quase! Sem essas comunidades, a cidade perderia comida, cultura e saber. Elas TROCAM com a cidade todo dia — mesmo que a gente nem perceba.",
    falaFinal:
      "Guarda esse palpite. Nas próximas paradas do balão você vai VER essa troca acontecendo.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Antes do primeiro pouso, abre 4 cadernos do diário de bordo. Cada um explica uma palavra que todo antropólogo de balão precisa saber.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "tradicional",
        capa: "Comunidade Tradicional",
        emoji: "🏕️",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "É um grupo de pessoas que vive há muito tempo em um lugar, mantendo os saberes dos antepassados: jeito de plantar, pescar, festejar, curar e criar os filhos.",
        exemplo: "Indígenas, quilombolas e ribeirinhos são comunidades tradicionais do Brasil.",
        fotoUrl: fotoIndigena,
      },
      {
        id: "natureza",
        capa: "Vínculo com a Natureza",
        emoji: "🌳",
        cor: "from-emerald-500 to-lime-700",
        conteudo:
          "É a relação de CUIDADO que essas comunidades têm com o rio, a floresta e a terra. Tiram só o que precisam pra viver e protegem pra que dure pra sempre.",
        exemplo: "O ribeirinho só pesca o peixe que a família vai comer — não tira tudo do rio.",
        fotoUrl: fotoRibeirinha,
      },
      {
        id: "cultura",
        capa: "Cultura Viva",
        emoji: "🎭",
        cor: "from-purple-500 to-fuchsia-700",
        conteudo:
          "É a mistura de festa, dança, música, comida, artesanato e história que a comunidade mantém e passa dos avós pros netos, sem deixar morrer.",
        exemplo: "O jongo quilombola, o grafismo indígena e a canoa ribeirinha são cultura viva.",
        fotoUrl: fotoQuilombola,
      },
      {
        id: "troca",
        capa: "Troca com a Cidade",
        emoji: "🔄",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "É quando o produto ou o saber da comunidade chega na cidade — e o dinheiro, a escola e o remédio da cidade voltam pra comunidade. Os dois ganham.",
        exemplo: "O mel quilombola vai pra feira da cidade e volta remédio e material escolar pra comunidade.",
      },
    ],
    falaFinal:
      "4 palavras no diário. Agora sim: bora pousar o balão na primeira comunidade!",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Nosso balão pousou em 3 lugares do município. Toca em cada balão pra abrir a página do diário — com foto real e a história daquela comunidade.",
    instrucao: "Toque em cada ponto de pouso pra abrir a página do diário",
    mapaUrl: mapaMunicipio,
    pontos: [
      {
        id: "indigena",
        x: 22,
        y: 30,
        emoji: "🪶",
        cor: "from-emerald-400 to-lime-600",
        titulo: "Aldeia Indígena",
        texto:
          "Aqui, na borda da mata, vive uma comunidade indígena. Eles plantam mandioca sem veneno, tecem cestos de palha e conhecem cada árvore da floresta pelo nome. Cuidam da mata como quem cuida da própria casa — porque é a casa deles.",
        fotoUrl: fotoIndigena,
      },
      {
        id: "quilombola",
        x: 55,
        y: 70,
        emoji: "🥁",
        cor: "from-orange-500 to-red-600",
        titulo: "Comunidade Quilombola",
        texto:
          "Nessa comunidade, descendentes de africanos mantêm viva a força dos avós. Fazem mutirão de colheita, cantam jongo no fim de tarde e produzem mel, farinha e verdura pra vender na cidade. A união é o segredo deles.",
        fotoUrl: fotoQuilombola,
      },
      {
        id: "ribeirinha",
        x: 78,
        y: 45,
        emoji: "🛶",
        cor: "from-sky-500 to-blue-700",
        titulo: "Comunidade Ribeirinha",
        texto:
          "Na beira do rio, uma família ribeirinha vive do ciclo das águas. Pescam com rede de mão, moram em palafita e sobem a canoa quando a cheia chega. Conhecem o rio melhor que qualquer mapa da cidade.",
        fotoUrl: fotoRibeirinha,
      },
    ],
    falaFinal:
      "3 comunidades, 3 modos de vida diferentes — todos DENTRO do mesmo município. Cada um cuida da natureza do jeito dele.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Radar do antropólogo ligado! 3 perguntas rápidas pra ver se você reconheceu cada comunidade.",
    instrucao: "Toque no card certo pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual comunidade planta MANDIOCA sem veneno e tece cesto de palha?",
        fotoUrl: fotoIndigena,
        cards: [
          { id: "indigena", emoji: "🪶", titulo: "Indígena", cor: "from-emerald-400 to-lime-600" },
          { id: "quilombola", emoji: "🥁", titulo: "Quilombola", cor: "from-orange-500 to-red-600" },
          { id: "ribeirinha", emoji: "🛶", titulo: "Ribeirinha", cor: "from-sky-500 to-blue-700" },
        ],
        correta: "indigena",
        feedbackAcerto: "Isso! Mandioca sem veneno e cesto de palha são marca dos povos INDÍGENAS 🪶.",
        feedbackErro: "Quase! Mandioca e cesto de palha são a mão dos povos INDÍGENAS 🪶.",
      },
      {
        id: "q2",
        pergunta: "Onde tem MUTIRÃO de colheita, jongo e produção de MEL pra vender na cidade?",
        fotoUrl: fotoQuilombola,
        cards: [
          { id: "ribeirinha", emoji: "🛶", titulo: "Ribeirinha", cor: "from-sky-500 to-blue-700" },
          { id: "quilombola", emoji: "🥁", titulo: "Quilombola", cor: "from-orange-500 to-red-600" },
          { id: "indigena", emoji: "🪶", titulo: "Indígena", cor: "from-emerald-400 to-lime-600" },
        ],
        correta: "quilombola",
        feedbackAcerto: "Boa! Mutirão + jongo + mel = comunidade QUILOMBOLA 🥁.",
        feedbackErro: "Repara: mutirão e jongo são marca das comunidades QUILOMBOLAS 🥁.",
      },
      {
        id: "q3",
        pergunta: "Qual comunidade vive do CICLO DAS ÁGUAS, mora em PALAFITA e pesca de canoa?",
        fotoUrl: fotoRibeirinha,
        cards: [
          { id: "indigena", emoji: "🪶", titulo: "Indígena", cor: "from-emerald-400 to-lime-600" },
          { id: "quilombola", emoji: "🥁", titulo: "Quilombola", cor: "from-orange-500 to-red-600" },
          { id: "ribeirinha", emoji: "🛶", titulo: "Ribeirinha", cor: "from-sky-500 to-blue-700" },
        ],
        correta: "ribeirinha",
        feedbackAcerto: "Exato! Palafita + canoa + rio = comunidade RIBEIRINHA 🛶.",
        feedbackErro: "Ops! Palafita e canoa são marca da comunidade RIBEIRINHA 🛶.",
      },
    ],
    falaFinal:
      "Radar afiado! Você já sabe reconhecer indígena, quilombola e ribeirinho no primeiro olhar.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Duas camadas fazem o município funcionar. Um interruptor acende as COMUNIDADES tradicionais — cuidando da natureza. O outro acende a CIDADE — que recebe os produtos delas. Liga os dois pra ver a troca acontecendo.",
    instrucao: "Toque nos interruptores pra acender cada camada",
    mapaUrl: mapaMunicipio,
    camadas: [
      {
        id: "comunidades",
        rotulo: "Comunidades Tradicionais",
        emoji: "🏕️",
        cor: "from-emerald-500 to-amber-700",
        rect: { x: 10, y: 20, w: 45, h: 65 },
        descricao:
          "Camada das COMUNIDADES: aldeia indígena na borda da mata, quilombo com plantação coletiva e casa ribeirinha na beira do rio. É daqui que sai o alimento cuidado, o artesanato e o saber sobre a natureza.",
      },
      {
        id: "cidade",
        rotulo: "Cidade que Recebe",
        emoji: "🏙️",
        cor: "from-sky-500 to-indigo-700",
        rect: { x: 55, y: 30, w: 40, h: 55 },
        descricao:
          "Camada da CIDADE: feira central, escolas, mercado cultural e postos de saúde. É pra cá que vêm os produtos da comunidade — e daqui saem escola, remédio e mercado pra elas.",
      },
    ],
    falaFinal:
      "Viu? As duas camadas DEPENDEM uma da outra. Comunidade cuida da natureza, cidade cuida do serviço. Uma sem a outra não funciona.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Bora montar o MERCADO DE TROCAS? Vamos seguir o mel quilombola desde a colmeia até a mesa de uma família da cidade. Toca nas paradas na ORDEM certa.",
    instrucao: "Toque nas paradas na ORDEM certa",
    pergunta: "Como o mel do quilombo chega na mesa da cidade?",
    paradas: [
      {
        id: "colmeia",
        emoji: "🐝",
        rotulo: "Colmeia no quilombo",
        descricao: "As abelhas do quilombo produzem mel puro na mata preservada pela comunidade.",
      },
      {
        id: "colheita",
        emoji: "🍯",
        rotulo: "Mutirão de colheita",
        descricao: "A família quilombola faz mutirão e retira o mel com cuidado, sem prejudicar as abelhas.",
      },
      {
        id: "envase",
        emoji: "🫙",
        rotulo: "Envase artesanal",
        descricao: "Em casa, o mel é filtrado e colocado em potes de vidro com etiqueta da comunidade.",
      },
      {
        id: "feira",
        emoji: "🏙️",
        rotulo: "Feira Cultural da cidade",
        descricao: "A caminhonete leva os potes até a Feira Cultural do centro do município.",
      },
      {
        id: "mesa",
        emoji: "🍞",
        rotulo: "Mesa da família",
        descricao: "Uma família compra o pote e coloca o mel no pão do café da manhã — pura troca campo-cidade.",
      },
    ],
    ordemCerta: ["colmeia", "colheita", "envase", "feira", "mesa"],
    feedbackAcerto: "Rota completa! Da colmeia até o pão da cidade, sem pular etapa. Isso é MERCADO DE TROCAS.",
    feedbackErro:
      "Essa não é a próxima parada. Pensa: o mel nasce na COLMEIA, é retirado em MUTIRÃO, envasado, levado à FEIRA e só depois chega na MESA.",
    falaFinal:
      "Viu como uma coisa PEQUENA (um pote de mel) atravessa o município inteiro? Isso acontece todo dia com dezenas de produtos das comunidades.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez, antropólogo! Eu fico caladinha. Você lê o Diário de Bordo sozinho e toca nas palavras chave pra provar que entendeu.",
    tituloLivro: "📔 Diário de Bordo do Balão",
    subtitulo: "Página 7 — Comunidades Tradicionais do meu Município",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Todo município tem COMUNIDADES tradicionais: grupos que vivem há muito tempo no mesmo lugar e mantêm os saberes dos antepassados sobre plantar, pescar, curar e festejar.",
        chaves: ["município", "comunidades", "saberes"],
      },
      {
        id: "p2",
        texto:
          "Os povos indígenas cuidam da floresta, os quilombolas mantêm a força dos africanos que se libertaram e os ribeirinhos vivem no ritmo do rio. Cada um tem um jeito único de se relacionar com a natureza.",
        chaves: ["indígenas", "quilombolas", "ribeirinhos"],
      },
      {
        id: "p3",
        texto:
          "Essas comunidades não vivem separadas da cidade. Levam mel, peixe, farinha, artesanato e cultura pra feira do centro — e recebem escola, remédio e mercado em troca. Isso é MERCADO de trocas.",
        chaves: ["cidade", "feira", "trocas"],
      },
      {
        id: "p4",
        texto:
          "Proteger a terra dessas comunidades é proteger a natureza do município inteiro. Sem elas, a mata desaparece, o rio adoece e uma parte importante da cultura brasileira se perde pra sempre.",
        chaves: ["proteger", "natureza", "cultura"],
      },
    ],
    falaFinal:
      "Leitura de antropólogo! Você já sabe explicar SEM ajuda por que as comunidades tradicionais são tão importantes pro município. Bora pro minijogo!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Minijogo do BALÃO CARGUEIRO! Cada rodada mostra um produto ou saber chegando na FEIRA CULTURAL da cidade. Lê a pista, olha as peças embaixo e toca na comunidade de ORIGEM antes do relógio zerar!",
    instrucao: "⏱️ Leia a pista e toque na comunidade de origem certa antes do tempo acabar!",
    duracaoSegundos: 15,
    pecas: [
      { id: "indigena", emoji: "🪶", rotulo: "Indígena" },
      { id: "quilombola", emoji: "🥁", rotulo: "Quilombola" },
      { id: "ribeirinha", emoji: "🛶", rotulo: "Ribeirinha" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Feira Cultural", emoji: "🏙️", cor: "from-sky-500 to-indigo-700" },
        municipioB: { nome: "Cesto de palha", emoji: "🪵", cor: "from-amber-500 to-orange-700" },
        contexto:
          "Chegou na Feira Cultural um CESTO de palha trançada à mão, com grafismos coloridos. De qual comunidade veio esse artesanato?",
        pecaCertaId: "indigena",
        feedbackAcerto: "Combo! Cesto de palha com grafismos é artesanato INDÍGENA 🪶.",
        feedbackErro: "Repara: cesto de palha com grafismos é INDÍGENA 🪶.",
      },
      {
        id: "r2",
        municipioA: { nome: "Feira Cultural", emoji: "🏙️", cor: "from-sky-500 to-indigo-700" },
        municipioB: { nome: "Pote de mel", emoji: "🍯", cor: "from-amber-400 to-yellow-600" },
        contexto:
          "Chegaram potes de MEL puro com etiqueta 'Mutirão da Comunidade'. De onde vem esse mel?",
        pecaCertaId: "quilombola",
        feedbackAcerto: "Boa! Mel de mutirão comunitário é herança QUILOMBOLA 🥁.",
        feedbackErro: "Ops! Mel de mutirão comunitário é da comunidade QUILOMBOLA 🥁.",
      },
      {
        id: "r3",
        municipioA: { nome: "Feira Cultural", emoji: "🏙️", cor: "from-sky-500 to-indigo-700" },
        municipioB: { nome: "Peixe fresco", emoji: "🐟", cor: "from-sky-500 to-teal-700" },
        contexto:
          "Chegou um caixote de PEIXE fresco pescado com rede de mão, trazido de canoa. Quem trouxe?",
        pecaCertaId: "ribeirinha",
        feedbackAcerto: "Isso! Peixe pescado de canoa é da comunidade RIBEIRINHA 🛶.",
        feedbackErro: "Atenção: peixe pescado com rede de mão e canoa é da comunidade RIBEIRINHA 🛶.",
      },
      {
        id: "r4",
        municipioA: { nome: "Feira Cultural", emoji: "🏙️", cor: "from-sky-500 to-indigo-700" },
        municipioB: { nome: "Farinha de mandioca", emoji: "🌾", cor: "from-amber-500 to-orange-600" },
        contexto:
          "Chegou um saco de FARINHA de mandioca feita com receita antiga passada dos avós africanos. De qual comunidade?",
        pecaCertaId: "quilombola",
        feedbackAcerto: "Combo perfeito! Farinha de receita dos avós africanos é QUILOMBOLA 🥁.",
        feedbackErro: "Repara: farinha de receita dos avós africanos é da comunidade QUILOMBOLA 🥁.",
      },
    ],
    falaFinal:
      "Antropólogo oficial! Você já reconhece de onde vem cada produto da Feira Cultural — e sabe que cada um carrega uma história de comunidade.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Bora olhar o que as comunidades tradicionais oferecem pro município como uma pizza dividida em DUAS fatias. Toca em cada fatia pra ouvir sobre cada tipo de riqueza.",
    instrucao: "🍕 Toque nas fatias pra ouvir sobre cada riqueza",
    fatias: [
      {
        id: "natureza-protegida",
        rotulo: "Natureza Protegida",
        emoji: "🌳",
        percentual: 55,
        cor: "#16a34a",
        descricao:
          "Riqueza da NATUREZA PROTEGIDA: mata em pé, rio limpo, solo fértil, ar puro e bichos vivos. As comunidades tradicionais cuidam desses tesouros que o município INTEIRO precisa pra viver.",
        exemplos: ["Floresta guardada pelos indígenas", "Rio cuidado pelos ribeirinhos", "Terra fértil dos quilombos"],
      },
      {
        id: "cultura-viva",
        rotulo: "Cultura Viva",
        emoji: "🎭",
        percentual: 45,
        cor: "#a855f7",
        descricao:
          "Riqueza da CULTURA VIVA: dança, música, artesanato, comida típica, história e saber passado dos avós. Sem essas comunidades, o município perderia a alma dele.",
        exemplos: ["Jongo e mutirão quilombola", "Grafismo e mandioca indígena", "Canoa e ciclo do rio"],
      },
    ],
    falaFinal:
      "Sacou? As comunidades tradicionais entregam DUAS riquezas ao mesmo tempo: cuidam da NATUREZA e mantêm a CULTURA viva. Sem elas, o município seria muito mais pobre — no verde e na alma.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última prova, antropólogo! Um estudo de caso e mais 2 perguntas pra ganhar sua insígnia de Amigo das Comunidades Tradicionais.",
    instrucao: "Toque na resposta certa. Você tem 1 chance por pergunta.",
    perguntas: [
      {
        id: "p1",
        pergunta:
          "Uma grande empresa quer CORTAR as árvores de uma área onde uma comunidade tradicional coleta castanha pra viver. Por que proteger a terra dessa comunidade é importante pra TODO o município?",
        opcoes: [
          { id: "a", texto: "Porque a cidade não precisa de florestas pra viver." },
          { id: "b", texto: "Porque eles cuidam da natureza, preservam as florestas e mantêm viva a história do nosso país.", correta: true },
          { id: "c", texto: "Porque a empresa não pode ganhar dinheiro." },
        ],
        feedbackAcerto:
          "Isso! Proteger a comunidade é proteger a FLORESTA e a CULTURA — e disso o município inteiro depende pra viver bem.",
        feedbackErro:
          "Repensa: a comunidade cuida da mata e mantém viva a história do país. Sem ela, o município perde natureza E cultura.",
      },
      {
        id: "p2",
        pergunta: "O que caracteriza um MODO DE VIDA tradicional?",
        opcoes: [
          { id: "a", texto: "Ter carro do ano e casa nova." },
          { id: "b", texto: "Manter os saberes dos antepassados sobre plantar, pescar, festejar e cuidar da natureza.", correta: true },
          { id: "c", texto: "Morar em prédio no centro da cidade." },
        ],
        feedbackAcerto: "Perfeito! Modo de vida tradicional é MANTER vivo o saber dos antepassados.",
        feedbackErro: "Quase! Tradicional é MANTER vivo o saber dos avós — plantar, pescar, festejar do jeito antigo.",
      },
      {
        id: "p3",
        pergunta: "Como a comunidade tradicional e a cidade se AJUDAM?",
        opcoes: [
          { id: "a", texto: "A comunidade dá alimento, artesanato e cultura; a cidade oferece escola, remédio e mercado." , correta: true },
          { id: "b", texto: "Elas não têm nada a ver uma com a outra." },
          { id: "c", texto: "A cidade manda ordens e a comunidade obedece." },
        ],
        feedbackAcerto:
          "Exato! Mercado de trocas: cada uma OFERECE o que sabe fazer melhor. Os dois lados ganham.",
        feedbackErro:
          "Repensa: a comunidade envia alimento, artesanato e cultura; a cidade devolve escola, remédio e mercado.",
      },
    ],
    selo: {
      nome: "Amigo das Comunidades Tradicionais",
      subtitulo: "Insígnia oficial do Atlas Municipal — Unidade 2, Aula 01",
      emoji: "🎈",
      cor: "from-emerald-400 to-amber-500",
    },
    falaFinal:
      "Primeira página do Volume 3 do Atlas desbloqueada! Você agora sabe reconhecer, respeitar e defender as comunidades tradicionais do seu município.",
  },

  recompensa: { xp: 250, moedas: 150, medalha: "Amigo das Comunidades Tradicionais" },
};
