import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 1 — Scan de Argumentos: O Radar
 * -------------------------------------------------------------
 * Introdução ao 7º ano. Foco em reconhecer a intenção persuasiva.
 *
 * BNCC: EF67LP05, EF67LP07
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-scan-de-argumentos",
  titulo: "Scan de Argumentos",
  iconeTrilha: "📡",
  bncc: ["EF67LP05", "EF67LP07"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Upgrade de Sistema: O Radar Ativado",
    historia: "Bem-vindo ao 7º nível, Analista. O Labirinto ficou para trás, agora estamos no Observatório. Aqui, a informação não apenas circula; ela tenta CONVENCER. Cada frase que você intercepta carrega uma carga de intenção. Hoje, vamos calibrar seu Radar de Argumentos. Se você não souber o que o autor quer de você, você vira apenas um receptor passivo. Vamos mudar isso agora.",
    imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: A Lógica da Persuasão.",
    bloco: {
      titulo: "Interceptação de Discurso",
      capaImagemUrl: "",
      pistas: [
        { nome: "Todo argumento possui um ponto de vista central.", imagemUrl: "" },
        { nome: "Dados e fatos são usados como base para sustentar opiniões.", imagemUrl: "" }
      ],
      recado: {
        rotulo: "Radar de Intenção",
        icone: "📡",
        linhas: [
          "  [ ESTRUTURA ARGUMENTATIVA ]",
          "                             ",
          "  1. TESE (O que eu defendo?)",
          "     > Ex: 'Estudar é vital' ",
          "          ↓                  ",
          "  2. ARGUMENTO (Por que?)    ",
          "     > Ex: 'Desenvolve o cérebro'",
          "          ↓                  ",
          "  3. EVIDÊNCIA (Prova?)      ",
          "     > Ex: Pesquisas da Ciência ",
          "          ↓                  ",
          "  4. CONCLUSÃO (Reforço)     ",
          "     > Ex: 'Logo, estude mais' "
        ],
        estilo: "cartaz",
      },
      pergunta: "Qual é o objetivo principal de um argumento no sistema de comunicação?",
      hipoteses: [
        { texto: "Convencer ou influenciar o receptor" },
        { texto: "Apenas ocupar espaço no banco de dados" },
        { texto: "Esconder a verdade do analista" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Radar calibrado. Você entendeu que argumentar é uma ação estratégica.",
      feedbackErro: "Analise a 'TESE' e o 'ARGUMENTO' no briefing.",
      dica: "Pense no que alguém ganha ao provar um ponto.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Ativos Críticos.",
    cards: [
      { palavra: "Argumento", explicacao: "É a razão que usamos para provar uma ideia ou convencer alguém. É o 'porquê' da nossa opinião.", exemplo: "O argumento da eficiência convenceu a diretoria a adotar o novo software.", imagemUrl: "https://images.unsplash.com/photo-1554224155-1696413575a8?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Persuasão", explicacao: "É a habilidade de levar alguém a acreditar em algo ou a agir de certa forma através da fala ou escrita.", exemplo: "A propaganda usou técnicas de persuasão para atrair mais usuários.", imagemUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "A Guerra da Atenção",
      imagemUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
      destacar: ["persuadir", "argumentos", "evidências", "crítico"],
      paragrafos: [
        "No Observatório, percebemos que estamos cercados por discursos que tentam nos persuadir a cada segundo. Seja um post de um influenciador ou um editorial de jornal, a meta é moldar sua opinião.",
        "Para não ser enganado, o Analista deve decompor a mensagem. Onde está a tese? Quais são as evidências apresentadas? Se as evidências são fracas, a estrutura desmorona.",
        "Desenvolver um olhar crítico é o único firewall eficiente contra a manipulação. Dominar a arte de argumentar é dominar a própria liberdade de escolha."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "O que o texto sugere como firewall contra a manipulação?",
        opcoes: ["Desenvolver um olhar crítico", "Ler apenas as manchetes", "Confiar em quem tem mais seguidores", "Repetir a opinião da maioria"],
        correta: 0,
        feedbackAcerto: "Proteção ativada. O pensamento crítico é sua melhor defesa.",
        feedbackErro: "Verifique o último parágrafo do arquivo.",
        ondeEstaNoTexto: "Desenvolver um olhar crítico é o único firewall...",
        dica: "Busque a palavra 'firewall' no texto.",
        reensino: "Analise como a crítica nos protege de sermos enganados.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Retórica: Conectores Lógicos",
    instrucao: "Analise como os conectores alteram a rota da lógica e veja os exemplos práticos abaixo.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "O sistema falhou, MAS os dados estão salvos.",
            explicacao: "💡 CONECTOR A (OPOSIÇÃO): O 'mas' cria um contraste. Ele avisa: 'Apesar do problema, algo bom aconteceu'.\n> Ex: 'Estudei muito, mas não passei.' e 'Está sol, mas vai chover.'"
          },
          {
            texto: "Estude, PORQUE o conhecimento liberta.",
            explicacao: "💡 CONECTOR B (EXPLICAÇÃO): O 'porque' justifica a ação. Ele entrega a razão lógica para a ordem dada.\n> Ex: 'Corra, porque o tempo voa.' e 'Coma, porque faz bem.'"
          },
          {
            texto: "O log foi lido, PORTANTO a missão acabou.",
            explicacao: "💡 CONECTOR C (CONCLUSÃO): O 'portanto' encerra a linha de raciocínio. Ele aponta para o resultado inevitável.\n> Ex: 'Penso, logo existo.' e 'Choveu, portanto o chão molhou.'"
          }
        ]
      }
    ]
  },
  momento_escrita: {
    titulo: "Console de Argumentação",
    instrucao: "Construa um parágrafo argumentativo estruturado.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Defesa de Upgrade",
        comando: "Escreva um argumento para convencer sua equipe a investir em segurança cibernética.",
        modelo: [
          "TESE: Precisamos de novos firewalls.",
          "MOTIVO: O número de ataques aumentou 50%.",
          "CONCLUSÃO: Portanto, o investimento é urgente."
        ],
        checklist: [
          "Defini minha tese claramente?",
          "Usei um dado ou motivo real?",
          "Finalizei com uma conclusão lógica?"
        ],
        cicloRevisao: true
      }
    ]
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Ciclo da Persuasão",
    bloco: {
      instrucao: "Organize o fluxo de análise de um texto argumentativo, da recepção à crítica.",
      itens: [
        { id: "1", texto: "📥 RECEPÇÃO: Ler o texto completo para entender o contexto geral.", imagemUrl: "" },
        { id: "2", texto: "🔍 IDENTIFICAÇÃO DA TESE: Qual a ideia central que o autor defende?", imagemUrl: "" },
        { id: "3", texto: "⚖️ AVALIAÇÃO DE EVIDÊNCIAS: Os fatos apresentados são verdadeiros e fortes?", imagemUrl: "" },
        { id: "4", texto: "✅ CONCLUSÃO CRÍTICA: Decidir se o argumento me convenceu ou não.", imagemUrl: "" }
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Fluxo perfeito! Você não é mais apenas um receptor, é um Analista Crítico.",
      feedbackErro: "A análise falhou. Primeiro entenda o todo, depois ache o núcleo, julgue a prova e decida.",
      dica: "Você não pode julgar uma evidência (3) sem saber o que está sendo defendido (2).",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Editorial do Futuro.",
    leitura: {
      titulo: "Editorial: A Inteligência Humana em Jogo",
      imagemUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400",
      destacar: ["essencial", "consequência", "autonomia"],
      paragrafos: [
        "É essencial que as escolas ensinem a lidar com IAs, e não apenas as proíbam. A proibição é uma barreira frágil contra o inevitável.",
        "Como consequência do uso desenfreado sem critério, podemos perder nossa autonomia de pensamento. O risco não é a máquina pensar, mas o humano parar de fazer isso.",
        "Portanto, a educação deve focar no discernimento e na análise profunda de dados."
      ],
    },
    perguntas: [
      {
        pergunta: "Qual conector indica o fechamento da tese no editorial?",
        opcoes: ["Portanto", "Mas", "Porém", "Entretanto"],
        correta: 0,
        feedbackAcerto: "Excelente. 'Portanto' sinaliza a conclusão lógica do autor.",
        feedbackErro: "Procure a palavra que inicia o último parágrafo.",
        dica: "Conclusões costumam usar palavras que amarram o que foi dito antes.",
        reensino: "Revise os conectores de conclusão no Laboratório de Retórica."
      }
    ],
  },
  momento09_revisao: {
    pontos: [
      "Argumentação como ferramenta estratégica de convicção.",
      "Identificação de Teses, Argumentos e Evidências.",
      "Uso de conectores (Mas, Porque, Portanto) para guiar a lógica do leitor."
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que é uma 'Tese' em um texto?",
        opcoes: ["A ideia central defendida", "Um erro de sistema", "Uma palavra aleatória", "O número de linhas do texto"],
        correta: 0,
        feedbackAcerto: "Identificação correta.",
        feedbackErro: "Tese é o núcleo do argumento.",
        ondeEstaNoTexto: "Onde está a tese?",
        dica: "É o que o autor quer que você aceite.",
        reensino: "Revise a estrutura argumentativa no Momento 02.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Convencer",
    materiais: ["Argumentos sólidos", "Escuta ativa"],
    passos: [
      "Escolha um tema leve (ex: qual filme assistir, o que comer no jantar).",
      "Apresente sua Tese e ao menos dois Argumentos com Evidências para sua família.",
      "Tente usar os conectores 'Porque' e 'Portanto' durante a fala.",
      "Registre se eles foram convencidos pela sua estrutura lógica."
    ],
    registro: "Escreva no seu caderno: 'Missão Persuasão - Minha tese foi [X] e o resultado foi [Y]'.",
  },
  recompensa: {
    xp: 150,
    moedas: 75,
  },
};
