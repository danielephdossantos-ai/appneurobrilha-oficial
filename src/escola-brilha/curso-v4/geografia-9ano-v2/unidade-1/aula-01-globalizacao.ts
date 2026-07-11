import type { AulaGeoV1 } from "../../types";
import containers from "@/assets/geografia-9ano/containers-porto-global.jpg";
import internet from "@/assets/geografia-9ano/internet-fibra-submarina.jpg";
import multi from "@/assets/geografia-9ano/multinacional-hq.jpg";
import protesto from "@/assets/geografia-9ano/protesto-globalizacao.jpg";

/**
 * Geografia · 9º Ano · Unidade 1 · Aula 01
 * "Globalização e Mundo Contemporâneo" — BNCC EF09GE01, EF09GE02
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-globalizacao",
  titulo: "Globalização e Mundo Contemporâneo",
  iconeTrilha: "🌐",
  bncc: ["EF09GE01", "EF09GE02"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: containers,
    imagemDestaqueUrl: containers,
    aurora:
      "GLOBALIZAÇÃO é o processo em que o planeta virou uma rede única: mercadorias, dinheiro, informação e pessoas circulam em velocidade recorde. Um celular no seu bolso tem chip da COREIA, tela do JAPÃO, mineração de cobalto no CONGO e montagem na CHINA. Chega ao Brasil em CONTÊINERES por navios de 400 metros. E o pedido foi feito por internet — que roda em CABOS SUBMARINOS de fibra óptica. Isso é globalização.",
    falaFinal: "Nada que você usa é de um país só. Bem-vindo à era globalizada.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Chuta antes: por onde passa MAIS de 95% da internet mundial?",
    pergunta: "O que carrega quase toda a internet do planeta?",
    opcoes: [
      { id: "sat", titulo: "Satélites no espaço", subtitulo: "Starlink e afins", emoji: "🛰️", cor: "from-slate-800 to-slate-950" },
      { id: "cabo", titulo: "Cabos submarinos", subtitulo: "no fundo do oceano", emoji: "🌊", cor: "from-sky-800 to-slate-950" },
    ],
    respostaCerta: "cabo",
    feedbackAcerto:
      "Exato! Mais de 95% do tráfego global de internet passa por cerca de 500 CABOS SUBMARINOS de fibra óptica. Satélites são só 5%.",
    feedbackErro:
      "Não. Satélites carregam menos de 5%. O grosso — mais de 95% — passa por 500 CABOS SUBMARINOS no fundo dos oceanos.",
    falaFinal: "500 cabos no fundo do mar = 95% da internet mundial. Frágil e invisível.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos-chave da globalização. Explicação + exemplo real + curiosidade.",
    instrucao: "",
    cadernos: [
      {
        id: "glob",
        capa: "1. Globalização",
        emoji: "🌐",
        cor: "from-sky-800 to-slate-950",
        conteudo:
          "GLOBALIZAÇÃO é a integração mundial de economias, culturas e informações. Começou nos anos 1980 com a queda do socialismo, os contêineres e a internet. Encolheu o mundo: hoje você fala com alguém em Tóquio em 1 segundo.",
        exemplo:
          "Curiosidade: o CONTÊINER (caixa de aço de 12 metros) foi inventado em 1956 e reduziu o custo de transporte marítimo em 90%. Sem ele, não haveria globalização — importar uma camiseta da China custaria mais que fabricá-la no Brasil.",
        fotoUrl: containers,
      },
      {
        id: "multi",
        capa: "2. Multinacional",
        emoji: "🏢",
        cor: "from-slate-700 to-slate-950",
        conteudo:
          "MULTINACIONAL é uma empresa com sede em um país e fábricas ou escritórios em vários outros. Exemplos: Apple (sede nos EUA, fábricas na China), Toyota (Japão, fábricas em 27 países), Ambev (Bélgica/Brasil, presente em 50 países).",
        exemplo:
          "Curiosidade: a Apple fatura mais que o PIB de Portugal. As 500 maiores multinacionais controlam cerca de 40% da economia mundial. Nenhum país sozinho tem tanto poder quanto o conjunto delas.",
        fotoUrl: multi,
      },
      {
        id: "fluxo",
        capa: "3. Fluxos globais",
        emoji: "🔀",
        cor: "from-emerald-800 to-slate-950",
        conteudo:
          "FLUXOS GLOBAIS são as correntes que atravessam o planeta: MERCADORIAS (contêineres), CAPITAIS (dinheiro em bolsas), INFORMAÇÃO (internet) e PESSOAS (migração e turismo). Circulam 24 horas por dia sem parar.",
        exemplo:
          "Curiosidade: por dia, cerca de US$ 6 TRILHÕES são movimentados nas bolsas do mundo. Isso é o PIB anual do Japão trocando de mãos em 24 horas. A maior parte é especulação — nem toca em produtos reais.",
        fotoUrl: internet,
      },
      {
        id: "anti",
        capa: "4. Antiglobalização",
        emoji: "✊",
        cor: "from-orange-800 to-slate-950",
        conteudo:
          "ANTIGLOBALIZAÇÃO é o movimento que critica os efeitos negativos da globalização: desemprego em países ricos (fábricas migraram pra Ásia), exploração de trabalhadores pobres, destruição ambiental e domínio cultural americano.",
        exemplo:
          "Curiosidade: em 1999, 40 mil pessoas fecharam a cúpula da OMC em Seattle. Foi o marco do movimento antiglobalização. Hoje ele voltou como críticas ao livre-comércio (Trump, Brexit) e à hegemonia das big techs.",
        fotoUrl: protesto,
      },
    ],
    falaFinal: "Globalização, multinacional, fluxos e crítica. 4 palavras = mundo atual.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 pilares que sustentam a globalização. Toque em cada um pra ver a imagem e ouvir.",
    instrucao: "Toque nos 4 pilares",
    mapaUrl: containers,
    pontos: [
      { id: "cont", x: 20, y: 30, emoji: "📦", cor: "from-sky-800 to-slate-950",
        titulo: "1 — Contêineres",
        texto: "500 milhões de contêineres circulam por ano. Reduziram em 90% o custo de transporte. Sem eles, sua camiseta chinesa custaria 10x mais.",
        fotoUrl: containers },
      { id: "cab", x: 55, y: 45, emoji: "🌊", cor: "from-blue-800 to-slate-950",
        titulo: "2 — Cabos submarinos",
        texto: "500 cabos de fibra óptica cruzam os oceanos e carregam 95% da internet mundial. Um só cabo transmite 200 terabits por segundo.",
        fotoUrl: internet },
      { id: "mul", x: 35, y: 65, emoji: "🏢", cor: "from-slate-700 to-slate-950",
        titulo: "3 — Multinacionais",
        texto: "500 empresas dominam 40% da economia global. Apple, Toyota, Amazon, Samsung — nasceram em um país, produzem no mundo inteiro.",
        fotoUrl: multi },
      { id: "res", x: 70, y: 75, emoji: "✊", cor: "from-orange-800 to-slate-950",
        titulo: "4 — Resistência",
        texto: "Não é só festa. Milhões protestam contra desemprego, exploração e domínio cultural. Trump, Brexit e Occupy nasceram disso.",
        fotoUrl: protesto },
    ],
    falaFinal: "Contêiner, cabo, empresa e protesto. 4 pilares = globalização atual.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "4 perguntas de geopolítica pra fixar.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "O contêiner reduziu o custo de transporte marítimo em:",
        fotoUrl: containers,
        cards: [
          { id: "a", emoji: "📦", titulo: "90% (foi revolucionário)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "📉", titulo: "5% (foi discreto)", cor: "from-sky-800 to-slate-950" },
          { id: "c", emoji: "📈", titulo: "0% (aumentou os custos)", cor: "from-red-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. 90% de redução — é por isso que importar da Ásia virou barato.",
        feedbackErro: "Foi 90%. O contêiner é a base da globalização — sem ele, nada disso funciona." },
      { id: "q2", pergunta: "Quanto por cento da internet mundial passa por cabos submarinos?",
        fotoUrl: internet,
        cards: [
          { id: "a", emoji: "🌊", titulo: "Mais de 95%", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🛰️", titulo: "Só 30%", cor: "from-slate-700 to-slate-950" },
          { id: "c", emoji: "📡", titulo: "Só 10%", cor: "from-red-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. 95%+ — satélites carregam menos de 5%.",
        feedbackErro: "É 95%+. Satélites (Starlink e cia) são só 5% do tráfego." },
      { id: "q3", pergunta: "Multinacional é uma empresa que:",
        fotoUrl: multi,
        cards: [
          { id: "a", emoji: "🏢", titulo: "Opera em vários países", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🏭", titulo: "Só vende no país de origem", cor: "from-red-800 to-slate-950" },
          { id: "c", emoji: "🏛️", titulo: "É controlada pelo governo", cor: "from-slate-700 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. Sede em um país, atuação em muitos = MULTINACIONAL.",
        feedbackErro: "É empresa presente em VÁRIOS países. Nacional é só um; estatal é governo." },
      { id: "q4", pergunta: "O movimento antiglobalização critica principalmente:",
        fotoUrl: protesto,
        cards: [
          { id: "a", emoji: "✊", titulo: "Desemprego e exploração de trabalhadores", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🏥", titulo: "Excesso de médicos", cor: "from-red-800 to-slate-950" },
          { id: "c", emoji: "🚀", titulo: "Corrida espacial", cor: "from-sky-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. Fábricas migraram pra Ásia; milhões perderam empregos no Ocidente.",
        feedbackErro: "É desemprego + exploração. Nada a ver com médicos ou foguetes." },
    ],
    falaFinal: "4 acertos = analista de globalização.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "Os 3 principais portos brasileiros — porta de entrada e saída da globalização no Brasil — ficam em SP (Santos), ES (Vitória) e SC (Itajaí). Acenda os 3.",
    instrucao: "Acenda SP, ES e SC",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "ES", "SC"],
      pergunta: "Quais estados sediam os 3 maiores portos do Brasil?",
    },
    falaFinal: "Santos, Vitória e Itajaí. Por eles, o Brasil se conecta ao mundo.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize as 5 fases da globalização em ordem cronológica.",
    instrucao: "Toque na ordem",
    pergunta: "Do mais antigo ao mais recente:",
    paradas: [
      { id: "1956", emoji: "📦", rotulo: "1. Invenção do contêiner (1956)",
        descricao: "Malcom McLean cria a caixa de aço padronizada. Custo do frete cai 90%.", fotoUrl: containers },
      { id: "1989", emoji: "🧱", rotulo: "2. Queda do Muro de Berlim (1989)",
        descricao: "Fim do socialismo europeu. Capitalismo vira sistema global." },
      { id: "1995", emoji: "🌐", rotulo: "3. Nasce a Web (1990) e a OMC (1995)",
        descricao: "Internet comercial + regras globais de comércio. Fluxos explodem.", fotoUrl: internet },
      { id: "2007", emoji: "📱", rotulo: "4. iPhone (2007)",
        descricao: "Smartphone conecta 5 bilhões de pessoas em rede. Redes sociais dominam.", fotoUrl: multi },
      { id: "2020", emoji: "🦠", rotulo: "5. Pandemia + guerras (2020–2024)",
        descricao: "Covid, Ucrânia, tarifas dos EUA. Globalização entra em crise.", fotoUrl: protesto },
    ],
    ordemCerta: ["1956", "1989", "1995", "2007", "2020"],
    feedbackAcerto: "Perfeito! 70 anos de globalização em 5 marcos.",
    feedbackErro: "Comece pelo contêiner (1956). Depois Muro (1989), OMC (1995), iPhone (2007), crise (2020).",
    falaFinal: "5 marcos contam como o mundo virou uma rede única.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com calma. Termos-chave destacados — toque em qualquer um pra ver a definição.",
    tituloLivro: "📘 Manual do Explorador do Planeta",
    subtitulo: "Capítulo 1 — Globalização e Mundo Contemporâneo",
    paragrafos: [
      { id: "p1",
        texto: "GLOBALIZAÇÃO é a integração mundial de economias, culturas e informações. Ganhou força após 1989 com a queda do socialismo, os CONTÊINERES e a INTERNET.",
        chaves: ["GLOBALIZAÇÃO", "CONTÊINERES", "INTERNET"],
        definicoes: {
          "GLOBALIZAÇÃO": "Processo de integração mundial acelerado desde 1980. Encolheu o planeta: hoje um pedido chega em 3 dias do outro lado do mundo.",
          "CONTÊINERES": "Caixas de aço padronizadas de 12m inventadas em 1956. Reduziram o custo de frete marítimo em 90% — a base física da globalização.",
          "INTERNET": "Rede mundial de computadores. 95% do tráfego passa por 500 cabos submarinos de fibra óptica.",
        },
        fotoUrl: containers },
      { id: "p2",
        texto: "As MULTINACIONAIS têm sede em um país e produzem em vários. As 500 maiores controlam cerca de 40% da economia mundial — mais poder que quase qualquer estado.",
        chaves: ["MULTINACIONAIS"],
        definicoes: {
          "MULTINACIONAIS": "Empresas transnacionais com operações em vários países. Apple, Toyota, Samsung, Amazon. Faturam mais que muitos PIBs nacionais.",
        },
        fotoUrl: multi },
      { id: "p3",
        texto: "FLUXOS globais circulam 24h: MERCADORIAS por navios, CAPITAIS por bolsas (US$ 6 trilhões por dia), INFORMAÇÃO por cabos, PESSOAS por migração e turismo.",
        chaves: ["FLUXOS", "CAPITAIS"],
        definicoes: {
          "FLUXOS": "Correntes de mercadorias, dinheiro, informação e pessoas que atravessam o planeta sem parar. A globalização é feita de fluxos.",
          "CAPITAIS": "Dinheiro em bolsas de valores. Cerca de US$ 6 trilhões movimentam-se por dia — mais que o PIB do Japão em 24 horas.",
        },
        fotoUrl: internet },
      { id: "p4",
        texto: "Nem tudo é positivo. A ANTIGLOBALIZAÇÃO critica DESEMPREGO em países ricos, exploração de trabalhadores pobres e domínio cultural. Trump, Brexit e Occupy nasceram disso.",
        chaves: ["ANTIGLOBALIZAÇÃO", "DESEMPREGO"],
        definicoes: {
          "ANTIGLOBALIZAÇÃO": "Movimento crítico à globalização. Marco: cúpula da OMC em Seattle, 1999. Hoje inclui protecionismo (Trump) e nacionalismo (Brexit).",
          "DESEMPREGO": "Fábricas dos EUA e Europa migraram pra China e México em busca de salários baixos. Cidades como Detroit viraram fantasmas industriais.",
        },
        fotoUrl: protesto },
    ],
    falaFinal: "Leu tudo? Bora pro quiz final antes da insígnia.",
  },

  cena09_minijogo: (() => {
    const cards = [
      { id: "cont", emoji: "", titulo: "Contêiner", cor: "from-slate-800 to-slate-900" },
      { id: "mult", emoji: "", titulo: "Multinacional", cor: "from-slate-800 to-slate-900" },
      { id: "cabo", emoji: "", titulo: "Cabo submarino", cor: "from-slate-800 to-slate-900" },
      { id: "flux", emoji: "", titulo: "Fluxo de capital", cor: "from-slate-800 to-slate-900" },
      { id: "anti", emoji: "", titulo: "Antiglobalização", cor: "from-slate-800 to-slate-900" },
      { id: "omc", emoji: "", titulo: "OMC", cor: "from-slate-800 to-slate-900" },
    ];
    return {
      tipo: "quizRadar" as const,
      aurora: "Quiz rápido: pra cada descrição, escolha o conceito correto.",
      instrucao: "Escolha o conceito correto",
      perguntas: [
        { id: "r1", pergunta: "Caixa de aço padronizada de 12 metros que reduziu o frete marítimo em 90%.", cards, correta: "cont",
          feedbackAcerto: "Isso. Caixa de aço + 90% = CONTÊINER.", feedbackErro: "É o CONTÊINER. Inventado em 1956 por Malcom McLean." },
        { id: "r2", pergunta: "Empresa com sede em um país e operações em vários. Apple, Toyota, Samsung.", cards, correta: "mult",
          feedbackAcerto: "Isso. Sede + vários países = MULTINACIONAL.", feedbackErro: "É MULTINACIONAL. As 500 maiores = 40% da economia mundial." },
        { id: "r3", pergunta: "Fibra óptica no fundo do oceano que carrega 95% da internet mundial.", cards, correta: "cabo",
          feedbackAcerto: "Isso. Fibra + oceano = CABO SUBMARINO.", feedbackErro: "É o CABO SUBMARINO. São 500 no mundo — satélites são só 5% da internet." },
        { id: "r4", pergunta: "US$ 6 trilhões que circulam por dia nas bolsas de valores do planeta.", cards, correta: "flux",
          feedbackAcerto: "Isso. Dinheiro nas bolsas = FLUXO DE CAPITAL.", feedbackErro: "É FLUXO DE CAPITAL. Maior que o PIB anual do Japão trocando de mãos em 24h." },
        { id: "r5", pergunta: "Movimento que critica desemprego, exploração e domínio cultural americano.", cards, correta: "anti",
          feedbackAcerto: "Isso. Crítica ao sistema = ANTIGLOBALIZAÇÃO.", feedbackErro: "É a ANTIGLOBALIZAÇÃO. Marco: Seattle, 1999." },
        { id: "r6", pergunta: "Organização criada em 1995 que faz as regras do comércio internacional.", cards, correta: "omc",
          feedbackAcerto: "Isso. Regras do comércio mundial = OMC.", feedbackErro: "É a OMC (Organização Mundial do Comércio). Sede em Genebra." },
      ],
      falaFinal: "6 perguntas, 6 conceitos. Analista global formado.",
    };
  })(),

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza do tráfego mundial de internet (2024): distribuição por infraestrutura.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "cab", rotulo: "Cabos submarinos (~95%)", emoji: "🌊", percentual: 95, cor: "#0ea5e9",
        descricao: "500 cabos de fibra óptica cruzam os oceanos e carregam quase todo o tráfego global.",
        exemplos: ["🇺🇸 EUA↔Europa", "🇯🇵 Ásia↔EUA", "🇧🇷 Brasil↔Portugal"] },
      { id: "sat", rotulo: "Satélites (~5%)", emoji: "🛰️", percentual: 5, cor: "#64748b",
        descricao: "Starlink, Iridium e outros. Servem áreas remotas — aviões, navios, zonas rurais.",
        exemplos: ["🚀 Starlink (Musk)", "✈️ Wifi de avião", "🚢 Navios"] },
    ],
    falaFinal: "95% dos seus dados passam por cabos no fundo do mar. Frágil e essencial.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Analista Global.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Em que ano foi inventado o contêiner?",
        opcoes: [
          { id: "a", texto: "1956", correta: true },
          { id: "b", texto: "1990", correta: false },
          { id: "c", texto: "2007", correta: false },
        ],
        feedbackAcerto: "Isso! 1956, por Malcom McLean.",
        feedbackErro: "Foi em 1956. 1990 foi a Web; 2007 foi o iPhone." },
      { id: "av2", pergunta: "As 500 maiores multinacionais controlam:",
        opcoes: [
          { id: "a", texto: "40% da economia mundial", correta: true },
          { id: "b", texto: "5% da economia mundial", correta: false },
          { id: "c", texto: "90% da economia mundial", correta: false },
        ],
        feedbackAcerto: "Isso! 40% — mais que a maioria dos estados-nação.",
        feedbackErro: "É 40%. 5% é pouco; 90% seria monopólio absoluto." },
      { id: "av3", pergunta: "O marco da antiglobalização foi:",
        opcoes: [
          { id: "a", texto: "OMC em Seattle, 1999", correta: true },
          { id: "b", texto: "Copa do Mundo de 2018", correta: false },
          { id: "c", texto: "Independência do Brasil", correta: false },
        ],
        feedbackAcerto: "Isso! 40 mil manifestantes fecharam a cúpula da OMC.",
        feedbackErro: "Foi Seattle 1999. Nada a ver com Copa ou Brasil." },
    ],
    selo: { nome: "Analista Global", subtitulo: "Insígnia do Explorador do Planeta", emoji: "🌐", cor: "from-sky-800 to-slate-950" },
    falaFinal: "Insígnia conquistada! Você entende como o mundo virou uma rede.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Analista Global" },
};
