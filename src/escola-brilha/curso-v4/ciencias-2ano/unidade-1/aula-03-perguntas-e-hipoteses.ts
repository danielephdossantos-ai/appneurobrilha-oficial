import type { AulaPortuguesV4 } from "../../types";
import lupa from "@/assets/neuro-treino/objetos/lupa.png";
import cientista from "@/assets/neuro-treino/objetos/cientista-crianca.png";
import caderno from "@/assets/neuro-treino/objetos/caderno-cientifico.png";
import coruja from "@/assets/neuro-treino/objetos/coruja.png";
import pena from "@/assets/neuro-treino/objetos/pena.png";
import pedra from "@/assets/neuro-treino/objetos/pedra.png";
import folha from "@/assets/neuro-treino/objetos/folha.png";
import sol from "@/assets/neuro-treino/objetos/sol.png";
import lua from "@/assets/neuro-treino/objetos/lua.png";
import estrela from "@/assets/neuro-treino/objetos/estrela-brilhante.png";
import arcoiris from "@/assets/neuro-treino/objetos/arco-iris.png";
import chuva from "@/assets/neuro-treino/objetos/chuva.png";
import banana from "@/assets/neuro-treino/objetos/banana.png";
import bola from "@/assets/neuro-treino/objetos/bola.png";
import garrafa from "@/assets/neuro-treino/objetos/garrafa.png";

