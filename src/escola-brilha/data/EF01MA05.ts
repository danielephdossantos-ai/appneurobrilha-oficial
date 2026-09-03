import type { Aula } from "../types";
import { url as morangoImg } from "@/assets/neuro-treino/frutas/morango.png.asset.json";
import { url as ursinhoImg } from "@/assets/neuro-treino/objetos/ursinho.png.asset.json";
import { url as peixeImg } from "@/assets/neuro-treino/objetos/peixe.png.asset.json";
import { url as macaImg } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as bananaImg } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as presenteImg } from "@/assets/neuro-treino/objetos/presente.png.asset.json";
import { url as corujaImg } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as blocoImg } from "@/assets/neuro-treino/objetos/bloco.png.asset.json";

/**
 * EF01MA05 — Aula 005 · Biblioteca Pedagógica Escola Brilha
 * Ensino Fundamental I · 1º Ano · Matemática
 * BNCC: Comparar números naturais de até duas ordens em situações do
 * cotidiano, com e sem suporte da reta numérica.
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
    "Aprender a comparar dois números de até duas ordens, explicando qual é maior, menor ou igual e relacionando os sinais >, < e =.",

  objetivos: [
    "Identificar qual número é maior.",
    "Identificar qual número é menor.",
    "Reconhecer quando duas quantidades são iguais.",
    "Comparar primeiro as dezenas e, quando forem iguais, comparar as unidades.",
    "Ler e usar os sinais >, < e =.",
  ],

  motivacao:
    "Comparar números é observar a quantidade e a forma como o número foi composto. Com dois algarismos, primeiro olhamos as dezenas e depois as unidades.",

  explicacao:
    "Quando comparamos dois números descobrimos qual é MAIOR, qual é MENOR ou se são IGUAIS. Com números de dois algarismos, compare primeiro as dezenas. Exemplo: 42 tem 4 dezenas e 38 tem 3 dezenas; por isso, 42 é maior. Se as dezenas forem iguais, compare as unidades: em 24 e 27, ambos têm 2 dezenas, mas 7 unidades é mais que 4; então 27 é maior.\n\nDepois de compreender as quantidades, podemos registrar a comparação: 8 > 5, 5 < 8 e 6 = 6. Lendo da esquerda para a direita: '8 é maior que 5', '5 é menor que 8' e '6 é igual a 6'. A abertura do sinal fica voltada para o número maior e a ponta fica voltada para o menor.",

  explicacaoAtiva: [
    {
      texto: "Primeiro compare as quantidades. Sete objetos é mais que quatro objetos.",
      exemplo: "7 é maior que 4.",
      imagem: morangoImg,
      imagemAlt: "Morango usado para comparar quantidades",
      checagem: {
        pergunta: "Qual número representa a maior quantidade?",
        opcoes: ["4", "7", "São iguais"],
        correta: 1,
        explicacao: "Sete objetos formam uma coleção maior que quatro.",
      },
    },
    {
      texto: "Nos números de dois algarismos, compare primeiro as dezenas. Quatro dezenas é mais que três dezenas.",
      exemplo: "42 é maior que 38 porque 4 dezenas é mais que 3 dezenas.",
      imagem: blocoImg,
      imagemAlt: "Bloco representando um agrupamento",
      checagem: {
        pergunta: "Qual é maior: 42 ou 38?",
        opcoes: ["38", "42", "São iguais"],
        correta: 1,
        explicacao: "42 tem 4 dezenas; 38 tem 3 dezenas.",
      },
    },
    {
      texto: "Se as dezenas forem iguais, compare as unidades.",
      exemplo: "24 e 27 têm 2 dezenas. Como 7 unidades é mais que 4, 27 é maior.",
      imagem: ursinhoImg,
      imagemAlt: "Ursinho usado para comparar unidades",
      checagem: {
        pergunta: "Qual é maior: 24 ou 27?",
        opcoes: ["24", "27", "São iguais"],
        correta: 1,
        explicacao: "As dezenas são iguais; 7 unidades é mais que 4.",
      },
    },
    {
      texto: "Os sinais registram o que já entendemos. Leia sempre a comparação completa, da esquerda para a direita.",
      exemplo: "18 > 15 lê-se: dezoito é maior que quinze.",
      imagem: estrelaImg,
      imagemAlt: "Estrela usada no registro de uma comparação",
      checagem: {
        pergunta: "Como lemos 11 < 14?",
        opcoes: ["11 é menor que 14", "11 é maior que 14", "11 é igual a 14"],
        correta: 0,
        explicacao: "O sinal < registra que o número da esquerda é menor.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Maior é o que tem mais. Menor é o que tem menos. Igual é a mesma quantidade.",
    nivel2:
      "Ex.: 12 ursinhos e 9 ursinhos. 12 é MAIOR que 9. Escrevemos 12 > 9.",
    nivel3:
      "Leia da esquerda para a direita: 12 > 9 significa '12 é maior que 9'. A abertura fica voltada para o maior.",
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
      tipo: "comparar",
      pergunta: "Qual caixa tem MAIS ursinhos ao todo?",
      lados: [
        { imagemUrl: ursinhoImg, quantidade: 12, rotulo: "Caixa A · 12", cor: "#A78BFA" },
        { imagemUrl: ursinhoImg, quantidade: 9, rotulo: "Caixa B · 9", cor: "#34D399" },
      ],
      opcoes: ["Caixa A · 12", "Caixa B · 9", "Mesma quantidade"],
      correta: 0,
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
      "Leia a comparação da esquerda para a direita; a abertura do sinal fica voltada para o maior.",
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
        "Arraste os corredores do MAIOR pro MENOR: quem fez mais pontos fica em 1º (topo).",
      itens: ["🥇 25 pontos", "🥈 21 pontos", "🥉 18 pontos"],
      imagens: [
        { imagemUrl: estrelaImg, quantidade: 25, rotulo: "🥇 Ouro · 25 pontos" },
        { imagemUrl: estrelaImg, quantidade: 21, rotulo: "🥈 Prata · 21 pontos" },
        { imagemUrl: estrelaImg, quantidade: 18, rotulo: "🥉 Bronze · 18 pontos" },
      ],
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
