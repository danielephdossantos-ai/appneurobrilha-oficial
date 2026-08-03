import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 1 — Briefing da Linguagem: O Labirinto
 * -------------------------------------------------------------
 * Introdução à Unidade 1 ("O Labirinto da Linguagem") do 6º ano.
 * A missão define o conceito de linguagem como sistema de dados
 * complexo.
 *
 * BNCC: EF67LP01, EF67LP02
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-briefing-da-linguagem",
  titulo: "Briefing da Linguagem",
  iconeTrilha: "📡",
  bncc: ["EF67LP01", "EF67LP02"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Conexão Estabelecida: O Protocodificador",
    historia: "Analista, recebi o sinal. O Labirinto da Linguagem está ativo. Nossa missão aqui é analisar a estrutura da comunicação humana como um sistema de dados. Esqueça o 'falar por falar' — você vai aprender a decodificar o que está escondido sob a superfície de cada mensagem. Como um arquiteto de sistemas, você verá que cada texto é uma construção com propósito, técnica e modelos precisos.",
    imagemUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Analise o padrão de dados. O que este conjunto de mensagens tenta codificar?",
    bloco: {
      titulo: "Interceptação de Dados",
      capaImagemUrl: "",
      pistas: [],
      recado: {
        rotulo: "Log de entrada",
        icone: "💾",
        linhas: ["STATUS: DESORDEM", "PROJETO: DECIFRAR"],
        estilo: "cartaz",
      },
      pergunta: "Qual é o objetivo deste sistema de comunicação?",
      hipoteses: [
        { texto: "Transmissão de informações de forma organizada" },
        { texto: "Apenas ruído aleatório" },
        { texto: "Erro de sistema" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Dados processados. A linguagem humana é, antes de tudo, um código de transmissão.",
      feedbackErro: "Analise o padrão. Há intenção nos dados.",
      dica: "Pense na linguagem como uma ferramenta de organização do caos.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário de Ativos: Termos técnicos da sua operação de analista.",
    cards: [
      { palavra: "Sistema", explicacao: "Conjunto de partes que funcionam juntas de forma lógica. Na língua, as palavras são as peças e a gramática é o motor.", exemplo: "A língua é um sistema de signos que organiza o pensamento.", imagemUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Código", explicacao: "Conjunto de regras para converter informação. Sem código, a mensagem vira ruído.", exemplo: "O português é nosso código de operação padrão.", imagemUrl: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de arquivo.",
    leitura: {
      titulo: "O Sistema em Expansão",
      imagemUrl: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=400",
      destacar: ["sistema", "código", "decodificar", "mídias"],
      paragrafos: [
        "A linguagem é um sistema vivo e dinâmico. Ela não é apenas uma lista de palavras, mas uma estrutura que permite que dois humanos compartilhem mundos inteiros usando um código comum.",
        "Ela se adapta às novas mídias: do jornal impresso ao post de rede social, do bilhete manual ao e-mail corporativo. Cada meio exige um modelo de construção específico.",
        "Decodificar esses modelos é a nossa função primordial. Entender como um texto é 'montado' nos permite não apenas ler, mas dominar a comunicação."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de dados.",
    perguntas: [
      {
        pergunta: "Qual é a função da linguagem segundo o arquivo?",
        opcoes: ["Codificar e transmitir informação", "Gerar apenas erro", "Travar o sistema"],
        correta: 0,
        feedbackAcerto: "Correto.",
        feedbackErro: "Releia o arquivo.",
        ondeEstaNoTexto: "A linguagem é um sistema vivo.",
        dica: "A linguagem organiza.",
        reensino: "Analise o objetivo principal.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado nesta cena.",
    perguntas: [],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Modelagem: O Bilhete vs. O Log",
    instrucao: "Analise a diferença de estrutura entre um modelo informal e um modelo técnico.",
    blocos: [
      {
        tipo: "frases",
        titulo: "Modelo A: Bilhete Pessoal (Informal)",
        frases: [
          "Oi, Analista! Deixei o sinal aberto na mesa. Passa lá depois? Bjs.",
          "Estrutura: Saudação → Mensagem Curta → Despedida Afetiva."
        ]
      },
      {
        tipo: "frases",
        titulo: "Modelo B: Log de Sistema (Formal/Técnico)",
        frases: [
          "PROTOCOLO 404: ACESSO PERMITIDO. AGENTE IDENTIFICADO. AGUARDANDO COMANDO.",
          "Estrutura: Identificador → Status → Ação → Expectativa."
        ]
      }
    ]
  },
  momento07_sequencia: {
    instrucao: "Algoritmo de Construção: Ordem lógica dos dados.",
    bloco: {
      instrucao: "Reordene os blocos para formar uma comunicação funcional.",
      itens: [
        { id: "1", texto: "Definir o Objetivo (O que quero dizer?)", imagemUrl: "" },
        { id: "2", texto: "Escolher o Código (Português, Visual?)", imagemUrl: "" },
        { id: "3", texto: "Selecionar o Modelo (Bilhete, Jornal, Log?)", imagemUrl: "" },
        { id: "4", texto: "Transmitir a Mensagem", imagemUrl: "" }
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Algoritmo otimizado. Você entende como o ensino da língua se transforma em ferramenta.",
      feedbackErro: "Falha na sequência lógica. Reveja as etapas de construção.",
      dica: "Primeiro planejamos, depois escolhemos o modelo, depois executamos.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma de log.",
    leitura: {
      titulo: "Novo Log",
      imagemUrl: "",
      destacar: [],
      paragrafos: ["Análise concluída."],
    },
    perguntas: [],
  },
  momento09_revisao: {
    pontos: ["Conceitos básicos do sistema de linguagem processados."],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que define a linguagem?",
        opcoes: ["Um sistema complexo de transmissão", "Apenas ruído", "Um erro"],
        correta: 0,
        feedbackAcerto: "Análise correta.",
        feedbackErro: "Releia os logs.",
        ondeEstaNoTexto: "A linguagem é um sistema vivo.",
        dica: "A linguagem é organizada.",
        reensino: "Revise os conceitos de sistema.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Missão em Família",
    materiais: ["Papel", "Caneta"],
    passos: ["Explique o conceito de sistema de linguagem."],
    registro: "Tire uma foto da explicação.",
  },
  recompensa: {
    xp: 100,
    moedas: 50,
  },
};
