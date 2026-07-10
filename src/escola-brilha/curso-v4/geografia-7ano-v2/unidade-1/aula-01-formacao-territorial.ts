import type { AulaGeoV1 } from "../../types";
import formacaoTerritorial from "@/assets/geografia-7ano/formacao-territorial.jpg";

/**
 * Geografia · 7º Ano · Unidade 1 · Aula 01
 * Formação Territorial do Brasil e Fronteiras
 * BNCC: EF07GE01, EF07GE02
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-formacao-territorial",
  titulo: "Formação Territorial do Brasil",
  iconeTrilha: "🗺️",
  bncc: ["EF07GE01", "EF07GE02"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Em 1494, uma linha imaginária dividiu o mundo em dois. E o Brasil?",
    mapaUrl: formacaoTerritorial,
    imagemDestaqueUrl: formacaoTerritorial,
    aurora:
      "Explorador, o Brasil que você vê no mapa hoje tem 8,5 milhões de km². Mas em 1500, quando os portugueses chegaram, o território deles era MUITO menor. Uma linha vertical desenhada em cima de um papel na Espanha decidia até onde Portugal podia ir.",
    falaFinal: "Como um país passa de 'faixa litorânea' pra 'gigante continental'? Bora entender.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Antes do território atual, quem MAIS ajudou o Brasil a crescer pro interior?",
    pergunta: "Quem expandiu o Brasil pra dentro do continente?",
    opcoes: [
      { id: "portugueses", titulo: "Só os reis portugueses", subtitulo: "com ordens diretas de Lisboa", emoji: "👑", cor: "from-blue-400 to-indigo-600" },
      { id: "bandeirantes", titulo: "BANDEIRANTES paulistas", subtitulo: "caçando índios e ouro no interior", emoji: "⚔️", cor: "from-amber-400 to-orange-600" },
    ],
    respostaCerta: "bandeirantes",
    feedbackAcerto: "Isso! Bandeirantes furaram a linha de Tordesilhas e ganharam quase 5 milhões de km² pro Brasil.",
    feedbackErro: "Os reis assinaram tratados, mas quem realmente andou e conquistou o interior foram os bandeirantes.",
    falaFinal: "Uma expansão feita a pé, com armas, sede de ouro — e muitos conflitos.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos que explicam como o Brasil ficou desse tamanho.",
    instrucao: "Leia cada caderno",
    cadernos: [
      {
        id: "tordesilhas",
        capa: "1. Tordesilhas (1494)",
        emoji: "📜",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "TRATADO DE TORDESILHAS: linha vertical acertada entre Portugal e Espanha, 370 léguas a oeste de Cabo Verde. Tudo a leste era de Portugal, tudo a oeste era da Espanha.",
        exemplo: "Ex.: pela linha, Portugal ficava só com uma faixa do Nordeste até SC.",
      },
      {
        id: "bandeirantes",
        capa: "2. Bandeirantes",
        emoji: "⚔️",
        cor: "from-red-500 to-rose-700",
        conteudo:
          "BANDEIRANTES: expedições paulistas (séc. XVII–XVIII) que entraram fundo no interior atrás de índios pra escravizar e, depois, ouro e pedras preciosas.",
        exemplo: "Ex.: chegaram a MG, GO, MT e até Amazônia — muito além de Tordesilhas.",
      },
      {
        id: "uti-possidetis",
        capa: "3. Uti Possidetis",
        emoji: "🏴",
        cor: "from-emerald-500 to-green-700",
        conteudo:
          "UTI POSSIDETIS (do latim, 'quem ocupa, possui'): princípio jurídico que diz que a terra é de quem já mora e trabalha nela, não de quem só assinou papel.",
        exemplo: "Ex.: bandeirantes já tinham cidades no interior → aquela terra virou brasileira.",
      },
      {
        id: "madri",
        capa: "4. Tratado de Madri (1750)",
        emoji: "🖋️",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "TRATADO DE MADRI: substituiu Tordesilhas. Aplicou o Uti Possidetis e desenhou as fronteiras que o Brasil tem HOJE (com pequenos ajustes depois).",
        exemplo: "Ex.: Brasil ganhou quase 5 milhões de km² só nesse tratado.",
      },
    ],
    falaFinal: "Tordesilhas, bandeirantes, uti possidetis, Madri. Essa é a linha do tempo.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada momento da expansão. Ouça o que aconteceu.",
    instrucao: "Toque em cada balão",
    mapaUrl: formacaoTerritorial,
    pontos: [
      {
        id: "tordesilhas",
        x: 35,
        y: 40,
        emoji: "📜",
        cor: "from-amber-500 to-orange-700",
        titulo: "1494 — Linha de Tordesilhas",
        texto: "Portugal ficava com uma faixa fina do litoral leste. Nada de Amazônia, nada de Centro-Oeste.",
      },
      {
        id: "bandeiras",
        x: 55,
        y: 55,
        emoji: "⚔️",
        cor: "from-red-500 to-rose-700",
        titulo: "1600–1700 — Bandeiras paulistas",
        texto: "Saíram de São Paulo atrás de índios e ouro. Chegaram em MG, GO, MT, RO. Fundaram vilas.",
      },
      {
        id: "ouro",
        x: 60,
        y: 45,
        emoji: "💰",
        cor: "from-yellow-500 to-amber-700",
        titulo: "1700 — Ciclo do Ouro em MG",
        texto: "Ouro descoberto em Minas Gerais atraiu gente do mundo todo. Vilas viraram cidades ricas.",
      },
      {
        id: "madri",
        x: 45,
        y: 70,
        emoji: "🖋️",
        cor: "from-sky-500 to-blue-700",
        titulo: "1750 — Tratado de Madri",
        texto: "Espanha reconheceu: quem ocupava era dono. Brasil ganhou fronteiras quase iguais às de hoje.",
      },
    ],
    falaFinal: "4 marcos, 250 anos, um país cinco vezes maior.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de historiador.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "O Tratado de Tordesilhas (1494) foi assinado entre:",
        cards: [
          { id: "a", emoji: "🇵🇹", titulo: "Portugal e Espanha", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🇫🇷", titulo: "Portugal e França", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "🇬🇧", titulo: "Portugal e Inglaterra", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a",
        feedbackAcerto: "Isso! O Papa mediou o acordo entre as duas coroas ibéricas.",
        feedbackErro: "Só Portugal e Espanha assinaram. França e Inglaterra ficaram de fora.",
      },
      {
        id: "q2",
        pergunta: "Os bandeirantes saíam principalmente de:",
        cards: [
          { id: "a", emoji: "🏙️", titulo: "São Paulo", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🌊", titulo: "Salvador", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "⛰️", titulo: "Ouro Preto", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a",
        feedbackAcerto: "Boa! Vila de São Paulo de Piratininga — base das bandeiras.",
        feedbackErro: "Salvador era capital; Ouro Preto veio depois. Bandeirantes = paulistas.",
      },
      {
        id: "q3",
        pergunta: "Uti Possidetis significa:",
        cards: [
          { id: "a", emoji: "🏴", titulo: "Quem ocupa, possui", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "📜", titulo: "Quem assina, ganha", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "💰", titulo: "Quem paga, leva", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a",
        feedbackAcerto: "Isso! Ocupação real vale mais que linha desenhada no papel.",
        feedbackErro: "É 'quem ocupa possui' — a chave da expansão brasileira.",
      },
    ],
    falaFinal: "Radar ok. Vamos ao mapa.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Os bandeirantes chegaram nesses 4 estados. Marque quais.",
    instrucao: "Acenda os estados desbravados pelos bandeirantes",
    missao: {
      tipo: "selecionar",
      siglas: ["MG", "GO", "MT", "RO"],
      pergunta: "Quais estados atuais tiveram vilas fundadas pelos bandeirantes?",
    },
    falaFinal:
      "MG (ouro), GO (mineração e ocupação), MT e RO (rota das monções). Sem essas bandeiras, o Brasil pararia em SP.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize a formação territorial do Brasil em ordem cronológica.",
    instrucao: "Arraste cada evento pra ordem certa",
    pergunta: "Do primeiro tratado à consolidação das fronteiras:",
    paradas: [
      {
        id: "tordesilhas",
        emoji: "📜",
        rotulo: "1. Tratado de Tordesilhas",
        descricao: "1494. Portugal e Espanha dividem o mundo em dois. Brasil fica só com uma faixa litorânea.",
      },
      {
        id: "bandeiras",
        emoji: "⚔️",
        rotulo: "2. Bandeiras paulistas",
        descricao: "Séculos XVII e XVIII. Paulistas invadem o interior atrás de índios e minérios.",
      },
      {
        id: "ouro",
        emoji: "💰",
        rotulo: "3. Ciclo do Ouro em MG",
        descricao: "1700. Descoberta de ouro atrai migração e consolida ocupação do interior.",
      },
      {
        id: "madri",
        emoji: "🖋️",
        rotulo: "4. Tratado de Madri",
        descricao: "1750. Aplica uti possidetis. Fronteiras ficam quase iguais às atuais.",
      },
      {
        id: "atual",
        emoji: "🇧🇷",
        rotulo: "5. Brasil atual",
        descricao: "Pequenos ajustes até 1909 (Acre). Território final: 8,5 milhões de km².",
      },
    ],
    ordemCerta: ["tordesilhas", "bandeiras", "ouro", "madri", "atual"],
    feedbackAcerto: "Perfeito! Do papel (1494) ao gigante continental (hoje).",
    feedbackErro: "Comece por Tordesilhas (1494) e termine no Brasil atual.",
    falaFinal: "5 marcos, 400 anos de expansão. Nenhum país cresceu assim na América.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com atenção. Marque as palavras-chave.",
    tituloLivro: "📘 Manual do Território",
    subtitulo: "Capítulo 1 — Como o Brasil ficou desse tamanho",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Em 1494, o TRATADO DE TORDESILHAS dividiu as terras 'descobertas' entre PORTUGAL e ESPANHA. Ao Brasil, coube apenas uma FAIXA LITORÂNEA.",
        chaves: ["tordesilhas", "portugal", "espanha", "faixa litorânea"],
      },
      {
        id: "p2",
        texto:
          "No século XVII, os BANDEIRANTES paulistas entraram no interior atrás de INDÍGENAS pra escravizar e depois OURO. Chegaram a Minas Gerais, Goiás e Mato Grosso.",
        chaves: ["bandeirantes", "indígenas", "ouro", "interior"],
      },
      {
        id: "p3",
        texto:
          "Pelo princípio do UTI POSSIDETIS, quem OCUPA a terra é dono dela — não quem só assinou papel. As vilas fundadas pelos bandeirantes tornaram-se BRASILEIRAS.",
        chaves: ["uti possidetis", "ocupa", "brasileiras"],
      },
      {
        id: "p4",
        texto:
          "Em 1750, o TRATADO DE MADRI substituiu Tordesilhas. O Brasil ganhou quase 5 MILHÕES DE KM² e ficou com FRONTEIRAS quase iguais às atuais.",
        chaves: ["madri", "5 milhões", "fronteiras"],
      },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo HISTORIADOR EXPRESS! Qual conceito explica cada situação?",
    instrucao: "⏱️ Escolha o conceito certo",
    duracaoSegundos: 15,
    pecas: [
      { id: "tord", emoji: "📜", rotulo: "Tordesilhas" },
      { id: "band", emoji: "⚔️", rotulo: "Bandeirantes" },
      { id: "uti", emoji: "🏴", rotulo: "Uti Possidetis" },
      { id: "madri", emoji: "🖋️", rotulo: "Tratado de Madri" },
      { id: "ouro", emoji: "💰", rotulo: "Ciclo do Ouro" },
      { id: "acre", emoji: "🌿", rotulo: "Anexação do Acre" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "1494", emoji: "📅", cor: "from-amber-400 to-orange-600" },
        municipioB: { nome: "Linha imaginária", emoji: "✏️", cor: "from-red-400 to-rose-600" },
        contexto: "Papa mediou acordo entre Portugal e Espanha dividindo o mundo em dois. Que documento é esse?",
        pecaCertaId: "tord",
        feedbackAcerto: "Isso! TORDESILHAS (1494) — a primeira linha divisória.",
        feedbackErro: "1494 + linha imaginária + Portugal/Espanha = TORDESILHAS.",
      },
      {
        id: "r2",
        municipioA: { nome: "Saíam de SP", emoji: "🏙️", cor: "from-emerald-400 to-teal-600" },
        municipioB: { nome: "Caçavam índios", emoji: "🏹", cor: "from-red-400 to-rose-600" },
        contexto: "Expedições paulistas que entraram no interior e ampliaram o território:",
        pecaCertaId: "band",
        feedbackAcerto: "Boa! BANDEIRANTES — os desbravadores do interior.",
        feedbackErro: "Paulistas + interior + índios/ouro = BANDEIRANTES.",
      },
      {
        id: "r3",
        municipioA: { nome: "'Quem ocupa possui'", emoji: "🏴", cor: "from-sky-400 to-indigo-600" },
        municipioB: { nome: "Ocupação real vale", emoji: "🏘️", cor: "from-emerald-400 to-teal-600" },
        contexto: "Princípio jurídico que garantiu ao Brasil as terras ocupadas pelos bandeirantes:",
        pecaCertaId: "uti",
        feedbackAcerto: "Isso! UTI POSSIDETIS — a chave da expansão.",
        feedbackErro: "'Quem ocupa possui' = UTI POSSIDETIS.",
      },
      {
        id: "r4",
        municipioA: { nome: "1750", emoji: "📅", cor: "from-sky-400 to-blue-600" },
        municipioB: { nome: "Substituiu Tordesilhas", emoji: "📄", cor: "from-purple-400 to-fuchsia-600" },
        contexto: "Tratado que consolidou as fronteiras atuais do Brasil, aplicando o uti possidetis:",
        pecaCertaId: "madri",
        feedbackAcerto: "Boa! TRATADO DE MADRI (1750) — as fronteiras de hoje.",
        feedbackErro: "1750 + substituiu Tordesilhas = TRATADO DE MADRI.",
      },
      {
        id: "r5",
        municipioA: { nome: "Ouro em MG", emoji: "💰", cor: "from-yellow-400 to-amber-600" },
        municipioB: { nome: "Vilas viraram cidades", emoji: "🏛️", cor: "from-orange-400 to-red-600" },
        contexto: "Séc. XVIII. Descoberta de metal precioso atraiu migração massiva pro Sudeste:",
        pecaCertaId: "ouro",
        feedbackAcerto: "Isso! CICLO DO OURO — Ouro Preto, Mariana, Diamantina.",
        feedbackErro: "Ouro em Minas Gerais = CICLO DO OURO.",
      },
      {
        id: "r6",
        municipioA: { nome: "1903", emoji: "📅", cor: "from-emerald-400 to-green-600" },
        municipioB: { nome: "Comprado da Bolívia", emoji: "💵", cor: "from-amber-400 to-orange-600" },
        contexto: "Última grande anexação territorial: seringueiros brasileiros tomam a região e o Barão do Rio Branco negocia:",
        pecaCertaId: "acre",
        feedbackAcerto: "Isso! ACRE — comprado por 2 milhões de libras (Tratado de Petrópolis).",
        feedbackErro: "1903 + Bolívia + Rio Branco = anexação do ACRE.",
      },
    ],
    falaFinal: "6 marcos históricos, 6 acertos. Você domina a formação do território.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza do TERRITÓRIO: como o Brasil dobrou de tamanho.",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "tordesilhas",
        rotulo: "Brasil de Tordesilhas (1494)",
        emoji: "📜",
        percentual: 30,
        cor: "#f59e0b",
        descricao: "Faixa litorânea do NE até SC. Cerca de 30% do território atual. Só quem morava perto da costa era brasileiro.",
        exemplos: ["🌊 Litoral Nordeste", "🏖️ Litoral Sudeste", "⚓ Salvador (capital)"],
      },
      {
        id: "expansao",
        rotulo: "Ganho pela expansão (1500–1909)",
        emoji: "⚔️",
        percentual: 70,
        cor: "#059669",
        descricao: "Bandeirantes, ciclo do ouro e tratados (Madri, Petrópolis). 70% do território incorporado via ocupação real e acordos diplomáticos.",
        exemplos: ["⛰️ Minas Gerais", "🌾 Centro-Oeste", "🌳 Amazônia", "🌿 Acre (1903)"],
      },
    ],
    falaFinal: "3 fatias, 400 anos. Brasil = ocupação + tratado + acordo diplomático.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Guardião do Território.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "O Tratado de Tordesilhas (1494) dividiu terras entre:",
        opcoes: [
          { id: "a", texto: "Portugal e Espanha", correta: true },
          { id: "b", texto: "Portugal e França", correta: false },
          { id: "c", texto: "Portugal e Inglaterra", correta: false },
        ],
        feedbackAcerto: "Isso! Papa mediou o acordo entre as duas coroas ibéricas.",
        feedbackErro: "França e Inglaterra chegaram depois. Tordesilhas = Portugal + Espanha.",
      },
      {
        id: "av2",
        pergunta: "O princípio 'quem ocupa, possui' é conhecido como:",
        opcoes: [
          { id: "a", texto: "Tordesilhas", correta: false },
          { id: "b", texto: "Uti Possidetis", correta: true },
          { id: "c", texto: "Ciclo do Ouro", correta: false },
        ],
        feedbackAcerto: "Perfeito! Foi a base do Tratado de Madri.",
        feedbackErro: "É UTI POSSIDETIS — princípio que garantiu ao Brasil as terras ocupadas.",
      },
      {
        id: "av3",
        pergunta: "As fronteiras atuais do Brasil foram consolidadas principalmente pelo:",
        opcoes: [
          { id: "a", texto: "Tratado de Tordesilhas", correta: false },
          { id: "b", texto: "Tratado de Madri (1750)", correta: true },
          { id: "c", texto: "Ciclo do Ouro", correta: false },
        ],
        feedbackAcerto: "Isso! Madri desenhou o mapa que conhecemos hoje.",
        feedbackErro: "Tordesilhas dividia diferente. MADRI (1750) consolidou as fronteiras atuais.",
      },
    ],
    selo: {
      nome: "Guardião do Território",
      subtitulo: "Insígnia do Cartógrafo Histórico",
      emoji: "🏴",
      cor: "from-amber-400 to-orange-600",
    },
    falaFinal: "Insígnia conquistada! Você entende como o Brasil ficou desse tamanho.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Guardião do Território" },
};
