import type { AulaPortuguesV4 } from "../../types";
import microscopio from "@/assets/neuro-treino/objetos/microscopio.png";
import lupa from "@/assets/neuro-treino/objetos/lupa.png";
import folha from "@/assets/neuro-treino/objetos/folha.png";
import pena from "@/assets/neuro-treino/objetos/pena.png";
import pedra from "@/assets/neuro-treino/objetos/pedra.png";
import cientista from "@/assets/neuro-treino/objetos/cientista-crianca.png";
import caderno from "@/assets/neuro-treino/objetos/caderno-cientifico.png";
import livro from "@/assets/neuro-treino/objetos/livro.png";
import coruja from "@/assets/neuro-treino/objetos/coruja.png";
import estrela from "@/assets/neuro-treino/objetos/estrela-brilhante.png";
import planta from "@/assets/neuro-treino/objetos/planta-pequena.png";
import bola from "@/assets/neuro-treino/objetos/bola.png";
import banana from "@/assets/neuro-treino/objetos/banana.png";
import mapa from "@/assets/neuro-treino/objetos/mapa.png";

/**
 * Ciências · 2º Ano · Unidade 1 · Aula 01
 * "O que faz um cientista?" — EF02CI01
 *
 * Adapta o roteiro do Kit do Jovem Cientista ao contrato AulaPortuguesV4
 * (mesmo player de Português/Matemática/Geografia 2º ano). Nenhum bloco novo.
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-o-que-faz-um-cientista",
  titulo: "O que faz um cientista?",
  iconeTrilha: "🔬",
  bncc: ["EF02CI01"],
  duracaoMin: 15,

  // 1 · MOTIVAÇÃO
  momento01_motivacao: {
    titulo: "O laboratório vazio",
    historia:
      "Aurora abriu a porta do LABORATÓRIO ESCOLA BRILHA e chamou: 'Brilha, vem cá!'. Em cima da mesa tinha uma FOLHA, uma PEDRA e uma PENA — e um MICROSCÓPIO todo brilhando. Aurora disse: 'Sua primeira missão é aprender a INVESTIGAR como um cientista de verdade.' Vamos começar?",
    imagemUrl: cientista,
  },

  // 2 · PREVISÃO — cartaz do laboratório
  momento02_previsao: {
    instrucao:
      "Aurora deixou um CARTAZ colado no microscópio. Leia com atenção e imagine sobre o que a missão vai falar.",
    bloco: {
      titulo: "Missão do Jovem Cientista",
      capaImagemUrl: microscopio,
      recado: {
        rotulo: "Cartaz da Aurora",
        icone: "📢",
        estilo: "cartaz",
        linhas: [
          "MISSÃO DO CIENTISTA",
          "",
          "Descubra COMO o cientista",
          "trabalha todos os dias.",
          "",
          "— Aurora",
        ],
      },
      pistas: [
        { imagemUrl: microscopio, nome: "Um microscópio" },
        { imagemUrl: lupa, nome: "Uma lupa" },
        { imagemUrl: caderno, nome: "Um caderno" },
      ],
      pergunta: "Sobre o que essa missão vai falar?",
      hipoteses: [
        {
          texto:
            "Sobre como os CIENTISTAS observam, perguntam e registram o que descobrem.",
          imagemUrl: cientista,
        },
        {
          texto: "Sobre como treinar futebol.",
          imagemUrl: bola,
        },
        {
          texto: "Sobre receitas de banana.",
          imagemUrl: banana,
        },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Um bom investigador usa o TÍTULO e as PISTAS (microscópio, lupa, caderno) pra imaginar o que vem.",
      feedbackErro:
        "Olhe as pistas de novo: MICROSCÓPIO, LUPA e CADERNO. São ferramentas de CIENTISTA.",
    },
  },

  // 3 · VOCABULÁRIO — 2 palavras-chave
  momento03_vocabulario: {
    instrucao:
      "Antes de começar a investigação, conheça 2 palavras que todo cientista usa.",
    cards: [
      {
        palavra: "observar",
        explicacao:
          "É olhar com ATENÇÃO, usando os sentidos, pra descobrir COMO uma coisa é.",
        exemplo:
          "Brilha OBSERVOU a folha com a lupa e viu vários riscos verdes chamados nervuras.",
        imagemUrl: lupa,
      },
      {
        palavra: "registrar",
        explicacao:
          "É ANOTAR ou DESENHAR no caderno o que a gente descobriu. Assim não esquece.",
        exemplo: "Depois de observar, Brilha REGISTROU tudo no caderno científico.",
        imagemUrl: caderno,
      },
    ],
  },

  // 4 · LEITURA GUIADA
  momento04_leituraGuiada: {
    instrucao:
      "Aurora vai LER com você. Preste atenção nas palavras em amarelo — elas são pistas.",
    leitura: {
      titulo: "O que faz um cientista?",
      imagemUrl: cientista,
      legendaImagem: "Um jovem cientista pronto pra investigar.",
      destacar: ["observar", "perguntas", "investigar", "registrar", "descobertas"],
      paragrafos: [
        "Um cientista é uma pessoa que gosta de OBSERVAR o mundo. Ele olha as plantas, os bichos, o céu e as coisas em volta com muita atenção.",
        "Depois de observar, o cientista faz PERGUNTAS: 'Por que essa folha tem riscos?', 'Por que a pena é tão leve?'. Cada pergunta começa uma nova INVESTIGAR aventura.",
        "No fim, o cientista REGISTRA no caderno tudo o que aprendeu. Assim, outras pessoas podem ver as suas DESCOBERTAS.",
      ],
    },
  },

  // 5 · COMPREENSÃO
  momento05_compreensao: {
    instrucao:
      "As respostas estão TODAS escritas no texto. Volte lá se precisar.",
    perguntas: [
      {
        pergunta: "O que um cientista faz primeiro?",
        opcoes: [
          "Escreve um livro",
          "OBSERVA o mundo com atenção",
          "Vai dormir",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! No primeiro parágrafo está: 'gosta de OBSERVAR o mundo'.",
        feedbackErro:
          "Olhe o primeiro parágrafo — a primeira coisa que o cientista faz.",
        ondeEstaNoTexto: "…gosta de OBSERVAR o mundo.",
      },
      {
        pergunta: "Depois de observar, o cientista faz o quê?",
        opcoes: ["Vai brincar", "Faz PERGUNTAS", "Come uma banana"],
        correta: 1,
        feedbackAcerto: "🎉 Boa! É assim que uma investigação COMEÇA.",
        feedbackErro:
          "Está no segundo parágrafo, logo depois de 'Depois de observar'.",
        ondeEstaNoTexto: "…o cientista faz PERGUNTAS.",
      },
      {
        pergunta: "Onde o cientista REGISTRA as descobertas?",
        opcoes: ["Na TV", "No caderno", "No telhado"],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! REGISTRAR = ANOTAR no caderno pra não esquecer.",
        feedbackErro: "Olhe o último parágrafo: 'REGISTRA no caderno'.",
        ondeEstaNoTexto: "…REGISTRA no caderno tudo o que aprendeu.",
      },
    ],
  },

  // 6 · PERSONAGENS & CENÁRIO (aqui: quem faz o quê no laboratório)
  momento06_personagensCenario: {
    instrucao:
      "Vamos ver se você reconhece os personagens e o lugar da história.",
    perguntas: [
      {
        pergunta: "Quem chamou Brilha pro laboratório?",
        opcoes: ["A coruja", "Aurora", "A estrela"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Foi a AURORA — a professora do Escola Brilha.",
        feedbackErro:
          "Volte na história do começo: 'Aurora abriu a porta do laboratório'.",
      },
      {
        pergunta: "O que tinha em cima da mesa do laboratório?",
        opcoes: [
          "Uma folha, uma pedra e uma pena",
          "Um bolo de aniversário",
          "Uma bicicleta",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 Certo! FOLHA, PEDRA e PENA — três objetos pra investigar.",
        feedbackErro:
          "Volte na história: 'Em cima da mesa tinha uma FOLHA, uma PEDRA e uma PENA'.",
      },
    ],
  },

  // 7 · SEQUÊNCIA — as 3 etapas do trabalho do cientista
  momento07_sequencia: {
    instrucao:
      "As páginas do Caderno Científico embaralharam. Coloque na ordem certa: como o cientista trabalha?",
    bloco: {
      instrucao: "1º → 2º → 3º passo do método científico.",
      itens: [
        {
          id: "s1",
          texto: "1º OBSERVAR — olhar com atenção usando os sentidos.",
          imagemUrl: lupa,
        },
        {
          id: "s2",
          texto: "2º PERGUNTAR — o que eu quero descobrir?",
          imagemUrl: coruja,
        },
        {
          id: "s3",
          texto: "3º REGISTRAR — anotar as descobertas no caderno.",
          imagemUrl: caderno,
        },
      ],
      ordemCerta: ["s1", "s2", "s3"],
      feedbackAcerto:
        "🎉 Perfeito! Cientista sempre segue essa ordem: observar → perguntar → registrar.",
      feedbackErro:
        "Pense: primeiro a gente OBSERVA. Depois PERGUNTA. Por último REGISTRA as descobertas.",
    },
  },

  // 8 · LEITURA INDEPENDENTE
  momento08_leituraIndependente: {
    instrucao:
      "Agora leia sozinho e responda as duas perguntas sobre a Grande Descoberta de Brilha.",
    leitura: {
      titulo: "A folha misteriosa",
      imagemUrl: folha,
      destacar: ["lupa", "nervuras", "caderno"],
      paragrafos: [
        "Brilha pegou a LUPA e olhou bem de perto a folha verde. Que surpresa! A folha era cheia de riscos finos que pareciam caminhos. Aurora explicou que aqueles riscos se chamam NERVURAS — é por ali que a folha se alimenta.",
        "Brilha correu pro CADERNO e desenhou a folha inteirinha, com todas as nervuras. Depois escreveu embaixo: 'DESCOBERTA 1 — as folhas têm caminhos por dentro!'",
      ],
    },
    perguntas: [
      {
        pergunta:
          "O que Brilha usou pra ver os detalhes da folha?",
        opcoes: ["Um microscópio", "Uma LUPA", "Um telescópio"],
        opcoesImagens: [microscopio, lupa, estrela],
        correta: 1,
        feedbackAcerto: "🎉 Isso! LUPA.",
        feedbackErro: "Está na primeira frase: 'Brilha pegou a … e olhou'.",
        ondeEstaNoTexto: "…pegou a LUPA e olhou bem de perto…",
      },
      {
        pergunta: "Como se chamam os riscos finos que a folha tem?",
        opcoes: ["Nervuras", "Estradas", "Fios"],
        opcoesImagens: [folha, mapa, planta],
        correta: 0,
        feedbackAcerto:
          "🎉 Boa! NERVURAS — é por ali que a folha se alimenta.",
        feedbackErro:
          "Está na primeira parte: 'aqueles riscos se chamam …'.",
        ondeEstaNoTexto: "…aqueles riscos se chamam NERVURAS.",
      },
    ],
  },

  // MINIJOGO — Mesa do Investigador (EXPERIMENTO ATIVO)
  // A criança VIVE o método científico: escolhe objeto → usa sentidos →
  // faz uma pergunta científica → registra 3 características verdadeiras.
  momento_minijogo: {
    titulo: "🔬 Mesa do Investigador",
    instrucao:
      "Aurora colocou 3 amostras na mesa do laboratório. Escolha UMA e faça uma investigação de verdade: observe, pergunte e registre.",
    jogo: {
      tipo: "mesaInvestigador",
      titulo: "Mesa do Investigador",
      bloco: {
        intro:
          "Escolha um objeto na mesa. Depois use os SENTIDOS e a LUPA pra descobrir características. No fim, registra tudo no caderno.",
        aurora:
          "Bem-vindo à mesa! Escolhe UMA amostra pra começar a investigação. Todo cientista começa observando com curiosidade.",
        objetos: [
          {
            id: "folha",
            nome: "Folha",
            imagemUrl: folha,
            descobertas: {
              ver: "É verde, tem formato de coração e beiradas onduladas.",
              tocar: "É macia por cima e um pouquinho áspera por baixo.",
              cheirar: "Tem cheiro fresco, parecido com mato molhado.",
              lupa: "Aparecem NERVURAS — riscos finos que parecem caminhos.",
            },
            perguntaCerta: "Por que as folhas têm nervuras por dentro?",
            perguntasFalsas: [
              "A folha sabe cantar?",
              "Quantos anos tem a professora Aurora?",
            ],
            caracteristicasCertas: [
              "É verde",
              "Tem nervuras",
              "É macia",
              "Cheiro fresco",
            ],
            caracteristicasFalsas: ["É metálica", "Faz barulho alto"],
            conclusao:
              "🎉 Você descobriu que a folha tem NERVURAS — os caminhos por onde ela se alimenta. Isso é investigar!",
          },
          {
            id: "pedra",
            nome: "Pedra",
            imagemUrl: pedra,
            descobertas: {
              ver: "É cinza com pintinhas escuras, formato arredondado.",
              tocar: "É DURA, pesada e fria ao toque.",
              cheirar: "Tem um cheiro de terra, bem fraquinho.",
              lupa: "Aparecem cristais brilhantes minúsculos na superfície.",
            },
            perguntaCerta: "De que a pedra é feita por dentro?",
            perguntasFalsas: [
              "A pedra gosta de sorvete?",
              "A pedra fala português ou inglês?",
            ],
            caracteristicasCertas: [
              "É dura",
              "É pesada",
              "Tem cristais",
              "É fria",
            ],
            caracteristicasFalsas: ["É fofinha", "Voa sozinha"],
            conclusao:
              "🎉 Você viu que a pedra tem CRISTAIS por dentro! Só a lupa mostrou esse segredo.",
          },
          {
            id: "pena",
            nome: "Pena",
            imagemUrl: pena,
            descobertas: {
              ver: "É branca e comprida, com um risco no meio.",
              tocar: "É levíssima! Quase não sente o peso.",
              cheirar: "Quase não tem cheiro nenhum.",
              lupa: "É cheia de fiozinhos que se encaixam como um zíper.",
            },
            perguntaCerta: "Por que a pena é tão leve e ajuda os pássaros a voar?",
            perguntasFalsas: [
              "A pena sabe desenhar sozinha?",
              "Qual é a comida favorita da pena?",
            ],
            caracteristicasCertas: [
              "É leve",
              "É branca",
              "Tem fiozinhos",
              "Tem um risco no meio",
            ],
            caracteristicasFalsas: ["É pesada como pedra", "É de ferro"],
            conclusao:
              "🎉 Você entendeu por que os pássaros voam! A pena é LEVE e tem fiozinhos que seguram o ar.",
          },
        ],
        feedbackFinal:
          "Você acabou de fazer uma INVESTIGAÇÃO CIENTÍFICA de verdade: observou, perguntou e registrou. É assim que a ciência começa!",
      },
    },
  },

  // 9 · REVISÃO
  momento09_revisao: {
    pontos: [
      "Um CIENTISTA é uma pessoa que investiga o mundo.",
      "O trabalho segue 3 passos: OBSERVAR → PERGUNTAR → REGISTRAR.",
      "OBSERVAR é olhar com atenção usando os sentidos.",
      "REGISTRAR é anotar ou desenhar no caderno pra não esquecer.",
      "As ferramentas do cientista: LUPA, MICROSCÓPIO, CADERNO e LIVRO.",
    ],
    miniDesafio: {
      pergunta: "Qual é o PRIMEIRO passo pra investigar como cientista?",
      opcoes: ["Registrar no caderno", "OBSERVAR com atenção", "Ir dormir"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! Tudo começa com uma boa OBSERVAÇÃO.",
      feedbackErro:
        "Volte na sequência: primeiro OBSERVAR, depois perguntar, por último registrar.",
    },
  },

  // 10 · AVALIAÇÃO
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que um cientista faz o TEMPO TODO?",
        opcoes: ["Dorme", "Investiga o mundo", "Corre"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! Investigar é o trabalho do cientista.",
        feedbackErro: "Pense: o cientista OBSERVA, PERGUNTA e REGISTRA.",
      },
      {
        pergunta: "Qual objeto ajuda a ver detalhes bem PEQUENOS?",
        opcoes: ["Bola", "Lupa", "Chapéu"],
        opcoesImagens: [bola, lupa, folha],
        correta: 1,
        feedbackAcerto: "🎉 Isso! A LUPA aumenta o que a gente vê.",
        feedbackErro: "Volte no vocabulário: OBSERVAR usa a lupa.",
      },
      {
        pergunta: "O cientista escreve as descobertas ONDE?",
        opcoes: ["Na parede", "No CADERNO", "Na areia"],
        opcoesImagens: [pedra, caderno, folha],
        correta: 1,
        feedbackAcerto: "🎉 Boa! No CADERNO CIENTÍFICO.",
        feedbackErro: "Registrar = anotar no CADERNO.",
      },
      {
        pergunta: "Coloque na ordem: qual é o 2º passo do cientista?",
        opcoes: ["Registrar", "PERGUNTAR", "Observar"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! Depois de observar, vem PERGUNTAR.",
        feedbackErro:
          "A ordem é: 1º OBSERVAR, 2º PERGUNTAR, 3º REGISTRAR.",
      },
      {
        pergunta:
          "Brilha viu uma pena e perguntou: 'Por que ela é tão leve?'. Isso é fazer o quê?",
        opcoes: [
          "Uma pergunta científica",
          "Uma piada",
          "Uma música",
        ],
        opcoesImagens: [pena, cientista, coruja],
        correta: 0,
        feedbackAcerto:
          "🎉 Isso! Toda investigação começa com uma boa PERGUNTA.",
        feedbackErro:
          "Cientista SEMPRE começa fazendo perguntas sobre o que observou.",
      },
    ],
  },

  // 11 · MISSÃO EM FAMÍLIA
  momento11_missaoFamilia: {
    titulo: "🔬 Kit do Jovem Cientista em casa",
    materiais: [
      "1 objeto qualquer da casa (fruta, folha, pedrinha, brinquedo…)",
      "Papel e lápis (o caderno científico do Brilha)",
      "Uma lupa (se tiver — mas não precisa!)",
    ],
    passos: [
      "Escolha UM objeto interessante da casa.",
      "OBSERVE com calma: como é a cor? O tamanho? Tem cheiro? É liso ou áspero?",
      "PERGUNTE pra si mesmo: 'O que eu quero descobrir sobre isso?'",
      "REGISTRE 3 características do objeto no papel — pode escrever ou desenhar.",
      "Mostre pra sua família e explique cada descoberta.",
    ],
    registro:
      "Uma foto do seu registro científico (o desenho ou as anotações do objeto).",
  },

  recompensa: {
    xp: 100,
    moedas: 50,
    medalha: "Jovem Cientista",
  },
};
