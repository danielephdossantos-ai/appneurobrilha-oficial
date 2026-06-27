import type { ActivityLesson, PraticarOption } from "../types/activity-lesson";

/**
 * Gerador universal de ActivityLesson para 3º, 4º e 5º Ano.
 * Garante padrão EF03MA17 / EF03LP08 (5 telas) em TODAS as disciplinas
 * (CI, ER, GE, HI, LP, MA) — nunca usar conteúdo padrão 6º–9º Ano.
 *
 * Regras:
 *  - Linguagem simples e infantil (vocabulário de Ensino Fundamental I).
 *  - Sempre 3 opções coloridas com 1 correta.
 *  - Conteúdo derivado do título BNCC + tema detectado por palavras-chave.
 */

type SubjectKey = "CI" | "ER" | "GE" | "HI" | "LP" | "MA" | "AR";

const COLORS: PraticarOption["color"][] = ["green", "blue", "orange", "purple", "yellow", "red"];

function subjectFromCode(code: string): SubjectKey | null {
  const m = code.match(/^EF0\d(CI|ER|GE|HI|LP|MA|AR)\d{2,}$/i);
  return (m?.[1].toUpperCase() as SubjectKey) ?? null;
}

function gradeFromCode(code: string): "3º Ano" | "4º Ano" | "5º Ano" | null {
  const m = code.match(/^EF0(\d)/);
  if (!m) return null;
  const g = m[1];
  if (g === "3") return "3º Ano";
  if (g === "4") return "4º Ano";
  if (g === "5") return "5º Ano";
  return null;
}

const SUBJECT_NAME: Record<SubjectKey, string> = {
  CI: "Ciências",
  ER: "Ensino Religioso",
  GE: "Geografia",
  HI: "História",
  LP: "Língua Portuguesa",
  MA: "Matemática",
  AR: "Arte",
};

const SUBJECT_EMOJI: Record<SubjectKey, string> = {
  CI: "🔬",
  ER: "🕊️",
  GE: "🌎",
  HI: "📜",
  LP: "📖",
  MA: "🔢",
  AR: "🎨",
};

// ============== Pacotes temáticos por palavra-chave ==============

type Pack = {
  topic: string;
  highlight: string;
  summary: string;
  emoji: string;
  pairs: { left: string; right: string }[];
  shortText: string;
  highlights?: string[];
  tip?: string;
  exampleTitle: string;
  exampleSentences: { text: string; emoji?: string }[];
  exampleConclusion: string;
  question: string;
  options: { text: string; isCorrect: boolean }[];
};

