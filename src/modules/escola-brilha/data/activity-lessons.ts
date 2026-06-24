import { ActivityLesson } from "../types/activity-lesson";

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

export const DIVISAO_LESSON: ActivityLesson = {
  id: "divisao-4ano",
  title: "Divisão",
  topic: "DIVISÃO",
  subject: "Matemática — 4º Ano",
  xp: 150,
  screens: {
    explicacao: {
      instruction: "Vamos aprender sobre",
      highlight: "DIVISÃO!",
      summary: "Dividir é repartir uma quantidade em partes iguais.",
      visual_emoji: "",
    },
    exploracao: {
      instruction: "Observe as divisões abaixo.",
      pairs: [
        { left: "6 ÷ 2", right: "3" },
        { left: "10 ÷ 5", right: "2" },
        { left: "12 ÷ 3", right: "4" },
      ],
    },
    explicacao_curta: {
      text: "Divisão reparte um total em grupos iguais. 12 ÷ 3 = 4 significa 12 repartidos em 3 grupos de 4.",
      highlights: ["repartir em partes iguais"],
      tip: "Total ÷ grupos = quanto cabe em cada grupo!",
    },
    exemplo_visual: {
      title: "Veja a divisão acontecendo:",
      sentences: [
        { text: "10 balas para repartir entre 2 amigos.", emoji: "" },
        { text: "Cada amigo recebe a mesma quantidade.", emoji: "" },
      ],
      conclusion: "10 ÷ 2 = 5 balas para cada um!",
    },
    praticar: {
      question: "Quanto é 15 ÷ 3?",
      options: [
        { text: "3", isCorrect: false, color: "red" },
        { text: "5", isCorrect: true, color: "green" },
        { text: "6", isCorrect: false, color: "blue" },
      ],
    },
  },
};

export const ADJETIVOS_LESSON: ActivityLesson = {
  id: "adjetivos-4ano",
  title: "Adjetivos",
  topic: "ADJETIVOS",
  subject: "Língua Portuguesa — 4º Ano",
  xp: 130,
  screens: {
    explicacao: {
      instruction: "Vamos aprender sobre",
      highlight: "ADJETIVOS!",
      summary: "Adjetivos são palavras que descrevem como algo é.",
      visual_emoji: "",
    },
    exploracao: {
      instruction: "Veja substantivos com seus adjetivos.",
      pairs: [
        { left: "casa", right: "bonita" },
        { left: "cachorro", right: "peludo" },
        { left: "dia", right: "ensolarado" },
      ],
    },
    explicacao_curta: {
      text: "Adjetivos qualificam os substantivos — dizem como, de que jeito ou qual a característica.",
      highlights: ["qualificam os substantivos"],
      tip: "Descreveu como algo é? É adjetivo!",
    },
    exemplo_visual: {
      title: "Veja este exemplo:",
      sentences: [
        { text: "O gato preto dormiu.", emoji: "" },
        { text: '"preto" é adjetivo: descreve o gato.', emoji: "" },
      ],
      conclusion: "Adjetivo descreve o substantivo!",
    },
    praticar: {
      question: "Qual palavra é um adjetivo?",
      options: [
        { text: "MENINO", isCorrect: false, color: "red" },
        { text: "FELIZ", isCorrect: true, color: "green" },
        { text: "CORRER", isCorrect: false, color: "orange" },
      ],
    },
  },
};

export const PORCENTAGEM_LESSON: ActivityLesson = {
  id: "porcentagem-5ano",
  title: "Porcentagem",
  topic: "PORCENTAGEM",
  subject: "Matemática — 5º Ano",
  xp: 160,
  screens: {
    explicacao: {
      instruction: "Vamos aprender sobre",
      highlight: "PORCENTAGEM!",
      summary: "Porcentagem é uma fração com denominador 100.",
      visual_emoji: "",
    },
    exploracao: {
      instruction: "Observe as porcentagens abaixo.",
      pairs: [
        { left: "50%", right: "metade" },
        { left: "25%", right: "um quarto" },
        { left: "100%", right: "tudo" },
      ],
    },
    explicacao_curta: {
      text: "Porcentagem (%) mostra quantas partes de 100 você tem. 30% = 30 de cada 100.",
      highlights: ["partes de 100"],
      tip: "% significa 'por cento' = de cada 100!",
    },
    exemplo_visual: {
      title: "Veja este exemplo:",
      sentences: [
        { text: "Uma blusa custava R$100 e teve 20% de desconto.", emoji: "" },
        { text: "20% de 100 = 20 reais de desconto.", emoji: "" },
      ],
      conclusion: "Ela passou a custar R$80!",
    },
    praticar: {
      question: "Quanto é 50% de 200?",
      options: [
        { text: "50", isCorrect: false, color: "red" },
        { text: "100", isCorrect: true, color: "green" },
        { text: "150", isCorrect: false, color: "blue" },
      ],
    },
  },
};

export const VERBOS_LESSON: ActivityLesson = {
  id: "verbos-5ano",
  title: "Verbos",
  topic: "VERBOS",
  subject: "Língua Portuguesa — 5º Ano",
  xp: 140,
  screens: {
    explicacao: {
      instruction: "Vamos aprender sobre",
      highlight: "VERBOS!",
      summary: "Verbos são palavras que indicam ações, estados ou fenômenos.",
      visual_emoji: "",
    },
    exploracao: {
      instruction: "Veja exemplos de verbos.",
      pairs: [
        { left: "ação", right: "correr" },
        { left: "estado", right: "ser" },
        { left: "fenômeno", right: "chover" },
      ],
    },
    explicacao_curta: {
      text: "Verbo é a palavra que mostra o que alguém faz, sente ou o que acontece.",
      highlights: ["o que alguém faz"],
      tip: "Indica ação? É verbo!",
    },
    exemplo_visual: {
      title: "Veja este exemplo:",
      sentences: [
        { text: "O cachorro late.", emoji: "" },
        { text: '"late" é o verbo: mostra a ação.', emoji: "" },
      ],
      conclusion: "Verbo = ação na frase!",
    },
    praticar: {
      question: "Qual palavra é um verbo?",
      options: [
        { text: "BONITO", isCorrect: false, color: "red" },
        { text: "PULAR", isCorrect: true, color: "green" },
        { text: "MESA", isCorrect: false, color: "blue" },
      ],
    },
  },
};

