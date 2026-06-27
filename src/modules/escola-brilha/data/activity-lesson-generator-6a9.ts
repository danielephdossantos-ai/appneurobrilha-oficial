import type { ActivityLesson, PraticarOption } from "../types/activity-lesson";

/**
 * Gerador de ActivityLesson para 6º, 7º, 8º e 9º Ano.
 *
 * Objetivo: aulas REAIS no padrão ensino particular —
 *  - Pouco texto, muita imagem real (Wikimedia/Unsplash).
 *  - Modelo visual + exemplo concreto + pergunta com 3 opções.
 *  - Conteúdo apropriado para Fundamental II (Ciências, Mat, LP,
 *    História, Geografia, Inglês, Arte, Ed. Física, Ens. Religioso).
 */

type SubjectKey = "CI" | "MA" | "LP" | "HI" | "GE" | "LI" | "AR" | "EF" | "ER";

const COLORS: PraticarOption["color"][] = ["green", "blue", "orange", "purple", "yellow", "red"];

function subjectFromCode(code: string): SubjectKey | null {
  const m = code.match(/^EF0[6789](CI|MA|LP|HI|GE|LI|AR|EF|ER)\d{2,}/i);
  return (m?.[1].toUpperCase() as SubjectKey) ?? null;
}

function gradeFromCode(code: string): "6º Ano" | "7º Ano" | "8º Ano" | "9º Ano" | null {
  const m = code.match(/^EF0([6789])/);
  if (!m) return null;
  return `${m[1]}º Ano` as "6º Ano";
}

const SUBJECT_NAME: Record<SubjectKey, string> = {
  CI: "Ciências",
  MA: "Matemática",
  LP: "Língua Portuguesa",
  HI: "História",
  GE: "Geografia",
  LI: "Língua Inglesa",
  AR: "Arte",
  EF: "Educação Física",
  ER: "Ensino Religioso",
};

const SUBJECT_EMOJI: Record<SubjectKey, string> = {
  CI: "🔬",
  MA: "📐",
  LP: "📚",
  HI: "🏛️",
  GE: "🗺️",
  LI: "🌐",
  AR: "🎨",
  EF: "⚽",
  ER: "🕊️",
};

// Wikimedia Commons (CC) — URLs estáveis (thumbnail).
const IMG = {
  celula: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Animal_Cell.svg/640px-Animal_Cell.svg.png",
  fotossintese:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Simple_photosynthesis_overview.svg/640px-Simple_photosynthesis_overview.svg.png",
  cadeia: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/FoodChain.svg/640px-FoodChain.svg.png",
  sistemaSolar:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Planets2013.svg/640px-Planets2013.svg.png",
  terra: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/640px-The_Earth_seen_from_Apollo_17.jpg",
  agua: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Watercyclesummary.jpg/640px-Watercyclesummary.jpg",
  atomo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Stylised_Lithium_Atom.svg/480px-Stylised_Lithium_Atom.svg.png",
  dna: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/DNA_Structure%2BKey%2BLabelled.pn_NoBB.png/480px-DNA_Structure%2BKey%2BLabelled.pn_NoBB.png",
  planta:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Parts_of_a_plant.jpg/640px-Parts_of_a_plant.jpg",
  ecossistema:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Coral_reef_locations.jpg/640px-Coral_reef_locations.jpg",
  brasil:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Brazil_%28orthographic_projection%29.svg/640px-Brazil_%28orthographic_projection%29.svg.png",
  mapaMundi:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Equirectangular_projection_SW.jpg/640px-Equirectangular_projection_SW.jpg",
  egito:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/All_Gizah_Pyramids.jpg/640px-All_Gizah_Pyramids.jpg",
  grecia:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/The_Parthenon_in_Athens.jpg/640px-The_Parthenon_in_Athens.jpg",
  roma:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/640px-Colosseo_2020.jpg",
  triangulo:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Pythagorean.svg/480px-Pythagorean.svg.png",
  circulo:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Circle-withsegments.svg/480px-Circle-withsegments.svg.png",
  funcao:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Linear_function_kx.svg/480px-Linear_function_kx.svg.png",
  livro:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Open_book_nae_02.jpg/640px-Open_book_nae_02.jpg",
};

type Pack = {
  topic: string;
  highlight: string;
  summary: string;
  emoji: string;
  heroImage?: string;
  heroCaption?: string;
  pairs: { left: string; right: string }[];
  shortText: string;
  highlights?: string[];
  tip?: string;
  exampleTitle: string;
  exampleSentences: { text: string; emoji?: string; image_url?: string }[];
  exampleConclusion: string;
  exampleImage?: string;
  exampleCaption?: string;
  question: string;
  options: { text: string; isCorrect: boolean }[];
};

