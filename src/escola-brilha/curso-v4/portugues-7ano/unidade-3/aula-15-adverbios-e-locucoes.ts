import type { AulaPortuguesV4 } from "../../types";

/** Aula 15 — Advérbios e Locuções Adverbiais — BNCC: EF07LP09 */
export const aula15: AulaPortuguesV4 = {
  slug: "aula-15-adverbios-e-locucoes",
  titulo: "Advérbios e Locuções",
  iconeTrilha: "🧭",
  bncc: ["EF07LP09"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Coordenadas de Circunstância",
    historia: "Analista, chegamos à última missão da Unidade 3. Enquanto os adjetivos caracterizam substantivos, os advérbios modificam verbos, adjetivos ou até outros advérbios, indicando circunstâncias como tempo, lugar, modo e intensidade. É hora de calibrar suas coordenadas circunstanciais.",
    imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Circunstâncias da Ação.",
    bloco: {
      titulo: "Escaneamento de Advérbios",
      capaImagemUrl: "",
      pistas: [
        { nome: "Advérbios modificam verbos, adjetivos ou outros advérbios.", imagemUrl: "" },
        { nome: "Existem advérbios de tempo, lugar, modo, intensidade e negação.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel de Circunstância",
        icone: "🧭",
        linhas: [
          "  [ ADVÉRBIOS ]           ",
          "                          ",
          "  O robô chegou AGORA.    ",
          "  (tempo)                 ",
          "  O robô trabalha AQUI.   ",
          "  (lugar)                 ",
          "  O robô fala DEVAGAR.    ",
          "  (modo)                  ",
        ],
        estilo: "cartaz",
      },
      pergunta: "Qual é a principal função do advérbio na oração?",
      hipoteses: [
        { texto: "Indicar circunstância de tempo, modo, lugar ou intensidade" },
        { texto: "Substituir o sujeito da oração" },
        { texto: "Ligar duas orações independentes" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Coordenadas certas! Advérbios indicam circunstâncias.",
      feedbackErro: "Reveja o painel: 'agora', 'aqui' e 'devagar' indicam circunstâncias diferentes.",
      dica: "Pense em quando, onde ou como a ação acontece.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Circunstâncias.",
    cards: [
      { palavra: "Advérbio", explicacao: "Palavra invariável que modifica um verbo, um adjetivo ou outro advérbio, indicando circunstância.", exemplo: "O sensor funciona bem.", imagemUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Locução adverbial", explicacao: "Duas ou mais palavras que juntas exercem a função de advérbio.", exemplo: "Ele chegou de repente à base.", imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Adjunto adverbial", explicacao: "Termo (advérbio ou locução) que indica a circunstância em que ocorre a ação verbal.", exemplo: "O robô trabalhou durante a noite.", imagemUrl: "https://images.unsplash.com/photo-1554224155-1696413575a8?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Sintaxe: Tipos de Circunstância",
    instrucao: "Veja diferentes circunstâncias marcadas por advérbios e locuções.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "O robô chegou ONTEM.", explicacao: "💡 ADVÉRBIO DE TEMPO: indica quando a ação ocorreu.\n> Ex: 'Ela saiu cedo.' e 'Voltaremos amanhã.'" },
          { texto: "O robô trabalha COM CUIDADO.", explicacao: "💡 LOCUÇÃO ADVERBIAL DE MODO: expressão que indica como a ação acontece.\n> Ex: 'Ele fala às pressas.' e 'Ela escreve com atenção.'" },
          { texto: "O sinal NÃO funcionou.", explicacao: "💡 ADVÉRBIO DE NEGAÇÃO: nega a ocorrência do verbo.\n> Ex: 'Nunca desisto.' e 'Jamais esqueço.'" },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "Modificadores de Circunstância",
      imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
      destacar: ["advérbio", "locução adverbial", "circunstância"],
      paragrafos: [
        "Enquanto o adjetivo caracteriza o substantivo, o advérbio modifica o verbo, o adjetivo ou outro advérbio, revelando uma circunstância. Em 'o robô caminha lentamente', o advérbio 'lentamente' indica o modo da ação.",
        "Assim como os adjetivos, os advérbios também têm suas locuções: as locuções adverbiais. 'Ele saiu às pressas' tem o mesmo valor de 'ele saiu apressadamente'.",
        "Existem diversos tipos de advérbio: de tempo (hoje, sempre), lugar (aqui, longe), modo (bem, devagar), intensidade (muito, pouco) e negação (não, nunca). Cada um responde a uma pergunta diferente sobre a ação.",
        "Reconhecer essas circunstâncias ajuda o Analista a compreender com exatidão quando, onde, como e em que grau uma ação acontece.",
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "O que o advérbio 'lentamente' indica na frase 'o robô caminha lentamente'?",
        opcoes: ["O modo da ação", "O tempo da ação", "O lugar da ação", "A negação da ação"],
        correta: 0,
        feedbackAcerto: "Correto! 'Lentamente' indica como a ação acontece: o modo.",
        feedbackErro: "Releia o primeiro parágrafo e observe a palavra 'modo'.",
        ondeEstaNoTexto: "o advérbio 'lentamente' indica o modo da ação.",
        dica: "Pense em como o robô caminha, não em quando ou onde.",
        reensino: "Advérbios de modo respondem à pergunta 'como' a ação acontece.",
      },
      {
        pergunta: "Qual exemplo de locução adverbial aparece no texto?",
        opcoes: ["Às pressas", "Muito rápido", "Nunca mais", "Bem devagar"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! 'Às pressas' é citada como locução adverbial de modo.",
        feedbackErro: "Verifique o segundo parágrafo do texto.",
        ondeEstaNoTexto: "'Ele saiu às pressas' tem o mesmo valor de 'ele saiu apressadamente'.",
        dica: "É a expressão de mais de uma palavra citada como exemplo.",
        reensino: "Locução adverbial é formada por duas ou mais palavras com valor de advérbio.",
      },
    ],
  },
  momento06_personagensCenario: { instrucao: "Nenhum agente detectado.", perguntas: [] },
  momento_escrita: {
    titulo: "Console de Redação",
    instrucao: "Escreva frases usando diferentes tipos de advérbio.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Relatório de Circunstâncias",
        comando: "Escreva 4 frases sobre uma missão, cada uma com um advérbio ou locução adverbial diferente (tempo, modo, lugar, negação).",
        modelo: ["Hoje a missão começou. (tempo)", "O robô avançou com cautela. (modo)", "A base fica longe. (lugar)", "O sinal nunca falhou. (negação)"],
        checklist: ["Usei os quatro tipos de circunstância pedidos?", "Cada advérbio está ligado corretamente ao verbo?", "As frases têm sentido completo?"],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Identificando o Advérbio",
    bloco: {
      instrucao: "Organize o processo de identificação de um adjunto adverbial.",
      itens: [
        { id: "1", texto: "📥 LEITURA: Localize o verbo da oração.", imagemUrl: "" },
        { id: "2", texto: "🔍 BUSCA: Procure a palavra ou expressão que indica circunstância.", imagemUrl: "" },
        { id: "3", texto: "🧭 TESTE: Pergunte quando, onde, como ou quanto a ação ocorre.", imagemUrl: "" },
        { id: "4", texto: "✅ CLASSIFICAÇÃO: Nomeie o tipo de advérbio encontrado.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Coordenadas confirmadas! Você identifica advérbios com precisão.",
      feedbackErro: "Revise a ordem: primeiro o verbo, depois a expressão, depois a pergunta-teste.",
      dica: "Você só classifica (4) depois de responder à pergunta-teste (3).",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Aviso da Central.",
    leitura: {
      titulo: "Aviso: Manutenção Programada",
      imagemUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400",
      destacar: ["hoje", "cuidadosamente", "lá"],
      paragrafos: [
        "Hoje o sistema passará por manutenção. A equipe técnica trabalhará cuidadosamente para não interromper o funcionamento da base. Todos os relatórios devem ser entregues lá, na sala de controle.",
      ],
    },
    perguntas: [
      {
        pergunta: "No texto, o advérbio 'cuidadosamente' indica:",
        opcoes: ["O modo como a equipe trabalha", "O tempo da manutenção", "O lugar da entrega", "A negação da ação"],
        correta: 0,
        feedbackAcerto: "Exato! 'Cuidadosamente' descreve o modo como a equipe age.",
        feedbackErro: "Observe se a palavra responde 'como' a equipe trabalha.",
        dica: "Advérbios terminados em '-mente' costumam indicar modo.",
        reensino: "Advérbios de modo geralmente terminam em '-mente' e respondem à pergunta 'como'.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "Advérbios modificam verbos, adjetivos ou outros advérbios.",
      "Locuções adverbiais são expressões com valor de advérbio.",
      "Existem advérbios de tempo, modo, lugar, intensidade e negação.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Em 'O Analista trabalha aqui', o advérbio 'aqui' indica:",
        opcoes: ["Lugar", "Tempo", "Modo", "Negação"],
        correta: 0,
        feedbackAcerto: "Correto! 'Aqui' indica o lugar da ação.",
        feedbackErro: "Pense em onde a ação acontece.",
        ondeEstaNoTexto: "",
        dica: "A palavra responde à pergunta 'onde'.",
        reensino: "Advérbios de lugar indicam onde a ação ocorre.",
      },
      {
        pergunta: "Qual das opções é uma locução adverbial?",
        opcoes: ["De repente", "Rapidamente", "Aqui", "Nunca"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! 'De repente' é formada por mais de uma palavra.",
        feedbackErro: "Procure a opção formada por duas palavras.",
        ondeEstaNoTexto: "",
        dica: "Locução adverbial nunca é uma única palavra.",
        reensino: "Locução adverbial é o conjunto de duas ou mais palavras com valor de advérbio.",
      },
      {
        pergunta: "Qual é a função geral do advérbio na oração?",
        opcoes: ["Indicar uma circunstância da ação verbal", "Caracterizar um substantivo", "Substituir o sujeito", "Ligar duas frases coordenadas"],
        correta: 0,
        feedbackAcerto: "Perfeito! O advérbio sempre indica uma circunstância.",
        feedbackErro: "Volte ao painel de circunstância e relembre a definição.",
        ondeEstaNoTexto: "",
        dica: "Pense em tempo, modo, lugar, intensidade ou negação.",
        reensino: "Advérbios modificam o sentido do verbo, indicando uma circunstância específica.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Coordenadas",
    materiais: ["Caderno", "Caneta"],
    passos: [
      "Observe uma conversa em família por 5 minutos.",
      "Anote 3 advérbios ou locuções adverbiais usados.",
      "Classifique cada um como tempo, modo, lugar, intensidade ou negação.",
      "Registre os resultados no caderno.",
    ],
    registro: "Escreva: 'Missão Coordenadas - Advérbios encontrados: [X], [Y], [Z]'.",
  },
  recompensa: { xp: 150, moedas: 75 },
};
