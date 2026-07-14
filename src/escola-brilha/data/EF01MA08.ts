import type { Aula } from "../types";
import { url as moedaImg } from "@/assets/neuro-treino/objetos/moeda.png.asset.json";
import { url as bauImg } from "@/assets/neuro-treino/objetos/bau.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as macaImg } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as castanhaImg } from "@/assets/neuro-treino/objetos/castanha.png.asset.json";
import { url as blocoImg } from "@/assets/neuro-treino/objetos/bloco.png.asset.json";

/**
 * EF01MA08 — Aula 008 · Biblioteca Pedagógica Escola Brilha
 * Ensino Fundamental I · 1º Ano · Matemática
 * BNCC: Resolver e elaborar problemas de adição e subtração com números
 * naturais de até duas ordens, utilizando estratégias pessoais ou convencionais.
 *
 * Missão do Dia: "O Mistério das Peças Perdidas".
 * Segue o gabarito TRAVADO da EF01MA02 — tudo visual, mini-jogos e OperacaoVisual.
 */
const aula: Aula = {
  codigo: "EF01MA08",
  ano: "1º Ano",
  disciplina: "Matemática",
  titulo: "O Mistério das Peças Perdidas",

  narrativa: {
    titulo: "O Mistério das Peças Perdidas",
    contexto:
      "O esquilo Brilha estava organizando seus brinquedos mágicos, mas algumas peças desapareceram do baú!",
    problema:
      "Precisamos descobrir o que SUMIU (tirar) e o que foi ENCONTRADO (juntar) pra fechar as contas do baú.",
    convite:
      "Às vezes eu perco coisas… às vezes eu encontro coisas. Vem descobrir o que mudou no meu baú?",
  },

  conhecimentosPrevios: [
    "Somar dois grupos até 10.",
    "Tirar (subtrair) até 10.",
    "Reconhecer os sinais + (juntar) e − (tirar).",
  ],

  missao:
    "Resolver problemas simples de adição e subtração, entendendo situações de 'ganhou' (+) e 'perdeu' (−), usando estratégias próprias pra calcular.",

  objetivos: [
    "Resolver problemas simples de adição.",
    "Resolver problemas simples de subtração.",
    "Entender situações de 'ganhou' e 'perdeu'.",
    "Escolher a operação certa para cada história.",
  ],

  motivacao:
    "Todo dia a gente ganha e perde coisas. A matemática nos ajuda a saber quanto ficou!",

  explicacao:
    "Problemas de matemática são pequenas HISTÓRIAS.\n\n➕ JUNTAR / GANHAR: quando alguém RECEBE mais coisas, usamos a ADIÇÃO (+).\n\n➖ TIRAR / PERDER: quando alguém PERDE ou DÁ coisas, usamos a SUBTRAÇÃO (−).\n\nO segredo é escutar a história com calma antes de calcular:\n• Ganhou? Some.\n• Perdeu? Tira.",

  explicacoesNiveis: {
    nivel1: "Ganhou → soma (+). Perdeu → tira (−).",
    nivel2:
      "Se você tinha 5 balas e ganhou 3, você conta 5, 6, 7, 8. Ficam 8. Isso é +.",
    nivel3:
      "Se você tinha 10 moedas e perdeu 4, tira 4 dedos e conta o que sobrou: 6. Isso é −.",
    nivel4:
      "Às vezes a história tem DUAS PARTES: ganhou 2 e depois comeu 3. Faz na ordem, uma de cada vez.",
  },

  exemploResolvido: {
    enunciado:
      "Brilha tinha 5 estrelas. Ganhou mais 3 estrelas. Quantas estrelas ele tem agora?",
    passos: [
      "A história diz 'GANHOU', então usamos + (soma).",
      "Comece pelo total que ele já tinha: 5.",
      "Conte mais 3 a partir do 5: 6, 7, 8.",
      "Resposta: 8 estrelas.",
    ],
    resposta: "5 + 3 = 8 estrelas.",
    interativo: {
      tipo: "contagem",
      imagemUrl: estrelaImg,
      quantidade: 8,
      nomeItem: "estrela",
      nomeItemPlural: "estrelas",
      pergunta: "Quantas estrelas o Brilha tem depois de ganhar mais 3?",
    },
  },

  atividadeGuiada: {
    enunciado:
      "O baú tinha 10 moedas. Brilha perdeu 4. Toque nas moedas que ficaram e descubra quantas sobraram.",
    resposta: "6 moedas — 10 − 4 = 6.",
    explicacao:
      "Perdeu = subtração. Começamos com 10 e tiramos 4. Sobram 6 moedas no baú.",
    visual: {
      tipo: "grupos",
      pergunta: "Quantas moedas ficaram no baú depois de perder 4?",
      imagemUrl: moedaImg,
      itemSingular: "moeda",
      itemPlural: "moedas",
      quantidadeGrupos: 1,
      itensPorGrupo: 6,
      opcoes: [5, 6, 7],
      correta: 1,
    },
  },

  exercicios: [
    { enunciado: "7 + 2 = ?", resposta: "9", dica: "Comece no 7 e conte mais 2: 8, 9." },
    { enunciado: "9 − 3 = ?", resposta: "6", dica: "Comece no 9 e tire 3: 8, 7, 6." },
    { enunciado: "6 + 4 = ?", resposta: "10", dica: "6 + 4 completa a dezena: 10." },
    { enunciado: "10 − 5 = ?", resposta: "5", dica: "Metade de 10." },
    { enunciado: "5 + 5 = ?", resposta: "10", dica: "Duas mãos cheias!" },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: leia cada historinha e descubra o resultado. Cuidado pra ver se GANHOU ou PERDEU!",
    resposta: "6+3=9 · 9−4=5 · 5+5=10 · 8−6=2.",
    visual: {
      cena: [
        { personagem: "Baú do Brilha", personagemImagemUrl: bauImg, itemImagemUrl: moedaImg, quantidade: 9, cor: "#FBBF24" },
        { personagem: "Cesta de maçãs", itemImagemUrl: macaImg, quantidade: 5, cor: "#EF4444" },
        { personagem: "Saco de castanhas", itemImagemUrl: castanhaImg, quantidade: 2, cor: "#A16207" },
      ],
      perguntas: [
        {
          pergunta: "Brilha tinha 6 moedas e ganhou 3. Ficou com quantas?",
          opcoes: ["8", "9", "10"],
          correta: 1,
          explicacao: "Ganhou → soma. 6 + 3 = 9.",
          visual: {
            tipo: "comparar",
            lados: [
              { imagemUrl: moedaImg, quantidade: 6, rotulo: "Tinha 6", cor: "#FBBF24" },
              { imagemUrl: moedaImg, quantidade: 3, rotulo: "Ganhou 3", cor: "#34D399" },
            ],
          },
        },
        {
          pergunta: "Tinha 9 maçãs e comeu 4. Sobraram quantas?",
          opcoes: ["4", "5", "6"],
          correta: 1,
          explicacao: "Comeu → subtração. 9 − 4 = 5.",
          visual: {
            tipo: "comparar",
            lados: [
              { imagemUrl: macaImg, quantidade: 9, rotulo: "Tinha 9", cor: "#EF4444" },
              { imagemUrl: macaImg, quantidade: 4, rotulo: "Comeu 4", cor: "#F472B6" },
            ],
          },
        },
        {
          pergunta: "5 amigos chegaram e mais 5 se juntaram. Quantos amigos?",
          opcoes: ["9", "10", "11"],
          correta: 1,
          explicacao: "Juntou → soma. 5 + 5 = 10.",
          visual: {
            tipo: "comparar",
            lados: [
              { imagemUrl: estrelaImg, quantidade: 5, rotulo: "5", cor: "#FBBF24" },
              { imagemUrl: estrelaImg, quantidade: 5, rotulo: "5", cor: "#60A5FA" },
            ],
          },
        },
        {
          pergunta: "Tinha 8 castanhas e perdeu 6. Sobraram quantas?",
          opcoes: ["1", "2", "3"],
          correta: 1,
          explicacao: "Perdeu → subtração. 8 − 6 = 2.",
          visual: {
            tipo: "comparar",
            lados: [
              { imagemUrl: castanhaImg, quantidade: 8, rotulo: "Tinha 8", cor: "#A16207" },
              { imagemUrl: castanhaImg, quantidade: 6, rotulo: "Perdeu 6", cor: "#F472B6" },
            ],
          },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "GANHOU / JUNTOU → usar + (adição).",
      "PERDEU / TIROU → usar − (subtração).",
      "Leia a história inteira antes de calcular.",
      "Dá pra usar dedos, moedas ou desenhos pra ajudar.",
    ],
    dica: "Sublinhe as palavras 'ganhou', 'ficou com', 'perdeu', 'sobraram' — elas dizem qual sinal usar.",
  },

  quiz: [
    {
      pergunta: "Se tinha 7 e ganhou 2, fica:",
      opcoes: ["8", "9", "10"],
      correta: 1,
      explicacao: "Ganhou → soma. 7 + 2 = 9.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: estrelaImg, quantidade: 7, rotulo: "Tinha 7", cor: "#FBBF24" },
          { imagemUrl: estrelaImg, quantidade: 2, rotulo: "Ganhou 2", cor: "#34D399" },
        ],
      },
    },
    {
      pergunta: "10 − 5 = ?",
      opcoes: ["4", "5", "6"],
      correta: 1,
      explicacao: "Metade de 10 é 5.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: moedaImg, quantidade: 10, rotulo: "Tinha 10", cor: "#FBBF24" },
          { imagemUrl: moedaImg, quantidade: 5, rotulo: "Tirou 5", cor: "#F472B6" },
        ],
      },
    },
    {
      pergunta: "Qual operação usamos quando algo SOME?",
      opcoes: ["Adição (+)", "Subtração (−)", "Nenhuma"],
      correta: 1,
      explicacao: "Some / perdeu / tirou = subtração (−).",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: castanhaImg, quantidade: 5, rotulo: "Tinha 5", cor: "#A16207" },
          { imagemUrl: castanhaImg, quantidade: 2, rotulo: "Sumiu 2", cor: "#F472B6" },
        ],
      },
    },
    {
      pergunta: "Qual operação representa 'ganhou 3'?",
      opcoes: ["− 3", "+ 3", "× 3"],
      correta: 1,
      explicacao: "Ganhar sempre é soma (+3).",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: moedaImg, quantidade: 4, rotulo: "Tinha", cor: "#FBBF24" },
          { imagemUrl: moedaImg, quantidade: 3, rotulo: "Ganhou 3", cor: "#34D399" },
        ],
      },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Detetive das Mudanças! Você aprendeu a resolver problemas de adição e subtração. Missão em Família: alguém coloca objetos (brinquedos) numa caixa e depois tira alguns. A criança descobre quanto tinha antes, quanto ficou e quanto mudou.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "A matemática começou justamente assim: gente contando animais, dividindo comida e trocando objetos. Cada conta é uma pequena história do dia a dia!",
  },

  interativas: [
    // ==== FASE 1: O que entrou no baú? (5 + 3) ====
    {
      tipo: "operacao",
      titulo: "Fase 1 · O que entrou no baú?",
      instrucao:
        "Brilha tinha 5 estrelas e ganhou mais 3. Aperte MOSTRAR pra ver as estrelas juntando.",
      operacao: "soma",
      imagemUrl: estrelaImg,
      itemPlural: "estrelas",
      a: 5,
      b: 3,
      cor: "#FBBF24",
      legenda: "5 + 3 = 8",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Quantas estrelas agora?",
      instrucao: "Some as estrelas que ele tinha com as que ganhou.",
      grupos: [
        { imagemUrl: estrelaImg, quantidade: 5, rotulo: "Tinha 5" },
        { imagemUrl: estrelaImg, quantidade: 3, rotulo: "Ganhou 3" },
      ],
      pergunta: "5 + 3 = ?",
      opcoes: ["6", "7", "8"],
      correta: 2,
      acerto: "Muito bem! 5 + 3 = 8 estrelas. Ganhar é sempre somar!",
      erro: "Comece no 5 e conte mais 3: 6, 7, 8.",
    },

    // ==== FASE 2: O que saiu? (10 − 4) ====
    {
      tipo: "operacao",
      titulo: "Fase 2 · O que saiu do baú?",
      instrucao:
        "O baú tinha 10 moedas e Brilha PERDEU 4. Aperte MOSTRAR pra ver as moedas sumindo.",
      operacao: "subtracao",
      imagemUrl: moedaImg,
      itemPlural: "moedas",
      a: 10,
      b: 4,
      cor: "#FBBF24",
      legenda: "10 − 4 = 6",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Quantas sobraram?",
      instrucao: "10 moedas no total, 4 perdidas. Quantas ficaram no baú?",
      grupos: [
        { imagemUrl: moedaImg, quantidade: 6, rotulo: "Ficaram" },
        { imagemUrl: moedaImg, quantidade: 4, rotulo: "Perdeu" },
      ],
      pergunta: "10 − 4 = ?",
      opcoes: ["5", "6", "7"],
      correta: 1,
      acerto: "🎉 Isso! Sobraram 6 moedas. Perder é sempre tirar.",
      erro: "Comece no 10 e tire 4: 9, 8, 7, 6.",
    },

    // ==== FASE 3: Problema da Floresta (6 + 2 − 3) ====
    {
      tipo: "operacao",
      titulo: "Fase 3 · Problema da Floresta (parte 1)",
      instrucao:
        "Os coelhos tinham 6 cenouras e GANHARAM mais 2. Aperte MOSTRAR pra somar.",
      operacao: "soma",
      imagemUrl: castanhaImg,
      itemPlural: "cenouras",
      a: 6,
      b: 2,
      cor: "#F97316",
      legenda: "6 + 2 = 8",
    },
    {
      tipo: "operacao",
      titulo: "Fase 3 · Problema da Floresta (parte 2)",
      instrucao:
        "Agora eram 8 cenouras. Os coelhos COMERAM 3. Aperte MOSTRAR pra ver sumindo.",
      operacao: "subtracao",
      imagemUrl: castanhaImg,
      itemPlural: "cenouras",
      a: 8,
      b: 3,
      cor: "#F97316",
      legenda: "8 − 3 = 5",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · Quantas cenouras sobraram?",
      instrucao: "Começou com 6, ganhou 2, comeu 3. Quantas ficam?",
      grupos: [
        { imagemUrl: castanhaImg, quantidade: 5, rotulo: "Sobraram" },
      ],
      pergunta: "6 + 2 − 3 = ?",
      opcoes: ["4", "5", "6"],
      correta: 1,
      acerto: "Boa! 6 + 2 = 8, depois 8 − 3 = 5. Sobraram 5 cenouras.",
      erro: "Primeiro some: 6 + 2 = 8. Depois tire 3: 8 − 3 = 5.",
    },

    // ==== FASE 4: Complete a operação (arrastar valores) ====
    {
      tipo: "operacao",
      titulo: "Fase 4 · Complete: 7 + 2",
      instrucao: "Aperte MOSTRAR pra descobrir 7 + 2.",
      operacao: "soma",
      imagemUrl: estrelaImg,
      itemPlural: "estrelas",
      a: 7,
      b: 2,
      cor: "#FBBF24",
      legenda: "7 + 2 = 9",
    },
    {
      tipo: "operacao",
      titulo: "Fase 4 · Complete: 9 − 3",
      instrucao: "Aperte MOSTRAR pra descobrir 9 − 3.",
      operacao: "subtracao",
      imagemUrl: macaImg,
      itemPlural: "maçãs",
      a: 9,
      b: 3,
      cor: "#EF4444",
      legenda: "9 − 3 = 6",
    },
    {
      tipo: "operacao",
      titulo: "Fase 4 · Complete: 6 + 4",
      instrucao: "Aperte MOSTRAR pra descobrir 6 + 4.",
      operacao: "soma",
      imagemUrl: moedaImg,
      itemPlural: "moedas",
      a: 6,
      b: 4,
      cor: "#FBBF24",
      legenda: "6 + 4 = 10",
    },
    {
      tipo: "operacao",
      titulo: "Fase 4 · Complete: 10 − 5",
      instrucao: "Aperte MOSTRAR pra descobrir 10 − 5.",
      operacao: "subtracao",
      imagemUrl: castanhaImg,
      itemPlural: "castanhas",
      a: 10,
      b: 5,
      cor: "#A16207",
      legenda: "10 − 5 = 5",
    },

    // ==== FASE 5: Escolha a operação correta ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Escolha a operação",
      instrucao:
        "Brilha tinha 8 pedras e PERDEU 2. Qual conta representa essa história?",
      grupos: [
        { imagemUrl: blocoImg, quantidade: 8, rotulo: "Tinha 8" },
        { imagemUrl: blocoImg, quantidade: 2, rotulo: "Perdeu 2" },
      ],
      pergunta: "Qual operação representa isso?",
      opcoes: ["8 + 2", "8 − 2", "2 + 8"],
      correta: 1,
      acerto: "🏆 Perfeito! PERDEU = tirar. 8 − 2 = 6 pedras.",
      erro: "Perdeu significa que ficou com MENOS. Então usamos o sinal − (menos).",
    },

    // ==== MINI JOGO 1: Aventura no Baú (arrastar entrando/saindo) ====
    {
      tipo: "arrastar",
      titulo: "Mini Jogo · Aventura no Baú",
      instrucao:
        "Arraste as 5 moedas ENCONTRADAS pro baú do Brilha. Depois arraste as 3 PERDIDAS pro saco. Ganhou entra, perdeu sai!",
      itemImagem: moedaImg,
      alvosVisuais: [
        { nome: "Baú (ganhou +5)", cor: "#34D399", capacidade: 5, imagemUrl: bauImg },
        { nome: "Saco (perdeu −3)", cor: "#F472B6", capacidade: 3, imagemUrl: bauImg },
      ],
      pares: [
        { item: "Moeda 1", alvo: "Baú (ganhou +5)" },
        { item: "Moeda 2", alvo: "Baú (ganhou +5)" },
        { item: "Moeda 3", alvo: "Baú (ganhou +5)" },
        { item: "Moeda 4", alvo: "Baú (ganhou +5)" },
        { item: "Moeda 5", alvo: "Baú (ganhou +5)" },
        { item: "Moeda 6", alvo: "Saco (perdeu −3)" },
        { item: "Moeda 7", alvo: "Saco (perdeu −3)" },
        { item: "Moeda 8", alvo: "Saco (perdeu −3)" },
      ],
    },

    // ==== MINI JOGO 2: Ordene do MENOR pro MAIOR resultado ====
    {
      tipo: "ordenar",
      titulo: "Mini Jogo · Ordene os resultados",
      instrucao:
        "Arraste as contas de cima pra baixo. Coloque o MENOR resultado em cima e o MAIOR embaixo.",
      itens: ["2 + 1 = 3", "3 + 2 = 5", "4 + 3 = 7", "5 + 4 = 9"],
      imagens: [
        { imagemUrl: moedaImg, quantidade: 2, imagemUrl2: estrelaImg, quantidade2: 1, rotulo: "2 + 1 = 3", cor: "#60A5FA", cor2: "#FBBF24" },
        { imagemUrl: moedaImg, quantidade: 3, imagemUrl2: estrelaImg, quantidade2: 2, rotulo: "3 + 2 = 5", cor: "#60A5FA", cor2: "#FBBF24" },
        { imagemUrl: moedaImg, quantidade: 4, imagemUrl2: estrelaImg, quantidade2: 3, rotulo: "4 + 3 = 7", cor: "#60A5FA", cor2: "#FBBF24" },
        { imagemUrl: moedaImg, quantidade: 5, imagemUrl2: estrelaImg, quantidade2: 4, rotulo: "5 + 4 = 9", cor: "#60A5FA", cor2: "#FBBF24" },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Tinha 4 e ganhou 2. Ficou com:",
        opcoes: ["5", "6", "7"],
        correta: 1,
        explicacao: "Ganhou → soma. 4 + 2 = 6.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: moedaImg, quantidade: 4, rotulo: "Tinha 4", cor: "#FBBF24" },
            { imagemUrl: moedaImg, quantidade: 2, rotulo: "Ganhou 2", cor: "#34D399" },
          ],
        },
      },
      {
        pergunta: "Tinha 5 e perdeu 2. Sobraram:",
        opcoes: ["2", "3", "4"],
        correta: 1,
        explicacao: "Perdeu → tira. 5 − 2 = 3.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: macaImg, quantidade: 5, rotulo: "Tinha 5", cor: "#EF4444" },
            { imagemUrl: macaImg, quantidade: 2, rotulo: "Perdeu 2", cor: "#F472B6" },
          ],
        },
      },
      {
        pergunta: "3 + 3 = ?",
        opcoes: ["5", "6", "7"],
        correta: 1,
        explicacao: "3 + 3 = 6.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: estrelaImg, quantidade: 3, rotulo: "3", cor: "#FBBF24" },
            { imagemUrl: estrelaImg, quantidade: 3, rotulo: "3", cor: "#F472B6" },
          ],
        },
      },
    ],
    medio: [
      {
        pergunta: "Tinha 8 castanhas e comeu 3. Sobraram:",
        opcoes: ["4", "5", "6"],
        correta: 1,
        explicacao: "Comeu → tira. 8 − 3 = 5.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: castanhaImg, quantidade: 8, rotulo: "Tinha 8", cor: "#A16207" },
            { imagemUrl: castanhaImg, quantidade: 3, rotulo: "Comeu 3", cor: "#F472B6" },
          ],
        },
      },
      {
        pergunta: "6 + 3 = ?",
        opcoes: ["8", "9", "10"],
        correta: 1,
        explicacao: "6 + 3 = 9.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: moedaImg, quantidade: 6, rotulo: "6", cor: "#FBBF24" },
            { imagemUrl: moedaImg, quantidade: 3, rotulo: "3", cor: "#34D399" },
          ],
        },
      },
      {
        pergunta: "10 − 6 = ?",
        opcoes: ["3", "4", "5"],
        correta: 1,
        explicacao: "10 − 6 = 4.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: moedaImg, quantidade: 10, rotulo: "Tinha 10", cor: "#FBBF24" },
            { imagemUrl: moedaImg, quantidade: 6, rotulo: "Tirou 6", cor: "#F472B6" },
          ],
        },
      },
    ],
    dificil: [
      {
        pergunta: "Tinha 7, ganhou 2, perdeu 4. Ficou com:",
        opcoes: ["4", "5", "6"],
        correta: 1,
        explicacao: "7 + 2 = 9. Depois 9 − 4 = 5.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: estrelaImg, quantidade: 7, rotulo: "Tinha 7", cor: "#FBBF24" },
            { imagemUrl: estrelaImg, quantidade: 5, rotulo: "Ficou 5", cor: "#A78BFA" },
          ],
        },
      },
      {
        pergunta: "Brilha comeu 5 castanhas e sobraram 3. Quantas ele tinha?",
        opcoes: ["7", "8", "9"],
        correta: 1,
        explicacao: "Se comeu 5 e sobraram 3, tinha 5 + 3 = 8.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: castanhaImg, quantidade: 5, rotulo: "Comeu 5", cor: "#F472B6" },
            { imagemUrl: castanhaImg, quantidade: 3, rotulo: "Sobrou 3", cor: "#A16207" },
          ],
        },
      },
      {
        pergunta: "Qual operação representa 'perdeu 4'?",
        opcoes: ["+ 4", "− 4", "× 4"],
        correta: 1,
        explicacao: "Perder é sempre subtração (−).",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: moedaImg, quantidade: 8, rotulo: "Tinha", cor: "#FBBF24" },
            { imagemUrl: moedaImg, quantidade: 4, rotulo: "Perdeu 4", cor: "#F472B6" },
          ],
        },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01MA09",
    titulo: "Organizar e ordenar objetos pela quantidade",
  },
};

export default aula;