// =================== PACOTES — CIÊNCIAS ===================
const CI_PACKS: Array<{ keys: string[]; pack: Pack }> = [
  {
    keys: ["célula", "celula"],
    pack: {
      topic: "CÉLULA",
      highlight: "A UNIDADE DA VIDA",
      summary: "Tudo que é vivo é feito de células — desde uma bactéria até você.",
      emoji: "🧫",
      heroImage: IMG.celula,
      heroCaption: "Estrutura básica de uma célula animal",
      pairs: [
        { left: "Membrana", right: "Proteção" },
        { left: "Núcleo", right: "Comando + DNA" },
        { left: "Citoplasma", right: "Onde tudo acontece" },
        { left: "Mitocôndria", right: "Energia (ATP)" },
      ],
      shortText: "Célula animal não tem parede celular nem cloroplasto. Vegetal tem os dois.",
      highlights: ["animal", "vegetal", "parede celular", "cloroplasto"],
      tip: "Procuradores → membrana = portaria; núcleo = chefe; mitocôndria = usina.",
      exampleTitle: "Comparando",
      exampleSentences: [
        { text: "Animal: sem parede, sem cloroplasto" },
        { text: "Vegetal: com parede + cloroplasto" },
        { text: "Bactéria: sem núcleo (procarionte)" },
      ],
      exampleImage: IMG.celula,
      exampleConclusion: "A célula é a menor unidade viva.",
      question: "Qual organela produz energia (ATP) na célula?",
      options: [
        { text: "Mitocôndria", isCorrect: true },
        { text: "Núcleo", isCorrect: false },
        { text: "Membrana", isCorrect: false },
      ],
    },
  },
  {
    keys: ["fotossíntese", "fotossintese"],
    pack: {
      topic: "FOTOSSÍNTESE",
      highlight: "PLANTA FAZ COMIDA COM SOL",
      summary: "Plantas usam luz, água e gás carbônico pra fabricar glicose e soltar oxigênio.",
      emoji: "🌱",
      heroImage: IMG.fotossintese,
      heroCaption: "Equação simplificada da fotossíntese",
      pairs: [
        { left: "Entra", right: "CO₂ + H₂O + luz" },
        { left: "Sai", right: "Glicose + O₂" },
        { left: "Onde?", right: "Cloroplasto (folha)" },
      ],
      shortText: "6 CO₂ + 6 H₂O + luz → C₆H₁₂O₆ + 6 O₂.",
      highlights: ["luz", "glicose", "O₂"],
      tip: "Sem planta, sem oxigênio. Sem oxigênio, sem a gente.",
      exampleTitle: "No quintal",
      exampleSentences: [
        { text: "Planta respira pelas folhas" },
        { text: "Raiz puxa água", emoji: "💧" },
        { text: "Sol é a energia", emoji: "☀️" },
      ],
      exampleImage: IMG.planta,
      exampleConclusion: "Fotossíntese sustenta quase toda a vida na Terra.",
      question: "O que a planta LIBERA na fotossíntese?",
      options: [
        { text: "Oxigênio (O₂)", isCorrect: true },
        { text: "Gás carbônico (CO₂)", isCorrect: false },
        { text: "Nitrogênio", isCorrect: false },
      ],
    },
  },
  {
    keys: ["cadeia alimentar", "ecossistema", "teia"],
    pack: {
      topic: "CADEIA ALIMENTAR",
      highlight: "QUEM COME QUEM",
      summary: "Energia passa do sol → planta → herbívoro → carnívoro → decompositor.",
      emoji: "🦁",
      heroImage: IMG.cadeia,
      heroCaption: "Cadeia alimentar simplificada",
      pairs: [
        { left: "Produtor", right: "Planta (fotossíntese)" },
        { left: "1º consumidor", right: "Herbívoro" },
        { left: "2º consumidor", right: "Carnívoro" },
        { left: "Decompositor", right: "Fungos, bactérias" },
      ],
      shortText: "A energia diminui a cada nível — por isso há poucos predadores no topo.",
      highlights: ["energia", "produtor", "decompositor"],
      exampleTitle: "Exemplo real",
      exampleSentences: [
        { text: "Capim → boi → onça → urubu" },
      ],
      exampleImage: IMG.ecossistema,
      exampleConclusion: "Tudo está conectado. Tira um nível, desequilibra.",
      question: "Quem é o PRODUTOR em uma cadeia alimentar?",
      options: [
        { text: "A planta", isCorrect: true },
        { text: "O leão", isCorrect: false },
        { text: "O urubu", isCorrect: false },
      ],
    },
  },
  {
    keys: ["sistema solar", "planeta", "universo", "astronomia"],
    pack: {
      topic: "SISTEMA SOLAR",
      highlight: "8 PLANETAS + O SOL",
      summary: "Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno.",
      emoji: "🪐",
      heroImage: IMG.sistemaSolar,
      heroCaption: "Os 8 planetas do Sistema Solar (em escala)",
      pairs: [
        { left: "Rochosos", right: "Mercúrio · Vênus · Terra · Marte" },
        { left: "Gasosos", right: "Júpiter · Saturno · Urano · Netuno" },
        { left: "Estrela central", right: "Sol" },
      ],
      shortText: "Plutão não é mais planeta desde 2006 — virou planeta-anão.",
      highlights: ["rochosos", "gasosos"],
      exampleTitle: "Memorize",
      exampleSentences: [
        { text: "Minha Vó Tem Muitas Joias Só Usa Nelas" },
      ],
      exampleConclusion: "Sistema Solar = Sol + 8 planetas + luas + asteroides.",
      question: "Júpiter é um planeta…",
      options: [
        { text: "Gasoso", isCorrect: true },
        { text: "Rochoso", isCorrect: false },
        { text: "Anão", isCorrect: false },
      ],
    },
  },
  {
    keys: ["água", "ciclo", "hidrológico"],
    pack: {
      topic: "CICLO DA ÁGUA",
      highlight: "EVAPORA, CHOVE, REPETE",
      summary: "A mesma água circula entre rios, mares, nuvens e seres vivos.",
      emoji: "💧",
      heroImage: IMG.agua,
      heroCaption: "Ciclo hidrológico",
      pairs: [
        { left: "Evaporação", right: "Líquido → vapor" },
        { left: "Condensação", right: "Vapor → nuvem" },
        { left: "Precipitação", right: "Chuva, neve" },
        { left: "Infiltração", right: "Volta ao solo" },
      ],
      shortText: "Calor do Sol é o motor do ciclo da água.",
      highlights: ["Sol", "evapora", "chove"],
      exampleTitle: "Observe",
      exampleSentences: [
        { text: "Roupa no varal seca → evaporação" },
        { text: "Espelho do banho embaça → condensação" },
      ],
      exampleConclusion: "Ciclo da água = motor do clima do planeta.",
      question: "O motor do ciclo da água é…",
      options: [
        { text: "A energia do Sol", isCorrect: true },
        { text: "O vento", isCorrect: false },
        { text: "A gravidade da Lua", isCorrect: false },
      ],
    },
  },
  {
    keys: ["átomo", "atomo", "matéria", "elemento"],
    pack: {
      topic: "ÁTOMO",
      highlight: "O TIJOLO DA MATÉRIA",
      summary: "Tudo é feito de átomos: prótons (+), nêutrons (0) e elétrons (−).",
      emoji: "⚛️",
      heroImage: IMG.atomo,
      heroCaption: "Modelo do átomo (Lítio)",
      pairs: [
        { left: "Próton", right: "Carga + (núcleo)" },
        { left: "Nêutron", right: "Sem carga (núcleo)" },
        { left: "Elétron", right: "Carga − (eletrosfera)" },
      ],
      shortText: "Nº de prótons = número atômico, identifica o elemento.",
      highlights: ["número atômico"],
      exampleTitle: "Exemplo",
      exampleSentences: [
        { text: "H tem 1 próton → Hidrogênio" },
        { text: "O tem 8 prótons → Oxigênio" },
      ],
      exampleConclusion: "Mudar o nº de prótons muda o elemento.",
      question: "Qual partícula tem carga POSITIVA?",
      options: [
        { text: "Próton", isCorrect: true },
        { text: "Elétron", isCorrect: false },
        { text: "Nêutron", isCorrect: false },
      ],
    },
  },
  {
    keys: ["dna", "genética", "genetica", "hereditariedade"],
    pack: {
      topic: "DNA",
      highlight: "O CÓDIGO DA VIDA",
      summary: "DNA guarda as instruções pra fabricar e operar o seu corpo.",
      emoji: "🧬",
      heroImage: IMG.dna,
      heroCaption: "Dupla hélice do DNA",
      pairs: [
        { left: "Forma", right: "Dupla hélice" },
        { left: "Bases", right: "A-T  e  C-G" },
        { left: "Onde está", right: "Núcleo da célula" },
      ],
      shortText: "Gene = pedaço de DNA com instrução pra uma característica.",
      highlights: ["gene", "A-T", "C-G"],
      exampleTitle: "Herança",
      exampleSentences: [
        { text: "Cor dos olhos vem dos pais" },
        { text: "Tipo sanguíneo também" },
      ],
      exampleImage: IMG.dna,
      exampleConclusion: "DNA é receita; gene é uma instrução da receita.",
      question: "No DNA, a base A se liga com…",
      options: [
        { text: "T", isCorrect: true },
        { text: "C", isCorrect: false },
        { text: "G", isCorrect: false },
      ],
    },
  },
];

