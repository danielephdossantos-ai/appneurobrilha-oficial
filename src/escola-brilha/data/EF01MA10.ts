import type { Aula } from "../types";
import florImg from "@/assets/neuro-treino/objetos/flor.png";
import girassolImg from "@/assets/neuro-treino/objetos/girassol.png";
import tulipaImg from "@/assets/neuro-treino/objetos/tulipa.png";
import rosaImg from "@/assets/neuro-treino/objetos/rosa.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import borboletaImg from "@/assets/neuro-treino/objetos/borboleta.png";
import joaninhaImg from "@/assets/neuro-treino/objetos/joaninha.png";
import peixeImg from "@/assets/neuro-treino/objetos/peixe.png";
import luaImg from "@/assets/neuro-treino/objetos/lua.png";
import diamanteImg from "@/assets/neuro-treino/objetos/diamante.png";
import moedaImg from "@/assets/neuro-treino/objetos/moeda.png";
import macaImg from "@/assets/neuro-treino/objetos/maca.png";

/**
 * EF01MA10 — Aula 010 · Biblioteca Pedagógica Escola Brilha
 * 1º Ano · Matemática
 * BNCC: Descrever, após reconhecer e explicitar um padrão (regularidade),
 * os elementos ausentes em sequências recursivas de números naturais,
 * objetos ou figuras.
 *
 * Missão: "O Caminho dos Cristais Coloridos".
 * Segue o gabarito TRAVADO da EF01MA02 — tudo visual, mini-jogos.
 */
