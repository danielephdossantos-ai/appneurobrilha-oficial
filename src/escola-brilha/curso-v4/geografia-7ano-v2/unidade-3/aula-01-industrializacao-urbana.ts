import type { AulaGeoV1 } from "../../types";
import { url as industria } from "@/assets/geografia-7ano/industria-brasil.jpg.asset.json";
import { url as metropole } from "@/assets/geografia-7ano/metropole-sao-paulo.jpg.asset.json";
import { url as favela } from "@/assets/geografia-7ano/favela-urbanizacao.jpg.asset.json";
import { url as migracao } from "@/assets/geografia-7ano/migracao-rural-urbana.jpg.asset.json";
/**
 * Geografia · 7º Ano · Unidade 3 · Aula 01
 * "Industrialização e Urbanização" — BNCC EF07GE05, EF07GE08
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-industrializacao-urbana",
  titulo: "Industrialização e Urbanização",
  iconeTrilha: "🏭",
  bncc: ["EF07GE05", "EF07GE08"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: metropole,
    imagemDestaqueUrl: metropole,
    aurora:
      "Em 1940, 70% dos brasileiros viviam no CAMPO. Hoje, 87% moram em CIDADES. Foi a maior migração da história do país — 80 milhões de pessoas em 80 anos. Isso aconteceu porque o Brasil se INDUSTRIALIZOU, e as fábricas ficavam nas cidades. Getúlio Vargas começou nos anos 30 (substituição de importações), Juscelino Kubitschek acelerou nos 50 (indústria automobilística no ABC paulista), e o Milagre Econômico dos anos 70 completou. Resultado: São Paulo virou uma das 10 maiores cidades do mundo. Mas o crescimento acelerado trouxe FAVELAS, TRÂNSITO e MACROCEFALIA URBANA.",
    falaFinal: "80 anos. 80 milhões de pessoas do campo pra cidade. Uma revolução silenciosa.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Chuta: qual foi o principal MOTOR que levou 80 milhões de brasileiros do campo pra cidade em 80 anos?",
    pergunta: "O que puxou o êxodo rural:",
    opcoes: [
      { id: "ind", titulo: "EMPREGO nas fábricas urbanas", subtitulo: "indústria atraía trabalhadores", emoji: "🏭", cor: "from-emerald-800 to-slate-950" },
      { id: "rio", titulo: "Muita chuva no campo", subtitulo: "fugiram das enchentes", emoji: "🌧️", cor: "from-sky-800 to-slate-950" },
    ],
    respostaCerta: "ind",
    feedbackAcerto:
      "Exato! A INDUSTRIALIZAÇÃO puxou o êxodo rural. Fábricas em SP, RJ e ABC ofereciam emprego, salário fixo e vida melhor que a lavoura. O campo mecanizou e passou a precisar de menos gente. Resultado: 87% urbano hoje.",
    feedbackErro:
      "Chuva não motivou. O motor foi EMPREGO INDUSTRIAL nas cidades + mecanização do campo (menos gente necessária). Fábricas puxaram trabalhadores.",
    falaFinal: "Regra do êxodo: fábrica na cidade + máquina no campo = migração massiva.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos da industrialização e urbanização. Cada card traz explicação, exemplo real e curiosidade.",
    instrucao: "",
    cadernos: [
      { id: "sub", capa: "1. Substituição de importações", emoji: "🏭", cor: "from-amber-800 to-orange-950",
        conteudo: "SUBSTITUIÇÃO DE IMPORTAÇÕES é a estratégia que Getúlio Vargas começou nos anos 30: PRODUZIR no Brasil o que antes se comprava do exterior. Governo protegia a indústria nacional com tarifas altas sobre importados.",
        exemplo: "Curiosidade: em 1930, o Brasil importava até PREGO. Nos anos 40, criamos siderúrgicas (CSN, Volta Redonda). Nos 50, automóveis. Nos 70, aviões (Embraer). Do zero à indústria pesada em 50 anos.",
        fotoUrl: industria },
      { id: "exodo", capa: "2. Êxodo rural", emoji: "🚌", cor: "from-slate-700 to-slate-950",
        conteudo: "ÊXODO RURAL é a migração em MASSA da população do campo pra cidade em busca de trabalho. No Brasil, 80 milhões migraram entre 1940 e 2020.",
        exemplo: "Curiosidade: nos anos 60-70 saíam ônibus lotados do Nordeste rumo a São Paulo. Eram os PAUS-DE-ARARA. Migrantes chegavam sem casa, sem trabalho garantido. Muitos foram parar em favelas.",
        fotoUrl: migracao },
      { id: "urb", capa: "3. Urbanização", emoji: "🏙️", cor: "from-sky-800 to-slate-950",
        conteudo: "URBANIZAÇÃO é o crescimento da população que vive em CIDADES em relação ao total do país. Brasil em 1940: 30% urbano. Hoje: 87% urbano.",
        exemplo: "Curiosidade: São Paulo era uma vila em 1900 (240 mil hab). Em 2024, tem 12 milhões de habitantes. A região metropolitana chega a 22 milhões — uma das 10 maiores megalópoles do planeta.",
        fotoUrl: metropole },
      { id: "macro", capa: "4. Macrocefalia urbana", emoji: "🏗️", cor: "from-red-800 to-slate-950",
        conteudo: "MACROCEFALIA URBANA é o crescimento DESORDENADO das cidades — infraestrutura (transporte, moradia, saneamento) não acompanha o número de pessoas. Resultado: favelas, trânsito, falta d'água.",
        exemplo: "Curiosidade: em São Paulo, 11% da população mora em FAVELAS (1,3 milhão de pessoas). Rocinha (RJ) é a maior favela do Brasil — 200 mil habitantes em 1 km². Densidade maior que Manhattan.",
        fotoUrl: favela },
    ],
    falaFinal: "Substituição, êxodo, urbanização, macrocefalia. 4 palavras que explicam o Brasil urbano.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Cada card é uma FASE da industrialização brasileira. Toque em cada um pra ver a imagem e o contexto.",
    instrucao: "Toque nos 4 cards pra ouvir cada fase",
    mapaUrl: industria,
    pontos: [
      { id: "vargas", x: 20, y: 30, emoji: "🏗️", cor: "from-amber-800 to-orange-950",
        titulo: "1930-1950 — Vargas (Substituição)",
        texto: "Governo protege indústria nacional. Cria CSN (siderurgia), Petrobras, Vale do Rio Doce. Brasil começa a produzir aço, petróleo, minério.",
        fotoUrl: industria },
      { id: "jk", x: 55, y: 45, emoji: "🚗", cor: "from-emerald-800 to-slate-950",
        titulo: "1950-1960 — JK (Automobilística)",
        texto: "Juscelino Kubitschek promete '50 anos em 5'. Chega Volkswagen, Ford, GM no ABC paulista. Nasce Brasília. Indústria pesada explode.",
        fotoUrl: industria },
      { id: "milagre", x: 45, y: 60, emoji: "📈", cor: "from-sky-800 to-slate-950",
        titulo: "1970 — Milagre Econômico",
        texto: "Ditadura militar. PIB cresce 10% ao ano. Grandes obras: Itaipu, Transamazônica. Êxodo rural em ritmo acelerado. São Paulo estoura em população.",
        fotoUrl: metropole },
      { id: "hoje", x: 70, y: 75, emoji: "🌆", cor: "from-slate-700 to-slate-950",
        titulo: "Hoje — Desafios urbanos",
        texto: "87% urbano. Grandes metrópoles com trânsito, poluição, favelas. Macrocefalia: São Paulo cresceu antes da infraestrutura acompanhar.",
        fotoUrl: favela },
    ],
    falaFinal: "4 fases. Do zero à sétima economia do mundo. Com preço social alto.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "4 perguntas de urbanista pra fixar.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "% da população brasileira que vive em CIDADES hoje:",
        fotoUrl: metropole,
        cards: [
          { id: "a", emoji: "🏙️", titulo: "87% urbano", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🌾", titulo: "50% urbano", cor: "from-amber-800 to-orange-950" },
          { id: "c", emoji: "🚜", titulo: "30% urbano", cor: "from-sky-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso! 87% urbano. Éramos 30% em 1940.",
        feedbackErro: "30% era 1940. Hoje o Brasil está 87% urbanizado." },
      { id: "q2", pergunta: "Presidente que começou a industrialização por substituição de importações:",
        fotoUrl: industria,
        cards: [
          { id: "a", emoji: "🇧🇷", titulo: "Getúlio Vargas (1930s)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🌴", titulo: "Dom Pedro II", cor: "from-amber-800 to-orange-950" },
          { id: "c", emoji: "🎯", titulo: "Fernando Henrique", cor: "from-sky-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso! GETÚLIO VARGAS a partir dos anos 30. Criou CSN, Petrobras, Vale.",
        feedbackErro: "Pedro II foi Império (Brasil agrícola). FHC é 1990s. VARGAS começou nos anos 30." },
      { id: "q3", pergunta: "Polo automobilístico brasileiro criado por JK nos anos 50:",
        fotoUrl: industria,
        cards: [
          { id: "a", emoji: "🚗", titulo: "ABC paulista", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🌴", titulo: "Zona Franca de Manaus", cor: "from-sky-800 to-slate-950" },
          { id: "c", emoji: "🌾", titulo: "Sertão nordestino", cor: "from-amber-800 to-orange-950" },
        ], correta: "a",
        feedbackAcerto: "Isso! ABC paulista (SANTO ANDRÉ, SÃO BERNARDO, SÃO CAETANO). Volkswagen chegou em 1953.",
        feedbackErro: "Manaus veio nos 70. Sertão é agrícola. Polo automobilístico é ABC PAULISTA." },
      { id: "q4", pergunta: "MACROCEFALIA URBANA significa:",
        fotoUrl: favela,
        cards: [
          { id: "a", emoji: "🏗️", titulo: "Cidade cresce mais que infraestrutura", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🧠", titulo: "Doença cerebral", cor: "from-red-800 to-slate-950" },
          { id: "c", emoji: "🏙️", titulo: "Prédios muito altos", cor: "from-sky-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso! Cidade INCHA sem infraestrutura acompanhar. Resulta em favelas, trânsito, saneamento ruim.",
        feedbackErro: "Não é doença nem prédio alto. É CRESCIMENTO DESORDENADO — infraestrutura não acompanha." },
    ],
    falaFinal: "4 acertos = urbanista em formação.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "As 4 maiores metrópoles brasileiras concentram 30% do PIB nacional. Marque os estados onde ficam.",
    instrucao: "Acenda os 4 estados das grandes metrópoles",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "RJ", "MG", "DF"],
      pergunta: "Onde ficam as 4 maiores metrópoles?",
    },
    falaFinal:
      "SP, RJ, MG, DF. Sudeste concentra riqueza + poder político. Um mini-Brasil dentro do Brasil.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como uma pessoa deixa o campo e vai parar na favela? Organize as etapas do êxodo rural típico.",
    instrucao: "Toque na ordem",
    pergunta: "Do campo à favela:",
    paradas: [
      { id: "1", emoji: "🌾", rotulo: "1. Vida no sítio",
        descricao: "Família vive de pequena roça. Terra cansada, mecanização toma o lugar do trabalho manual." },
      { id: "2", emoji: "🚌", rotulo: "2. Viagem no pau-de-arara",
        descricao: "Pai (ou família toda) pega ônibus. Dias de viagem até São Paulo.", fotoUrl: migracao },
      { id: "3", emoji: "🏭", rotulo: "3. Chegada e emprego industrial",
        descricao: "Consegue vaga em fábrica no ABC. Salário mínimo. Trabalho pesado.", fotoUrl: industria },
      { id: "4", emoji: "🏘️", rotulo: "4. Moradia precária",
        descricao: "Aluguel caro na cidade. Vai morar em bairro periférico ou favela.", fotoUrl: favela },
      { id: "5", emoji: "🌆", rotulo: "5. Nova geração urbana",
        descricao: "Filhos nascem na cidade. Estudam mais. Talvez consigam sair da favela.", fotoUrl: metropole },
    ],
    ordemCerta: ["1", "2", "3", "4", "5"],
    feedbackAcerto: "Perfeito! Histórias reais de milhões de famílias brasileiras.",
    feedbackErro: "Comece na roça. Depois viagem, emprego, moradia precária, nova geração.",
    falaFinal: "5 etapas. Milhões de vidas seguindo esse mesmo caminho.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com calma. Os TERMOS-CHAVE ficam destacados — toque em qualquer um pra ver a definição.",
    tituloLivro: "📘 Manual do Explorador do Brasil",
    subtitulo: "Capítulo 3 — Industrialização e Urbanização",
    paragrafos: [
      { id: "p1",
        texto: "A SUBSTITUIÇÃO DE IMPORTAÇÕES começou com VARGAS nos anos 30. Produzir dentro do Brasil o que antes se comprava do exterior.",
        chaves: ["SUBSTITUIÇÃO DE IMPORTAÇÕES", "VARGAS"],
        definicoes: {
          "SUBSTITUIÇÃO DE IMPORTAÇÕES": "Modelo de industrialização em que o governo protege a indústria nacional para produzir o que se importava.",
          "VARGAS": "Getúlio Vargas, presidente 1930-45 e 1951-54. Criou a Petrobras, a CSN (siderurgia) e a Vale do Rio Doce.",
        },
        fotoUrl: industria,
      },
      { id: "p2",
        texto: "JUSCELINO KUBITSCHEK acelerou nos anos 50 com o PLANO DE METAS: '50 anos em 5'. Chegou a INDÚSTRIA AUTOMOBILÍSTICA no ABC paulista.",
        chaves: ["JUSCELINO KUBITSCHEK", "PLANO DE METAS", "INDÚSTRIA AUTOMOBILÍSTICA"],
        definicoes: {
          "JUSCELINO KUBITSCHEK": "Presidente 1956-61. Construiu Brasília e trouxe multinacionais automobilísticas.",
          "PLANO DE METAS": "31 metas para acelerar a industrialização. Incluía energia, transporte, indústria de base.",
          "INDÚSTRIA AUTOMOBILÍSTICA": "Volkswagen (1953), Ford, GM, Mercedes. Instaladas em Santo André, São Bernardo, São Caetano.",
        },
        fotoUrl: industria,
      },
      { id: "p3",
        texto: "O ÊXODO RURAL trouxe 80 milhões de pessoas do CAMPO pras CIDADES. Brasil passou de 30% urbano (1940) para 87% (2020).",
        chaves: ["ÊXODO RURAL", "CIDADES"],
        definicoes: {
          "ÊXODO RURAL": "Migração em massa do campo para a cidade. Brasil: 80 milhões de pessoas em 80 anos.",
          "CIDADES": "Espaços urbanos com infraestrutura, comércio e serviços. Concentram 87% dos brasileiros hoje.",
        },
        fotoUrl: migracao,
      },
      { id: "p4",
        texto: "A MACROCEFALIA URBANA cria FAVELAS, trânsito e falta de saneamento. Cidades cresceram mais rápido que a infraestrutura pública.",
        chaves: ["MACROCEFALIA URBANA", "FAVELAS"],
        definicoes: {
          "MACROCEFALIA URBANA": "Crescimento desordenado das cidades. Infraestrutura (transporte, saúde, saneamento) não acompanha.",
          "FAVELAS": "Assentamentos irregulares sem títulos de propriedade. Em SP: 11% da população mora em favelas.",
        },
        fotoUrl: favela,
      },
    ],
    falaFinal: "Leu tudo? Bora pro quiz final.",
  },

  cena09_minijogo: (() => {
    const cards = [
      { id: "sub", emoji: "", titulo: "Substituição de importações", cor: "from-slate-800 to-slate-900" },
      { id: "exo", emoji: "", titulo: "Êxodo rural", cor: "from-slate-800 to-slate-900" },
      { id: "urb", emoji: "", titulo: "Urbanização", cor: "from-slate-800 to-slate-900" },
      { id: "macro", emoji: "", titulo: "Macrocefalia urbana", cor: "from-slate-800 to-slate-900" },
      { id: "abc", emoji: "", titulo: "ABC paulista", cor: "from-slate-800 to-slate-900" },
      { id: "milagre", emoji: "", titulo: "Milagre Econômico", cor: "from-slate-800 to-slate-900" },
    ];
    return {
      tipo: "quizRadar" as const,
      aurora: "Quiz rápido: pra cada descrição, escolha o conceito correto.",
      instrucao: "Escolha o conceito correto",
      perguntas: [
        { id: "r1", pergunta: "Modelo iniciado por Vargas em que o Brasil passa a produzir o que antes importava.", cards, correta: "sub",
          feedbackAcerto: "Isso. Produzir aqui em vez de importar = SUBSTITUIÇÃO.", feedbackErro: "É SUBSTITUIÇÃO DE IMPORTAÇÕES. Estratégia de Vargas nos anos 30." },
        { id: "r2", pergunta: "Migração em massa da população do campo para a cidade.", cards, correta: "exo",
          feedbackAcerto: "Isso. Campo → cidade = ÊXODO RURAL.", feedbackErro: "É ÊXODO RURAL. 80 milhões de pessoas no Brasil em 80 anos." },
        { id: "r3", pergunta: "Aumento da proporção da população que vive em cidades.", cards, correta: "urb",
          feedbackAcerto: "Isso. Mais gente vivendo em cidade = URBANIZAÇÃO.", feedbackErro: "É URBANIZAÇÃO. Brasil está 87% urbanizado." },
        { id: "r4", pergunta: "Crescimento desordenado das grandes cidades, sem infraestrutura acompanhar.", cards, correta: "macro",
          feedbackAcerto: "Isso. Cidade incha desordenada = MACROCEFALIA URBANA.", feedbackErro: "É MACROCEFALIA URBANA. Gera favelas, trânsito, saneamento ruim." },
        { id: "r5", pergunta: "Polo automobilístico criado por JK: Santo André, São Bernardo, São Caetano.", cards, correta: "abc",
          feedbackAcerto: "Isso. Três cidades industriais = ABC PAULISTA.", feedbackErro: "É o ABC PAULISTA. Volkswagen chegou lá em 1953." },
        { id: "r6", pergunta: "Período dos anos 70 em que o PIB brasileiro crescia 10% ao ano durante a ditadura militar.", cards, correta: "milagre",
          feedbackAcerto: "Isso. Anos 70 com PIB de 10% = MILAGRE ECONÔMICO.", feedbackErro: "É o MILAGRE ECONÔMICO. Ditadura, PIB alto, dívida externa também." },
      ],
      falaFinal: "6 perguntas, 6 conceitos. Analista econômico-urbano formado.",
    };
  })(),

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da população brasileira: campo × cidade em 2024.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "urb", rotulo: "Urbana (87%)", emoji: "🏙️", percentual: 87, cor: "#0284c7",
        descricao: "185 milhões de pessoas em cidades. Concentração no Sudeste e nas capitais nordestinas.",
        exemplos: ["🏙️ SP", "🌊 RJ", "🌆 Recife"] },
      { id: "rur", rotulo: "Rural (13%)", emoji: "🌾", percentual: 13, cor: "#a16207",
        descricao: "27 milhões em áreas rurais. Cai a cada ano. Mecanização do campo reduz demanda por mão de obra.",
        exemplos: ["🚜 Agronegócio", "🐄 Pecuária", "🌱 Agricultura familiar"] },
    ],
    falaFinal: "87% urbano. Brasil rural virou minoria — em 80 anos.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Urbanista do Brasil.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Presidente que iniciou a industrialização brasileira por substituição de importações:",
        opcoes: [
          { id: "a", texto: "Getúlio Vargas (anos 30)", correta: true },
          { id: "b", texto: "Dom Pedro I", correta: false },
          { id: "c", texto: "Lula", correta: false },
        ],
        feedbackAcerto: "Isso! VARGAS a partir dos anos 30.",
        feedbackErro: "Pedro I foi Império. Lula é séc. XXI. VARGAS começou nos anos 30." },
      { id: "av2", pergunta: "% da população brasileira que vive em cidades hoje:",
        opcoes: [
          { id: "a", texto: "87% urbano", correta: true },
          { id: "b", texto: "40% urbano", correta: false },
          { id: "c", texto: "10% urbano", correta: false },
        ],
        feedbackAcerto: "Isso! 87% urbano em 2024.",
        feedbackErro: "10% era antes da industrialização. Hoje somos 87% urbanos." },
      { id: "av3", pergunta: "MACROCEFALIA URBANA é:",
        opcoes: [
          { id: "a", texto: "Cidade cresce sem infraestrutura acompanhar", correta: true },
          { id: "b", texto: "Doença cerebral típica de urbanos", correta: false },
          { id: "c", texto: "Prédios muito altos", correta: false },
        ],
        feedbackAcerto: "Isso! Cidade incha desordenada → favela, trânsito, esgoto ruim.",
        feedbackErro: "É crescimento desordenado. Cidade estoura antes da infraestrutura chegar." },
    ],
    selo: { nome: "Urbanista do Brasil", subtitulo: "Insígnia do Explorador do Brasil", emoji: "🏭", cor: "from-amber-800 to-orange-950" },
    falaFinal: "Insígnia conquistada! Você entende como o Brasil ficou urbano.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Urbanista do Brasil" },
};