// =================== PACOTES — MATEMÁTICA ===================
const MA_PACKS: Array<{ keys: string[]; pack: Pack }> = [
  {
    keys: ["equação", "equacao", "1º grau", "primeiro grau"],
    pack: {
      topic: "EQUAÇÃO DO 1º GRAU",
      highlight: "DESCOBRIR O X",
      summary: "Equação é uma balança: o que faz de um lado, faz do outro.",
      emoji: "⚖️",
      pairs: [
        { left: "2x + 3 = 11", right: "Achar x" },
        { left: "−3 dos dois lados", right: "2x = 8" },
        { left: "÷2 dos dois lados", right: "x = 4" },
      ],
      shortText: "Isole o x: passe os números pro outro lado invertendo a operação.",
      highlights: ["isolar", "inverter"],
      tip: "+ vira −, × vira ÷.",
      exampleTitle: "Resolva 3x − 5 = 10",
      exampleSentences: [
        { text: "+5: 3x = 15" },
        { text: "÷3: x = 5" },
      ],
      exampleConclusion: "Equação resolvida quando o x fica sozinho.",
      question: "Em 2x = 10, x vale:",
      options: [
        { text: "5", isCorrect: true },
        { text: "8", isCorrect: false },
        { text: "20", isCorrect: false },
      ],
    },
  },
  {
    keys: ["pitágoras", "pitagoras", "triângulo retângulo"],
    pack: {
      topic: "TEOREMA DE PITÁGORAS",
      highlight: "a² + b² = c²",
      summary: "Em todo triângulo retângulo: hipotenusa² = soma dos catetos².",
      emoji: "📐",
      heroImage: IMG.triangulo,
      heroCaption: "Teorema de Pitágoras",
      pairs: [
        { left: "Catetos", right: "lados do ângulo reto" },
        { left: "Hipotenusa", right: "lado oposto a 90°" },
        { left: "Fórmula", right: "a² + b² = c²" },
      ],
      shortText: "Catetos 3 e 4 → hipotenusa 5. 3² + 4² = 9 + 16 = 25 = 5².",
      highlights: ["hipotenusa", "catetos"],
      exampleTitle: "Calcule c",
      exampleSentences: [
        { text: "a = 6, b = 8" },
        { text: "36 + 64 = 100" },
        { text: "c = √100 = 10" },
      ],
      exampleImage: IMG.triangulo,
      exampleConclusion: "Pitágoras só vale em triângulo retângulo.",
      question: "Se a=3 e b=4, a hipotenusa é:",
      options: [
        { text: "5", isCorrect: true },
        { text: "7", isCorrect: false },
        { text: "12", isCorrect: false },
      ],
    },
  },
  {
    keys: ["porcentagem", "percentual"],
    pack: {
      topic: "PORCENTAGEM",
      highlight: "PARTE DE 100",
      summary: "% significa 'em cada 100'. 20% = 20/100 = 0,2.",
      emoji: "💯",
      pairs: [
        { left: "50%", right: "metade" },
        { left: "25%", right: "um quarto" },
        { left: "10%", right: "um décimo" },
      ],
      shortText: "Pra calcular X% de N: multiplique N por X/100.",
      highlights: ["× X/100"],
      tip: "10% é só dividir por 10. 5% é metade de 10%.",
      exampleTitle: "Loja com 30% off",
      exampleSentences: [
        { text: "Preço: R$ 200" },
        { text: "30% = 0,30" },
        { text: "Desconto: 200 × 0,30 = R$ 60" },
      ],
      exampleConclusion: "Paga R$ 140 (200 − 60).",
      question: "Quanto é 25% de 80?",
      options: [
        { text: "20", isCorrect: true },
        { text: "25", isCorrect: false },
        { text: "40", isCorrect: false },
      ],
    },
  },
  {
    keys: ["função", "funcao", "linear", "afim"],
    pack: {
      topic: "FUNÇÃO AFIM",
      highlight: "y = ax + b",
      summary: "Uma reta no plano cartesiano. 'a' é a inclinação, 'b' onde corta y.",
      emoji: "📊",
      heroImage: IMG.funcao,
      heroCaption: "Reta y = kx",
      pairs: [
        { left: "a > 0", right: "Sobe" },
        { left: "a < 0", right: "Desce" },
        { left: "b", right: "Corta o eixo y" },
      ],
      shortText: "Em y = 2x + 1: inclinação 2, corta y em 1.",
      highlights: ["a", "b"],
      exampleTitle: "y = 3x − 2",
      exampleSentences: [
        { text: "x=0 → y = −2" },
        { text: "x=1 → y = 1" },
      ],
      exampleConclusion: "Dois pontos já desenham a reta.",
      question: "Em y = 2x + 3, quando x = 0, y vale:",
      options: [
        { text: "3", isCorrect: true },
        { text: "0", isCorrect: false },
        { text: "5", isCorrect: false },
      ],
    },
  },
  {
    keys: ["círculo", "circulo", "circunferência"],
    pack: {
      topic: "CIRCUNFERÊNCIA",
      highlight: "π × DIÂMETRO",
      summary: "Perímetro = 2πr. Área = πr².",
      emoji: "⭕",
      heroImage: IMG.circulo,
      heroCaption: "Raio, diâmetro e corda",
      pairs: [
        { left: "Raio", right: "centro → borda" },
        { left: "Diâmetro", right: "2 × raio" },
        { left: "π", right: "≈ 3,14" },
      ],
      shortText: "Diâmetro é o dobro do raio.",
      highlights: ["2πr", "πr²"],
      exampleTitle: "r = 5 cm",
      exampleSentences: [
        { text: "Perímetro: 2 × 3,14 × 5 = 31,4 cm" },
        { text: "Área: 3,14 × 25 = 78,5 cm²" },
      ],
      exampleConclusion: "Sempre verifique se é perímetro ou área.",
      question: "Se r = 4, o diâmetro vale:",
      options: [
        { text: "8", isCorrect: true },
        { text: "4", isCorrect: false },
        { text: "16", isCorrect: false },
      ],
    },
  },
  {
    keys: ["potência", "potencia", "expoente"],
    pack: {
      topic: "POTENCIAÇÃO",
      highlight: "MULTIPLICAR PELO MESMO",
      summary: "2³ = 2×2×2 = 8. A base se multiplica pelo número do expoente.",
      emoji: "🔢",
      pairs: [
        { left: "2²", right: "4" },
        { left: "2³", right: "8" },
        { left: "10⁴", right: "10 000" },
      ],
      shortText: "Qualquer número elevado a 0 vale 1. Elevado a 1 é ele mesmo.",
      highlights: ["base", "expoente"],
      exampleTitle: "Calcule 5³",
      exampleSentences: [
        { text: "5 × 5 = 25" },
        { text: "25 × 5 = 125" },
      ],
      exampleConclusion: "5³ = 125.",
      question: "Quanto é 3²?",
      options: [
        { text: "9", isCorrect: true },
        { text: "6", isCorrect: false },
        { text: "5", isCorrect: false },
      ],
    },
  },
];

