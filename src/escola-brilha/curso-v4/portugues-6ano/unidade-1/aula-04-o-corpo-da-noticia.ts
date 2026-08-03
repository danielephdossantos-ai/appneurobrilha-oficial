import { AulaPortuguesV4 } from "../../types";

export const aula4: AulaPortuguesV4 = {
  slug: "o-corpo-da-noticia",
  titulo: "O Corpo da Notícia",
  iconeTrilha: "🏛️",
  bncc: ["EF06LP01", "EF06LP02"],
  duracaoMin: 20,
  momento01_motivacao: {
    titulo: "O Recheio da Informação",
    historia: "Já sabemos o que é o lide (o começo). Mas o que vem depois? Vamos aprender a preencher o corpo da notícia com detalhes importantes?",
    imagemUrl: "jornal-aberto"
  },
  momento02_previsao: {
    instrucao: "Imagine que você lê apenas o lide.",
    bloco: {
      titulo: "Fome de Detalhes",
      pergunta: "Se o lide diz 'Houve um acidente', o que o corpo da notícia deve explicar?",
      hipoteses: [
        { texto: "Como aconteceu e quem estava lá" },
        { texto: "Apenas repetir que houve o acidente" }
      ],
      respostaCerta: 0,
      feedbackAcerto: "Isso. O corpo aprofunda o que o lide apenas anunciou.",
      feedbackErro: "Repetir a mesma coisa não traz informação nova."
    }
  },
  momento_ensinoVisual: {
    titulo: "A Pirâmide em Detalhes",
    instrucao: "Veja como a pirâmide invertida se distribui no texto.",
    blocos: [
      {
        tipo: "regraOrtografica",
        regra: "Hierarquia da Informação",
        explicacao: "Os parágrafos seguintes ao lide devem trazer os detalhes secundários e contextos.",
        exemplos: [
          { palavra: "Topo", destaque: "T", motivo: "Lide (Essencial)" },
          { palavra: "Base", destaque: "B", motivo: "Corpo (Complementar)" }
        ],
        desafios: []
      }
    ]
  },
  momento03_vocabulario: {
    instrucao: "Lupa Estrutural",
    cards: [
      {
        palavra: "Contexto",
        explicacao: "As circunstâncias que ajudam a entender por que algo aconteceu.",
        exemplo: "O repórter explicou o contexto da crise para os leitores.",
        imagemUrl: "lupa-contexto"
      }
    ]
  },
  momento04_leituraGuiada: {
    instrucao: "Analise a continuação da notícia sobre robótica.",
    leitura: {
      titulo: "Competição de Robôs (Continuação)",
      paragrafos: [
        "A equipe vencedora, do interior de Minas Gerais, trabalhou durante seis meses no projeto. O protótipo utiliza inteligência artificial para desviar de obstáculos.",
        "Segundo o professor orientador, o maior desafio foi a programação dos sensores de movimento, que precisavam de precisão milimétrica."
      ],
      destacar: ["protótipo", "sensores"]
    }
  },
  momento05_compreensao: {
    instrucao: "Extraindo Detalhes",
    perguntas: [
      {
        pergunta: "De onde é a equipe vencedora e quanto tempo eles levaram?",
        opcoes: ["Minas Gerais, seis meses", "São Paulo, um ano", "Brasília, duas semanas"],
        correta: 0,
        feedbackAcerto: "Perfeito! Essas informações complementares recheiam o corpo da notícia.",
        feedbackErro: "Releia o primeiro parágrafo deste novo trecho.",
        dica: "Minas Gerais é o estado citado."
      }
    ]
  },
  momento_escrita: {
    titulo: "Expandindo a Notícia",
    instrucao: "Dê vida aos detalhes.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "O 'Como' e o 'Porquê'",
        comando: "Escolha uma notícia da sua escola (ex: 'Time ganhou o jogo') e escreva um parágrafo detalhando como foi a jogada final.",
        checklist: [
          "Citou nomes de pessoas envolvidas?",
          "Explicou a ordem dos acontecimentos?",
          "Manteve o foco no assunto?"
        ]
      }
    ]
  },
  momento_fluencia: {
    titulo: "Leitura de Detalhes",
    instrucao: "Leia com atenção aos nomes próprios e números.",
    texto: ["A equipe mineira superou expectativas ao utilizar componentes reciclados em sua estrutura final de alumínio."]
  },
  momento06_personagensCenario: {
    instrucao: "Fontes no Corpo",
    perguntas: [
      {
        pergunta: "Quem deu o depoimento sobre a programação dos sensores?",
        opcoes: ["O professor orientador", "O juiz da prova", "O público"],
        correta: 0,
        feedbackAcerto: "Exato! Ouvir especialistas ou envolvidos traz autoridade ao corpo do texto.",
        feedbackErro: "Procure quem foi citado no segundo parágrafo."
      }
    ]
  },
  momento07_sequencia: {
    instrucao: "Anatomia Jornalística",
    bloco: {
      instrucao: "Ordene as partes da notícia.",
      itens: [
        { id: "1", texto: "Manchete" },
        { id: "2", texto: "Lide" },
        { id: "3", texto: "Corpo da Notícia" }
      ],
      ordemCerta: ["1", "2", "3"],
      feedbackAcerto: "Certinho! Título, começo e desenvolvimento.",
      feedbackErro: "O corpo sempre vem depois do lide."
    }
  },
  momento08_leituraIndependente: {
    instrucao: "A Pirâmide em Jornais",
    leitura: {
      paragrafos: ["Em jornais impressos, o corpo da notícia pode ser cortado do fim para o começo se faltar espaço, sem perder o essencial."],
      destacar: ["essencial"]
    },
    perguntas: [
      {
        pergunta: "Por que as informações mais importantes vêm primeiro?",
        opcoes: ["Para que o leitor saiba o principal logo de cara", "Porque os jornalistas são preguiçosos", "Porque é proibido escrever muito no fim"],
        correta: 0,
        feedbackAcerto: "Isso! Facilita a leitura rápida e permite cortes de espaço.",
        feedbackErro: "Pense na utilidade para o leitor que tem pouco tempo."
      }
    ]
  },
  momento09_revisao: {
    pontos: ["Corpo = Detalhes", "Contextualização", "Fontes e Depoimentos"]
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual pergunta o corpo da notícia costuma responder melhor que o lide?",
        opcoes: ["Como o fato ocorreu?", "Quando foi?", "Qual o título?"],
        correta: 0,
        feedbackAcerto: "Exato! O 'Como' exige espaço para ser explicado.",
        feedbackErro: "O 'Quando' geralmente já está no lide."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Detetive de Detalhes",
    materiais: ["Um jornal ou site de notícias"],
    passos: ["Encontre uma notícia e identifique onde começa o corpo do texto."],
    registro: "Escreva uma informação que você só descobriu no corpo da notícia (não estava no título)."
  },
  recompensa: {
    xp: 120,
    moedas: 60
  }
};
