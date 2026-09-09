import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 42 — Apresentação Final: Painel de Encerramento do Ano
 * -------------------------------------------------------------
 * BNCC: EF67LP21, EF67LP23
 */
export const aula42: AulaPortuguesV4 = {
  slug: "aula-42-apresentacao-final",
  titulo: "Painel de Encerramento",
  iconeTrilha: "🎤",
  bncc: ["EF67LP21", "EF67LP23"],
  duracaoMin: 32,
  momento01_motivacao: {
    titulo: "Transmissão ao Vivo: O Analista Toma a Palavra",
    historia: "Analista, chegamos à última missão do ano. Tudo o que você investigou, escreveu e defendeu ao longo do 7º ano será agora apresentado em um Painel de Encerramento, uma apresentação oral para sua turma ou comunidade. Não basta ter boas ideias no papel: é preciso comunicá-las com clareza, postura e segurança diante de um público. Hoje você vai aprender a estruturar e apresentar seu projeto final, encerrando o ciclo do Observatório com sua própria voz.",
    imagemUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Estrutura da Apresentação Oral.",
    bloco: {
      titulo: "Protocolo de Painel Final",
      capaImagemUrl: "",
      pistas: [
        { nome: "Toda apresentação oral tem abertura, desenvolvimento e fechamento.", imagemUrl: "" },
        { nome: "Postura, tom de voz e contato visual são tão importantes quanto o conteúdo.", imagemUrl: "" }
      ],
      recado: {
        rotulo: "Roteiro de Apresentação",
        icone: "🎤",
        linhas: [
          "  [ ESTRUTURA DO PAINEL ]    ",
          "                             ",
          "  1. ABERTURA               ",
          "  > Apresente o tema e você ",
          "          ↓                 ",
          "  2. DESENVOLVIMENTO        ",
          "  > Explique o problema e   ",
          "    a proposta ou pesquisa  ",
          "          ↓                 ",
          "  3. FECHAMENTO             ",
          "  > Retome a ideia central  ",
          "    e agradeça o público    "
        ],
        estilo: "cartaz",
      },
      pergunta: "Além do conteúdo, o que mais influencia uma boa apresentação oral?",
      hipoteses: [
        { texto: "Postura, tom de voz e contato visual com o público" },
        { texto: "Apenas a quantidade de slides usados" },
        { texto: "Falar o mais rápido possível para terminar logo" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Transmissão clara! A forma de falar comunica tanto quanto o conteúdo.",
      feedbackErro: "Pense em como você se sente ao assistir alguém falando sem olhar para o público.",
      dica: "A comunicação oral envolve corpo e voz, não só as palavras.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Termos de Comunicação Oral.",
    cards: [
      { palavra: "Oratória", explicacao: "A arte de falar bem em público, de forma clara e organizada.", exemplo: "Ela treinou sua oratória antes da apresentação final.", imagemUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Contato visual", explicacao: "Ato de olhar para o público durante a fala, criando conexão e confiança.", exemplo: "O contato visual com a plateia deixou a apresentação mais convincente.", imagemUrl: "" },
      { palavra: "Ensaio", explicacao: "Prática prévia de uma apresentação para ganhar segurança e ajustar o tempo.", exemplo: "O ensaio em casa ajudou a controlar o nervosismo no dia da apresentação.", imagemUrl: "" },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Roteiro de Apresentação.",
    leitura: {
      titulo: "Roteiro: Painel sobre Direitos na Comunidade",
      imagemUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=400",
      destacar: ["abertura", "desenvolvimento", "fechamento", "público"],
      paragrafos: [
        "Na abertura, o grupo se apresentou e explicou que o painel trataria da falta de acessibilidade nas calçadas do bairro, tema pesquisado ao longo do ano.",
        "No desenvolvimento, cada integrante apresentou uma parte do projeto: os dados da pesquisa, os relatos dos moradores e a carta de denúncia enviada à prefeitura.",
        "No fechamento, o grupo retomou a ideia central, agradeceu a atenção do público e convidou a plateia para colaborar com novas denúncias na comunidade.",
        "Durante toda a fala, os integrantes mantiveram contato visual com o público e falaram em tom firme, sem pressa, o que tornou a apresentação clara e convincente."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "O que aconteceu na etapa de abertura do painel?",
        opcoes: ["O grupo se apresentou e explicou o tema do painel", "O grupo agradeceu e encerrou a apresentação", "O grupo mostrou os dados da pesquisa", "O grupo distribuiu prêmios ao público"],
        correta: 0,
        feedbackAcerto: "Correto! A abertura situa o público sobre o tema.",
        feedbackErro: "Releia o primeiro parágrafo do roteiro.",
        ondeEstaNoTexto: "Na abertura, o grupo se apresentou e explicou que o painel trataria",
        dica: "Busque a palavra 'abertura' no texto.",
        reensino: "Toda apresentação começa situando o público sobre quem fala e sobre o quê.",
      },
      {
        pergunta: "O que os integrantes fizeram para tornar a fala mais convincente?",
        opcoes: ["Mantiveram contato visual e falaram em tom firme", "Leram o texto sem olhar para ninguém", "Falaram muito rápido para terminar logo", "Ficaram de costas para o público"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! Postura e tom de voz reforçam a mensagem.",
        feedbackErro: "Releia o último parágrafo do roteiro.",
        ondeEstaNoTexto: "mantiveram contato visual com o público e falaram em tom firme",
        dica: "O que foi dito sobre a postura corporal dos integrantes?",
        reensino: "A comunicação não verbal é parte essencial de uma boa apresentação.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Oratória: Postura em Cena",
    instrucao: "Compare atitudes que atrapalham e atitudes que fortalecem uma apresentação oral.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "Falar olhando só para o papel, sem levantar os olhos.",
            explicacao: "💡 POSTURA FRACA: Sem contato visual, o público perde a conexão com quem fala.\n> Evite: ler o texto inteiro sem pausas ou olhares."
          },
          {
            texto: "Olhar para diferentes pontos da plateia enquanto fala.",
            explicacao: "💡 POSTURA FORTE: O contato visual cria confiança e mantém a atenção do público.\n> Ex: alternar o olhar entre grupos diferentes da plateia."
          },
          {
            texto: "Falar em tom firme, com pausas nos momentos importantes.",
            explicacao: "💡 CONTROLE DE VOZ: Pausas estratégicas destacam as ideias centrais da fala.\n> Ex: 'Portanto... [pausa] ...esse é o ponto principal.'"
          }
        ]
      }
    ]
  },
  momento_escrita: {
    titulo: "Console de Roteiro Final",
    instrucao: "Planeje o roteiro da sua apresentação oral de encerramento.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Meu Roteiro de Painel",
        comando: "Escreva o roteiro da sua apresentação final, retomando um dos projetos ou temas que você desenvolveu ao longo do ano (carta, denúncia, manifesto ou pesquisa).",
        modelo: [
          "ABERTURA: Quem sou eu e qual é o tema?",
          "DESENVOLVIMENTO: Qual foi o problema pesquisado e o que descobri?",
          "FECHAMENTO: Qual mensagem final quero deixar para o público?"
        ],
        checklist: [
          "Minha abertura apresenta claramente o tema?",
          "Meu desenvolvimento traz dados ou exemplos concretos?",
          "Meu fechamento retoma a ideia central e agradece o público?"
        ],
        cicloRevisao: true
      }
    ]
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Palco: Preparando o Painel",
    bloco: {
      instrucao: "Organize as etapas de preparação de uma apresentação oral de encerramento.",
      itens: [
        { id: "1", texto: "📝 ESCREVER o roteiro com abertura, desenvolvimento e fechamento.", imagemUrl: "" },
        { id: "2", texto: "🗣️ ENSAIAR a fala em voz alta, cronometrando o tempo.", imagemUrl: "" },
        { id: "3", texto: "👀 AJUSTAR postura, tom de voz e contato visual.", imagemUrl: "" },
        { id: "4", texto: "🎤 APRESENTAR ao público com confiança.", imagemUrl: "" }
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Painel preparado com sucesso! Você está pronto para encerrar o ciclo com sua própria voz.",
      feedbackErro: "É preciso ter o roteiro pronto (1) antes de ensaiar (2) e ajustar a postura (3).",
      dica: "Você não consegue ensaiar uma fala que ainda não foi escrita.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Fechamento de Ciclo.",
    leitura: {
      titulo: "Discurso de Encerramento de Turma",
      imagemUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400",
      destacar: ["aprendemos", "vozes", "futuro"],
      paragrafos: [
        "Neste ano, aprendemos que nossas vozes têm valor quando organizadas com clareza e responsabilidade.",
        "Escrevemos cartas, denunciamos problemas reais e defendemos direitos com argumentos sólidos.",
        "Que este painel final seja apenas o começo de um futuro em que continuaremos usando a linguagem para transformar o mundo ao nosso redor."
      ],
    },
    perguntas: [
      {
        pergunta: "Qual é a mensagem central do discurso de encerramento?",
        opcoes: ["A linguagem aprendida deve continuar sendo usada para transformar o mundo", "O ano letivo foi apenas uma obrigação a cumprir", "As atividades realizadas não tiveram utilidade prática", "É melhor esquecer tudo o que foi aprendido"],
        correta: 0,
        feedbackAcerto: "Correto! O discurso convida à continuidade do aprendizado na vida real.",
        feedbackErro: "Releia o último parágrafo do discurso.",
        dica: "Busque a palavra 'futuro' no texto.",
        reensino: "Discursos de encerramento costumam projetar o aprendizado para além da sala de aula."
      }
    ],
  },
  momento09_revisao: {
    pontos: [
      "Uma apresentação oral tem três partes: abertura, desenvolvimento e fechamento.",
      "Postura, contato visual e tom de voz comunicam tanto quanto as palavras escolhidas.",
      "Ensaiar antes da apresentação aumenta a confiança e melhora o desempenho no dia real."
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Quais são as três partes de uma apresentação oral bem estruturada?",
        opcoes: ["Abertura, desenvolvimento e fechamento", "Introdução, meio e fim aleatórios", "Apenas fechamento e agradecimento", "Título, imagem e assinatura"],
        correta: 0,
        feedbackAcerto: "Correto! Essa é a estrutura clássica de uma boa apresentação.",
        feedbackErro: "Releia o briefing do Momento 02.",
        ondeEstaNoTexto: "1. ABERTURA / 2. DESENVOLVIMENTO / 3. FECHAMENTO",
        dica: "Pense na estrutura do roteiro apresentado na aula.",
        reensino: "Revise o Protocolo de Painel Final do Momento 02.",
      },
      {
        pergunta: "Por que o ensaio é importante antes de uma apresentação?",
        opcoes: ["Porque aumenta a confiança e ajuda a controlar o tempo de fala", "Porque é uma perda de tempo desnecessária", "Porque substitui a necessidade de ter um roteiro", "Porque torna a apresentação mais longa"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! Ensaiar prepara corpo e voz para o momento real.",
        feedbackErro: "Pense no que acontece quando alguém fala sem nunca ter praticado antes.",
        ondeEstaNoTexto: "Ensaiar a fala em voz alta, cronometrando o tempo.",
        dica: "Releia o Laboratório de Palco sobre a preparação do painel.",
        reensino: "Revise o Momento 07 sobre as etapas de preparação da apresentação.",
      },
      {
        pergunta: "Qual atitude fortalece a conexão com o público durante a fala?",
        opcoes: ["Manter contato visual com diferentes pontos da plateia", "Olhar apenas para o papel o tempo todo", "Falar de costas para o público", "Evitar qualquer pausa na fala"],
        correta: 0,
        feedbackAcerto: "Exato! O contato visual aproxima quem fala de quem escuta.",
        feedbackErro: "Pense no exemplo do Laboratório de Oratória.",
        ondeEstaNoTexto: "O contato visual cria confiança e mantém a atenção do público.",
        dica: "Releia o Laboratório de Oratória sobre postura em cena.",
        reensino: "Revise o Momento visual sobre postura forte e postura fraca.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Painel em Casa",
    materiais: ["Um projeto ou texto criado durante o ano", "Espaço em casa para simular a apresentação"],
    passos: [
      "Escolha um dos trabalhos escritos neste ano (carta, manifesto, denúncia ou pesquisa).",
      "Prepare um pequeno roteiro de apresentação com abertura, desenvolvimento e fechamento.",
      "Apresente esse roteiro em voz alta para sua família, cuidando da postura e do contato visual.",
      "Peça um feedback da família sobre clareza e confiança na fala."
    ],
    registro: "Escreva no caderno: 'Missão Painel - Apresentei sobre [X] e o feedback da família foi [Y]'.",
  },
  recompensa: {
    xp: 200,
    moedas: 100,
  },
};