// ----- Ciências -----
const CI_PACKS: Array<{ keys: string[]; pack: Pack }> = [
  {
    keys: ["estados da matéria", "matéria"],
    pack: {
      topic: "ESTADOS DA MATÉRIA",
      highlight: "SÓLIDO, LÍQUIDO E GÁS",
      summary: "A matéria pode mudar de forma. Vamos descobrir como!",
      emoji: "💧",
      pairs: [
        { left: "🧊 Gelo", right: "Sólido" },
        { left: "💧 Água", right: "Líquido" },
        { left: "☁️ Vapor", right: "Gás" },
      ],
      shortText: "Quando a água esquenta vira vapor. Quando o vapor esfria vira água. Quando a água congela vira gelo.",
      highlights: ["esquenta", "esfria", "congela"],
      tip: "É sempre a mesma água — só muda de forma!",
      exampleTitle: "Observe a água",
      exampleSentences: [
        { text: "Gelo → derrete → vira água", emoji: "🧊" },
        { text: "Água → ferve → vira vapor", emoji: "💧" },
      ],
      exampleConclusion: "A matéria muda de estado com calor e frio!",
      question: "O gelo é qual estado da matéria?",
      options: [
        { text: "Sólido", isCorrect: true },
        { text: "Líquido", isCorrect: false },
        { text: "Gás", isCorrect: false },
      ],
    },
  },
  {
    keys: ["animais", "animal", "vida", "reprodução"],
    pack: {
      topic: "ANIMAIS",
      highlight: "OS ANIMAIS",
      summary: "Os animais vivem em lugares diferentes e têm jeitos diferentes de viver.",
      emoji: "🐾",
      pairs: [
        { left: "🐟 Peixe", right: "Vive na água" },
        { left: "🐦 Pássaro", right: "Voa no céu" },
        { left: "🦁 Leão", right: "Vive na terra" },
      ],
      shortText: "Cada animal tem seu lugar: água, terra ou ar. E cada um come comidas diferentes.",
      highlights: ["água", "terra", "ar"],
      tip: "Observe os bichos perto de você!",
      exampleTitle: "Onde vive cada um?",
      exampleSentences: [
        { text: "Peixe → na água 🐟" },
        { text: "Pássaro → no ar 🐦" },
        { text: "Cachorro → na terra 🐕" },
      ],
      exampleConclusion: "Cada animal tem o seu habitat!",
      question: "Onde vive o peixe?",
      options: [
        { text: "Na água", isCorrect: true },
        { text: "No ar", isCorrect: false },
        { text: "Na terra", isCorrect: false },
      ],
    },
  },
  {
    keys: ["plantas", "planta"],
    pack: {
      topic: "PLANTAS",
      highlight: "AS PLANTAS",
      summary: "As plantas precisam de água, sol e terra para crescer.",
      emoji: "🌱",
      pairs: [
        { left: "🌱 Semente", right: "Começo da planta" },
        { left: "🌿 Folha", right: "Faz alimento" },
        { left: "🌸 Flor", right: "Vira fruto" },
      ],
      shortText: "A raiz pega água do solo. A folha pega luz do sol. Juntas, a planta cresce!",
      highlights: ["raiz", "folha", "sol"],
      tip: "Sem sol e sem água, a planta não vive.",
      exampleTitle: "Como a planta cresce",
      exampleSentences: [
        { text: "Semente → muda → planta 🌱" },
        { text: "Sol + água + terra = vida 🌞" },
      ],
      exampleConclusion: "Plantas precisam de cuidado!",
      question: "O que a planta precisa para crescer?",
      options: [
        { text: "Água, sol e terra", isCorrect: true },
        { text: "Só água", isCorrect: false },
        { text: "Nada", isCorrect: false },
      ],
    },
  },
  {
    keys: ["corpo humano", "saúde", "sentidos"],
    pack: {
      topic: "CORPO HUMANO",
      highlight: "NOSSO CORPO",
      summary: "Nosso corpo é incrível! Cada parte tem uma função.",
      emoji: "🧒",
      pairs: [
        { left: "👁️ Olho", right: "Vê" },
        { left: "👂 Ouvido", right: "Escuta" },
        { left: "👃 Nariz", right: "Cheira" },
      ],
      shortText: "Temos 5 sentidos: visão, audição, olfato, paladar e tato. Eles nos ajudam a conhecer o mundo!",
      highlights: ["5 sentidos"],
      tip: "Cuide do seu corpo: durma, coma bem e brinque!",
      exampleTitle: "Os 5 sentidos",
      exampleSentences: [
        { text: "Ver com os olhos 👁️" },
        { text: "Ouvir com os ouvidos 👂" },
        { text: "Sentir gosto com a boca 👅" },
      ],
      exampleConclusion: "Cada sentido tem um superpoder!",
      question: "Com qual parte do corpo enxergamos?",
      options: [
        { text: "Olhos", isCorrect: true },
        { text: "Mãos", isCorrect: false },
        { text: "Pés", isCorrect: false },
      ],
    },
  },
  {
    keys: ["água"],
    pack: {
      topic: "ÁGUA",
      highlight: "A ÁGUA",
      summary: "A água é essencial para a vida de todos os seres vivos.",
      emoji: "💧",
      pairs: [
        { left: "🚰 Beber", right: "Mata a sede" },
        { left: "🧼 Lavar", right: "Tira a sujeira" },
        { left: "🌱 Regar", right: "Faz crescer" },
      ],
      shortText: "Sem água, não há vida. Por isso devemos economizar e não desperdiçar!",
      highlights: ["economizar", "não desperdiçar"],
      tip: "Feche a torneira ao escovar os dentes!",
      exampleTitle: "Ciclo da água",
      exampleSentences: [
        { text: "Sol esquenta a água 🌞" },
        { text: "Vapor sobe e vira nuvem ☁️" },
        { text: "Chove e volta pra terra 🌧️" },
      ],
      exampleConclusion: "A água sempre volta!",
      question: "O que devemos fazer com a água?",
      options: [
        { text: "Economizar", isCorrect: true },
        { text: "Desperdiçar", isCorrect: false },
        { text: "Sujar", isCorrect: false },
      ],
    },
  },
  {
    keys: ["solo", "terra"],
    pack: {
      topic: "SOLO",
      highlight: "O SOLO",
      summary: "O solo é a camada da terra onde as plantas crescem.",
      emoji: "🌍",
      pairs: [
        { left: "🟫 Areia", right: "Soltinha" },
        { left: "🟤 Argila", right: "Grudenta" },
        { left: "🌱 Húmus", right: "Fofa e fértil" },
      ],
      shortText: "Existem vários tipos de solo. O melhor para plantar é o húmus, cheio de nutrientes!",
      highlights: ["húmus", "nutrientes"],
      tip: "O solo bom tem cheirinho de mato molhado.",
      exampleTitle: "Para que serve o solo?",
      exampleSentences: [
        { text: "Plantar comida 🌽" },
        { text: "Construir casas 🏠" },
        { text: "Sustentar a vida 🌳" },
      ],
      exampleConclusion: "O solo é precioso!",
      question: "Qual solo é melhor para plantar?",
      options: [
        { text: "Húmus", isCorrect: true },
        { text: "Areia pura", isCorrect: false },
        { text: "Pedra", isCorrect: false },
      ],
    },
  },
  {
    keys: ["sistema solar", "terra", "sol", "lua", "planeta"],
    pack: {
      topic: "SISTEMA SOLAR",
      highlight: "O UNIVERSO",
      summary: "O Sol e os planetas formam o nosso Sistema Solar.",
      emoji: "🪐",
      pairs: [
        { left: "🌞 Sol", right: "Estrela" },
        { left: "🌍 Terra", right: "Nosso planeta" },
        { left: "🌙 Lua", right: "Satélite da Terra" },
      ],
      shortText: "A Terra gira ao redor do Sol. A Lua gira ao redor da Terra. Por isso temos dia, noite e estações!",
      highlights: ["gira", "Sol", "Lua"],
      tip: "Quando a Terra gira, o Sol parece se mover no céu.",
      exampleTitle: "Dia e noite",
      exampleSentences: [
        { text: "Sol aparece → dia ☀️" },
        { text: "Sol some → noite 🌙" },
      ],
      exampleConclusion: "É a Terra girando!",
      question: "O que a Terra gira em volta?",
      options: [
        { text: "Do Sol", isCorrect: true },
        { text: "Da Lua", isCorrect: false },
        { text: "De Marte", isCorrect: false },
      ],
    },
  },
  {
    keys: ["reciclagem", "lixo"],
    pack: {
      topic: "RECICLAGEM",
      highlight: "RECICLAR É CUIDAR",
      summary: "Reciclar é transformar lixo em coisas novas e úteis.",
      emoji: "♻️",
      pairs: [
        { left: "🟦 Azul", right: "Papel" },
        { left: "🟥 Vermelho", right: "Plástico" },
        { left: "🟩 Verde", right: "Vidro" },
      ],
      shortText: "Cada cor de lixeira é para um tipo de lixo. Separar ajuda o planeta!",
      highlights: ["separar", "planeta"],
      tip: "Em casa, separe papel, plástico e orgânico.",
      exampleTitle: "Os 3 Rs",
      exampleSentences: [
        { text: "Reduzir → comprar menos" },
        { text: "Reutilizar → usar de novo" },
        { text: "Reciclar → fazer novo" },
      ],
      exampleConclusion: "Pequenas atitudes mudam o mundo!",
      question: "Garrafa pet vai em qual lixeira?",
      options: [
        { text: "Vermelha (plástico)", isCorrect: true },
        { text: "Azul (papel)", isCorrect: false },
        { text: "Verde (vidro)", isCorrect: false },
      ],
    },
  },
  {
    keys: ["alimentação", "alimento", "comida"],
    pack: {
      topic: "ALIMENTAÇÃO",
      highlight: "COMER BEM",
      summary: "Uma alimentação saudável dá energia e saúde.",
      emoji: "🥗",
      pairs: [
        { left: "🥕 Frutas/Legumes", right: "Vitaminas" },
        { left: "🍞 Pão/Arroz", right: "Energia" },
        { left: "🥚 Ovo/Carne", right: "Crescimento" },
      ],
      shortText: "Coma de tudo um pouco, beba água e evite muito doce!",
      highlights: ["de tudo um pouco", "água"],
      tip: "Frutas e legumes coloridos têm muitas vitaminas.",
      exampleTitle: "Prato saudável",
      exampleSentences: [
        { text: "Metade: salada 🥗" },
        { text: "1/4: arroz 🍚" },
        { text: "1/4: proteína 🍗" },
      ],
      exampleConclusion: "Equilíbrio é a chave!",
      question: "O que dá vitaminas?",
      options: [
        { text: "Frutas e legumes", isCorrect: true },
        { text: "Refrigerante", isCorrect: false },
        { text: "Bala", isCorrect: false },
      ],
    },
  },
  {
    keys: ["cadeia alimentar"],
    pack: {
      topic: "CADEIA ALIMENTAR",
      highlight: "QUEM COME QUEM",
      summary: "Na natureza, cada ser vivo se alimenta de outro. Isso é a cadeia alimentar.",
      emoji: "🦁",
      pairs: [
        { left: "🌱 Planta", right: "Produtor" },
        { left: "🐛 Lagarta", right: "Consumidor" },
        { left: "🐦 Pássaro", right: "Consumidor" },
      ],
      shortText: "Plantas produzem alimento. Animais comem plantas e outros animais. Tudo está ligado!",
      highlights: ["produtor", "consumidor"],
      tip: "Sem plantas, a cadeia se quebra.",
      exampleTitle: "Exemplo de cadeia",
      exampleSentences: [
        { text: "Capim → boi → onça" },
      ],
      exampleConclusion: "Cada um tem seu papel!",
      question: "Quem é o produtor na cadeia?",
      options: [
        { text: "A planta", isCorrect: true },
        { text: "O leão", isCorrect: false },
        { text: "O peixe", isCorrect: false },
      ],
    },
  },
  {
    keys: ["mistura", "transformação", "material"],
    pack: {
      topic: "MISTURAS",
      highlight: "MISTURAS NO DIA A DIA",
      summary: "Quando juntamos coisas diferentes, formamos uma mistura!",
      emoji: "🧪",
      pairs: [
        { left: "💧+🧂 Água+sal", right: "Mistura" },
        { left: "🥗 Salada", right: "Mistura" },
        { left: "🥤 Suco", right: "Mistura" },
      ],
      shortText: "Algumas misturas você vê (água + óleo), outras somem (água + sal). Algumas dá pra separar!",
      highlights: ["misturar", "separar"],
      tip: "Filtros separam areia da água!",
      exampleTitle: "Misturando",
      exampleSentences: [
        { text: "Água + areia → vê os dois" },
        { text: "Água + sal → some o sal" },
      ],
      exampleConclusion: "Cada mistura é diferente!",
      question: "Água + óleo é uma mistura que…",
      options: [
        { text: "A gente vê os dois", isCorrect: true },
        { text: "Some um deles", isCorrect: false },
        { text: "Vira pedra", isCorrect: false },
      ],
    },
  },
  {
    keys: ["microrganismo", "vírus", "bactéria"],
    pack: {
      topic: "MICRORGANISMOS",
      highlight: "SERES MICROSCÓPICOS",
      summary: "Existem seres tão pequenos que só vemos no microscópio.",
      emoji: "🦠",
      pairs: [
        { left: "🦠 Bactéria", right: "Pode fazer iogurte" },
        { left: "🍞 Fungo", right: "Faz pão crescer" },
        { left: "🤧 Vírus", right: "Pode causar gripe" },
      ],
      shortText: "Lavar as mãos, vacinar e escovar os dentes protege contra micróbios ruins!",
      highlights: ["lavar mãos", "vacinar"],
      tip: "Nem todo micróbio é ruim — alguns ajudam!",
      exampleTitle: "Cuide-se",
      exampleSentences: [
        { text: "Lave as mãos 🧼" },
        { text: "Cubra a tosse 🤧" },
        { text: "Tome vacina 💉" },
      ],
      exampleConclusion: "Higiene é saúde!",
      question: "O que protege contra micróbios?",
      options: [
        { text: "Lavar as mãos", isCorrect: true },
        { text: "Não tomar banho", isCorrect: false },
        { text: "Comer doce", isCorrect: false },
      ],
    },
  },
];

