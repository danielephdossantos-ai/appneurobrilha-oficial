import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 10 — Turnos de Fala: Discussão e Tomada de Notas
 * BNCC: EF67LP23, EF67LP24
 */
export const aula10: AulaPortuguesV4 = {
  slug: "aula-10-turnos-de-fala",
  titulo: "Turnos de Fala",
  iconeTrilha: "🗣️",
  bncc: ["EF67LP23", "EF67LP24"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Sinal de Debate Detectado",
    historia: "Analista, o Observatório monitora agora uma discussão em grupo. Em debates e conversas, cada pessoa precisa respeitar o momento certo de falar e de ouvir: isso se chama turno de fala. Quando os turnos são respeitados, todos conseguem contribuir e a discussão avança. Hoje você vai aprender a organizar turnos de fala e a registrar as ideias principais de uma conversa.",
    imagemUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Falar na Hora Certa.",
    bloco: {
      titulo: "Turnos de Fala em Debates",
      capaImagemUrl: "",
      pistas: [
        { nome: "Interromper o outro sem deixá-lo terminar quebra o turno de fala.", imagemUrl: "" },
        { nome: "Tomar notas ajuda a lembrar dos pontos discutidos sem perder o fio da conversa.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel de Debate",
        icone: "🗣️",
        linhas: [
          "  [ TURNOS DE FALA ]           ",
          "                               ",
          "  1. PEDIR A PALAVRA (Sinalizar antes de falar)",
          "  2. OUVIR (Deixar o outro terminar)",
          "  3. RESPONDER (Falar no momento adequado)",
          "  4. REGISTRAR (Anotar os pontos principais)",
        ],
        estilo: "cartaz",
      },
      pergunta: "Por que respeitar os turnos de fala é importante em uma discussão em grupo?",
      hipoteses: [
        { texto: "Porque garante que todos tenham a chance de falar e serem ouvidos" },
        { texto: "Porque só uma pessoa pode falar durante toda a discussão" },
        { texto: "Porque interromper sempre torna o argumento mais forte" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Correto! Respeitar os turnos garante participação equilibrada de todos.",
      feedbackErro: "Releia o Painel de Debate: o que acontece quando os turnos são respeitados?",
      dica: "Pense no que acontece se todo mundo fala ao mesmo tempo.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Linguagem de Debate.",
    cards: [
      { palavra: "Turno de fala", explicacao: "Momento em que uma pessoa tem a vez de falar em uma conversa ou debate, respeitando a ordem estabelecida.", exemplo: "O mediador organizava os turnos de fala para que ninguém interrompesse os colegas.", imagemUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Mediador", explicacao: "Pessoa responsável por organizar quem fala e quando, garantindo que a discussão seja justa.", exemplo: "A mediadora pediu para que cada aluno falasse por dois minutos.", imagemUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Tomada de notas", explicacao: "Registro escrito e resumido dos pontos principais ditos durante uma conversa ou debate.", exemplo: "Durante a reunião, ele fez a tomada de notas dos argumentos de cada grupo.", imagemUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório Visual: Boas Práticas de Debate",
    instrucao: "Observe atitudes que ajudam ou atrapalham um debate.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "BOA PRÁTICA: 'Posso complementar quando você terminar?'", explicacao: "💡 Pede a vez de falar sem interromper o colega." },
          { texto: "MÁ PRÁTICA: Falar por cima do colega sem esperar ele terminar.", explicacao: "💡 Quebra o turno de fala e gera confusão na discussão." },
          { texto: "BOA PRÁTICA: Anotar 'Ana defende X porque Y' durante a fala dela.", explicacao: "💡 Registra o argumento de forma resumida para usar depois." },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "Como Funciona uma Boa Discussão",
      imagemUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=400",
      destacar: ["turno", "mediador", "notas"],
      paragrafos: [
        "Em uma discussão em grupo, cada participante precisa respeitar o turno de fala: o momento em que é sua vez de se manifestar, sem interromper quem está falando.",
        "Muitas discussões contam com um mediador, pessoa responsável por organizar a ordem das falas e garantir que todos tenham a chance de participar de forma equilibrada.",
        "Enquanto os colegas falam, é útil fazer a tomada de notas: registrar de forma resumida os principais argumentos apresentados, para poder retomá-los depois na própria fala.",
        "Uma discussão organizada, com turnos respeitados e boas anotações, permite que o grupo chegue a conclusões mais completas do que uma conversa cheia de interrupções.",
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "O que é o turno de fala, segundo o texto?",
        opcoes: ["O momento em que é a vez de cada participante se manifestar", "A duração total do debate", "O nome do mediador da discussão", "O tema escolhido para a conversa"],
        correta: 0,
        feedbackAcerto: "Correto! O turno é a vez de cada um falar.",
        feedbackErro: "Releia o primeiro parágrafo.",
        ondeEstaNoTexto: "cada participante precisa respeitar o turno de fala: o momento em que é sua vez de se manifestar",
        dica: "Pense no que significa 'vez de falar'.",
        reensino: "Revise o Dicionário do Observatório sobre 'turno de fala'.",
      },
      {
        pergunta: "Qual é a função do mediador em uma discussão?",
        opcoes: ["Organizar a ordem das falas e garantir participação equilibrada", "Falar sozinho durante todo o debate", "Impedir que qualquer pessoa participe", "Anotar apenas sua própria opinião"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! O mediador organiza e equilibra as participações.",
        feedbackErro: "Volte ao segundo parágrafo.",
        ondeEstaNoTexto: "mediador, pessoa responsável por organizar a ordem das falas",
        dica: "Pense em quem cuida da ordem da discussão.",
        reensino: "Revise a leitura guiada sobre mediador.",
      },
      {
        pergunta: "Por que fazer a tomada de notas durante uma discussão é útil?",
        opcoes: ["Porque permite retomar os argumentos depois na própria fala", "Porque substitui a necessidade de ouvir os colegas", "Porque é obrigatório apenas em debates formais", "Porque impede que outras pessoas falem"],
        correta: 0,
        feedbackAcerto: "Exato! As notas ajudam a organizar a resposta com base no que foi dito.",
        feedbackErro: "Releia o terceiro parágrafo.",
        ondeEstaNoTexto: "para poder retomá-los depois na própria fala",
        dica: "Pense em como usar depois o que foi anotado.",
        reensino: "Revise o Laboratório Visual sobre tomada de notas.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_escrita: {
    titulo: "Console de Debate",
    instrucao: "Registre notas de um debate imaginário e organize uma resposta com base nelas.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Minhas Notas de Debate",
        comando: "Imagine um debate sobre um tema da escola (ex.: uso de celular em sala). Escreva três anotações resumidas de argumentos diferentes e depois uma resposta sua que use o turno de fala corretamente.",
        modelo: [
          "Nota 1: Colega A defende X porque...",
          "Nota 2: Colega B discorda porque...",
          "Nota 3: Colega C propõe uma solução intermediária.",
          "Minha resposta: 'Posso complementar? Concordo com... porque...'",
        ],
        checklist: [
          "Registrei os argumentos de forma resumida?",
          "Minha resposta pede a vez de falar de forma respeitosa?",
          "Minha fala se conecta com o que os colegas disseram?",
        ],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Organizando um Debate",
    bloco: {
      instrucao: "Organize as etapas corretas de participação em uma discussão em grupo.",
      itens: [
        { id: "1", texto: "✋ PEDIR A PALAVRA: Sinalizar que deseja falar.", imagemUrl: "" },
        { id: "2", texto: "👂 OUVIR ATÉ O FIM: Esperar o colega terminar de falar.", imagemUrl: "" },
        { id: "3", texto: "📝 ANOTAR O ARGUMENTO: Registrar resumidamente o que foi dito.", imagemUrl: "" },
        { id: "4", texto: "🗣️ RESPONDER NO SEU TURNO: Falar de forma organizada e respeitosa.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Debate organizado com precisão, Analista!",
      feedbackErro: "Peça a palavra (1), ouça até o fim (2) e anote (3) antes de responder (4).",
      dica: "Pense no que precisa acontecer antes de você poder falar.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: O Debate da Sala 7B.",
    leitura: {
      titulo: "Quando Todos Falam ao Mesmo Tempo",
      imagemUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=400",
      destacar: ["interrupção", "mediador", "organização"],
      paragrafos: [
        "Na sala 7B, o debate sobre o horário do recreio começou bem, mas logo virou uma confusão: vários alunos falavam ao mesmo tempo, e ninguém conseguia terminar uma ideia completa.",
        "A professora então assumiu o papel de mediadora, pedindo que cada aluno levantasse a mão antes de falar. Com essa organização, os argumentos ficaram mais claros e a turma conseguiu chegar a uma proposta conjunta.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que resolveu a confusão no debate da sala 7B?",
        opcoes: ["A professora organizar os turnos de fala como mediadora", "O fim do horário do recreio", "A saída de todos os alunos da sala", "A proibição total de falar sobre o tema"],
        correta: 0,
        feedbackAcerto: "Correto! A mediação organizou a participação de todos.",
        feedbackErro: "Releia o segundo parágrafo.",
        ondeEstaNoTexto: "a professora então assumiu o papel de mediadora, pedindo que cada aluno levantasse a mão antes de falar",
        dica: "Pense em quem organizou a discussão.",
        reensino: "Revise a leitura independente sobre o debate da sala 7B.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "O turno de fala garante que cada pessoa tenha sua vez de falar e ser ouvida.",
      "O mediador organiza a ordem das falas em uma discussão.",
      "Tomar notas durante o debate ajuda a organizar respostas mais completas.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que é o turno de fala?",
        opcoes: ["O momento em que é a vez de cada um falar", "O tempo total do debate", "O nome do tema discutido", "A nota final de um debate"],
        correta: 0,
        feedbackAcerto: "Correto!",
        feedbackErro: "Releia o texto sobre turno de fala.",
        ondeEstaNoTexto: "o momento em que é sua vez de se manifestar",
        dica: "Pense em 'vez de falar'.",
        reensino: "Revise a leitura guiada.",
      },
      {
        pergunta: "Qual é a função de um mediador em uma discussão?",
        opcoes: ["Organizar a ordem das falas e garantir participação equilibrada", "Falar por todos os participantes", "Encerrar a discussão sem deixar ninguém falar", "Escolher apenas um vencedor no debate"],
        correta: 0,
        feedbackAcerto: "Isso mesmo!",
        feedbackErro: "Releia o texto sobre mediador.",
        ondeEstaNoTexto: "mediador, pessoa responsável por organizar a ordem das falas",
        dica: "Pense em quem organiza a discussão.",
        reensino: "Revise a leitura guiada sobre mediador.",
      },
      {
        pergunta: "O que resolveu a confusão no debate da sala 7B, segundo a leitura independente?",
        opcoes: ["A organização dos turnos de fala pela professora", "O fim das aulas do dia", "A ausência de qualquer regra", "A troca de sala de aula"],
        correta: 0,
        feedbackAcerto: "Correto! A organização dos turnos resolveu a confusão.",
        feedbackErro: "Releia a leitura independente.",
        ondeEstaNoTexto: "a professora então assumiu o papel de mediadora",
        dica: "Pense em quem interveio na sala 7B.",
        reensino: "Revise a leitura independente sobre o debate da sala 7B.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Missão em Família: Debate em Casa",
    materiais: ["Papel ou caderno", "Caneta"],
    passos: [
      "Escolha com a família um tema simples para discutir (ex.: qual filme assistir no fim de semana).",
      "Definam um mediador para organizar os turnos de fala.",
      "Cada pessoa fala na sua vez, enquanto as outras anotam os principais argumentos.",
      "Ao final, compartilhem as notas e cheguem a uma decisão em conjunto.",
    ],
    registro: "Registre os principais argumentos anotados e a decisão final da família.",
  },
  recompensa: { xp: 150, moedas: 75 },
};
