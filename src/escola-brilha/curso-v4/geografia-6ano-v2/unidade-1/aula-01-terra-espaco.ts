import type { AulaGeoV1 } from "../../types";
import terraEspaco from "@/assets/geografia-6ano/terra-espaco.jpg";
import orbitaEstacoes from "@/assets/geografia-6ano/orbita-estacoes.jpg";
import rotacaoDiaNoite from "@/assets/geografia-6ano/rotacao-dia-noite.jpg";

/**
 * Geografia · 6º Ano (PILOTO v2 — formato 5º Ano) · Unidade 1 · Aula 01
 * "A Terra no Espaço: Rotação, Translação e Inclinação"
 * BNCC EF06GE01
 *
 * Linguagem: adolescente (12 anos), conceitos científicos com analogias reais.
 * Padrão: 11 cenas visuais interativas (PlayerGeoV1).
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-terra-espaco",
  titulo: "A Terra no Espaço",
  iconeTrilha: "🌍",
  bncc: ["EF06GE01"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: terraEspaco,
    imagemDestaqueUrl: terraEspaco,
    aurora:
      "Ei, explorador. Essa foto é REAL — Terra vista da Estação Espacial. Metade iluminada, metade no escuro. Isso não é coincidência: é a Terra girando enquanto viaja pelo espaço a 107 mil km/h. Três movimentos criam TUDO: dia, noite, verão, inverno.",
    falaFinal: "Rotação, Translação, Inclinação. Três palavras que explicam sua vida inteira.",
  },


  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes de estudar, chuta: por que na Austrália é VERÃO no mês do Natal, enquanto no Brasil também é verão, mas na Rússia é inverno pesado?",
    pergunta: "O que causa as estações do ano?",
    opcoes: [
      {
        id: "distancia",
        titulo: "A DISTÂNCIA da Terra ao Sol",
        subtitulo: "verão quando está perto, inverno quando afasta",
        emoji: "☀️",
        cor: "from-amber-800 to-amber-950",
      },
      {
        id: "inclinacao",
        titulo: "A INCLINAÇÃO do eixo",
        subtitulo: "o hemisfério inclinado pro Sol vira verão",
        emoji: "🌍",
        cor: "from-cyan-800 to-slate-950",
      },
    ],
    respostaCerta: "inclinacao",
    feedbackAcerto:
      "Exato! Não é a distância — a órbita é quase circular. É a INCLINAÇÃO de 23,5° do eixo que faz o hemisfério inclinado receber luz mais direta.",
    feedbackErro:
      "Erro comum, mas não. A Terra fica ATÉ MAIS PERTO do Sol em janeiro (verão no sul). O segredo é o EIXO INCLINADO.",
    falaFinal: "Inclinação = estações. Guarde isso. Vamos entender direito.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras da astronomia geográfica. Abra cada caderno.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "rotacao",
        capa: "1. Rotação",
        emoji: "🔄",
        cor: "from-cyan-800 to-slate-950",
        conteudo:
          "ROTAÇÃO é o giro da Terra em torno do próprio eixo. Dura 24 horas (1 dia). É o que causa DIA e NOITE. A Terra gira de OESTE pra LESTE — por isso o Sol 'nasce' no leste.",
        exemplo: "Ex.: por isso Tóquio amanhece antes de São Paulo.",
        fotoUrl: rotacaoDiaNoite,
      },
      {
        id: "translacao",
        capa: "2. Translação",
        emoji: "🛰️",
        cor: "from-indigo-800 to-slate-950",
        conteudo:
          "TRANSLAÇÃO é a volta da Terra ao redor do Sol. Dura 365 dias e 6 horas (1 ano). As 6 horas extras se acumulam: a cada 4 anos vira 1 dia = ano BISSEXTO (29 de fevereiro).",
        exemplo: "Ex.: 2024 foi bissexto. Próximo será 2028.",
      },
      {
        id: "eixo",
        capa: "3. Eixo inclinado",
        emoji: "📐",
        cor: "from-amber-800 to-amber-950",
        conteudo:
          "O EIXO da Terra é uma linha imaginária entre os polos. Está INCLINADO 23,5° em relação à órbita — como um pião torto. Essa inclinação nunca muda de direção.",
        exemplo: "Ex.: por isso em junho o polo Norte fica virado pro Sol.",
      },
      {
        id: "estacoes",
        capa: "4. Estações do ano",
        emoji: "🍂",
        cor: "from-emerald-800 to-slate-950",
        conteudo:
          "ESTAÇÕES são resultado de rotação + translação + eixo inclinado. Quando um hemisfério fica inclinado PRO Sol = VERÃO ali. O outro = INVERNO. Por isso são INVERTIDAS entre norte e sul.",
        exemplo: "Ex.: Natal na Austrália é na praia. Natal na Suécia é na neve.",
        fotoUrl: orbitaEstacoes,
      },
    ],
    falaFinal: "Rotação, translação, eixo, estações. Todo o resto se explica com essas 4.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada posição da Terra na órbita. Ouça o que acontece.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: orbitaEstacoes,
    pontos: [
      {
        id: "solsticio-jun",
        x: 82,
        y: 50,
        emoji: "☀️",
        cor: "from-amber-800 to-amber-950",
        titulo: "Junho — Solstício de Verão (Norte)",
        texto:
          "Polo Norte inclinado PRO Sol. Verão no hemisfério norte (EUA, Europa). Aqui no Brasil? INVERNO. Dias mais curtos do ano no sul.",
      },
      {
        id: "equinocio-set",
        x: 50,
        y: 82,
        emoji: "⚖️",
        cor: "from-teal-800 to-slate-950",
        titulo: "Setembro — Equinócio",
        texto:
          "Nenhum hemisfério inclinado pro Sol. Dia e noite duram IGUAL (12h + 12h) no planeta todo. Começa a primavera no sul, outono no norte.",
      },
      {
        id: "solsticio-dez",
        x: 18,
        y: 50,
        emoji: "🎄",
        cor: "from-cyan-800 to-slate-950",
        titulo: "Dezembro — Solstício de Verão (Sul)",
        texto:
          "Polo SUL inclinado pro Sol. VERÃO no Brasil, Austrália, África do Sul. Natal na praia. No norte, inverno pesado com neve.",
        fotoUrl: rotacaoDiaNoite,
      },
      {
        id: "equinocio-mar",
        x: 50,
        y: 18,
        emoji: "🌸",
        cor: "from-rose-900 to-slate-950",
        titulo: "Março — Equinócio",
        texto:
          "De novo dia = noite no planeta todo. Começa o outono no sul, primavera no norte. A Terra completou 3/4 da volta.",
      },
    ],
    falaFinal: "4 posições na órbita = 4 estações. É a inclinação, não a distância.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas. Sem cola.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "O movimento que causa DIA e NOITE é...",
        cards: [
          { id: "rot", emoji: "🔄", titulo: "Rotação", cor: "from-cyan-800 to-slate-950" },
          { id: "trans", emoji: "🛰️", titulo: "Translação", cor: "from-indigo-800 to-slate-950" },
          { id: "incl", emoji: "📐", titulo: "Inclinação", cor: "from-amber-800 to-amber-950" },
        ],
        correta: "rot",
        feedbackAcerto: "Isso! ROTAÇÃO = 24 horas = 1 dia = ciclo dia/noite.",
        feedbackErro: "Translação dura 1 ano. Inclinação é fixa. DIA/NOITE = ROTAÇÃO.",
      },
      {
        id: "q2",
        pergunta: "Quando é VERÃO no Brasil?",
        fotoUrl: orbitaEstacoes,
        cards: [
          { id: "dez", emoji: "🎄", titulo: "Dezembro–Março", cor: "from-rose-900 to-slate-950" },
          { id: "jun", emoji: "❄️", titulo: "Junho–Setembro", cor: "from-cyan-900 to-indigo-950" },
          { id: "sem", emoji: "🌀", titulo: "Ano todo igual", cor: "from-slate-800 to-slate-950" },
        ],
        correta: "dez",
        feedbackAcerto: "Isso! No sul, verão vai de dezembro a março — polo sul inclinado pro Sol.",
        feedbackErro: "Junho é verão no NORTE. No sul (Brasil), verão é DEZ–MAR.",
      },
      {
        id: "q3",
        pergunta: "O que causa as ESTAÇÕES do ano?",
        cards: [
          { id: "dist", emoji: "📏", titulo: "Distância ao Sol", cor: "from-amber-800 to-amber-950" },
          { id: "eixo", emoji: "📐", titulo: "Inclinação do eixo", cor: "from-emerald-800 to-slate-950" },
          { id: "lua", emoji: "🌙", titulo: "Fases da Lua", cor: "from-slate-800 to-slate-950" },
        ],
        correta: "eixo",
        feedbackAcerto: "Perfeito! Eixo inclinado a 23,5° = estações opostas nos dois hemisférios.",
        feedbackErro: "Distância quase não muda. Lua controla marés. Estações = EIXO INCLINADO.",
      },
    ],
    falaFinal: "3 acertos = você entende Terra no espaço melhor que a maioria dos adultos.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "No Brasil, as estações são mais MARCADAS no SUL (RS, SC, PR) e quase inexistentes no NORTE (AM, RR, PA). Marque os estados onde faz FRIO DE VERDADE no inverno.",
    instrucao: "Acenda os 3 estados do Sul do Brasil",
    missao: {
      tipo: "selecionar",
      siglas: ["RS", "SC", "PR"],
      pergunta: "Onde o inverno é mais FRIO no Brasil?",
    },
    falaFinal:
      "RS, SC, PR — mais longe do Equador, mais inclinados pra longe do Sol no inverno = mais frio. Perto do Equador (AM, RR), inclinação quase não muda a luz = calor o ano todo.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize a órbita da Terra ao longo do ano. Comece por Janeiro.",
    instrucao: "Toque na ordem cronológica",
    pergunta: "Ordem das estações no hemisfério SUL (Brasil):",
    paradas: [
      {
        id: "verao",
        emoji: "🏖️",
        rotulo: "1. Verão (dez–mar)",
        descricao: "Polo Sul inclinado pro Sol. Dias longos, muito calor. Chuvas no sudeste.",
      },
      {
        id: "outono",
        emoji: "🍂",
        rotulo: "2. Outono (mar–jun)",
        descricao: "Equinócio de março. Dias e noites iguais. Folhas caem, temperatura cai.",
      },
      {
        id: "inverno",
        emoji: "❄️",
        rotulo: "3. Inverno (jun–set)",
        descricao: "Polo Sul inclinado pra LONGE do Sol. Dias curtos, frio, seca no centro-oeste.",
      },
      {
        id: "primavera",
        emoji: "🌸",
        rotulo: "4. Primavera (set–dez)",
        descricao: "Equinócio de setembro. Flores desabrocham, temperatura sobe. Volta a chover.",
      },
    ],
    ordemCerta: ["verao", "outono", "inverno", "primavera"],
    feedbackAcerto: "Perfeita! Uma volta completa da Terra em torno do Sol = 4 estações.",
    feedbackErro: "Repense: começamos no verão (dez). Depois outono, inverno, primavera.",
    falaFinal: "365 dias, 4 estações, 1 volta completa. Isso é translação.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia com atenção e marque as palavras-chave de cada parágrafo.",
    tituloLivro: "📘 Manual do Explorador Planetário",
    subtitulo: "Capítulo 1 — Movimentos da Terra",
    paragrafos: [
      {
        id: "p1",
        texto:
          "A ROTAÇÃO é o giro da Terra em torno do próprio eixo. Dura 24 horas e causa o ciclo do DIA e da NOITE.",
        chaves: ["rotação", "24 horas", "dia", "noite"],
      },
      {
        id: "p2",
        texto:
          "A TRANSLAÇÃO é a volta da Terra ao redor do SOL. Dura 365 dias e 6 horas — origem do ano BISSEXTO.",
        chaves: ["translação", "365", "sol", "bissexto"],
      },
      {
        id: "p3",
        texto:
          "O EIXO da Terra está INCLINADO em 23,5°. Essa inclinação é a verdadeira causa das ESTAÇÕES do ano.",
        chaves: ["eixo", "23,5", "inclinado", "estações"],
      },
      {
        id: "p4",
        texto:
          "As estações são INVERTIDAS entre os hemisférios: quando é verão no SUL, é inverno no NORTE, e vice-versa.",
        chaves: ["invertidas", "verão", "inverno", "hemisférios"],
      },
    ],
    falaFinal: "Leu tudo? Boa. Bora testar num minijogo cronometrado.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo ASTRÔNOMO EXPRESS! Cada rodada mostra uma cena — escolha o MOVIMENTO responsável.",
    instrucao: "⏱️ Qual movimento explica isso?",
    duracaoSegundos: 12,
    pecas: [
      { id: "rotacao", emoji: "🔄", rotulo: "Rotação" },
      { id: "translacao", emoji: "🛰️", rotulo: "Translação" },
      { id: "inclinacao", emoji: "📐", rotulo: "Inclinação do eixo" },
      { id: "combinado", emoji: "🌍", rotulo: "Rotação + Translação" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Amanhece em Tóquio", emoji: "🌅", cor: "from-amber-800 to-amber-950" },
        municipioB: { nome: "Anoitece em SP", emoji: "🌆", cor: "from-indigo-800 to-slate-950" },
        contexto: "Enquanto o Japão acorda, o Brasil dorme. Que movimento explica?",
        pecaCertaId: "rotacao",
        feedbackAcerto: "Isso! ROTAÇÃO gira a Terra em 24h — fusos horários diferentes.",
        feedbackErro: "Diferença de horas entre países = ROTAÇÃO da Terra.",
      },
      {
        id: "r2",
        municipioA: { nome: "Natal na praia", emoji: "🏖️", cor: "from-cyan-800 to-slate-950" },
        municipioB: { nome: "Ano Novo no calor", emoji: "🎇", cor: "from-rose-900 to-slate-950" },
        contexto: "Verão de dezembro a março no Brasil. Que movimento explica?",
        pecaCertaId: "inclinacao",
        feedbackAcerto: "Perfeito! Eixo INCLINADO faz o hemisfério sul receber mais luz em dezembro.",
        feedbackErro: "Verão no Natal = INCLINAÇÃO. O hemisfério sul está virado pro Sol.",
      },
      {
        id: "r3",
        municipioA: { nome: "Ano bissexto 2024", emoji: "📅", cor: "from-indigo-800 to-slate-950" },
        municipioB: { nome: "29 de fevereiro", emoji: "🗓️", cor: "from-teal-800 to-slate-950" },
        contexto: "A cada 4 anos, fevereiro tem 29 dias. Por quê?",
        pecaCertaId: "translacao",
        feedbackAcerto: "Isso! TRANSLAÇÃO dura 365d + 6h. As 6h acumulam em 1 dia extra a cada 4 anos.",
        feedbackErro: "Ano bissexto = TRANSLAÇÃO. A volta ao Sol dura 365,25 dias.",
      },
      {
        id: "r4",
        municipioA: { nome: "Junho na Europa", emoji: "☀️", cor: "from-amber-800 to-amber-950" },
        municipioB: { nome: "Junho no Brasil", emoji: "🧥", cor: "from-slate-800 to-slate-950" },
        contexto: "No mesmo mês, Europa faz sol de verão e Brasil está no inverno. Por quê?",
        pecaCertaId: "inclinacao",
        feedbackAcerto: "Correto! Estações OPOSTAS entre hemisférios = INCLINAÇÃO do eixo.",
        feedbackErro: "Estações opostas nos dois hemisférios = INCLINAÇÃO.",
      },
      {
        id: "r5",
        municipioA: { nome: "Sol nasce no leste", emoji: "🌄", cor: "from-amber-800 to-amber-950" },
        municipioB: { nome: "Sol se põe no oeste", emoji: "🌇", cor: "from-rose-900 to-slate-950" },
        contexto: "Todo dia o Sol 'nasce' no leste e 'se põe' no oeste. Que movimento?",
        pecaCertaId: "rotacao",
        feedbackAcerto: "Isso! A Terra gira de OESTE pra LESTE — por isso o Sol parece cruzar o céu.",
        feedbackErro: "Sol nascendo no leste = ROTAÇÃO da Terra (oeste → leste).",
      },
      {
        id: "r6",
        municipioA: { nome: "Um ano completo", emoji: "🔁", cor: "from-teal-800 to-slate-950" },
        municipioB: { nome: "365 dias", emoji: "🎉", cor: "from-indigo-800 to-slate-950" },
        contexto: "Quantos dias a Terra leva pra dar 1 volta no Sol?",
        pecaCertaId: "translacao",
        feedbackAcerto: "Isso! TRANSLAÇÃO completa = 365 dias e 6 horas.",
        feedbackErro: "1 volta no Sol = TRANSLAÇÃO = 1 ano.",
      },
    ],
    falaFinal: "6 rodadas, 6 movimentos identificados. Astrônomo de carteirinha!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza do TEMPO na Terra: quanto dura cada movimento?",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "rotacao",
        rotulo: "Rotação — 24 h (1 dia)",
        emoji: "🔄",
        percentual: 50,
        cor: "#0ea5e9",
        descricao:
          "A Terra gira UMA vez em torno do próprio eixo a cada 24 horas. É o movimento MAIS RÁPIDO — 1.670 km/h no Equador.",
        exemplos: ["🌅 Amanhecer", "🌆 Anoitecer", "🕐 Fusos horários"],
      },
      {
        id: "translacao",
        rotulo: "Translação — 365 d (1 ano)",
        emoji: "🛰️",
        percentual: 50,
        cor: "#a855f7",
        descricao:
          "A Terra viaja 940 milhões de km em volta do Sol em 365,25 dias — a 107.000 km/h! As 6h extras viram o ano bissexto.",
        exemplos: ["📅 Ano bissexto", "🍂 Estações", "🎂 Aniversário"],
      },
    ],
    falaFinal: "Rotação rápida = dia. Translação longa = ano. Juntas, criam toda a Geografia.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Astrônomo Geográfico.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "O movimento que dura 24 horas e causa DIA e NOITE se chama:",
        opcoes: [
          { id: "a", texto: "Translação", correta: false },
          { id: "b", texto: "Rotação", correta: true },
          { id: "c", texto: "Inclinação", correta: false },
        ],
        feedbackAcerto: "Isso! ROTAÇÃO = giro em 24h = ciclo dia/noite.",
        feedbackErro: "Translação dura 1 ano. Inclinação é fixa. 24h = ROTAÇÃO.",
      },
      {
        id: "av2",
        pergunta: "As ESTAÇÕES do ano existem porque:",
        opcoes: [
          { id: "a", texto: "A Terra fica mais perto ou mais longe do Sol", correta: false },
          { id: "b", texto: "O eixo da Terra é inclinado a 23,5°", correta: true },
          { id: "c", texto: "A Lua muda de fase", correta: false },
        ],
        feedbackAcerto: "Perfeito! INCLINAÇÃO do eixo faz cada hemisfério receber mais ou menos luz.",
        feedbackErro: "Distância quase não muda. Lua = marés. Estações = INCLINAÇÃO do eixo.",
      },
      {
        id: "av3",
        pergunta: "Quando é VERÃO no hemisfério NORTE, no hemisfério SUL é:",
        opcoes: [
          { id: "a", texto: "Também verão", correta: false },
          { id: "b", texto: "Inverno", correta: true },
          { id: "c", texto: "Primavera", correta: false },
        ],
        feedbackAcerto: "Isso! As estações são SEMPRE opostas entre os hemisférios.",
        feedbackErro: "Estações são INVERTIDAS: verão no norte = INVERNO no sul.",
      },
    ],
    selo: {
      nome: "Astrônomo Geográfico",
      subtitulo: "Insígnia do Explorador Planetário",
      emoji: "🌍",
      cor: "from-cyan-800 to-slate-950",
    },
    falaFinal: "Insígnia conquistada! Você entende a Terra no espaço.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Astrônomo Geográfico" },
};