// ----- Ensino Religioso -----
const ER_PACKS: Array<{ keys: string[]; pack: Pack }> = [
  {
    keys: ["espaço", "território", "templo"],
    pack: {
      topic: "ESPAÇOS RELIGIOSOS",
      highlight: "LUGARES DE FÉ",
      summary: "Cada religião tem seus lugares especiais para se reunir e celebrar.",
      emoji: "🕊️",
      pairs: [
        { left: "⛪ Igreja", right: "Cristianismo" },
        { left: "🕌 Mesquita", right: "Islamismo" },
        { left: "🛕 Templo", right: "Hinduísmo / Budismo" },
      ],
      shortText: "Devemos respeitar TODOS os lugares religiosos, mesmo os de religiões diferentes da nossa.",
      highlights: ["respeitar"],
      tip: "Respeitar é cuidar do próximo.",
      exampleTitle: "Respeito",
      exampleSentences: [
        { text: "Cada um tem sua fé 🙏" },
        { text: "Todos merecem respeito 💗" },
      ],
      exampleConclusion: "Diversidade é bonita!",
      question: "O que devemos fazer com lugares religiosos diferentes do nosso?",
      options: [
        { text: "Respeitar", isCorrect: true },
        { text: "Quebrar", isCorrect: false },
        { text: "Rir", isCorrect: false },
      ],
    },
  },
  {
    keys: ["rito", "celebração", "prática"],
    pack: {
      topic: "RITOS E CELEBRAÇÕES",
      highlight: "MOMENTOS ESPECIAIS",
      summary: "Ritos são cerimônias que marcam momentos importantes da vida.",
      emoji: "🎉",
      pairs: [
        { left: "👶 Batizado", right: "Boas-vindas" },
        { left: "💍 Casamento", right: "União" },
        { left: "🎂 Aniversário", right: "Celebração" },
      ],
      shortText: "Cada cultura comemora de um jeito. Conhecer as diferenças nos ensina a respeitar.",
      highlights: ["conhecer", "respeitar"],
      tip: "Pergunte sobre as festas dos seus amigos!",
      exampleTitle: "Comemorações",
      exampleSentences: [
        { text: "Natal 🎄" },
        { text: "Ramadã 🌙" },
        { text: "Hanukkah 🕎" },
      ],
      exampleConclusion: "Festas unem famílias!",
      question: "Ritos servem para…",
      options: [
        { text: "Marcar momentos importantes", isCorrect: true },
        { text: "Brigar", isCorrect: false },
        { text: "Esconder", isCorrect: false },
      ],
    },
  },
  {
    keys: ["divindade", "deus", "espiritualidade"],
    pack: {
      topic: "ESPIRITUALIDADE",
      highlight: "DIFERENTES CRENÇAS",
      summary: "Cada religião tem seu jeito de acreditar e rezar.",
      emoji: "✨",
      pairs: [
        { left: "🙏 Oração", right: "Cristãos" },
        { left: "📿 Mantras", right: "Budistas" },
        { left: "🕯️ Velas", right: "Diversas tradições" },
      ],
      shortText: "Respeitar a fé do outro é um valor importante para vivermos em paz.",
      highlights: ["fé", "paz"],
      tip: "Nunca tire sarro da crença de alguém.",
      exampleTitle: "Em paz",
      exampleSentences: [
        { text: "Eu acredito do meu jeito 🙏" },
        { text: "Você acredita do seu jeito 💗" },
        { text: "Os dois respeitamos 🤝" },
      ],
      exampleConclusion: "Paz começa no respeito!",
      question: "Como devemos tratar quem acredita diferente?",
      options: [
        { text: "Com respeito", isCorrect: true },
        { text: "Com desprezo", isCorrect: false },
        { text: "Com medo", isCorrect: false },
      ],
    },
  },
];

// ----- Geografia -----
const GE_PACKS: Array<{ keys: string[]; pack: Pack }> = [
  {
    keys: ["zona rural", "zona urbana", "campo", "cidade"],
    pack: {
      topic: "CAMPO E CIDADE",
      highlight: "ZONA RURAL E URBANA",
      summary: "A cidade e o campo são lugares diferentes, mas se ajudam!",
      emoji: "🏙️",
      pairs: [
        { left: "🌾 Campo", right: "Planta comida" },
        { left: "🏙️ Cidade", right: "Vende comida" },
        { left: "🚚 Caminhão", right: "Leva comida" },
      ],
      shortText: "Na zona rural se planta e cria animais. Na zona urbana ficam casas, escolas e lojas.",
      highlights: ["zona rural", "zona urbana"],
      tip: "A comida que come vem do campo!",
      exampleTitle: "Diferenças",
      exampleSentences: [
        { text: "Campo → fazenda 🐄" },
        { text: "Cidade → prédios 🏢" },
      ],
      exampleConclusion: "Os dois são importantes!",
      question: "Onde a comida é plantada?",
      options: [
        { text: "Na zona rural", isCorrect: true },
        { text: "No shopping", isCorrect: false },
        { text: "Na escola", isCorrect: false },
      ],
    },
  },
  {
    keys: ["mapa", "representação", "legenda", "símbolo"],
    pack: {
      topic: "MAPAS",
      highlight: "MAPAS E SÍMBOLOS",
      summary: "Mapas mostram lugares de cima, com símbolos para cada coisa.",
      emoji: "🗺️",
      pairs: [
        { left: "🟦 Azul", right: "Rio ou mar" },
        { left: "🟩 Verde", right: "Mata" },
        { left: "🟫 Marrom", right: "Montanha" },
      ],
      shortText: "Cada símbolo no mapa significa algo. A legenda explica tudo!",
      highlights: ["símbolo", "legenda"],
      tip: "Sempre olhe a legenda do mapa.",
      exampleTitle: "Lendo o mapa",
      exampleSentences: [
        { text: "Linha azul = rio" },
        { text: "Ponto vermelho = cidade" },
      ],
      exampleConclusion: "Mapas nos guiam!",
      question: "O que mostra o significado dos símbolos?",
      options: [
        { text: "A legenda", isCorrect: true },
        { text: "O título", isCorrect: false },
        { text: "A capa", isCorrect: false },
      ],
    },
  },
  {
    keys: ["pontos cardeais", "norte", "sul"],
    pack: {
      topic: "PONTOS CARDEAIS",
      highlight: "NORTE, SUL, LESTE, OESTE",
      summary: "Os pontos cardeais nos ajudam a saber a direção!",
      emoji: "🧭",
      pairs: [
        { left: "⬆️ Norte (N)", right: "Para cima" },
        { left: "⬇️ Sul (S)", right: "Para baixo" },
        { left: "➡️ Leste (L)", right: "O sol nasce" },
      ],
      shortText: "O Sol nasce no Leste e se põe no Oeste. Assim sabemos onde estamos!",
      highlights: ["Leste", "Oeste"],
      tip: "Aponte para o Sol nascendo: ali é o Leste.",
      exampleTitle: "Bússola",
      exampleSentences: [
        { text: "N em cima ⬆️" },
        { text: "S embaixo ⬇️" },
        { text: "L à direita, O à esquerda" },
      ],
      exampleConclusion: "Sempre podemos nos achar!",
      question: "Onde o Sol nasce?",
      options: [
        { text: "Leste", isCorrect: true },
        { text: "Norte", isCorrect: false },
        { text: "Sul", isCorrect: false },
      ],
    },
  },
  {
    keys: ["paisagem", "natural", "cultural"],
    pack: {
      topic: "PAISAGENS",
      highlight: "PAISAGEM NATURAL E CULTURAL",
      summary: "Paisagem é tudo que vemos ao olhar à nossa volta.",
      emoji: "🏞️",
      pairs: [
        { left: "🌳 Floresta", right: "Natural" },
        { left: "🏙️ Cidade", right: "Cultural" },
        { left: "🌊 Praia", right: "Natural" },
      ],
      shortText: "Paisagem natural é feita pela natureza. Cultural é feita pelo ser humano.",
      highlights: ["natural", "cultural"],
      tip: "Sua rua é uma paisagem cultural!",
      exampleTitle: "Olhe à volta",
      exampleSentences: [
        { text: "Árvore → natural 🌳" },
        { text: "Prédio → cultural 🏢" },
      ],
      exampleConclusion: "As duas convivem!",
      question: "Uma floresta é paisagem…",
      options: [
        { text: "Natural", isCorrect: true },
        { text: "Cultural", isCorrect: false },
        { text: "Nenhuma", isCorrect: false },
      ],
    },
  },
  {
    keys: ["lixo", "recurso", "ambiente", "consumo"],
    pack: {
      topic: "MEIO AMBIENTE",
      highlight: "CUIDAR DO PLANETA",
      summary: "Cada um pode ajudar a cuidar do meio ambiente todo dia.",
      emoji: "🌍",
      pairs: [
        { left: "♻️ Reciclar", right: "Reaproveitar" },
        { left: "💧 Economizar água", right: "Não desperdiçar" },
        { left: "🌱 Plantar", right: "Mais verde" },
      ],
      shortText: "Não jogar lixo no chão e economizar água são atitudes simples e poderosas!",
      highlights: ["economizar", "reciclar"],
      tip: "Leve sua garrafinha pra escola.",
      exampleTitle: "Pequenas atitudes",
      exampleSentences: [
        { text: "Lixo no lixo 🗑️" },
        { text: "Torneira fechada 🚰" },
        { text: "Sacolas reutilizáveis 🛍️" },
      ],
      exampleConclusion: "Cuidar do planeta é com a gente!",
      question: "Qual é uma atitude que ajuda o planeta?",
      options: [
        { text: "Economizar água", isCorrect: true },
        { text: "Jogar lixo no rio", isCorrect: false },
        { text: "Desperdiçar comida", isCorrect: false },
      ],
    },
  },
  {
    keys: ["bairro", "cidade", "estado", "região", "brasil"],
    pack: {
      topic: "ONDE EU MORO",
      highlight: "BAIRRO, CIDADE E ESTADO",
      summary: "Vivemos em camadas: bairro → cidade → estado → país.",
      emoji: "🏘️",
      pairs: [
        { left: "🏠 Bairro", right: "Onde fica sua casa" },
        { left: "🏙️ Cidade", right: "Junta vários bairros" },
        { left: "🇧🇷 Estado", right: "Junta várias cidades" },
      ],
      shortText: "O Brasil tem 5 grandes regiões: Norte, Nordeste, Centro-Oeste, Sudeste e Sul.",
      highlights: ["5 regiões"],
      tip: "Pergunte aos seus pais qual a sua região!",
      exampleTitle: "Camadas",
      exampleSentences: [
        { text: "Casa → Bairro → Cidade" },
        { text: "Cidade → Estado → País" },
      ],
      exampleConclusion: "Você faz parte do Brasil!",
      question: "Quantas regiões tem o Brasil?",
      options: [
        { text: "5", isCorrect: true },
        { text: "2", isCorrect: false },
        { text: "10", isCorrect: false },
      ],
    },
  },
  {
    keys: ["relevo", "montanha", "rio", "clima"],
    pack: {
      topic: "RELEVO E CLIMA",
      highlight: "PAISAGENS DO BRASIL",
      summary: "O relevo é a forma da terra. O clima é como está o tempo.",
      emoji: "⛰️",
      pairs: [
        { left: "⛰️ Montanha", right: "Relevo alto" },
        { left: "🏞️ Planície", right: "Terra plana" },
        { left: "🌧️ Chuvoso", right: "Tipo de clima" },
      ],
      shortText: "No Brasil temos climas diferentes: quente, frio, seco e úmido — depende da região!",
      highlights: ["clima", "região"],
      tip: "Na Amazônia chove muito; no Nordeste, pouco.",
      exampleTitle: "Tipos",
      exampleSentences: [
        { text: "Serra → relevo alto" },
        { text: "Planalto → meio alto" },
        { text: "Planície → baixo e plano" },
      ],
      exampleConclusion: "Cada região é única!",
      question: "Como chamamos a forma da terra?",
      options: [
        { text: "Relevo", isCorrect: true },
        { text: "Clima", isCorrect: false },
        { text: "Mapa", isCorrect: false },
      ],
    },
  },
];

