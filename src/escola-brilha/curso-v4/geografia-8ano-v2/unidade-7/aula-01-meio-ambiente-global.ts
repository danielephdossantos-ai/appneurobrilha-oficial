import type { AulaGeoV1 } from "../../types";
import cop from "@/assets/geografia-8ano/cop-clima.jpg";
import amazonia from "@/assets/geografia-8ano/desmatamento-amazonia.jpg";
import solar from "@/assets/geografia-8ano/energia-solar.jpg";
import poluicao from "@/assets/geografia-8ano/poluicao-cidade.jpg";

/**
 * Geografia · 8º Ano · Unidade 7 · Aula 01
 * "Meio Ambiente e Desafios Globais" — BNCC EF08GE19, EF08GE22
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-meio-ambiente-global",
  titulo: "Meio Ambiente e Desafios Globais",
  iconeTrilha: "🌱",
  bncc: ["EF08GE19", "EF08GE22"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: cop,
    imagemDestaqueUrl: amazonia,
    aurora:
      "O planeta está DOENTE. A temperatura média subiu 1,2 °C desde 1900 por causa da queima de PETRÓLEO, CARVÃO e GÁS. Isso derrete geleiras, aumenta o nível do mar, intensifica furacões e secas. A AMAZÔNIA, maior floresta tropical do mundo, perdeu 20% da cobertura nos últimos 50 anos. A POLUIÇÃO do ar mata 7 milhões de pessoas por ano. Todo ano, os países se reúnem na COP (Conferência do Clima da ONU) pra tentar salvar o planeta. A ENERGIA SOLAR e EÓLICA são as saídas — já baratearam mais do que o petróleo em muitos países.",
    falaFinal: "1,2 °C a mais. 20% da Amazônia perdida. 7 milhões mortos por poluição/ano. O desafio do século.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Chuta antes: qual país EMITE mais gases de efeito estufa (CO₂) hoje?",
    pergunta: "Quem polui mais?",
    opcoes: [
      { id: "ch", titulo: "CHINA", subtitulo: "~30% das emissões", emoji: "🇨🇳", cor: "from-red-800 to-slate-950" },
      { id: "eua", titulo: "ESTADOS UNIDOS", subtitulo: "~14% das emissões", emoji: "🇺🇸", cor: "from-sky-800 to-slate-950" },
    ],
    respostaCerta: "ch",
    feedbackAcerto:
      "Isso! CHINA emite 30% do CO₂ mundial — mais que EUA, UE e Índia JUNTOS. Mas historicamente (desde 1750), quem mais poluiu foram os EUA e a Europa.",
    feedbackErro:
      "É a CHINA (30%). EUA (14%) vêm em 2º. Mas historicamente EUA e Europa poluíram mais desde a Revolução Industrial (1760).",
    falaFinal: "China lidera hoje. EUA e Europa lideraram no passado. Todos precisam mudar.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos-chave dos desafios ambientais.",
    instrucao: "",
    cadernos: [
      {
        id: "aq",
        capa: "1. Aquecimento global",
        emoji: "🌡️",
        cor: "from-red-800 to-slate-950",
        conteudo:
          "AQUECIMENTO GLOBAL é o aumento da temperatura média da Terra por causa do EFEITO ESTUFA — gases (CO₂, metano) segurando o calor do sol na atmosfera. Desde 1900, subiu 1,2 °C. Se passar de 1,5 °C, os efeitos serão irreversíveis.",
        exemplo:
          "Curiosidade: o gelo do ÁRTICO diminuiu 40% desde 1979. Furacões estão mais frequentes: em 2005 (Katrina) e 2017 (Harvey) destruíram cidades inteiras. No Brasil, o Rio Grande do Sul teve enchentes históricas em 2024 — 500 mil desabrigados.",
        fotoUrl: poluicao,
      },
      {
        id: "des",
        capa: "2. Desmatamento",
        emoji: "🪓",
        cor: "from-amber-800 to-orange-950",
        conteudo:
          "DESMATAMENTO é a retirada de florestas para pastagem, soja ou madeira. A AMAZÔNIA perdeu 20% (uma área maior que a França) nos últimos 50 anos. Sem árvores, o CICLO DA ÁGUA quebra: menos chuva, mais seca.",
        exemplo:
          "Curiosidade: a Amazônia gera os RIOS VOADORES — massas de vapor de água que evaporam das árvores e viajam pelo ar até o Sudeste, alimentando as chuvas de SP, MG e RJ. Sem Amazônia, sem chuva no Sudeste.",
        fotoUrl: amazonia,
      },
      {
        id: "cop",
        capa: "3. COP do Clima",
        emoji: "🌍",
        cor: "from-emerald-800 to-slate-950",
        conteudo:
          "COP (Conferência das Partes) é a reunião anual da ONU sobre CLIMA. Reúne quase 200 países pra negociar como reduzir emissões. O Brasil vai sediar a COP-30 em Belém do Pará em 2025 — a primeira COP na Amazônia.",
        exemplo:
          "Curiosidade: o ACORDO DE PARIS (COP-21, 2015) foi o mais importante — os países se comprometeram a limitar o aquecimento a 1,5 °C. Mas as promessas ainda não foram cumpridas. Emissões continuam subindo.",
        fotoUrl: cop,
      },
      {
        id: "sol",
        capa: "4. Energia solar/eólica",
        emoji: "☀️",
        cor: "from-sky-800 to-slate-950",
        conteudo:
          "ENERGIA SOLAR (painéis) e EÓLICA (turbinas) são as ENERGIAS RENOVÁVEIS que não emitem CO₂. Nos últimos 10 anos ficaram 90% mais BARATAS — hoje são mais baratas que carvão e petróleo em muitos países.",
        exemplo:
          "Curiosidade: o Brasil é o 4º país que mais gera ENERGIA EÓLICA no mundo. O RIO GRANDE DO NORTE sozinho tem mais de 3 mil turbinas eólicas — parece um mar de cataventos gigantes ao longo da costa.",
        fotoUrl: solar,
      },
    ],
    falaFinal: "Aquecimento, desmatamento, COP, renováveis. 4 chaves do desafio ambiental.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 desafios globais.",
    instrucao: "Toque nos 4 cards",
    mapaUrl: amazonia,
    pontos: [
      { id: "aq", x: 20, y: 30, emoji: "🌡️", cor: "from-red-800 to-slate-950",
        titulo: "🌡️ Aquecimento global",
        texto: "+1,2 °C desde 1900. Ártico perdeu 40% do gelo. Furacões e enchentes recordes.",
        fotoUrl: poluicao },
      { id: "des", x: 55, y: 45, emoji: "🪓", cor: "from-amber-800 to-orange-950",
        titulo: "🪓 Desmatamento amazônico",
        texto: "20% da Amazônia perdida. Sem rios voadores, sem chuva no Sudeste.",
        fotoUrl: amazonia },
      { id: "cop", x: 40, y: 60, emoji: "🌍", cor: "from-emerald-800 to-slate-950",
        titulo: "🌍 COP do Clima",
        texto: "COP-30 em Belém (2025) — primeira na Amazônia. Meta: limitar aquecimento a 1,5 °C.",
        fotoUrl: cop },
      { id: "sol", x: 75, y: 30, emoji: "☀️", cor: "from-sky-800 to-slate-950",
        titulo: "☀️ Energia renovável",
        texto: "Solar e eólica ficaram 90% mais baratas em 10 anos. Brasil é 4º maior em energia eólica.",
        fotoUrl: solar },
    ],
    falaFinal: "Problema + solução. Depende de todos.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "4 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Quanto a Terra AQUECEU desde 1900?",
        fotoUrl: poluicao,
        cards: [
          { id: "a", emoji: "🌡️", titulo: "+1,2 °C", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🥶", titulo: "-2 °C (esfriou)", cor: "from-sky-800 to-slate-950" },
          { id: "c", emoji: "🔥", titulo: "+10 °C", cor: "from-red-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. +1,2 °C. Parece pouco, mas é enorme em escala planetária.",
        feedbackErro: "É +1,2 °C. Não esfriou (é aquecimento), nem 10 °C (isso seria catastrófico)." },
      { id: "q2", pergunta: "Quanto da Amazônia foi desmatada nos últimos 50 anos?",
        fotoUrl: amazonia,
        cards: [
          { id: "a", emoji: "🪓", titulo: "20% (área maior que a França)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🌳", titulo: "1% (quase nada)", cor: "from-red-800 to-slate-950" },
          { id: "c", emoji: "💀", titulo: "80% (quase acabou)", cor: "from-amber-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. 20% — cerca de 800 mil km² (área maior que a França inteira).",
        feedbackErro: "É 20%. Nem tão pouco (1%) nem tão catastrófico (80%). Mas se passar de 25%, a floresta pode entrar em colapso." },
      { id: "q3", pergunta: "COP é a reunião anual da ONU sobre:",
        fotoUrl: cop,
        cards: [
          { id: "a", emoji: "🌍", titulo: "Clima e meio ambiente", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "⚔️", titulo: "Guerras", cor: "from-red-800 to-slate-950" },
          { id: "c", emoji: "💰", titulo: "Comércio", cor: "from-amber-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. CLIMA. COP-30 em Belém, 2025.",
        feedbackErro: "COP é do CLIMA. Guerras = Conselho de Segurança. Comércio = OMC." },
      { id: "q4", pergunta: "Energias renováveis (solar, eólica) ficaram QUANTO mais baratas em 10 anos?",
        fotoUrl: solar,
        cards: [
          { id: "a", emoji: "📉", titulo: "90% mais baratas", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "📈", titulo: "300% mais caras", cor: "from-red-800 to-slate-950" },
          { id: "c", emoji: "➖", titulo: "Mesmo preço", cor: "from-amber-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. 90% MAIS BARATAS. Hoje competem com carvão e petróleo.",
        feedbackErro: "Ficaram 90% MAIS BARATAS. Por isso energia solar/eólica está explodindo." },
    ],
    falaFinal: "4 acertos = ativista do clima.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "A Amazônia Legal é uma região formada por 9 estados brasileiros. 3 deles têm a MAIOR cobertura de floresta amazônica: AM, PA, RR. Acenda esses 3 estados-chave.",
    instrucao: "Acenda AM, PA e RR",
    missao: {
      tipo: "selecionar",
      siglas: ["AM", "PA", "RR"],
      pergunta: "Quais estados têm a maior parte da Floresta Amazônica?",
    },
    falaFinal: "Amazonas, Pará e Roraima. Coração verde do Brasil e do mundo.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene 5 marcos da agenda climática global.",
    instrucao: "Toque na ordem",
    pergunta: "Do mais antigo ao mais recente:",
    paradas: [
      { id: "1992", emoji: "🌎", rotulo: "1. ECO-92 no Rio de Janeiro (1992)",
        descricao: "Primeira grande reunião mundial sobre meio ambiente. Nasceu a Agenda 21." },
      { id: "1997", emoji: "📜", rotulo: "2. Protocolo de Kyoto (1997)",
        descricao: "Primeiro tratado internacional para reduzir emissões. Ratificado em 2005." },
      { id: "2015", emoji: "🤝", rotulo: "3. Acordo de Paris (2015)",
        descricao: "COP-21. Meta: limitar aquecimento a 1,5 °C. 196 países assinaram." },
      { id: "2020", emoji: "☀️", rotulo: "4. Solar mais barata que fóssil (2020)",
        descricao: "Energia solar bate carvão em preço na maioria dos países.", fotoUrl: solar },
      { id: "2025", emoji: "🌳", rotulo: "5. COP-30 em Belém (2025)",
        descricao: "Primeira COP na Amazônia. Brasil no centro da agenda climática.", fotoUrl: cop },
    ],
    ordemCerta: ["1992", "1997", "2015", "2020", "2025"],
    feedbackAcerto: "Perfeito! 33 anos de luta climática em ordem.",
    feedbackErro: "Comece por ECO-92 (Rio). Depois Kyoto, Paris, solar barata, COP-30 Belém.",
    falaFinal: "5 datas contam a luta pelo clima.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com calma. Termos-chave destacados.",
    tituloLivro: "📘 Manual do Explorador do Mundo",
    subtitulo: "Capítulo 7 — Meio Ambiente e Desafios Globais",
    paragrafos: [
      { id: "p1",
        texto: "O AQUECIMENTO GLOBAL é o aumento da temperatura terrestre pelo EFEITO ESTUFA. Subiu 1,2 °C desde 1900. Se passar de 1,5 °C, muitos efeitos serão irreversíveis.",
        chaves: ["AQUECIMENTO GLOBAL", "EFEITO ESTUFA"],
        definicoes: {
          "AQUECIMENTO GLOBAL": "Aumento da temperatura média da Terra por acúmulo de gases na atmosfera. Causado principalmente pela queima de combustíveis fósseis.",
          "EFEITO ESTUFA": "Gases (CO₂, metano) que seguram o calor do sol na atmosfera. É natural em pequena dose — mas em excesso, aquece o planeta.",
        },
        fotoUrl: poluicao },
      { id: "p2",
        texto: "A AMAZÔNIA perdeu 20% da cobertura em 50 anos por DESMATAMENTO. Sem árvores, os RIOS VOADORES quebram — menos chuva no Sudeste do Brasil.",
        chaves: ["AMAZÔNIA", "DESMATAMENTO", "RIOS VOADORES"],
        definicoes: {
          "AMAZÔNIA": "Maior floresta tropical do mundo. 5,5 milhões de km² em 9 países. Brasil tem 60%.",
          "DESMATAMENTO": "Retirada de florestas para pasto, soja, mineração ou madeira. Principal causa do desmatamento na Amazônia: pecuária extensiva.",
          "RIOS VOADORES": "Massas de vapor de água que evaporam da floresta amazônica e viajam pelo ar. Alimentam as chuvas do Sudeste brasileiro.",
        },
        fotoUrl: amazonia },
      { id: "p3",
        texto: "A COP é a reunião anual da ONU sobre clima. O ACORDO DE PARIS (COP-21, 2015) definiu a meta de limitar o aquecimento a 1,5 °C.",
        chaves: ["COP", "ACORDO DE PARIS"],
        definicoes: {
          "COP": "Conferência das Partes. Reunião anual de ~200 países sobre clima. A COP-30 será em Belém do Pará em 2025.",
          "ACORDO DE PARIS": "Tratado de 2015 (COP-21). Meta: limitar aquecimento a 1,5 °C. Assinado por 196 países. Metas voluntárias.",
        },
        fotoUrl: cop },
      { id: "p4",
        texto: "ENERGIAS RENOVÁVEIS (solar, EÓLICA, hidrelétrica) não emitem CO₂. Ficaram 90% mais baratas em 10 anos e já são a saída para o clima.",
        chaves: ["ENERGIAS RENOVÁVEIS", "EÓLICA"],
        definicoes: {
          "ENERGIAS RENOVÁVEIS": "Fontes de energia que não se esgotam e não emitem CO₂: sol, vento, água, biomassa, geotérmica.",
          "EÓLICA": "Energia gerada pelo vento com turbinas. Brasil é o 4º maior produtor do mundo — Rio Grande do Norte lidera.",
        },
        fotoUrl: solar },
    ],
    falaFinal: "Bora pro quiz.",
  },

  cena09_minijogo: (() => {
    const cards = [
      { id: "aq", emoji: "", titulo: "Aquecimento Global", cor: "from-slate-800 to-slate-900" },
      { id: "des", emoji: "", titulo: "Desmatamento", cor: "from-slate-800 to-slate-900" },
      { id: "cop", emoji: "", titulo: "COP", cor: "from-slate-800 to-slate-900" },
      { id: "par", emoji: "", titulo: "Acordo de Paris", cor: "from-slate-800 to-slate-900" },
      { id: "ren", emoji: "", titulo: "Energias renováveis", cor: "from-slate-800 to-slate-900" },
      { id: "rv", emoji: "", titulo: "Rios voadores", cor: "from-slate-800 to-slate-900" },
    ];
    return {
      tipo: "quizRadar" as const,
      aurora: "Quiz rápido.",
      instrucao: "Escolha o conceito correto",
      perguntas: [
        { id: "r1", pergunta: "Aumento da temperatura da Terra em 1,2 °C desde 1900.", cards, correta: "aq",
          feedbackAcerto: "Isso. AQUECIMENTO GLOBAL.", feedbackErro: "É o AQUECIMENTO GLOBAL." },
        { id: "r2", pergunta: "Retirada de florestas para pasto, soja ou madeira.", cards, correta: "des",
          feedbackAcerto: "Isso. DESMATAMENTO.", feedbackErro: "É o DESMATAMENTO. Amazônia perdeu 20%." },
        { id: "r3", pergunta: "Reunião anual da ONU sobre clima. Será em Belém em 2025.", cards, correta: "cop",
          feedbackAcerto: "Isso. COP.", feedbackErro: "É a COP. COP-30 será a primeira na Amazônia." },
        { id: "r4", pergunta: "Tratado de 2015 com meta de limitar aquecimento a 1,5 °C.", cards, correta: "par",
          feedbackAcerto: "Isso. ACORDO DE PARIS.", feedbackErro: "É o ACORDO DE PARIS (COP-21)." },
        { id: "r5", pergunta: "Fontes de energia que não emitem CO₂: sol, vento, água.", cards, correta: "ren",
          feedbackAcerto: "Isso. ENERGIAS RENOVÁVEIS.", feedbackErro: "São as ENERGIAS RENOVÁVEIS." },
        { id: "r6", pergunta: "Vapor de água que evapora da Amazônia e viaja alimentando as chuvas do Sudeste.", cards, correta: "rv",
          feedbackAcerto: "Isso. RIOS VOADORES.", feedbackErro: "São os RIOS VOADORES. Sem Amazônia, sem chuva no Sudeste." },
      ],
      falaFinal: "6 acertos = ativista do clima.",
    };
  })(),

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da matriz elétrica brasileira (uma das mais limpas do mundo).",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "ren", rotulo: "Renováveis (~83%)", emoji: "🌱", percentual: 83, cor: "#16a34a",
        descricao: "Hidrelétrica (60%), eólica (13%), solar (8%), biomassa (2%). Brasil é referência mundial em energia limpa.",
        exemplos: ["💧 Hidrelétricas", "💨 Eólicas RN/BA", "☀️ Solar MG/PI"] },
      { id: "fos", rotulo: "Fósseis (~17%)", emoji: "🛢️", percentual: 17, cor: "#7c2d12",
        descricao: "Gás natural, carvão, óleo. Emitem CO₂. Tendência é reduzir com expansão da solar e eólica.",
        exemplos: ["🔥 Gás natural", "⚫ Carvão"] },
    ],
    falaFinal: "83% da eletricidade brasileira é renovável — uma das matrizes mais limpas do planeta.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Quanto a Terra aqueceu desde 1900?",
        opcoes: [
          { id: "a", texto: "Esfriou 1 °C", correta: false },
          { id: "b", texto: "Aqueceu 1,2 °C", correta: true },
          { id: "c", texto: "Aqueceu 20 °C", correta: false },
        ],
        feedbackAcerto: "Isso! +1,2 °C.",
        feedbackErro: "Aqueceu 1,2 °C. Meta: não passar de 1,5 °C." },
      { id: "av2", pergunta: "O que é o Acordo de Paris (2015)?",
        opcoes: [
          { id: "a", texto: "Tratado sobre bombas atômicas", correta: false },
          { id: "b", texto: "Tratado climático — limitar aquecimento a 1,5 °C", correta: true },
          { id: "c", texto: "Tratado de comércio", correta: false },
        ],
        feedbackAcerto: "Isso! Tratado CLIMÁTICO para limitar aquecimento a 1,5 °C.",
        feedbackErro: "É o tratado CLIMÁTICO da COP-21. Meta de 1,5 °C." },
      { id: "av3", pergunta: "Cidade brasileira que sediará a COP-30 em 2025:",
        opcoes: [
          { id: "a", texto: "Belém do Pará", correta: true },
          { id: "b", texto: "Brasília", correta: false },
          { id: "c", texto: "Rio de Janeiro", correta: false },
        ],
        feedbackAcerto: "Isso! BELÉM DO PARÁ — primeira COP na Amazônia.",
        feedbackErro: "Será em BELÉM DO PARÁ. Primeira COP realizada na floresta amazônica." },
    ],
    selo: { nome: "Guardião do Planeta", subtitulo: "Insígnia do Explorador do Mundo", emoji: "🌱", cor: "from-emerald-800 to-slate-950" },
    falaFinal: "Insígnia conquistada! Você é um guardião do planeta.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Guardião do Planeta" },
};
