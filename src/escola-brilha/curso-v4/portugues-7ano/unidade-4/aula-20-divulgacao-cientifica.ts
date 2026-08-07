import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 20 — Divulgação Científica e Hipertexto
 * -------------------------------------------------------------
 * BNCC: EF67LP26, EF67LP21
 */
export const aula20: AulaPortuguesV4 = {
  slug: "aula-20-divulgacao-cientifica",
  titulo: "Divulgação Científica e Hipertexto",
  iconeTrilha: "🧬",
  bncc: ["EF67LP26", "EF67LP21"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Mídias e Verdades: Missão Final",
    historia: "Analista, chegamos à última missão da Unidade 4. O Observatório precisa transformar uma descoberta científica complexa em um texto de divulgação científica: claro, interessante e acessível para qualquer leitor. E, como será publicado no site oficial, você também vai aprender a usar links e hipertextos para conectar informações.",
    imagemUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Transmissão da Descoberta.",
    bloco: {
      titulo: "Diagnóstico de Divulgação",
      capaImagemUrl: "",
      pistas: [
        { nome: "Textos de divulgação científica explicam termos difíceis com exemplos simples.", imagemUrl: "" },
        { nome: "O hipertexto usa links para conectar um texto a outras informações.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel de Transmissão",
        icone: "🧬",
        linhas: [
          "  [ DIVULGAÇÃO CIENTÍFICA ]",
          "                          ",
          "  Linguagem clara         ",
          "  + Exemplos do dia a dia ",
          "  + Links (hipertexto)    ",
          "                          ",
          "  Objetivo: EXPLICAR BEM  ",
        ],
        estilo: "cartaz",
      },
      pergunta: "Qual é o principal objetivo de um texto de divulgação científica?",
      hipoteses: [
        { texto: "Tornar um assunto científico compreensível para o público em geral" },
        { texto: "Usar o máximo de termos técnicos possível" },
        { texto: "Substituir totalmente os artigos científicos originais" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Correto! A divulgação científica traduz a ciência para uma linguagem acessível.",
      feedbackErro: "Reveja o painel: o foco é explicar bem, não complicar.",
      dica: "Pense em como um cientista explicaria sua pesquisa para uma criança.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Palavras da Divulgação.",
    cards: [
      { palavra: "Divulgação científica", explicacao: "Texto que explica descobertas ou temas da ciência de forma acessível ao público não especialista.", exemplo: "A revista publicou uma divulgação científica sobre buracos negros.", imagemUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Hipertexto", explicacao: "Texto digital que contém links, permitindo que o leitor navegue para outras informações relacionadas.", exemplo: "Ao clicar no link do hipertexto, o leitor viu o vídeo do experimento.", imagemUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Linguagem acessível", explicacao: "Forma de escrever que evita termos difíceis desnecessários, explicando conceitos com exemplos simples.", exemplo: "O cientista usou linguagem acessível para explicar a fotossíntese.", imagemUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Sintaxe: Traduzindo a Ciência",
    instrucao: "Observe como um mesmo conceito pode ser dito de forma técnica ou acessível.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Técnico: 'O organismo realiza fotossíntese clorofiliana.'", explicacao: "💡 LINGUAGEM TÉCNICA: precisa, mas difícil para o público geral entender de imediato." },
          { texto: "Acessível: 'A planta usa a luz do sol para produzir seu próprio alimento.'", explicacao: "💡 LINGUAGEM ACESSÍVEL: mesma ideia, com exemplo simples do cotidiano." },
          { texto: "Hipertexto: 'Saiba mais sobre fotossíntese clicando aqui.'", explicacao: "💡 HIPERTEXTO: convida o leitor a se aprofundar clicando em um link relacionado." },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "Traduzindo a Ciência para Todos",
      imagemUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400",
      destacar: ["divulgação científica", "hipertexto", "linguagem acessível"],
      paragrafos: [
        "Cientistas costumam escrever artigos cheios de termos técnicos, compreensíveis apenas para outros especialistas. Para que essas descobertas cheguem ao público em geral, existe a divulgação científica: um texto que traduz a ciência para uma linguagem acessível.",
        "Um bom texto de divulgação científica usa comparações e exemplos do cotidiano para explicar conceitos difíceis. Em vez de dizer apenas 'fotossíntese clorofiliana', o texto pode explicar que 'a planta usa a luz do sol para produzir seu próprio alimento'.",
        "Na internet, esses textos costumam usar hipertexto: links que conectam o texto principal a vídeos, imagens ou outros artigos relacionados. Isso permite que o leitor escolha se quer se aprofundar em determinado ponto ou seguir a leitura linear.",
        "Assim, a divulgação científica e o hipertexto trabalham juntos para tornar o conhecimento mais acessível, permitindo que qualquer pessoa compreenda descobertas importantes sobre o mundo.",
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "Qual é a função da divulgação científica, segundo o texto?",
        opcoes: ["Traduzir descobertas científicas para uma linguagem acessível ao público", "Substituir totalmente os artigos técnicos dos cientistas", "Usar apenas termos técnicos para parecer mais séria", "Ser lida somente por outros cientistas"],
        correta: 0,
        feedbackAcerto: "Correto! A divulgação científica torna o conhecimento acessível a todos.",
        feedbackErro: "Releia o primeiro parágrafo com atenção à definição dada.",
        ondeEstaNoTexto: "existe a divulgação científica: um texto que traduz a ciência para uma linguagem acessível",
        dica: "Pense no público-alvo desse tipo de texto.",
        reensino: "A divulgação científica traduz descobertas complexas em linguagem acessível ao público geral.",
      },
      {
        pergunta: "O que é o hipertexto, segundo o texto?",
        opcoes: ["Links que conectam o texto a vídeos, imagens ou outros artigos", "Um texto impresso sem nenhuma imagem", "Um tipo de letra usado apenas em jornais", "Um resumo de um texto científico"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! O hipertexto conecta diferentes conteúdos por meio de links.",
        feedbackErro: "O terceiro parágrafo explica esse conceito com detalhes.",
        ondeEstaNoTexto: "esses textos costumam usar hipertexto: links que conectam o texto principal a vídeos, imagens ou outros artigos",
        dica: "Pense no que acontece quando você clica em um link durante a leitura.",
        reensino: "Hipertexto é um recurso digital que liga o texto a outras informações por meio de links.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_escrita: {
    titulo: "Console de Redação",
    instrucao: "Produza um pequeno texto de divulgação científica.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Tradutor da Ciência",
        comando: "Escolha um conceito científico simples (gravidade, evaporação, digestão) e escreva um parágrafo explicando-o com linguagem acessível e um exemplo do dia a dia. Inclua uma frase sugerindo 'saiba mais' como se fosse um link de hipertexto.",
        modelo: [
          "A gravidade é a força que puxa os objetos para baixo, como quando uma maçã cai da árvore. Saiba mais sobre a gravidade clicando no link ao lado.",
        ],
        checklist: [
          "Expliquei o conceito com linguagem simples?",
          "Usei um exemplo do cotidiano?",
          "Incluí uma sugestão de link de hipertexto?",
        ],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Criando um Texto de Divulgação",
    bloco: {
      instrucao: "Organize as etapas de produção de um texto de divulgação científica.",
      itens: [
        { id: "1", texto: "🔬 ESCOLHA: Escolha o conceito científico a ser explicado.", imagemUrl: "" },
        { id: "2", texto: "🗣️ TRADUÇÃO: Substitua termos técnicos por linguagem acessível.", imagemUrl: "" },
        { id: "3", texto: "🍎 EXEMPLO: Adicione um exemplo do cotidiano para facilitar o entendimento.", imagemUrl: "" },
        { id: "4", texto: "🔗 HIPERTEXTO: Inclua sugestões de links para quem quiser se aprofundar.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Texto de divulgação transmitido com sucesso! Você sabe traduzir a ciência.",
      feedbackErro: "Revise a ordem: primeiro escolha o tema, depois traduza, depois exemplifique e conecte.",
      dica: "O hipertexto (4) só faz sentido depois que o texto já foi escrito.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Notícia do Site do Observatório.",
    leitura: {
      titulo: "Por Que o Céu é Azul?",
      imagemUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=400",
      destacar: ["luz do sol se espalha", "saiba mais", "cores diferentes"],
      paragrafos: [
        "Você já se perguntou por que o céu é azul durante o dia? Isso acontece porque a luz do sol se espalha ao passar pela atmosfera, e a cor azul se espalha mais do que as outras cores.",
        "Quer entender melhor esse fenômeno? Saiba mais clicando no link sobre a dispersão da luz, disponível no final desta página.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual recurso o texto usa para convidar o leitor a se aprofundar no assunto?",
        opcoes: ["Um link de hipertexto ao final da página", "Uma nova pergunta sem resposta", "Um desenho sem explicação", "Um número de telefone para contato"],
        correta: 0,
        feedbackAcerto: "Exato! O texto sugere um link (hipertexto) para quem quiser saber mais.",
        feedbackErro: "Releia o segundo parágrafo com atenção à sugestão feita ao leitor.",
        dica: "Pense no recurso digital que conecta a outras informações.",
        reensino: "O hipertexto conecta o texto principal a outras fontes por meio de links.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "A divulgação científica traduz descobertas complexas em linguagem acessível.",
      "Exemplos do cotidiano ajudam o leitor a entender conceitos técnicos.",
      "O hipertexto conecta o texto a outras informações por meio de links.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual é o principal objetivo da divulgação científica?",
        opcoes: ["Tornar descobertas científicas compreensíveis ao público em geral", "Usar apenas termos técnicos avançados", "Substituir totalmente os artigos científicos originais", "Ser lida exclusivamente por especialistas"],
        correta: 0,
        feedbackAcerto: "Correto! O foco é tornar a ciência acessível a todos.",
        feedbackErro: "Pense no público-alvo desse tipo de texto.",
        ondeEstaNoTexto: "",
        dica: "Relembre o painel de transmissão da missão.",
        reensino: "A divulgação científica explica conceitos complexos de forma acessível.",
      },
      {
        pergunta: "O que caracteriza o hipertexto?",
        opcoes: ["A presença de links que conectam o texto a outras informações", "A ausência total de imagens", "O uso exclusivo de papel impresso", "A repetição de uma mesma frase várias vezes"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! Links são a marca registrada do hipertexto.",
        feedbackErro: "Pense no que acontece quando você clica em algo durante a leitura digital.",
        ondeEstaNoTexto: "",
        dica: "É um recurso típico de textos na internet.",
        reensino: "Hipertexto é o texto digital conectado a outros conteúdos por meio de links.",
      },
      {
        pergunta: "Por que exemplos do cotidiano são úteis em textos de divulgação científica?",
        opcoes: ["Porque ajudam a explicar conceitos difíceis de forma mais compreensível", "Porque tornam o texto mais técnico", "Porque substituem a necessidade de explicar o conceito", "Porque são exigidos apenas em textos impressos"],
        correta: 0,
        feedbackAcerto: "Perfeito! Exemplos simples aproximam a ciência do leitor comum.",
        feedbackErro: "Volte ao texto e relembre o exemplo da fotossíntese.",
        ondeEstaNoTexto: "",
        dica: "Pense em como comparar algo complexo a algo do dia a dia ajuda a entender.",
        reensino: "Exemplos do cotidiano tornam conceitos científicos mais fáceis de compreender.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Tradutor da Ciência em Casa",
    materiais: ["Caderno", "Caneta"],
    passos: [
      "Escolha, com a família, um fenômeno da natureza que desperte curiosidade (chuva, arco-íris, maré).",
      "Pesquise uma explicação científica simples para esse fenômeno.",
      "Reescreva a explicação com linguagem acessível, usando um exemplo do dia a dia.",
      "Registre no caderno a explicação final, como se fosse um texto de divulgação científica.",
    ],
    registro: "Escreva: 'Missão Tradutor da Ciência - Fenômeno explicado: [nome do fenômeno]'.",
  },
  recompensa: {
    xp: 150,
    moedas: 75,
  },
};
