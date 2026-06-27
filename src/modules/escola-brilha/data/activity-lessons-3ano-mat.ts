import { ActivityLesson } from "../types/activity-lesson";

/**
 * Etapa 1 — 3º Ano · Matemática
 * Layout EF03MA17/EF03LP08 (5 telas): explicação → exploração → explicação curta
 * → exemplo visual → praticar. Reaproveita ActivityPlayer.
 */

type Seed = {
  topic: string;
  highlight: string;
  summary: string;
  emoji: string;
  pairs: { left: string; right: string }[];
  shortText: string;
  highlights?: string[];
  tip?: string;
  example: {
    title: string;
    sentences: { text: string; emoji?: string }[];
    conclusion: string;
  };
  question: string;
  options: { text: string; isCorrect: boolean; color: "red" | "green" | "orange" | "blue" | "purple" | "yellow" }[];
};

const xp = 150;

function build(code: string, title: string, s: Seed): ActivityLesson {
  return {
    id: code.toLowerCase(),
    title,
    topic: s.topic,
    subject: "Matemática — 3º Ano",
    xp,
    screens: {
      explicacao: {
        instruction: "Vamos aprender sobre",
        highlight: s.highlight,
        summary: s.summary,
        visual_emoji: s.emoji,
      },
      exploracao: {
        instruction: "Olha estes exemplos:",
        pairs: s.pairs,
      },
      explicacao_curta: {
        text: s.shortText,
        highlights: s.highlights,
        tip: s.tip,
      },
      exemplo_visual: {
        title: s.example.title,
        sentences: s.example.sentences,
        conclusion: s.example.conclusion,
      },
      praticar: {
        question: s.question,
        options: s.options,
      },
    },
  };
}

