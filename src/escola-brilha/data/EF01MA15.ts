import type { Aula } from "../types";

/**
 * EF01MA15 — Aula 015 · Biblioteca Pedagógica Escola Brilha
 * 1º Ano · Matemática
 * BNCC: Comparar comprimentos, capacidades ou massas de objetos do
 *       cotidiano, usando expressões como mais comprido, mais curto,
 *       mais alto, mais baixo, mais pesado, mais leve, cabe mais,
 *       cabe menos — SEM unidades padronizadas.
 *
 * Missão: "O Laboratório dos Cientistas da Floresta".
 *
 * REGRA DO USUÁRIO (travada): usar EXATAMENTE os emojis do prompt como
 * imagens dos objetos. Cada "imagem" é um SVG data-URI com o emoji
 * renderizado grande via foreignObject (renderiza color emoji de forma
 * confiável em todos os browsers).
 */
const emojiImg = (emoji: string): string => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><foreignObject x='0' y='0' width='200' height='200'><div xmlns='http://www.w3.org/1999/xhtml' style='width:200px;height:200px;display:flex;align-items:center;justify-content:center;font-size:150px;line-height:1;font-family:Apple Color Emoji,Segoe UI Emoji,Noto Color Emoji,EmojiOne Color,Twemoji Mozilla,sans-serif'>${emoji}</div></foreignObject></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

// ==== Objetos do prompt (só emojis solicitados) ====
const reguaImg = emojiImg("📏");
const lapisImg = emojiImg("✏️");
const gizImg = emojiImg("🖍️");
const madeiraImg = emojiImg("🪵");
const pedraImg = emojiImg("🪨");
const folhaImg = emojiImg("🍂");
const folhaVerdeImg = emojiImg("🍃");
const copoImg = emojiImg("🥤");
const copoLeiteImg = emojiImg("🥛");
const baldeImg = emojiImg("🪣");
const arvoreImg = emojiImg("🌳");
const florImg = emojiImg("🌼");
const elefanteImg = emojiImg("🐘");
const coelhoImg = emojiImg("🐇");
const lupaImg = emojiImg("🔍");
const corujaImg = emojiImg("🦉");