// =================== PACOTES — LÍNGUA PORTUGUESA ===================
const LP_PACKS: Array<{ keys: string[]; pack: Pack }> = [
  {
    keys: [
      "leitura",
      "compreensão",
      "compreensao",
      "localizar",
      "inferir",
      "informação",
      "informacao",
      "avaliar o texto",
      "propósito",
      "proposito",
    ],
    pack: {
      topic: "LEITURA COM PROPÓSITO",
      highlight: "LER, PROVAR E CONCLUIR",
      summary:
        "Ler bem é encontrar pistas no texto: primeiro localizar o que está escrito, depois inferir o que ficou nas entrelinhas.",
      emoji: "📖",
      heroImage: IMG.livro,
      heroCaption: "A leitura fica mais forte quando a resposta volta para o texto.",
      pairs: [
        { left: "Localizar", right: "Copiar a informação que aparece no texto" },
        { left: "Inferir", right: "Juntar pistas para descobrir algo não dito diretamente" },
        { left: "Relacionar", right: "Ligar começo, meio e fim para entender a ideia central" },
        { left: "Avaliar", right: "Dar opinião usando uma prova retirada do texto" },
      ],
      shortText:
        "Texto-base: Na segunda-feira, a turma encontrou a horta seca. Bia percebeu pegadas perto do canteiro e uma torneira pingando. No recreio, combinou com os colegas um rodízio de rega. Na sexta, as folhas estavam verdes outra vez.",
      highlights: ["horta seca", "pegadas", "torneira pingando", "rodízio de rega", "folhas verdes"],
      tip: "Antes de responder, marque uma pista do texto. Sem pista, a resposta vira chute.",
      exampleTitle: "Como responder usando pistas",
      exampleSentences: [
        { text: "Pergunta de localizar: Quando a turma encontrou a horta seca? → Na segunda-feira." },
        { text: "Pergunta de inferir: Por que a horta melhorou? → Porque a turma organizou um rodízio de rega." },
        { text: "Pergunta de avaliar: A atitude de Bia foi importante? → Sim, porque ela observou o problema e mobilizou os colegas." },
      ],
      exampleImage: IMG.livro,
      exampleConclusion:
        "A resposta completa tem ideia + prova: a horta melhorou porque os alunos passaram a regar com organização.",
      question: "No texto da horta, qual pista mostra uma possível causa do problema?",
      options: [
        { text: "A torneira estava pingando", isCorrect: true },
        { text: "As folhas estavam verdes na sexta", isCorrect: false },
        { text: "A turma estudava na escola", isCorrect: false },
      ],
    },
  },
  {
    keys: ["parcialidade", "imparcialidade", "jornal", "jornalístico", "jornalistico", "notícia", "noticia", "relato de fatos", "proposta editorial"],
    pack: {
      topic: "LEITURA CRÍTICA DE NOTÍCIAS",
      highlight: "FATO NÃO É OPINIÃO",
      summary:
        "Uma notícia pode informar o mesmo fato com escolhas diferentes de palavras, imagens e destaques. Essas escolhas mudam o efeito no leitor.",
      emoji: "📰",
      heroImage: IMG.livro,
      heroCaption: "Comparar manchetes ajuda a perceber recortes e intenções.",
      pairs: [
        { left: "Fato", right: "Acontecimento verificável: algo que pode ser conferido" },
        { left: "Opinião", right: "Julgamento: mostra o que alguém pensa sobre o fato" },
        { left: "Recorte", right: "Parte escolhida para aparecer com mais destaque" },
        { left: "Efeito de sentido", right: "Sensação que a palavra provoca no leitor" },
      ],
      shortText:
        "Compare as manchetes: A) 'Alunos ocupam praça para cobrar limpeza'. B) 'Grupo causa tumulto em praça pública'. O fato pode ser o mesmo, mas as palavras criam leituras diferentes.",
      highlights: ["ocupam", "cobrar limpeza", "causa tumulto", "praça pública"],
      tip: "Pergunte: esta palavra informa ou tenta me fazer sentir algo?",
      exampleTitle: "Comparando duas manchetes",
      exampleSentences: [
        { text: "Manchete A destaca reivindicação: 'cobrar limpeza'." },
        { text: "Manchete B destaca conflito: 'causa tumulto'." },
        { text: "Conclusão: a escolha das palavras muda a imagem dos alunos." },
      ],
      exampleConclusion:
        "Leitura crítica é separar fato, escolha de linguagem e opinião antes de concluir.",
      question: "Qual palavra deixa a manchete B mais negativa?",
      options: [
        { text: "Tumulto", isCorrect: true },
        { text: "Praça", isCorrect: false },
        { text: "Grupo", isCorrect: false },
      ],
    },
  },
  {
    keys: ["oração", "oracao", "sujeito", "predicado"],
    pack: {
      topic: "SUJEITO E PREDICADO",
      highlight: "QUEM FAZ + O QUE FAZ",
      summary: "Sujeito é DE QUEM se fala. Predicado é O QUE se fala dele.",
      emoji: "📝",
      pairs: [
        { left: "Sujeito", right: "QUEM" },
        { left: "Predicado", right: "O QUE" },
        { left: "Verbo", right: "Está no predicado" },
      ],
      shortText: "Ex: [O cachorro] [latiu alto]. Sujeito = O cachorro · Predicado = latiu alto.",
      highlights: ["sujeito", "predicado"],
      exampleTitle: "Identifique",
      exampleSentences: [
        { text: "[A Ana] [comeu pizza]" },
        { text: "[Choveu muito] → sujeito oculto" },
      ],
      exampleConclusion: "Pergunte 'quem?' antes do verbo pra achar o sujeito.",
      question: "Em 'Pedro estuda história', o sujeito é:",
      options: [
        { text: "Pedro", isCorrect: true },
        { text: "Estuda", isCorrect: false },
        { text: "História", isCorrect: false },
      ],
    },
  },
  {
    keys: ["verbo", "tempo verbal", "conjugação"],
    pack: {
      topic: "VERBOS",
      highlight: "AÇÃO EM 3 TEMPOS",
      summary: "Passado (foi), Presente (é), Futuro (será). Verbo indica ação ou estado.",
      emoji: "⏰",
      pairs: [
        { left: "Eu estudei", right: "Passado" },
        { left: "Eu estudo", right: "Presente" },
        { left: "Eu estudarei", right: "Futuro" },
      ],
      shortText: "Os 3 tempos básicos vêm com 3 modos: indicativo, subjuntivo, imperativo.",
      highlights: ["passado", "presente", "futuro"],
      exampleTitle: "Conjugue CANTAR",
      exampleSentences: [
        { text: "Ontem eu cantei" },
        { text: "Hoje eu canto" },
        { text: "Amanhã eu cantarei" },
      ],
      exampleConclusion: "Tempo do verbo localiza a ação no tempo.",
      question: "'Eu falei' está em qual tempo?",
      options: [
        { text: "Passado", isCorrect: true },
        { text: "Presente", isCorrect: false },
        { text: "Futuro", isCorrect: false },
      ],
    },
  },
  {
    keys: ["figura de linguagem", "metáfora", "metafora"],
    pack: {
      topic: "FIGURAS DE LINGUAGEM",
      highlight: "FALAR COM ESTILO",
      summary: "Recursos pra dar mais força, beleza ou emoção ao texto.",
      emoji: "🎭",
      pairs: [
        { left: "Metáfora", right: "Comparar sem 'como'" },
        { left: "Comparação", right: "Usa 'como'" },
        { left: "Hipérbole", right: "Exagero" },
        { left: "Personificação", right: "Dar vida ao objeto" },
      ],
      shortText: "Metáfora: 'Ela é um furacão'. Comparação: 'Ela é como um furacão'.",
      highlights: ["metáfora", "hipérbole"],
      exampleTitle: "Identifique",
      exampleSentences: [
        { text: "'Estou morrendo de fome' → hipérbole" },
        { text: "'O vento sussurrou' → personificação" },
      ],
      exampleConclusion: "Figuras enriquecem música, poesia e texto literário.",
      question: "'Chorei rios de lágrimas' é qual figura?",
      options: [
        { text: "Hipérbole (exagero)", isCorrect: true },
        { text: "Metáfora", isCorrect: false },
        { text: "Comparação", isCorrect: false },
      ],
    },
  },
  {
    keys: ["gênero textual", "genero", "narrativa", "dissertativo", "argumentativo"],
    pack: {
      topic: "GÊNEROS TEXTUAIS",
      highlight: "CADA TEXTO TEM SUA FORMA",
      summary: "Notícia, conto, crônica, artigo, poema — cada um com função e estrutura.",
      emoji: "📰",
      heroImage: IMG.livro,
      heroCaption: "Diferentes gêneros textuais",
      pairs: [
        { left: "Notícia", right: "Informa fato" },
        { left: "Conto", right: "Narrativa curta" },
        { left: "Artigo de opinião", right: "Defende ideia" },
        { left: "Poema", right: "Versos e ritmo" },
      ],
      shortText: "Identifique o gênero pela intenção: informar, narrar, convencer, emocionar?",
      highlights: ["intenção"],
      exampleTitle: "Onde aparece?",
      exampleSentences: [
        { text: "Jornal → notícia" },
        { text: "Livro de poesia → poema" },
        { text: "Redes sociais → meme, post" },
      ],
      exampleConclusion: "Saber o gênero ajuda a ler com mais propósito.",
      question: "Texto que DEFENDE uma opinião é:",
      options: [
        { text: "Artigo de opinião", isCorrect: true },
        { text: "Receita", isCorrect: false },
        { text: "Notícia", isCorrect: false },
      ],
    },
  },
  {
    keys: ["concordância", "concordancia"],
    pack: {
      topic: "CONCORDÂNCIA",
      highlight: "VERBO COMBINA COM SUJEITO",
      summary: "Sujeito no plural → verbo no plural. Sujeito no singular → verbo no singular.",
      emoji: "🔗",
      pairs: [
        { left: "Os meninos", right: "correm" },
        { left: "O menino", right: "corre" },
        { left: "Eu e você", right: "vamos" },
      ],
      shortText: "Sujeitos diferentes somam: 'Eu + você = nós → vamos'.",
      highlights: ["plural", "singular"],
      exampleTitle: "Corrija",
      exampleSentences: [
        { text: "❌ Os alunos chegou" },
        { text: "✅ Os alunos chegaram" },
      ],
      exampleConclusion: "Sempre cheque: o verbo tá combinando com o sujeito?",
      question: "Qual frase está correta?",
      options: [
        { text: "As crianças brincam no parque", isCorrect: true },
        { text: "As crianças brinca no parque", isCorrect: false },
        { text: "A criança brincam no parque", isCorrect: false },
      ],
    },
  },
];

