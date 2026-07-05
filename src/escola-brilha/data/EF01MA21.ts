import type { Aula } from "../types";

/**
 * EF01MA21 — Aula 021 · Biblioteca Pedagógica Escola Brilha
 * 1º Ano · Matemática
 * BNCC: Ler dados expressos em tabelas e em gráficos de colunas simples,
 *       construídos a partir de informações do cotidiano, e compreender
 *       as informações apresentadas.
 *
 * Missão: "A Pesquisa dos Animais da Floresta".
 */
const emojiImg = (emoji: string): string => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><foreignObject x='0' y='0' width='200' height='200'><div xmlns='http://www.w3.org/1999/xhtml' style='width:200px;height:200px;display:flex;align-items:center;justify-content:center;font-size:150px;line-height:1;font-family:Apple Color Emoji,Segoe UI Emoji,Noto Color Emoji,EmojiOne Color,Twemoji Mozilla,sans-serif'>${emoji}</div></foreignObject></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

// Frutas
const macaImg = emojiImg("🍎");
const bananaImg = emojiImg("🍌");
const uvaImg = emojiImg("🍇");
const morangoImg = emojiImg("🍓");

// Animais
const cachorroImg = emojiImg("🐶");
const gatoImg = emojiImg("🐱");
const passarinhoImg = emojiImg("🐦");

// Sorvetes
const chocolateImg = emojiImg("🍫");
const baunilhaImg = emojiImg("🍦");

// Objetos
const tabelaImg = emojiImg("📋");
const graficoImg = emojiImg("📊");
const lupaImg = emojiImg("🔍");

