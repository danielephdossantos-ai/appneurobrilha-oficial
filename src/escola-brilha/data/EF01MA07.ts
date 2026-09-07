import type { Aula } from "../types";
import { url as moedaImg } from "@/assets/neuro-treino/objetos/moeda.png.asset.json";
import { url as bauImg } from "@/assets/neuro-treino/objetos/bau.png.asset.json";
import { url as blocoImg } from "@/assets/neuro-treino/objetos/bloco.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as macaImg } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as castanhaImg } from "@/assets/neuro-treino/objetos/castanha.png.asset.json";

/**
 * EF01MA07 — Aula 007 · Biblioteca Pedagógica Escola Brilha
 * Ensino Fundamental I · 1º Ano · Matemática
 * BNCC: Compor e decompor número de até duas ordens, por meio de diferentes
 * adições, com o suporte de material manipulável.
 *
 * Missão do Dia: "O Cofre do Tesouro do Brilha".
 * Segue o gabarito TRAVADO da EF01MA02 — tudo visual, mini-jogos e OperacaoVisual.
 */
const aula: Aula = {
  codigo: "EF01MA07",
  ano: "1º Ano",
  disciplina: "Matemática",
  titulo: "O Cofre do Tesouro do Brilha",

  narrativa: {
    titulo: "O Cofre do Tesouro do Brilha",
    contexto:
      "O esquilo Brilha encontrou um antigo baú cheio de moedas douradas escondido embaixo da árvore mais velha da floresta.",
    problema:
      "Mas o cadeado só abre se descobrirmos como formar alguns números de MANEIRAS DIFERENTES — usando duas partes que, juntas, dão o total certo.",
    convite:
      "Vem com a gente! Um mesmo número pode ser formado de VÁRIAS maneiras. Bora abrir o baú?",
  },

  conhecimentosPrevios: [
    "Somar dois grupos até 10 (aula anterior).",
    "Contar e reconhecer números até 20.",
    "Reconhecer o sinal de + como 'juntar'.",
  ],

  missao:
    "Aprender a COMPOR e DECOMPOR números de até duas ordens usando diferentes adições, objetos e agrupamentos de dez.",

  objetivos: [
    "Formar um mesmo número usando diferentes quantidades.",
    "Compreender que um número pode ser representado de várias formas.",
    "Compor e decompor números em dezenas e unidades.",
    "Registrar diferentes adições que formam o mesmo total.",
    "Desenvolver estratégias de cálculo mental.",
  ],

  motivacao:
    "Cada número é como um baú — pode ser aberto por várias chaves diferentes!",

  explicacao:
    "COMPOR um número é JUNTAR partes para formar um todo. DECOMPOR é separar o todo em partes sem mudar a quantidade total.\n\nO número 6 pode ser decomposto assim: 6 = 5 + 1, 6 = 4 + 2 e 6 = 3 + 3. Também podemos usar zero: 6 = 6 + 0.\n\nNos números de duas ordens, um grupo de 10 forma uma DEZENA. O que sobra são UNIDADES. Por exemplo: 14 é 1 dezena e 4 unidades, então 14 = 10 + 4. Ele também pode ser formado por outras partes, como 14 = 7 + 7 ou 14 = 8 + 6.",

  explicacaoAtiva: [
    {
      texto: "Compor é juntar partes para formar o todo.",
      exemplo: "3 moedas e mais 2 moedas formam 5 moedas: 3 + 2 = 5.",
      imagem: moedaImg,
      imagemAlt: "Moeda usada para representar partes de um número",
      checagem: { pergunta: "Qual total é formado por 3 + 2?", opcoes: ["4", "5", "6"], correta: 1, explicacao: "As duas partes, 3 e 2, formam o todo 5." },
    },
    {
      texto: "Decompor é separar o todo em partes. As partes continuam formando a mesma quantidade.",
      exemplo: "Podemos separar 8 em 5 e 3: 8 = 5 + 3.",
      imagem: blocoImg,
      imagemAlt: "Bloco usado para separar um todo em partes",
      checagem: { pergunta: "Qual dupla forma o número 8?", opcoes: ["5 + 2", "5 + 3", "6 + 3"], correta: 1, explicacao: "Cinco e três são duas partes que, juntas, formam oito." },
    },
    {
      texto: "Um mesmo todo pode ser separado de maneiras diferentes.",
      exemplo: "10 = 9 + 1, 10 = 8 + 2, 10 = 7 + 3 e 10 = 5 + 5.",
      imagem: estrelaImg,
      imagemAlt: "Estrela usada para mostrar diferentes composições",
      checagem: { pergunta: "Qual outra dupla forma 10?", opcoes: ["6 + 3", "6 + 4", "7 + 4"], correta: 1, explicacao: "Seis mais quatro formam dez." },
    },
    {
      texto: "Nos números de duas ordens, separe primeiro um grupo de 10. Esse grupo é uma dezena; os itens restantes são unidades.",
      exemplo: "14 = 10 + 4: uma dezena e quatro unidades.",
      imagem: blocoImg,
      imagemAlt: "Bloco usado para representar dezena e unidades",
      checagem: { pergunta: "Como decompomos 17 em dezena e unidades?", opcoes: ["10 + 7", "10 + 6", "7 + 1"], correta: 0, explicacao: "Dezessete tem uma dezena e sete unidades: 17 = 10 + 7." },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Um número pode ser formado por partes diferentes. 5 é 4 + 1, mas também é 3 + 2.",
    nivel2:
      "Pegue 6 moedas. Separe em 5 e 1. Depois em 4 e 2. Depois em 3 e 3. Tudo dá 6!",
    nivel3:
      "Imagine 8 blocos numa mesa. Você pode fazer duas pilhas: uma com 5 e outra com 3. Ou uma com 6 e outra com 2. Sempre 8 no total.",
    nivel4:
      "Com duas ordens, separe dezenas e unidades: 18 = 10 + 8. Outras partes também formam 18, como 9 + 9 e 12 + 6.",
  },

  exemploResolvido: {
    enunciado:
      "O baú tem 7 moedas. O Brilha quer separar em DOIS montes diferentes. De quantas maneiras?",
    passos: [
      "Comece com 6 + 1 = 7.",
      "Depois tente 5 + 2 = 7.",
      "E também 4 + 3 = 7.",
      "Todas as combinações formam o mesmo número: 7.",
    ],
    resposta: "3 formas: 6+1, 5+2 e 4+3 — todas dão 7.",
    interativo: {
      tipo: "contagem",
      imagemUrl: moedaImg,
      quantidade: 7,
      nomeItem: "moeda",
      nomeItemPlural: "moedas",
      pergunta: "Quantas moedas o Brilha guarda no baú?",
    },
  },

  atividadeGuiada: {
    enunciado:
      "Toque nas moedas dos dois montes e descubra que número foi FORMADO ao juntar.",
    resposta: "5 moedas — 3 + 2 = 5.",
    explicacao:
      "Compor um número é juntar suas partes. Duas partes, um total. Neste caso, 3 + 2 formou o número 5.",
    visual: {
      tipo: "comparar",
      pergunta: "Qual número foi FORMADO juntando os dois montes?",
      lados: [
        { imagemUrl: moedaImg, quantidade: 3, rotulo: "Monte A · 3", cor: "#FBBF24" },
        { imagemUrl: moedaImg, quantidade: 2, rotulo: "Monte B · 2", cor: "#F472B6" },
      ],
      opcoes: ["4", "5", "6"],
      correta: 1,
    },
  },

  exercicios: [
    { enunciado: "5 = 4 + ?", resposta: "1", dica: "Depois do 4 falta quanto pra chegar em 5?" },
    { enunciado: "7 = 3 + ?", resposta: "4", dica: "Conte a partir do 3 até o 7." },
    { enunciado: "9 = 4 + ?", resposta: "5", dica: "4 + 5 = 9." },
    { enunciado: "10 = ? + 5", resposta: "5", dica: "Metade de 10." },
    { enunciado: "8 = 6 + ?", resposta: "2", dica: "6 + 2 = 8." },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: descubra a parte que está faltando pra formar o número certo.",
    resposta: "7 = 5+2 · 9 = 4+5 · 10 = 5+5 · 8 = 6+2.",
    visual: {
      cena: [
        { personagem: "Baú do Brilha", personagemImagemUrl: bauImg, itemImagemUrl: moedaImg, quantidade: 7, cor: "#FBBF24" },
        { personagem: "Cofre azul", itemImagemUrl: moedaImg, quantidade: 9, cor: "#60A5FA" },
        { personagem: "Cofre roxo", itemImagemUrl: moedaImg, quantidade: 10, cor: "#A78BFA" },
      ],
      perguntas: [
        {
          pergunta: "7 = 5 + ? — Qual parte falta?",
          opcoes: ["1", "2", "3"],
          correta: 1,
          explicacao: "5 + 2 = 7.",
          visual: {
            tipo: "comparar",
            lados: [
              { imagemUrl: moedaImg, quantidade: 5, rotulo: "Tem 5", cor: "#FBBF24" },
              { imagemUrl: moedaImg, quantidade: 2, rotulo: "Falta ?", cor: "#F472B6" },
            ],
          },
        },
        {
          pergunta: "9 = 4 + ? — Qual parte falta?",
          opcoes: ["3", "4", "5"],
          correta: 2,
          explicacao: "4 + 5 = 9.",
          visual: {
            tipo: "comparar",
            lados: [
              { imagemUrl: moedaImg, quantidade: 4, rotulo: "Tem 4", cor: "#60A5FA" },
              { imagemUrl: moedaImg, quantidade: 5, rotulo: "Falta ?", cor: "#A78BFA" },
            ],
          },
        },
        {
          pergunta: "10 = ? + 5 — Qual parte falta?",
          opcoes: ["4", "5", "6"],
          correta: 1,
          explicacao: "5 + 5 = 10.",
          visual: {
            tipo: "comparar",
            lados: [
              { imagemUrl: moedaImg, quantidade: 5, rotulo: "Falta ?", cor: "#A78BFA" },
              { imagemUrl: moedaImg, quantidade: 5, rotulo: "Tem 5", cor: "#FBBF24" },
            ],
          },
        },
        {
          pergunta: "8 = 6 + ? — Qual parte falta?",
          opcoes: ["1", "2", "3"],
          correta: 1,
          explicacao: "6 + 2 = 8.",
          visual: {
            tipo: "comparar",
            lados: [
              { imagemUrl: moedaImg, quantidade: 6, rotulo: "Tem 6", cor: "#FB923C" },
              { imagemUrl: moedaImg, quantidade: 2, rotulo: "Falta ?", cor: "#F472B6" },
            ],
          },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "COMPOR = juntar duas partes pra formar um número.",
      "DECOMPOR = separar um número em duas partes.",
      "Um mesmo número tem VÁRIAS formas: 6 = 5+1 = 4+2 = 3+3.",
      "Um grupo de 10 é uma dezena: 14 = 10 + 4.",
      "Moedas, blocos e dedos ajudam a descobrir novas combinações.",
    ],
    dica: "Comece pela parte MAIOR e complete até o total. Pra formar 8 com 5+_, veja quanto falta do 5 até o 8 (é 3).",
  },

  quiz: [
    {
      pergunta: "Qual destas formas representa o número 8?",
      opcoes: ["5 + 3", "5 + 2", "4 + 2"],
      correta: 0,
      explicacao: "5 + 3 = 8. As outras dão 7 e 6.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: moedaImg, quantidade: 5, rotulo: "5", cor: "#FBBF24" },
          { imagemUrl: moedaImg, quantidade: 3, rotulo: "3", cor: "#F472B6" },
        ],
      },
    },
    {
      pergunta: "6 + 4 = ?",
      opcoes: ["9", "10", "11"],
      correta: 1,
      explicacao: "6 + 4 = 10.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: moedaImg, quantidade: 6, rotulo: "6", cor: "#FBBF24" },
          { imagemUrl: moedaImg, quantidade: 4, rotulo: "4", cor: "#60A5FA" },
        ],
      },
    },
    {
      pergunta: "3 + ? = 8 — Qual número está faltando?",
      opcoes: ["4", "5", "6"],
      correta: 1,
      explicacao: "3 + 5 = 8.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: moedaImg, quantidade: 3, rotulo: "Tem 3", cor: "#FB923C" },
          { imagemUrl: moedaImg, quantidade: 5, rotulo: "Falta ?", cor: "#A78BFA" },
        ],
      },
    },
    {
      pergunta: "O número 7 pode ser formado por:",
      opcoes: ["2 + 5", "2 + 4", "3 + 3"],
      correta: 0,
      explicacao: "2 + 5 = 7. As outras dão 6.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: moedaImg, quantidade: 2, rotulo: "2", cor: "#F472B6" },
          { imagemUrl: moedaImg, quantidade: 5, rotulo: "5", cor: "#FBBF24" },
        ],
      },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Mestre das Combinações! Você aprendeu que um mesmo número pode ser formado de várias maneiras. Missão em Família: separe tampinhas, feijões ou botões, escolha um número entre 6 e 10 e tente formar esse número de PELO MENOS 3 maneiras diferentes.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Os matemáticos descobriram que qualquer número pode ser formado de várias maneiras diferentes. Isso ajuda nosso cérebro a fazer contas mais rápido — em vez de decorar tudo, a gente encaixa partes que já conhece!",
  },

  interativas: [
    // ==== FASE 1: Monte o número (com blocos) ====
    {
      tipo: "operacao",
      titulo: "Fase 1 · Monte o número",
      instrucao: "Aperte MOSTRAR: 3 blocos azuis juntam com 2 blocos amarelos.",
      operacao: "soma",
      imagemUrl: blocoImg,
      itemPlural: "blocos",
      a: 3,
      b: 2,
      cor: "#60A5FA",
      legenda: "3 + 2 = 5",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Qual número foi formado?",
      instrucao: "Olhe os dois montes de blocos e descubra o número que eles formam juntos.",
      grupos: [
        { imagemUrl: blocoImg, quantidade: 3, rotulo: "Monte 1" },
        { imagemUrl: blocoImg, quantidade: 2, rotulo: "Monte 2" },
      ],
      pergunta: "Qual número foi formado?",
      opcoes: ["4", "5", "6"],
      correta: 1,
      acerto: "Muito bem! 3 + 2 = 5. Um mesmo número pode ter várias formas.",
      erro: "Conte os dois montes juntos: 1, 2, 3, 4, 5.",
    },

    // ==== FASE 2: Arraste as moedas para o baú ====
    {
      tipo: "arrastar",
      titulo: "Fase 2 · Arraste as moedas",
      instrucao:
        "Arraste TODAS as 8 moedas pra dentro do baú do Brilha. No fim, conte quantas moedas ficaram guardadas.",
      itemImagem: moedaImg,
      alvosVisuais: [
        { nome: "Baú do Brilha", cor: "#FBBF24", capacidade: 8, imagemUrl: bauImg },
      ],
      pares: [
        { item: "Moeda 1", alvo: "Baú do Brilha" },
        { item: "Moeda 2", alvo: "Baú do Brilha" },
        { item: "Moeda 3", alvo: "Baú do Brilha" },
        { item: "Moeda 4", alvo: "Baú do Brilha" },
        { item: "Moeda 5", alvo: "Baú do Brilha" },
        { item: "Moeda 6", alvo: "Baú do Brilha" },
        { item: "Moeda 7", alvo: "Baú do Brilha" },
        { item: "Moeda 8", alvo: "Baú do Brilha" },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Confirmação",
      instrucao: "O Brilha guardou as moedas em dois grupos. Quantas ao todo?",
      grupos: [
        { imagemUrl: moedaImg, quantidade: 5, rotulo: "Grupo A" },
        { imagemUrl: moedaImg, quantidade: 3, rotulo: "Grupo B" },
      ],
      pergunta: "Quantas moedas existem no total?",
      opcoes: ["7", "8", "9"],
      correta: 1,
      acerto: "🎉 Isso! 5 + 3 = 8 moedas. 8 pode ser formado de várias maneiras.",
      erro: "Conte primeiro o grupo A, depois continue pelo grupo B.",
    },

    // ==== FASE 3: Complete (4 + ? = 7) ====
    {
      tipo: "operacao",
      titulo: "Fase 3 · Complete a soma",
      instrucao: "A gente já tem 4 estrelas. Faltam quantas pra chegar em 7?",
      operacao: "soma",
      imagemUrl: estrelaImg,
      itemPlural: "estrelas",
      a: 4,
      b: 3,
      cor: "#FBBF24",
      legenda: "4 + 3 = 7",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · Qual número está faltando?",
      instrucao: "Já temos 4 estrelas. Quantas estrelas precisam entrar pra formar 7?",
      grupos: [
        { imagemUrl: estrelaImg, quantidade: 4, rotulo: "Tem 4" },
        { imagemUrl: estrelaImg, quantidade: 3, rotulo: "Falta ?" },
      ],
      pergunta: "4 + ? = 7",
      opcoes: ["2", "3", "4"],
      correta: 1,
      acerto: "Isso! 4 + 3 = 7.",
      erro: "Conte a partir do 4 até chegar em 7: 5, 6, 7. São 3 passos.",
    },

    // ==== FASE 4: Descubra outra forma (9) ====
    {
      tipo: "operacao",
      titulo: "Fase 4 · Descubra outra forma (9 = 6 + 3)",
      instrucao: "Uma das formas de formar 9: 6 castanhas juntas com mais 3.",
      operacao: "soma",
      imagemUrl: castanhaImg,
      itemPlural: "castanhas",
      a: 6,
      b: 3,
      cor: "#A16207",
      legenda: "6 + 3 = 9",
    },
    {
      tipo: "operacao",
      titulo: "Fase 4 · Outra forma (9 = 5 + 4)",
      instrucao: "Agora outra forma: 5 castanhas juntas com mais 4. Também dá 9!",
      operacao: "soma",
      imagemUrl: castanhaImg,
      itemPlural: "castanhas",
      a: 5,
      b: 4,
      cor: "#F59E0B",
      legenda: "5 + 4 = 9",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 4 · Qual dupla também forma 9?",
      instrucao: "Olhe os dois montes e diga se juntos dão 9.",
      grupos: [
        { imagemUrl: castanhaImg, quantidade: 7, rotulo: "7" },
        { imagemUrl: castanhaImg, quantidade: 2, rotulo: "2" },
      ],
      pergunta: "7 + 2 forma qual número?",
      opcoes: ["8", "9", "10"],
      correta: 1,
      acerto: "Muito bem! 7 + 2 = 9. Já temos 3 formas de formar 9: 6+3, 5+4 e 7+2.",
      erro: "Conte a partir do 7 mais 2 passos: 8, 9.",
    },

    // ==== FASE 5: O Baú Misterioso (10 = 6 + 4) ====
    {
      tipo: "operacao",
      titulo: "Fase 5 · O Baú Misterioso",
      instrucao: "O baú recebeu 6 moedas e depois mais 4. Veja as partes formarem o total 10.",
      operacao: "soma",
      imagemUrl: moedaImg,
      itemPlural: "moedas",
      a: 6,
      b: 4,
      cor: "#FBBF24",
      legenda: "6 + 4 = 10",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Compondo de novo",
      instrucao: "6 moedas retiradas + 4 moedas que ficaram no baú.",
      grupos: [
        { imagemUrl: moedaImg, quantidade: 6, rotulo: "Retirou" },
        { imagemUrl: moedaImg, quantidade: 4, rotulo: "Ficou" },
      ],
      pergunta: "6 + 4 = ?",
      opcoes: ["9", "10", "11"],
      correta: 1,
      acerto: "🏆 Isso! 6 + 4 = 10. Descobrimos que 10 também é 6 + 4.",
      erro: "Junte os dois grupos e conte um por um até chegar no total.",
    },

    // ==== MINI JOGO: Construtor de Números — arrastar blocos ====
    {
      tipo: "arrastar",
      titulo: "Mini Jogo · Construtor do Número 6",
      instrucao:
        "Arraste 4 blocos pro monte AZUL e 2 pro monte AMARELO. Assim formamos o número 6 de uma forma nova: 4 + 2.",
      itemImagem: blocoImg,
      alvosVisuais: [
        { nome: "Monte Azul (4)", cor: "#60A5FA", capacidade: 4, imagemUrl: blocoImg },
        { nome: "Monte Amarelo (2)", cor: "#FBBF24", capacidade: 2, imagemUrl: blocoImg },
      ],
      pares: [
        { item: "Bloco 1", alvo: "Monte Azul (4)" },
        { item: "Bloco 2", alvo: "Monte Azul (4)" },
        { item: "Bloco 3", alvo: "Monte Azul (4)" },
        { item: "Bloco 4", alvo: "Monte Azul (4)" },
        { item: "Bloco 5", alvo: "Monte Amarelo (2)" },
        { item: "Bloco 6", alvo: "Monte Amarelo (2)" },
      ],
    },
    {
      tipo: "ordenar",
      titulo: "Mini Jogo · Ordene as duplas que formam 8",
      instrucao:
        "Arraste as duplas de baixo pra cima. Coloque a que tem MENOS azuis em cima e a que tem MAIS azuis embaixo. Todas juntas formam 8!",
      itens: ["1 + 7", "2 + 6", "3 + 5", "4 + 4"],
      imagens: [
        { imagemUrl: moedaImg, quantidade: 1, imagemUrl2: estrelaImg, quantidade2: 7, rotulo: "1 + 7 = 8", cor: "#60A5FA", cor2: "#FBBF24" },
        { imagemUrl: moedaImg, quantidade: 2, imagemUrl2: estrelaImg, quantidade2: 6, rotulo: "2 + 6 = 8", cor: "#60A5FA", cor2: "#FBBF24" },
        { imagemUrl: moedaImg, quantidade: 3, imagemUrl2: estrelaImg, quantidade2: 5, rotulo: "3 + 5 = 8", cor: "#60A5FA", cor2: "#FBBF24" },
        { imagemUrl: moedaImg, quantidade: 4, imagemUrl2: estrelaImg, quantidade2: 4, rotulo: "4 + 4 = 8", cor: "#60A5FA", cor2: "#FBBF24" },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "5 = 4 + ? — Qual parte falta?",
        opcoes: ["1", "2", "3"],
        correta: 0,
        explicacao: "4 + 1 = 5.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: moedaImg, quantidade: 4, rotulo: "Tem 4", cor: "#FBBF24" },
            { imagemUrl: moedaImg, quantidade: 1, rotulo: "Falta ?", cor: "#F472B6" },
          ],
        },
      },
      {
        pergunta: "6 pode ser formado por:",
        opcoes: ["3 + 3", "3 + 2", "2 + 2"],
        correta: 0,
        explicacao: "3 + 3 = 6.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: macaImg, quantidade: 3, rotulo: "3", cor: "#EF4444" },
            { imagemUrl: macaImg, quantidade: 3, rotulo: "3", cor: "#F472B6" },
          ],
        },
      },
      {
        pergunta: "5 = 2 + ? — Qual parte falta?",
        opcoes: ["2", "3", "4"],
        correta: 1,
        explicacao: "2 + 3 = 5.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: moedaImg, quantidade: 2, rotulo: "Tem 2", cor: "#FB923C" },
            { imagemUrl: moedaImg, quantidade: 3, rotulo: "Falta ?", cor: "#A78BFA" },
          ],
        },
      },
    ],
    medio: [
      {
        pergunta: "8 pode ser formado por:",
        opcoes: ["5 + 3", "5 + 2", "4 + 2"],
        correta: 0,
        explicacao: "5 + 3 = 8.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: castanhaImg, quantidade: 5, rotulo: "5", cor: "#FBBF24" },
            { imagemUrl: castanhaImg, quantidade: 3, rotulo: "3", cor: "#A16207" },
          ],
        },
      },
      {
        pergunta: "9 = 4 + ? — Qual parte falta?",
        opcoes: ["4", "5", "6"],
        correta: 1,
        explicacao: "4 + 5 = 9.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: moedaImg, quantidade: 4, rotulo: "Tem 4", cor: "#60A5FA" },
            { imagemUrl: moedaImg, quantidade: 5, rotulo: "Falta ?", cor: "#A78BFA" },
          ],
        },
      },
      {
        pergunta: "10 = ? + 5",
        opcoes: ["4", "5", "6"],
        correta: 1,
        explicacao: "5 + 5 = 10.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: estrelaImg, quantidade: 5, rotulo: "?", cor: "#A78BFA" },
            { imagemUrl: estrelaImg, quantidade: 5, rotulo: "5", cor: "#FBBF24" },
          ],
        },
      },
    ],
    dificil: [
      {
        pergunta: "8 = 6 + ? — Qual parte falta?",
        opcoes: ["1", "2", "3"],
        correta: 1,
        explicacao: "6 + 2 = 8.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: moedaImg, quantidade: 6, rotulo: "Tem 6", cor: "#FB923C" },
            { imagemUrl: moedaImg, quantidade: 2, rotulo: "Falta ?", cor: "#F472B6" },
          ],
        },
      },
      {
        pergunta: "Qual dupla NÃO forma 10?",
        opcoes: ["7 + 3", "6 + 4", "5 + 4"],
        correta: 2,
        explicacao: "5 + 4 = 9, não 10. As outras duas dão 10.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: moedaImg, quantidade: 5, rotulo: "5", cor: "#FBBF24" },
            { imagemUrl: moedaImg, quantidade: 4, rotulo: "4", cor: "#60A5FA" },
          ],
        },
      },
      {
        pergunta:
          "O baú tinha 10 moedas. O Brilha tirou algumas e ficaram 3. Quantas ele tirou?",
        opcoes: ["6", "7", "8"],
        correta: 1,
        explicacao: "10 = 7 + 3. O Brilha tirou 7 moedas.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: moedaImg, quantidade: 7, rotulo: "Tirou ?", cor: "#F472B6" },
            { imagemUrl: moedaImg, quantidade: 3, rotulo: "Ficou 3", cor: "#FBBF24" },
          ],
        },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01MA08",
    titulo: "Resolver problemas de adição e subtração até 20",
  },
};

export default aula;
