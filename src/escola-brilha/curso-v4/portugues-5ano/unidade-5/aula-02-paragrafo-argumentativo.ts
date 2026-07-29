import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 2 — Parágrafo argumentativo
 * -------------------------------------------------------------
 * A investigação avança: como construir um parágrafo que defenda
 * uma ideia. Estrutura: tópico frasal (a ideia central), argumento
 * (a prova/explicação) e fechamento (retoma e reforça a ideia).
 *
 * BNCC: EF05LP24, EF05LP25, EF35LP26, EF05LP27
 */
export const aula2: AulaPortuguesV4 = {
  slug: "aula-02-paragrafo-argumentativo",
  titulo: "Parágrafo Argumentativo",
  iconeTrilha: "⚖️",
  bncc: ["EF05LP24", "EF05LP25", "EF35LP26"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "A Arte de Defender uma Ideia",
    historia:
      "A investigadora colocou três peças sobre a bancada: uma ideia, uma prova e uma conclusão. — Convencer alguém por escrito não é gritar mais alto, é construir um parágrafo bem montado. Existe uma estrutura por trás de todo texto que defende um ponto de vista: primeiro você anuncia a ideia, depois prova com um argumento, e no fim reforça a conclusão. Hoje vamos desmontar esse mecanismo peça por peça.",
    imagemUrl: undefined,
  },

  momento02_previsao: {
    instrucao:
      "Antes de aprender a estrutura completa, observe este parágrafo defendendo uma ideia. Tente identificar as partes que o compõem.",
    bloco: {
      titulo: "O Parágrafo da Investigadora",
      recado: {
        rotulo: "Rascunho de argumento",
        icone: "⚖️",
        linhas: [
          "As escolas deveriam ter mais tempo de recreio.",
          "Estudos mostram que pausas melhoram a concentração dos alunos.",
          "Por isso, aumentar o recreio ajudaria no aprendizado.",
        ],
        estilo: "papel",
      },
      pergunta: "O que a primeira frase desse parágrafo está fazendo?",
      hipoteses: [
        { texto: "Apresenta a ideia central que o parágrafo vai defender" },
        { texto: "Conta uma história sem relação com o assunto" },
        { texto: "Faz uma pergunta que não será respondida" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "⚖️ Exato! A primeira frase apresenta a ideia central — é o que chamamos de tópico frasal. As frases seguintes vão provar essa ideia.",
      feedbackErro:
        "Releia a primeira frase: ela anuncia logo de cara a opinião que o parágrafo inteiro vai defender. Isso é o tópico frasal.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três peças que formam um parágrafo argumentativo sólido.",
    cards: [
      {
        palavra: "tópico frasal",
        explicacao:
          "É a primeira frase do parágrafo, que apresenta de forma clara a ideia central que será defendida.",
        exemplo: "'As escolas deveriam ter mais tempo de recreio' é o tópico frasal de um parágrafo sobre o assunto.",
      },
      {
        palavra: "argumento",
        explicacao:
          "É a explicação, prova ou exemplo que sustenta o tópico frasal — o motivo pelo qual a ideia central é válida.",
        exemplo: "'Estudos mostram que pausas melhoram a concentração dos alunos' é um argumento que sustenta a ideia do recreio maior.",
      },
      {
        palavra: "fechamento",
        explicacao:
          "É a frase final do parágrafo, que retoma a ideia central e reforça a conclusão, sem simplesmente repetir a primeira frase com as mesmas palavras.",
        exemplo: "'Por isso, aumentar o recreio ajudaria no aprendizado' fecha o parágrafo retomando a ideia central.",
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia identificando as três partes: onde está o tópico frasal, o argumento e o fechamento?",
    leitura: {
      titulo: "Por que Ler Todos os Dias Faz Diferença",
      destacar: [
        "a leitura diária amplia o vocabulário",
        "estudos comprovam que quem lê mais escreve melhor",
        "portanto, criar o hábito de ler todos os dias é um investimento",
      ],
      paragrafos: [
        "A leitura diária amplia o vocabulário e melhora a capacidade de escrever com clareza. Isso acontece porque, ao ler, a pessoa entra em contato com palavras, estruturas de frase e formas de organizar ideias que depois aparecem, quase automaticamente, na sua própria escrita.",
        "Estudos com estudantes de diferentes idades comprovam que quem lê mais escreve melhor: alunos que leem com frequência cometem menos erros de concordância e conseguem organizar parágrafos com mais coerência do que colegas que raramente leem.",
        "Portanto, criar o hábito de ler todos os dias, mesmo que por apenas quinze minutos, é um investimento que traz resultados visíveis tanto na leitura quanto na escrita.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao texto sempre que precisar confirmar sua resposta.",
    perguntas: [
      {
        pergunta: "Qual frase apresenta a ideia central (tópico frasal) do primeiro parágrafo?",
        opcoes: [
          "A leitura diária amplia o vocabulário e melhora a capacidade de escrever com clareza",
          "Isso acontece porque, ao ler, a pessoa entra em contato com palavras",
          "Portanto, criar o hábito de ler todos os dias é um investimento",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Isso! Essa é a primeira frase, que anuncia a ideia central do texto.",
        feedbackErro: "O tópico frasal é sempre a primeira frase, que resume a ideia que será defendida.",
        ondeEstaNoTexto: "A leitura diária amplia o vocabulário e melhora a capacidade de escrever com clareza.",
      },
      {
        pergunta: "Qual argumento é usado para sustentar essa ideia?",
        opcoes: [
          "O fato de que livros custam caro",
          "Estudos que mostram que quem lê mais escreve melhor",
          "A opinião de que ler é uma atividade chata",
        ],
        correta: 1,
        feedbackAcerto: "⚖️ Correto! O segundo parágrafo traz esse dado como prova da ideia defendida.",
        feedbackErro: "O segundo parágrafo apresenta um estudo como prova — releia com atenção.",
        ondeEstaNoTexto: "Estudos com estudantes de diferentes idades comprovam que quem lê mais escreve melhor...",
      },
      {
        pergunta: "Qual é a frase de fechamento do texto?",
        opcoes: [
          "A leitura diária amplia o vocabulário",
          "Alunos que leem com frequência cometem menos erros",
          "Portanto, criar o hábito de ler todos os dias é um investimento que traz resultados visíveis",
        ],
        correta: 2,
        feedbackAcerto: "⚖️ Exato! A palavra 'portanto' já indica que é a conclusão, retomando a ideia central.",
        feedbackErro: "Procure a palavra que indica conclusão — 'portanto' — no início do último parágrafo.",
        ondeEstaNoTexto: "Portanto, criar o hábito de ler todos os dias... é um investimento que traz resultados visíveis...",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora aplique a estrutura: identifique tópico frasal, argumento e fechamento em novas situações.",
    perguntas: [
      {
        pergunta:
          "Um colega escreveu: 'Animais não deveriam viver em zoológicos. Muitos deles sofrem estresse por viver em espaços pequenos, diferentes do habitat natural.' Qual é o papel da segunda frase?",
        opcoes: [
          "É o tópico frasal",
          "É um argumento que sustenta a ideia da primeira frase",
          "É o fechamento do parágrafo",
        ],
        correta: 1,
        feedbackAcerto:
          "⚖️ Isso! A segunda frase explica e prova por que a ideia da primeira frase (tópico frasal) é válida — isso é um argumento.",
        feedbackErro:
          "A primeira frase já é o tópico frasal. A segunda frase serve para provar essa ideia — por isso é um argumento.",
      },
      {
        pergunta:
          "Qual das frases abaixo funcionaria melhor como FECHAMENTO de um parágrafo sobre a importância de reciclar?",
        opcoes: [
          "Reciclar é uma atitude que qualquer pessoa pode praticar em casa",
          "Por isso, reciclar é essencial para reduzir o impacto do lixo no meio ambiente",
          "O que é reciclagem?",
        ],
        correta: 1,
        feedbackAcerto:
          "⚖️ Correto! A frase com 'por isso' retoma a ideia central e conclui o raciocínio — função típica do fechamento.",
        feedbackErro:
          "O fechamento retoma a ideia central com uma conclusão, geralmente usando palavras como 'por isso' ou 'portanto'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize as três partes de um parágrafo argumentativo na ordem correta.",
    bloco: {
      instrucao: "Do início ao fim do parágrafo.",
      itens: [
        { id: "p1", texto: "Tópico frasal: apresenta a ideia central que será defendida" },
        { id: "p2", texto: "Argumento: explica ou prova por que essa ideia é válida" },
        { id: "p3", texto: "Fechamento: retoma a ideia central e conclui o raciocínio" },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "⚖️ Correto! Essa é a estrutura clássica do parágrafo argumentativo.",
      feedbackErro:
        "Pense: primeiro se anuncia a ideia, depois se prova, e só então se conclui reforçando o que foi dito.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo parágrafo para investigar sozinho! Identifique as três partes da estrutura.",
    leitura: {
      titulo: "A Importância de Praticar Esportes",
      destacar: [
        "praticar esportes regularmente traz benefícios",
        "pesquisas indicam que crianças ativas dormem melhor",
        "logo, incluir o esporte na rotina é uma escolha que beneficia",
      ],
      paragrafos: [
        "Praticar esportes regularmente traz benefícios para o corpo e para a mente, indo muito além do simples condicionamento físico.",
        "Pesquisas indicam que crianças ativas dormem melhor, concentram-se mais nas tarefas escolares e apresentam menos sintomas de ansiedade do que crianças sedentárias.",
        "Logo, incluir o esporte na rotina semanal é uma escolha que beneficia tanto a saúde física quanto o desempenho nos estudos.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual frase funciona como tópico frasal desse texto?",
        opcoes: [
          "Praticar esportes regularmente traz benefícios para o corpo e para a mente",
          "Pesquisas indicam que crianças ativas dormem melhor",
          "Logo, incluir o esporte na rotina semanal é uma escolha que beneficia",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Isso! É a primeira frase, que apresenta a ideia central do parágrafo.",
        feedbackErro: "O tópico frasal é sempre a primeira frase do parágrafo — releia o início do texto.",
        ondeEstaNoTexto: "Praticar esportes regularmente traz benefícios para o corpo e para a mente...",
      },
      {
        pergunta: "Qual é o argumento usado para provar essa ideia?",
        opcoes: [
          "A opinião pessoal do autor sobre esportes",
          "A pesquisa que mostra que crianças ativas dormem melhor e se concentram mais",
          "Uma lista de esportes praticados no Brasil",
        ],
        correta: 1,
        feedbackAcerto: "⚖️ Exato! O segundo parágrafo apresenta uma pesquisa como prova da ideia central.",
        feedbackErro: "Procure o segundo parágrafo: ele traz um dado de pesquisa como argumento.",
        ondeEstaNoTexto: "Pesquisas indicam que crianças ativas dormem melhor...",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "Um parágrafo argumentativo tem três partes: TÓPICO FRASAL (a ideia central), ARGUMENTO (a prova) e FECHAMENTO (a conclusão).",
      "O tópico frasal aparece geralmente na primeira frase e resume o que o parágrafo vai defender.",
      "O argumento explica ou comprova por que a ideia do tópico frasal é válida — pode ser um exemplo, um dado ou uma explicação lógica.",
      "O fechamento retoma a ideia central com uma conclusão, muitas vezes usando palavras como 'portanto', 'por isso' ou 'logo'.",
    ],
    miniDesafio: {
      pergunta:
        "Em um parágrafo sobre 'a importância da água potável', qual frase seria o melhor ARGUMENTO?",
      opcoes: [
        "A água é essencial para a vida.",
        "Estudos mostram que a falta de água potável causa doenças graves em milhões de pessoas.",
        "Beber água é bom.",
      ],
      correta: 1,
      feedbackAcerto:
        "⚖️ Isso! Essa frase traz um dado concreto que prova a importância da água potável — é um bom argumento.",
      feedbackErro:
        "Um bom argumento traz uma prova concreta (dado, exemplo, pesquisa), não apenas uma afirmação genérica.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é o 'tópico frasal'?",
        opcoes: [
          "A última frase do parágrafo",
          "A frase que apresenta a ideia central que será defendida",
          "Uma frase sem relação com o parágrafo",
        ],
        correta: 1,
        feedbackAcerto: "⚖️ Isso! O tópico frasal apresenta a ideia central logo no início.",
        feedbackErro: "O tópico frasal é a frase, geralmente a primeira, que anuncia a ideia central do parágrafo.",
      },
      {
        pergunta: "2/5 — Qual é a função do 'argumento' num parágrafo argumentativo?",
        opcoes: [
          "Provar ou explicar por que a ideia central é válida",
          "Repetir a mesma frase do início",
          "Introduzir um assunto completamente novo",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Correto! O argumento sustenta a ideia central com provas ou explicações.",
        feedbackErro: "O argumento serve para comprovar a ideia central, com exemplos, dados ou explicações.",
      },
      {
        pergunta: "3/5 — Qual palavra costuma indicar o fechamento de um parágrafo argumentativo?",
        opcoes: ["Talvez", "Portanto", "Ontem"],
        correta: 1,
        feedbackAcerto: "⚖️ Isso! Palavras como 'portanto', 'logo' e 'por isso' costumam abrir o fechamento.",
        feedbackErro: "Palavras conclusivas como 'portanto' ou 'por isso' geralmente marcam o fechamento.",
      },
      {
        pergunta: "4/5 — No texto sobre esportes, qual era a função da frase com 'Logo, incluir o esporte...'?",
        opcoes: ["Tópico frasal", "Argumento", "Fechamento"],
        correta: 2,
        feedbackAcerto: "⚖️ Exato! Essa frase retoma a ideia e conclui o parágrafo.",
        feedbackErro: "A palavra 'logo' marca conclusão — essa frase é o fechamento do parágrafo.",
      },
      {
        pergunta: "5/5 — Qual é a ordem correta das partes de um parágrafo argumentativo?",
        opcoes: [
          "Fechamento → argumento → tópico frasal",
          "Tópico frasal → argumento → fechamento",
          "Argumento → fechamento → tópico frasal",
        ],
        correta: 1,
        feedbackAcerto:
          "⚖️ Isso! Você já domina a estrutura do parágrafo argumentativo. Prova montada com sucesso! 🌟",
        feedbackErro: "A ordem lógica é: primeiro anunciar a ideia, depois provar, e por fim concluir.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: montando um parágrafo argumentativo em casa",
    materiais: ["Papel e lápis", "Um tema de opinião (ex.: 'animais de estimação em apartamento')"],
    passos: [
      "1) Escolham juntos um assunto sobre o qual a criança tem uma opinião.",
      "2) A criança escreve o TÓPICO FRASAL: uma frase que anuncia a ideia que vai defender.",
      "3) Depois, ela escreve um ARGUMENTO: um motivo ou exemplo que prova essa ideia.",
      "4) Por fim, ela escreve o FECHAMENTO, retomando a ideia com uma palavra como 'portanto' ou 'por isso'.",
    ],
    registro: "🗣️ Registre por escrito o parágrafo completo com as três partes identificadas.",
  },

  recompensa: {
    xp: 135,
    moedas: 75,
  },
};
