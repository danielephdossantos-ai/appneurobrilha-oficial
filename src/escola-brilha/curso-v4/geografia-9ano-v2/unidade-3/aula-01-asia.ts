import type { AulaGeoV1 } from "../../types";
import xangai from "@/assets/geografia-9ano/xangai-skyline.jpg";
import tokyo from "@/assets/geografia-9ano/tokyo-shibuya.jpg";
import mumbai from "@/assets/geografia-9ano/mumbai-india.jpg";
import arroz from "@/assets/geografia-9ano/arrozal-asia.jpg";

/**
 * Geografia · 9º Ano · Unidade 3 · Aula 01
 * "Ásia" — BNCC EF09GE05, EF09GE06
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-asia",
  titulo: "Ásia: China, Japão, Índia e Tigres",
  iconeTrilha: "🏯",
  bncc: ["EF09GE05", "EF09GE06"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: xangai,
    imagemDestaqueUrl: xangai,
    aurora:
      "A Ásia tem 4,7 BILHÕES de pessoas — 60% da humanidade. É o continente mais populoso, mais dinâmico e mais desigual do planeta. A CHINA é a 2ª maior economia do mundo e a 'fábrica global'. O JAPÃO inventou tecnologia (Sony, Nintendo, Toyota) e é a 3ª economia mundial. A ÍNDIA tem 1,4 bilhão de pessoas e virou polo de tecnologia. Os TIGRES ASIÁTICOS (Coreia do Sul, Cingapura, Taiwan, Hong Kong) fizeram o milagre econômico em 30 anos.",
    falaFinal: "60% da humanidade vive na Ásia. E o século XXI é dela.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Chuta antes: qual país produz a maior parte dos celulares, roupas e brinquedos do mundo?",
    pergunta: "Quem é a 'fábrica do mundo'?",
    opcoes: [
      { id: "eua", titulo: "Estados Unidos", subtitulo: "maior economia", emoji: "🇺🇸", cor: "from-blue-800 to-slate-950" },
      { id: "chi", titulo: "China", subtitulo: "1,4 bilhão de pessoas", emoji: "🇨🇳", cor: "from-red-800 to-slate-950" },
    ],
    respostaCerta: "chi",
    feedbackAcerto:
      "Exato! A CHINA produz cerca de 30% de tudo o que se fabrica no mundo. Celulares, roupas, brinquedos, painéis solares — o rótulo 'Made in China' domina.",
    feedbackErro:
      "Não. Os EUA são a maior economia, mas produzem serviços e tecnologia de ponta. A CHINA é a FÁBRICA — 30% da produção industrial mundial.",
    falaFinal: "EUA = economia. China = fábrica. Dois modelos diferentes de poder.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos-chave da Ásia contemporânea. Explicação + exemplo real + curiosidade.",
    instrucao: "",
    cadernos: [
      {
        id: "chi",
        capa: "1. China",
        emoji: "🇨🇳",
        cor: "from-red-800 to-slate-950",
        conteudo:
          "CHINA é o país mais populoso (1,4 bilhão) e a 2ª maior economia do mundo. Governo de partido único (PC Chinês). Mistura CAPITALISMO (empresas privadas, bolsa) com ESTADO forte (planejamento central).",
        exemplo:
          "Curiosidade: em 1980, a China era 90% rural e mais pobre que a África. Em 2024, tirou 800 MILHÕES de pessoas da pobreza — a maior redução de miséria da história. Fez em 40 anos o que a Europa levou 200.",
        fotoUrl: xangai,
      },
      {
        id: "jap",
        capa: "2. Japão",
        emoji: "🗾",
        cor: "from-slate-700 to-slate-950",
        conteudo:
          "JAPÃO é a 3ª maior economia mundial. Nasceu do zero depois da 2ª Guerra (destruído por 2 bombas atômicas em 1945). Virou potência tecnológica: Toyota, Sony, Nintendo, Panasonic, Honda. E envelheceu — hoje 30% dos japoneses têm 65+ anos.",
        exemplo:
          "Curiosidade: Tóquio é a maior metrópole do mundo — 37 MILHÕES de habitantes na área metropolitana. Isso é mais gente que Argentina inteira concentrada em uma única cidade. E os trens JR chegam com atraso médio de 18 SEGUNDOS por ano.",
        fotoUrl: tokyo,
      },
      {
        id: "ind",
        capa: "3. Índia",
        emoji: "🇮🇳",
        cor: "from-orange-800 to-slate-950",
        conteudo:
          "ÍNDIA superou a China em 2023 como país mais populoso: 1,428 bilhão de habitantes. É a maior democracia do mundo, tem 22 línguas oficiais e é potência em TI (Bangalore = 'Vale do Silício indiano'). Ainda tem 400 milhões em pobreza.",
        exemplo:
          "Curiosidade: 60% das planilhas Excel do mundo passam por serviços indianos. E a Índia lançou uma sonda pra Lua (Chandrayaan-3) em 2023 gastando US$ 75 milhões — menos do que Hollywood gastou no filme 'Interestelar' (US$ 165 mi).",
        fotoUrl: mumbai,
      },
      {
        id: "tig",
        capa: "4. Tigres Asiáticos",
        emoji: "🐯",
        cor: "from-emerald-800 to-slate-950",
        conteudo:
          "TIGRES ASIÁTICOS são 4 economias que cresceram absurdamente rápido depois de 1960: CORÉIA DO SUL, CINGAPURA, TAIWAN e HONG KONG. Investiram em educação, tecnologia e exportação. Hoje têm PIB per capita similar ao da Europa.",
        exemplo:
          "Curiosidade: em 1960, a Coreia do Sul era mais pobre que Gana (África). Hoje, tem PIB per capita similar ao da Itália, produz Samsung/LG/Hyundai/Kia e domina cultura pop mundial (BTS, K-drama, Squid Game). Fez o milagre em 60 anos.",
        fotoUrl: arroz,
      },
    ],
    falaFinal: "China, Japão, Índia e Tigres. 4 potências = 60% do mundo.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 cenas da Ásia contemporânea. Toque em cada card pra ver a imagem e ouvir.",
    instrucao: "Toque nos 4 cards",
    mapaUrl: xangai,
    pontos: [
      { id: "sha", x: 30, y: 30, emoji: "🏙️", cor: "from-red-800 to-slate-950",
        titulo: "Xangai — vitrine chinesa",
        texto: "26 milhões de habitantes. Maior porto do mundo. Bolsa de valores gigante. Símbolo de como a China virou potência.",
        fotoUrl: xangai },
      { id: "tok", x: 65, y: 40, emoji: "🎌", cor: "from-slate-700 to-slate-950",
        titulo: "Tóquio — metrópole máxima",
        texto: "37 milhões na área metropolitana. Maior aglomerado urbano da Terra. Tecnologia, ordem e alta densidade.",
        fotoUrl: tokyo },
      { id: "mum", x: 20, y: 70, emoji: "🕌", cor: "from-orange-800 to-slate-950",
        titulo: "Mumbai — retrato da Índia",
        texto: "20 milhões. Bollywood, bolsa de valores, e a maior favela da Ásia (Dharavi) do lado de arranha-céus. Contraste extremo.",
        fotoUrl: mumbai },
      { id: "arr", x: 70, y: 70, emoji: "🌾", cor: "from-emerald-800 to-slate-950",
        titulo: "Arrozais — base alimentar",
        texto: "50% da população asiática come arroz todo dia. Terraços em montanhas alimentam bilhões há 5 mil anos.",
        fotoUrl: arroz },
    ],
    falaFinal: "4 imagens = a Ásia inteira. Riqueza, tradição, contraste.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "4 perguntas de asiatólogo pra fixar.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Qual é a 2ª maior economia do mundo?",
        fotoUrl: xangai,
        cards: [
          { id: "a", emoji: "🇨🇳", titulo: "China", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🇩🇪", titulo: "Alemanha", cor: "from-slate-700 to-slate-950" },
          { id: "c", emoji: "🇬🇧", titulo: "Reino Unido", cor: "from-red-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. CHINA é a 2ª maior — só perde pros EUA.",
        feedbackErro: "É a CHINA. Alemanha é 4ª; Reino Unido é 6ª. EUA em 1º." },
      { id: "q2", pergunta: "Qual país superou a China em população em 2023?",
        fotoUrl: mumbai,
        cards: [
          { id: "a", emoji: "🇮🇳", titulo: "Índia (1,428 bi)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🇺🇸", titulo: "EUA", cor: "from-slate-700 to-slate-950" },
          { id: "c", emoji: "🇧🇷", titulo: "Brasil", cor: "from-red-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. Índia = 1,428 bi > China = 1,411 bi em 2023.",
        feedbackErro: "É a ÍNDIA. EUA tem 335 milhões; Brasil 215 milhões." },
      { id: "q3", pergunta: "Qual a maior metrópole do mundo?",
        fotoUrl: tokyo,
        cards: [
          { id: "a", emoji: "🎌", titulo: "Tóquio (37 mi)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🗽", titulo: "Nova York", cor: "from-slate-700 to-slate-950" },
          { id: "c", emoji: "🇧🇷", titulo: "São Paulo", cor: "from-red-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. Tóquio = 37 milhões na área metropolitana.",
        feedbackErro: "É TÓQUIO. Nova York = 20 mi; São Paulo = 22 mi." },
      { id: "q4", pergunta: "'Tigres Asiáticos' são:",
        fotoUrl: arroz,
        cards: [
          { id: "a", emoji: "🐯", titulo: "Coreia do Sul, Cingapura, Taiwan, Hong Kong", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🇮🇳", titulo: "Índia, Paquistão, Bangladesh", cor: "from-slate-700 to-slate-950" },
          { id: "c", emoji: "🐅", titulo: "Espécies de tigre no zoológico", cor: "from-red-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. 4 economias que cresceram absurdamente rápido depois de 1960.",
        feedbackErro: "São 4 economias: Coreia do Sul, Cingapura, Taiwan, Hong Kong." },
    ],
    falaFinal: "4 acertos = asiatólogo iniciante.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "A imigração ASIÁTICA no Brasil se concentrou em 3 estados: SP (maior colônia japonesa fora do Japão), PR (japoneses no norte do estado) e AM (chineses e coreanos em Manaus). Acenda os 3.",
    instrucao: "Acenda SP, PR e AM",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "PR", "AM"],
      pergunta: "Quais estados brasileiros mais receberam imigrantes asiáticos?",
    },
    falaFinal: "SP, PR e AM. O Brasil tem 2 milhões de nikkeis — maior colônia japonesa fora do Japão.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize as 5 fases da ascensão asiática em ordem cronológica.",
    instrucao: "Toque na ordem",
    pergunta: "Do mais antigo ao mais recente:",
    paradas: [
      { id: "1945", emoji: "☢️", rotulo: "1. Japão devastado (1945)",
        descricao: "Hiroshima e Nagasaki. Japão em ruínas depois da 2ª Guerra Mundial." },
      { id: "1960", emoji: "🐯", rotulo: "2. Tigres Asiáticos decolam (1960)",
        descricao: "Coreia do Sul, Cingapura, Taiwan e Hong Kong começam o milagre econômico." },
      { id: "1978", emoji: "🇨🇳", rotulo: "3. China abre economia (1978)",
        descricao: "Deng Xiaoping introduz capitalismo. Começa a virar 'fábrica do mundo'.", fotoUrl: xangai },
      { id: "2010", emoji: "📈", rotulo: "4. China vira 2ª economia (2010)",
        descricao: "China ultrapassa Japão. Vira 2ª maior economia mundial." },
      { id: "2023", emoji: "👥", rotulo: "5. Índia > China em população (2023)",
        descricao: "Índia atinge 1,428 bilhão e supera a China como país mais populoso.", fotoUrl: mumbai },
    ],
    ordemCerta: ["1945", "1960", "1978", "2010", "2023"],
    feedbackAcerto: "Perfeito! 78 anos de ascensão asiática em 5 marcos.",
    feedbackErro: "Comece por 1945 (Japão em ruínas). Depois Tigres, China, China n°2, Índia n°1.",
    falaFinal: "Do zero em 1945 ao centro do mundo em 2023. Em 78 anos.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com calma. Termos-chave destacados — toque em qualquer um pra ver a definição.",
    tituloLivro: "📘 Manual do Explorador do Planeta",
    subtitulo: "Capítulo 3 — Ásia: 60% da humanidade",
    paragrafos: [
      { id: "p1",
        texto: "A CHINA é a 2ª maior economia mundial e a fábrica global. Governo de partido único mistura capitalismo com estado forte. Tirou 800 milhões da pobreza em 40 anos — feito inédito na história.",
        chaves: ["CHINA"],
        definicoes: {
          "CHINA": "1,4 bi de habitantes; 2ª maior economia; produção de 30% dos bens industriais do mundo. Xangai, Pequim, Shenzhen são polos globais.",
        },
        fotoUrl: xangai },
      { id: "p2",
        texto: "O JAPÃO é a 3ª economia mundial e potência tecnológica. Tóquio, com 37 milhões, é a maior metrópole do planeta. País ENVELHECIDO: 30% têm 65+ anos.",
        chaves: ["JAPÃO", "ENVELHECIDO"],
        definicoes: {
          "JAPÃO": "3ª economia mundial. Marcas: Toyota, Sony, Nintendo, Panasonic. Reconstruído do zero depois de 1945.",
          "ENVELHECIDO": "30% da população japonesa tem 65+ anos. Consequência: fábricas fecham, cidades encolhem, robôs cuidam de idosos.",
        },
        fotoUrl: tokyo },
      { id: "p3",
        texto: "A ÍNDIA superou a China em 2023 com 1,428 BILHÃO de habitantes. Maior DEMOCRACIA do planeta, 22 línguas oficiais, potência em tecnologia (Bangalore). Ainda tem 400 milhões em pobreza.",
        chaves: ["BILHÃO", "DEMOCRACIA"],
        definicoes: {
          "BILHÃO": "1.428 milhões de indianos — mais gente que Europa + África juntas. E cresce 1% ao ano.",
          "DEMOCRACIA": "Índia é a maior democracia do mundo — 900 milhões de eleitores. Eleições demoram 6 semanas pra terminar.",
        },
        fotoUrl: mumbai },
      { id: "p4",
        texto: "Os TIGRES ASIÁTICOS (Coreia do Sul, Cingapura, Taiwan, Hong Kong) fizeram o milagre econômico depois de 1960. Investiram em EDUCAÇÃO e exportação. Hoje têm PIB per capita similar ao europeu.",
        chaves: ["TIGRES ASIÁTICOS", "EDUCAÇÃO"],
        definicoes: {
          "TIGRES ASIÁTICOS": "4 economias que cresceram absurdamente: Coreia do Sul, Cingapura, Taiwan, Hong Kong. Do zero em 1960 ao 1º mundo hoje.",
          "EDUCAÇÃO": "Chave do milagre asiático. Coreia do Sul e Japão gastam 5%+ do PIB em educação. Alunos estudam 10 horas por dia.",
        },
        fotoUrl: arroz },
    ],
    falaFinal: "Leu tudo? Bora pro quiz final antes da insígnia.",
  },

  cena09_minijogo: (() => {
    const cards = [
      { id: "chi", emoji: "", titulo: "China", cor: "from-slate-800 to-slate-900" },
      { id: "jap", emoji: "", titulo: "Japão", cor: "from-slate-800 to-slate-900" },
      { id: "ind", emoji: "", titulo: "Índia", cor: "from-slate-800 to-slate-900" },
      { id: "cor", emoji: "", titulo: "Coreia do Sul", cor: "from-slate-800 to-slate-900" },
      { id: "cin", emoji: "", titulo: "Cingapura", cor: "from-slate-800 to-slate-900" },
      { id: "tig", emoji: "", titulo: "Tigres Asiáticos", cor: "from-slate-800 to-slate-900" },
    ];
    return {
      tipo: "quizRadar" as const,
      aurora: "Quiz rápido: pra cada descrição, escolha o país asiático correto.",
      instrucao: "Escolha o correto",
      perguntas: [
        { id: "r1", pergunta: "2ª economia mundial e 'fábrica do mundo'; produz 30% dos bens industriais.", cards, correta: "chi",
          feedbackAcerto: "Isso. Fábrica do mundo = CHINA.", feedbackErro: "É a CHINA. 1,4 bi de pessoas, PIB de US$ 18 trilhões." },
        { id: "r2", pergunta: "3ª economia; Toyota, Sony, Nintendo; população envelhecida (30% com 65+ anos).", cards, correta: "jap",
          feedbackAcerto: "Isso. Envelhecido + Toyota = JAPÃO.", feedbackErro: "É o JAPÃO. Tóquio = maior metrópole do mundo." },
        { id: "r3", pergunta: "País mais populoso do mundo desde 2023, com 1,428 bilhão de habitantes.", cards, correta: "ind",
          feedbackAcerto: "Isso. Superou a China = ÍNDIA.", feedbackErro: "É a ÍNDIA. Maior democracia do planeta." },
        { id: "r4", pergunta: "Tigre asiático de Samsung, LG, Hyundai, BTS e Squid Game.", cards, correta: "cor",
          feedbackAcerto: "Isso. K-pop + Samsung = COREIA DO SUL.", feedbackErro: "É a COREIA DO SUL. Do zero em 1960 ao PIB da Itália hoje." },
        { id: "r5", pergunta: "Cidade-Estado tigre asiático; um dos maiores portos e centros financeiros do mundo.", cards, correta: "cin",
          feedbackAcerto: "Isso. Cidade-Estado + porto = CINGAPURA.", feedbackErro: "É CINGAPURA. 6 milhões de habitantes; PIB per capita > Suíça." },
        { id: "r6", pergunta: "Nome coletivo das 4 economias asiáticas que decolaram depois de 1960.", cards, correta: "tig",
          feedbackAcerto: "Isso. 4 economias milagre = TIGRES ASIÁTICOS.", feedbackErro: "São os TIGRES ASIÁTICOS: Coreia do Sul, Cingapura, Taiwan e Hong Kong." },
      ],
      falaFinal: "6 perguntas, 6 potências. Asiatólogo formado.",
    };
  })(),

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da produção industrial mundial (2024): quem fabrica o quê.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "chi", rotulo: "China (~30%)", emoji: "🇨🇳", percentual: 30, cor: "#dc2626",
        descricao: "30% de tudo o que se fabrica no mundo — celulares, roupas, brinquedos, painéis solares, aço.",
        exemplos: ["📱 Celulares", "🧸 Brinquedos", "🌞 Painéis solares"] },
      { id: "res", rotulo: "Resto do mundo (~70%)", emoji: "🌍", percentual: 70, cor: "#64748b",
        descricao: "EUA (17%), Japão (7%), Alemanha (6%), Índia (3%) e outros 190 países.",
        exemplos: ["🇺🇸 EUA (17%)", "🇯🇵 Japão (7%)", "🇩🇪 Alemanha (6%)"] },
    ],
    falaFinal: "30% da produção mundial vem de UM país. E esse país é a China.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Asiatólogo.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Qual país é a 2ª maior economia do mundo?",
        opcoes: [
          { id: "a", texto: "China", correta: true },
          { id: "b", texto: "Índia", correta: false },
          { id: "c", texto: "Reino Unido", correta: false },
        ],
        feedbackAcerto: "Isso! China, atrás só dos EUA.",
        feedbackErro: "É a China. Índia é 5ª; Reino Unido é 6ª." },
      { id: "av2", pergunta: "Em 2023, qual país passou a ser o mais populoso do mundo?",
        opcoes: [
          { id: "a", texto: "Índia (1,428 bi)", correta: true },
          { id: "b", texto: "China", correta: false },
          { id: "c", texto: "EUA", correta: false },
        ],
        feedbackAcerto: "Isso! Índia superou a China em 2023.",
        feedbackErro: "É a Índia — foi o 'passe' de 2023. China caiu para 2º." },
      { id: "av3", pergunta: "Os 4 Tigres Asiáticos são:",
        opcoes: [
          { id: "a", texto: "Coreia do Sul, Cingapura, Taiwan e Hong Kong", correta: true },
          { id: "b", texto: "China, Japão, Índia e Coreia", correta: false },
          { id: "c", texto: "Vietnã, Tailândia, Filipinas e Indonésia", correta: false },
        ],
        feedbackAcerto: "Isso! 4 economias que decolaram depois de 1960.",
        feedbackErro: "São Coreia do Sul, Cingapura, Taiwan e Hong Kong." },
    ],
    selo: { nome: "Asiatólogo", subtitulo: "Insígnia do Explorador do Planeta", emoji: "🏯", cor: "from-red-800 to-slate-950" },
    falaFinal: "Insígnia conquistada! Você entende a Ásia que domina o século XXI.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Asiatólogo" },
};
