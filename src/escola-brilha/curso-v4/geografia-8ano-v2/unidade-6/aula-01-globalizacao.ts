import type { AulaGeoV1 } from "../../types";
import hero from "@/assets/geografia-8ano/globalizacao.jpg";

/**
 * Geografia · 8º Ano · Unidade 6 · Aula 01
 * Globalização e Redes Globais
 * BNCC: EF08GE10, EF08GE11
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-globalizacao",
  titulo: "Globalização e Fluxos Globais",
  iconeTrilha: "🌐",
  bncc: ["EF08GE10", "EF08GE11"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Seu tênis é chinês, seu app é americano, sua playlist é coreana. Por quê?",
    mapaUrl: hero,
    imagemDestaqueUrl: hero,
    aurora: "Explorador, seu celular tem chip taiwanês, tela sul-coreana, foi montado na China, projetado nos EUA e comprado no Brasil. Isso é GLOBALIZAÇÃO: um objeto atravessa 4 continentes antes de chegar em você. E tudo isso em semanas.",
    falaFinal: "Bora entender como o mundo virou uma rede só.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Quando a globalização começou?",
    pergunta: "Quando a globalização começou?",
    opcoes: [
      { id: "agora", titulo: "Nos anos 2000", subtitulo: "com a internet", emoji: "💻", cor: "from-slate-400 to-slate-600" },
      { id: "historia", titulo: "Séculos atrás", subtitulo: "desde as grandes navegações", emoji: "⛵", cor: "from-slate-400 to-slate-600" }
    ],
    respostaCerta: "historia",
    feedbackAcerto: "Isso! Começou no séc. XV com navegações. A internet só ACELEROU o processo.",
    feedbackErro: "A internet acelerou, mas conectar continentes começou em 1500 com Colombo.",
    falaFinal: "Globalização = 500 anos de história, com 3 fases distintas.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Conceitos-chave desta aula.",
    instrucao: "Leia cada caderno",
    cadernos: [
      {
        id: "globalizacao",
        capa: "1. Globalização",
        emoji: "🌐",
        cor: "from-slate-500 to-slate-700",
        conteudo: "GLOBALIZAÇÃO: processo de integração mundial em economia, cultura, tecnologia e política. Mercados, informações e pessoas circulam sem barreiras.",
        exemplo: "Ex.: Você assiste série coreana na Netflix americana enquanto come sushi no Brasil.",
      },
      {
        id: "multinacional",
        capa: "2. Multinacional",
        emoji: "🏢",
        cor: "from-slate-500 to-slate-700",
        conteudo: "MULTINACIONAL: empresa que atua em vários países. Sede em um lugar, fábricas em outros, escritórios em muitos.",
        exemplo: "Ex.: Coca-Cola tem sede nos EUA e vende em 200 países.",
      },
      {
        id: "dsi",
        capa: "3. Divisão do Trabalho",
        emoji: "🔧",
        cor: "from-slate-500 to-slate-700",
        conteudo: "DIVISÃO INTERNACIONAL DO TRABALHO: cada país faz uma parte do produto. China monta, Coreia faz a tela, EUA projeta, Chile fornece o cobre.",
        exemplo: "Ex.: iPhone: 43 países envolvidos.",
      },
      {
        id: "desigual",
        capa: "4. Globalização Desigual",
        emoji: "⚖️",
        cor: "from-slate-500 to-slate-700",
        conteudo: "DESIGUAL: nem todos ganham. Multinacionais e países ricos concentram lucro; países pobres viram fornecedores baratos de matéria-prima.",
        exemplo: "Ex.: África exporta cobalto, ganha pouco; EUA vende iPhone, ganha muito.",
      }
    ],
    falaFinal: "Globalização = rede + multinacional + divisão do trabalho + desigualdade.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada elo da rede global.",
    instrucao: "Toque em cada balão",
    mapaUrl: hero,
    pontos: [
      {
        id: "projeto",
        x: 25, y: 30,
        emoji: "💡",
        cor: "from-slate-500 to-slate-700",
        titulo: "Projeto (EUA/Europa)",
        texto: "Silicon Valley, Berlim. Onde ideias e patentes nascem. Alto valor agregado.",
      },
      {
        id: "componentes",
        x: 70, y: 35,
        emoji: "🔩",
        cor: "from-slate-500 to-slate-700",
        titulo: "Componentes (Coreia/Taiwan)",
        texto: "Samsung faz tela; TSMC faz chip. Tecnologia de ponta.",
      },
      {
        id: "montagem",
        x: 65, y: 60,
        emoji: "🏭",
        cor: "from-slate-500 to-slate-700",
        titulo: "Montagem (China/Vietnã)",
        texto: "Fábricas gigantes. Mão de obra barata. Milhões de trabalhadores.",
      },
      {
        id: "materia",
        x: 50, y: 80,
        emoji: "⛏️",
        cor: "from-slate-500 to-slate-700",
        titulo: "Matéria-prima (África/AL)",
        texto: "Cobalto (RD Congo), lítio (Chile), soja (Brasil). Base da cadeia.",
      }
    ],
    falaFinal: "4 etapas, 4 continentes, 1 produto. Isso é globalização.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de analista.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Globalização é:",
        cards: [
          { id: "a", emoji: "🌐", titulo: "Integração mundial em economia e cultura", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🪖", titulo: "Aliança militar entre países ricos", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "🎓", titulo: "Curso universitário", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a",
        feedbackAcerto: "Isso! Processo de conexão mundial.",
        feedbackErro: "Não é aliança militar nem curso. É integração econômica-cultural.",
      },
      {
        id: "q2",
        pergunta: "Multinacional é:",
        cards: [
          { id: "a", emoji: "🏢", titulo: "Empresa que atua em vários países", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🗺️", titulo: "País com várias nações", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "🏛️", titulo: "Governo mundial", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a",
        feedbackAcerto: "Boa! Sede em um lugar, filiais em muitos.",
        feedbackErro: "Multinacional = empresa transnacional. Não é país nem governo.",
      },
      {
        id: "q3",
        pergunta: "Na Divisão Internacional do Trabalho, países POBRES geralmente:",
        cards: [
          { id: "a", emoji: "⛏️", titulo: "Fornecem matéria-prima barata", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "💡", titulo: "Projetam produtos", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "🏭", titulo: "Montam produtos de alta tecnologia", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a",
        feedbackAcerto: "Isso! Fornecem cobalto, lítio, soja — baratos.",
        feedbackErro: "Projeto (EUA) e alta tech (Coreia) = países ricos. Matéria-prima = pobres.",
      }
    ],
    falaFinal: "Radar ok. Ao mapa.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Marque 4 centros da economia global.",
    instrucao: "Acenda 4 hubs globais",
    missao: {
      tipo: "selecionar",
      siglas: ["US", "CN", "DE", "JP"],
      pergunta: "Quais 4 países são os principais hubs da economia global?",
    },
    falaFinal: "EUA (tecnologia), China (indústria), Alemanha (engenharia), Japão (eletrônica).",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize a linha do tempo.",
    instrucao: "Arraste cada evento pra ordem certa",
    pergunta: "Fases da globalização:",
    paradas: [
      {
        id: "primeira",
        emoji: "⛵",
        rotulo: "1. Grandes Navegações (1500)",
        descricao: "Portugal e Espanha ligam Europa, América e Ásia. Início do comércio mundial.",
      },
      {
        id: "segunda",
        emoji: "🏭",
        rotulo: "2. Revolução Industrial (1750–1900)",
        descricao: "Inglaterra industrializa. Vapor conecta continentes em semanas.",
      },
      {
        id: "terceira",
        emoji: "🚢",
        rotulo: "3. Pós-Guerra (1945–1990)",
        descricao: "Empresas americanas se espalham pelo mundo. Coca-Cola vira global.",
      },
      {
        id: "quarta",
        emoji: "💻",
        rotulo: "4. Internet (1990–hoje)",
        descricao: "Comunicação instantânea. Cadeias produtivas globais. Redes sociais unem culturas.",
      }
    ],
    ordemCerta: ["primeira", "segunda", "terceira", "quarta"],
    feedbackAcerto: "Perfeito! Do caravel ao Wi-Fi.",
    feedbackErro: "Comece pelas navegações (1500) e termine na internet.",
    falaFinal: "500 anos, 4 fases. Cada uma acelerou mais.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com atenção. Marque as palavras-chave.",
    tituloLivro: "📘 Manual da Globalização",
    subtitulo: "Capítulo 6 — O mundo conectado",
    paragrafos: [
      {
        id: "p1",
        texto: "GLOBALIZAÇÃO é o processo de INTEGRAÇÃO mundial em economia, cultura, tecnologia e informação. Fez o mundo virar uma REDE ÚNICA.",
        chaves: ["globalização", "integração", "rede única"],
      },
      {
        id: "p2",
        texto: "Começou nas GRANDES NAVEGAÇÕES (1500), acelerou com a REVOLUÇÃO INDUSTRIAL (1750) e explodiu com a INTERNET (1990).",
        chaves: ["navegações", "industrial", "internet"],
      },
      {
        id: "p3",
        texto: "As MULTINACIONAIS produzem em vários países ao mesmo tempo. Um iPhone envolve mais de 40 nações — DIVISÃO INTERNACIONAL DO TRABALHO.",
        chaves: ["multinacionais", "divisão internacional do trabalho"],
      },
      {
        id: "p4",
        texto: "Mas a globalização é DESIGUAL: países ricos concentram tecnologia e lucro; países pobres viram fornecedores baratos de matéria-prima.",
        chaves: ["desigual", "fornecedores", "matéria-prima"],
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
      { id: "glo", emoji: "🌐", rotulo: "Globalização" },
      { id: "mul", emoji: "🏢", rotulo: "Multinacional" },
      { id: "dsi", emoji: "🔧", rotulo: "DIT" },
      { id: "net", emoji: "💻", rotulo: "Internet" },
      { id: "nav", emoji: "⛵", rotulo: "Navegações" },
      { id: "des", emoji: "⚖️", rotulo: "Desigualdade" }
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Integração mundial", emoji: "🌐", cor: "from-amber-400 to-orange-600" },
        municipioB: { nome: "Rede única", emoji: "🕸️", cor: "from-red-400 to-rose-600" },
        contexto: "Processo de conexão econômica e cultural mundial:",
        pecaCertaId: "glo",
        feedbackAcerto: "Isso! GLOBALIZAÇÃO — o mundo virou rede.",
        feedbackErro: "Integração mundial = GLOBALIZAÇÃO.",
      },
      {
        id: "r2",
        municipioA: { nome: "Coca-Cola", emoji: "🥤", cor: "from-emerald-400 to-teal-600" },
        municipioB: { nome: "Atua em 200 países", emoji: "🌍", cor: "from-red-400 to-rose-600" },
        contexto: "Empresa que produz e vende em vários países ao mesmo tempo:",
        pecaCertaId: "mul",
        feedbackAcerto: "Boa! MULTINACIONAL — Coca, McDonald's, Nike…",
        feedbackErro: "Coca + vários países = MULTINACIONAL.",
      },
      {
        id: "r3",
        municipioA: { nome: "iPhone em 43 países", emoji: "📱", cor: "from-sky-400 to-indigo-600" },
        municipioB: { nome: "Cada país faz uma parte", emoji: "🧩", cor: "from-emerald-400 to-teal-600" },
        contexto: "Sistema em que cada país produz uma etapa do produto:",
        pecaCertaId: "dsi",
        feedbackAcerto: "Isso! DIVISÃO INTERNACIONAL DO TRABALHO.",
        feedbackErro: "iPhone + 43 países = DIT.",
      },
      {
        id: "r4",
        municipioA: { nome: "Anos 1990", emoji: "📅", cor: "from-sky-400 to-blue-600" },
        municipioB: { nome: "Rede mundial", emoji: "💻", cor: "from-purple-400 to-fuchsia-600" },
        contexto: "Tecnologia que acelerou a globalização a partir dos anos 90:",
        pecaCertaId: "net",
        feedbackAcerto: "Boa! INTERNET — conexão instantânea entre continentes.",
        feedbackErro: "1990 + rede = INTERNET.",
      },
      {
        id: "r5",
        municipioA: { nome: "Colombo (1492)", emoji: "⛵", cor: "from-yellow-400 to-amber-600" },
        municipioB: { nome: "Portugal + Espanha", emoji: "🇵🇹", cor: "from-orange-400 to-red-600" },
        contexto: "Fase que INICIOU a globalização, ligando Europa, América e Ásia:",
        pecaCertaId: "nav",
        feedbackAcerto: "Isso! GRANDES NAVEGAÇÕES — o começo de tudo.",
        feedbackErro: "Colombo + 1492 = NAVEGAÇÕES.",
      },
      {
        id: "r6",
        municipioA: { nome: "Ricos ganham", emoji: "💰", cor: "from-emerald-400 to-green-600" },
        municipioB: { nome: "Pobres fornecem", emoji: "⛏️", cor: "from-amber-400 to-orange-600" },
        contexto: "Característica da globalização: nem todos os países ganham por igual:",
        pecaCertaId: "des",
        feedbackAcerto: "Isso! DESIGUALDADE global — riqueza concentrada.",
        feedbackErro: "Nem todos ganham = DESIGUAL.",
      }
    ],
    falaFinal: "6 conceitos, 6 acertos. Você entende a globalização.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da GLOBALIZAÇÃO: quem ganha e quem perde:",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "ricos",
        rotulo: "Países Ricos",
        emoji: "💰",
        percentual: 70,
        cor: "#0891b2",
        descricao: "EUA, UE, Japão. Concentram 70% da riqueza mundial. Projeto, tecnologia, marca — as etapas caras.",
        exemplos: [],
      },
      {
        id: "emerg",
        rotulo: "Países Emergentes",
        emoji: "📈",
        percentual: 20,
        cor: "#f59e0b",
        descricao: "China, Índia, Brasil, México, Coreia. 20% da riqueza. Indústria, montagem, serviços.",
        exemplos: [],
      },
      {
        id: "pobres",
        rotulo: "Países Pobres",
        emoji: "⛏️",
        percentual: 10,
        cor: "#dc2626",
        descricao: "África, algumas nações da Ásia e AL. Só 10% da riqueza. Fornecem matéria-prima barata.",
        exemplos: [],
      }
    ],
    falaFinal: "Globalização enriquece uns e mantém outros presos na base da cadeia.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas para o selo Conector Global.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "Globalização é:",
        opcoes: [
          { id: "a", texto: "a", correta: true },
          { id: "b", texto: "b", correta: true },
          { id: "c", texto: "c", correta: true },
        ],
        feedbackAcerto: "Isso! Processo de conexão mundial.",
        feedbackErro: "Globalização = integração, não guerra ou aliança militar.",
      },
      {
        id: "av2",
        pergunta: "Multinacional é uma empresa que:",
        opcoes: [
          { id: "a", texto: "a", correta: true },
          { id: "b", texto: "b", correta: true },
          { id: "c", texto: "c", correta: true },
        ],
        feedbackAcerto: "Perfeito! Sede em um lugar, filiais no mundo todo.",
        feedbackErro: "Multinacional = transnacional.",
      },
      {
        id: "av3",
        pergunta: "Na Divisão Internacional do Trabalho, os países pobres normalmente:",
        opcoes: [
          { id: "a", texto: "a", correta: true },
          { id: "b", texto: "b", correta: true },
          { id: "c", texto: "c", correta: true },
        ],
        feedbackAcerto: "Isso! Matéria-prima é o elo mais barato.",
        feedbackErro: "Projeto e alta tech = países ricos. Matéria-prima = países pobres.",
      }
    ],
    selo: {
      nome: "Conector Global",
      subtitulo: "Insígnia do Analista de Redes",
      emoji: "🌐",
      cor: "from-cyan-400 to-blue-600",
    },
    falaFinal: "Insígnia conquistada! Você entende o mundo em rede.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Conector Global" },
};