// ----- História -----
const HI_PACKS: Array<{ keys: string[]; pack: Pack }> = [
  {
    keys: ["família", "comunidade"],
    pack: {
      topic: "FAMÍLIA E COMUNIDADE",
      highlight: "MINHA HISTÓRIA",
      summary: "Toda família tem uma história. E você faz parte dela!",
      emoji: "👨‍👩‍👧‍👦",
      pairs: [
        { left: "👴 Avô / Avó", right: "Geração passada" },
        { left: "👨 Pai / Mãe", right: "Geração presente" },
        { left: "🧒 Você", right: "Nova geração" },
      ],
      shortText: "Conhecer a história da sua família ajuda a entender quem você é.",
      highlights: ["história", "família"],
      tip: "Pergunte aos seus avós como era a vida antes!",
      exampleTitle: "Árvore genealógica",
      exampleSentences: [
        { text: "Bisavós → Avós" },
        { text: "Avós → Pais" },
        { text: "Pais → Você" },
      ],
      exampleConclusion: "Você é um elo dessa corrente!",
      question: "Quem é da geração mais antiga?",
      options: [
        { text: "Bisavós", isCorrect: true },
        { text: "Você", isCorrect: false },
        { text: "Seus irmãos", isCorrect: false },
      ],
    },
  },
  {
    keys: ["cidade", "patrimônio", "marco"],
    pack: {
      topic: "MINHA CIDADE",
      highlight: "PATRIMÔNIO HISTÓRICO",
      summary: "Cada cidade tem lugares antigos que contam histórias importantes.",
      emoji: "🏛️",
      pairs: [
        { left: "🏛️ Museu", right: "Guarda objetos antigos" },
        { left: "⛪ Igreja antiga", right: "Patrimônio cultural" },
        { left: "🗿 Monumento", right: "Lembra alguém" },
      ],
      shortText: "Patrimônio é tudo que devemos preservar para as próximas gerações conhecerem.",
      highlights: ["preservar"],
      tip: "Visite museus e leia as plaquinhas!",
      exampleTitle: "Conhecer",
      exampleSentences: [
        { text: "Rua com nome de pessoa = homenagem" },
        { text: "Praça antiga = história" },
      ],
      exampleConclusion: "Sua cidade tem muita história!",
      question: "O que devemos fazer com o patrimônio?",
      options: [
        { text: "Preservar", isCorrect: true },
        { text: "Quebrar", isCorrect: false },
        { text: "Esconder", isCorrect: false },
      ],
    },
  },
  {
    keys: ["trabalho", "campo", "cidade"],
    pack: {
      topic: "TRABALHO",
      highlight: "TRABALHO NO CAMPO E NA CIDADE",
      summary: "Existem muitos tipos de trabalho. Cada um é importante!",
      emoji: "👷",
      pairs: [
        { left: "👨‍🌾 Agricultor", right: "Campo" },
        { left: "👷 Pedreiro", right: "Cidade" },
        { left: "🚒 Bombeiro", right: "Cidade" },
      ],
      shortText: "Todos os trabalhos têm valor. Sem eles, a sociedade não funciona.",
      highlights: ["valor"],
      tip: "Pergunte qual profissão te interessa!",
      exampleTitle: "Profissões",
      exampleSentences: [
        { text: "Plantar arroz 👨‍🌾" },
        { text: "Construir casa 👷" },
        { text: "Cuidar de doentes 👩‍⚕️" },
      ],
      exampleConclusion: "Todo trabalho ajuda!",
      question: "Quem trabalha no campo?",
      options: [
        { text: "Agricultor", isCorrect: true },
        { text: "Lojista", isCorrect: false },
        { text: "Motorista de ônibus urbano", isCorrect: false },
      ],
    },
  },
  {
    keys: ["transporte", "comunicação"],
    pack: {
      topic: "TRANSPORTES E COMUNICAÇÃO",
      highlight: "LIGANDO PESSOAS",
      summary: "Hoje viajamos rápido e conversamos longe. Antigamente era diferente!",
      emoji: "🚂",
      pairs: [
        { left: "🐎 Antes", right: "Cavalo, carta" },
        { left: "🚗 Hoje", right: "Carro, celular" },
        { left: "✈️ Futuro?", right: "Avião, internet" },
      ],
      shortText: "As tecnologias mudaram o mundo. Tudo ficou mais rápido!",
      highlights: ["rápido"],
      tip: "Pergunte aos avós: como mandavam recado antes?",
      exampleTitle: "Mudanças",
      exampleSentences: [
        { text: "Carta → e-mail" },
        { text: "Carroça → carro" },
      ],
      exampleConclusion: "O tempo transforma tudo!",
      question: "Como mandavam recados antes do celular?",
      options: [
        { text: "Por carta", isCorrect: true },
        { text: "Por WhatsApp", isCorrect: false },
        { text: "Por TV", isCorrect: false },
      ],
    },
  },
  {
    keys: ["brasil colônia", "indígena", "bandeirante", "independência", "república"],
    pack: {
      topic: "HISTÓRIA DO BRASIL",
      highlight: "NOSSO PAÍS",
      summary: "O Brasil tem uma história longa, cheia de povos e mudanças.",
      emoji: "🇧🇷",
      pairs: [
        { left: "🪶 Indígenas", right: "Primeiros povos" },
        { left: "🚢 1500", right: "Chegada dos portugueses" },
        { left: "🎉 1822", right: "Independência" },
      ],
      shortText: "Antes de 1500 já viviam aqui muitos povos indígenas. Eles são parte da nossa raiz!",
      highlights: ["indígenas", "1500", "1822"],
      tip: "Indígenas, africanos e europeus formaram o povo brasileiro.",
      exampleTitle: "Linha do tempo",
      exampleSentences: [
        { text: "Indígenas → muito antes" },
        { text: "1500 → Cabral" },
        { text: "1822 → Independência" },
      ],
      exampleConclusion: "Somos um povo de muitas culturas!",
      question: "Quem morava no Brasil antes de 1500?",
      options: [
        { text: "Povos indígenas", isCorrect: true },
        { text: "Portugueses", isCorrect: false },
        { text: "Ninguém", isCorrect: false },
      ],
    },
  },
];

