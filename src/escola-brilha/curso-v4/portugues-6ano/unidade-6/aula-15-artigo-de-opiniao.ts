import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 15 — Artigo de Opinião: Defendendo sua Base
 * BNCC: EF67LP05, EF06LP01
 */
export const aula15: AulaPortuguesV4 = {
  slug: "aula-15-artigo-de-opiniao",
  titulo: "Artigo de Opinião",
  iconeTrilha: "⚖️",
  bncc: ["EF67LP05", "EF06LP01"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Fortificação de Ideias: O Artigo de Opinião",
    historia: "Analista, no Labirinto não basta ter uma opinião; você precisa saber DEFENDÊ-LA. O Artigo de Opinião é a sua armadura. É um gênero onde você usa argumentos e evidências para convencer o outro de que seu ponto de vista é o mais lógico. Hoje vamos aprender a construir uma base sólida para as suas ideias, transformando 'eu acho' em 'está provado que'.",
    imagemUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing de Argumentação: Como convencer?",
    bloco: {
      titulo: "Análise de Tese",
      capaImagemUrl: "",
      pistas: [
        { nome: "Tese: É a ideia principal que você vai defender.", imagemUrl: "" },
        { nome: "Argumento: É o porquê da sua ideia ser correta.", imagemUrl: "" }
      ],
      recado: {
        rotulo: "Protocolo de Defesa",
        icone: "⚖️",
        linhas: [
          "  [ ESTRUTURA DA DEFESA ]  ",
          "                           ",
          "  1. TESE (Ideia)          ",
          "  > 'Celular na aula ajuda' ",
          "          ↓                ",
          "  2. ARGUMENTO (Prova)     ",
          "  > 'Dá acesso a pesquisas' ",
          "                           ",
          "  DICA: Um argumento fraco ",
          "  derruba toda a tese.     "
        ],
        estilo: "cartaz",
      },
      pergunta: "Qual a diferença entre uma opinião comum e um artigo de opinião?",
      hipoteses: [
        { texto: "O artigo usa argumentos para provar o ponto de vista" },
        { texto: "A opinião comum é sempre mais longa" },
        { texto: "Não existe diferença" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Precisão estratégica! O argumento é o que dá força ao artigo.",
      feedbackErro: "Pense na presença de provas e explicações.",
      dica: "É sobre provar.",
    },
  },
  momento03_vocabulario: {
    cards: [
      { palavra: "Tese", explicacao: "A opinião central que o autor quer defender no texto.", exemplo: "Minha tese é que o esporte melhora a saúde.", imagemUrl: "" },
      { palavra: "Contra-argumento", explicacao: "Uma ideia contrária à sua, que você usa para mostrar que a sua é melhor.", exemplo: "Alguns dizem que gasta tempo, mas eu provo que ganha energia.", imagemUrl: "" },
    ],
    instrucao: "Dicionário de Ativos",
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de arquivo.",
    leitura: {
      titulo: "O Poder do Argumento",
      imagemUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=400",
      destacar: ["convencer", "lógica", "evidências"],
      paragrafos: [
        "Um artigo de opinião não serve para brigar, mas para debater. O autor apresenta um problema atual e tenta convencer o leitor a concordar com ele usando a lógica.",
        "Para que o texto tenha autoridade, é preciso usar evidências: dados, exemplos reais ou falas de especialistas. Isso transforma o texto de 'um desabafo' em 'um documento'.",
        "Ao final, o autor geralmente sugere uma solução ou faz um apelo para que o leitor mude de atitude."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de dados.",
    perguntas: [
      {
        pergunta: "Para que servem os 'dados de especialistas' em um artigo de opinião?",
        opcoes: ["Para dar autoridade e credibilidade ao argumento", "Para deixar o texto mais difícil de ler", "Para ocupar espaço"],
        correta: 0,
        feedbackAcerto: "Exato! A voz do especialista reforça a sua tese.",
        feedbackErro: "Quem tem mais chance de convencer: você sozinho ou você com um cientista ao lado?",
        ondeEstaNoTexto: "Isso transforma o texto de 'um desabafo' em 'um documento'.",
        dica: "Pense em autoridade.",
        reensino: "Evidências externas provam que sua ideia não é apenas um 'achismo'.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Persuasão",
    bloco: {
      instrucao: "Ordene as partes de um artigo de opinião clássico.",
      itens: [
        { id: "1", texto: "Apresentar o tema e a Tese.", imagemUrl: "" },
        { id: "2", texto: "Desenvolver os Argumentos.", imagemUrl: "" },
        { id: "3", texto: "Apresentar um Contra-argumento e derrubá-lo.", imagemUrl: "" },
        { id: "4", texto: "Concluir reforçando a Tese.", imagemUrl: "" }
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Base de pensamento construída com sucesso!",
      feedbackErro: "A Tese deve aparecer logo no início para o leitor saber o que você defende.",
      dica: "Comece pela ideia principal.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma.",
    leitura: {
      titulo: "Artigo: Menos Telas, Mais Livros",
      imagemUrl: "",
      destacar: ["concentração", "pesquisas", "equilíbrio"],
      paragrafos: [
        "Muitos adolescentes passam 6 horas por dia no celular. Isso prejudica a concentração.",
        "Pesquisas indicam que ler livros de papel melhora a memória em 30%.",
        "Portanto, precisamos de equilíbrio: tecnologia é boa, mas o papel é vital."
      ],
    },
    perguntas: [
      {
        pergunta: "Qual é a TESE deste pequeno artigo?",
        opcoes: ["Precisamos de equilíbrio entre tecnologia e livros", "O celular deve ser proibido para sempre", "Ninguém gosta de ler livros"],
        correta: 0,
        feedbackAcerto: "Perfeito! O equilíbrio é o ponto defendido.",
        feedbackErro: "Procure a conclusão do autor.",
        dica: "Olhe a última frase.",
        reensino: "A tese é a conclusão lógica dos argumentos apresentados."
      }
    ],
  },
  momento09_revisao: {
    pontos: [
      "Artigo de Opinião defende um ponto de vista com argumentos.",
      "Usa Tese, Argumentos e Contra-argumentos.",
      "O objetivo final é convencer o leitor via lógica e dados."
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que é um Contra-argumento?",
        opcoes: ["Uma ideia contrária à sua que você discute no texto", "Um erro de português", "O título do texto"],
        correta: 0,
        feedbackAcerto: "Análise estratégica correta.",
        feedbackErro: "É o que o 'oponente' diria.",
        ondeEstaNoTexto: "Uma ideia contrária à sua, que você usa para mostrar que a sua é melhor.",
        dica: "É a ideia oposta.",
        reensino: "Antecipar o que o outro pensa ajuda a fortalecer a sua defesa.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Debatedor de Elite",
    materiais: ["Um tema polêmico (ex: horário de dormir)"],
    passos: [
      "Escolham um assunto que vocês discordam em casa.",
      "Cada um deve dar 2 ARGUMENTOS baseados em lógica, não em gritos.",
      "Tente convencer o outro usando o padrão: 'Eu acho isso PORQUE... e o exemplo disso é...'"
    ],
    registro: "Escreva qual foi o melhor argumento usado no debate.",
  },
  recompensa: {
    xp: 850,
    moedas: 500,
  },
};