const aula: Aula = {
  codigo: "EF01MA15",
  ano: "1º Ano",
  disciplina: "Matemática",
  titulo: "O Laboratório dos Cientistas da Floresta",

  narrativa: {
    titulo: "O Laboratório dos Cientistas da Floresta",
    contexto:
      "O Professor Coruja 🦉 convidou o Brilha para um experimento no laboratório da floresta.",
    problema:
      "Os animais encontraram objetos de tamanhos, pesos e capacidades diferentes — mas ninguém sabe como organizá-los!",
    convite:
      "Vamos comparar comprido/curto, alto/baixo, pesado/leve e cabe mais/cabe menos?",
  },

  conhecimentosPrevios: [
    "Diferenciar grande e pequeno.",
    "Reconhecer objetos do dia a dia por imagem.",
    "Comparar 'mais' e 'menos'.",
  ],

  missao:
    "Comparar objetos por comprimento, altura, massa e capacidade — usando só a observação, sem régua nem balança.",

  objetivos: [
    "Comparar comprimentos (mais comprido / mais curto).",
    "Comparar alturas (mais alto / mais baixo).",
    "Comparar massas (mais pesado / mais leve).",
    "Comparar capacidades (cabe mais / cabe menos).",
    "Usar o vocabulário matemático corretamente.",
  ],

  motivacao:
    "Nem sempre precisamos de régua ou balança. Basta observar com atenção — cientistas de verdade fazem assim!",

  explicacao:
    "📏 COMPRIMENTO — 🪵 madeira longa vs ✏️ lápis curto: qual é mais comprido?\n\n📦 CAPACIDADE — 🥛 copo pequeno vs 🪣 balde: em qual cabe mais água?\n\n⚖️ MASSA — 🪨 pedra vs 🍃 folha: qual é mais pesado?\n\n📐 ALTURA — 🌳 árvore vs 🌼 flor: qual é mais alto?",

  explicacoesNiveis: {
    nivel1:
      "Coisa comprida é longa. Coisa curta é pequena. Pesado empurra a mão pra baixo, leve quase não sentimos.",
    nivel2:
      "🪵 madeira é MAIS COMPRIDA que ✏️ lápis. 🪨 pedra é MAIS PESADA que 🍃 folha. 🪣 balde CABE MAIS água que 🥛 copo. 🌳 árvore é MAIS ALTA que 🌼 flor.",
    nivel3:
      "Pra comparar: coloque lado a lado. O que passa do outro é MAIS COMPRIDO. O que sobe mais é MAIS ALTO. O que a mão sente pesando é MAIS PESADO. O que segura mais água é o que CABE MAIS.",
    nivel4:
      "Cientistas observam antes de medir. Depois eles usam régua (comprimento), balança (massa) e copo medidor (capacidade) pra transformar a observação em número.",
  },

  exemploResolvido: {
    enunciado: "O Brilha achou uma 📏 régua e um ✏️ lápis. Qual é mais comprido?",
    passos: [
      "Colocar os dois lado a lado.",
      "A régua vai até bem longe; o lápis é menorzinho.",
      "A régua PASSA do lápis.",
      "Então a RÉGUA é mais comprida que o lápis.",
    ],
    resposta: "A régua é MAIS COMPRIDA que o lápis.",
  },

  atividadeGuiada: {
    enunciado: "Olhe a imagem: 📏 régua e ✏️ lápis. Qual é MAIS COMPRIDO?",
    resposta: "A régua.",
    explicacao: "A régua passa do lápis quando encostamos os dois lado a lado.",
    visual: {
      tipo: "cena",
      pergunta: "Qual é mais comprido?",
      posicao: "aoLado",
      referenciaImg: lapisImg,
      referenciaLabel: "Lápis",
      sujeitoImg: reguaImg,
      sujeitoLabel: "Régua",
      opcoes: ["Lápis", "Régua"],
      correta: 1,
    },
  },

  exercicios: [
    { enunciado: "🪵 madeira vs ✏️ lápis — qual é mais comprido?", resposta: "Madeira", dica: "A madeira é longa." },
    { enunciado: "🪨 pedra vs 🍃 folha — qual pesa mais?", resposta: "Pedra", dica: "A folha voa com o vento." },
    { enunciado: "🥛 copo vs 🪣 balde — qual cabe mais água?", resposta: "Balde", dica: "O balde é bem maior." },
    { enunciado: "🌳 árvore vs 🌼 flor — qual é mais alta?", resposta: "Árvore", dica: "A árvore chega no céu." },
    { enunciado: "🐘 elefante vs 🐇 coelho — quem pesa mais?", resposta: "Elefante", dica: "Elefante é enorme." },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: complete as frases dos cientistas da floresta!",
    resposta:
      "Árvore = mais alta · Pedra = mais pesada · Balde = cabe mais · Lápis = mais curto.",
    visual: {
      cena: [
        { personagem: "Comprimento 📏", itemImagemUrl: reguaImg, quantidade: 1, cor: "#3B82F6" },
        { personagem: "Massa ⚖️", itemImagemUrl: pedraImg, quantidade: 1, cor: "#78716C" },
        { personagem: "Capacidade 🪣", itemImagemUrl: baldeImg, quantidade: 1, cor: "#10B981" },
        { personagem: "Altura 📐", itemImagemUrl: arvoreImg, quantidade: 1, cor: "#22C55E" },
      ],
      perguntas: [
        {
          pergunta: "🌳 árvore é __________ que a 🌼 flor.",
          opcoes: ["Mais baixa", "Mais alta", "Igual"],
          correta: 1,
          explicacao: "A árvore chega bem mais alto que a flor.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: arvoreImg, quantidade: 1, rotulo: "Árvore", cor: "#22C55E" },
              { imagemUrl: florImg, quantidade: 1, rotulo: "Flor", cor: "#F472B6" },
            ],
          },
        },
        {
          pergunta: "🪨 pedra é __________ que a 🍃 folha.",
          opcoes: ["Mais leve", "Mais pesada", "Igual"],
          correta: 1,
          explicacao: "A pedra afunda; a folha voa com o vento.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: pedraImg, quantidade: 1, rotulo: "Pedra", cor: "#78716C" },
              { imagemUrl: folhaVerdeImg, quantidade: 1, rotulo: "Folha", cor: "#22C55E" },
            ],
          },
        },
        {
          pergunta: "🪣 balde __________ água que o 🥤 copo.",
          opcoes: ["Cabe menos", "Cabe mais", "Cabe igual"],
          correta: 1,
          explicacao: "O balde é muito maior — cabe mais água.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: baldeImg, quantidade: 1, rotulo: "Balde", cor: "#10B981" },
              { imagemUrl: copoImg, quantidade: 1, rotulo: "Copo", cor: "#60A5FA" },
            ],
          },
        },
        {
          pergunta: "✏️ o lápis é __________ que a 📏 régua.",
          opcoes: ["Mais comprido", "Mais curto", "Igual"],
          correta: 1,
          explicacao: "A régua passa do lápis — então o lápis é mais curto.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: lapisImg, quantidade: 1, rotulo: "Lápis", cor: "#FBBF24" },
              { imagemUrl: reguaImg, quantidade: 1, rotulo: "Régua", cor: "#3B82F6" },
            ],
          },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "📏 COMPRIMENTO — mais comprido / mais curto.",
      "📐 ALTURA — mais alto / mais baixo.",
      "⚖️ MASSA — mais pesado / mais leve.",
      "📦 CAPACIDADE — cabe mais / cabe menos.",
    ],
    dica:
      "Antes de responder: coloque os objetos lado a lado, olhe com atenção e compare.",
  },

  quiz: [
    {
      pergunta: "Qual objeto costuma ser MAIS PESADO?",
      opcoes: ["🍂 Folha", "🪨 Pedra"],
      correta: 1,
      explicacao: "A pedra é muito mais pesada que a folha.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: folhaImg, quantidade: 1, rotulo: "Folha", cor: "#F97316" },
          { imagemUrl: pedraImg, quantidade: 1, rotulo: "Pedra", cor: "#78716C" },
        ],
      },
    },
    {
      pergunta: "Qual recipiente normalmente CABE MAIS líquido?",
      opcoes: ["🪣 Balde", "🥤 Copo"],
      correta: 0,
      explicacao: "O balde é grande — cabe mais água.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: baldeImg, quantidade: 1, rotulo: "Balde", cor: "#10B981" },
          { imagemUrl: copoImg, quantidade: 1, rotulo: "Copo", cor: "#60A5FA" },
        ],
      },
    },
    {
      pergunta: "Qual objeto é MAIS COMPRIDO?",
      opcoes: ["📏 Régua", "🖍️ Giz"],
      correta: 0,
      explicacao: "A régua é bem mais comprida que o giz.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: reguaImg, quantidade: 1, rotulo: "Régua", cor: "#3B82F6" },
          { imagemUrl: gizImg, quantidade: 1, rotulo: "Giz", cor: "#F472B6" },
        ],
      },
    },
    {
      pergunta: "Qual palavra usamos para comparar ALTURAS?",
      opcoes: ["Mais alto", "Mais doce", "Mais bonito"],
      correta: 0,
      explicacao: "Altura se compara com 'mais alto' / 'mais baixo'.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: arvoreImg, quantidade: 1, rotulo: "Árvore", cor: "#22C55E" },
          { imagemUrl: florImg, quantidade: 1, rotulo: "Flor", cor: "#F472B6" },
        ],
      },
    },
  ],

  conclusao:
    "🏆 Medalha conquistada: Pequeno Cientista da Floresta! Você aprendeu a comparar comprimento, altura, massa e capacidade. Missão em Família: escolha 5 objetos de casa e compare qual é o mais comprido, o mais curto, o que pesa mais, o que pesa menos e o que cabe mais água.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Antes das réguas e balanças, as pessoas comparavam objetos usando o próprio corpo — pés, mãos e braços! Foi assim que nasceram medidas antigas como o 'palmo' e o 'pé'.",
  },

  interativas: [
    // ==== FASE 1 · Qual é mais comprido? ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Qual é mais comprido?",
      instrucao: "Olhe os dois objetos. Qual é MAIS COMPRIDO?",
      grupos: [
        { imagemUrl: lapisImg, quantidade: 1, rotulo: "✏️ Lápis" },
        { imagemUrl: reguaImg, quantidade: 1, rotulo: "📏 Régua" },
      ],
      pergunta: "Qual é mais comprido?",
      opcoes: ["✏️ Lápis", "📏 Régua"],
      correta: 1,
      acerto: "Muito bem! A régua tem MAIOR comprimento.",
      erro: "Olhe de novo: a régua é longa, o lápis é bem menor.",
    },

    // ==== FASE 2 · O que pesa mais? ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · O que pesa mais?",
      instrucao: "Pense com o peso: qual é MAIS PESADO?",
      grupos: [
        { imagemUrl: pedraImg, quantidade: 1, rotulo: "🪨 Pedra" },
        { imagemUrl: folhaImg, quantidade: 1, rotulo: "🍂 Folha" },
      ],
      pergunta: "Qual é mais pesada?",
      opcoes: ["🪨 Pedra", "🍂 Folha"],
      correta: 0,
      acerto: "Isso! A pedra pesa muito mais que a folha.",
      erro: "A folha é leve, voa com o vento. Tente de novo.",
    },

    // ==== FASE 3 · Quem cabe mais? ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · Quem cabe mais?",
      instrucao: "Qual recipiente CABE MAIS água?",
      grupos: [
        { imagemUrl: copoImg, quantidade: 1, rotulo: "🥤 Copo" },
        { imagemUrl: baldeImg, quantidade: 1, rotulo: "🪣 Balde" },
      ],
      pergunta: "Qual recipiente cabe mais água?",
      opcoes: ["🥤 Copo", "🪣 Balde"],
      correta: 1,
      acerto: "Perfeito! No balde cabe muito mais água.",
      erro: "O copo é pequeno. Olhe o balde de novo!",
    },

    // ==== FASE 4 · Organize do menor para o maior ====
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize do menor para o maior",
      instrucao:
        "Arraste os objetos na ordem certa: do MENOR (mais curto) para o MAIOR (mais comprido).",
      itens: ["🖍️ Giz", "✏️ Lápis", "📏 Régua"],
      imagens: [
        { imagemUrl: gizImg, quantidade: 1, rotulo: "🖍️ Giz (mais curto)", cor: "#F472B6" },
        { imagemUrl: lapisImg, quantidade: 1, rotulo: "✏️ Lápis (médio)", cor: "#FBBF24" },
        { imagemUrl: reguaImg, quantidade: 1, rotulo: "📏 Régua (mais comprido)", cor: "#3B82F6" },
      ],
    },

    // ==== FASE 5 · Comparando Animais ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Comparando Animais",
      instrucao: "🐘 elefante vs 🐇 coelho. Quem é MAIS PESADO?",
      grupos: [
        { imagemUrl: elefanteImg, quantidade: 1, rotulo: "🐘 Elefante" },
        { imagemUrl: coelhoImg, quantidade: 1, rotulo: "🐇 Coelho" },
      ],
      pergunta: "Quem é mais pesado?",
      opcoes: ["🐘 Elefante", "🐇 Coelho"],
      correta: 0,
      acerto: "Isso! O elefante é enorme e muito mais pesado.",
      erro: "O coelho é pequeno e leve. Olhe o elefante!",
    },

    // ==== MINI JOGO · Organizando o Laboratório ====
    {
      tipo: "arrastar",
      titulo: "Mini Jogo · Organizando o Laboratório",
      instrucao:
        "O Professor Coruja 🦉 pediu: coloque cada objeto na prateleira certa.",
      alvosVisuais: [
        { nome: "📏 MAIS COMPRIDO", cor: "#3B82F6", capacidade: 1, imagemUrl: reguaImg },
        { nome: "🖍️ MAIS CURTO", cor: "#F472B6", capacidade: 1, imagemUrl: gizImg },
        { nome: "⚖️ MAIS PESADO", cor: "#78716C", capacidade: 1, imagemUrl: pedraImg },
        { nome: "🍃 MAIS LEVE", cor: "#22C55E", capacidade: 1, imagemUrl: folhaVerdeImg },
        { nome: "🪣 CABE MAIS", cor: "#10B981", capacidade: 1, imagemUrl: baldeImg },
        { nome: "🥤 CABE MENOS", cor: "#60A5FA", capacidade: 1, imagemUrl: copoImg },
      ],
      pares: [
        { item: "🪵 Madeira", alvo: "📏 MAIS COMPRIDO", itemImagem: madeiraImg },
        { item: "🖍️ Giz", alvo: "🖍️ MAIS CURTO", itemImagem: gizImg },
        { item: "🪨 Pedra", alvo: "⚖️ MAIS PESADO", itemImagem: pedraImg },
        { item: "🍂 Folha", alvo: "🍃 MAIS LEVE", itemImagem: folhaImg },
        { item: "🪣 Balde", alvo: "🪣 CABE MAIS", itemImagem: baldeImg },
        { item: "🥛 Copo", alvo: "🥤 CABE MENOS", itemImagem: copoLeiteImg },
      ],
    },

    // ==== DESAFIO BRILHA · Complete a frase (ligar) ====
    {
      tipo: "ligar",
      titulo: "Desafio Brilha · Complete a frase",
      instrucao: "Ligue cada objeto à comparação certa.",
      pares: [
        { a: "🌳 Árvore vs 🌼 flor", b: "Mais alta", aImagem: arvoreImg, aQuantidade: 1, bImagem: arvoreImg, bQuantidade: 1 },
        { a: "🪨 Pedra vs 🍃 folha", b: "Mais pesada", aImagem: pedraImg, aQuantidade: 1, bImagem: pedraImg, bQuantidade: 1 },
        { a: "🪣 Balde vs 🥤 copo", b: "Cabe mais", aImagem: baldeImg, aQuantidade: 1, bImagem: baldeImg, bQuantidade: 1 },
        { a: "✏️ Lápis vs 📏 régua", b: "Mais curto", aImagem: lapisImg, aQuantidade: 1, bImagem: lapisImg, bQuantidade: 1 },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Qual é MAIS ALTO?",
        opcoes: ["🌳 Árvore", "🌼 Flor"],
        correta: 0,
        explicacao: "A árvore chega bem mais alto.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: arvoreImg, quantidade: 1, rotulo: "Árvore", cor: "#22C55E" },
            { imagemUrl: florImg, quantidade: 1, rotulo: "Flor", cor: "#F472B6" },
          ],
        },
      },
      {
        pergunta: "Qual é MAIS COMPRIDO?",
        opcoes: ["🪵 Madeira", "🖍️ Giz"],
        correta: 0,
        explicacao: "A madeira é longa; o giz é curtinho.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: madeiraImg, quantidade: 1, rotulo: "Madeira", cor: "#92400E" },
            { imagemUrl: gizImg, quantidade: 1, rotulo: "Giz", cor: "#F472B6" },
          ],
        },
      },
    ],
    medio: [
      {
        pergunta: "Qual pesa MENOS?",
        opcoes: ["🪨 Pedra", "🍃 Folha"],
        correta: 1,
        explicacao: "A folha é leve; voa fácil com o vento.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: pedraImg, quantidade: 1, rotulo: "Pedra", cor: "#78716C" },
            { imagemUrl: folhaVerdeImg, quantidade: 1, rotulo: "Folha", cor: "#22C55E" },
          ],
        },
      },
      {
        pergunta: "Em qual CABE MENOS água?",
        opcoes: ["🪣 Balde", "🥛 Copo"],
        correta: 1,
        explicacao: "No copo cabe pouquinha água comparado ao balde.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: baldeImg, quantidade: 1, rotulo: "Balde", cor: "#10B981" },
            { imagemUrl: copoLeiteImg, quantidade: 1, rotulo: "Copo", cor: "#60A5FA" },
          ],
        },
      },
    ],
    dificil: [
      {
        pergunta: "Quem é MAIS PESADO?",
        opcoes: ["🐘 Elefante", "🐇 Coelho", "🍃 Folha"],
        correta: 0,
        explicacao: "O elefante é o mais pesado de todos.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: elefanteImg, quantidade: 1, rotulo: "Elefante", cor: "#78716C" },
            { imagemUrl: coelhoImg, quantidade: 1, rotulo: "Coelho", cor: "#F472B6" },
            { imagemUrl: folhaVerdeImg, quantidade: 1, rotulo: "Folha", cor: "#22C55E" },
          ],
        },
      },
      {
        pergunta:
          "🦉 Professor Coruja pergunta: 'Qual palavra usamos pra comparar CAPACIDADE?'",
        opcoes: ["Cabe mais", "Mais alto", "Mais pesado"],
        correta: 0,
        explicacao:
          "Capacidade é quanto CABE dentro. Usamos 'cabe mais' e 'cabe menos'.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: corujaImg, quantidade: 1, rotulo: "Prof. Coruja", cor: "#A78BFA" },
            { imagemUrl: baldeImg, quantidade: 1, rotulo: "Balde", cor: "#10B981" },
            { imagemUrl: copoImg, quantidade: 1, rotulo: "Copo", cor: "#60A5FA" },
          ],
        },
      },
    ],
  },

  proximaHabilidade: { codigo: "EF01MA16" },
};

// Referência não usada diretamente, mas mantida para futuras cenas.
void lupaImg;

export default aula;
