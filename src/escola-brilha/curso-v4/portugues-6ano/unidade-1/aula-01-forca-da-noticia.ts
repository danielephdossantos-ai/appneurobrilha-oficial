import { AulaPortuguesV4 } from "../../types";

export const aula1: AulaPortuguesV4 = {
  slug: "a-forca-da-noticia",
  titulo: "A Força da Notícia",
  iconeTrilha: "📰",
  bncc: ["EF06LP01", "EF06LP02"],
  duracaoMin: 20,
  momento01_motivacao: {
    titulo: "Extra! Extra!",
    historia: "No 6º ano, vamos mergulhar no mundo do jornalismo. Vamos investigar como as notícias são construídas?",
    imagemUrl: "jornal-moderno"
  },
  momento02_previsao: {
    instrucao: "Sobre o que essa notícia vai falar?",
    bloco: {
      titulo: "Notícias de Marte",
      pergunta: "Pela imagem, qual é o assunto?",
      hipoteses: [
        { texto: "Espaço e Marte" },
        { texto: "Viagem de férias" }
      ],
      respostaCerta: 0,
      feedbackAcerto: "Isso mesmo! O contexto visual ajuda na previsão.",
      feedbackErro: "Observe a imagem principal."
    }
  },
  momento_ensinoVisual: {
    titulo: "O Mapa da Notícia",
    instrucao: "Veja como os elementos se organizam em um jornal digital.",
    blocos: [
      {
        tipo: "regraOrtografica",
        regra: "Estrutura da Notícia",
        explicacao: "A pirâmide invertida organiza a informação da mais importante para os detalhes.",
        exemplos: [
          { palavra: "Manchete", destaque: "M", motivo: "Título principal" },
          { palavra: "Lide", destaque: "L", motivo: "Primeiro parágrafo" }
        ],
        desafios: []
      }
    ]
  },
  momento03_vocabulario: {
    instrucao: "Lupa do Investigador",
    cards: [
      {
        palavra: "Lide",
        explicacao: "O primeiro parágrafo de uma notícia.",
        exemplo: "O lide da reportagem explicava quem venceu o torneio.",
        imagemUrl: "lupa-teen"
      }
    ]
  },
  momento04_leituraGuiada: {
    instrucao: "Leia esta notícia com atenção.",
    leitura: {
      titulo: "O Festival de Robótica",
      paragrafos: [
        "No último domingo, em Brasília, o festival de robótica reuniu 500 estudantes para uma competição épica.",
        "Os jovens cientistas apresentaram robôs capazes de realizar tarefas complexas, como resgate em desastres."
      ],
      destacar: ["Brasília", "robótica"]
    }
  },
  momento05_compreensao: {
    instrucao: "Identificando o Lide",
    perguntas: [
      {
        pergunta: "Qual trecho da notícia responde 'Onde' e 'Quando'?",
        opcoes: ["No último domingo, em Brasília", "500 estudantes", "Festival de robótica"],
        correta: 0,
        feedbackAcerto: "Correto! Onde indica o local (Brasília) e Quando o tempo (domingo).",
        feedbackErro: "Tente novamente. Procure as informações de tempo e lugar.",
        dica: "Brasília é o lugar, domingo é o tempo."
      }
    ]
  },
  momento_escrita: {
    titulo: "Sua Primeira Manchete",
    instrucao: "Crie uma manchete impactante.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Manchete em Marte",
        comando: "Crie uma manchete sobre a descoberta de água em Marte.",
        checklist: [
          "O verbo está no presente?",
          "É direta e objetiva?",
          "Desperta curiosidade?"
        ]
      }
    ]
  },
  momento_fluencia: {
    titulo: "Fluência Jornalística",
    instrucao: "Leia em voz alta com clareza.",
    texto: ["O jornalismo exige clareza e objetividade. Ao ler uma notícia, o profissional busca informar sem rodeios."]
  },
  momento06_personagensCenario: {
    instrucao: "Análise do Cenário",
    perguntas: [
      {
        pergunta: "Onde se passa o festival?",
        opcoes: ["Brasília", "São Paulo", "Rio de Janeiro"],
        correta: 0,
        feedbackAcerto: "Exato!",
        feedbackErro: "Releia o primeiro parágrafo."
      }
    ]
  },
  momento07_sequencia: {
    instrucao: "Ordene a pirâmide invertida.",
    bloco: {
      instrucao: "Do mais importante para o menos importante.",
      itens: [
        { id: "1", texto: "Manchete" },
        { id: "2", texto: "Lide" },
        { id: "3", texto: "Corpo" }
      ],
      ordemCerta: ["1", "2", "3"],
      feedbackAcerto: "Perfeito!",
      feedbackErro: "Lembre-se: o topo é o mais importante."
    }
  },
  momento08_leituraIndependente: {
    instrucao: "Sua vez de investigar.",
    leitura: {
      paragrafos: ["As notícias digitais são atualizadas em tempo real."],
      destacar: ["digital"]
    },
    perguntas: [
      {
        pergunta: "Qual a vantagem do jornal digital?",
        opcoes: ["Atualização rápida", "Mais papel", "Cheiro de tinta"],
        correta: 0,
        feedbackAcerto: "Isso mesmo!",
        feedbackErro: "Pense na velocidade da internet."
      }
    ]
  },
  momento09_revisao: {
    pontos: ["Pirâmide invertida", "Lide", "Manchete"]
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que é o lide?",
        opcoes: ["Primeiro parágrafo", "A foto", "O final"],
        correta: 0,
        feedbackAcerto: "Correto!",
        feedbackErro: "É a introdução que responde as perguntas básicas."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Jornalista em Casa",
    materiais: ["Celular ou Papel"],
    passos: ["Entreviste alguém sobre uma notícia do dia."],
    registro: "Escreva a manchete da entrevista."
  },
  recompensa: {
    xp: 100,
    moedas: 50
  }
};
