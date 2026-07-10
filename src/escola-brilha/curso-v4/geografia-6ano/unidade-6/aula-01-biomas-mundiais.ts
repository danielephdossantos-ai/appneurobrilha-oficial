import type { AulaGeoV1 } from "../../types";

/**
 * Geografia · 6º Ano · Unidade 6 · Aula 01
 * "Biomas Mundiais e Ecossistemas" — EF06GE06, EF06GE07
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-biomas-mundiais",
  titulo: "Biomas Mundiais e Ecossistemas",
  iconeTrilha: "🌿",
  bncc: ["EF06GE06", "EF06GE07"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe: o planeta em ação.",
    mapaUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
    imagemDestaqueUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
    aurora: "Explorador, o planeta tem BIOMAS incríveis! Cada zona climática abriga uma vegetação e uma fauna próprias. Das savanas africanas às tundras congeladas, tudo depende do clima.",
    falaFinal: "Clima molda vida. Bora ver os grandes biomas.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Explorador, o planeta tem BIOMAS incríveis! Cada zona climática abriga uma vegetação e uma fauna próprias. Das savanas africanas às tundras congeladas, tudo depende do clima.",
    pergunta: "O que causa a destruição das FLORESTAS TROPICAIS?",
    opcoes: [
      { id: "perda", titulo: "Perda de biodiversidade + aquecimento", subtitulo: "efeito estufa e mudanças climáticas", emoji: "✅", cor: "from-emerald-400 to-green-600" },
      { id: "errado", titulo: "Mais árvores artificiais", subtitulo: "solução mágica", emoji: "❌", cor: "from-slate-400 to-gray-600" },
    ],
    respostaCerta: "perda",
    feedbackAcerto: "Isso! Menos florestas = menos biodiversidade + mais efeito estufa.",
    feedbackErro: "Árvores artificiais não substituem florestas de verdade.",
    falaFinal: "Floresta salva o planeta. Bora entender.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras-chave desta unidade.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      { id: "floresta", capa: "1. Florestas tropicais", emoji: "🌳", cor: "from-emerald-500 to-green-700", conteudo: "FLORESTAS TROPICAIS são densas, quentes e úmidas. Máxima biodiversidade do planeta.", exemplo: "Ex.: Amazônia, Congo, sudeste asiático." },
      { id: "savana", capa: "2. Savanas", emoji: "🌾", cor: "from-amber-500 to-orange-700", conteudo: "SAVANAS têm gramíneas altas, poucas árvores, estação seca marcada. Fauna: leões, elefantes, girafas.", exemplo: "Ex.: Savana africana, Cerrado brasileiro." },
      { id: "deserto", capa: "3. Desertos", emoji: "🏜️", cor: "from-yellow-500 to-red-600", conteudo: "DESERTOS têm pouca chuva, temperaturas extremas. Vegetação rara: cactos, arbustos.", exemplo: "Ex.: Saara, Atacama, Deserto de Gobi." },
      { id: "tundra", capa: "4. Tundras", emoji: "🧊", cor: "from-sky-400 to-blue-600", conteudo: "TUNDRAS são regiões geladas, sem árvores, com musgos e liquens. Fauna: renas, ursos polares.", exemplo: "Ex.: Ártico, norte da Rússia e Canadá." }
    ],
    falaFinal: "4 chaves: floresta, savana, deserto, tundra.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada ponto e ouça.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800",
    pontos: [
      { id: "amaz", x: 40, y: 40, emoji: "🌴", cor: "from-emerald-500 to-green-700", titulo: "AMAZÔNIA — floresta equatorial", texto: "Maior floresta tropical do mundo. 10% de toda biodiversidade planetária." },
      { id: "cerrado", x: 55, y: 55, emoji: "🌾", cor: "from-amber-500 to-orange-700", titulo: "CERRADO — savana brasileira", texto: "Segunda maior formação vegetal do Brasil. Árvores retorcidas, gramíneas altas." },
      { id: "caatinga", x: 65, y: 45, emoji: "🌵", cor: "from-red-500 to-orange-600", titulo: "CAATINGA — semiárida", texto: "Único bioma exclusivamente brasileiro. Plantas adaptadas à seca." },
      { id: "mata", x: 70, y: 70, emoji: "🌳", cor: "from-emerald-600 to-green-800", titulo: "MATA ATLÂNTICA — costa", texto: "Só restam 12% da floresta original. Grande biodiversidade em risco." }
    ],
    falaFinal: "4 biomas brasileiros únicos. Cada um com seu ritmo.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Qual bioma tem MAIOR biodiversidade?", cards: [{ id: "fl", emoji: "🌴", titulo: "Floresta tropical", cor: "from-emerald-500 to-green-700" }, { id: "de", emoji: "🏜️", titulo: "Deserto", cor: "from-amber-500 to-yellow-600" }, { id: "tu", emoji: "🧊", titulo: "Tundra", cor: "from-sky-500 to-blue-700" }], correta: "fl", feedbackAcerto: "Isso! Floresta tropical = mais biodiversidade.", feedbackErro: "Calor + umidade = MAIS vida. FLORESTAS TROPICAIS." },
      { id: "q2", pergunta: "Onde vivem os ursos polares?", cards: [{ id: "tu", emoji: "🧊", titulo: "Tundra", cor: "from-sky-400 to-blue-600" }, { id: "sa", emoji: "🌾", titulo: "Savana", cor: "from-amber-500 to-orange-700" }, { id: "fl", emoji: "🌴", titulo: "Floresta", cor: "from-emerald-500 to-green-700" }], correta: "tu", feedbackAcerto: "Perfeito! Tundra ártica = ursos polares.", feedbackErro: "Gelo = TUNDRA = urso polar." },
      { id: "q3", pergunta: "Cerrado brasileiro é uma...", cards: [{ id: "sa", emoji: "🌾", titulo: "Savana", cor: "from-amber-500 to-orange-700" }, { id: "fl", emoji: "🌴", titulo: "Floresta", cor: "from-emerald-500 to-green-700" }, { id: "de", emoji: "🏜️", titulo: "Deserto", cor: "from-yellow-500 to-red-600" }], correta: "sa", feedbackAcerto: "Isso! Cerrado = SAVANA brasileira.", feedbackErro: "Cerrado = SAVANA." }
    ],
    falaFinal: "Radar afiado. Biomestre em ação.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "O Brasil tem 6 grandes biomas: Amazônia, Cerrado, Caatinga, Mata Atlântica, Pampa e Pantanal. Ilumine 5 estados com muitos biomas naturais.",
    instrucao: "Toque em 5 estados com muita ÁREA de biomas naturais preservados",
    missao: { tipo: "selecionar", siglas: ["AM", "PA", "MT", "GO", "BA"], pergunta: "Toque em 5 estados com muita ÁREA de biomas naturais preservados" },
    falaFinal: "5 estados biodiversos iluminados. Brasil é gigante ambiental.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos organizar na ordem certa.",
    instrucao: "Toque na ordem correta",
    pergunta: "Ordem dos biomas do EQUADOR até o POLO:",
    paradas: [
      { id: "floresta", emoji: "🌴", rotulo: "1. Floresta tropical", descricao: "Perto do Equador, quente e úmida." },
      { id: "savana", emoji: "🌾", rotulo: "2. Savana", descricao: "Um pouco mais fria, com estação seca." },
      { id: "temperada", emoji: "🍁", rotulo: "3. Floresta temperada", descricao: "Estações bem marcadas." },
      { id: "taiga", emoji: "🌲", rotulo: "4. Taiga (floresta boreal)", descricao: "Frio, coníferas resistentes." },
      { id: "tundra", emoji: "🧊", rotulo: "5. Tundra", descricao: "Gelo, sem árvores." }
    ],
    ordemCerta: ["floresta", "savana", "temperada", "taiga", "tundra"],
    feedbackAcerto: "Ordem certa! Do quente ao gelado.",
    feedbackErro: "Comece no Equador (floresta) e vá subindo até o polo (tundra).",
    falaFinal: "5 biomas em latitudes diferentes. Clima molda tudo.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Aurora fica quieta. Leia e marque as palavras-chave.",
    tituloLivro: "🌍 Atlas do Mestre do Planeta",
    subtitulo: "Página 6 — Biomas Mundiais",
    paragrafos: [
      { id: "p1", texto: "BIOMA é um grande conjunto de vegetação e fauna adaptadas ao clima da região.", chaves: ["bioma", "vegetação", "fauna"] },
      { id: "p2", texto: "FLORESTAS TROPICAIS têm a MAIOR biodiversidade do planeta. Amazônia é a maior.", chaves: ["florestas", "biodiversidade", "amazônia"] },
      { id: "p3", texto: "SAVANAS têm gramíneas e árvores esparsas. Cerrado brasileiro é uma savana.", chaves: ["savanas", "cerrado"] },
      { id: "p4", texto: "TUNDRAS e DESERTOS são biomas de extremos: gelo ou seca. Poucas espécies aguentam.", chaves: ["tundras", "desertos", "extremos"] }
    ],
    falaFinal: "Leu tudo? Bora ao minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo rápido! Escolha a peça certa.",
    instrucao: "⏱️ Que bioma é esse?",
    duracaoSegundos: 12,
    pecas: [
      { id: "fl", emoji: "🌴", rotulo: "Floresta tropical" },
      { id: "sa", emoji: "🌾", rotulo: "Savana" },
      { id: "de", emoji: "🏜️", rotulo: "Deserto" },
      { id: "tu", emoji: "🧊", rotulo: "Tundra" }
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Onça-pintada", emoji: "🐆", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Amazônia", emoji: "🌴", cor: "from-amber-400 to-yellow-600" }, contexto: "Onça-pintada vive na Amazônia. Que bioma?", pecaCertaId: "fl", feedbackAcerto: "Isso! Amazônia = FLORESTA TROPICAL.", feedbackErro: "Amazônia = FLORESTA TROPICAL." },
      { id: "r2", municipioA: { nome: "Leão africano", emoji: "🦁", cor: "from-amber-400 to-yellow-600" }, municipioB: { nome: "Grama alta", emoji: "🌾", cor: "from-orange-400 to-red-600" }, contexto: "Leão africano caça na grama alta. Que bioma?", pecaCertaId: "sa", feedbackAcerto: "Perfeito! Leão vive na SAVANA.", feedbackErro: "Leão + grama = SAVANA africana." },
      { id: "r3", municipioA: { nome: "Cacto e camelo", emoji: "🐫", cor: "from-yellow-400 to-orange-600" }, municipioB: { nome: "Muito seco", emoji: "🏜️", cor: "from-red-400 to-orange-600" }, contexto: "Camelo e cacto no calor extremo. Que bioma?", pecaCertaId: "de", feedbackAcerto: "Isso! Camelo = DESERTO.", feedbackErro: "Cacto + camelo = DESERTO." },
      { id: "r4", municipioA: { nome: "Urso polar", emoji: "🐻‍❄️", cor: "from-sky-300 to-blue-500" }, municipioB: { nome: "Gelo", emoji: "🧊", cor: "from-blue-400 to-indigo-600" }, contexto: "Urso polar pisando no gelo. Que bioma?", pecaCertaId: "tu", feedbackAcerto: "Isso! Urso polar = TUNDRA.", feedbackErro: "Gelo + urso polar = TUNDRA." },
      { id: "r5", municipioA: { nome: "Girafa e zebra", emoji: "🦒", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "África", emoji: "🌍", cor: "from-yellow-400 to-red-600" }, contexto: "Girafa e zebra pastando. Que bioma?", pecaCertaId: "sa", feedbackAcerto: "Isso! Fauna africana = SAVANA.", feedbackErro: "Girafa = SAVANA." },
      { id: "r6", municipioA: { nome: "Chuva o ano todo", emoji: "🌧️", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Verde denso", emoji: "🌳", cor: "from-blue-400 to-green-700" }, contexto: "Floresta com chuva quase diária. Que bioma?", pecaCertaId: "fl", feedbackAcerto: "Isso! Chuva o ano todo = FLORESTA TROPICAL.", feedbackErro: "Chuva sempre = FLORESTA TROPICAL." }
    ],
    falaFinal: "6 biomas identificados! Você é biomestre planetário.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Biodiversidade nos biomas mundiais:",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "trop", rotulo: "Florestas tropicais (70%)", emoji: "🌴", percentual: 70, cor: "#059669", descricao: "Concentram a maior parte das espécies do planeta em pequenas áreas.", exemplos: ["🌴 Amazônia", "🐆 Onças", "🦜 Araras"] },
      { id: "outros", rotulo: "Outros biomas (30%)", emoji: "🌍", percentual: 30, cor: "#f59e0b", descricao: "Savanas, tundras, desertos, florestas temperadas — importantes mas com menos espécies.", exemplos: ["🦁 Savana", "🐫 Deserto", "🐻‍❄️ Tundra"] }
    ],
    falaFinal: "70% da biodiversidade em florestas. Proteger é urgente!",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia " + "Biomestre Planetário" + ".",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Onde há MAIOR biodiversidade?", opcoes: [{ id: "a", texto: "Deserto", correta: false }, { id: "b", texto: "Floresta tropical", correta: true }, { id: "c", texto: "Tundra", correta: false }], feedbackAcerto: "Isso! Florestas = mais espécies.", feedbackErro: "Calor + umidade = FLORESTA TROPICAL." },
      { id: "av2", pergunta: "Cerrado brasileiro é uma...", opcoes: [{ id: "a", texto: "Floresta", correta: false }, { id: "b", texto: "Savana", correta: true }, { id: "c", texto: "Tundra", correta: false }], feedbackAcerto: "Perfeito! Cerrado = SAVANA.", feedbackErro: "Cerrado = SAVANA brasileira." },
      { id: "av3", pergunta: "Destruição das florestas causa...", opcoes: [{ id: "a", texto: "Menos biodiversidade e mais efeito estufa", correta: true }, { id: "b", texto: "Mais chuva no deserto", correta: false }, { id: "c", texto: "Nada de importante", correta: false }], feedbackAcerto: "Isso! Perde vida + aquece o planeta.", feedbackErro: "Perda de biodiversidade + AQUECIMENTO." }
    ],
    selo: {
      nome: "Biomestre Planetário",
      subtitulo: "Insígnia do Mestre do Planeta",
      emoji: "🌳",
      cor: "from-sky-400 to-blue-600",
    },
    falaFinal: "Insígnia conquistada!",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Biomestre Planetário" },
};