// ----- Língua Portuguesa -----
const LP_PACKS: Array<{ keys: string[]; pack: Pack }> = [
  {
    keys: ["substantivo"],
    pack: {
      topic: "SUBSTANTIVOS",
      highlight: "NOMES DAS COISAS",
      summary: "Substantivo é a palavra que dá nome a tudo!",
      emoji: "📝",
      pairs: [
        { left: "🐶 cachorro", right: "Substantivo" },
        { left: "🏠 casa", right: "Substantivo" },
        { left: "🌸 flor", right: "Substantivo" },
      ],
      shortText: "Substantivos nomeiam: pessoas, animais, lugares, objetos e sentimentos.",
      highlights: ["nomeia"],
      tip: "Aponte para algo: se tem nome, é substantivo!",
      exampleTitle: "Exemplos",
      exampleSentences: [
        { text: "menina → pessoa" },
        { text: "gato → animal" },
        { text: "praia → lugar" },
      ],
      exampleConclusion: "Substantivos estão em tudo!",
      question: "Qual é um substantivo?",
      options: [
        { text: "Mesa", isCorrect: true },
        { text: "Correr", isCorrect: false },
        { text: "Bonito", isCorrect: false },
      ],
    },
  },
  {
    keys: ["adjetivo"],
    pack: {
      topic: "ADJETIVOS",
      highlight: "PALAVRAS QUE CARACTERIZAM",
      summary: "Adjetivo é a palavra que descreve como algo é.",
      emoji: "🎨",
      pairs: [
        { left: "🐶 Cachorro peludo", right: "peludo = adjetivo" },
        { left: "🌸 Flor bonita", right: "bonita = adjetivo" },
        { left: "🍎 Maçã vermelha", right: "vermelha = adjetivo" },
      ],
      shortText: "Adjetivos descrevem: cor, tamanho, forma, sentimento.",
      highlights: ["descreve"],
      tip: "Pense: 'como é?' — a resposta é adjetivo!",
      exampleTitle: "Como é?",
      exampleSentences: [
        { text: "Gato → preto" },
        { text: "Casa → grande" },
        { text: "Dia → feliz" },
      ],
      exampleConclusion: "Adjetivos dão cor à frase!",
      question: "Qual é um adjetivo?",
      options: [
        { text: "Alto", isCorrect: true },
        { text: "Cadeira", isCorrect: false },
        { text: "Andar", isCorrect: false },
      ],
    },
  },
  {
    keys: ["verbo"],
    pack: {
      topic: "VERBOS",
      highlight: "PALAVRAS DE AÇÃO",
      summary: "Verbo é a palavra que mostra uma ação ou estado.",
      emoji: "🏃",
      pairs: [
        { left: "🏃 correr", right: "Verbo" },
        { left: "🍽️ comer", right: "Verbo" },
        { left: "📚 ler", right: "Verbo" },
      ],
      shortText: "Verbo é o que a gente faz: pular, brincar, escrever, pensar.",
      highlights: ["ação"],
      tip: "Pense: 'o que está fazendo?'",
      exampleTitle: "Ações",
      exampleSentences: [
        { text: "Eu pulo 🤸" },
        { text: "Você come 🍕" },
        { text: "Ele dorme 😴" },
      ],
      exampleConclusion: "Verbo é movimento!",
      question: "Qual é um verbo?",
      options: [
        { text: "Pular", isCorrect: true },
        { text: "Mesa", isCorrect: false },
        { text: "Azul", isCorrect: false },
      ],
    },
  },
  {
    keys: ["pontuação", "ponto", "vírgula", "interrogação"],
    pack: {
      topic: "PONTUAÇÃO",
      highlight: "SINAIS DE PONTUAÇÃO",
      summary: "Os sinais ajudam a entender o que lemos!",
      emoji: "❓",
      pairs: [
        { left: ".", right: "Termina frase" },
        { left: "?", right: "Pergunta" },
        { left: "!", right: "Emoção" },
      ],
      shortText: "Sem pontuação, o texto fica confuso. Use ponto, vírgula, interrogação e exclamação!",
      highlights: ["ponto", "vírgula"],
      tip: "Leia em voz alta — você 'sente' a pontuação.",
      exampleTitle: "Compare",
      exampleSentences: [
        { text: "Vamos comer crianças (sem vírgula)" },
        { text: "Vamos comer, crianças (com vírgula!)" },
      ],
      exampleConclusion: "A vírgula salva vidas!",
      question: "Qual sinal usamos para perguntar?",
      options: [
        { text: "?", isCorrect: true },
        { text: ".", isCorrect: false },
        { text: "!", isCorrect: false },
      ],
    },
  },
  {
    keys: ["sílaba"],
    pack: {
      topic: "SÍLABAS",
      highlight: "PEDAÇOS DAS PALAVRAS",
      summary: "Cada palavra é dividida em sílabas.",
      emoji: "🔤",
      pairs: [
        { left: "ca-sa", right: "2 sílabas" },
        { left: "bo-la", right: "2 sílabas" },
        { left: "es-co-la", right: "3 sílabas" },
      ],
      shortText: "Bata palmas falando a palavra: cada palma é uma sílaba!",
      highlights: ["bata palmas"],
      tip: "1=mono, 2=di, 3=tris, 4+=polissílaba",
      exampleTitle: "Contando",
      exampleSentences: [
        { text: "pé → 1 (mono)" },
        { text: "ca-sa → 2 (di)" },
        { text: "bor-bo-le-ta → 4 (poli)" },
      ],
      exampleConclusion: "Sílabas dão ritmo!",
      question: "Quantas sílabas tem 'escola'?",
      options: [
        { text: "3", isCorrect: true },
        { text: "2", isCorrect: false },
        { text: "5", isCorrect: false },
      ],
    },
  },
  {
    keys: ["sinônimo"],
    pack: {
      topic: "SINÔNIMOS",
      highlight: "PALAVRAS PARECIDAS",
      summary: "Sinônimos são palavras diferentes que querem dizer a mesma coisa.",
      emoji: "🟰",
      pairs: [
        { left: "bonito", right: "lindo" },
        { left: "feliz", right: "alegre" },
        { left: "casa", right: "lar" },
      ],
      shortText: "Usar sinônimos deixa o texto mais bonito e menos repetido!",
      highlights: ["mesma coisa"],
      tip: "Procure no dicionário palavras parecidas.",
      exampleTitle: "Trocar",
      exampleSentences: [
        { text: "rápido = veloz" },
        { text: "grande = enorme" },
      ],
      exampleConclusion: "Variar enriquece!",
      question: "Sinônimo de 'feliz' é…",
      options: [
        { text: "Alegre", isCorrect: true },
        { text: "Triste", isCorrect: false },
        { text: "Bravo", isCorrect: false },
      ],
    },
  },
  {
    keys: ["antônimo"],
    pack: {
      topic: "ANTÔNIMOS",
      highlight: "PALAVRAS OPOSTAS",
      summary: "Antônimos são palavras que significam o contrário.",
      emoji: "↔️",
      pairs: [
        { left: "grande", right: "pequeno" },
        { left: "alto", right: "baixo" },
        { left: "feliz", right: "triste" },
      ],
      shortText: "Antônimos ajudam a explicar o contrário das coisas.",
      highlights: ["contrário"],
      tip: "Pense: 'qual é o oposto?'",
      exampleTitle: "Opostos",
      exampleSentences: [
        { text: "claro ↔ escuro" },
        { text: "quente ↔ frio" },
      ],
      exampleConclusion: "Opostos se completam!",
      question: "Antônimo de 'grande' é…",
      options: [
        { text: "Pequeno", isCorrect: true },
        { text: "Enorme", isCorrect: false },
        { text: "Largo", isCorrect: false },
      ],
    },
  },
  {
    keys: ["acento", "acentuação"],
    pack: {
      topic: "ACENTUAÇÃO",
      highlight: "ACENTOS GRÁFICOS",
      summary: "Os acentos mostram a sílaba mais forte da palavra.",
      emoji: "´",
      pairs: [
        { left: "café", right: "Acento agudo" },
        { left: "avô", right: "Acento circunflexo" },
        { left: "irmã", right: "Til" },
      ],
      shortText: "Cada acento tem um som: agudo (´), circunflexo (^), til (~).",
      highlights: ["agudo", "circunflexo", "til"],
      tip: "Diga a palavra em voz alta para sentir o acento.",
      exampleTitle: "Compare",
      exampleSentences: [
        { text: "papa (o papa) vs papá (papai)" },
      ],
      exampleConclusion: "Acento muda o sentido!",
      question: "Que acento tem em 'café'?",
      options: [
        { text: "Agudo (´)", isCorrect: true },
        { text: "Circunflexo (^)", isCorrect: false },
        { text: "Til (~)", isCorrect: false },
      ],
    },
  },
  {
    keys: ["plural"],
    pack: {
      topic: "PLURAL",
      highlight: "MAIS DE UM",
      summary: "Plural é quando temos mais de uma coisa.",
      emoji: "👥",
      pairs: [
        { left: "1 gato", right: "Singular" },
        { left: "2 gatos", right: "Plural" },
        { left: "casa → casas", right: "+s" },
      ],
      shortText: "Para formar o plural, geralmente acrescentamos 's' no final.",
      highlights: ["+s"],
      tip: "Algumas palavras mudam: pão → pães!",
      exampleTitle: "Transformando",
      exampleSentences: [
        { text: "menino → meninos" },
        { text: "bola → bolas" },
      ],
      exampleConclusion: "Plural é fácil!",
      question: "Qual é o plural de 'flor'?",
      options: [
        { text: "Flores", isCorrect: true },
        { text: "Flor", isCorrect: false },
        { text: "Florinha", isCorrect: false },
      ],
    },
  },
  {
    keys: ["encontro vocálico", "vogal"],
    pack: {
      topic: "ENCONTRO VOCÁLICO",
      highlight: "VOGAIS JUNTAS",
      summary: "Quando duas ou mais vogais ficam juntas, é encontro vocálico.",
      emoji: "🎵",
      pairs: [
        { left: "saudade", right: "au" },
        { left: "país", right: "aí" },
        { left: "céu", right: "éu" },
      ],
      shortText: "Vogais: a, e, i, o, u. Quando elas se juntam, viram melodia!",
      highlights: ["vogais"],
      tip: "Diga em voz alta e ouça as vogais.",
      exampleTitle: "Exemplos",
      exampleSentences: [
        { text: "céu → e + u" },
        { text: "pai → a + i" },
      ],
      exampleConclusion: "Vogais se gostam!",
      question: "Quantas vogais tem 'pai'?",
      options: [
        { text: "2 (a, i)", isCorrect: true },
        { text: "1", isCorrect: false },
        { text: "3", isCorrect: false },
      ],
    },
  },
  {
    keys: ["carta", "diário"],
    pack: {
      topic: "CARTAS E DIÁRIOS",
      highlight: "ESCREVER PARA ALGUÉM",
      summary: "Carta é um texto para uma pessoa. Diário é para você mesmo.",
      emoji: "💌",
      pairs: [
        { left: "Querido amigo", right: "Início da carta" },
        { left: "Querido diário", right: "Início do diário" },
        { left: "Um abraço", right: "Despedida" },
      ],
      shortText: "Toda carta tem: saudação, mensagem e despedida.",
      highlights: ["saudação", "despedida"],
      tip: "Escreva uma carta para alguém que você ama!",
      exampleTitle: "Estrutura",
      exampleSentences: [
        { text: "Oi vovó, tudo bem?" },
        { text: "Hoje eu fui à escola…" },
        { text: "Beijos, Lucas" },
      ],
      exampleConclusion: "Escrever aproxima!",
      question: "O que vem no início da carta?",
      options: [
        { text: "Saudação", isCorrect: true },
        { text: "Despedida", isCorrect: false },
        { text: "Nada", isCorrect: false },
      ],
    },
  },
  {
    keys: ["receita", "instrucional", "instrução"],
    pack: {
      topic: "TEXTO INSTRUCIONAL",
      highlight: "RECEITAS E INSTRUÇÕES",
      summary: "Texto instrucional ensina a fazer algo passo a passo.",
      emoji: "🧁",
      pairs: [
        { left: "Ingredientes", right: "O que precisa" },
        { left: "Modo de fazer", right: "Como fazer" },
        { left: "Numerar passos", right: "1, 2, 3…" },
      ],
      shortText: "Receitas, manuais e regras de jogo são exemplos de textos instrucionais.",
      highlights: ["passo a passo"],
      tip: "Use verbos no imperativo: bata, misture, asse.",
      exampleTitle: "Receita simples",
      exampleSentences: [
        { text: "1. Pegue 2 ovos" },
        { text: "2. Misture na tigela" },
        { text: "3. Asse por 20 min" },
      ],
      exampleConclusion: "Siga a ordem e dá certo!",
      question: "O que tem em uma receita?",
      options: [
        { text: "Ingredientes e modo de fazer", isCorrect: true },
        { text: "Saudação e despedida", isCorrect: false },
        { text: "Personagens", isCorrect: false },
      ],
    },
  },
  {
    keys: ["anúncio", "publicidade", "propaganda", "campanha"],
    pack: {
      topic: "ANÚNCIOS",
      highlight: "TEXTO PUBLICITÁRIO",
      summary: "Anúncios convencem as pessoas a comprar ou fazer algo.",
      emoji: "📢",
      pairs: [
        { left: "Imagem chamativa", right: "Atrai" },
        { left: "Frase curta", right: "Convence" },
        { left: "Marca", right: "Identifica" },
      ],
      shortText: "Tome cuidado: nem tudo que o anúncio diz é verdade. Pense antes de comprar!",
      highlights: ["pense", "verdade"],
      tip: "Pergunte: 'eu preciso mesmo disso?'",
      exampleTitle: "Como funciona",
      exampleSentences: [
        { text: "Imagem feliz + slogan = compra!" },
        { text: "Cores fortes chamam atenção" },
      ],
      exampleConclusion: "Seja consumidor consciente!",
      question: "O que faz o anúncio?",
      options: [
        { text: "Convence a comprar", isCorrect: true },
        { text: "Ensina conta", isCorrect: false },
        { text: "Conta história triste", isCorrect: false },
      ],
    },
  },
  {
    keys: ["cordel", "embolada", "repente", "rima"],
    pack: {
      topic: "CORDEL E RIMAS",
      highlight: "POESIA POPULAR",
      summary: "Cordel é uma poesia que rima e conta histórias.",
      emoji: "📜",
      pairs: [
        { left: "amor / dor", right: "Rima" },
        { left: "céu / véu", right: "Rima" },
        { left: "casa / brasa", right: "Rima" },
      ],
      shortText: "O cordel é tradição do Nordeste do Brasil. Tem ritmo, rima e melodia!",
      highlights: ["Nordeste", "rima"],
      tip: "Tente fazer uma rima com o seu nome!",
      exampleTitle: "Verso",
      exampleSentences: [
        { text: "Eu sou criança feliz" },
        { text: "Brincando no meu país" },
      ],
      exampleConclusion: "Cordel é arte do povo!",
      question: "Cordel tem o quê?",
      options: [
        { text: "Rimas", isCorrect: true },
        { text: "Equações", isCorrect: false },
        { text: "Receitas", isCorrect: false },
      ],
    },
  },
];

