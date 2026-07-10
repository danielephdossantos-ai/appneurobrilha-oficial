import type { AulaGeoV1 } from "../../types";
import hero from "@/assets/geografia-8ano/america-latina.jpg";

/**
 * Geografia · 8º Ano · Unidade 1 · Aula 01
 * América Latina — Identidade e Contrastes
 * BNCC: EF08GE01, EF08GE02
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-america-latina",
  titulo: "América Latina — Identidade e Contrastes",
  iconeTrilha: "🌎",
  bncc: ["EF08GE01", "EF08GE02"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Por que quase toda a América ao sul dos EUA fala português ou espanhol?",
    mapaUrl: hero,
    imagemDestaqueUrl: hero,
    aurora: "Explorador, 20 países da América formam o que chamamos de AMÉRICA LATINA. Todos foram colonizados por Portugal, Espanha ou França — línguas latinas. 660 milhões de pessoas, uma história parecida: exploração colonial, independência tardia e desigualdade brutal.",
    falaFinal: "Bora entender o que UNE e o que DIVIDE a América Latina.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "O que define a AMÉRICA LATINA?",
    pergunta: "O que define a AMÉRICA LATINA?",
    opcoes: [
      { id: "clima", titulo: "O clima tropical", subtitulo: "todos os países têm calor", emoji: "🌴", cor: "from-slate-400 to-slate-600" },
      { id: "colonizacao", titulo: "A COLONIZAÇÃO latina", subtitulo: "por Portugal, Espanha ou França", emoji: "👑", cor: "from-slate-400 to-slate-600" }
    ],
    respostaCerta: "colonizacao",
    feedbackAcerto: "Isso! Não é geografia física — é herança colonial. Argentina é fria e é latina.",
    feedbackErro: "Argentina, Chile e Uruguai são frios, mas são latinos. O critério é a colonização.",
    falaFinal: "Língua e cultura de raiz latina — esse é o fio condutor.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Conceitos-chave desta aula.",
    instrucao: "Leia cada caderno",
    cadernos: [
      {
        id: "colonizacao",
        capa: "1. Colonização Ibérica",
        emoji: "👑",
        cor: "from-slate-500 to-slate-700",
        conteudo: "COLONIZAÇÃO IBÉRICA: exploração da América por Portugal e Espanha (séc. XVI–XIX). Extraíam ouro, prata e produtos agrícolas usando trabalho indígena e escravizados africanos.",
        exemplo: "Ex.: Potosí (Bolívia) forneceu 60% da prata do mundo no séc. XVII.",
      },
      {
        id: "mestico",
        capa: "2. Mestiçagem",
        emoji: "🎭",
        cor: "from-slate-500 to-slate-700",
        conteudo: "MESTIÇAGEM: mistura biológica e cultural entre indígenas, europeus e africanos. Gerou a identidade latino-americana atual — música, culinária, religião.",
        exemplo: "Ex.: samba, tango, salsa e reggaeton nascem dessa mistura.",
      },
      {
        id: "dependencia",
        capa: "3. Dependência Econômica",
        emoji: "🔗",
        cor: "from-slate-500 to-slate-700",
        conteudo: "DEPENDÊNCIA: mesmo após independência, países latinos exportam matérias-primas baratas e importam produtos industrializados caros. Economia sempre subordinada aos ricos.",
        exemplo: "Ex.: Brasil vende soja, compra celulares.",
      },
      {
        id: "desigualdade",
        capa: "4. Desigualdade Social",
        emoji: "⚖️",
        cor: "from-slate-500 to-slate-700",
        conteudo: "DESIGUALDADE: América Latina é a região mais desigual do mundo. Poucos ricos controlam terras e indústrias, muitos pobres nas favelas e no campo.",
        exemplo: "Ex.: índice de Gini do Brasil (0,52) é maior que o da Europa (0,30).",
      }
    ],
    falaFinal: "Colonização, mestiçagem, dependência, desigualdade. 4 palavras que explicam tudo.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada marco. Ouça como a América Latina se formou.",
    instrucao: "Toque em cada balão",
    mapaUrl: hero,
    pontos: [
      {
        id: "colonizacao",
        x: 30, y: 35,
        emoji: "👑",
        cor: "from-slate-500 to-slate-700",
        titulo: "1500–1800 — Colonização",
        texto: "Portugal fica com o Brasil. Espanha com o resto. Extração intensa de metais e produtos agrícolas.",
      },
      {
        id: "indep",
        x: 50, y: 45,
        emoji: "🎆",
        cor: "from-slate-500 to-slate-700",
        titulo: "1810–1825 — Independências",
        texto: "Bolívar, San Martín e outros libertam a América espanhola. Brasil se separa em 1822.",
      },
      {
        id: "dependencia",
        x: 45, y: 60,
        emoji: "🏭",
        cor: "from-slate-500 to-slate-700",
        titulo: "Séc. XX — Dependência",
        texto: "Europa e EUA compram matérias-primas. Latinos ficam dependentes. Ditaduras militares nos anos 60–80.",
      },
      {
        id: "integracao",
        x: 55, y: 70,
        emoji: "🤝",
        cor: "from-slate-500 to-slate-700",
        titulo: "Séc. XXI — Integração",
        texto: "Mercosul, Unasul, CELAC. Tentativas de agir juntos contra a hegemonia dos EUA.",
      }
    ],
    falaFinal: "500 anos, quatro grandes fases. Do ouro do Potosí ao Mercosul.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de analista.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "O que define a América Latina?",
        cards: [
          { id: "a", emoji: "🇵🇹", titulo: "Colonização latina", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🌴", titulo: "Clima tropical", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "⛰️", titulo: "Ter cordilheiras", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a",
        feedbackAcerto: "Isso! Portugal, Espanha e França — línguas latinas.",
        feedbackErro: "Clima e relevo variam muito. O critério é linguístico-cultural.",
      },
      {
        id: "q2",
        pergunta: "Qual país libertou várias colônias espanholas?",
        cards: [
          { id: "a", emoji: "🇻🇪", titulo: "Simón Bolívar", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🇧🇷", titulo: "Dom Pedro I", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "🇺🇸", titulo: "George Washington", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a",
        feedbackAcerto: "Boa! Bolívar libertou 5 países atuais.",
        feedbackErro: "D. Pedro fez a independência do Brasil. Bolívar é o libertador latino-americano.",
      },
      {
        id: "q3",
        pergunta: "'Dependência econômica' significa:",
        cards: [
          { id: "a", emoji: "🏭", titulo: "Exportar matéria-prima, importar industrializados", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "💰", titulo: "Ser dono das próprias fábricas", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "🌾", titulo: "Produzir só para o mercado interno", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a",
        feedbackAcerto: "Isso! O modelo colonial permanece.",
        feedbackErro: "Dependência = vender barato o que a terra produz e comprar caro o que a indústria estrangeira faz.",
      }
    ],
    falaFinal: "Radar ok. Bora ao mapa.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Marque 4 países latino-americanos.",
    instrucao: "Acenda 4 potências da América Latina",
    missao: {
      tipo: "selecionar",
      siglas: ["BR", "AR", "MX", "CO"],
      pergunta: "Quais são as 4 maiores economias da América Latina?",
    },
    falaFinal: "Brasil, México, Argentina e Colômbia — juntos, 70% do PIB latino-americano.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize a linha do tempo.",
    instrucao: "Arraste cada evento pra ordem certa",
    pergunta: "Ordem histórica da América Latina:",
    paradas: [
      {
        id: "colonizacao",
        emoji: "👑",
        rotulo: "1. Colonização (1500)",
        descricao: "Portugal e Espanha extraem ouro, prata e produtos agrícolas.",
      },
      {
        id: "independencia",
        emoji: "🎆",
        rotulo: "2. Independências (1810–1825)",
        descricao: "Bolívar e outros libertam a América espanhola. Brasil em 1822.",
      },
      {
        id: "industria",
        emoji: "🏭",
        rotulo: "3. Industrialização tardia (1930+)",
        descricao: "Substituição de importações. Nascem indústrias em SP, BA, Buenos Aires.",
      },
      {
        id: "ditaduras",
        emoji: "🪖",
        rotulo: "4. Ditaduras militares (1960–80)",
        descricao: "Golpes apoiados pelos EUA para conter comunismo.",
      },
      {
        id: "democracia",
        emoji: "🗳️",
        rotulo: "5. Redemocratização (1985+)",
        descricao: "Volta das eleições diretas. Mercosul (1991).",
      }
    ],
    ordemCerta: ["colonizacao", "independencia", "industria", "ditaduras", "democracia"],
    feedbackAcerto: "Perfeito! Da colônia ao Mercosul.",
    feedbackErro: "Comece pela colonização (1500) e termine na redemocratização.",
    falaFinal: "500 anos em 5 marcos.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com atenção. Marque as palavras-chave.",
    tituloLivro: "📘 Manual da América Latina",
    subtitulo: "Capítulo 1 — O que é ser latino",
    paragrafos: [
      {
        id: "p1",
        texto: "A AMÉRICA LATINA é formada por 20 países colonizados por PORTUGAL, ESPANHA ou FRANÇA. Todos falam línguas de origem LATINA.",
        chaves: ["américa latina", "colonizados", "línguas latinas"],
      },
      {
        id: "p2",
        texto: "A COLONIZAÇÃO IBÉRICA (séc. XVI–XIX) extraiu OURO e PRATA usando trabalho INDÍGENA e AFRICANO escravizado. Deixou marca profunda.",
        chaves: ["colonização ibérica", "ouro", "escravizado"],
      },
      {
        id: "p3",
        texto: "Da mistura de europeus, indígenas e africanos nasceu a MESTIÇAGEM cultural: samba, tango, salsa. É a marca da identidade latino-americana.",
        chaves: ["mestiçagem", "identidade"],
      },
      {
        id: "p4",
        texto: "Mesmo independentes, os países latinos vivem em DEPENDÊNCIA: vendem matéria-prima barata e compram industrializados caros. Isso explica a DESIGUALDADE brutal da região.",
        chaves: ["dependência", "desigualdade"],
      }
    ],
    falaFinal: "Leu tudo? Bora ao minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo ANALISTA EXPRESS! Qual conceito explica cada situação?",
    instrucao: "⏱️ Escolha o conceito certo",
    duracaoSegundos: 15,
    pecas: [
      { id: "bol", emoji: "🇻🇪", rotulo: "Bolívar" },
      { id: "mest", emoji: "🎭", rotulo: "Mestiçagem" },
      { id: "dep", emoji: "🔗", rotulo: "Dependência" },
      { id: "des", emoji: "⚖️", rotulo: "Desigualdade" },
      { id: "mer", emoji: "🤝", rotulo: "Mercosul" },
      { id: "dit", emoji: "🪖", rotulo: "Ditaduras" }
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Libertou 5 países", emoji: "🎆", cor: "from-amber-400 to-orange-600" },
        municipioB: { nome: "Venezuelano", emoji: "🇻🇪", cor: "from-red-400 to-rose-600" },
        contexto: "Militar e político que libertou boa parte da América espanhola:",
        pecaCertaId: "bol",
        feedbackAcerto: "Isso! BOLÍVAR — libertador da América espanhola.",
        feedbackErro: "Venezuelano + libertador = BOLÍVAR.",
      },
      {
        id: "r2",
        municipioA: { nome: "Samba + tango", emoji: "🎵", cor: "from-emerald-400 to-teal-600" },
        municipioB: { nome: "Mistura de povos", emoji: "🎭", cor: "from-red-400 to-rose-600" },
        contexto: "Como se chama a mistura biológica e cultural latino-americana?",
        pecaCertaId: "mest",
        feedbackAcerto: "Boa! MESTIÇAGEM — a alma cultural da região.",
        feedbackErro: "Mistura de indígena + europeu + africano = MESTIÇAGEM.",
      },
      {
        id: "r3",
        municipioA: { nome: "Vende barato", emoji: "🌾", cor: "from-sky-400 to-indigo-600" },
        municipioB: { nome: "Compra caro", emoji: "📱", cor: "from-emerald-400 to-teal-600" },
        contexto: "Modelo econômico em que o país exporta matéria-prima e importa industrializados:",
        pecaCertaId: "dep",
        feedbackAcerto: "Isso! DEPENDÊNCIA econômica.",
        feedbackErro: "Vende primário + compra secundário = DEPENDÊNCIA.",
      },
      {
        id: "r4",
        municipioA: { nome: "Poucos ricos", emoji: "💎", cor: "from-sky-400 to-blue-600" },
        municipioB: { nome: "Muitos pobres", emoji: "🏚️", cor: "from-purple-400 to-fuchsia-600" },
        contexto: "Região é a MAIS desigual do mundo por causa da:",
        pecaCertaId: "des",
        feedbackAcerto: "Boa! DESIGUALDADE social — herança colonial.",
        feedbackErro: "Concentração de renda extrema = DESIGUALDADE.",
      },
      {
        id: "r5",
        municipioA: { nome: "Bloco econômico", emoji: "🤝", cor: "from-yellow-400 to-amber-600" },
        municipioB: { nome: "Brasil + Argentina", emoji: "🇧🇷", cor: "from-orange-400 to-red-600" },
        contexto: "Bloco criado em 1991 para integrar economias do Cone Sul:",
        pecaCertaId: "mer",
        feedbackAcerto: "Isso! MERCOSUL — Brasil, Argentina, Uruguai, Paraguai.",
        feedbackErro: "1991 + Cone Sul = MERCOSUL.",
      },
      {
        id: "r6",
        municipioA: { nome: "Golpes militares", emoji: "🪖", cor: "from-emerald-400 to-green-600" },
        municipioB: { nome: "Anos 60–80", emoji: "📅", cor: "from-amber-400 to-orange-600" },
        contexto: "Período de governos autoritários apoiados pelos EUA contra o comunismo:",
        pecaCertaId: "dit",
        feedbackAcerto: "Isso! DITADURAS militares — Brasil, Chile, Argentina.",
        feedbackErro: "Golpes anos 60–80 = DITADURAS militares.",
      }
    ],
    falaFinal: "6 conceitos, 6 acertos. Você entende a América Latina.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da AMÉRICA LATINA: as duas grandes divisões.",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "iberica",
        rotulo: "América Ibérica",
        emoji: "🇵🇹",
        percentual: 90,
        cor: "#f59e0b",
        descricao: "Colonizada por Portugal e Espanha. 19 países. 640 milhões de pessoas. Línguas: português (só Brasil) e espanhol (18 países).",
        exemplos: ["🇧🇷 Brasil", "🇲🇽 México", "🇦🇷 Argentina", "🇨🇴 Colômbia"],
      },
      {
        id: "francesa",
        rotulo: "América Francesa",
        emoji: "🇫🇷",
        percentual: 10,
        cor: "#8b5cf6",
        descricao: "Colonizada pela França. Haiti (independente) e Guiana Francesa (ainda território). Cerca de 20 milhões de pessoas.",
        exemplos: ["🇭🇹 Haiti", "🇬🇫 Guiana Francesa"],
      }
    ],
    falaFinal: "90% ibérica, 10% francesa. Uma região, muitas heranças.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais para ganhar o selo Explorador da América Latina.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "A América Latina é assim chamada porque:",
        opcoes: [
          { id: "a", texto: "a", correta: true },
          { id: "b", texto: "b", correta: true },
          { id: "c", texto: "c", correta: true },
        ],
        feedbackAcerto: "Isso! Portugal, Espanha e França — línguas latinas.",
        feedbackErro: "Não é geografia; é herança colonial linguística.",
      },
      {
        id: "av2",
        pergunta: "O principal libertador da América espanhola foi:",
        opcoes: [
          { id: "a", texto: "a", correta: true },
          { id: "b", texto: "b", correta: true },
          { id: "c", texto: "c", correta: true },
        ],
        feedbackAcerto: "Perfeito! Bolívar libertou 5 países atuais.",
        feedbackErro: "D. Pedro libertou só o Brasil. BOLÍVAR foi o libertador latino.",
      },
      {
        id: "av3",
        pergunta: "'Dependência econômica' na América Latina significa:",
        opcoes: [
          { id: "a", texto: "a", correta: true },
          { id: "b", texto: "b", correta: true },
          { id: "c", texto: "c", correta: true },
        ],
        feedbackAcerto: "Isso! Modelo colonial perpetuado.",
        feedbackErro: "Dependência = vender primário barato + comprar secundário caro.",
      }
    ],
    selo: {
      nome: "Explorador da América Latina",
      subtitulo: "Insígnia do Latino-Americanista",
      emoji: "🌎",
      cor: "from-amber-400 to-orange-600",
    },
    falaFinal: "Insígnia conquistada! Você domina a identidade latino-americana.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Explorador da América Latina" },
};
