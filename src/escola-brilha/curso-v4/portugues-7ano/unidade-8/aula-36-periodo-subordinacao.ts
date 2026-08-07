import type { AulaPortuguesV4 } from "../../types";

/** Aula 36 — Período Composto por Subordinação — EF07LP11, EF07LP10 */
export const aula36: AulaPortuguesV4 = {
  slug: "aula-36-periodo-subordinacao",
  titulo: "Período Composto por Subordinação",
  iconeTrilha: "🪜",
  bncc: ["EF07LP11", "EF07LP10"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Circuitos em Série",
    historia: "Analista, nem todas as orações são independentes. Algumas dependem totalmente de outra para fazer sentido completo, como um circuito em série que só funciona se a peça anterior estiver conectada. Isso é a subordinação: uma oração principal e uma oração subordinada, presa a ela. Hoje você vai aprender a identificar essa relação de dependência.",
    imagemUrl: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: A Oração que Depende de Outra.",
    bloco: {
      titulo: "Painel da Subordinação",
      capaImagemUrl: "",
      pistas: [
        { nome: "A oração subordinada não tem sentido completo sozinha.", imagemUrl: "" },
        { nome: "Ela depende da oração principal para funcionar.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel de Circuitos em Série",
        icone: "🪜",
        linhas: [
          "  [ SUBORDINAÇÃO ]           ",
          "                             ",
          "  A equipe soube QUE o sinal",
          "  havia sumido.              ",
          "                             ",
          "  'QUE o sinal havia sumido' ",
          "  não existe sozinha.        ",
        ],
        estilo: "cartaz",
      },
      pergunta: "O que caracteriza uma oração subordinada?",
      hipoteses: [
        { texto: "Ela depende da oração principal para ter sentido completo" },
        { texto: "Ela tem sentido completo mesmo isolada" },
        { texto: "Ela nunca aparece ligada a conjunção" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Correto! A oração subordinada depende da principal.",
      feedbackErro: "Tente isolar 'que o sinal havia sumido' e veja se faz sentido sozinha.",
      dica: "Se a oração some e a frase fica incompleta, ela é subordinada.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Peças da Subordinação.",
    cards: [
      { palavra: "Oração Principal", explicacao: "Oração que tem sentido completo e da qual a subordinada depende.", exemplo: "A equipe soube [que o sinal sumiu].", imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Oração Subordinada Causal", explicacao: "Indica a causa do fato expresso na oração principal (porque, já que).", exemplo: "A missão foi adiada porque houve uma tempestade.", imagemUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Oração Subordinada Temporal", explicacao: "Indica o tempo em que ocorre o fato da oração principal (quando, enquanto).", exemplo: "Quando o sinal chegou, todos comemoraram.", imagemUrl: "https://images.unsplash.com/photo-1554224155-1696413575a8?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Circuitos em Série",
    instrucao: "Observe como a oração subordinada depende sempre da principal para ter sentido.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "A equipe soube QUE o sinal sumiu.", explicacao: "💡 SUBSTANTIVA: a oração 'que o sinal sumiu' completa o sentido do verbo 'soube'.\n> Ex: 'Acho que vai chover.' e 'Espero que dê certo.'" },
          { texto: "A missão foi adiada PORQUE houve uma tempestade.", explicacao: "💡 CAUSAL: a oração explica a causa do que foi dito na principal.\n> Ex: 'Fiquei em casa porque chovia.' e 'Parei porque estava cansado.'" },
          { texto: "QUANDO o sinal chegou, todos comemoraram.", explicacao: "💡 TEMPORAL: a oração indica o momento em que a ação principal aconteceu.\n> Ex: 'Quando ele chegou, o jogo já tinha começado.' e 'Enquanto estudava, ouvia música.'" },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "O Momento do Contato",
      imagemUrl: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&q=80&w=400",
      destacar: ["quando", "porque", "que"],
      paragrafos: [
        "Quando o alarme soou às três da madrugada, ninguém no Observatório imaginava que aquele seria o dia mais importante do ano.",
        "A equipe correu para a sala de controle porque o sistema havia detectado um padrão nunca visto antes nos sinais recebidos.",
        "Os analistas perceberam que aquele sinal não era um erro de leitura, mas uma mensagem estruturada, repetida em intervalos regulares.",
        "Enquanto a equipe analisava os dados, o diretor do Observatório já preparava o comunicado que mudaria a rotina de todos ali.",
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "Por que a equipe correu para a sala de controle, segundo o texto?",
        opcoes: ["Porque o sistema detectou um padrão nunca visto antes", "Porque o alarme quebrou", "Porque o diretor pediu silêncio", "Porque a energia acabou"],
        correta: 0,
        feedbackAcerto: "Correto! A oração causal explica exatamente esse motivo.",
        feedbackErro: "Releia o segundo parágrafo do texto.",
        ondeEstaNoTexto: "porque o sistema havia detectado um padrão nunca visto antes",
        dica: "Procure a conjunção que indica motivo.",
        reensino: "Revise o card de Oração Subordinada Causal.",
      },
      {
        pergunta: "O que os analistas perceberam sobre o sinal recebido?",
        opcoes: ["Que era uma mensagem estruturada e repetida", "Que era apenas um erro de leitura", "Que vinha de outro Observatório", "Que não precisava de análise"],
        correta: 0,
        feedbackAcerto: "Isso mesmo, essa é a oração subordinada substantiva do texto.",
        feedbackErro: "Releia o terceiro parágrafo com atenção.",
        ondeEstaNoTexto: "perceberam que aquele sinal não era um erro de leitura, mas uma mensagem estruturada",
        dica: "Observe o que vem depois do verbo 'perceberam'.",
        reensino: "Revise o card de Oração Principal e a subordinada substantiva.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Personagem em análise: A Equipe do Observatório.",
    perguntas: [
      {
        pergunta: "O que a reação da equipe no texto revela sobre seu comportamento profissional?",
        opcoes: ["Agilidade e atenção diante de um evento inesperado", "Desatenção e demora para agir", "Medo que impediu qualquer ação", "Indiferença total ao alarme"],
        correta: 0,
        feedbackAcerto: "Exato, a equipe reagiu rápido e com atenção aos dados.",
        feedbackErro: "Releia o segundo e terceiro parágrafos.",
        ondeEstaNoTexto: "A equipe correu para a sala de controle",
        dica: "Observe a velocidade e o cuidado nas ações descritas.",
        reensino: "Revise a leitura guiada completa.",
      },
    ],
  },
  momento_escrita: {
    titulo: "Console de Subordinação",
    instrucao: "Construa períodos com orações principais e subordinadas.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Principal e Dependente",
        comando: "Escreva três períodos usando uma oração subordinada causal, uma temporal e uma substantiva, destacando a oração principal.",
        modelo: ["Não fui à escola porque estava doente.", "Quando a chuva parou, saímos para brincar.", "Espero que a prova seja fácil."],
        checklist: ["Usei uma oração causal?", "Usei uma oração temporal?", "Usei uma oração substantiva?"],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Montagem: Do Fato à Subordinação.",
    bloco: {
      instrucao: "Organize a construção de um período composto por subordinação.",
      itens: [
        { id: "1", texto: "🎯 ORAÇÃO PRINCIPAL: definir a ideia central completa ('a missão foi adiada').", imagemUrl: "" },
        { id: "2", texto: "🔗 CONJUNÇÃO SUBORDINATIVA: escolher o conector de dependência ('porque').", imagemUrl: "" },
        { id: "3", texto: "🪜 ORAÇÃO SUBORDINADA: acrescentar a ideia dependente ('houve uma tempestade').", imagemUrl: "" },
        { id: "4", texto: "✅ TESTE DE DEPENDÊNCIA: verificar se a subordinada sozinha fica incompleta.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Circuito em série montado! A dependência entre as orações está clara.",
      feedbackErro: "É preciso ter a oração principal antes de encaixar a subordinada.",
      dica: "Pense em qual das duas orações não faz sentido se ficar sozinha.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Comunicado Oficial.",
    leitura: {
      titulo: "Comunicado: Resultado da Análise",
      imagemUrl: "https://images.unsplash.com/photo-1541873676-a18131494184?auto=format&fit=crop&q=80&w=400",
      destacar: ["quando", "que"],
      paragrafos: [
        "A direção informa que o sinal recebido foi confirmado como um fenômeno natural raro, e não uma mensagem externa.",
        "Quando novos dados estiverem disponíveis, um novo comunicado será enviado a toda a equipe do Observatório.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que a direção informou, segundo o comunicado?",
        opcoes: ["Que o sinal era um fenômeno natural raro", "Que a missão foi cancelada", "Que o Observatório vai fechar", "Que a equipe será trocada"],
        correta: 0,
        feedbackAcerto: "Correto, essa é a oração subordinada substantiva do comunicado.",
        feedbackErro: "Releia a primeira frase do comunicado.",
        dica: "Observe o que vem depois de 'informa que'.",
        reensino: "Revise o card de Oração Principal e subordinada substantiva.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "Orações subordinadas dependem de uma oração principal para ter sentido completo.",
      "Existem subordinadas causais, temporais e substantivas, entre outras.",
      "Reconhecer a dependência entre orações ajuda a entender a lógica do texto.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que caracteriza uma oração subordinada?",
        opcoes: ["Depender da oração principal para ter sentido completo", "Ter sentido completo sozinha", "Nunca usar conjunção", "Ser sempre a primeira da frase"],
        correta: 0,
        feedbackAcerto: "Correto, essa é a definição central de subordinação.",
        feedbackErro: "Revise o painel de circuitos em série no momento 02.",
        ondeEstaNoTexto: "'QUE o sinal havia sumido' não existe sozinha.",
        dica: "Pense se a oração faz sentido isolada da principal.",
        reensino: "Volte ao briefing do momento 02.",
      },
      {
        pergunta: "Em 'a missão foi adiada porque houve uma tempestade', a oração subordinada é:",
        opcoes: ["Causal", "Temporal", "Substantiva", "Aditiva"],
        correta: 0,
        feedbackAcerto: "Isso mesmo, 'porque' introduz uma causa.",
        feedbackErro: "Releia o card de Oração Subordinada Causal.",
        ondeEstaNoTexto: "A missão foi adiada PORQUE houve uma tempestade.",
        dica: "Pense na pergunta 'por quê a missão foi adiada?'.",
        reensino: "Revise o Laboratório de Circuitos em Série.",
      },
      {
        pergunta: "Qual conjunção costuma introduzir uma oração subordinada temporal?",
        opcoes: ["Quando", "Porque", "Mas", "E"],
        correta: 0,
        feedbackAcerto: "Correto, 'quando' indica o tempo da ação.",
        feedbackErro: "Releia o card de Oração Subordinada Temporal.",
        ondeEstaNoTexto: "Quando o sinal chegou, todos comemoraram.",
        dica: "Pense na palavra que responde 'em que momento?'.",
        reensino: "Revise o momento 03 de vocabulário.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Circuito em Série",
    materiais: ["Caderno", "Caneta"],
    passos: [
      "Escolha um fato do seu dia e explique o motivo dele para um familiar usando 'porque'.",
      "Conte também quando o fato aconteceu usando 'quando' ou 'enquanto'.",
      "Peça para a pessoa identificar qual oração é a principal e qual é a subordinada.",
      "Registre as duas frases no caderno.",
    ],
    registro: "Escreva no caderno: 'Missão Circuito em Série - minhas frases foram: [X] e [Y]'.",
  },
  recompensa: { xp: 150, moedas: 75 },
};
