import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 7 — Podcast e Vlog: Planejamento de Roteiro Multimídia
 * BNCC: EF67LP11, EF67LP12
 */
export const aula07: AulaPortuguesV4 = {
  slug: "aula-07-podcast-e-vlog",
  titulo: "Podcast e Vlog",
  iconeTrilha: "🎙️",
  bncc: ["EF67LP11", "EF67LP12"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Transmissão Detectada",
    historia: "Analista, o Observatório captou um novo tipo de sinal: vozes e imagens em movimento. Podcasts e vlogs viraram formas poderosas de contar histórias e discutir ideias em rede. Mas nada disso funciona sem planejamento: um roteiro guia o que será dito, em que ordem e com qual objetivo. Hoje você vai aprender a projetar o esqueleto de um episódio antes de gravar qualquer coisa.",
    imagemUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Antes de Gravar, Planejar.",
    bloco: {
      titulo: "Roteiro de Podcast/Vlog",
      capaImagemUrl: "",
      pistas: [
        { nome: "Todo episódio bom tem começo, meio e fim planejados.", imagemUrl: "" },
        { nome: "O roteiro evita repetições e esquecimentos durante a gravação.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel de Produção",
        icone: "🎙️",
        linhas: [
          "  [ ROTEIRO DE EPISÓDIO ]      ",
          "                               ",
          "  1. ABERTURA (Apresentação e tema)",
          "  2. DESENVOLVIMENTO (Pontos principais)",
          "  3. INTERAÇÃO (Perguntas ao público)",
          "  4. ENCERRAMENTO (Resumo e chamada)",
        ],
        estilo: "cartaz",
      },
      pergunta: "Por que um roteiro é importante mesmo em um podcast que parece 'conversa informal'?",
      hipoteses: [
        { texto: "Porque organiza as ideias e evita que o episódio fique confuso" },
        { texto: "Porque impede qualquer improviso durante a gravação" },
        { texto: "Porque só serve para podcasts muito longos" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Correto! O roteiro dá estrutura sem tirar a naturalidade da fala.",
      feedbackErro: "Releia o Painel de Produção: o que o roteiro garante do início ao fim?",
      dica: "Pense no que acontece se ninguém souber o que falar depois.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Linguagem de Produção.",
    cards: [
      { palavra: "Roteiro", explicacao: "Plano escrito com a ordem dos assuntos e falas que serão gravados em um episódio.", exemplo: "O roteiro do podcast listava três tópicos e o tempo estimado para cada um.", imagemUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Pauta", explicacao: "Lista dos temas principais que serão discutidos, geralmente definida antes de o roteiro ser detalhado.", exemplo: "A pauta da semana incluía games, música e notícias da escola.", imagemUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Gancho", explicacao: "Frase ou pergunta usada no início para prender a atenção do público logo de cara.", exemplo: "O gancho do vlog era: 'Você sabia que essa curiosidade pode mudar sua rotina?'", imagemUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório Visual: Blocos de um Roteiro",
    instrucao: "Observe como cada bloco do roteiro cumpre uma função diferente.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "ABERTURA: 'Oi, pessoal! Hoje vamos falar sobre...'", explicacao: "💡 Apresenta o tema e cria o gancho para prender a atenção." },
          { texto: "DESENVOLVIMENTO: 'O primeiro ponto que eu quero destacar é...'", explicacao: "💡 Organiza os assuntos em ordem lógica, um de cada vez." },
          { texto: "ENCERRAMENTO: 'Resumindo, vimos que... Até o próximo episódio!'", explicacao: "💡 Fecha o raciocínio e convida o público a voltar." },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "Como Nasce um Episódio",
      imagemUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=400",
      destacar: ["roteiro", "pauta", "gancho"],
      paragrafos: [
        "Antes de qualquer gravação, quem produz um podcast ou vlog define uma pauta: o assunto principal do episódio e os pontos que merecem destaque.",
        "A partir da pauta, nasce o roteiro, um plano mais detalhado com a ordem das falas, o tempo estimado de cada parte e as transições entre os temas.",
        "Um bom roteiro começa com um gancho, algo que prenda a atenção do público nos primeiros segundos, e termina com um encerramento que resume as ideias e convida o ouvinte a voltar.",
        "Mesmo planejado, o roteiro deixa espaço para a espontaneidade: ele é um guia, não um texto decorado, e permite ajustes durante a fala.",
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "Segundo o texto, o que é a pauta de um episódio?",
        opcoes: ["O assunto principal e os pontos que merecem destaque", "A gravação já finalizada", "O nome do canal ou perfil", "A lista de comentários dos ouvintes"],
        correta: 0,
        feedbackAcerto: "Correto! A pauta define o tema antes de detalhar o roteiro.",
        feedbackErro: "Releia o primeiro parágrafo.",
        ondeEstaNoTexto: "quem produz um podcast ou vlog define uma pauta",
        dica: "Pense no que vem antes do roteiro.",
        reensino: "Revise o Dicionário do Observatório sobre 'pauta'.",
      },
      {
        pergunta: "Qual é a função do gancho, conforme o texto?",
        opcoes: ["Prender a atenção do público nos primeiros segundos", "Encerrar o episódio de forma definitiva", "Substituir a necessidade de um roteiro", "Contar o tempo total do episódio"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! O gancho é a isca inicial do episódio.",
        feedbackErro: "Volte ao terceiro parágrafo.",
        ondeEstaNoTexto: "Um bom roteiro começa com um gancho, algo que prenda a atenção do público",
        dica: "Pense no início do roteiro.",
        reensino: "Revise o Laboratório Visual sobre abertura.",
      },
      {
        pergunta: "Por que o roteiro é chamado de 'guia, não texto decorado'?",
        opcoes: ["Porque permite ajustes e espontaneidade durante a fala", "Porque não pode ser escrito antes da gravação", "Porque é proibido seguir qualquer ordem", "Porque substitui a pauta completamente"],
        correta: 0,
        feedbackAcerto: "Exato! O roteiro organiza sem engessar a fala natural.",
        feedbackErro: "Releia o último parágrafo.",
        ondeEstaNoTexto: "ele é um guia, não um texto decorado, e permite ajustes durante a fala",
        dica: "Pense na diferença entre planejar e decorar.",
        reensino: "Revise a leitura guiada sobre roteiro.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_escrita: {
    titulo: "Console de Produção",
    instrucao: "Planeje o roteiro de um episódio curto de podcast ou vlog.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Meu Roteiro de Episódio",
        comando: "Escreva um roteiro curto (abertura, dois pontos de desenvolvimento e encerramento) sobre um tema que você domina, como um jogo, livro ou hobby.",
        modelo: [
          "Abertura: 'Oi, pessoal! Hoje vou falar sobre...'",
          "Desenvolvimento 1: primeiro ponto importante",
          "Desenvolvimento 2: segundo ponto importante",
          "Encerramento: resumo e convite para o próximo episódio",
        ],
        checklist: [
          "Meu roteiro tem um gancho de abertura?",
          "Organizei os pontos em ordem lógica?",
          "Escrevi um encerramento que resume o episódio?",
        ],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Montando um Roteiro",
    bloco: {
      instrucao: "Organize as etapas de planejamento de um episódio de podcast/vlog.",
      itens: [
        { id: "1", texto: "📝 DEFINIR A PAUTA: Escolher o tema principal do episódio.", imagemUrl: "" },
        { id: "2", texto: "🎣 CRIAR O GANCHO: Pensar em uma abertura que prenda a atenção.", imagemUrl: "" },
        { id: "3", texto: "📋 DETALHAR O ROTEIRO: Organizar os pontos em ordem lógica.", imagemUrl: "" },
        { id: "4", texto: "🎬 GRAVAR E ENCERRAR: Seguir o roteiro e fechar com um resumo.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Roteiro montado com precisão, Analista!",
      feedbackErro: "A pauta (1) vem antes do gancho (2), que vem antes do detalhamento (3).",
      dica: "Pense no que precisa existir antes de escrever o roteiro completo.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Um Vlog Que Deu Errado.",
    leitura: {
      titulo: "O Episódio Sem Rumo",
      imagemUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=400",
      destacar: ["roteiro", "improviso", "confuso"],
      paragrafos: [
        "Marina decidiu gravar seu primeiro vlog sem escrever nada antes, confiando apenas no improviso. No meio da gravação, ela esqueceu o segundo ponto que queria comentar e ficou repetindo a mesma ideia.",
        "Sem um roteiro, o vídeo ficou longo, confuso e sem um encerramento claro. Os espectadores comentaram que não entenderam qual era o assunto principal do episódio.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual foi o principal problema do vlog de Marina?",
        opcoes: ["A falta de um roteiro deixou o vídeo confuso e repetitivo", "O vídeo era muito curto", "Ela não usou nenhuma câmera", "O tema escolhido era proibido"],
        correta: 0,
        feedbackAcerto: "Correto! Sem roteiro, faltou organização e clareza.",
        feedbackErro: "Releia o segundo parágrafo.",
        ondeEstaNoTexto: "Sem um roteiro, o vídeo ficou longo, confuso e sem um encerramento claro",
        dica: "Pense no que Marina não preparou antes de gravar.",
        reensino: "Revise a leitura guiada sobre roteiro.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "Um roteiro organiza pauta, desenvolvimento e encerramento antes da gravação.",
      "O gancho é essencial para prender a atenção logo no início.",
      "O roteiro é um guia flexível, não um texto decorado.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que é a pauta de um episódio?",
        opcoes: ["O tema principal e os pontos de destaque", "A gravação finalizada", "O número de seguidores do canal", "A lista de comentários"],
        correta: 0,
        feedbackAcerto: "Correto!",
        feedbackErro: "Releia o texto sobre pauta.",
        ondeEstaNoTexto: "quem produz um podcast ou vlog define uma pauta",
        dica: "Pense no que vem antes do roteiro detalhado.",
        reensino: "Revise a leitura guiada.",
      },
      {
        pergunta: "Qual é a função do gancho em um episódio?",
        opcoes: ["Prender a atenção do público no início", "Encerrar o episódio", "Substituir a pauta", "Contar o tempo de gravação"],
        correta: 0,
        feedbackAcerto: "Isso mesmo!",
        feedbackErro: "Releia o texto sobre gancho.",
        ondeEstaNoTexto: "Um bom roteiro começa com um gancho",
        dica: "Pense no início do episódio.",
        reensino: "Revise o Laboratório Visual.",
      },
      {
        pergunta: "Por que Marina teve dificuldades ao gravar seu vlog?",
        opcoes: ["Porque não fez um roteiro antes de gravar", "Porque usou muitos gráficos", "Porque o vídeo era curto demais", "Porque não tinha câmera boa"],
        correta: 0,
        feedbackAcerto: "Correto! Faltou planejamento prévio.",
        feedbackErro: "Releia a leitura independente.",
        ondeEstaNoTexto: "Sem um roteiro, o vídeo ficou longo, confuso",
        dica: "Pense no que faltou antes da gravação.",
        reensino: "Revise a leitura independente sobre Marina.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Missão em Família: Roteiro em Casa",
    materiais: ["Papel ou caderno", "Caneta"],
    passos: [
      "Escolha com a família um tema para um podcast ou vlog imaginário.",
      "Defina juntos a pauta do episódio.",
      "Escreva um roteiro curto com abertura, desenvolvimento e encerramento.",
      "Leiam o roteiro em voz alta como se estivessem gravando de verdade.",
    ],
    registro: "Registre o roteiro criado e conte como foi ler em voz alta.",
  },
  recompensa: { xp: 150, moedas: 75 },
};
