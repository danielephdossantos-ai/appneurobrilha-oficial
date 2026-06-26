import { ActivityLesson } from "../types/activity-lesson";

/* ─── 1º Ano LP — BNCC ─── */

export const VOGAIS_1ANO_LESSON: ActivityLesson = {
  id: "vogais-1ano",
  title: "Vogais",
  topic: "VOGAIS",
  subject: "Língua Portuguesa — 1º Ano (EF01LP04)",
  xp: 100,
  screens: {
    explicacao: {
      instruction: "Vamos aprender sobre",
      highlight: "AS VOGAIS!",
      summary: "As vogais são cinco letrinhas muito especiais: A, E, I, O, U.",
      visual_emoji: "🅰️",
    },
    exploracao: {
      instruction: "Veja cada vogal com uma palavra que começa com ela.",
      pairs: [
        { left: "A", right: "ABELHA 🐝" },
        { left: "E", right: "ELEFANTE 🐘" },
        { left: "I", right: "IGREJA ⛪" },
        { left: "O", right: "OVO 🥚" },
        { left: "U", right: "UVA 🍇" },
      ],
    },
    explicacao_curta: {
      text: "Toda palavra precisa de pelo menos uma vogal. Sem vogal, não dá pra falar!",
      highlights: ["A, E, I, O, U"],
      tip: "5 vogais = A E I O U",
    },
    exemplo_visual: {
      title: "Observe estas palavras:",
      sentences: [
        { text: "ABELHA começa com A.", emoji: "🐝" },
        { text: "UVA começa com U.", emoji: "🍇" },
      ],
      conclusion: "Cada palavra começa com uma vogal diferente!",
    },
    praticar: {
      question: "Qual é a primeira vogal da palavra",
      reference: "ELEFANTE",
      options: [
        { text: "A", isCorrect: false, color: "red" },
        { text: "E", isCorrect: true, color: "green" },
        { text: "O", isCorrect: false, color: "blue" },
      ],
    },
  },
};

export const ALFABETO_1ANO_LESSON: ActivityLesson = {
  id: "alfabeto-1ano",
  title: "Alfabeto",
  topic: "ALFABETO",
  subject: "Língua Portuguesa — 1º Ano (EF01LP01)",
  xp: 100,
  screens: {
    explicacao: {
      instruction: "Vamos conhecer",
      highlight: "O ALFABETO!",
      summary: "O alfabeto tem 26 letras que formam todas as palavras.",
      visual_emoji: "🔤",
    },
    exploracao: {
      instruction: "Veja a letra e a palavra que começa com ela.",
      pairs: [
        { left: "B", right: "BOLA ⚽" },
        { left: "C", right: "CASA 🏠" },
        { left: "D", right: "DADO 🎲" },
        { left: "F", right: "FLOR 🌸" },
      ],
    },
    explicacao_curta: {
      text: "As letras se juntam e formam palavras. Cada letrinha tem um som especial.",
      highlights: ["26 letras"],
      tip: "Letra + Letra = PALAVRA!",
    },
    exemplo_visual: {
      title: "Veja este exemplo:",
      sentences: [
        { text: "C + A + S + A formam CASA.", emoji: "🏠" },
        { text: "Cada letra ajuda a montar a palavra.", emoji: "✨" },
      ],
      conclusion: "Juntando as letras nascem as palavras!",
    },
    praticar: {
      question: "Com qual letra começa a palavra",
      reference: "BOLA",
      options: [
        { text: "A", isCorrect: false, color: "red" },
        { text: "B", isCorrect: true, color: "green" },
        { text: "D", isCorrect: false, color: "blue" },
      ],
    },
  },
};