const aula: Aula = {
  codigo: "EF01MA10",
  ano: "1º Ano",
  disciplina: "Matemática",
  titulo: "O Caminho dos Cristais Coloridos",

  narrativa: {
    titulo: "O Caminho dos Cristais Coloridos",
    contexto:
      "Brilha encontrou uma trilha mágica na floresta. O caminho é feito de cristais coloridos que seguem uma ordem especial.",
    problema:
      "Mas alguns cristais desapareceram do caminho! Sem eles, a trilha para de brilhar e Brilha não consegue passar.",
    convite:
      "Vamos descobrir qual cristal está faltando pra trilha voltar a funcionar? Bora seguir os padrões!",
  },

  conhecimentosPrevios: [
    "Contar até 20.",
    "Reconhecer figuras (estrela, coração, flor).",
    "Saber o que vem antes e depois de um número.",
  ],

  missao:
    "Descobrir o PADRÃO (regularidade) em sequências de números e figuras e completar o elemento que está faltando.",

  objetivos: [
    "Identificar sequências numéricas.",
    "Perceber padrões em figuras e objetos.",
    "Completar sequências.",
    "Desenvolver raciocínio lógico e observação.",
  ],

  motivacao:
    "Padrões estão no arco-íris, nas músicas, nos pisos e até nas flores. Descobrir padrões é como resolver um mistério!",

  explicacao:
    "🔎 SEQUÊNCIA é uma ordem que segue uma REGRA.\n\nExemplo com números:\n1 — 2 — 3 — 4 — 5\nA regra é: cada número aumenta 1.\n\nExemplo com figuras:\n🔴 🔵 🔴 🔵 🔴 🔵\nA regra é: vermelho e azul se repetem.\n\nPra descobrir o que falta, observe:\n✔ O que muda?\n✔ O que se repete?\n✔ Qual é a REGRA?",

  explicacoesNiveis: {
    nivel1: "Sequência é uma ordem que segue uma regra. Descubra a regra e você acha o que falta.",
    nivel2:
      "Se você vê 2, 3, 4, __, 6 — a regra é 'aumentar 1'. Então falta o 5.",
    nivel3:
      "Se você vê 🌻 🌷 🌻 🌷 🌻 __ — a regra é 'alterna girassol e tulipa'. Então vem 🌷.",
    nivel4:
      "Padrões estão em tudo: nas colmeias das abelhas, nos azulejos da cozinha, nos dias da semana. Nosso cérebro adora encontrar padrões!",
  },

  exemploResolvido: {
    enunciado:
      "Observe a sequência de flores: 🌸 🌸 🌸 🌸 🌸. Depois vamos contar.",
    passos: [
      "Olhe a sequência com atenção.",
      "Conte cada flor: 1, 2, 3, 4, 5.",
      "Cada posição aumenta 1 — essa é a regra.",
      "Se faltasse a última, viria 5.",
    ],
    resposta: "A regra é 'aumentar 1'. O próximo é 5.",
    interativo: {
      tipo: "contagem",
      imagemUrl: florImg,
      quantidade: 5,
      nomeItem: "flor",
      nomeItemPlural: "flores",
      pergunta: "Toque em cada flor e conte!",
    },
  },

  atividadeGuiada: {
    enunciado:
      "Olhe os corações da trilha: ❤️ ❤️ ❤️ ❤️. Quantos corações vêm em seguida se a regra for 'sempre + 1'?",
    resposta: "5 corações.",
    explicacao:
      "A regra é aumentar 1 a cada posição. Depois de 4 vem 5.",
    visual: {
      tipo: "grupos",
      pergunta: "Depois de 4 corações, quantos vêm?",
      imagemUrl: coracaoImg,
      itemSingular: "coração",
      itemPlural: "corações",
      quantidadeGrupos: 1,
      itensPorGrupo: 5,
      opcoes: [3, 4, 5],
      correta: 2,
    },
  },

  exercicios: [
    { enunciado: "1 — 2 — 3 — __ — 5. Qual falta?", resposta: "4", dica: "Aumenta 1 a cada passo." },
    { enunciado: "10 — 11 — 12 — __ — 14. Qual falta?", resposta: "13", dica: "Depois do 12 vem 13." },
    { enunciado: "🌻 🌷 🌻 🌷 🌻 __. Qual vem?", resposta: "🌷", dica: "Alterna girassol e tulipa." },
    { enunciado: "⭐ ❤️ ⭐ ❤️ ⭐ __. Qual vem?", resposta: "❤️", dica: "Alterna estrela e coração." },
    { enunciado: "15 — 16 — 17 — __ — 19. Qual falta?", resposta: "18", dica: "Depois do 17 vem 18." },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: complete os cristais que sumiram da trilha mágica!",
    resposta: "5 · 10 · coração · maçã.",
    visual: {
      cena: [
        { personagem: "Cristal Estrela", itemImagemUrl: estrelaImg, quantidade: 5, cor: "#FBBF24" },
        { personagem: "Cristal Coração", itemImagemUrl: coracaoImg, quantidade: 5, cor: "#EF4444" },
        { personagem: "Cristal Diamante", itemImagemUrl: diamanteImg, quantidade: 5, cor: "#60A5FA" },
      ],
      perguntas: [
        {
          pergunta: "2 — 3 — 4 — __ — 6. Qual falta?",
          opcoes: ["4", "5", "7"],
          correta: 1,
          explicacao: "A regra é aumentar 1. Depois do 4 vem 5.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: estrelaImg, quantidade: 2, rotulo: "2", cor: "#FBBF24" },
              { imagemUrl: estrelaImg, quantidade: 3, rotulo: "3", cor: "#FBBF24" },
              { imagemUrl: estrelaImg, quantidade: 4, rotulo: "4", cor: "#FBBF24" },
              { imagemUrl: estrelaImg, quantidade: 5, rotulo: "?", cor: "#34D399" },
              { imagemUrl: estrelaImg, quantidade: 6, rotulo: "6", cor: "#FBBF24" },
            ],
          },
        },
        {
          pergunta: "8 — 9 — __ — 11. Qual falta?",
          opcoes: ["10", "12", "7"],
          correta: 0,
          explicacao: "Depois do 9 vem 10.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: moedaImg, quantidade: 8, rotulo: "8", cor: "#FBBF24" },
              { imagemUrl: moedaImg, quantidade: 9, rotulo: "9", cor: "#FBBF24" },
              { imagemUrl: moedaImg, quantidade: 10, rotulo: "?", cor: "#34D399" },
              { imagemUrl: moedaImg, quantidade: 11, rotulo: "11", cor: "#FBBF24" },
            ],
          },
        },
        {
          pergunta: "🔺 🔵 🔺 🔵 __. Qual vem?",
          opcoes: ["🔵", "🔺", "⭐"],
          correta: 0,
          explicacao: "Alterna triângulo e círculo. Depois do triângulo vem o círculo.",
          visual: {
            tipo: "comparar",
            lados: [
              { imagemUrl: estrelaImg, quantidade: 3, rotulo: "Estrelas na sequência", cor: "#FBBF24" },
              { imagemUrl: coracaoImg, quantidade: 2, rotulo: "Corações — falta 1", cor: "#EF4444" },
            ],
          },
        },
        {
          pergunta: "🍎 🍐 🍎 🍐 🍎 __. Qual vem?",
          opcoes: ["🍎", "🍐", "🍌"],
          correta: 1,
          explicacao: "Alterna maçã e pera. Depois da maçã vem a pera.",
          visual: {
            tipo: "comparar",
            lados: [
              { imagemUrl: macaImg, quantidade: 3, rotulo: "Maçãs", cor: "#EF4444" },
              { imagemUrl: macaImg, quantidade: 2, rotulo: "Peras — falta 1", cor: "#34D399" },
            ],
          },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "SEQUÊNCIA = ordem com REGRA.",
      "Observe: o que muda? o que se repete?",
      "Quando a regra é 'aumenta 1', o próximo é o número seguinte.",
      "Quando figuras se alternam, a próxima é a que 'falta a vez'.",
    ],
    dica: "Antes de responder, diga a REGRA em voz alta. Se souber a regra, sabe o que falta.",
  },

  quiz: [
    {
      pergunta: "5 — 6 — __ — 8. Qual falta?",
      opcoes: ["6", "7", "9"],
      correta: 1,
      explicacao: "Depois do 6 vem 7.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: moedaImg, quantidade: 5, rotulo: "5", cor: "#FBBF24" },
          { imagemUrl: moedaImg, quantidade: 6, rotulo: "6", cor: "#FBBF24" },
          { imagemUrl: moedaImg, quantidade: 7, rotulo: "?", cor: "#34D399" },
          { imagemUrl: moedaImg, quantidade: 8, rotulo: "8", cor: "#FBBF24" },
        ],
      },
    },
    {
      pergunta: "🐟 ⭐ 🐟 ⭐ 🐟 __. Qual vem?",
      opcoes: ["🐟", "⭐", "❤️"],
      correta: 1,
      explicacao: "Alterna peixe e estrela. Depois do peixe vem a estrela.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: peixeImg, quantidade: 3, rotulo: "Peixes", cor: "#60A5FA" },
          { imagemUrl: estrelaImg, quantidade: 2, rotulo: "Estrelas — falta 1", cor: "#FBBF24" },
        ],
      },
    },
    {
      pergunta: "18 — 19 — __. Qual vem?",
      opcoes: ["17", "20", "21"],
      correta: 1,
      explicacao: "Depois do 19 vem 20.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: estrelaImg, quantidade: 18, rotulo: "18", cor: "#FBBF24" },
          { imagemUrl: estrelaImg, quantidade: 19, rotulo: "19", cor: "#FBBF24" },
          { imagemUrl: estrelaImg, quantidade: 20, rotulo: "?", cor: "#34D399" },
        ],
      },
    },
    {
      pergunta: "Uma sequência é:",
      opcoes: ["um desenho aleatório", "uma regra que organiza números ou figuras", "uma conta de multiplicação"],
      correta: 1,
      explicacao: "Sequência é uma ordem que segue uma REGRA.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: florImg, quantidade: 1, rotulo: "1", cor: "#F472B6" },
          { imagemUrl: florImg, quantidade: 2, rotulo: "2 (regra: +1)", cor: "#F472B6" },
        ],
      },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Guardião dos Padrões! Você aprendeu a olhar uma sequência, descobrir a REGRA e completar o elemento que faltava. Missão em Família: ache 3 padrões em casa — azulejos, grades, estampas — e mostre pra alguém.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "As abelhas constroem suas colmeias em padrões de hexágonos perfeitos — sem régua e sem ninguém ensinando! Padrões estão até no arco-íris, que sempre segue a mesma ordem de cores.",
  },

  interativas: [
    // ==== FASE 1: Complete a sequência numérica (1,2,3,_,5) ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Complete a Sequência",
      instrucao: "Observe a trilha: 1 — 2 — 3 — ? — 5. Qual número está faltando?",
      grupos: [
        { imagemUrl: diamanteImg, quantidade: 1, rotulo: "1" },
        { imagemUrl: diamanteImg, quantidade: 2, rotulo: "2" },
        { imagemUrl: diamanteImg, quantidade: 3, rotulo: "3" },
        { imagemUrl: diamanteImg, quantidade: 4, rotulo: "?" },
        { imagemUrl: diamanteImg, quantidade: 5, rotulo: "5" },
      ],
      pergunta: "Qual número está faltando?",
      opcoes: ["2", "4", "6"],
      correta: 1,
      acerto: "🎉 Muito bem! A sequência cresce de um em um. Falta o 4!",
      erro: "A regra é aumentar 1. Depois do 3 vem 4.",
    },

    // ==== FASE 2: Descubra o próximo (flor pattern) ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Descubra o Próximo",
      instrucao: "🌻 🌷 🌻 🌷 🌻 ? — qual flor vem agora?",
      grupos: [
        { imagemUrl: girassolImg, quantidade: 1, rotulo: "🌻 Girassol" },
        { imagemUrl: tulipaImg, quantidade: 1, rotulo: "🌷 Tulipa" },
        { imagemUrl: girassolImg, quantidade: 1, rotulo: "🌻 Girassol" },
        { imagemUrl: tulipaImg, quantidade: 1, rotulo: "🌷 Tulipa" },
        { imagemUrl: girassolImg, quantidade: 1, rotulo: "🌻 Girassol" },
        { imagemUrl: rosaImg, quantidade: 1, rotulo: "❓ Falta 1" },
      ],
      pergunta: "Qual flor vem agora?",
      opcoes: ["🌻 Girassol", "🌷 Tulipa", "🌹 Rosa"],
      correta: 1,
      acerto: "🌷 Boa! Alterna girassol e tulipa. Depois do girassol vem a tulipa!",
      erro: "Olhe o padrão: 🌻 🌷 🌻 🌷 🌻 — sempre alterna. Depois do girassol vem 🌷.",
    },

    // ==== FASE 3: Arraste o número (10,11,12,_,14) ====
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Arraste o Número Certo",
      instrucao:
        "A trilha mostra: 10 — 11 — 12 — ? — 14. Arraste o cristal com o número CERTO pra caixa da trilha.",
      itemImagem: diamanteImg,
      alvosVisuais: [
        { nome: "Trilha (falta 1)", cor: "#60A5FA", capacidade: 1, imagemUrl: diamanteImg },
        { nome: "Cristais errados", cor: "#F472B6", capacidade: 2, imagemUrl: diamanteImg },
      ],
      pares: [
        { item: "Cristal 13", alvo: "Trilha (falta 1)" },
        { item: "Cristal 15", alvo: "Cristais errados" },
        { item: "Cristal 9", alvo: "Cristais errados" },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · Qual era o cristal certo?",
      instrucao: "10 — 11 — 12 — ? — 14. Qual número completa a trilha?",
      grupos: [
        { imagemUrl: diamanteImg, quantidade: 10, rotulo: "10" },
        { imagemUrl: diamanteImg, quantidade: 11, rotulo: "11" },
        { imagemUrl: diamanteImg, quantidade: 12, rotulo: "12" },
        { imagemUrl: diamanteImg, quantidade: 13, rotulo: "?" },
        { imagemUrl: diamanteImg, quantidade: 14, rotulo: "14" },
      ],
      pergunta: "Qual falta?",
      opcoes: ["13", "15", "9"],
      correta: 0,
      acerto: "🔷 Isso! Depois do 12 vem 13.",
      erro: "A regra é aumentar 1: 10, 11, 12, 13, 14.",
    },

    // ==== FASE 4: Qual figura falta? (⭐❤️⭐❤️⭐_) ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 4 · Qual Figura Falta?",
      instrucao: "⭐ ❤️ ⭐ ❤️ ⭐ ? — qual figura vem agora?",
      grupos: [
        { imagemUrl: estrelaImg, quantidade: 3, rotulo: "Estrelas ⭐" },
        { imagemUrl: coracaoImg, quantidade: 2, rotulo: "Corações ❤️ (falta 1)" },
      ],
      pergunta: "Qual figura vem agora?",
      opcoes: ["⭐ Estrela", "❤️ Coração", "🌙 Lua"],
      correta: 1,
      acerto: "💖 Perfeito! Alterna estrela e coração. Depois da estrela vem o coração!",
      erro: "Olhe: sempre alterna ⭐ e ❤️. Depois de ⭐ vem ❤️.",
    },

    // ==== FASE 5: O Trem dos Números (15,16,17,_,19) ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · O Trem dos Números",
      instrucao: "O trem passa: 15 — 16 — 17 — ? — 19. Qual vagão está faltando?",
      grupos: [
        { imagemUrl: moedaImg, quantidade: 15, rotulo: "15" },
        { imagemUrl: moedaImg, quantidade: 16, rotulo: "16" },
        { imagemUrl: moedaImg, quantidade: 17, rotulo: "17" },
        { imagemUrl: moedaImg, quantidade: 18, rotulo: "?" },
        { imagemUrl: moedaImg, quantidade: 19, rotulo: "19" },
      ],
      pergunta: "Qual vagão está faltando?",
      opcoes: ["16", "18", "20"],
      correta: 1,
      acerto: "🚂 Muito bem! Depois do 17 vem 18.",
      erro: "A regra é aumentar 1: 15, 16, 17, 18, 19.",
    },

    // ==== MINI JOGO 1 · O Jardim Encantado — ordenar 🌼🌸 ====
    {
      tipo: "ordenar",
      titulo: "Mini Jogo · Jardim Encantado (padrão de flores)",
      instrucao:
        "Coloque na ORDEM CERTA pra formar o padrão: 🌼 🌸 🌼 🌸 🌼 🌸.",
      itens: [
        "🌼 Margarida (1)",
        "🌸 Cerejeira (2)",
        "🌼 Margarida (3)",
        "🌸 Cerejeira (4)",
        "🌼 Margarida (5)",
        "🌸 Cerejeira (6)",
      ],
      imagens: [
        { imagemUrl: florImg, quantidade: 1, rotulo: "🌼 pos 1", cor: "#FBBF24" },
        { imagemUrl: florImg, quantidade: 1, rotulo: "🌸 pos 2", cor: "#F472B6" },
        { imagemUrl: florImg, quantidade: 1, rotulo: "🌼 pos 3", cor: "#FBBF24" },
        { imagemUrl: florImg, quantidade: 1, rotulo: "🌸 pos 4", cor: "#F472B6" },
        { imagemUrl: florImg, quantidade: 1, rotulo: "🌼 pos 5", cor: "#FBBF24" },
        { imagemUrl: florImg, quantidade: 1, rotulo: "🌸 pos 6", cor: "#F472B6" },
      ],
    },

    // ==== MINI JOGO 2 · Bichinhos do jardim — ligar padrão ao que falta ====
    {
      tipo: "ligar",
      titulo: "Mini Jogo · Ligue o padrão à figura que falta",
      instrucao: "Ligue cada padrão à figura que vem em seguida.",
      pares: [
        { a: "🐞 🦋 🐞 🦋 🐞 __", b: "🦋 Borboleta", aImagem: joaninhaImg, aQuantidade: 3 },
        { a: "🐟 ⭐ 🐟 ⭐ __", b: "🐟 Peixe", aImagem: peixeImg, aQuantidade: 2 },
        { a: "🌙 ⭐ 🌙 ⭐ 🌙 __", b: "⭐ Estrela", aImagem: luaImg, aQuantidade: 3 },
        { a: "❤️ 💎 ❤️ 💎 __", b: "❤️ Coração", aImagem: coracaoImg, aQuantidade: 2 },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "1 — 2 — __ — 4. Qual falta?",
        opcoes: ["2", "3", "5"],
        correta: 1,
        explicacao: "Depois do 2 vem 3.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: diamanteImg, quantidade: 1, rotulo: "1", cor: "#60A5FA" },
            { imagemUrl: diamanteImg, quantidade: 2, rotulo: "2", cor: "#60A5FA" },
            { imagemUrl: diamanteImg, quantidade: 3, rotulo: "?", cor: "#34D399" },
            { imagemUrl: diamanteImg, quantidade: 4, rotulo: "4", cor: "#60A5FA" },
          ],
        },
      },
      {
        pergunta: "⭐ ❤️ ⭐ ❤️ __. Qual vem?",
        opcoes: ["⭐", "❤️", "🌙"],
        correta: 0,
        explicacao: "Alterna ⭐ e ❤️. Depois do ❤️ vem ⭐.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: estrelaImg, quantidade: 2, rotulo: "Estrelas", cor: "#FBBF24" },
            { imagemUrl: coracaoImg, quantidade: 2, rotulo: "Corações", cor: "#EF4444" },
          ],
        },
      },
    ],
    medio: [
      {
        pergunta: "6 — 7 — __ — 9. Qual falta?",
        opcoes: ["5", "8", "10"],
        correta: 1,
        explicacao: "Depois do 7 vem 8.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: moedaImg, quantidade: 6, rotulo: "6", cor: "#FBBF24" },
            { imagemUrl: moedaImg, quantidade: 7, rotulo: "7", cor: "#FBBF24" },
            { imagemUrl: moedaImg, quantidade: 8, rotulo: "?", cor: "#34D399" },
            { imagemUrl: moedaImg, quantidade: 9, rotulo: "9", cor: "#FBBF24" },
          ],
        },
      },
      {
        pergunta: "🐞 🦋 🐞 🦋 🐞 __. Qual vem?",
        opcoes: ["🐞", "🦋", "🐝"],
        correta: 1,
        explicacao: "Alterna joaninha e borboleta. Depois da joaninha vem 🦋.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: joaninhaImg, quantidade: 3, rotulo: "Joaninhas", cor: "#EF4444" },
            { imagemUrl: borboletaImg, quantidade: 2, rotulo: "Borboletas — falta 1", cor: "#A78BFA" },
          ],
        },
      },
    ],
    dificil: [
      {
        pergunta: "12 — 13 — __ — 15 — 16. Qual falta?",
        opcoes: ["11", "14", "17"],
        correta: 1,
        explicacao: "Depois do 13 vem 14.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: estrelaImg, quantidade: 12, rotulo: "12", cor: "#FBBF24" },
            { imagemUrl: estrelaImg, quantidade: 13, rotulo: "13", cor: "#FBBF24" },
            { imagemUrl: estrelaImg, quantidade: 14, rotulo: "?", cor: "#34D399" },
            { imagemUrl: estrelaImg, quantidade: 15, rotulo: "15", cor: "#FBBF24" },
            { imagemUrl: estrelaImg, quantidade: 16, rotulo: "16", cor: "#FBBF24" },
          ],
        },
      },
      {
        pergunta: "🌙 ⭐ ⭐ 🌙 ⭐ ⭐ 🌙 __. Qual vem?",
        opcoes: ["🌙", "⭐", "❤️"],
        correta: 1,
        explicacao: "O padrão é 🌙 ⭐ ⭐ repetindo. Depois da 🌙 vem ⭐.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: luaImg, quantidade: 3, rotulo: "Luas", cor: "#60A5FA" },
            { imagemUrl: estrelaImg, quantidade: 5, rotulo: "Estrelas — falta 1", cor: "#FBBF24" },
          ],
        },
      },
    ],
  },

  proximaHabilidade: { codigo: "EF01MA11" },
};

export default aula;
