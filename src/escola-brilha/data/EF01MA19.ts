import type { Aula } from "../types";

/**
 * EF01MA19 — Aula 019 · Biblioteca Pedagógica Escola Brilha
 * 1º Ano · Matemática
 * BNCC: Reconhecer e relacionar valores de moedas e cédulas do sistema
 *       monetário brasileiro para resolver situações simples do cotidiano.
 *
 * Missão: "A Lojinha do Esquilo Brilha".
 */
const emojiImg = (emoji: string): string => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><foreignObject x='0' y='0' width='200' height='200'><div xmlns='http://www.w3.org/1999/xhtml' style='width:200px;height:200px;display:flex;align-items:center;justify-content:center;font-size:150px;line-height:1;font-family:Apple Color Emoji,Segoe UI Emoji,Noto Color Emoji,EmojiOne Color,Twemoji Mozilla,sans-serif'>${emoji}</div></foreignObject></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

// Dinheiro estilizado (SVG com texto R$)
const dinheiroImg = (texto: string, cor: string, fundo: string): string => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><foreignObject x='0' y='0' width='200' height='200'><div xmlns='http://www.w3.org/1999/xhtml' style='width:200px;height:200px;display:flex;align-items:center;justify-content:center;font-size:44px;font-weight:900;color:${cor};background:${fundo};border-radius:24px;border:6px solid ${cor};font-family:system-ui,sans-serif;text-align:center;line-height:1.1'>${texto}</div></foreignObject></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

// Moedas
const moeda05 = dinheiroImg("R$ 0,05", "#92400E", "#FEF3C7");
const moeda10 = dinheiroImg("R$ 0,10", "#92400E", "#FDE68A");
const moeda25 = dinheiroImg("R$ 0,25", "#92400E", "#FCD34D");
const moeda50 = dinheiroImg("R$ 0,50", "#92400E", "#FBBF24");
const moeda1 = dinheiroImg("R$ 1", "#92400E", "#F59E0B");

// Cédulas
const nota2 = dinheiroImg("R$ 2", "#065F46", "#A7F3D0");
const nota5 = dinheiroImg("R$ 5", "#7C2D12", "#FED7AA");
const nota10 = dinheiroImg("R$ 10", "#7F1D1D", "#FCA5A5");
const nota20 = dinheiroImg("R$ 20", "#78350F", "#FDE68A");
const nota50 = dinheiroImg("R$ 50", "#4C1D95", "#DDD6FE");
const nota100 = dinheiroImg("R$ 100", "#1E3A8A", "#BFDBFE");

// Produtos
const macaImg = emojiImg("🍎");
const bananaImg = emojiImg("🍌");
const sucoImg = emojiImg("🧃");
const ursoImg = emojiImg("🧸");
const bolaImg = emojiImg("⚽");
const livroImg = emojiImg("📖");
const esquiloImg = emojiImg("🐿️");
const coelhoImg = emojiImg("🐰");
const carteiraImg = emojiImg("👛");
const carrinhoImg = emojiImg("🛒");

