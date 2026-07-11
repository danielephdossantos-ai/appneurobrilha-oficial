import type { AulaGeoV1 } from "../../types";
import petroleo from "@/assets/geografia-9ano/petroleo-golfo.jpg";
import jerusalem from "@/assets/geografia-9ano/jerusalem-cidade.jpg";
import refugiados from "@/assets/geografia-9ano/refugiados-oriente.jpg";
import mecca from "@/assets/geografia-9ano/mecca-peregrinacao.jpg";

/**
 * Geografia · 9º Ano · Unidade 4 · Aula 01
 * "Oriente Médio e Conflitos" — BNCC EF09GE07, EF09GE12
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-oriente-medio",
  titulo: "Oriente Médio: Petróleo, Religião e Conflitos",
  iconeTrilha: "🕌",
  bncc: ["EF09GE07", "EF09GE12"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: petroleo,
    imagemDestaqueUrl: petroleo,
    aurora:
      "O ORIENTE MÉDIO tem só 5% da população mundial, mas concentra 50% das reservas de PETRÓLEO do planeta. Ali nasceram 3 RELIGIÕES monoteístas: JUDAÍSMO, CRISTIANISMO e ISLAMISMO — todas com raiz em JERUSALÉM. E dali saem os principais CONFLITOS geopolíticos: Israel × Palestina (desde 1948), Guerra do Golfo, guerra na Síria (12 milhões de refugiados). Petróleo + religião + geopolítica = a região mais estratégica do mundo.",
    falaFinal: "5% da população, 50% do petróleo, 3 religiões. O epicentro do planeta.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Chuta antes: qual é a religião com MAIS fiéis no Oriente Médio?",
    pergunta: "Qual religião predomina no Oriente Médio?",
    opcoes: [
      { id: "cri", titulo: "Cristianismo", subtitulo: "só 5% da região", emoji: "✝️", cor: "from-blue-800 to-slate-950" },
      { id: "isl", titulo: "Islamismo", subtitulo: "cerca de 90% da região", emoji: "☪️", cor: "from-emerald-800 to-slate-950" },
    ],
    respostaCerta: "isl",
    feedbackAcerto:
      "Exato! O ISLAMISMO é a religião de cerca de 90% dos 500 milhões de habitantes do Oriente Médio. Cristãos são 5%; judeus, 1,5% (concentrados em Israel).",
    feedbackErro:
      "Não. O Cristianismo nasceu ali, mas hoje é minoria (5%). O ISLAMISMO é dominante — cerca de 90% dos habitantes.",
    falaFinal: "Islamismo = 90% da região. E o mundo islâmico tem 1,8 bilhão de fiéis globalmente.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos-chave do Oriente Médio. Explicação + exemplo real + curiosidade.",
    instrucao: "",
    cadernos: [
      {
        id: "pet",
        capa: "1. Petróleo",
        emoji: "🛢️",
        cor: "from-slate-700 to-slate-950",
        conteudo:
          "PETRÓLEO é a matéria-prima mais importante do mundo — dele saem gasolina, plástico, remédios, asfalto. O Oriente Médio concentra 50% das reservas mundiais. Arábia Saudita, Irã, Iraque, Kuwait e Emirados Árabes são as maiores potências petrolíferas.",
        exemplo:
          "Curiosidade: em 1960, os países árabes criaram a OPEP (Organização dos Países Exportadores de Petróleo) pra controlar preços. Em 1973, cortaram vendas e o preço do barril subiu 400% em 6 meses — foi a 1ª Crise do Petróleo. O mundo entrou em recessão.",
        fotoUrl: petroleo,
      },
      {
        id: "3rel",
        capa: "2. Três Religiões",
        emoji: "🕌",
        cor: "from-amber-800 to-slate-950",
        conteudo:
          "JUDAÍSMO (nascido em Israel, 1800 aC), CRISTIANISMO (Israel, séc. I) e ISLAMISMO (Arábia, séc. VII) são as 3 religiões MONOTEÍSTAS (um só Deus). Compartilham Abraão como profeta e disputam Jerusalém — cidade sagrada pras 3.",
        exemplo:
          "Curiosidade: em Jerusalém, você anda 500 metros e passa pelo Muro das Lamentações (judaísmo), pela Igreja do Santo Sepulcro (cristianismo) e pela Mesquita al-Aqsa (islamismo). Todas em cima da mesma colina — a razão do conflito milenar.",
        fotoUrl: jerusalem,
      },
      {
        id: "isr",
        capa: "3. Israel × Palestina",
        emoji: "🇮🇱",
        cor: "from-blue-800 to-slate-950",
        conteudo:
          "ISRAEL foi criado em 1948 pela ONU depois do HOLOCAUSTO nazista. Judeus receberam um estado onde já viviam árabes (palestinos). Desde então, guerras (1948, 1967, 1973) e conflitos contínuos. 5 milhões de palestinos vivem em territórios ocupados (Cisjordânia e Gaza).",
        exemplo:
          "Curiosidade: em 1948, quando Israel foi criado, 700 mil palestinos foram expulsos ou fugiram — evento chamado NAKBA ('catástrofe' em árabe). Hoje, seus descendentes são 5,9 milhões — a maior população de refugiados do mundo, décadas depois.",
        fotoUrl: jerusalem,
      },
      {
        id: "ref",
        capa: "4. Refugiados",
        emoji: "🏕️",
        cor: "from-orange-800 to-slate-950",
        conteudo:
          "REFUGIADOS são pessoas que fugiram do próprio país por guerra ou perseguição. O Oriente Médio gera mais refugiados que qualquer região: 6 milhões vieram da SÍRIA (guerra desde 2011), 3 milhões do IRAQUE, 6 milhões do AFEGANISTÃO. Vão pra Turquia, Líbano, Europa.",
        exemplo:
          "Curiosidade: 1 em cada 4 habitantes do LÍBANO é refugiado sírio. Se o mesmo acontecesse no Brasil, seriam 55 milhões de refugiados chegando de uma vez. A Turquia recebeu 3,7 milhões — nenhum país recebe tanto.",
        fotoUrl: refugiados,
      },
    ],
    falaFinal: "Petróleo, 3 religiões, Israel-Palestina, refugiados. 4 palavras = Oriente Médio.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 cenas do Oriente Médio. Toque em cada card pra ver a imagem e ouvir.",
    instrucao: "Toque nos 4 cards",
    mapaUrl: jerusalem,
    pontos: [
      { id: "gol", x: 20, y: 30, emoji: "🛢️", cor: "from-slate-700 to-slate-950",
        titulo: "Golfo Pérsico — coração petroleiro",
        texto: "Saudi Arabia, Irã, Iraque, Kuwait, Emirados. 50% do petróleo mundial. Estreito de Ormuz: 20% do petróleo do mundo passa por ali por dia.",
        fotoUrl: petroleo },
      { id: "jer", x: 55, y: 40, emoji: "🕌", cor: "from-amber-800 to-slate-950",
        titulo: "Jerusalém — 3 religiões",
        texto: "Cidade sagrada para judeus, cristãos e muçulmanos. Muro das Lamentações + Santo Sepulcro + Al-Aqsa. 500m de diâmetro do conflito milenar.",
        fotoUrl: jerusalem },
      { id: "sir", x: 30, y: 65, emoji: "🏕️", cor: "from-orange-800 to-slate-950",
        titulo: "Síria — refugiados",
        texto: "Guerra civil desde 2011. Meio milhão de mortos. 6 milhões de refugiados fora do país. Cidades como Aleppo destruídas.",
        fotoUrl: refugiados },
      { id: "mec", x: 70, y: 75, emoji: "🕋", cor: "from-emerald-800 to-slate-950",
        titulo: "Meca — coração do Islã",
        texto: "Cidade mais sagrada do Islã. Todo muçulmano com condições deve visitar 1 vez na vida (Hajj). 2,5 milhões de peregrinos por ano.",
        fotoUrl: mecca },
    ],
    falaFinal: "Golfo, Jerusalém, Síria, Meca. 4 pontos que explicam o Oriente Médio.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "4 perguntas de geopolítico pra fixar.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Quanto por cento das reservas mundiais de petróleo estão no Oriente Médio?",
        fotoUrl: petroleo,
        cards: [
          { id: "a", emoji: "🛢️", titulo: "Cerca de 50%", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "💧", titulo: "Só 5%", cor: "from-slate-700 to-slate-950" },
          { id: "c", emoji: "🌍", titulo: "Cerca de 90%", cor: "from-red-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. 50% do petróleo mundial está ali. É por isso que a região é estratégica.",
        feedbackErro: "São 50%. Bem mais que os 5% da população que vive ali." },
      { id: "q2", pergunta: "Quantas religiões monoteístas nasceram na região de Jerusalém?",
        fotoUrl: jerusalem,
        cards: [
          { id: "a", emoji: "🕌", titulo: "3 (judaísmo, cristianismo, islamismo)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "☯️", titulo: "1 (só islamismo)", cor: "from-slate-700 to-slate-950" },
          { id: "c", emoji: "🕉️", titulo: "10 religiões", cor: "from-red-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. As 3 monoteístas: judaísmo, cristianismo, islamismo.",
        feedbackErro: "São 3. Todas compartilham Abraão e disputam Jerusalém." },
      { id: "q3", pergunta: "Israel foi criado em:",
        fotoUrl: jerusalem,
        cards: [
          { id: "a", emoji: "🇮🇱", titulo: "1948 (após Holocausto)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "📅", titulo: "1800", cor: "from-slate-700 to-slate-950" },
          { id: "c", emoji: "🏛️", titulo: "Existiu sempre", cor: "from-red-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. Fundado em 14/05/1948 pela ONU.",
        feedbackErro: "Foi em 1948, após a 2ª Guerra Mundial e o Holocausto." },
      { id: "q4", pergunta: "Qual país abriga MAIS refugiados sírios?",
        fotoUrl: refugiados,
        cards: [
          { id: "a", emoji: "🇹🇷", titulo: "Turquia (3,7 milhões)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🇺🇸", titulo: "Estados Unidos", cor: "from-slate-700 to-slate-950" },
          { id: "c", emoji: "🇧🇷", titulo: "Brasil", cor: "from-red-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. Turquia recebeu 3,7 milhões — mais que qualquer outro país.",
        feedbackErro: "É a TURQUIA (3,7 mi). EUA recebeu poucos milhares. Brasil, menos ainda." },
    ],
    falaFinal: "4 acertos = geopolítico iniciante.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "A colônia LIBANESA no Brasil (10 milhões de descendentes — mais que a população do próprio Líbano) se concentra em 3 estados: SP, MG e RJ. Acenda os 3.",
    instrucao: "Acenda SP, MG e RJ",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "MG", "RJ"],
      pergunta: "Onde vivem mais descendentes de árabes/libaneses no Brasil?",
    },
    falaFinal: "SP, MG e RJ. Brasil tem 10 mi de libaneses — mais que o próprio Líbano (5 mi).",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize os 5 marcos do Oriente Médio moderno em ordem cronológica.",
    instrucao: "Toque na ordem",
    pergunta: "Do mais antigo ao mais recente:",
    paradas: [
      { id: "1948", emoji: "🇮🇱", rotulo: "1. Criação de Israel (1948)",
        descricao: "ONU divide a Palestina. Judeus criam estado. 700 mil palestinos são expulsos (Nakba).", fotoUrl: jerusalem },
      { id: "1973", emoji: "🛢️", rotulo: "2. Crise do Petróleo (1973)",
        descricao: "Guerra do Yom Kippur. OPEP corta vendas. Preço do barril +400%.", fotoUrl: petroleo },
      { id: "1991", emoji: "💣", rotulo: "3. Guerra do Golfo (1991)",
        descricao: "Saddam Hussein invade o Kuwait. EUA + coalizão respondem." },
      { id: "2003", emoji: "🇮🇶", rotulo: "4. Invasão do Iraque (2003)",
        descricao: "EUA invadem sob pretexto de armas químicas (que não existiam). Derrubam Saddam." },
      { id: "2011", emoji: "🏕️", rotulo: "5. Guerra da Síria (2011–)",
        descricao: "Primavera Árabe vira guerra civil. 500 mil mortos, 12 milhões deslocados.", fotoUrl: refugiados },
    ],
    ordemCerta: ["1948", "1973", "1991", "2003", "2011"],
    feedbackAcerto: "Perfeito! 76 anos de Oriente Médio em 5 marcos.",
    feedbackErro: "Israel (1948), Crise (1973), Golfo (1991), Iraque (2003), Síria (2011).",
    falaFinal: "5 marcos contam 76 anos de conflitos ininterruptos.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com calma. Termos-chave destacados — toque em qualquer um pra ver a definição.",
    tituloLivro: "📘 Manual do Explorador do Planeta",
    subtitulo: "Capítulo 4 — Oriente Médio",
    paragrafos: [
      { id: "p1",
        texto: "O Oriente Médio tem só 5% da população mundial, mas concentra 50% do PETRÓLEO. Arábia Saudita, Irã, Iraque, Kuwait e Emirados formam a OPEP — controlam preços globais.",
        chaves: ["PETRÓLEO", "OPEP"],
        definicoes: {
          "PETRÓLEO": "Combustível fóssil essencial. Base de gasolina, plástico, asfalto, remédios. 50% das reservas mundiais estão no Oriente Médio.",
          "OPEP": "Organização dos Países Exportadores de Petróleo. Fundada em 1960 por Arábia Saudita, Irã, Iraque, Kuwait e Venezuela.",
        },
        fotoUrl: petroleo },
      { id: "p2",
        texto: "3 religiões monoteístas nasceram ali: JUDAÍSMO, CRISTIANISMO e ISLAMISMO. Todas disputam JERUSALÉM — cidade sagrada com Muro das Lamentações, Santo Sepulcro e Mesquita al-Aqsa.",
        chaves: ["MONOTEÍSTAS", "JERUSALÉM"],
        definicoes: {
          "MONOTEÍSTAS": "Religiões que acreditam em um só Deus. Judaísmo (1800 aC), Cristianismo (séc. I), Islamismo (séc. VII).",
          "JERUSALÉM": "Cidade sagrada para as 3 religiões monoteístas. Coração do conflito Israel × Palestina. Capital reivindicada pelos 2 povos.",
        },
        fotoUrl: jerusalem },
      { id: "p3",
        texto: "ISRAEL foi criado em 1948 pela ONU. 700 mil PALESTINOS foram expulsos (Nakba). Desde então, guerras contínuas. Hoje, 5 milhões de palestinos vivem em territórios ocupados.",
        chaves: ["ISRAEL", "PALESTINOS"],
        definicoes: {
          "ISRAEL": "Estado judaico criado em 1948 pela ONU após o Holocausto. Capital: Jerusalém (reconhecida só por EUA e alguns países).",
          "PALESTINOS": "Povo árabe que vivia na Palestina antes de 1948. Hoje: 5 mi em Cisjordânia e Gaza + 5,9 mi de refugiados espalhados.",
        },
        fotoUrl: jerusalem },
      { id: "p4",
        texto: "A GUERRA CIVIL SÍRIA (desde 2011) gerou 6 milhões de REFUGIADOS. 1 em cada 4 libaneses hoje é refugiado sírio. Turquia recebeu 3,7 milhões.",
        chaves: ["GUERRA CIVIL SÍRIA", "REFUGIADOS"],
        definicoes: {
          "GUERRA CIVIL SÍRIA": "Conflito iniciado em 2011 durante a Primavera Árabe. 500 mil mortos, cidades como Aleppo destruídas.",
          "REFUGIADOS": "Pessoas que fugiram do próprio país por guerra. Oriente Médio gera mais refugiados que qualquer outra região.",
        },
        fotoUrl: refugiados },
    ],
    falaFinal: "Leu tudo? Bora pro quiz final antes da insígnia.",
  },

  cena09_minijogo: (() => {
    const cards = [
      { id: "pet", emoji: "", titulo: "Petróleo", cor: "from-slate-800 to-slate-900" },
      { id: "opep", emoji: "", titulo: "OPEP", cor: "from-slate-800 to-slate-900" },
      { id: "isr", emoji: "", titulo: "Israel", cor: "from-slate-800 to-slate-900" },
      { id: "pal", emoji: "", titulo: "Palestinos", cor: "from-slate-800 to-slate-900" },
      { id: "sir", emoji: "", titulo: "Síria", cor: "from-slate-800 to-slate-900" },
      { id: "meca", emoji: "", titulo: "Meca", cor: "from-slate-800 to-slate-900" },
    ];
    return {
      tipo: "quizRadar" as const,
      aurora: "Quiz rápido: pra cada descrição, escolha o conceito do Oriente Médio.",
      instrucao: "Escolha o correto",
      perguntas: [
        { id: "r1", pergunta: "Recurso natural que a região concentra em 50% das reservas mundiais.", cards, correta: "pet",
          feedbackAcerto: "Isso. 50% das reservas = PETRÓLEO.", feedbackErro: "É o PETRÓLEO. Base da geopolítica da região há 100 anos." },
        { id: "r2", pergunta: "Organização que reúne os principais países exportadores de petróleo desde 1960.", cards, correta: "opep",
          feedbackAcerto: "Isso. Cartel do petróleo = OPEP.", feedbackErro: "É a OPEP. Fundada por Arábia Saudita, Irã, Iraque, Kuwait, Venezuela." },
        { id: "r3", pergunta: "Estado criado em 1948 para o povo judeu após o Holocausto.", cards, correta: "isr",
          feedbackAcerto: "Isso. 1948 + judeus = ISRAEL.", feedbackErro: "É ISRAEL. Fundado em 14/05/1948 pela ONU." },
        { id: "r4", pergunta: "Povo árabe expulso em 1948; hoje vive em Cisjordânia, Gaza e como refugiados.", cards, correta: "pal",
          feedbackAcerto: "Isso. Expulsos em 1948 = PALESTINOS.", feedbackErro: "São os PALESTINOS. 5,9 milhões vivem como refugiados." },
        { id: "r5", pergunta: "País em guerra civil desde 2011, gerou 6 milhões de refugiados.", cards, correta: "sir",
          feedbackAcerto: "Isso. Guerra civil desde 2011 = SÍRIA.", feedbackErro: "É a SÍRIA. Aleppo, Damasco, Homs — cidades devastadas." },
        { id: "r6", pergunta: "Cidade mais sagrada do Islã; 2,5 milhões de peregrinos por ano fazem o Hajj.", cards, correta: "meca",
          feedbackAcerto: "Isso. Hajj + Kaaba = MECA.", feedbackErro: "É MECA, na Arábia Saudita. Todo muçulmano deve visitar 1 vez na vida." },
      ],
      falaFinal: "6 perguntas, 6 conceitos. Geopolítico formado.",
    };
  })(),

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza dos refugiados sírios (2024): onde vivem os 6 milhões que saíram do país.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "vi", rotulo: "Vizinhos árabes (~80%)", emoji: "🕌", percentual: 80, cor: "#ea580c",
        descricao: "Turquia (3,7 mi), Líbano (1,5 mi), Jordânia (700 mil). Vizinhos absorveram a maior parte.",
        exemplos: ["🇹🇷 Turquia (3,7 mi)", "🇱🇧 Líbano (1,5 mi)", "🇯🇴 Jordânia (700 mil)"] },
      { id: "eu", rotulo: "Europa e resto do mundo (~20%)", emoji: "🌍", percentual: 20, cor: "#64748b",
        descricao: "Alemanha (700 mil), Suécia, Canadá, Brasil. Uma fração menor foi mais longe.",
        exemplos: ["🇩🇪 Alemanha (700 mil)", "🇸🇪 Suécia", "🇨🇦 Canadá"] },
    ],
    falaFinal: "80% dos refugiados sírios ficaram na vizinhança. Poucos chegaram longe.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Geopolítico.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "O Oriente Médio concentra quantos por cento das reservas mundiais de petróleo?",
        opcoes: [
          { id: "a", texto: "Cerca de 50%", correta: true },
          { id: "b", texto: "Só 5%", correta: false },
          { id: "c", texto: "Cerca de 90%", correta: false },
        ],
        feedbackAcerto: "Isso! 50%. É por isso que a região é estratégica.",
        feedbackErro: "São 50%. Bem mais que os 5% da população que vive lá." },
      { id: "av2", pergunta: "Quantas religiões monoteístas disputam Jerusalém?",
        opcoes: [
          { id: "a", texto: "3 (judaísmo, cristianismo, islamismo)", correta: true },
          { id: "b", texto: "1", correta: false },
          { id: "c", texto: "10", correta: false },
        ],
        feedbackAcerto: "Isso! As 3 monoteístas.",
        feedbackErro: "São 3. Todas com raiz em Abraão e Jerusalém." },
      { id: "av3", pergunta: "Israel foi criado em:",
        opcoes: [
          { id: "a", texto: "1948", correta: true },
          { id: "b", texto: "1800", correta: false },
          { id: "c", texto: "Sempre existiu", correta: false },
        ],
        feedbackAcerto: "Isso! 14/05/1948, pela ONU.",
        feedbackErro: "Foi em 1948, depois do Holocausto e da 2ª Guerra Mundial." },
    ],
    selo: { nome: "Geopolítico", subtitulo: "Insígnia do Explorador do Planeta", emoji: "🕌", cor: "from-orange-800 to-slate-950" },
    falaFinal: "Insígnia conquistada! Você entende o coração conflituoso do mundo.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Geopolítico" },
};
