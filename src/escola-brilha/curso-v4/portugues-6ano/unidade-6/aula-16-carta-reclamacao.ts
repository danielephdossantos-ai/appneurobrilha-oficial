import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 16 — Carta de Reclamação: O Protocolo do Cidadão
 * BNCC: EF67LP15
 */
export const aula16: AulaPortuguesV4 = {
  slug: "aula-16-carta-reclamacao",
  titulo: "Carta de Reclamação",
  iconeTrilha: "✉️",
  bncc: ["EF67LP18"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Ação de Reparo: A Reclamação Formal",
    historia: "Analista, quando o sistema falha e você é o prejudicado, você precisa agir. Mas reclamar no vácuo não resolve. A CARTA DE RECLAMAÇÃO é o protocolo oficial para exigir reparos. Ela não usa ofensas; ela usa fatos, leis e argumentos para forçar uma solução. Hoje vamos aprender a escrever como um cidadão que conhece seus direitos e sabe usar a língua como ferramenta de justiça.",
    imagemUrl: "https://images.unsplash.com/photo-1596526132837-77085a666986?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing de Reclamação: Como ser ouvido?",
    bloco: {
      titulo: "Análise de Documento",
      capaImagemUrl: "",
      pistas: [
        { nome: "Local e Data: Identifica quando e onde o problema ocorreu.", imagemUrl: "" },
        { nome: "Pedido de Solução: O que você quer que seja feito?", imagemUrl: "" }
      ],
      recado: {
        rotulo: "Estrutura de Reparo",
        icone: "✉️",
        linhas: [
          "  [ CARTA DE RECLAMAÇÃO ]  ",
          "                           ",
          "  1. O FATO (O Problema)   ",
          "  > 'O tênis rasgou em 1 dia' ",
          "          ↓                ",
          "  2. A PROVA (Cupom/Foto)  ",
          "  > 'Nota fiscal em anexo' ",
          "          ↓                ",
          "  3. O PEDIDO (Solução)    ",
          "  > 'Quero meu dinheiro de ",
          "    volta ou troca.'       ",
          "                           ",
          "  DICA: Educação gera mais ",
          "  resultados que raiva.    "
        ],
        estilo: "cartaz",
      },
      pergunta: "Qual o tom ideal para uma carta de reclamação?",
      hipoteses: [
        { texto: "Formal, direto e educado" },
        { texto: "Gritar e usar muitas ofensas" },
        { texto: "Escrever uma poesia sobre a tristeza" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Precisão absoluta. A formalidade obriga a outra parte a te responder seriamente.",
      feedbackErro: "Ofensas podem fazer você perder o direito de ser atendido.",
      dica: "Pense na eficácia.",
    },
  },
  momento03_vocabulario: {
    cards: [
      { palavra: "Reclamação", explicacao: "Ato de manifestar insatisfação sobre um produto ou serviço de forma oficial.", exemplo: "Enviei uma reclamação para a operadora de internet.", imagemUrl: "" },
      { palavra: "Solicitação", explicacao: "O que você pede que seja feito para resolver o problema.", exemplo: "Minha solicitação é o conserto do aparelho.", imagemUrl: "" },
    ],
    instrucao: "Dicionário de Ativos",
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de arquivo.",
    leitura: {
      titulo: "Como Escrever uma Reclamação que Funciona",
      imagemUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
      destacar: ["clareza", "evidência", "prazo"],
      paragrafos: [
        "Uma carta de reclamação deve ser clara. Não adianta dar voltas; você precisa dizer exatamente o que comprou, quando comprou e qual o defeito apareceu.",
        "Apresentar evidências é fundamental. Se você tem uma nota fiscal, um código de protocolo ou uma foto do produto quebrado, mencione isso no texto.",
        "Finalize dando um prazo razoável para a resposta e despeça-se formalmente. Isso mostra que você é um consumidor consciente e organizado."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de dados.",
    perguntas: [
      {
        pergunta: "Por que mencionar a nota fiscal em uma carta de reclamação?",
        opcoes: ["Para provar que você realmente comprou o produto", "Para decorar a carta com números", "Porque é obrigatório escrever o preço"],
        correta: 0,
        feedbackAcerto: "Correto. É a sua prova de transação no sistema.",
        feedbackErro: "Sem prova, a empresa pode dizer que você nunca esteve lá.",
        ondeEstaNoTexto: "Apresentar evidências é fundamental... mencione isso no texto.",
        dica: "É a prova.",
        reensino: "Documentos e registros são os 'logs' que validam a sua reclamação.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Redação",
    bloco: {
      instrucao: "Ordene as partes da carta de reclamação.",
      itens: [
        { id: "1", texto: "Local e Data.", imagemUrl: "" },
        { id: "2", texto: "Identificação do Destinatário (Empresa).", imagemUrl: "" },
        { id: "3", texto: "Exposição do Problema (O Fato).", imagemUrl: "" },
        { id: "4", texto: "Pedido de Solução e Despedida.", imagemUrl: "" }
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Protocolo de cidadania validado!",
      feedbackErro: "Comece sempre situando no tempo e espaço (Local e Data).",
      dica: "Data vem no topo.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma.",
    leitura: {
      titulo: "Carta: O Console que Não Liga",
      imagemUrl: "",
      destacar: ["prezados", "garantia", "solução"],
      paragrafos: [
        "Prezados, comprei um videogame na loja de vocês no dia 10/05. O aparelho parou de ligar ontem.",
        "O produto ainda está na garantia de 1 ano. Tenho a nota fiscal comigo.",
        "Solicito a troca do aparelho ou o conserto imediato. Aguardo retorno."
      ],
    },
    perguntas: [
      {
        pergunta: "Qual o pedido final do autor da carta?",
        opcoes: ["Troca ou conserto do aparelho", "Um jogo novo de brinde", "O fechamento da loja"],
        correta: 0,
        feedbackAcerto: "Exato! Pedido claro e direto.",
        feedbackErro: "Leia a última frase.",
        dica: "É a solicitação.",
        reensino: "A solução solicitada deve ser proporcional ao problema apresentado."
      }
    ],
  },
  momento09_revisao: {
    pontos: [
      "Carta de reclamação é um gênero formal e utilitário.",
      "Deve conter: Fatos, Provas e Pedido de Solução.",
      "O tom deve ser firme, mas educado e objetivo."
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que caracteriza a 'identificação do destinatário'?",
        opcoes: ["Nome da empresa ou pessoa para quem você escreve", "Sua própria assinatura", "A data da carta"],
        correta: 0,
        feedbackAcerto: "Correto. É o 'para' do sistema.",
        feedbackErro: "Destinatário é quem recebe.",
        ondeEstaNoTexto: "Identificação do Destinatário (Empresa).",
        dica: "Quem recebe?",
        reensino: "Saber para quem reclamar é o primeiro passo para o sucesso.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Defensor do Consumidor",
    materiais: ["Papel ou Computador"],
    passos: [
      "Pense em algo que quebrou ou não funcionou bem na sua casa recentemente.",
      "Escreva uma carta de reclamação (de mentira) para a empresa fabricante.",
      "Lembre-se de colocar Local, Data, o Fato e o que você quer que eles façam."
    ],
    registro: "Tire uma foto da sua carta de reclamação estruturada.",
  },
  recompensa: {
    xp: 900,
    moedas: 600,
  },
};
