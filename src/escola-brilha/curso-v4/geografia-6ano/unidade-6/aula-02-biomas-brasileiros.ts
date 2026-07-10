import type { AulaGeoV1 } from "../../types";

/**
 * Geografia · 6º Ano · Unidade 6 · Aula 02
 * "Biomas Brasileiros" — EF06GE07
 */
export const aula02: AulaGeoV1 = {
  slug: "aula-02-biomas-brasileiros",
  titulo: "Biomas Brasileiros",
  iconeTrilha: "🌳",
  bncc: ["EF06GE07"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe: o Brasil tem 6 biomas.",
    mapaUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    imagemDestaqueUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    aurora: "Explorador, o Brasil tem 6 BIOMAS: AMAZÔNIA (o maior), CERRADO (savana), CAATINGA (só no Brasil!), MATA ATLÂNTICA, PAMPA e PANTANAL (maior planície alagada do mundo).",
    falaFinal: "6 biomas em 1 país. Bora explorar.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Explorador, o Brasil tem 6 BIOMAS: AMAZÔNIA (o maior), CERRADO (savana), CAATINGA (só no Brasil!), MATA ATLÂNTICA, PAMPA e PANTANAL (maior planície alagada do mundo).",
    pergunta: "Qual bioma é EXCLUSIVO do Brasil?",
    opcoes: [
      { id: "certo", titulo: "CAATINGA", subtitulo: "não existe em nenhum outro lugar do mundo", emoji: "✅", cor: "from-emerald-400 to-green-600" },
      { id: "errado", titulo: "AMAZÔNIA", subtitulo: "só existe no Brasil", emoji: "❌", cor: "from-slate-400 to-gray-600" },
    ],
    respostaCerta: "certo",
    feedbackAcerto: "Isso! Caatinga é 100% brasileira, só existe aqui.",
    feedbackErro: "Amazônia é dividida com 8 países. CAATINGA é a única exclusiva do Brasil.",
    falaFinal: "Caatinga = orgulho brasileiro. Bora.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 biomas em destaque.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      { id: "amazonia", capa: "1. Amazônia", emoji: "🌳", cor: "from-emerald-500 to-green-700", conteudo: "AMAZÔNIA é o maior bioma do Brasil (49% do território). Floresta tropical úmida, mais biodiversa do planeta.", exemplo: "Ex.: onça-pintada, vitória-régia, açaí." },
      { id: "cerrado", capa: "2. Cerrado", emoji: "🌾", cor: "from-amber-500 to-orange-700", conteudo: "CERRADO é a savana brasileira. Árvores baixas, tortas, com casca grossa por causa das queimadas naturais.", exemplo: "Ex.: pequi, ipê, tamanduá-bandeira, lobo-guará." },
      { id: "caatinga", capa: "3. Caatinga", emoji: "🌵", cor: "from-yellow-500 to-red-600", conteudo: "CAATINGA é o único bioma 100% brasileiro. Semiárido no Nordeste. Plantas espinhosas resistentes à seca.", exemplo: "Ex.: mandacaru, xique-xique, asa-branca." },
      { id: "pantanal", capa: "4. Pantanal", emoji: "🐊", cor: "from-cyan-500 to-blue-700", conteudo: "PANTANAL é a maior planície alagada do mundo. Enche na chuva, seca no verão. Berçário de aves e onças.", exemplo: "Ex.: jacaré, tuiuiú, capivara." }
    ],
    falaFinal: "4 biomas mapeados. Faltam Mata Atlântica e Pampa!",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada bioma no mapa e ouça.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800",
    pontos: [
      { id: "ama", x: 30, y: 25, emoji: "🌳", cor: "from-emerald-500 to-green-700", titulo: "AMAZÔNIA (Norte)", texto: "49% do território. Maior floresta tropical do mundo. Pulmão verde." },
      { id: "cer", x: 55, y: 50, emoji: "🌾", cor: "from-amber-500 to-orange-600", titulo: "CERRADO (Centro-Oeste)", texto: "2º maior bioma. Berço das águas: nasce lá quase todo rio do Brasil." },
      { id: "caa", x: 70, y: 30, emoji: "🌵", cor: "from-yellow-500 to-red-600", titulo: "CAATINGA (Nordeste)", texto: "Único 100% brasileiro. Plantas espinhosas que aguentam a seca." },
      { id: "mat", x: 65, y: 70, emoji: "🌿", cor: "from-teal-500 to-emerald-700", titulo: "MATA ATLÂNTICA (Litoral)", texto: "Restam só 12% da floresta original. Muito ameaçada." },
      { id: "pan", x: 40, y: 65, emoji: "🐊", cor: "from-cyan-500 to-blue-700", titulo: "PANTANAL (MT/MS)", texto: "Maior planície alagada do mundo. Cheia na chuva, seca no verão." },
      { id: "pam", x: 45, y: 90, emoji: "🐴", cor: "from-purple-500 to-fuchsia-700", titulo: "PAMPA (Sul)", texto: "Campos de gramíneas do Rio Grande do Sul. Berço do gaúcho." }
    ],
    falaFinal: "6 biomas do Brasil. Cada um com sua identidade.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Qual é o MAIOR bioma do Brasil?", cards: [{ id: "am", emoji: "🌳", titulo: "Amazônia", cor: "from-emerald-500 to-green-700" }, { id: "ce", emoji: "🌾", titulo: "Cerrado", cor: "from-amber-500 to-orange-600" }, { id: "ca", emoji: "🌵", titulo: "Caatinga", cor: "from-yellow-500 to-red-600" }], correta: "am", feedbackAcerto: "Isso! Amazônia = 49% do Brasil.", feedbackErro: "Cerrado é 2º maior. AMAZÔNIA ocupa 49% do território." },
      { id: "q2", pergunta: "Qual bioma tem PLANTAS ESPINHOSAS que aguentam a seca?", cards: [{ id: "ca", emoji: "🌵", titulo: "Caatinga", cor: "from-yellow-500 to-red-600" }, { id: "am", emoji: "🌳", titulo: "Amazônia", cor: "from-emerald-500 to-green-700" }, { id: "pa", emoji: "🐊", titulo: "Pantanal", cor: "from-cyan-500 to-blue-700" }], correta: "ca", feedbackAcerto: "Perfeito! Caatinga = mandacaru, xique-xique.", feedbackErro: "Amazônia é úmida. Pantanal é alagado. Espinhoso e seco = CAATINGA." },
      { id: "q3", pergunta: "Qual é a MAIOR planície alagada do mundo?", cards: [{ id: "pa", emoji: "🐊", titulo: "Pantanal", cor: "from-cyan-500 to-blue-700" }, { id: "am", emoji: "🌳", titulo: "Amazônia", cor: "from-emerald-500 to-green-700" }, { id: "pam", emoji: "🐴", titulo: "Pampa", cor: "from-purple-500 to-fuchsia-700" }], correta: "pa", feedbackAcerto: "Isso! Pantanal = recorde mundial.", feedbackErro: "Maior planície ALAGADA do mundo = PANTANAL." }
    ],
    falaFinal: "Radar afiado. Biomas brasileiros decodificados.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "A CAATINGA ocupa 9 estados do NORDESTE brasileiro. É o único bioma 100% nosso. Toque nos 9 estados da Caatinga!",
    instrucao: "Toque em BA, PE, PB, RN, CE, PI, AL, SE, MA",
    missao: { tipo: "selecionar", siglas: ["BA", "PE", "PB", "RN", "CE", "PI", "AL", "SE", "MA"], pergunta: "Toque nos 9 estados brasileiros da CAATINGA" },
    falaFinal: "9 estados da Caatinga marcados! Bioma exclusivo do Brasil!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos organizar do MAIOR pro MENOR bioma brasileiro.",
    instrucao: "Toque na ordem correta",
    pergunta: "Ordem dos biomas do MAIOR pro MENOR (em área):",
    paradas: [
      { id: "am", emoji: "🌳", rotulo: "1. Amazônia (49%)", descricao: "Quase metade do Brasil." },
      { id: "ce", emoji: "🌾", rotulo: "2. Cerrado (24%)", descricao: "Berço das águas." },
      { id: "ma", emoji: "🌿", rotulo: "3. Mata Atlântica (13%)", descricao: "Litoral. Só 12% preservada." },
      { id: "ca", emoji: "🌵", rotulo: "4. Caatinga (10%)", descricao: "Nordeste. Único 100% BR." },
      { id: "pam", emoji: "🐴", rotulo: "5. Pampa (2%)", descricao: "Sul. Campos gaúchos." },
      { id: "pan", emoji: "🐊", rotulo: "6. Pantanal (2%)", descricao: "Planície alagada." }
    ],
    ordemCerta: ["am", "ce", "ma", "ca", "pam", "pan"],
    feedbackAcerto: "Ordem certa! Do maior (Amazônia) ao menor (Pantanal).",
    feedbackErro: "Comece pela Amazônia (49%) e vá reduzindo até Pantanal (2%).",
    falaFinal: "6 biomas ordenados. Brasil megabiodiverso.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Aurora fica quieta. Leia e marque as palavras-chave.",
    tituloLivro: "🌍 Atlas do Mestre do Planeta",
    subtitulo: "Página 6b — Biomas do Brasil",
    paragrafos: [
      { id: "p1", texto: "A AMAZÔNIA é o maior bioma do Brasil (49%). Floresta tropical úmida, com a maior BIODIVERSIDADE do planeta.", chaves: ["amazônia", "biodiversidade"] },
      { id: "p2", texto: "O CERRADO é a savana brasileira. Árvores baixas e tortas. É o BERÇO DAS ÁGUAS do país.", chaves: ["cerrado", "berço", "águas"] },
      { id: "p3", texto: "A CAATINGA é o único bioma 100% brasileiro. Semiárido, com plantas espinhosas resistentes à SECA.", chaves: ["caatinga", "seca"] },
      { id: "p4", texto: "O PANTANAL é a maior PLANÍCIE ALAGADA do mundo. Enche na chuva, seca no verão.", chaves: ["pantanal", "planície", "alagada"] }
    ],
    falaFinal: "Leu tudo? Bora ao minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo rápido! Que bioma é esse?",
    instrucao: "⏱️ Amazônia, Cerrado, Caatinga ou Pantanal?",
    duracaoSegundos: 12,
    pecas: [
      { id: "am", emoji: "🌳", rotulo: "Amazônia" },
      { id: "ce", emoji: "🌾", rotulo: "Cerrado" },
      { id: "ca", emoji: "🌵", rotulo: "Caatinga" },
      { id: "pa", emoji: "🐊", rotulo: "Pantanal" }
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Mandacaru e sol", emoji: "🌵", cor: "from-yellow-400 to-red-600" }, municipioB: { nome: "Chove pouco", emoji: "☀️", cor: "from-amber-400 to-orange-600" }, contexto: "Plantas espinhosas, semiárido, no Nordeste. É?", pecaCertaId: "ca", feedbackAcerto: "Isso! Semiárido nordestino = CAATINGA.", feedbackErro: "Espinhoso + seco + Nordeste = CAATINGA." },
      { id: "r2", municipioA: { nome: "Onça e vitória-régia", emoji: "🌳", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Floresta úmida", emoji: "💧", cor: "from-sky-400 to-blue-600" }, contexto: "Maior floresta tropical do mundo. É?", pecaCertaId: "am", feedbackAcerto: "Perfeito! Maior floresta = AMAZÔNIA.", feedbackErro: "Floresta úmida gigante = AMAZÔNIA." },
      { id: "r3", municipioA: { nome: "Jacaré e tuiuiú", emoji: "🐊", cor: "from-cyan-400 to-blue-600" }, municipioB: { nome: "Fica alagado", emoji: "🌊", cor: "from-teal-400 to-cyan-600" }, contexto: "Planície que enche na chuva. É?", pecaCertaId: "pa", feedbackAcerto: "Isso! Alagado = PANTANAL.", feedbackErro: "Planície alagada = PANTANAL." },
      { id: "r4", municipioA: { nome: "Lobo-guará e pequi", emoji: "🌾", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Savana brasileira", emoji: "🌳", cor: "from-yellow-400 to-amber-600" }, contexto: "Árvores baixas, tortas, casca grossa. É?", pecaCertaId: "ce", feedbackAcerto: "Isso! Savana BR = CERRADO.", feedbackErro: "Savana brasileira = CERRADO." },
      { id: "r5", municipioA: { nome: "Berço das águas", emoji: "💧", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Nasce quase todo rio", emoji: "🌊", cor: "from-cyan-400 to-teal-600" }, contexto: "Bioma central onde nascem os rios do Brasil. É?", pecaCertaId: "ce", feedbackAcerto: "Isso! CERRADO = berço das águas.", feedbackErro: "Berço das águas = CERRADO." },
      { id: "r6", municipioA: { nome: "9 países dividem", emoji: "🌎", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Pulmão do mundo", emoji: "🌳", cor: "from-teal-400 to-emerald-600" }, contexto: "Compartilhado com Peru, Colômbia, Bolívia. É?", pecaCertaId: "am", feedbackAcerto: "Isso! AMAZÔNIA sul-americana.", feedbackErro: "9 países = AMAZÔNIA." }
    ],
    falaFinal: "6 biomas identificados! Biólogo BR raiz.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Área dos biomas brasileiros:",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "am", rotulo: "Amazônia (49%)", emoji: "🌳", percentual: 49, cor: "#059669", descricao: "Quase metade do território brasileiro.", exemplos: ["🌳 Floresta úmida", "🐆 Onça-pintada", "🍇 Açaí"] },
      { id: "ce", rotulo: "Cerrado (24%)", emoji: "🌾", percentual: 24, cor: "#d97706", descricao: "Savana. Berço das águas.", exemplos: ["🐺 Lobo-guará", "🌳 Ipê", "🍈 Pequi"] },
      { id: "ma", rotulo: "Mata Atlântica (13%)", emoji: "🌿", percentual: 13, cor: "#0d9488", descricao: "Litoral. Muito devastada.", exemplos: ["🐒 Mico-leão", "🌳 Jequitibá"] },
      { id: "ca", rotulo: "Caatinga (10%)", emoji: "🌵", percentual: 10, cor: "#eab308", descricao: "Único 100% brasileiro.", exemplos: ["🌵 Mandacaru", "🐦 Asa-branca"] },
      { id: "outros", rotulo: "Pampa + Pantanal (4%)", emoji: "🐊", percentual: 4, cor: "#0891b2", descricao: "Sul e Centro-Oeste.", exemplos: ["🐴 Cavalo crioulo", "🐊 Jacaré-do-pantanal"] }
    ],
    falaFinal: "Brasil = maior biodiversidade do mundo. 6 biomas!",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia " + "Guardião dos Biomas BR" + ".",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Qual bioma é 100% EXCLUSIVO do Brasil?", opcoes: [{ id: "a", texto: "Amazônia", correta: false }, { id: "b", texto: "Caatinga", correta: true }, { id: "c", texto: "Pantanal", correta: false }], feedbackAcerto: "Isso! Só a Caatinga é exclusiva.", feedbackErro: "Amazônia é dividida com 8 países. CAATINGA é 100% brasileira." },
      { id: "av2", pergunta: "Qual é o MAIOR bioma do Brasil?", opcoes: [{ id: "a", texto: "Amazônia", correta: true }, { id: "b", texto: "Cerrado", correta: false }, { id: "c", texto: "Mata Atlântica", correta: false }], feedbackAcerto: "Perfeito! 49% do território.", feedbackErro: "AMAZÔNIA ocupa 49% do Brasil." },
      { id: "av3", pergunta: "O que é o PANTANAL?", opcoes: [{ id: "a", texto: "Deserto do Nordeste", correta: false }, { id: "b", texto: "Maior planície alagada do mundo", correta: true }, { id: "c", texto: "Floresta de araucárias", correta: false }], feedbackAcerto: "Isso! Recorde mundial de planície alagada.", feedbackErro: "PANTANAL = maior planície ALAGADA do mundo." }
    ],
    selo: {
      nome: "Guardião dos Biomas BR",
      subtitulo: "Insígnia do Mestre do Planeta",
      emoji: "🌳",
      cor: "from-emerald-400 to-green-600",
    },
    falaFinal: "Insígnia conquistada!",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Guardião dos Biomas BR" },
};
