import type { Aula } from "../types";
import macaImg from "@/assets/neuro-treino/objetos/maca.png";
import bananaImg from "@/assets/neuro-treino/objetos/banana.png";
import boloImg from "@/assets/neuro-treino/objetos/bolo.png";
import doceImg from "@/assets/neuro-treino/objetos/doce.png";
import moedaImg from "@/assets/neuro-treino/objetos/moeda.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import presenteImg from "@/assets/neuro-treino/objetos/presente.png";

/**
 * EF01MA09 — Aula 009 · Biblioteca Pedagógica Escola Brilha
 * 1º Ano · Matemática
 * BNCC: Identificar e comparar a ideia de DOBRO e METADE em situações
 * simples com apoio de materiais concretos.
 *
 * Missão do Dia: "O Festival das Frutas Mágicas".
 * Segue o gabarito TRAVADO da EF01MA02 — tudo visual, mini-jogos.
 */
const aula: Aula = {
  codigo: "EF01MA09",
  ano: "1º Ano",
  disciplina: "Matemática",
  titulo: "O Festival das Frutas Mágicas",

  narrativa: {
    titulo: "O Festival das Frutas Mágicas",
    contexto:
      "Na floresta do Brilha vai acontecer um grande festival, e cada animal precisa organizar suas frutas em DOBRO e METADE pra decorar as mesas.",
    problema:
      "Mas ninguém sabe direito como funciona… O que é dobro? O que é metade? Precisamos descobrir juntos pra salvar o festival!",
    convite:
      "Hoje vamos descobrir um truque da matemática que parece MÁGICA: dobro e metade. Bora começar?",
  },

  conhecimentosPrevios: [
    "Contar até 12.",
    "Somar dois grupos iguais (2+2, 3+3, 5+5).",
    "Dividir um grupo em duas partes iguais.",
  ],

  missao:
    "Entender o que é DOBRO (repetir a mesma quantidade) e METADE (dividir em duas partes iguais) usando frutas, moedas e objetos.",

  objetivos: [
    "Entender o que é dobro.",
    "Entender o que é metade.",
    "Comparar quantidades simples.",
    "Usar objetos para visualizar as relações.",
  ],

  motivacao:
    "Dobro e metade estão em todo lugar: dividir o bolo, repetir o lanche, dar pro amigo!",

  explicacao:
    "🍎 DOBRO é quando temos DUAS VEZES a mesma quantidade.\nExemplo: 3 + 3 = 6. O dobro de 3 é 6.\n\n🍌 METADE é quando dividimos algo em DUAS PARTES IGUAIS.\nExemplo: 8 dividido em 2 partes → 4 e 4. A metade de 8 é 4.\n\nDobro AUMENTA (repete). Metade DIVIDE (parte no meio).",

  explicacoesNiveis: {
    nivel1: "Dobro = repetir duas vezes. Metade = dividir em duas partes iguais.",
    nivel2:
      "Se você tem 2 balas e eu te dou o DOBRO, eu te dou 2 + 2 = 4 balas.",
    nivel3:
      "Se você tem 6 bolinhas e quer dar a METADE pro amigo, faz duas pilhas iguais: 3 e 3.",
    nivel4:
      "Dobro e metade são AMIGOS: metade de 10 é 5, e o dobro de 5 é 10. Vai e volta!",
  },

  exemploResolvido: {
    enunciado:
      "Brilha tem 3 maçãs. Qual é o DOBRO de maçãs que ele tem?",
    passos: [
      "Dobro = repetir a mesma quantidade duas vezes.",
      "Ele tem 3 maçãs. Vamos colocar mais 3 do lado.",
      "3 + 3 = 6.",
      "Resposta: o dobro de 3 é 6 maçãs.",
    ],
    resposta: "O dobro de 3 é 6 maçãs.",
    interativo: {
      tipo: "contagem",
      imagemUrl: macaImg,
      quantidade: 6,
      nomeItem: "maçã",
      nomeItemPlural: "maçãs",
      pergunta: "Quantas maçãs Brilha tem no DOBRO?",
    },
  },

  atividadeGuiada: {
    enunciado:
      "Um bolo de festival foi cortado em 6 fatias. Se dividirmos em 2 partes iguais, quantas fatias ficam em CADA parte?",
    resposta: "3 fatias — metade de 6 é 3.",
    explicacao:
      "Metade = dividir em 2 partes iguais. 6 fatias divididas em 2 pilhas = 3 + 3.",
    visual: {
      tipo: "grupos",
      pergunta: "Metade de 6 fatias é quanto em cada parte?",
      imagemUrl: boloImg,
      itemSingular: "fatia",
      itemPlural: "fatias",
      quantidadeGrupos: 2,
      itensPorGrupo: 3,
      opcoes: [2, 3, 4],
      correta: 1,
    },
  },

  exercicios: [
    { enunciado: "Dobro de 2 = ?", resposta: "4", dica: "2 + 2 = 4." },
    { enunciado: "Dobro de 5 = ?", resposta: "10", dica: "5 + 5 = 10." },
    { enunciado: "Metade de 4 = ?", resposta: "2", dica: "4 dividido em 2 pilhas iguais: 2 e 2." },
    { enunciado: "Metade de 10 = ?", resposta: "5", dica: "5 + 5 = 10, então metade de 10 é 5." },
    { enunciado: "Dobro de 4 = ?", resposta: "8", dica: "4 + 4 = 8." },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: descubra o DOBRO e a METADE em cada historinha do festival!",
    resposta: "Dobro de 1 = 2 · Dobro de 7 = 14 · Metade de 10 = 5 · Metade de 4 = 2.",
    visual: {
      cena: [
        { personagem: "Cesta de maçãs", itemImagemUrl: macaImg, quantidade: 6, cor: "#EF4444" },
        { personagem: "Cacho de bananas", itemImagemUrl: bananaImg, quantidade: 8, cor: "#FBBF24" },
        { personagem: "Bandeja de bolos", itemImagemUrl: boloImg, quantidade: 4, cor: "#F472B6" },
      ],
      perguntas: [
        {
          pergunta: "Dobro de 1 é:",
          opcoes: ["1", "2", "3"],
          correta: 1,
          explicacao: "1 + 1 = 2. O dobro de 1 é 2.",
          visual: {
            tipo: "comparar",
            lados: [
              { imagemUrl: macaImg, quantidade: 1, rotulo: "Tinha 1", cor: "#EF4444" },
              { imagemUrl: macaImg, quantidade: 1, rotulo: "Mais 1 (dobro)", cor: "#34D399" },
            ],
          },
        },
        {
          pergunta: "Dobro de 7 é:",
          opcoes: ["12", "14", "16"],
          correta: 1,
          explicacao: "7 + 7 = 14. O dobro de 7 é 14.",
          visual: {
            tipo: "comparar",
            lados: [
              { imagemUrl: bananaImg, quantidade: 7, rotulo: "Tinha 7", cor: "#FBBF24" },
              { imagemUrl: bananaImg, quantidade: 7, rotulo: "Mais 7 (dobro)", cor: "#34D399" },
            ],
          },
        },
        {
          pergunta: "Metade de 10 é:",
          opcoes: ["4", "5", "6"],
          correta: 1,
          explicacao: "10 dividido em 2 partes iguais: 5 e 5. Metade é 5.",
          visual: {
            tipo: "comparar",
            lados: [
              { imagemUrl: moedaImg, quantidade: 5, rotulo: "Parte 1", cor: "#FBBF24" },
              { imagemUrl: moedaImg, quantidade: 5, rotulo: "Parte 2", cor: "#60A5FA" },
            ],
          },
        },
        {
          pergunta: "Metade de 4 é:",
          opcoes: ["1", "2", "3"],
          correta: 1,
          explicacao: "4 dividido em 2 partes iguais: 2 e 2. Metade é 2.",
          visual: {
            tipo: "comparar",
            lados: [
              { imagemUrl: doceImg, quantidade: 2, rotulo: "Parte 1", cor: "#F472B6" },
              { imagemUrl: doceImg, quantidade: 2, rotulo: "Parte 2", cor: "#60A5FA" },
            ],
          },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "DOBRO = repetir a mesma quantidade (n + n).",
      "METADE = dividir em duas partes iguais.",
      "Dobro e metade são amigos: metade desfaz o dobro.",
      "Sempre dá pra checar com objetos: separa em duas pilhas iguais.",
    ],
    dica: "Se as duas pilhas ficarem iguais, é metade. Se você repetir a pilha, é dobro.",
  },

  quiz: [
    {
      pergunta: "Dobro de 6 é:",
      opcoes: ["8", "10", "12"],
      correta: 2,
      explicacao: "6 + 6 = 12.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: macaImg, quantidade: 6, rotulo: "Tinha 6", cor: "#EF4444" },
          { imagemUrl: macaImg, quantidade: 6, rotulo: "Mais 6 (dobro)", cor: "#34D399" },
        ],
      },
    },
    {
      pergunta: "Metade de 8 é:",
      opcoes: ["2", "4", "6"],
      correta: 1,
      explicacao: "8 dividido em 2 partes iguais: 4 e 4.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: bananaImg, quantidade: 4, rotulo: "Parte 1", cor: "#FBBF24" },
          { imagemUrl: bananaImg, quantidade: 4, rotulo: "Parte 2", cor: "#60A5FA" },
        ],
      },
    },
    {
      pergunta: "Se algo é dividido em 2 partes iguais, isso é:",
      opcoes: ["Dobro", "Metade", "Soma"],
      correta: 1,
      explicacao: "Dividir em 2 partes iguais é METADE.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: boloImg, quantidade: 3, rotulo: "Parte 1", cor: "#F472B6" },
          { imagemUrl: boloImg, quantidade: 3, rotulo: "Parte 2", cor: "#60A5FA" },
        ],
      },
    },
    {
      pergunta: "Dobro significa:",
      opcoes: ["dividir", "repetir duas vezes", "tirar metade"],
      correta: 1,
      explicacao: "Dobro = repetir a mesma quantidade duas vezes.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: estrelaImg, quantidade: 3, rotulo: "Tinha 3", cor: "#FBBF24" },
          { imagemUrl: estrelaImg, quantidade: 3, rotulo: "Mais 3 (dobro)", cor: "#34D399" },
        ],
      },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Mestre do Dobro e Metade! Você aprendeu que DOBRO é repetir e METADE é dividir em duas partes iguais. Missão em Família: pegue 6 tampinhas em casa e descubra o DOBRO. Depois pegue 10 feijões e descubra a METADE.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Antigamente, comerciantes usavam pedras e sementes pra calcular dobro e metade das trocas — muito antes de existir dinheiro organizado. Matemática antiga já era mágica!",
  },

  interativas: [
    // ==== FASE 1: Dobro das maçãs (3 → 6) ====
    {
      tipo: "operacao",
      titulo: "Fase 1 · O Dobro das Maçãs",
      instrucao:
        "Brilha tem 3 maçãs. Aperte MOSTRAR pra ver o DOBRO aparecendo (3 + 3).",
      operacao: "soma",
      imagemUrl: macaImg,
      itemPlural: "maçãs",
      a: 3,
      b: 3,
      cor: "#EF4444",
      legenda: "Dobro de 3 = 3 + 3 = 6",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Qual é o dobro?",
      instrucao: "Brilha tinha 3 maçãs. Qual é o DOBRO?",
      grupos: [
        { imagemUrl: macaImg, quantidade: 3, rotulo: "Tinha 3" },
        { imagemUrl: macaImg, quantidade: 3, rotulo: "Mais 3 (dobro)" },
      ],
      pergunta: "Dobro de 3 = ?",
      opcoes: ["4", "5", "6"],
      correta: 2,
      acerto: "Isso! 3 + 3 = 6. O dobro de 3 é 6 maçãs!",
      erro: "Dobro é repetir. Conte 3 e mais 3: 1, 2, 3… 4, 5, 6.",
    },

    // ==== FASE 2: Metade do bolo (6 → 3+3) ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · A Metade do Bolo",
      instrucao:
        "Um bolo do festival tem 6 fatias. Se dividir em 2 partes IGUAIS, quantas fatias ficam em cada parte?",
      grupos: [
        { imagemUrl: boloImg, quantidade: 3, rotulo: "Parte 1" },
        { imagemUrl: boloImg, quantidade: 3, rotulo: "Parte 2" },
      ],
      pergunta: "Metade de 6 = ?",
      opcoes: ["2", "3", "4"],
      correta: 1,
      acerto: "🎂 Boa! 3 + 3 = 6. A metade de 6 é 3 fatias em cada parte.",
      erro: "Divida em duas pilhas iguais: 3 e 3. Metade de 6 é 3.",
    },

    // ==== FASE 3: Arraste e divida (10 balas em 2 caixas) ====
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Arraste e Divida as Balas",
      instrucao:
        "Tem 10 balas! Arraste 5 pra CAIXA 1 e 5 pra CAIXA 2 pra dividir em duas partes iguais. Depois descubra a METADE.",
      itemImagem: doceImg,
      alvosVisuais: [
        { nome: "Caixa 1 (metade)", cor: "#F472B6", capacidade: 5, imagemUrl: presenteImg },
        { nome: "Caixa 2 (metade)", cor: "#60A5FA", capacidade: 5, imagemUrl: presenteImg },
      ],
      pares: [
        { item: "Bala 1", alvo: "Caixa 1 (metade)" },
        { item: "Bala 2", alvo: "Caixa 1 (metade)" },
        { item: "Bala 3", alvo: "Caixa 1 (metade)" },
        { item: "Bala 4", alvo: "Caixa 1 (metade)" },
        { item: "Bala 5", alvo: "Caixa 1 (metade)" },
        { item: "Bala 6", alvo: "Caixa 2 (metade)" },
        { item: "Bala 7", alvo: "Caixa 2 (metade)" },
        { item: "Bala 8", alvo: "Caixa 2 (metade)" },
        { item: "Bala 9", alvo: "Caixa 2 (metade)" },
        { item: "Bala 10", alvo: "Caixa 2 (metade)" },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · Quanto em cada caixa?",
      instrucao: "Você dividiu 10 balas em 2 caixas iguais. Quanto ficou em cada caixa?",
      grupos: [
        { imagemUrl: doceImg, quantidade: 5, rotulo: "Caixa 1" },
        { imagemUrl: doceImg, quantidade: 5, rotulo: "Caixa 2" },
      ],
      pergunta: "Metade de 10 = ?",
      opcoes: ["4", "5", "6"],
      correta: 1,
      acerto: "Perfeito! Metade de 10 é 5. 5 + 5 = 10.",
      erro: "Duas caixas iguais com 10 balas: 5 em cada. Metade de 10 é 5.",
    },

    // ==== FASE 4: Dobro de 4 (4 → 8) ====
    {
      tipo: "operacao",
      titulo: "Fase 4 · Qual é o dobro de 4?",
      instrucao: "Brilha mostra 4 bananas. Aperte MOSTRAR pra ver o DOBRO.",
      operacao: "soma",
      imagemUrl: bananaImg,
      itemPlural: "bananas",
      a: 4,
      b: 4,
      cor: "#FBBF24",
      legenda: "Dobro de 4 = 4 + 4 = 8",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 4 · Escolha o dobro",
      instrucao: "Qual é o DOBRO de 4?",
      grupos: [
        { imagemUrl: bananaImg, quantidade: 4, rotulo: "Tinha 4" },
        { imagemUrl: bananaImg, quantidade: 4, rotulo: "Mais 4 (dobro)" },
      ],
      pergunta: "Dobro de 4 = ?",
      opcoes: ["6", "8", "10"],
      correta: 1,
      acerto: "🎉 Muito bem! 4 + 4 = 8. Dobro de 4 é 8!",
      erro: "Dobro é repetir: 4 e mais 4. Conte tudo: 8.",
    },

    // ==== FASE 5: Complete (metade de 12, metade de 6, dobro de 5, dobro de 2) ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Metade de 12",
      instrucao: "Divida 12 moedas em 2 pilhas iguais.",
      grupos: [
        { imagemUrl: moedaImg, quantidade: 6, rotulo: "Pilha 1" },
        { imagemUrl: moedaImg, quantidade: 6, rotulo: "Pilha 2" },
      ],
      pergunta: "Metade de 12 = ?",
      opcoes: ["5", "6", "7"],
      correta: 1,
      acerto: "Boa! 6 + 6 = 12. Metade de 12 é 6.",
      erro: "Duas pilhas iguais com 12: 6 em cada.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Metade de 6",
      instrucao: "Divida 6 estrelas em 2 pilhas iguais.",
      grupos: [
        { imagemUrl: estrelaImg, quantidade: 3, rotulo: "Pilha 1" },
        { imagemUrl: estrelaImg, quantidade: 3, rotulo: "Pilha 2" },
      ],
      pergunta: "Metade de 6 = ?",
      opcoes: ["2", "3", "4"],
      correta: 1,
      acerto: "Isso! 3 + 3 = 6.",
      erro: "Divida em duas pilhas iguais: 3 e 3.",
    },
    {
      tipo: "operacao",
      titulo: "Fase 5 · Dobro de 5",
      instrucao: "5 estrelas. Aperte MOSTRAR pra ver o DOBRO.",
      operacao: "soma",
      imagemUrl: estrelaImg,
      itemPlural: "estrelas",
      a: 5,
      b: 5,
      cor: "#FBBF24",
      legenda: "Dobro de 5 = 5 + 5 = 10",
    },
    {
      tipo: "operacao",
      titulo: "Fase 5 · Dobro de 2",
      instrucao: "2 doces. Aperte MOSTRAR pra ver o DOBRO.",
      operacao: "soma",
      imagemUrl: doceImg,
      itemPlural: "doces",
      a: 2,
      b: 2,
      cor: "#F472B6",
      legenda: "Dobro de 2 = 2 + 2 = 4",
    },

    // ==== MINI JOGO: Fábrica de Doces (ordenar dobro/metade) ====
    {
      tipo: "ordenar",
      titulo: "Mini Jogo · Fábrica de Doces",
      instrucao:
        "Arraste as contas do MENOR resultado (em cima) pro MAIOR (embaixo). Todas viraram doces na fábrica!",
      itens: [
        "Metade de 4 = 2",
        "Dobro de 2 = 4",
        "Metade de 12 = 6",
        "Dobro de 5 = 10",
      ],
      imagens: [
        { imagemUrl: doceImg, quantidade: 2, rotulo: "Metade de 4 = 2", cor: "#F472B6" },
        { imagemUrl: doceImg, quantidade: 4, rotulo: "Dobro de 2 = 4", cor: "#F472B6" },
        { imagemUrl: doceImg, quantidade: 6, rotulo: "Metade de 12 = 6", cor: "#F472B6" },
        { imagemUrl: doceImg, quantidade: 10, rotulo: "Dobro de 5 = 10", cor: "#F472B6" },
      ],
    },

    // ==== MINI JOGO 2: Ligue dobro com resultado ====
    {
      tipo: "ligar",
      titulo: "Mini Jogo · Ligue o dobro certo",
      instrucao: "Ligue cada quantidade ao seu DOBRO correspondente.",
      pares: [
        { a: "Dobro de 1", b: "2", aImagem: macaImg, aQuantidade: 1 },
        { a: "Dobro de 3", b: "6", aImagem: macaImg, aQuantidade: 3 },
        { a: "Dobro de 4", b: "8", aImagem: macaImg, aQuantidade: 4 },
        { a: "Dobro de 5", b: "10", aImagem: macaImg, aQuantidade: 5 },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Dobro de 2 é:",
        opcoes: ["3", "4", "5"],
        correta: 1,
        explicacao: "2 + 2 = 4.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: doceImg, quantidade: 2, rotulo: "Tinha 2", cor: "#F472B6" },
            { imagemUrl: doceImg, quantidade: 2, rotulo: "Mais 2 (dobro)", cor: "#34D399" },
          ],
        },
      },
      {
        pergunta: "Metade de 2 é:",
        opcoes: ["1", "2", "3"],
        correta: 0,
        explicacao: "2 dividido em 2 partes iguais: 1 e 1.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: macaImg, quantidade: 1, rotulo: "Parte 1", cor: "#EF4444" },
            { imagemUrl: macaImg, quantidade: 1, rotulo: "Parte 2", cor: "#60A5FA" },
          ],
        },
      },
    ],
    medio: [
      {
        pergunta: "Dobro de 5 é:",
        opcoes: ["8", "9", "10"],
        correta: 2,
        explicacao: "5 + 5 = 10.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: estrelaImg, quantidade: 5, rotulo: "Tinha 5", cor: "#FBBF24" },
            { imagemUrl: estrelaImg, quantidade: 5, rotulo: "Mais 5 (dobro)", cor: "#34D399" },
          ],
        },
      },
      {
        pergunta: "Metade de 8 é:",
        opcoes: ["3", "4", "5"],
        correta: 1,
        explicacao: "4 + 4 = 8. Metade de 8 é 4.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: bananaImg, quantidade: 4, rotulo: "Parte 1", cor: "#FBBF24" },
            { imagemUrl: bananaImg, quantidade: 4, rotulo: "Parte 2", cor: "#60A5FA" },
          ],
        },
      },
    ],
    dificil: [
      {
        pergunta: "Metade de 12 é:",
        opcoes: ["5", "6", "7"],
        correta: 1,
        explicacao: "6 + 6 = 12. Metade de 12 é 6.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: moedaImg, quantidade: 6, rotulo: "Parte 1", cor: "#FBBF24" },
            { imagemUrl: moedaImg, quantidade: 6, rotulo: "Parte 2", cor: "#60A5FA" },
          ],
        },
      },
      {
        pergunta: "Dobro de 7 é:",
        opcoes: ["12", "13", "14"],
        correta: 2,
        explicacao: "7 + 7 = 14.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: bananaImg, quantidade: 7, rotulo: "Tinha 7", cor: "#FBBF24" },
            { imagemUrl: bananaImg, quantidade: 7, rotulo: "Mais 7 (dobro)", cor: "#34D399" },
          ],
        },
      },
    ],
  },

  proximaHabilidade: { codigo: "EF01MA10" },
};

export default aula;
