import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 33 — Preposições e Locuções Prepositivas
 * -------------------------------------------------------------
 * BNCC: EF07LP09, EF07LP05
 */
export const aula33: AulaPortuguesV4 = {
  slug: "aula-33-preposicoes",
  titulo: "Preposições e Locuções Prepositivas",
  iconeTrilha: "🧭",
  bncc: ["EF07LP09", "EF07LP05"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Os Conectores de Relação",
    historia: "Analista, no Observatório nada existe isolado: tudo está DE algum lugar, PARA algum destino, COM alguma finalidade. As palavras que criam essas relações entre os termos da frase são as preposições. Hoje você vai aprender a usá-las com precisão, além de reconhecer as locuções prepositivas, grupos de palavras que funcionam como uma única preposição.",
    imagemUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Ligações de Sentido.",
    bloco: {
      titulo: "Painel de Relações",
      capaImagemUrl: "",
      pistas: [
        { nome: "Preposições ligam palavras estabelecendo uma relação de sentido.", imagemUrl: "" },
        { nome: "Locuções prepositivas são duas ou mais palavras que funcionam como uma preposição.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Mapa de Conexões",
        icone: "🧭",
        linhas: [
          "  [ PREPOSIÇÕES ]            ",
          "                             ",
          "  A sonda veio DE Marte.     ",
          "  Ela vai ATÉ a Terra.       ",
          "  Foi construída PARA durar. ",
          "                             ",
          "  Cada preposição muda a     ",
          "  relação entre as palavras. ",
        ],
        estilo: "cartaz",
      },
      pergunta: "Qual é a função de uma preposição na frase?",
      hipoteses: [
        { texto: "Ligar duas palavras e criar uma relação de sentido entre elas" },
        { texto: "Substituir o verbo principal da frase" },
        { texto: "Indicar apenas o gênero do substantivo" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Correto! A preposição conecta termos e estabelece relação de sentido.",
      feedbackErro: "Observe como 'de', 'até' e 'para' mudam o sentido da relação no painel.",
      dica: "Troque 'DE Marte' por 'PARA Marte' e veja como o sentido muda.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Peças de Ligação.",
    cards: [
      { palavra: "Preposição", explicacao: "Palavra invariável que liga dois termos, estabelecendo uma relação de sentido entre eles.", exemplo: "O relatório sobre a missão foi entregue.", imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Locução Prepositiva", explicacao: "Conjunto de duas ou mais palavras que funciona como uma única preposição, terminando sempre em preposição.", exemplo: "A estação fica perto de a base principal.", imagemUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Regência", explicacao: "Relação de dependência em que um termo exige determinada preposição para se completar.", exemplo: "O analista assistiu ao lançamento com atenção.", imagemUrl: "https://images.unsplash.com/photo-1554224155-1696413575a8?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Relações Prepositivas",
    instrucao: "Compare como cada preposição ou locução muda a relação entre as palavras da frase.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "A nave partiu DE Marte.", explicacao: "💡 ORIGEM: a preposição 'de' indica de onde algo vem.\n> Ex: 'Ele saiu de casa.' e 'O sinal veio de longe.'" },
          { texto: "A estação fica PERTO DE a base.", explicacao: "💡 LOCUÇÃO PREPOSITIVA: 'perto de' são duas palavras funcionando como uma preposição só, indicando proximidade.\n> Ex: 'O robô ficou junto de nós.' e 'A base está ao lado de o reator.'" },
          { texto: "O projeto foi feito PARA durar décadas.", explicacao: "💡 FINALIDADE: a preposição 'para' indica objetivo ou propósito.\n> Ex: 'Estudo para aprender.' e 'Ele correu para chegar a tempo.'" },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "O Mapa das Rotas do Observatório",
      imagemUrl: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&q=80&w=400",
      destacar: ["para", "de", "através de"],
      paragrafos: [
        "As rotas do Observatório são traçadas com extremo cuidado, pois cada preposição usada no relatório de navegação indica uma relação exata entre pontos no espaço.",
        "Uma sonda que viaja de uma estação para outra não percorre apenas distância; ela atravessa zonas de risco através de cálculos precisos de trajetória.",
        "Por isso, dizer que a sonda foi 'até' a base é diferente de dizer que ela passou 'por dentro de' uma zona de asteroides. A escolha da preposição, ou da locução prepositiva, muda completamente o significado da rota.",
        "Um erro de preposição em um relatório de navegação pode custar caro: confundir 'sobre' com 'sob' já causou desvios de rota no passado do Observatório.",
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "Segundo o texto, o que pode acontecer se um relatório de navegação usar a preposição errada?",
        opcoes: ["Pode causar desvios de rota", "A sonda para de funcionar", "O texto fica mais bonito", "Nada muda no sentido"],
        correta: 0,
        feedbackAcerto: "Correto! Um erro de preposição pode gerar desvios de rota.",
        feedbackErro: "Releia o último parágrafo do texto.",
        ondeEstaNoTexto: "confundir 'sobre' com 'sob' já causou desvios de rota",
        dica: "Pense no exemplo de 'sobre' e 'sob' citado no texto.",
        reensino: "Revise o painel de relações prepositivas no momento visual.",
      },
      {
        pergunta: "Qual expressão do texto funciona como uma locução prepositiva?",
        opcoes: ["Através de", "Rota exata", "Zona de risco", "Cálculo preciso"],
        correta: 0,
        feedbackAcerto: "Isso mesmo, 'através de' é uma locução prepositiva.",
        feedbackErro: "Busque uma expressão de duas palavras que termine em 'de'.",
        ondeEstaNoTexto: "atravessa zonas de risco através de cálculos precisos",
        dica: "Locuções prepositivas sempre terminam em uma preposição simples.",
        reensino: "Revise o card 'Locução Prepositiva' no vocabulário.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_escrita: {
    titulo: "Console de Rotas",
    instrucao: "Descreva um trajeto real usando preposições e locuções prepositivas variadas.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Meu Trajeto até a Escola",
        comando: "Descreva o caminho que você faz de casa até a escola, usando ao menos quatro preposições ou locuções prepositivas diferentes.",
        modelo: ["Saio de casa, passo por perto de a padaria, ando ao longo de a avenida e chego até a escola."],
        checklist: ["Usei ao menos 4 preposições ou locuções?", "As relações de sentido ficaram claras?", "Não repeti a mesma preposição o tempo todo?"],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Rota: Montando a Trajetória com Preposições.",
    bloco: {
      instrucao: "Organize a construção de uma frase de trajetória usando preposições, do ponto de partida ao destino.",
      itens: [
        { id: "1", texto: "🚀 PARTIDA: identificar de onde o trajeto começa ('de Marte').", imagemUrl: "" },
        { id: "2", texto: "🛰️ TRAJETO: indicar por onde a rota passa ('através de asteroides').", imagemUrl: "" },
        { id: "3", texto: "🎯 DESTINO: indicar até onde o trajeto vai ('até a Terra').", imagemUrl: "" },
        { id: "4", texto: "📝 FINALIDADE: acrescentar o propósito da viagem ('para coletar dados').", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Rota traçada! Você domina o uso de preposições em sequência lógica.",
      feedbackErro: "Sempre é preciso saber a origem antes de descrever o percurso e o destino.",
      dica: "Pense em como você narraria uma viagem real, do início ao objetivo final.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Aviso de Manutenção.",
    leitura: {
      titulo: "Aviso: Manutenção na Ala Sul",
      imagemUrl: "https://images.unsplash.com/photo-1541873676-a18131494184?auto=format&fit=crop&q=80&w=400",
      destacar: ["em frente a", "sem", "com"],
      paragrafos: [
        "A manutenção ocorrerá em frente a o gerador principal, das 8h às 10h. Durante esse período, a ala sul funcionará sem energia elétrica.",
        "Os analistas devem trabalhar com lanternas e evitar circular pela área com equipamentos sensíveis até o fim da manutenção.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual locução prepositiva indica o local da manutenção?",
        opcoes: ["Em frente a", "Sem energia", "Até o fim", "Das 8h"],
        correta: 0,
        feedbackAcerto: "Correto, 'em frente a' indica localização.",
        feedbackErro: "Releia a primeira frase do aviso.",
        dica: "Procure a expressão de duas ou mais palavras que indica posição.",
        reensino: "Revise o momento de ensino visual sobre locuções.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "Preposições ligam termos e criam relações de sentido (origem, destino, finalidade etc.).",
      "Locuções prepositivas são grupos de palavras que funcionam como uma única preposição.",
      "A escolha da preposição correta é essencial para não distorcer o sentido da frase.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que é uma preposição?",
        opcoes: ["Palavra que liga dois termos e estabelece uma relação de sentido", "Palavra que nomeia seres e objetos", "Palavra que indica ação", "Palavra que substitui o substantivo"],
        correta: 0,
        feedbackAcerto: "Correto, essa é a função da preposição.",
        feedbackErro: "Revise o card 'Preposição' no vocabulário.",
        ondeEstaNoTexto: "Palavra invariável que liga dois termos",
        dica: "Pense na relação criada entre duas palavras.",
        reensino: "Volte ao momento 03 de vocabulário.",
      },
      {
        pergunta: "Qual das opções é uma locução prepositiva?",
        opcoes: ["Perto de", "Rapidamente", "Estrela distante", "Correu muito"],
        correta: 0,
        feedbackAcerto: "Isso mesmo, 'perto de' é uma locução prepositiva.",
        feedbackErro: "Locuções prepositivas terminam sempre em uma preposição simples.",
        ondeEstaNoTexto: "A estação fica perto de a base.",
        dica: "Busque a expressão de duas palavras que termina em 'de'.",
        reensino: "Revise o Laboratório de Relações Prepositivas.",
      },
      {
        pergunta: "Na frase 'estudo para aprender', a preposição 'para' indica:",
        opcoes: ["Finalidade", "Origem", "Posse", "Tempo"],
        correta: 0,
        feedbackAcerto: "Correto, 'para' indica finalidade ou objetivo.",
        feedbackErro: "Releia o exemplo de finalidade no laboratório visual.",
        ondeEstaNoTexto: "O projeto foi feito PARA durar décadas.",
        dica: "Pense no propósito da ação de estudar.",
        reensino: "Revise o momento de ensino visual.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Mapa de Casa",
    materiais: ["Caderno", "Caneta"],
    passos: [
      "Escolha um cômodo da casa e descreva o caminho até ele a partir da porta de entrada.",
      "Use ao menos três preposições diferentes na descrição (de, até, para, entre, sobre etc.).",
      "Peça a um familiar para seguir sua descrição e chegar até o cômodo.",
      "Registre se a descrição funcionou e quais preposições você usou.",
    ],
    registro: "Escreva no caderno: 'Missão Rota - usei as preposições [X], [Y] e [Z] para descrever meu trajeto'.",
  },
  recompensa: {
    xp: 150,
    moedas: 75,
  },
};
