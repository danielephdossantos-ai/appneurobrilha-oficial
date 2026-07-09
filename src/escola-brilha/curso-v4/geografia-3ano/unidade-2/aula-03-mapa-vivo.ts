import type { AulaGeoV1 } from "../../types";
import mapaMunicipio from "@/assets/geografia-3ano/mapa-municipio.jpg";
import mapa3dCartografia from "@/assets/geografia-3ano/mapa-3d-cartografia.jpg";
import vistaDeCimaCasa from "@/assets/geografia-3ano/vista-de-cima-casa.jpg";
import maqueteMunicipio from "@/assets/geografia-3ano/maquete-municipio.jpg";
import mapa2dSimbolos from "@/assets/geografia-3ano/mapa-2d-simbolos.jpg";

/**
 * Geografia · 3º Ano · Unidade 2 · Aula 03
 * "O Mapa Vivo do Município" — EF03GE06
 *
 * Brilha e Aurora sobem no balão para descobrir que o mesmo lugar pode ser
 * representado de MUITAS formas: em foto de cima, em maquete 3D e em mapa 2D
 * com símbolos. Cada representação mostra uma coisa diferente do município.
 */
export const aula03: AulaGeoV1 = {
  slug: "aula-03-mapa-vivo",
  titulo: "O Mapa Vivo do Município",
  iconeTrilha: "🗺️",
  bncc: ["EF03GE06"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Arraste os BINÓCULOS sobre o mapa. Hoje a gente vai descobrir que o mesmo município pode virar 3 coisas diferentes: foto, maquete e mapa.",
    mapaUrl: mapaMunicipio,
    imagemDestaqueUrl: mapa3dCartografia,
    aurora:
      "Explorador, olha esse balão! De um lado eu vejo a cidade em 3D com casas de verdade. Do outro, a mesma cidade vira um MAPA plano com símbolos. É a mesma coisa vista de jeitos diferentes!",
    falaFinal:
      "Isso se chama REPRESENTAÇÃO. Toda vez que a gente desenha, fotografa ou faz maquete de um lugar, a gente está representando ele. Bora entender como funciona.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite rápido, explorador: se você olhar sua CASA lá de cima do balão, ela vai parecer com o quê?",
    pergunta: "Como sua casa parece vista de CIMA?",
    opcoes: [
      {
        id: "casa-inteira",
        titulo: "Uma casa inteira",
        subtitulo: "com porta, janelas e paredes",
        emoji: "🏠",
        cor: "from-rose-400 to-pink-600",
      },
      {
        id: "so-telhado",
        titulo: "Só o TELHADO",
        subtitulo: "um retângulo colorido",
        emoji: "🟥",
        cor: "from-red-500 to-orange-700",
      },
    ],
    respostaCerta: "so-telhado",
    feedbackAcerto:
      "Isso! De cima você só vê o TELHADO. Porta e janela ficam escondidas em baixo. Por isso no mapa a casa vira um retângulo colorido.",
    feedbackErro:
      "Pensa comigo: se você tá lá em cima olhando pra baixo, o telhado tapa tudo. Você só vê o retângulo do teto, não a porta nem a janela.",
    falaFinal:
      "Segura esse palpite. Vou te mostrar a foto que a gente tirou de cima — vai ficar claro na próxima cena.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Antes de ler o mapa, abre 3 cadernos. Cada palavra é um jeito diferente de MOSTRAR o mesmo lugar pra outra pessoa.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "vista-de-cima",
        capa: "Vista de cima",
        emoji: "👁️",
        cor: "from-sky-500 to-indigo-700",
        conteudo:
          "É como se você fosse um passarinho voando alto. Você olha pra baixo e vê só o TOPO das coisas: o telhado da casa, a copa da árvore, a superfície da piscina.",
        exemplo: "Uma foto tirada de drone é uma vista de cima do bairro.",
        fotoUrl: vistaDeCimaCasa,
      },
      {
        id: "maquete",
        capa: "Maquete",
        emoji: "🏛️",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "É um MODELO em 3 dimensões (3D) do lugar de verdade, feito bem pequenino. Igual a de um museu ou a maquete que o arquiteto faz antes de construir uma cidade.",
        exemplo: "Uma maquete de escola tem prédio, quadra e árvores em miniatura.",
        fotoUrl: maqueteMunicipio,
      },
      {
        id: "mapa-simbolo",
        capa: "Mapa com símbolos",
        emoji: "🗺️",
        cor: "from-emerald-500 to-lime-700",
        conteudo:
          "É um desenho PLANO (2D) do lugar visto de cima, com SÍMBOLOS: quadrados viram casas, círculos viram praças, linhas azuis viram rios. Cabe no papel e mostra o município inteiro de uma vez.",
        exemplo: "O mapa da cidade no celular usa símbolos pra mostrar rua, parque e escola.",
        fotoUrl: mapa2dSimbolos,
      },
    ],
    falaFinal:
      "3 jeitos de mostrar o mesmo lugar: VISTA DE CIMA (foto), MAQUETE (3D pequeno) e MAPA (2D com símbolos). Cada um serve pra uma coisa.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Aqui no mapa do nosso município eu marquei 3 lugares. Toca em cada balão pra ver como aquele lugar aparece em cada tipo de representação.",
    instrucao: "Toque em cada ponto pra abrir a página do diário",
    mapaUrl: mapaMunicipio,
    pontos: [
      {
        id: "casa-vista",
        x: 30,
        y: 40,
        emoji: "🏠",
        cor: "from-rose-400 to-pink-600",
        titulo: "Vista de Cima — Casa do Bairro",
        texto:
          "Aqui é a casa da Dona Rita vista lá de cima do balão. Você só enxerga o TELHADO vermelho, o quintal verde, a piscina azul e o carro na garagem. A porta e as janelas somem — ficam escondidas embaixo do teto.",
        fotoUrl: vistaDeCimaCasa,
      },
      {
        id: "maquete-vista",
        x: 55,
        y: 55,
        emoji: "🏛️",
        cor: "from-amber-500 to-orange-700",
        titulo: "Maquete — Centro do Município",
        texto:
          "Essa é a maquete do centro que a prefeitura fez. Dá pra ver a igreja com a torre, as casas coloridas, a praça, o rio serpenteando. É como um brinquedo — tudo em 3D, pequenininho, pra você entender o lugar antes de ir lá.",
        fotoUrl: maqueteMunicipio,
      },
      {
        id: "mapa-vista",
        x: 75,
        y: 30,
        emoji: "🗺️",
        cor: "from-emerald-500 to-lime-700",
        titulo: "Mapa — Município Inteiro no Papel",
        texto:
          "E aqui está o mesmo município virou MAPA plano. Cada telhado virou um quadradinho colorido, o rio virou uma linha azul, as ruas viraram linhas cinzas. Cabe no papel e mostra o município INTEIRO de uma vez só.",
        fotoUrl: mapa2dSimbolos,
      },
    ],
    falaFinal:
      "Percebeu? Mesmo lugar, 3 representações. Cada uma mostra uma coisa diferente — e todas ajudam a gente a entender o município.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Radar do cartógrafo ligado! 3 perguntas rápidas pra ver se você já sabe reconhecer cada tipo de representação.",
    instrucao: "Toque no card certo pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "Uma foto tirada por um DRONE lá em cima mostrando só os telhados é qual tipo de representação?",
        fotoUrl: vistaDeCimaCasa,
        cards: [
          { id: "vista", emoji: "👁️", titulo: "Vista de cima", cor: "from-sky-500 to-indigo-700" },
          { id: "maquete", emoji: "🏛️", titulo: "Maquete 3D", cor: "from-amber-500 to-orange-700" },
          { id: "mapa", emoji: "🗺️", titulo: "Mapa 2D", cor: "from-emerald-500 to-lime-700" },
        ],
        correta: "vista",
        feedbackAcerto: "Isso! Foto de drone é VISTA DE CIMA 👁️ — mostra os telhados de verdade, sem símbolos.",
        feedbackErro: "Repara: foto real, tirada por drone, é VISTA DE CIMA 👁️. Maquete é modelo 3D e mapa usa símbolos.",
      },
      {
        id: "q2",
        pergunta: "Um modelo pequeninho em 3D da cidade, com prédios miniatura em cima de uma mesa, é o quê?",
        fotoUrl: maqueteMunicipio,
        cards: [
          { id: "mapa", emoji: "🗺️", titulo: "Mapa 2D", cor: "from-emerald-500 to-lime-700" },
          { id: "maquete", emoji: "🏛️", titulo: "Maquete 3D", cor: "from-amber-500 to-orange-700" },
          { id: "vista", emoji: "👁️", titulo: "Vista de cima", cor: "from-sky-500 to-indigo-700" },
        ],
        correta: "maquete",
        feedbackAcerto: "Boa! Modelo 3D pequeninho da cidade é uma MAQUETE 🏛️ — tem altura, largura e profundidade.",
        feedbackErro: "Ops: modelo 3D em miniatura é MAQUETE 🏛️. Mapa é plano no papel, vista de cima é foto real.",
      },
      {
        id: "q3",
        pergunta: "Um desenho PLANO no papel, com quadradinhos pra casas, círculos pra praças e linha azul pra rio, é o quê?",
        fotoUrl: mapa2dSimbolos,
        cards: [
          { id: "vista", emoji: "👁️", titulo: "Vista de cima", cor: "from-sky-500 to-indigo-700" },
          { id: "mapa", emoji: "🗺️", titulo: "Mapa 2D", cor: "from-emerald-500 to-lime-700" },
          { id: "maquete", emoji: "🏛️", titulo: "Maquete 3D", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "mapa",
        feedbackAcerto: "Exato! Desenho plano com SÍMBOLOS é MAPA 🗺️ — cabe no papel e mostra o município todo.",
        feedbackErro: "Repensa: desenho plano com símbolos (quadrados, círculos, linhas) é MAPA 🗺️.",
      },
    ],
    falaFinal:
      "Radar afiado! Você já sabe olhar uma imagem e dizer se é vista de cima, maquete ou mapa. Bora ver como cada uma funciona.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Duas camadas ajudam a entender o município. Um interruptor acende a camada 3D (maquete, com altura), o outro acende a camada 2D (mapa plano, com símbolos). Liga os dois pra comparar.",
    instrucao: "Toque nos interruptores pra acender cada camada",
    mapaUrl: mapaMunicipio,
    camadas: [
      {
        id: "camada-3d",
        rotulo: "Camada 3D (Maquete)",
        emoji: "🏛️",
        cor: "from-amber-500 to-orange-700",
        rect: { x: 10, y: 20, w: 40, h: 65 },
        descricao:
          "Camada 3D: cada casa tem altura, cada árvore tem copa arredondada, o rio tem margens. Você VÊ o lugar quase como se estivesse andando nele. Bom pra imaginar como o município é de verdade.",
      },
      {
        id: "camada-2d",
        rotulo: "Camada 2D (Mapa com símbolos)",
        emoji: "🗺️",
        cor: "from-emerald-500 to-lime-700",
        rect: { x: 55, y: 25, w: 40, h: 60 },
        descricao:
          "Camada 2D: casa vira quadrado, rua vira linha, rio vira faixa azul, escola vira símbolo. Você não vê a altura, mas cabe MUITO mais lugar no mesmo papel. Bom pra achar caminho e ver o município inteiro.",
      },
    ],
    falaFinal:
      "Viu a diferença? A MAQUETE (3D) mostra como é. O MAPA (2D) mostra ONDE está cada coisa. As duas ensinam, mas de jeitos diferentes.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Bora fazer um MAPA do zero! Toca nas etapas na ORDEM certa pra transformar o município de verdade num mapa de papel.",
    instrucao: "Toque nas etapas na ORDEM certa",
    pergunta: "Como o cartógrafo transforma um lugar real num mapa?",
    paradas: [
      {
        id: "observar",
        emoji: "🌆",
        rotulo: "Observar o lugar",
        descricao: "O cartógrafo vai até o município e olha tudo: casas, ruas, rios, praças. É o começo do trabalho.",
      },
      {
        id: "subir",
        emoji: "🎈",
        rotulo: "Ver de cima",
        descricao: "Sobe de balão ou drone pra ver o município INTEIRO de cima. Só assim ele consegue entender onde cada coisa fica.",
      },
      {
        id: "fotografar",
        emoji: "📸",
        rotulo: "Tirar foto aérea",
        descricao: "Tira uma foto aérea (vista de cima) do lugar. Essa foto vai virar a BASE do mapa.",
      },
      {
        id: "desenhar",
        emoji: "✏️",
        rotulo: "Desenhar os símbolos",
        descricao: "Em cima da foto ele desenha os símbolos: quadrado pra casa, círculo pra praça, linha pra rua.",
      },
      {
        id: "legenda",
        emoji: "📖",
        rotulo: "Criar a legenda",
        descricao: "Escreve num cantinho o que cada símbolo significa. Isso se chama LEGENDA — sem ela ninguém entende o mapa.",
      },
      {
        id: "imprimir",
        emoji: "🗺️",
        rotulo: "Mapa pronto",
        descricao: "Imprime o mapa e distribui pra escola, pra prefeitura e pros moradores. Agora todo mundo pode usar!",
      },
    ],
    ordemCerta: ["observar", "subir", "fotografar", "desenhar", "legenda", "imprimir"],
    feedbackAcerto: "Rota do mapa completa! Você fez o mesmo que um cartógrafo de verdade faz.",
    feedbackErro:
      "Essa não é a próxima etapa. Pensa: primeiro OBSERVA, depois SOBE, tira FOTO, desenha SÍMBOLOS, escreve a LEGENDA e só no final IMPRIME.",
    falaFinal:
      "Fazer um mapa dá trabalho! Cartógrafo é um explorador que vira o lugar em desenho plano pra todo mundo entender.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez, explorador! Eu fico caladinha. Você lê o Diário sozinho e toca nas palavras chave pra provar que entendeu.",
    tituloLivro: "📔 Diário de Bordo do Balão",
    subtitulo: "Página 9 — Como o Município Vira Mapa",
    paragrafos: [
      {
        id: "p1",
        texto:
          "O mesmo lugar pode ser mostrado de vários jeitos. A VISTA DE CIMA é uma foto tirada lá de cima do balão ou drone — mostra o telhado das casas e a copa das árvores, do jeitinho que são.",
        chaves: ["vista de cima", "foto", "telhado"],
      },
      {
        id: "p2",
        texto:
          "A MAQUETE é um modelo 3D bem pequenino do lugar. Tem altura, tem espessura — parece um brinquedo. Serve pra você imaginar como o município é de verdade, andando nele.",
        chaves: ["maquete", "modelo", "3D"],
      },
      {
        id: "p3",
        texto:
          "O MAPA é plano, 2D, e usa SÍMBOLOS: quadrado vira casa, círculo vira praça, linha azul vira rio. Cabe no papel e mostra o município INTEIRO de uma vez.",
        chaves: ["mapa", "símbolos", "plano"],
      },
      {
        id: "p4",
        texto:
          "Cada representação serve pra uma coisa. Vista de cima ajuda a fotografar. Maquete ajuda a imaginar. Mapa ajuda a achar caminho e ver onde tudo fica. Um bom explorador sabe usar as três.",
        chaves: ["representação", "explorador", "caminho"],
      },
    ],
    falaFinal:
      "Você leu sozinho e já sabe explicar 3 formas de representar um lugar. Bora pro minijogo do cartógrafo!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Minijogo do CARTÓGRAFO EXPRESSO! Cada rodada mostra uma imagem de um lugar. Você toca no TIPO DE REPRESENTAÇÃO certo antes do relógio zerar!",
    instrucao: "⏱️ Olha a imagem e toque no tipo certo antes do tempo acabar!",
    duracaoSegundos: 15,
    pecas: [
      { id: "vista", emoji: "👁️", rotulo: "Vista de cima" },
      { id: "maquete", emoji: "🏛️", rotulo: "Maquete 3D" },
      { id: "mapa", emoji: "🗺️", rotulo: "Mapa 2D" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Cartógrafo", emoji: "🧭", cor: "from-emerald-500 to-lime-700" },
        municipioB: { nome: "Foto de drone", emoji: "📸", cor: "from-sky-400 to-indigo-600" },
        contexto:
          "Chegou uma FOTO REAL tirada por drone mostrando um bairro visto de cima, com telhados vermelhos e ruas cinzas. Qual tipo é?",
        pecaCertaId: "vista",
        feedbackAcerto: "Combo! Foto real de cima é VISTA DE CIMA 👁️.",
        feedbackErro: "Foto real, tirada por drone, é VISTA DE CIMA 👁️ — não maquete e nem mapa.",
      },
      {
        id: "r2",
        municipioA: { nome: "Cartógrafo", emoji: "🧭", cor: "from-emerald-500 to-lime-700" },
        municipioB: { nome: "Modelo em miniatura", emoji: "🏛️", cor: "from-amber-500 to-orange-700" },
        contexto:
          "Chegou um MODELO PEQUENINO com casas em miniatura, igreja com torre e praça, tudo em 3D em cima de uma mesa. O que é?",
        pecaCertaId: "maquete",
        feedbackAcerto: "Boa! Modelo 3D miniatura é MAQUETE 🏛️.",
        feedbackErro: "Ops: modelo 3D pequenino é MAQUETE 🏛️. Mapa é plano e vista de cima é foto.",
      },
      {
        id: "r3",
        municipioA: { nome: "Cartógrafo", emoji: "🧭", cor: "from-emerald-500 to-lime-700" },
        municipioB: { nome: "Desenho com símbolos", emoji: "🗺️", cor: "from-emerald-500 to-lime-700" },
        contexto:
          "Chegou um DESENHO PLANO no papel com quadrados coloridos pras casas, linha azul pro rio e símbolos numa legenda. Que tipo é?",
        pecaCertaId: "mapa",
        feedbackAcerto: "Isso! Desenho plano com símbolos e legenda é MAPA 🗺️.",
        feedbackErro: "Repensa: papel plano + símbolos + legenda = MAPA 🗺️.",
      },
      {
        id: "r4",
        municipioA: { nome: "Cartógrafo", emoji: "🧭", cor: "from-emerald-500 to-lime-700" },
        municipioB: { nome: "Casa da Rita vista do alto", emoji: "🏠", cor: "from-rose-400 to-pink-600" },
        contexto:
          "Chegou uma imagem da casa da Dona Rita mostrando SÓ o telhado vermelho, o quintal e a piscina, do jeitinho que são. É o quê?",
        pecaCertaId: "vista",
        feedbackAcerto: "Perfeito! Foto do telhado do jeito que é = VISTA DE CIMA 👁️.",
        feedbackErro: "Atenção: se mostra o telhado do jeitinho que é (sem símbolos), é VISTA DE CIMA 👁️.",
      },
      {
        id: "r5",
        municipioA: { nome: "Cartógrafo", emoji: "🧭", cor: "from-emerald-500 to-lime-700" },
        municipioB: { nome: "Escola em miniatura na feira", emoji: "🏫", cor: "from-amber-500 to-orange-700" },
        contexto:
          "Chegou uma miniatura da escola nova, com prédio, quadra e árvores em 3D, feita pelo arquiteto pra prefeitura ver antes de construir. O que é?",
        pecaCertaId: "maquete",
        feedbackAcerto: "Combo perfeito! Miniatura 3D do arquiteto é MAQUETE 🏛️.",
        feedbackErro: "Repara: se é 3D em miniatura e serve pra imaginar, é MAQUETE 🏛️.",
      },
    ],
    falaFinal:
      "Cartógrafo Expresso oficial! Você já bate o olho e sabe se é vista de cima, maquete ou mapa.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Bora fechar a aula com uma pizza dividida em 3 fatias — cada uma é um tipo de representação. Toca em cada fatia pra ouvir pra que serve.",
    instrucao: "🍕 Toque nas fatias pra ouvir cada tipo de representação",
    fatias: [
      {
        id: "fatia-vista",
        rotulo: "Vista de Cima (Foto)",
        emoji: "👁️",
        percentual: 33,
        cor: "#0ea5e9",
        descricao:
          "Foto tirada de drone ou de balão. Mostra o lugar do jeitinho que ele é, só que visto de cima. Serve pra fotografar de VERDADE o município e não deixar detalhe escapar.",
        exemplos: ["Foto de drone", "Vista de cima do bairro", "Imagem de satélite"],
      },
      {
        id: "fatia-maquete",
        rotulo: "Maquete (3D)",
        emoji: "🏛️",
        percentual: 33,
        cor: "#f59e0b",
        descricao:
          "Modelo em 3 dimensões, pequenininho. Tem altura, largura e profundidade. Serve pra você IMAGINAR como o lugar é antes de ir lá, ou pro arquiteto planejar uma construção nova.",
        exemplos: ["Maquete da escola", "Modelo da cidade", "Miniatura do bairro"],
      },
      {
        id: "fatia-mapa",
        rotulo: "Mapa (2D com símbolos)",
        emoji: "🗺️",
        percentual: 34,
        cor: "#22c55e",
        descricao:
          "Desenho plano no papel com símbolos e legenda. Serve pra achar CAMINHO, ver o município inteiro de uma vez e planejar viagem. É o que a gente usa no celular todo dia.",
        exemplos: ["Mapa do celular", "Mapa da cidade", "Mapa do Brasil"],
      },
    ],
    falaFinal:
      "3 fatias, 3 jeitos de representar o mesmo lugar. Um bom cartógrafo usa todos os 3 — cada um pra uma coisa diferente.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última prova, explorador! 3 perguntas de cartógrafo pra ganhar sua insígnia de Leitor de Mapas.",
    instrucao: "Toque na resposta certa. Você tem 1 chance por pergunta.",
    perguntas: [
      {
        id: "p1",
        pergunta: "Um MAPA 2D mostra a casa como o quê?",
        opcoes: [
          { id: "a", texto: "Um desenho da casa com porta, janela e telhado." },
          { id: "b", texto: "Um quadradinho colorido que representa o telhado visto de cima.", correta: true },
          { id: "c", texto: "Uma foto da casa tirada da rua." },
        ],
        feedbackAcerto:
          "Isso! No mapa 2D a casa vira um SÍMBOLO — um quadradinho. Porta e janela ficam de fora porque o mapa mostra o telhado visto de cima.",
        feedbackErro:
          "Repensa: no mapa 2D casa vira SÍMBOLO — quadradinho colorido. Foto da rua e desenho com porta são outros tipos de representação.",
      },
      {
        id: "p2",
        pergunta: "Qual a DIFERENÇA principal entre maquete e mapa?",
        opcoes: [
          { id: "a", texto: "Não tem diferença, é a mesma coisa." },
          { id: "b", texto: "A maquete é 3D (tem altura), o mapa é 2D (plano no papel com símbolos).", correta: true },
          { id: "c", texto: "A maquete é grande e o mapa é pequeno." },
        ],
        feedbackAcerto:
          "Perfeito! Maquete = 3D (tem altura, tipo brinquedo). Mapa = 2D (plano, com símbolos e legenda).",
        feedbackErro:
          "Diferença é a dimensão: maquete é 3D (tem altura, tipo modelo), mapa é 2D (plano, com símbolos).",
      },
      {
        id: "p3",
        pergunta:
          "Por que o mapa precisa de LEGENDA?",
        opcoes: [
          { id: "a", texto: "Pra ficar bonito.", correta: false },
          { id: "b", texto: "Pra ninguém entender.", correta: false },
          { id: "c", texto: "Pra explicar o que cada símbolo significa — sem legenda ninguém sabe se o quadrado é casa ou escola.", correta: true },
        ],
        feedbackAcerto:
          "Exato! A LEGENDA é o dicionário do mapa. Ela conta o que cada símbolo quer dizer.",
        feedbackErro:
          "A legenda é o DICIONÁRIO do mapa — ela explica o que cada símbolo significa. Sem ela ninguém entende o desenho.",
      },
    ],
    selo: {
      nome: "Leitor de Mapas",
      subtitulo: "Insígnia oficial do Atlas Municipal — Unidade 2, Aula 03",
      emoji: "🗺️",
      cor: "from-emerald-400 to-sky-500",
    },
    falaFinal:
      "Terceira página do Volume 3 do Atlas desbloqueada! Você agora sabe olhar um lugar de 3 jeitos diferentes.",
  },

  recompensa: { xp: 250, moedas: 150, medalha: "Leitor de Mapas" },
};