// ----- Matemática -----
const MA_PACKS: Array<{ keys: string[]; pack: Pack }> = [
  {
    keys: ["adição", "soma"],
    pack: {
      topic: "ADIÇÃO",
      highlight: "SOMAR",
      summary: "Adição é juntar quantidades para formar um total.",
      emoji: "➕",
      pairs: [
        { left: "2 + 3", right: "5" },
        { left: "4 + 4", right: "8" },
        { left: "10 + 5", right: "15" },
      ],
      shortText: "Quando juntamos coisas, usamos a adição (+).",
      highlights: ["juntar"],
      tip: "Conte nos dedos se precisar!",
      exampleTitle: "Juntando",
      exampleSentences: [
        { text: "🍎🍎 + 🍎🍎🍎 = 5 maçãs" },
      ],
      exampleConclusion: "Adição é soma!",
      question: "Quanto é 6 + 4?",
      options: [
        { text: "10", isCorrect: true },
        { text: "8", isCorrect: false },
        { text: "12", isCorrect: false },
      ],
    },
  },
  {
    keys: ["subtração", "tirar", "subtrair"],
    pack: {
      topic: "SUBTRAÇÃO",
      highlight: "TIRAR",
      summary: "Subtração é tirar uma quantidade de outra.",
      emoji: "➖",
      pairs: [
        { left: "5 - 2", right: "3" },
        { left: "10 - 4", right: "6" },
        { left: "8 - 3", right: "5" },
      ],
      shortText: "Quando tiramos algo, usamos a subtração (-).",
      highlights: ["tirar"],
      tip: "Comece do número maior e vá descendo.",
      exampleTitle: "Tirando",
      exampleSentences: [
        { text: "🍪🍪🍪🍪🍪 - 2 = 3 biscoitos" },
      ],
      exampleConclusion: "Sobrou 3!",
      question: "Quanto é 9 - 4?",
      options: [
        { text: "5", isCorrect: true },
        { text: "13", isCorrect: false },
        { text: "3", isCorrect: false },
      ],
    },
  },
  {
    keys: ["multiplicação", "multiplicar", "vezes", "tabuada"],
    pack: {
      topic: "MULTIPLICAÇÃO",
      highlight: "GRUPOS IGUAIS",
      summary: "Multiplicar é somar grupos iguais várias vezes.",
      emoji: "✖️",
      pairs: [
        { left: "2 × 3", right: "6" },
        { left: "4 × 5", right: "20" },
        { left: "3 × 3", right: "9" },
      ],
      shortText: "3 × 4 quer dizer: 3 grupos de 4 = 4 + 4 + 4 = 12.",
      highlights: ["grupos iguais"],
      tip: "Desenhe os grupos para entender!",
      exampleTitle: "Em grupos",
      exampleSentences: [
        { text: "🍎🍎 🍎🍎 🍎🍎 = 3 × 2 = 6" },
      ],
      exampleConclusion: "Soma rápida = multiplicação!",
      question: "Quanto é 4 × 2?",
      options: [
        { text: "8", isCorrect: true },
        { text: "6", isCorrect: false },
        { text: "10", isCorrect: false },
      ],
    },
  },
  {
    keys: ["divisão", "dividir", "repartir"],
    pack: {
      topic: "DIVISÃO",
      highlight: "REPARTIR IGUALMENTE",
      summary: "Dividir é repartir uma quantidade em partes iguais.",
      emoji: "➗",
      pairs: [
        { left: "6 ÷ 2", right: "3" },
        { left: "10 ÷ 5", right: "2" },
        { left: "12 ÷ 4", right: "3" },
      ],
      shortText: "Se temos 8 balas e 2 amigos: cada um ganha 4 (8 ÷ 2 = 4).",
      highlights: ["repartir", "partes iguais"],
      tip: "Distribua um a um para descobrir!",
      exampleTitle: "Repartindo",
      exampleSentences: [
        { text: "10 docinhos para 5 amigos = 2 cada" },
      ],
      exampleConclusion: "Justo e igual!",
      question: "Quanto é 12 ÷ 3?",
      options: [
        { text: "4", isCorrect: true },
        { text: "3", isCorrect: false },
        { text: "9", isCorrect: false },
      ],
    },
  },
  {
    keys: ["fração", "parte"],
    pack: {
      topic: "FRAÇÕES",
      highlight: "PARTES DO TODO",
      summary: "Fração é uma parte de algo dividido em partes iguais.",
      emoji: "🍕",
      pairs: [
        { left: "1/2", right: "Metade" },
        { left: "1/4", right: "Um quarto" },
        { left: "3/4", right: "Três quartos" },
      ],
      shortText: "Em 1/4, o 4 é o total de pedaços e o 1 é quantos pegamos.",
      highlights: ["total", "quantos"],
      tip: "Pizza é o melhor exemplo!",
      exampleTitle: "Pizza dividida",
      exampleSentences: [
        { text: "🍕 em 4 → cada pedaço = 1/4" },
        { text: "Comeu 2 = 2/4 = metade" },
      ],
      exampleConclusion: "Frações são pedaços!",
      question: "Quanto é metade?",
      options: [
        { text: "1/2", isCorrect: true },
        { text: "1/4", isCorrect: false },
        { text: "1/10", isCorrect: false },
      ],
    },
  },
  {
    keys: ["geometria", "figura", "forma", "triângulo", "quadrado"],
    pack: {
      topic: "GEOMETRIA",
      highlight: "FORMAS GEOMÉTRICAS",
      summary: "Vamos conhecer as formas que existem ao nosso redor!",
      emoji: "🔺",
      pairs: [
        { left: "🔺 Triângulo", right: "3 lados" },
        { left: "🟦 Quadrado", right: "4 lados iguais" },
        { left: "⭕ Círculo", right: "Redondo" },
      ],
      shortText: "Cada forma tem um número de lados e cantos diferentes.",
      highlights: ["lados", "cantos"],
      tip: "Procure formas na sala de aula!",
      exampleTitle: "Identificar",
      exampleSentences: [
        { text: "Janela → retângulo" },
        { text: "Relógio → círculo" },
      ],
      exampleConclusion: "Formas estão em tudo!",
      question: "Quantos lados tem um triângulo?",
      options: [
        { text: "3", isCorrect: true },
        { text: "4", isCorrect: false },
        { text: "5", isCorrect: false },
      ],
    },
  },
  {
    keys: ["medida", "comprimento", "metro", "centímetro"],
    pack: {
      topic: "MEDIDAS",
      highlight: "MEDIR COISAS",
      summary: "Para medir, usamos régua, fita métrica e outras unidades.",
      emoji: "📏",
      pairs: [
        { left: "1 m", right: "100 cm" },
        { left: "1 km", right: "1000 m" },
        { left: "Régua", right: "Mede centímetros" },
      ],
      shortText: "Centímetro (cm) mede coisas pequenas; metro (m) mede coisas maiores.",
      highlights: ["cm", "m"],
      tip: "Sua mão tem mais ou menos 15 cm!",
      exampleTitle: "Medindo",
      exampleSentences: [
        { text: "Lápis → cm" },
        { text: "Quadra → m" },
        { text: "Cidade → km" },
      ],
      exampleConclusion: "Use a unidade certa!",
      question: "Quanto vale 1 metro?",
      options: [
        { text: "100 cm", isCorrect: true },
        { text: "10 cm", isCorrect: false },
        { text: "1000 cm", isCorrect: false },
      ],
    },
  },
  {
    keys: ["hora", "tempo", "relógio"],
    pack: {
      topic: "HORA E TEMPO",
      highlight: "MEDINDO O TEMPO",
      summary: "O relógio nos mostra as horas e os minutos.",
      emoji: "⏰",
      pairs: [
        { left: "60 minutos", right: "1 hora" },
        { left: "24 horas", right: "1 dia" },
        { left: "7 dias", right: "1 semana" },
      ],
      shortText: "Ponteiro pequeno = hora. Ponteiro grande = minuto.",
      highlights: ["hora", "minuto"],
      tip: "Pratique vendo o relógio da sua casa!",
      exampleTitle: "Lendo horas",
      exampleSentences: [
        { text: "Pequeno no 3, grande no 12 = 3h" },
      ],
      exampleConclusion: "Tempo é precioso!",
      question: "Quantos minutos tem 1 hora?",
      options: [
        { text: "60", isCorrect: true },
        { text: "30", isCorrect: false },
        { text: "100", isCorrect: false },
      ],
    },
  },
  {
    keys: ["dinheiro", "real", "moeda", "valor monetário"],
    pack: {
      topic: "DINHEIRO",
      highlight: "REAIS E CENTAVOS",
      summary: "No Brasil, usamos o Real (R$) como dinheiro.",
      emoji: "💰",
      pairs: [
        { left: "R$ 1,00", right: "100 centavos" },
        { left: "R$ 5,00", right: "Cinco reais" },
        { left: "R$ 10,00", right: "Dez reais" },
      ],
      shortText: "Para comprar, juntamos notas e moedas. O troco é o que sobra.",
      highlights: ["troco"],
      tip: "Pratique comprando algo de R$ 3,50!",
      exampleTitle: "Pagando",
      exampleSentences: [
        { text: "Preço: R$ 7" },
        { text: "Dei: R$ 10" },
        { text: "Troco: R$ 3" },
      ],
      exampleConclusion: "Saber contar dinheiro é importante!",
      question: "Quanto é R$ 2 + R$ 5?",
      options: [
        { text: "R$ 7", isCorrect: true },
        { text: "R$ 3", isCorrect: false },
        { text: "R$ 10", isCorrect: false },
      ],
    },
  },
  {
    keys: ["gráfico", "tabela", "pesquisa", "dados"],
    pack: {
      topic: "GRÁFICOS E TABELAS",
      highlight: "ORGANIZAR DADOS",
      summary: "Gráficos e tabelas mostram informações de forma fácil.",
      emoji: "📊",
      pairs: [
        { left: "Tabela", right: "Linhas e colunas" },
        { left: "Gráfico de barras", right: "Barras coloridas" },
        { left: "Gráfico de pizza", right: "Círculo dividido" },
      ],
      shortText: "Para fazer um gráfico: primeiro colete dados, depois organize numa tabela e por fim desenhe!",
      highlights: ["coletar", "organizar"],
      tip: "Pesquise a fruta favorita da turma!",
      exampleTitle: "Pesquisa",
      exampleSentences: [
        { text: "Maçã: ||||" },
        { text: "Banana: ||" },
        { text: "Maçã venceu com 4 votos!" },
      ],
      exampleConclusion: "Dados ajudam a decidir!",
      question: "O que vem primeiro numa pesquisa?",
      options: [
        { text: "Perguntar às pessoas", isCorrect: true },
        { text: "Desenhar o gráfico", isCorrect: false },
        { text: "Sortear", isCorrect: false },
      ],
    },
  },
  {
    keys: ["número", "milhar", "decimal", "centena", "dezena", "unidade"],
    pack: {
      topic: "NÚMEROS",
      highlight: "SISTEMA DECIMAL",
      summary: "Cada número tem unidade, dezena, centena e milhar.",
      emoji: "🔢",
      pairs: [
        { left: "8", right: "8 unidades" },
        { left: "48", right: "4 dezenas + 8" },
        { left: "548", right: "5 centenas + 48" },
      ],
      shortText: "10 unidades = 1 dezena. 10 dezenas = 1 centena. 10 centenas = 1 milhar.",
      highlights: ["10 = um a mais"],
      tip: "Olhe a posição: ela diz o valor!",
      exampleTitle: "Decompor",
      exampleSentences: [
        { text: "367 = 300 + 60 + 7" },
      ],
      exampleConclusion: "Cada algarismo tem seu lugar!",
      question: "Em 248, quantas centenas tem?",
      options: [
        { text: "2", isCorrect: true },
        { text: "4", isCorrect: false },
        { text: "8", isCorrect: false },
      ],
    },
  },
  {
    keys: ["probabilidade", "chance", "evento"],
    pack: {
      topic: "PROBABILIDADE",
      highlight: "CHANCES DE ACONTECER",
      summary: "Probabilidade é a chance de algo acontecer.",
      emoji: "🎲",
      pairs: [
        { left: "Moeda", right: "2 resultados" },
        { left: "Dado", right: "6 resultados" },
        { left: "Sortear cor", right: "Depende das cores" },
      ],
      shortText: "Se um dado tem 6 lados, a chance de tirar 1 é 1 em 6.",
      highlights: ["chance"],
      tip: "Jogue um dado várias vezes e observe!",
      exampleTitle: "Moeda",
      exampleSentences: [
        { text: "Cara ou coroa = 1 em 2" },
      ],
      exampleConclusion: "Probabilidade é matemática divertida!",
      question: "Quantos lados tem um dado?",
      options: [
        { text: "6", isCorrect: true },
        { text: "4", isCorrect: false },
        { text: "10", isCorrect: false },
      ],
    },
  },
  {
    keys: ["sequência", "padrão", "regularidade"],
    pack: {
      topic: "SEQUÊNCIAS",
      highlight: "PADRÕES NUMÉRICOS",
      summary: "Sequência é uma série de números ou figuras que segue uma regra.",
      emoji: "🔁",
      pairs: [
        { left: "2, 4, 6, 8", right: "+2" },
        { left: "5, 10, 15", right: "+5" },
        { left: "1, 3, 9, 27", right: "×3" },
      ],
      shortText: "Para descobrir a regra, veja a diferença entre os números!",
      highlights: ["regra"],
      tip: "Tente continuar: 1, 4, 7, 10, …?",
      exampleTitle: "Padrão",
      exampleSentences: [
        { text: "10, 20, 30 → soma 10" },
      ],
      exampleConclusion: "Padrões são previsíveis!",
      question: "Continue: 2, 4, 6, ?",
      options: [
        { text: "8", isCorrect: true },
        { text: "7", isCorrect: false },
        { text: "12", isCorrect: false },
      ],
    },
  },
];

