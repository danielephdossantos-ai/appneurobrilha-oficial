import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 12 — Gêneros de Divulgação Científica: O Relatório de Descoberta
 * BNCC: EF67LP20, EF67LP22
 */
export const aula12: AulaPortuguesV4 = {
  slug: "aula-12-divulgacao-cientifica",
  titulo: "Divulgação Científica",
  iconeTrilha: "🧪",
  bncc: ["EF67LP20"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Traduzindo a Ciência: Do Lab para o Mundo",
    historia: "Analista, a ciência produz dados incríveis, mas muitas vezes eles estão trancados em códigos que só especialistas entendem. O gênero de DIVULGAÇÃO CIENTÍFICA é a ponte. Ele traduz o complexo para o simples, sem perder a verdade. Hoje vamos aprender a decodificar artigos que explicam como o mundo (e o Labirinto) funciona.",
    imagemUrl: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing Científico: Como explicar o invisível?",
    bloco: {
      titulo: "Análise de Artigo",
      capaImagemUrl: "",
      pistas: [
        { nome: "Usa linguagem técnica, mas explicada para leigos.", imagemUrl: "" },
        { nome: "Baseia-se em evidências, testes e experimentos.", imagemUrl: "" }
      ],
      recado: {
        rotulo: "Protocolo de Tradução",
        icone: "🧪",
        linhas: [
          "  [ DADO CIENTÍFICO ]      ",
          "  'H2O em estado sólido'   ",
          "          ↓                ",
          "  [ DIVULGAÇÃO ]           ",
          "  'O gelo ajuda a esfriar' ",
          "                           ",
          "  DICA: Use analogias para ",
          "  explicar o difícil.      "
        ],
        estilo: "cartaz",
      },
      pergunta: "Qual o maior desafio de um texto de divulgação científica?",
      hipoteses: [
        { texto: "Explicar temas complexos de forma que todos entendam" },
        { texto: "Inventar novas fórmulas matemáticas" },
        { texto: "Escrever o texto mais difícil possível" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Perfeito! A clareza é o objetivo principal aqui.",
      feedbackErro: "Se ninguém entender, a ciência continua trancada.",
      dica: "É sobre traduzir o complexo.",
    },
  },
  momento03_vocabulario: {
    cards: [
      { palavra: "Divulgação", explicacao: "O ato de tornar um conhecimento público e acessível a todos.", exemplo: "O canal de ciência faz uma ótima divulgação.", imagemUrl: "" },
      { palavra: "Evidência", explicacao: "Dados ou fatos que provam que uma teoria é verdadeira.", exemplo: "Os testes trouxeram evidências da eficácia do remédio.", imagemUrl: "" },
    ],
    instrucao: "Dicionário de Ativos",
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de arquivo.",
    leitura: {
      titulo: "Como os Robôs Aprendem?",
      imagemUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400",
      destacar: ["algoritmos", "neurônios", "analogia"],
      paragrafos: [
        "Para entender como uma IA aprende, imagine o cérebro humano. Nós temos neurônios que se conectam. Os robôs usam 'neurônios digitais' chamados algoritmos.",
        "Quando o robô erra uma tarefa, o sistema avisa: 'Caminho errado'. Ele então tenta uma nova conexão até acertar. É um processo de tentativa e erro, igual a um estudante.",
        "Essas descobertas são publicadas em revistas de ciência para que o mundo entenda que os robôs não são mágicos, são matemática aplicada."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de dados.",
    perguntas: [
      {
        pergunta: "Por que o texto compara o robô a um estudante?",
        opcoes: ["Para usar uma analogia que facilite o entendimento", "Porque o robô vai para a escola", "Porque o robô gosta de ler"],
        correta: 0,
        feedbackAcerto: "Exato! Analogias são ferramentas poderosas de ensino.",
        feedbackErro: "Compare a função da comparação no texto.",
        ondeEstaNoTexto: "É um processo de tentativa e erro, igual a um estudante.",
        dica: "É uma comparação explicativa.",
        reensino: "A analogia aproxima o desconhecido de algo que já conhecemos.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Explicação",
    bloco: {
      instrucao: "Qual a melhor ordem para explicar uma descoberta científica?",
      itens: [
        { id: "1", texto: "Apresentar o problema ou curiosidade.", imagemUrl: "" },
        { id: "2", texto: "Explicar como os cientistas testaram.", imagemUrl: "" },
        { id: "3", texto: "Mostrar o resultado da descoberta.", imagemUrl: "" },
        { id: "4", texto: "Usar uma analogia para fixar o conceito.", imagemUrl: "" }
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Roteiro científico aprovado!",
      feedbackErro: "Comece pela curiosidade que atrai o leitor.",
      dica: "A curiosidade vem primeiro.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma.",
    leitura: {
      titulo: "O Mistério das Estrelas Cadentes",
      imagemUrl: "",
      destacar: ["atmosfera", "atrito", "pedras"],
      paragrafos: [
        "Estrelas cadentes não são estrelas. Elas são pequenos pedaços de pedra espacial.",
        "Ao entrarem na nossa atmosfera em alta velocidade, o atrito com o ar as aquece tanto que elas brilham.",
        "É como esfregar as mãos rápido: elas esquentam pelo mesmo motivo, o atrito."
      ],
    },
    perguntas: [
      {
        pergunta: "Qual analogia o texto usa para explicar o calor da estrela cadente?",
        opcoes: ["Esfregar as mãos", "Acender uma lâmpada", "Um forno micro-ondas"],
        correta: 0,
        feedbackAcerto: "Perfeito! Simples e eficaz.",
        feedbackErro: "Releia o último parágrafo.",
        dica: "Pense nas mãos.",
        reensino: "O atrito gera calor, e a comparação com as mãos torna o conceito físico fácil de imaginar."
      }
    ],
  },
  momento09_revisao: {
    pontos: [
      "Divulgação científica traduz o complexo para o público geral.",
      "Usa analogias, ilustrações e linguagem clara.",
      "Baseia-se sempre em fatos e evidências comprovadas."
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "A divulgação científica pode conter opiniões pessoais do autor?",
        opcoes: ["Não, deve ser baseada apenas em fatos e dados", "Sim, pode inventar o que quiser", "Apenas se o autor for famoso"],
        correta: 0,
        feedbackAcerto: "Análise técnica correta. Ciência é dado, não opinião.",
        feedbackErro: "O que garante que o texto seja científico?",
        ondeEstaNoTexto: "Baseia-se em evidências, testes e experimentos.",
        dica: "Foco nos dados.",
        reensino: "A objetividade é um pilar da escrita científica.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Explicador Científico",
    materiais: ["Curiosidade"],
    passos: [
      "Pesquisem juntos: 'Por que o céu é azul?' ou 'Por que as plantas são verdes?'.",
      "Tentem explicar um para o outro usando uma analogia (uma comparação com algo simples).",
      "Vejam se a explicação ficou clara."
    ],
    registro: "Escreva qual foi a analogia que vocês usaram.",
  },
  recompensa: {
    xp: 700,
    moedas: 350,
  },
};
