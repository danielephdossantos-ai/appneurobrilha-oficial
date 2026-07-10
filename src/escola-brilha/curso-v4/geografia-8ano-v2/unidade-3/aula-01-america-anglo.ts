import type { AulaGeoV1 } from "../../types";
import nyc from "@/assets/geografia-8ano/nyc-skyline.jpg";
import silicon from "@/assets/geografia-8ano/silicon-valley.jpg";
import toronto from "@/assets/geografia-8ano/toronto-canada.jpg";
import hollywood from "@/assets/geografia-8ano/hollywood-cultura.jpg";

/**
 * Geografia · 8º Ano · Unidade 3 · Aula 01
 * "América Anglo-Saxônica" — BNCC EF08GE07, EF08GE18
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-america-anglo",
  titulo: "América Anglo-Saxônica — EUA e Canadá",
  iconeTrilha: "🗽",
  bncc: ["EF08GE07", "EF08GE18"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: nyc,
    imagemDestaqueUrl: nyc,
    aurora:
      "ESTADOS UNIDOS e CANADÁ formam a AMÉRICA ANGLO-SAXÔNICA — colonizada por ingleses, franceses e outros europeus do norte. Somam ~380 milhões de habitantes e o maior PIB do planeta. É o país das SUPERPOTÊNCIAS: Wall Street move o dinheiro global, Silicon Valley cria a tecnologia (Apple, Google, Meta), Hollywood exporta cultura. O Canadá é o 2º maior país do mundo em área — atrás só da Rússia — mas tem só 40 milhões de habitantes concentrados perto da fronteira com os EUA.",
    falaFinal: "Wall Street + Silicon Valley + Hollywood. Três pilares do poder global norte-americano.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Chuta antes: qual é o país com a MAIOR economia do mundo em 2024?",
    pergunta: "Quem tem o maior PIB?",
    opcoes: [
      { id: "eua", titulo: "ESTADOS UNIDOS", subtitulo: "PIB ~US$ 27 tri", emoji: "🇺🇸", cor: "from-sky-800 to-slate-950" },
      { id: "chi", titulo: "CHINA", subtitulo: "PIB ~US$ 17 tri", emoji: "🇨🇳", cor: "from-red-800 to-slate-950" },
    ],
    respostaCerta: "eua",
    feedbackAcerto:
      "Isso! Os EUA lideram com ~US$ 27 trilhões (2024). A China (2ª colocada) tem ~US$ 17 tri — cresce rápido, mas ainda não ultrapassou.",
    feedbackErro:
      "EUA ainda estão à frente: ~US$ 27 tri contra ~US$ 17 tri da China. A China é 2ª e cresce mais rápido, mas ainda não passou.",
    falaFinal: "EUA lideram em PIB, mas a China está cada vez mais perto.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 pilares do poder norte-americano.",
    instrucao: "",
    cadernos: [
      {
        id: "ws",
        capa: "1. Wall Street",
        emoji: "💵",
        cor: "from-emerald-800 to-slate-950",
        conteudo:
          "WALL STREET é a rua de NOVA YORK onde fica a Bolsa de Valores (NYSE), a maior do mundo. Move cerca de US$ 25 trilhões em ações todos os anos. Onde Wall Street respira, o mundo inteiro se mexe.",
        exemplo:
          "Curiosidade: quando Wall Street quebrou em 1929 (a 'Grande Depressão'), o mundo inteiro entrou em crise por 10 anos — inclusive o Brasil. Foi quando o café brasileiro perdeu o valor e Getúlio Vargas subiu ao poder.",
        fotoUrl: nyc,
      },
      {
        id: "sv",
        capa: "2. Silicon Valley",
        emoji: "💻",
        cor: "from-sky-800 to-slate-950",
        conteudo:
          "SILICON VALLEY é a região da CALIFÓRNIA onde ficam as maiores empresas de tecnologia do mundo: Apple, Google, Meta (Facebook/Instagram/WhatsApp), Netflix, Tesla. É o centro global da inovação.",
        exemplo:
          "Curiosidade: 5 empresas de Silicon Valley (Apple, Microsoft, Alphabet/Google, Amazon, Meta) valem juntas mais de US$ 10 trilhões — mais que o PIB de qualquer país exceto EUA e China. Um vale de 80 km dominando o planeta.",
        fotoUrl: silicon,
      },
      {
        id: "hw",
        capa: "3. Hollywood",
        emoji: "🎬",
        cor: "from-amber-800 to-orange-950",
        conteudo:
          "HOLLYWOOD é o bairro de LOS ANGELES onde nasceram os grandes estúdios de cinema. Netflix, Disney, Warner, Universal. Exporta filmes, séries e cultura para o mundo todo — é o SOFT POWER americano.",
        exemplo:
          "Curiosidade: filmes de Hollywood são vistos em 190 países. Quando um adolescente em Tóquio, Nairóbi ou São Paulo assiste a um filme da Marvel, ele absorve valores, gostos e sonhos americanos. É poder cultural puro.",
        fotoUrl: hollywood,
      },
      {
        id: "ca",
        capa: "4. Canadá",
        emoji: "🇨🇦",
        cor: "from-red-800 to-slate-950",
        conteudo:
          "CANADÁ é o 2º MAIOR PAÍS do mundo (9,98 milhões de km²) — atrás só da Rússia. Mas tem apenas ~40 milhões de habitantes, todos concentrados a 200 km da fronteira sul (mais quente). É o país mais VAZIO em densidade demográfica dos ricos.",
        exemplo:
          "Curiosidade: 90% dos canadenses vivem a menos de 160 km da fronteira com os EUA. O resto do país é FLORESTAS BOREAIS, tundras e gelo. Toronto e Montreal concentram 40% da população.",
        fotoUrl: toronto,
      },
    ],
    falaFinal: "Dinheiro (WS), tecnologia (SV), cultura (HW), território (CA). 4 pilares.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 lugares que fazem os EUA e o Canadá serem potências globais.",
    instrucao: "Toque nos 4 cards",
    mapaUrl: nyc,
    pontos: [
      { id: "ws", x: 80, y: 30, emoji: "💵", cor: "from-emerald-800 to-slate-950",
        titulo: "💵 Wall Street (Nova York)",
        texto: "Maior bolsa de valores do mundo. US$ 25 trilhões em ações. Coração financeiro do planeta.",
        fotoUrl: nyc },
      { id: "sv", x: 15, y: 55, emoji: "💻", cor: "from-sky-800 to-slate-950",
        titulo: "💻 Silicon Valley (Califórnia)",
        texto: "Apple, Google, Meta, Tesla. Centro global de tecnologia e inovação. 5 empresas valem mais que muitos países.",
        fotoUrl: silicon },
      { id: "hw", x: 12, y: 70, emoji: "🎬", cor: "from-amber-800 to-orange-950",
        titulo: "🎬 Hollywood (Los Angeles)",
        texto: "Filmes e séries para 190 países. Soft power americano em ação — cultura como arma diplomática.",
        fotoUrl: hollywood },
      { id: "ca", x: 60, y: 15, emoji: "🇨🇦", cor: "from-red-800 to-slate-950",
        titulo: "🇨🇦 Canadá (Toronto)",
        texto: "2º maior país do mundo, mas só 40 mi de habitantes — todos perto da fronteira sul. Toronto lidera.",
        fotoUrl: toronto },
    ],
    falaFinal: "4 lugares que movem o planeta.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "4 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Onde fica a maior bolsa de valores do mundo?",
        fotoUrl: nyc,
        cards: [
          { id: "a", emoji: "🗽", titulo: "Wall Street (Nova York)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🏰", titulo: "Londres", cor: "from-sky-800 to-slate-950" },
          { id: "c", emoji: "🗼", titulo: "Tóquio", cor: "from-red-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. WALL STREET em Nova York — maior bolsa do mundo.",
        feedbackErro: "Londres e Tóquio têm bolsas grandes, mas a MAIOR é Wall Street (NYSE)." },
      { id: "q2", pergunta: "O que fica em Silicon Valley?",
        fotoUrl: silicon,
        cards: [
          { id: "a", emoji: "💻", titulo: "Big Techs (Apple, Google, Meta)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🎬", titulo: "Estúdios de cinema", cor: "from-amber-800 to-slate-950" },
          { id: "c", emoji: "🚀", titulo: "NASA", cor: "from-sky-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. Big Techs — Apple, Google, Meta, Netflix, Tesla.",
        feedbackErro: "Estúdios ficam em Hollywood. NASA em Houston/Cabo Canaveral. Silicon Valley = TECH." },
      { id: "q3", pergunta: "Hollywood é o centro de:",
        fotoUrl: hollywood,
        cards: [
          { id: "a", emoji: "🎬", titulo: "Cinema e séries (soft power)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "💵", titulo: "Bolsa de valores", cor: "from-amber-800 to-slate-950" },
          { id: "c", emoji: "🏭", titulo: "Indústria automobilística", cor: "from-sky-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. CINEMA e SÉRIES para 190 países.",
        feedbackErro: "Bolsa = Wall Street. Carros = Detroit. Hollywood = CINEMA." },
      { id: "q4", pergunta: "O Canadá é o SEGUNDO maior país do mundo. O primeiro é:",
        fotoUrl: toronto,
        cards: [
          { id: "a", emoji: "🇷🇺", titulo: "Rússia (17,1 mi km²)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🇺🇸", titulo: "Estados Unidos", cor: "from-red-800 to-slate-950" },
          { id: "c", emoji: "🇨🇳", titulo: "China", cor: "from-sky-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. RÚSSIA (17,1 mi km²) > Canadá (9,98) > China (9,60) > EUA (9,50) > Brasil (8,51).",
        feedbackErro: "É a RÚSSIA (17,1 milhões km²). Ranking: Rússia, Canadá, China, EUA, Brasil." },
    ],
    falaFinal: "4 acertos = analista da potência.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "Os EUA são o maior investidor estrangeiro no Brasil. Acenda os 3 estados que mais recebem investimento e presença americana (finanças + indústria + tech).",
    instrucao: "Acenda SP, RJ e MG",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "RJ", "MG"],
      pergunta: "Quais estados concentram investimento americano no Brasil?",
    },
    falaFinal: "São Paulo (finanças/tech), Rio (petróleo/finanças), Minas Gerais (indústria). Trio econômico.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene 5 marcos da ascensão dos EUA.",
    instrucao: "Toque na ordem",
    pergunta: "Do mais antigo ao mais recente:",
    paradas: [
      { id: "1776", emoji: "🇺🇸", rotulo: "1. Independência dos EUA (1776)",
        descricao: "13 colônias inglesas se libertam. Nasce o país." },
      { id: "1929", emoji: "📉", rotulo: "2. Quebra da Bolsa (1929)",
        descricao: "Wall Street quebra. Grande Depressão mundial." },
      { id: "1945", emoji: "🏆", rotulo: "3. Fim da 2ª Guerra Mundial (1945)",
        descricao: "EUA emergem como superpotência global." },
      { id: "1969", emoji: "🌙", rotulo: "4. Homem na Lua (1969)",
        descricao: "Apollo 11 pousa. Vitória tecnológica sobre a URSS." },
      { id: "2007", emoji: "📱", rotulo: "5. iPhone e Big Tech (2007)",
        descricao: "Apple lança o iPhone. Silicon Valley domina o mundo.", fotoUrl: silicon },
    ],
    ordemCerta: ["1776", "1929", "1945", "1969", "2007"],
    feedbackAcerto: "Perfeito! 250 anos de EUA em ordem.",
    feedbackErro: "Comece por 1776 (independência). Depois 1929, 1945, 1969, 2007.",
    falaFinal: "5 datas = a construção da superpotência.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com calma. Termos-chave destacados.",
    tituloLivro: "📘 Manual do Explorador do Mundo",
    subtitulo: "Capítulo 3 — América Anglo-Saxônica",
    paragrafos: [
      { id: "p1",
        texto: "WALL STREET é a rua de Nova York onde fica a NYSE, maior BOLSA DE VALORES do mundo. Movimenta US$ 25 trilhões por ano.",
        chaves: ["WALL STREET", "BOLSA DE VALORES"],
        definicoes: {
          "WALL STREET": "Rua em Manhattan (Nova York) onde fica a NYSE. Símbolo do capitalismo financeiro global.",
          "BOLSA DE VALORES": "Local onde ações de empresas são negociadas. Preço da ação = valor da empresa segundo o mercado.",
        },
        fotoUrl: nyc },
      { id: "p2",
        texto: "SILICON VALLEY concentra as BIG TECHS: Apple, Google, Meta, Tesla, Netflix. 5 empresas valem mais de US$ 10 trilhões.",
        chaves: ["SILICON VALLEY", "BIG TECHS"],
        definicoes: {
          "SILICON VALLEY": "Vale na Califórnia (perto de San Francisco). Centro global da tecnologia desde os anos 1970.",
          "BIG TECHS": "Cinco gigantes de tecnologia: Apple, Microsoft, Alphabet (Google), Amazon, Meta. Valor combinado > US$ 10 trilhões.",
        },
        fotoUrl: silicon },
      { id: "p3",
        texto: "HOLLYWOOD exporta filmes para 190 países. É o SOFT POWER americano — poder cultural que influencia gostos e valores globais.",
        chaves: ["HOLLYWOOD", "SOFT POWER"],
        definicoes: {
          "HOLLYWOOD": "Bairro de Los Angeles onde ficam os grandes estúdios: Disney, Warner, Universal, Paramount, Sony.",
          "SOFT POWER": "Poder de influenciar por CULTURA (cinema, música, redes) em vez de força militar. Termo criado por Joseph Nye.",
        },
        fotoUrl: hollywood },
      { id: "p4",
        texto: "O CANADÁ é o 2º maior país do mundo (9,98 mi km²) mas tem só 40 milhões de habitantes. 90% vivem próximos à fronteira com os EUA.",
        chaves: ["CANADÁ"],
        definicoes: {
          "CANADÁ": "País da América do Norte. Capital Ottawa. Maiores cidades: Toronto e Montreal. Oficialmente bilíngue (inglês/francês).",
        },
        fotoUrl: toronto },
    ],
    falaFinal: "Bora pro quiz.",
  },

  cena09_minijogo: (() => {
    const cards = [
      { id: "ws", emoji: "", titulo: "Wall Street", cor: "from-slate-800 to-slate-900" },
      { id: "sv", emoji: "", titulo: "Silicon Valley", cor: "from-slate-800 to-slate-900" },
      { id: "hw", emoji: "", titulo: "Hollywood", cor: "from-slate-800 to-slate-900" },
      { id: "sp", emoji: "", titulo: "Soft Power", cor: "from-slate-800 to-slate-900" },
      { id: "ca", emoji: "", titulo: "Canadá", cor: "from-slate-800 to-slate-900" },
      { id: "bt", emoji: "", titulo: "Big Techs", cor: "from-slate-800 to-slate-900" },
    ];
    return {
      tipo: "quizRadar" as const,
      aurora: "Quiz rápido.",
      instrucao: "Escolha o conceito correto",
      perguntas: [
        { id: "r1", pergunta: "Rua em Nova York onde fica a maior bolsa de valores do mundo.", cards, correta: "ws",
          feedbackAcerto: "Isso. WALL STREET.", feedbackErro: "É WALL STREET, onde fica a NYSE." },
        { id: "r2", pergunta: "Região da Califórnia com Apple, Google, Meta e Tesla.", cards, correta: "sv",
          feedbackAcerto: "Isso. SILICON VALLEY.", feedbackErro: "É SILICON VALLEY. Região perto de San Francisco." },
        { id: "r3", pergunta: "Bairro de Los Angeles com Disney, Warner e Universal.", cards, correta: "hw",
          feedbackAcerto: "Isso. HOLLYWOOD.", feedbackErro: "É HOLLYWOOD. Cinema em LA." },
        { id: "r4", pergunta: "Poder de influenciar o mundo pela CULTURA (filmes, música) em vez de força militar.", cards, correta: "sp",
          feedbackAcerto: "Isso. SOFT POWER.", feedbackErro: "É SOFT POWER. Termo de Joseph Nye." },
        { id: "r5", pergunta: "2º maior país do mundo em área, com 40 mi de habitantes concentrados perto da fronteira sul.", cards, correta: "ca",
          feedbackAcerto: "Isso. CANADÁ.", feedbackErro: "É o CANADÁ. Só a Rússia é maior em área." },
        { id: "r6", pergunta: "5 gigantes de tecnologia (Apple, Microsoft, Google, Amazon, Meta) que valem mais que US$ 10 trilhões.", cards, correta: "bt",
          feedbackAcerto: "Isso. BIG TECHS.", feedbackErro: "São as BIG TECHS. As 5 maiores empresas de tecnologia do mundo." },
      ],
      falaFinal: "6 acertos = analista de potência.",
    };
  })(),

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza do PIB da América Anglo-Saxônica.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "eua", rotulo: "EUA (~93%)", emoji: "🇺🇸", percentual: 93, cor: "#0284c7",
        descricao: "Cerca de US$ 27 trilhões de PIB. Maior economia do planeta. 340 milhões de habitantes.",
        exemplos: ["🗽 Nova York", "💻 Silicon Valley", "🎬 Hollywood"] },
      { id: "ca", rotulo: "Canadá (~7%)", emoji: "🇨🇦", percentual: 7, cor: "#dc2626",
        descricao: "Cerca de US$ 2 trilhões de PIB. Rico em petróleo, minério e trigo. Só 40 milhões de habitantes.",
        exemplos: ["🏙️ Toronto", "🍁 Montreal"] },
    ],
    falaFinal: "EUA são o gigante; Canadá é rico mas pequeno em população. Juntos dominam a América do Norte.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Wall Street fica em:",
        opcoes: [
          { id: "a", texto: "Los Angeles", correta: false },
          { id: "b", texto: "Nova York", correta: true },
          { id: "c", texto: "Washington", correta: false },
        ],
        feedbackAcerto: "Isso! NOVA YORK.",
        feedbackErro: "Wall Street fica em NOVA YORK (Manhattan)." },
      { id: "av2", pergunta: "Silicon Valley fica em:",
        opcoes: [
          { id: "a", texto: "Nova York", correta: false },
          { id: "b", texto: "Califórnia", correta: true },
          { id: "c", texto: "Texas", correta: false },
        ],
        feedbackAcerto: "Isso! CALIFÓRNIA (perto de San Francisco).",
        feedbackErro: "É na CALIFÓRNIA. Perto de San Francisco/San Jose." },
      { id: "av3", pergunta: "Segundo maior país do mundo em área:",
        opcoes: [
          { id: "a", texto: "China", correta: false },
          { id: "b", texto: "Canadá (9,98 mi km²)", correta: true },
          { id: "c", texto: "Brasil", correta: false },
        ],
        feedbackAcerto: "Isso! CANADÁ (só a Rússia é maior).",
        feedbackErro: "É o CANADÁ. Ranking: Rússia > CANADÁ > China > EUA > Brasil." },
    ],
    selo: { nome: "Analista da Potência", subtitulo: "Insígnia do Explorador do Mundo", emoji: "🗽", cor: "from-red-800 to-slate-950" },
    falaFinal: "Insígnia conquistada! Você entende como os EUA dominam o mundo.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Analista da Potência" },
};
