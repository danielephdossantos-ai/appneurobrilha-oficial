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
    titulo: "Conexão Estabelecida",
    historia: "Analista, recebi o sinal. O Labirinto da Linguagem está ativo. Nossa missão aqui é analisar a estrutura da comunicação humana como um sistema de dados. Esqueça o 'falar por falar' — você vai aprender a decodificar o que está escondido sob a superfície de cada mensagem.",
    imagemUrl: "",
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
    instrucao: "Termos técnicos da sua operação de analista.",
    cards: [
      { palavra: "Sistema", explicacao: "Conjunto de partes que funcionam juntas.", exemplo: "A língua é um sistema de signos.", imagemUrl: "" },
      { palavra: "Código", explicacao: "Conjunto de regras para converter informação.", exemplo: "O português é nosso código de operação.", imagemUrl: "" },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de arquivo.",
    leitura: {
      titulo: "O Sistema em Expansão",
      imagemUrl: "",
      destacar: ["sistema", "código"],
      paragrafos: ["A linguagem é um sistema vivo.", "Ela se adapta às novas mídias.", "Decodificar é a nossa função."],
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
  momento07_sequencia: {
    instrucao: "Ordem lógica dos dados.",
    bloco: {
      instrucao: "Reordene os blocos de dados.",
      itens: [
        { id: "1", texto: "Entrada de dados", imagemUrl: "" },
        { id: "2", texto: "Processamento", imagemUrl: "" }
      ],
      ordemCerta: ["1", "2"],
      feedbackAcerto: "Ordem confirmada.",
      feedbackErro: "Dados fora de sequência.",
      dica: "Siga a lógica do sistema.",
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
