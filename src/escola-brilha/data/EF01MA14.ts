import type { Aula } from "../types";

/**
 * EF01MA14 — Aula 014 · Biblioteca Pedagógica Escola Brilha
 * 1º Ano · Matemática
 * BNCC: Identificar e nomear figuras geométricas PLANAS
 *       (círculo, quadrado, retângulo, triângulo)
 *       e relacioná-las a objetos do cotidiano.
 *
 * Missão: "A Vila das Formas Divertidas".
 *
 * REGRA DO USUÁRIO (travada): usar EXATAMENTE os emojis do prompt como
 * imagens das formas e dos objetos — nada de gerar PNGs novos. Cada
 * "imagem" é um SVG data-URI que renderiza o emoji em grande. Assim o
 * player continua funcionando com `imagemUrl` sem quebrar o padrão.
 */

/**
 * Gera um data-URI SVG com o emoji renderizado grande, para usar em
 * imagemUrl. Usa `foreignObject` para que o navegador renderize o emoji
 * colorido (o elemento `<text>` do SVG NÃO renderiza color emoji na
 * maioria dos browsers, deixando o "img" aparentemente em branco).
 */
const emojiImg = (emoji: string): string => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><foreignObject x='0' y='0' width='200' height='200'><div xmlns='http://www.w3.org/1999/xhtml' style='width:200px;height:200px;display:flex;align-items:center;justify-content:center;font-size:150px;line-height:1;font-family:Apple Color Emoji,Segoe UI Emoji,Noto Color Emoji,EmojiOne Color,Twemoji Mozilla,sans-serif'>${emoji}</div></foreignObject></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

// ==== FORMAS (emojis do prompt) ====
const circuloImg = emojiImg("🔵");
const quadradoImg = emojiImg("🟨");
const retanguloImg = emojiImg("▭");
const trianguloImg = emojiImg("🔺");

// ==== OBJETOS DO COTIDIANO (emojis do prompt) ====
const bolaImg = emojiImg("⚽");
const moedaImg = emojiImg("🪙");
const relogioImg = emojiImg("🕒");
const azulejoImg = emojiImg("🧩");
const janelaImg = emojiImg("🪟");
const livroImg = emojiImg("📖");
const celularImg = emojiImg("📱");
const portaImg = emojiImg("🚪");
const pizzaImg = emojiImg("🍕");
const placaImg = emojiImg("🚧");
const solImg = emojiImg("☀️");
const telhadoImg = trianguloImg;

