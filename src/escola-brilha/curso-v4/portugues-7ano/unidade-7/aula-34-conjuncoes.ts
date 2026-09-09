import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 34 — Conjunções que Ligam Orações
 * -------------------------------------------------------------
 * BNCC: EF07LP11
 */
export const aula34: AulaPortuguesV4 = {
  slug: "aula-34-conjuncoes",
  titulo: "Conjunções que Ligam Orações",
  iconeTrilha: "⚡",
  bncc: ["EF07LP11"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Os Fios que Unem Circuitos",
    historia: "Analista, duas orações separadas são como dois circuitos desconectados: cada uma funciona, mas não trocam energia entre si. As conjunções são os fios que ligam esses circuitos, criando relações de soma, oposição, causa ou conclusão. Hoje você vai aprender a escolher o fio certo para cada conexão e dar mais força lógica às suas frases.",
    imagemUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Conexões entre Circuitos.",
    bloco: {
      titulo: "Painel de Conjunções",
      capaImagemUrl: "",
      pistas: [
        { nome: "Conjunções ligam duas orações, criando uma relação de sentido entre elas.", imagemUrl: "" },
        { nome: "Cada conjunção carrega um tipo de relação: soma, oposição, causa, conclusão.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel de Ligações",
        icone: "⚡",
        linhas: [
          "  [ CONJUNÇÕES ]             ",
          "                             ",
          "  O sinal chegou E foi salvo.",
          "  Choveu, MAS a missão seguiu.",
          "  Paramos, PORQUE faltou luz.",
          "                             ",
          "  Cada conector muda o tipo  ",
          "  de relação entre as ideias.",
        ],
        estilo: "cartaz",
      },
      pergunta: "O que uma conjunção faz entre duas orações?",
      hipoteses: [
        { texto: "Estabelece uma relação de sentido entre as duas orações" },
        { texto: "Transforma as duas orações em uma só palavra" },
        { texto: "Elimina uma das orações da frase" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Correto! A conjunção conecta e dá sentido à relação entre as orações.",
      feedbackErro: "Observe no painel como 'mas' muda a relação entre 'choveu' e 'a missão seguiu'.",
      dica: "Compare 'e' com 'mas': eles ligam, mas de formas diferentes.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Tipos de Conexão.",
    cards: [
      { palavra: "Conjunção Aditiva", explicacao: "Liga duas orações somando ideias (e, nem, mas também).", exemplo: "A sonda pousou e enviou os primeiros dados.", imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Conjunção Adversativa", explicacao: "Liga duas orações mostrando ideias opostas ou contrastantes (mas, porém, contudo).", exemplo: "O sistema falhou, mas os dados foram recuperados.", imagemUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Conjunção Causal", explicacao: "Liga duas orações indicando a causa de algo (porque, já que, pois).", exemplo: "Paramos a missão porque o combustível acabou.", imagemUrl: "https://images.unsplash.com/photo-1554224155-1696413575a8?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Circuitos Lógicos",
    instrucao: "Compare como cada conjunção cria um tipo diferente de relação entre as orações.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "A equipe testou o sistema E aprovou o lançamento.", explicacao: "💡 ADIÇÃO: 'e' soma duas ações que aconteceram em sequência.\n> Ex: 'Ele estudou e passou.' e 'Choveu e a rua alagou.'" },
          { texto: "O céu estava nublado, MAS o lançamento continuou.", explicacao: "💡 OPOSIÇÃO: 'mas' contrasta duas ideias diferentes.\n> Ex: 'Estava cansado, mas terminou o trabalho.' e 'É pequeno, mas é forte.'" },
          { texto: "Cancelamos o teste, PORQUE o sensor falhou.", explicacao: "💡 CAUSA: 'porque' explica o motivo da ação anterior.\n> Ex: 'Corri, porque estava atrasado.' e 'Ele comeu, porque estava com fome.'" },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "O Dia do Lançamento Adiado",
      imagemUrl: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&q=80&w=400",
      destacar: ["mas", "porque", "portanto"],
      paragrafos: [
        "A equipe do Observatório planejou o lançamento da sonda para as seis da manhã, mas uma tempestade elétrica surgiu de repente na região.",
        "O lançamento foi suspenso, porque o risco de dano aos equipamentos era alto demais. Ninguém queria arriscar meses de trabalho por pressa.",
        "A tempestade durou apenas duas horas, e logo o céu ficou limpo novamente. A equipe revisou todos os sistemas antes de tentar de novo.",
        "Portanto, o lançamento foi remarcado para o início da tarde, e desta vez tudo correu conforme o planejado.",
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "Por que o lançamento foi suspenso na manhã, segundo o texto?",
        opcoes: ["Por causa do risco de dano causado pela tempestade", "Porque a equipe esqueceu de testar o sistema", "Porque não havia combustível suficiente", "Porque o horário estava errado"],
        correta: 0,
        feedbackAcerto: "Correto! A conjunção 'porque' explica exatamente esse motivo.",
        feedbackErro: "Releia o segundo parágrafo, onde a causa é explicada.",
        ondeEstaNoTexto: "porque o risco de dano aos equipamentos era alto demais",
        dica: "Procure a palavra que costuma indicar motivo.",
        reensino: "Revise o card de Conjunção Causal no vocabulário.",
      },
      {
        pergunta: "Qual conjunção do texto indica a conclusão da situação?",
        opcoes: ["Portanto", "Mas", "E", "Porque"],
        correta: 0,
        feedbackAcerto: "Isso mesmo, 'portanto' fecha a linha de raciocínio.",
        feedbackErro: "Observe a palavra que inicia o último parágrafo.",
        ondeEstaNoTexto: "Portanto, o lançamento foi remarcado",
        dica: "Conclusões costumam vir ao final do texto.",
        reensino: "Revise o Laboratório de Circuitos Lógicos.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_escrita: {
    titulo: "Console de Conexões",
    instrucao: "Combine orações usando diferentes tipos de conjunção.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Ligando Ideias",
        comando: "Escreva três frases sobre um dia difícil que você teve, usando uma conjunção aditiva, uma adversativa e uma causal, uma em cada frase.",
        modelo: ["Estudei e fiz a prova.", "Estudei bastante, mas fiquei nervoso.", "Fiquei nervoso, porque a prova era difícil."],
        checklist: ["Usei uma conjunção aditiva?", "Usei uma conjunção adversativa?", "Usei uma conjunção causal?"],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Circuito: Montando a Relação Lógica.",
    bloco: {
      instrucao: "Organize o raciocínio de uma situação que usa causa e consequência ligadas por conjunções.",
      itens: [
        { id: "1", texto: "⚡ FATO INICIAL: o sensor do painel apresentou uma falha.", imagemUrl: "" },
        { id: "2", texto: "🔗 CAUSA: 'porque' explica o motivo da falha (curto-circuito).", imagemUrl: "" },
        { id: "3", texto: "🔀 OPOSIÇÃO: 'mas' mostra que, apesar da falha, a missão não foi cancelada.", imagemUrl: "" },
        { id: "4", texto: "✅ CONCLUSÃO: 'portanto' encerra com a decisão final tomada.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Circuito completo! Você conectou fato, causa, oposição e conclusão com lógica.",
      feedbackErro: "É preciso ter o fato antes de explicar a causa, e a causa antes da conclusão.",
      dica: "Pense em uma história curta: primeiro o problema, depois o porquê, depois o contraste, depois o final.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Nota da Equipe de Manutenção.",
    leitura: {
      titulo: "Nota: Reparo Concluído",
      imagemUrl: "https://images.unsplash.com/photo-1541873676-a18131494184?auto=format&fit=crop&q=80&w=400",
      destacar: ["contudo", "e", "pois"],
      paragrafos: [
        "O reparo do painel solar foi concluído com sucesso e todos os sistemas voltaram a funcionar normalmente.",
        "Contudo, a equipe recomenda uma nova revisão em trinta dias, pois algumas peças ainda estão próximas do limite de uso.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual conjunção do texto introduz uma ideia de contraste em relação ao sucesso do reparo?",
        opcoes: ["Contudo", "E", "Pois", "Sucesso"],
        correta: 0,
        feedbackAcerto: "Correto, 'contudo' contrasta com o sucesso citado antes.",
        feedbackErro: "Releia o início do segundo parágrafo.",
        dica: "Procure a palavra que se parece com 'mas' ou 'porém'.",
        reensino: "Revise o card de Conjunção Adversativa.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "Conjunções ligam orações e criam relações de sentido entre elas.",
      "Existem conjunções aditivas, adversativas e causais, entre outras.",
      "A escolha da conjunção certa dá mais lógica e clareza ao texto.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que faz uma conjunção em uma frase?",
        opcoes: ["Liga duas orações e estabelece uma relação de sentido", "Substitui o substantivo principal", "Indica apenas o tempo verbal", "Nomeia um ser ou objeto"],
        correta: 0,
        feedbackAcerto: "Correto, essa é a função central da conjunção.",
        feedbackErro: "Revise o painel de conjunções no momento 02.",
        ondeEstaNoTexto: "Cada conector muda o tipo de relação entre as ideias.",
        dica: "Pense em como duas frases se conectam através de uma palavra.",
        reensino: "Volte ao briefing do momento 02.",
      },
      {
        pergunta: "Em 'choveu, mas a missão seguiu', a conjunção 'mas' indica:",
        opcoes: ["Oposição", "Adição", "Causa", "Conclusão"],
        correta: 0,
        feedbackAcerto: "Isso mesmo, 'mas' indica contraste ou oposição.",
        feedbackErro: "Releia o card de Conjunção Adversativa.",
        ondeEstaNoTexto: "O céu estava nublado, MAS o lançamento continuou.",
        dica: "Pense em duas ideias que parecem contrárias.",
        reensino: "Revise o Laboratório de Circuitos Lógicos.",
      },
      {
        pergunta: "Qual conjunção do tipo causal aparece nos exemplos da aula?",
        opcoes: ["Porque", "E", "Mas", "Portanto"],
        correta: 0,
        feedbackAcerto: "Correto, 'porque' indica a causa de uma ação.",
        feedbackErro: "Releia o card de Conjunção Causal no vocabulário.",
        ondeEstaNoTexto: "Paramos a missão porque o combustível acabou.",
        dica: "Pense na palavra que responde à pergunta 'por quê?'.",
        reensino: "Revise o momento 03 de vocabulário.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Circuito Familiar",
    materiais: ["Caderno", "Caneta"],
    passos: [
      "Escolha um fato do seu dia que teve uma causa e uma consequência.",
      "Conte o fato para um familiar usando ao menos uma conjunção de cada tipo (adição, oposição, causa).",
      "Peça para essa pessoa identificar qual conjunção você usou em cada parte.",
      "Registre no caderno as três frases que você criou.",
    ],
    registro: "Escreva no caderno: 'Missão Circuito - minhas frases com conjunções foram: [X], [Y] e [Z]'.",
  },
  recompensa: {
    xp: 150,
    moedas: 75,
  },
};
