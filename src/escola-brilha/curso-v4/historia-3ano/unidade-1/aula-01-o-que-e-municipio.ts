import type { AulaGeoV1 } from "../../types";
import imgVistaAerea from "@/assets/historia-3ano/municipio-vista-aerea.jpg";
import imgInfograficoUR from "@/assets/historia-3ano/infografico-urbano-rural.jpg";
import imgPrefeitura from "@/assets/historia-3ano/prefeitura-real.jpg";
import imgCampo from "@/assets/historia-3ano/campo-real.jpg";
import imgCidade from "@/assets/historia-3ano/cidade-real.jpg";
import imgLinhaTempo from "@/assets/historia-3ano/linha-tempo-municipio.jpg";
import imgPracaAntiga from "@/assets/historia-3ano/praca-antiga-sepia.jpg";
import imgPracaHoje from "@/assets/historia-3ano/praca-hoje.jpg";
import imgMapa from "@/assets/historia-3ano/mapa-municipio-infografico.jpg";
import imgLivro from "@/assets/historia-3ano/livro-cidades.jpg";

/**
 * História · 3º Ano · Unidade 1 · Aula 01
 * "O que é o meu Município?" — EF03HI01 + EF03HI02
 *
 * Skin "O Grande Livro das Cidades" — mesmo motor PlayerGeoV1.
 * Diferença do 2º ano: imagens REAIS (fotografia) + INFOGRÁFICOS
 * (mapas, linha do tempo, diagrama urbano×rural). Zero cartoon.
 * Linguagem calibrada pra 8 anos: mais técnica que o 2º ano,
 * ainda concreta, com definição visível em toda cena.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-o-que-e-municipio",
  titulo: "O que é o meu Município?",
  iconeTrilha: "🏛️",
  bncc: ["EF03HI01", "EF03HI02"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a LUPA sobre a fotografia aérea. Observe que existem DOIS mundos convivendo no mesmo lugar: prédios e ruas de um lado, campos e estradas de terra do outro.",
    mapaUrl: imgVistaAerea,
    imagemDestaqueUrl: imgMapa,
    aurora:
      "Pequeno Historiador, esta é uma foto tirada de um drone sobre uma cidade brasileira de verdade. Repare: onde termina o asfalto começa a plantação. Tudo o que você está vendo — prédios, ruas, fazendas, estradas — pertence a UM município. Vamos investigar o que é isso.",
    falaFinal:
      "MUNICÍPIO é o pedaço do território brasileiro que tem um nome, uma prefeitura e uma sede. E ele quase sempre é dividido em duas partes: zona urbana (cidade) e zona rural (campo).",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes de eu explicar tudo, quero ouvir seu palpite de investigador. Olhando a fotografia aérea, qual das duas frases é a mais correta sobre um município?",
    pergunta: "O que forma um município?",
    fotoUrl: imgVistaAerea,
    opcoes: [
      {
        id: "urbano-rural",
        titulo: "Zona urbana + zona rural juntas",
        subtitulo: "cidade e campo pertencem ao mesmo município",
        emoji: "🏙️",
        cor: "from-emerald-500 to-teal-700",
        fotoUrl: imgInfograficoUR,
      },
      {
        id: "so-cidade",
        titulo: "Só as ruas e prédios da cidade",
        subtitulo: "o campo é outro lugar, separado",
        emoji: "🏢",
        cor: "from-slate-500 to-slate-700",
        fotoUrl: imgCidade,
      },
    ],
    respostaCerta: "urbano-rural",
    feedbackAcerto:
      "Correto! O município é o TODO. Zona urbana (cidade) e zona rural (campo) são duas partes do MESMO município, governadas pela mesma prefeitura.",
    feedbackErro:
      "Quase. A cidade é só uma parte do município — a parte urbana. O campo em volta também pertence ao mesmo município e é governado pela mesma prefeitura.",
    falaFinal:
      "Guarde essa ideia central: um município NUNCA é só a cidade. Ele inclui todo o campo em volta até chegar no limite com o município vizinho.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Três palavras técnicas que todo historiador do 3º ano precisa dominar. Cada caderno está aberto com uma imagem real e a definição explicada.",
    instrucao: "Leia os três cadernos abertos",
    cadernos: [
      {
        id: "municipio",
        capa: "Município",
        emoji: "🗺️",
        cor: "from-emerald-600 to-teal-800",
        fotoUrl: imgMapa,
        conteudo:
          "MUNICÍPIO é uma unidade do território brasileiro com nome próprio, prefeito eleito e limites definidos por lei. O Brasil tem 5.570 municípios. Cada um tem uma SEDE (o centro urbano) e uma área rural ao redor.",
        exemplo: "Exemplo: 'Município de Ouro Preto' — inclui o centro histórico E as fazendas em volta.",
      },
      {
        id: "sede",
        capa: "Sede Municipal",
        emoji: "🏛️",
        cor: "from-amber-600 to-orange-800",
        fotoUrl: imgPrefeitura,
        conteudo:
          "SEDE é o principal núcleo urbano do município — onde ficam a prefeitura, a câmara de vereadores, a matriz da cidade. É a partir da sede que o município é administrado. Ela dá NOME ao município.",
        exemplo: "Exemplo: no Município de Belo Horizonte, a sede é a própria cidade de Belo Horizonte.",
      },
      {
        id: "zonas",
        capa: "Zona Urbana × Zona Rural",
        emoji: "🌾",
        cor: "from-sky-600 to-indigo-800",
        fotoUrl: imgInfograficoUR,
        conteudo:
          "ZONA URBANA é a parte edificada: ruas asfaltadas, prédios, comércio, serviços. ZONA RURAL é a parte de campo: fazendas, plantações, pastos, estradas de terra. As duas convivem dentro do mesmo município e dependem uma da outra.",
        exemplo: "Cidade come o que o campo planta. Campo usa o hospital e a escola da cidade.",
      },
    ],
    falaFinal:
      "Município, Sede e Zonas Urbana/Rural — o vocabulário oficial do 3º ano. A partir de agora vamos usar essas três palavras o tempo inteiro.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Este é um mapa municipal de verdade, no formato que aparece nos livros do IBGE. Toque em cada ponto pra eu explicar o que representa.",
    instrucao: "Toque em cada ponto do mapa pra ouvir a explicação",
    mapaUrl: imgMapa,
    pontos: [
      {
        id: "sede",
        x: 55,
        y: 50,
        emoji: "★",
        cor: "from-amber-600 to-orange-800",
        fotoUrl: imgPrefeitura,
        titulo: "A SEDE (centro urbano)",
        texto:
          "A estrela marca a SEDE do município. É o principal núcleo urbano — onde ficam a prefeitura, a câmara, o hospital central. A sede dá o nome oficial ao município. Toda decisão política acontece aqui.",
      },
      {
        id: "area-urbana",
        x: 55,
        y: 60,
        emoji: "▓",
        cor: "from-slate-500 to-slate-700",
        fotoUrl: imgCidade,
        titulo: "Área urbana (cinza)",
        texto:
          "A mancha cinza ao redor da estrela é a ÁREA URBANA: ruas, quadras, bairros, comércio. É a parte edificada. Concentra a maior parte da população, mas ocupa a MENOR parte do território municipal.",
      },
      {
        id: "area-rural",
        x: 25,
        y: 40,
        emoji: "▒",
        cor: "from-emerald-500 to-emerald-700",
        fotoUrl: imgCampo,
        titulo: "Área rural (verde)",
        texto:
          "Todo o verde é ÁREA RURAL: fazendas, plantações, pastos. Ela cobre a maior parte da área do município, mas tem MENOS pessoas por km². É de lá que sai boa parte dos alimentos da cidade.",
      },
      {
        id: "limite",
        x: 85,
        y: 35,
        emoji: "⋯",
        cor: "from-rose-500 to-rose-700",
        fotoUrl: imgMapa,
        titulo: "Limite municipal (linha tracejada)",
        texto:
          "A linha tracejada marca o LIMITE do município. Do outro lado dela começa OUTRO município, com outra prefeitura e outro prefeito. Esses limites são definidos por lei estadual.",
      },
    ],
    falaFinal:
      "Sede, área urbana, área rural e limite: os quatro elementos básicos de qualquer mapa municipal brasileiro. Você acabou de ler um mapa como um geógrafo.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Três perguntas de verificação. Cada uma testa se você sabe usar o vocabulário técnico do 3º ano corretamente.",
    instrucao: "Toque no card correto pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "Uma família que mora numa fazenda a 30 km da cidade está em qual zona?",
        fotoUrl: imgCampo,
        cards: [
          { id: "u", emoji: "🏢", titulo: "Zona urbana", cor: "from-slate-500 to-slate-700" },
          { id: "r", emoji: "🌾", titulo: "Zona rural", cor: "from-emerald-500 to-emerald-700" },
          { id: "f", emoji: "🛣️", titulo: "Fora do município", cor: "from-rose-500 to-rose-700" },
        ],
        correta: "r",
        feedbackAcerto:
          "Correto. Fazenda = zona rural. Mesmo a 30 km do centro, ela continua dentro do MESMO município.",
        feedbackErro:
          "Uma fazenda é sempre zona RURAL. E ela continua dentro do município, porque o município inclui tanto a cidade quanto o campo em volta.",
      },
      {
        id: "q2",
        pergunta: "O prédio da prefeitura fica onde?",
        fotoUrl: imgPrefeitura,
        cards: [
          { id: "s", emoji: "★", titulo: "Na sede municipal", cor: "from-amber-500 to-orange-700" },
          { id: "z", emoji: "🌾", titulo: "Numa fazenda", cor: "from-emerald-500 to-emerald-700" },
        ],
        correta: "s",
        feedbackAcerto: "Exato. A prefeitura fica sempre na SEDE — o principal núcleo urbano do município.",
        feedbackErro: "A prefeitura fica na SEDE do município: o centro urbano principal. Não fica em fazenda.",
      },
      {
        id: "q3",
        pergunta: "Quantos municípios existem no Brasil, aproximadamente?",
        fotoUrl: imgMapa,
        cards: [
          { id: "a", emoji: "🔢", titulo: "27", cor: "from-slate-500 to-slate-700" },
          { id: "b", emoji: "🔢", titulo: "5.570", cor: "from-emerald-500 to-teal-700" },
          { id: "c", emoji: "🔢", titulo: "1.000.000", cor: "from-rose-500 to-rose-700" },
        ],
        correta: "b",
        feedbackAcerto:
          "Certeza. O Brasil tem 5.570 municípios (dado IBGE). Cada um com prefeito próprio.",
        feedbackErro:
          "27 é o número de estados. O Brasil tem 5.570 MUNICÍPIOS — cada um com prefeitura, sede e limites próprios.",
      },
    ],
    falaFinal:
      "Radar afinado. Você já opera com o vocabulário técnico: município, sede, zona urbana, zona rural.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Vou ativar dois interruptores em cima da mesma fotografia aérea: um destaca a ZONA URBANA, outro destaca a ZONA RURAL. Veja como as duas convivem lado a lado no mesmo município.",
    instrucao: "Toque nos interruptores pra destacar cada zona",
    mapaUrl: imgVistaAerea,
    camadas: [
      {
        id: "urbana",
        rotulo: "Zona Urbana",
        emoji: "🏙️",
        cor: "from-slate-500 to-slate-800",
        rect: { x: 0, y: 10, w: 55, h: 80 },
        descricao:
          "Lado esquerdo da fotografia: prédios, ruas asfaltadas, igreja, comércio. É a parte edificada — chamada de zona urbana. Concentra a maior parte dos moradores e dos serviços do município.",
      },
      {
        id: "rural",
        rotulo: "Zona Rural",
        emoji: "🌾",
        cor: "from-emerald-600 to-emerald-800",
        rect: { x: 55, y: 10, w: 45, h: 80 },
        descricao:
          "Lado direito: campos verdes, estradas de terra, plantações e pastos. É a zona rural — parte agrícola do município. Menos habitantes por km², mas responsável pela produção de alimentos e matéria-prima.",
      },
    ],
    falaFinal:
      "Duas zonas, um só município. Cada uma cumpre uma função: a urbana concentra serviços, a rural produz alimento. Uma depende da outra.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Nenhum município nasce grande. Vamos organizar na ordem certa as 4 fases pelas quais uma cidade brasileira típica passa até se tornar um município moderno.",
    instrucao: "Toque nas fases na ordem da mais antiga pra mais nova",
    pergunta: "Como um município cresce ao longo do tempo?",
    paradas: [
      {
        id: "vila",
        emoji: "⛪",
        rotulo: "Vila (por volta de 1800)",
        fotoUrl: imgLinhaTempo,
        descricao:
          "Fase 1: pequeno arraial em volta de uma capela ou fazenda. Poucas casas, caminhos de terra, economia agrícola. Ainda não é município — depende de outro maior.",
      },
      {
        id: "cidade",
        emoji: "🏛️",
        rotulo: "Cidade (por volta de 1900)",
        fotoUrl: imgPracaAntiga,
        descricao:
          "Fase 2: a vila cresce, ganha praça, igreja matriz, escola. Recebe autonomia e vira MUNICÍPIO com prefeitura própria. Comércio começa a se instalar.",
      },
      {
        id: "expansao",
        emoji: "🚧",
        rotulo: "Expansão (por volta de 1950)",
        fotoUrl: imgCidade,
        descricao:
          "Fase 3: chegada de estradas, hospitais, escolas, indústrias. O município se expande, novos bairros surgem, a zona rural encolhe um pouco.",
      },
      {
        id: "moderno",
        emoji: "🏙️",
        rotulo: "Município moderno (hoje)",
        fotoUrl: imgVistaAerea,
        descricao:
          "Fase 4: município consolidado com serviços, comércio, transporte coletivo, tecnologia. Ainda mantém a zona rural, mas a urbana concentra a maior parte da população.",
      },
    ],
    ordemCerta: ["vila", "cidade", "expansao", "moderno"],
    feedbackAcerto:
      "Linha completa. Vila → Cidade → Expansão → Município moderno. Esse é o caminho típico das cidades brasileiras.",
    feedbackErro:
      "Essa não é a próxima fase. Pense: o que veio ANTES da cidade? E o que só apareceu quando as estradas chegaram?",
    falaFinal:
      "Todo município passou por essas 4 fases. Muitas cidades levaram 200 anos pra completar esse caminho.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Agora fica em silêncio comigo. Leia o Grande Livro das Cidades com seus próprios olhos e toque nas palavras destacadas quando quiser a definição.",
    tituloLivro: "📜 O Grande Livro das Cidades",
    subtitulo: "Página 1 — O que é um município",
    paragrafos: [
      {
        id: "p1",
        texto:
          "MUNICÍPIO é a menor unidade de organização política do Brasil. Cada município tem um TERRITÓRIO com limites definidos por lei, uma SEDE administrativa e um prefeito eleito pelo voto direto dos moradores.",
        chaves: ["município", "território", "sede"],
        definicoes: {
          município:
            "Menor unidade política do Brasil, com governo próprio (prefeito e vereadores). O país tem 5.570 municípios.",
          território:
            "Área geográfica delimitada por lei estadual. Inclui tanto a zona urbana quanto a rural.",
          sede:
            "Principal núcleo urbano, onde ficam prefeitura, câmara e serviços centrais. Dá nome ao município.",
        },
        fotoUrl: imgMapa,
      },
      {
        id: "p2",
        texto:
          "Todo município se divide em ZONA URBANA e ZONA RURAL. A zona urbana concentra prédios, ruas, comércio e serviços. A zona rural abriga fazendas, plantações e pastos — é onde se produz grande parte dos alimentos que abastecem a cidade.",
        chaves: ["zona urbana", "zona rural", "abastecem"],
        definicoes: {
          "zona urbana":
            "Parte edificada do município: ruas asfaltadas, casas, prédios, comércio. Alta densidade de pessoas.",
          "zona rural":
            "Parte agrícola do município: fazendas, plantações, matas, estradas de terra. Baixa densidade de pessoas.",
          abastecem:
            "Fornecem, entregam. O campo abastece a cidade com alimentos; a cidade abastece o campo com serviços.",
        },
        fotoUrl: imgInfograficoUR,
      },
      {
        id: "p3",
        texto:
          "Os municípios brasileiros nem sempre existiram. Muitos começaram como pequenas VILAS coloniais formadas em volta de capelas, minas ou fazendas nos séculos XVIII e XIX. Com o crescimento populacional, essas vilas foram elevadas à categoria de CIDADE e receberam autonomia municipal.",
        chaves: ["vilas", "coloniais", "autonomia"],
        definicoes: {
          vilas:
            "Pequenos povoados coloniais, formados em volta de capela, fazenda ou mina. Ainda sem governo próprio.",
          coloniais:
            "Do período em que o Brasil era colônia de Portugal (1500–1822).",
          autonomia:
            "Direito de ter governo próprio: prefeito, câmara, orçamento. É o que transforma uma vila em município.",
        },
        fotoUrl: imgLinhaTempo,
      },
      {
        id: "p4",
        texto:
          "Hoje, no século XXI, o município é onde a vida acontece: você estuda, trabalha, mora e se diverte dentro dele. Entender como o seu município se formou é o primeiro passo pra entender a HISTÓRIA do lugar onde você vive.",
        chaves: ["século XXI", "história"],
        definicoes: {
          "século XXI":
            "Período de 2001 a 2100 — a época em que vivemos agora.",
          história:
            "Estudo dos acontecimentos passados que explicam o presente. História e memória caminham juntas.",
        },
        fotoUrl: imgPracaHoje,
      },
    ],
    falaFinal:
      "Leitura concluída. Você agora sabe explicar, com suas próprias palavras, o que é um município e por que ele importa.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Missão de campo do historiador. Cada rodada mostra um lugar do município. Você tem que classificar rapidamente: é ZONA URBANA, ZONA RURAL ou é a SEDE administrativa?",
    instrucao: "⏱️ Leia a pista e toque na classificação correta antes do tempo acabar",
    duracaoSegundos: 18,
    pecas: [
      { id: "urbana", emoji: "🏙️", rotulo: "Zona Urbana" },
      { id: "rural", emoji: "🌾", rotulo: "Zona Rural" },
      { id: "sede", emoji: "🏛️", rotulo: "Sede" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Prédio da prefeitura", emoji: "🏛️", cor: "from-amber-600 to-orange-800" },
        municipioB: { nome: "Bandeira do Brasil hasteada", emoji: "🇧🇷", cor: "from-emerald-600 to-emerald-800" },
        contexto:
          "Prédio histórico com colunas, bandeira do Brasil no mastro, é onde o prefeito trabalha. Como classificamos esse ponto do município?",
        pecaCertaId: "sede",
        fotoUrl: imgPrefeitura,
        feedbackAcerto: "Correto. Prefeitura → SEDE do município. É o centro administrativo.",
        feedbackErro:
          "É onde o prefeito trabalha: isso classifica o lugar como SEDE municipal.",
      },
      {
        id: "r2",
        municipioA: { nome: "Plantação em fileiras", emoji: "🌱", cor: "from-emerald-500 to-emerald-700" },
        municipioB: { nome: "Casa de fazenda e gado", emoji: "🐄", cor: "from-teal-500 to-emerald-700" },
        contexto:
          "Grande extensão de plantação, gado pastando, casa isolada, estrada de terra. Como classificamos?",
        pecaCertaId: "rural",
        fotoUrl: imgCampo,
        feedbackAcerto: "Correto. Plantação + gado + estrada de terra = ZONA RURAL.",
        feedbackErro:
          "Fazenda com gado e plantação é sempre zona RURAL, mesmo que fique dentro do município.",
      },
      {
        id: "r3",
        municipioA: { nome: "Rua com comércio", emoji: "🏪", cor: "from-slate-500 to-slate-700" },
        municipioB: { nome: "Prédios coloridos", emoji: "🏢", cor: "from-slate-600 to-slate-800" },
        contexto:
          "Rua movimentada com pessoas caminhando, lojas abertas, calçadas, cars circulando, prédios de vários andares. Como classificamos?",
        pecaCertaId: "urbana",
        fotoUrl: imgCidade,
        feedbackAcerto: "Correto. Comércio, calçada, prédios, movimento = ZONA URBANA.",
        feedbackErro:
          "Rua com comércio e prédios é ZONA URBANA — parte edificada do município.",
      },
      {
        id: "r4",
        municipioA: { nome: "Praça central com igreja", emoji: "⛪", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Bancos e coreto", emoji: "🎼", cor: "from-yellow-600 to-amber-800" },
        contexto:
          "Praça bem cuidada no centro da cidade, com igreja matriz, bancos, coreto e movimento. Este ponto costuma marcar o coração da…",
        pecaCertaId: "sede",
        fotoUrl: imgPracaHoje,
        feedbackAcerto:
          "Correto. Praça central + igreja matriz → marcam a SEDE do município (o núcleo urbano principal).",
        feedbackErro:
          "A praça central, com igreja matriz, marca o coração da SEDE municipal.",
      },
    ],
    falaFinal:
      "Missão de campo concluída. Você classifica corretamente qualquer ponto do município: urbana, rural ou sede.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Vamos fechar a aula com uma comparação em duas fatias. De um lado, a ZONA URBANA. Do outro, a ZONA RURAL. Toque em cada fatia pra revisar o papel de cada uma.",
    instrucao: "Toque nas fatias pra ouvir sobre cada zona",
    fotoUrl: imgInfograficoUR,
    fatias: [
      {
        id: "urbana",
        rotulo: "Zona Urbana",
        emoji: "🏙️",
        percentual: 50,
        cor: "#64748b",
        descricao:
          "É a parte edificada do município. Concentra a maior parte dos habitantes, o comércio, os serviços públicos (hospital, escola, banco) e os prédios administrativos. É onde geralmente fica a sede.",
        exemplos: ["Prédios e apartamentos", "Ruas asfaltadas", "Hospital, escola, prefeitura", "Comércio e indústria"],
        fotoUrl: imgCidade,
      },
      {
        id: "rural",
        rotulo: "Zona Rural",
        emoji: "🌾",
        percentual: 50,
        cor: "#059669",
        descricao:
          "É a parte agrícola do município. Ocupa a maior área geográfica, mas tem menos habitantes por km². Produz alimentos, matéria-prima e mantém a vegetação nativa. Depende dos serviços da cidade.",
        exemplos: ["Fazendas e sítios", "Plantações e pastos", "Estradas de terra", "Matas e nascentes"],
        fotoUrl: imgCampo,
      },
    ],
    falaFinal:
      "Duas zonas complementares. Uma não vive sem a outra. Juntas, formam o município — a unidade política onde você mora.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última etapa: 3 perguntas de certificação. Se acertar, você restaura a primeira página do Grande Livro das Cidades e ganha o Selo do Cartógrafo Municipal.",
    instrucao: "Responda as 3 perguntas de certificação",
    fotoUrl: imgLivro,
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual definição descreve MELHOR o que é um município?",
        fotoUrl: imgMapa,
        opcoes: [
          {
            id: "a",
            texto:
              "Menor unidade política do Brasil, com prefeito eleito, sede, zona urbana e zona rural.",
            correta: true,
          },
          {
            id: "b",
            texto: "Apenas o centro da cidade, sem incluir o campo em volta.",
          },
        ],
        feedbackAcerto:
          "Certificado. Município é o TODO: sede + zona urbana + zona rural, com governo próprio.",
        feedbackErro:
          "O município inclui o campo também. A cidade é só a zona urbana — uma das partes.",
      },
      {
        id: "q2",
        pergunta: "Uma família na fazenda e uma família na rua central: as duas moram no mesmo município?",
        fotoUrl: imgVistaAerea,
        opcoes: [
          {
            id: "a",
            texto: "Sim. Zona urbana e zona rural pertencem ao mesmo município.",
            correta: true,
          },
          {
            id: "b",
            texto: "Não. Quem mora no campo está fora do município.",
          },
        ],
        feedbackAcerto:
          "Correto. Ambas dependem da mesma prefeitura, mesmo prefeito e mesmos limites.",
        feedbackErro:
          "Moram sim no mesmo município. A fazenda faz parte da zona rural — que é parte do município.",
      },
      {
        id: "q3",
        pergunta: "Por que a sede é importante para um município?",
        fotoUrl: imgPrefeitura,
        opcoes: [
          {
            id: "a",
            texto:
              "Porque é onde ficam a prefeitura e os serviços centrais, e é ela que dá nome ao município.",
            correta: true,
          },
          {
            id: "b",
            texto: "Porque é a única parte onde as pessoas podem morar.",
          },
        ],
        feedbackAcerto:
          "Certificação concluída. A sede é o centro administrativo — o coração institucional do município.",
        feedbackErro:
          "As pessoas moram tanto na zona urbana quanto na rural. A sede é importante porque concentra a administração.",
      },
    ],
    selo: {
      nome: "📜 Selo do Cartógrafo Municipal",
      subtitulo: "Primeira página do Grande Livro das Cidades restaurada",
      emoji: "🏛️",
      cor: "from-amber-400 via-orange-500 to-rose-600",
      fotoUrl: imgLivro,
    },
    falaFinal:
      "Selo conquistado. A primeira página do Grande Livro das Cidades foi restaurada. Você agora oficialmente compreende o conceito de município.",
  },

  recompensa: { xp: 200, moedas: 100, medalha: "Cartógrafo Municipal" },
};
