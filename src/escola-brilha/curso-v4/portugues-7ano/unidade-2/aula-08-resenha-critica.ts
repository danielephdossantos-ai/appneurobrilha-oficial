import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 8 — Resenha Crítica: Produção de Opinião Fundamentada
 * BNCC: EF67LP12, EF67LP05
 */
export const aula08: AulaPortuguesV4 = {
  slug: "aula-08-resenha-critica",
  titulo: "Resenha Crítica",
  iconeTrilha: "⭐",
  bncc: ["EF67LP12", "EF67LP05"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Avaliação em Andamento",
    historia: "Analista, o Observatório recebeu um pedido: avaliar um filme, livro ou jogo com honestidade e argumentos. É isso que faz uma resenha crítica — não é só dizer 'gostei' ou 'não gostei', é explicar por quê, com exemplos concretos da obra. Hoje você vai treinar esse tipo de análise que combina opinião e prova.",
    imagemUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Opinião Não Basta, Precisa de Prova.",
    bloco: {
      titulo: "Estrutura da Resenha Crítica",
      capaImagemUrl: "",
      pistas: [
        { nome: "A resenha apresenta a obra antes de avaliá-la.", imagemUrl: "" },
        { nome: "Toda opinião na resenha vem acompanhada de um exemplo da obra.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel de Avaliação",
        icone: "⭐",
        linhas: [
          "  [ RESENHA CRÍTICA ]         ",
          "                              ",
          "  1. APRESENTAÇÃO (O que é a obra?)",
          "  2. DESCRIÇÃO (Do que ela trata?)",
          "  3. AVALIAÇÃO (Pontos fortes e fracos)",
          "  4. RECOMENDAÇÃO (Para quem indicar?)",
        ],
        estilo: "cartaz",
      },
      pergunta: "Por que uma resenha crítica precisa apresentar exemplos da obra, e não só opiniões soltas?",
      hipoteses: [
        { texto: "Porque exemplos comprovam a opinião e ajudam o leitor a confiar na avaliação" },
        { texto: "Porque é obrigatório copiar trechos inteiros da obra" },
        { texto: "Porque opiniões sozinhas nunca podem aparecer em textos" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Correto! Exemplos concretos sustentam a avaliação e dão credibilidade ao texto.",
      feedbackErro: "Releia o Painel de Avaliação: o que a avaliação precisa ter, além da opinião?",
      dica: "Pense em como convencer alguém que nunca viu a obra.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Linguagem de Crítica.",
    cards: [
      { palavra: "Resenha", explicacao: "Texto que apresenta e avalia uma obra (livro, filme, jogo, série), combinando descrição e opinião fundamentada.", exemplo: "A resenha do livro explicava o enredo e depois avaliava o desenvolvimento dos personagens.", imagemUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Fundamentar", explicacao: "Justificar uma opinião com argumentos, exemplos ou dados concretos.", exemplo: "Para fundamentar sua crítica, ele citou uma cena específica do filme.", imagemUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Recomendação", explicacao: "Parte final da resenha que indica para quem a obra pode interessar.", exemplo: "A recomendação dizia que o jogo era ideal para quem gosta de desafios de estratégia.", imagemUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório Visual: Opinião com Prova",
    instrucao: "Observe a diferença entre uma opinião solta e uma opinião fundamentada.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "OPINIÃO SOLTA: 'O filme é bom.'", explicacao: "💡 Não explica o motivo — o leitor não sabe por quê." },
          { texto: "OPINIÃO FUNDAMENTADA: 'O filme é bom porque o roteiro constrói o suspense aos poucos.'", explicacao: "💡 Apresenta um argumento concreto ligado à obra." },
          { texto: "RECOMENDAÇÃO CLARA: 'Indicado para quem gosta de mistérios com reviravoltas.'", explicacao: "💡 Ajuda o leitor a decidir se a obra é para ele." },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "O Que Faz uma Boa Resenha",
      imagemUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=400",
      destacar: ["apresentação", "avaliação", "recomendação"],
      paragrafos: [
        "Uma resenha crítica começa apresentando a obra: título, autor ou diretor, e um breve resumo do que ela trata, sem revelar detalhes que estraguem a experiência de quem ainda vai conhecê-la.",
        "Depois da apresentação, vem a avaliação: o momento em que quem escreve aponta pontos fortes e fracos, sempre citando exemplos concretos da obra para justificar cada opinião.",
        "Uma resenha que apenas diz 'gostei' ou 'não gostei' sem explicar o motivo perde força, porque o leitor não consegue entender de onde vem aquele julgamento.",
        "Por fim, a resenha termina com uma recomendação: para quem aquela obra pode interessar, ajudando o leitor a decidir se vale a pena conhecê-la.",
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "O que deve conter a apresentação inicial de uma resenha, segundo o texto?",
        opcoes: ["Título, autor/diretor e um breve resumo sem estragar a obra", "Apenas a nota final da avaliação", "Uma lista de todos os personagens", "A opinião final sem explicações"],
        correta: 0,
        feedbackAcerto: "Correto! A apresentação situa o leitor sem revelar tudo.",
        feedbackErro: "Releia o primeiro parágrafo.",
        ondeEstaNoTexto: "começa apresentando a obra: título, autor ou diretor, e um breve resumo",
        dica: "Pense no que vem antes da avaliação.",
        reensino: "Revise a leitura guiada sobre apresentação.",
      },
      {
        pergunta: "Por que uma resenha que só diz 'gostei' ou 'não gostei' perde força?",
        opcoes: ["Porque o leitor não entende de onde vem o julgamento", "Porque é proibido opinar em resenhas", "Porque toda resenha deve ser positiva", "Porque falta o nome do autor"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! Sem exemplos, a opinião fica sem sustentação.",
        feedbackErro: "Volte ao terceiro parágrafo.",
        ondeEstaNoTexto: "o leitor não consegue entender de onde vem aquele julgamento",
        dica: "Pense na diferença entre opinião solta e fundamentada.",
        reensino: "Revise o Laboratório Visual sobre opinião com prova.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_escrita: {
    titulo: "Console de Crítica",
    instrucao: "Produza uma resenha crítica curta sobre uma obra que você conhece bem.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Minha Resenha Crítica",
        comando: "Escreva uma resenha curta de um livro, filme, série ou jogo que você conhece, incluindo apresentação, avaliação com exemplo e recomendação final.",
        modelo: [
          "Apresentação: 'A obra X conta a história de...'",
          "Avaliação: 'Um ponto forte é... porque...' / 'Um ponto fraco é... porque...'",
          "Recomendação: 'Recomendo para quem gosta de...'",
        ],
        checklist: [
          "Apresentei a obra sem revelar tudo?",
          "Justifiquei minha opinião com um exemplo concreto?",
          "Terminei com uma recomendação clara?",
        ],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Montando uma Resenha",
    bloco: {
      instrucao: "Organize as etapas de construção de uma resenha crítica.",
      itens: [
        { id: "1", texto: "📖 APRESENTAR A OBRA: Título, autor e breve resumo.", imagemUrl: "" },
        { id: "2", texto: "🔍 DESCREVER PONTOS-CHAVE: O que a obra propõe fazer.", imagemUrl: "" },
        { id: "3", texto: "⭐ AVALIAR COM EXEMPLOS: Pontos fortes e fracos justificados.", imagemUrl: "" },
        { id: "4", texto: "✅ RECOMENDAR: Indicar para quem a obra é interessante.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Resenha estruturada com precisão, Analista!",
      feedbackErro: "A apresentação (1) vem antes da avaliação (3), e a recomendação (4) fecha o texto.",
      dica: "Pense em como você contaria sobre uma obra a alguém que nunca a viu.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Resenha de um Jogo.",
    leitura: {
      titulo: "Resenha: Ilhas Perdidas",
      imagemUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=400",
      destacar: ["avaliação", "exemplo", "recomendação"],
      paragrafos: [
        "'Ilhas Perdidas' é um jogo de aventura em que o jogador explora ilhas para resolver enigmas. O ponto forte é o design visual, cheio de detalhes que tornam a exploração interessante.",
        "Por outro lado, os enigmas ficam repetitivos depois da terceira ilha, o que pode cansar quem busca desafios variados. Ainda assim, o jogo é recomendado para quem gosta de exploração calma e visual bonito.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual é o ponto fraco apontado na resenha do jogo?",
        opcoes: ["Os enigmas ficam repetitivos depois da terceira ilha", "O design visual é ruim", "O jogo não tem nenhuma ilha", "A resenha não recomenda o jogo"],
        correta: 0,
        feedbackAcerto: "Correto! A repetição dos enigmas foi o ponto fraco citado.",
        feedbackErro: "Releia o segundo parágrafo.",
        ondeEstaNoTexto: "os enigmas ficam repetitivos depois da terceira ilha",
        dica: "Pense no que a resenha aponta como cansativo.",
        reensino: "Revise a leitura independente sobre o jogo.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "A resenha crítica apresenta a obra antes de avaliá-la.",
      "Toda opinião deve vir acompanhada de um exemplo concreto da obra.",
      "A resenha termina com uma recomendação para o leitor.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que uma resenha crítica apresenta logo no início?",
        opcoes: ["Título, autor/diretor e um breve resumo da obra", "Apenas a recomendação final", "Uma lista de erros da obra", "O preço da obra"],
        correta: 0,
        feedbackAcerto: "Correto!",
        feedbackErro: "Releia o texto sobre apresentação.",
        ondeEstaNoTexto: "começa apresentando a obra: título, autor ou diretor",
        dica: "Pense no que situa o leitor no início.",
        reensino: "Revise a leitura guiada.",
      },
      {
        pergunta: "Por que exemplos concretos são importantes em uma resenha?",
        opcoes: ["Porque comprovam e fundamentam a opinião do autor", "Porque substituem a apresentação da obra", "Porque tornam a resenha mais longa apenas", "Porque são obrigatórios por lei"],
        correta: 0,
        feedbackAcerto: "Isso mesmo!",
        feedbackErro: "Releia o Laboratório Visual sobre opinião com prova.",
        ondeEstaNoTexto: "cada opinião fundamentada com exemplos concretos",
        dica: "Pense na diferença entre dizer e provar.",
        reensino: "Revise o momento de ensino visual.",
      },
      {
        pergunta: "Qual foi o ponto forte do jogo 'Ilhas Perdidas', segundo a resenha lida?",
        opcoes: ["O design visual cheio de detalhes", "Os enigmas repetitivos", "A ausência de exploração", "O fato de não ter recomendação"],
        correta: 0,
        feedbackAcerto: "Correto! O design visual foi destacado como ponto forte.",
        feedbackErro: "Releia a leitura independente.",
        ondeEstaNoTexto: "O ponto forte é o design visual, cheio de detalhes",
        dica: "Pense no que a resenha elogiou.",
        reensino: "Revise a leitura independente sobre o jogo.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Missão em Família: Resenha em Conjunto",
    materiais: ["Papel ou caderno", "Caneta"],
    passos: [
      "Escolha com a família um filme, livro ou jogo que todos conheçam.",
      "Conversem sobre pontos fortes e fracos da obra.",
      "Escrevam juntos uma resenha curta com apresentação, avaliação e recomendação.",
      "Leiam a resenha em voz alta para a família.",
    ],
    registro: "Registre a resenha criada e a obra escolhida.",
  },
  recompensa: { xp: 150, moedas: 75 },
};
