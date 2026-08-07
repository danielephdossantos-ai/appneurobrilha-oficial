import type { AulaPortuguesV4 } from "../../types";

/** Aula 25 — Leitura Expressiva e Oralidade Literária. BNCC: EF67LP31, EF67LP23 */
export const aula25: AulaPortuguesV4 = {
  slug: "aula-25-leitura-dramatizada",
  titulo: "Leitura Dramatizada",
  iconeTrilha: "🎭",
  bncc: ["EF67LP31", "EF67LP23"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Setor Literatura: Transmissão em Voz Alta",
    historia: "Analista, o Observatório recebeu um pedido incomum: transformar um arquivo de texto em transmissão sonora viva. Não basta ler as palavras — é preciso dar entonação, pausa e emoção certas para que quem ouve sinta a cena. Essa é a leitura dramatizada: usar a voz como instrumento para interpretar um texto literário. Hoje você vai aprender a marcar um texto para lê-lo em voz alta com intenção.",
    imagemUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: A Voz como Instrumento.",
    bloco: {
      titulo: "Painel da Leitura Expressiva",
      capaImagemUrl: "",
      pistas: [
        { nome: "A pontuação indica pausas e entonações.", imagemUrl: "" },
        { nome: "Cada personagem pode ter um tom de voz diferente.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel da Voz",
        icone: "🎙️",
        linhas: [
          "  [ RECURSOS DA LEITURA DRAMATIZADA ]",
          "                                    ",
          "  ENTONAÇÃO                         ",
          "  > subir ou descer o tom da voz",
          "                                    ",
          "  PAUSA                             ",
          "  > silêncio estratégico entre falas",
          "                                    ",
          "  RITMO DE FALA                     ",
          "  > mais rápido (tensão) ou mais lento (calma)",
          "                                    ",
          "  VOLUME                            ",
          "  > mais alto (emoção forte) ou mais baixo (segredo)",
        ],
        estilo: "cartaz",
      },
      pergunta: "Para representar um sussurro ou um segredo na leitura em voz alta, o que se deve ajustar?",
      hipoteses: [
        { texto: "O volume, deixando a voz mais baixa" },
        { texto: "A cor da roupa do leitor" },
        { texto: "O tamanho do texto" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Correto! O volume mais baixo comunica segredo ou intimidade.",
      feedbackErro: "Releia o painel: o volume é o recurso ligado à intensidade da voz.",
      dica: "Pense em como sua voz muda quando você conta um segredo.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Termos da Leitura Expressiva.",
    cards: [
      { palavra: "Entonação", explicacao: "É a variação do tom de voz usada para expressar sentimentos ou intenções durante a fala.", exemplo: "A entonação de surpresa faz a voz subir de repente.", imagemUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Pausa", explicacao: "Interrupção breve na fala, usada para criar suspense ou destacar uma ideia.", exemplo: "Ele fez uma pausa antes de revelar o segredo.", imagemUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Leitura dramatizada", explicacao: "Forma de ler um texto em voz alta representando emoções e vozes de personagens.", exemplo: "Na leitura dramatizada, cada aluno interpretou uma personagem da peça.", imagemUrl: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Voz: Marcando um Texto para Ler em Voz Alta",
    instrucao: "Veja como cada trecho pode ser lido com uma intenção diferente.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "\"Socorro!\", gritou ela, com a voz tremendo de medo.", explicacao: "💡 VOLUME ALTO + ENTONAÇÃO TENSA: a exclamação pede voz mais forte e ritmo acelerado." },
          { texto: "Ele parou. Respirou fundo. E então... contou tudo.", explicacao: "💡 PAUSAS: os pontos finais curtos e as reticências pedem silêncios estratégicos antes da revelação." },
          { texto: "— Vem cá, quietinho — sussurrou a avó, sorrindo.", explicacao: "💡 VOLUME BAIXO: o travessão de fala e a palavra 'sussurrou' indicam voz suave e íntima." },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Arquivo: leia o texto pensando em como ele seria dito em voz alta.",
    leitura: {
      titulo: "O Chamado na Escada",
      imagemUrl: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&q=80&w=400",
      destacar: ["escada", "sussurro", "grito", "silêncio"],
      paragrafos: [
        "— Você ouviu isso? — sussurrou Bia, puxando a manga do irmão. A escada do sótão rangia devagar, como se alguém subisse degrau por degrau, com cuidado para não ser ouvido.",
        "Marcelo ficou em silêncio. Contou até três. Depois, com a voz mais firme que conseguiu, gritou: — Quem está aí?!",
        "Por um instante, nada. Só o vento batendo na janela. Então, uma voz calma respondeu lá de cima: — Sou eu, o vovô, procurando as caixas de Natal.",
        "Os dois soltaram o ar que nem sabiam estar prendendo e caíram na risada, aliviados. Bia ainda disse, entre risos: — Achei que fosse fantasma... — enquanto o coração ainda batia acelerado.",
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log: compreensão do texto.",
    perguntas: [
      {
        pergunta: "Como a fala de Bia no início do texto deveria ser lida em voz alta?",
        opcoes: ["Em tom baixo, como um sussurro tenso", "Gritando, com raiva", "Cantando alegremente", "Sem nenhuma emoção, de forma neutra"],
        correta: 0,
        feedbackAcerto: "Correto! O texto indica que Bia 'sussurrou', então a leitura deve ser baixa e tensa.",
        feedbackErro: "Releia a primeira fala de Bia e observe o verbo que descreve como ela fala.",
        ondeEstaNoTexto: "sussurrou Bia, puxando a manga do irmão",
        dica: "Procure o verbo que indica como a fala foi dita.",
        reensino: "As indicações verbais (como 'sussurrou', 'gritou') orientam a entonação da leitura dramatizada.",
      },
      {
        pergunta: "Que recurso de leitura marca o momento de tensão antes da resposta do avô?",
        opcoes: ["A pausa: 'Por um instante, nada.'", "Uma rima no texto", "Uma nova personagem", "Um parágrafo em outro idioma"],
        correta: 0,
        feedbackAcerto: "Isso! A frase curta 'Por um instante, nada.' pede uma pausa de silêncio na leitura.",
        feedbackErro: "Releia o início do terceiro parágrafo.",
        ondeEstaNoTexto: "Por um instante, nada. Só o vento batendo na janela.",
        dica: "Procure a frase curta que cria suspense antes da resposta.",
        reensino: "Frases curtas e pontuação seca geralmente indicam pausas estratégicas na leitura em voz alta.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Cena sob análise: personagens e cenário de 'O Chamado na Escada'.",
    perguntas: [
      {
        pergunta: "Quais são os personagens principais do texto?",
        opcoes: ["Bia, Marcelo e o avô", "Apenas o avô", "Bia e uma vizinha", "Marcelo e um professor"],
        correta: 0,
        feedbackAcerto: "Correto! Bia, Marcelo e o avô são os três personagens envolvidos na cena.",
        feedbackErro: "Releia o texto e conte quantas vozes diferentes aparecem entre aspas ou travessões.",
        ondeEstaNoTexto: "Sou eu, o vovô, procurando as caixas de Natal.",
        dica: "Um deles só aparece falando no fim, mas é citado por nome.",
        reensino: "Para uma leitura dramatizada, é essencial identificar todos os personagens que falam no texto.",
      },
      {
        pergunta: "Em que cenário se passa a cena?",
        opcoes: ["Perto da escada que leva ao sótão", "Na cozinha da casa", "No quintal", "Na escola"],
        correta: 0,
        feedbackAcerto: "Exato! O barulho vem da escada do sótão, cenário central da cena.",
        feedbackErro: "Releia o primeiro parágrafo, sobre o que rangia devagar.",
        ondeEstaNoTexto: "A escada do sótão rangia devagar",
        dica: "Pense em qual parte da casa produz o som que assusta os irmãos.",
        reensino: "O cenário de uma cena dramatizada ajuda a decidir o clima da leitura (tenso, calmo, etc).",
      },
    ],
  },
  momento_escrita: {
    titulo: "Console de Criação: Marcando Seu Texto para Ler em Voz Alta",
    instrucao: "Escolha um pequeno trecho e marque como ele deve ser lido em voz alta.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Roteiro de Voz",
        comando: "Escreva um diálogo curto entre dois personagens (4 a 6 falas) e, ao lado de cada fala, indique entre parênteses como ela deve ser lida (sussurrando, gritando, com pausa, calmamente).",
        modelo: [
          "— Você trouxe a lanterna? (sussurrando)",
          "— Trouxe, mas... ela não liga. (com pausa, hesitante)",
          "— O QUÊ?! Agora estamos no escuro! (gritando, assustado)",
        ],
        checklist: [
          "Escrevi ao menos 4 falas entre dois personagens?",
          "Indiquei entre parênteses como cada fala deve ser lida?",
          "Usei pelo menos dois recursos diferentes (volume, pausa, entonação)?",
        ],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Preparando uma Leitura Dramatizada",
    bloco: {
      instrucao: "Organize os passos para preparar a leitura dramatizada de um texto.",
      itens: [
        { id: "1", texto: "📖 Ler o texto silenciosamente para entender a história completa.", imagemUrl: "" },
        { id: "2", texto: "🖊️ Marcar as falas de cada personagem e o clima de cada trecho.", imagemUrl: "" },
        { id: "3", texto: "🎙️ Praticar a leitura em voz alta, ajustando volume, pausa e entonação.", imagemUrl: "" },
        { id: "4", texto: "🎭 Apresentar a leitura dramatizada para um público.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Perfeito! Essa é a sequência ideal para preparar uma leitura dramatizada.",
      feedbackErro: "Pense: primeiro entender o texto, depois marcar, depois praticar, só então apresentar.",
      dica: "A apresentação (passo 4) sempre vem depois da prática.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: prepare este trecho para ler em voz alta.",
    leitura: {
      titulo: "A Última Carta",
      imagemUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=400",
      destacar: ["carta", "silêncio", "voz embargada"],
      paragrafos: [
        "Com as mãos tremendo, Laura abriu o envelope amarelado. — É a letra dela — disse, com a voz embargada, quase sem conseguir terminar a frase.",
        "Fez uma pausa longa antes de continuar a leitura. Cada palavra parecia pesar mais que a anterior, e o silêncio na sala só aumentava a emoção do momento.",
      ],
    },
    perguntas: [
      {
        pergunta: "Como deveria soar a voz de Laura ao ler a frase 'É a letra dela'?",
        opcoes: ["Embargada, emocionada, mais lenta", "Gritando de raiva", "Rindo alto", "Sem nenhuma emoção, rápida"],
        correta: 0,
        feedbackAcerto: "Correto! O texto indica 'voz embargada', pedindo leitura emocionada e mais lenta.",
        feedbackErro: "Releia a fala de Laura e observe como o texto descreve sua voz.",
        dica: "Procure a expressão que descreve o estado da voz de Laura.",
        reensino: "As descrições do narrador (como 'voz embargada') orientam a entonação certa na leitura dramatizada.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "A leitura dramatizada usa entonação, pausa, ritmo e volume para interpretar um texto em voz alta.",
      "Indicações do narrador (como 'sussurrou', 'gritou') orientam como cada fala deve soar.",
      "Preparar uma leitura dramatizada exige entender o texto, marcar as falas e praticar antes de apresentar.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que é entonação?",
        opcoes: ["A variação do tom de voz para expressar sentimentos", "Um tipo de rima", "O nome do narrador", "Um sinal de pontuação"],
        correta: 0,
        feedbackAcerto: "Correto! Entonação é a variação do tom de voz.",
        feedbackErro: "Reveja o card de vocabulário sobre 'Entonação'.",
        ondeEstaNoTexto: "É a variação do tom de voz usada para expressar sentimentos ou intenções durante a fala.",
        dica: "Pense em como sua voz sobe ou desce ao falar.",
        reensino: "Reveja o Momento 03: entonação é o recurso vocal ligado à emoção da fala.",
      },
      {
        pergunta: "Para que serve a pausa na leitura dramatizada?",
        opcoes: ["Criar suspense ou destacar uma ideia", "Aumentar o tamanho do texto", "Substituir a pontuação", "Tornar a leitura mais rápida"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! A pausa cria suspense e dá destaque a partes importantes.",
        feedbackErro: "Reveja o card de vocabulário sobre 'Pausa'.",
        ondeEstaNoTexto: "Interrupção breve na fala, usada para criar suspense ou destacar uma ideia.",
        dica: "Pense no momento antes de uma revelação importante em uma história.",
        reensino: "Reveja o Laboratório de Voz: pausas são silêncios estratégicos durante a leitura.",
      },
      {
        pergunta: "Qual é o primeiro passo para preparar uma leitura dramatizada?",
        opcoes: ["Ler o texto silenciosamente para entender a história completa", "Apresentar direto para o público", "Decorar o texto sem lê-lo antes", "Ignorar as falas dos personagens"],
        correta: 0,
        feedbackAcerto: "Correto! É preciso compreender o texto antes de marcá-lo e praticá-lo.",
        feedbackErro: "Reveja o Laboratório de Escaneamento do Momento 07.",
        ondeEstaNoTexto: "Ler o texto silenciosamente para entender a história completa.",
        dica: "Pense no que vem antes de marcar as falas dos personagens.",
        reensino: "Revise o Momento 07: entender o texto é sempre o primeiro passo da preparação.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Voz em Família",
    materiais: ["Um livro ou texto curto", "Caderno"],
    passos: [
      "Escolha, com a família, um trecho curto de um livro, poema ou crônica.",
      "Leia o trecho silenciosamente e marque onde fará pausas, sussurros ou tons mais altos.",
      "Apresente a leitura dramatizada para a família, usando voz, pausa e entonação.",
      "Peça para a família dar uma nota (de 1 a 5) para a expressividade da leitura e registre no caderno.",
    ],
    registro: "Escreva: 'Missão Voz - O trecho escolhido foi [X] e a nota da família foi [Y]'.",
  },
  recompensa: { xp: 150, moedas: 75 },
};
