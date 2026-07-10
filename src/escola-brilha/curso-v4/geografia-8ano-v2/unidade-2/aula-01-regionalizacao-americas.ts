import type { AulaGeoV1 } from "../../types";
import hero from "@/assets/geografia-8ano/regionalizacao-americas.jpg";

/**
 * Geografia · 8º Ano · Unidade 2 · Aula 01
 * Regionalização das Américas
 * BNCC: EF08GE01, EF08GE03
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-regionalizacao-americas",
  titulo: "Regionalização das Américas",
  iconeTrilha: "🗺️",
  bncc: ["EF08GE01", "EF08GE03"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Um continente, dois mundos: por quê?",
    mapaUrl: hero,
    imagemDestaqueUrl: hero,
    aurora: "Explorador, EUA e Canadá têm IDH acima de 0,92. México e Brasil, cerca de 0,76. Haiti, 0,54. Mesmo continente, realidades completamente diferentes. A diferença começa na COLONIZAÇÃO.",
    falaFinal: "Colonização de POVOAMENTO × EXPLORAÇÃO. Essa é a chave.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Por que EUA e Canadá são ricos e a América Latina é desigual?",
    pergunta: "Por que EUA e Canadá são ricos e a América Latina é desigual?",
    opcoes: [
      { id: "clima", titulo: "Clima frio ajudou o Norte", subtitulo: "gente é mais trabalhadora", emoji: "❄️", cor: "from-slate-400 to-slate-600" },
      { id: "colonizacao", titulo: "Tipo de COLONIZAÇÃO", subtitulo: "povoamento × exploração", emoji: "🏗️", cor: "from-slate-400 to-slate-600" }
    ],
    respostaCerta: "colonizacao",
    feedbackAcerto: "Isso! Ingleses vieram para MORAR e produzir. Ibéricos, para EXTRAIR e voltar.",
    feedbackErro: "Clima não determina economia. A COLONIZAÇÃO explica melhor.",
    falaFinal: "Norte = povoamento. Sul = exploração. A diferença nasce aí.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Conceitos-chave desta aula.",
    instrucao: "Leia cada caderno",
    cadernos: [
      {
        id: "povoamento",
        capa: "1. Colonização de Povoamento",
        emoji: "🏘️",
        cor: "from-slate-500 to-slate-700",
        conteudo: "POVOAMENTO: colonos ingleses vieram com famílias, produziram para eles mesmos, criaram vilas e indústrias. Desenvolveram o país internamente.",
        exemplo: "Ex.: os pilgrims fundaram cidades na Nova Inglaterra (1620).",
      },
      {
        id: "exploracao",
        capa: "2. Colonização de Exploração",
        emoji: "⛏️",
        cor: "from-slate-500 to-slate-700",
        conteudo: "EXPLORAÇÃO: portugueses e espanhóis vieram extrair ouro, prata e produtos agrícolas para enviar à Europa. Não desenvolveram indústria local.",
        exemplo: "Ex.: o Brasil produzia açúcar para Portugal por 300 anos.",
      },
      {
        id: "anglo",
        capa: "3. América Anglo-Saxônica",
        emoji: "🇺🇸",
        cor: "from-slate-500 to-slate-700",
        conteudo: "ANGLO-SAXÔNICA: EUA e Canadá. Colonizados por ingleses e franceses (povoamento). Rica, industrializada, IDH alto.",
        exemplo: "Ex.: PIB per capita dos EUA: US$ 76 mil/ano.",
      },
      {
        id: "latina",
        capa: "4. América Latina",
        emoji: "🇧🇷",
        cor: "from-slate-500 to-slate-700",
        conteudo: "LATINA: da Fronteira EUA-México até a Patagônia. Colonização de exploração. Desigual, dependente, IDH médio.",
        exemplo: "Ex.: PIB per capita do Brasil: US$ 9 mil/ano.",
      }
    ],
    falaFinal: "Povoamento, exploração, Anglo-Saxônica, Latina. 4 conceitos, 2 Américas.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada região. Ouça a diferença.",
    instrucao: "Toque em cada balão",
    mapaUrl: hero,
    pontos: [
      {
        id: "anglo",
        x: 30, y: 25,
        emoji: "🇺🇸",
        cor: "from-slate-500 to-slate-700",
        titulo: "América Anglo-Saxônica",
        texto: "EUA + Canadá. Colonização de povoamento. IDH > 0,92. Indústria e tecnologia.",
      },
      {
        id: "central",
        x: 40, y: 55,
        emoji: "🌴",
        cor: "from-slate-500 to-slate-700",
        titulo: "América Central",
        texto: "México, Guatemala, Cuba, Haiti. Ponte entre Norte e Sul. IDH médio-baixo.",
      },
      {
        id: "andina",
        x: 45, y: 70,
        emoji: "⛰️",
        cor: "from-slate-500 to-slate-700",
        titulo: "América Andina",
        texto: "Colômbia, Peru, Chile, Equador, Bolívia. Cordilheira dos Andes. Rica em minérios.",
      },
      {
        id: "platina",
        x: 55, y: 85,
        emoji: "🌾",
        cor: "from-slate-500 to-slate-700",
        titulo: "América Platina",
        texto: "Brasil (parte), Argentina, Uruguai, Paraguai. Bacia do Prata. Agronegócio forte.",
      }
    ],
    falaFinal: "4 sub-regiões, 4 realidades. Uma América só existe no mapa.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de analista.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Colonização de POVOAMENTO ocorreu principalmente em:",
        cards: [
          { id: "a", emoji: "🇺🇸", titulo: "EUA e Canadá", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🇧🇷", titulo: "Brasil", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "🇲🇽", titulo: "México", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a",
        feedbackAcerto: "Isso! Ingleses vieram com famílias para MORAR.",
        feedbackErro: "Brasil e México foram colonizados para EXTRAIR — exploração.",
      },
      {
        id: "q2",
        pergunta: "América Anglo-Saxônica inclui:",
        cards: [
          { id: "a", emoji: "🇺🇸🇨🇦", titulo: "EUA e Canadá", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🇲🇽🇺🇸", titulo: "México e EUA", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "🇧🇷🇦🇷", titulo: "Brasil e Argentina", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a",
        feedbackAcerto: "Boa! Os dois países colonizados por ingleses/franceses.",
        feedbackErro: "Só EUA e Canadá — os dois de colonização anglo-saxã.",
      },
      {
        id: "q3",
        pergunta: "A diferença entre Anglo e Latina começa em:",
        cards: [
          { id: "a", emoji: "👑", titulo: "Tipo de colonização", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🌡️", titulo: "Clima", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "⛰️", titulo: "Relevo", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a",
        feedbackAcerto: "Isso! Povoamento × exploração — a raiz de tudo.",
        feedbackErro: "Clima e relevo variam dos dois lados. A COLONIZAÇÃO explica.",
      }
    ],
    falaFinal: "Radar ok. Bora ao mapa.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Marque os países da América Anglo-Saxônica.",
    instrucao: "Acenda os países anglo-saxões",
    missao: {
      tipo: "selecionar",
      siglas: ["US", "CA"],
      pergunta: "Quais países formam a América Anglo-Saxônica?",
    },
    falaFinal: "Só EUA e Canadá — os dois de colonização inglesa/francesa de povoamento.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize a linha do tempo.",
    instrucao: "Arraste cada evento pra ordem certa",
    pergunta: "Ordem de desenvolvimento das Américas:",
    paradas: [
      {
        id: "colonizacao",
        emoji: "👑",
        rotulo: "1. Colonização diferente",
        descricao: "Norte: povoamento (indústria interna). Sul: exploração (minério para Europa).",
      },
      {
        id: "independencia",
        emoji: "🎆",
        rotulo: "2. Independência (1776 e 1822)",
        descricao: "EUA em 1776. Brasil em 1822. Mas o modelo econômico continuou diferente.",
      },
      {
        id: "industria",
        emoji: "🏭",
        rotulo: "3. Revolução Industrial",
        descricao: "EUA industrializou no séc. XIX. Brasil só começou nos anos 1930.",
      },
      {
        id: "hegemonia",
        emoji: "🌟",
        rotulo: "4. Hegemonia dos EUA",
        descricao: "Séc. XX: EUA vira potência mundial. América Latina fica dependente.",
      },
      {
        id: "integracao",
        emoji: "🤝",
        rotulo: "5. Integração Latina",
        descricao: "Séc. XXI: Mercosul, Unasul. Latinos buscam agir juntos.",
      }
    ],
    ordemCerta: ["colonizacao", "independencia", "industria", "hegemonia", "integracao"],
    feedbackAcerto: "Perfeito! Colonização gerou os dois caminhos.",
    feedbackErro: "Comece pela colonização e termine na integração latina.",
    falaFinal: "500 anos de trajetórias opostas.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com atenção. Marque as palavras-chave.",
    tituloLivro: "📘 Manual da Regionalização",
    subtitulo: "Capítulo 2 — Duas Américas",
    paragrafos: [
      {
        id: "p1",
        texto: "A REGIONALIZAÇÃO das Américas separa: AMÉRICA ANGLO-SAXÔNICA (EUA + Canadá) e AMÉRICA LATINA (do México à Argentina).",
        chaves: ["regionalização", "anglo-saxônica", "latina"],
      },
      {
        id: "p2",
        texto: "A ANGLO-SAXÔNICA foi colonizada por INGLESES e FRANCESES em regime de POVOAMENTO — colonos vieram para MORAR e desenvolver.",
        chaves: ["ingleses", "povoamento", "desenvolver"],
      },
      {
        id: "p3",
        texto: "A LATINA foi colonizada por PORTUGUESES e ESPANHÓIS em regime de EXPLORAÇÃO — extração de MATÉRIAS-PRIMAS para a Europa.",
        chaves: ["exploração", "matérias-primas"],
      },
      {
        id: "p4",
        texto: "Resultado: EUA e Canadá são POTÊNCIAS INDUSTRIAIS ricas; América Latina é DEPENDENTE, exportadora de matérias-primas e muito DESIGUAL.",
        chaves: ["potências", "dependente", "desigual"],
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
      { id: "pov", emoji: "🏘️", rotulo: "Povoamento" },
      { id: "exp", emoji: "⛏️", rotulo: "Exploração" },
      { id: "ang", emoji: "🇺🇸", rotulo: "Anglo-Saxônica" },
      { id: "lat", emoji: "🇧🇷", rotulo: "América Latina" },
      { id: "cen", emoji: "🌴", rotulo: "América Central" },
      { id: "and", emoji: "⛰️", rotulo: "Andina" }
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Colonos com família", emoji: "🏘️", cor: "from-amber-400 to-orange-600" },
        municipioB: { nome: "Vieram para ficar", emoji: "🏗️", cor: "from-red-400 to-rose-600" },
        contexto: "Tipo de colonização em que os europeus vieram para MORAR:",
        pecaCertaId: "pov",
        feedbackAcerto: "Isso! POVOAMENTO — desenvolveu vilas e indústrias.",
        feedbackErro: "Colonos com família + fixar-se = POVOAMENTO.",
      },
      {
        id: "r2",
        municipioA: { nome: "Extração de ouro", emoji: "⛏️", cor: "from-emerald-400 to-teal-600" },
        municipioB: { nome: "Enviava para Europa", emoji: "🚢", cor: "from-red-400 to-rose-600" },
        contexto: "Tipo de colonização em que se extraía riqueza para mandar embora:",
        pecaCertaId: "exp",
        feedbackAcerto: "Boa! EXPLORAÇÃO — o modelo do Brasil e México.",
        feedbackErro: "Extração + envio = EXPLORAÇÃO.",
      },
      {
        id: "r3",
        municipioA: { nome: "EUA + Canadá", emoji: "🇺🇸", cor: "from-sky-400 to-indigo-600" },
        municipioB: { nome: "Colonização inglesa", emoji: "🇬🇧", cor: "from-emerald-400 to-teal-600" },
        contexto: "Sub-região formada por 2 países ricos ao norte:",
        pecaCertaId: "ang",
        feedbackAcerto: "Isso! ANGLO-SAXÔNICA — só EUA e Canadá.",
        feedbackErro: "EUA + Canadá + inglesa = ANGLO-SAXÔNICA.",
      },
      {
        id: "r4",
        municipioA: { nome: "Brasil + Argentina", emoji: "🇧🇷", cor: "from-sky-400 to-blue-600" },
        municipioB: { nome: "Colonização ibérica", emoji: "🇵🇹", cor: "from-purple-400 to-fuchsia-600" },
        contexto: "Sub-região colonizada por Portugal e Espanha:",
        pecaCertaId: "lat",
        feedbackAcerto: "Boa! AMÉRICA LATINA — 20 países.",
        feedbackErro: "Ibérica + países ao sul = LATINA.",
      },
      {
        id: "r5",
        municipioA: { nome: "México + Cuba", emoji: "🌴", cor: "from-yellow-400 to-amber-600" },
        municipioB: { nome: "Ponte entre 2 Américas", emoji: "🌉", cor: "from-orange-400 to-red-600" },
        contexto: "Sub-região que fica entre o Norte e o Sul:",
        pecaCertaId: "cen",
        feedbackAcerto: "Isso! AMÉRICA CENTRAL — México, Cuba, Haiti.",
        feedbackErro: "Ponte + países pequenos = CENTRAL.",
      },
      {
        id: "r6",
        municipioA: { nome: "Chile + Peru", emoji: "⛰️", cor: "from-emerald-400 to-green-600" },
        municipioB: { nome: "Cordilheira", emoji: "🏔️", cor: "from-amber-400 to-orange-600" },
        contexto: "Sub-região marcada pela cordilheira dos Andes:",
        pecaCertaId: "and",
        feedbackAcerto: "Isso! ANDINA — Colômbia, Peru, Chile, Equador, Bolívia.",
        feedbackErro: "Cordilheira + oeste = ANDINA.",
      }
    ],
    falaFinal: "6 conceitos, 6 acertos. Você domina a regionalização.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza das AMÉRICAS por PIB:",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "anglo",
        rotulo: "América Anglo-Saxônica",
        emoji: "🇺🇸",
        percentual: 78,
        cor: "#0ea5e9",
        descricao: "EUA + Canadá. 2 países, mas concentram 78% do PIB das Américas. IDH alto, indústria avançada, tecnologia.",
        exemplos: ["🇺🇸 EUA", "🇨🇦 Canadá"],
      },
      {
        id: "latina",
        rotulo: "América Latina",
        emoji: "🇧🇷",
        percentual: 22,
        cor: "#f59e0b",
        descricao: "20 países. 660 milhões de pessoas. Só 22% do PIB. Economia dependente, exportadora de matéria-prima.",
        exemplos: ["🇧🇷 Brasil", "🇲🇽 México", "🇦🇷 Argentina"],
      }
    ],
    falaFinal: "2 países ao Norte concentram mais riqueza que 20 ao Sul.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais para o selo Cartógrafo das Américas.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "A América Anglo-Saxônica é formada por:",
        opcoes: [
          { id: "a", texto: "a", correta: true },
          { id: "b", texto: "b", correta: true },
          { id: "c", texto: "c", correta: true },
        ],
        feedbackAcerto: "Isso! Os dois países de colonização inglesa/francesa.",
        feedbackErro: "Só EUA e Canadá — ambos anglo-saxões.",
      },
      {
        id: "av2",
        pergunta: "Colonização de POVOAMENTO ocorreu na:",
        opcoes: [
          { id: "a", texto: "a", correta: true },
          { id: "b", texto: "b", correta: true },
          { id: "c", texto: "c", correta: true },
        ],
        feedbackAcerto: "Perfeito! Ingleses vieram para MORAR.",
        feedbackErro: "Povoamento = EUA e Canadá.",
      },
      {
        id: "av3",
        pergunta: "A América Latina foi colonizada em regime de:",
        opcoes: [
          { id: "a", texto: "a", correta: true },
          { id: "b", texto: "b", correta: true },
          { id: "c", texto: "c", correta: true },
        ],
        feedbackAcerto: "Isso! Extração para enviar à Europa.",
        feedbackErro: "EXPLORAÇÃO — extrair e mandar embora.",
      }
    ],
    selo: {
      nome: "Cartógrafo das Américas",
      subtitulo: "Insígnia do Regionalizador",
      emoji: "🗺️",
      cor: "from-sky-400 to-indigo-600",
    },
    falaFinal: "Insígnia conquistada! Você separa Anglo de Latina no automático.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Cartógrafo das Américas" },
};
