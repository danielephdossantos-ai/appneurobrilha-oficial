import type { AulaGeoV1 } from "../../types";
import imgPau from "@/assets/historia-4ano/pau-de-arara.jpg";
import imgCandangos from "@/assets/historia-4ano/candangos-brasilia.jpg";
import imgMapa from "@/assets/historia-4ano/mapa-exodo-rural.jpg";

/**
 * História · 4º Ano · Unidade 6 · Aula 01
 * "As Migrações Internas: Do Campo para a Cidade" — êxodo rural e Brasília.
 * Restaura a Página 6 das Crônicas: Os Caminhos do Próprio País.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-migracoes-internas",
  titulo: "As Migrações Internas: Do Campo para a Cidade",
  iconeTrilha: "🏗️",
  bncc: ["EF04HI09", "EF04HI11"],
  duracaoMin: 24,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a LUPA sobre a foto sépia. É um PAU-DE-ARARA — o caminhão de madeira aberto que levou milhões de nordestinos até o Sudeste no século XX.",
    mapaUrl: imgPau,
    imagemDestaqueUrl: imgMapa,
    aurora:
      "Pequeno Historiador, nem toda migração atravessa oceano. Milhões de brasileiros MIGRARAM dentro do próprio Brasil — do sertão pra São Paulo, do Nordeste pra Brasília. Chama-se MIGRAÇÃO INTERNA.",
    falaFinal:
      "Nesta aula você acende o sexto ponto do mapa: Os Caminhos do Próprio País.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite: por que milhões de nordestinos deixaram suas terras natais entre 1950 e 1980 e viajaram dias em pau-de-arara?",
    pergunta: "O que empurrou o êxodo rural?",
    fotoUrl: imgPau,
    opcoes: [
      {
        id: "seca",
        titulo: "Seca + falta de emprego no campo + indústria em SP",
        subtitulo: "expulsão do campo + atração da cidade",
        emoji: "☀️",
        cor: "from-amber-600 to-orange-800",
        fotoUrl: imgMapa,
      },
      {
        id: "praia",
        titulo: "Só queriam morar perto da praia",
        subtitulo: "era só passeio",
        emoji: "🏖️",
        cor: "from-slate-500 to-slate-700",
        fotoUrl: imgCandangos,
      },
    ],
    respostaCerta: "seca",
    feedbackAcerto:
      "Correto. SECA prolongada, tratores substituindo mão de obra e a INDÚSTRIA crescendo em SP formaram o par expulsão + atração.",
    feedbackErro:
      "Não vieram por praia. Vieram por FALTA de opção (seca, sem terra) e por PROMESSA (emprego em fábrica).",
    falaFinal: "Guarde: migração interna = expulsão do campo + atração da cidade.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Três palavras técnicas do vocabulário das migrações internas.",
    instrucao: "Leia os três cadernos abertos",
    cadernos: [
      {
        id: "exodo",
        capa: "Êxodo Rural",
        emoji: "🚚",
        cor: "from-amber-600 to-orange-800",
        fotoUrl: imgPau,
        conteudo:
          "ÊXODO RURAL é o movimento em MASSA de pessoas do CAMPO pras CIDADES. No Brasil, aconteceu com força no século XX, principalmente do Nordeste (por causa da SECA) pro Sudeste industrial (SP e RJ).",
        exemplo:
          "Exemplo: em 1950, 64% dos brasileiros moravam no campo. Em 2020, só 15%. O restante migrou pras cidades.",
      },
      {
        id: "candangos",
        capa: "Candangos",
        emoji: "🏗️",
        cor: "from-yellow-600 to-orange-800",
        fotoUrl: imgCandangos,
        conteudo:
          "CANDANGOS eram os TRABALHADORES MIGRANTES (principalmente nordestinos) que saíram de seus estados pra CONSTRUIR Brasília entre 1956 e 1960. Moravam em acampamentos, trabalhavam dia e noite pra erguer a nova capital.",
        exemplo:
          "Exemplo: sem os candangos, Brasília nunca teria sido construída em apenas 3 anos e 10 meses.",
      },
      {
        id: "retirante",
        capa: "Retirante",
        emoji: "🥾",
        cor: "from-orange-600 to-red-800",
        fotoUrl: imgMapa,
        conteudo:
          "RETIRANTE é a pessoa que sai do sertão fugindo da SECA e da fome. Carrega suas coisas nas costas ou em carroças em busca de água, comida e emprego. É um símbolo trágico da história nordestina.",
        exemplo:
          "Exemplo: a música Asa Branca, de Luiz Gonzaga, canta a dor do retirante nordestino saindo do sertão.",
      },
    ],
    falaFinal:
      "Êxodo Rural + Candangos + Retirante: vocabulário técnico das migrações internas do Brasil moderno.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Este é o mapa das migrações internas no Brasil século XX. Toque em cada ponto.",
    instrucao: "Toque nos pontos do mapa",
    mapaUrl: imgMapa,
    pontos: [
      {
        id: "nordeste",
        x: 75,
        y: 30,
        emoji: "☀️",
        cor: "from-amber-600 to-orange-800",
        fotoUrl: imgPau,
        titulo: "1. NORDESTE — origem dos retirantes",
        texto:
          "Secas prolongadas no sertão do CE, PE, PB, RN e BA expulsaram milhões. Sem chuva, sem plantio, sem comida — restava migrar.",
      },
      {
        id: "brasilia",
        x: 55,
        y: 50,
        emoji: "🏛️",
        cor: "from-yellow-600 to-orange-800",
        fotoUrl: imgCandangos,
        titulo: "2. BRASÍLIA — construída por candangos (1956-60)",
        texto:
          "Presidente Juscelino Kubitschek decidiu construir uma nova capital no cerrado. Milhares de nordestinos MIGRARAM pra erguer os prédios em tempo recorde.",
      },
      {
        id: "sp",
        x: 55,
        y: 70,
        emoji: "🏭",
        cor: "from-slate-600 to-slate-800",
        fotoUrl: imgMapa,
        titulo: "3. SÃO PAULO — indústria atrai",
        texto:
          "SP virou o polo industrial do país. Milhões de nordestinos vieram trabalhar em fábricas, construção civil e serviços. Bairros inteiros foram formados por migrantes.",
      },
      {
        id: "amazonia",
        x: 30,
        y: 35,
        emoji: "🌳",
        cor: "from-emerald-600 to-teal-800",
        fotoUrl: imgMapa,
        titulo: "4. AMAZÔNIA — nova fronteira agrícola",
        texto:
          "Nas décadas de 70-80, o governo incentivou migração de gaúchos e paranaenses pra Amazônia — em busca de terras baratas. Trouxe conflitos ambientais graves.",
      },
    ],
    falaFinal:
      "Nordeste → Brasília + SP + Amazônia. O Brasil se REORGANIZOU internamente no século XX.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas sobre migrações internas.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual o nome do movimento em massa do CAMPO pras CIDADES?",
        fotoUrl: imgMapa,
        cards: [
          { id: "e", emoji: "🚚", titulo: "Êxodo Rural", cor: "from-amber-500 to-orange-700" },
          { id: "d", emoji: "🌍", titulo: "Diáspora", cor: "from-emerald-500 to-teal-700" },
          { id: "i", emoji: "🛳️", titulo: "Imigração", cor: "from-sky-500 to-blue-700" },
        ],
        correta: "e",
        feedbackAcerto: "Certeza. Campo → cidade = ÊXODO RURAL.",
        feedbackErro: "Diáspora é forçada; imigração é entre países. Campo→cidade = ÊXODO RURAL.",
      },
      {
        id: "q2",
        pergunta: "Como eram chamados os trabalhadores migrantes que ergueram Brasília?",
        fotoUrl: imgCandangos,
        cards: [
          { id: "c", emoji: "🏗️", titulo: "Candangos", cor: "from-yellow-500 to-orange-700" },
          { id: "b", emoji: "⚔️", titulo: "Bandeirantes modernos", cor: "from-slate-500 to-slate-700" },
          { id: "t", emoji: "🐴", titulo: "Tropeiros", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "c",
        feedbackAcerto: "Exato! CANDANGOS — a maioria nordestina, ergueram a capital em 3 anos e 10 meses.",
        feedbackErro: "Bandeirantes são do século XVII; tropeiros também. Quem ergueu Brasília = CANDANGOS.",
      },
      {
        id: "q3",
        pergunta: "Qual foi o principal MOTIVO da saída dos nordestinos do sertão no século XX?",
        fotoUrl: imgPau,
        cards: [
          { id: "s", emoji: "☀️", titulo: "Seca prolongada + falta de emprego", cor: "from-amber-500 to-orange-700" },
          { id: "t", emoji: "🏖️", titulo: "Turismo", cor: "from-slate-500 to-slate-700" },
          { id: "e", emoji: "🎓", titulo: "Estudar em Harvard", cor: "from-sky-500 to-blue-700" },
        ],
        correta: "s",
        feedbackAcerto: "Isso. SECA + falta de trabalho no campo = motivo principal do êxodo.",
        feedbackErro: "Não foi turismo nem estudo no exterior. O motivo real foi SECA + falta de trabalho.",
      },
    ],
    falaFinal: "Vocabulário técnico dominado. Você entende as migrações internas do século XX.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois interruptores no mesmo mapa: um destaca a EXPULSÃO (do que os retirantes fugiam), outro destaca a ATRAÇÃO (o que buscavam nas cidades).",
    instrucao: "Toque nos interruptores",
    mapaUrl: imgMapa,
    camadas: [
      {
        id: "expulsao",
        rotulo: "Expulsão do campo",
        emoji: "☀️",
        cor: "from-amber-600 to-orange-800",
        rect: { x: 55, y: 15, w: 40, h: 35 },
        descricao:
          "SECA prolongada, falta de terra, chegada de TRATORES que substituíram trabalhadores, e violência no campo. Empurrava famílias inteiras pra fora do sertão.",
      },
      {
        id: "atracao",
        rotulo: "Atração da cidade",
        emoji: "🏭",
        cor: "from-slate-600 to-slate-800",
        rect: { x: 45, y: 55, w: 40, h: 35 },
        descricao:
          "FÁBRICAS crescendo em SP e RJ (indústria automobilística, tecidos, aço), construção civil (Brasília), promessa de escola, hospital e salário fixo.",
      },
    ],
    falaFinal: "EXPULSÃO + ATRAÇÃO é a fórmula que explica QUALQUER migração humana.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos organizar as 4 grandes ondas de migração interna do Brasil século XX.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Quais foram as grandes ondas migratórias?",
    paradas: [
      {
        id: "seca1877",
        emoji: "☀️",
        rotulo: "1. Primeira grande seca (1877)",
        fotoUrl: imgMapa,
        descricao: "Seca terrível no CE mata milhares. Muitos migram pra Amazônia trabalhar na borracha.",
      },
      {
        id: "sp1940",
        emoji: "🏭",
        rotulo: "2. Migração pro Sudeste (1940+)",
        fotoUrl: imgPau,
        descricao: "Industrialização de SP e RJ atrai milhões de nordestinos em pau-de-arara.",
      },
      {
        id: "brasilia",
        emoji: "🏗️",
        rotulo: "3. Construção de Brasília (1956-60)",
        fotoUrl: imgCandangos,
        descricao: "Candangos migram pro cerrado pra erguer a nova capital em tempo recorde.",
      },
      {
        id: "amazonia",
        emoji: "🌳",
        rotulo: "4. Ocupação da Amazônia (1970-80)",
        fotoUrl: imgMapa,
        descricao: "Governo incentiva gaúchos e paranaenses a irem pro Norte — nasce agropecuária amazônica.",
      },
    ],
    ordemCerta: ["seca1877", "sp1940", "brasilia", "amazonia"],
    feedbackAcerto: "Ordem cronológica correta: 1877 → 1940+ → 1956-60 → 1970-80.",
    feedbackErro: "Essa não é a próxima etapa. Pense na ordem cronológica.",
    falaFinal: "Você mapeou as 4 grandes ondas de migração interna do Brasil.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia a Página 6 e toque nas palavras destacadas.",
    tituloLivro: "📜 As Crônicas das Grandes Rotas",
    subtitulo: "Página 6 — Os Caminhos do Próprio País",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Nem toda migração atravessa oceanos. No século XX, o Brasil viveu enormes MIGRAÇÕES INTERNAS — pessoas que se deslocavam DENTRO do próprio país. A principal foi o ÊXODO RURAL: milhões saíram do campo rumo às cidades industriais.",
        chaves: ["Êxodo Rural"],
        definicoes: {
          "Êxodo Rural":
            "Movimento em massa da população do campo para as cidades, causado por seca, falta de emprego e industrialização.",
        },
        fotoUrl: imgPau,
      },
      {
        id: "p2",
        texto:
          "O motor foi a fórmula EXPULSÃO + ATRAÇÃO. EXPULSÃO: seca prolongada no sertão, tratores substituindo pessoas, falta de terra. ATRAÇÃO: fábricas em SP e RJ, construção civil, promessa de escola e hospital.",
        chaves: ["expulsão", "atração"],
        definicoes: {
          expulsão: "Fatores que forçam as pessoas a SAIR de uma região (seca, falta de emprego, violência).",
          atração: "Fatores que ATRAEM as pessoas para uma região (emprego, escola, hospital, salário).",
        },
        fotoUrl: imgMapa,
      },
      {
        id: "p3",
        texto:
          "Milhões viajaram em PAU-DE-ARARA — caminhões abertos, sem conforto, dias de viagem. Muitos formaram bairros inteiros em São Paulo (Brás, Casa Verde, Osasco) e no ABC paulista.",
        chaves: ["pau-de-arara"],
        definicoes: {
          "pau-de-arara":
            "Caminhão de carroceria aberta usado para transportar migrantes nordestinos até o Sudeste, muitas vezes por vários dias.",
        },
        fotoUrl: imgPau,
      },
      {
        id: "p4",
        texto:
          "Entre 1956 e 1960, o presidente Juscelino Kubitschek decidiu construir uma nova capital no cerrado: BRASÍLIA. Milhares de nordestinos migraram pra erguer a cidade em apenas 3 anos e 10 meses. Foram chamados de CANDANGOS.",
        chaves: ["Candangos"],
        definicoes: {
          Candangos:
            "Trabalhadores migrantes que construíram Brasília entre 1956 e 1960, a maioria vinda do Nordeste.",
        },
        fotoUrl: imgCandangos,
      },
    ],
    falaFinal: "Leitura concluída. Você entende como os brasileiros REDESENHARAM o mapa do próprio país.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Missão de geógrafo social: cada rodada mostra um fator. Classifique: EXPULSÃO ou ATRAÇÃO?",
    instrucao: "⏱️ Leia e toque",
    duracaoSegundos: 18,
    pecas: [
      { id: "ex", emoji: "☀️", rotulo: "Expulsão" },
      { id: "at", emoji: "🏭", rotulo: "Atração" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Seca de 2 anos no sertão", emoji: "☀️", cor: "from-amber-600 to-orange-800" },
        municipioB: { nome: "Plantação toda morreu", emoji: "🥀", cor: "from-orange-500 to-red-700" },
        contexto: "Sem chuva, plantação perde tudo e família fica sem comida.",
        pecaCertaId: "ex",
        feedbackAcerto: "Sim! Seca expulsa do sertão = EXPULSÃO.",
        feedbackErro: "Seca faz sair = EXPULSÃO.",
      },
      {
        id: "r2",
        municipioA: { nome: "Fábrica de carros contratando", emoji: "🚗", cor: "from-slate-600 to-slate-800" },
        municipioB: { nome: "Salário fixo mensal", emoji: "💰", cor: "from-emerald-500 to-teal-700" },
        contexto: "Empresa em SP anuncia 5 mil vagas com carteira assinada.",
        pecaCertaId: "at",
        feedbackAcerto: "Correto. Emprego bom PUXA = ATRAÇÃO.",
        feedbackErro: "Emprego bom = ATRAÇÃO da cidade.",
      },
      {
        id: "r3",
        municipioA: { nome: "Tratores substituíram trabalhadores", emoji: "🚜", cor: "from-amber-600 to-orange-800" },
        municipioB: { nome: "50 famílias perderam emprego", emoji: "😔", cor: "from-orange-500 to-red-700" },
        contexto: "Fazenda comprou trator moderno e demitiu quase todos os trabalhadores.",
        pecaCertaId: "ex",
        feedbackAcerto: "Sim. Perder emprego rural = EXPULSÃO.",
        feedbackErro: "Sem emprego rural = EXPULSÃO.",
      },
      {
        id: "r4",
        municipioA: { nome: "Hospital moderno na cidade", emoji: "🏥", cor: "from-slate-600 to-slate-800" },
        municipioB: { nome: "Escola pública funcionando", emoji: "🏫", cor: "from-emerald-500 to-teal-700" },
        contexto: "Cidade oferece hospital 24h e escolas com merenda pros filhos.",
        pecaCertaId: "at",
        feedbackAcerto: "Isso. Serviços urbanos ATRAEM = ATRAÇÃO.",
        feedbackErro: "Hospital + escola = ATRAÇÃO da cidade.",
      },
      {
        id: "r5",
        municipioA: { nome: "Violência de milícia no sertão", emoji: "⚠️", cor: "from-amber-600 to-orange-800" },
        municipioB: { nome: "Grileiros tomando as terras", emoji: "🏴", cor: "from-orange-500 to-red-700" },
        contexto: "Milícia armada expulsa moradores do assentamento pra tomar as terras.",
        pecaCertaId: "ex",
        feedbackAcerto: "Sim. Violência expulsa = EXPULSÃO.",
        feedbackErro: "Violência que faz sair = EXPULSÃO.",
      },
      {
        id: "r6",
        municipioA: { nome: "Construção de Brasília em 1958", emoji: "🏗️", cor: "from-slate-600 to-slate-800" },
        municipioB: { nome: "50 mil vagas de operário", emoji: "👷", cor: "from-emerald-500 to-teal-700" },
        contexto: "Obra do século oferece emprego imediato pra qualquer trabalhador migrante.",
        pecaCertaId: "at",
        feedbackAcerto: "Correto. Obra gigante = ATRAÇÃO — nasce a figura do candango.",
        feedbackErro: "Emprego em massa = ATRAÇÃO. Brasília atraiu os candangos.",
      },
    ],
    falaFinal: "6 rodadas! Você diferencia expulsão e atração como um demógrafo.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Pizza da população brasileira: em 1950, onde morava a maioria? E hoje?",
    instrucao: "Toque nas fatias",
    fotoUrl: imgMapa,
    fatias: [
      {
        id: "campo1950",
        rotulo: "Campo em 1950 (~64%)",
        emoji: "🌾",
        percentual: 64,
        cor: "#059669",
        descricao:
          "Em 1950, 64% dos brasileiros viviam no campo. Trabalhavam com agricultura, criação e pesca.",
        exemplos: ["🌾 Roça", "🐄 Gado", "🎣 Pesca"],
      },
      {
        id: "cidade2020",
        rotulo: "Cidade em 2020 (~85%)",
        emoji: "🏙️",
        percentual: 85,
        cor: "#0f766e",
        descricao:
          "Em 2020, mais de 85% dos brasileiros vivem nas cidades. O êxodo rural INVERTEU o mapa.",
        exemplos: ["🏙️ Centro", "🏭 Fábrica", "🚇 Metrô"],
      },
    ],
    falaFinal: "O Brasil INVERTEU: era rural, virou urbano em menos de 100 anos.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais pra conquistar a insígnia dos Caminhos do Próprio País.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgCandangos,
    perguntas: [
      {
        id: "av1",
        pergunta: "Qual apelido carinhoso receberam os trabalhadores migrantes que construíram Brasília?",
        opcoes: [
          { id: "a", texto: "Bandeirantes modernos.", correta: false },
          { id: "b", texto: "Candangos.", correta: true },
          { id: "c", texto: "Tropeiros gauchos.", correta: false },
        ],
        feedbackAcerto: "Correto! CANDANGOS — pioneirismo e força.",
        feedbackErro: "Bandeirantes/tropeiros são de séculos passados. Brasília = CANDANGOS.",
      },
      {
        id: "av2",
        pergunta: "Como se chama o movimento em massa do CAMPO pras CIDADES?",
        opcoes: [
          { id: "a", texto: "Imigração.", correta: false },
          { id: "b", texto: "Êxodo Rural.", correta: true },
          { id: "c", texto: "Diáspora.", correta: false },
        ],
        feedbackAcerto: "Isso. Campo→cidade = ÊXODO RURAL.",
        feedbackErro: "Imigração é entre países; diáspora é forçada. Campo→cidade = ÊXODO RURAL.",
      },
      {
        id: "av3",
        pergunta: "Que fórmula explica QUALQUER migração humana?",
        opcoes: [
          { id: "a", texto: "Só sorte.", correta: false },
          { id: "b", texto: "Fatores de EXPULSÃO + fatores de ATRAÇÃO.", correta: true },
          { id: "c", texto: "Só clima quente.", correta: false },
        ],
        feedbackAcerto: "Perfeito. EXPULSÃO + ATRAÇÃO = fórmula da migração.",
        feedbackErro: "Não é sorte nem clima. É EXPULSÃO (empurra) + ATRAÇÃO (puxa).",
      },
    ],
    selo: {
      nome: "Caminhos do Próprio País",
      subtitulo: "Insígnia das Migrações Internas",
      emoji: "🏗️",
      cor: "from-amber-400 to-orange-600",
      fotoUrl: imgCandangos,
    },
    falaFinal:
      "Insígnia conquistada! Página 6 restaurada. O sexto ponto brilha no mapa: Os Caminhos do Próprio País.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Caminhos do Próprio País" },
};
