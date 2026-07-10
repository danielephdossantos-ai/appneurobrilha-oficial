import type { AulaGeoV1 } from "../../types";

const IMG_HIDRO = "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800";
const IMG_EOLICA = "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800";
const IMG_SOLAR = "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800";
const IMG_POLUICAO = "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800";

/**
 * Geografia · 5º Ano · Unidade 4 · Aula 02
 * "Energia e Meio Ambiente" — EF05GE07
 */
export const aula02: AulaGeoV1 = {
  slug: "aula-02-impactos-energia",
  titulo: "Energia e Meio Ambiente",
  iconeTrilha: "🌱",
  bncc: ["EF05GE07"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe a hidrelétrica. Alagou uma floresta inteira pra gerar energia.",
    mapaUrl: IMG_HIDRO,
    imagemDestaqueUrl: IMG_HIDRO,
    aurora:
      "Explorador, TODA fonte de energia tem um IMPACTO. Hidrelétrica alaga floresta e desabriga famílias. Termelétrica polui o ar. Solar e eólica são limpas mas precisam de espaço. Escolher energia = escolher o futuro do planeta.",
    falaFinal: "Bora ver o preço ambiental de cada tipo de energia.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: qual dessas duas energias é MAIS LIMPA pro meio ambiente?",
    pergunta: "Qual é mais limpa?",
    opcoes: [
      {
        id: "solar",
        titulo: "SOLAR",
        subtitulo: "painéis captando o sol",
        emoji: "☀️",
        cor: "from-yellow-400 to-orange-600",
      },
      {
        id: "carvao",
        titulo: "CARVÃO",
        subtitulo: "queima e faz fumaça preta",
        emoji: "🏭",
        cor: "from-slate-500 to-gray-700",
      },
    ],
    respostaCerta: "solar",
    feedbackAcerto: "Isso! SOLAR não emite gases poluentes. É energia limpa.",
    feedbackErro: "Carvão SUJA o ar. Solar é LIMPA.",
    falaFinal: "Limpo x sujo. É a escolha que a humanidade precisa fazer.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos de energia sustentável.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "renov",
        capa: "1. Renovável",
        emoji: "♻️",
        cor: "from-emerald-500 to-green-700",
        conteudo:
          "RENOVÁVEL é fonte que NÃO ACABA: sol brilha, vento sopra, rio corre. A natureza repõe sempre.",
        exemplo: "Ex.: solar, eólica, hidrelétrica, biomassa.",
        fotoUrl: IMG_SOLAR,
      },
      {
        id: "fossil",
        capa: "2. Combustível fóssil",
        emoji: "⛽",
        cor: "from-slate-500 to-gray-700",
        conteudo:
          "FÓSSIL é energia formada há milhões de anos: petróleo, carvão, gás natural. Uma vez usada, acabou. E polui.",
        exemplo: "Ex.: gasolina do carro, gás da cozinha, carvão das termelétricas.",
        fotoUrl: IMG_POLUICAO,
      },
      {
        id: "impacto",
        capa: "3. Impacto ambiental",
        emoji: "🌍",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "IMPACTO é a MUDANÇA que a atividade humana causa na natureza. Pode ser positiva ou negativa.",
        exemplo: "Ex.: barragem alaga floresta = impacto negativo. Reflorestar = positivo.",
      },
      {
        id: "sustent",
        capa: "4. Sustentabilidade",
        emoji: "🌱",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "SUSTENTABILIDADE é usar os recursos SEM ACABAR com eles. Pensar nas próximas gerações.",
        exemplo: "Ex.: usar energia solar em vez de queimar carvão.",
        fotoUrl: IMG_EOLICA,
      },
    ],
    falaFinal: "Renovável, fóssil, impacto, sustentabilidade. 4 chaves.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Toque em cada tipo de energia pra ver seu impacto real.",
    instrucao: "Toque nos pontos",
    mapaUrl: IMG_HIDRO,
    pontos: [
      {
        id: "hidro",
        x: 25,
        y: 40,
        emoji: "💧",
        cor: "from-sky-500 to-blue-700",
        titulo: "HIDRELÉTRICA (Itaipu, Belo Monte)",
        texto: "Barragem alaga áreas enormes de floresta, desabriga indígenas e ribeirinhos. Mas gera muita energia limpa.",
      },
      {
        id: "term",
        x: 50,
        y: 55,
        emoji: "🏭",
        cor: "from-slate-500 to-gray-700",
        titulo: "TERMELÉTRICA (carvão, gás)",
        texto: "Queima combustível fóssil, emite CO₂ e polui o ar. Só acionada em época de seca.",
        fotoUrl: IMG_POLUICAO,
      },
      {
        id: "eolica",
        x: 70,
        y: 30,
        emoji: "💨",
        cor: "from-sky-400 to-cyan-600",
        titulo: "EÓLICA (RN, BA, CE)",
        texto: "Torres captam vento no litoral do Nordeste. Zero poluição — só barulho.",
        fotoUrl: IMG_EOLICA,
      },
      {
        id: "solar",
        x: 40,
        y: 20,
        emoji: "☀️",
        cor: "from-yellow-500 to-orange-600",
        titulo: "SOLAR (fazendas e telhados)",
        texto: "Painéis captam sol. Nordeste tem sol o ano inteiro — potencial gigante.",
        fotoUrl: IMG_SOLAR,
      },
    ],
    falaFinal: "Cada energia tem PRÓ e CONTRA. A escolha define o futuro.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de impacto.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual dessas fontes é RENOVÁVEL?",
        cards: [
          { id: "sol", emoji: "☀️", titulo: "Sol", cor: "from-yellow-500 to-orange-600" },
          { id: "pet", emoji: "🛢️", titulo: "Petróleo", cor: "from-slate-500 to-gray-700" },
          { id: "car", emoji: "🏭", titulo: "Carvão", cor: "from-red-500 to-rose-700" },
        ],
        correta: "sol",
        feedbackAcerto: "Isso! Sol é RENOVÁVEL — brilha sempre.",
        feedbackErro: "Petróleo e carvão são FÓSSEIS (acabam). Sol é RENOVÁVEL.",
      },
      {
        id: "q2",
        pergunta: "Hidrelétrica gera energia LIMPA, mas causa impacto principal em...",
        fotoUrl: IMG_HIDRO,
        cards: [
          { id: "flor", emoji: "🌳", titulo: "Alagar floresta", cor: "from-emerald-500 to-green-700" },
          { id: "ar", emoji: "💨", titulo: "Poluir o ar", cor: "from-slate-500 to-gray-700" },
          { id: "lixo", emoji: "🗑️", titulo: "Gerar lixo tóxico", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "flor",
        feedbackAcerto: "Perfeito! Barragem ALAGA floresta e desabriga gente.",
        feedbackErro: "Hidrelétrica não polui o ar. O impacto é ALAGAR terra.",
      },
      {
        id: "q3",
        pergunta: "Termelétrica a carvão polui principalmente...",
        cards: [
          { id: "ar", emoji: "💨", titulo: "O ar (CO₂)", cor: "from-slate-500 to-gray-700" },
          { id: "solo", emoji: "🌱", titulo: "Só o solo", cor: "from-amber-500 to-orange-700" },
          { id: "n", emoji: "✨", titulo: "Não polui nada", cor: "from-emerald-500 to-green-700" },
        ],
        correta: "ar",
        feedbackAcerto: "Isso! Queima solta CO₂ no AR = aquecimento global.",
        feedbackErro: "Queimar carvão SOLTA CO₂ no AR.",
      },
    ],
    falaFinal: "Radar afiado! Você entende impactos.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Os 4 estados que MAIS produzem energia EÓLICA no Brasil. Toca em cada um.",
    instrucao: "Acenda os campeões da energia do vento",
    missao: {
      tipo: "selecionar",
      siglas: ["RN", "BA", "CE", "PI"],
      pergunta: "Quais estados produzem MAIS energia eólica?",
    },
    falaFinal: "RN, BA, CE, PI — o Nordeste virou capital do vento!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize a evolução da matriz energética brasileira, do mais poluente ao mais limpo.",
    instrucao: "Toque na ordem",
    pergunta: "Do mais SUJO ao mais LIMPO:",
    paradas: [
      {
        id: "carvao",
        emoji: "🏭",
        rotulo: "1. Carvão",
        descricao: "Mais poluente. Solta muito CO₂. Está sendo desativado no mundo.",
      },
      {
        id: "petroleo",
        emoji: "🛢️",
        rotulo: "2. Petróleo",
        descricao: "Fóssil. Polui, mas menos que carvão. Usado em carros.",
      },
      {
        id: "gas",
        emoji: "🔥",
        rotulo: "3. Gás natural",
        descricao: "Fóssil, mas o menos poluente dos três.",
      },
      {
        id: "hidro",
        emoji: "💧",
        rotulo: "4. Hidrelétrica",
        descricao: "Renovável, mas alaga floresta na construção.",
      },
      {
        id: "sunwind",
        emoji: "☀️",
        rotulo: "5. Solar + eólica",
        descricao: "As mais LIMPAS. Zero emissão de CO₂. Futuro do planeta.",
      },
    ],
    ordemCerta: ["carvao", "petroleo", "gas", "hidro", "sunwind"],
    feedbackAcerto: "Ordem perfeita! Do preto ao verde.",
    feedbackErro: "Repense: carvão mais sujo, solar mais limpo.",
    falaFinal: "5 níveis, 1 direção: rumo à energia limpa.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia e marque as palavras-chave.",
    tituloLivro: "📔 Atlas do Eco-Cidadão",
    subtitulo: "Página 5 — Energia Sustentável",
    paragrafos: [
      {
        id: "p1",
        texto: "RENOVÁVEL é fonte que não acaba: sol, vento, água. FÓSSIL acaba e polui: petróleo, carvão, gás.",
        chaves: ["renovável", "fóssil"],
      },
      {
        id: "p2",
        texto: "HIDRELÉTRICA gera 60% da energia do Brasil, mas ALAGA floresta e desabriga gente.",
        chaves: ["hidrelétrica", "alaga"],
      },
      {
        id: "p3",
        texto: "TERMELÉTRICA a carvão POLUI o ar com CO₂ e piora o AQUECIMENTO GLOBAL.",
        chaves: ["termelétrica", "co₂", "aquecimento"],
      },
      {
        id: "p4",
        texto: "SOLAR e EÓLICA são as fontes mais LIMPAS. O Nordeste tem sol e vento de sobra.",
        chaves: ["solar", "eólica", "limpas"],
      },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo ECO-DECISÃO! Cada rodada, escolha a energia MAIS SUSTENTÁVEL pro caso.",
    instrucao: "⏱️ Que energia usar?",
    duracaoSegundos: 12,
    pecas: [
      { id: "solar", emoji: "☀️", rotulo: "Solar" },
      { id: "eolica", emoji: "💨", rotulo: "Eólica" },
      { id: "hidro", emoji: "💧", rotulo: "Hidrelétrica" },
      { id: "biomassa", emoji: "🌾", rotulo: "Biomassa" },
      { id: "gas", emoji: "🔥", rotulo: "Gás natural" },
      { id: "carvao", emoji: "🏭", rotulo: "Carvão" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Casa no", emoji: "🏠", cor: "from-yellow-400 to-orange-600" },
        municipioB: { nome: "sertão do RN", emoji: "☀️", cor: "from-amber-400 to-orange-600" },
        contexto: "Casa em cidade com muito sol o ano todo. Melhor opção?",
        pecaCertaId: "solar",
        feedbackAcerto: "Isso! Sertão + sol = ENERGIA SOLAR.",
        feedbackErro: "Muito sol = ENERGIA SOLAR.",
      },
      {
        id: "r2",
        municipioA: { nome: "Litoral", emoji: "🌊", cor: "from-sky-400 to-blue-600" },
        municipioB: { nome: "com vento forte", emoji: "💨", cor: "from-cyan-400 to-teal-600" },
        contexto: "Litoral do Ceará com vento constante. Melhor opção?",
        pecaCertaId: "eolica",
        feedbackAcerto: "Perfeito! Vento no litoral = ENERGIA EÓLICA.",
        feedbackErro: "Vento forte = ENERGIA EÓLICA.",
      },
      {
        id: "r3",
        municipioA: { nome: "Cana", emoji: "🌾", cor: "from-emerald-400 to-green-600" },
        municipioB: { nome: "de açúcar em SP", emoji: "🚜", cor: "from-amber-400 to-orange-600" },
        contexto: "Usina de cana quer aproveitar o bagaço. Melhor uso?",
        pecaCertaId: "biomassa",
        feedbackAcerto: "Isso! Bagaço de cana vira BIOMASSA (energia limpa).",
        feedbackErro: "Restos vegetais = BIOMASSA.",
      },
      {
        id: "r4",
        municipioA: { nome: "Rio", emoji: "🏞️", cor: "from-sky-400 to-blue-600" },
        municipioB: { nome: "grande e caudaloso", emoji: "💧", cor: "from-blue-400 to-indigo-600" },
        contexto: "Rio enorme com muita água. Melhor opção (aceitando o alagamento)?",
        pecaCertaId: "hidro",
        feedbackAcerto: "Boa! Rio grande = HIDRELÉTRICA.",
        feedbackErro: "Muita água = HIDRELÉTRICA.",
      },
      {
        id: "r5",
        municipioA: { nome: "Sem sol,", emoji: "☁️", cor: "from-slate-400 to-gray-600" },
        municipioB: { nome: "sem vento, sem rio", emoji: "🏙️", cor: "from-slate-500 to-gray-700" },
        contexto: "Cidade grande na emergência, precisa energia rápida. Menos ruim?",
        pecaCertaId: "gas",
        feedbackAcerto: "Isso! GÁS NATURAL é o fóssil MENOS poluente.",
        feedbackErro: "Se não tem renovável, GÁS é menos ruim que carvão.",
      },
      {
        id: "r6",
        municipioA: { nome: "Escola do ", emoji: "🏫", cor: "from-yellow-400 to-orange-600" },
        municipioB: { nome: "bairro com telhado grande", emoji: "🏢", cor: "from-amber-400 to-orange-600" },
        contexto: "Escola quer instalar energia limpa no telhado. Melhor?",
        pecaCertaId: "solar",
        feedbackAcerto: "Perfeito! Telhado + painel = SOLAR.",
        feedbackErro: "Telhado ao sol = PAINEL SOLAR.",
      },
    ],
    falaFinal: "6 decisões sustentáveis. Você é um Eco-Guardião da energia.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da MATRIZ ENERGÉTICA brasileira: de onde vem nossa eletricidade?",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "limpa",
        rotulo: "Renovável (82%)",
        emoji: "♻️",
        percentual: 82,
        cor: "#10b981",
        descricao: "Hidrelétrica, eólica, solar e biomassa. O Brasil é um dos países mais LIMPOS do mundo.",
        exemplos: ["💧 Itaipu", "💨 Vento do RN", "☀️ Sol do Nordeste"],
      },
      {
        id: "fossil",
        rotulo: "Fóssil (18%)",
        emoji: "🏭",
        percentual: 18,
        cor: "#64748b",
        descricao: "Termelétricas de gás e carvão. Usadas só quando falta chuva.",
        exemplos: ["🔥 Gás natural", "⚫ Carvão"],
      },
    ],
    falaFinal: "80% limpa! O Brasil já é um dos países mais renováveis do mundo.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Guardião da Energia Limpa.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "Fonte de energia RENOVÁVEL é:",
        opcoes: [
          { id: "a", texto: "Petróleo, carvão e gás", correta: false },
          { id: "b", texto: "Sol, vento e água", correta: true },
          { id: "c", texto: "Só carvão", correta: false },
        ],
        feedbackAcerto: "Isso! Sol, vento e água são RENOVÁVEIS.",
        feedbackErro: "Petróleo e carvão são FÓSSEIS. Renováveis = SOL, VENTO, ÁGUA.",
      },
      {
        id: "av2",
        pergunta: "Impacto ambiental da HIDRELÉTRICA é:",
        opcoes: [
          { id: "a", texto: "Alagar floresta e desabrigar comunidades", correta: true },
          { id: "b", texto: "Emitir muito CO₂ no ar", correta: false },
          { id: "c", texto: "Não tem impacto nenhum", correta: false },
        ],
        feedbackAcerto: "Perfeito! ALAGA floresta e desabriga gente.",
        feedbackErro: "Hidrelétrica não emite CO₂. Impacto é ALAGAR terra.",
      },
      {
        id: "av3",
        pergunta: "Por que investir em SOLAR e EÓLICA?",
        opcoes: [
          { id: "a", texto: "Porque só funcionam à noite", correta: false },
          { id: "b", texto: "São limpas, renováveis e não acabam", correta: true },
          { id: "c", texto: "Porque poluem menos que a água", correta: false },
        ],
        feedbackAcerto: "Isso! LIMPAS, RENOVÁVEIS e infinitas.",
        feedbackErro: "Solar e eólica são LIMPAS e RENOVÁVEIS — não acabam nunca.",
      },
    ],
    selo: {
      nome: "Guardião da Energia Limpa",
      subtitulo: "Insígnia do Explorador Eco-Cidadão",
      emoji: "🌱",
      cor: "from-emerald-400 to-green-600",
    },
    falaFinal: "Insígnia conquistada! Você defende o futuro do planeta.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Guardião da Energia Limpa" },
};