// =================== PACOTES — HISTÓRIA ===================
const HI_PACKS: Array<{ keys: string[]; pack: Pack }> = [
  {
    keys: ["egito", "egípcio", "egipcio", "faraó"],
    pack: {
      topic: "EGITO ANTIGO",
      highlight: "ÀS MARGENS DO NILO",
      summary: "Civilização que floresceu há 5 mil anos graças ao rio Nilo.",
      emoji: "🐫",
      heroImage: IMG.egito,
      heroCaption: "Pirâmides de Gizé, Egito",
      pairs: [
        { left: "Rio", right: "Nilo" },
        { left: "Governo", right: "Faraó (rei-deus)" },
        { left: "Escrita", right: "Hieróglifos" },
        { left: "Monumentos", right: "Pirâmides" },
      ],
      shortText: "O Nilo enchia e fertilizava as margens — sem ele, não havia Egito.",
      highlights: ["Nilo", "faraó", "hieróglifos"],
      exampleTitle: "Pirâmides",
      exampleSentences: [
        { text: "Tumbas de faraós" },
        { text: "Maior: Quéops (Gizé)" },
      ],
      exampleImage: IMG.egito,
      exampleConclusion: "Egito = rio + faraó + religião.",
      question: "Qual rio foi essencial para o Egito Antigo?",
      options: [
        { text: "Nilo", isCorrect: true },
        { text: "Amazonas", isCorrect: false },
        { text: "Tigre", isCorrect: false },
      ],
    },
  },
  {
    keys: ["grécia", "grecia", "atenas", "esparta", "democracia"],
    pack: {
      topic: "GRÉCIA ANTIGA",
      highlight: "BERÇO DA DEMOCRACIA",
      summary: "Cidades-estado independentes. Atenas inventou a democracia.",
      emoji: "🏛️",
      heroImage: IMG.grecia,
      heroCaption: "Pártenon, Atenas",
      pairs: [
        { left: "Polis", right: "Cidade-estado" },
        { left: "Atenas", right: "Democracia, filosofia" },
        { left: "Esparta", right: "Militar, disciplinada" },
        { left: "Legado", right: "Filosofia + Olimpíadas" },
      ],
      shortText: "Só homens adultos atenienses votavam — mulheres, escravos e estrangeiros não.",
      highlights: ["democracia", "polis"],
      exampleTitle: "Pensadores",
      exampleSentences: [
        { text: "Sócrates → 'Só sei que nada sei'" },
        { text: "Platão → A República" },
        { text: "Aristóteles → Lógica" },
      ],
      exampleConclusion: "Grécia moldou política e pensamento ocidental.",
      question: "Qual cidade-estado criou a democracia?",
      options: [
        { text: "Atenas", isCorrect: true },
        { text: "Esparta", isCorrect: false },
        { text: "Roma", isCorrect: false },
      ],
    },
  },
  {
    keys: ["roma", "romano", "império"],
    pack: {
      topic: "ROMA ANTIGA",
      highlight: "DO MEDITERRÂNEO AO MUNDO",
      summary: "Roma cresceu de cidade a império que durou mais de 1000 anos.",
      emoji: "🏟️",
      heroImage: IMG.roma,
      heroCaption: "Coliseu de Roma",
      pairs: [
        { left: "Monarquia", right: "753–509 a.C." },
        { left: "República", right: "509–27 a.C." },
        { left: "Império", right: "27 a.C.–476 d.C." },
      ],
      shortText: "Direito Romano e o latim formam a base de muitas leis e idiomas (PT, ES, FR, IT).",
      highlights: ["latim", "direito"],
      exampleTitle: "Legado",
      exampleSentences: [
        { text: "Estradas e aquedutos" },
        { text: "Calendário juliano" },
        { text: "Numerais romanos" },
      ],
      exampleConclusion: "Roma deu forma ao Ocidente.",
      question: "Roma caiu (Império Romano do Ocidente) em:",
      options: [
        { text: "476 d.C.", isCorrect: true },
        { text: "27 a.C.", isCorrect: false },
        { text: "1492", isCorrect: false },
      ],
    },
  },
  {
    keys: ["brasil colônia", "colônia", "colonia", "descobrimento"],
    pack: {
      topic: "BRASIL COLÔNIA",
      highlight: "1500–1822",
      summary: "Portugal colonizou o Brasil por mais de 300 anos: pau-brasil, cana, ouro.",
      emoji: "⛵",
      pairs: [
        { left: "1500", right: "Cabral chega" },
        { left: "Pau-brasil", right: "1ª exploração" },
        { left: "Cana-de-açúcar", right: "Engenhos no NE" },
        { left: "Ouro", right: "Século XVIII (MG)" },
      ],
      shortText: "Mão de obra: indígena no início, depois africana escravizada (séc. XVI–XIX).",
      highlights: ["escravidão", "ouro", "cana"],
      exampleTitle: "Linha do tempo",
      exampleSentences: [
        { text: "1500 — Cabral" },
        { text: "1530 — Capitanias" },
        { text: "1822 — Independência" },
      ],
      exampleConclusion: "Colônia explorada para enriquecer Portugal.",
      question: "Qual foi o PRIMEIRO produto explorado no Brasil?",
      options: [
        { text: "Pau-brasil", isCorrect: true },
        { text: "Café", isCorrect: false },
        { text: "Soja", isCorrect: false },
      ],
    },
  },
];

