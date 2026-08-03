import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 1 — Protocolo de Persuasão: O Texto Argumentativo
 * -------------------------------------------------------------
 * Introdução ao 8º ano. Foco em tese e estrutura lógica.
 *
 * BNCC: EF08LP01, EF08LP02
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-protocolo-persuasao",
  titulo: "Protocolo de Persuasão",
  iconeTrilha: "🧠",
  bncc: ["EF08LP01", "EF08LP02"],
  duracaoMin: 20,
  momento01_motivacao: {
    titulo: "Iniciando Scan de Lógica",
    historia: "Bem-vindo ao Laboratório de Argumentação. No 8º ano, a linguagem deixa de ser apenas informação e passa a ser PODER. Vamos aprender a transformar ideias em argumentos sólidos que ninguém pode derrubar.",
    imagemUrl: "/assets/portugues/lab-logo.png"
  },
  momento02_previsao: {
    instrucao: "Analise o briefing",
    bloco: {
      titulo: "O que é Argumentar?",
      pergunta: "Argumentar não é 'brigar'. É usar a lógica para provar um ponto de vista. Baseado nisso, qual o objetivo de um argumento?",
      hipoteses: [
        { texto: "Convencer ou influenciar o receptor" },
        { texto: "Apenas ocupar espaço no banco de dados" },
        { texto: "Esconder a verdade do analista" }
      ],
      respostaCerta: 0,
      feedbackAcerto: "Radar calibrado. Você entendeu que argumentar é uma ação estratégica.",
      feedbackErro: "Analise o que alguém ganha ao provar um ponto."
    }
  },
  momento03_vocabulario: {
    instrucao: "Termos do Laboratório",
    cards: [
      { palavra: "Tese", explicacao: "A ideia principal que você defende.", exemplo: "Minha tese é que o lazer melhora o estudo." },
      { palavra: "Persuasão", explicacao: "A arte de convencer alguém.", exemplo: "Ele usou a persuasão para mudar o voto do grupo." }
    ]
  },
  momento04_leituraGuiada: {
    instrucao: "Escaneando o Artigo",
    leitura: {
      titulo: "O Futuro das Cidades",
      paragrafos: [
        "A tecnologia deve servir à humanidade, não o contrário. Nas smart cities, a conexão rápida permite que as pessoas passem menos tempo no trânsito.",
        "Portanto, investir em infraestrutura digital é, na verdade, investir em qualidade de vida para todos os cidadãos."
      ],
      destacar: ["smart cities", "infraestrutura digital"]
    }
  },
  momento05_compreensao: {
    instrucao: "Check de Dados",
    perguntas: [
      {
        pergunta: "Qual é a tese defendida no texto?",
        opcoes: ["Tecnologia é ruim", "Smart cities dão mais qualidade de vida", "Trânsito é bom"],
        correta: 1,
        feedbackAcerto: "Isso mesmo! O autor defende o investimento em cidades inteligentes.",
        feedbackErro: "Volte ao texto. O foco é como a tecnologia ajuda a ganhar tempo."
      }
    ]
  },
  momento06_personagensCenario: {
    instrucao: "Vozes do Texto",
    perguntas: [
      {
        pergunta: "Quem é o público-alvo deste artigo?",
        opcoes: ["Crianças pequenas", "Cidadãos e governantes", "Cientistas da NASA"],
        correta: 1,
        feedbackAcerto: "Correto! O texto fala sobre a vida na cidade.",
        feedbackErro: "Pense em quem vive nas cidades e toma decisões sobre elas."
      }
    ]
  },
  momento07_sequencia: {
    instrucao: "Ordem Lógica",
    bloco: {
      instrucao: "Ordene os elementos do argumento",
      itens: [
        { id: "1", texto: "Conclusão (Fechamento)" },
        { id: "2", texto: "Tese (Ideia Central)" },
        { id: "3", texto: "Argumentos (Provas)" }
      ],
      ordemCerta: ["2", "3", "1"],
      feedbackAcerto: "Engrenagens alinhadas!",
      feedbackErro: "Primeiro a tese, depois as provas, e por fim o fechamento."
    }
  },
  momento08_leituraIndependente: {
    instrucao: "Análise Solo",
    leitura: {
      paragrafos: ["Um bom debatedor ouve o outro lado para encontrar pontos fracos e fortalecer sua própria posição."],
    },
    perguntas: [
      {
        pergunta: "O que fortalece uma posição no debate?",
        opcoes: ["Ignorar o outro", "Ouvir o outro lado", "Falar mais alto"],
        correta: 1,
        feedbackAcerto: "Sim! Entender o oponente é fundamental.",
        feedbackErro: "Lembre-se do que o texto disse sobre 'ouvir o outro'."
      }
    ]
  },
  momento09_revisao: {
    pontos: ["Tese é a ideia central", "Argumento é a prova lógica", "Persuasão é convencer com ética"]
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Se a tese é 'Esporte é saúde', qual argumento combina?",
        opcoes: ["Gosto de futebol", "Atividade física previne doenças", "A bola é redonda"],
        correta: 1,
        feedbackAcerto: "Lógica perfeita!",
        feedbackErro: "Um argumento deve provar por que esporte é saúde."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "O Grande Debate em Casa",
    materiais: ["Papel", "Caneta"],
    passos: ["Escolha um tema (ex: hora de dormir)", "Escreva sua tese e 2 argumentos", "Apresente para sua família"],
    registro: "Foto do seu roteiro de argumentos"
  },
  recompensa: { xp: 100, moedas: 50 }
};
