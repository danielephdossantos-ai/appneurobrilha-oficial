import type { AulaGeoV1 } from "../../types";
import onu from "@/assets/geografia-9ano/onu-assembleia.jpg";
import otan from "@/assets/geografia-9ano/otan-cupula.jpg";
import brics from "@/assets/geografia-9ano/brics-lideres.jpg";
import chinaEua from "@/assets/geografia-9ano/china-eua-tensao.jpg";

/**
 * Geografia · 9º Ano · Unidade 6 · Aula 01
 * "Geopolítica e Blocos de Poder" — BNCC EF09GE10, EF09GE11
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-geopolitica",
  titulo: "Geopolítica: ONU, OTAN, BRICS e EUA × China",
  iconeTrilha: "🕊️",
  bncc: ["EF09GE10", "EF09GE11"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: onu,
    imagemDestaqueUrl: onu,
    aurora:
      "Quem MANDA no mundo? Não há governo global — mas existem instituições que tentam. A ONU (193 países) faz diplomacia. A OTAN (32 países) é a maior aliança militar da história (liderada pelos EUA). Os BRICS (Brasil, Rússia, Índia, China, África do Sul + novos) tentam contrapor o poder ocidental. E, no centro de tudo, a NOVA GUERRA FRIA entre EUA e CHINA — 2 superpotências disputando o século XXI.",
    falaFinal: "ONU, OTAN, BRICS, EUA × China. 4 forças = o tabuleiro global.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Chuta antes: quantos países fazem parte da ONU hoje?",
    pergunta: "Quantos países são membros da ONU?",
    opcoes: [
      { id: "193", titulo: "193 países", subtitulo: "quase todos do mundo", emoji: "🕊️", cor: "from-blue-800 to-slate-950" },
      { id: "50", titulo: "50 países", subtitulo: "só as potências", emoji: "🌍", cor: "from-slate-700 to-slate-950" },
    ],
    respostaCerta: "193",
    feedbackAcerto:
      "Exato! A ONU tem 193 países membros — quase todos do mundo. O último a entrar foi o Sudão do Sul em 2011. Ficam de fora só Taiwan (por pressão da China) e o Vaticano.",
    feedbackErro:
      "Não. A ONU tem 193 países — quase o mundo inteiro. 50 é o número aproximado de países fundadores em 1945.",
    falaFinal: "193 países. Só ficam de fora Taiwan e o Vaticano.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos-chave da geopolítica atual. Explicação + exemplo real + curiosidade.",
    instrucao: "",
    cadernos: [
      {
        id: "onu",
        capa: "1. ONU",
        emoji: "🕊️",
        cor: "from-blue-800 to-slate-950",
        conteudo:
          "ONU (Organização das Nações Unidas) foi criada em 1945 depois da 2ª Guerra Mundial. Tem 193 países membros. Órgãos principais: Assembleia Geral (1 país = 1 voto) e CONSELHO DE SEGURANÇA (15 membros, com 5 permanentes que têm poder de VETO).",
        exemplo:
          "Curiosidade: os 5 membros PERMANENTES do Conselho de Segurança são EUA, Rússia, China, Reino Unido e França — os vencedores da 2ª Guerra Mundial. Cada um pode VETAR sozinho qualquer decisão. É por isso que a ONU não impôs sanções em muitos conflitos.",
        fotoUrl: onu,
      },
      {
        id: "otan",
        capa: "2. OTAN",
        emoji: "🛡️",
        cor: "from-slate-700 to-slate-950",
        conteudo:
          "OTAN (Organização do Tratado do Atlântico Norte) é uma aliança MILITAR criada em 1949 pelos EUA e países europeus contra a URSS. Hoje tem 32 países. Regra: ataque a um = ataque a todos (Artigo 5). Foi usado 1 vez: depois do 11 de Setembro (2001).",
        exemplo:
          "Curiosidade: quando a Rússia invadiu a Ucrânia em 2022, países vizinhos que eram neutros há décadas (FINLÂNDIA e SUÉCIA) entraram na OTAN por medo. A Finlândia tem 1.340 km de fronteira com a Rússia — dobrou a fronteira OTAN-Rússia em 2023.",
        fotoUrl: otan,
      },
      {
        id: "bri",
        capa: "3. BRICS",
        emoji: "🌐",
        cor: "from-emerald-800 to-slate-950",
        conteudo:
          "BRICS é o bloco formado por Brasil, Rússia, Índia, China e África do Sul (adicionada em 2010). Em 2024, ampliou pra BRICS+: Irã, Egito, Etiópia, Emirados Árabes se juntaram. Objetivo: reduzir a dependência do DÓLAR e criar um contraponto ao Ocidente.",
        exemplo:
          "Curiosidade: os BRICS+ somam 45% da POPULAÇÃO mundial e 35% do PIB global — mais que o G7 (EUA + aliados). Estão criando um banco (NDB), uma moeda comum e um sistema de pagamentos alternativo ao SWIFT americano.",
        fotoUrl: brics,
      },
      {
        id: "guer",
        capa: "4. EUA × China",
        emoji: "⚔️",
        cor: "from-red-800 to-slate-950",
        conteudo:
          "A NOVA GUERRA FRIA é a disputa entre EUA (potência atual) e CHINA (potência ascendente). Envolve TARIFAS, SANÇÕES a tecnologia (chips, TikTok), disputa por TAIWAN e controle de rotas comerciais no Pacífico. Sem tiros — mas com muita tensão.",
        exemplo:
          "Curiosidade: os EUA proibiram a venda de CHIPS avançados para a China em 2022. A China respondeu proibindo a exportação de GERMÂNIO e GÁLIO — metais raros essenciais pra chips e painéis solares. A guerra é tecnológica, não militar.",
        fotoUrl: chinaEua,
      },
    ],
    falaFinal: "ONU, OTAN, BRICS, EUA×China. 4 palavras = geopolítica atual.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 forças da geopolítica atual. Toque em cada card pra ver a imagem e ouvir.",
    instrucao: "Toque nos 4 cards",
    mapaUrl: onu,
    pontos: [
      { id: "onu", x: 20, y: 30, emoji: "🕊️", cor: "from-blue-800 to-slate-950",
        titulo: "ONU — diplomacia global",
        texto: "193 países, sede em Nova York. Faz diplomacia, ajuda humanitária, missões de paz. Mas o poder está no Conselho de Segurança com 5 vetos.",
        fotoUrl: onu },
      { id: "ota", x: 55, y: 45, emoji: "🛡️", cor: "from-slate-700 to-slate-950",
        titulo: "OTAN — poder militar",
        texto: "32 países ocidentais liderados pelos EUA. Maior orçamento militar do mundo. Ativou o Artigo 5 uma vez: 11/09/2001.",
        fotoUrl: otan },
      { id: "bri", x: 30, y: 65, emoji: "🌐", cor: "from-emerald-800 to-slate-950",
        titulo: "BRICS+ — contraponto",
        texto: "9 países (Brasil, Rússia, Índia, China, África, Irã, Egito, Etiópia, Emirados). 45% da população mundial. Tentam sair do dólar.",
        fotoUrl: brics },
      { id: "gc", x: 70, y: 75, emoji: "⚔️", cor: "from-red-800 to-slate-950",
        titulo: "EUA × China",
        texto: "Nova Guerra Fria. Disputa por chips, TikTok, Taiwan, rotas do Pacífico. Sem tiros — mas com tarifas e sanções.",
        fotoUrl: chinaEua },
    ],
    falaFinal: "ONU, OTAN, BRICS, EUA×China. 4 forças moldam o século XXI.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "4 perguntas de geopolítico avançado pra fixar.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Quantos membros PERMANENTES têm o Conselho de Segurança da ONU?",
        fotoUrl: onu,
        cards: [
          { id: "a", emoji: "5️⃣", titulo: "5 (EUA, Rússia, China, RU, França)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "193", titulo: "193 (todos os países)", cor: "from-slate-700 to-slate-950" },
          { id: "c", emoji: "🇺🇸", titulo: "Só os EUA", cor: "from-red-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. 5 permanentes com poder de VETO — os vencedores da 2ª Guerra.",
        feedbackErro: "São 5 permanentes: EUA, Rússia, China, Reino Unido e França. Cada um pode vetar sozinho." },
      { id: "q2", pergunta: "OTAN é uma organização:",
        fotoUrl: otan,
        cards: [
          { id: "a", emoji: "🛡️", titulo: "Militar (aliança de defesa)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "💰", titulo: "Econômica (moeda comum)", cor: "from-slate-700 to-slate-950" },
          { id: "c", emoji: "🎭", titulo: "Cultural (arte e cinema)", cor: "from-red-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. MILITAR. 32 países ocidentais aliados sob liderança dos EUA.",
        feedbackErro: "É MILITAR. Moeda comum é a UE (Zona do Euro), não a OTAN." },
      { id: "q3", pergunta: "BRICS reúne:",
        fotoUrl: brics,
        cards: [
          { id: "a", emoji: "🌐", titulo: "Brasil, Rússia, Índia, China, África do Sul (+novos)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🇪🇺", titulo: "Países europeus", cor: "from-slate-700 to-slate-950" },
          { id: "c", emoji: "🇺🇸", titulo: "EUA e aliados", cor: "from-red-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. B-R-I-C-S + Irã, Egito, Etiópia, Emirados desde 2024.",
        feedbackErro: "É BRASIL, RÚSSIA, ÍNDIA, CHINA, ÁFRICA DO SUL. Europa = UE. EUA = G7." },
      { id: "q4", pergunta: "A 'nova guerra fria' EUA × China envolve principalmente:",
        fotoUrl: chinaEua,
        cards: [
          { id: "a", emoji: "💻", titulo: "Chips, tarifas e tecnologia", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🚀", titulo: "Bombas nucleares diretas", cor: "from-red-800 to-slate-950" },
          { id: "c", emoji: "⚽", titulo: "Copa do Mundo", cor: "from-sky-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. Chips, TikTok, tarifas, sanções. Guerra tecnológica.",
        feedbackErro: "É guerra TECNOLÓGICA (chips, TikTok, tarifas). Sem tiros diretos." },
    ],
    falaFinal: "4 acertos = geopolítico avançado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "O Brasil é membro fundador dos BRICS. Nossas 3 principais cidades diplomáticas — onde ficam sedes de bancos internacionais e embaixadas ligadas ao bloco — são no DF (Brasília), SP (financeira) e RJ (BNDES). Acenda os 3.",
    instrucao: "Acenda DF, SP e RJ",
    missao: {
      tipo: "selecionar",
      siglas: ["DF", "SP", "RJ"],
      pergunta: "Quais estados brasileiros concentram a diplomacia dos BRICS?",
    },
    falaFinal: "Brasília (política), SP (economia), RJ (BNDES). O Brasil no tabuleiro global.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize os 5 marcos da geopolítica pós-1945 em ordem cronológica.",
    instrucao: "Toque na ordem",
    pergunta: "Do mais antigo ao mais recente:",
    paradas: [
      { id: "1945", emoji: "🕊️", rotulo: "1. Criação da ONU (1945)",
        descricao: "50 países fundam a ONU depois da 2ª Guerra. Hoje são 193.", fotoUrl: onu },
      { id: "1949", emoji: "🛡️", rotulo: "2. Criação da OTAN (1949)",
        descricao: "EUA e Europa Ocidental se aliam contra a URSS. Início da Guerra Fria.", fotoUrl: otan },
      { id: "1991", emoji: "🧱", rotulo: "3. Fim da URSS (1991)",
        descricao: "Fim da Guerra Fria. EUA vira única superpotência por 30 anos." },
      { id: "2010", emoji: "🌐", rotulo: "4. BRICS ganha África do Sul (2010)",
        descricao: "Bloco vira BRICS. Emergentes tentam contrapor Ocidente.", fotoUrl: brics },
      { id: "2018", emoji: "⚔️", rotulo: "5. Guerra Comercial EUA × China (2018)",
        descricao: "Trump impõe tarifas. Começa a Nova Guerra Fria tecnológica.", fotoUrl: chinaEua },
    ],
    ordemCerta: ["1945", "1949", "1991", "2010", "2018"],
    feedbackAcerto: "Perfeito! 73 anos de geopolítica em 5 marcos.",
    feedbackErro: "ONU (1945), OTAN (1949), Fim URSS (1991), BRICS (2010), EUA×China (2018).",
    falaFinal: "5 marcos = o tabuleiro global se remontando desde 1945.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com calma. Termos-chave destacados — toque em qualquer um pra ver a definição.",
    tituloLivro: "📘 Manual do Explorador do Planeta",
    subtitulo: "Capítulo 6 — Geopolítica atual",
    paragrafos: [
      { id: "p1",
        texto: "A ONU (193 países) foi criada em 1945 pra evitar novas guerras mundiais. O poder real está no CONSELHO DE SEGURANÇA — 15 membros, com 5 PERMANENTES que têm VETO (EUA, Rússia, China, Reino Unido, França).",
        chaves: ["ONU", "CONSELHO DE SEGURANÇA", "VETO"],
        definicoes: {
          "ONU": "Organização das Nações Unidas. 193 países membros. Sede em Nova York. Missões: paz, direitos humanos, desenvolvimento.",
          "CONSELHO DE SEGURANÇA": "Órgão mais poderoso da ONU. 15 membros: 5 permanentes (com veto) + 10 rotativos (mandato de 2 anos).",
          "VETO": "Poder de bloquear sozinho qualquer decisão do Conselho. Cada um dos 5 permanentes tem esse poder.",
        },
        fotoUrl: onu },
      { id: "p2",
        texto: "A OTAN é a maior aliança MILITAR do mundo. 32 países (EUA + Canadá + Europa). Regra do ARTIGO 5: ataque a um = ataque a todos. Usado 1 vez: depois do 11 de Setembro.",
        chaves: ["OTAN", "ARTIGO 5"],
        definicoes: {
          "OTAN": "Organização do Tratado do Atlântico Norte. Aliança militar criada em 1949. 32 países desde 2024 (com Finlândia e Suécia).",
          "ARTIGO 5": "Cláusula da OTAN: ataque a um membro é considerado ataque a todos. Foi ativado só uma vez: após o 11/09.",
        },
        fotoUrl: otan },
      { id: "p3",
        texto: "Os BRICS+ (9 países desde 2024) tentam ser um CONTRAPONTO ao Ocidente. Somam 45% da população e 35% do PIB mundial. Criaram banco próprio (NDB) e tentam sair do DÓLAR.",
        chaves: ["BRICS+", "DÓLAR"],
        definicoes: {
          "BRICS+": "Brasil, Rússia, Índia, China, África do Sul + Irã, Egito, Etiópia, Emirados. Bloco de emergentes.",
          "DÓLAR": "Moeda dos EUA. 60% das reservas mundiais e 80% do comércio global. BRICS quer reduzir essa dependência.",
        },
        fotoUrl: brics },
      { id: "p4",
        texto: "A NOVA GUERRA FRIA entre EUA e CHINA é tecnológica: chips, TikTok, tarifas, disputa por TAIWAN. Sem tiros — mas com sanções pesadas e blocos econômicos rivais.",
        chaves: ["NOVA GUERRA FRIA", "TAIWAN"],
        definicoes: {
          "NOVA GUERRA FRIA": "Disputa EUA × China por hegemonia tecnológica e comercial. Diferente da 1ª (EUA × URSS), é econômica, não militar direta.",
          "TAIWAN": "Ilha de 24 milhões que a China reivindica como seu território. EUA vende armas a Taiwan. Ponto de tensão máxima.",
        },
        fotoUrl: chinaEua },
    ],
    falaFinal: "Leu tudo? Bora pro quiz final antes da insígnia.",
  },

  cena09_minijogo: (() => {
    const cards = [
      { id: "onu", emoji: "", titulo: "ONU", cor: "from-slate-800 to-slate-900" },
      { id: "otn", emoji: "", titulo: "OTAN", cor: "from-slate-800 to-slate-900" },
      { id: "bri", emoji: "", titulo: "BRICS+", cor: "from-slate-800 to-slate-900" },
      { id: "g7", emoji: "", titulo: "G7", cor: "from-slate-800 to-slate-900" },
      { id: "vet", emoji: "", titulo: "Veto", cor: "from-slate-800 to-slate-900" },
      { id: "tai", emoji: "", titulo: "Taiwan", cor: "from-slate-800 to-slate-900" },
    ];
    return {
      tipo: "quizRadar" as const,
      aurora: "Quiz rápido: pra cada descrição, escolha o conceito geopolítico correto.",
      instrucao: "Escolha o correto",
      perguntas: [
        { id: "r1", pergunta: "Organização criada em 1945 com 193 países membros; sede em Nova York.", cards, correta: "onu",
          feedbackAcerto: "Isso. 193 países + 1945 = ONU.", feedbackErro: "É a ONU. G7 tem 7 países; OTAN, 32; BRICS, 9." },
        { id: "r2", pergunta: "Aliança militar de 32 países ocidentais liderada pelos EUA.", cards, correta: "otn",
          feedbackAcerto: "Isso. Militar + EUA = OTAN.", feedbackErro: "É a OTAN. Criada em 1949 contra a URSS." },
        { id: "r3", pergunta: "Bloco de 9 países emergentes (Brasil, Rússia, Índia, China, África, Irã, Egito, Etiópia, Emirados).", cards, correta: "bri",
          feedbackAcerto: "Isso. 9 emergentes = BRICS+.", feedbackErro: "É o BRICS+. Contraponto ao G7." },
        { id: "r4", pergunta: "Grupo dos 7 países mais ricos ocidentais (EUA, Japão, Alemanha, Reino Unido, França, Itália, Canadá).", cards, correta: "g7",
          feedbackAcerto: "Isso. 7 ricos ocidentais = G7.", feedbackErro: "É o G7. Rússia foi expulsa em 2014 (era G8)." },
        { id: "r5", pergunta: "Poder que permite a 5 países bloquear sozinhos qualquer decisão do Conselho de Segurança da ONU.", cards, correta: "vet",
          feedbackAcerto: "Isso. Bloquear sozinho = VETO.", feedbackErro: "É o VETO. Só 5 países têm: EUA, Rússia, China, Reino Unido, França." },
        { id: "r6", pergunta: "Ilha de 24 milhões de habitantes que a China reivindica como seu território.", cards, correta: "tai",
          feedbackAcerto: "Isso. Ilha + China = TAIWAN.", feedbackErro: "É TAIWAN. Ponto de tensão máxima EUA × China." },
      ],
      falaFinal: "6 perguntas, 6 conceitos. Geopolítico formado.",
    };
  })(),

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza do PIB mundial (2024): BRICS+ vs. G7 vs. resto.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "bri", rotulo: "BRICS+ (~35%)", emoji: "🌐", percentual: 35, cor: "#059669",
        descricao: "9 países emergentes. 45% da população mundial. China puxa a maior parte do PIB.",
        exemplos: ["🇨🇳 China (18%)", "🇮🇳 Índia (3,5%)", "🇧🇷 Brasil (2%)"] },
      { id: "g7", rotulo: "G7 + aliados (~50%)", emoji: "🇬7", percentual: 50, cor: "#2563eb",
        descricao: "EUA, Japão, Alemanha, Reino Unido, França, Itália, Canadá + parceiros. Coreia, Austrália, UE.",
        exemplos: ["🇺🇸 EUA (26%)", "🇯🇵 Japão (4%)", "🇩🇪 Alemanha (4%)"] },
    ],
    falaFinal: "G7 ainda maior, mas BRICS+ crescendo rápido. Século XXI = disputa aberta.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Geopolítico Global.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Quantos países fazem parte da ONU hoje?",
        opcoes: [
          { id: "a", texto: "193", correta: true },
          { id: "b", texto: "50", correta: false },
          { id: "c", texto: "Só as potências", correta: false },
        ],
        feedbackAcerto: "Isso! 193 — quase o mundo inteiro.",
        feedbackErro: "São 193. 50 é o número aproximado de fundadores em 1945." },
      { id: "av2", pergunta: "OTAN é uma aliança:",
        opcoes: [
          { id: "a", texto: "Militar (32 países ocidentais)", correta: true },
          { id: "b", texto: "Econômica", correta: false },
          { id: "c", texto: "Cultural", correta: false },
        ],
        feedbackAcerto: "Isso! 32 países + liderança dos EUA.",
        feedbackErro: "É MILITAR. Aliança de defesa mútua." },
      { id: "av3", pergunta: "A nova guerra fria é entre:",
        opcoes: [
          { id: "a", texto: "EUA e China", correta: true },
          { id: "b", texto: "Brasil e Argentina", correta: false },
          { id: "c", texto: "França e Reino Unido", correta: false },
        ],
        feedbackAcerto: "Isso! EUA × China — chips, tarifas, Taiwan.",
        feedbackErro: "É EUA × CHINA. Disputa tecnológica e comercial." },
    ],
    selo: { nome: "Geopolítico Global", subtitulo: "Insígnia do Explorador do Planeta", emoji: "🕊️", cor: "from-violet-800 to-slate-950" },
    falaFinal: "Insígnia conquistada! Você entende o tabuleiro global.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Geopolítico Global" },
};
