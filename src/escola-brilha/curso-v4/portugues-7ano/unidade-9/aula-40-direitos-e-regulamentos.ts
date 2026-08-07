import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 40 — Direitos e Regulamentos: Proibição e Direito Garantido
 * -------------------------------------------------------------
 * BNCC: EF67LP15, EF67LP16
 */
export const aula40: AulaPortuguesV4 = {
  slug: "aula-40-direitos-e-regulamentos",
  titulo: "Direitos e Regulamentos",
  iconeTrilha: "📜",
  bncc: ["EF67LP15", "EF67LP16"],
  duracaoMin: 28,
  momento01_motivacao: {
    titulo: "Arquivo Restaurado: As Regras que Nos Protegem",
    historia: "Analista, o Observatório localizou um arquivo antigo cheio de regulamentos escolares e estatutos. Muita gente lê essas regras sem entender que elas fazem duas coisas ao mesmo tempo: proíbem certas ações e garantem certos direitos. Hoje você vai aprender a distinguir uma proibição imposta de um direito garantido dentro de regulamentos reais, como o Estatuto da Criança e do Adolescente e regimentos escolares. Ler regras com atenção é um superpoder cidadão.",
    imagemUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Proibição vs. Direito.",
    bloco: {
      titulo: "Decodificador de Regulamentos",
      capaImagemUrl: "",
      pistas: [
        { nome: "Regulamentos usam verbos como 'é proibido', 'é vedado' e 'fica assegurado'.", imagemUrl: "" },
        { nome: "Um mesmo artigo pode conter uma proibição e um direito ao mesmo tempo.", imagemUrl: "" }
      ],
      recado: {
        rotulo: "Chave de Leitura Jurídica",
        icone: "📜",
        linhas: [
          "  [ TIPOS DE NORMA ]         ",
          "                             ",
          "  PROIBIÇÃO                 ",
          "  > 'É proibido fumar...'   ",
          "  > 'Fica vedado o uso...'  ",
          "                             ",
          "  DIREITO GARANTIDO         ",
          "  > 'É assegurado o acesso...'",
          "  > 'Todo aluno tem direito a...'",
          "                             ",
          "  DICA: Proibição limita.   ",
          "  Direito garante e protege."
        ],
        estilo: "cartaz",
      },
      pergunta: "O que caracteriza um 'direito garantido' em um regulamento?",
      hipoteses: [
        { texto: "Uma norma que assegura algo a favor da pessoa" },
        { texto: "Uma regra que limita ou impede uma ação" },
        { texto: "Uma sugestão que pode ser ignorada sem consequência" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Decodificação correta! Direito garantido protege, proibição limita.",
      feedbackErro: "Pense na diferença entre 'não pode' e 'tem direito a'.",
      dica: "Um direito garantido está a favor da pessoa; uma proibição limita a ação dela.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Termos Normativos.",
    cards: [
      { palavra: "Regulamento", explicacao: "Conjunto de regras que organiza o funcionamento de um lugar ou instituição.", exemplo: "O regulamento da escola define horários e comportamentos esperados.", imagemUrl: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Assegurado", explicacao: "Palavra usada em leis e regulamentos para indicar que um direito está garantido.", exemplo: "Fica assegurado o direito à educação de qualidade.", imagemUrl: "" },
      { palavra: "Vedado", explicacao: "Sinônimo formal de proibido, muito usado em textos normativos.", exemplo: "É vedado o uso de celular durante as provas.", imagemUrl: "" },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Regimento.",
    leitura: {
      titulo: "Trecho do Regimento Escolar",
      imagemUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400",
      destacar: ["proibido", "assegurado", "direito", "dever"],
      paragrafos: [
        "Artigo 12: É proibido o uso de qualquer forma de violência física ou verbal dentro do ambiente escolar, incluindo brincadeiras que constranjam colegas.",
        "Artigo 13: Fica assegurado a todo estudante o direito de expressar sua opinião durante as aulas, respeitando o momento adequado e a fala do colega.",
        "Artigo 14: É dever da escola garantir espaço seguro e acessível a todos, sendo vedada qualquer forma de discriminação por raça, gênero ou condição física.",
        "Esses artigos mostram que um regulamento organiza a convivência combinando limites necessários com garantias fundamentais para todos."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "O que o Artigo 12 proíbe explicitamente?",
        opcoes: ["Violência física ou verbal na escola", "O uso de uniforme", "A entrada de visitantes", "O uso da biblioteca"],
        correta: 0,
        feedbackAcerto: "Correto. O artigo proíbe qualquer forma de violência.",
        feedbackErro: "Releia o Artigo 12 com atenção.",
        ondeEstaNoTexto: "É proibido o uso de qualquer forma de violência física ou verbal",
        dica: "Busque a palavra 'proibido' no texto.",
        reensino: "Identifique sempre o verbo que indica proibição, como 'é proibido' ou 'é vedado'.",
      },
      {
        pergunta: "Qual direito é garantido no Artigo 13?",
        opcoes: ["O direito de expressar opinião durante as aulas", "O direito de faltar às aulas", "O direito de usar celular livremente", "O direito de escolher o professor"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! O artigo assegura o direito à opinião com respeito.",
        feedbackErro: "Releia o Artigo 13 com cuidado.",
        ondeEstaNoTexto: "Fica assegurado a todo estudante o direito de expressar sua opinião",
        dica: "Busque a expressão 'fica assegurado' no texto.",
        reensino: "Direitos garantidos costumam usar verbos como 'assegurar' ou 'garantir'.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório Normativo: Lendo Artigos de Lei",
    instrucao: "Observe como pequenas palavras mudam completamente o sentido de um artigo.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "É PROIBIDO o acesso de pessoas não autorizadas ao laboratório.",
            explicacao: "💡 PROIBIÇÃO: A expressão 'é proibido' indica uma restrição clara imposta a todos.\n> Ex: 'É vedado...', 'Fica proibido...'"
          },
          {
            texto: "FICA ASSEGURADO o direito de resposta a qualquer aluno acusado.",
            explicacao: "💡 DIREITO GARANTIDO: A expressão 'fica assegurado' mostra uma proteção a favor da pessoa.\n> Ex: 'É garantido...', 'Tem direito a...'"
          },
          {
            texto: "É DEVER do responsável zelar pela frequência do estudante.",
            explicacao: "💡 DEVER: A expressão 'é dever' aponta uma obrigação, diferente de proibição e de direito.\n> Ex: 'Compete a...', 'Cabe a...'"
          }
        ]
      }
    ]
  },
  momento_escrita: {
    titulo: "Console de Normas",
    instrucao: "Redija um pequeno regulamento com proibições e direitos.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Meu Regulamento",
        comando: "Escreva 3 artigos para o regulamento de um espaço (sua sala, sua casa ou um clube), sendo pelo menos um de proibição e um de direito garantido.",
        modelo: [
          "ARTIGO 1 (PROIBIÇÃO): É proibido...",
          "ARTIGO 2 (DIREITO): Fica assegurado...",
          "ARTIGO 3 (DEVER OU DIREITO): ..."
        ],
        checklist: [
          "Usei corretamente 'é proibido' ou 'é vedado'?",
          "Usei corretamente 'fica assegurado' ou 'é garantido'?",
          "Meus artigos fazem sentido para o espaço escolhido?"
        ],
        cicloRevisao: true
      }
    ]
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Classificação: Tipo de Norma",
    bloco: {
      instrucao: "Organize o processo de análise de um artigo de regulamento, do texto à classificação final.",
      itens: [
        { id: "1", texto: "📖 LER o artigo completo com atenção.", imagemUrl: "" },
        { id: "2", texto: "🔍 LOCALIZAR o verbo-chave (proibido, assegurado, dever).", imagemUrl: "" },
        { id: "3", texto: "⚖️ CLASSIFICAR como proibição, direito ou dever.", imagemUrl: "" },
        { id: "4", texto: "✅ VERIFICAR quem é beneficiado ou limitado pela norma.", imagemUrl: "" }
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Classificação concluída com sucesso! Você domina a leitura de regulamentos.",
      feedbackErro: "É preciso ler (1) e achar o verbo-chave (2) antes de classificar (3).",
      dica: "Você não pode classificar uma norma sem antes identificar o verbo que ela usa.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Estatuto da Criança e do Adolescente.",
    leitura: {
      titulo: "Trecho Adaptado do ECA",
      imagemUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400",
      destacar: ["direito", "assegurado", "proibido"],
      paragrafos: [
        "É assegurado a toda criança e adolescente o direito à educação, à saúde, ao lazer e à convivência familiar e comunitária.",
        "É proibido qualquer tipo de trabalho a menores de 14 anos, salvo na condição de aprendiz, conforme prevê a lei.",
        "Essas garantias existem para proteger o desenvolvimento saudável de crianças e adolescentes em todo o país."
      ],
    },
    perguntas: [
      {
        pergunta: "O que o trecho do ECA garante às crianças e adolescentes?",
        opcoes: ["Direito à educação, saúde, lazer e convivência familiar", "Direito de trabalhar em qualquer idade", "Direito de faltar à escola sem motivo", "Direito de dirigir veículos"],
        correta: 0,
        feedbackAcerto: "Correto! O ECA assegura direitos fundamentais.",
        feedbackErro: "Releia o primeiro parágrafo do trecho.",
        dica: "Busque a palavra 'assegurado' no texto.",
        reensino: "O ECA existe para proteger direitos essenciais de crianças e adolescentes."
      }
    ],
  },
  momento09_revisao: {
    pontos: [
      "Proibição limita uma ação; direito garantido assegura algo em favor da pessoa.",
      "Verbos-chave ajudam a identificar o tipo de norma: 'é proibido/vedado' e 'fica assegurado/garantido'.",
      "Regulamentos e estatutos combinam proibições, direitos e deveres para organizar a convivência."
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual expressão indica uma proibição em um regulamento?",
        opcoes: ["É vedado", "Fica assegurado", "É garantido", "Tem direito a"],
        correta: 0,
        feedbackAcerto: "Correto! 'É vedado' é sinônimo de proibido.",
        feedbackErro: "Pense na palavra que limita uma ação.",
        ondeEstaNoTexto: "É vedado o uso de celular durante as provas.",
        dica: "Releia o card de vocabulário sobre a palavra 'vedado'.",
        reensino: "Revise o Momento 03 sobre os termos normativos.",
      },
      {
        pergunta: "Qual expressão indica um direito garantido?",
        opcoes: ["Fica assegurado", "É proibido", "É vedado", "Fica interditado"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! 'Fica assegurado' garante um direito.",
        feedbackErro: "Pense na expressão usada no Artigo 13 do regimento.",
        ondeEstaNoTexto: "Fica assegurado a todo estudante o direito de expressar sua opinião",
        dica: "Releia o Momento 04 sobre o regimento escolar.",
        reensino: "Revise o laboratório normativo sobre proibição, direito e dever.",
      },
      {
        pergunta: "Por que os regulamentos combinam proibições e direitos?",
        opcoes: ["Para organizar a convivência protegendo e limitando ações ao mesmo tempo", "Para confundir quem lê o documento", "Porque é obrigatório por tradição, sem função real", "Para tornar o texto mais longo"],
        correta: 0,
        feedbackAcerto: "Exato! Regras equilibram limites e garantias para todos.",
        feedbackErro: "Pense no papel de um regulamento em uma escola.",
        ondeEstaNoTexto: "combinando limites necessários com garantias fundamentais para todos.",
        dica: "Releia o último parágrafo do Momento 04.",
        reensino: "Revise a leitura guiada sobre o regimento escolar.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Regulamento Doméstico",
    materiais: ["Papel e caneta", "Regulamento da escola ou de algum condomínio, se houver"],
    passos: [
      "Se possível, encontre em casa um regulamento real (escola, condomínio, clube).",
      "Localize, com sua família, ao menos um trecho de proibição e um de direito garantido.",
      "Discutam por que essas normas existem e a quem elas protegem.",
      "Registrem os dois trechos encontrados no caderno."
    ],
    registro: "Escreva no caderno: 'Missão Regulamento - Encontrei a proibição [X] e o direito [Y]'.",
  },
  recompensa: {
    xp: 150,
    moedas: 75,
  },
};