// =================== PACOTES — GEOGRAFIA ===================
const GE_PACKS: Array<{ keys: string[]; pack: Pack }> = [
  {
    keys: ["regiões do brasil", "regioes", "brasil"],
    pack: {
      topic: "REGIÕES DO BRASIL",
      highlight: "5 REGIÕES OFICIAIS",
      summary: "Norte, Nordeste, Centro-Oeste, Sudeste, Sul — cada uma com clima e cultura próprios.",
      emoji: "🇧🇷",
      heroImage: IMG.brasil,
      heroCaption: "Mapa do Brasil",
      pairs: [
        { left: "Norte", right: "Amazônia, calor úmido" },
        { left: "Nordeste", right: "Praias, sertão, cultura forte" },
        { left: "Centro-Oeste", right: "Cerrado, agronegócio" },
        { left: "Sudeste", right: "Mais populoso e industrial" },
        { left: "Sul", right: "Clima temperado, imigração europeia" },
      ],
      shortText: "Cada região tem bioma e economia predominantes diferentes.",
      highlights: ["bioma", "clima"],
      exampleTitle: "Onde fica?",
      exampleSentences: [
        { text: "São Paulo → Sudeste" },
        { text: "Bahia → Nordeste" },
        { text: "Manaus → Norte" },
      ],
      exampleImage: IMG.brasil,
      exampleConclusion: "Brasil tem 5 regiões, 26 estados + DF.",
      question: "A Amazônia está em qual região?",
      options: [
        { text: "Norte", isCorrect: true },
        { text: "Sul", isCorrect: false },
        { text: "Sudeste", isCorrect: false },
      ],
    },
  },
  {
    keys: ["clima", "tempo atmosférico"],
    pack: {
      topic: "CLIMA",
      highlight: "CLIMA ≠ TEMPO",
      summary: "Tempo é o que faz agora. Clima é o padrão de muitos anos.",
      emoji: "🌦️",
      pairs: [
        { left: "Tropical", right: "Quente, chuvas no verão" },
        { left: "Equatorial", right: "Quente e úmido o ano todo" },
        { left: "Semiárido", right: "Pouca chuva (sertão)" },
        { left: "Subtropical", right: "4 estações marcadas (Sul)" },
      ],
      shortText: "Latitude, altitude, vegetação e maré afetam o clima.",
      highlights: ["latitude", "altitude"],
      exampleTitle: "Onde",
      exampleSentences: [
        { text: "Manaus → equatorial" },
        { text: "Sertão da Bahia → semiárido" },
      ],
      exampleConclusion: "Cada lugar tem seu clima por causa da geografia.",
      question: "O clima da Amazônia é:",
      options: [
        { text: "Equatorial", isCorrect: true },
        { text: "Polar", isCorrect: false },
        { text: "Mediterrâneo", isCorrect: false },
      ],
    },
  },
  {
    keys: ["continente", "mundo", "planisfério"],
    pack: {
      topic: "CONTINENTES",
      highlight: "6 CONTINENTES",
      summary: "África, América, Antártida, Ásia, Europa, Oceania.",
      emoji: "🌍",
      heroImage: IMG.mapaMundi,
      heroCaption: "Mapa-múndi",
      pairs: [
        { left: "Maior", right: "Ásia" },
        { left: "Mais populoso", right: "Ásia" },
        { left: "Menor", right: "Oceania" },
      ],
      shortText: "Brasil está na América do Sul, no continente americano.",
      highlights: ["Ásia", "Oceania"],
      exampleTitle: "Localize",
      exampleSentences: [
        { text: "Brasil → América do Sul" },
        { text: "Egito → África" },
        { text: "Japão → Ásia" },
      ],
      exampleConclusion: "Saber continentes ajuda a entender o mundo.",
      question: "Qual o MAIOR continente?",
      options: [
        { text: "Ásia", isCorrect: true },
        { text: "Europa", isCorrect: false },
        { text: "Oceania", isCorrect: false },
      ],
    },
  },
];