/**
 * Ciências · 2º Ano · Unidade 1 · Aula 03
 * "Fazer perguntas e criar hipóteses" — EF02CI01
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-perguntas-e-hipoteses",
  titulo: "Perguntas e hipóteses",
  iconeTrilha: "❓",
  bncc: ["EF02CI01"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Por que a pena cai devagar?",
    historia:
      "Brilha soltou uma PEDRA e uma PENA no ar ao mesmo tempo. A pedra caiu RÁPIDO, mas a pena ficou boiando! 'AURORA! POR QUE ISSO ACONTECE?', gritou Brilha. Aurora riu: 'Excelente! Você acabou de fazer uma PERGUNTA científica. Agora vamos criar uma HIPÓTESE — o que você ACHA que causa isso?'",
    imagemUrl: cientista,
  },

  momento02_previsao: {
    instrucao: "Aurora deixou um cartaz. Leia e adivinhe o assunto da missão.",
    bloco: {
      titulo: "Missão do Investigador",
      capaImagemUrl: coruja,
      recado: {
        rotulo: "Cartaz da Aurora",
        icone: "📢",
        estilo: "cartaz",
        linhas: [
          "MISSÃO DO INVESTIGADOR",
          "",
          "Aprenda a fazer PERGUNTAS",
          "e criar HIPÓTESES.",
          "",
          "— Aurora",
        ],
      },
      pistas: [
        { imagemUrl: coruja, nome: "Coruja curiosa" },
        { imagemUrl: pena, nome: "Pena que cai devagar" },
        { imagemUrl: pedra, nome: "Pedra que cai rápido" },
      ],
      pergunta: "Sobre o que essa missão vai falar?",
      hipoteses: [
        {
          texto:
            "Sobre como o cientista faz PERGUNTAS e cria HIPÓTESES pra testar.",
          imagemUrl: cientista,
        },
        { texto: "Sobre como brincar de bola.", imagemUrl: bola },
        { texto: "Sobre como comer banana.", imagemUrl: banana },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Coruja + pena + pedra = investigar POR QUE as coisas acontecem.",
      feedbackErro:
        "Olhe as pistas: uma coruja curiosa e dois objetos que caem diferente. É sobre PERGUNTAR e IMAGINAR.",
    },
  },

  momento03_vocabulario: {
    instrucao: "As duas palavras mais importantes do cientista de hoje.",
    cards: [
      {
        palavra: "pergunta",
        explicacao:
          "É uma dúvida sobre o mundo. Toda descoberta científica começou com uma PERGUNTA.",
        exemplo:
          "'Por que a pena cai devagar?' é uma PERGUNTA científica.",
        imagemUrl: coruja,
      },
      {
        palavra: "hipótese",
        explicacao:
          "É um PALPITE de cientista — o que a gente ACHA que é a resposta, ANTES de testar.",
        exemplo:
          "Brilha teve uma HIPÓTESE: 'Acho que a pena cai devagar porque é MAIS LEVE.'",
        imagemUrl: caderno,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia com Aurora. Repare como uma pergunta boa vira uma hipótese.",
    leitura: {
      titulo: "De pergunta a hipótese",
      imagemUrl: coruja,
      legendaImagem: "A coruja é a mascote das perguntas científicas.",
      destacar: ["pergunta", "hipótese", "palpite", "testar"],
      paragrafos: [
        "Todo cientista é CURIOSO. Ele olha uma coisa e pergunta 'Por quê?'. Essa é a PERGUNTA científica.",
        "Depois, ele pensa num PALPITE: 'Eu ACHO que é por causa disso…'. Esse palpite se chama HIPÓTESE.",
        "A hipótese não é a resposta CERTA — é só um chute inteligente. Pra saber se está certa, o cientista precisa TESTAR com um experimento.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Respostas no texto. Volte se precisar!",
    perguntas: [
      {
        pergunta: "O que TODO cientista é?",
        opcoes: ["Rico", "CURIOSO", "Alto"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Curiosidade é o começo da Ciência.",
        feedbackErro: "Está no 1º parágrafo: 'Todo cientista é …'.",
        ondeEstaNoTexto: "Todo cientista é CURIOSO.",
      },
      {
        pergunta: "Como se chama o PALPITE do cientista?",
        opcoes: ["Pergunta", "HIPÓTESE", "Resposta"],
        correta: 1,
        feedbackAcerto: "🎉 Boa! HIPÓTESE = palpite.",
        feedbackErro: "Está no 2º parágrafo: 'palpite se chama …'.",
        ondeEstaNoTexto: "…palpite se chama HIPÓTESE.",
      },
      {
        pergunta: "Depois da hipótese, o que o cientista faz?",
        opcoes: ["Dorme", "TESTA com experimento", "Esquece"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! Cientista sempre TESTA.",
        feedbackErro: "Último parágrafo: 'precisa … com um experimento'.",
        ondeEstaNoTexto: "…o cientista precisa TESTAR com um experimento.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Volte na história do começo pra responder.",
    perguntas: [
      {
        pergunta: "O que Brilha soltou no ar ao mesmo tempo?",
        opcoes: [
          "Uma bola e uma banana",
          "Uma PEDRA e uma PENA",
          "Uma folha e um livro",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Pedra e pena!",
        feedbackErro:
          "Volte na história: 'soltou uma PEDRA e uma PENA no ar'.",
      },
      {
        pergunta: "Qual caiu mais RÁPIDO?",
        opcoes: ["A pena", "A PEDRA", "As duas juntas"],
        correta: 1,
        feedbackAcerto: "🎉 A pedra caiu rápido.",
        feedbackErro: "Está na história: 'a pedra caiu RÁPIDO'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao:
      "Coloque em ordem os passos que Brilha fez pra virar cientista.",
    bloco: {
      instrucao: "1º observa → 2º pergunta → 3º cria hipótese.",
      itens: [
        {
          id: "s1",
          texto: "1º OBSERVAR: a pena caiu devagar e a pedra caiu rápido.",
          imagemUrl: lupa,
        },
        {
          id: "s2",
          texto: "2º PERGUNTAR: por que isso aconteceu?",
          imagemUrl: coruja,
        },
        {
          id: "s3",
          texto: "3º CRIAR HIPÓTESE: 'Acho que é porque a pena é mais leve.'",
          imagemUrl: caderno,
        },
      ],
      ordemCerta: ["s1", "s2", "s3"],
      feedbackAcerto: "🎉 Perfeito! Observar → perguntar → imaginar a resposta.",
      feedbackErro:
        "Primeiro OBSERVAR, depois PERGUNTAR, e só depois CRIAR HIPÓTESE.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho e responda sobre a nuvem misteriosa.",
    leitura: {
      titulo: "O sol depois da chuva",
      imagemUrl: arcoiris,
      destacar: ["arco-íris", "sol", "chuva", "hipótese"],
      paragrafos: [
        "Depois da CHUVA, Brilha viu um lindo ARCO-ÍRIS no céu. Olhou pra Aurora e perguntou: 'Por que o arco-íris só aparece quando SAI o SOL depois da chuva?'",
        "Aurora sorriu: 'Ótima pergunta! Qual é a sua HIPÓTESE?'. Brilha pensou e disse: 'Acho que é o sol batendo nas GOTAS de água que ficaram no ar!'",
      ],
    },
    perguntas: [
      {
        pergunta: "Quando o arco-íris apareceu?",
        opcoes: [
          "De noite",
          "Depois da chuva, com sol",
          "Só com sol, sem chuva",
        ],
        opcoesImagens: [lua, arcoiris, sol],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Sol DEPOIS da chuva.",
        feedbackErro: "Está no 1º parágrafo: 'Depois da CHUVA…'.",
        ondeEstaNoTexto: "Depois da CHUVA, Brilha viu um lindo ARCO-ÍRIS…",
      },
      {
        pergunta: "Qual foi a HIPÓTESE de Brilha?",
        opcoes: [
          "Que o arco-íris é pintado por alguém",
          "Que é o SOL batendo nas GOTAS de água",
          "Que arco-íris não existe",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Boa hipótese científica!",
        feedbackErro: "Olhe: 'Acho que é o sol batendo nas …'.",
        ondeEstaNoTexto: "…o sol batendo nas GOTAS de água…",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🔎 Isso é pergunta científica?",
    instrucao:
      "Nem toda frase é uma boa pergunta de cientista. Marque SÓ as PERGUNTAS que investigam o mundo.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "Isso é pergunta científica?",
      bloco: {
        instrucao:
          "Toque nas frases que são PERGUNTAS SOBRE O MUNDO. Frases que só pedem coisas ou reclamam não valem.",
        pergunta: "Quais destas são PERGUNTAS científicas?",
        opcoes: [
          {
            id: "p1",
            texto: "Por que o céu é AZUL?",
            imagemUrl: sol,
            correto: true,
          },
          {
            id: "p2",
            texto: "Como as plantas CRESCEM?",
            imagemUrl: folha,
            correto: true,
          },
          {
            id: "p3",
            texto: "Por que a água CONGELA?",
            imagemUrl: garrafa,
            correto: true,
          },
          {
            id: "p4",
            texto: "Me dá uma banana!",
            imagemUrl: banana,
            correto: false,
          },
          {
            id: "p5",
            texto: "Vamos jogar bola?",
            imagemUrl: bola,
            correto: false,
          },
          {
            id: "p6",
            texto: "Por que a coruja voa de NOITE?",
            imagemUrl: coruja,
            correto: true,
          },
        ],
        feedbackAcerto:
          "🎉 Perfeito! Perguntas científicas começam com POR QUE ou COMO e investigam o mundo.",
        feedbackErro:
          "Pedir banana ou jogar bola NÃO é investigar. Perguntas científicas começam com POR QUE ou COMO.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "PERGUNTA científica = dúvida sobre o mundo, começa com POR QUE ou COMO.",
      "HIPÓTESE = palpite do cientista sobre a resposta.",
      "Hipótese NÃO é resposta certa — é um chute inteligente.",
      "Depois da hipótese, o cientista TESTA com experimento.",
      "Ordem: OBSERVAR → PERGUNTAR → CRIAR HIPÓTESE.",
    ],
    miniDesafio: {
      pergunta: "Qual destas é uma HIPÓTESE?",
      opcoes: [
        "Por que a folha é verde?",
        "Acho que a folha é verde por causa do SOL.",
        "Verde, verde, verde!",
      ],
      correta: 1,
      feedbackAcerto:
        "🎉 Isso! Começa com 'ACHO QUE' — é um palpite de cientista.",
      feedbackErro:
        "Hipótese começa com 'ACHO QUE' ou 'EU ACREDITO'. É um PALPITE.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Toda descoberta científica começa com o quê?",
        opcoes: ["Um bolo", "Uma PERGUNTA", "Um sono"],
        correta: 1,
        feedbackAcerto: "🎉 Pergunta!",
        feedbackErro: "Toda descoberta COMEÇA com uma pergunta.",
      },
      {
        pergunta: "Qual destas é uma pergunta CIENTÍFICA?",
        opcoes: [
          "Me dá água!",
          "Por que a água FERVE quando aquece?",
          "Água boa!",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Começa com POR QUE — pergunta científica.",
        feedbackErro:
          "Pergunta científica investiga o mundo — começa com POR QUE ou COMO.",
      },
      {
        pergunta: "O que é HIPÓTESE?",
        opcoes: ["A resposta certa", "Um PALPITE de cientista", "Um bicho"],
        correta: 1,
        feedbackAcerto: "🎉 Palpite!",
        feedbackErro: "Hipótese = palpite antes de testar.",
      },
      {
        pergunta: "Depois de criar a hipótese, o cientista faz o quê?",
        opcoes: ["TESTA", "Dorme", "Come"],
        correta: 0,
        feedbackAcerto: "🎉 Testa com experimento.",
        feedbackErro: "Sempre TESTAR pra ver se o palpite é verdadeiro.",
      },
      {
        pergunta:
          "Brilha viu uma estrela e disse: 'ACHO que estrelas são bolas de fogo.' Isso é o quê?",
        opcoes: ["Uma pergunta", "Uma HIPÓTESE", "Uma piada"],
        opcoesImagens: [coruja, estrela, banana],
        correta: 1,
        feedbackAcerto: "🎉 Começou com ACHO QUE — é hipótese!",
        feedbackErro:
          "Frases com 'ACHO QUE' são HIPÓTESES: palpites do cientista.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🤔 Caça-Perguntas em casa",
    materiais: [
      "Papel e lápis (Diário do Cientista)",
      "Sua curiosidade",
    ],
    passos: [
      "Ande pela casa e olhe TUDO com atenção.",
      "Escreva 3 PERGUNTAS científicas — comece com 'Por que…' ou 'Como…'. Ex: 'Por que a geladeira gela?'",
      "Pra cada pergunta, escreva uma HIPÓTESE começando com 'Acho que…'.",
      "Mostre pra família e pergunte se eles concordam com o seu palpite.",
      "Guarde no Diário — na próxima aula a gente aprende a TESTAR!",
    ],
    registro:
      "Uma foto do seu Diário com as 3 perguntas + 3 hipóteses.",
  },

  recompensa: {
    xp: 100,
    moedas: 50,
    medalha: "Caçador de Perguntas",
  },
};
