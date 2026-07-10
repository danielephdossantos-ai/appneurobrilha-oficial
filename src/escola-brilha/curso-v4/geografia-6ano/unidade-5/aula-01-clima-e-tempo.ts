import type { AulaGeoV1 } from "../../types";

/**
 * Geografia · 6º Ano · Unidade 5 · Aula 01
 * "Dinâmica Atmosférica: Clima e Tempo" — EF06GE03, EF06GE05
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-clima-e-tempo",
  titulo: "Dinâmica Atmosférica: Clima e Tempo",
  iconeTrilha: "⛅",
  bncc: ["EF06GE03", "EF06GE05"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe: o planeta em ação.",
    mapaUrl: "https://images.unsplash.com/photo-1500740516770-92bd004b996e?w=800",
    imagemDestaqueUrl: "https://images.unsplash.com/photo-1500740516770-92bd004b996e?w=800",
    aurora: "Explorador, TEMPO e CLIMA são coisas diferentes! O TEMPO é como está o céu AGORA (chovendo, sol). O CLIMA é o PADRÃO analisado por mais de 30 anos numa região. Vamos desvendar a atmosfera.",
    falaFinal: "Hoje muda em horas. Clima é história longa.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Explorador, TEMPO e CLIMA são coisas diferentes! O TEMPO é como está o céu AGORA (chovendo, sol). O CLIMA é o PADRÃO analisado por mais de 30 anos numa região. Vamos desvendar a atmosfera.",
    pergunta: "'Coloque casaco, vai chover à tarde' fala sobre...",
    opcoes: [
      { id: "tempo", titulo: "TEMPO meteorológico", subtitulo: "situação agora", emoji: "✅", cor: "from-emerald-400 to-green-600" },
      { id: "errado", titulo: "CLIMA regional", subtitulo: "padrão fixo de longo prazo", emoji: "❌", cor: "from-slate-400 to-gray-600" },
    ],
    respostaCerta: "tempo",
    feedbackAcerto: "Isso! Chuva de hoje = TEMPO. Muda em horas.",
    feedbackErro: "Clima é longo prazo. Chuva de hoje = TEMPO.",
    falaFinal: "Tempo é agora. Clima é sempre. Bora ver.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras-chave desta unidade.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      { id: "tempo", capa: "1. Tempo meteorológico", emoji: "🌦️", cor: "from-sky-500 to-blue-700", conteudo: "TEMPO é o estado da atmosfera AGORA: chuvoso, ensolarado, ventando. Muda em MINUTOS ou HORAS.", exemplo: "Ex.: hoje de manhã fez sol, à tarde choveu." },
      { id: "clima", capa: "2. Clima", emoji: "🌍", cor: "from-emerald-500 to-green-700", conteudo: "CLIMA é o PADRÃO da atmosfera de uma região analisado por MAIS de 30 anos. Não muda de uma hora pra outra.", exemplo: "Ex.: Amazônia tem clima EQUATORIAL úmido." },
      { id: "atmosfera", capa: "3. Atmosfera", emoji: "☁️", cor: "from-purple-500 to-fuchsia-700", conteudo: "ATMOSFERA é a camada de GASES que envolve a Terra. Tem 5 camadas e protege a vida.", exemplo: "Ex.: quando você respira, respira ar da atmosfera." },
      { id: "umidade", capa: "4. Umidade", emoji: "💧", cor: "from-amber-500 to-yellow-600", conteudo: "UMIDADE é a quantidade de VAPOR DE ÁGUA no ar. Alta = ar abafado. Baixa = ar seco.", exemplo: "Ex.: Manaus tem umidade alta. Brasília tem umidade baixa no inverno." }
    ],
    falaFinal: "4 chaves: tempo, clima, atmosfera, umidade.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada ponto e ouça.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800",
    pontos: [
      { id: "equator", x: 50, y: 40, emoji: "🌴", cor: "from-emerald-500 to-green-700", titulo: "Clima EQUATORIAL", texto: "Quente e úmido o ano todo. Amazônia. Chove quase todo dia." },
      { id: "tropical", x: 60, y: 60, emoji: "🌞", cor: "from-amber-500 to-orange-600", titulo: "Clima TROPICAL", texto: "Chuvas no verão, seca no inverno. Cerrado brasileiro." },
      { id: "semiarido", x: 70, y: 40, emoji: "🏜️", cor: "from-red-500 to-orange-700", titulo: "Clima SEMIÁRIDO", texto: "Pouca chuva, muito calor. Sertão do Nordeste." },
      { id: "subtrop", x: 40, y: 80, emoji: "🌦️", cor: "from-sky-500 to-blue-700", titulo: "Clima SUBTROPICAL", texto: "Frio no inverno, chuvas o ano todo. Sul do Brasil." }
    ],
    falaFinal: "4 climas, 1 Brasil enorme e diverso.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "'Hoje está sol' fala sobre...", cards: [{ id: "t", emoji: "🌦️", titulo: "Tempo", cor: "from-sky-500 to-blue-700" }, { id: "c", emoji: "🌍", titulo: "Clima", cor: "from-emerald-500 to-green-700" }, { id: "u", emoji: "💧", titulo: "Umidade", cor: "from-amber-500 to-yellow-600" }], correta: "t", feedbackAcerto: "Isso! Hoje = TEMPO.", feedbackErro: "Hoje muda em horas = TEMPO." },
      { id: "q2", pergunta: "'Amazônia é quente e úmida' fala sobre...", cards: [{ id: "c", emoji: "🌍", titulo: "Clima", cor: "from-emerald-500 to-green-700" }, { id: "t", emoji: "🌦️", titulo: "Tempo", cor: "from-sky-500 to-blue-700" }, { id: "s", emoji: "🌞", titulo: "Sol", cor: "from-amber-500 to-yellow-600" }], correta: "c", feedbackAcerto: "Perfeito! Padrão de longo prazo = CLIMA.", feedbackErro: "Padrão de anos = CLIMA." },
      { id: "q3", pergunta: "Qual clima predomina no SERTÃO?", cards: [{ id: "s", emoji: "🏜️", titulo: "Semiárido", cor: "from-red-500 to-orange-700" }, { id: "e", emoji: "🌴", titulo: "Equatorial", cor: "from-emerald-500 to-green-700" }, { id: "f", emoji: "❄️", titulo: "Frio", cor: "from-sky-500 to-blue-700" }], correta: "s", feedbackAcerto: "Isso! Sertão = SEMIÁRIDO.", feedbackErro: "Sertão = pouca chuva = SEMIÁRIDO." }
    ],
    falaFinal: "Radar afiado. Meteorologia dominada.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "O Brasil tem 6 grandes tipos de clima. A maior parte é TROPICAL (quente e chuvoso no verão) e EQUATORIAL (quente e úmido o ano todo). Ilumine 5 estados desses climas.",
    instrucao: "Toque em 5 estados com CLIMA TROPICAL ou EQUATORIAL",
    missao: { tipo: "selecionar", siglas: ["AM", "PA", "MT", "GO", "BA"], pergunta: "Toque em 5 estados com CLIMA TROPICAL ou EQUATORIAL" },
    falaFinal: "5 estados quentes iluminados. Brasil é país tropical!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos organizar na ordem certa.",
    instrucao: "Toque na ordem correta",
    pergunta: "Ordem da FORMAÇÃO da chuva:",
    paradas: [
      { id: "evap", emoji: "☀️", rotulo: "1. Evaporação", descricao: "Sol aquece a água dos rios e mares." },
      { id: "vapor", emoji: "💨", rotulo: "2. Vapor sobe", descricao: "Vapor sobe pra atmosfera." },
      { id: "nuvens", emoji: "☁️", rotulo: "3. Formação de nuvens", descricao: "Vapor esfria e forma nuvens." },
      { id: "chuva", emoji: "🌧️", rotulo: "4. Chuva cai", descricao: "Nuvens carregadas soltam a água." },
      { id: "rio", emoji: "🏞️", rotulo: "5. Volta ao rio", descricao: "Água escorre e volta ao ciclo." }
    ],
    ordemCerta: ["evap", "vapor", "nuvens", "chuva", "rio"],
    feedbackAcerto: "Ciclo da água completo! É assim que chove.",
    feedbackErro: "Comece pelo sol evaporando. Vapor sobe, forma nuvem, chove.",
    falaFinal: "5 fases do ciclo. Sempre girando.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Aurora fica quieta. Leia e marque as palavras-chave.",
    tituloLivro: "🌍 Atlas do Mestre do Planeta",
    subtitulo: "Página 5 — Clima e Tempo",
    paragrafos: [
      { id: "p1", texto: "TEMPO é o estado da atmosfera AGORA. Muda em horas.", chaves: ["tempo", "atmosfera"] },
      { id: "p2", texto: "CLIMA é o PADRÃO analisado por mais de 30 anos numa região.", chaves: ["clima", "padrão"] },
      { id: "p3", texto: "O Brasil tem 6 tipos de clima: equatorial, tropical, semiárido, subtropical, tropical de altitude e litorâneo.", chaves: ["equatorial", "tropical", "semiárido"] },
      { id: "p4", texto: "A UMIDADE é a quantidade de VAPOR DE ÁGUA no ar. Amazônia alta, sertão baixa.", chaves: ["umidade", "vapor", "água"] }
    ],
    falaFinal: "Leu tudo? Bora ao minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo rápido! Escolha a peça certa.",
    instrucao: "⏱️ Tempo ou Clima?",
    duracaoSegundos: 12,
    pecas: [
      { id: "t", emoji: "🌦️", rotulo: "Tempo" },
      { id: "c", emoji: "🌍", rotulo: "Clima" },
      { id: "a", emoji: "☁️", rotulo: "Atmosfera" }
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Chuva agora", emoji: "🌧️", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Guarda-chuva", emoji: "☂️", cor: "from-purple-400 to-indigo-600" }, contexto: "Está chovendo agora na sua rua. É?", pecaCertaId: "t", feedbackAcerto: "Isso! Chuva agora = TEMPO.", feedbackErro: "Situação agora = TEMPO." },
      { id: "r2", municipioA: { nome: "Amazônia úmida", emoji: "🌴", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Sempre úmido", emoji: "💧", cor: "from-sky-400 to-blue-600" }, contexto: "A Amazônia é quente e úmida há décadas. É?", pecaCertaId: "c", feedbackAcerto: "Perfeito! Padrão = CLIMA.", feedbackErro: "Padrão de anos = CLIMA." },
      { id: "r3", municipioA: { nome: "Sol forte", emoji: "☀️", cor: "from-amber-400 to-yellow-600" }, municipioB: { nome: "Hoje", emoji: "🌞", cor: "from-red-400 to-orange-600" }, contexto: "Hoje está fazendo muito sol. É?", pecaCertaId: "t", feedbackAcerto: "Isso! Hoje = TEMPO.", feedbackErro: "Hoje = TEMPO." },
      { id: "r4", municipioA: { nome: "Ar puro", emoji: "🌬️", cor: "from-sky-300 to-blue-500" }, municipioB: { nome: "Gases envolvem Terra", emoji: "🌍", cor: "from-emerald-400 to-green-600" }, contexto: "A camada de gases que envolve a Terra. É?", pecaCertaId: "a", feedbackAcerto: "Isso! Camada de gases = ATMOSFERA.", feedbackErro: "Camada de gases = ATMOSFERA." },
      { id: "r5", municipioA: { nome: "Sertão seco", emoji: "🏜️", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Chove pouco", emoji: "🌵", cor: "from-red-400 to-orange-600" }, contexto: "No sertão chove muito pouco há séculos. É?", pecaCertaId: "c", feedbackAcerto: "Isso! Padrão = CLIMA semiárido.", feedbackErro: "Padrão histórico = CLIMA." },
      { id: "r6", municipioA: { nome: "Nevoeiro cedo", emoji: "🌫️", cor: "from-slate-400 to-gray-600" }, municipioB: { nome: "Manhã", emoji: "🕗", cor: "from-purple-400 to-indigo-600" }, contexto: "Manhã de nevoeiro na cidade. É?", pecaCertaId: "t", feedbackAcerto: "Isso! Neblina de manhã = TEMPO.", feedbackErro: "Situação do momento = TEMPO." }
    ],
    falaFinal: "6 identificações certas! Tempo x clima na ponta da língua.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Climas do Brasil (aproximado):",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "quente", rotulo: "Climas quentes (80%)", emoji: "🌞", percentual: 80, cor: "#f59e0b", descricao: "Equatorial, tropical, semiárido dominam a maior parte do Brasil.", exemplos: ["🌴 Amazônia", "🌾 Cerrado", "🏜️ Sertão"] },
      { id: "temp", rotulo: "Climas amenos (20%)", emoji: "🌦️", percentual: 20, cor: "#0284c7", descricao: "Subtropical e tropical de altitude aparecem no Sul e serras.", exemplos: ["❄️ RS/SC", "⛰️ Serra da Mantiqueira"] }
    ],
    falaFinal: "80% quente, 20% ameno. Brasil país tropical.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia " + "Meteorologista de Elite" + ".",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "'Hoje choveu' fala sobre...", opcoes: [{ id: "a", texto: "Clima", correta: false }, { id: "b", texto: "Tempo", correta: true }, { id: "c", texto: "Atmosfera", correta: false }], feedbackAcerto: "Isso! Hoje = TEMPO.", feedbackErro: "Hoje muda em horas = TEMPO." },
      { id: "av2", pergunta: "CLIMA é...", opcoes: [{ id: "a", texto: "O tempo de agora", correta: false }, { id: "b", texto: "O padrão da atmosfera de mais de 30 anos", correta: true }, { id: "c", texto: "A cor do céu", correta: false }], feedbackAcerto: "Perfeito! Padrão longo = CLIMA.", feedbackErro: "CLIMA = padrão de 30+ anos." },
      { id: "av3", pergunta: "Qual clima predomina no sertão nordestino?", opcoes: [{ id: "a", texto: "Equatorial", correta: false }, { id: "b", texto: "Semiárido", correta: true }, { id: "c", texto: "Frio polar", correta: false }], feedbackAcerto: "Isso! Sertão = SEMIÁRIDO.", feedbackErro: "Sertão = pouca chuva = SEMIÁRIDO." }
    ],
    selo: {
      nome: "Meteorologista de Elite",
      subtitulo: "Insígnia do Mestre do Planeta",
      emoji: "⛈️",
      cor: "from-sky-400 to-blue-600",
    },
    falaFinal: "Insígnia conquistada!",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Meteorologista de Elite" },
};