const aula: Aula = {
  codigo: "EF01MA14",
  ano: "1º Ano",
  disciplina: "Matemática",
  titulo: "A Vila das Formas Divertidas",

  narrativa: {
    titulo: "A Vila das Formas Divertidas",
    contexto:
      "O Brilha chegou a uma vila onde TODAS as construções são feitas com formas geométricas planas.",
    problema:
      "As placas com os nomes das formas desapareceram e ninguém sabe mais como chamar cada uma!",
    convite:
      "Vamos ajudar os moradores a descobrir o nome de cada forma: círculo, quadrado, retângulo e triângulo?",
  },

  conhecimentosPrevios: [
    "Reconhecer objetos do dia a dia por imagem.",
    "Diferenciar 'redondo' de 'com pontas'.",
    "Comparar 'igual' e 'diferente'.",
  ],

  missao:
    "Aprender as 4 figuras planas — CÍRCULO, QUADRADO, RETÂNGULO e TRIÂNGULO — e relacioná-las aos objetos do dia a dia.",

  objetivos: [
    "Reconhecer círculo, quadrado, retângulo e triângulo.",
    "Identificar essas formas em objetos do cotidiano.",
    "Comparar características simples das figuras.",
    "Ampliar a percepção visual.",
  ],

  motivacao:
    "As formas estão em toda parte — na moeda, no livro, na janela, na fatia de pizza! Descobrir os nomes é um super poder.",

  explicacao:
    "🔵 CÍRCULO — não tem lados nem pontas. Ex.: ⚽ bola, 🪙 moeda, 🕒 relógio.\n\n🟨 QUADRADO — tem 4 lados IGUAIS. Ex.: 🧩 azulejo, 🪟 janela quadrada.\n\n▭ RETÂNGULO — tem 4 lados; dois maiores e dois menores. Ex.: 📖 livro, 📱 celular, 🚪 porta.\n\n🔺 TRIÂNGULO — tem 3 lados e 3 pontas. Ex.: 🍕 fatia de pizza, 🚧 placa de trânsito.",

  explicacoesNiveis: {
    nivel1:
      "Círculo é redondinho. Quadrado tem 4 lados iguais. Retângulo é um quadrado esticado. Triângulo tem 3 pontas.",
    nivel2:
      "Uma moeda 🪙 é círculo. Um azulejo 🧩 é quadrado. Um celular 📱 é retângulo. Uma fatia de pizza 🍕 é triângulo.",
    nivel3:
      "Se der pra rolar sem parar, é CÍRCULO. Se tem cantos iguais, é QUADRADO. Se tem 2 lados compridos, é RETÂNGULO. Se tem só 3 pontas, é TRIÂNGULO.",
    nivel4:
      "Arquitetos usam essas 4 formas pra desenhar casas: porta retangular, janela quadrada, telhado triangular e sol redondo.",
  },

  exemploResolvido: {
    enunciado: "O Brilha achou uma 🪙 moeda. Qual é a forma dela?",
    passos: [
      "Olhe a moeda: ela é redondinha.",
      "Não tem pontas e não tem lados retos.",
      "Roda fácil, feito uma bola.",
      "Então a moeda é um CÍRCULO 🔵.",
    ],
    resposta: "A moeda tem forma de CÍRCULO.",
  },

  atividadeGuiada: {
    enunciado:
      "Olhe a imagem: apareceu uma 🪙 moeda. Qual é a forma dela?",
    resposta: "CÍRCULO.",
    explicacao: "A moeda é redondinha, sem lados e sem pontas — é um CÍRCULO.",
    visual: {
      tipo: "cena",
      pergunta: "A moeda tem forma de…",
      posicao: "aoLado",
      referenciaImg: circuloImg,
      referenciaLabel: "Círculo",
      sujeitoImg: moedaImg,
      sujeitoLabel: "Moeda",
      opcoes: ["Triângulo", "Círculo", "Quadrado"],
      correta: 1,
    },
  },

  exercicios: [
    { enunciado: "⚽ Bola parece qual forma?", resposta: "Círculo", dica: "Redondinha." },
    { enunciado: "🧩 Azulejo parece qual forma?", resposta: "Quadrado", dica: "4 lados iguais." },
    { enunciado: "📖 Livro parece qual forma?", resposta: "Retângulo", dica: "2 lados maiores." },
    { enunciado: "🍕 Fatia de pizza parece qual forma?", resposta: "Triângulo", dica: "3 pontas." },
    { enunciado: "🚪 Porta parece qual forma?", resposta: "Retângulo", dica: "Alta e estreita." },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: ligue cada objeto à sua forma!",
    resposta:
      "Bola = Círculo · Celular = Retângulo · Pizza = Triângulo · Janela = Quadrado.",
    visual: {
      cena: [
        { personagem: "Círculo 🔵", itemImagemUrl: circuloImg, quantidade: 1, cor: "#3B82F6" },
        { personagem: "Quadrado 🟨", itemImagemUrl: quadradoImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Retângulo ▭", itemImagemUrl: retanguloImg, quantidade: 1, cor: "#10B981" },
        { personagem: "Triângulo 🔺", itemImagemUrl: trianguloImg, quantidade: 1, cor: "#EF4444" },
      ],
      perguntas: [
        {
          pergunta: "A ⚽ BOLA tem forma de…",
          opcoes: ["Círculo", "Quadrado", "Triângulo"],
          correta: 0,
          explicacao: "Redondinha por todos os lados = CÍRCULO.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: bolaImg, quantidade: 1, rotulo: "Bola", cor: "#3B82F6" },
            ],
          },
        },
        {
          pergunta: "O 📱 CELULAR tem forma de…",
          opcoes: ["Triângulo", "Retângulo", "Círculo"],
          correta: 1,
          explicacao: "2 lados compridos e 2 curtos = RETÂNGULO.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: celularImg, quantidade: 1, rotulo: "Celular", cor: "#10B981" },
            ],
          },
        },
        {
          pergunta: "A 🍕 FATIA DE PIZZA tem forma de…",
          opcoes: ["Quadrado", "Círculo", "Triângulo"],
          correta: 2,
          explicacao: "3 pontas = TRIÂNGULO.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: pizzaImg, quantidade: 1, rotulo: "Pizza", cor: "#EF4444" },
            ],
          },
        },
        {
          pergunta: "A 🪟 JANELA quadrada tem forma de…",
          opcoes: ["Quadrado", "Círculo", "Triângulo"],
          correta: 0,
          explicacao: "4 lados iguais = QUADRADO.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: janelaImg, quantidade: 1, rotulo: "Janela", cor: "#FBBF24" },
            ],
          },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🔵 CÍRCULO — sem lados, sem pontas. Ex.: moeda, bola, relógio.",
      "🟨 QUADRADO — 4 lados iguais. Ex.: azulejo, janela quadrada.",
      "▭ RETÂNGULO — 4 lados, 2 maiores. Ex.: livro, celular, porta.",
      "🔺 TRIÂNGULO — 3 lados e 3 pontas. Ex.: fatia de pizza, placa.",
    ],
    dica:
      "Antes de responder, pergunte: tem pontas? Quantos lados? São iguais?",
  },

  quiz: [
    {
      pergunta: "Qual figura possui 3 lados?",
      opcoes: ["Círculo", "Quadrado", "Triângulo"],
      correta: 2,
      explicacao: "3 lados e 3 pontas = TRIÂNGULO.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: trianguloImg, quantidade: 1, rotulo: "Triângulo", cor: "#EF4444" },
          { imagemUrl: pizzaImg, quantidade: 1, rotulo: "Pizza", cor: "#F97316" },
        ],
      },
    },
    {
      pergunta: "Qual figura NÃO possui lados?",
      opcoes: ["Retângulo", "Círculo", "Quadrado"],
      correta: 1,
      explicacao: "Sem lados e sem pontas = CÍRCULO.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: circuloImg, quantidade: 1, rotulo: "Círculo", cor: "#3B82F6" },
          { imagemUrl: moedaImg, quantidade: 1, rotulo: "Moeda", cor: "#FBBF24" },
        ],
      },
    },
    {
      pergunta: "Qual objeto lembra um RETÂNGULO?",
      opcoes: ["📖 Livro", "⚽ Bola", "🍕 Pizza"],
      correta: 0,
      explicacao: "O livro tem 2 lados maiores e 2 menores = RETÂNGULO.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: livroImg, quantidade: 1, rotulo: "Livro", cor: "#10B981" },
          { imagemUrl: retanguloImg, quantidade: 1, rotulo: "Retângulo", cor: "#10B981" },
        ],
      },
    },
    {
      pergunta: "Qual figura possui 4 lados IGUAIS?",
      opcoes: ["Retângulo", "Quadrado", "Triângulo"],
      correta: 1,
      explicacao: "4 lados do mesmo tamanho = QUADRADO.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: quadradoImg, quantidade: 1, rotulo: "Quadrado", cor: "#FBBF24" },
          { imagemUrl: azulejoImg, quantidade: 1, rotulo: "Azulejo", cor: "#F97316" },
        ],
      },
    },
  ],

  conclusao:
    "🏆 Medalha conquistada: Explorador das Formas Planas! Você aprendeu círculo, quadrado, retângulo e triângulo. Missão em Família: caminhe pela casa e encontre 3 objetos circulares, 3 retangulares, 2 quadrados e 2 triangulares!",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Leonardo da Vinci — pintor e inventor — estudava formas geométricas pra criar máquinas, quadros e projetos de construções incríveis!",
  },

  interativas: [
    // ==== FASE 1 · Descubra a Forma (contarQuiz de reconhecimento) ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Descubra a Forma",
      instrucao: "Apareceu uma moeda. Qual é a forma dela?",
      grupos: [
        { imagemUrl: moedaImg, quantidade: 1, rotulo: "Moeda" },
      ],
      pergunta: "A moeda tem forma de…",
      opcoes: ["🔺 Triângulo", "🔵 Círculo", "🟨 Quadrado"],
      correta: 1,
      acerto: "Muito bem! A moeda lembra um CÍRCULO.",
      erro: "Olhe de novo: a moeda é redondinha, sem pontas.",
    },

    // ==== FASE 2 · Arraste para o Lugar Certo ====
    {
      tipo: "arrastar",
      titulo: "Fase 2 · Arraste para a Caixa Certa",
      instrucao:
        "Cada objeto tem uma forma. Arraste pra caixa da forma correspondente.",
      alvosVisuais: [
        { nome: "🔵 CÍRCULO", cor: "#3B82F6", capacidade: 1, imagemUrl: circuloImg },
        { nome: "🟨 QUADRADO", cor: "#FBBF24", capacidade: 1, imagemUrl: quadradoImg },
        { nome: "▭ RETÂNGULO", cor: "#10B981", capacidade: 1, imagemUrl: retanguloImg },
        { nome: "🔺 TRIÂNGULO", cor: "#EF4444", capacidade: 1, imagemUrl: trianguloImg },
      ],
      pares: [
        { item: "⚽ Bola", alvo: "🔵 CÍRCULO", itemImagem: bolaImg },
        { item: "🪟 Janela", alvo: "🟨 QUADRADO", itemImagem: janelaImg },
        { item: "📱 Celular", alvo: "▭ RETÂNGULO", itemImagem: celularImg },
        { item: "🍕 Pizza", alvo: "🔺 TRIÂNGULO", itemImagem: pizzaImg },
      ],
    },

    // ==== FASE 3 · Caça às Formas (quarto com vários objetos) ====
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Caça às Formas no Quarto",
      instrucao:
        "Encontre no quarto: 2 CÍRCULOS, 2 RETÂNGULOS, 1 QUADRADO e 1 TRIÂNGULO. Arraste cada objeto pra caixa da sua forma.",
      alvosVisuais: [
        { nome: "🔵 CÍRCULO", cor: "#3B82F6", capacidade: 2, imagemUrl: circuloImg },
        { nome: "▭ RETÂNGULO", cor: "#10B981", capacidade: 2, imagemUrl: retanguloImg },
        { nome: "🟨 QUADRADO", cor: "#FBBF24", capacidade: 1, imagemUrl: quadradoImg },
        { nome: "🔺 TRIÂNGULO", cor: "#EF4444", capacidade: 1, imagemUrl: trianguloImg },
      ],
      pares: [
        { item: "🕒 Relógio", alvo: "🔵 CÍRCULO", itemImagem: relogioImg },
        { item: "🪙 Moeda", alvo: "🔵 CÍRCULO", itemImagem: moedaImg },
        { item: "📖 Livro", alvo: "▭ RETÂNGULO", itemImagem: livroImg },
        { item: "🚪 Porta", alvo: "▭ RETÂNGULO", itemImagem: portaImg },
        { item: "🪟 Janela", alvo: "🟨 QUADRADO", itemImagem: janelaImg },
        { item: "🚧 Placa", alvo: "🔺 TRIÂNGULO", itemImagem: placaImg },
      ],
    },

    // ==== FASE 4 · Complete a Casa ====
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Complete a Casa",
      instrucao:
        "A casa está incompleta. Coloque as peças na ordem: primeiro o telhado 🔺, depois a porta ▭, a janela 🟨 e por último o sol 🔵.",
      itens: [
        "🔺 Telhado (triângulo)",
        "▭ Porta (retângulo)",
        "🟨 Janela (quadrado)",
        "🔵 Sol (círculo)",
      ],
      imagens: [
        { imagemUrl: telhadoImg, quantidade: 1, rotulo: "🔺 Telhado = Triângulo", cor: "#EF4444" },
        { imagemUrl: portaImg, quantidade: 1, rotulo: "🚪 Porta = Retângulo", cor: "#10B981" },
        { imagemUrl: janelaImg, quantidade: 1, rotulo: "🪟 Janela = Quadrado", cor: "#FBBF24" },
        { imagemUrl: solImg, quantidade: 1, rotulo: "☀️ Sol = Círculo", cor: "#3B82F6" },
      ],
    },

    // ==== FASE 5 · Qual é Diferente? ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Qual é Diferente?",
      instrucao: "Olhe as figuras. Qual delas é DIFERENTE das outras?",
      grupos: [
        { imagemUrl: trianguloImg, quantidade: 1, rotulo: "🔺" },
        { imagemUrl: trianguloImg, quantidade: 1, rotulo: "🔺" },
        { imagemUrl: trianguloImg, quantidade: 1, rotulo: "🔺" },
        { imagemUrl: circuloImg, quantidade: 1, rotulo: "🔵" },
      ],
      pergunta: "Qual figura é DIFERENTE das outras?",
      opcoes: ["🔺 Triângulo", "🔵 Círculo", "🟨 Quadrado"],
      correta: 1,
      acerto: "Isso! Só o CÍRCULO é diferente — todos os outros são triângulos.",
      erro: "Conte os triângulos e ache o que não combina.",
    },

    // ==== MINI JOGO · Construindo o Parque ====
    {
      tipo: "arrastar",
      titulo: "Mini Jogo · Construindo o Parque",
      instrucao:
        "Monte o parque escolhendo a forma certa pra cada peça: banco, roda-gigante, telhado e piso.",
      alvosVisuais: [
        { nome: "▭ Banco (retângulo)", cor: "#10B981", capacidade: 1, imagemUrl: retanguloImg },
        { nome: "🔵 Roda-gigante (círculo)", cor: "#3B82F6", capacidade: 1, imagemUrl: circuloImg },
        { nome: "🔺 Telhado (triângulo)", cor: "#EF4444", capacidade: 1, imagemUrl: trianguloImg },
        { nome: "🟨 Piso (quadrado)", cor: "#FBBF24", capacidade: 1, imagemUrl: quadradoImg },
      ],
      pares: [
        { item: "▭ Banco", alvo: "▭ Banco (retângulo)", itemImagem: retanguloImg },
        { item: "🔵 Roda-gigante", alvo: "🔵 Roda-gigante (círculo)", itemImagem: circuloImg },
        { item: "🔺 Telhado", alvo: "🔺 Telhado (triângulo)", itemImagem: trianguloImg },
        { item: "🟨 Piso", alvo: "🟨 Piso (quadrado)", itemImagem: quadradoImg },
      ],
    },

    // ==== DESAFIO BRILHA · Ligue corretamente ====
    {
      tipo: "ligar",
      titulo: "Desafio Brilha · Ligue Objeto ↔ Forma",
      instrucao: "Ligue cada objeto do dia a dia à figura plana correta.",
      pares: [
        { a: "Bola", b: "Círculo", aImagem: bolaImg, aQuantidade: 1, bImagem: circuloImg, bQuantidade: 1 },
        { a: "Celular", b: "Retângulo", aImagem: celularImg, aQuantidade: 1, bImagem: retanguloImg, bQuantidade: 1 },
        { a: "Pizza", b: "Triângulo", aImagem: pizzaImg, aQuantidade: 1, bImagem: trianguloImg, bQuantidade: 1 },
        { a: "Janela", b: "Quadrado", aImagem: janelaImg, aQuantidade: 1, bImagem: quadradoImg, bQuantidade: 1 },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Qual figura é a BOLA ⚽?",
        opcoes: ["Círculo", "Quadrado", "Triângulo"],
        correta: 0,
        explicacao: "Redondinha = CÍRCULO.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: bolaImg, quantidade: 1, rotulo: "Bola", cor: "#3B82F6" },
            { imagemUrl: circuloImg, quantidade: 1, rotulo: "Círculo", cor: "#3B82F6" },
          ],
        },
      },
      {
        pergunta: "Qual figura é a JANELA quadrada 🪟?",
        opcoes: ["Triângulo", "Quadrado", "Círculo"],
        correta: 1,
        explicacao: "4 lados iguais = QUADRADO.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: janelaImg, quantidade: 1, rotulo: "Janela", cor: "#FBBF24" },
            { imagemUrl: quadradoImg, quantidade: 1, rotulo: "Quadrado", cor: "#FBBF24" },
          ],
        },
      },
    ],
    medio: [
      {
        pergunta: "O LIVRO 📖 tem forma de…",
        opcoes: ["Retângulo", "Quadrado", "Triângulo"],
        correta: 0,
        explicacao: "2 lados maiores e 2 menores = RETÂNGULO.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: livroImg, quantidade: 1, rotulo: "Livro", cor: "#10B981" },
            { imagemUrl: retanguloImg, quantidade: 1, rotulo: "Retângulo", cor: "#10B981" },
          ],
        },
      },
      {
        pergunta: "E a fatia de PIZZA 🍕?",
        opcoes: ["Círculo", "Triângulo", "Quadrado"],
        correta: 1,
        explicacao: "3 pontas = TRIÂNGULO.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: pizzaImg, quantidade: 1, rotulo: "Pizza", cor: "#EF4444" },
            { imagemUrl: trianguloImg, quantidade: 1, rotulo: "Triângulo", cor: "#EF4444" },
          ],
        },
      },
    ],
    dificil: [
      {
        pergunta: "Qual desses NÃO é um retângulo?",
        opcoes: ["📖 Livro", "🚪 Porta", "⚽ Bola"],
        correta: 2,
        explicacao: "A bola é redondinha = CÍRCULO, não retângulo.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: livroImg, quantidade: 1, rotulo: "Livro", cor: "#10B981" },
            { imagemUrl: portaImg, quantidade: 1, rotulo: "Porta", cor: "#10B981" },
            { imagemUrl: bolaImg, quantidade: 1, rotulo: "Bola", cor: "#3B82F6" },
          ],
        },
      },
      {
        pergunta: "Qual figura tem 3 lados e 3 pontas?",
        opcoes: ["Quadrado", "Triângulo", "Círculo"],
        correta: 1,
        explicacao: "3 lados + 3 pontas = TRIÂNGULO.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: trianguloImg, quantidade: 1, rotulo: "Triângulo", cor: "#EF4444" },
            { imagemUrl: placaImg, quantidade: 1, rotulo: "Placa", cor: "#F97316" },
          ],
        },
      },
    ],
  },

  proximaHabilidade: { codigo: "EF01MA15" },
};

export default aula;
