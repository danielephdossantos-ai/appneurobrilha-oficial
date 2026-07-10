import type { AulaGeoV1 } from "../../types";

/**
 * Geografia · 6º Ano · Unidade 2 · Aula 01
 * "Cartografia: Localização Global" — EF06GE01, EF06GE02
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-coordenadas-geograficas",
  titulo: "Cartografia: Localização Global",
  iconeTrilha: "🧭",
  bncc: ["EF06GE01", "EF06GE02"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe: o planeta em ação.",
    mapaUrl: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800",
    imagemDestaqueUrl: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800",
    aurora: "Explorador, como o GPS acha qualquer lugar no planeta? Ele usa LATITUDES (linhas horizontais) e LONGITUDES (linhas verticais). Juntas, formam a REDE GEOGRÁFICA — o endereço exato de tudo.",
    falaFinal: "Sem linhas, sem localização. Bora aprender.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Explorador, como o GPS acha qualquer lugar no planeta? Ele usa LATITUDES (linhas horizontais) e LONGITUDES (linhas verticais). Juntas, formam a REDE GEOGRÁFICA — o endereço exato de tudo.",
    pergunta: "Pra que servem as COORDENADAS GEOGRÁFICAS?",
    opcoes: [
      { id: "planejar", titulo: "PLANEJAR e LOCALIZAR", subtitulo: "achar qualquer ponto do planeta", emoji: "✅", cor: "from-emerald-400 to-green-600" },
      { id: "errado", titulo: "ENFEITAR mapas", subtitulo: "só pra ficar bonito", emoji: "❌", cor: "from-slate-400 to-gray-600" },
    ],
    respostaCerta: "planejar",
    feedbackAcerto: "Isso! Coordenadas localizam qualquer objeto no planeta pelo GPS.",
    feedbackErro: "Enfeite é uma coisa. LOCALIZAR é a função das coordenadas.",
    falaFinal: "Coordenadas = endereço planetário. Bora dominar.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras-chave desta unidade.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      { id: "paralelos", capa: "1. Paralelos", emoji: "➖", cor: "from-sky-500 to-blue-700", conteudo: "PARALELOS são linhas HORIZONTAIS ao redor do planeta. O principal é a LINHA DO EQUADOR, que divide Norte e Sul.", exemplo: "Ex.: Trópico de Câncer (Norte), Trópico de Capricórnio (Sul)." },
      { id: "meridianos", capa: "2. Meridianos", emoji: "|", cor: "from-amber-500 to-orange-700", conteudo: "MERIDIANOS são linhas VERTICAIS de polo a polo. O principal é o MERIDIANO DE GREENWICH, que divide Leste e Oeste.", exemplo: "Ex.: passa por Londres, Inglaterra." },
      { id: "latitude", capa: "3. Latitude", emoji: "🌐", cor: "from-purple-500 to-fuchsia-700", conteudo: "LATITUDE é a distância em GRAUS de qualquer ponto até a LINHA DO EQUADOR. Vai de 0° a 90° pro Norte ou Sul.", exemplo: "Ex.: Brasília fica a 15° de latitude Sul." },
      { id: "longitude", capa: "4. Longitude", emoji: "🧭", cor: "from-emerald-500 to-green-700", conteudo: "LONGITUDE é a distância em GRAUS até o MERIDIANO DE GREENWICH. Vai de 0° a 180° pro Leste ou Oeste.", exemplo: "Ex.: Brasília fica a 47° de longitude Oeste." }
    ],
    falaFinal: "4 chaves: paralelos, meridianos, latitude, longitude.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada ponto e ouça.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800",
    pontos: [
      { id: "equador", x: 50, y: 50, emoji: "🌎", cor: "from-red-500 to-orange-600", titulo: "LINHA DO EQUADOR (0°)", texto: "Divide o planeta em hemisférios NORTE e SUL. Passa pelo Amazonas!" },
      { id: "greenwich", x: 50, y: 30, emoji: "📍", cor: "from-sky-500 to-blue-700", titulo: "MERIDIANO DE GREENWICH (0°)", texto: "Divide o planeta em hemisférios LESTE e OESTE. Passa por Londres." },
      { id: "norte", x: 50, y: 15, emoji: "⬆️", cor: "from-purple-500 to-indigo-700", titulo: "HEMISFÉRIO NORTE", texto: "Do Equador pra cima. Europa, EUA, Ásia." },
      { id: "sul", x: 50, y: 85, emoji: "⬇️", cor: "from-emerald-500 to-green-700", titulo: "HEMISFÉRIO SUL", texto: "Do Equador pra baixo. Brasil, Argentina, Austrália." }
    ],
    falaFinal: "Equador + Greenwich = os 2 zeros que organizam o mundo.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Qual linha é HORIZONTAL e principal?", cards: [{ id: "eq", emoji: "🌎", titulo: "Equador", cor: "from-red-500 to-orange-600" }, { id: "gr", emoji: "📍", titulo: "Greenwich", cor: "from-sky-500 to-blue-700" }, { id: "tr", emoji: "🌴", titulo: "Trópico", cor: "from-amber-500 to-yellow-600" }], correta: "eq", feedbackAcerto: "Isso! Equador é o paralelo 0°.", feedbackErro: "Greenwich é vertical. Trópicos são outros paralelos. Principal = EQUADOR." },
      { id: "q2", pergunta: "Qual linha é VERTICAL e principal?", cards: [{ id: "gr", emoji: "📍", titulo: "Greenwich", cor: "from-sky-500 to-blue-700" }, { id: "eq", emoji: "🌎", titulo: "Equador", cor: "from-red-500 to-orange-600" }, { id: "pol", emoji: "❄️", titulo: "Polo", cor: "from-slate-500 to-gray-700" }], correta: "gr", feedbackAcerto: "Perfeito! Greenwich = meridiano 0°.", feedbackErro: "Equador é horizontal. Principal vertical = GREENWICH." },
      { id: "q3", pergunta: "Latitude mede distância até...", cards: [{ id: "eq", emoji: "🌎", titulo: "O Equador", cor: "from-red-500 to-orange-600" }, { id: "gr", emoji: "📍", titulo: "Greenwich", cor: "from-sky-500 to-blue-700" }, { id: "sol", emoji: "☀️", titulo: "O Sol", cor: "from-amber-500 to-yellow-600" }], correta: "eq", feedbackAcerto: "Isso! Latitude = distância do EQUADOR.", feedbackErro: "Latitude sempre parte da LINHA DO EQUADOR." }
    ],
    falaFinal: "Radar afiado. Rede geográfica dominada.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "A LINHA DO EQUADOR corta o Brasil pelo Norte! Passa por 5 estados do país. Vamos localizar.",
    instrucao: "Toque nos 5 estados atravessados pela LINHA DO EQUADOR",
    missao: { tipo: "selecionar", siglas: ["AM", "PA", "AP", "RR", "MA"], pergunta: "Toque nos 5 estados atravessados pela LINHA DO EQUADOR" },
    falaFinal: "5 estados na Linha do Equador. Brasil sentado no zero!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos organizar na ordem certa.",
    instrucao: "Toque na ordem correta",
    pergunta: "Ordem das linhas do zero pro máximo:",
    paradas: [
      { id: "eq", emoji: "🌎", rotulo: "1. Equador (0°)", descricao: "Linha central do planeta." },
      { id: "tr", emoji: "🌴", rotulo: "2. Trópicos (23,5°)", descricao: "Trópico de Câncer e Capricórnio." },
      { id: "ci", emoji: "❄️", rotulo: "3. Círculos Polares (66,5°)", descricao: "Ártico e Antártico." },
      { id: "po", emoji: "🧊", rotulo: "4. Polos (90°)", descricao: "Norte e Sul, os extremos." }
    ],
    ordemCerta: ["eq", "tr", "ci", "po"],
    feedbackAcerto: "Ordem certa! Do equador aos polos.",
    feedbackErro: "Comece no 0° (Equador) e vá subindo até 90° (Polos).",
    falaFinal: "4 marcos, do zero ao extremo.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Aurora fica quieta. Leia e marque as palavras-chave.",
    tituloLivro: "🌍 Atlas do Mestre do Planeta",
    subtitulo: "Página 2 — Coordenadas Geográficas",
    paragrafos: [
      { id: "p1", texto: "PARALELOS são linhas horizontais. O principal é o EQUADOR (0°).", chaves: ["paralelos", "equador"] },
      { id: "p2", texto: "MERIDIANOS são linhas verticais. O principal é o de GREENWICH (0°).", chaves: ["meridianos", "greenwich"] },
      { id: "p3", texto: "LATITUDE mede a distância ao Equador. LONGITUDE mede a distância a Greenwich.", chaves: ["latitude", "longitude"] },
      { id: "p4", texto: "O cruzamento de LATITUDE + LONGITUDE = coordenada exata. É como o GPS funciona.", chaves: ["coordenada", "gps"] }
    ],
    falaFinal: "Leu tudo? Bora ao minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo rápido! Escolha a peça certa.",
    instrucao: "⏱️ Latitude ou Longitude?",
    duracaoSegundos: 12,
    pecas: [
      { id: "lat", emoji: "↔️", rotulo: "Latitude" },
      { id: "lon", emoji: "↕️", rotulo: "Longitude" },
      { id: "hem", emoji: "🌐", rotulo: "Hemisfério" }
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Norte ou Sul", emoji: "⬆️", cor: "from-purple-400 to-indigo-600" }, municipioB: { nome: "Distância do Equador", emoji: "🌎", cor: "from-red-400 to-orange-600" }, contexto: "Medir se estou acima ou abaixo do Equador. É?", pecaCertaId: "lat", feedbackAcerto: "Isso! Norte/Sul = LATITUDE.", feedbackErro: "Distância do Equador = LATITUDE." },
      { id: "r2", municipioA: { nome: "Leste ou Oeste", emoji: "➡️", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Distância de Greenwich", emoji: "📍", cor: "from-amber-400 to-orange-600" }, contexto: "Medir se estou à direita ou à esquerda de Greenwich. É?", pecaCertaId: "lon", feedbackAcerto: "Perfeito! Leste/Oeste = LONGITUDE.", feedbackErro: "Distância de Greenwich = LONGITUDE." },
      { id: "r3", municipioA: { nome: "Brasil no mapa", emoji: "🇧🇷", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Abaixo do Equador", emoji: "⬇️", cor: "from-purple-400 to-indigo-600" }, contexto: "O Brasil está no hemisfério sul. Isso é medido por?", pecaCertaId: "lat", feedbackAcerto: "Isso! Hemisfério = LATITUDE.", feedbackErro: "Hemisfério N/S = LATITUDE." },
      { id: "r4", municipioA: { nome: "Japão longe", emoji: "🇯🇵", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Muito a Leste", emoji: "➡️", cor: "from-sky-400 to-blue-600" }, contexto: "O Japão fica a leste de Londres. Isso é medido por?", pecaCertaId: "lon", feedbackAcerto: "Isso! Leste = LONGITUDE.", feedbackErro: "Distância de Greenwich = LONGITUDE." },
      { id: "r5", municipioA: { nome: "Norte gelado", emoji: "❄️", cor: "from-sky-300 to-blue-500" }, municipioB: { nome: "Latitude alta", emoji: "🌐", cor: "from-purple-400 to-indigo-600" }, contexto: "Groenlândia fica a 70° do Equador. Isso é?", pecaCertaId: "lat", feedbackAcerto: "Isso! Distância do Equador = LATITUDE.", feedbackErro: "70° do Equador = LATITUDE alta." },
      { id: "r6", municipioA: { nome: "Meio-dia em Londres", emoji: "🕛", cor: "from-amber-400 to-yellow-600" }, municipioB: { nome: "Está em Greenwich", emoji: "📍", cor: "from-sky-400 to-blue-600" }, contexto: "Quando o sol está no meio-dia em Greenwich, a longitude é?", pecaCertaId: "lon", feedbackAcerto: "Isso! Greenwich = 0° de LONGITUDE.", feedbackErro: "Greenwich = referência de LONGITUDE." }
    ],
    falaFinal: "6 coordenadas certas! Você virou GPS humano.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Hemisférios do planeta:",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "norte", rotulo: "Hemisfério Norte (50%)", emoji: "⬆️", percentual: 50, cor: "#6366f1", descricao: "Do Equador pra cima. Concentra a maioria dos continentes: Europa, América do Norte, Ásia.", exemplos: ["🇺🇸 EUA", "🇷🇺 Rússia", "🇨🇳 China"] },
      { id: "sul", rotulo: "Hemisfério Sul (50%)", emoji: "⬇️", percentual: 50, cor: "#10b981", descricao: "Do Equador pra baixo. Brasil, Argentina, Austrália, África do Sul.", exemplos: ["🇧🇷 Brasil", "🇦🇺 Austrália", "🇦🇷 Argentina"] }
    ],
    falaFinal: "2 hemisférios divididos pelo Equador. Perfeito.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia " + "Navegador de Precisão" + ".",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Latitude mede distância até...", opcoes: [{ id: "a", texto: "Greenwich", correta: false }, { id: "b", texto: "Linha do Equador", correta: true }, { id: "c", texto: "Polo Norte", correta: false }], feedbackAcerto: "Isso! LATITUDE = distância do Equador.", feedbackErro: "Latitude parte sempre do EQUADOR." },
      { id: "av2", pergunta: "Meridiano principal é o de...", opcoes: [{ id: "a", texto: "Equador", correta: false }, { id: "b", texto: "Greenwich", correta: true }, { id: "c", texto: "Câncer", correta: false }], feedbackAcerto: "Perfeito! Greenwich = meridiano 0°.", feedbackErro: "Meridiano principal = GREENWICH." },
      { id: "av3", pergunta: "O cruzamento de latitude + longitude é...", opcoes: [{ id: "a", texto: "Uma nuvem", correta: false }, { id: "b", texto: "Uma coordenada geográfica exata", correta: true }, { id: "c", texto: "Uma bandeira", correta: false }], feedbackAcerto: "Isso! Cruzamento = coordenada exata.", feedbackErro: "Latitude + longitude = COORDENADA que o GPS usa." }
    ],
    selo: {
      nome: "Navegador de Precisão",
      subtitulo: "Insígnia do Mestre do Planeta",
      emoji: "🧭",
      cor: "from-sky-400 to-blue-600",
    },
    falaFinal: "Insígnia conquistada!",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Navegador de Precisão" },
};
