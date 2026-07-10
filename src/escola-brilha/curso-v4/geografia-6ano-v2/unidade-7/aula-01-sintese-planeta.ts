import type { AulaGeoV1 } from "../../types";
import sintese from "@/assets/geografia-6ano/sintese-geografica.jpg";

export const aula01: AulaGeoV1 = {
  slug: "aula-01-sintese-planeta",
  titulo: "Síntese: O Planeta Integrado",
  iconeTrilha: "🌐",
  bncc: ["EF06GE01", "EF06GE03", "EF06GE12", "EF06GE13"],
  duracaoMin: 25,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Tudo conectado: movimentos, rochas, clima, vida.",
    mapaUrl: sintese,
    imagemDestaqueUrl: sintese,
    aurora:
      "Explorador, chegamos ao FIM da jornada. Você viu: a Terra gira, viaja e é inclinada. A crosta é dividida em placas. O relevo se formou em milhões de anos. O clima depende da latitude. E os biomas nascem dessa combinação toda. Tudo é UM SISTEMA.",
    falaFinal: "Hora de juntar as peças. Um planeta, mil conexões.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Por que a AMAZÔNIA tem tanta chuva o ano todo?",
    pergunta: "O que explica isso?",
    opcoes: [
      { id: "sist", titulo: "SISTEMA: Equador + massas úmidas + relevo", subtitulo: "tudo conectado", emoji: "🌐", cor: "from-emerald-400 to-teal-600" },
      { id: "sorte", titulo: "SORTE geográfica", subtitulo: "puro acaso", emoji: "🎲", cor: "from-slate-400 to-gray-600" },
    ],
    respostaCerta: "sist",
    feedbackAcerto:
      "Exato! Amazônia está no Equador (sol direto) + recebe massa úmida do Atlântico + tem floresta que EVAPORA água = chuva constante. Ciclo integrado.",
    feedbackErro: "Nada em Geografia é sorte. Amazônia = latitude + massa de ar + floresta trabalhando junto.",
    falaFinal: "Geografia é sistema. Nada isolado.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 grandes ideias que amarram tudo que você aprendeu.",
    instrucao: "",
    cadernos: [
      { id: "movim", capa: "1. Movimentos da Terra", emoji: "🌍", cor: "from-sky-500 to-indigo-700",
        conteudo: "ROTAÇÃO + TRANSLAÇÃO + INCLINAÇÃO criam dia/noite, estações e climas. Nossa vida inteira depende disso.",
        exemplo: "Ex.: sem inclinação, não haveria estações." },
      { id: "crosta", capa: "2. Crosta em movimento", emoji: "🌋", cor: "from-red-500 to-rose-700",
        conteudo: "PLACAS TECTÔNICAS moldam continentes, criam montanhas, vulcões e terremotos.",
        exemplo: "Ex.: Andes existem porque placa de Nazca bate na Sul-Americana." },
      { id: "atmos", capa: "3. Atmosfera dinâmica", emoji: "🌦️", cor: "from-emerald-500 to-teal-700",
        conteudo: "MASSAS DE AR + LATITUDE + CICLO DA ÁGUA definem o clima de cada canto do planeta.",
        exemplo: "Ex.: no Equador chove muito porque o sol evapora muita água." },
      { id: "vida", capa: "4. Vida se adapta", emoji: "🌳", cor: "from-amber-500 to-orange-700",
        conteudo: "BIOMAS surgem onde clima e relevo se encontram. Cada bioma é um sistema vivo único.",
        exemplo: "Ex.: Caatinga só existe porque o sertão é semiárido." },
    ],
    falaFinal: "4 grandes ideias, 1 planeta integrado.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada conexão entre os sistemas do planeta.",
    instrucao: "Toque em cada balão",
    mapaUrl: sintese,
    pontos: [
      { id: "movim", x: 25, y: 25, emoji: "🌍", cor: "from-sky-500 to-indigo-700",
        titulo: "MOVIMENTOS → CLIMA",
        texto: "Inclinação do eixo faz o Sol bater mais forte no Equador. Latitude puxa temperatura. Movimentos definem clima." },
      { id: "placa", x: 75, y: 30, emoji: "🌋", cor: "from-red-500 to-rose-700",
        titulo: "TECTÔNICA → RELEVO",
        texto: "Placas colidem e formam montanhas (Andes, Himalaia). Placas se afastam e criam vulcões. Relevo nasce do movimento." },
      { id: "relevo", x: 30, y: 70, emoji: "⛰️", cor: "from-amber-500 to-orange-700",
        titulo: "RELEVO → CLIMA",
        texto: "Serras bloqueiam massas de ar. Um lado chove, outro seca (sombra pluviométrica). Relevo molda clima local." },
      { id: "biomas", x: 70, y: 75, emoji: "🌳", cor: "from-emerald-500 to-green-700",
        titulo: "CLIMA + RELEVO → BIOMAS",
        texto: "Onde tem chuva forte + solo bom = floresta. Onde tem seca + calor = savana ou deserto. Bioma é fruto dessa combinação." },
    ],
    falaFinal: "4 conexões formam o sistema Terra. Nada isolado.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de síntese.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "O que causa as ESTAÇÕES do ano?",
        cards: [
          { id: "i", emoji: "📐", titulo: "Inclinação do eixo", cor: "from-emerald-500 to-teal-700" },
          { id: "d", emoji: "📏", titulo: "Distância ao Sol", cor: "from-amber-500 to-orange-700" },
          { id: "l", emoji: "🌙", titulo: "Fases da Lua", cor: "from-slate-500 to-gray-700" },
        ], correta: "i",
        feedbackAcerto: "Isso! INCLINAÇÃO.", feedbackErro: "INCLINAÇÃO do eixo." },
      { id: "q2", pergunta: "Onde acontece a MAIORIA dos terremotos?",
        cards: [
          { id: "b", emoji: "🌋", titulo: "Bordas de placas", cor: "from-red-500 to-rose-700" },
          { id: "m", emoji: "🌳", titulo: "Meio dos continentes", cor: "from-emerald-500 to-teal-700" },
          { id: "o", emoji: "🌊", titulo: "Nos oceanos calmos", cor: "from-sky-500 to-blue-700" },
        ], correta: "b",
        feedbackAcerto: "Isso! BORDAS de placa.", feedbackErro: "Sempre nas BORDAS de placa." },
      { id: "q3", pergunta: "Bioma EXCLUSIVAMENTE brasileiro:",
        cards: [
          { id: "c", emoji: "🌵", titulo: "Caatinga", cor: "from-amber-500 to-orange-700" },
          { id: "a", emoji: "🌳", titulo: "Amazônia", cor: "from-emerald-500 to-teal-700" },
          { id: "p", emoji: "🐎", titulo: "Pampa", cor: "from-lime-500 to-green-700" },
        ], correta: "c",
        feedbackAcerto: "Isso! CAATINGA.", feedbackErro: "CAATINGA só existe no Brasil." },
    ],
    falaFinal: "Revisão perfeita.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "Missão FINAL: acenda os 5 estados MAIS BIODIVERSOS do Brasil — onde a floresta amazônica é mais preservada.",
    instrucao: "Marque os 5 estados com mais Amazônia preservada",
    missao: {
      tipo: "selecionar",
      siglas: ["AM", "PA", "AC", "RR", "AP"],
      pergunta: "Onde está o coração da Amazônia?",
    },
    falaFinal:
      "AM, PA, AC, RR, AP — coração verde do país. Protegê-los é proteger o clima do planeta.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize a CADEIA DE INFLUÊNCIAS que forma um bioma.",
    instrucao: "Toque na ordem",
    pergunta: "Como um bioma surge?",
    paradas: [
      { id: "sol", emoji: "☀️", rotulo: "1. Sol e latitude",
        descricao: "Latitude define quanta luz chega." },
      { id: "clima", emoji: "🌦️", rotulo: "2. Clima se estabelece",
        descricao: "Massas de ar definem temperatura e umidade." },
      { id: "relevo", emoji: "⛰️", rotulo: "3. Relevo modifica",
        descricao: "Montanhas e planaltos mudam o clima local." },
      { id: "solo", emoji: "🌱", rotulo: "4. Solo se forma",
        descricao: "Rocha + clima + tempo = tipo de solo." },
      { id: "vegetacao", emoji: "🌳", rotulo: "5. Vegetação cresce",
        descricao: "Plantas adaptadas aparecem." },
      { id: "bioma", emoji: "🌍", rotulo: "6. Bioma completo",
        descricao: "Fauna, flora e ecossistemas se estabelecem." },
    ],
    ordemCerta: ["sol", "clima", "relevo", "solo", "vegetacao", "bioma"],
    feedbackAcerto: "Perfeita! Cadeia completa da natureza.",
    feedbackErro: "Sol → clima → relevo → solo → vegetação → bioma.",
    falaFinal: "6 passos, 1 bioma. Sempre nessa ordem.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua última leitura.",
    tituloLivro: "📘 Manual do Explorador Planetário",
    subtitulo: "Capítulo Final — Síntese",
    paragrafos: [
      { id: "p1", texto: "A Terra é um SISTEMA integrado onde movimentos, crosta, atmosfera e vida se INFLUENCIAM mutuamente.",
        chaves: ["sistema", "integrado", "influenciam"] },
      { id: "p2", texto: "Sem a INCLINAÇÃO do eixo não teríamos ESTAÇÕES. Sem placas em movimento não teríamos MONTANHAS.",
        chaves: ["inclinação", "estações", "montanhas"] },
      { id: "p3", texto: "O CLIMA depende da latitude, das massas de ar e do RELEVO. Ele define onde cada bioma pode existir.",
        chaves: ["clima", "latitude", "relevo", "bioma"] },
      { id: "p4", texto: "PROTEGER o planeta é entender que TUDO está conectado — mudança em um sistema afeta todos os outros.",
        chaves: ["proteger", "conectado", "sistema"] },
    ],
    falaFinal: "Leu tudo? Missão final chegando.",
  },

  cena09_minijogo: (() => {
    const cards = [
      { id: "rot", emoji: "", titulo: "Rotação da Terra", cor: "from-slate-800 to-slate-900" },
      { id: "trans", emoji: "", titulo: "Translação", cor: "from-slate-800 to-slate-900" },
      { id: "incl", emoji: "", titulo: "Inclinação do eixo", cor: "from-slate-800 to-slate-900" },
      { id: "placa", emoji: "", titulo: "Placas tectônicas", cor: "from-slate-800 to-slate-900" },
      { id: "massa", emoji: "", titulo: "Massa de ar", cor: "from-slate-800 to-slate-900" },
      { id: "bioma", emoji: "", titulo: "Bioma adaptado", cor: "from-slate-800 to-slate-900" },
    ];
    return {
      tipo: "quizRadar" as const,
      aurora: "Quiz final: pra cada cenário, escolha o fator geográfico que explica.",
      instrucao: "Escolha a explicação correta",
      perguntas: [
        { id: "r1", pergunta: "No sertão, os cactos armazenam água nos caules pra sobreviver ao clima seco. Que fator geográfico explica essa vegetação?", cards, correta: "bioma",
          feedbackAcerto: "Isso. Vegetação adaptada ao ambiente = BIOMA (Caatinga).", feedbackErro: "É BIOMA. Cada bioma tem plantas adaptadas ao seu clima." },
        { id: "r2", pergunta: "Enquanto Tóquio amanhece, São Paulo dorme. Que fator explica a diferença de horários entre os países?", cards, correta: "rot",
          feedbackAcerto: "Isso. Diferença de horários vem da ROTAÇÃO da Terra.", feedbackErro: "É ROTAÇÃO. A Terra gira em 24h, criando fusos horários." },
        { id: "r3", pergunta: "No oeste da América do Sul existem os Andes (6.000 m) e vulcões ativos no Chile. Que fator explica esse relevo?", cards, correta: "placa",
          feedbackAcerto: "Isso. Cordilheiras e vulcões nascem do choque de PLACAS TECTÔNICAS.", feedbackErro: "É PLACAS TECTÔNICAS. Placa Sul-Americana e Nazca em colisão." },
        { id: "r4", pergunta: "A Amazônia recebe chuva o ano todo porque uma massa de ar úmida entra pelo Norte do país. Que fator climático é esse?", cards, correta: "massa",
          feedbackAcerto: "Isso. A chuva depende do movimento das MASSAS DE AR.", feedbackErro: "É MASSA DE AR. Ela transporta umidade pra dentro do continente." },
        { id: "r5", pergunta: "Em dezembro é verão no Brasil e inverno na Europa. Que fator explica estações opostas entre hemisférios?", cards, correta: "incl",
          feedbackAcerto: "Isso. Estações opostas vêm da INCLINAÇÃO do eixo da Terra.", feedbackErro: "É INCLINAÇÃO. O eixo inclinado faz cada hemisfério receber luz direta em épocas diferentes." },
        { id: "r6", pergunta: "A cada 4 anos, fevereiro tem 29 dias (ano bissexto). Que fator explica isso?", cards, correta: "trans",
          feedbackAcerto: "Isso. TRANSLAÇÃO dura 365 dias e 6 horas — as 6h viram 1 dia extra a cada 4 anos.", feedbackErro: "É TRANSLAÇÃO. A volta em torno do Sol dura 365,25 dias." },
      ],
      falaFinal: "6 perguntas, 6 fatores geográficos identificados. Geógrafo mestre.",
    };
  })(),


  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza SÍNTESE: Astronomia + Terra Física + Vida.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "fisica", rotulo: "Terra física (astronomia + placas + clima)", emoji: "🌍", percentual: 70, cor: "#6366f1",
        descricao: "Movimentos da Terra, tectônica, relevo e atmosfera — o palco físico do planeta.",
        exemplos: ["🔄 Rotação", "🌋 Placas", "🌦️ Clima"] },
      { id: "vida", rotulo: "Vida (biomas)", emoji: "🌳", percentual: 30, cor: "#059669",
        descricao: "Onde o físico encontra o biológico — 6 biomas brasileiros nascem dessa combinação.",
        exemplos: ["🌳 Amazônia", "🌵 Caatinga", "💧 Pantanal"] },
    ],
    falaFinal: "3 camadas, 1 planeta. Tudo estudado, tudo conectado.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 finais pra ganhar a insígnia MESTRE PLANETÁRIO.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "A Terra é considerada um SISTEMA porque:",
        opcoes: [
          { id: "a", texto: "Cada camada funciona independente", correta: false },
          { id: "b", texto: "Movimentos, crosta, clima e vida se influenciam", correta: true },
          { id: "c", texto: "Tudo depende só do Sol", correta: false },
        ],
        feedbackAcerto: "Isso! Todas as partes se influenciam.", feedbackErro: "SISTEMA = tudo se conecta e se influencia." },
      { id: "av2", pergunta: "A ORDEM correta que forma um bioma é:",
        opcoes: [
          { id: "a", texto: "Bioma → clima → solo → vegetação", correta: false },
          { id: "b", texto: "Latitude → clima → relevo → solo → vegetação → bioma", correta: true },
          { id: "c", texto: "Vegetação → solo → clima → bioma", correta: false },
        ],
        feedbackAcerto: "Isso! Do sol pra planta.", feedbackErro: "Começa em latitude, termina em bioma." },
      { id: "av3", pergunta: "Proteger o meio ambiente exige entender que:",
        opcoes: [
          { id: "a", texto: "Cada bioma é isolado", correta: false },
          { id: "b", texto: "Tudo está conectado — mudança afeta o sistema todo", correta: true },
          { id: "c", texto: "Só a Amazônia importa", correta: false },
        ],
        feedbackAcerto: "Isso! Uma mudança afeta tudo.", feedbackErro: "TUDO conectado. Mudar 1 afeta o sistema TODO." },
    ],
    selo: { nome: "Mestre Planetário", subtitulo: "Insígnia Máxima do Explorador", emoji: "🌐", cor: "from-indigo-500 to-purple-700" },
    falaFinal: "Insígnia máxima conquistada! Você venceu o 6º ano. Rumo ao 7º!",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Mestre Planetário" },
};
