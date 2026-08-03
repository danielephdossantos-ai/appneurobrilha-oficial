import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 19 — O Manifesto: Vozes do Futuro
 * -------------------------------------------------------------
 * BNCC: EF67LP05, EF07LP13, EF67LP30
 */
export const aula19: AulaPortuguesV4 = {
  slug: "aula-19-o-manifesto-vozes",
  titulo: "O Manifesto do Futuro",
  iconeTrilha: "📢",
  bncc: ["EF67LP05", "EF07LP13", "EF67LP30"],
  duracaoMin: 30,
  momento01_motivacao: {
    titulo: "Transmissão Final: Sua Voz, Seu Código",
    historia: "Analista, chegamos ao nível final do Observatório. Você aprendeu a decodificar o mundo, filtrar fatos, analisar classes e ajustar frequências. Agora, o sistema é SEU. A aula de hoje é sobre o MANIFESTO: um gênero de impacto que reúne tudo o que vimos. É a hora de você usar a sua voz para projetar o futuro que deseja. Não é apenas escrever; é declarar uma visão. Está pronto para o seu maior briefing?",
    imagemUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: A Anatomia de um Manifesto.",
    bloco: {
      titulo: "Arquitetura de Impacto",
      capaImagemUrl: "",
      pistas: [
        { nome: "Manifesto: Uma declaração pública de princípios e intenções.", imagemUrl: "" },
        { nome: "Usa verbos no futuro e no presente do indicativo para gerar certeza.", imagemUrl: "" }
      ],
      recado: {
        rotulo: "Protocolo de Declaração",
        icone: "📢",
        linhas: [
          "  [ ESTRUTURA DO MANIFESTO ] ",
          "                             ",
          "  1. O QUE REJEITAMOS      ",
          "  > 'Não aceitaremos o ruído'",
          "          ↓                ",
          "  2. O QUE DEFENDEMOS      ",
          "  > 'Buscamos a clareza'   ",
          "          ↓                ",
          "  3. NOSSO COMPROMISSO     ",
          "  > 'Construiremos o amanhã'",
          "                             ",
          "  DICA: Manifestos unem o  ",
          "  EU ao NÓS.               "
        ],
        estilo: "cartaz",
      },
      pergunta: "Qual o objetivo central de um Manifesto?",
      hipoteses: [
        { texto: "Declarar publicamente uma visão ou desejo de mudança" },
        { texto: "Fazer uma lista de compras para o laboratório" },
        { texto: "Escrever um manual de instruções para robôs" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Voz ativa detectada. Você entende o poder da declaração pública.",
      feedbackErro: "Pense na palavra 'Manifestar' (trazer à luz).",
      dica: "É sobre expressar uma vontade coletiva.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Futuro: Ativos de Impacto.",
    cards: [
      { palavra: "Engajamento", explicacao: "O ato de se envolver ativamente em uma causa ou discussão.", exemplo: "O manifesto gerou grande engajamento na rede.", imagemUrl: "" },
      { palavra: "Legitimidade", explicacao: "A qualidade do que é justo e autêntico. Dá força ao seu discurso.", exemplo: "Seu manifesto tem legitimidade porque você vive o que escreve.", imagemUrl: "" },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Discurso Visionário.",
    leitura: {
      titulo: "Manifesto dos Nativos Digitais",
      imagemUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400",
      destacar: ["acreditamos", "conexão", "responsabilidade", "ética"],
      paragrafos: [
        "Nós acreditamos que a tecnologia não deve ser um muro, mas uma ponte. Não aceitaremos ser apenas receptores de dados; seremos produtores de conhecimento.",
        "Nossa conexão é global, mas nossa responsabilidade é local. Defendemos uma internet limpa de ódio e cheia de inteligência, onde o código sirva à humanidade.",
        "Portanto, declaramos que o futuro não é algo que esperamos; é algo que codificamos hoje, com ética e clareza."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Intenção.",
    perguntas: [
      {
        pergunta: "Qual o tom predominante no Manifesto lido?",
        opcoes: ["Firme, otimista e coletivo (Nós)", "Triste, isolado e confuso", "Apenas informativo e técnico"],
        correta: 0,
        feedbackAcerto: "Sintonia coletiva. O 'Nós' é a base do manifesto.",
        feedbackErro: "O texto usa 'Eu' ou 'Nós'?",
        ondeEstaNoTexto: "Nós acreditamos... Nossa conexão... declaramos...",
        dica: "Observe o uso da primeira pessoa do plural.",
        reensino: "Manifestos buscam unir pessoas em torno de um objetivo comum.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Impacto: Escolha de Palavras",
    instrucao: "Veja como palavras de 'Alta Potência' mudam o peso da sua mensagem.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "Eu acho que as coisas PODERIAM melhorar.",
            explicacao: "💡 BAIXA POTÊNCIA: Uso do condicional (poderia) e do achismo (eu acho). Transmite dúvida.\n> Ex: 'Talvez seja bom...'"
          },
          {
            texto: "Nós DECLARAMOS que o sistema VAI melhorar.",
            explicacao: "💡 ALTA POTÊNCIA: Uso de verbos afirmativos e no futuro. Transmite certeza e liderança.\n> Ex: 'Acreditamos que...', 'Faremos...'"
          },
          {
            texto: "É PRECISO agir agora.",
            explicacao: "💡 URGÊNCIA: Coloca a necessidade como algo indiscutível.\n> Ex: 'É vital...', 'É essencial...'"
          }
        ]
      }
    ]
  },
  momento_escrita: {
    titulo: "Terminal de Liderança",
    instrucao: "Escreva o rascunho do seu próprio Manifesto.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Meu Manifesto Digital",
        comando: "Complete as frases para criar sua declaração de visão.",
        modelo: [
          "NÓS ACREDITAMOS EM: [Sua ideia]",
          "NÓS NÃO ACEITAREMOS: [O que você rejeita]",
          "NOSSO COMPROMISSO É: [Sua ação]"
        ],
        checklist: [
          "Usei o 'Nós' para incluir outras pessoas?",
          "Meus verbos estão firmes e diretos?",
          "Minha visão está clara?"
        ],
        cicloRevisao: true
      }
    ]
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Manifesto: O Fluxo do Líder",
    bloco: {
      instrucao: "Organize as etapas para lançar um manifesto que realmente engaje as pessoas.",
      itens: [
        { id: "1", texto: "Identificar um problema ou visão coletiva.", imagemUrl: "" },
        { id: "2", texto: "Escrever com palavras de impacto (Nós, Acreditamos).", imagemUrl: "" },
        { id: "3", texto: "Compartilhar a declaração publicamente.", imagemUrl: "" },
        { id: "4", texto: "Inspirar outros a agir conforme os princípios.", imagemUrl: "" }
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Liderança validada! Você está pronto para influenciar o futuro.",
      feedbackErro: "O compartilhamento (3) vem depois que o texto está pronto (2).",
      dica: "A visão vem antes da ação.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: O Fim do Observatório.",
    leitura: {
      titulo: "Conclusão de Ciclo: O Analista Mestre",
      imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
      destacar: ["domínio", "ética", "código"],
      paragrafos: [
        "Você percorreu todo o caminho. Do Labirinto ao Observatório, as palavras agora são suas ferramentas de precisão.",
        "Lembre-se: quem domina a linguagem, domina a realidade. Use esse poder com ética, clareza e responsabilidade.",
        "O sistema do 7º ano está concluído. A missão agora é aplicar esse código na vida real."
      ],
    },
    perguntas: [
      {
        pergunta: "Qual a lição final sobre o domínio da linguagem?",
        opcoes: ["Usar o poder com ética e responsabilidade", "Apenas ganhar moedas digitais", "Falar o mais difícil possível"],
        correta: 0,
        feedbackAcerto: "Mestre Analista! A ética é o firewall do caráter.",
        feedbackErro: "O poder sem ética é apenas ruído perigoso.",
        dica: "Busque a palavra 'ética'.",
        reensino: "A linguagem é uma ferramenta de construção social e deve ser usada para o bem."
      }
    ],
  },
  momento09_revisao: {
    pontos: [
      "Manifesto como declaração pública de princípios coletivos.",
      "Uso de palavras de impacto (Nós, Acreditamos, Futuro).",
      "A linguagem como ferramenta de liderança e mudança social."
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual pronome é a marca registrada de um Manifesto?",
        opcoes: ["Nós", "Eu", "Eles"],
        correta: 0,
        feedbackAcerto: "Perfeito. É a voz da união.",
        feedbackErro: "O manifesto quer unir ou separar?",
        ondeEstaNoTexto: "Manifestos unem o EU ao NÓS.",
        dica: "É coletivo.",
        reensino: "O uso do plural aproxima o leitor e cria um sentimento de pertencimento à causa."
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Manifesto da Nossa Casa",
    materiais: ["Papel e caneta"],
    passos: [
      "Reúna sua família e proponha a criação de um 'Manifesto da Casa'.",
      "Definam 3 coisas que vocês acreditam (ex: 'Acreditamos no respeito') e 3 que rejeitam.",
      "Escrevam e colem na geladeira ou em um lugar visível.",
      "Sintam o poder das palavras declaradas."
    ],
    registro: "Tire uma foto do Manifesto da sua família.",
  },
  recompensa: {
    xp: 1000,
    moedas: 500,
  },
};