export const RIMAS_1ANO_LESSON: ActivityLesson = {
  id: "rimas-1ano",
  title: "Rimas",
  topic: "RIMAS",
  subject: "Língua Portuguesa — 1º Ano (EF01LP09)",
  xp: 110,
  screens: {
    explicacao: {
      instruction: "Vamos brincar com",
      highlight: "AS RIMAS!",
      summary: "Rimas são palavras que terminam com sons parecidos.",
      visual_emoji: "🎵",
    },
    exploracao: {
      instruction: "Escute o final destas palavras:",
      pairs: [
        { left: "PATO 🦆", right: "GATO 🐱" },
        { left: "MÃO ✋", right: "PÃO 🍞" },
        { left: "FLOR 🌸", right: "COR 🎨" },
      ],
    },
    explicacao_curta: {
      text: "Quando duas palavras terminam com o mesmo som, elas rimam!",
      highlights: ["mesmo som no final"],
      tip: "Som igual no fim = RIMA!",
    },
    exemplo_visual: {
      title: "Veja este exemplo:",
      sentences: [
        { text: "PATO termina com -ATO.", emoji: "🦆" },
        { text: "GATO também termina com -ATO.", emoji: "🐱" },
      ],
      conclusion: "PATO e GATO rimam!",
    },
    praticar: {
      question: "Qual palavra rima com",
      reference: "PÃO",
      options: [
        { text: "BOLA", isCorrect: false, color: "red" },
        { text: "MÃO", isCorrect: true, color: "green" },
        { text: "CASA", isCorrect: false, color: "blue" },
      ],
    },
  },
};

export const SILABAS_1ANO_LESSON: ActivityLesson = {
  id: "silabas-1ano",
  title: "Sílabas",
  topic: "SÍLABAS",
  subject: "Língua Portuguesa — 1º Ano (EF01LP06)",
  xp: 110,
  screens: {
    explicacao: {
      instruction: "Vamos descobrir",
      highlight: "AS SÍLABAS!",
      summary: "Sílaba é um pedacinho da palavra que falamos de uma vez só.",
      visual_emoji: "👏",
    },
    exploracao: {
      instruction: "Bata palma a cada pedaço da palavra:",
      pairs: [
        { left: "BO-LA", right: "2 sílabas ⚽" },
        { left: "CA-SA", right: "2 sílabas 🏠" },
        { left: "BO-NE-CA", right: "3 sílabas 🪆" },
      ],
    },
    explicacao_curta: {
      text: "Cada palma é uma sílaba. As sílabas se juntam para formar a palavra.",
      highlights: ["pedacinho da palavra"],
      tip: "Bateu palma = 1 sílaba!",
    },
    exemplo_visual: {
      title: "Veja este exemplo:",
      sentences: [
        { text: "BO + LA = BOLA.", emoji: "⚽" },
        { text: "Duas palmas, duas sílabas!", emoji: "👏" },
      ],
      conclusion: "Juntando sílabas nasce a palavra!",
    },
    praticar: {
      question: "Quantas sílabas tem a palavra",
      reference: "CASA",
      options: [
        { text: "1", isCorrect: false, color: "red" },
        { text: "2", isCorrect: true, color: "green" },
        { text: "3", isCorrect: false, color: "blue" },
      ],
    },
  },
};

export const SINONIMOS_LESSON: ActivityLesson = {
  id: "sinonimos-2ano",
  title: "Sinônimos",
  topic: "SINÔNIMOS",
  subject: "Língua Portuguesa — 2º ao 5º Ano",
  xp: 120,
  screens: {
    explicacao: {
      instruction: "Vamos aprender sobre",
      highlight: "SINÔNIMOS!",
      summary: "Sinônimos são palavras que têm significados parecidos.",
      visual_emoji: "",
    },
    exploracao: {
      instruction: "Observe as palavras com o mesmo sentido.",
      pairs: [
        { left: "ALEGRE", right: "FELIZ" },
        { left: "BONITO", right: "LINDO" },
        { left: "CASA", right: "LAR" },
      ],
    },
    explicacao_curta: {
      text: "Sinônimos são palavras que podem ser usadas no lugar uma da outra e mantêm o mesmo significado.",
      highlights: ["mesmo significado"],
      tip: "Palavras com o mesmo sentido = sinônimos!",
    },
    exemplo_visual: {
      title: "Veja este exemplo:",
      sentences: [
        { text: "Ele está alegre.", emoji: "😀" },
        { text: "Ele está feliz.", emoji: "😊" },
      ],
      conclusion: "As duas palavras têm o mesmo significado.",
      visual: {
        type: "word_visual",
        word_visual: {
          items: [
            { label: "ALEGRE", emoji: "😀" },
            { label: "FELIZ", emoji: "😊" },
          ],
          connector: "=",
          connectorLabel: "mesmo sentido",
        },
      },
    },
    praticar: {
      question: "Qual palavra é sinônimo de",
      reference: "FELIZ",
      options: [
        { text: "TRISTE", isCorrect: false, color: "red" },
        { text: "ALEGRE", isCorrect: true, color: "green" },
        { text: "BRAVO", isCorrect: false, color: "orange" },
      ],
    },
  },
};

