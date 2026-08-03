import { AulaPortuguesV4 } from "../../types";

export const aula2: AulaPortuguesV4 = {
  slug: "a-reportagem-em-profundidade",
  titulo: "A Reportagem em Profundidade",
  iconeTrilha: "📄",
  bncc: ["EF06LP01", "EF06LP02"],
  duracaoMin: 20,
  momento01_motivacao: {
    titulo: "Além da Notícia",
    historia: "Se a notícia é o fato rápido, a reportagem é o mergulho profundo. Vamos descobrir como os repórteres investigam os detalhes de um acontecimento?",
    imagemUrl: "reporter-investigativo"
  },
  momento02_previsao: {
    instrucao: "O que diferencia uma notícia de uma reportagem?",
    bloco: {
      titulo: "Análise de Título",
      pergunta: "Qual destes títulos parece ser de uma reportagem detalhada?",
      hipoteses: [
        { texto: "'Choveu ontem em Curitiba'" },
        { texto: "'A Crise hídrica e o futuro das cidades brasileiras'" }
      ],
      respostaCerta: 1,
      feedbackAcerto: "Excelente. Reportagens costumam abordar temas amplos e complexos.",
      feedbackErro: "O primeiro é apenas um fato rápido (notícia)."
    }
  },
  momento_ensinoVisual: {
    titulo: "Diferenças Fundamentais",
    instrucao: "Compare a velocidade e a profundidade dos gêneros jornalísticos.",
    blocos: [
      {
        tipo: "regraOrtografica",
        regra: "Notícia vs. Reportagem",
        explicacao: "A notícia informa o 'agora'. A reportagem explica o 'porquê' e as 'consequências'.",
        exemplos: [
          { palavra: "Notícia", destaque: "N", motivo: "Imediata e objetiva." },
          { palavra: "Reportagem", destaque: "R", motivo: "Analítica e detalhada." }
        ],
        desafios: []
      }
    ]
  },
  momento03_vocabulario: {
    instrucao: "Lupa do Repórter",
    cards: [
      {
        palavra: "Infográfico",
        explicacao: "Desenhos e gráficos que ajudam a explicar dados difíceis em uma reportagem.",
        exemplo: "A reportagem usou um infográfico para mostrar o aumento da reciclagem.",
        imagemUrl: "infografico-teen"
      }
    ]
  },
  momento04_leituraGuiada: {
    instrucao: "Leia este trecho de reportagem científica.",
    leitura: {
      titulo: "O Futuro da Energia Solar",
      paragrafos: [
        "Enquanto as contas de luz sobem, especialistas apontam que o Brasil tem o maior potencial solar do mundo. Contudo, o custo dos painéis ainda é um desafio para famílias de baixa renda.",
        "Dados do Ministério de Minas e Energia mostram que o uso de placas fotovoltaicas cresceu 40% no último ano, impulsionado por novos incentivos fiscais."
      ],
      destacar: ["solar", "fotovoltaicas"]
    }
  },
  momento05_compreensao: {
    instrucao: "Análise Técnica",
    perguntas: [
      {
        pergunta: "O texto apresenta dados oficiais? De onde?",
        opcoes: ["Sim, do Ministério de Minas e Energia", "Não, são apenas opiniões", "Sim, da companhia de luz local"],
        correta: 0,
        feedbackAcerto: "Perfeito! A reportagem utiliza fontes oficiais para dar credibilidade.",
        feedbackErro: "Procure o nome do órgão mencionado no segundo parágrafo.",
        dica: "O Ministério é citado como fonte dos dados."
      }
    ]
  },
  momento_escrita: {
    titulo: "Planejando a Pauta",
    instrucao: "Toda reportagem nasce de uma pauta (planejamento).",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Pauta de Investigação",
        comando: "Escolha um problema da sua escola e escreva 3 perguntas que você faria para o diretor em uma entrevista.",
        checklist: [
          "As perguntas são abertas (não são apenas 'sim' ou 'não')?",
          "Abordam a causa do problema?",
          "São respeitosas e claras?"
        ]
      }
    ]
  },
  momento_fluencia: {
    titulo: "Dicção Profissional",
    instrucao: "Leia este lead de reportagem com entonação firme.",
    texto: ["O sol que aquece as manhãs brasileiras pode ser a chave para uma economia mais limpa e barata no futuro próximo."]
  },
  momento06_personagensCenario: {
    instrucao: "Identificando Fontes",
    perguntas: [
      {
        pergunta: "Quem são os especialistas citados indiretamente?",
        opcoes: ["Pessoas que estudam energia", "Crianças da escola", "Vendedores de painéis"],
        correta: 0,
        feedbackAcerto: "Isso. Especialistas são fontes de autoridade no assunto.",
        feedbackErro: "Especialista é quem domina um conhecimento técnico."
      }
    ]
  },
  momento07_sequencia: {
    instrucao: "Caminho da Investigação",
    bloco: {
      instrucao: "Qual a ordem lógica para criar uma reportagem?",
      itens: [
        { id: "1", texto: "Pesquisa e Pauta" },
        { id: "2", texto: "Entrevistas" },
        { id: "3", texto: "Escrita Final" }
      ],
      ordemCerta: ["1", "2", "3"],
      feedbackAcerto: "Exato! Planejar, coletar e depois escrever.",
      feedbackErro: "Não dá para escrever sem antes pesquisar e entrevistar."
    }
  },
  momento08_leituraIndependente: {
    instrucao: "O Papel do Entrevistado",
    leitura: {
      paragrafos: ["As aspas (' ') em uma reportagem indicam a fala direta de uma pessoa entrevistada."],
      destacar: ["aspas"]
    },
    perguntas: [
      {
        pergunta: "Para que servem as aspas no jornalismo?",
        opcoes: ["Para marcar a fala de alguém", "Para enfeitar o texto", "Para indicar que o repórter mentiu"],
        correta: 0,
        feedbackAcerto: "Correto! É o recurso para o 'discurso direto'.",
        feedbackErro: "As aspas trazem a voz da fonte para o papel."
      }
    ]
  },
  momento09_revisao: {
    pontos: ["Dados e Estatísticas", "Fontes Oficiais", "Uso de Aspas"]
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual elemento abaixo é típico de uma reportagem e raro em uma notícia curta?",
        opcoes: ["Entrevistas detalhadas", "A data de hoje", "O nome do jornal"],
        correta: 0,
        feedbackAcerto: "Sim! A profundidade vem do diálogo com as fontes.",
        feedbackErro: "Notícias curtas raramente têm espaço para entrevistas longas."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "O Repórter de Bairro",
    materiais: ["Caderno e Caneta"],
    passos: ["Descubra uma curiosidade histórica sobre sua rua ou bairro."],
    registro: "Escreva um parágrafo explicando o que você descobriu."
  },
  recompensa: {
    xp: 120,
    moedas: 60
  }
};
