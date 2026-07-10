import type { AulaGeoV1 } from "../../types";
import sahel from "@/assets/geografia-8ano/africa-sahel.jpg";
import savana from "@/assets/geografia-8ano/savana-africana.jpg";
import fronteiras from "@/assets/geografia-8ano/africa-fronteiras-artificiais.jpg";
import urbana from "@/assets/geografia-8ano/africa-urbana.jpg";

/**
 * Geografia · 8º Ano · Unidade 4 · Aula 01
 * "África" — BNCC EF08GE08, EF08GE09
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-africa",
  titulo: "África — Berço da humanidade e continente do futuro",
  iconeTrilha: "🌍",
  bncc: ["EF08GE08", "EF08GE09"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: savana,
    imagemDestaqueUrl: savana,
    aurora:
      "ÁFRICA é o berço da humanidade — TODO ser humano vivo hoje descende de africanos que saíram do continente há 70 mil anos. Tem 54 países, 1,4 bilhão de habitantes e é o continente mais jovem: 60% da população tem menos de 25 anos. Herdou FRONTEIRAS ARTIFICIAIS traçadas por europeus na Conferência de Berlim (1885), que rachavam etnias e forçavam povos rivais a conviver — origem de muitos conflitos atuais. Mas também tem economias em ascensão: Lagos, Nairóbi, Joanesburgo lideram uma nova África urbana e tecnológica.",
    falaFinal: "1,4 bilhão de pessoas. Continente mais jovem. Passado colonial + futuro pulsante.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Chuta antes: em 2050, qual continente terá mais habitantes que a Europa e as Américas juntas?",
    pergunta: "Qual continente vai explodir em população?",
    opcoes: [
      { id: "af", titulo: "ÁFRICA", subtitulo: "vai dobrar até 2050", emoji: "🌍", cor: "from-orange-800 to-slate-950" },
      { id: "as", titulo: "ÁSIA", subtitulo: "já é o maior hoje", emoji: "🌏", cor: "from-red-800 to-slate-950" },
    ],
    respostaCerta: "af",
    feedbackAcerto:
      "Isso! A África deve dobrar de 1,4 para 2,5 bilhões até 2050. A Ásia crescerá pouco (China está encolhendo). Um em cada 4 humanos em 2050 será africano.",
    feedbackErro:
      "A Ásia já é enorme (4,7 bi), mas cresce pouco. A ÁFRICA vai DOBRAR até 2050 (1,4 → 2,5 bi). Em 2100, 1 em cada 3 humanos será africano.",
    falaFinal: "África vai dobrar. Ásia estabiliza. O século XXI é africano em população.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos-chave da geografia africana.",
    instrucao: "",
    cadernos: [
      {
        id: "sahel",
        capa: "1. Sahel",
        emoji: "🏜️",
        cor: "from-amber-800 to-orange-950",
        conteudo:
          "SAHEL é a faixa SEMIÁRIDA da África que corta o continente do Senegal (oeste) ao Sudão (leste). Fica entre o Deserto do Saara (norte) e a savana úmida (sul). Sofre DESERTIFICAÇÃO — o Saara avança 5 km por ano sobre o Sahel.",
        exemplo:
          "Curiosidade: 10 países do Sahel se uniram para plantar a GRANDE MURALHA VERDE — uma faixa de 8.000 km de árvores para conter o avanço do deserto. Já foram plantadas milhões de árvores desde 2007.",
        fotoUrl: sahel,
      },
      {
        id: "sav",
        capa: "2. Savana",
        emoji: "🦒",
        cor: "from-emerald-800 to-slate-950",
        conteudo:
          "SAVANA é o BIOMA que domina o centro da África: gramíneas altas, árvores esparsas (baobás, acácias) e a maior biodiversidade de grandes mamíferos do planeta — elefantes, leões, girafas, zebras, gnus.",
        exemplo:
          "Curiosidade: no Parque Serengeti (Tanzânia), 1,5 milhão de gnus migram anualmente 800 km procurando pastos — é a MAIOR MIGRAÇÃO DE MAMÍFEROS TERRESTRES do planeta. Atravessam rios cheios de crocodilos.",
        fotoUrl: savana,
      },
      {
        id: "fron",
        capa: "3. Fronteiras artificiais",
        emoji: "📐",
        cor: "from-red-800 to-slate-950",
        conteudo:
          "FRONTEIRAS ARTIFICIAIS foram traçadas na Conferência de Berlim (1885) por europeus com régua no mapa. Ignoraram etnias, línguas e reinos africanos. Resultado: povos rivais forçados a conviver, e etnias unidas separadas em países diferentes.",
        exemplo:
          "Curiosidade: os SOMALIS ficam divididos entre 5 países (Somália, Etiópia, Quênia, Djibouti, Iêmen). Os TUAREGUES entre Argélia, Mali, Níger, Líbia, Burkina Faso. Muitas guerras atuais têm origem nessa divisão colonial.",
        fotoUrl: fronteiras,
      },
      {
        id: "urb",
        capa: "4. Nova África urbana",
        emoji: "🏙️",
        cor: "from-sky-800 to-slate-950",
        conteudo:
          "A ÁFRICA URBANA cresce mais rápido que qualquer região do mundo. Lagos (Nigéria) tem 22 mi de habitantes, Cairo (Egito) 22 mi, Kinshasa (Congo) 17 mi. São megacidades com Bolsas de Valores, startups e classe média em expansão.",
        exemplo:
          "Curiosidade: NAIRÓBI (Quênia) é chamada 'Silicon Savannah' — tem mais de 200 startups de tecnologia. O M-Pesa (sistema de pagamento por celular queniano) atende 50 milhões de pessoas em 7 países. A África digital pula etapas.",
        fotoUrl: urbana,
      },
    ],
    falaFinal: "Sahel, savana, fronteiras coloniais, novas megacidades. 4 pilares da África.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 realidades africanas. Toque em cada card.",
    instrucao: "Toque nos 4 cards",
    mapaUrl: fronteiras,
    pontos: [
      { id: "sahel", x: 45, y: 30, emoji: "🏜️", cor: "from-amber-800 to-orange-950",
        titulo: "🏜️ Sahel",
        texto: "Faixa semiárida do Senegal ao Sudão. Sofre desertificação. Grande Muralha Verde tenta conter o Saara.",
        fotoUrl: sahel },
      { id: "sav", x: 55, y: 55, emoji: "🦒", cor: "from-emerald-800 to-slate-950",
        titulo: "🦒 Savana",
        texto: "Bioma dominante. Serengeti. Maior migração de mamíferos do planeta — 1,5 mi de gnus anualmente.",
        fotoUrl: savana },
      { id: "fron", x: 40, y: 60, emoji: "📐", cor: "from-red-800 to-slate-950",
        titulo: "📐 Fronteiras coloniais",
        texto: "Traçadas em Berlim (1885) com régua. Rachou etnias — origem de conflitos até hoje.",
        fotoUrl: fronteiras },
      { id: "urb", x: 60, y: 30, emoji: "🏙️", cor: "from-sky-800 to-slate-950",
        titulo: "🏙️ Nova África urbana",
        texto: "Lagos (22 mi), Cairo (22 mi), Kinshasa (17 mi). Silicon Savannah em Nairóbi. Futuro urbano em ascensão.",
        fotoUrl: urbana },
    ],
    falaFinal: "África é passado colonial + presente jovem + futuro digital.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "4 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "SAHEL é uma faixa:",
        fotoUrl: sahel,
        cards: [
          { id: "a", emoji: "🏜️", titulo: "Semiárida (entre Saara e savana)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🌊", titulo: "Oceânica (litoral atlântico)", cor: "from-sky-800 to-slate-950" },
          { id: "c", emoji: "🌲", titulo: "Floresta tropical", cor: "from-red-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. SEMIÁRIDA — entre o Saara (deserto) e a savana (mais úmida).",
        feedbackErro: "Sahel = SEMIÁRIDO. Não é oceano nem floresta. Faixa de transição entre Saara e savana." },
      { id: "q2", pergunta: "A maior migração de mamíferos do planeta acontece:",
        fotoUrl: savana,
        cards: [
          { id: "a", emoji: "🦌", titulo: "No Serengeti (Tanzânia) — 1,5 mi de gnus", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🐨", titulo: "Na Austrália (cangurus)", cor: "from-amber-800 to-slate-950" },
          { id: "c", emoji: "🦌", titulo: "No Canadá (caribus)", cor: "from-sky-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. SERENGETI — 1,5 milhão de gnus, 800 km por ano.",
        feedbackErro: "É no SERENGETI (Tanzânia). Caribus canadenses migram, mas são poucos milhares. Gnus = 1,5 milhão." },
      { id: "q3", pergunta: "Fronteiras africanas foram desenhadas quando?",
        fotoUrl: fronteiras,
        cards: [
          { id: "a", emoji: "📐", titulo: "Conferência de Berlim (1885)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🕊️", titulo: "Ao longo dos séculos, pelos africanos", cor: "from-red-800 to-slate-950" },
          { id: "c", emoji: "🇺🇳", titulo: "ONU, depois de 1945", cor: "from-sky-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. BERLIM (1885) — 14 países europeus dividiram a África com régua.",
        feedbackErro: "Foram traçadas em BERLIM (1885) por europeus. Ignoraram etnias africanas. ONU só ratificou depois." },
      { id: "q4", pergunta: "Cidade queniana chamada 'Silicon Savannah':",
        fotoUrl: urbana,
        cards: [
          { id: "a", emoji: "🏙️", titulo: "Nairóbi (Quênia)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🌆", titulo: "Cairo (Egito)", cor: "from-amber-800 to-slate-950" },
          { id: "c", emoji: "🏗️", titulo: "Joanesburgo (África do Sul)", cor: "from-sky-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. NAIRÓBI — 200+ startups e o M-Pesa (pagamento por celular).",
        feedbackErro: "É NAIRÓBI (Quênia). Cairo e Joanesburgo são gigantes, mas 'Silicon Savannah' é Nairóbi." },
    ],
    falaFinal: "4 acertos = geógrafo da África.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "O Brasil tem laços fortes com a África. 5 milhões de africanos escravizados desembarcaram aqui — principalmente na Bahia, Rio de Janeiro e Pernambuco (portos escravistas coloniais). Acenda esses 3 estados.",
    instrucao: "Acenda BA, RJ e PE",
    missao: {
      tipo: "selecionar",
      siglas: ["BA", "RJ", "PE"],
      pergunta: "Quais estados receberam mais africanos escravizados?",
    },
    falaFinal: "Bahia (Salvador), Rio de Janeiro e Pernambuco (Recife). Três portos que fizeram o Brasil o mais africano fora da África.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene 5 marcos da África moderna.",
    instrucao: "Toque na ordem",
    pergunta: "Do mais antigo ao mais recente:",
    paradas: [
      { id: "1500", emoji: "⛓️", rotulo: "1. Início do tráfico transatlântico (1500)",
        descricao: "Portugueses começam a escravizar africanos para a América." },
      { id: "1885", emoji: "📐", rotulo: "2. Conferência de Berlim (1885)",
        descricao: "Europeus dividem a África com régua. Fronteiras artificiais.", fotoUrl: fronteiras },
      { id: "1960", emoji: "🕊️", rotulo: "3. Ano da África (1960)",
        descricao: "17 países africanos ficam independentes só em 1960." },
      { id: "1994", emoji: "✊", rotulo: "4. Fim do Apartheid (1994)",
        descricao: "Mandela vence eleições na África do Sul. Fim da segregação racial." },
      { id: "2020", emoji: "📱", rotulo: "5. Silicon Savannah (Anos 2010–2020)",
        descricao: "Nairóbi vira polo tech africano. M-Pesa atende 50 mi de pessoas.", fotoUrl: urbana },
    ],
    ordemCerta: ["1500", "1885", "1960", "1994", "2020"],
    feedbackAcerto: "Perfeito! 500 anos de África em ordem.",
    feedbackErro: "Comece por 1500 (tráfico). Depois Berlim, ano da África, apartheid, tech.",
    falaFinal: "5 datas contam a história do continente-mãe.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com calma. Termos-chave destacados.",
    tituloLivro: "📘 Manual do Explorador do Mundo",
    subtitulo: "Capítulo 4 — África",
    paragrafos: [
      { id: "p1",
        texto: "O SAHEL é uma faixa SEMIÁRIDA entre o Deserto do Saara e a savana. Sofre DESERTIFICAÇÃO — o Saara avança sobre o Sahel.",
        chaves: ["SAHEL", "SEMIÁRIDA", "DESERTIFICAÇÃO"],
        definicoes: {
          "SAHEL": "Faixa semiárida da África, do Senegal ao Sudão. 10 países. Sofre com secas e avanço do deserto.",
          "SEMIÁRIDA": "Clima com pouca chuva (menos que a savana, mais que o deserto). Vegetação rala e adaptada à seca.",
          "DESERTIFICAÇÃO": "Processo em que terra fértil vira deserto. Causas: desmatamento, superpastagem, mudança climática.",
        },
        fotoUrl: sahel },
      { id: "p2",
        texto: "A SAVANA africana é o bioma dominante do centro do continente. Baobás, elefantes, leões, girafas. Serengeti tem a MAIOR MIGRAÇÃO de mamíferos do planeta.",
        chaves: ["SAVANA", "MAIOR MIGRAÇÃO"],
        definicoes: {
          "SAVANA": "Bioma tropical com gramíneas altas e árvores esparsas (baobás, acácias). Duas estações: seca e chuvosa.",
          "MAIOR MIGRAÇÃO": "1,5 milhão de gnus percorrem 800 km anualmente no Serengeti (Tanzânia) buscando pastos. Atravessam rios com crocodilos.",
        },
        fotoUrl: savana },
      { id: "p3",
        texto: "As FRONTEIRAS ARTIFICIAIS foram traçadas na CONFERÊNCIA DE BERLIM (1885). Europeus dividiram a África com régua, ignorando etnias — causa de conflitos até hoje.",
        chaves: ["FRONTEIRAS ARTIFICIAIS", "CONFERÊNCIA DE BERLIM"],
        definicoes: {
          "FRONTEIRAS ARTIFICIAIS": "Linhas retas no mapa que ignoram povos e culturas locais. Rachou etnias entre países diferentes.",
          "CONFERÊNCIA DE BERLIM": "Reunião de 1885 onde 14 países europeus dividiram a África entre si. Nenhum africano foi consultado.",
        },
        fotoUrl: fronteiras },
      { id: "p4",
        texto: "A ÁFRICA URBANA cresce rápido: Lagos, Cairo, Kinshasa. Nairóbi é a SILICON SAVANNAH — 200 startups e o M-Pesa (pagamento por celular).",
        chaves: ["ÁFRICA URBANA", "SILICON SAVANNAH"],
        definicoes: {
          "ÁFRICA URBANA": "Continente em urbanização acelerada. Megacidades africanas explodem em população: Lagos (22 mi), Cairo (22 mi), Kinshasa (17 mi).",
          "SILICON SAVANNAH": "Apelido de Nairóbi (Quênia). Polo de startups africanas. M-Pesa atende 50 milhões em 7 países.",
        },
        fotoUrl: urbana },
    ],
    falaFinal: "Bora pro quiz.",
  },

  cena09_minijogo: (() => {
    const cards = [
      { id: "sahel", emoji: "", titulo: "Sahel", cor: "from-slate-800 to-slate-900" },
      { id: "sav", emoji: "", titulo: "Savana", cor: "from-slate-800 to-slate-900" },
      { id: "berl", emoji: "", titulo: "Conf. de Berlim", cor: "from-slate-800 to-slate-900" },
      { id: "des", emoji: "", titulo: "Desertificação", cor: "from-slate-800 to-slate-900" },
      { id: "ss", emoji: "", titulo: "Silicon Savannah", cor: "from-slate-800 to-slate-900" },
      { id: "lag", emoji: "", titulo: "Lagos", cor: "from-slate-800 to-slate-900" },
    ];
    return {
      tipo: "quizRadar" as const,
      aurora: "Quiz rápido.",
      instrucao: "Escolha o conceito correto",
      perguntas: [
        { id: "r1", pergunta: "Faixa semiárida entre o Saara e a savana, corta a África do Senegal ao Sudão.", cards, correta: "sahel",
          feedbackAcerto: "Isso. SAHEL.", feedbackErro: "É o SAHEL. Faixa de transição entre deserto e savana." },
        { id: "r2", pergunta: "Bioma tropical com elefantes, leões, girafas e a maior migração de mamíferos do planeta.", cards, correta: "sav",
          feedbackAcerto: "Isso. SAVANA.", feedbackErro: "É a SAVANA. Serengeti tem a maior migração." },
        { id: "r3", pergunta: "Reunião de 1885 em que europeus dividiram a África com régua no mapa.", cards, correta: "berl",
          feedbackAcerto: "Isso. CONFERÊNCIA DE BERLIM.", feedbackErro: "É a CONFERÊNCIA DE BERLIM (1885). Criou fronteiras artificiais." },
        { id: "r4", pergunta: "Processo em que terra fértil vira deserto por desmatamento e seca.", cards, correta: "des",
          feedbackAcerto: "Isso. DESERTIFICAÇÃO.", feedbackErro: "É a DESERTIFICAÇÃO. Saara avança 5 km/ano sobre o Sahel." },
        { id: "r5", pergunta: "Apelido de Nairóbi por causa das 200 startups de tecnologia africanas.", cards, correta: "ss",
          feedbackAcerto: "Isso. SILICON SAVANNAH.", feedbackErro: "É SILICON SAVANNAH — Nairóbi (Quênia)." },
        { id: "r6", pergunta: "Maior cidade da África (Nigéria), com 22 milhões de habitantes.", cards, correta: "lag",
          feedbackAcerto: "Isso. LAGOS (Nigéria).", feedbackErro: "É LAGOS, na Nigéria. 22 milhões de habitantes." },
      ],
      falaFinal: "6 acertos = conhecedor da África.",
    };
  })(),

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza demográfica: idade da população africana × idade da população europeia.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "af", rotulo: "África: 60% tem menos de 25 anos", emoji: "🌍", percentual: 60, cor: "#ea580c",
        descricao: "Continente mais JOVEM do mundo. Enorme força de trabalho em formação. Bônus demográfico.",
        exemplos: ["🎓 60% jovem", "📈 População dobra até 2050"] },
      { id: "eu", rotulo: "Europa: só 25% tem menos de 25 anos", emoji: "🌍", percentual: 25, cor: "#7c3aed",
        descricao: "Continente mais VELHO do mundo. População envelhece e diminui. Precisa de imigrantes.",
        exemplos: ["👴 25% jovem", "📉 População encolhe"] },
    ],
    falaFinal: "África é jovem e cresce; Europa é velha e encolhe. Isso vai remodelar o século XXI.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Fronteiras africanas atuais foram criadas por:",
        opcoes: [
          { id: "a", texto: "Europeus, na Conferência de Berlim (1885)", correta: true },
          { id: "b", texto: "Reis africanos, no século XX", correta: false },
          { id: "c", texto: "ONU, depois de 1945", correta: false },
        ],
        feedbackAcerto: "Isso! BERLIM 1885 — 14 países europeus com régua no mapa.",
        feedbackErro: "Foi na CONFERÊNCIA DE BERLIM (1885). Europeus dividiram sem consultar africanos." },
      { id: "av2", pergunta: "SAHEL é uma faixa:",
        opcoes: [
          { id: "a", texto: "Semiárida com desertificação", correta: true },
          { id: "b", texto: "De floresta tropical", correta: false },
          { id: "c", texto: "Oceânica", correta: false },
        ],
        feedbackAcerto: "Isso! SEMIÁRIDA, entre Saara e savana. Sofre desertificação.",
        feedbackErro: "SAHEL = semiárido. Não é floresta nem oceano — é transição." },
      { id: "av3", pergunta: "Continente mais JOVEM do mundo:",
        opcoes: [
          { id: "a", texto: "África (60% tem < 25 anos)", correta: true },
          { id: "b", texto: "Europa", correta: false },
          { id: "c", texto: "Ásia", correta: false },
        ],
        feedbackAcerto: "Isso! ÁFRICA — 60% da população tem menos de 25 anos.",
        feedbackErro: "É a ÁFRICA. 60% jovem. Europa é a mais velha do mundo." },
    ],
    selo: { nome: "Conhecedor da África", subtitulo: "Insígnia do Explorador do Mundo", emoji: "🌍", cor: "from-orange-800 to-red-950" },
    falaFinal: "Insígnia conquistada! Você conhece a África de verdade.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Conhecedor da África" },
};
