import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 19 — O Grande Debate: Oratória e Ética
 * -------------------------------------------------------------
 * Aula final do 9º ano. Consolidação de todas as habilidades.
 *
 * BNCC: EF09LP04, EF09LP05
 */
export const aula19: AulaPortuguesV4 = {
  slug: "aula-19-grande-debate",
  titulo: "O Grande Debate",
  iconeTrilha: "🏛️",
  bncc: ["EF09LP04", "EF09LP05"],
  duracaoMin: 30,
  momento01_motivacao: {
    titulo: "O Momento da Verdade",
    historia: "Você percorreu todo o caminho. Agora, o laboratório abre suas portas para o mundo real. É hora de usar sua voz, sua lógica e sua ética para defender o que você acredita no Grande Debate Final.",
    imagemUrl: "/assets/portugues/debate-final.png"
  },
  momento02_previsao: {
    instrucao: "Checklist de Orador.",
    bloco: {
      titulo: "Protocolo de Performance",
      pergunta: "Qual é o elemento mais importante em um debate ético?",
      hipoteses: [
        { texto: "Respeitar o oponente e usar evidências reais" },
        { texto: "Falar mais alto para não ser interrompido" },
        { texto: "Usar palavras difíceis para parecer superior" }
      ],
      respostaCerta: 0,
      feedbackAcerto: "Nível mestre! Ética e evidência são a base do diálogo democrático.",
      feedbackErro: "Lembre-se: vencer um debate não é humilhar, é convencer com a razão."
    }
  },
  momento03_vocabulario: {
    instrucao: "Vocabulário de Liderança",
    cards: [
      { palavra: "Oratória", explicacao: "A arte de falar em público com eloquência.", exemplo: "Sua oratória cativou todos os ouvintes no auditório." },
      { palavra: "Réplica", explicacao: "Resposta dada ao argumento do oponente.", exemplo: "O debatedor preparou uma réplica baseada em dados estatísticos." }
    ]
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Discurso Histórico",
    leitura: {
      titulo: "O Poder da Palavra",
      paragrafos: [
        "Nenhum muro é tão alto que não possa ser derrubado por uma ideia cuja hora chegou. A força do argumento é maior que o argumento da força.",
        "Portanto, falem com clareza, ouçam com atenção e ajam com integridade. O futuro é construído pelas vozes que não se calam diante da injustiça."
      ],
      destacar: ["força do argumento", "argumento da força"]
    }
  },
  momento05_compreensao: {
    instrucao: "Check de Liderança",
    perguntas: [
      {
        pergunta: "O que significa 'a força do argumento é maior que o argumento da força'?",
        opcoes: ["Que a razão vence a violência", "Que quem é mais forte ganha o debate", "Que argumentos não servem para nada"],
        correta: 0,
        feedbackAcerto: "Análise profunda! A lógica e a ética devem prevalecer sobre a força bruta.",
        feedbackErro: "Pense na diferença entre convencer e obrigar."
      }
    ]
  },
  momento06_personagensCenario: {
    instrucao: "Postura e Voz",
    perguntas: [
      {
        pergunta: "Qual deve ser a postura de um orador do 9º ano?",
        opcoes: ["Agressiva e intimidadora", "Confiante, respeitosa e fundamentada", "Tímida e insegura"],
        correta: 1,
        feedbackAcerto: "Perfeito. O equilíbrio entre confiança e respeito é a chave.",
        feedbackErro: "Pense no perfil de um líder que as pessoas querem ouvir."
      }
    ]
  },
  momento07_sequencia: {
    instrucao: "Engrenagem do Discurso",
    bloco: {
      instrucao: "Ordene as fases de um debate",
      itens: [
        { id: "1", texto: "Réplica e Tréplica" },
        { id: "2", texto: "Abertura e Tese" },
        { id: "3", texto: "Argumentação e Provas" }
      ],
      ordemCerta: ["2", "3", "1"],
      feedbackAcerto: "Protocolo de debate validado!",
      feedbackErro: "Primeiro apresentamos a ideia, depois provamos e então respondemos ao outro."
    }
  },
  momento08_leituraIndependente: {
    instrucao: "Último Scan",
    leitura: {
      paragrafos: ["A democracia respira através do debate saudável. Quem não aceita o contraditório, não entende a liberdade."],
    },
    perguntas: [
      {
        pergunta: "Qual é o valor central defendido nesta frase?",
        opcoes: ["A liberdade de expressão e o respeito à divergência", "A imposição de uma única verdade", "O fim de todos os debates"],
        correta: 0,
        feedbackAcerto: "Sim! O contraditório é essencial para uma sociedade livre.",
        feedbackErro: "Pense no que significa 'aceitar o contraditório'."
      }
    ]
  },
  momento09_revisao: {
    pontos: ["Oratória exige treino e ética", "Ouvir o oponente é parte do debate", "A evidência é o combustível da lógica"]
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Você está pronto para os desafios do Ensino Médio?",
        opcoes: ["Sim, meu radar crítico está calibrado!", "Ainda estou em processamento", "Não sei usar meus argumentos"],
        correta: 0,
        feedbackAcerto: "Excelente! Missão cumprida no 9º Ano.",
        feedbackErro: "Confie na sua jornada. Você aprendeu muito até aqui!"
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "O Orador da Família",
    materiais: ["Um tema importante para a casa"],
    passos: ["Organize um 'mini-debate' em casa", "Defenda seu ponto de vista com calma e lógica", "Ouça a opinião dos outros e responda com respeito"],
    registro: "Foto da 'mesa de debate' da sua família"
  },
  recompensa: { xp: 500, moedas: 200 }
};
