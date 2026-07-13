import type { AulaPortuguesV4 } from "../../types";
import cientista from "@/assets/neuro-treino/objetos/cientista-crianca.png";
import caderno from "@/assets/neuro-treino/objetos/caderno-cientifico.png";
import garrafa from "@/assets/neuro-treino/objetos/garrafa.png";
import folha from "@/assets/neuro-treino/objetos/folha.png";
import pedra from "@/assets/neuro-treino/objetos/pedra.png";
import pena from "@/assets/neuro-treino/objetos/pena.png";
import maca from "@/assets/neuro-treino/objetos/maca.png";
import lupa from "@/assets/neuro-treino/objetos/lupa.png";
import banana from "@/assets/neuro-treino/objetos/banana.png";
import bola from "@/assets/neuro-treino/objetos/bola.png";
import madeira from "@/assets/neuro-treino/objetos/madeira.png";
import moeda from "@/assets/neuro-treino/objetos/moeda.png";
import papel from "@/assets/neuro-treino/objetos/papel.png";
import coruja from "@/assets/neuro-treino/objetos/coruja.png";

/**
 * Ciências · 2º Ano · Unidade 1 · Aula 04
 * "Experimentar: testar a hipótese" — EF02CI01
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-experimentar",
  titulo: "Experimentar de verdade",
  iconeTrilha: "🧪",
  bncc: ["EF02CI01"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "O grande teste do afunda ou flutua",
    historia:
      "Aurora encheu uma BACIA de água e disse: 'Brilha, temos uma HIPÓTESE: será que tudo que é pequeno FLUTUA e tudo que é grande AFUNDA?'. Brilha olhou desconfiado: 'Hmmm… vamos TESTAR!'. E foi assim que Brilha aprendeu que só a hipótese não basta — cientista precisa EXPERIMENTAR!",
    imagemUrl: cientista,
  },

  momento02_previsao: {
    instrucao: "Aurora deixou um cartaz. Adivinhe o que vem por aí.",
    bloco: {
      titulo: "Missão do Experimento",
      capaImagemUrl: garrafa,
      recado: {
        rotulo: "Cartaz da Aurora",
        icone: "📢",
        estilo: "cartaz",
        linhas: [
          "MISSÃO DO EXPERIMENTO",
          "",
          "Aprenda a TESTAR",
          "as suas hipóteses.",
          "",
          "— Aurora",
        ],
      },
      pistas: [
        { imagemUrl: garrafa, nome: "Água" },
        { imagemUrl: pedra, nome: "Pedra pra testar" },
        { imagemUrl: pena, nome: "Pena pra testar" },
      ],
      pergunta: "Sobre o que essa missão vai falar?",
      hipoteses: [
        {
          texto: "Sobre como FAZER um experimento pra testar hipóteses.",
          imagemUrl: cientista,
        },
        { texto: "Sobre como jogar bola na água.", imagemUrl: bola },
        { texto: "Sobre como fazer suco de banana.", imagemUrl: banana },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Boa! Água + pedra + pena = experimento pra ver o que afunda e o que flutua.",
      feedbackErro:
        "As pistas mostram objetos pra TESTAR na água. Isso é um EXPERIMENTO.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras que todo cientista de laboratório usa.",
    cards: [
      {
        palavra: "experimento",
        explicacao:
          "É um TESTE que o cientista faz pra ver se a hipótese é verdadeira ou falsa.",
        exemplo:
          "Brilha fez um EXPERIMENTO: colocou vários objetos na água pra ver o que boiava.",
        imagemUrl: garrafa,
      },
      {
        palavra: "resultado",
        explicacao:
          "É o que ACONTECEU no experimento. Pode CONFIRMAR a hipótese ou mostrar que ela estava errada.",
        exemplo:
          "O RESULTADO surpreendeu Brilha: a pedra grande afundou, mas o pedaço de madeira TAMBÉM grande… flutuou!",
        imagemUrl: caderno,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia com Aurora e descubra as regras de um bom experimento.",
    leitura: {
      titulo: "Como fazer um experimento",
      imagemUrl: garrafa,
      legendaImagem: "A bacia de água é o laboratório mais fácil do mundo.",
      destacar: ["experimento", "testar", "resultado", "confirmar", "errada"],
      paragrafos: [
        "Um EXPERIMENTO é feito pra TESTAR uma hipótese. O cientista prepara os materiais, faz o teste com CUIDADO e observa tudo.",
        "No fim, aparece o RESULTADO — o que aconteceu de verdade. Se o resultado bate com a hipótese, dizemos que ela foi CONFIRMAR.",
        "Se o resultado for diferente, tudo bem! A hipótese estava ERRADA — e isso também é uma descoberta. Cientistas aprendem com os erros!",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Respostas no texto. Volte se precisar!",
    perguntas: [
      {
        pergunta: "Pra que serve um EXPERIMENTO?",
        opcoes: ["Pra dormir", "Pra TESTAR a hipótese", "Pra pintar"],
        correta: 1,
        feedbackAcerto: "🎉 Testar a hipótese!",
        feedbackErro: "1º parágrafo: 'feito pra TESTAR uma hipótese'.",
        ondeEstaNoTexto: "…feito pra TESTAR uma hipótese.",
      },
      {
        pergunta: "Como se chama o que ACONTECEU no experimento?",
        opcoes: ["Resultado", "Sorriso", "Descanso"],
        correta: 0,
        feedbackAcerto: "🎉 RESULTADO!",
        feedbackErro: "Está no 2º parágrafo: 'aparece o …'.",
        ondeEstaNoTexto: "…aparece o RESULTADO.",
      },
      {
        pergunta: "Se a hipótese estava ERRADA, o cientista fica triste?",
        opcoes: [
          "Sim, desiste tudo",
          "Não! Aprende com o erro",
          "Chora e vai embora",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Erro também é descoberta.",
        feedbackErro:
          "Último parágrafo: 'Cientistas aprendem com os erros!'.",
        ondeEstaNoTexto: "Cientistas aprendem com os erros!",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Volte na história do começo.",
    perguntas: [
      {
        pergunta: "O que Aurora encheu de água?",
        opcoes: ["Um copo", "Uma BACIA", "Um chapéu"],
        correta: 1,
        feedbackAcerto: "🎉 Bacia de água!",
        feedbackErro: "Volte na história: 'Aurora encheu uma BACIA de água'.",
      },
      {
        pergunta: "Qual era a HIPÓTESE do começo da história?",
        opcoes: [
          "Que TODO objeto pequeno flutua e todo grande afunda",
          "Que a água é azul",
          "Que bacia é redonda",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 Certo! Era essa a hipótese pra testar.",
        feedbackErro:
          "Volte no começo: 'tudo que é pequeno FLUTUA e tudo que é grande AFUNDA'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao:
      "Coloque em ordem os 3 passos de um bom experimento.",
    bloco: {
      instrucao: "1º prepara → 2º testa → 3º observa o resultado.",
      itens: [
        {
          id: "s1",
          texto: "1º PREPARAR os materiais (bacia com água, objetos).",
          imagemUrl: garrafa,
        },
        {
          id: "s2",
          texto: "2º TESTAR: colocar UM objeto por vez na água.",
          imagemUrl: pedra,
        },
        {
          id: "s3",
          texto: "3º OBSERVAR o RESULTADO: afundou ou flutuou?",
          imagemUrl: lupa,
        },
      ],
      ordemCerta: ["s1", "s2", "s3"],
      feedbackAcerto:
        "🎉 Perfeito! Preparar, testar e observar. Sempre nessa ordem.",
      feedbackErro:
        "Cientista nunca testa sem PREPARAR. E sempre observa o RESULTADO no fim.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho o resultado do experimento do Brilha.",
    leitura: {
      titulo: "Surpresas na bacia",
      imagemUrl: garrafa,
      destacar: ["madeira", "moeda", "pedra", "flutuou", "afundou"],
      paragrafos: [
        "Brilha testou 4 objetos. A PENA flutuou. A folha também flutuou. A MOEDA pequenininha AFUNDOU! E o pedaço grande de MADEIRA… flutuou!",
        "Brilha ficou de boca aberta: 'A HIPÓTESE estava ERRADA! Não é o tamanho que importa!'. Aurora respondeu: 'Ótimo! O que importa é o MATERIAL. Você descobriu uma coisa nova!'",
      ],
    },
    perguntas: [
      {
        pergunta: "O que aconteceu com a MOEDA pequenininha?",
        opcoes: ["Flutuou", "AFUNDOU", "Desapareceu"],
        opcoesImagens: [pena, moeda, folha],
        correta: 1,
        feedbackAcerto: "🎉 Afundou!",
        feedbackErro:
          "Está no 1º parágrafo: 'A MOEDA pequenininha …'.",
        ondeEstaNoTexto: "A MOEDA pequenininha AFUNDOU!",
      },
      {
        pergunta: "A hipótese do Brilha estava CERTA?",
        opcoes: ["Sim", "NÃO — o tamanho não é o que importa", "Meio"],
        correta: 1,
        feedbackAcerto:
          "🎉 Estava errada — e isso foi uma nova descoberta!",
        feedbackErro:
          "Olhe: 'A HIPÓTESE estava ERRADA!'. Erro também ensina.",
        ondeEstaNoTexto: "A HIPÓTESE estava ERRADA!",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🌊 Afunda ou flutua?",
    instrucao:
      "Vamos treinar suas previsões! Marque só os objetos que FLUTUAM na água.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "Afunda ou flutua?",
      bloco: {
        instrucao:
          "Toque nos objetos que FLUTUAM na água. Os que afundam, não marque!",
        pergunta: "Quais destes FLUTUAM?",
        opcoes: [
          { id: "pena", texto: "Pena", imagemUrl: pena, correto: true },
          { id: "folha", texto: "Folha", imagemUrl: folha, correto: true },
          { id: "madeira", texto: "Madeira", imagemUrl: madeira, correto: true },
          { id: "papel", texto: "Papel", imagemUrl: papel, correto: true },
          { id: "pedra", texto: "Pedra", imagemUrl: pedra, correto: false },
          { id: "moeda", texto: "Moeda", imagemUrl: moeda, correto: false },
        ],
        feedbackAcerto:
          "🎉 Perfeito! Pena, folha, madeira e papel flutuam. Pedra e moeda afundam.",
        feedbackErro:
          "Cuidado! Pedra e MOEDA afundam. Já pena, folha, madeira e papel FLUTUAM.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "EXPERIMENTO = teste pra saber se a hipótese está certa.",
      "3 passos: PREPARAR materiais → TESTAR → OBSERVAR resultado.",
      "Hipótese pode dar CERTO ou ERRADO — as duas ensinam.",
      "Se a hipótese estava errada, isso vira uma NOVA descoberta.",
      "Cuidado ao experimentar: sempre com um adulto e materiais seguros.",
    ],
    miniDesafio: {
      pergunta: "Se o resultado é DIFERENTE da hipótese, o que fazer?",
      opcoes: [
        "Fingir que a hipótese estava certa",
        "APRENDER com a descoberta nova",
        "Jogar tudo fora",
      ],
      correta: 1,
      feedbackAcerto: "🎉 Isso! Erro é descoberta.",
      feedbackErro:
        "Cientista de verdade APRENDE com o resultado, mesmo se for diferente do palpite.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Pra que serve um experimento?",
        opcoes: ["Pra brincar", "Pra TESTAR a hipótese", "Pra decorar"],
        correta: 1,
        feedbackAcerto: "🎉 Testar hipótese.",
        feedbackErro: "Experimento = teste da hipótese.",
      },
      {
        pergunta: "Qual é o PRIMEIRO passo de um experimento?",
        opcoes: ["Preparar materiais", "Comer", "Dormir"],
        correta: 0,
        feedbackAcerto: "🎉 Preparar!",
        feedbackErro: "Sempre PREPARAR primeiro — depois testar.",
      },
      {
        pergunta: "O que é RESULTADO?",
        opcoes: ["O que aconteceu no teste", "Uma fruta", "Um bicho"],
        correta: 0,
        feedbackAcerto: "🎉 O que aconteceu no teste.",
        feedbackErro: "RESULTADO = o que aconteceu na hora do teste.",
      },
      {
        pergunta: "Se a hipótese estava ERRADA, isso é bom ou ruim?",
        opcoes: [
          "Ruim, cientista fracassou",
          "BOM — virou descoberta nova",
          "Nem bom nem ruim",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Bom! Erro é aprendizado.",
        feedbackErro:
          "Descobrir que a hipótese estava errada TAMBÉM é uma descoberta.",
      },
      {
        pergunta: "Brilha quer testar 'a folha cai devagar'. O que ele deve fazer?",
        opcoes: [
          "Escrever no caderno e pronto",
          "SOLTAR a folha várias vezes e observar",
          "Perguntar pra coruja",
        ],
        opcoesImagens: [caderno, folha, coruja],
        correta: 1,
        feedbackAcerto: "🎉 Isso é experimentar!",
        feedbackErro:
          "Cientista TESTA de verdade, várias vezes, e observa o resultado.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🌊 Experimento em casa: afunda ou flutua",
    materiais: [
      "1 bacia ou pia com água",
      "5 objetos SEGUROS (pedaço de madeira, moeda, folha, tampa de plástico, uva…)",
      "Papel e lápis pro Diário do Cientista",
      "Um adulto pra ajudar",
    ],
    passos: [
      "Antes de testar, ESCREVA sua hipótese pra cada objeto: vai afundar ou flutuar?",
      "Coloque UM objeto por vez na água com cuidado.",
      "Observe o RESULTADO e anote se acertou ou errou a hipótese.",
      "Conte pra família quais foram as SURPRESAS.",
      "Guarde tudo no Diário do Cientista.",
    ],
    registro:
      "Uma foto do seu Diário mostrando os 5 objetos, suas hipóteses e os resultados.",
  },

  recompensa: {
    xp: 100,
    moedas: 50,
    medalha: "Cientista Experimentador",
  },
};