export const ANTONIMOS_LESSON: ActivityLesson = {
  id: "antonimos-2ano",
  title: "Antônimos",
  topic: "ANTÔNIMOS",
  subject: "Língua Portuguesa — 2º ao 5º Ano",
  xp: 120,
  screens: {
    explicacao: {
      instruction: "Vamos aprender sobre",
      highlight: "ANTÔNIMOS!",
      summary: "Antônimos são palavras com significados opostos.",
      visual_emoji: "",
    },
    exploracao: {
      instruction: "Observe os opostos abaixo.",
      pairs: [
        { left: "QUENTE", right: "FRIO" },
        { left: "GRANDE", right: "PEQUENO" },
        { left: "RÁPIDO", right: "LENTO" },
      ],
    },
    explicacao_curta: {
      text: "Antônimos são palavras que têm significados contrários ou opostos entre si.",
      highlights: ["contrários", "opostos"],
      tip: "Palavras opostas = antônimos!",
    },
    exemplo_visual: {
      title: "Veja este exemplo:",
      sentences: [
        { text: "O elefante é GRANDE.", emoji: "" },
        { text: "O rato é PEQUENO.", emoji: "" },
      ],
      conclusion: "Grande e pequeno são palavras opostas!",
    },
    praticar: {
      question: "Qual é o antônimo de",
      reference: "DIA",
      options: [
        { text: "SOL", isCorrect: false, color: "orange" },
        { text: "NOITE", isCorrect: true, color: "blue" },
        { text: "TARDE", isCorrect: false, color: "purple" },
      ],
    },
  },
};

export const SUBSTANTIVOS_LESSON: ActivityLesson = {
  id: "substantivos-3ano",
  title: "Substantivos",
  topic: "SUBSTANTIVOS",
  subject: "Língua Portuguesa — 3º ao 5º Ano",
  xp: 130,
  screens: {
    explicacao: {
      instruction: "Vamos aprender sobre",
      highlight: "SUBSTANTIVOS!",
      summary: "Substantivos são palavras que dão nome às coisas.",
      visual_emoji: "",
    },
    exploracao: {
      instruction: "Veja exemplos de substantivos.",
      pairs: [
        { left: "pessoa", right: "Maria" },
        { left: "lugar", right: "escola" },
        { left: "coisa", right: "livro" },
      ],
    },
    explicacao_curta: {
      text: "Substantivos são palavras que nomeiam seres, lugares, objetos, sentimentos e ideias.",
      highlights: ["nomeiam seres"],
      tip: "Se dá nome a algo, é substantivo!",
    },
    exemplo_visual: {
      title: "Veja este exemplo:",
      sentences: [
        { text: "A menina leu um livro.", emoji: "" },
        { text: '"menina" e "livro" são substantivos.', emoji: "" },
      ],
      conclusion: "Eles nomeiam seres e objetos!",
    },
    praticar: {
      question: "Qual palavra é um substantivo?",
      options: [
        { text: "CORRER", isCorrect: false, color: "red" },
        { text: "CACHORRO", isCorrect: true, color: "green" },
        { text: "BONITO", isCorrect: false, color: "orange" },
      ],
    },
  },
};

