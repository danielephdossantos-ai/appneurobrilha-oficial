import type { AulaGeoV1 } from "../../types";

/**
 * Geografia · 6º Ano · Unidade 2 · Aula 02
 * "Escala, Legenda e Projeções Cartográficas" — EF06GE03, EF06GE04
 */
export const aula02: AulaGeoV1 = {
  slug: "aula-02-escala-e-projecoes",
  titulo: "Escala, Legenda e Projeções",
  iconeTrilha: "🗺️",
  bncc: ["EF06GE03", "EF06GE04"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe: um mapa nunca é o mundo real.",
    mapaUrl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800",
    imagemDestaqueUrl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800",
    aurora: "Explorador, todo mapa é uma REDUÇÃO do mundo. A ESCALA diz quanto foi reduzido, a LEGENDA explica os símbolos, e a PROJEÇÃO mostra como um planeta redondo virou plano no papel.",
    falaFinal: "3 ferramentas do cartógrafo. Bora dominar.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Explorador, todo mapa é uma REDUÇÃO do mundo. A ESCALA diz quanto foi reduzido, a LEGENDA explica os símbolos, e a PROJEÇÃO mostra como um planeta redondo virou plano no papel.",
    pergunta: "Por que todo mapa TEM que ter escala e legenda?",
    opcoes: [
      { id: "certo", titulo: "Pra ENTENDER o mapa", subtitulo: "distâncias e símbolos reais", emoji: "✅", cor: "from-emerald-400 to-green-600" },
      { id: "errado", titulo: "Pra ficar BONITO", subtitulo: "enfeite do papel", emoji: "❌", cor: "from-slate-400 to-gray-600" },
    ],
    respostaCerta: "certo",
    feedbackAcerto: "Isso! Sem escala e legenda, o mapa é um desenho sem informação.",
    feedbackErro: "Enfeite não. Escala e legenda são o que fazem o mapa FUNCIONAR.",
    falaFinal: "Mapa = ferramenta, não decoração. Bora.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras-chave desta aula.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      { id: "escala", capa: "1. Escala", emoji: "📏", cor: "from-sky-500 to-blue-700", conteudo: "ESCALA é a relação entre o mapa e o mundo real. Ex.: 1:100.000 = 1 cm no mapa vale 100.000 cm (1 km) no chão.", exemplo: "Ex.: mapa de cidade usa escala pequena, mapa de país usa escala grande." },
      { id: "legenda", capa: "2. Legenda", emoji: "🔑", cor: "from-amber-500 to-orange-700", conteudo: "LEGENDA é o quadro que explica o que cada COR e SÍMBOLO significa no mapa.", exemplo: "Ex.: azul = rio, verde = floresta, ✈️ = aeroporto." },
      { id: "projecao", capa: "3. Projeção", emoji: "🌐", cor: "from-purple-500 to-fuchsia-700", conteudo: "PROJEÇÃO é o jeito de transformar o globo (redondo) em mapa (plano). Toda projeção deforma algo.", exemplo: "Ex.: Mercator deforma tamanho; Peters preserva área." },
      { id: "rosa", capa: "4. Rosa dos ventos", emoji: "🧭", cor: "from-emerald-500 to-green-700", conteudo: "ROSA DOS VENTOS mostra os pontos cardeais (N, S, L, O) e colaterais (NE, NO, SE, SO). Orienta o leitor.", exemplo: "Ex.: sem ela, não sei pra onde é o norte no mapa." }
    ],
    falaFinal: "4 chaves: escala, legenda, projeção, rosa dos ventos.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada elemento do mapa e ouça.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=800",
    pontos: [
      { id: "titulo", x: 50, y: 12, emoji: "📌", cor: "from-red-500 to-orange-600", titulo: "TÍTULO do mapa", texto: "Diz do que o mapa fala. Todo mapa começa por aqui." },
      { id: "escala", x: 20, y: 85, emoji: "📏", cor: "from-sky-500 to-blue-700", titulo: "ESCALA", texto: "Mostra quanto o mundo real foi reduzido no papel." },
      { id: "legenda", x: 80, y: 60, emoji: "🔑", cor: "from-amber-500 to-orange-600", titulo: "LEGENDA", texto: "Explica o que cada cor e símbolo significa." },
      { id: "rosa", x: 85, y: 15, emoji: "🧭", cor: "from-emerald-500 to-green-700", titulo: "ROSA DOS VENTOS", texto: "Mostra pra onde é o Norte. Orienta você." }
    ],
    falaFinal: "4 elementos que todo mapa profissional TEM.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Quem mostra o que cada cor significa?", cards: [{ id: "le", emoji: "🔑", titulo: "Legenda", cor: "from-amber-500 to-orange-600" }, { id: "es", emoji: "📏", titulo: "Escala", cor: "from-sky-500 to-blue-700" }, { id: "ro", emoji: "🧭", titulo: "Rosa", cor: "from-emerald-500 to-green-700" }], correta: "le", feedbackAcerto: "Isso! LEGENDA explica cores e símbolos.", feedbackErro: "Escala mede. Rosa orienta. LEGENDA explica símbolos." },
      { id: "q2", pergunta: "Quem mostra quanto o mapa foi reduzido?", cards: [{ id: "es", emoji: "📏", titulo: "Escala", cor: "from-sky-500 to-blue-700" }, { id: "le", emoji: "🔑", titulo: "Legenda", cor: "from-amber-500 to-orange-600" }, { id: "ti", emoji: "📌", titulo: "Título", cor: "from-red-500 to-orange-600" }], correta: "es", feedbackAcerto: "Perfeito! ESCALA = quanto reduziu.", feedbackErro: "Reduzir o mundo real = ESCALA." },
      { id: "q3", pergunta: "Toda projeção do globo em mapa...", cards: [{ id: "de", emoji: "🌐", titulo: "Deforma algo", cor: "from-purple-500 to-fuchsia-700" }, { id: "pe", emoji: "✨", titulo: "É perfeita", cor: "from-amber-500 to-yellow-600" }, { id: "ig", emoji: "📏", titulo: "É igual sempre", cor: "from-sky-500 to-blue-700" }], correta: "de", feedbackAcerto: "Isso! Redondo virando plano SEMPRE deforma algo.", feedbackErro: "Toda projeção DEFORMA algo (tamanho ou forma)." }
    ],
    falaFinal: "Radar afiado. Cartografia decodificada.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Vamos aplicar a LEGENDA no Brasil! Toque nos 4 estados que fazem FRONTEIRA com o oceano na região Norte/Nordeste extrema, formando o litoral do Equador.",
    instrucao: "Toque em AP, PA, MA e CE (litoral próximo ao Equador)",
    missao: { tipo: "selecionar", siglas: ["AP", "PA", "MA", "CE"], pergunta: "Toque nos 4 estados do litoral próximo ao Equador" },
    falaFinal: "4 estados marcados. Você leu a legenda geográfica do Brasil!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos organizar da menor pra maior escala de detalhe.",
    instrucao: "Toque na ordem correta",
    pergunta: "Ordem do maior detalhe (mais zoom) pro menor:",
    paradas: [
      { id: "rua", emoji: "🏠", rotulo: "1. Mapa de rua", descricao: "1:1.000 — mostra casas e esquinas." },
      { id: "bairro", emoji: "🏘️", rotulo: "2. Mapa de bairro", descricao: "1:10.000 — mostra ruas e praças." },
      { id: "cidade", emoji: "🏙️", rotulo: "3. Mapa de cidade", descricao: "1:100.000 — mostra bairros." },
      { id: "pais", emoji: "🇧🇷", rotulo: "4. Mapa do país", descricao: "1:10.000.000 — mostra estados." }
    ],
    ordemCerta: ["rua", "bairro", "cidade", "pais"],
    feedbackAcerto: "Ordem certa! Quanto menor o número, mais zoom.",
    feedbackErro: "Comece pelo mais detalhado (rua) e vá afastando até o país.",
    falaFinal: "4 níveis de escala. Do zoom máximo ao país inteiro.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Aurora fica quieta. Leia e marque as palavras-chave.",
    tituloLivro: "🌍 Atlas do Mestre do Planeta",
    subtitulo: "Página 2b — Escala e Legenda",
    paragrafos: [
      { id: "p1", texto: "ESCALA é a relação entre o mapa e o mundo real. 1:100.000 quer dizer que 1 cm no mapa = 1 km no chão.", chaves: ["escala", "relação"] },
      { id: "p2", texto: "LEGENDA explica cores e símbolos. Sem ela, o mapa não pode ser lido.", chaves: ["legenda", "símbolos"] },
      { id: "p3", texto: "PROJEÇÃO é como o globo redondo vira plano. Mercator amplia países do norte; Peters preserva áreas.", chaves: ["projeção", "mercator", "peters"] },
      { id: "p4", texto: "ROSA DOS VENTOS mostra os pontos cardeais e orienta o leitor.", chaves: ["rosa", "cardeais"] }
    ],
    falaFinal: "Leu tudo? Bora ao minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo rápido! Qual elemento do mapa é esse?",
    instrucao: "⏱️ Escala, Legenda, Projeção ou Rosa?",
    duracaoSegundos: 12,
    pecas: [
      { id: "es", emoji: "📏", rotulo: "Escala" },
      { id: "le", emoji: "🔑", rotulo: "Legenda" },
      { id: "pr", emoji: "🌐", rotulo: "Projeção" },
      { id: "ro", emoji: "🧭", rotulo: "Rosa" }
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "1 cm = 1 km", emoji: "📐", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Redução do real", emoji: "📏", cor: "from-emerald-400 to-green-600" }, contexto: "Mostra a proporção do papel pro mundo. É?", pecaCertaId: "es", feedbackAcerto: "Isso! Proporção = ESCALA.", feedbackErro: "Proporção real/papel = ESCALA." },
      { id: "r2", municipioA: { nome: "Azul = rio", emoji: "🌊", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Verde = floresta", emoji: "🌳", cor: "from-emerald-400 to-green-600" }, contexto: "Cores explicando o mapa. É?", pecaCertaId: "le", feedbackAcerto: "Perfeito! Explica cores = LEGENDA.", feedbackErro: "Explicar cores = LEGENDA." },
      { id: "r3", municipioA: { nome: "Globo virou plano", emoji: "🌐", cor: "from-purple-400 to-fuchsia-600" }, municipioB: { nome: "Mercator", emoji: "🗺️", cor: "from-amber-400 to-orange-600" }, contexto: "Redondo achatado no papel. É?", pecaCertaId: "pr", feedbackAcerto: "Isso! Redondo→plano = PROJEÇÃO.", feedbackErro: "Redondo virando plano = PROJEÇÃO." },
      { id: "r4", municipioA: { nome: "Aponta o Norte", emoji: "⬆️", cor: "from-red-400 to-orange-600" }, municipioB: { nome: "N, S, L, O", emoji: "🧭", cor: "from-emerald-400 to-green-600" }, contexto: "Orienta pra onde é cada direção. É?", pecaCertaId: "ro", feedbackAcerto: "Isso! Direções = ROSA DOS VENTOS.", feedbackErro: "Pontos cardeais = ROSA DOS VENTOS." },
      { id: "r5", municipioA: { nome: "1:10.000", emoji: "🔢", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Proporção", emoji: "📏", cor: "from-purple-400 to-indigo-600" }, contexto: "Número que reduz o real. É?", pecaCertaId: "es", feedbackAcerto: "Isso! 1:10.000 = ESCALA.", feedbackErro: "Número de redução = ESCALA." },
      { id: "r6", municipioA: { nome: "Peters preserva área", emoji: "🌎", cor: "from-emerald-400 to-teal-600" }, municipioB: { nome: "Deforma algo", emoji: "🌐", cor: "from-purple-400 to-fuchsia-600" }, contexto: "Tipo de representação do globo. É?", pecaCertaId: "pr", feedbackAcerto: "Isso! Peters = PROJEÇÃO.", feedbackErro: "Peters, Mercator = PROJEÇÕES." }
    ],
    falaFinal: "6 elementos identificados! Cartógrafo profissional.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Uso do mapa: entender é mais importante que enfeitar.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "info", rotulo: "Informação útil (80%)", emoji: "🔑", percentual: 80, cor: "#0ea5e9", descricao: "Legenda + escala + rosa dos ventos = o que faz o mapa FUNCIONAR de verdade.", exemplos: ["🔑 Legenda", "📏 Escala", "🧭 Rosa"] },
      { id: "visual", rotulo: "Visual (20%)", emoji: "🎨", percentual: 20, cor: "#f59e0b", descricao: "Cores e desenho ajudam, mas sem legenda e escala o mapa não serve.", exemplos: ["🎨 Cores", "🖼️ Layout"] }
    ],
    falaFinal: "80% do mapa é informação. Sem legenda e escala, não serve.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia " + "Cartógrafo Mestre" + ".",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Escala 1:100.000 significa que 1 cm no mapa vale...", opcoes: [{ id: "a", texto: "100 metros", correta: false }, { id: "b", texto: "1 quilômetro", correta: true }, { id: "c", texto: "10 metros", correta: false }], feedbackAcerto: "Isso! 100.000 cm = 1 km.", feedbackErro: "100.000 centímetros = 1.000 metros = 1 KM." },
      { id: "av2", pergunta: "O que explica cores e símbolos do mapa?", opcoes: [{ id: "a", texto: "Escala", correta: false }, { id: "b", texto: "Legenda", correta: true }, { id: "c", texto: "Título", correta: false }], feedbackAcerto: "Perfeito! LEGENDA explica símbolos.", feedbackErro: "Cores e símbolos = LEGENDA." },
      { id: "av3", pergunta: "Toda projeção cartográfica...", opcoes: [{ id: "a", texto: "É perfeita", correta: false }, { id: "b", texto: "Deforma tamanho ou forma", correta: true }, { id: "c", texto: "Só serve pra decorar", correta: false }], feedbackAcerto: "Isso! Redondo→plano sempre deforma algo.", feedbackErro: "Toda projeção DEFORMA algo. Não existe projeção perfeita." }
    ],
    selo: {
      nome: "Cartógrafo Mestre",
      subtitulo: "Insígnia do Mestre do Planeta",
      emoji: "🗺️",
      cor: "from-amber-400 to-orange-600",
    },
    falaFinal: "Insígnia conquistada!",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Cartógrafo Mestre" },
};