// =================== INGLÊS, ARTE, EF, RELIGIÃO ===================
const LI_PACKS: Array<{ keys: string[]; pack: Pack }> = [
  {
    keys: ["verb to be", "to be", "present"],
    pack: {
      topic: "VERB TO BE",
      highlight: "AM · IS · ARE",
      summary: "I am · He/She/It is · You/We/They are.",
      emoji: "🇬🇧",
      pairs: [
        { left: "I", right: "am" },
        { left: "He/She/It", right: "is" },
        { left: "You/We/They", right: "are" },
      ],
      shortText: "Negativo: add 'not'. Question: invert subject and verb.",
      highlights: ["am", "is", "are"],
      exampleTitle: "Examples",
      exampleSentences: [
        { text: "I am a student." },
        { text: "She is happy." },
        { text: "They are friends." },
      ],
      exampleConclusion: "Verb to be = ser/estar.",
      question: "Complete: 'She ___ a teacher.'",
      options: [
        { text: "is", isCorrect: true },
        { text: "are", isCorrect: false },
        { text: "am", isCorrect: false },
      ],
    },
  },
];

const AR_PACKS: Array<{ keys: string[]; pack: Pack }> = [];
const EF_PACKS: Array<{ keys: string[]; pack: Pack }> = [];
const ER_PACKS: Array<{ keys: string[]; pack: Pack }> = [];

const PACKS_BY_SUBJECT: Record<SubjectKey, Array<{ keys: string[]; pack: Pack }>> = {
  CI: CI_PACKS,
  MA: MA_PACKS,
  LP: LP_PACKS,
  HI: HI_PACKS,
  GE: GE_PACKS,
  LI: LI_PACKS,
  AR: AR_PACKS,
  EF: EF_PACKS,
  ER: ER_PACKS,
};

