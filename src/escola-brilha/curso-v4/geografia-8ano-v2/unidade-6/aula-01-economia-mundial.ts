import type { AulaGeoV1 } from "../../types";
import { url as bolsa } from "@/assets/geografia-8ano/bolsa-valores.jpg.asset.json";
import { url as china } from "@/assets/geografia-8ano/china-fabrica.jpg.asset.json";
import { url as ue } from "@/assets/geografia-8ano/uniao-europeia.jpg.asset.json";
import { url as brics } from "@/assets/geografia-8ano/brics-cupula.jpg.asset.json";
/**
 * Geografia · 8º Ano · Unidade 6 · Aula 01
 * "Economia Mundial e Blocos" — BNCC EF08GE12, EF08GE18
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-economia-mundial",
  titulo: "Economia Mundial e Blocos",
  iconeTrilha: "💹",
  bncc: ["EF08GE12", "EF08GE18"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: bolsa,
    imagemDestaqueUrl: bolsa,
    aurora:
      "O mundo virou uma GRANDE FÁBRICA + GRANDE BOLSA de valores integradas. A GLOBALIZAÇÃO uniu tudo: o iPhone é projetado nos EUA, tem chip da Coreia, tela do Japão, montado na CHINA, vendido no Brasil. As economias se organizam em BLOCOS: UNIÃO EUROPEIA (27 países, moeda única — o euro), MERCOSUL, USMCA, e novas potências emergentes se juntaram no BRICS (Brasil, Rússia, Índia, China, África do Sul + expansão em 2024). A China virou 'fábrica do mundo' — produz de camiseta a foguete.",
    falaFinal: "Fábricas, bolsas e blocos. Um planeta economicamente integrado.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Chuta antes: qual país é hoje o MAIOR EXPORTADOR de mercadorias do planeta?",
    pergunta: "Quem exporta mais no mundo?",
    opcoes: [
      { id: "ch", titulo: "CHINA", subtitulo: "US$ 3,4 tri/ano", emoji: "🇨🇳", cor: "from-red-800 to-slate-950" },
      { id: "eua", titulo: "ESTADOS UNIDOS", subtitulo: "US$ 2,0 tri/ano", emoji: "🇺🇸", cor: "from-sky-800 to-slate-950" },
    ],
    respostaCerta: "ch",
    feedbackAcerto:
      "Isso! A CHINA lidera com ~US$ 3,4 trilhões em exportações — 70% MAIS que os EUA (US$ 2 tri). É a 'fábrica do mundo' desde 2009.",
    feedbackErro:
      "É a CHINA — US$ 3,4 tri em exportações. Os EUA vêm em 2º com US$ 2 tri. A China ultrapassou em 2009.",
    falaFinal: "China é a fábrica do mundo. EUA são o maior consumidor.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos-chave da economia globalizada.",
    instrucao: "",
    cadernos: [
      {
        id: "glob",
        capa: "1. Globalização",
        emoji: "🌐",
        cor: "from-sky-800 to-slate-950",
        conteudo:
          "GLOBALIZAÇÃO é a integração econômica, cultural e tecnológica dos países no mundo. Encurta distâncias: um vídeo do TikTok chinês viraliza no Brasil em segundos; uma queda em Wall Street derruba a bolsa em Tóquio na mesma noite.",
        exemplo:
          "Curiosidade: o iPhone é o exemplo perfeito. Projetado na Califórnia, chip da Coreia (Samsung), tela do Japão (Sharp), bateria da China, montagem final em Zhengzhou (China) por 300 mil operários da Foxconn. Um único produto = economia global.",
        fotoUrl: bolsa,
      },
      {
        id: "ch",
        capa: "2. Fábrica do mundo (China)",
        emoji: "🏭",
        cor: "from-red-800 to-slate-950",
        conteudo:
          "CHINA virou a 'FÁBRICA DO MUNDO' desde os anos 2000. Produz 30% de tudo que se fabrica no planeta: eletrônicos, roupas, brinquedos, aço, painéis solares. Tem 1,4 bilhão de habitantes e o 2º maior PIB do mundo (US$ 17 tri).",
        exemplo:
          "Curiosidade: em Shenzhen, uma cidade de 17 milhões (crescida do nada em 40 anos), estão as fábricas da Foxconn (iPhone), DJI (drones), Huawei (celulares) e Tencent (WeChat). É a Silicon Valley chinesa — mais barata e mais rápida.",
        fotoUrl: china,
      },
      {
        id: "ue",
        capa: "3. União Europeia",
        emoji: "🇪🇺",
        cor: "from-sky-800 to-slate-950",
        conteudo:
          "UNIÃO EUROPEIA (UE) é o BLOCO ECONÔMICO mais integrado do mundo — 27 países, 450 milhões de habitantes, uma MOEDA ÚNICA (o EURO, usado por 20 países). Livre circulação de pessoas, mercadorias, dinheiro e serviços.",
        exemplo:
          "Curiosidade: um alemão pode se mudar pra Portugal, trabalhar, estudar, se aposentar — SEM VISTO nem burocracia. É como se todo o continente fosse um único país econômico. Fundada em 1957 (Tratado de Roma) com 6 países; hoje são 27.",
        fotoUrl: ue,
      },
      {
        id: "brics",
        capa: "4. BRICS",
        emoji: "🌍",
        cor: "from-emerald-800 to-slate-950",
        conteudo:
          "BRICS é o bloco das ECONOMIAS EMERGENTES: BRASIL, RÚSSIA, ÍNDIA, CHINA, ÁFRICA DO SUL. Em 2024 se expandiu incluindo Egito, Etiópia, Irã, EAU. Representam 45% da população mundial e desafiam o domínio econômico do Ocidente.",
        exemplo:
          "Curiosidade: o BRICS criou o NEW DEVELOPMENT BANK (NDB) em Xangai — banco alternativo ao FMI e Banco Mundial (dominados pelos EUA). Dilma Rousseff foi presidente do NDB entre 2023 e 2025. É um contraponto ao poder americano.",
        fotoUrl: brics,
      },
    ],
    falaFinal: "Globalização + China + UE + BRICS. 4 pilares da economia atual.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 forças da economia global.",
    instrucao: "Toque nos 4 cards",
    mapaUrl: bolsa,
    pontos: [
      { id: "ws", x: 25, y: 30, emoji: "💵", cor: "from-emerald-800 to-slate-950",
        titulo: "💵 Wall Street (financeiro)",
        texto: "Bolsa de Nova York. Move US$ 25 tri por ano. Símbolo do capitalismo financeiro global.",
        fotoUrl: bolsa },
      { id: "ch", x: 75, y: 40, emoji: "🏭", cor: "from-red-800 to-slate-950",
        titulo: "🏭 China (produção)",
        texto: "Fábrica do mundo. 30% da produção industrial global. Shenzhen, Xangai, Guangzhou.",
        fotoUrl: china },
      { id: "ue", x: 50, y: 25, emoji: "🇪🇺", cor: "from-sky-800 to-slate-950",
        titulo: "🇪🇺 União Europeia (bloco)",
        texto: "27 países, 450 mi de habitantes, uma moeda (euro). Bloco mais integrado do planeta.",
        fotoUrl: ue },
      { id: "br", x: 40, y: 70, emoji: "🌍", cor: "from-emerald-800 to-slate-950",
        titulo: "🌍 BRICS (emergentes)",
        texto: "Brasil, Rússia, Índia, China, África do Sul + 4 novos em 2024. 45% da população mundial.",
        fotoUrl: brics },
    ],
    falaFinal: "Wall Street, China, UE, BRICS. 4 polos do capitalismo global.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "4 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "GLOBALIZAÇÃO é:",
        fotoUrl: bolsa,
        cards: [
          { id: "a", emoji: "🌐", titulo: "Integração econômica, cultural e tecnológica mundial", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🚫", titulo: "Fechamento de fronteiras", cor: "from-red-800 to-slate-950" },
          { id: "c", emoji: "⚔️", titulo: "Guerra entre países", cor: "from-amber-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. INTEGRAÇÃO econômica, cultural e tecnológica.",
        feedbackErro: "É INTEGRAÇÃO — o oposto de fechamento e de guerra. Encurta distâncias." },
      { id: "q2", pergunta: "Por que a China é chamada 'fábrica do mundo'?",
        fotoUrl: china,
        cards: [
          { id: "a", emoji: "🏭", titulo: "Produz 30% de tudo que se fabrica no planeta", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🍜", titulo: "Faz a melhor comida do mundo", cor: "from-amber-800 to-slate-950" },
          { id: "c", emoji: "📚", titulo: "Tem as melhores escolas", cor: "from-sky-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. 30% da produção industrial global vem da China.",
        feedbackErro: "É por PRODUÇÃO — 30% de tudo que se fabrica no mundo vem da China." },
      { id: "q3", pergunta: "A moeda única da União Europeia é:",
        fotoUrl: ue,
        cards: [
          { id: "a", emoji: "💶", titulo: "Euro (usado por 20 países)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "💵", titulo: "Dólar", cor: "from-sky-800 to-slate-950" },
          { id: "c", emoji: "💴", titulo: "Iene", cor: "from-red-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. EURO — usado por 20 dos 27 países da UE.",
        feedbackErro: "É o EURO. Dólar é dos EUA, iene do Japão. Euro = 20 países da UE." },
      { id: "q4", pergunta: "Membros originais do BRICS:",
        fotoUrl: brics,
        cards: [
          { id: "a", emoji: "🌍", titulo: "Brasil, Rússia, Índia, China, África do Sul", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🇺🇸", titulo: "EUA, Reino Unido, França, Japão", cor: "from-red-800 to-slate-950" },
          { id: "c", emoji: "🇩🇪", titulo: "Alemanha, Itália, Portugal, Espanha", cor: "from-amber-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. BRICS = Brasil + Rússia + Índia + China + África do Sul.",
        feedbackErro: "BRICS = as iniciais dos 5 emergentes: BRASIL + RÚSSIA + ÍNDIA + CHINA + ÁFRICA DO SUL." },
    ],
    falaFinal: "4 acertos = economista global.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "O Brasil é a maior economia do BRICS depois da China. Os 3 estados que mais exportam para o mundo são SP (indústria), MG (minério) e RS (soja). Acenda esses 3.",
    instrucao: "Acenda SP, MG e RS",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "MG", "RS"],
      pergunta: "Quais estados exportam mais para o mundo?",
    },
    falaFinal: "São Paulo, Minas Gerais e Rio Grande do Sul. Os 3 motores da exportação brasileira.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene 5 marcos da economia mundial.",
    instrucao: "Toque na ordem",
    pergunta: "Do mais antigo ao mais recente:",
    paradas: [
      { id: "1957", emoji: "🇪🇺", rotulo: "1. Tratado de Roma (1957)",
        descricao: "Nasce a Comunidade Europeia — semente da UE.", fotoUrl: ue },
      { id: "1991", emoji: "🤝", rotulo: "2. Mercosul (1991)",
        descricao: "Brasil, Argentina, Uruguai, Paraguai criam o bloco sul-americano." },
      { id: "1999", emoji: "💶", rotulo: "3. Nasce o Euro (1999)",
        descricao: "Moeda única europeia entra em circulação." },
      { id: "2001", emoji: "🇨🇳", rotulo: "4. China entra na OMC (2001)",
        descricao: "China vira a 'fábrica do mundo'.", fotoUrl: china },
      { id: "2009", emoji: "🌍", rotulo: "5. 1ª Cúpula BRICS (2009)",
        descricao: "Emergentes se organizam para desafiar o Ocidente.", fotoUrl: brics },
    ],
    ordemCerta: ["1957", "1991", "1999", "2001", "2009"],
    feedbackAcerto: "Perfeito! 50 anos de economia global em ordem.",
    feedbackErro: "Comece por 1957 (Roma). Depois Mercosul, Euro, China OMC, BRICS.",
    falaFinal: "5 datas que redesenharam a economia mundial.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com calma. Termos-chave destacados.",
    tituloLivro: "📘 Manual do Explorador do Mundo",
    subtitulo: "Capítulo 6 — Economia Mundial",
    paragrafos: [
      { id: "p1",
        texto: "A GLOBALIZAÇÃO integra as economias do mundo. Um iPhone é projetado nos EUA, tem chip coreano, tela japonesa e é montado na CHINA.",
        chaves: ["GLOBALIZAÇÃO", "CHINA"],
        definicoes: {
          "GLOBALIZAÇÃO": "Integração econômica, cultural e tecnológica entre países. Encurta distâncias.",
          "CHINA": "Fábrica do mundo desde 2000. Produz 30% da produção industrial global. 2º maior PIB.",
        },
        fotoUrl: bolsa },
      { id: "p2",
        texto: "A CHINA se tornou a 'FÁBRICA DO MUNDO' produzindo 30% de tudo que se fabrica no planeta. Sua entrada na OMC em 2001 acelerou essa transformação.",
        chaves: ["FÁBRICA DO MUNDO", "OMC"],
        definicoes: {
          "FÁBRICA DO MUNDO": "Apelido da China. Fabrica de eletrônicos a aço, para todo o planeta. Shenzhen é o polo industrial mais famoso.",
          "OMC": "Organização Mundial do Comércio. Cria regras para o comércio internacional. China entrou em 2001 — divisor de águas.",
        },
        fotoUrl: china },
      { id: "p3",
        texto: "A UNIÃO EUROPEIA (27 países) usa uma MOEDA ÚNICA (o EURO) em 20 países. Livre circulação de pessoas, mercadorias e capital. Nasceu em 1957.",
        chaves: ["UNIÃO EUROPEIA", "MOEDA ÚNICA", "EURO"],
        definicoes: {
          "UNIÃO EUROPEIA": "Bloco econômico e político mais integrado do mundo. 27 países. Sede em Bruxelas.",
          "MOEDA ÚNICA": "Uma só moeda usada por vários países. Elimina custos de câmbio e facilita comércio.",
          "EURO": "Moeda oficial de 20 países da UE. Substituiu marco alemão, franco francês, lira italiana.",
        },
        fotoUrl: ue },
      { id: "p4",
        texto: "O BRICS reúne EMERGENTES: Brasil, Rússia, Índia, China, África do Sul. Em 2024 expandiu com Egito, Etiópia, Irã, EAU. Representa 45% da população mundial.",
        chaves: ["BRICS", "EMERGENTES"],
        definicoes: {
          "BRICS": "Bloco criado em 2009. Iniciais dos 5 fundadores. Sede: New Development Bank (Xangai).",
          "EMERGENTES": "Economias em rápido crescimento que ainda não são potências plenas mas caminham para isso.",
        },
        fotoUrl: brics },
    ],
    falaFinal: "Bora pro quiz.",
  },

  cena09_minijogo: (() => {
    const cards = [
      { id: "glob", emoji: "", titulo: "Globalização", cor: "from-slate-800 to-slate-900" },
      { id: "fab", emoji: "", titulo: "Fábrica do Mundo", cor: "from-slate-800 to-slate-900" },
      { id: "eu", emoji: "", titulo: "União Europeia", cor: "from-slate-800 to-slate-900" },
      { id: "eur", emoji: "", titulo: "Euro", cor: "from-slate-800 to-slate-900" },
      { id: "bri", emoji: "", titulo: "BRICS", cor: "from-slate-800 to-slate-900" },
      { id: "omc", emoji: "", titulo: "OMC", cor: "from-slate-800 to-slate-900" },
    ];
    return {
      tipo: "quizRadar" as const,
      aurora: "Quiz rápido.",
      instrucao: "Escolha o conceito correto",
      perguntas: [
        { id: "r1", pergunta: "Integração econômica, cultural e tecnológica dos países do mundo.", cards, correta: "glob",
          feedbackAcerto: "Isso. GLOBALIZAÇÃO.", feedbackErro: "É a GLOBALIZAÇÃO. Encurta distâncias." },
        { id: "r2", pergunta: "Apelido da China, que produz 30% de tudo que se fabrica no planeta.", cards, correta: "fab",
          feedbackAcerto: "Isso. FÁBRICA DO MUNDO.", feedbackErro: "É a FÁBRICA DO MUNDO. China desde 2001." },
        { id: "r3", pergunta: "Bloco econômico de 27 países europeus fundado pelo Tratado de Roma.", cards, correta: "eu",
          feedbackAcerto: "Isso. UNIÃO EUROPEIA.", feedbackErro: "É a UNIÃO EUROPEIA. Sede em Bruxelas." },
        { id: "r4", pergunta: "Moeda única usada por 20 países da União Europeia.", cards, correta: "eur",
          feedbackAcerto: "Isso. EURO.", feedbackErro: "É o EURO. Substituiu marco, franco, lira." },
        { id: "r5", pergunta: "Bloco de emergentes: Brasil, Rússia, Índia, China, África do Sul.", cards, correta: "bri",
          feedbackAcerto: "Isso. BRICS.", feedbackErro: "É o BRICS. Iniciais dos 5 fundadores." },
        { id: "r6", pergunta: "Organização Mundial do Comércio, cria regras para comércio internacional.", cards, correta: "omc",
          feedbackAcerto: "Isso. OMC.", feedbackErro: "É a OMC. Sede em Genebra (Suíça)." },
      ],
      falaFinal: "6 acertos = economista global.",
    };
  })(),

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza do PIB mundial (2024, ~US$ 105 tri).",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "des", rotulo: "Países desenvolvidos (~57%)", emoji: "🏙️", percentual: 57, cor: "#0284c7",
        descricao: "EUA, UE, Japão, Canadá, Coreia do Sul. 15% da população mundial, mas mais da metade do PIB.",
        exemplos: ["🇺🇸 EUA", "🇪🇺 UE", "🇯🇵 Japão"] },
      { id: "eme", rotulo: "Emergentes e em desenvolvimento (~43%)", emoji: "🌍", percentual: 43, cor: "#059669",
        descricao: "China, Índia, Brasil, Indonésia, Rússia. 85% da população, mas menos da metade do PIB. Cresce rápido.",
        exemplos: ["🇨🇳 China", "🇮🇳 Índia", "🇧🇷 Brasil"] },
    ],
    falaFinal: "Desigualdade global: 15% da população = 57% do PIB. Emergentes fecham a distância aos poucos.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Maior exportador de mercadorias do mundo:",
        opcoes: [
          { id: "a", texto: "EUA", correta: false },
          { id: "b", texto: "China (~US$ 3,4 tri/ano)", correta: true },
          { id: "c", texto: "Brasil", correta: false },
        ],
        feedbackAcerto: "Isso! CHINA — desde 2009.",
        feedbackErro: "É a CHINA (US$ 3,4 tri). EUA em 2º com US$ 2 tri." },
      { id: "av2", pergunta: "Moeda única da União Europeia:",
        opcoes: [
          { id: "a", texto: "Dólar", correta: false },
          { id: "b", texto: "Euro (20 países)", correta: true },
          { id: "c", texto: "Libra", correta: false },
        ],
        feedbackAcerto: "Isso! EURO — 20 dos 27 países da UE.",
        feedbackErro: "É o EURO. Libra é do Reino Unido (que saiu da UE em 2020)." },
      { id: "av3", pergunta: "Membros originais do BRICS:",
        opcoes: [
          { id: "a", texto: "Brasil, Rússia, Índia, China, África do Sul", correta: true },
          { id: "b", texto: "EUA, Reino Unido, França, Alemanha", correta: false },
          { id: "c", texto: "Argentina, Chile, Peru", correta: false },
        ],
        feedbackAcerto: "Isso! Iniciais dos 5 emergentes.",
        feedbackErro: "BRICS = B(rasil) + R(ússia) + I(ndia) + C(hina) + S(outh Africa)." },
    ],
    selo: { nome: "Economista Global", subtitulo: "Insígnia do Explorador do Mundo", emoji: "💹", cor: "from-sky-800 to-slate-950" },
    falaFinal: "Insígnia conquistada! Você entende como o dinheiro se move no mundo.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Economista Global" },
};
