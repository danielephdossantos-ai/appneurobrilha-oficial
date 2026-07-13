import type { AulaGeoV1 } from "../../types";
import imgCaravela from "@/assets/historia-7ano/u5-caravela.jpg";
import imgAstrolabio from "@/assets/historia-7ano/u5-astrolabio.jpg";
import imgMapa from "@/assets/historia-7ano/u5-mapa-monstros.jpg";
import imgEsp from "@/assets/historia-7ano/u5-especiarias.jpg";
import imgTord from "@/assets/historia-7ano/u5-infografico-tordesilhas.jpg";

export const aula01: AulaGeoV1 = {
  slug: "aula-01-grandes-navegacoes",
  titulo: "As Grandes Navegações e a Expansão Marítima",
  iconeTrilha: "⛵",
  bncc: ["EF07HI09", "EF07HI10"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgCaravela,
    imagemDestaqueUrl: imgTord,
    aurora:
      "Oceano Atlântico, ~1500. Chamado de MAR TENEBROSO. Mapas mostravam monstros marinhos e redemoinhos gigantes. Ainda assim, portugueses e espanhóis atravessaram — com caravelas, astrolábios, bússolas e MUITA coragem comercial. Precisavam encontrar novas rotas para as especiarias asiáticas.",
    falaFinal:
      "Nesta aula você desbloqueia a Engrenagem 5 da Bússola: O Astrolábio dos Oceanos.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Em 1453, Constantinopla caiu para os turcos otomanos. A rota terrestre para as Índias ficou bloqueada. Por que isso forçou Portugal a arriscar navegar contornando a África?",
    pergunta: "Por que Portugal precisou buscar uma rota marítima para as Índias?",
    fotoUrl: imgEsp,
    opcoes: [
      {
        id: "rota",
        titulo: "PARA COMPRAR ESPECIARIAS DIRETO",
        subtitulo: "sem pagar taxas dos otomanos",
        emoji: "🌶️",
        cor: "from-cyan-800 to-slate-950",
      },
      {
        id: "tur",
        titulo: "PARA FAZER TURISMO",
        subtitulo: "conhecer novas praias",
        emoji: "❌",
        cor: "from-amber-900 to-slate-950",
      },
    ],
    respostaCerta: "rota",
    feedbackAcerto:
      "Correto. Precisavam de rota MARÍTIMA alternativa para as Índias, comprar especiarias direto e escapar das taxas altíssimas dos otomanos, que dominavam a rota terrestre.",
    feedbackErro:
      "Não. Foi razão puramente ECONÔMICA. As especiarias asiáticas valiam fortunas, e comprar direto era muito mais lucrativo.",
    falaFinal:
      "Guarde: motivo real das navegações = ESPECIARIAS e OURO, não descobrimento por curiosidade.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Quatro conceitos-chave da expansão marítima.",
    instrucao: "",
    cadernos: [
      {
        id: "cara",
        capa: "Caravela",
        emoji: "⛵",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgCaravela,
        conteudo:
          "CARAVELA foi o navio revolucionário desenvolvido pelos portugueses no séc. XV. Pequena, ágil, com VELAS LATINAS (triangulares) que permitiam navegar até contra o vento. Ideal para explorar costas desconhecidas.",
        exemplo:
          "Exemplo: as caravelas São Rafael e São Gabriel de Vasco da Gama contornaram a África em 1497-1498 e chegaram a Calecute, na Índia, abrindo a rota das especiarias.",
      },
      {
        id: "ast",
        capa: "Astrolábio",
        emoji: "🧭",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgAstrolabio,
        conteudo:
          "ASTROLÁBIO era o instrumento de navegação que media a altura do Sol ou de estrelas em relação ao horizonte. Com a BÚSSOLA e as cartas náuticas, permitia calcular a LATITUDE no mar aberto.",
        exemplo:
          "Exemplo: o astrolábio veio do mundo árabe e foi aperfeiçoado pelos portugueses na Escola de Sagres, criada pelo Infante Dom Henrique no séc. XV. Foi a tecnologia-chave das navegações.",
      },
      {
        id: "esp",
        capa: "Especiarias",
        emoji: "🌶️",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgEsp,
        conteudo:
          "ESPECIARIAS (pimenta, cravo, canela, noz-moscada, gengibre) vinham da Ásia e valiam FORTUNAS na Europa. Usadas pra conservar carne, disfarçar sabores, produzir remédios e mostrar status social.",
        exemplo:
          "Exemplo: um saco de pimenta-do-reino podia valer o mesmo que o peso em ouro. Por isso Vasco da Gama voltou de Calecute com o navio quase afundando de tanta especiaria.",
      },
      {
        id: "tor",
        capa: "Tratado de Tordesilhas",
        emoji: "📜",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgTord,
        conteudo:
          "TRATADO DE TORDESILHAS (1494) foi um acordo entre Portugal e Espanha, mediado pelo Papa, para DIVIDIR as terras descobertas e por descobrir. Traçava linha imaginária a 370 léguas a oeste de Cabo Verde.",
        exemplo:
          "Exemplo: por causa dessa linha, o Brasil (descoberto em 1500) coube a Portugal. Se a linha fosse mais a leste, o litoral brasileiro poderia ter sido colonizado pela Espanha.",
      },
    ],
    falaFinal:
      "Caravela + Astrolábio + Especiarias + Tordesilhas. Base técnica e política da expansão ibérica.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Infográfico do Tratado de Tordesilhas. Toque nos pontos.",
    instrucao: "Toque nos pontos do infográfico",
    mapaUrl: imgTord,
    pontos: [
      {
        id: "por",
        x: 75,
        y: 40,
        emoji: "🇵🇹",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgCaravela,
        titulo: "PORTUGAL · Leste da linha",
        texto:
          "África, Índia, Sudeste Asiático e a parte oriental da América do Sul (litoral do Brasil). Controlou a rota das especiarias no Oceano Índico.",
      },
      {
        id: "esp",
        x: 25,
        y: 40,
        emoji: "🇪🇸",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgMapa,
        titulo: "ESPANHA · Oeste da linha",
        texto:
          "Toda a América Central, Caribe, México, Andes e parte da América do Sul (Chile, Peru, Argentina). Explorou minas de ouro e prata.",
      },
      {
        id: "lin",
        x: 50,
        y: 40,
        emoji: "📏",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgTord,
        titulo: "LINHA DE TORDESILHAS",
        texto:
          "Meridiano imaginário a 370 léguas a oeste de Cabo Verde. Assinado em 7 de junho de 1494. Mediação do Papa Alexandre VI.",
      },
      {
        id: "cab",
        x: 60,
        y: 75,
        emoji: "🇧🇷",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgCaravela,
        titulo: "BRASIL (1500)",
        texto:
          "Frota de Pedro Álvares Cabral chega ao litoral da Bahia em 22 de abril de 1500. Território cai em Portugal graças à linha de Tordesilhas.",
      },
    ],
    falaFinal:
      "Duas coroas dividiram o mundo com uma linha — sem consultar os povos que já viviam nas terras 'divididas'.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas de navegador ibérico.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual TRATADO dividiu o mundo entre Portugal e Espanha em 1494?",
        fotoUrl: imgTord,
        cards: [
          { id: "t", emoji: "📜", titulo: "Tratado de Tordesilhas", cor: "from-teal-600 to-slate-900" },
          { id: "v", emoji: "🕊️", titulo: "Tratado de Versalhes", cor: "from-amber-600 to-slate-900" },
          { id: "p", emoji: "🌍", titulo: "Tratado de Paris", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "t",
        feedbackAcerto: "Correto. TORDESILHAS, 1494. Mediado pelo Papa Alexandre VI.",
        feedbackErro: "É TORDESILHAS. Versalhes e Paris foram muito depois (séc. XVIII-XX).",
      },
      {
        id: "q2",
        pergunta: "Qual NAVIO foi desenvolvido pelos portugueses para as Grandes Navegações?",
        fotoUrl: imgCaravela,
        cards: [
          { id: "c", emoji: "⛵", titulo: "Caravela", cor: "from-teal-600 to-slate-900" },
          { id: "s", emoji: "🚢", titulo: "Submarino", cor: "from-amber-600 to-slate-900" },
          { id: "b", emoji: "🚤", titulo: "Lancha rápida", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "c",
        feedbackAcerto: "Correto. CARAVELA — velas latinas, ágil, ideal pra explorar costas.",
        feedbackErro: "É a CARAVELA. Submarino e lancha vieram séculos depois.",
      },
      {
        id: "q3",
        pergunta: "Qual produto asiático VALIA FORTUNAS na Europa e motivou as navegações?",
        fotoUrl: imgEsp,
        cards: [
          { id: "e", emoji: "🌶️", titulo: "Especiarias (pimenta, cravo, canela)", cor: "from-teal-600 to-slate-900" },
          { id: "b", emoji: "🍺", titulo: "Cerveja", cor: "from-amber-600 to-slate-900" },
          { id: "l", emoji: "☕", titulo: "Café", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "e",
        feedbackAcerto: "Correto. ESPECIARIAS — pimenta valia o peso em ouro.",
        feedbackErro: "São as ESPECIARIAS. Cerveja e café não motivaram as grandes navegações.",
      },
    ],
    falaFinal: "Radar afiado. Você já lê as motivações reais da expansão marítima.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois filtros sobre a expansão. Um destaca os PIONEIROS ibéricos; outro os POVOS impactados.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgTord,
    camadas: [
      {
        id: "pio",
        rotulo: "Pioneiros ibéricos",
        emoji: "⛵",
        cor: "from-teal-700 to-slate-900",
        rect: { x: 60, y: 25, w: 35, h: 40 },
        descricao:
          "Portugal e Espanha. Escola de Sagres (Portugal), reis católicos (Espanha), Vasco da Gama, Cristóvão Colombo, Cabral, Magalhães. Dividiram o mundo entre si.",
      },
      {
        id: "imp",
        rotulo: "Povos impactados",
        emoji: "🌍",
        cor: "from-amber-700 to-slate-900",
        rect: { x: 5, y: 20, w: 55, h: 70 },
        descricao:
          "Povos indígenas das Américas, povos africanos escravizados, comerciantes asiáticos deslocados. Sofreram violência, doenças e reorganização forçada.",
      },
    ],
    falaFinal:
      "Descoberta pra Europa. Catástrofe para muitos dos povos 'encontrados'.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Ordene a linha do tempo das Grandes Navegações.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Marcos das Navegações",
    paradas: [
      {
        id: "ceu",
        emoji: "🏰",
        rotulo: "1. Conquista de Ceuta (1415)",
        fotoUrl: imgCaravela,
        descricao: "Portugal inicia expansão no norte da África.",
      },
      {
        id: "col",
        emoji: "🌎",
        rotulo: "2. Colombo chega ao Caribe (1492)",
        fotoUrl: imgMapa,
        descricao: "Espanha atinge as Américas.",
      },
      {
        id: "tor",
        emoji: "📜",
        rotulo: "3. Tratado de Tordesilhas (1494)",
        fotoUrl: imgTord,
        descricao: "Portugal e Espanha dividem o mundo.",
      },
      {
        id: "cab",
        emoji: "🇧🇷",
        rotulo: "4. Cabral chega ao Brasil (1500)",
        fotoUrl: imgCaravela,
        descricao: "Frota portuguesa aporta na Bahia.",
      },
    ],
    ordemCerta: ["ceu", "col", "tor", "cab"],
    feedbackAcerto:
      "Perfeito. Ceuta → Colombo → Tordesilhas → Brasil. Cadeia de eventos.",
    feedbackErro: "Essa não é a próxima. Ceuta veio bem antes; Tordesilhas foi depois de Colombo.",
    falaFinal: "85 anos que reorganizaram o mundo — e criaram o Brasil.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez. Página 5 da Bússola. Toque nos termos técnicos.",
    tituloLivro: "🧭 A Bússola do Novo Mundo",
    subtitulo: "Página 5 — O Astrolábio dos Oceanos",
    paragrafos: [
      {
        id: "p1",
        texto:
          "As GRANDES NAVEGAÇÕES foram as expedições marítimas dos séculos XV e XVI que conectaram os continentes. Portugal foi o PIONEIRO graças à posição geográfica atlântica, à paz interna e à formação técnica na Escola de Sagres do Infante Dom Henrique.",
        chaves: ["Grandes Navegações", "Escola de Sagres"],
        definicoes: {
          "Grandes Navegações":
            "Expedições marítimas europeias entre 1415 e ~1600 que conectaram Europa, África, Ásia e Américas.",
          "Escola de Sagres":
            "Centro de estudos náuticos criado pelo Infante Dom Henrique em Portugal (séc. XV). Formou navegadores e cartógrafos.",
        },
        fotoUrl: imgCaravela,
      },
      {
        id: "p2",
        texto:
          "Os portugueses desenvolveram a CARAVELA, um navio ágil com velas latinas que navegava contra o vento. Usavam BÚSSOLA, ASTROLÁBIO e cartas náuticas para se orientar em mar aberto. Essa tecnologia permitiu ultrapassar limites geográficos que assustavam os europeus por séculos.",
        chaves: ["Caravela", "Astrolábio"],
        definicoes: {
          Caravela:
            "Navio ágil de origem portuguesa, com velas latinas triangulares que permitiam navegar contra o vento.",
          Astrolábio:
            "Instrumento astronômico usado para medir a altura de astros em relação ao horizonte e calcular latitude.",
        },
        fotoUrl: imgAstrolabio,
      },
      {
        id: "p3",
        texto:
          "Vasco da Gama contornou o CABO DA BOA ESPERANÇA (sul da África) e alcançou Calecute, na Índia, em 1498 — abrindo a rota das ESPECIARIAS. Do outro lado do Atlântico, Cristóvão Colombo chegou às Américas em 1492 a serviço da Espanha, achando que tinha chegado à Ásia.",
        chaves: ["Especiarias"],
        definicoes: {
          Especiarias:
            "Temperos e ervas asiáticas (pimenta, cravo, canela, noz-moscada). Valiam fortunas na Europa e motivaram as navegações.",
        },
        fotoUrl: imgEsp,
      },
      {
        id: "p4",
        texto:
          "O TRATADO DE TORDESILHAS (1494) dividiu as terras descobertas e por descobrir entre Portugal e Espanha, com mediação do Papa. Traçou linha a 370 léguas a oeste de Cabo Verde. Em 1500, a frota de Pedro Álvares Cabral chegou ao litoral da Bahia, que ficou no lado português.",
        chaves: ["Tratado de Tordesilhas"],
        definicoes: {
          "Tratado de Tordesilhas":
            "Acordo de 1494 entre Portugal e Espanha, mediado pelo Papa, que dividiu o mundo em duas zonas de exploração.",
        },
        fotoUrl: imgTord,
      },
    ],
    falaFinal:
      "Leitura concluída. Você já explica com nuance a tecnologia, a economia e a política das Grandes Navegações.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Missão de historiador marítimo. Classifique cada elemento em TECNOLOGIA, ECONOMIA ou POLÍTICA das navegações.",
    instrucao: "⏱️ Toque na categoria correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "tec", emoji: "🧭", rotulo: "Tecnologia" },
      { id: "eco", emoji: "🌶️", rotulo: "Economia" },
      { id: "pol", emoji: "📜", rotulo: "Política" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Astrolábio", emoji: "🧭", cor: "from-teal-700 to-slate-900" },
        municipioB: { nome: "Instrumento de latitude", emoji: "📐", cor: "from-teal-600 to-slate-900" },
        contexto: "Instrumento pra medir a altura do Sol e das estrelas.",
        pecaCertaId: "tec",
        feedbackAcerto: "Correto. Astrolábio = TECNOLOGIA.",
        feedbackErro: "Astrolábio é TECNOLOGIA de navegação.",
      },
      {
        id: "r2",
        municipioA: { nome: "Pimenta-do-reino valia peso em ouro", emoji: "🌶️", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Comércio de especiarias", emoji: "💰", cor: "from-amber-600 to-slate-900" },
        contexto: "Produto raro e caríssimo na Europa.",
        pecaCertaId: "eco",
        feedbackAcerto: "Correto. Especiarias = ECONOMIA.",
        feedbackErro: "Especiarias movem a ECONOMIA das navegações.",
      },
      {
        id: "r3",
        municipioA: { nome: "Tratado de Tordesilhas (1494)", emoji: "📜", cor: "from-cyan-700 to-slate-900" },
        municipioB: { nome: "Acordo entre Portugal e Espanha", emoji: "🕊️", cor: "from-cyan-600 to-slate-900" },
        contexto: "Documento que dividia terras entre dois reinos.",
        pecaCertaId: "pol",
        feedbackAcerto: "Correto. Tordesilhas = POLÍTICA.",
        feedbackErro: "Tratado é ato POLÍTICO.",
      },
      {
        id: "r4",
        municipioA: { nome: "Caravela com velas latinas", emoji: "⛵", cor: "from-teal-700 to-slate-900" },
        municipioB: { nome: "Navio ágil português", emoji: "🚢", cor: "from-teal-600 to-slate-900" },
        contexto: "Embarcação capaz de navegar contra o vento.",
        pecaCertaId: "tec",
        feedbackAcerto: "Correto. Caravela = TECNOLOGIA.",
        feedbackErro: "Caravela é TECNOLOGIA.",
      },
      {
        id: "r5",
        municipioA: { nome: "Constantinopla cai (1453) — rota bloqueada", emoji: "🚫", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Alta dos preços das especiarias", emoji: "📈", cor: "from-amber-600 to-slate-900" },
        contexto: "Otomanos dominam a rota terrestre asiática.",
        pecaCertaId: "eco",
        feedbackAcerto: "Correto. Bloqueio comercial = ECONOMIA.",
        feedbackErro: "Impacto principal foi ECONÔMICO.",
      },
      {
        id: "r6",
        municipioA: { nome: "Escola de Sagres (Infante D. Henrique)", emoji: "🎓", cor: "from-cyan-700 to-slate-900" },
        municipioB: { nome: "Centro de estudos náuticos", emoji: "🗺️", cor: "from-cyan-600 to-slate-900" },
        contexto: "Local onde se estudavam mapas, ventos e correntes marinhas.",
        pecaCertaId: "pol",
        feedbackAcerto: "Correto. Sagres = POLÍTICA de Estado (projeto real).",
        feedbackErro: "Sagres foi projeto POLÍTICO do reino português.",
      },
    ],
    falaFinal:
      "6 rodadas! Você já lê a expansão marítima por camadas.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Pizza dos motivos das navegações: proporção entre motivações econômicas e outras (religiosas, curiosidade).",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgEsp,
    fatias: [
      {
        id: "eco",
        rotulo: "Motivação econômica (~80%)",
        emoji: "💰",
        percentual: 80,
        cor: "#0f766e",
        descricao:
          "Especiarias, ouro, prata, escravos, novas rotas comerciais. O motor principal era o LUCRO.",
        exemplos: ["🌶️ Especiarias", "🥇 Ouro", "🚢 Rotas"],
      },
      {
        id: "out",
        rotulo: "Motivos religiosos/curiosidade (~20%)",
        emoji: "⛪",
        percentual: 20,
        cor: "#b45309",
        descricao:
          "Expandir o cristianismo (catequizar), curiosidade científica, prestígio real. Importantes, mas secundárias em relação ao dinheiro.",
        exemplos: ["✝️ Catequese", "🧪 Ciência", "👑 Prestígio"],
      },
    ],
    falaFinal:
      "Descobrimento tem cara bonita. Motivo principal era ECONÔMICO.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Três perguntas finais pra desbloquear o Astrolábio dos Oceanos.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgCaravela,
    perguntas: [
      {
        id: "av1",
        pergunta: "Qual TRATADO de 1494 dividiu o mundo entre Portugal e Espanha?",
        opcoes: [
          { id: "a", texto: "Tratado de Tordesilhas.", correta: true },
          { id: "b", texto: "Tratado de Versalhes Marítimo.", correta: false },
          { id: "c", texto: "Tratado de Paris.", correta: false },
        ],
        feedbackAcerto: "Correto. TORDESILHAS, 1494, mediado pelo Papa.",
        feedbackErro: "É TORDESILHAS. Versalhes e Paris são bem posteriores.",
      },
      {
        id: "av2",
        pergunta: "Qual foi a principal MOTIVAÇÃO das Grandes Navegações portuguesas?",
        opcoes: [
          { id: "a", texto: "Fazer turismo.", correta: false },
          { id: "b", texto: "Buscar rota marítima para as especiarias asiáticas.", correta: true },
          { id: "c", texto: "Refugiar-se de guerras internas.", correta: false },
        ],
        feedbackAcerto: "Correto. ESPECIARIAS + rota alternativa (Constantinopla bloqueada).",
        feedbackErro: "É a busca de ESPECIARIAS por rota marítima.",
      },
      {
        id: "av3",
        pergunta: "Qual foi a grande INOVAÇÃO NÁUTICA portuguesa das navegações?",
        opcoes: [
          { id: "a", texto: "Caravela com velas latinas.", correta: true },
          { id: "b", texto: "Vapor a carvão.", correta: false },
          { id: "c", texto: "Submarino.", correta: false },
        ],
        feedbackAcerto: "Correto. CARAVELA — ágil, contra o vento.",
        feedbackErro: "É a CARAVELA. Vapor e submarino vieram séculos depois.",
      },
    ],
    selo: {
      nome: "Astrolábio dos Oceanos",
      subtitulo: "Engrenagem 5 da Bússola",
      emoji: "🧭",
      cor: "from-cyan-500 to-slate-900",
      fotoUrl: imgAstrolabio,
    },
    falaFinal:
      "Engrenagem 5 destravada. Você agora entende como caravelas e astrolábios reconfiguraram o mapa do mundo.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Astrolábio dos Oceanos" },
};
