import type { AulaGeoV1 } from "../../types";

/**
 * Geografia · 6º Ano · Unidade 7 · Aula 01
 * "O Mestre do Planeta" — EF06GE01, EF06GE03, EF06GE04, EF06GE05, EF06GE06
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-mestre-do-planeta",
  titulo: "O Mestre do Planeta",
  iconeTrilha: "🏆",
  bncc: ["EF06GE01", "EF06GE03", "EF06GE04", "EF06GE05", "EF06GE06"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe: o planeta em ação.",
    mapaUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    imagemDestaqueUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    aurora: "Explorador, você DESVENDOU a mecânica da nossa nave espacial chamada Terra! Espaço, coordenadas, tectônica, relevo, clima, biomas — tudo conectado. Agora vem o SELO SUPREMO.",
    falaFinal: "Mestre do Planeta chegando. Bora consolidar.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Explorador, você DESVENDOU a mecânica da nossa nave espacial chamada Terra! Espaço, coordenadas, tectônica, relevo, clima, biomas — tudo conectado. Agora vem o SELO SUPREMO.",
    pergunta: "Como a Geografia ajuda a humanidade?",
    opcoes: [
      { id: "espaco", titulo: "ESPAÇO ORGANIZADO com respeito", subtitulo: "sustentabilidade e planejamento", emoji: "✅", cor: "from-emerald-400 to-green-600" },
      { id: "errado", titulo: "ESVAZIAR os oceanos", subtitulo: "técnicas malucas", emoji: "❌", cor: "from-slate-400 to-gray-600" },
    ],
    respostaCerta: "espaco",
    feedbackAcerto: "Isso! Geografia = ocupar o espaço com CONSCIÊNCIA e planejamento.",
    feedbackErro: "Esvaziar oceanos não é geografia. Geografia = organizar o espaço com respeito.",
    falaFinal: "Geografia salva o planeta. Bora fechar.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras-chave desta unidade.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      { id: "espaco", capa: "1. Terra no espaço", emoji: "🌍", cor: "from-indigo-500 to-purple-700", conteudo: "Aprendemos que a Terra faz ROTAÇÃO (24h) e TRANSLAÇÃO (365 dias). O eixo INCLINADO cria as estações.", exemplo: "Ex.: dia/noite, verão/inverno." },
      { id: "coord", capa: "2. Coordenadas", emoji: "🧭", cor: "from-sky-500 to-blue-700", conteudo: "PARALELOS (horizontais) + MERIDIANOS (verticais) formam a rede. Latitude + longitude = coordenada exata.", exemplo: "Ex.: GPS usa esse sistema." },
      { id: "relevo", capa: "3. Estrutura e relevo", emoji: "🌋", cor: "from-red-500 to-orange-600", conteudo: "Terra tem 3 CAMADAS. PLACAS TECTÔNICAS se movem. Agentes INTERNOS constroem, EXTERNOS desgastam.", exemplo: "Ex.: Andes = internos. Grand Canyon = externos." },
      { id: "bio", capa: "4. Clima e biomas", emoji: "🌿", cor: "from-emerald-500 to-green-700", conteudo: "TEMPO muda em horas. CLIMA é padrão de 30+ anos. Cada zona climática tem um BIOMA único.", exemplo: "Ex.: Amazônia = equatorial + floresta tropical." }
    ],
    falaFinal: "6 unidades. 4 chaves. 1 planeta compreendido.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada ponto e ouça.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    pontos: [
      { id: "orbita", x: 30, y: 30, emoji: "🌍", cor: "from-indigo-500 to-purple-700", titulo: "TERRA em ÓRBITA", texto: "Rotação + translação = dias, noites e estações. Movimento eterno." },
      { id: "rede", x: 70, y: 30, emoji: "🧭", cor: "from-sky-500 to-blue-700", titulo: "REDE GEOGRÁFICA", texto: "Latitudes + longitudes localizam qualquer ponto. É o mapa universal." },
      { id: "placas", x: 30, y: 70, emoji: "🌋", cor: "from-red-500 to-orange-600", titulo: "PLACAS TECTÔNICAS", texto: "Movimento das placas cria montanhas, vulcões e terremotos. Terra viva." },
      { id: "biomas", x: 70, y: 70, emoji: "🌳", cor: "from-emerald-500 to-green-700", titulo: "BIOMAS DIVERSOS", texto: "Do Equador ao Polo, cada clima gera um bioma único. Vida em rede." }
    ],
    falaFinal: "4 grandes descobertas. Planeta desvendado.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Rotação dura...", cards: [{ id: "h", emoji: "⏰", titulo: "24 horas", cor: "from-sky-500 to-blue-700" }, { id: "d", emoji: "📅", titulo: "365 dias", cor: "from-emerald-500 to-green-700" }, { id: "m", emoji: "🕐", titulo: "1 minuto", cor: "from-amber-500 to-orange-700" }], correta: "h", feedbackAcerto: "Isso! 24h = dia e noite.", feedbackErro: "Rotação = 24h." },
      { id: "q2", pergunta: "Terremotos acontecem principalmente...", cards: [{ id: "b", emoji: "⚡", titulo: "Nas bordas de placas", cor: "from-purple-500 to-fuchsia-700" }, { id: "c", emoji: "🌾", titulo: "No cerrado", cor: "from-amber-500 to-yellow-600" }, { id: "o", emoji: "🌊", titulo: "Só no oceano", cor: "from-sky-500 to-blue-700" }], correta: "b", feedbackAcerto: "Perfeito! Bordas de placas.", feedbackErro: "Bordas de placas = terremotos." },
      { id: "q3", pergunta: "Amazônia tem clima...", cards: [{ id: "e", emoji: "🌴", titulo: "Equatorial", cor: "from-emerald-500 to-green-700" }, { id: "s", emoji: "🏜️", titulo: "Semiárido", cor: "from-amber-500 to-orange-700" }, { id: "p", emoji: "❄️", titulo: "Polar", cor: "from-sky-500 to-blue-700" }], correta: "e", feedbackAcerto: "Isso! Amazônia = EQUATORIAL.", feedbackErro: "Amazônia = EQUATORIAL úmido." }
    ],
    falaFinal: "Radar em alta. Você lembra tudo do 6º ano.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "MISSÃO FINAL do 6º ano: ilumine TODOS os 27 estados + DF. Do Amapá ao Rio Grande do Sul, você domina o planeta.",
    instrucao: "MISSÃO FINAL: acenda TODOS os 27 estados do Brasil. Você conhece o país inteiro!",
    missao: { tipo: "todos" },
    falaFinal: "27 estados iluminados! Você é Mestre do Planeta.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos organizar na ordem certa.",
    instrucao: "Toque na ordem correta",
    pergunta: "Ordem das 6 unidades do 6º ano:",
    paradas: [
      { id: "espaco", emoji: "🌍", rotulo: "1. Terra no espaço", descricao: "Rotação, translação, estações." },
      { id: "coord", emoji: "🧭", rotulo: "2. Coordenadas", descricao: "Paralelos, meridianos, GPS." },
      { id: "tecto", emoji: "🌋", rotulo: "3. Tectônica", descricao: "Camadas + placas." },
      { id: "relevo", emoji: "⛰️", rotulo: "4. Agentes do relevo", descricao: "Internos + externos." },
      { id: "clima", emoji: "⛅", rotulo: "5. Clima e tempo", descricao: "Atmosfera e padrões." },
      { id: "bio", emoji: "🌿", rotulo: "6. Biomas mundiais", descricao: "Vegetação e fauna." }
    ],
    ordemCerta: ["espaco", "coord", "tecto", "relevo", "clima", "bio"],
    feedbackAcerto: "Jornada completa! Você viveu cada unidade.",
    feedbackErro: "Comece pelo espaço, depois coordenadas, tectônica, relevo, clima, biomas.",
    falaFinal: "6 unidades, 1 mestre do planeta.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Aurora fica quieta. Leia e marque as palavras-chave.",
    tituloLivro: "🌍 Atlas do Mestre do Planeta",
    subtitulo: "Página FINAL — Manifesto do Mestre do Planeta",
    paragrafos: [
      { id: "p1", texto: "O MESTRE DO PLANETA entende a TERRA no espaço: rotação, translação, estações.", chaves: ["mestre", "terra", "estações"] },
      { id: "p2", texto: "Sabe LER MAPAS com latitudes, longitudes e coordenadas exatas.", chaves: ["mapas", "latitudes", "coordenadas"] },
      { id: "p3", texto: "Conhece a estrutura interna, o movimento das PLACAS e os agentes do relevo.", chaves: ["estrutura", "placas", "relevo"] },
      { id: "p4", texto: "Diferencia TEMPO de CLIMA e sabe que cada bioma tem uma fauna e flora únicas. Ele é EMBAIXADOR do planeta.", chaves: ["tempo", "clima", "embaixador"] }
    ],
    falaFinal: "Leu tudo? Bora pro minijogo final.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo rápido! Escolha a peça certa.",
    instrucao: "⏱️ De que unidade é isso?",
    duracaoSegundos: 12,
    pecas: [
      { id: "es", emoji: "🌍", rotulo: "Espaço" },
      { id: "co", emoji: "🧭", rotulo: "Coordenadas" },
      { id: "te", emoji: "🌋", rotulo: "Tectônica" },
      { id: "re", emoji: "⛰️", rotulo: "Relevo" },
      { id: "cl", emoji: "⛅", rotulo: "Clima" },
      { id: "bi", emoji: "🌿", rotulo: "Biomas" }
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Rotação", emoji: "🔄", cor: "from-indigo-400 to-purple-600" }, municipioB: { nome: "24 horas", emoji: "⏰", cor: "from-sky-400 to-blue-600" }, contexto: "24 horas girando. Que unidade?", pecaCertaId: "es", feedbackAcerto: "Isso! Rotação = ESPAÇO.", feedbackErro: "Rotação = unidade ESPAÇO." },
      { id: "r2", municipioA: { nome: "Latitude", emoji: "📐", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Norte-Sul", emoji: "🌐", cor: "from-purple-400 to-indigo-600" }, contexto: "Distância do Equador. Que unidade?", pecaCertaId: "co", feedbackAcerto: "Perfeito! Latitude = COORDENADAS.", feedbackErro: "Latitude = COORDENADAS." },
      { id: "r3", municipioA: { nome: "Vulcão", emoji: "🌋", cor: "from-red-400 to-orange-600" }, municipioB: { nome: "Magma sai", emoji: "🔥", cor: "from-amber-400 to-yellow-600" }, contexto: "Explosão de magma. Que unidade?", pecaCertaId: "te", feedbackAcerto: "Isso! Vulcão = TECTÔNICA.", feedbackErro: "Vulcão = TECTÔNICA." },
      { id: "r4", municipioA: { nome: "Cânion", emoji: "🏜️", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Erosão da água", emoji: "💧", cor: "from-sky-400 to-blue-600" }, contexto: "Rio esculpindo rocha. Que unidade?", pecaCertaId: "re", feedbackAcerto: "Isso! Cânion = RELEVO externo.", feedbackErro: "Cânion = agentes do RELEVO." },
      { id: "r5", municipioA: { nome: "Chuva agora", emoji: "🌧️", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Guarda-chuva", emoji: "☂️", cor: "from-purple-400 to-indigo-600" }, contexto: "Chove agora na cidade. Que unidade?", pecaCertaId: "cl", feedbackAcerto: "Isso! Chuva agora = CLIMA e tempo.", feedbackErro: "Chuva agora = CLIMA." },
      { id: "r6", municipioA: { nome: "Amazônia", emoji: "🌴", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Floresta", emoji: "🌳", cor: "from-blue-400 to-green-700" }, contexto: "Floresta tropical densa. Que unidade?", pecaCertaId: "bi", feedbackAcerto: "Isso! Amazônia = BIOMAS.", feedbackErro: "Amazônia = BIOMAS." }
    ],
    falaFinal: "6 unidades revisitadas! Você é lenda.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Sua jornada no 6º ano:",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "aprendi", rotulo: "Aprendi (100%)", emoji: "🎓", percentual: 100, cor: "#7c3aed", descricao: "Você dominou os 6 grandes temas: espaço, coordenadas, tectônica, relevo, clima e biomas.", exemplos: ["🌍 Espaço", "🧭 GPS", "🌋 Placas", "⛰️ Relevo", "⛅ Clima", "🌿 Biomas"] },
      { id: "faltou", rotulo: "A explorar (0%)", emoji: "🚀", percentual: 0, cor: "#94a3b8", descricao: "Nada faltou! Bora pro 7º ano.", exemplos: ["🎯 Missão cumprida"] }
    ],
    falaFinal: "100% da mecânica do planeta compreendida!",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia " + "Mestre Supremo do Planeta" + ".",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "A Rotação dura...", opcoes: [{ id: "a", texto: "365 dias", correta: false }, { id: "b", texto: "24 horas", correta: true }, { id: "c", texto: "1 hora", correta: false }], feedbackAcerto: "Isso! 24h.", feedbackErro: "Rotação = 24h." },
      { id: "av2", pergunta: "Terremotos acontecem principalmente...", opcoes: [{ id: "a", texto: "No deserto", correta: false }, { id: "b", texto: "Nas bordas de placas", correta: true }, { id: "c", texto: "Nas árvores", correta: false }], feedbackAcerto: "Perfeito! Bordas.", feedbackErro: "Bordas de placas = terremotos." },
      { id: "av3", pergunta: "Como a Geografia ajuda a humanidade?", opcoes: [{ id: "a", texto: "Esvaziando oceanos", correta: false }, { id: "b", texto: "Organizando o espaço com respeito e sustentabilidade", correta: true }, { id: "c", texto: "Fazendo chover", correta: false }], feedbackAcerto: "Isso! Geografia = ocupar o espaço com CONSCIÊNCIA.", feedbackErro: "Geografia = organizar o espaço com respeito." }
    ],
    selo: {
      nome: "Mestre Supremo do Planeta",
      subtitulo: "Insígnia do Mestre do Planeta",
      emoji: "🏆",
      cor: "from-sky-400 to-blue-600",
    },
    falaFinal: "Insígnia conquistada!",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Mestre Supremo do Planeta" },
};
