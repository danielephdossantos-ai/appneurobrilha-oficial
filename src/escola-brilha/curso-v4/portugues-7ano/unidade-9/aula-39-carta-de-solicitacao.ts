import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 39 — Carta de Solicitação e de Reclamação
 * -------------------------------------------------------------
 * BNCC: EF67LP17, EF67LP18
 */
export const aula39: AulaPortuguesV4 = {
  slug: "aula-39-carta-de-solicitacao",
  titulo: "Carta de Solicitação e Reclamação",
  iconeTrilha: "✉️",
  bncc: ["EF67LP17", "EF67LP18"],
  duracaoMin: 30,
  momento01_motivacao: {
    titulo: "Protocolo Aberto: A Voz que Exige Resposta",
    historia: "Analista, o Observatório recebeu um alerta: muitos problemas da comunidade nunca chegam às autoridades porque ninguém formaliza um pedido. Hoje você vai aprender a redigir cartas de solicitação e de reclamação, os canais oficiais para pedir algo ou apontar uma falha a uma instituição. Não é um desabafo qualquer: é um documento com estrutura, educação e argumento. Prepare-se para transformar sua indignação em ação escrita.",
    imagemUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Anatomia da Carta Formal.",
    bloco: {
      titulo: "Protocolo de Requisição",
      capaImagemUrl: "",
      pistas: [
        { nome: "Toda carta formal tem destinatário, data, corpo do texto e assinatura.", imagemUrl: "" },
        { nome: "A linguagem é sempre respeitosa, mesmo em uma reclamação.", imagemUrl: "" }
      ],
      recado: {
        rotulo: "Modelo de Carta Oficial",
        icone: "✉️",
        linhas: [
          "  [ ESTRUTURA DA CARTA ]     ",
          "                             ",
          "  1. LOCAL E DATA           ",
          "  2. DESTINATÁRIO           ",
          "     > 'À Secretaria de...' ",
          "          ↓                 ",
          "  3. CORPO DO TEXTO         ",
          "     > Pedido ou problema   ",
          "     > + justificativa      ",
          "          ↓                 ",
          "  4. DESPEDIDA E ASSINATURA ",
          "     > 'Atenciosamente,'    "
        ],
        estilo: "cartaz",
      },
      pergunta: "Qual é a principal diferença entre uma carta de solicitação e uma de reclamação?",
      hipoteses: [
        { texto: "A solicitação pede algo novo; a reclamação aponta um problema já existente" },
        { texto: "Não existe diferença nenhuma entre as duas" },
        { texto: "A reclamação é sempre informal e sem estrutura" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Protocolo compreendido. Pedir e reclamar exigem a mesma educação, mas objetivos diferentes.",
      feedbackErro: "Pense no motivo de cada carta: uma pede, a outra denuncia uma falha.",
      dica: "Solicitar é pedir algo; reclamar é apontar o que já deu errado.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Termos Oficiais.",
    cards: [
      { palavra: "Destinatário", explicacao: "A pessoa ou instituição para quem a carta é enviada.", exemplo: "O destinatário da carta era o diretor da escola.", imagemUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Formalidade", explicacao: "Conjunto de regras de educação e estrutura usadas em textos oficiais.", exemplo: "A formalidade da carta mostrava respeito pelo leitor.", imagemUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Justificativa", explicacao: "A explicação que sustenta um pedido ou uma reclamação.", exemplo: "Ele apresentou uma justificativa clara para o conserto da rua.", imagemUrl: "" },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Documento Oficial.",
    leitura: {
      titulo: "Carta ao Secretário de Transportes",
      imagemUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&q=80&w=400",
      destacar: ["solicito", "atenciosamente", "prejudica", "moradores"],
      paragrafos: [
        "Prezado Secretário de Transportes, escrevo para relatar um problema que prejudica os moradores do bairro Jardim das Flores: a ausência de um ponto de ônibus coberto na Rua das Acácias.",
        "Nos dias de chuva, dezenas de estudantes e trabalhadores esperam o transporte sem qualquer proteção, o que causa atrasos e riscos à saúde. Por isso, solicito a instalação de um abrigo simples no local.",
        "Acredito que essa melhoria, de baixo custo para a prefeitura, trará grande benefício para toda a comunidade que depende do transporte público diariamente.",
        "Atenciosamente, Comunidade do Jardim das Flores."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "Qual é o pedido central feito na carta?",
        opcoes: ["A instalação de um abrigo no ponto de ônibus", "A troca do secretário de transportes", "A construção de uma nova rua", "O aumento do valor da passagem"],
        correta: 0,
        feedbackAcerto: "Registro correto. O pedido é claro e objetivo.",
        feedbackErro: "Releia o segundo parágrafo com atenção.",
        ondeEstaNoTexto: "solicito a instalação de um abrigo simples no local.",
        dica: "Busque o verbo 'solicito' no texto.",
        reensino: "Toda carta de solicitação apresenta um pedido específico e justificado.",
      },
      {
        pergunta: "Qual argumento sustenta o pedido feito na carta?",
        opcoes: ["O risco à saúde dos moradores em dias de chuva", "A vontade pessoal do secretário", "A beleza da rua", "O preço alto dos ônibus"],
        correta: 0,
        feedbackAcerto: "Correto. A justificativa liga o pedido a um problema real.",
        feedbackErro: "Observe o primeiro parágrafo, onde o problema é descrito.",
        ondeEstaNoTexto: "causa atrasos e riscos à saúde.",
        dica: "O que acontece com quem espera o ônibus na chuva?",
        reensino: "Um bom pedido sempre vem acompanhado de uma razão concreta.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Formalidade: Tom da Carta",
    instrucao: "Compare como o mesmo problema pode ser dito de forma educada e eficaz, ou de forma agressiva e ineficaz.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "Vocês são incompetentes e nunca resolvem nada!",
            explicacao: "💡 TOM INADEQUADO: Ataques pessoais enfraquecem o pedido e podem fazer a carta ser ignorada.\n> Evite: 'Isso é um absurdo!' e 'Vocês não fazem nada direito.'"
          },
          {
            texto: "Solicito, respeitosamente, uma solução para o problema relatado.",
            explicacao: "💡 TOM ADEQUADO: Pedido claro, educado e direto ao ponto, sem perder a força.\n> Ex: 'Peço a gentileza de...' e 'Solicito que seja avaliado...'"
          },
          {
            texto: "Desde já, agradeço a atenção dedicada a esta solicitação.",
            explicacao: "💡 FECHAMENTO CORTÊS: Encerrar com cordialidade aumenta as chances de resposta positiva.\n> Ex: 'Agradeço a atenção.' e 'Fico à disposição para esclarecimentos.'"
          }
        ]
      }
    ]
  },
  momento_escrita: {
    titulo: "Console de Redação Oficial",
    instrucao: "Escreva sua própria carta de solicitação ou reclamação.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Carta à Instituição",
        comando: "Escreva uma carta de solicitação ou reclamação sobre um problema real da sua escola ou bairro.",
        modelo: [
          "DESTINATÁRIO: A quem você escreve?",
          "PROBLEMA/PEDIDO: O que você quer resolver ou solicitar?",
          "JUSTIFICATIVA: Por que isso é importante?",
          "DESPEDIDA: Encerre com cordialidade."
        ],
        checklist: [
          "Identifiquei claramente o destinatário?",
          "Expliquei o problema ou pedido com objetividade?",
          "Usei linguagem respeitosa do início ao fim?",
          "Terminei com uma despedida formal?"
        ],
        cicloRevisao: true
      }
    ]
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Protocolo: Montagem da Carta",
    bloco: {
      instrucao: "Organize as partes de uma carta formal na ordem correta.",
      itens: [
        { id: "1", texto: "📅 LOCAL E DATA: Onde e quando a carta foi escrita.", imagemUrl: "" },
        { id: "2", texto: "📮 SAUDAÇÃO AO DESTINATÁRIO: 'Prezado(a)...'", imagemUrl: "" },
        { id: "3", texto: "📝 CORPO DO TEXTO: Apresentação do pedido ou reclamação com justificativa.", imagemUrl: "" },
        { id: "4", texto: "✍️ DESPEDIDA E ASSINATURA: 'Atenciosamente,' seguido do nome.", imagemUrl: "" }
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Protocolo montado corretamente! Sua carta está pronta para ser enviada.",
      feedbackErro: "A saudação (2) vem antes do corpo do texto (3), que só faz sentido depois de identificar o destinatário.",
      dica: "Pense em como você organiza uma mensagem: primeiro identifica quem escreve e para quem, depois o conteúdo.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Reclamação Formal.",
    leitura: {
      titulo: "Carta de Reclamação sobre a Coleta de Lixo",
      imagemUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=400",
      destacar: ["reclamo", "irregular", "solução"],
      paragrafos: [
        "Prezada Diretoria de Limpeza Urbana, venho por meio desta reclamar sobre a coleta de lixo irregular na Rua dos Ipês, que não ocorre há duas semanas.",
        "O acúmulo de resíduos tem atraído insetos e causado mau cheiro, prejudicando a saúde dos moradores. Peço providências urgentes para normalizar o serviço.",
        "Fico à disposição para mais informações e agradeço a atenção."
      ],
    },
    perguntas: [
      {
        pergunta: "Qual problema é relatado na carta?",
        opcoes: ["A irregularidade na coleta de lixo", "A falta de água na rua", "O barulho excessivo no bairro", "A falta de iluminação pública"],
        correta: 0,
        feedbackAcerto: "Correto! A reclamação é sobre a coleta de lixo.",
        feedbackErro: "Releia o primeiro parágrafo da carta.",
        dica: "Busque a palavra 'reclamar' no texto.",
        reensino: "Cartas de reclamação sempre apontam um serviço ou situação que não está funcionando como deveria."
      }
    ],
  },
  momento09_revisao: {
    pontos: [
      "Carta de solicitação pede algo; carta de reclamação aponta um problema já existente.",
      "Toda carta formal segue estrutura: local/data, destinatário, corpo com justificativa e despedida.",
      "O tom respeitoso é essencial, mesmo quando o assunto é uma falha grave."
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que não pode faltar em uma carta de solicitação?",
        opcoes: ["Um pedido claro e uma justificativa", "Ofensas ao destinatário", "Gírias e abreviações", "Emojis coloridos"],
        correta: 0,
        feedbackAcerto: "Correto! Pedido e justificativa são essenciais.",
        feedbackErro: "Pense no que torna um pedido convincente e educado.",
        ondeEstaNoTexto: "3. CORPO DO TEXTO > Pedido ou problema + justificativa",
        dica: "Releia o briefing sobre a estrutura da carta.",
        reensino: "Revise o Momento 02 sobre a anatomia da carta formal.",
      },
      {
        pergunta: "Qual é a função de uma carta de reclamação?",
        opcoes: ["Relatar um problema e pedir providências", "Elogiar um serviço público", "Convidar alguém para um evento", "Vender um produto"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! A reclamação relata falhas e pede solução.",
        feedbackErro: "Pense no exemplo da coleta de lixo.",
        ondeEstaNoTexto: "reclamar sobre a coleta de lixo irregular",
        dica: "O que a comunidade quer que a instituição faça?",
        reensino: "Reveja o Momento 08 sobre a carta de reclamação da coleta de lixo.",
      },
      {
        pergunta: "Por que o tom respeitoso é importante em uma carta formal?",
        opcoes: ["Aumenta as chances de a mensagem ser levada a sério", "Torna a carta mais longa", "Não tem nenhuma importância", "Serve apenas para preencher espaço"],
        correta: 0,
        feedbackAcerto: "Exato! Educação fortalece o pedido, não o enfraquece.",
        feedbackErro: "Pense em qual carta tem mais chance de ser respondida.",
        ondeEstaNoTexto: "Solicito, respeitosamente, uma solução para o problema relatado.",
        dica: "Compare o tom inadequado e o tom adequado do laboratório.",
        reensino: "Revise o Laboratório de Formalidade sobre tom da carta.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Carta Real",
    materiais: ["Papel ou computador", "Um problema real observado em casa ou no bairro"],
    passos: [
      "Escolha, com sua família, um problema real do bairro ou da escola.",
      "Descubra qual instituição é responsável por resolver esse problema.",
      "Redijam juntos uma carta de solicitação ou reclamação seguindo a estrutura aprendida.",
      "Se possível, enviem a carta de verdade e registrem a experiência."
    ],
    registro: "Escreva no caderno: 'Missão Carta - O problema foi [X] e enviamos a carta para [Y]'.",
  },
  recompensa: {
    xp: 150,
    moedas: 75,
  },
};