const aula: Aula = {
  codigo: "EF01MA21",
  ano: "1º Ano",
  disciplina: "Matemática",
  titulo: "A Pesquisa dos Animais da Floresta",

  narrativa: {
    titulo: "A Pesquisa dos Animais da Floresta",
    contexto:
      "O Brilha ✨ fez uma pesquisa 📋 na floresta pra descobrir qual fruta os animais 🐶🐱🐦 mais gostam.",
    problema:
      "Agora ele juntou um monte de respostas e precisa ORGANIZAR tudo em tabelas e gráficos pra entender.",
    convite: "Vamos ajudar o Brilha a ler os resultados?",
  },

  conhecimentosPrevios: [
    "Contar quantidades até 10.",
    "Comparar 'mais' e 'menos'.",
    "Reconhecer números e agrupamentos.",
  ],

  missao:
    "Ler dados em tabelas 📋 e gráficos de colunas 📊 e comparar as quantidades.",

  objetivos: [
    "Interpretar tabelas simples.",
    "Observar gráficos de colunas.",
    "Comparar quantidades.",
    "Responder perguntas usando informações organizadas.",
  ],

  motivacao:
    "Tabelas e gráficos aparecem em jornais, jogos e aplicativos — ler eles é um superpoder de detetive 🔍!",

  explicacao:
    "Uma TABELA 📋 organiza as informações em linhas e colunas.\n\nUm GRÁFICO DE COLUNAS 📊 mostra as mesmas informações usando barras: quanto maior a barra, MAIOR a quantidade.\n\nEles ajudam a ENTENDER os dados rapidinho!",

  explicacoesNiveis: {
    nivel1: "📋 Tabela = linhas e colunas. 📊 Gráfico = barras. Maior barra = mais votos.",
    nivel2:
      "Se a coluna do 🍇 é a mais alta, foi a fruta mais escolhida. Se a do 🍌 é a mais baixa, foi a menos escolhida.",
    nivel3:
      "Pra comparar duas colunas, olhe a ALTURA: quem sobe mais tem mais quantidade.",
    nivel4:
      "Cientistas 🔬 usam gráficos pra apresentar descobertas — assim qualquer pessoa entende olhando.",
  },

  exemploResolvido: {
    enunciado:
      "Na pesquisa das frutas: 🍎 Maçã = 5 · 🍌 Banana = 3 · 🍇 Uva = 7. Qual fruta recebeu MAIS votos?",
    passos: [
      "Compare os números: 5, 3 e 7.",
      "O maior deles é 7.",
      "O 7 é da 🍇 Uva.",
      "Então a UVA foi a fruta mais escolhida.",
    ],
    resposta: "🍇 Uva, com 7 votos.",
  },

  atividadeGuiada: {
    enunciado:
      "Olhe a tabela: 🍎 Maçã = 5 · 🍌 Banana = 3 · 🍇 Uva = 7. Qual recebeu MAIS votos?",
    resposta: "🍇 Uva.",
    explicacao:
      "A uva teve 7 votos — é o número maior. Então é a fruta com MAIS votos.",
  },

  exercicios: [
    { enunciado: "Na tabela das frutas, quantas crianças escolheram 🍎 maçã?", resposta: "5", dica: "Olhe a linha da maçã." },
    { enunciado: "Quantas escolheram 🍌 banana?", resposta: "3", dica: "Olhe a linha da banana." },
    { enunciado: "No gráfico dos animais: 🐶 8 · 🐱 5 · 🐦 2. Quem recebeu MENOS votos?", resposta: "🐦 Passarinho", dica: "Menor coluna = menos votos." },
    { enunciado: "Quem recebeu MAIS votos entre os animais?", resposta: "🐶 Cachorro", dica: "Maior coluna = mais votos." },
    { enunciado: "No gráfico dos sorvetes: 🍫 6 · 🍓 4 · 🍦 2. Quem venceu?", resposta: "🍫 Chocolate", dica: "6 é o maior número." },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: pesquisa dos SORVETES · 🍫 Chocolate = 6 · 🍓 Morango = 4 · 🍦 Baunilha = 2.",
    resposta:
      "🍫 Chocolate venceu (6) · 🍦 Baunilha ficou em último (2) · Chocolate teve 6 votos.",
    visual: {
      perguntas: [
        {
          pergunta: "Quem VENCEU a pesquisa dos sorvetes?",
          opcoes: ["🍦 Baunilha", "🍓 Morango", "🍫 Chocolate"],
          correta: 2,
          explicacao: "Chocolate teve 6 votos — é o maior número.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: chocolateImg, quantidade: 6, rotulo: "🍫 Chocolate · 6", cor: "#78350F" },
              { imagemUrl: morangoImg, quantidade: 4, rotulo: "🍓 Morango · 4", cor: "#EC4899" },
              { imagemUrl: baunilhaImg, quantidade: 2, rotulo: "🍦 Baunilha · 2", cor: "#FBBF24" },
            ],
          },
        },
        {
          pergunta: "Quem ficou em ÚLTIMO lugar?",
          opcoes: ["🍫 Chocolate", "🍦 Baunilha", "🍓 Morango"],
          correta: 1,
          explicacao: "Baunilha teve só 2 votos — o menor número.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: baunilhaImg, quantidade: 2, rotulo: "🍦 Baunilha · 2", cor: "#FBBF24" },
            ],
          },
        },
        {
          pergunta: "Quantas crianças escolheram 🍫 chocolate?",
          opcoes: ["4", "6", "2"],
          correta: 1,
          explicacao: "A coluna do chocolate marca 6 votos.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: chocolateImg, quantidade: 6, rotulo: "🍫 Chocolate", cor: "#78350F" },
            ],
          },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "📋 Tabela = linhas e colunas com números.",
      "📊 Gráfico de colunas = barras (mais alta = mais quantidade).",
      "Pra comparar, olhe qual barra é MAIOR e qual é MENOR.",
      "Tabelas e gráficos ajudam a entender pesquisas rapidinho.",
    ],
    dica: "Coluna alta = MAIS · Coluna baixa = MENOS. Essa é a chave!",
  },

  quiz: [
    {
      pergunta: "Em uma tabela 📋, onde ficam os dados?",
      opcoes: ["Linhas e colunas", "Apenas desenhos", "Apenas números soltos"],
      correta: 0,
      explicacao: "Tabela organiza os dados em LINHAS e COLUNAS.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: tabelaImg, quantidade: 1, rotulo: "📋 Tabela", cor: "#3B82F6" },
        ],
      },
    },
    {
      pergunta: "O gráfico 📊 serve pra…",
      opcoes: ["Escrever histórias", "Organizar informações", "Medir comprimento"],
      correta: 1,
      explicacao: "Gráfico ORGANIZA informações com barras pra facilitar a leitura.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: graficoImg, quantidade: 1, rotulo: "📊 Gráfico", cor: "#22C55E" },
        ],
      },
    },
    {
      pergunta: "A MAIOR coluna do gráfico representa…",
      opcoes: ["Menor quantidade", "Maior quantidade", "Nenhuma informação"],
      correta: 1,
      explicacao: "Coluna mais alta = MAIS votos = maior quantidade.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: uvaImg, quantidade: 7, rotulo: "🍇 · 7 (a maior)", cor: "#8B5CF6" },
          { imagemUrl: macaImg, quantidade: 5, rotulo: "🍎 · 5", cor: "#EF4444" },
        ],
      },
    },
    {
      pergunta: "Uma tabela 📋 ajuda a…",
      opcoes: ["Comparar dados", "Pintar figuras", "Fazer desenhos"],
      correta: 0,
      explicacao: "Tabelas servem pra COMPARAR quantidades rapidamente.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: tabelaImg, quantidade: 1, rotulo: "📋 Comparar", cor: "#3B82F6" },
        ],
      },
    },
  ],

  conclusao:
    "🏆 Medalha conquistada: Investigador dos Dados! Você aprendeu a ler tabelas 📋 e gráficos 📊 de colunas. Missão em Família: pergunte a 3 pessoas 'Qual fruta você prefere?', anote numa tabela e descubra qual venceu.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Cientistas 🔬 usam gráficos 📊 pra mostrar descobertas — assim qualquer pessoa entende o resultado só olhando as barras!",
  },

  interativas: [
    // ==== FASE 1 · Observe a Tabela ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Observe a Tabela",
      instrucao: "Pesquisa das frutas favoritas 🍎 5 · 🍌 3 · 🍇 7.",
      grupos: [
        { imagemUrl: macaImg, quantidade: 5, rotulo: "🍎 Maçã · 5" },
        { imagemUrl: bananaImg, quantidade: 3, rotulo: "🍌 Banana · 3" },
        { imagemUrl: uvaImg, quantidade: 7, rotulo: "🍇 Uva · 7" },
      ],
      pergunta: "Qual fruta recebeu MAIS votos?",
      opcoes: ["🍌 Banana", "🍇 Uva", "🍎 Maçã"],
      correta: 1,
      acerto: "Muito bem! A uva teve 7 votos — foi a mais escolhida.",
      erro: "Compare os números: 7 é o maior → 🍇 Uva venceu.",
    },

    // ==== FASE 2 · Leia o Gráfico ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Leia o Gráfico",
      instrucao: "Mesmos dados no gráfico de colunas 📊. Observe a altura das barras.",
      grupos: [
        { imagemUrl: macaImg, quantidade: 5, rotulo: "🍎 · 5" },
        { imagemUrl: bananaImg, quantidade: 3, rotulo: "🍌 · 3" },
        { imagemUrl: uvaImg, quantidade: 7, rotulo: "🍇 · 7" },
      ],
      pergunta: "Qual COLUNA é a maior?",
      opcoes: ["🍎 Maçã", "🍇 Uva", "🍌 Banana"],
      correta: 1,
      acerto: "Isso! A coluna da uva é a mais alta — 7 votos.",
      erro: "A coluna mais alta é a da 🍇 uva (7 votos).",
    },

    // ==== FASE 3 · Compare ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · Compare",
      instrucao: "Volte na tabela das frutas 🍎 5 · 🍌 3 · 🍇 7.",
      grupos: [
        { imagemUrl: macaImg, quantidade: 5, rotulo: "🍎 Maçã" },
        { imagemUrl: bananaImg, quantidade: 3, rotulo: "🍌 Banana" },
      ],
      pergunta: "Quantas crianças escolheram 🍎 maçã?",
      opcoes: ["3", "5", "7"],
      correta: 1,
      acerto: "Perfeito! A maçã teve 5 votos.",
      erro: "Conta a coluna da maçã: são 5 crianças.",
    },

    // ==== FASE 4 · Descubra a Menor ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 4 · Menor Quantidade",
      instrucao: "Pesquisa dos animais 🐶 8 · 🐱 5 · 🐦 2.",
      grupos: [
        { imagemUrl: cachorroImg, quantidade: 8, rotulo: "🐶 · 8" },
        { imagemUrl: gatoImg, quantidade: 5, rotulo: "🐱 · 5" },
        { imagemUrl: passarinhoImg, quantidade: 2, rotulo: "🐦 · 2" },
      ],
      pergunta: "Qual animal recebeu MENOS votos?",
      opcoes: ["🐶 Cachorro", "🐱 Gato", "🐦 Passarinho"],
      correta: 2,
      acerto: "Isso! O passarinho teve só 2 votos — a menor coluna.",
      erro: "A menor coluna é a do 🐦 passarinho (2 votos).",
    },

    // ==== FASE 5 · Faça sua Descoberta ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Faça sua Descoberta",
      instrucao: "Pesquisa dos sorvetes 🍫 6 · 🍓 4 · 🍦 2.",
      grupos: [
        { imagemUrl: chocolateImg, quantidade: 6, rotulo: "🍫 · 6" },
        { imagemUrl: morangoImg, quantidade: 4, rotulo: "🍓 · 4" },
        { imagemUrl: baunilhaImg, quantidade: 2, rotulo: "🍦 · 2" },
      ],
      pergunta: "Quem ficou em SEGUNDO lugar?",
      opcoes: ["🍫 Chocolate", "🍓 Morango", "🍦 Baunilha"],
      correta: 1,
      acerto: "Boa! O morango teve 4 votos — segundo lugar.",
      erro: "1º chocolate (6), 2º morango (4), 3º baunilha (2).",
    },

    // ==== MINI JOGO · Detetive dos Gráficos ====
    {
      tipo: "ligar",
      titulo: "Mini Jogo · Detetive dos Gráficos 🔍",
      instrucao: "Ligue cada pergunta à resposta certa (frutas 🍎 5 · 🍌 3 · 🍇 7).",
      pares: [
        { a: "🍇 Uva teve…", b: "7 votos", aImagem: uvaImg, aQuantidade: 7, bImagem: uvaImg, bQuantidade: 7 },
        { a: "🍎 Maçã teve…", b: "5 votos", aImagem: macaImg, aQuantidade: 5, bImagem: macaImg, bQuantidade: 5 },
        { a: "🍌 Banana teve…", b: "3 votos", aImagem: bananaImg, aQuantidade: 3, bImagem: bananaImg, bQuantidade: 3 },
      ],
    },

    // ==== DESAFIO · Ordenar do menor ao maior ====
    {
      tipo: "ordenar",
      titulo: "Desafio Brilha · Do menor ao maior",
      instrucao: "Coloque em ordem: MENOS votos → MAIS votos (frutas).",
      itens: ["🍌 Banana · 3", "🍎 Maçã · 5", "🍇 Uva · 7"],
      imagens: [
        { imagemUrl: bananaImg, quantidade: 3, rotulo: "🍌 · 3", cor: "#FACC15" },
        { imagemUrl: macaImg, quantidade: 5, rotulo: "🍎 · 5", cor: "#EF4444" },
        { imagemUrl: uvaImg, quantidade: 7, rotulo: "🍇 · 7", cor: "#8B5CF6" },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "🍎 5 · 🍇 7. Quem tem MAIS?",
        opcoes: ["🍎 Maçã", "🍇 Uva"],
        correta: 1,
        explicacao: "7 é maior que 5 → 🍇 Uva.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: macaImg, quantidade: 5, rotulo: "🍎 · 5", cor: "#EF4444" },
            { imagemUrl: uvaImg, quantidade: 7, rotulo: "🍇 · 7", cor: "#8B5CF6" },
          ],
        },
      },
      {
        pergunta: "🐶 8 · 🐦 2. Quem tem MENOS?",
        opcoes: ["🐶 Cachorro", "🐦 Passarinho"],
        correta: 1,
        explicacao: "2 é menor que 8 → 🐦 Passarinho.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: cachorroImg, quantidade: 8, rotulo: "🐶 · 8", cor: "#B45309" },
            { imagemUrl: passarinhoImg, quantidade: 2, rotulo: "🐦 · 2", cor: "#3B82F6" },
          ],
        },
      },
    ],
    medio: [
      {
        pergunta: "🍫 6 · 🍓 4 · 🍦 2. Qual VENCEU?",
        opcoes: ["🍦 Baunilha", "🍫 Chocolate", "🍓 Morango"],
        correta: 1,
        explicacao: "6 é o maior → 🍫 Chocolate.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: chocolateImg, quantidade: 6, rotulo: "🍫 · 6", cor: "#78350F" },
            { imagemUrl: morangoImg, quantidade: 4, rotulo: "🍓 · 4", cor: "#EC4899" },
            { imagemUrl: baunilhaImg, quantidade: 2, rotulo: "🍦 · 2", cor: "#FBBF24" },
          ],
        },
      },
      {
        pergunta: "🍎 5 · 🍌 3 · 🍇 7. Quem ficou em segundo lugar?",
        opcoes: ["🍎 Maçã", "🍌 Banana", "🍇 Uva"],
        correta: 0,
        explicacao: "1º Uva (7), 2º Maçã (5), 3º Banana (3).",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: macaImg, quantidade: 5, rotulo: "🍎 · 5", cor: "#EF4444" },
          ],
        },
      },
    ],
    dificil: [
      {
        pergunta: "🐶 8 · 🐱 5 · 🐦 2. Quantos votos a MAIS o cachorro teve que o passarinho?",
        opcoes: ["4", "6", "8"],
        correta: 1,
        explicacao: "8 − 2 = 6 votos a mais pro cachorro.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: cachorroImg, quantidade: 8, rotulo: "🐶 · 8", cor: "#B45309" },
            { imagemUrl: passarinhoImg, quantidade: 2, rotulo: "🐦 · 2", cor: "#3B82F6" },
          ],
        },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01MA22",
  },
};

export default aula;
