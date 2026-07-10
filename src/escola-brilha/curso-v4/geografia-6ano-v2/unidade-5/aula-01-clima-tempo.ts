import type { AulaGeoV1 } from "../../types";
import mapaClimas from "@/assets/geografia-6ano/mapa-climas-brasil.jpg";
import climaEquatorial from "@/assets/geografia-6ano/clima-equatorial.jpg";
import climaTropical from "@/assets/geografia-6ano/clima-tropical.jpg";
import climaSubtropical from "@/assets/geografia-6ano/clima-subtropical.jpg";
import climaSemiarido from "@/assets/geografia-6ano/clima-semiarido.jpg";
import massasAr from "@/assets/geografia-6ano/massas-ar.jpg";

/**
 * Geografia · 6º Ano (PILOTO v2) · Unidade 5 · Aula 01
 * "Clima e Tempo" — BNCC EF06GE12
 * Padrão U1/U2.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-clima-tempo",
  titulo: "Clima e Tempo",
  iconeTrilha: "🌦️",
  bncc: ["EF06GE12"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: mapaClimas,
    imagemDestaqueUrl: mapaClimas,
    aurora:
      "TEMPO é como está agora — chove, faz sol, está frio. CLIMA é o padrão médio de DÉCADAS. Manaus tem clima EQUATORIAL úmido: chove sempre. Mesmo se hoje o sol aparecer lá, o clima continua o mesmo. O Brasil tem SEIS climas diferentes: EQUATORIAL (Norte, chuva o ano todo), TROPICAL (Centro-Oeste, chuva e seca), SEMIÁRIDO (sertão, pouca chuva), TROPICAL DE ALTITUDE (serras do Sudeste), TROPICAL LITORÂNEO (costa NE) e SUBTROPICAL (Sul, 4 estações).",
    falaFinal: "Tempo muda todo dia. Clima leva décadas pra mudar. Guarde essa diferença.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Chuta antes: em Manaus (Norte), a temperatura média varia entre 25°C e 32°C o ano todo. Em Porto Alegre (Sul), varia entre 10°C e 30°C. Por que essa diferença gigante?",
    pergunta: "O que explica variações tão diferentes?",
    opcoes: [
      { id: "lat", titulo: "É a LATITUDE", subtitulo: "quanto mais longe do Equador, mais frio", emoji: "🌍", cor: "from-emerald-800 to-slate-950" },
      { id: "long", titulo: "É a LONGITUDE", subtitulo: "leste é quente, oeste é frio", emoji: "🇬🇧", cor: "from-sky-800 to-slate-950" },
    ],
    respostaCerta: "lat",
    feedbackAcerto:
      "Exato! Manaus está a 3° SUL (quase no Equador) — pega sol direto o ano todo. Porto Alegre está a 30° SUL — no inverno o Sol chega inclinado, esquenta menos. Latitude é o fator #1 do clima.",
    feedbackErro:
      "Longitude não afeta temperatura (afeta fuso horário). É a LATITUDE: perto do Equador = quente estável. Longe do Equador = variação grande entre verão e inverno.",
    falaFinal: "Regra: quanto mais perto do Equador, mais quente e estável. Latitude comanda o clima.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos do clima. Cada card traz explicação, exemplo real e curiosidade científica.",
    instrucao: "",
    cadernos: [
      {
        id: "tempo",
        capa: "1. Tempo",
        emoji: "🌤️",
        cor: "from-sky-800 to-slate-950",
        conteudo:
          "TEMPO é o estado da atmosfera em UM DIA (ou algumas horas). Envolve temperatura, chuva, vento, umidade agora. É o que a previsão do tempo mostra pra amanhã.",
        exemplo:
          "Curiosidade: a previsão do tempo usa SUPERCOMPUTADORES que fazem 10 QUATRILHÕES de cálculos por segundo pra prever 7 dias à frente. Ainda assim, acima de 10 dias o palpite é chute.",
        fotoUrl: massasAr,
      },
      {
        id: "clima",
        capa: "2. Clima",
        emoji: "🌦️",
        cor: "from-emerald-800 to-teal-950",
        conteudo:
          "CLIMA é o PADRÃO MÉDIO do tempo em uma região durante MUITOS ANOS (mínimo 30 anos, pela definição oficial). Um dia frio em Manaus não muda o clima quente. Uma seca em Porto Alegre não muda o clima úmido.",
        exemplo:
          "Curiosidade: o clima da Terra já foi bem diferente. Há 20 mil anos, o Rio de Janeiro tinha temperatura média de 15°C (hoje 24°C). Estávamos na última Era do Gelo.",
        fotoUrl: mapaClimas,
      },
      {
        id: "massa",
        capa: "3. Massa de ar",
        emoji: "💨",
        cor: "from-slate-700 to-slate-950",
        conteudo:
          "MASSA DE AR é um grande volume de ar que se forma sobre um local (oceano, deserto, polo) e carrega as características desse lugar. Pode ser quente ou fria, úmida ou seca. Ela viaja e muda o tempo por onde passa.",
        exemplo:
          "Curiosidade: quando a Massa Polar Atlântica (fria e seca) chega ao Sul do Brasil no inverno, a temperatura pode cair 15°C em 24 horas. É o famoso 'frentia' que os gaúchos temem.",
        fotoUrl: massasAr,
      },
      {
        id: "alt",
        capa: "4. Altitude",
        emoji: "🏔️",
        cor: "from-cyan-800 to-slate-950",
        conteudo:
          "ALTITUDE é a distância acima do nível do mar. Quanto MAIS ALTO um lugar, mais FRIO — mesmo perto do Equador. A cada 1.000 m de altitude, a temperatura cai cerca de 6°C.",
        exemplo:
          "Curiosidade: Quito no Equador está sobre a linha do Equador (deveria ser quente), mas fica a 2.800 m de altitude. Resultado: temperatura média de 13°C o ano todo. Frio no meio do trópico.",
        fotoUrl: climaSubtropical,
      },
    ],
    falaFinal: "Tempo, clima, massa de ar, altitude. 4 palavras que explicam por que o Brasil tem 6 climas.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Cada card é um dos climas brasileiros. Toque em cada um pra ver a paisagem real e entender onde e por que ele acontece.",
    instrucao: "Toque nos 4 cards pra ouvir cada clima",
    mapaUrl: mapaClimas,
    pontos: [
      {
        id: "eq",
        x: 20,
        y: 30,
        emoji: "🌳",
        cor: "from-emerald-800 to-teal-950",
        titulo: "EQUATORIAL — Norte",
        texto:
          "Quente (25°C-32°C) e ÚMIDO o ano todo. Chove em quase todos os dias — 2.000 a 3.000 mm por ano. Domina toda a Amazônia. Sem estações definidas — só o dia da chuva e o dia do sol.",
        fotoUrl: climaEquatorial,
      },
      {
        id: "tr",
        x: 55,
        y: 55,
        emoji: "🌾",
        cor: "from-amber-800 to-orange-950",
        titulo: "TROPICAL — Centro-Oeste, Sudeste",
        texto:
          "Duas estações bem marcadas: VERÃO chuvoso (out-mar) e INVERNO seco (abr-set). Temperaturas entre 18°C e 30°C. Domina Brasília, Cuiabá, Goiânia. Vegetação de cerrado.",
        fotoUrl: climaTropical,
      },
      {
        id: "semi",
        x: 75,
        y: 40,
        emoji: "🌵",
        cor: "from-amber-800 to-orange-950",
        titulo: "SEMIÁRIDO — Sertão Nordestino",
        texto:
          "Muito quente e MUITO SECO. Chove menos de 800 mm por ano (São Paulo chove 1.400 mm). Longos períodos sem chuva (até 2 anos). Vegetação de caatinga adaptada à seca.",
        fotoUrl: climaSemiarido,
      },
      {
        id: "sub",
        x: 45,
        y: 85,
        emoji: "🌲",
        cor: "from-sky-800 to-indigo-950",
        titulo: "SUBTROPICAL — Sul",
        texto:
          "Único clima brasileiro com QUATRO ESTAÇÕES bem definidas. Inverno com temperaturas abaixo de 10°C, geada, às vezes NEVE. Verão quente (30°C). Chove o ano todo. Vegetação de araucárias.",
        fotoUrl: climaSubtropical,
      },
    ],
    falaFinal:
      "4 climas mostrados — o Brasil ainda tem outros 2 (tropical de altitude, tropical litorâneo). País tropical com muitas caras.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "4 perguntas de meteorologista pra fixar.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual a diferença entre TEMPO e CLIMA?",
        fotoUrl: massasAr,
        cards: [
          { id: "certo", emoji: "🎯", titulo: "Tempo = agora; Clima = média de anos", cor: "from-emerald-800 to-teal-950" },
          { id: "err1", emoji: "🌡️", titulo: "Tempo = frio; Clima = quente", cor: "from-amber-800 to-orange-950" },
          { id: "err2", emoji: "🌍", titulo: "Tempo = Brasil; Clima = mundo", cor: "from-sky-800 to-indigo-950" },
        ],
        correta: "certo",
        feedbackAcerto: "Isso! TEMPO é estado agora. CLIMA é padrão de décadas.",
        feedbackErro: "Não tem a ver com temperatura ou tamanho. TEMPO = agora; CLIMA = padrão de muitos anos.",
      },
      {
        id: "q2",
        pergunta: "Clima do NORTE do Brasil (Manaus, Amazônia):",
        fotoUrl: climaEquatorial,
        cards: [
          { id: "eq", emoji: "🌳", titulo: "Equatorial (quente e úmido)", cor: "from-emerald-800 to-teal-950" },
          { id: "sub", emoji: "🌲", titulo: "Subtropical (4 estações)", cor: "from-sky-800 to-indigo-950" },
          { id: "sm", emoji: "🌵", titulo: "Semiárido (seco)", cor: "from-amber-800 to-orange-950" },
        ],
        correta: "eq",
        feedbackAcerto: "Boa! EQUATORIAL: quente e chuvoso o ano todo. É a Amazônia.",
        feedbackErro: "Subtropical é o Sul. Semiárido é o Sertão. O Norte é EQUATORIAL (quente e úmido).",
      },
      {
        id: "q3",
        pergunta: "Clima do SERTÃO NORDESTINO:",
        fotoUrl: climaSemiarido,
        cards: [
          { id: "sm", emoji: "🌵", titulo: "Semiárido (pouca chuva)", cor: "from-emerald-800 to-teal-950" },
          { id: "eq", emoji: "🌳", titulo: "Equatorial (muita chuva)", cor: "from-amber-800 to-orange-950" },
          { id: "sub", emoji: "🌲", titulo: "Subtropical (frio)", cor: "from-sky-800 to-indigo-950" },
        ],
        correta: "sm",
        feedbackAcerto: "Perfeito! SEMIÁRIDO: menos de 800 mm de chuva por ano.",
        feedbackErro: "Equatorial chove muito (não é sertão). Subtropical é frio (não é sertão). Sertão = SEMIÁRIDO.",
      },
      {
        id: "q4",
        pergunta: "Por que Quito (Equador) tem clima frio (13°C) mesmo estando sobre o Equador?",
        fotoUrl: climaSubtropical,
        cards: [
          { id: "alt", emoji: "🏔️", titulo: "Está a 2.800 m de altitude", cor: "from-emerald-800 to-teal-950" },
          { id: "long", emoji: "🇬🇧", titulo: "Está longe de Greenwich", cor: "from-sky-800 to-indigo-950" },
          { id: "oce", emoji: "🌊", titulo: "Fica dentro do oceano", cor: "from-amber-800 to-orange-950" },
        ],
        correta: "alt",
        feedbackAcerto: "Isso! A cada 1.000 m de altitude, temperatura cai 6°C. 2.800 m = 17°C mais frio.",
        feedbackErro: "Longitude não afeta temperatura. Quito não fica no oceano. É a ALTITUDE: alto = frio.",
      },
    ],
    falaFinal: "4 acertos = você já lê clima como meteorologista.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "O clima SEMIÁRIDO domina o sertão de vários estados nordestinos. Marque os 4 estados com maior área de semiárido no Brasil.",
    instrucao: "Acenda os 4 estados mais semiáridos",
    missao: {
      tipo: "selecionar",
      siglas: ["BA", "PE", "PI", "CE"],
      pergunta: "Quais estados têm mais semiárido?",
    },
    falaFinal:
      "BA, PE, PI, CE. Junto com PB, RN, AL, SE e MG (norte), formam o Polígono das Secas — 1 milhão de km² de semiárido.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene os climas brasileiros do MAIS CHUVOSO ao MAIS SECO. Ajuda pensar em quanto chove por ano em cada um.",
    instrucao: "Toque na ordem",
    pergunta: "Do mais chuvoso ao mais seco:",
    paradas: [
      { id: "eq", emoji: "🌳", rotulo: "1. Equatorial (~2.500 mm)",
        descricao: "Chove quase todo dia na Amazônia. É o mais úmido.", fotoUrl: climaEquatorial },
      { id: "sub", emoji: "🌲", rotulo: "2. Subtropical (~1.700 mm)",
        descricao: "Chuva bem distribuída o ano inteiro no Sul.", fotoUrl: climaSubtropical },
      { id: "tr", emoji: "🌾", rotulo: "3. Tropical (~1.500 mm)",
        descricao: "Chove muito no verão, quase nada no inverno.", fotoUrl: climaTropical },
      { id: "sm", emoji: "🌵", rotulo: "4. Semiárido (~600 mm)",
        descricao: "Sertão nordestino. Muito pouca chuva concentrada em poucos dias.", fotoUrl: climaSemiarido },
    ],
    ordemCerta: ["eq", "sub", "tr", "sm"],
    feedbackAcerto: "Perfeito! Equatorial molha tudo, Semiárido seca tudo.",
    feedbackErro: "Comece pelo mais úmido (Equatorial). Depois Subtropical, Tropical, e por fim Semiárido.",
    falaFinal: "Da chuva grossa do Amazonas ao chão rachado do sertão. Brasil de todos os climas.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com calma. Os TERMOS-CHAVE ficam destacados — toque em qualquer um pra ver a definição rápida.",
    tituloLivro: "📘 Manual do Explorador Planetário",
    subtitulo: "Capítulo 5 — Clima e Tempo",
    paragrafos: [
      {
        id: "p1",
        texto:
          "TEMPO é o estado da ATMOSFERA em um momento específico. CLIMA é o padrão MÉDIO desse estado ao longo de MUITOS ANOS (mínimo 30 anos).",
        chaves: ["TEMPO", "ATMOSFERA", "CLIMA", "MUITOS ANOS"],
        definicoes: {
          "TEMPO":
            "Como está a atmosfera AGORA (temperatura, chuva, vento). Muda de hora em hora.",
          "ATMOSFERA":
            "Camada de gases (ar) que envolve a Terra. Vai da superfície até cerca de 500 km de altitude.",
          "CLIMA":
            "Padrão médio do tempo em uma região. Só muda depois de décadas ou séculos.",
          "MUITOS ANOS":
            "Convenção da OMM (Organização Meteorológica Mundial): 30 anos de observação pra definir um clima.",
        },
        fotoUrl: mapaClimas,
      },
      {
        id: "p2",
        texto:
          "As MASSAS DE AR são grandes volumes de ar com características parecidas de TEMPERATURA e UMIDADE. Elas viajam pelo planeta trazendo mudança de tempo.",
        chaves: ["MASSAS DE AR", "TEMPERATURA", "UMIDADE"],
        definicoes: {
          "MASSAS DE AR":
            "Enormes 'bolhas' de ar que se formam sobre oceanos, desertos ou polos e viajam levando o tempo delas.",
          "TEMPERATURA":
            "Quantidade de calor no ar, medida em graus Celsius. Massas polares = frias; equatoriais = quentes.",
          "UMIDADE":
            "Quantidade de vapor d'água no ar. Massas oceânicas = úmidas; continentais = secas.",
        },
        fotoUrl: massasAr,
      },
      {
        id: "p3",
        texto:
          "A LATITUDE é o fator MAIS IMPORTANTE do clima. Regiões perto do EQUADOR recebem sol direto o ano todo (quente). Regiões perto dos POLOS recebem sol inclinado (frio).",
        chaves: ["LATITUDE", "EQUADOR", "POLOS"],
        definicoes: {
          "LATITUDE":
            "Distância em graus até o Equador. Fator #1 do clima: quanto mais longe do Equador, mais frio.",
          "EQUADOR":
            "Linha imaginária no meio do planeta. Ali o Sol bate perpendicular — é sempre quente.",
          "POLOS":
            "Extremos Norte e Sul do planeta. O Sol chega muito inclinado — é sempre frio.",
        },
        fotoUrl: climaEquatorial,
      },
      {
        id: "p4",
        texto:
          "A ALTITUDE também afeta muito: a cada 1.000 metros de altura, a TEMPERATURA cai cerca de 6°C. É por isso que existe NEVE no topo de montanhas mesmo no Equador.",
        chaves: ["ALTITUDE", "TEMPERATURA", "NEVE"],
        definicoes: {
          "ALTITUDE":
            "Distância acima do nível do mar. Quanto mais alto, mais rarefeito o ar e menor a temperatura.",
          "TEMPERATURA":
            "Cai 6°C a cada 1.000 m subidos. Por isso montanhas altas têm topo frio mesmo em regiões quentes.",
          "NEVE":
            "Forma sólida da água que cai quando a temperatura está abaixo de 0°C. Comum em topos altos.",
        },
        fotoUrl: climaSubtropical,
      },
    ],
    falaFinal: "Leu, marcou, entendeu? Bora pro quiz final antes da insígnia.",
  },

  cena09_minijogo: (() => {
    const cards = [
      { id: "eq", emoji: "", titulo: "Equatorial", cor: "from-slate-800 to-slate-900" },
      { id: "tr", emoji: "", titulo: "Tropical", cor: "from-slate-800 to-slate-900" },
      { id: "sm", emoji: "", titulo: "Semiárido", cor: "from-slate-800 to-slate-900" },
      { id: "sub", emoji: "", titulo: "Subtropical", cor: "from-slate-800 to-slate-900" },
      { id: "lit", emoji: "", titulo: "Tropical litorâneo", cor: "from-slate-800 to-slate-900" },
      { id: "alt", emoji: "", titulo: "Tropical de altitude", cor: "from-slate-800 to-slate-900" },
    ];
    return {
      tipo: "quizRadar" as const,
      aurora: "Quiz rápido: pra cada descrição, escolha o clima brasileiro correspondente.",
      instrucao: "Escolha o clima correto",
      perguntas: [
        { id: "r1", pergunta: "Quente (25-32°C) e chuvoso o ano inteiro, sem estações definidas. Domina a Amazônia. Que clima é esse?", cards, correta: "eq",
          feedbackAcerto: "Isso. Amazônia úmida o ano todo = EQUATORIAL.", feedbackErro: "É EQUATORIAL. Chuva quase diária, sem estação seca." },
        { id: "r2", pergunta: "Duas estações bem marcadas: verão chuvoso e inverno seco. Domina Brasília e o Cerrado. Que clima é esse?", cards, correta: "tr",
          feedbackAcerto: "Isso. Verão chuvoso + inverno seco = TROPICAL típico.", feedbackErro: "É TROPICAL. Ciclo chuva-seca é a marca do Centro-Oeste." },
        { id: "r3", pergunta: "Quente e muito seco — chove menos de 800 mm por ano. Vegetação de caatinga, chão rachado. Que clima é esse?", cards, correta: "sm",
          feedbackAcerto: "Isso. Sertão nordestino seco = SEMIÁRIDO.", feedbackErro: "É SEMIÁRIDO. Pouca chuva e vegetação adaptada à seca." },
        { id: "r4", pergunta: "Quatro estações bem definidas, inverno com geada e até neve, verão quente. Domina o Sul do Brasil. Que clima é esse?", cards, correta: "sub",
          feedbackAcerto: "Isso. Sul com 4 estações = SUBTROPICAL.", feedbackErro: "É SUBTROPICAL. Único clima brasileiro com neve regular." },
        { id: "r5", pergunta: "Quente e úmido, com chuvas de outono/inverno na costa nordestina (Recife, Salvador). Que clima é esse?", cards, correta: "lit",
          feedbackAcerto: "Isso. Litoral do NE com chuva de inverno = TROPICAL LITORÂNEO.", feedbackErro: "É TROPICAL LITORÂNEO. Umidade oceânica traz chuva à costa NE." },
        { id: "r6", pergunta: "Serras acima de 800 m no Sudeste (Petrópolis, Campos do Jordão) com temperaturas amenas. Que clima é esse?", cards, correta: "alt",
          feedbackAcerto: "Isso. Serras frescas do Sudeste = TROPICAL DE ALTITUDE.", feedbackErro: "É TROPICAL DE ALTITUDE. Altitude derruba a temperatura mesmo no trópico." },
      ],
      falaFinal: "6 perguntas, 6 climas identificados. Meteorologista de plantão.",
    };
  })(),

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza dos CLIMAS brasileiros por área aproximada de território.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "eq", rotulo: "Equatorial (~45%)", emoji: "🌳", percentual: 45, cor: "#059669",
        descricao: "Domina a Amazônia inteira. Quente e úmido o ano todo.",
        exemplos: ["🌳 Manaus", "🐟 Belém", "🦜 Amazônia"] },
      { id: "tr", rotulo: "Tropical (~30%)", emoji: "🌾", percentual: 30, cor: "#d97706",
        descricao: "Centro-Oeste e Sudeste. Duas estações: verão chuvoso, inverno seco.",
        exemplos: ["🏛️ Brasília", "🌾 Cerrado", "🐎 Pantanal"] },
      { id: "sm", rotulo: "Semiárido (~13%)", emoji: "🌵", percentual: 13, cor: "#b45309",
        descricao: "Sertão nordestino. Muito quente e muito seco.",
        exemplos: ["🌵 Petrolina", "🌵 Sertão", "🌵 Caatinga"] },
      { id: "sub", rotulo: "Subtropical (~7%)", emoji: "🌲", percentual: 7, cor: "#0369a1",
        descricao: "Sul do Brasil. Quatro estações, inverno com geada.",
        exemplos: ["🌲 Porto Alegre", "❄️ Curitiba", "🏔️ Serra Gaúcha"] },
      { id: "out", rotulo: "Outros (~5%)", emoji: "🌦️", percentual: 5, cor: "#6b7280",
        descricao: "Tropical de altitude e litorâneo, áreas menores.",
        exemplos: ["⛰️ Campos do Jordão", "🏖️ Recife"] },
    ],
    falaFinal: "5 tipos de clima em 1 país só. Brasil é um continente climático.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Meteorologista Iniciante.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "TEMPO é diferente de CLIMA porque:",
        opcoes: [
          { id: "a", texto: "Tempo mede pressão, clima mede vento", correta: false },
          { id: "b", texto: "Tempo = agora; Clima = média de anos", correta: true },
          { id: "c", texto: "Tempo é no Brasil; Clima é no mundo", correta: false },
        ],
        feedbackAcerto: "Isso! TEMPO é agora; CLIMA é padrão de décadas.",
        feedbackErro: "TEMPO é o estado momentâneo. CLIMA é o padrão médio ao longo de muitos anos." },
      { id: "av2", pergunta: "O clima do sertão nordestino é:",
        opcoes: [
          { id: "a", texto: "Equatorial (chuvoso)", correta: false },
          { id: "b", texto: "Semiárido (seco)", correta: true },
          { id: "c", texto: "Subtropical (frio)", correta: false },
        ],
        feedbackAcerto: "Isso! Sertão = SEMIÁRIDO. Menos de 800 mm de chuva por ano.",
        feedbackErro: "Equatorial é a Amazônia. Subtropical é o Sul. Sertão = SEMIÁRIDO." },
      { id: "av3", pergunta: "Fator MAIS IMPORTANTE do clima é:",
        opcoes: [
          { id: "a", texto: "Longitude", correta: false },
          { id: "b", texto: "Latitude (distância do Equador)", correta: true },
          { id: "c", texto: "Fuso horário", correta: false },
        ],
        feedbackAcerto: "Isso! LATITUDE define quanto sol direto uma região recebe.",
        feedbackErro: "Longitude só afeta fuso, não clima. LATITUDE é o fator #1 do clima." },
    ],
    selo: { nome: "Meteorologista Iniciante", subtitulo: "Insígnia do Explorador Planetário", emoji: "🌦️", cor: "from-sky-800 to-indigo-950" },
    falaFinal: "Insígnia climática conquistada! Você já lê mapas de tempo e clima com tranquilidade.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Meteorologista Iniciante" },
};
