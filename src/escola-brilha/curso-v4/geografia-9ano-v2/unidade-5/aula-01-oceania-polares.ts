import type { AulaGeoV1 } from "../../types";
import sydney from "@/assets/geografia-9ano/sydney-opera.jpg";
import corais from "@/assets/geografia-9ano/barreira-corais.jpg";
import antartida from "@/assets/geografia-9ano/antartida-base.jpg";
import artico from "@/assets/geografia-9ano/artico-iceberg.jpg";

/**
 * Geografia · 9º Ano · Unidade 5 · Aula 01
 * "Oceania e Regiões Polares" — BNCC EF09GE13, EF09GE18
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-oceania-polares",
  titulo: "Oceania e Regiões Polares",
  iconeTrilha: "🐧",
  bncc: ["EF09GE13", "EF09GE18"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: sydney,
    imagemDestaqueUrl: sydney,
    aurora:
      "OCEANIA é o menor continente — só 42 milhões de habitantes em 14 países. Dominado pela AUSTRÁLIA e NOVA ZELÂNDIA (economias desenvolvidas). Ao redor, milhares de ILHAS do Pacífico que somem com o aumento do nível do mar. A ANTÁRTIDA é o único continente SEM POPULAÇÃO PERMANENTE — só cientistas em 70 bases. E o ÁRTICO está PERDENDO GELO em ritmo recorde por causa do aquecimento global.",
    falaFinal: "Oceania + polos = os cantos mais remotos e frágeis do planeta.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Chuta antes: qual continente NÃO TEM população humana permanente?",
    pergunta: "Onde não vive ninguém de forma fixa?",
    opcoes: [
      { id: "aus", titulo: "Austrália", subtitulo: "só 27 milhões", emoji: "🇦🇺", cor: "from-orange-800 to-slate-950" },
      { id: "ant", titulo: "Antártida", subtitulo: "só cientistas", emoji: "🐧", cor: "from-sky-800 to-slate-950" },
    ],
    respostaCerta: "ant",
    feedbackAcerto:
      "Exato! A ANTÁRTIDA é o único continente sem população nativa. Só cerca de 1.000–5.000 cientistas em 70 bases, e mesmo assim de forma rotativa (por temporadas).",
    feedbackErro:
      "Não. A Austrália tem 27 milhões. A ANTÁRTIDA é a única sem população permanente — só cientistas em bases temporárias.",
    falaFinal: "Antártida = único continente sem gente permanente. Reservado à ciência.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos-chave de Oceania e polos. Explicação + exemplo real + curiosidade.",
    instrucao: "",
    cadernos: [
      {
        id: "aus",
        capa: "1. Austrália",
        emoji: "🇦🇺",
        cor: "from-orange-800 to-slate-950",
        conteudo:
          "AUSTRÁLIA é o maior país da Oceania (7,7 mi km²) e a 13ª maior economia mundial. Ex-colônia britânica, ainda tem a rainha inglesa como chefe de estado formal. Rica em minérios (ferro, urânio, ouro) e agricultura (lã, trigo, vinho).",
        exemplo:
          "Curiosidade: 90% dos australianos vivem numa faixa costeira de 100 km. O interior (Outback) é deserto quente com 5 habitantes por km². Também tem 40 milhões de CANGURUS — mais canguru que gente (27 milhões).",
        fotoUrl: sydney,
      },
      {
        id: "ilh",
        capa: "2. Ilhas do Pacífico",
        emoji: "🏝️",
        cor: "from-sky-800 to-slate-950",
        conteudo:
          "As MICRONÉSIA, POLINÉSIA e MELANÉSIA são 3 grupos com milhares de ilhas espalhadas pelo Pacífico. Alguns países (Tuvalu, Kiribati, Ilhas Marshall) têm elevação média de apenas 2 metros — e vão desaparecer com o aumento do mar.",
        exemplo:
          "Curiosidade: TUVALU tem só 26 km² e 12 mil habitantes. O ponto mais alto está a 4,5m. Se o nível do mar subir 1m (previsão pra 2100), o país inteiro some. O governo já está digitalizando o país pra ele existir 'na nuvem'.",
        fotoUrl: corais,
      },
      {
        id: "ant",
        capa: "3. Antártida",
        emoji: "🐧",
        cor: "from-sky-800 to-slate-950",
        conteudo:
          "ANTÁRTIDA é o continente do Polo Sul: 14 milhões de km² (2x o Brasil) cobertos por 2 km de gelo. Sem países permanentes: governado pelo TRATADO DA ANTÁRTIDA (1959, hoje 56 países), que proíbe militarização e exploração mineral até 2048.",
        exemplo:
          "Curiosidade: guarda 70% da ÁGUA DOCE do planeta em forma de gelo. Se derreter TODA, o nível do mar sobe 60 metros — inundaria Nova York, Rio, Amsterdã, Bangkok. Ainda estamos longe disso, mas o gelo antártico está diminuindo.",
        fotoUrl: antartida,
      },
      {
        id: "art",
        capa: "4. Ártico",
        emoji: "❄️",
        cor: "from-blue-800 to-slate-950",
        conteudo:
          "ÁRTICO é a região do Polo Norte — não é continente, é um OCEANO congelado cercado por Canadá, EUA (Alasca), Rússia, Noruega e Groenlândia. Aquece 4 VEZES MAIS RÁPIDO que o resto do planeta. Gelo diminui 13% por década.",
        exemplo:
          "Curiosidade: em 2007, pela 1ª vez na história, o Ártico ficou navegável no verão pelo derretimento. Rússia já reivindica o fundo do oceano ártico com um submarino que fincou uma bandeira russa lá em 2007. Petróleo e minérios estão em disputa.",
        fotoUrl: artico,
      },
    ],
    falaFinal: "Austrália, ilhas, Antártida, Ártico. 4 lugares — 3 em risco.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 cenas de Oceania e polos. Toque em cada card pra ver a imagem e ouvir.",
    instrucao: "Toque nos 4 cards",
    mapaUrl: sydney,
    pontos: [
      { id: "syd", x: 25, y: 30, emoji: "🏙️", cor: "from-orange-800 to-slate-950",
        titulo: "Sydney — capital econômica",
        texto: "5 milhões de habitantes. Ópera e Harbour Bridge. Coração financeiro da Oceania.",
        fotoUrl: sydney },
      { id: "cor", x: 55, y: 45, emoji: "🐠", cor: "from-emerald-800 to-slate-950",
        titulo: "Grande Barreira de Corais",
        texto: "2.300 km — visível do espaço. Casa de 9.000 espécies. Metade já morreu por branqueamento (águas quentes).",
        fotoUrl: corais },
      { id: "ant", x: 30, y: 70, emoji: "🐧", cor: "from-sky-800 to-slate-950",
        titulo: "Antártida — reserva científica",
        texto: "70 bases de pesquisa de 30 países. Sem população fixa. Guarda 70% da água doce do planeta.",
        fotoUrl: antartida },
      { id: "art", x: 70, y: 30, emoji: "❄️", cor: "from-blue-800 to-slate-950",
        titulo: "Ártico — em degelo",
        texto: "Aquece 4x mais rápido que o resto do mundo. Ursos-polares perdem terreno. Rússia, EUA e Canadá disputam petróleo.",
        fotoUrl: artico },
    ],
    falaFinal: "Sydney, corais, Antártida, Ártico. Uma cidade e 3 regiões em risco.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "4 perguntas de explorador polar pra fixar.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Qual continente NÃO TEM população humana permanente?",
        fotoUrl: antartida,
        cards: [
          { id: "a", emoji: "🐧", titulo: "Antártida", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🇦🇺", titulo: "Austrália", cor: "from-slate-700 to-slate-950" },
          { id: "c", emoji: "🇦🇶", titulo: "Ártico", cor: "from-red-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. ANTÁRTIDA — só cientistas em bases temporárias.",
        feedbackErro: "É a ANTÁRTIDA. O Ártico não é continente (é oceano). Austrália tem 27 mi." },
      { id: "q2", pergunta: "Quanto por cento da ÁGUA DOCE do mundo está na Antártida?",
        fotoUrl: antartida,
        cards: [
          { id: "a", emoji: "💧", titulo: "Cerca de 70%", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🚰", titulo: "Só 5%", cor: "from-slate-700 to-slate-950" },
          { id: "c", emoji: "🌊", titulo: "Cerca de 20%", cor: "from-red-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. 70% — em forma de gelo com até 4 km de espessura.",
        feedbackErro: "São 70%. Por isso o degelo antártico é tão perigoso." },
      { id: "q3", pergunta: "Pequenas ilhas como Tuvalu podem SUMIR por causa de:",
        fotoUrl: corais,
        cards: [
          { id: "a", emoji: "🌊", titulo: "Aumento do nível do mar", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🌋", titulo: "Erupções vulcânicas", cor: "from-slate-700 to-slate-950" },
          { id: "c", emoji: "🌀", titulo: "Furacões", cor: "from-red-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. Ilhas planas somem se o oceano subir 1m.",
        feedbackErro: "É o AUMENTO DO NÍVEL DO MAR (aquecimento global)." },
      { id: "q4", pergunta: "O Ártico está aquecendo em relação ao resto do planeta:",
        fotoUrl: artico,
        cards: [
          { id: "a", emoji: "🌡️", titulo: "4 vezes mais rápido", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "❄️", titulo: "Está ficando MAIS frio", cor: "from-slate-700 to-slate-950" },
          { id: "c", emoji: "⏸️", titulo: "Igual ao resto", cor: "from-red-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. 4x mais rápido — perde 13% do gelo por década.",
        feedbackErro: "É 4x MAIS RÁPIDO. Não está ficando mais frio — o degelo é acelerado." },
    ],
    falaFinal: "4 acertos = explorador polar iniciante.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "O Brasil tem 1 base científica na Antártida: a COMANDANTE FERRAZ. Ela é gerida a partir de 3 estados: SP (partida de Santos), RJ (Marinha) e RS (logística). Acenda os 3.",
    instrucao: "Acenda SP, RJ e RS",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "RJ", "RS"],
      pergunta: "De quais estados brasileiros parte a operação antártica?",
    },
    falaFinal: "Santos (SP), Rio (RJ), Rio Grande (RS). O Brasil pesquisa a Antártida desde 1984.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize os 5 marcos da exploração polar em ordem cronológica.",
    instrucao: "Toque na ordem",
    pergunta: "Do mais antigo ao mais recente:",
    paradas: [
      { id: "1911", emoji: "🚩", rotulo: "1. Amundsen chega ao Polo Sul (1911)",
        descricao: "Norueguês Roald Amundsen é o 1º humano a pisar no Polo Sul." },
      { id: "1959", emoji: "📜", rotulo: "2. Tratado da Antártida (1959)",
        descricao: "12 países assinam pacto: só ciência, proibida guerra e mineração." },
      { id: "1984", emoji: "🇧🇷", rotulo: "3. Base Comandante Ferraz (1984)",
        descricao: "Brasil inaugura sua base antártica na Ilha Rei George." },
      { id: "2007", emoji: "🏴", rotulo: "4. Bandeira russa no fundo do Ártico (2007)",
        descricao: "Rússia finca bandeira 4 km abaixo do gelo ártico. Disputa por petróleo.", fotoUrl: artico },
      { id: "2020", emoji: "🌡️", rotulo: "5. Recorde de calor no Ártico (2020)",
        descricao: "Verkhoyansk (Sibéria) atinge 38°C. Sem precedentes no Ártico.", fotoUrl: artico },
    ],
    ordemCerta: ["1911", "1959", "1984", "2007", "2020"],
    feedbackAcerto: "Perfeito! 109 anos de exploração polar em 5 marcos.",
    feedbackErro: "Amundsen (1911), Tratado (1959), Brasil (1984), Rússia (2007), calor (2020).",
    falaFinal: "5 marcos = como fomos da exploração à disputa geopolítica.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com calma. Termos-chave destacados — toque em qualquer um pra ver a definição.",
    tituloLivro: "📘 Manual do Explorador do Planeta",
    subtitulo: "Capítulo 5 — Oceania e Regiões Polares",
    paragrafos: [
      { id: "p1",
        texto: "OCEANIA é o menor continente (42 milhões de habitantes). Dominado por AUSTRÁLIA e Nova Zelândia. 90% dos australianos vivem numa faixa costeira; o interior é deserto (Outback).",
        chaves: ["OCEANIA", "AUSTRÁLIA"],
        definicoes: {
          "OCEANIA": "Continente com 14 países. Inclui Austrália, Nova Zelândia e milhares de ilhas do Pacífico (Melanésia, Micronésia, Polinésia).",
          "AUSTRÁLIA": "27 milhões de hab. 13ª maior economia. Rica em minérios e agricultura. Tem 40 milhões de cangurus — mais que gente.",
        },
        fotoUrl: sydney },
      { id: "p2",
        texto: "Ilhas do PACÍFICO como TUVALU e Kiribati têm elevação média de 2m. Vão sumir com o aumento do nível do mar. Tuvalu já está digitalizando o país pra existir 'na nuvem'.",
        chaves: ["PACÍFICO", "TUVALU"],
        definicoes: {
          "PACÍFICO": "Maior oceano do planeta (165 mi km²). Abriga milhares de ilhas em 3 grupos: Melanésia, Micronésia e Polinésia.",
          "TUVALU": "Micronação de 26 km², 12 mil habitantes e ponto mais alto de 4,5m. Vai desaparecer se o mar subir 1m (previsto pra 2100).",
        },
        fotoUrl: corais },
      { id: "p3",
        texto: "A ANTÁRTIDA é o único continente SEM POPULAÇÃO permanente. Governada pelo TRATADO DA ANTÁRTIDA (1959, 56 países): só ciência, sem armas ou mineração até 2048.",
        chaves: ["ANTÁRTIDA", "TRATADO DA ANTÁRTIDA"],
        definicoes: {
          "ANTÁRTIDA": "Continente do Polo Sul. 14 mi km² (2x o Brasil). 2 km de gelo. Guarda 70% da água doce do planeta.",
          "TRATADO DA ANTÁRTIDA": "Assinado em 1959 por 12 países (hoje 56). Proíbe atividades militares, mineração e testes nucleares.",
        },
        fotoUrl: antartida },
      { id: "p4",
        texto: "O ÁRTICO é um OCEANO congelado — não é continente. Aquece 4x mais rápido que o resto do planeta. Rússia, EUA, Canadá, Noruega e Dinamarca disputam petróleo sob o gelo derretido.",
        chaves: ["ÁRTICO"],
        definicoes: {
          "ÁRTICO": "Oceano congelado do Polo Norte cercado por 5 países. Perde 13% do gelo por década. Nova rota comercial em disputa.",
        },
        fotoUrl: artico },
    ],
    falaFinal: "Leu tudo? Bora pro quiz final antes da insígnia.",
  },

  cena09_minijogo: (() => {
    const cards = [
      { id: "aus", emoji: "", titulo: "Austrália", cor: "from-slate-800 to-slate-900" },
      { id: "nz", emoji: "", titulo: "Nova Zelândia", cor: "from-slate-800 to-slate-900" },
      { id: "tuv", emoji: "", titulo: "Tuvalu", cor: "from-slate-800 to-slate-900" },
      { id: "ant", emoji: "", titulo: "Antártida", cor: "from-slate-800 to-slate-900" },
      { id: "art", emoji: "", titulo: "Ártico", cor: "from-slate-800 to-slate-900" },
      { id: "trt", emoji: "", titulo: "Tratado da Antártida", cor: "from-slate-800 to-slate-900" },
    ];
    return {
      tipo: "quizRadar" as const,
      aurora: "Quiz rápido: pra cada descrição, escolha o lugar/conceito correto.",
      instrucao: "Escolha o correto",
      perguntas: [
        { id: "r1", pergunta: "Maior país da Oceania; 27 milhões de habitantes; ex-colônia britânica.", cards, correta: "aus",
          feedbackAcerto: "Isso. 27 mi + britânica = AUSTRÁLIA.", feedbackErro: "É a AUSTRÁLIA. Nova Zelândia tem só 5 milhões." },
        { id: "r2", pergunta: "País da Oceania conhecido pelos maori, kiwis e locação de 'O Senhor dos Anéis'.", cards, correta: "nz",
          feedbackAcerto: "Isso. Maori + Frodo = NOVA ZELÂNDIA.", feedbackErro: "É a NOVA ZELÂNDIA. 5 mi de habitantes, arquipélago vulcânico." },
        { id: "r3", pergunta: "Micronação de 26 km² que vai desaparecer com o aumento do nível do mar.", cards, correta: "tuv",
          feedbackAcerto: "Isso. Desaparecer no mar = TUVALU.", feedbackErro: "É TUVALU. 12 mil habitantes, ponto mais alto de 4,5m." },
        { id: "r4", pergunta: "Único continente sem população humana permanente.", cards, correta: "ant",
          feedbackAcerto: "Isso. Sem gente = ANTÁRTIDA.", feedbackErro: "É a ANTÁRTIDA. Só cientistas em bases temporárias." },
        { id: "r5", pergunta: "Oceano congelado que aquece 4x mais rápido que o resto do planeta.", cards, correta: "art",
          feedbackAcerto: "Isso. Aquece 4x + gelo = ÁRTICO.", feedbackErro: "É o ÁRTICO. Perde 13% do gelo por década." },
        { id: "r6", pergunta: "Acordo internacional de 1959 que proíbe militarização e mineração no Polo Sul.", cards, correta: "trt",
          feedbackAcerto: "Isso. 1959 + Polo Sul = TRATADO DA ANTÁRTIDA.", feedbackErro: "É o TRATADO DA ANTÁRTIDA. 56 países signatários." },
      ],
      falaFinal: "6 perguntas, 6 conceitos. Explorador polar formado.",
    };
  })(),

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da água doce mundial: onde está a água líquida (rios/lagos) vs. sólida (gelo).",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "gel", rotulo: "Gelo polar (~70%)", emoji: "🧊", percentual: 70, cor: "#0891b2",
        descricao: "Antártida (70%), Ártico e Groenlândia. Se tudo derretesse, o mar subiria 60m.",
        exemplos: ["🐧 Antártida", "❄️ Groenlândia", "🏔️ Ártico"] },
      { id: "liq", rotulo: "Rios, lagos e subterrâneas (~30%)", emoji: "💧", percentual: 30, cor: "#64748b",
        descricao: "Amazonas, Nilo, Mississipi, lagos, aquíferos. É a água que a humanidade usa de fato.",
        exemplos: ["🌊 Amazonas", "🏞️ Grandes Lagos", "🚰 Aquífero Guarani"] },
    ],
    falaFinal: "70% da água doce está congelada nos polos. E o gelo está derretendo.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Explorador Polar.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Qual continente NÃO tem população humana permanente?",
        opcoes: [
          { id: "a", texto: "Antártida", correta: true },
          { id: "b", texto: "Oceania", correta: false },
          { id: "c", texto: "Ártico", correta: false },
        ],
        feedbackAcerto: "Isso! Antártida — só cientistas.",
        feedbackErro: "É a Antártida. Ártico não é continente; Oceania tem 42 mi." },
      { id: "av2", pergunta: "Quanto da água doce mundial está guardado na Antártida?",
        opcoes: [
          { id: "a", texto: "Cerca de 70%", correta: true },
          { id: "b", texto: "Só 5%", correta: false },
          { id: "c", texto: "Cerca de 20%", correta: false },
        ],
        feedbackAcerto: "Isso! 70%, em forma de gelo.",
        feedbackErro: "São 70%. Se tudo derreter, o mar sobe 60m." },
      { id: "av3", pergunta: "O Ártico está aquecendo em relação ao resto do planeta:",
        opcoes: [
          { id: "a", texto: "4 vezes mais rápido", correta: true },
          { id: "b", texto: "Está ficando mais frio", correta: false },
          { id: "c", texto: "Igual ao resto", correta: false },
        ],
        feedbackAcerto: "Isso! 4x mais rápido.",
        feedbackErro: "É 4x mais rápido — perde 13% do gelo por década." },
    ],
    selo: { nome: "Explorador Polar", subtitulo: "Insígnia do Explorador do Planeta", emoji: "🐧", cor: "from-sky-800 to-slate-950" },
    falaFinal: "Insígnia conquistada! Você entende os cantos frágeis do mundo.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Explorador Polar" },
};