export const LESSONS_3ANO_MAT: Record<string, ActivityLesson> = {
  EF03MA01: build("EF03MA01", "Números até 1000", {
    topic: "NÚMEROS NATURAIS",
    highlight: "NÚMEROS ATÉ 1000",
    summary: "Aprenda a ler, escrever e comparar números de 0 a 1000.",
    emoji: "🔢",
    pairs: [
      { left: "245", right: "duzentos e quarenta e cinco" },
      { left: "100", right: "cem" },
      { left: "999", right: "novecentos e noventa e nove" },
    ],
    shortText: "Todo número tem ordem: unidade, dezena e centena. 358 = 3 centenas + 5 dezenas + 8 unidades.",
    highlights: ["centena", "dezena", "unidade"],
    tip: "Para comparar, olhe primeiro a casa maior: a centena!",
    example: {
      title: "Quem é maior?",
      sentences: [
        { text: "423 tem 4 centenas.", emoji: "💯" },
        { text: "298 tem 2 centenas.", emoji: "💯" },
      ],
      conclusion: "423 é maior que 298!",
    },
    question: "Qual número é MAIOR?",
    options: [
      { text: "356", isCorrect: false, color: "red" },
      { text: "812", isCorrect: true, color: "green" },
      { text: "199", isCorrect: false, color: "orange" },
    ],
  }),

  EF03MA02: build("EF03MA02", "Sistema decimal", {
    topic: "SISTEMA DECIMAL",
    highlight: "DEZ EM DEZ",
    summary: "10 unidades formam 1 dezena. 10 dezenas formam 1 centena.",
    emoji: "🔟",
    pairs: [
      { left: "10 unidades", right: "1 dezena" },
      { left: "10 dezenas", right: "1 centena" },
      { left: "100 unidades", right: "1 centena" },
    ],
    shortText: "Quando juntamos 10 de um valor, viramos para a próxima ordem. É a base do nosso sistema.",
    highlights: ["10 de um valor"],
    tip: "Pense numa caixa que estoura quando chega em 10!",
    example: {
      title: "Decompondo 247:",
      sentences: [
        { text: "2 centenas = 200", emoji: "💯" },
        { text: "4 dezenas = 40", emoji: "🔟" },
        { text: "7 unidades = 7", emoji: "1️⃣" },
      ],
      conclusion: "200 + 40 + 7 = 247",
    },
    question: "Quantas dezenas tem o número 60?",
    options: [
      { text: "6 dezenas", isCorrect: true, color: "green" },
      { text: "60 dezenas", isCorrect: false, color: "red" },
      { text: "10 dezenas", isCorrect: false, color: "orange" },
    ],
  }),

  EF03MA03: build("EF03MA03", "Multiplicação por 2", {
    topic: "TABUADA DO 2",
    highlight: "× 2",
    summary: "Multiplicar por 2 é o mesmo que somar o número com ele mesmo.",
    emoji: "✖️",
    pairs: [
      { left: "2 × 3", right: "6" },
      { left: "2 × 5", right: "10" },
      { left: "2 × 7", right: "14" },
    ],
    shortText: "2 × 4 quer dizer 4 + 4. É juntar 2 grupos iguais.",
    highlights: ["2 grupos iguais"],
    tip: "Multiplicar por 2 = dobrar!",
    example: {
      title: "2 sacos com 5 maçãs cada:",
      sentences: [
        { text: "Saco 1: 🍎🍎🍎🍎🍎", emoji: "" },
        { text: "Saco 2: 🍎🍎🍎🍎🍎", emoji: "" },
      ],
      conclusion: "2 × 5 = 10 maçãs!",
    },
    question: "Quanto é 2 × 6?",
    options: [
      { text: "8", isCorrect: false, color: "red" },
      { text: "12", isCorrect: true, color: "green" },
      { text: "16", isCorrect: false, color: "orange" },
    ],
  }),

  EF03MA04: build("EF03MA04", "Multiplicação por 5", {
    topic: "TABUADA DO 5",
    highlight: "× 5",
    summary: "Multiplicar por 5 é juntar grupos de 5.",
    emoji: "🖐️",
    pairs: [
      { left: "5 × 2", right: "10" },
      { left: "5 × 4", right: "20" },
      { left: "5 × 6", right: "30" },
    ],
    shortText: "Os resultados da tabuada do 5 sempre terminam em 0 ou 5.",
    highlights: ["terminam em 0 ou 5"],
    tip: "Conte de 5 em 5: 5, 10, 15, 20, 25…",
    example: {
      title: "3 mãos abertas:",
      sentences: [
        { text: "Cada mão tem 5 dedos.", emoji: "🖐️" },
        { text: "5 + 5 + 5 = 15", emoji: "" },
      ],
      conclusion: "5 × 3 = 15 dedos!",
    },
    question: "Quanto é 5 × 7?",
    options: [
      { text: "30", isCorrect: false, color: "red" },
      { text: "35", isCorrect: true, color: "green" },
      { text: "40", isCorrect: false, color: "orange" },
    ],
  }),

  EF03MA05: build("EF03MA05", "Cálculo mental", {
    topic: "CÁLCULO MENTAL",
    highlight: "CONTA RÁPIDA",
    summary: "Use truques para somar e subtrair de cabeça.",
    emoji: "🧠",
    pairs: [
      { left: "27 + 10", right: "37" },
      { left: "50 + 50", right: "100" },
      { left: "80 − 30", right: "50" },
    ],
    shortText: "Para somar 9, some 10 e tire 1. Para somar 11, some 10 e ponha 1.",
    highlights: ["some 10 e tire 1"],
    tip: "Arredonde primeiro, depois ajuste!",
    example: {
      title: "Calcular 48 + 9 de cabeça:",
      sentences: [
        { text: "Some 48 + 10 = 58", emoji: "➕" },
        { text: "Agora tire 1: 58 − 1 = 57", emoji: "➖" },
      ],
      conclusion: "48 + 9 = 57",
    },
    question: "Quanto é 35 + 20 de cabeça?",
    options: [
      { text: "45", isCorrect: false, color: "red" },
      { text: "55", isCorrect: true, color: "green" },
      { text: "65", isCorrect: false, color: "orange" },
    ],
  }),

  EF03MA06: build("EF03MA06", "Problemas de adição e subtração", {
    topic: "PROBLEMAS +/−",
    highlight: "JUNTAR OU TIRAR",
    summary: "Leia o problema e descubra: é para somar ou para subtrair?",
    emoji: "📖",
    pairs: [
      { left: "ganhou, juntou", right: "somar +" },
      { left: "perdeu, gastou", right: "subtrair −" },
      { left: "sobrou, falta", right: "subtrair −" },
    ],
    shortText: "Palavras como 'ganhou', 'juntou' pedem soma. 'Perdeu', 'sobrou' pedem subtração.",
    highlights: ["ganhou", "perdeu"],
    tip: "Sublinhe o que aumenta e o que diminui!",
    example: {
      title: "João tinha 25 figurinhas e ganhou 12:",
      sentences: [
        { text: "Ganhou → SOMA", emoji: "➕" },
        { text: "25 + 12 = 37", emoji: "" },
      ],
      conclusion: "Agora ele tem 37 figurinhas!",
    },
    question: "Ana tinha 40 reais e gastou 15. Quantos sobraram?",
    options: [
      { text: "55", isCorrect: false, color: "red" },
      { text: "25", isCorrect: true, color: "green" },
      { text: "15", isCorrect: false, color: "orange" },
    ],
  }),

  EF03MA07: build("EF03MA07", "Subtração com reserva", {
    topic: "SUBTRAÇÃO COM RESERVA",
    highlight: "PEDIR EMPRESTADO",
    summary: "Quando não dá para tirar, peça 1 dezena emprestada!",
    emoji: "➖",
    pairs: [
      { left: "32 − 17", right: "15" },
      { left: "50 − 23", right: "27" },
      { left: "81 − 46", right: "35" },
    ],
    shortText: "Se a unidade de cima é menor, pega 1 dezena de cima e vira 10 unidades.",
    highlights: ["pega 1 dezena", "vira 10 unidades"],
    tip: "Quem empresta fica com menos 1!",
    example: {
      title: "42 − 18 passo a passo:",
      sentences: [
        { text: "2 − 8? Não dá!", emoji: "🤔" },
        { text: "Pega 1 da dezena: 12 − 8 = 4", emoji: "✋" },
        { text: "Agora 3 − 1 = 2", emoji: "" },
      ],
      conclusion: "42 − 18 = 24",
    },
    question: "Quanto é 53 − 27?",
    options: [
      { text: "26", isCorrect: true, color: "green" },
      { text: "34", isCorrect: false, color: "red" },
      { text: "30", isCorrect: false, color: "orange" },
    ],
  }),

  EF03MA08: build("EF03MA08", "Divisão", {
    topic: "DIVISÃO",
    highlight: "REPARTIR EM PARTES IGUAIS",
    summary: "Dividir é separar uma quantidade em grupos iguais.",
    emoji: "➗",
    pairs: [
      { left: "10 ÷ 2", right: "5" },
      { left: "12 ÷ 3", right: "4" },
      { left: "20 ÷ 5", right: "4" },
    ],
    shortText: "12 ÷ 4 = quantos cabem em cada grupo se eu fizer 4 grupos iguais.",
    highlights: ["grupos iguais"],
    tip: "Divisão é o contrário da multiplicação!",
    example: {
      title: "8 balas para 4 amigos:",
      sentences: [
        { text: "🍬🍬 para cada um", emoji: "" },
        { text: "8 ÷ 4 = 2", emoji: "" },
      ],
      conclusion: "Cada amigo ganha 2 balas!",
    },
    question: "15 ÷ 3 = ?",
    options: [
      { text: "3", isCorrect: false, color: "red" },
      { text: "5", isCorrect: true, color: "green" },
      { text: "12", isCorrect: false, color: "orange" },
    ],
  }),

  EF03MA09: build("EF03MA09", "Metade, terça e quarta parte", {
    topic: "PARTES IGUAIS",
    highlight: "METADE, TERÇO, QUARTO",
    summary: "Dividir por 2 = metade. Por 3 = terça parte. Por 4 = quarta parte.",
    emoji: "🍰",
    pairs: [
      { left: "metade de 10", right: "5" },
      { left: "terça de 9", right: "3" },
      { left: "quarta de 20", right: "5" },
    ],
    shortText: "Metade = ÷2. Terça parte = ÷3. Quarta parte = ÷4.",
    highlights: ["÷2", "÷3", "÷4"],
    tip: "Pense numa pizza repartida igual!",
    example: {
      title: "Metade de 16:",
      sentences: [
        { text: "16 ÷ 2", emoji: "" },
        { text: "= 8", emoji: "✨" },
      ],
      conclusion: "Metade de 16 é 8!",
    },
    question: "Qual é a metade de 14?",
    options: [
      { text: "6", isCorrect: false, color: "red" },
      { text: "7", isCorrect: true, color: "green" },
      { text: "8", isCorrect: false, color: "orange" },
    ],
  }),

  EF03MA10: build("EF03MA10", "Sequências numéricas", {
    topic: "SEQUÊNCIAS",
    highlight: "PADRÃO DOS NÚMEROS",
    summary: "Em uma sequência os números seguem uma regra: somar, subtrair, etc.",
    emoji: "🧮",
    pairs: [
      { left: "2, 4, 6, 8", right: "+2" },
      { left: "5, 10, 15", right: "+5" },
      { left: "20, 17, 14", right: "−3" },
    ],
    shortText: "Descubra a regra olhando a diferença entre dois números seguidos.",
    highlights: ["regra"],
    tip: "Subtraia o 2º do 1º para achar o salto!",
    example: {
      title: "Sequência: 3, 6, 9, 12, ?",
      sentences: [
        { text: "Regra: somar 3", emoji: "➕" },
        { text: "12 + 3 = 15", emoji: "" },
      ],
      conclusion: "Próximo número: 15!",
    },
    question: "Qual vem depois: 10, 20, 30, ?",
    options: [
      { text: "35", isCorrect: false, color: "red" },
      { text: "40", isCorrect: true, color: "green" },
      { text: "50", isCorrect: false, color: "orange" },
    ],
  }),

  EF03MA11: build("EF03MA11", "Igualdade", {
    topic: "IGUALDADE",
    highlight: "O SINAL =",
    summary: "Os dois lados do sinal = devem valer a mesma coisa.",
    emoji: "⚖️",
    pairs: [
      { left: "5 + 3", right: "= 8" },
      { left: "4 + 4", right: "= 8" },
      { left: "10 − 2", right: "= 8" },
    ],
    shortText: "5 + 3 = 4 + 4 porque os dois lados dão 8.",
    highlights: ["mesma coisa"],
    tip: "Pense numa balança em equilíbrio!",
    example: {
      title: "Complete: 6 + ? = 10",
      sentences: [
        { text: "Lado direito vale 10.", emoji: "" },
        { text: "6 + 4 = 10 ✓", emoji: "" },
      ],
      conclusion: "O número que falta é 4!",
    },
    question: "Complete: 7 + ? = 12",
    options: [
      { text: "3", isCorrect: false, color: "red" },
      { text: "5", isCorrect: true, color: "green" },
      { text: "6", isCorrect: false, color: "orange" },
    ],
  }),

  EF03MA12: build("EF03MA12", "Trajetos e croquis", {
    topic: "LOCALIZAÇÃO",
    highlight: "MAPAS E TRAJETOS",
    summary: "Um croqui mostra o caminho com setas, ruas e pontos de referência.",
    emoji: "🗺️",
    pairs: [
      { left: "↑", right: "siga em frente" },
      { left: "↻", right: "vire à direita" },
      { left: "↺", right: "vire à esquerda" },
    ],
    shortText: "Para descrever um trajeto use: vire à direita, à esquerda, siga em frente.",
    highlights: ["direita", "esquerda"],
    tip: "Use pontos conhecidos: padaria, escola, praça.",
    example: {
      title: "Trajeto da casa até a escola:",
      sentences: [
        { text: "Saia de casa →", emoji: "🏠" },
        { text: "Vire à direita na padaria", emoji: "🥖" },
        { text: "Siga reto até a escola", emoji: "🏫" },
      ],
      conclusion: "Chegou!",
    },
    question: "Para descrever um trajeto, o que NÃO usamos?",
    options: [
      { text: "Setas", isCorrect: false, color: "blue" },
      { text: "Cores do céu", isCorrect: true, color: "green" },
      { text: "Pontos de referência", isCorrect: false, color: "orange" },
    ],
  }),

  EF03MA13: build("EF03MA13", "Sólidos geométricos", {
    topic: "FIGURAS 3D",
    highlight: "SÓLIDOS",
    summary: "Cubo, cone, cilindro e esfera são figuras espaciais (3D).",
    emoji: "🎲",
    pairs: [
      { left: "cubo", right: "dado 🎲" },
      { left: "esfera", right: "bola ⚽" },
      { left: "cilindro", right: "lata 🥫" },
    ],
    shortText: "Sólidos têm comprimento, largura E altura — você consegue pegar na mão.",
    highlights: ["altura"],
    tip: "Procure exemplos na sua casa!",
    example: {
      title: "Que sólido é uma bola de futebol?",
      sentences: [
        { text: "É redonda em todos os lados.", emoji: "⚽" },
        { text: "É uma ESFERA!", emoji: "✨" },
      ],
      conclusion: "Esfera é redonda total!",
    },
    question: "Qual sólido parece com um chapéu de festa?",
    options: [
      { text: "Cubo", isCorrect: false, color: "red" },
      { text: "Cone", isCorrect: true, color: "green" },
      { text: "Esfera", isCorrect: false, color: "orange" },
    ],
  }),

  EF03MA14: build("EF03MA14", "Faces, arestas e vértices", {
    topic: "PARTES DOS SÓLIDOS",
    highlight: "FACE • ARESTA • VÉRTICE",
    summary: "Face é o lado plano. Aresta é a linha. Vértice é o canto.",
    emoji: "🧊",
    pairs: [
      { left: "face", right: "lado plano" },
      { left: "aresta", right: "linha de encontro" },
      { left: "vértice", right: "ponta/canto" },
    ],
    shortText: "Um cubo tem 6 faces, 12 arestas e 8 vértices.",
    highlights: ["6 faces", "8 vértices"],
    tip: "Conte usando um dado!",
    example: {
      title: "Cubo:",
      sentences: [
        { text: "6 quadradinhos = 6 FACES", emoji: "🟦" },
        { text: "8 cantinhos = 8 VÉRTICES", emoji: "" },
      ],
      conclusion: "Esses são as partes de um cubo!",
    },
    question: "Quantas faces tem um cubo?",
    options: [
      { text: "4", isCorrect: false, color: "red" },
      { text: "6", isCorrect: true, color: "green" },
      { text: "8", isCorrect: false, color: "orange" },
    ],
  }),

  EF03MA15: build("EF03MA15", "Figuras planas", {
    topic: "FIGURAS 2D",
    highlight: "FORMAS PLANAS",
    summary: "Triângulo, quadrado, retângulo e círculo são figuras planas.",
    emoji: "🔺",
    pairs: [
      { left: "triângulo", right: "3 lados" },
      { left: "quadrado", right: "4 lados iguais" },
      { left: "retângulo", right: "4 lados (2 a 2)" },
    ],
    shortText: "Figuras planas têm só comprimento e largura — vivem no papel.",
    highlights: ["comprimento", "largura"],
    tip: "Conte os lados para descobrir o nome!",
    example: {
      title: "Uma janela é:",
      sentences: [
        { text: "4 lados, 2 grandes 2 menores", emoji: "🪟" },
        { text: "É um RETÂNGULO!", emoji: "" },
      ],
      conclusion: "Janela é retângulo!",
    },
    question: "Quantos lados tem um triângulo?",
    options: [
      { text: "3", isCorrect: true, color: "green" },
      { text: "4", isCorrect: false, color: "red" },
      { text: "5", isCorrect: false, color: "orange" },
    ],
  }),

  EF03MA16: build("EF03MA16", "Figuras congruentes", {
    topic: "CONGRUÊNCIA",
    highlight: "FIGURAS IGUAIS",
    summary: "Duas figuras são congruentes quando têm a mesma forma e tamanho.",
    emoji: "🟰",
    pairs: [
      { left: "🔺 e 🔺", right: "congruentes" },
      { left: "🔺 e 🔻", right: "congruentes (girou)" },
      { left: "🟦 grande / 🟦 pequeno", right: "NÃO congruentes" },
    ],
    shortText: "Mesmo se virar ou girar, se a forma e o tamanho são iguais, são congruentes.",
    highlights: ["forma e tamanho"],
    tip: "Sobreponha mentalmente uma à outra!",
    example: {
      title: "Dois quadradinhos do mesmo tamanho:",
      sentences: [
        { text: "🟪 igual 🟪", emoji: "" },
        { text: "Mesma forma + mesmo tamanho", emoji: "✨" },
      ],
      conclusion: "São CONGRUENTES!",
    },
    question: "Duas figuras são congruentes quando têm:",
    options: [
      { text: "Mesma cor", isCorrect: false, color: "red" },
      { text: "Mesma forma e tamanho", isCorrect: true, color: "green" },
      { text: "Mesmo nome só", isCorrect: false, color: "orange" },
    ],
  }),

  EF03MA17: build("EF03MA17", "Unidade de medida", {
    topic: "MEDIDAS",
    highlight: "DEPENDE DA UNIDADE",
    summary: "O resultado de uma medida muda conforme a unidade que usamos.",
    emoji: "📏",
    pairs: [
      { left: "1 metro", right: "100 cm" },
      { left: "1 km", right: "1000 m" },
      { left: "1 kg", right: "1000 g" },
    ],
    shortText: "Se medir em centímetros, o número é maior. Em metros, é menor.",
    highlights: ["centímetros", "metros"],
    tip: "Escolha a unidade certa para cada coisa!",
    example: {
      title: "Mesa medida de duas formas:",
      sentences: [
        { text: "1 metro = 100 centímetros", emoji: "📏" },
        { text: "Mesmo tamanho, números diferentes!", emoji: "" },
      ],
      conclusion: "A medida depende da unidade escolhida!",
    },
    question: "1 metro tem quantos centímetros?",
    options: [
      { text: "10 cm", isCorrect: false, color: "red" },
      { text: "100 cm", isCorrect: true, color: "green" },
      { text: "1000 cm", isCorrect: false, color: "orange" },
    ],
  }),

  EF03MA18: build("EF03MA18", "Instrumentos de medida", {
    topic: "INSTRUMENTOS",
    highlight: "FERRAMENTA CERTA",
    summary: "Régua mede comprimento, balança mede massa, relógio mede tempo.",
    emoji: "⏱️",
    pairs: [
      { left: "comprimento", right: "régua/trena" },
      { left: "massa", right: "balança" },
      { left: "tempo", right: "relógio" },
    ],
    shortText: "Cada grandeza pede um instrumento próprio.",
    highlights: ["instrumento próprio"],
    tip: "Nunca peça à balança que diga as horas!",
    example: {
      title: "Para medir o peso de uma fruta:",
      sentences: [
        { text: "Use uma BALANÇA", emoji: "⚖️" },
      ],
      conclusion: "Balança mostra a massa em gramas ou quilos!",
    },
    question: "Para medir o comprimento da mesa, uso:",
    options: [
      { text: "Relógio", isCorrect: false, color: "red" },
      { text: "Régua ou trena", isCorrect: true, color: "green" },
      { text: "Balança", isCorrect: false, color: "orange" },
    ],
  }),

  EF03MA19: build("EF03MA19", "Medir comprimento", {
    topic: "COMPRIMENTO",
    highlight: "METROS E CENTÍMETROS",
    summary: "Medir comprimento é descobrir quanto algo tem do começo ao fim.",
    emoji: "📐",
    pairs: [
      { left: "lápis", right: "≈ 15 cm" },
      { left: "porta", right: "≈ 2 m" },
      { left: "campo de futebol", right: "≈ 100 m" },
    ],
    shortText: "Coisas pequenas: centímetros. Coisas grandes: metros.",
    highlights: ["centímetros", "metros"],
    tip: "Pequeno = cm. Grande = m!",
    example: {
      title: "Caderno medido com régua:",
      sentences: [
        { text: "Começou no 0", emoji: "0️⃣" },
        { text: "Terminou no 20", emoji: "" },
      ],
      conclusion: "O caderno mede 20 cm!",
    },
    question: "Qual unidade você usa pra medir um lápis?",
    options: [
      { text: "Quilômetros", isCorrect: false, color: "red" },
      { text: "Centímetros", isCorrect: true, color: "green" },
      { text: "Metros", isCorrect: false, color: "orange" },
    ],
  }),

  EF03MA20: build("EF03MA20", "Capacidade e massa", {
    topic: "LITROS E QUILOS",
    highlight: "LÍQUIDO E PESO",
    summary: "Capacidade mede líquidos (L). Massa mede o peso (kg, g).",
    emoji: "🥛",
    pairs: [
      { left: "leite", right: "1 litro" },
      { left: "arroz", right: "1 quilo" },
      { left: "remédio", right: "5 mililitros" },
    ],
    shortText: "1 litro = 1000 mililitros. 1 quilo = 1000 gramas.",
    highlights: ["1 litro", "1 quilo"],
    tip: "L para líquido, kg para peso!",
    example: {
      title: "Garrafa de água:",
      sentences: [
        { text: "Cabem 2 litros", emoji: "💧" },
        { text: "= 2000 ml", emoji: "" },
      ],
      conclusion: "Capacidade = quanto cabe dentro!",
    },
    question: "Quanto é 1 quilograma em gramas?",
    options: [
      { text: "10 g", isCorrect: false, color: "red" },
      { text: "1000 g", isCorrect: true, color: "green" },
      { text: "100 g", isCorrect: false, color: "orange" },
    ],
  }),

  EF03MA21: build("EF03MA21", "Comparar áreas", {
    topic: "ÁREA",
    highlight: "QUEM É MAIOR?",
    summary: "Área é o espaço que uma figura plana ocupa.",
    emoji: "🟥",
    pairs: [
      { left: "🟥 grande", right: "área grande" },
      { left: "🟦 pequeno", right: "área pequena" },
      { left: "🟩 iguais", right: "mesma área" },
    ],
    shortText: "Para comparar, sobreponha as figuras ou conte os quadradinhos.",
    highlights: ["quadradinhos"],
    tip: "Quanto mais quadradinhos, maior a área!",
    example: {
      title: "Duas folhas:",
      sentences: [
        { text: "Folha A tem 12 quadradinhos", emoji: "" },
        { text: "Folha B tem 8 quadradinhos", emoji: "" },
      ],
      conclusion: "Folha A tem área maior!",
    },
    question: "Como comparamos áreas?",
    options: [
      { text: "Pelo peso", isCorrect: false, color: "red" },
      { text: "Pelos quadradinhos ocupados", isCorrect: true, color: "green" },
      { text: "Pela cor", isCorrect: false, color: "orange" },
    ],
  }),

  EF03MA22: build("EF03MA22", "Medir o tempo", {
    topic: "TEMPO",
    highlight: "MINUTOS E HORAS",
    summary: "1 hora tem 60 minutos. 1 dia tem 24 horas.",
    emoji: "⏰",
    pairs: [
      { left: "1 hora", right: "60 minutos" },
      { left: "1 dia", right: "24 horas" },
      { left: "1 semana", right: "7 dias" },
    ],
    shortText: "Os ponteiros do relógio mostram horas e minutos.",
    highlights: ["60 minutos", "24 horas"],
    tip: "Ponteiro pequeno = hora. Grande = minuto!",
    example: {
      title: "Aula de meia hora:",
      sentences: [
        { text: "Meia hora = 30 minutos", emoji: "" },
        { text: "Começou às 9:00", emoji: "" },
      ],
      conclusion: "Acaba às 9:30!",
    },
    question: "Quantos minutos tem uma hora?",
    options: [
      { text: "30", isCorrect: false, color: "red" },
      { text: "60", isCorrect: true, color: "green" },
      { text: "100", isCorrect: false, color: "orange" },
    ],
  }),

  EF03MA23: build("EF03MA23", "Ler horas", {
    topic: "RELÓGIO",
    highlight: "QUE HORAS SÃO?",
    summary: "Relógio digital mostra direto. Analógico tem ponteiros.",
    emoji: "🕒",
    pairs: [
      { left: "3:00", right: "três horas" },
      { left: "3:15", right: "três e quinze" },
      { left: "3:30", right: "três e meia" },
    ],
    shortText: "O ponteiro pequeno marca a hora; o grande, os minutos.",
    highlights: ["pequeno = hora", "grande = minuto"],
    tip: "Ponteiro grande no 6 = meia hora!",
    example: {
      title: "Relógio marcando:",
      sentences: [
        { text: "Pequeno no 4", emoji: "" },
        { text: "Grande no 12", emoji: "" },
      ],
      conclusion: "São 4 horas em ponto!",
    },
    question: "Ponteiro grande no 6 significa:",
    options: [
      { text: "Hora em ponto", isCorrect: false, color: "red" },
      { text: "E meia (30 min)", isCorrect: true, color: "green" },
      { text: "Um quarto", isCorrect: false, color: "orange" },
    ],
  }),

  EF03MA24: build("EF03MA24", "Sistema monetário", {
    topic: "DINHEIRO",
    highlight: "REAIS E CENTAVOS",
    summary: "Nosso dinheiro é o REAL (R$). 1 real = 100 centavos.",
    emoji: "💰",
    pairs: [
      { left: "R$ 1,00", right: "100 centavos" },
      { left: "R$ 0,50", right: "meio real" },
      { left: "R$ 10,00", right: "dez reais" },
    ],
    shortText: "Some moedas e notas para chegar ao valor que precisa.",
    highlights: ["100 centavos"],
    tip: "Vírgula separa reais de centavos!",
    example: {
      title: "Comprar pão de R$ 2,50 com nota de R$ 5,00:",
      sentences: [
        { text: "5,00 − 2,50", emoji: "" },
        { text: "= 2,50 de troco", emoji: "💵" },
      ],
      conclusion: "Troco: R$ 2,50!",
    },
    question: "Quantos centavos tem R$ 1,00?",
    options: [
      { text: "10", isCorrect: false, color: "red" },
      { text: "100", isCorrect: true, color: "green" },
      { text: "1000", isCorrect: false, color: "orange" },
    ],
  }),

  EF03MA25: build("EF03MA25", "Possibilidades", {
    topic: "PROBABILIDADE",
    highlight: "O QUE PODE ACONTECER?",
    summary: "Em um sorteio, vários resultados são possíveis. Liste todos!",
    emoji: "🎲",
    pairs: [
      { left: "moeda", right: "cara ou coroa (2)" },
      { left: "dado", right: "1 a 6 (6 resultados)" },
      { left: "dia da semana", right: "7 possibilidades" },
    ],
    shortText: "Resultados possíveis são todos os que PODEM acontecer.",
    highlights: ["todos os que PODEM"],
    tip: "Liste antes, não esqueça nenhum!",
    example: {
      title: "Jogar uma moeda:",
      sentences: [
        { text: "Pode cair CARA", emoji: "🪙" },
        { text: "Ou pode cair COROA", emoji: "🪙" },
      ],
      conclusion: "Só 2 resultados possíveis!",
    },
    question: "Quantos resultados possíveis num dado?",
    options: [
      { text: "2", isCorrect: false, color: "red" },
      { text: "6", isCorrect: true, color: "green" },
      { text: "10", isCorrect: false, color: "orange" },
    ],
  }),

  EF03MA26: build("EF03MA26", "Tabelas e gráficos", {
    topic: "DADOS",
    highlight: "LENDO TABELAS",
    summary: "Tabelas e gráficos organizam informações de forma clara.",
    emoji: "📊",
    pairs: [
      { left: "tabela", right: "linhas e colunas" },
      { left: "gráfico de barras", right: "barras compridas/curtas" },
      { left: "gráfico de pizza", right: "fatias" },
    ],
    shortText: "Veja o título, leia as colunas e compare os valores.",
    highlights: ["título", "colunas"],
    tip: "Barra maior = valor maior!",
    example: {
      title: "Tabela de frutas vendidas:",
      sentences: [
        { text: "Maçã: 10 / Banana: 15", emoji: "" },
        { text: "Banana vendeu mais!", emoji: "🍌" },
      ],
      conclusion: "Comparando, banana ganhou!",
    },
    question: "Num gráfico de barras, a barra maior significa:",
    options: [
      { text: "Valor menor", isCorrect: false, color: "red" },
      { text: "Valor maior", isCorrect: true, color: "green" },
      { text: "Nada", isCorrect: false, color: "orange" },
    ],
  }),

  EF03MA27: build("EF03MA27", "Comparar dados", {
    topic: "COMPARAR DADOS",
    highlight: "MAIS, MENOS, IGUAL",
    summary: "Olhe a tabela e compare quem tem mais, quem tem menos.",
    emoji: "📈",
    pairs: [
      { left: "20 > 15", right: "20 é maior" },
      { left: "15 < 20", right: "15 é menor" },
      { left: "15 = 15", right: "iguais" },
    ],
    shortText: "Use os símbolos > (maior), < (menor) e = (igual).",
    highlights: [">", "<", "="],
    tip: "A boca do > sempre come o número maior!",
    example: {
      title: "Turma A: 25 alunos / Turma B: 22:",
      sentences: [
        { text: "25 > 22", emoji: "" },
        { text: "Turma A tem mais alunos.", emoji: "✨" },
      ],
      conclusion: "Diferença: 3 alunos!",
    },
    question: "30 ___ 25",
    options: [
      { text: ">", isCorrect: true, color: "green" },
      { text: "<", isCorrect: false, color: "red" },
      { text: "=", isCorrect: false, color: "orange" },
    ],
  }),

  EF03MA28: build("EF03MA28", "Fazer pesquisa", {
    topic: "PESQUISA",
    highlight: "PERGUNTAR E REGISTRAR",
    summary: "Para fazer pesquisa: pergunte, anote, organize na tabela.",
    emoji: "📝",
    pairs: [
      { left: "1️⃣", right: "perguntar" },
      { left: "2️⃣", right: "anotar" },
      { left: "3️⃣", right: "organizar" },
    ],
    shortText: "Conte os votos e monte uma tabela ou gráfico para mostrar.",
    highlights: ["contar votos"],
    tip: "Use um traço para cada resposta: |||| = 4!",
    example: {
      title: "Pesquisa: fruta favorita",
      sentences: [
        { text: "Maçã: ||||", emoji: "" },
        { text: "Banana: ||", emoji: "" },
      ],
      conclusion: "Maçã ganhou com 4 votos!",
    },
    question: "Qual é o 1º passo de uma pesquisa?",
    options: [
      { text: "Fazer o gráfico", isCorrect: false, color: "red" },
      { text: "Perguntar às pessoas", isCorrect: true, color: "green" },
      { text: "Sortear", isCorrect: false, color: "orange" },
    ],
  }),
};