const AR_PACKS: Array<{ keys: string[]; pack: Pack }> = [
  {
    keys: ["cor", "cores", "pintura", "desenho", "visual"],
    pack: {
      topic: "CORES E FORMAS",
      highlight: "MISTURAR CORES",
      summary: "Cores se misturam e formam novas cores. Vamos descobrir!",
      emoji: "🎨",
      pairs: [
        { left: "🔵 Azul + 🟡 Amarelo", right: "Verde" },
        { left: "🔴 Vermelho + 🟡 Amarelo", right: "Laranja" },
        { left: "🔴 Vermelho + 🔵 Azul", right: "Roxo" },
      ],
      shortText: "Azul, vermelho e amarelo são cores primárias. Misturando duas, nasce uma nova cor!",
      highlights: ["primárias", "misturando", "nova cor"],
      tip: "Experimente em casa com tinta guache!",
      exampleTitle: "Misture e veja",
      exampleSentences: [
        { text: "Azul + Amarelo = Verde 🟢" },
        { text: "Vermelho + Amarelo = Laranja 🟠" },
      ],
      exampleConclusion: "Arte é misturar e criar!",
      question: "Qual cor sai de vermelho com azul?",
      options: [
        { text: "Roxo", isCorrect: true },
        { text: "Verde", isCorrect: false },
        { text: "Laranja", isCorrect: false },
      ],
    },
  },
  {
    keys: ["música", "som", "ritmo", "instrumento"],
    pack: {
      topic: "SONS E RITMO",
      highlight: "OUVIR E CRIAR SOM",
      summary: "Música é feita de sons curtos, longos, altos e baixos.",
      emoji: "🎵",
      pairs: [
        { left: "🥁 Tambor", right: "Som grave" },
        { left: "🎺 Trompete", right: "Som alto" },
        { left: "🎻 Violino", right: "Som agudo" },
      ],
      shortText: "Cada instrumento faz um som diferente. Juntos formam uma música!",
      highlights: ["instrumento", "som", "música"],
      tip: "Bata palmas no ritmo de uma música!",
      exampleTitle: "Som dos instrumentos",
      exampleSentences: [
        { text: "Tambor → grave 🥁" },
        { text: "Flauta → agudo 🪈" },
      ],
      exampleConclusion: "Sons diferentes criam música!",
      question: "Qual instrumento faz som grave?",
      options: [
        { text: "Tambor", isCorrect: true },
        { text: "Apito", isCorrect: false },
        { text: "Flauta", isCorrect: false },
      ],
    },
  },
  {
    keys: ["dança", "corpo", "movimento", "teatro"],
    pack: {
      topic: "CORPO E EXPRESSÃO",
      highlight: "DANÇAR E REPRESENTAR",
      summary: "O corpo conta histórias com movimentos e expressões.",
      emoji: "💃",
      pairs: [
        { left: "💃 Dança", right: "Movimento no ritmo" },
        { left: "🎭 Teatro", right: "Contar com o corpo" },
        { left: "😊 Expressão", right: "Mostrar sentimento" },
      ],
      shortText: "Dança, teatro e mímica usam o corpo para se expressar.",
      highlights: ["corpo", "expressão", "movimento"],
      tip: "Tente contar uma história sem falar!",
      exampleTitle: "Mostre com o corpo",
      exampleSentences: [
        { text: "Alegria → pulando 🤸" },
        { text: "Tristeza → ombros baixos 😔" },
      ],
      exampleConclusion: "Arte é também o que fazemos com o corpo!",
      question: "Qual arte usa o corpo no ritmo da música?",
      options: [
        { text: "Dança", isCorrect: true },
        { text: "Pintura", isCorrect: false },
        { text: "Escultura", isCorrect: false },
      ],
    },
  },
];

