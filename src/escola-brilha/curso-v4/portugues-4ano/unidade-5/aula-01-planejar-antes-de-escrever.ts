import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as mochila } from "@/assets/neuro-treino/objetos/mochila.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as quadro } from "@/assets/neuro-treino/objetos/quadro.png.asset.json";

/**
 * Aula 1 — Planejar antes de escrever
 * -------------------------------------------------------------
 * Abertura da Unidade 5 (Diário de Bordo). Antes de qualquer
 * expedição, o explorador estuda o mapa. Antes de qualquer texto,
 * o escritor faz um esquema: para quem escrevo, o quê e em que
 * ordem. Escrever sem planejar é como sair de casa sem bússola.
 *
 * BNCC: EF35LP25, EF35LP26
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-planejar-antes-de-escrever",
  titulo: "Planejar antes de escrever",
  iconeTrilha: "🧭",
  bncc: ["EF35LP25", "EF35LP26"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "Ninguém parte sem mapa",
    historia:
      "Aurora abriu um mapa velho sobre a mesa. — Nenhum explorador de verdade sai de casa sem saber para onde vai, certo? Com a escrita é igual: antes de escrever a primeira palavra, um bom escritor planeja. Ele decide para QUEM vai escrever, O QUE vai dizer e em que ORDEM. Hoje você vira cartógrafo do próprio texto.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao:
      "Observe as ferramentas de um explorador antes de uma expedição. O que elas têm em comum com escrever um texto?",
    bloco: {
      titulo: "A Mala do Explorador",
      capaImagemUrl: mochila,
      pistas: [
        { imagemUrl: bussola, nome: "Uma bússola" },
        { imagemUrl: mapa, nome: "Um mapa" },
      ],
      pergunta: "Por que um explorador carrega bússola e mapa antes de sair?",
      hipoteses: [
        { texto: "Para não se perder e saber para onde ir." },
        { texto: "Só para decorar a mochila, sem função real." },
        { texto: "Porque é obrigado, mas não serve pra nada." },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🧭 Isso! Bússola e mapa evitam que o explorador se perca. Um esquema de escrita faz o mesmo pelo seu texto.",
      feedbackErro:
        "Pense: sem bússola, o explorador anda em círculos. Sem plano, o texto também 'anda em círculos' e se perde.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras-ferramenta para planejar qualquer texto.",
    cards: [
      {
        palavra: "esquema",
        explicacao:
          "É um plano rápido, em tópicos, com as ideias principais do texto ANTES de escrever as frases completas. Serve de mapa para não se perder.",
        exemplo: "Um esquema pode ter só 3 linhas: 'início: apresentar o problema / meio: explicar como resolvi / fim: o resultado'.",
        imagemUrl: papel,
      },
      {
        palavra: "leitor",
        explicacao:
          "É a pessoa para quem você escreve. Pensar nela muda o texto: um bilhete para o colega é diferente de um relatório para a diretora.",
        exemplo: "Se o leitor é uma criança pequena, uso palavras simples; se é um adulto, posso usar palavras mais técnicas.",
        imagemUrl: menina,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "As três perguntas do planejamento",
    instrucao: "Todo escritor experiente responde estas três perguntas antes de escrever.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "Para quem escrevo? (o leitor)",
            explicacao: "Um colega, a família, a turma inteira, um jornal da escola — cada leitor pede um jeito de escrever.",
          },
          {
            texto: "O que quero dizer? (a ideia principal)",
            explicacao: "Se eu não sei o que quero dizer, o leitor também não vai entender.",
          },
          {
            texto: "Em que ordem vou contar? (a sequência)",
            explicacao: "Primeiro isso, depois aquilo — ordenar as ideias evita bagunça no texto.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia o esquema que Rafael fez ANTES de escrever sobre sua viagem à fazenda.",
    leitura: {
      titulo: "O Esquema de Rafael",
      imagemUrl: mapa,
      legendaImagem: "O rascunho de Rafael, cheio de tópicos e setas",
      destacar: ["Para quem:", "Ideia principal:", "Ordem:"],
      paragrafos: [
        "Para quem: vou escrever um texto para o mural da escola, que outras turmas vão ler.",
        "Ideia principal: contar como foi tirar leite de vaca pela primeira vez, na fazenda do meu avô.",
        "Ordem: 1) chegada na fazenda de manhã cedo; 2) o avô ensinando o jeito certo de tirar leite; 3) minha primeira tentativa, engraçada e desastrada; 4) o gosto do leite fresquinho no café.",
        "Com esse esquema pronto, Rafael escreveu o texto em poucos minutos — porque já sabia exatamente o que ia dizer e em que ordem.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto sempre que precisar.",
    perguntas: [
      {
        pergunta: "Para quem Rafael decidiu escrever?",
        opcoes: ["Só para o avô", "Para o mural da escola", "Para ninguém"],
        correta: 1,
        feedbackAcerto: "🧭 Isso! Ele pensou no leitor: o mural da escola.",
        feedbackErro: "Releia o primeiro tópico do esquema: 'Para quem'.",
        ondeEstaNoTexto: "Para quem: vou escrever um texto para o mural da escola…",
      },
      {
        pergunta: "Qual é a ideia principal do texto de Rafael?",
        opcoes: [
          "A rotina da escola",
          "Tirar leite de vaca pela primeira vez",
          "Uma receita de bolo",
        ],
        correta: 1,
        feedbackAcerto: "🧭 Exato! A ideia principal está no segundo tópico.",
        feedbackErro: "Veja o que ele escreveu em 'Ideia principal'.",
        ondeEstaNoTexto: "…tirar leite de vaca pela primeira vez, na fazenda do meu avô.",
      },
      {
        pergunta: "Quantas partes tem a ordem que Rafael planejou?",
        opcoes: ["Duas", "Três", "Quatro"],
        correta: 2,
        feedbackAcerto: "🧭 Isso! Ele numerou de 1 a 4 na 'Ordem'.",
        feedbackErro: "Conte os itens numerados no terceiro tópico do esquema.",
        ondeEstaNoTexto: "Ordem: 1) chegada… 2) o avô ensinando… 3) minha primeira tentativa… 4) o gosto do leite.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora pense no PORQUÊ de cada parte do esquema.",
    perguntas: [
      {
        pergunta: "Por que Rafael conseguiu escrever rápido depois de fazer o esquema?",
        opcoes: [
          "Porque já sabia o que ia dizer e em que ordem",
          "Porque copiou de um livro",
          "Porque não pensou em nada antes",
        ],
        correta: 0,
        feedbackAcerto: "🧭 Isso! O esquema é o mapa: quando ele já existe, escrever fica muito mais rápido e claro.",
        feedbackErro: "Releia a última frase do texto: o que o esquema já tinha resolvido antes de ele escrever?",
      },
      {
        pergunta: "O que mudaria no texto se o leitor fosse só o avô, e não a escola inteira?",
        opcoes: [
          "Nada mudaria",
          "Rafael poderia usar detalhes mais íntimos, sem precisar explicar quem é o avô",
          "O texto ficaria proibido",
        ],
        correta: 1,
        feedbackAcerto: "🧭 Certo! Pensar no leitor muda o que precisa (ou não) ser explicado.",
        feedbackErro: "Pense: para um estranho, é preciso explicar mais coisas do que para alguém que já conhece a história.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize as etapas do planejamento de um texto, na ordem certa de um escritor experiente.",
    bloco: {
      instrucao: "Primeiro se pensa, depois se organiza, só então se escreve.",
      itens: [
        { id: "p1", texto: "Decidir para quem vou escrever e qual é a ideia principal.", imagemUrl: bussola },
        { id: "p2", texto: "Fazer um esquema em tópicos, colocando as partes em ordem.", imagemUrl: papel },
        { id: "p3", texto: "Escrever o texto completo, seguindo o esquema como guia.", imagemUrl: lapis },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🧭 Perfeito! Pensar → organizar em tópicos → escrever. Esse é o caminho do escritor experiente.",
      feedbackErro: "Pense: primeiro vem a decisão, depois o esquema, e só no final o texto inteiro.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo esquema! Leia sozinho e responda.",
    leitura: {
      titulo: "O Esquema de Sofia",
      imagemUrl: quadro,
      destacar: ["Para quem:", "Ideia principal:", "Ordem:"],
      paragrafos: [
        "Para quem: vou escrever um bilhete para minha professora, avisando que faltarei à aula de quinta-feira.",
        "Ideia principal: explicar o motivo da falta (uma consulta médica) e pedir os deveres da semana.",
        "Ordem: 1) cumprimento; 2) aviso da falta e o motivo; 3) pedido dos deveres; 4) despedida educada.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual é a ideia principal do bilhete de Sofia?",
        opcoes: [
          "Contar uma história de aventura",
          "Explicar a falta e pedir os deveres",
          "Convidar a professora para um passeio",
        ],
        correta: 1,
        feedbackAcerto: "🧭 Isso! É exatamente o que está no segundo tópico do esquema.",
        feedbackErro: "Releia 'Ideia principal' no esquema de Sofia.",
        ondeEstaNoTexto: "Ideia principal: explicar o motivo da falta… e pedir os deveres da semana.",
      },
      {
        pergunta: "Por que faz sentido Sofia terminar com uma 'despedida educada'?",
        opcoes: [
          "Porque é a última etapa da ordem que ela mesma planejou",
          "Porque não tem motivo nenhum",
          "Porque bilhetes não podem ter despedida",
        ],
        correta: 0,
        feedbackAcerto: "🧭 Exato! Ela mesma organizou essa ordem no esquema — e seguiu até o fim.",
        feedbackErro: "Olhe a lista numerada em 'Ordem': o que vem por último?",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "Antes de escrever, responda: para quem? o quê? em que ordem?",
      "Um esquema é um plano rápido em tópicos — o mapa do seu texto.",
      "Pensar no leitor muda as palavras e os detalhes que você escolhe.",
      "Quem planeja escreve mais rápido e se perde menos.",
    ],
    miniDesafio: {
      pergunta: "Você vai escrever sobre 'meu animal de estimação' para um amigo. Qual seria um bom primeiro passo?",
      opcoes: [
        "Começar a escrever frases soltas sem pensar em nada",
        "Fazer um esquema: para quem, ideia principal e ordem das partes",
        "Copiar o texto de outra pessoa",
      ],
      correta: 1,
      feedbackAcerto: "🧭 Isso! Todo bom texto começa com um plano — mesmo que rápido e em tópicos.",
      feedbackErro: "Lembre-se do caminho do escritor: pensar e organizar ANTES de escrever a frase completa.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é um esquema de escrita?",
        opcoes: ["O título do texto", "Um plano em tópicos, feito antes de escrever", "A última revisão do texto"],
        correta: 1,
        feedbackAcerto: "🧭 Isso! O esquema vem ANTES, como um mapa.",
        feedbackErro: "Esquema é o plano em tópicos que organiza as ideias antes de escrever.",
      },
      {
        pergunta: "2/5 — Por que é importante pensar 'para quem escrevo'?",
        opcoes: [
          "Porque não faz diferença nenhuma",
          "Porque o leitor muda as palavras e os detalhes do texto",
          "Porque só serve para textos de escola",
        ],
        correta: 1,
        feedbackAcerto: "🧭 Correto! O leitor influencia como você escreve.",
        feedbackErro: "Pensar no leitor ajuda a escolher palavras e detalhes certos para quem vai ler.",
      },
      {
        pergunta: "3/5 — No esquema de Rafael, o que veio na parte 'Ordem'?",
        opcoes: [
          "Uma lista numerada das partes da história",
          "O nome da escola",
          "Um desenho da vaca",
        ],
        correta: 0,
        feedbackAcerto: "🧭 Isso mesmo!",
        feedbackErro: "'Ordem' é onde ele numerou as partes da história, do começo ao fim.",
      },
      {
        pergunta: "4/5 — Qual é a vantagem de planejar antes de escrever?",
        opcoes: [
          "Escrever mais rápido e se perder menos",
          "Deixar o texto mais longo sem motivo",
          "Não precisar mais revisar depois",
        ],
        correta: 0,
        feedbackAcerto: "🧭 Isso! Planejar economiza tempo e evita bagunça nas ideias.",
        feedbackErro: "Quem planeja sabe o que vai dizer — por isso escreve mais rápido e organizado.",
      },
      {
        pergunta: "5/5 — Quais são as três perguntas do planejamento?",
        opcoes: [
          "Para quem? O quê? Em que ordem?",
          "Quando? Onde? Com quem?",
          "Por quê? Quanto? Como?",
        ],
        correta: 0,
        feedbackAcerto: "🧭 Exato! Você já pensa como um explorador de textos. 🌟",
        feedbackErro: "As três perguntas são: para quem escrevo, o que quero dizer e em que ordem vou contar.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: o mapa do meu texto",
    materiais: ["Papel", "Lápis"],
    passos: [
      "1) Escolham juntos um assunto para um texto curto (um passeio, uma receita, um animal de estimação).",
      "2) A criança responde em voz alta: para quem vou escrever? qual é a ideia principal? em que ordem vou contar?",
      "3) Registrem as respostas em tópicos numerados, como um esquema de verdade.",
      "4) Guardem esse esquema — ele será usado na próxima aula para escrever o texto completo!",
    ],
    registro: "🗣️ Fotografem ou registrem o esquema em tópicos (para quem, ideia principal, ordem).",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
