import type { Aula } from "../types";

/**
 * EF01MA22 — Aula 022 · Biblioteca Pedagógica Escola Brilha
 * 1º Ano · Matemática
 * BNCC: Realizar pesquisa simples, envolvendo até duas variáveis categóricas
 *       de seu interesse, organizar dados por meio de representações pessoais
 *       e comunicar os resultados.
 *
 * Missão: "O Grande Censo da Floresta".
 */
const emojiImg = (emoji: string): string => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><foreignObject x='0' y='0' width='200' height='200'><div xmlns='http://www.w3.org/1999/xhtml' style='width:200px;height:200px;display:flex;align-items:center;justify-content:center;font-size:150px;line-height:1;font-family:Apple Color Emoji,Segoe UI Emoji,Noto Color Emoji,EmojiOne Color,Twemoji Mozilla,sans-serif'>${emoji}</div></foreignObject></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

// Animais
const cachorroImg = emojiImg("🐶");
const gatoImg = emojiImg("🐱");
const coelhoImg = emojiImg("🐰");

// Frutas
const macaImg = emojiImg("🍎");
const bananaImg = emojiImg("🍌");
const uvaImg = emojiImg("🍇");

// Sucos
const laranjaImg = emojiImg("🍊");
const morangoImg = emojiImg("🍓");

// Cores
const azulImg = emojiImg("🔵");
const vermelhoImg = emojiImg("🔴");
const verdeImg = emojiImg("🟢");

// Objetos
const perguntaImg = emojiImg("❓");
const pranchetaImg = emojiImg("📋");
const microfoneImg = emojiImg("🎤");
const graficoImg = emojiImg("📊");

