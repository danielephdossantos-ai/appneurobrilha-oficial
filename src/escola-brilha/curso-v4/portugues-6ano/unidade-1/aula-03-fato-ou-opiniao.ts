import { AulaPortuguesV4 } from "../../types";

export const aula3: AulaPortuguesV4 = {
  slug: "o-fato-e-a-opiniao",
  titulo: "O Fato e a Opinião",
  iconeTrilha: "⚖️",
  bncc: ["EF06LP01", "EF06LP02"],
  duracaoMin: 20,
  momento01_motivacao: {
    titulo: "Verdade ou Ponto de Vista?",
    historia: "No jornalismo, separar o que aconteceu (fato) do que alguém pensa sobre isso (opinião) é fundamental. Você sabe a diferença?",
    imagemUrl: "balanca-justica"
  },
  momento02_previsao: {
    instrucao: "Analise as frases abaixo.",
    bloco: {
      titulo: "Teste de Percepção",
      pergunta: "Qual destas frases é um FATO inquestionável?",
      hipoteses: [
        { texto: "'O time jogou muito mal hoje'" },
        { texto: "'O jogo terminou em 2 a 1'" }
      ],
      respostaCerta: 1,
      feedbackAcerto: "Exato. O placar é um dado objetivo (fato), enquanto o 'jogou mal' é uma opinião.",
      feedbackErro: "Se alguém achou que o time jogou bem, então 'jogou mal' é opinião."
    }
  },
  momento_ensinoVisual: {
    titulo: "A Lente da Objetividade",
    instrucao: "Veja como os adjetivos podem transformar fatos em opiniões.",
    blocos: [
      {
        tipo: "regraOrtografica",
        regra: "Fato vs. Opinião",
        explicacao: "O fato é o que pode ser provado. A opinião é o julgamento de valor sobre o fato.",
        exemplos: [
          { palavra: "Fato", destaque: "F", motivo: "O sol nasceu às 6h." },
          { palavra: "Opinião", destaque: "O", motivo: "O amanhecer foi lindo." }
        ],
        desafios: []
      }
    ]
  },
  momento03_vocabulario: {
    instrucao: "Lupa Semântica",
    cards: [
      {
        palavra: "Subjetividade",
        explicacao: "Quando algo depende do gosto ou sentimento de cada pessoa.",
        exemplo: "Dizer que azul é a melhor cor é pura subjetividade.",
        imagemUrl: "cerebro-cores"
      }
    ]
  },
  momento04_leituraGuiada: {
    instrucao: "Leia este artigo de opinião juvenil.",
    leitura: {
      titulo: "Celulares na Escola: Sim ou Não?",
      paragrafos: [
        "Atualmente, 90% dos alunos do 6º ano possuem smartphone. Isso é um fato tecnológico inevitável. Entretanto, acredito que o uso em sala é prejudicial.",
        "Na minha visão, o aparelho distrai mais do que ajuda, embora muitos professores digam que ele é uma ferramenta de pesquisa útil."
      ],
      destacar: ["acredito", "minha visão"]
    }
  },
  momento05_compreensao: {
    instrucao: "Caçador de Opiniões",
    perguntas: [
      {
        pergunta: "Quais palavras indicam que o autor está dando uma opinião?",
        opcoes: ["'Acredito' e 'Minha visão'", "'90% dos alunos'", "'Smartphone'"],
        correta: 0,
        feedbackAcerto: "Correto! Verbos de opinião e pronomes possessivos marcam o ponto de vista.",
        feedbackErro: "Procure palavras que mostrem que o autor está falando por si mesmo.",
        dica: "As palavras destacadas no texto ajudam!"
      }
    ]
  },
  momento_escrita: {
    titulo: "Seu Ponto de Vista",
    instrucao: "Escreva com clareza defendendo uma ideia.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Minha Opinião",
        comando: "Escreva um parágrafo sobre: 'Deveria haver menos lição de casa?'. Use a expressão 'Em minha opinião'.",
        checklist: [
          "Usou argumentos para convencer?",
          "Diferenciou sua ideia de um fato geral?",
          "A escrita está clara?"
        ]
      }
    ]
  },
  momento_fluencia: {
    titulo: "Voz de Argumentação",
    instrucao: "Leia este argumento com convicção.",
    texto: ["Um argumento forte não precisa de gritos, mas de fatos que comprovem que a opinião é válida."]
  },
  momento06_personagensCenario: {
    instrucao: "O Papel do Argumento",
    perguntas: [
      {
        pergunta: "O que sustenta uma boa opinião no jornalismo?",
        opcoes: ["Fatos e dados", "Apenas a vontade de ganhar", "Falar mais alto"],
        correta: 0,
        feedbackAcerto: "Sim! Uma opinião sem fatos é apenas um 'achismo'.",
        feedbackErro: "Até para opinar, precisamos de provas."
      }
    ]
  },
  momento07_sequencia: {
    instrucao: "Construindo o Texto",
    bloco: {
      instrucao: "Ordene os elementos de um artigo de opinião.",
      itens: [
        { id: "1", texto: "Apresentação do Tema" },
        { id: "2", texto: "Argumentos" },
        { id: "3", texto: "Conclusão" }
      ],
      ordemCerta: ["1", "2", "3"],
      feedbackAcerto: "Perfeito! Começa com o assunto, defende e conclui.",
      feedbackErro: "A conclusão sempre fecha o raciocínio."
    }
  },
  momento08_leituraIndependente: {
    instrucao: "Fake News e Fatos",
    leitura: {
      paragrafos: ["Checar a veracidade de um fato é a primeira regra para não espalhar notícias falsas."],
      destacar: ["veracidade"]
    },
    perguntas: [
      {
        pergunta: "O que é 'checar a veracidade'?",
        opcoes: ["Confirmar se é verdade", "Inventar uma história", "Copiar de outro lugar"],
        correta: 0,
        feedbackAcerto: "Exato! Verificar fontes é o trabalho do jornalista.",
        feedbackErro: "Checar é o mesmo que conferir."
      }
    ]
  },
  momento09_revisao: {
    pontos: ["Fato = Realidade provada", "Opinião = Ponto de vista", "Argumentação"]
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual frase abaixo é uma OPINIÃO?",
        opcoes: ["'O filme é o melhor do ano'", "'O filme dura 2 horas'", "'O filme foi feito no Brasil'"],
        correta: 0,
        feedbackAcerto: "Correto! 'Melhor' é um julgamento pessoal.",
        feedbackErro: "Duração e local de origem são fatos técnicos."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Debate em Família",
    materiais: ["Conversa"],
    passos: ["Pergunte a um adulto qual a opinião dele sobre as redes sociais."],
    registro: "Escreva um argumento que ele usou para defender o que pensa."
  },
  recompensa: {
    xp: 120,
    moedas: 60
  }
};
