import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 26 — Prefixos e Sufixos: A Forja de Palavras
 * -------------------------------------------------------------
 * Formação de palavras por prefixação e sufixação.
 *
 * BNCC: EF07LP03
 */
export const aula26: AulaPortuguesV4 = {
  slug: "aula-26-prefixos-e-sufixos",
  titulo: "Prefixos e Sufixos",
  iconeTrilha: "🧬",
  bncc: ["EF07LP03"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "A Forja de Palavras",
    historia: "Analista, toda palavra do Observatório pode ser desmontada em peças menores. Assim como um robô é montado com módulos, uma palavra pode ganhar pedaços no início (prefixo) e no fim (sufixo) que mudam completamente seu significado. Hoje você vai aprender a operar a Forja: o laboratório onde 'feliz' vira 'infeliz' e 'felicidade' com apenas um encaixe de peça.",
    imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Módulos de Significado.",
    bloco: {
      titulo: "Sistema de Encaixe Lexical",
      capaImagemUrl: "",
      pistas: [
        { nome: "Prefixos ficam ANTES da palavra base.", imagemUrl: "" },
        { nome: "Sufixos ficam DEPOIS da palavra base.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel de Formação",
        icone: "🧬",
        linhas: [
          "  [ MONTAGEM DE PALAVRAS ]     ",
          "                               ",
          "  PREFIXO + BASE               ",
          "  > DES + FAZER = DESFAZER     ",
          "         (o contrário de fazer)",
          "                               ",
          "  BASE + SUFIXO                ",
          "  > FELIZ + MENTE = FELIZMENTE ",
          "         (de modo feliz)       ",
        ],
        estilo: "cartaz",
      },
      pergunta: "O que acontece com o significado de uma palavra quando adicionamos um prefixo ou sufixo?",
      hipoteses: [
        { texto: "O significado se transforma conforme a peça encaixada" },
        { texto: "A palavra fica exatamente igual, sem nenhuma mudança" },
        { texto: "A palavra perde totalmente o sentido e vira erro de escrita" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Encaixe confirmado. Prefixos e sufixos mudam o sentido da palavra base.",
      feedbackErro: "Observe os exemplos: DESFAZER não é o mesmo que FAZER.",
      dica: "Pense em 'feliz' e 'infeliz' — são a mesma coisa?",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Peças da Forja.",
    cards: [
      { palavra: "Prefixo", explicacao: "Partícula colocada ANTES da palavra base, que altera seu sentido.", exemplo: "RE + FAZER = REFAZER (fazer de novo).", imagemUrl: "https://images.unsplash.com/photo-1554224155-1696413575a8?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Sufixo", explicacao: "Partícula colocada DEPOIS da palavra base, que forma uma nova palavra.", exemplo: "JORNAL + EIRO = JORNALEIRO (quem trabalha com jornal).", imagemUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Radical", explicacao: "É a parte principal da palavra, que carrega o significado básico, sem os afixos.", exemplo: "Em 'infelizmente', o radical é 'feliz'.", imagemUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Formação: Antes e Depois",
    instrucao: "Veja como prefixos e sufixos transformam palavras base em novos sentidos.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "IN + FELIZ = INFELIZ.",
            explicacao: "💡 PREFIXO DE NEGAÇÃO: 'in' inverte o sentido da palavra base.\n> Ex: 'certo/incerto' e 'capaz/incapaz'.",
          },
          {
            texto: "DES + LIGAR = DESLIGAR.",
            explicacao: "💡 PREFIXO DE AÇÃO CONTRÁRIA: 'des' indica o oposto da ação.\n> Ex: 'fazer/desfazer' e 'montar/desmontar'.",
          },
          {
            texto: "GENTIL + EZA = GENTILEZA.",
            explicacao: "💡 SUFIXO FORMADOR DE SUBSTANTIVO: 'eza' transforma um adjetivo em substantivo abstrato.\n> Ex: 'belo/beleza' e 'triste/tristeza'.",
          },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "As Peças Escondidas nas Palavras",
      imagemUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
      destacar: ["prefixo", "sufixo", "radical", "significado"],
      paragrafos: [
        "No Observatório, cada palavra é um sistema montável. Quando um Analista encontra um termo desconhecido, ele pode desmontá-lo em radical, prefixo e sufixo para descobrir o significado sem precisar de dicionário.",
        "O prefixo entra antes do radical e costuma indicar negação, repetição ou direção: 'refazer' (repetir), 'desligar' (ação contrária), 'antebraço' (posição). Já o sufixo entra depois do radical e frequentemente muda a classe gramatical da palavra: 'feliz' (adjetivo) vira 'felicidade' (substantivo).",
        "Dominar esse sistema é uma vantagem estratégica: ao ver 'impossível', o Analista já sabe que 'im' nega 'possível'. Ao ver 'lentamente', percebe que 'mente' transforma o adjetivo 'lento' em advérbio de modo.",
        "Assim, entender a formação das palavras não é decorar regras soltas — é reconhecer um padrão que se repete em milhares de termos da língua portuguesa."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "Segundo o texto, o que geralmente indica um PREFIXO?",
        opcoes: ["Negação, repetição ou direção", "Sempre um plural", "Apenas cor", "Nada, é decorativo"],
        correta: 0,
        feedbackAcerto: "Correto! Prefixos costumam indicar negação, repetição ou direção.",
        feedbackErro: "Releia o segundo parágrafo com atenção aos exemplos.",
        ondeEstaNoTexto: "O prefixo entra antes do radical e costuma indicar negação, repetição ou direção",
        dica: "Pense nos exemplos 'refazer', 'desligar' e 'antebraço'.",
        reensino: "Revise os exemplos de prefixos no Laboratório de Formação.",
      },
      {
        pergunta: "O que geralmente acontece quando adicionamos um SUFIXO como '-mente' a um adjetivo?",
        opcoes: ["Ele vira advérbio de modo", "Ele desaparece", "Ele vira número", "Ele fica mudo"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! '-mente' transforma adjetivos em advérbios de modo.",
        feedbackErro: "Busque o exemplo de 'lento' e 'lentamente' no texto.",
        ondeEstaNoTexto: "percebe que 'mente' transforma o adjetivo 'lento' em advérbio de modo",
        dica: "Compare 'lento' com 'lentamente'.",
        reensino: "Reveja o card de vocabulário sobre sufixos.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_escrita: {
    titulo: "Console de Formação de Palavras",
    instrucao: "Crie novas palavras usando prefixos e sufixos.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Oficina da Forja",
        comando: "Escolha três palavras base (ex: feliz, ligar, possível) e crie novas palavras adicionando prefixos e sufixos. Explique o novo significado de cada uma.",
        modelo: [
          "Base: FELIZ",
          "Com prefixo: INFELIZ (o contrário de feliz)",
          "Com sufixo: FELICIDADE (o estado de ser feliz)",
        ],
        checklist: [
          "Usei ao menos um prefixo?",
          "Usei ao menos um sufixo?",
          "Expliquei o novo significado de cada palavra criada?",
        ],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Montagem de Palavras",
    bloco: {
      instrucao: "Organize o processo de análise de uma palavra formada por afixos.",
      itens: [
        { id: "1", texto: "🔎 IDENTIFICAR O RADICAL: Encontre a parte central com o significado base.", imagemUrl: "" },
        { id: "2", texto: "🧩 PROCURAR O PREFIXO: Verifique se há uma peça antes do radical.", imagemUrl: "" },
        { id: "3", texto: "🧩 PROCURAR O SUFIXO: Verifique se há uma peça depois do radical.", imagemUrl: "" },
        { id: "4", texto: "✅ CONCLUIR O SIGNIFICADO: Junte as informações e defina o sentido final.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Montagem perfeita! Você domina o sistema de formação de palavras.",
      feedbackErro: "A ordem falhou. Primeiro ache o radical, depois procure as peças ao redor.",
      dica: "Sem o radical, não há como saber onde começa o prefixo ou o sufixo.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Relatório de Campo.",
    leitura: {
      titulo: "Relatório: Palavras em Expansão",
      imagemUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400",
      destacar: ["desumano", "gentileza", "reconstrução"],
      paragrafos: [
        "O termo 'desumano' usa o prefixo 'des' para indicar ausência da qualidade humana esperada, como empatia ou compaixão.",
        "Já 'gentileza' surge do adjetivo 'gentil' somado ao sufixo '-eza', formando um substantivo que nomeia a qualidade de ser gentil.",
        "'Reconstrução' combina o prefixo 're' (repetição) com o radical 'constru' e o sufixo 'ção' (formador de substantivo de ação), mostrando que uma única palavra pode ter as duas peças ao mesmo tempo."
      ],
    },
    perguntas: [
      {
        pergunta: "Na palavra 'reconstrução', qual prefixo indica repetição?",
        opcoes: ["re", "ção", "cons", "trução"],
        correta: 0,
        feedbackAcerto: "Exato! 'Re' indica que a ação de construir aconteceu novamente.",
        feedbackErro: "Observe a primeira sílaba da palavra 'reconstrução'.",
        dica: "Compare com 'refazer' e 'reler'.",
        reensino: "Revise os exemplos de prefixos de repetição no texto.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "Prefixos ficam antes do radical e podem indicar negação, repetição ou direção.",
      "Sufixos ficam depois do radical e podem mudar a classe gramatical da palavra.",
      "Uma mesma palavra pode ter prefixo e sufixo ao mesmo tempo, como em 'reconstrução'.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que é um prefixo?",
        opcoes: ["Partícula antes do radical que muda o sentido", "Uma palavra completa isolada", "Um sinal de pontuação", "Um tipo de verbo"],
        correta: 0,
        feedbackAcerto: "Correto! O prefixo vem antes do radical.",
        feedbackErro: "Revise a definição no Dicionário do Observatório.",
        ondeEstaNoTexto: "O prefixo entra antes do radical",
        dica: "Pense em 'des' em 'desfazer'.",
        reensino: "Reveja o momento 03 sobre prefixo e sufixo.",
      },
      {
        pergunta: "Qual palavra é formada por um sufixo que indica 'qualidade de'?",
        opcoes: ["Tristeza", "Desfazer", "Antebraço", "Recomeçar"],
        correta: 0,
        feedbackAcerto: "Isso! '-eza' forma substantivos de qualidade, como em 'tristeza'.",
        feedbackErro: "Observe qual palavra tem uma peça depois do radical, não antes.",
        ondeEstaNoTexto: "GENTIL + EZA = GENTILEZA",
        dica: "As outras opções têm prefixos, não sufixos.",
        reensino: "Revise o Laboratório de Formação: Antes e Depois.",
      },
      {
        pergunta: "Na palavra 'infelizmente', quantas peças de afixo podemos identificar?",
        opcoes: ["Duas (prefixo e sufixo)", "Nenhuma", "Apenas um sufixo", "Apenas um prefixo"],
        correta: 0,
        feedbackAcerto: "Perfeito! 'In' é prefixo e 'mente' é sufixo, ao redor do radical 'feliz'.",
        feedbackErro: "Separe a palavra em três partes: in + feliz + mente.",
        ondeEstaNoTexto: "Em 'infelizmente', o radical é 'feliz'",
        dica: "Lembre-se do exemplo do card de vocabulário sobre radical.",
        reensino: "Revise o card 'Radical' no momento 03.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Forja de Palavras",
    materiais: ["Papel", "Caneta", "Um dicionário ou o celular da família"],
    passos: [
      "Escolha três palavras do dia a dia em casa (ex: 'limpo', 'organizar', 'feliz').",
      "Adicione um prefixo a cada uma e diga o novo significado em voz alta.",
      "Adicione um sufixo a cada uma e diga o novo significado em voz alta.",
      "Peça para um familiar tentar adivinhar o significado antes de você explicar."
    ],
    registro: "Escreva no caderno: 'Missão Forja - Minhas palavras criadas foram [X, Y, Z]'.",
  },
  recompensa: {
    xp: 150,
    moedas: 75,
  },
};