export const FRACOES_LESSON: ActivityLesson = {
  id: "fracoes-3ano",
  title: "Frações",
  topic: "FRAÇÕES",
  subject: "Matemática — 3º ao 5º Ano",
  xp: 150,
  screens: {
    explicacao: {
      instruction: "Vamos aprender sobre",
      highlight: "FRAÇÕES!",
      summary: "Fração representa uma parte de um todo.",
      visual_emoji: "",
    },
    exploracao: {
      instruction: "Observe as frações abaixo.",
      pairs: [
        { left: "1/2", right: "metade" },
        { left: "1/4", right: "um quarto" },
        { left: "3/4", right: "três quartos" },
      ],
      visual: {
        type: "fraction_bar",
        fraction: {
          numerator: 1,
          denominator: 4,
          emoji: "",
          label: "1/4 — um quarto da pizza",
        },
      },
    },
    explicacao_curta: {
      text: "Uma fração tem dois números: o numerador (parte) e o denominador (total de partes iguais).",
      highlights: ["numerador", "denominador"],
      tip: "Numerador ÷ denominador = fração!",
    },
    exemplo_visual: {
      title: "Veja o que aconteceu com a pizza:",
      sentences: [
        { text: "Uma pizza foi cortada em 4 partes iguais.", emoji: "" },
        { text: "Comemos 1 parte — veja ela sumir!", emoji: "" },
      ],
      conclusion: "Comemos 1/4 da pizza!",
      visual: {
        type: "pizza_bite",
        pizza_bite: { total: 4, eaten: 1, item: "pizza" },
      },
    },
    praticar: {
      question: "Qual fração representa a metade?",
      options: [
        { text: "1/4", isCorrect: false, color: "red" },
        { text: "1/2", isCorrect: true, color: "green" },
        { text: "1/3", isCorrect: false, color: "blue" },
      ],
      visual: {
        type: "counter_grid",
        counter: {
          items: ["A", "A", "B", "B"],
          question: "Metade das frutas são maçãs — quantas?",
          answer: 2,
        },
      },
    },
  },
};

export const MULTIPLICACAO_LESSON: ActivityLesson = {
  id: "multiplicacao-3ano",
  title: "Multiplicação",
  topic: "MULTIPLICAÇÃO",
  subject: "Matemática — 3º ao 5º Ano",
  xp: 140,
  screens: {
    explicacao: {
      instruction: "Vamos aprender sobre",
      highlight: "MULTIPLICAÇÃO!",
      summary: "Multiplicar é uma forma rápida de somar grupos iguais.",
      visual_emoji: "",
    },
    exploracao: {
      instruction: "Observe os grupos de objetos.",
      pairs: [
        { left: "2 × 3", right: "6" },
        { left: "4 × 2", right: "8" },
        { left: "5 × 3", right: "15" },
      ],
      visual: {
        type: "multiplication_grid",
        multiplication: {
          groups: 3,
          items_per_group: 4,
          emoji: "",
        },
      },
    },
    explicacao_curta: {
      text: "Multiplicação é somar o mesmo número várias vezes: 3 × 2 = 2 + 2 + 2 = 6.",
      highlights: ["3 × 2 = 6"],
      tip: "Grupos iguais = multiplicação!",
    },
    exemplo_visual: {
      title: "Veja os grupos de balas aparecendo:",
      sentences: [
        { text: "3 caixas, cada uma com 4 balas.", emoji: "" },
        { text: "Veja cada grupo aparecer e o total crescer!", emoji: "" },
      ],
      conclusion: "3 × 4 = 12 balas no total!",
      visual: {
        type: "group_build",
        group_build: { groups: 3, items_per_group: 4, emoji: "", item_name: "balas" },
      },
    },
    praticar: {
      question: "Quanto é 3 × 5?",
      options: [
        { text: "12", isCorrect: false, color: "red" },
        { text: "15", isCorrect: true, color: "green" },
        { text: "18", isCorrect: false, color: "blue" },
      ],
      visual: {
        type: "counter_grid",
        counter: {
          items: ["A", "A", "A", "A", "A", "B", "B", "B", "B", "B", "C", "C", "C", "C", "C"],
          question: "Conte os grupos de frutas: 3 × 5 = ?",
          answer: 15,
        },
      },
    },
  },
};