function pickPack(subject: SubjectKey, titulo: string, bnccObjective = ""): Pack | null {
  const t = `${titulo ?? ""} ${bnccObjective ?? ""}`.toLowerCase();
  for (const entry of PACKS_BY_SUBJECT[subject]) {
    if (entry.keys.some((k) => t.includes(k))) return entry.pack;
  }
  return null;
}

function lpFallbackPack(titulo: string, grade: string, bnccObjective = ""): Pack {
  const cleanTitle = titulo.replace(/\s*-\s*\d+º\s*Ano\s*$/i, "").trim() || "Leitura e produção de sentido";
  const foco = bnccObjective || cleanTitle;

  return {
    topic: cleanTitle.toUpperCase().slice(0, 40),
    highlight: "AULA COM TEXTO-BASE",
    summary:
      "Nesta aula você vai trabalhar com um texto curto, marcar pistas e responder com prova — não apenas decorar a habilidade.",
    emoji: "📚",
    heroImage: IMG.livro,
    heroCaption: `Língua Portuguesa — ${grade}`,
    pairs: [
      { left: "Texto-base", right: "O bairro ganhou uma biblioteca comunitária em uma sala antiga da estação." },
      { left: "Pista 1", right: "Moradores doaram livros e organizaram prateleiras por assunto." },
      { left: "Pista 2", right: "Depois da abertura, mais crianças passaram a ler no fim da tarde." },
      { left: "Ideia central", right: "Quando a comunidade participa, um espaço abandonado vira oportunidade de aprendizagem." },
    ],
    shortText:
      `Texto-base: O bairro ganhou uma biblioteca comunitária em uma sala antiga da estação. Moradores doaram livros, limparam o espaço e organizaram prateleiras por assunto. Depois da abertura, mais crianças passaram a ler no fim da tarde. Foco da aula: ${foco}`,
    highlights: ["biblioteca comunitária", "moradores doaram", "crianças passaram a ler"],
    tip: "Resposta forte cita uma pista do texto e explica o que ela mostra.",
    exampleTitle: "Modelo de resposta completa",
    exampleSentences: [
      { text: "Localizar: Onde surgiu a biblioteca? → Em uma sala antiga da estação." },
      { text: "Inferir: Por que o projeto deu certo? → Porque os moradores participaram com doações e organização." },
      { text: "Relacionar: O espaço mudou de função: antes sala antiga; depois lugar de leitura." },
    ],
    exampleImage: IMG.livro,
    exampleConclusion:
      "A resposta ensina porque junta texto + raciocínio: a comunidade transformou um espaço parado em aprendizagem.",
    question: "Qual informação prova que a comunidade participou da biblioteca?",
    options: [
      { text: "Moradores doaram livros e organizaram prateleiras", isCorrect: true },
      { text: "A estação era antiga", isCorrect: false },
      { text: "As crianças liam no fim da tarde", isCorrect: false },
    ],
  };
}

// Fallback enxuto — mantém padrão visual + pergunta real, sem texto cansativo.
function genericPack(subject: SubjectKey, titulo: string, grade: string, bnccObjective = ""): Pack {
  const cleanTitle = titulo.replace(/\s*-\s*\d+º\s*Ano\s*$/i, "").trim();
  const subjectName = SUBJECT_NAME[subject];
  const emoji = SUBJECT_EMOJI[subject];

  if (subject === "LP") return lpFallbackPack(cleanTitle, grade, bnccObjective);

  return {
    topic: cleanTitle.toUpperCase().slice(0, 40),
    highlight: cleanTitle.toUpperCase().slice(0, 40),
    summary: `Aula de ${subjectName} (${grade}) — vamos direto ao ponto.`,
    emoji,
    pairs: [
      { left: "Conceito", right: cleanTitle },
      { left: "Disciplina", right: subjectName },
      { left: "Série", right: grade },
    ],
    shortText: `Tema desta aula: ${cleanTitle}. Foque nas palavras-chave do título e relacione com exemplos do seu dia a dia.`,
    highlights: [cleanTitle],
    tip: "Anote 1 frase no caderno resumindo o que entendeu.",
    exampleTitle: cleanTitle,
    exampleSentences: [
      { text: `Identifique 2 palavras-chave em "${cleanTitle}".` },
      { text: "Procure um exemplo real (notícia, vídeo, livro)." },
      { text: "Explique com suas palavras." },
    ],
    exampleConclusion: "Quem explica, aprende em dobro.",
    question: `Esta aula é da disciplina de…`,
    options: [
      { text: subjectName, isCorrect: true },
      { text: subject === "MA" ? "História" : "Matemática", isCorrect: false },
      { text: subject === "CI" ? "Educação Física" : "Ciências", isCorrect: false },
    ],
  };
}

function buildLesson(code: string, titulo: string, bnccObjective = ""): ActivityLesson | null {
  const subject = subjectFromCode(code);
  const grade = gradeFromCode(code);
  if (!subject || !grade) return null;

  const pack = pickPack(subject, titulo, bnccObjective) ?? genericPack(subject, titulo, grade, bnccObjective);

  const optionsWithColor = pack.options.map((o, i) => ({
    ...o,
    color: COLORS[i % COLORS.length],
  }));

  return {
    id: code.toLowerCase(),
    title: titulo.replace(/\s*-\s*\d+º\s*Ano\s*$/i, "").trim() || pack.topic,
    topic: pack.topic,
    subject: `${SUBJECT_NAME[subject]} — ${grade}`,
    xp: 200,
    screens: {
      explicacao: {
        instruction: "Aula de hoje",
        highlight: pack.highlight,
        summary: pack.summary,
        visual_emoji: pack.emoji,
        image_url: pack.heroImage,
        image_caption: pack.heroCaption,
      },
      exploracao: {
        instruction: "Os pontos-chave:",
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
        image_url: pack.exampleImage,
        image_caption: pack.exampleCaption,
      },
      praticar: {
        question: pack.question,
        options: optionsWithColor,
      },
    },
  };
}

export function generateActivityLesson6a9(
  codigo: string,
  titulo: string,
  bnccObjective = "",
): ActivityLesson | null {
  return buildLesson(codigo, titulo, bnccObjective);
}
