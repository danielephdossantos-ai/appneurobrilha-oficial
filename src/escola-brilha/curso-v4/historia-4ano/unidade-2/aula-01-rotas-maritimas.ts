import type { AulaGeoV1 } from "../../types";
import imgAstro from "@/assets/historia-4ano/astrolabio-bussola.jpg";
import imgCaravela from "@/assets/historia-4ano/caravela.jpg";
import imgEspec from "@/assets/historia-4ano/especiarias.jpg";
import imgMapa from "@/assets/historia-4ano/mapa-navegacoes.jpg";

/**
 * História · 4º Ano · Unidade 2 · Aula 01
 * "As Rotas Marítimas e as Novas Tecnologias" — Grandes Navegações.
 * Restaura a Página 2 das Crônicas: Os Caminhos do Oceano.
 * Skin: fotografia real + infográfico PT-BR. Linguagem técnica calibrada 9 anos.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-rotas-maritimas",
  titulo: "As Rotas Marítimas e as Novas Tecnologias",
  iconeTrilha: "⛵",
  bncc: ["EF04HI05", "EF04HI06"],
  duracaoMin: 24,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a LUPA sobre a fotografia. Você está vendo um astrolábio e uma bússola de verdade — os dois instrumentos que salvaram a vida de milhares de marinheiros há 500 anos.",
    mapaUrl: imgAstro,
    imagemDestaqueUrl: imgMapa,
    aurora:
      "Pequeno Historiador, imagine atravessar o Oceano Atlântico em um navio de MADEIRA, sem GPS, sem celular, sem mapa preciso. Muita gente achava que o mar tinha monstros e que os navios cairiam num abismo no fim do mundo.",
    falaFinal:
      "Foi coragem + TECNOLOGIA que abriu as rotas marítimas. Nesta aula você acende o segundo ponto do mapa: Os Caminhos do Oceano.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite de investigador: por que os europeus (Portugal e Espanha) arriscaram tanto atravessando oceanos desconhecidos no século XV?",
    pergunta: "O que empurrou os europeus para o mar?",
    fotoUrl: imgEspec,
    opcoes: [
      {
        id: "especiarias",
        titulo: "Buscar especiarias da Índia",
        subtitulo: "pimenta, cravo e canela valiam ouro na Europa",
        emoji: "🌶️",
        cor: "from-orange-600 to-red-800",
        fotoUrl: imgEspec,
      },
      {
        id: "turismo",
        titulo: "Fazer turismo pelas ilhas",
        subtitulo: "só queriam conhecer praias novas",
        emoji: "🏖️",
        cor: "from-slate-500 to-slate-700",
        fotoUrl: imgCaravela,
      },
    ],
    respostaCerta: "especiarias",
    feedbackAcerto:
      "Correto! As ESPECIARIAS (temperos como pimenta, cravo, canela) valiam quase tanto quanto ouro na Europa — conservavam a comida antes das geladeiras.",
    feedbackErro:
      "Turismo é conceito moderno. No século XV, os europeus arriscaram tudo por causa das ESPECIARIAS da Índia — pimenta, cravo, canela.",
    falaFinal:
      "Guarde essa ideia: dinheiro + tecnologia = motor das Grandes Navegações.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Três palavras técnicas do vocabulário náutico do 4º ano. Cada caderno já está aberto com foto real e definição.",
    instrucao: "Leia os três cadernos abertos",
    cadernos: [
      {
        id: "caravela",
        capa: "Caravela",
        emoji: "⛵",
        cor: "from-sky-600 to-blue-800",
        fotoUrl: imgCaravela,
        conteudo:
          "CARAVELA é o navio de madeira criado por Portugal no século XV. Tinha VELAS TRIANGULARES (velas latinas) que permitiam navegar mesmo com o vento contra. Era pequeno, rápido e resistente às tempestades.",
        exemplo:
          "Exemplo: as caravelas de Pedro Álvares Cabral chegaram ao Brasil em 1500 depois de 43 dias de viagem.",
      },
      {
        id: "bussola",
        capa: "Bússola",
        emoji: "🧭",
        cor: "from-amber-600 to-orange-800",
        fotoUrl: imgAstro,
        conteudo:
          "BÚSSOLA é um instrumento com uma agulha magnética que aponta SEMPRE para o Norte da Terra. Foi criada pelos chineses e usada pelos europeus para saber a direção do navio no meio do oceano, mesmo sem enxergar a costa.",
        exemplo:
          "Exemplo: em dia nublado sem estrelas, sem sol e sem terra à vista, a bússola era a ÚNICA guia.",
      },
      {
        id: "astrolabio",
        capa: "Astrolábio",
        emoji: "🌟",
        cor: "from-emerald-600 to-teal-800",
        fotoUrl: imgAstro,
        conteudo:
          "ASTROLÁBIO é um disco de metal com marcações usado para medir a ALTURA das estrelas e do sol no céu. Com o ângulo, o marinheiro calculava em que LATITUDE o navio estava — se estava mais ao Norte ou ao Sul.",
        exemplo:
          "Exemplo: mirando a Estrela Polar no astrolábio de noite, dava pra saber quanto o navio já tinha subido pro norte.",
      },
    ],
    falaFinal:
      "Caravela + Bússola + Astrolábio: o KIT tecnológico que abriu os oceanos. Sem esses três, não haveria Grandes Navegações.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Este é o mapa oficial das Grandes Navegações portuguesas e espanholas. Toque em cada ponto do trajeto pra ouvir a história.",
    instrucao: "Toque nos pontos do mapa",
    mapaUrl: imgMapa,
    pontos: [
      {
        id: "portugal",
        x: 42,
        y: 30,
        emoji: "🇵🇹",
        cor: "from-red-600 to-green-800",
        fotoUrl: imgCaravela,
        titulo: "1. PORTUGAL — o ponto de partida",
        texto:
          "Portugal foi o pioneiro. No século XV lançou caravelas ao Atlântico pra encontrar uma rota marítima pra Índia sem passar pelo Mediterrâneo (dominado por muçulmanos).",
      },
      {
        id: "africa",
        x: 52,
        y: 60,
        emoji: "🌍",
        cor: "from-amber-600 to-orange-800",
        fotoUrl: imgMapa,
        titulo: "2. CONTORNANDO A ÁFRICA",
        texto:
          "Os portugueses foram DESCENDO pela costa da África, ponto por ponto, até dobrar o Cabo da Boa Esperança (África do Sul). Cada viagem ia um pouco mais longe.",
      },
      {
        id: "india",
        x: 78,
        y: 48,
        emoji: "🌶️",
        cor: "from-orange-600 to-red-800",
        fotoUrl: imgEspec,
        titulo: "3. ÍNDIA — as especiarias!",
        texto:
          "Em 1498, Vasco da Gama chegou à Índia pela primeira vez pelo mar. Voltou com navios cheios de PIMENTA, CRAVO e CANELA. Portugal ficou riquíssimo.",
      },
      {
        id: "brasil",
        x: 25,
        y: 60,
        emoji: "🇧🇷",
        cor: "from-emerald-600 to-teal-800",
        fotoUrl: imgCaravela,
        titulo: "4. BRASIL — descoberto por acaso",
        texto:
          "Em 1500, Pedro Álvares Cabral, indo pra Índia, desviou pro Atlântico e chegou ao Brasil. Começava a colonização portuguesa da nossa terra.",
      },
    ],
    falaFinal:
      "Portugal → África → Índia → Brasil. Essa é a Rota Portuguesa que mudou o mundo — e trouxe Portugal até o Brasil.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas sobre a tecnologia das Grandes Navegações.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual instrumento aponta SEMPRE para o Norte da Terra?",
        fotoUrl: imgAstro,
        cards: [
          { id: "b", emoji: "🧭", titulo: "Bússola", cor: "from-amber-500 to-orange-700" },
          { id: "a", emoji: "🌟", titulo: "Astrolábio", cor: "from-emerald-500 to-teal-700" },
          { id: "c", emoji: "⛵", titulo: "Caravela", cor: "from-sky-500 to-blue-700" },
        ],
        correta: "b",
        feedbackAcerto: "Certeza. A BÚSSOLA tem agulha magnética que aponta pro Norte magnético.",
        feedbackErro: "Astrolábio mede altura de estrela; caravela é navio. Quem aponta o Norte é a BÚSSOLA.",
      },
      {
        id: "q2",
        pergunta: "O que os europeus buscavam nas Índias arriscando os oceanos?",
        fotoUrl: imgEspec,
        cards: [
          { id: "e", emoji: "🌶️", titulo: "Especiarias (temperos)", cor: "from-orange-500 to-red-700" },
          { id: "t", emoji: "📱", titulo: "Tecidos modernos", cor: "from-slate-500 to-slate-700" },
          { id: "el", emoji: "⚡", titulo: "Eletricidade", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "e",
        feedbackAcerto: "Exato. ESPECIARIAS (pimenta, cravo, canela) valiam ouro — conservavam a comida.",
        feedbackErro: "Tecidos e eletricidade são recentes. Os europeus arriscaram tudo pelas ESPECIARIAS.",
      },
      {
        id: "q3",
        pergunta: "Qual navio pequeno e rápido de VELAS TRIANGULARES foi o preferido das Grandes Navegações?",
        fotoUrl: imgCaravela,
        cards: [
          { id: "c", emoji: "⛵", titulo: "Caravela", cor: "from-sky-500 to-blue-700" },
          { id: "s", emoji: "🚢", titulo: "Submarino", cor: "from-slate-500 to-slate-700" },
          { id: "j", emoji: "🛶", titulo: "Jangada", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "c",
        feedbackAcerto: "Isso. CARAVELA — velas triangulares, casco pequeno, muito manobrável.",
        feedbackErro: "Submarino é do século XX; jangada é pequena. O navio das Grandes Navegações é a CARAVELA.",
      },
    ],
    falaFinal: "Vocabulário técnico dominado. Você já opera como um marinheiro do século XV.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois interruptores em cima do MESMO mapa: um destaca a ROTA PORTUGUESA (contornando a África até a Índia), outro destaca a ROTA ESPANHOLA (indo pro oeste até chegar na América).",
    instrucao: "Toque nos interruptores",
    mapaUrl: imgMapa,
    camadas: [
      {
        id: "portugal",
        rotulo: "Rota Portuguesa",
        emoji: "🇵🇹",
        cor: "from-emerald-600 to-teal-800",
        rect: { x: 40, y: 25, w: 45, h: 55 },
        descricao:
          "Portugal desceu pela costa da ÁFRICA, dobrou o Cabo da Boa Esperança e chegou à ÍNDIA em 1498 com Vasco da Gama. Voltou carregado de especiarias.",
      },
      {
        id: "espanha",
        rotulo: "Rota Espanhola",
        emoji: "🇪🇸",
        cor: "from-amber-600 to-orange-800",
        rect: { x: 5, y: 30, w: 40, h: 45 },
        descricao:
          "Espanha foi pro OESTE achando que chegaria à Índia dando a volta na Terra. Em 1492, Cristóvão Colombo chegou à AMÉRICA pensando que era a Índia.",
      },
    ],
    falaFinal:
      "Duas rotas, dois países, um novo mundo conectado. As Grandes Navegações ligaram continentes que nunca tinham se falado.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos ordenar cronologicamente as 4 grandes viagens que abriram o mundo.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Qual foi a ordem dos grandes feitos?",
    paradas: [
      {
        id: "cabo",
        emoji: "🌊",
        rotulo: "1. Cabo da Boa Esperança (1488)",
        fotoUrl: imgCaravela,
        descricao: "Bartolomeu Dias dobra o extremo sul da África — provou que dava pra chegar à Índia pelo mar.",
      },
      {
        id: "america",
        emoji: "🇪🇸",
        rotulo: "2. Chegada à América (1492)",
        fotoUrl: imgMapa,
        descricao: "Colombo, indo pra Índia pelo Oeste, chegou nas Bahamas — descobriu a América sem querer.",
      },
      {
        id: "india",
        emoji: "🌶️",
        rotulo: "3. Chegada à Índia (1498)",
        fotoUrl: imgEspec,
        descricao: "Vasco da Gama completa a rota portuguesa: das especiarias direto pra Portugal, sem intermediários.",
      },
      {
        id: "brasil",
        emoji: "🇧🇷",
        rotulo: "4. Chegada ao Brasil (1500)",
        fotoUrl: imgCaravela,
        descricao: "Pedro Álvares Cabral, indo pra Índia, chega ao Brasil — nasce a colonização portuguesa aqui.",
      },
    ],
    ordemCerta: ["cabo", "america", "india", "brasil"],
    feedbackAcerto:
      "Cronologia perfeita: 1488 → 1492 → 1498 → 1500. Em apenas 12 anos, o mundo mudou pra sempre.",
    feedbackErro: "Essa não é a próxima etapa. Pense: o que veio ANTES da chegada ao Brasil?",
    falaFinal: "Você acabou de mapear as 4 datas mais importantes das Grandes Navegações.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia a Página 2 das Crônicas e toque nas palavras destacadas pra ver a definição.",
    tituloLivro: "📜 As Crônicas das Grandes Rotas",
    subtitulo: "Página 2 — Os Caminhos do Oceano",
    paragrafos: [
      {
        id: "p1",
        texto:
          "No fim do século XV, PORTUGAL e ESPANHA queriam chegar às Índias sem passar pelo Mediterrâneo. Precisavam de uma ROTA MARÍTIMA. Investiram em novos navios (CARAVELAS) e novos instrumentos (BÚSSOLA e ASTROLÁBIO).",
        chaves: ["caravelas", "bússola", "astrolábio"],
        definicoes: {
          caravelas:
            "Navios pequenos, rápidos e resistentes com velas triangulares que permitiam navegar contra o vento.",
          bússola:
            "Instrumento com agulha magnética que aponta sempre para o Norte da Terra, guiando o navio em oceano aberto.",
          astrolábio:
            "Disco de metal usado para medir a altura das estrelas e do sol, calculando a latitude do navio.",
        },
        fotoUrl: imgAstro,
      },
      {
        id: "p2",
        texto:
          "Os portugueses foram descendo pela costa da ÁFRICA. Em 1488, Bartolomeu Dias dobrou o CABO DA BOA ESPERANÇA. Em 1498, Vasco da Gama completou o feito e chegou à ÍNDIA, voltando com especiarias.",
        chaves: ["Cabo da Boa Esperança", "especiarias"],
        definicoes: {
          "Cabo da Boa Esperança":
            "Ponta sul da África, onde o Atlântico encontra o Índico. Passagem obrigatória pra alcançar a Índia por mar.",
          especiarias:
            "Temperos como pimenta, cravo, canela e noz-moscada. Na Europa valiam quase tanto quanto ouro.",
        },
        fotoUrl: imgEspec,
      },
      {
        id: "p3",
        texto:
          "Em 1492, a Espanha bancou Cristóvão COLOMBO, que decidiu chegar à Índia pelo OESTE — dando a volta na Terra. Em vez da Índia, chegou nas Bahamas: a AMÉRICA. Sem querer, ligou os dois lados do Atlântico.",
        chaves: ["Colombo"],
        definicoes: {
          Colombo:
            "Navegador genovês a serviço da Espanha. Em 1492, chegou à América pensando ter chegado à Índia.",
        },
        fotoUrl: imgMapa,
      },
      {
        id: "p4",
        texto:
          "Em 1500, Pedro Álvares CABRAL, indo pra Índia, desviou pro Atlântico e chegou ao BRASIL. Começava aqui a colonização portuguesa: uma nova rota humana, comercial e cultural que dura até hoje.",
        chaves: ["Cabral"],
        definicoes: {
          Cabral:
            "Navegador português. Em 22 de abril de 1500, chegou com sua esquadra ao Brasil (Porto Seguro, BA).",
        },
        fotoUrl: imgCaravela,
      },
    ],
    falaFinal:
      "Leitura concluída. Você já explica com suas palavras como as Grandes Navegações mudaram o planeta.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Missão de navegador: cada rodada mostra uma ferramenta. Você tem que dizer se é da rota MARÍTIMA (Grandes Navegações) ou MODERNA (hoje).",
    instrucao: "⏱️ Leia e toque na classificação certa",
    duracaoSegundos: 18,
    pecas: [
      { id: "ant", emoji: "⛵", rotulo: "Navegação Antiga" },
      { id: "mod", emoji: "📱", rotulo: "Navegação Moderna" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Bússola magnética", emoji: "🧭", cor: "from-amber-600 to-orange-800" },
        municipioB: { nome: "Agulha aponta o Norte", emoji: "🌐", cor: "from-orange-500 to-red-700" },
        contexto: "Instrumento com agulha magnética usado para saber a direção do navio.",
        pecaCertaId: "ant",
        feedbackAcerto: "Sim! Bússola foi usada nas Grandes Navegações. Navegação ANTIGA.",
        feedbackErro: "Bússola já existia há séculos. É NAVEGAÇÃO ANTIGA.",
      },
      {
        id: "r2",
        municipioA: { nome: "GPS via satélite", emoji: "📡", cor: "from-sky-600 to-blue-800" },
        municipioB: { nome: "Posição exata em segundos", emoji: "🛰️", cor: "from-blue-500 to-indigo-700" },
        contexto: "Um aparelho recebe sinais de satélites no espaço e mostra a posição exata do navio no mapa.",
        pecaCertaId: "mod",
        feedbackAcerto: "Correto! GPS é do século XX/XXI. Navegação MODERNA.",
        feedbackErro: "Nas caravelas não tinha satélite. GPS é MODERNO.",
      },
      {
        id: "r3",
        municipioA: { nome: "Astrolábio de latão", emoji: "🌟", cor: "from-amber-600 to-orange-800" },
        municipioB: { nome: "Mede altura das estrelas", emoji: "✨", cor: "from-orange-500 to-red-700" },
        contexto: "Disco de metal apontado para a Estrela Polar pra calcular a latitude.",
        pecaCertaId: "ant",
        feedbackAcerto: "Isso. Astrolábio é do século XV. Navegação ANTIGA.",
        feedbackErro: "Instrumento óptico pra estrelas = astrolábio, do século XV. ANTIGA.",
      },
      {
        id: "r4",
        municipioA: { nome: "Rádio de comunicação", emoji: "📻", cor: "from-sky-600 to-blue-800" },
        municipioB: { nome: "Fala com o porto em tempo real", emoji: "📞", cor: "from-blue-500 to-indigo-700" },
        contexto: "Marinheiro conversa com o porto pelo rádio pra pedir socorro ou avisar posição.",
        pecaCertaId: "mod",
        feedbackAcerto: "Perfeito. Rádio é do século XX. Navegação MODERNA.",
        feedbackErro: "Rádio não existia nas caravelas. É MODERNA.",
      },
      {
        id: "r5",
        municipioA: { nome: "Vela triangular latina", emoji: "⛵", cor: "from-amber-600 to-orange-800" },
        municipioB: { nome: "Navega contra o vento", emoji: "💨", cor: "from-orange-500 to-red-700" },
        contexto: "Vela em forma de triângulo permite ao navio avançar mesmo com vento contra.",
        pecaCertaId: "ant",
        feedbackAcerto: "Correto! Vela latina é marca das CARAVELAS. Navegação ANTIGA.",
        feedbackErro: "Vela latina = caravela = século XV. ANTIGA.",
      },
      {
        id: "r6",
        municipioA: { nome: "Contêiner de aço", emoji: "📦", cor: "from-sky-600 to-blue-800" },
        municipioB: { nome: "Empilhado em navio gigante", emoji: "🚢", cor: "from-blue-500 to-indigo-700" },
        contexto: "Caixa metálica padrão que carrega toneladas de produtos entre continentes.",
        pecaCertaId: "mod",
        feedbackAcerto: "Boa! Contêiner é invenção do século XX. MODERNA.",
        feedbackErro: "Contêiner é do século XX. MODERNA.",
      },
    ],
    falaFinal: "6 rodadas! Você já diferencia tecnologia antiga e moderna dos oceanos.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Pizza das Grandes Navegações: dos 100% dos produtos que os europeus trouxeram das Índias, o que era MAIS valioso?",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgEspec,
    fatias: [
      {
        id: "espec",
        rotulo: "Especiarias (~70%)",
        emoji: "🌶️",
        percentual: 70,
        cor: "#c2410c",
        descricao:
          "PIMENTA, CRAVO, CANELA e NOZ-MOSCADA eram o principal produto. Conservavam a carne, davam sabor e valiam ouro na Europa.",
        exemplos: ["🌶️ Pimenta", "🌿 Cravo", "🥮 Canela"],
      },
      {
        id: "outros",
        rotulo: "Outros produtos (~30%)",
        emoji: "🧵",
        percentual: 30,
        cor: "#0f766e",
        descricao:
          "Sedas, porcelanas chinesas, chá, pedras preciosas e tecidos finos completavam a carga das caravelas.",
        exemplos: ["🧵 Sedas", "🏺 Porcelanas", "💎 Pedras"],
      },
    ],
    falaFinal: "Especiarias dominavam. Cada saco de pimenta rendia uma pequena fortuna em Lisboa.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais pra conquistar a insígnia dos Caminhos do Oceano.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgAstro,
    perguntas: [
      {
        id: "av1",
        pergunta: "Qual instrumento aponta sempre para o Norte da Terra?",
        opcoes: [
          { id: "a", texto: "Astrolábio.", correta: false },
          { id: "b", texto: "Bússola.", correta: true },
          { id: "c", texto: "Caravela.", correta: false },
        ],
        feedbackAcerto: "Correto! BÚSSOLA — agulha magnética aponta o Norte.",
        feedbackErro: "Astrolábio mede estrelas; caravela é navio. Aponta o Norte = BÚSSOLA.",
      },
      {
        id: "av2",
        pergunta: "O que os europeus buscavam nas Índias arriscando os oceanos?",
        opcoes: [
          { id: "a", texto: "Aparelhos eletrônicos.", correta: false },
          { id: "b", texto: "Especiarias preciosas: cravo, canela, pimenta.", correta: true },
          { id: "c", texto: "Peixes de água doce.", correta: false },
        ],
        feedbackAcerto: "Perfeito! ESPECIARIAS valiam ouro na Europa.",
        feedbackErro: "Eletrônicos são recentes. Os europeus queriam ESPECIARIAS.",
      },
      {
        id: "av3",
        pergunta: "Em que ano os portugueses chegaram ao Brasil, sob comando de Pedro Álvares Cabral?",
        opcoes: [
          { id: "a", texto: "1492.", correta: false },
          { id: "b", texto: "1500.", correta: true },
          { id: "c", texto: "1808.", correta: false },
        ],
        feedbackAcerto: "Isso! 1500 — 22 de abril, Porto Seguro (BA).",
        feedbackErro: "1492 é chegada de Colombo à América; 1808 é vinda da família real. Cabral chegou em 1500.",
      },
    ],
    selo: {
      nome: "Caminhos do Oceano",
      subtitulo: "Insígnia das Grandes Navegações",
      emoji: "⛵",
      cor: "from-sky-400 to-blue-600",
      fotoUrl: imgCaravela,
    },
    falaFinal:
      "Insígnia conquistada! Página 2 restaurada. O segundo ponto brilha no mapa: Os Caminhos do Oceano.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Caminhos do Oceano" },
};