const aula: Aula = {
  codigo: "EF01MA19",
  ano: "1º Ano",
  disciplina: "Matemática",
  titulo: "A Lojinha do Esquilo Brilha",

  narrativa: {
    titulo: "A Lojinha do Esquilo Brilha",
    contexto:
      "Hoje o Brilha 🐿️ abriu uma lojinha na floresta 🛒. Os animais chegaram cheios de moedas e cédulas.",
    problema:
      "Eles querem comprar frutas 🍎, brinquedos 🧸 e livros 📖 — mas precisam escolher o dinheiro CERTO pra pagar.",
    convite: "Vamos ser o ajudante do caixa e reconhecer o dinheiro brasileiro?",
  },

  conhecimentosPrevios: [
    "Reconhecer números até 100.",
    "Comparar 'maior que' e 'menor que'.",
    "Contar de 1 em 1 e de 5 em 5.",
  ],

  missao:
    "Reconhecer e relacionar valores de moedas e cédulas do sistema monetário brasileiro.",

  objetivos: [
    "Reconhecer moedas e cédulas brasileiras.",
    "Comparar valores de dinheiro.",
    "Escolher o dinheiro certo pra pequenas compras.",
    "Perceber que combinações diferentes podem valer o mesmo.",
  ],

  motivacao:
    "Aprender o dinheiro ajuda a fazer compras 🛒, pagar o lanche 🍎 e conferir o troco!",

  explicacao:
    "💰 MOEDAS: 5 centavos, 10 centavos, 25 centavos, 50 centavos e R$ 1.\n\n💵 CÉDULAS: R$ 2, R$ 5, R$ 10, R$ 20, R$ 50 e R$ 100.\n\nCada moeda e cédula tem um VALOR. Quanto maior o número, mais o dinheiro vale.\n\nDá pra JUNTAR moedas e cédulas pra formar o mesmo valor: R$ 5 = R$ 2 + R$ 2 + R$ 1.",

  explicacoesNiveis: {
    nivel1: "Moeda 🟡 é redonda. Cédula 💵 é de papel. Cada uma tem um valor.",
    nivel2:
      "R$ 2 vale menos que R$ 5. R$ 5 vale menos que R$ 10. O número maior vale mais.",
    nivel3:
      "Pra pagar R$ 5 podemos usar uma cédula de R$ 5 OU juntar R$ 2 + R$ 2 + R$ 1.",
    nivel4:
      "No mercado 🛒 conferimos os preços e escolhemos o dinheiro certo pra pagar exato ou pra receber troco.",
  },

  exemploResolvido: {
    enunciado: "A maçã 🍎 custa R$ 2. Qual cédula pago?",
    passos: [
      "Preço: R$ 2.",
      "Procuro uma cédula com o número 2.",
      "É a cédula 💵 R$ 2.",
    ],
    resposta: "💵 R$ 2.",
  },

  atividadeGuiada: {
    enunciado: "Qual vale MAIS: R$ 1,00 ou 50 centavos?",
    resposta: "R$ 1,00.",
    explicacao: "R$ 1,00 = 100 centavos. 100 é maior que 50 → R$ 1 vale mais.",
    visual: {
      tipo: "cena",
      pergunta: "Qual vale MAIS?",
      posicao: "aoLado",
      referenciaImg: moeda50,
      referenciaLabel: "50 centavos",
      sujeitoImg: moeda1,
      sujeitoLabel: "R$ 1,00",
      opcoes: ["50 centavos", "R$ 1,00"],
      correta: 1,
    },
  },

  exercicios: [
    { enunciado: "Qual vale mais: R$ 2 ou R$ 5?", resposta: "R$ 5", dica: "5 é maior que 2." },
    { enunciado: "Qual cédula uso pra pagar exatamente R$ 10?", resposta: "R$ 10", dica: "Procuro o número 10." },
    { enunciado: "Quanto vale R$ 2 + R$ 2 + R$ 1?", resposta: "R$ 5", dica: "2 + 2 + 1 = 5." },
    { enunciado: "Qual vale mais: 25 centavos ou R$ 1?", resposta: "R$ 1", dica: "R$ 1 = 100 centavos." },
    { enunciado: "Qual vale mais: R$ 50 ou R$ 100?", resposta: "R$ 100", dica: "100 é maior que 50." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: ajude os clientes da lojinha a pagar certo!",
    resposta:
      "Suco R$ 10 → cédula R$ 10 · Bola R$ 2 → cédula R$ 2 · R$ 20 vale mais que R$ 5.",
    visual: {
      perguntas: [
        {
          pergunta: "🧃 Suco custa R$ 10. Qual cédula posso usar?",
          opcoes: ["💵 R$ 2", "💵 R$ 10", "💵 R$ 50"],
          correta: 1,
          explicacao: "R$ 10 pago com a cédula de R$ 10 — exato!",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: sucoImg, quantidade: 1, rotulo: "Suco R$ 10", cor: "#F59E0B" },
              { imagemUrl: nota10, quantidade: 1, rotulo: "R$ 10", cor: "#DC2626" },
            ],
          },
        },
        {
          pergunta: "⚽ Bola custa R$ 2. Escolha o pagamento correto.",
          opcoes: ["💵 R$ 2", "💵 R$ 5", "💵 R$ 20"],
          correta: 0,
          explicacao: "Preço R$ 2 → cédula R$ 2.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: bolaImg, quantidade: 1, rotulo: "Bola R$ 2", cor: "#3B82F6" },
              { imagemUrl: nota2, quantidade: 1, rotulo: "R$ 2", cor: "#059669" },
            ],
          },
        },
        {
          pergunta: "Qual vale MAIS: R$ 20 ou R$ 5?",
          opcoes: ["💵 R$ 5", "💵 R$ 20", "Valem igual"],
          correta: 1,
          explicacao: "20 é maior que 5 → R$ 20 vale mais.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: nota20, quantidade: 1, rotulo: "R$ 20", cor: "#F59E0B" },
              { imagemUrl: nota5, quantidade: 1, rotulo: "R$ 5", cor: "#EA580C" },
            ],
          },
        },
        {
          pergunta: "Pra comprar um brinquedo precisamos usar…",
          opcoes: ["📅 Calendário", "💵 Dinheiro", "📏 Régua"],
          correta: 1,
          explicacao: "Compramos com dinheiro — moedas ou cédulas.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: carteiraImg, quantidade: 1, rotulo: "Dinheiro 💰", cor: "#22C55E" },
            ],
          },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "💰 Moedas: 5, 10, 25, 50 centavos e R$ 1.",
      "💵 Cédulas: R$ 2, R$ 5, R$ 10, R$ 20, R$ 50, R$ 100.",
      "Número maior = valor maior.",
      "Posso juntar moedas e cédulas pra formar o mesmo valor.",
    ],
    dica: "Antes de pagar, leia o preço e procure o número igual no dinheiro.",
  },

  quiz: [
    {
      pergunta: "Qual moeda tem MAIOR valor?",
      opcoes: ["25 centavos", "R$ 1,00"],
      correta: 1,
      explicacao: "R$ 1 = 100 centavos → maior que 25 centavos.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: moeda25, quantidade: 1, rotulo: "25 centavos", cor: "#F59E0B" },
          { imagemUrl: moeda1, quantidade: 1, rotulo: "R$ 1", cor: "#B45309" },
        ],
      },
    },
    {
      pergunta: "Qual cédula pago pra dar EXATAMENTE R$ 5?",
      opcoes: ["💵 R$ 2", "💵 R$ 5", "💵 R$ 20"],
      correta: 1,
      explicacao: "Preço R$ 5 → cédula R$ 5.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: nota5, quantidade: 1, rotulo: "R$ 5", cor: "#EA580C" },
        ],
      },
    },
    {
      pergunta: "Qual vale MAIS?",
      opcoes: ["💵 R$ 10", "💵 R$ 50"],
      correta: 1,
      explicacao: "50 é maior que 10 → R$ 50 vale mais.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: nota10, quantidade: 1, rotulo: "R$ 10", cor: "#DC2626" },
          { imagemUrl: nota50, quantidade: 1, rotulo: "R$ 50", cor: "#7C3AED" },
        ],
      },
    },
    {
      pergunta: "Pra comprar um brinquedo precisamos usar…",
      opcoes: ["💵 Dinheiro", "📅 Calendário", "📏 Régua"],
      correta: 0,
      explicacao: "Compras se fazem com moedas ou cédulas.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: carteiraImg, quantidade: 1, rotulo: "Dinheiro 💰", cor: "#22C55E" },
        ],
      },
    },
  ],

  conclusao:
    "🏆 Medalha conquistada: Pequeno Tesoureiro da Floresta! Você reconheceu moedas e cédulas, comparou valores e escolheu o dinheiro certo pra pagar. Missão em Família: brinquem de mercado 🛒 com etiquetas de R$ 2, R$ 5 e R$ 10 usando moedas e cédulas de brinquedo.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "O Real (R$) 💵 é a moeda oficial do Brasil desde 1994. Antes dele já existiram outras — Cruzeiro, Cruzado e Cruzado Novo!",
  },

  interativas: [
    // ==== FASE 1 · Qual vale mais? ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Qual vale mais?",
      instrucao: "Compare R$ 1,00 com 50 centavos.",
      grupos: [
        { imagemUrl: moeda1, quantidade: 1, rotulo: "R$ 1,00" },
        { imagemUrl: moeda50, quantidade: 1, rotulo: "50 centavos" },
      ],
      pergunta: "Qual possui MAIOR valor?",
      opcoes: ["50 centavos", "R$ 1,00", "Valem igual"],
      correta: 1,
      acerto: "Muito bem! R$ 1 = 100 centavos, mais que 50.",
      erro: "R$ 1,00 vale 100 centavos — mais que 50.",
    },

    // ==== FASE 2 · Pague a Compra ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Pague a Compra",
      instrucao: "A maçã 🍎 custa R$ 2. Qual cédula você entrega?",
      grupos: [
        { imagemUrl: macaImg, quantidade: 1, rotulo: "🍎 R$ 2" },
      ],
      pergunta: "Qual cédula paga EXATAMENTE?",
      opcoes: ["💵 R$ 2", "💵 R$ 5", "💵 R$ 10"],
      correta: 0,
      acerto: "Isso! Preço R$ 2 → cédula R$ 2.",
      erro: "Procure a cédula com o mesmo número do preço: R$ 2.",
    },

    // ==== FASE 3 · Monte o Valor ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · Monte o Valor",
      instrucao: "O brinquedo 🧸 custa R$ 5. Qual combinação forma R$ 5?",
      grupos: [
        { imagemUrl: ursoImg, quantidade: 1, rotulo: "🧸 R$ 5" },
        { imagemUrl: nota2, quantidade: 2, rotulo: "R$ 2 + R$ 2" },
        { imagemUrl: moeda1, quantidade: 1, rotulo: "+ R$ 1" },
      ],
      pergunta: "Qual soma dá R$ 5?",
      opcoes: ["R$ 2 + R$ 2 + R$ 1", "R$ 2 + R$ 1", "R$ 10 + R$ 5"],
      correta: 0,
      acerto: "Perfeito! 2 + 2 + 1 = 5.",
      erro: "Some os números: 2 + 2 + 1 = 5.",
    },

    // ==== FASE 4 · Quem Comprou Certo? ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 4 · Quem Comprou Certo?",
      instrucao: "O Coelho 🐰 comprou um livro 📖 de R$ 10 e pagou com uma cédula de R$ 10.",
      grupos: [
        { imagemUrl: coelhoImg, quantidade: 1, rotulo: "Coelho" },
        { imagemUrl: livroImg, quantidade: 1, rotulo: "📖 R$ 10" },
        { imagemUrl: nota10, quantidade: 1, rotulo: "Pagou R$ 10" },
      ],
      pergunta: "O pagamento está correto?",
      opcoes: ["✅ Sim", "❌ Não"],
      correta: 0,
      acerto: "Isso! R$ 10 = R$ 10, pagamento exato.",
      erro: "Preço R$ 10 e cédula R$ 10 — está certo!",
    },

    // ==== FASE 5 · Mercado do Brilha ====
    {
      tipo: "ligar",
      titulo: "Fase 5 · Mercado do Brilha",
      instrucao: "Ligue cada produto à cédula que paga o preço certinho.",
      pares: [
        { a: "🍌 Banana R$ 2", b: "💵 R$ 2", aImagem: bananaImg, aQuantidade: 1, bImagem: nota2, bQuantidade: 1 },
        { a: "🧸 Ursinho R$ 5", b: "💵 R$ 5", aImagem: ursoImg, aQuantidade: 1, bImagem: nota5, bQuantidade: 1 },
        { a: "📖 Livro R$ 10", b: "💵 R$ 10", aImagem: livroImg, aQuantidade: 1, bImagem: nota10, bQuantidade: 1 },
      ],
    },

    // ==== MINI JOGO · Supermercado da Floresta ====
    {
      tipo: "arrastar",
      titulo: "Mini Jogo · Supermercado da Floresta",
      instrucao: "Arraste cada dinheiro pro produto que ele paga certinho 🛒.",
      alvosVisuais: [
        { nome: "🍌 Banana R$ 2", cor: "#FBBF24", capacidade: 2, imagemUrl: bananaImg },
        { nome: "🧸 Ursinho R$ 5", cor: "#EA580C", capacidade: 2, imagemUrl: ursoImg },
        { nome: "📖 Livro R$ 10", cor: "#DC2626", capacidade: 2, imagemUrl: livroImg },
        { nome: "🧃 Suco R$ 20", cor: "#F59E0B", capacidade: 2, imagemUrl: sucoImg },
      ],
      pares: [
        { item: "💵 R$ 2", alvo: "🍌 Banana R$ 2", itemImagem: nota2 },
        { item: "R$ 1 + R$ 1", alvo: "🍌 Banana R$ 2", itemImagem: moeda1 },
        { item: "💵 R$ 5", alvo: "🧸 Ursinho R$ 5", itemImagem: nota5 },
        { item: "R$ 2 + R$ 2 + R$ 1", alvo: "🧸 Ursinho R$ 5", itemImagem: nota2 },
        { item: "💵 R$ 10", alvo: "📖 Livro R$ 10", itemImagem: nota10 },
        { item: "R$ 5 + R$ 5", alvo: "📖 Livro R$ 10", itemImagem: nota5 },
        { item: "💵 R$ 20", alvo: "🧃 Suco R$ 20", itemImagem: nota20 },
        { item: "R$ 10 + R$ 10", alvo: "🧃 Suco R$ 20", itemImagem: nota10 },
      ],
    },

    // ==== DESAFIO · Ordenar dinheiro do menor pro maior ====
    {
      tipo: "ordenar",
      titulo: "Desafio Brilha · Do menor pro maior",
      instrucao: "Coloque as cédulas em ordem — do que vale MENOS pro que vale MAIS.",
      itens: ["💵 R$ 2", "💵 R$ 5", "💵 R$ 10", "💵 R$ 20", "💵 R$ 50"],
      imagens: [
        { imagemUrl: nota2, quantidade: 1, rotulo: "R$ 2", cor: "#059669" },
        { imagemUrl: nota5, quantidade: 1, rotulo: "R$ 5", cor: "#EA580C" },
        { imagemUrl: nota10, quantidade: 1, rotulo: "R$ 10", cor: "#DC2626" },
        { imagemUrl: nota20, quantidade: 1, rotulo: "R$ 20", cor: "#F59E0B" },
        { imagemUrl: nota50, quantidade: 1, rotulo: "R$ 50", cor: "#7C3AED" },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Qual vale MAIS: R$ 2 ou R$ 10?",
        opcoes: ["R$ 2", "R$ 10"],
        correta: 1,
        explicacao: "10 é maior que 2.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: nota2, quantidade: 1, rotulo: "R$ 2", cor: "#059669" },
            { imagemUrl: nota10, quantidade: 1, rotulo: "R$ 10", cor: "#DC2626" },
          ],
        },
      },
      {
        pergunta: "Qual moeda vale R$ 1?",
        opcoes: ["🟡 10 centavos", "🟡 R$ 1"],
        correta: 1,
        explicacao: "A moeda de R$ 1 vale 100 centavos.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: moeda10, quantidade: 1, rotulo: "10 centavos", cor: "#F59E0B" },
            { imagemUrl: moeda1, quantidade: 1, rotulo: "R$ 1", cor: "#B45309" },
          ],
        },
      },
    ],
    medio: [
      {
        pergunta: "Pra pagar EXATAMENTE R$ 5 posso usar…",
        opcoes: ["💵 R$ 2", "💵 R$ 5", "💵 R$ 20"],
        correta: 1,
        explicacao: "R$ 5 pago com a cédula de R$ 5.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: nota5, quantidade: 1, rotulo: "R$ 5", cor: "#EA580C" },
          ],
        },
      },
      {
        pergunta: "Quanto vale R$ 2 + R$ 2 + R$ 1?",
        opcoes: ["R$ 4", "R$ 5", "R$ 6"],
        correta: 1,
        explicacao: "2 + 2 + 1 = 5.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: nota2, quantidade: 2, rotulo: "R$ 2 + R$ 2", cor: "#059669" },
            { imagemUrl: moeda1, quantidade: 1, rotulo: "+ R$ 1", cor: "#B45309" },
          ],
        },
      },
    ],
    dificil: [
      {
        pergunta: "Preciso pagar R$ 7. Qual combinação serve?",
        opcoes: ["R$ 5 + R$ 2", "R$ 2 + R$ 2", "R$ 10"],
        correta: 0,
        explicacao: "5 + 2 = 7.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: nota5, quantidade: 1, rotulo: "R$ 5", cor: "#EA580C" },
            { imagemUrl: nota2, quantidade: 1, rotulo: "R$ 2", cor: "#059669" },
          ],
        },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01MA20",
  },
};

export default aula;