const aula: Aula = {
  codigo: "EF01MA22",
  ano: "1º Ano",
  disciplina: "Matemática",
  titulo: "O Grande Censo da Floresta",

  narrativa: {
    titulo: "O Grande Censo da Floresta",
    contexto:
      "O Brilha ✨ quer conhecer melhor os amigos da floresta 🐶🐱🐰 e resolveu fazer uma PESQUISA.",
    problema:
      "Ele precisa perguntar, anotar as respostas, organizar tudo e contar quem venceu.",
    convite: "Vamos ajudar o Brilha a fazer o Grande Censo?",
  },

  conhecimentosPrevios: [
    "Contar até 10.",
    "Comparar 'mais' e 'menos'.",
    "Ler tabelas e gráficos simples (EF01MA21).",
  ],

  missao:
    "Fazer uma pesquisa: perguntar, registrar, organizar e comunicar o resultado.",

  objetivos: [
    "Realizar uma pesquisa simples.",
    "Registrar as respostas.",
    "Organizar as informações em tabela.",
    "Comunicar o resultado.",
  ],

  motivacao:
    "Pesquisar é como ser um repórter 🎤 da floresta — a gente descobre o que os amigos pensam!",

  explicacao:
    "Uma PESQUISA 📋 tem 4 passos:\n\n1️⃣ Fazer a pergunta ❓\n2️⃣ Registrar as respostas ✍️\n3️⃣ Organizar os dados 📊\n4️⃣ Contar o resultado e contar pra todo mundo 🎤",

  explicacoesNiveis: {
    nivel1: "Pesquisar = perguntar, anotar, organizar e contar.",
    nivel2:
      "Cada voto conta 1. No fim, quem tiver MAIS votos venceu a pesquisa.",
    nivel3:
      "Se dois receberem a MESMA quantidade, chamamos de EMPATE.",
    nivel4:
      "Empresas 🏢 e cientistas 🔬 fazem pesquisas antes de criar brinquedos, comidas e remédios pra saber do que as pessoas gostam.",
  },

  exemploResolvido: {
    enunciado:
      "Pesquisa: 'Qual animal você mais gosta?' Respostas: 🐶🐶🐱🐰🐰. Quem venceu?",
    passos: [
      "Conte os votos de cada um.",
      "🐶 Cachorro = 2 · 🐱 Gato = 1 · 🐰 Coelho = 2.",
      "O maior número é 2 — apareceu duas vezes.",
      "Então tivemos um EMPATE entre 🐶 e 🐰.",
    ],
    resposta: "Empate: 🐶 Cachorro e 🐰 Coelho (2 votos cada).",
  },

  atividadeGuiada: {
    enunciado:
      "Pesquisa dos animais: 🐶 2 · 🐱 1 · 🐰 2. Quantos votos o 🐶 cachorro recebeu?",
    resposta: "2 votos.",
    explicacao:
      "Contamos as respostas do cachorro e chegamos a 2.",
  },

  exercicios: [
    { enunciado: "Qual é o 1º passo de uma pesquisa?", resposta: "Fazer a pergunta ❓", dica: "Sem pergunta não tem resposta." },
    { enunciado: "Depois de perguntar, o que fazemos?", resposta: "Registrar as respostas ✍️", dica: "Anotar cada voto." },
    { enunciado: "Como organizamos os votos?", resposta: "Em uma tabela 📋 ou gráfico 📊", dica: "Linhas, colunas ou barras." },
    { enunciado: "Pesquisa: 🐶 2 · 🐱 1 · 🐰 2. Quantas pessoas responderam no total?", resposta: "5", dica: "2 + 1 + 2 = 5." },
    { enunciado: "Se 🐶 = 2 e 🐰 = 2, o que aconteceu?", resposta: "Empate!", dica: "Mesma quantidade de votos." },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: pesquisa dos SUCOS · 🍊 Laranja = 3 · 🍇 Uva = 1 · 🍎 Maçã = 2.",
    resposta:
      "🍊 Laranja venceu (3) · 6 pessoas responderam no total · 🍇 Uva ficou em último.",
    visual: {
      perguntas: [
        {
          pergunta: "Qual suco VENCEU a pesquisa?",
          opcoes: ["🍇 Uva", "🍎 Maçã", "🍊 Laranja"],
          correta: 2,
          explicacao: "Laranja teve 3 votos — o maior número.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: laranjaImg, quantidade: 3, rotulo: "🍊 Laranja · 3", cor: "#F97316" },
              { imagemUrl: macaImg, quantidade: 2, rotulo: "🍎 Maçã · 2", cor: "#EF4444" },
              { imagemUrl: uvaImg, quantidade: 1, rotulo: "🍇 Uva · 1", cor: "#8B5CF6" },
            ],
          },
        },
        {
          pergunta: "Quantas pessoas responderam a pesquisa dos sucos?",
          opcoes: ["4", "5", "6"],
          correta: 2,
          explicacao: "3 + 2 + 1 = 6 pessoas.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: laranjaImg, quantidade: 3, rotulo: "🍊 · 3", cor: "#F97316" },
              { imagemUrl: macaImg, quantidade: 2, rotulo: "🍎 · 2", cor: "#EF4444" },
              { imagemUrl: uvaImg, quantidade: 1, rotulo: "🍇 · 1", cor: "#8B5CF6" },
            ],
          },
        },
        {
          pergunta: "Qual suco ficou em ÚLTIMO?",
          opcoes: ["🍊 Laranja", "🍇 Uva", "🍎 Maçã"],
          correta: 1,
          explicacao: "Uva teve só 1 voto — o menor número.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: uvaImg, quantidade: 1, rotulo: "🍇 Uva · 1", cor: "#8B5CF6" },
            ],
          },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "1️⃣ Pergunta → 2️⃣ Registrar → 3️⃣ Organizar → 4️⃣ Comunicar.",
      "Cada resposta = 1 voto.",
      "Quem tem MAIS votos venceu; MESMA quantidade = empate.",
      "Pesquisas ajudam a conhecer opiniões e tomar decisões.",
    ],
    dica: "Pesquisa = perguntar + anotar + contar + contar pra todo mundo!",
  },

  quiz: [
    {
      pergunta: "O 1º passo de uma pesquisa é…",
      opcoes: ["Fazer uma pergunta", "Contar os votos", "Fazer um desenho"],
      correta: 0,
      explicacao: "Sem pergunta ❓ não tem o que responder.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: perguntaImg, quantidade: 1, rotulo: "❓ Pergunta", cor: "#3B82F6" },
        ],
      },
    },
    {
      pergunta: "Depois de registrar as respostas devemos…",
      opcoes: ["Apagar tudo", "Organizar os dados", "Começar outra pesquisa"],
      correta: 1,
      explicacao: "Organizamos em tabela 📋 ou gráfico 📊 pra facilitar a leitura.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: pranchetaImg, quantidade: 1, rotulo: "📋 Organizar", cor: "#22C55E" },
        ],
      },
    },
    {
      pergunta: "Uma pesquisa serve pra…",
      opcoes: ["Conhecer opiniões e informações", "Medir peso", "Contar dinheiro"],
      correta: 0,
      explicacao: "Pesquisa descobre o que as pessoas pensam e preferem.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: microfoneImg, quantidade: 1, rotulo: "🎤 Opiniões", cor: "#EC4899" },
        ],
      },
    },
    {
      pergunta: "Depois da pesquisa devemos…",
      opcoes: ["Comunicar os resultados", "Esconder as respostas", "Jogar os dados fora"],
      correta: 0,
      explicacao: "Contar o resultado pra todo mundo é o último passo 🎤.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: graficoImg, quantidade: 1, rotulo: "📊 Contar!", cor: "#8B5CF6" },
        ],
      },
    },
  ],

  conclusao:
    "🏆 Medalha: Pequeno Pesquisador da Floresta! Você aprendeu os 4 passos: PERGUNTAR → ANOTAR → ORGANIZAR → COMUNICAR. Missão em Família: pergunte 'Qual fruta você prefere?' pra 4 pessoas, monte uma tabela e conte quem venceu.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Antes de criar um brinquedo novo, empresas 🏢 fazem pesquisas com crianças pra descobrir do que elas mais gostam — só depois o brinquedo é feito!",
  },

  interativas: [
    // FASE 1 · Faça a Pergunta
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Faça a Pergunta",
      instrucao: "Pesquisa: 'Qual animal você mais gosta?' 🐶 🐱 🐰",
      grupos: [
        { imagemUrl: cachorroImg, quantidade: 1, rotulo: "🐶 Cachorro" },
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "🐱 Gato" },
        { imagemUrl: coelhoImg, quantidade: 1, rotulo: "🐰 Coelho" },
      ],
      pergunta: "Qual é o PRIMEIRO passo de uma pesquisa?",
      opcoes: ["Contar os votos", "Fazer a pergunta ❓", "Fazer um desenho"],
      correta: 1,
      acerto: "Isso! Toda pesquisa começa com uma pergunta.",
      erro: "Primeiro fazemos a pergunta — depois anotamos.",
    },

    // FASE 2 · Conte os Votos
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Conte os Votos",
      instrucao: "Depois de 5 respostas: 🐶 2 · 🐱 1 · 🐰 2.",
      grupos: [
        { imagemUrl: cachorroImg, quantidade: 2, rotulo: "🐶 Cachorro · 2" },
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "🐱 Gato · 1" },
        { imagemUrl: coelhoImg, quantidade: 2, rotulo: "🐰 Coelho · 2" },
      ],
      pergunta: "Quantos votos o 🐶 cachorro recebeu?",
      opcoes: ["1", "2", "3"],
      correta: 1,
      acerto: "Perfeito! O cachorro teve 2 votos.",
      erro: "Conte as figurinhas do cachorro: são 2.",
    },

    // FASE 3 · Organize a Pesquisa (ligar)
    {
      tipo: "ligar",
      titulo: "Fase 3 · Organize a Pesquisa",
      instrucao: "Ligue cada animal à quantidade certa de votos.",
      pares: [
        { a: "🐶 Cachorro", b: "2 votos", aImagem: cachorroImg, aQuantidade: 2, bImagem: cachorroImg, bQuantidade: 2 },
        { a: "🐱 Gato", b: "1 voto", aImagem: gatoImg, aQuantidade: 1, bImagem: gatoImg, bQuantidade: 1 },
        { a: "🐰 Coelho", b: "2 votos", aImagem: coelhoImg, aQuantidade: 2, bImagem: coelhoImg, bQuantidade: 2 },
      ],
    },

    // FASE 4 · Conte o Resultado
    {
      tipo: "contarQuiz",
      titulo: "Fase 4 · Conte o Resultado",
      instrucao: "🐶 2 · 🐱 1 · 🐰 2. Alguém empatou?",
      grupos: [
        { imagemUrl: cachorroImg, quantidade: 2, rotulo: "🐶 · 2" },
        { imagemUrl: coelhoImg, quantidade: 2, rotulo: "🐰 · 2" },
      ],
      pergunta: "Quem ficou EMPATADO em primeiro lugar?",
      opcoes: ["🐶 e 🐱", "🐶 e 🐰", "🐱 e 🐰"],
      correta: 1,
      acerto: "Isso! Cachorro e coelho tiveram 2 votos cada — EMPATE!",
      erro: "Os dois com 2 votos são 🐶 e 🐰.",
    },

    // FASE 5 · Conte pra Floresta (mini pesquisa nova - cores)
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Conte pra Floresta",
      instrucao: "Nova pesquisa: 'Qual cor você prefere?' 🔵 4 · 🔴 2 · 🟢 1.",
      grupos: [
        { imagemUrl: azulImg, quantidade: 4, rotulo: "🔵 Azul · 4" },
        { imagemUrl: vermelhoImg, quantidade: 2, rotulo: "🔴 Vermelho · 2" },
        { imagemUrl: verdeImg, quantidade: 1, rotulo: "🟢 Verde · 1" },
      ],
      pergunta: "Qual cor VENCEU a pesquisa?",
      opcoes: ["🟢 Verde", "🔴 Vermelho", "🔵 Azul"],
      correta: 2,
      acerto: "Boa repórter! O azul teve 4 votos — venceu!",
      erro: "O maior número é 4 → 🔵 Azul.",
    },

    // MINI JOGO · Repórter da Floresta
    {
      tipo: "ligar",
      titulo: "Mini Jogo · Repórter da Floresta 🎤",
      instrucao: "Ligue cada pesquisa ao VENCEDOR (🍊 3·🍎 2·🍇 1).",
      pares: [
        { a: "Suco mais votado", b: "🍊 Laranja", aImagem: microfoneImg, aQuantidade: 3, bImagem: laranjaImg, bQuantidade: 3 },
        { a: "Suco do meio", b: "🍎 Maçã", aImagem: microfoneImg, aQuantidade: 2, bImagem: macaImg, bQuantidade: 2 },
        { a: "Suco menos votado", b: "🍇 Uva", aImagem: microfoneImg, aQuantidade: 1, bImagem: uvaImg, bQuantidade: 1 },
      ],
    },

    // DESAFIO · Ordenar do mais votado ao menos votado
    {
      tipo: "ordenar",
      titulo: "Desafio Brilha · Do MAIS ao MENOS votado",
      instrucao: "Sucos: 🍊 3 · 🍎 2 · 🍇 1. Coloque do MAIS votado pro MENOS.",
      itens: ["🍊 Laranja · 3", "🍎 Maçã · 2", "🍇 Uva · 1"],
      imagens: [
        { imagemUrl: laranjaImg, quantidade: 3, rotulo: "🍊 · 3", cor: "#F97316" },
        { imagemUrl: macaImg, quantidade: 2, rotulo: "🍎 · 2", cor: "#EF4444" },
        { imagemUrl: uvaImg, quantidade: 1, rotulo: "🍇 · 1", cor: "#8B5CF6" },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "🐶 2 · 🐱 1. Quem teve MAIS votos?",
        opcoes: ["🐱 Gato", "🐶 Cachorro"],
        correta: 1,
        explicacao: "2 é maior que 1 → 🐶 Cachorro.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: cachorroImg, quantidade: 2, rotulo: "🐶 · 2", cor: "#B45309" },
            { imagemUrl: gatoImg, quantidade: 1, rotulo: "🐱 · 1", cor: "#6B7280" },
          ],
        },
      },
      {
        pergunta: "Qual é o 1º passo de uma pesquisa?",
        opcoes: ["Contar", "Fazer a pergunta"],
        correta: 1,
        explicacao: "Toda pesquisa começa com uma pergunta ❓.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: perguntaImg, quantidade: 1, rotulo: "❓", cor: "#3B82F6" },
          ],
        },
      },
    ],
    medio: [
      {
        pergunta: "🐶 2 · 🐱 1 · 🐰 2. Quem EMPATOU?",
        opcoes: ["🐶 e 🐱", "🐶 e 🐰", "🐱 e 🐰"],
        correta: 1,
        explicacao: "🐶 e 🐰 tiveram 2 votos cada.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: cachorroImg, quantidade: 2, rotulo: "🐶 · 2", cor: "#B45309" },
            { imagemUrl: coelhoImg, quantidade: 2, rotulo: "🐰 · 2", cor: "#EC4899" },
          ],
        },
      },
      {
        pergunta: "🍊 3 · 🍎 2 · 🍇 1. Quantas pessoas responderam?",
        opcoes: ["5", "6", "7"],
        correta: 1,
        explicacao: "3 + 2 + 1 = 6.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: laranjaImg, quantidade: 3, rotulo: "🍊 · 3", cor: "#F97316" },
            { imagemUrl: macaImg, quantidade: 2, rotulo: "🍎 · 2", cor: "#EF4444" },
            { imagemUrl: uvaImg, quantidade: 1, rotulo: "🍇 · 1", cor: "#8B5CF6" },
          ],
        },
      },
    ],
    dificil: [
      {
        pergunta: "🔵 4 · 🔴 2 · 🟢 1. Quantos votos a MAIS o azul teve que o verde?",
        opcoes: ["2", "3", "4"],
        correta: 1,
        explicacao: "4 − 1 = 3 votos a mais pro azul.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: azulImg, quantidade: 4, rotulo: "🔵 · 4", cor: "#3B82F6" },
            { imagemUrl: verdeImg, quantidade: 1, rotulo: "🟢 · 1", cor: "#22C55E" },
          ],
        },
      },
    ],
  },
};

export default aula;
