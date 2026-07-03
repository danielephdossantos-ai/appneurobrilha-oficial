import type { Aula } from "../types";
import morangoImg from "@/assets/neuro-treino/frutas/morango.png";
import ursinhoImg from "@/assets/neuro-treino/objetos/ursinho.png";
import peixeImg from "@/assets/neuro-treino/objetos/peixe.png";
import macaImg from "@/assets/neuro-treino/objetos/maca.png";
import bananaImg from "@/assets/neuro-treino/objetos/banana.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import presenteImg from "@/assets/neuro-treino/objetos/presente.png";
import corujaImg from "@/assets/neuro-treino/objetos/coruja.png";

/**
 * EF01MA05 — Aula 005 · Biblioteca Pedagógica Escola Brilha
 * Ensino Fundamental I · 1º Ano · Matemática
 * BNCC: Comparar números naturais de até duas ordens em situações do
 * cotidiano, utilizando os sinais de maior (>), menor (<) e igual (=).
 *
 * Missão do Dia: "A Corrida das Frutinhas".
 * Segue o gabarito TRAVADO da EF01MA02.
 */
const aula: Aula = {
  codigo: "EF01MA05",
  ano: "1º Ano",
  disciplina: "Matemática",
  titulo: "A Corrida das Frutinhas",

  narrativa: {
    titulo: "A Corrida das Frutinhas",
    contexto:
      "Hoje o Brilha organizou uma corrida diferente! Cada equipe entrou com uma cesta cheia de frutas.",
    problema:
      "No fim, ninguém sabe quem venceu. A gente precisa comparar as quantidades pra descobrir quem trouxe MAIS, MENOS ou a MESMA coisa.",
    convite:
      "Vem virar juiz da corrida com a gente! Bora comparar os números?",
  },

  conhecimentosPrevios: [
    "Contar até 30 sem pular números.",
    "Reconhecer que grupo maior é 'tem mais'.",
    "Ler números escritos de 0 a 30.",
  ],

  missao:
    "Aprender a comparar dois números e usar os sinais > (maior), < (menor) e = (igual) — sempre com apoio visual.",

  objetivos: [
    "Identificar qual número é maior.",
    "Identificar qual número é menor.",
    "Reconhecer quando duas quantidades são iguais.",
    "Ler e usar os sinais >, < e =.",
  ],

  motivacao:
    "Comparar números é como brincar de fila — quem está na frente é o maior, quem está atrás é o menor, e quem chega junto é igual!",

  explicacao:
    "Quando comparamos dois números descobrimos três coisas:\n\n🔹 Qual é MAIOR (>)\n🔹 Qual é MENOR (<)\n🔹 Se são IGUAIS (=)\n\nExemplos:\n• 8 🍎 é MAIOR que 5 🍎  →  8 > 5\n• 5 🍌 é MENOR que 8 🍌  →  5 < 8\n• 6 ⭐ é IGUAL a 6 ⭐  →  6 = 6\n\nDica do Brilha: o 'biquinho' do sinal aponta pro número MENOR — é o boquinha comendo o maior.",

  explicacoesNiveis: {
    nivel1: "Maior é o que tem mais. Menor é o que tem menos. Igual é a mesma quantidade.",
    nivel2:
      "Ex.: 12 ursinhos e 9 ursinhos. 12 é MAIOR que 9. Escrevemos 12 > 9.",
    nivel3:
      "O sinal parece uma boquinha: sempre aponta pro número menor. > engole o maior, < engole o maior no outro lado.",
    nivel4:
      "Quando os dois números têm a mesma dezena, olhe as unidades: 24 e 27 — 7 > 4, então 27 > 24.",
  },

  exemploResolvido: {
    enunciado: "Equipe Vermelha: 7 morangos. Equipe Azul: 4 morangos. Quem venceu?",
    passos: [
      "Conte quantos morangos cada equipe trouxe.",
      "Compare os dois números: 7 e 4.",
      "O maior número vence: 7 > 4 → Equipe Vermelha.",
    ],
    resposta: "Vermelha venceu — 7 > 4 (7 é maior que 4).",
    interativo: {
      tipo: "contagem",
      imagemUrl: morangoImg,
      quantidade: 7,
      nomeItem: "morango",
      nomeItemPlural: "morangos",
      pergunta: "Quantos morangos a Equipe Vermelha trouxe?",
    },
  },

  atividadeGuiada: {
    enunciado:
      "Duas caixas com ursinhos. Toque para contar e descubra qual tem MAIS.",
    resposta:
      "12 ursinhos é MAIOR que 9. Escrevemos 12 > 9.",
    explicacao:
      "Depois de contar, compare os dois números. O maior é o que tem mais itens no grupo.",
    visual: {
      tipo: "grupos",
      pergunta: "Qual caixa tem MAIS ursinhos ao todo?",
      imagemUrl: ursinhoImg,
      itemSingular: "ursinho",
      itemPlural: "ursinhos",
      quantidadeGrupos: 2,
      itensPorGrupo: 12,
      opcoes: [9, 12, 21],
      correta: 1,
    },
  },

  exercicios: [
    {
      enunciado: "🍓 7 morangos e 🍓 4 morangos. Quem tem MAIS?",
      resposta: "O grupo de 7 — porque 7 > 4.",
      dica: "Compare os dois números. O maior tem mais.",
    },
    {
      enunciado: "18 ___ 15. Qual sinal usar?",
      resposta: "18 > 15 (18 é maior que 15).",
      dica: "O 'biquinho' aponta pro menor.",
    },
    {
      enunciado: "🐠 5 peixes e 🐠 5 peixes. Como são?",
      resposta: "IGUAIS — 5 = 5.",
      dica: "Mesma quantidade dos dois lados = sinal de igual.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: observe as coleções, compare e diga MAIOR, MENOR ou IGUAL.",
    resposta:
      "Vermelha (7) > Azul (4). Presentes: 11 é o MENOR. Peixes: 5 = 5 (iguais).",
    visual: {
      cena: [
        { personagem: "Vermelha", itemImagemUrl: morangoImg, quantidade: 7, cor: "#EF4444" },
        { personagem: "Azul", itemImagemUrl: morangoImg, quantidade: 4, cor: "#60A5FA" },
        { personagem: "Caixa A", itemImagemUrl: presenteImg, quantidade: 16, cor: "#FBBF24" },
        { personagem: "Caixa B", itemImagemUrl: presenteImg, quantidade: 11, cor: "#F472B6" },
      ],
      perguntas: [
        {
          pergunta: "Quem trouxe MAIS morangos?",
          opcoes: ["Vermelha (7)", "Azul (4)", "Iguais"],
          correta: 0,
          explicacao: "7 > 4 — Vermelha venceu.",
          visual: {
            tipo: "comparar",
            lados: [
              { imagemUrl: morangoImg, quantidade: 7, rotulo: "Vermelha", cor: "#EF4444" },
              { imagemUrl: morangoImg, quantidade: 4, rotulo: "Azul", cor: "#60A5FA" },
            ],
          },
        },
        {
          pergunta: "Qual caixa tem MENOS presentes?",
          opcoes: ["Caixa A (16)", "Caixa B (11)", "Iguais"],
          correta: 1,
          explicacao: "11 < 16 — Caixa B tem menos.",
          visual: {
            tipo: "comparar",
            lados: [
              { imagemUrl: presenteImg, quantidade: 16, rotulo: "Caixa A", cor: "#FBBF24" },
              { imagemUrl: presenteImg, quantidade: 11, rotulo: "Caixa B", cor: "#F472B6" },
            ],
          },
        },
        {
          pergunta: "5 peixes de cada lado. Como estão?",
          opcoes: ["5 > 5", "5 < 5", "5 = 5"],
          correta: 2,
          explicacao: "Mesma quantidade dos dois lados: 5 = 5.",
          visual: {
            tipo: "comparar",
            lados: [
              { imagemUrl: peixeImg, quantidade: 5, rotulo: "Aquário A", cor: "#60A5FA" },
              { imagemUrl: peixeImg, quantidade: 5, rotulo: "Aquário B", cor: "#34D399" },
            ],
          },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "MAIOR (>): o número com mais quantidade.",
      "MENOR (<): o número com menos quantidade.",
      "IGUAL (=): mesma quantidade dos dois lados.",
      "O 'biquinho' do sinal sempre aponta pro MENOR.",
    ],
    dica: "Na dúvida, desenhe os dois grupos e compare olhando.",
  },

  quiz: [
    {
      pergunta: "Qual número é MAIOR?",
      opcoes: ["13", "17", "São iguais"],
      correta: 1,
      explicacao: "17 > 13.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: estrelaImg, quantidade: 13, rotulo: "13 estrelas", cor: "#60A5FA" },
          { imagemUrl: estrelaImg, quantidade: 17, rotulo: "17 estrelas", cor: "#FBBF24" },
        ],
      },
    },
    {
      pergunta: "8 ___ 8. Qual sinal usar?",
      opcoes: [">", "<", "="],
      correta: 2,
      explicacao: "Mesma quantidade dos dois lados: 8 = 8.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: macaImg, quantidade: 8, rotulo: "8 maçãs", cor: "#EF4444" },
          { imagemUrl: macaImg, quantidade: 8, rotulo: "8 maçãs", cor: "#F472B6" },
        ],
      },
    },
    {
      pergunta: "Qual número é MENOR?",
      opcoes: ["20", "15", "São iguais"],
      correta: 1,
      explicacao: "15 < 20.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: bananaImg, quantidade: 20, rotulo: "20 bananas", cor: "#FBBF24" },
          { imagemUrl: bananaImg, quantidade: 15, rotulo: "15 bananas", cor: "#FB923C" },
        ],
      },
    },
    {
      pergunta: "Complete: 11 ___ 14",
      opcoes: [">", "<", "="],
      correta: 1,
      explicacao: "11 é menor que 14 → 11 < 14. O biquinho aponta pro 11.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: ursinhoImg, quantidade: 11, rotulo: "11 ursinhos", cor: "#A78BFA" },
          { imagemUrl: ursinhoImg, quantidade: 14, rotulo: "14 ursinhos", cor: "#34D399" },
        ],
      },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Mestre das Comparações! Agora você compara números usando >, < e =. Missão em Família: peça alguém pra escolher dois números entre 1 e 30 e você diz quem é maior, menor ou se são iguais.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Os sinais > e < foram inventados por um matemático inglês chamado Thomas Harriot, há mais de 400 anos! Até hoje o mundo inteiro usa esses mesmos símbolos pra comparar números.",
  },

  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Quem tem mais?",
      instrucao: "Toque nos morangos de cada equipe e conte com o Brilha.",
      grupos: [
        { imagemUrl: morangoImg, quantidade: 7, rotulo: "Vermelha" },
        { imagemUrl: morangoImg, quantidade: 4, rotulo: "Azul" },
      ],
      pergunta: "Qual equipe trouxe MAIS frutas?",
      opcoes: ["Vermelha", "Azul", "Iguais"],
      correta: 0,
      acerto: "Muito bem! 7 > 4 — Vermelha venceu.",
      erro: "Conte cada grupo. O maior número vence.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Compare os números",
      instrucao: "Toque nos ursinhos de cada caixa.",
      grupos: [
        { imagemUrl: ursinhoImg, quantidade: 12, rotulo: "Caixa A" },
        { imagemUrl: ursinhoImg, quantidade: 9, rotulo: "Caixa B" },
      ],
      pergunta: "Qual número é MAIOR?",
      opcoes: ["9", "12", "São iguais"],
      correta: 1,
      acerto: "Isso! 12 > 9.",
      erro: "Conte de novo — a caixa com mais ursinhos é a Caixa A (12).",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · Complete o sinal",
      instrucao: "Compare 18 e 15 olhando os grupos.",
      grupos: [
        { imagemUrl: estrelaImg, quantidade: 18, rotulo: "18" },
        { imagemUrl: estrelaImg, quantidade: 15, rotulo: "15" },
      ],
      pergunta: "18 ___ 15",
      opcoes: [">", "<", "="],
      correta: 0,
      acerto: "Isso! 18 > 15 — o biquinho aponta pro 15.",
      erro: "18 tem mais estrelas — então 18 é MAIOR.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 4 · Descubra o MENOR",
      instrucao: "Três caixas de presentes. Toque em cada uma pra contar.",
      grupos: [
        { imagemUrl: presenteImg, quantidade: 16, rotulo: "Caixa A" },
        { imagemUrl: presenteImg, quantidade: 11, rotulo: "Caixa B" },
        { imagemUrl: presenteImg, quantidade: 19, rotulo: "Caixa C" },
      ],
      pergunta: "Qual caixa tem MENOS presentes?",
      opcoes: ["16 (A)", "11 (B)", "19 (C)"],
      correta: 1,
      acerto: "Isso! 11 é o menor de todos.",
      erro: "Compare os três números: 11 é o menor.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Iguais ou diferentes?",
      instrucao: "Dois aquários com peixinhos.",
      grupos: [
        { imagemUrl: peixeImg, quantidade: 5, rotulo: "Aquário A" },
        { imagemUrl: peixeImg, quantidade: 5, rotulo: "Aquário B" },
      ],
      pergunta: "As duas coleções são...",
      opcoes: ["Aquário A tem mais", "Aquário B tem mais", "A mesma quantidade"],
      correta: 2,
      acerto: "Isso! 5 = 5 — mesma quantidade.",
      erro: "Conte os dois: cada aquário tem 5 peixes. É igual!",
    },
    {
      tipo: "ordenar",
      titulo: "Mini Jogo · Monte o Pódio",
      instrucao:
        "Arraste os corredores do MAIOR pro MENOR: quem fez mais pontos fica em 1º.",
      itens: ["25 pontos (Ouro)", "21 pontos (Prata)", "18 pontos (Bronze)"],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Qual grupo tem MAIS?",
        opcoes: ["Vermelha (7)", "Azul (4)", "Iguais"],
        correta: 0,
        explicacao: "7 > 4.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: morangoImg, quantidade: 7, rotulo: "Vermelha", cor: "#EF4444" },
            { imagemUrl: morangoImg, quantidade: 4, rotulo: "Azul", cor: "#60A5FA" },
          ],
        },
      },
      {
        pergunta: "Qual número é MAIOR?",
        opcoes: ["9", "12", "Iguais"],
        correta: 1,
        explicacao: "12 > 9.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: ursinhoImg, quantidade: 9, rotulo: "9", cor: "#A78BFA" },
            { imagemUrl: ursinhoImg, quantidade: 12, rotulo: "12", cor: "#34D399" },
          ],
        },
      },
      {
        pergunta: "5 e 5. Como estão?",
        opcoes: ["5 > 5", "5 < 5", "5 = 5"],
        correta: 2,
        explicacao: "Mesma quantidade = iguais.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: peixeImg, quantidade: 5, rotulo: "5 peixes", cor: "#60A5FA" },
            { imagemUrl: peixeImg, quantidade: 5, rotulo: "5 peixes", cor: "#34D399" },
          ],
        },
      },
    ],
    medio: [
      {
        pergunta: "18 ___ 15",
        opcoes: [">", "<", "="],
        correta: 0,
        explicacao: "18 é maior que 15.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: estrelaImg, quantidade: 18, rotulo: "18", cor: "#FBBF24" },
            { imagemUrl: estrelaImg, quantidade: 15, rotulo: "15", cor: "#A78BFA" },
          ],
        },
      },
      {
        pergunta: "Qual caixa tem MENOS?",
        opcoes: ["16", "11", "19"],
        correta: 1,
        explicacao: "11 é o menor.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: presenteImg, quantidade: 16, rotulo: "16", cor: "#FBBF24" },
            { imagemUrl: presenteImg, quantidade: 11, rotulo: "11", cor: "#F472B6" },
            { imagemUrl: presenteImg, quantidade: 19, rotulo: "19", cor: "#60A5FA" },
          ],
        },
      },
      {
        pergunta: "11 ___ 14",
        opcoes: [">", "<", "="],
        correta: 1,
        explicacao: "11 é menor que 14 — o biquinho aponta pro 11.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: ursinhoImg, quantidade: 11, rotulo: "11", cor: "#A78BFA" },
            { imagemUrl: ursinhoImg, quantidade: 14, rotulo: "14", cor: "#34D399" },
          ],
        },
      },
    ],
    dificil: [
      {
        pergunta: "24 e 27 têm a mesma dezena (2). Qual é MAIOR?",
        opcoes: ["24", "27", "Iguais"],
        correta: 1,
        explicacao: "Compare as unidades: 7 > 4, então 27 > 24.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: macaImg, quantidade: 24, rotulo: "24 maçãs", cor: "#EF4444" },
            { imagemUrl: macaImg, quantidade: 27, rotulo: "27 maçãs", cor: "#F472B6" },
          ],
        },
      },
      {
        pergunta: "Complete: 20 ___ 20",
        opcoes: [">", "<", "="],
        correta: 2,
        explicacao: "Mesma quantidade dos dois lados: 20 = 20.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: bananaImg, quantidade: 20, rotulo: "20", cor: "#FBBF24" },
            { imagemUrl: bananaImg, quantidade: 20, rotulo: "20", cor: "#FB923C" },
          ],
        },
      },
      {
        pergunta: "Qual é o MAIOR entre 17, 13 e 19?",
        opcoes: ["17", "13", "19"],
        correta: 2,
        explicacao: "19 é o maior de todos.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: estrelaImg, quantidade: 17, rotulo: "17", cor: "#60A5FA" },
            { imagemUrl: estrelaImg, quantidade: 13, rotulo: "13", cor: "#F472B6" },
            { imagemUrl: estrelaImg, quantidade: 19, rotulo: "19", cor: "#FBBF24" },
          ],
        },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01MA06",
    titulo: "Construir fatos básicos da adição",
  },
};

void corujaImg;

export default aula;
