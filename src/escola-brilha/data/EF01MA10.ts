import type { Aula } from "../types";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as girassolImg } from "@/assets/neuro-treino/objetos/girassol.png.asset.json";
import { url as tulipaImg } from "@/assets/neuro-treino/objetos/tulipa.png.asset.json";
import { url as rosaImg } from "@/assets/neuro-treino/objetos/rosa.png.asset.json";
import { url as margaridaImg } from "@/assets/neuro-treino/objetos/margarida.png.asset.json";
import { url as cerejeiraImg } from "@/assets/neuro-treino/objetos/cerejeira.png.asset.json";
import { url as coracaoImg } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as borboletaImg } from "@/assets/neuro-treino/objetos/borboleta.png.asset.json";
import { url as joaninhaImg } from "@/assets/neuro-treino/objetos/joaninha.png.asset.json";
import { url as peixeImg } from "@/assets/neuro-treino/objetos/peixe.png.asset.json";
import { url as luaImg } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as diamanteImg } from "@/assets/neuro-treino/objetos/diamante.png.asset.json";
import { url as moedaImg } from "@/assets/neuro-treino/objetos/moeda.png.asset.json";
import { url as macaImg } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as bananaImg } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as circuloImg } from "@/assets/neuro-treino/objetos/circulo.png.asset.json";
import { url as trianguloImg } from "@/assets/neuro-treino/objetos/triangulo.png.asset.json";

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
    "Reconhecer e explicar a regra de sequências numéricas, de objetos e figuras.",
    "Diferenciar o bloco que se repete da sequência completa.",
    "Descobrir elementos ausentes no início, no meio ou no fim.",
    "Conferir se a resposta mantém a regularidade nos dois lados da lacuna.",
  ],

  motivacao:
    "Padrões estão no arco-íris, nas músicas, nos pisos e até nas flores. Descobrir padrões é como resolver um mistério!",

  explicacao:
    "SEQUÊNCIA é uma lista de elementos numa ordem. REGULARIDADE é a regra que permite continuar a lista e descobrir o que falta.\n\nNuma sequência repetitiva, encontre o menor bloco que volta a aparecer. Em círculo, triângulo, círculo, triângulo, o bloco é 'círculo, triângulo'.\n\nNuma sequência numérica recursiva, cada número é obtido a partir do anterior. Em 2, 4, 6, 8, a regra é acrescentar 2.\n\nPara preencher uma lacuna, diga a regra, teste o elemento e confira o que aparece antes e depois. A posição do desenho não basta: é a regra que prova a resposta.",

  explicacaoAtiva: [
    {
      texto: "Em padrões repetitivos, descubra o menor bloco que se repete.",
      exemplo: "Círculo, triângulo | círculo, triângulo | círculo, ...",
      imagem: circuloImg,
      imagemAlt: "Círculo que inicia um bloco repetitivo",
      checagem: { pergunta: "No padrão círculo, triângulo, círculo, triângulo, qual é o bloco?", opcoes: ["Só círculo", "Círculo e triângulo", "Dois triângulos"], correta: 1, explicacao: "O menor trecho que volta inteiro é círculo, triângulo." },
    },
    {
      texto: "Em sequências numéricas, compare números vizinhos para descobrir quanto foi acrescentado.",
      exemplo: "2, 4, 6, 8: cada número é o anterior mais 2.",
      imagem: moedaImg,
      imagemAlt: "Moeda usada numa sequência numérica",
      checagem: { pergunta: "Qual é a regra de 3, 5, 7, 9?", opcoes: ["Acrescentar 1", "Acrescentar 2", "Retirar 2"], correta: 1, explicacao: "De um número ao seguinte entram duas unidades." },
    },
    {
      texto: "A lacuna pode estar no meio. A resposta precisa funcionar com o elemento anterior e com o seguinte.",
      exemplo: "4, 6, __, 10. Pela regra +2, falta 8: 6 + 2 = 8 e 8 + 2 = 10.",
      imagem: diamanteImg,
      imagemAlt: "Diamante representando uma posição ausente",
      checagem: { pergunta: "Em 5, 7, __, 11, qual falta?", opcoes: ["8", "9", "10"], correta: 1, explicacao: "A regra é +2: 5, 7, 9, 11." },
    },
    {
      texto: "Depois de completar, leia a sequência inteira e explique a regra em palavras.",
      exemplo: "Estrela, coração, coração se repete. Depois de estrela vêm dois corações.",
      imagem: estrelaImg,
      imagemAlt: "Estrela iniciando um bloco de três figuras",
      checagem: { pergunta: "⭐ ❤️ ❤️ ⭐ ❤️ __. Qual falta?", opcoes: ["⭐", "❤️", "🌙"], correta: 1, explicacao: "O bloco ⭐ ❤️ ❤️ está se repetindo." },
    },
  ],

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
      "Observe: girassol, tulipa, girassol, tulipa, __. Qual flor falta?",
    passos: [
      "Compare os elementos na ordem.",
      "Encontre o bloco que se repete: girassol, tulipa.",
      "O último elemento mostrado é tulipa.",
      "O bloco recomeça com girassol.",
    ],
    resposta: "Falta o girassol. O bloco é girassol, tulipa.",
    interativo: {
      tipo: "contagem",
      imagemUrl: girassolImg,
      quantidade: 3,
      nomeItem: "flor",
      nomeItemPlural: "flores",
      pergunta: "Quantos girassóis aparecem depois de completar o padrão?",
    },
  },

  atividadeGuiada: {
    enunciado:
      "Observe a sequência: 2 — 4 — 6 — __ — 10. Qual número está faltando?",
    resposta: "8. A regra é acrescentar 2.",
    explicacao:
      "Compare os vizinhos: 2 para 4 e 4 para 6 aumenta 2. Então 6 + 2 = 8 e 8 + 2 = 10.",
    visual: {
      tipo: "grupos",
      pergunta: "Qual número completa 2, 4, 6, __, 10?",
      imagemUrl: diamanteImg,
      itemSingular: "diamante",
      itemPlural: "diamantes",
      quantidadeGrupos: 1,
      itensPorGrupo: 8,
      opcoes: [7, 8, 9],
      correta: 1,
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
    resposta: "5 · 10 · círculo · banana.",
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
              { imagemUrl: trianguloImg, quantidade: 2, rotulo: "Triângulos", cor: "#FBBF24" },
              { imagemUrl: circuloImg, quantidade: 2, rotulo: "Círculos — falta 1", cor: "#60A5FA" },
            ],
          },
        },
        {
          pergunta: "🍎 🍌 🍎 🍌 🍎 __. Qual vem?",
          opcoes: ["🍎", "🍌", "⭐"],
          correta: 1,
          explicacao: "Alterna maçã e banana. Depois da maçã vem a banana.",
          visual: {
            tipo: "comparar",
            lados: [
              { imagemUrl: macaImg, quantidade: 3, rotulo: "Maçãs", cor: "#EF4444" },
              { imagemUrl: bananaImg, quantidade: 2, rotulo: "Bananas — falta 1", cor: "#34D399" },
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
      "Algumas regras acrescentam 2 ou outra quantidade; compare os números vizinhos.",
      "Quando figuras se alternam, a próxima é a que 'falta a vez'.",
      "Confira a resposta com o elemento anterior e com o seguinte.",
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

    // ==== MINI JOGO 1 · O Jardim Encantado — ordenar 🌼🌸 (cresce +1) ====
    {
      tipo: "ordenar",
      titulo: "Mini Jogo · Jardim Encantado (padrão que cresce)",
      instrucao:
        "Coloque na ORDEM CERTA — a cada passo, aumenta 1 flor: 1 🌼, 2 🌸, 3 🌼, 4 🌸, 5 🌼, 6 🌸. Conte cada cartão!",
      itens: [
        "1 Margarida",
        "2 Cerejeiras",
        "3 Margaridas",
        "4 Cerejeiras",
        "5 Margaridas",
        "6 Cerejeiras",
      ],
      imagens: [
        { imagemUrl: margaridaImg, quantidade: 1, rotulo: "1 🌼 Margarida", cor: "#FBBF24" },
        { imagemUrl: cerejeiraImg, quantidade: 2, rotulo: "2 🌸 Cerejeiras", cor: "#F472B6" },
        { imagemUrl: margaridaImg, quantidade: 3, rotulo: "3 🌼 Margaridas", cor: "#FBBF24" },
        { imagemUrl: cerejeiraImg, quantidade: 4, rotulo: "4 🌸 Cerejeiras", cor: "#F472B6" },
        { imagemUrl: margaridaImg, quantidade: 5, rotulo: "5 🌼 Margaridas", cor: "#FBBF24" },
        { imagemUrl: cerejeiraImg, quantidade: 6, rotulo: "6 🌸 Cerejeiras", cor: "#F472B6" },
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
