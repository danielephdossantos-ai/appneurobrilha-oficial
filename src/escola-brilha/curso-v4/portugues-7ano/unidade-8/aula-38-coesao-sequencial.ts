import type { AulaPortuguesV4 } from "../../types";

/** Aula 38 — Conectivos e Organização Tópica do Texto — EF07LP13, EF67LP25 */
export const aula38: AulaPortuguesV4 = {
  slug: "aula-38-coesao-sequencial",
  titulo: "Conectivos e Organização Tópica",
  iconeTrilha: "🧵",
  bncc: ["EF07LP13", "EF67LP25"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "O Fio que Costura o Texto Inteiro",
    historia: "Analista, um texto bem escrito não é uma pilha de frases soltas: é uma sequência organizada, onde cada parágrafo se conecta ao anterior por um fio invisível. Esse fio é formado pelos conectivos sequenciais, palavras como 'primeiro', 'além disso' e 'por fim', que organizam as ideias em uma ordem lógica. Hoje você vai aprender a costurar seus textos com esses conectivos.",
    imagemUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: A Ordem das Ideias.",
    bloco: {
      titulo: "Painel dos Conectivos Sequenciais",
      capaImagemUrl: "",
      pistas: [
        { nome: "Conectivos sequenciais organizam a ordem das ideias no texto.", imagemUrl: "" },
        { nome: "Eles ajudam o leitor a acompanhar o raciocínio do autor sem se perder.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel de Organização Tópica",
        icone: "🧵",
        linhas: [
          "  [ CONECTIVOS SEQUENCIAIS ] ",
          "                             ",
          "  PRIMEIRO, testamos.        ",
          "  EM SEGUIDA, ajustamos.     ",
          "  POR FIM, lançamos.         ",
          "                             ",
          "  Cada conectivo marca uma   ",
          "  etapa do raciocínio.       ",
        ],
        estilo: "cartaz",
      },
      pergunta: "Qual é a função dos conectivos sequenciais em um texto?",
      hipoteses: [
        { texto: "Organizar a ordem das ideias e guiar o leitor" },
        { texto: "Substituir todos os substantivos do texto" },
        { texto: "Encerrar o texto sem explicar nada" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Correto! Os conectivos sequenciais organizam a ordem lógica das ideias.",
      feedbackErro: "Observe no painel como 'primeiro', 'em seguida' e 'por fim' marcam etapas.",
      dica: "Pense em uma receita de bolo: por que ela usa 'primeiro' e 'depois'?",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Fios de Organização.",
    cards: [
      { palavra: "Conectivo de Abertura", explicacao: "Inicia uma sequência de ideias (primeiramente, para começar).", exemplo: "Primeiramente, a equipe verificou os sensores.", imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Conectivo de Continuidade", explicacao: "Acrescenta uma nova etapa ou ideia (além disso, em seguida).", exemplo: "Além disso, os dados foram enviados à base central.", imagemUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Conectivo de Fechamento", explicacao: "Encerra a sequência de ideias (por fim, finalmente).", exemplo: "Por fim, o relatório foi arquivado no sistema.", imagemUrl: "https://images.unsplash.com/photo-1554224155-1696413575a8?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Costura Textual",
    instrucao: "Observe como cada conectivo marca uma etapa dentro da sequência de ideias.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "PRIMEIRAMENTE, a equipe calibrou os sensores.", explicacao: "💡 ABERTURA: inicia a sequência de etapas do processo.\n> Ex: 'Primeiramente, lave as mãos.' e 'Para começar, organize os materiais.'" },
          { texto: "ALÉM DISSO, verificaram a conexão com a base.", explicacao: "💡 CONTINUIDADE: acrescenta uma nova etapa à sequência já iniciada.\n> Ex: 'Além disso, revise o texto.' e 'Em seguida, adicione o sal.'" },
          { texto: "POR FIM, o relatório foi enviado à diretoria.", explicacao: "💡 FECHAMENTO: encerra a sequência de etapas com a última ação.\n> Ex: 'Por fim, sirva o prato.' e 'Finalmente, entregue a tarefa.'" },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "Manual de Procedimento: Preparação para o Lançamento",
      imagemUrl: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&q=80&w=400",
      destacar: ["primeiramente", "em seguida", "por fim"],
      paragrafos: [
        "Primeiramente, a equipe técnica realiza uma checagem completa de todos os sistemas da sonda, garantindo que nenhum componente esteja com falha antes do lançamento.",
        "Em seguida, os engenheiros conferem a rota de voo programada, comparando os dados com simulações feitas nos últimos meses de preparação.",
        "Além disso, a equipe de comunicação testa os canais de transmissão, assegurando que nenhum sinal será perdido durante a viagem.",
        "Por fim, com tudo verificado, o diretor autoriza o lançamento, e a contagem regressiva final é iniciada com toda a equipe reunida na sala de controle.",
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "Qual conectivo abre a sequência de procedimentos no texto?",
        opcoes: ["Primeiramente", "Em seguida", "Além disso", "Por fim"],
        correta: 0,
        feedbackAcerto: "Correto! 'Primeiramente' inicia a sequência descrita.",
        feedbackErro: "Releia a primeira palavra do primeiro parágrafo.",
        ondeEstaNoTexto: "Primeiramente, a equipe técnica realiza",
        dica: "Observe a palavra que aparece logo no início do texto.",
        reensino: "Revise o card de Conectivo de Abertura.",
      },
      {
        pergunta: "O que acontece na etapa marcada por 'por fim'?",
        opcoes: ["O diretor autoriza o lançamento e a contagem regressiva começa", "A equipe testa os canais de comunicação", "Os engenheiros conferem a rota de voo", "A checagem dos sistemas é iniciada"],
        correta: 0,
        feedbackAcerto: "Isso mesmo, essa é a etapa final descrita no texto.",
        feedbackErro: "Releia o último parágrafo do manual.",
        ondeEstaNoTexto: "Por fim, com tudo verificado, o diretor autoriza o lançamento",
        dica: "Busque a última etapa mencionada no texto.",
        reensino: "Revise o card de Conectivo de Fechamento.",
      },
    ],
  },
  momento06_personagensCenario: { instrucao: "Nenhum agente detectado.", perguntas: [] },
  momento_escrita: {
    titulo: "Console de Sequência",
    instrucao: "Organize um procedimento em etapas usando conectivos sequenciais.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Meu Procedimento em Etapas",
        comando: "Descreva, em quatro frases, como você organiza sua rotina de estudos, usando 'primeiramente', 'em seguida', 'além disso' e 'por fim'.",
        modelo: ["Primeiramente, organizo o material.", "Em seguida, reviso a matéria do dia.", "Além disso, faço os exercícios.", "Por fim, confiro se entendi tudo."],
        checklist: ["Usei um conectivo de abertura?", "Usei ao menos um de continuidade?", "Usei um conectivo de fechamento?"],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Costura: Organizando as Etapas do Texto.",
    bloco: {
      instrucao: "Organize as etapas de um procedimento textual, do início ao fechamento.",
      itens: [
        { id: "1", texto: "🧵 ABERTURA: usar 'primeiramente' para iniciar a sequência.", imagemUrl: "" },
        { id: "2", texto: "➕ CONTINUIDADE 1: usar 'em seguida' para a segunda etapa.", imagemUrl: "" },
        { id: "3", texto: "➕ CONTINUIDADE 2: usar 'além disso' para acrescentar mais uma etapa.", imagemUrl: "" },
        { id: "4", texto: "🏁 FECHAMENTO: usar 'por fim' para encerrar a sequência.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Texto costurado com perfeição! A sequência ficou clara do início ao fim.",
      feedbackErro: "É preciso abrir a sequência antes de continuar e fechar depois.",
      dica: "Pense em uma receita: você não fecha antes de começar.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Tutorial de Manutenção.",
    leitura: {
      titulo: "Tutorial: Como Trocar um Sensor",
      imagemUrl: "https://images.unsplash.com/photo-1541873676-a18131494184?auto=format&fit=crop&q=80&w=400",
      destacar: ["primeiro", "depois", "finalmente"],
      paragrafos: [
        "Primeiro, desligue o equipamento e retire o sensor antigo com cuidado, evitando puxar os fios de conexão.",
        "Depois, conecte o novo sensor na mesma posição e teste o funcionamento antes de fechar a tampa. Finalmente, registre a troca no sistema de manutenção.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual é a última etapa do tutorial, segundo o texto?",
        opcoes: ["Registrar a troca no sistema de manutenção", "Desligar o equipamento", "Retirar o sensor antigo", "Conectar o novo sensor"],
        correta: 0,
        feedbackAcerto: "Correto, essa é a etapa marcada por 'finalmente'.",
        feedbackErro: "Releia o final do segundo parágrafo.",
        dica: "Procure o conectivo de fechamento no texto.",
        reensino: "Revise o Laboratório de Costura Textual.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "Conectivos sequenciais organizam as ideias do texto em uma ordem lógica.",
      "Existem conectivos de abertura, continuidade e fechamento.",
      "Usar esses conectivos ajuda o leitor a acompanhar o raciocínio sem se perder.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual é a função dos conectivos sequenciais?",
        opcoes: ["Organizar a ordem das ideias no texto", "Substituir os substantivos da frase", "Eliminar a necessidade de parágrafos", "Indicar apenas o tempo verbal"],
        correta: 0,
        feedbackAcerto: "Correto, essa é a função central dos conectivos sequenciais.",
        feedbackErro: "Revise o painel de organização tópica no momento 02.",
        ondeEstaNoTexto: "Cada conectivo marca uma etapa do raciocínio.",
        dica: "Pense em como uma receita organiza os passos.",
        reensino: "Volte ao briefing do momento 02.",
      },
      {
        pergunta: "Qual conectivo é típico de fechamento de sequência?",
        opcoes: ["Por fim", "Primeiramente", "Além disso", "Em seguida"],
        correta: 0,
        feedbackAcerto: "Isso mesmo, 'por fim' encerra a sequência de ideias.",
        feedbackErro: "Releia o card de Conectivo de Fechamento.",
        ondeEstaNoTexto: "Por fim, o relatório foi arquivado no sistema.",
        dica: "Pense na última etapa de qualquer processo.",
        reensino: "Revise o momento 03 de vocabulário.",
      },
      {
        pergunta: "Qual conectivo é usado para acrescentar uma nova etapa no meio do processo?",
        opcoes: ["Além disso", "Por fim", "Primeiramente", "Ontem"],
        correta: 0,
        feedbackAcerto: "Correto, 'além disso' acrescenta uma nova etapa.",
        feedbackErro: "Releia o card de Conectivo de Continuidade.",
        ondeEstaNoTexto: "Além disso, os dados foram enviados à base central.",
        dica: "Pense na palavra que soma uma nova informação.",
        reensino: "Revise o Laboratório de Costura Textual.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Sequência em Casa",
    materiais: ["Caderno", "Caneta"],
    passos: [
      "Escolha uma tarefa doméstica simples (arrumar a cama, guardar a louça).",
      "Descreva a tarefa em etapas usando 'primeiramente', 'em seguida' e 'por fim'.",
      "Peça a um familiar para seguir as etapas exatamente como você descreveu.",
      "Registre no caderno se a sequência funcionou corretamente.",
    ],
    registro: "Escreva no caderno: 'Missão Sequência - minhas etapas foram: [X], [Y] e [Z]'.",
  },
  recompensa: { xp: 150, moedas: 75 },
};