const PACKS_BY_SUBJECT: Record<SubjectKey, Array<{ keys: string[]; pack: Pack }>> = {
  CI: CI_PACKS,
  ER: ER_PACKS,
  GE: GE_PACKS,
  HI: HI_PACKS,
  LP: LP_PACKS,
  MA: MA_PACKS,
  AR: AR_PACKS,
};

function pickPack(subject: SubjectKey, titulo: string): Pack | null {
  const t = (titulo ?? "").toLowerCase();
  for (const entry of PACKS_BY_SUBJECT[subject]) {
    if (entry.keys.some((k) => t.includes(k))) return entry.pack;
  }
  return null;
}

// Fallback genérico por disciplina (sempre 3-5 ano, nunca 6-9).
function genericPack(subject: SubjectKey, titulo: string, grade: string): Pack {
  const cleanTitle = titulo.replace(/\s*-\s*\d+º\s*Ano\s*$/i, "").trim();
  const base = cleanTitle.split(/[\s(]/)[0] || SUBJECT_NAME[subject];
  const subjectName = SUBJECT_NAME[subject];
  const emoji = SUBJECT_EMOJI[subject];

  const intros: Record<SubjectKey, string> = {
    CI: `Em Ciências do ${grade} vamos explorar como o mundo funciona com experiências e observações.`,
    ER: `No Ensino Religioso do ${grade} aprendemos sobre respeito, valores e diferentes tradições.`,
    GE: `Em Geografia do ${grade} aprendemos sobre lugares, mapas e o mundo ao nosso redor.`,
    HI: `Em História do ${grade} descobrimos como as pessoas viviam antes e como tudo mudou.`,
    LP: `Em Língua Portuguesa do ${grade} a gente lê, escreve e descobre como funciona a nossa língua.`,
    MA: `Em Matemática do ${grade} brincamos com números, contas e formas para resolver problemas.`,
  };

  return {
    topic: cleanTitle.toUpperCase().slice(0, 40),
    highlight: cleanTitle.toUpperCase().slice(0, 30),
    summary: `Vamos aprender sobre ${cleanTitle.toLowerCase()} de um jeito divertido!`,
    emoji,
    pairs: [
      { left: emoji + " Observe", right: "Veja com atenção" },
      { left: "📚 Pratique", right: "Faça aos poucos" },
      { left: "💡 Pergunte", right: "Dúvida é bom!" },
    ],
    shortText: intros[subject],
    highlights: [subjectName],
    tip: "Você consegue! Vá passo a passo.",
    exampleTitle: cleanTitle,
    exampleSentences: [
      { text: `Tema: ${cleanTitle}` },
      { text: `Disciplina: ${subjectName}` },
      { text: `Série: ${grade}` },
    ],
    exampleConclusion: "Bora aprender juntos!",
    question: `O que estamos estudando hoje?`,
    options: [
      { text: cleanTitle, isCorrect: true },
      { text: "Recreio", isCorrect: false },
      { text: "Outra matéria", isCorrect: false },
    ],
  };
}

function buildLesson(code: string, titulo: string): ActivityLesson | null {
  const subject = subjectFromCode(code);
  const grade = gradeFromCode(code);
  if (!subject || !grade) return null;

  const pack = pickPack(subject, titulo) ?? genericPack(subject, titulo, grade);

  const optionsWithColor = pack.options.map((o, i) => ({
    ...o,
    color: COLORS[i % COLORS.length],
  }));

  return {
    id: code.toLowerCase(),
    title: titulo.replace(/\s*-\s*\d+º\s*Ano\s*$/i, "").trim() || pack.topic,
    topic: pack.topic,
    subject: `${SUBJECT_NAME[subject]} — ${grade}`,
    xp: 150,
    screens: {
      explicacao: {
        instruction: "Vamos aprender sobre",
        highlight: pack.highlight,
        summary: pack.summary,
        visual_emoji: pack.emoji,
      },
      exploracao: {
        instruction: "Olha estes exemplos:",
        pairs: pack.pairs,
      },
      explicacao_curta: {
        text: pack.shortText,
        highlights: pack.highlights,
        tip: pack.tip,
      },
      exemplo_visual: {
        title: pack.exampleTitle,
        sentences: pack.exampleSentences,
        conclusion: pack.exampleConclusion,
      },
      praticar: {
        question: pack.question,
        options: optionsWithColor,
      },
    },
  };
}

export function generateActivityLesson3a5(
  codigo: string,
  titulo: string,
): ActivityLesson | null {
  return buildLesson(codigo, titulo);
}