// Aliases para códigos extras (EF03MA50..59) que cobrem os mesmos temas
LESSONS_3ANO_MAT.EF03MA50 = LESSONS_3ANO_MAT.EF03MA06; // Adição
LESSONS_3ANO_MAT.EF03MA51 = LESSONS_3ANO_MAT.EF03MA07; // Subtração
LESSONS_3ANO_MAT.EF03MA52 = LESSONS_3ANO_MAT.EF03MA03; // Multiplicação
LESSONS_3ANO_MAT.EF03MA53 = LESSONS_3ANO_MAT.EF03MA08; // Divisão
LESSONS_3ANO_MAT.EF03MA54 = LESSONS_3ANO_MAT.EF03MA09; // Frações/partes
LESSONS_3ANO_MAT.EF03MA55 = LESSONS_3ANO_MAT.EF03MA15; // Geometria
LESSONS_3ANO_MAT.EF03MA56 = LESSONS_3ANO_MAT.EF03MA19; // Medidas
LESSONS_3ANO_MAT.EF03MA57 = LESSONS_3ANO_MAT.EF03MA22; // Hora e tempo
LESSONS_3ANO_MAT.EF03MA58 = LESSONS_3ANO_MAT.EF03MA24; // Dinheiro
LESSONS_3ANO_MAT.EF03MA59 = LESSONS_3ANO_MAT.EF03MA03; // Tabuada

import { LESSONS_3ANO_LP } from "./activity-lessons-3ano-lp";
import { generateActivityLesson3a5 } from "./activity-lesson-generator-3a5";

export function getActivityLesson3a5(
  codigo: string,
  titulo?: string,
): ActivityLesson | null {
  return (
    LESSONS_3ANO_MAT[codigo] ??
    LESSONS_3ANO_LP[codigo] ??
    generateActivityLesson3a5(codigo, titulo ?? codigo)
  );
}


