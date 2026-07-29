import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 4 — Debate e Seminário
 * -------------------------------------------------------------
 * Encerramento da Unidade 6 (Sala de Literatura e Voz) do curso
 * "A Central de Investigação da Linguagem".
 *
 * Foco pedagógico: oralidade formal, estruturar argumentos com
 * clareza, escutar e responder ao ponto de vista do outro e
 * diferenciar fala cotidiana de apresentação formal.
 *
 * BNCC: EF35LP07, EF15LP06, EF05LP08
 */
export const aula4: AulaPortuguesV4 = {
  slug: "aula-04-debate-e-seminario",
  titulo: "Debate e Seminário",
  iconeTrilha: "🎤",
  bncc: ["EF35LP07", "EF15LP06", "EF05LP08"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "Falar bem também é uma investigação",
    historia:
      "Conversar com os amigos no recreio é uma coisa. Apresentar um trabalho para a turma toda, ou defender uma opinião num debate, é outra bem diferente. A voz muda, as palavras ficam mais organizadas, e escutar o outro se torna tão importante quanto falar. Hoje você vai investigar como funciona a oralidade formal: como argumentar com clareza, como escutar sem interromper e como um debate pode ser produtivo em vez de virar bagunça.",
  },

  momento02_previsao: {
    instrucao:
      "Leia a situação abaixo e pense: essa fala combina com um debate formal ou é mais parecida com uma conversa informal?",
    bloco: {
      titulo: "Duas formas de falar sobre o mesmo assunto",
      recado: {
        rotulo: "Fala em sala de aula",
        icone: "🗣️",
        linhas: [
          "\"Eu discordo respeitosamente do colega. Na minha opinião, o recreio deveria ser maior, e explico o motivo: as crianças precisam de mais tempo para descansar entre as aulas.\"",
        ],
        estilo: "papel",
      },
      pergunta: "Essa forma de falar é característica de:",
      hipoteses: [
        { texto: "Uma conversa despreocupada entre amigos, sem nenhuma estrutura" },
        { texto: "Uma fala formal, organizada, que apresenta opinião e justificativa com respeito ao outro" },
        { texto: "Uma discussão onde ninguém escuta ninguém" },
      ],
      respostaCerta: 1,
      feedbackAcerto:
        "🔎 Isso! A fala usa expressões de respeito ('discordo respeitosamente'), apresenta uma opinião clara e justifica com um motivo — características da oralidade formal usada em debates.",
      feedbackErro:
        "Repare nas expressões usadas: 'discordo respeitosamente', 'explico o motivo'. Isso mostra organização e respeito, típicos de uma fala formal.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Ferramentas que todo debatedor e apresentador de seminário precisa dominar.",
    cards: [
      {
        palavra: "argumento",
        explicacao:
          "É a razão ou justificativa que sustenta uma opinião. Um bom argumento explica o 'porquê' de forma clara, muitas vezes com exemplos ou dados.",
        exemplo: "'Acho que devemos reciclar mais, porque isso reduz o lixo que vai para os aterros.'",
      },
      {
        palavra: "escuta ativa",
        explicacao:
          "É prestar atenção total no que o outro está dizendo, sem interromper, para depois responder de forma coerente ao que foi falado — e não a algo imaginado.",
        exemplo: "Antes de discordar, repetir com suas palavras o que o colega disse, para mostrar que realmente escutou.",
      },
      {
        palavra: "oralidade formal",
        explicacao:
          "É a fala usada em situações públicas ou organizadas (debates, seminários, apresentações), com vocabulário mais cuidadoso, tom respeitoso e ideias estruturadas — diferente da conversa informal do dia a dia.",
        exemplo: "Dizer 'Gostaria de complementar o que foi dito' em vez de 'Ah, deixa eu falar uma coisa também'.",
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia a transcrição de um debate escolar e observe como cada aluno estrutura sua fala.",
    leitura: {
      titulo: "Debate: Uniforme Escolar é Necessário?",
      destacar: ["Discordo, e vou explicar por quê", "gostaria de complementar", "reconheço o ponto do colega, mas"],
      paragrafos: [
        "A mediadora abriu o debate: 'Hoje discutimos se o uniforme escolar deveria ser obrigatório. Cada grupo terá um minuto para apresentar sua posição.' Léo começou: 'Defendo que o uniforme é importante porque cria um senso de igualdade entre os alunos, já que todos usam a mesma roupa, sem diferenças de marca ou preço.'",
        "Bianca respondeu: 'Discordo, e vou explicar por quê: o uniforme pode limitar a expressão pessoal dos alunos, que também aprendem a se conhecer através da forma como se vestem.' Léo então disse: 'Reconheço o ponto da colega, mas acredito que a escola é um espaço de aprendizado, não de moda, e o foco deveria estar nos estudos.'",
        "Rafael pediu a palavra: 'Gostaria de complementar o que o Léo falou: além da igualdade, o uniforme facilita a identificação dos alunos em passeios e emergências.' A mediadora então perguntou à turma se alguém queria fazer uma pergunta aos debatedores, mantendo o respeito e a ordem da fala.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao texto sempre que precisar confirmar sua resposta.",
    perguntas: [
      {
        pergunta: "Qual é o tema do debate apresentado?",
        opcoes: ["Se o recreio deveria ser maior", "Se o uniforme escolar deveria ser obrigatório", "Se as provas deveriam acabar"],
        correta: 1,
        feedbackAcerto: "🔎 Isso! A mediadora anuncia logo no início: 'discutimos se o uniforme escolar deveria ser obrigatório.'",
        feedbackErro: "Releia a primeira fala da mediadora: ela apresenta o tema logo no começo do debate.",
        ondeEstaNoTexto: "Hoje discutimos se o uniforme escolar deveria ser obrigatório.",
      },
      {
        pergunta: "Qual argumento Léo usa a favor do uniforme?",
        opcoes: [
          "Que o uniforme é mais barato",
          "Que o uniforme cria um senso de igualdade entre os alunos",
          "Que o uniforme é mais confortável",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Exato! Léo defende que o uniforme evita diferenças de marca ou preço entre os alunos, criando igualdade.",
        feedbackErro: "Releia a fala de Léo: ele fala sobre 'senso de igualdade' entre os alunos.",
        ondeEstaNoTexto: "o uniforme é importante porque cria um senso de igualdade entre os alunos",
      },
      {
        pergunta: "Quando Léo diz 'Reconheço o ponto da colega, mas...', ele está demonstrando:",
        opcoes: [
          "Que não escutou o argumento de Bianca",
          "Escuta ativa, pois primeiro reconhece o argumento do outro antes de discordar",
          "Que concorda totalmente com Bianca",
        ],
        correta: 1,
        feedbackAcerto:
          "🔎 Perfeito! Reconhecer o argumento do outro antes de responder é sinal de escuta ativa — ele demonstra que entendeu, mesmo discordando.",
        feedbackErro:
          "Pense: para dizer 'reconheço o ponto', é preciso ter escutado com atenção o que a outra pessoa falou antes.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora investigue as estratégias de argumentação e escuta usadas no debate.",
    perguntas: [
      {
        pergunta: "Por que Rafael usa a expressão 'gostaria de complementar o que o Léo falou' em vez de simplesmente repetir a mesma ideia sem contexto?",
        opcoes: [
          "Porque isso mostra que ele escutou a fala anterior e está construindo sobre ela, organizando o debate",
          "Porque é uma regra sem sentido do debate",
          "Porque ele queria interromper Léo",
        ],
        correta: 0,
        feedbackAcerto:
          "🔎 Isso mesmo! Essa expressão sinaliza escuta e organiza a conversa, mostrando que a fala de Rafael se conecta com a de Léo, e não que é isolada.",
        feedbackErro:
          "Pense no efeito da expressão: ela avisa a todos que Rafael escutou Léo e vai construir em cima da ideia dele, não repetir do zero.",
      },
      {
        pergunta: "Qual é o papel da mediadora no debate?",
        opcoes: [
          "Decidir sozinha quem está certo",
          "Organizar os turnos de fala, manter o respeito e a ordem entre os participantes",
          "Falar mais do que os debatedores",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Exato! A mediadora garante que todos tenham vez de falar e que o debate siga de forma organizada e respeitosa.",
        feedbackErro: "Releia as falas da mediadora: ela abre o debate, distribui o tempo de fala e organiza as perguntas — não impõe uma opinião.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para participar bem de um debate, do primeiro ao último.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Escutar com atenção total o que o outro está dizendo, sem interromper." },
        { id: "p2", texto: "Organizar sua opinião com um argumento claro e um motivo que a justifique." },
        { id: "p3", texto: "Reconhecer o ponto do outro antes de concordar ou discordar, com respeito." },
        { id: "p4", texto: "Apresentar sua fala de forma organizada, esperando o momento certo de falar." },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🔎 Perfeito! Essa é a rota de um bom debatedor: escutar → organizar → reconhecer → apresentar.",
      feedbackErro: "Pense: antes de falar bem, é preciso escutar bem — e reconhecer o que o outro disse antes de responder.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo debate! Leia sozinho e identifique as estratégias de argumentação e escuta.",
    leitura: {
      titulo: "Seminário: Animais de Estimação na Escola?",
      destacar: ["Concordo em parte, porém", "com base em uma pesquisa que fizemos", "peço a palavra para esclarecer"],
      paragrafos: [
        "Durante o seminário sobre convivência escolar, Ana apresentou: 'Com base em uma pesquisa que fizemos com a turma, 70% dos alunos acham que animais de estimação não deveriam ser levados à escola, por questões de alergia e segurança.' Pedro então disse: 'Concordo em parte, porém acho que, em datas especiais como o Dia dos Animais, poderia haver uma exceção com autorização dos pais.'",
        "Júlia pediu a palavra para esclarecer: 'Só para reforçar o dado da Ana, muitos colegas relataram ter alergia a pelo de animal, o que reforça a preocupação com segurança.' O professor, mediando o seminário, perguntou se alguém discordava completamente da proposta de Pedro sobre a exceção em datas especiais.",
      ],
    },
    perguntas: [
      {
        pergunta: "Que tipo de argumento Ana usa para defender sua posição?",
        opcoes: [
          "Uma opinião pessoal sem nenhuma base",
          "Um dado de pesquisa feita com a turma (70% dos alunos)",
          "Uma história inventada",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Isso! Ana usa um dado concreto de uma pesquisa real feita com a turma, o que fortalece seu argumento.",
        feedbackErro: "Releia a fala de Ana: ela menciona um número específico vindo de uma pesquisa feita com a turma.",
        ondeEstaNoTexto: "Com base em uma pesquisa que fizemos com a turma, 70% dos alunos acham",
      },
      {
        pergunta: "A expressão 'Concordo em parte, porém' usada por Pedro mostra que ele:",
        opcoes: [
          "Discorda de tudo sem exceção",
          "Reconhece o argumento de Ana, mas propõe uma matização ou exceção à ideia",
          "Não entendeu nada do que Ana disse",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Exato! Pedro concorda parcialmente e propõe uma nuance — típico de uma escuta ativa e argumentação respeitosa.",
        feedbackErro: "Pense: 'concordo em parte' significa que ele aceita parte da ideia, mas quer acrescentar algo diferente.",
        ondeEstaNoTexto: "Concordo em parte, porém acho que, em datas especiais",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "Um bom ARGUMENTO apresenta uma opinião e a justifica com um motivo claro, muitas vezes com dados ou exemplos.",
      "A ESCUTA ATIVA significa prestar atenção total no que o outro diz, sem interromper, para responder de forma coerente.",
      "A ORALIDADE FORMAL usa vocabulário cuidadoso, tom respeitoso e ideias organizadas — diferente da conversa informal.",
      "Reconhecer o ponto do outro antes de concordar ou discordar (com expressões como 'reconheço, mas...') torna o debate mais respeitoso e produtivo.",
    ],
    miniDesafio: {
      pergunta: "Qual expressão mostra escuta ativa antes de discordar?",
      opcoes: ["'Isso não tem nada a ver'", "'Reconheço o ponto do colega, mas...'", "'Fica quieto, agora é minha vez'"],
      correta: 1,
      feedbackAcerto: "🔎 Isso! Reconhecer o argumento do outro antes de discordar mostra que a pessoa escutou com atenção.",
      feedbackErro: "Pense em qual frase demonstra respeito e escuta antes de apresentar outra opinião.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que caracteriza um bom argumento?",
        opcoes: [
          "Apresentar uma opinião sem nenhuma justificativa",
          "Apresentar uma opinião com uma justificativa clara, muitas vezes com exemplos ou dados",
          "Falar mais alto do que os outros",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Isso! Um argumento forte explica o 'porquê' da opinião, apoiado em razões ou exemplos.",
        feedbackErro: "Um bom argumento não é só uma opinião — precisa vir acompanhado de uma justificativa clara.",
      },
      {
        pergunta: "2/5 — Escuta ativa significa:",
        opcoes: [
          "Pensar na sua resposta enquanto o outro fala, sem prestar atenção",
          "Prestar atenção total no que o outro diz, sem interromper, para responder de forma coerente",
          "Concordar sempre com tudo o que o outro fala",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Correto! Escuta ativa é prestar atenção de verdade, o que permite uma resposta coerente e respeitosa.",
        feedbackErro: "Escuta ativa não significa concordar sempre — significa realmente prestar atenção antes de responder.",
      },
      {
        pergunta: "3/5 — 'Gostaria de complementar o que foi dito' é uma expressão típica de:",
        opcoes: ["Conversa informal entre amigos", "Oralidade formal, usada em debates e seminários", "Discurso indireto apenas"],
        correta: 1,
        feedbackAcerto: "🔎 Isso! Essa expressão organizada e respeitosa é característica da fala formal em debates.",
        feedbackErro: "Pense no vocabulário usado: é mais cuidadoso e organizado do que uma conversa comum entre amigos.",
      },
      {
        pergunta: "4/5 — No seminário sobre animais de estimação, qual foi a estratégia de Ana para fortalecer seu argumento?",
        opcoes: [
          "Contar uma história inventada",
          "Usar um dado de uma pesquisa real feita com a turma",
          "Falar mais alto que os colegas",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Exato! Ana apoiou sua opinião em um dado concreto (70% dos alunos), o que fortalece a argumentação.",
        feedbackErro: "Releia: Ana menciona uma porcentagem vinda de uma pesquisa real feita com a turma.",
      },
      {
        pergunta: "5/5 — Por que a organização e o respeito são importantes num debate?",
        opcoes: [
          "Porque sem eles o debate vira apenas uma discussão sem sentido, onde ninguém escuta ninguém",
          "Porque são regras sem nenhuma utilidade prática",
          "Porque só servem para deixar o debate mais longo",
        ],
        correta: 0,
        feedbackAcerto: "🔎 Isso! Você concluiu a investigação sobre debate e seminário — e a jornada da Sala de Literatura e Voz! 🌟",
        feedbackErro: "Sem organização e respeito, ninguém consegue realmente escutar ou entender os argumentos do outro — o debate perde sentido.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: debate em família",
    materiais: ["Papel e lápis (opcional, para anotar argumentos)"],
    passos: [
      "1) Escolham juntos um tema simples para debater em casa (ex.: 'É melhor ler livro físico ou digital?').",
      "2) Cada pessoa da família apresenta sua opinião com pelo menos um argumento e uma justificativa.",
      "3) Antes de responder, cada um deve repetir com suas palavras o que a pessoa anterior disse (escuta ativa).",
      "4) Conversem: foi mais fácil debater depois de praticar escutar com atenção?",
    ],
    registro: "🗣️ Registrem os argumentos de cada pessoa e uma frase sobre como foi a experiência de debater com escuta ativa.",
  },

  recompensa: {
    xp: 140,
    moedas: 80,
  },
};
