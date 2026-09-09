import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 8 — Crônica: A Narrativa do Cotidiano
 * BNCC: EF67LP28
 */
export const aula08: AulaPortuguesV4 = {
  slug: "aula-08-cronica-cotidiano",
  titulo: "Crônica: O Cotidiano em Prosa",
  iconeTrilha: "☕",
  bncc: ["EF67LP28"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "A Observação do Labirinto: A Crônica",
    historia: "Analista, o Labirinto não é feito apenas de fatos frios. Ele é feito de PESSOAS. A Crônica é o gênero que observa o dia a dia e encontra beleza, ironia ou humor em coisas simples. Um café, um trânsito ou um vizinho esquecido. Hoje vamos aprender a transformar a sua rotina em uma narrativa envolvente.",
    imagemUrl: "https://images.unsplash.com/photo-1512106370425-4518776822c5?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing de Observação: O que ver?",
    bloco: {
      titulo: "Monitoramento de Rotina",
      capaImagemUrl: "",
      pistas: [
        { nome: "A crônica transforma o comum em algo especial.", imagemUrl: "" },
        { nome: "Ela geralmente é curta e publicada em jornais ou blogs.", imagemUrl: "" }
      ],
      recado: {
        rotulo: "Protocolo de Observação",
        icone: "☕",
        linhas: [
          "  [ ELEMENTOS DE CRÔNICA ]",
          "  1. O Fato Simples (Ex: fila)",
          "  2. O Olhar do Cronista",
          "  3. Reflexão ou Humor",
          "  ",
          "  DICA: A crônica não ",
          "  precisa de grandes heróis."
        ],
        estilo: "cartaz",
      },
      pergunta: "Qual é o foco principal de uma crônica?",
      hipoteses: [
        { texto: "Narrar fatos do cotidiano sob um olhar pessoal" },
        { texto: "Relatar eventos históricos globais" },
        { texto: "Vender produtos técnicos" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Correto. O cronista é um observador da vida comum.",
      feedbackErro: "Pense em algo que acontece todo dia.",
      dica: "É sobre a vida comum.",
    },
  },
  momento03_vocabulario: {
    cards: [
      { palavra: "Cotidiano", explicacao: "Tudo o que faz parte do nosso dia a dia, da rotina.", exemplo: "O café da manhã faz parte do nosso cotidiano.", imagemUrl: "" },
      { palavra: "Narrativa", explicacao: "A forma como contamos a história, incluindo o que aconteceu e quem participou.", exemplo: "A narrativa do cronista foi muito engraçada.", imagemUrl: "" },
    ],
    instrucao: "Dicionário de Ativos",
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de arquivo.",
    leitura: {
      titulo: "O Olhar do Cronista",
      imagemUrl: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?auto=format&fit=crop&q=80&w=400",
      destacar: ["observação", "humor", "reflexão"],
      paragrafos: [
        "A crônica é uma lente de aumento para a vida comum. Enquanto a notícia relata um desastre ou um grande evento, a crônica se interessa pelo que aconteceu na esquina.",
        "O cronista usa o humor, a ironia ou uma dose de melancolia para que o leitor se identifique com a cena. É um gênero que busca a humanidade por trás da rotina.",
        "Muitas vezes, a crônica é o espaço onde a literatura encontra o jornalismo."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de dados.",
    perguntas: [
      {
        pergunta: "Por que a crônica é chamada de 'literatura do cotidiano'?",
        opcoes: ["Porque narra eventos comuns da rotina", "Porque só fala de livros antigos", "Porque é escrita em versos complexos"],
        correta: 0,
        feedbackAcerto: "Perfeito! A rotina é a matéria-prima.",
        feedbackErro: "Pense no tema principal da crônica.",
        ondeEstaNoTexto: "A crônica é uma lente de aumento para a vida comum.",
        dica: "É sobre o dia a dia.",
        reensino: "A crônica transforma o trivial em arte.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Construção",
    bloco: {
      instrucao: "Ordene as partes para criar uma crônica.",
      itens: [
        { id: "1", texto: "Observar um fato comum.", imagemUrl: "" },
        { id: "2", texto: "Escolher um ângulo (Humor, Reflexão).", imagemUrl: "" },
        { id: "3", texto: "Narrar o fato com estilo próprio.", imagemUrl: "" },
        { id: "4", texto: "Finalizar com uma reflexão interessante.", imagemUrl: "" }
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Estrutura narrativa confirmada!",
      feedbackErro: "Tudo começa observando algo simples.",
      dica: "A observação é o ponto de partida.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma.",
    leitura: {
      titulo: "Crônica: O Elevador que Demora",
      imagemUrl: "",
      destacar: ["pressa", "observação", "silêncio"],
      paragrafos: [
        "Todo dia o mesmo elevador. As mesmas pessoas, com pressa, olhando para o celular.",
        "Um dia, um estranho sorriu. E o silêncio constrangedor virou um 'bom dia'.",
        "A pressa é um muro que construímos contra a humanidade do outro."
      ],
    },
    perguntas: [
      {
        pergunta: "Qual o tema dessa crônica?",
        opcoes: ["O isolamento das pessoas no cotidiano", "A qualidade dos elevadores", "A história das máquinas"],
        correta: 0,
        feedbackAcerto: "Exato! A reflexão sobre as pessoas.",
        feedbackErro: "O elevador é apenas o lugar da cena.",
        dica: "Pense na reflexão final.",
        reensino: "A crônica usa uma cena comum para falar de algo maior."
      }
    ],
  },
  momento09_revisao: {
    pontos: [
      "Crônica é a narrativa literária sobre o cotidiano.",
      "Transforma o comum em especial usando olhar pessoal.",
      "Costuma ser curta, com tom de humor ou reflexão."
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual a principal ferramenta do cronista?",
        opcoes: ["A observação atenta do dia a dia", "O uso de gráficos técnicos", "A invenção de monstros"],
        correta: 0,
        feedbackAcerto: "Isso mesmo. Olhar o que os outros não veem.",
        feedbackErro: "Pense no que o cronista precisa fazer primeiro.",
        ondeEstaNoTexto: "A crônica é uma lente de aumento para a vida comum.",
        dica: "O cronista olha o que passa despercebido.",
        reensino: "A capacidade de observar é o que define o cronista.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Cronista de Elite",
    materiais: ["Bloco de notas"],
    passos: [
      "Observe um momento comum na sua casa (alguém cozinhando, um animal de estimação, uma conversa).",
      "Escreva um parágrafo narrando isso com um olhar bem pessoal e engraçado.",
      "Mostre para essa pessoa."
    ],
    registro: "Tire uma foto do seu parágrafo de crônica.",
  },
  recompensa: {
    xp: 500,
    moedas: 200,
  },
};
