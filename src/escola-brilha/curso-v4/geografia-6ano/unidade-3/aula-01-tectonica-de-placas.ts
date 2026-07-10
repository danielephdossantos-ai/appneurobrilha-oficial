import type { AulaGeoV1 } from "../../types";

/**
 * Geografia · 6º Ano · Unidade 3 · Aula 01
 * "Estrutura da Terra e Tectônica" — EF06GE05, EF06GE06
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-tectonica-de-placas",
  titulo: "Estrutura da Terra e Tectônica",
  iconeTrilha: "🌋",
  bncc: ["EF06GE05", "EF06GE06"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe: o planeta em ação.",
    mapaUrl: "https://images.unsplash.com/photo-1543039625-14cbd3802e7d?w=800",
    imagemDestaqueUrl: "https://images.unsplash.com/photo-1543039625-14cbd3802e7d?w=800",
    aurora: "Explorador, debaixo dos nossos pés existe um MUNDO em movimento! A Terra tem 3 CAMADAS: CROSTA (fina, onde vivemos), MANTO (magma pastoso) e NÚCLEO (superaquecido). E a crosta é dividida em PLACAS que se movem.",
    falaFinal: "Um planeta vivo por dentro. Bora explorar.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Explorador, debaixo dos nossos pés existe um MUNDO em movimento! A Terra tem 3 CAMADAS: CROSTA (fina, onde vivemos), MANTO (magma pastoso) e NÚCLEO (superaquecido). E a crosta é dividida em PLACAS que se movem.",
    pergunta: "Por que o Brasil quase não tem terremotos fortes?",
    opcoes: [
      { id: "centro", titulo: "Fica no CENTRO de placa", subtitulo: "longe das bordas", emoji: "✅", cor: "from-emerald-400 to-green-600" },
      { id: "errado", titulo: "Porque tem SOLO MACIO", subtitulo: "não tem como tremer", emoji: "❌", cor: "from-slate-400 to-gray-600" },
    ],
    respostaCerta: "centro",
    feedbackAcerto: "Isso! Brasil fica no centro da Placa Sul-americana. Longe das fendas.",
    feedbackErro: "Solo macio não protege de terremotos. Estar no CENTRO da placa protege.",
    falaFinal: "Centro da placa = estabilidade. Bora entender.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras-chave desta unidade.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      { id: "crosta", capa: "1. Crosta", emoji: "🌋", cor: "from-red-500 to-orange-600", conteudo: "CROSTA é a camada FINA e sólida onde vivemos. Como a casca de uma maçã. Tem só 30-70 km.", exemplo: "Ex.: montanhas, oceanos, continentes." },
      { id: "manto", capa: "2. Manto", emoji: "🔥", cor: "from-orange-500 to-amber-600", conteudo: "MANTO é a camada intermediária, cheia de MAGMA — rocha pastosa e quente. Tem 2.900 km.", exemplo: "Ex.: quando um vulcão explode, sai magma do manto." },
      { id: "nucleo", capa: "3. Núcleo", emoji: "☀️", cor: "from-yellow-500 to-red-700", conteudo: "NÚCLEO é o centro superaquecido. Feito de ferro e níquel derretidos. Chega a 6.000°C.", exemplo: "Ex.: mais quente que a superfície do Sol!" },
      { id: "placas", capa: "4. Placas tectônicas", emoji: "🧩", cor: "from-purple-500 to-fuchsia-700", conteudo: "A crosta é quebrada em BLOCOS gigantes: as PLACAS TECTÔNICAS. Elas flutuam sobre o manto e se movem alguns cm por ano.", exemplo: "Ex.: Brasil está na Placa Sul-americana." }
    ],
    falaFinal: "3 camadas + placas em movimento. Terra viva.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada ponto e ouça.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800",
    pontos: [
      { id: "crosta", x: 20, y: 20, emoji: "🌍", cor: "from-emerald-500 to-green-700", titulo: "CROSTA — a casca", texto: "Fina camada sólida. Aqui estão os continentes, oceanos, cidades. Você está sobre ela agora!" },
      { id: "manto", x: 50, y: 50, emoji: "🔥", cor: "from-orange-500 to-red-600", titulo: "MANTO — o rio de magma", texto: "Rocha pastosa e quente. Move as placas por convecção (calor sobe, frio desce)." },
      { id: "nucleo", x: 80, y: 80, emoji: "☀️", cor: "from-yellow-400 to-red-700", titulo: "NÚCLEO — o coração", texto: "Ferro derretido a 6.000°C. Gera o campo magnético que protege da radiação solar." },
      { id: "borda", x: 30, y: 70, emoji: "⚡", cor: "from-purple-500 to-fuchsia-700", titulo: "BORDA DE PLACA", texto: "Onde placas se chocam. Aqui nascem vulcões, terremotos e cadeias de montanhas como os Andes." }
    ],
    falaFinal: "Crosta, manto, núcleo e bordas. Terra é dinâmica.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Qual camada é a mais QUENTE?", cards: [{ id: "nu", emoji: "☀️", titulo: "Núcleo", cor: "from-yellow-500 to-red-700" }, { id: "cr", emoji: "🌍", titulo: "Crosta", cor: "from-emerald-500 to-green-700" }, { id: "ma", emoji: "🔥", titulo: "Manto", cor: "from-orange-500 to-amber-600" }], correta: "nu", feedbackAcerto: "Isso! Núcleo = 6.000°C, mais quente do planeta.", feedbackErro: "Crosta é fria em cima. Manto é morno. NÚCLEO é o mais quente." },
      { id: "q2", pergunta: "Onde vivemos?", cards: [{ id: "cr", emoji: "🌍", titulo: "Crosta", cor: "from-emerald-500 to-green-700" }, { id: "ma", emoji: "🔥", titulo: "Manto", cor: "from-orange-500 to-amber-600" }, { id: "nu", emoji: "☀️", titulo: "Núcleo", cor: "from-yellow-500 to-red-700" }], correta: "cr", feedbackAcerto: "Perfeito! Vivemos sobre a CROSTA.", feedbackErro: "Manto e núcleo são internos. Vivemos sobre a CROSTA." },
      { id: "q3", pergunta: "Terremotos acontecem principalmente...", cards: [{ id: "bo", emoji: "⚡", titulo: "Nas bordas das placas", cor: "from-purple-500 to-fuchsia-700" }, { id: "de", emoji: "🏜️", titulo: "No deserto", cor: "from-amber-500 to-orange-700" }, { id: "oc", emoji: "🌊", titulo: "No oceano só", cor: "from-sky-500 to-blue-700" }], correta: "bo", feedbackAcerto: "Isso! Choque de placas = terremotos.", feedbackErro: "Terremotos = bordas de placas se chocando." }
    ],
    falaFinal: "Radar afiado. Interior da Terra decodificado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "O Brasil INTEIRO fica na Placa Sul-americana, longe das bordas. Por isso quase não temos terremotos. Ilumine cada estado!",
    instrucao: "Toque em TODOS os 27 estados + DF (o Brasil todo é uma placa estável)",
    missao: { tipo: "todos" },
    falaFinal: "27 estados iluminados. Brasil é uma placa inteira e estável!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos organizar na ordem certa.",
    instrucao: "Toque na ordem correta",
    pergunta: "Ordem das camadas, do exterior pro centro:",
    paradas: [
      { id: "crosta", emoji: "🌍", rotulo: "1. Crosta", descricao: "Camada fina onde vivemos." },
      { id: "mantosup", emoji: "🔥", rotulo: "2. Manto superior", descricao: "Rocha pastosa que move as placas." },
      { id: "mantoinf", emoji: "🌋", rotulo: "3. Manto inferior", descricao: "Mais denso e quente." },
      { id: "nucext", emoji: "🔴", rotulo: "4. Núcleo externo", descricao: "Ferro líquido em movimento." },
      { id: "nucint", emoji: "☀️", rotulo: "5. Núcleo interno", descricao: "Ferro sólido a 6.000°C." }
    ],
    ordemCerta: ["crosta", "mantosup", "mantoinf", "nucext", "nucint"],
    feedbackAcerto: "Ordem certa! Do exterior pro coração da Terra.",
    feedbackErro: "Comece pela crosta (fora) e desça até o núcleo (centro).",
    falaFinal: "5 camadas mapeadas. Do chão ao coração.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Aurora fica quieta. Leia e marque as palavras-chave.",
    tituloLivro: "🌍 Atlas do Mestre do Planeta",
    subtitulo: "Página 3 — Estrutura da Terra",
    paragrafos: [
      { id: "p1", texto: "A Terra tem 3 CAMADAS principais: CROSTA (fina), MANTO (pastoso) e NÚCLEO (superaquecido).", chaves: ["crosta", "manto", "núcleo"] },
      { id: "p2", texto: "A CROSTA é dividida em PLACAS TECTÔNICAS que se movem alguns cm por ano.", chaves: ["crosta", "placas", "tectônicas"] },
      { id: "p3", texto: "Nas BORDAS das placas acontecem TERREMOTOS, VULCÕES e nascem CADEIAS de montanhas.", chaves: ["bordas", "terremotos", "vulcões"] },
      { id: "p4", texto: "O Brasil fica no CENTRO da Placa Sul-americana. Por isso quase não temos terremotos fortes.", chaves: ["centro", "placa", "sul-americana"] }
    ],
    falaFinal: "Leu tudo? Bora ao minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo rápido! Escolha a peça certa.",
    instrucao: "⏱️ Qual camada é essa?",
    duracaoSegundos: 12,
    pecas: [
      { id: "cr", emoji: "🌍", rotulo: "Crosta" },
      { id: "ma", emoji: "🔥", rotulo: "Manto" },
      { id: "nu", emoji: "☀️", rotulo: "Núcleo" }
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Cidade em cima", emoji: "🏙️", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Onde vivo", emoji: "🏠", cor: "from-emerald-400 to-green-600" }, contexto: "Você está pisando nela agora. Que camada é?", pecaCertaId: "cr", feedbackAcerto: "Isso! Vivemos na CROSTA.", feedbackErro: "Onde vivemos = CROSTA." },
      { id: "r2", municipioA: { nome: "Magma quente", emoji: "🌋", cor: "from-red-400 to-orange-600" }, municipioB: { nome: "Rocha pastosa", emoji: "🔥", cor: "from-amber-400 to-yellow-600" }, contexto: "Rocha derretida que sai dos vulcões. Vem de qual camada?", pecaCertaId: "ma", feedbackAcerto: "Perfeito! Magma sai do MANTO.", feedbackErro: "Magma pastoso = MANTO." },
      { id: "r3", municipioA: { nome: "Ferro derretido", emoji: "☀️", cor: "from-yellow-400 to-red-600" }, municipioB: { nome: "6.000°C", emoji: "🔥", cor: "from-red-400 to-orange-600" }, contexto: "Centro do planeta, mais quente que o Sol. Que camada?", pecaCertaId: "nu", feedbackAcerto: "Isso! NÚCLEO = ferro a 6.000°C.", feedbackErro: "Ferro superaquecido = NÚCLEO." },
      { id: "r4", municipioA: { nome: "Continente", emoji: "🌎", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Placa sólida", emoji: "🧩", cor: "from-purple-400 to-indigo-600" }, contexto: "Grande bloco onde ficam os países. Que camada?", pecaCertaId: "cr", feedbackAcerto: "Isso! Continentes ficam na CROSTA.", feedbackErro: "Continentes = parte da CROSTA." },
      { id: "r5", municipioA: { nome: "Campo magnético", emoji: "🧲", cor: "from-blue-400 to-indigo-600" }, municipioB: { nome: "Protege a Terra", emoji: "🛡️", cor: "from-purple-400 to-fuchsia-600" }, contexto: "Escudo invisível que protege da radiação solar. Vem de qual camada?", pecaCertaId: "nu", feedbackAcerto: "Isso! NÚCLEO gera o campo magnético.", feedbackErro: "Campo magnético = NÚCLEO de ferro em movimento." },
      { id: "r6", municipioA: { nome: "Vulcão explodindo", emoji: "🌋", cor: "from-red-500 to-orange-700" }, municipioB: { nome: "Lava escorrendo", emoji: "🔥", cor: "from-amber-500 to-red-600" }, contexto: "Vulcão joga lava pra fora. De onde vem?", pecaCertaId: "ma", feedbackAcerto: "Isso! Lava vem do MANTO.", feedbackErro: "Lava/magma = do MANTO." }
    ],
    falaFinal: "6 camadas identificadas! Geólogo raiz.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Onde ocorrem os TERREMOTOS mundiais:",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "bordas", rotulo: "Bordas de placas (90%)", emoji: "⚡", percentual: 90, cor: "#dc2626", descricao: "A grande maioria dos terremotos acontece onde as placas se chocam. Japão, Chile, Califórnia.", exemplos: ["🇯🇵 Japão", "🇨🇱 Chile", "🇺🇸 Califórnia"] },
      { id: "centro", rotulo: "Centro de placas (10%)", emoji: "🧩", percentual: 10, cor: "#10b981", descricao: "No centro das placas os terremotos são raros e fracos. Brasil está aqui.", exemplos: ["🇧🇷 Brasil", "🇦🇺 Interior AU", "🇷🇺 Sibéria"] }
    ],
    falaFinal: "90% dos terremotos nas bordas. Brasil está seguro no centro.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia " + "Geólogo Explorador" + ".",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Qual é a camada mais QUENTE da Terra?", opcoes: [{ id: "a", texto: "Crosta", correta: false }, { id: "b", texto: "Núcleo", correta: true }, { id: "c", texto: "Atmosfera", correta: false }], feedbackAcerto: "Isso! Núcleo = 6.000°C.", feedbackErro: "Crosta é fria. Núcleo = superaquecido." },
      { id: "av2", pergunta: "Onde acontecem MAIS terremotos?", opcoes: [{ id: "a", texto: "Nas bordas das placas", correta: true }, { id: "b", texto: "No meio do oceano só", correta: false }, { id: "c", texto: "Nos desertos", correta: false }], feedbackAcerto: "Perfeito! Bordas = choque de placas = terremotos.", feedbackErro: "Choque de placas = BORDAS." },
      { id: "av3", pergunta: "Por que o Brasil quase não tem terremotos?", opcoes: [{ id: "a", texto: "Solo macio", correta: false }, { id: "b", texto: "Fica no centro de uma placa", correta: true }, { id: "c", texto: "Só tem floresta", correta: false }], feedbackAcerto: "Isso! Centro da Placa Sul-americana = estabilidade.", feedbackErro: "Estar no CENTRO da placa protege." }
    ],
    selo: {
      nome: "Geólogo Explorador",
      subtitulo: "Insígnia do Mestre do Planeta",
      emoji: "⛰️",
      cor: "from-sky-400 to-blue-600",
    },
    falaFinal: "Insígnia conquistada!",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Geólogo Explorador" },
};
