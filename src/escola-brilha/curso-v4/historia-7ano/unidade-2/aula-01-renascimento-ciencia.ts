import type { AulaGeoV1 } from "../../types";
import imgAtenas from "@/assets/historia-7ano/u2-escola-atenas.jpg";
import imgDavinci from "@/assets/historia-7ano/u2-davinci-caderno.jpg";
import imgPrensa from "@/assets/historia-7ano/u2-prensa-gutenberg.jpg";
import imgHelio from "@/assets/historia-7ano/u2-heliocentrico.jpg";
import imgHumanismo from "@/assets/historia-7ano/u2-infografico-humanismo.jpg";

export const aula01: AulaGeoV1 = {
  slug: "aula-01-renascimento-ciencia",
  titulo: "O Renascimento Cultural e Científico",
  iconeTrilha: "🎨",
  bncc: ["EF07HI03", "EF07HI04"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgDavinci,
    imagemDestaqueUrl: imgHumanismo,
    aurora:
      "Anatomia, máquinas voadoras, hidráulica, pintura em perspectiva — TUDO no mesmo caderno. O RENASCIMENTO nasceu na Itália e propôs uma virada: em vez de aceitar dogmas, INVESTIGAR o mundo com razão, ciência e observação.",
    falaFinal:
      "Nesta aula você desbloqueia a Engrenagem 2 da Bússola: O Astrolábio da Razão.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes de 1450 os livros eram copiados à mão por monges, um a um. Um único livro podia levar meses e custava uma fortuna. Um invento mudou tudo.",
    pergunta: "Qual invenção fez as ideias renascentistas se espalharem rapidamente?",
    fotoUrl: imgPrensa,
    opcoes: [
      {
        id: "prensa",
        titulo: "PRENSA DE TIPOS MÓVEIS",
        subtitulo: "Gutenberg, ~1450 — livros em escala",
        emoji: "📖",
        cor: "from-cyan-800 to-slate-950",
      },
      {
        id: "tel",
        titulo: "TELEFONE",
        subtitulo: "comunicação instantânea",
        emoji: "❌",
        cor: "from-amber-900 to-slate-950",
      },
    ],
    respostaCerta: "prensa",
    feedbackAcerto:
      "Correto. A PRENSA DE GUTENBERG (~1450) permitiu imprimir centenas de livros por dia. Ideias científicas e humanistas circularam rápido — a Igreja perdeu o monopólio da informação.",
    feedbackErro:
      "Não. O telefone só apareceu no séc. XIX. A revolução do Renascimento foi a PRENSA DE TIPOS MÓVEIS de Gutenberg em 1450.",
    falaFinal:
      "Guarde: prensa = internet do século XV. Democratizou o conhecimento.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Quatro conceitos-chave do Renascimento.",
    instrucao: "",
    cadernos: [
      {
        id: "antro",
        capa: "Antropocentrismo",
        emoji: "🧠",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgHumanismo,
        conteudo:
          "ANTROPOCENTRISMO coloca o SER HUMANO no centro das preocupações — em oposição ao TEOCENTRISMO medieval (Deus no centro de tudo). Valoriza a capacidade humana de pensar, criar e transformar o mundo.",
        exemplo:
          "Exemplo: o famoso desenho 'Homem Vitruviano' representa o corpo humano como medida do universo — símbolo do antropocentrismo renascentista.",
      },
      {
        id: "hum",
        capa: "Humanismo",
        emoji: "📖",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgAtenas,
        conteudo:
          "HUMANISMO foi o movimento intelectual do Renascimento que resgatou a cultura clássica greco-romana e valorizou o estudo humano das artes, línguas, história e filosofia — em vez do foco exclusivo em teologia.",
        exemplo:
          "Exemplo: humanistas como Erasmo de Roterdã estudavam grego e latim para ler os originais de Platão, Aristóteles e Cícero, questionando traduções medievais imprecisas.",
      },
      {
        id: "cie",
        capa: "Método Científico",
        emoji: "🔬",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgHelio,
        conteudo:
          "MÉTODO CIENTÍFICO usa OBSERVAÇÃO, MATEMÁTICA e EXPERIMENTAÇÃO para testar hipóteses. Substituiu a autoridade dos livros antigos pela verificação prática da realidade.",
        exemplo:
          "Exemplo: Galileu usou um telescópio pra observar as luas de Júpiter, provando que nem tudo gira em torno da Terra. Foi condenado pela Inquisição — mas tinha razão.",
      },
      {
        id: "mec",
        capa: "Mecenato",
        emoji: "💰",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgDavinci,
        conteudo:
          "MECENATO era o patrocínio financeiro de artistas e cientistas por reis, papas e burgueses ricos (mecenas). Em troca, ganhavam prestígio, obras magníficas e propaganda pessoal.",
        exemplo:
          "Exemplo: a família Médici, banqueiros de Florença, financiou Michelangelo, Leonardo da Vinci e Botticelli, transformando Florença no coração do Renascimento.",
      },
    ],
    falaFinal:
      "Antropocentrismo + Humanismo + Método Científico + Mecenato. Base do pensamento moderno.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Infográfico comparativo IDADE MÉDIA × RENASCIMENTO. Toque nos pontos.",
    instrucao: "Toque nos pontos do infográfico",
    mapaUrl: imgHumanismo,
    pontos: [
      {
        id: "med",
        x: 25,
        y: 30,
        emoji: "⛪",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgHumanismo,
        titulo: "IDADE MÉDIA · Teocentrismo",
        texto:
          "Deus é o centro de tudo. Igreja controla ciência, educação e moral. Arte gótica religiosa. Conhecimento vem da fé e da autoridade dos antigos.",
      },
      {
        id: "ren",
        x: 75,
        y: 30,
        emoji: "🧠",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgHumanismo,
        titulo: "RENASCIMENTO · Antropocentrismo",
        texto:
          "Ser humano no centro. Razão, ciência e observação. Retorno à cultura clássica greco-romana. Arte realista, perspectiva, anatomia.",
      },
      {
        id: "cie",
        x: 25,
        y: 75,
        emoji: "🔬",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgHelio,
        titulo: "REVOLUÇÃO CIENTÍFICA",
        texto:
          "Copérnico, Galileu, Kepler, Newton. Sistema heliocêntrico (Sol no centro), leis do movimento, telescópio, matemática aplicada.",
      },
      {
        id: "pren",
        x: 75,
        y: 75,
        emoji: "📖",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgPrensa,
        titulo: "PRENSA DE GUTENBERG",
        texto:
          "~1450. Tipos móveis de metal permitem imprimir livros em escala. Ideias novas viajam pela Europa em semanas, não em décadas.",
      },
    ],
    falaFinal:
      "Duas mentalidades em choque. E uma nova prensa espalhando a mudança.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas de humanista.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual palavra define a mudança que colocou o SER HUMANO no centro das preocupações renascentistas?",
        fotoUrl: imgHumanismo,
        cards: [
          { id: "a", emoji: "🧠", titulo: "Antropocentrismo", cor: "from-teal-600 to-slate-900" },
          { id: "t", emoji: "⛪", titulo: "Teocentrismo", cor: "from-amber-600 to-slate-900" },
          { id: "e", emoji: "💰", titulo: "Mercantilismo", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "a",
        feedbackAcerto: "Correto. ANTROPOCENTRISMO — 'anthropos' = ser humano.",
        feedbackErro: "É ANTROPOCENTRISMO. Teocentrismo era o oposto medieval.",
      },
      {
        id: "q2",
        pergunta: "Quem propôs a teoria HELIOCÊNTRICA (Sol no centro do sistema)?",
        fotoUrl: imgHelio,
        cards: [
          { id: "c", emoji: "🌞", titulo: "Copérnico e Galileu", cor: "from-teal-600 to-slate-900" },
          { id: "l", emoji: "🎨", titulo: "Leonardo apenas", cor: "from-amber-600 to-slate-900" },
          { id: "p", emoji: "🏛️", titulo: "Ptolomeu", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "c",
        feedbackAcerto: "Correto. COPÉRNICO propôs e GALILEU confirmou com o telescópio.",
        feedbackErro: "COPÉRNICO propôs (1543) e GALILEU confirmou. Ptolomeu defendia o geocentrismo.",
      },
      {
        id: "q3",
        pergunta: "Qual invenção do século XV fez as ideias renascentistas se espalharem rápido pela Europa?",
        fotoUrl: imgPrensa,
        cards: [
          { id: "p", emoji: "📖", titulo: "Prensa de Gutenberg", cor: "from-teal-600 to-slate-900" },
          { id: "c", emoji: "💻", titulo: "Computador", cor: "from-amber-600 to-slate-900" },
          { id: "t", emoji: "📞", titulo: "Telefone", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "p",
        feedbackAcerto: "Correto. PRENSA de Gutenberg (~1450) barateou livros e espalhou ideias em escala.",
        feedbackErro: "É a PRENSA DE GUTENBERG. Computador e telefone vieram MUITO depois.",
      },
    ],
    falaFinal: "Radar afiado. Você já pensa como um humanista.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois filtros sobre o Renascimento italiano. Um destaca as CIDADES-BERÇO; outro os TIPOS de sábio.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgHumanismo,
    camadas: [
      {
        id: "cid",
        rotulo: "Cidades-berço",
        emoji: "🏛️",
        cor: "from-amber-700 to-slate-900",
        rect: { x: 55, y: 15, w: 40, h: 40 },
        descricao:
          "Florença, Veneza, Roma, Milão. Cidades italianas ricas pelo comércio no Mediterrâneo. Financiaram artistas e sábios com dinheiro burguês.",
      },
      {
        id: "sab",
        rotulo: "Tipos de sábio renascentista",
        emoji: "🧠",
        cor: "from-cyan-700 to-slate-900",
        rect: { x: 5, y: 15, w: 45, h: 75 },
        descricao:
          "Homem universal: pintor + engenheiro + cientista + filósofo. Leonardo da Vinci é o símbolo. A ideia: uma mente pode dominar várias áreas simultaneamente.",
      },
    ],
    falaFinal:
      "Cidades ricas + mentes universais + mecenas = combinação que gerou o Renascimento.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Ordene a linha do tempo do Renascimento científico.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Marcos do Renascimento",
    paradas: [
      {
        id: "hum",
        emoji: "📖",
        rotulo: "1. Humanismo italiano (séc. XIV)",
        fotoUrl: imgAtenas,
        descricao: "Estudo dos clássicos gregos e romanos ganha força.",
      },
      {
        id: "pre",
        emoji: "🖨️",
        rotulo: "2. Prensa de Gutenberg (~1450)",
        fotoUrl: imgPrensa,
        descricao: "Livros ficam baratos, ideias circulam em massa.",
      },
      {
        id: "cop",
        emoji: "🌞",
        rotulo: "3. Copérnico publica o Heliocentrismo (1543)",
        fotoUrl: imgHelio,
        descricao: "Sol no centro — quebra o consenso da Igreja.",
      },
      {
        id: "gal",
        emoji: "🔭",
        rotulo: "4. Galileu observa Júpiter (1610)",
        fotoUrl: imgHelio,
        descricao: "Telescópio confirma Copérnico. Nasce a ciência moderna.",
      },
    ],
    ordemCerta: ["hum", "pre", "cop", "gal"],
    feedbackAcerto:
      "Perfeito. Humanismo → Prensa → Copérnico → Galileu. Cadeia da revolução do pensamento.",
    feedbackErro: "Essa não é a próxima. Humanismo veio antes, e Galileu confirmou Copérnico.",
    falaFinal: "Cada passo abriu caminho pro próximo. Cadeia de rachaduras no dogma.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez. Página 2 da Bússola. Toque nos termos técnicos.",
    tituloLivro: "🧭 A Bússola do Novo Mundo",
    subtitulo: "Página 2 — O Astrolábio da Razão",
    paragrafos: [
      {
        id: "p1",
        texto:
          "O RENASCIMENTO foi um movimento cultural, artístico e científico que começou na Itália nos séculos XIV-XV e mudou a forma como os europeus enxergavam o mundo. Rompeu com a visão medieval e valorizou a cultura clássica greco-romana.",
        chaves: ["Renascimento"],
        definicoes: {
          Renascimento:
            "Movimento cultural, artístico e científico dos séculos XIV-XVI que valorizou o ser humano, a razão e a cultura clássica.",
        },
        fotoUrl: imgAtenas,
      },
      {
        id: "p2",
        texto:
          "A grande virada foi o ANTROPOCENTRISMO: o ser humano no centro das preocupações, em vez do TEOCENTRISMO medieval (Deus no centro de tudo). Junto com o HUMANISMO — retorno aos clássicos gregos e romanos —, essa nova mentalidade transformou arte, ciência e política.",
        chaves: ["Antropocentrismo", "Humanismo"],
        definicoes: {
          Antropocentrismo:
            "Ser humano como centro das preocupações filosóficas e intelectuais, oposto ao teocentrismo medieval.",
          Humanismo:
            "Movimento intelectual que resgatou a cultura clássica e valorizou o estudo das artes, línguas, história e filosofia.",
        },
        fotoUrl: imgHumanismo,
      },
      {
        id: "p3",
        texto:
          "A REVOLUÇÃO CIENTÍFICA começou com COPÉRNICO (1543), que propôs o HELIOCENTRISMO — o Sol no centro do sistema, e não a Terra. GALILEU confirmou com o telescópio. Newton depois fechou o quebra-cabeça com as leis do movimento e da gravidade.",
        chaves: ["Heliocentrismo"],
        definicoes: {
          Heliocentrismo:
            "Teoria de que o Sol está no centro do sistema e os planetas giram em torno dele. Contradizia o geocentrismo defendido pela Igreja.",
        },
        fotoUrl: imgHelio,
      },
      {
        id: "p4",
        texto:
          "A invenção da PRENSA DE TIPOS MÓVEIS por Gutenberg (~1450) foi a tecnologia que ACELEROU tudo. Livros baratos permitiram que ideias científicas e humanistas viajassem rápido pela Europa, escapando do monopólio informativo da Igreja.",
        chaves: ["Prensa de Tipos Móveis"],
        definicoes: {
          "Prensa de Tipos Móveis":
            "Máquina de impressão de Johannes Gutenberg (~1450). Usava letras metálicas reutilizáveis. Permitiu produzir centenas de livros por dia.",
        },
        fotoUrl: imgPrensa,
      },
    ],
    falaFinal:
      "Leitura concluída. Você já explica, com nuance, a virada do teocentrismo pro antropocentrismo — e por que a prensa foi essencial.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Missão de curador renascentista. Classifique cada elemento em IDADE MÉDIA ou RENASCIMENTO.",
    instrucao: "⏱️ Toque na época correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "med", emoji: "⛪", rotulo: "Idade Média" },
      { id: "ren", emoji: "🧠", rotulo: "Renascimento" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Catedral gótica com vitrais religiosos", emoji: "⛪", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Arquitetura religiosa medieval", emoji: "🕍", cor: "from-amber-600 to-slate-900" },
        contexto: "Templo verticalizado com foco na fé.",
        pecaCertaId: "med",
        feedbackAcerto: "Correto. Catedral gótica = IDADE MÉDIA.",
        feedbackErro: "Catedrais góticas são MEDIEVAIS.",
      },
      {
        id: "r2",
        municipioA: { nome: "Pintura com perspectiva geométrica", emoji: "🎨", cor: "from-teal-700 to-slate-900" },
        municipioB: { nome: "Arte realista tridimensional", emoji: "🖼️", cor: "from-teal-600 to-slate-900" },
        contexto: "Técnica que dá profundidade à cena.",
        pecaCertaId: "ren",
        feedbackAcerto: "Correto. Perspectiva = RENASCIMENTO.",
        feedbackErro: "Perspectiva é técnica RENASCENTISTA.",
      },
      {
        id: "r3",
        municipioA: { nome: "Geocentrismo defendido pela Igreja", emoji: "🌍", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Terra no centro do universo", emoji: "⛪", cor: "from-amber-600 to-slate-900" },
        contexto: "Cosmologia que a Igreja considerava dogma.",
        pecaCertaId: "med",
        feedbackAcerto: "Correto. Geocentrismo = IDADE MÉDIA.",
        feedbackErro: "Geocentrismo era o dogma MEDIEVAL.",
      },
      {
        id: "r4",
        municipioA: { nome: "Prensa de tipos móveis de Gutenberg", emoji: "🖨️", cor: "from-cyan-700 to-slate-900" },
        municipioB: { nome: "Impressão em escala", emoji: "📖", cor: "from-cyan-600 to-slate-900" },
        contexto: "Máquina que popularizou os livros na Europa.",
        pecaCertaId: "ren",
        feedbackAcerto: "Correto. Prensa (~1450) = RENASCIMENTO.",
        feedbackErro: "Prensa de Gutenberg é RENASCIMENTO.",
      },
      {
        id: "r5",
        municipioA: { nome: "Livros copiados à mão em mosteiros", emoji: "📜", cor: "from-slate-700 to-slate-900" },
        municipioB: { nome: "Manuscritos monásticos", emoji: "🕯️", cor: "from-slate-600 to-slate-900" },
        contexto: "Cópia lenta feita por monges copistas.",
        pecaCertaId: "med",
        feedbackAcerto: "Correto. Cópia manual = IDADE MÉDIA.",
        feedbackErro: "Manuscritos copiados à mão = MEDIEVAL.",
      },
      {
        id: "r6",
        municipioA: { nome: "Galileu observando Júpiter com telescópio", emoji: "🔭", cor: "from-teal-700 to-slate-900" },
        municipioB: { nome: "Astronomia experimental", emoji: "🌌", cor: "from-teal-600 to-slate-900" },
        contexto: "Observação direta do céu confirmando o heliocentrismo.",
        pecaCertaId: "ren",
        feedbackAcerto: "Correto. Galileu = RENASCIMENTO CIENTÍFICO.",
        feedbackErro: "Galileu é RENASCIMENTO — revolução científica.",
      },
    ],
    falaFinal:
      "6 rodadas! Você já distingue mentalidade medieval de renascentista.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Pizza da produção de livros ANTES e DEPOIS da prensa de Gutenberg. Compare escalas.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgPrensa,
    fatias: [
      {
        id: "ant",
        rotulo: "Antes da prensa (~5%)",
        emoji: "📜",
        percentual: 5,
        cor: "#b45309",
        descricao:
          "Livros copiados à mão em mosteiros. Levavam meses cada, custavam fortunas. Só igreja e ricos tinham acesso.",
        exemplos: ["📜 Cópia manual", "🕯️ Monges copistas", "💰 Alto custo"],
      },
      {
        id: "dep",
        rotulo: "Depois da prensa (~95%)",
        emoji: "📚",
        percentual: 95,
        cor: "#0f766e",
        descricao:
          "Centenas de exemplares por dia. Custo despencou. Ideias científicas, políticas e religiosas circularam pela Europa.",
        exemplos: ["📚 Livros baratos", "🌍 Ideias globais", "🧠 Alfabetização"],
      },
    ],
    falaFinal:
      "A prensa não só imprimiu livros — imprimiu uma nova mentalidade.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Três perguntas finais pra desbloquear o Astrolábio da Razão.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgDavinci,
    perguntas: [
      {
        id: "av1",
        pergunta: "Qual termo define a mudança que colocou o SER HUMANO no centro das atenções?",
        opcoes: [
          { id: "a", texto: "Antropocentrismo.", correta: true },
          { id: "b", texto: "Teocentrismo Feudal.", correta: false },
          { id: "c", texto: "Absolutismo.", correta: false },
        ],
        feedbackAcerto: "Correto. ANTROPOCENTRISMO — humano no centro.",
        feedbackErro: "É ANTROPOCENTRISMO. Teocentrismo era o oposto medieval.",
      },
      {
        id: "av2",
        pergunta: "Qual invenção do século XV foi a maior revolução tecnológica para as ideias renascentistas?",
        opcoes: [
          { id: "a", texto: "A prensa de tipos móveis de Gutenberg.", correta: true },
          { id: "b", texto: "O telefone.", correta: false },
          { id: "c", texto: "A internet.", correta: false },
        ],
        feedbackAcerto: "Correto. A PRENSA (~1450) espalhou ideias em escala pela Europa.",
        feedbackErro: "É a PRENSA DE GUTENBERG. Telefone e internet vieram séculos depois.",
      },
      {
        id: "av3",
        pergunta: "Qual teoria astronômica renascentista contradisse a Igreja Católica?",
        opcoes: [
          { id: "a", texto: "Geocentrismo.", correta: false },
          { id: "b", texto: "Heliocentrismo (Sol no centro).", correta: true },
          { id: "c", texto: "Terra plana.", correta: false },
        ],
        feedbackAcerto: "Correto. HELIOCENTRISMO — Sol no centro, defendido por Copérnico e Galileu.",
        feedbackErro: "É o HELIOCENTRISMO. Geocentrismo era o dogma antigo.",
      },
    ],
    selo: {
      nome: "Astrolábio da Razão",
      subtitulo: "Engrenagem 2 da Bússola",
      emoji: "🧭",
      cor: "from-cyan-500 to-slate-900",
      fotoUrl: imgDavinci,
    },
    falaFinal:
      "Engrenagem 2 destravada. Você agora entende como a razão e a ciência começaram a desafiar os dogmas medievais.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Astrolábio da Razão" },
};
