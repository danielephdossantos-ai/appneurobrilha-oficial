import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 9 — O Verbo como Motor do Sistema
 * BNCC: EF06LP05
 */
export const aula09: AulaPortuguesV4 = {
  slug: "aula-09-o-verbo-motor",
  titulo: "O Verbo: Motor da Ação",
  iconeTrilha: "⚙️",
  bncc: ["EF06LP05"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Ativação de Processos: O Verbo",
    historia: "Analista, em qualquer sistema, nada acontece sem um comando de ação. Na língua, esse comando é o VERBO. Ele é o motor que move a frase. Sem verbos, os nomes ficam parados no tempo. Hoje, vamos aprender a identificar e conjugar os motores que fazem o Labirinto funcionar.",
    imagemUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing de Execução: O que é ação?",
    bloco: {
      titulo: "Monitoramento de Comandos",
      capaImagemUrl: "",
      pistas: [
        { nome: "Verbos indicam ação, estado ou fenômeno da natureza.", imagemUrl: "" },
        { nome: "Eles mudam (conjugam) para indicar quem faz e quando faz.", imagemUrl: "" }
      ],
      recado: {
        rotulo: "Protocolo de Execução",
        icone: "⚙️",
        linhas: [
          "  [ ESTADOS DO MOTOR ]     ",
          "                           ",
          "  1. PASSADO (Log Antigo)  ",
          "  > Eu 'corri' no labirinto",
          "          ↓                ",
          "  2. PRESENTE (Execução)   ",
          "  > Eu 'corro' no labirinto",
          "          ↓                ",
          "  3. FUTURO (Previsão)     ",
          "  > Eu 'correrei' amanhã   ",
          "                           ",
          "  DICA: O verbo ancora a   ",
          "  informação no tempo.     "
        ],
        estilo: "cartaz",
      },
      pergunta: "Qual a função principal do verbo em uma frase?",
      hipoteses: [
        { texto: "Indicar a ação ou estado e situar no tempo" },
        { texto: "Apenas dar nome aos objetos" },
        { texto: "Substituir o ponto final" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Precisão técnica! Sem o verbo, a frase não tem movimento.",
      feedbackErro: "O que indica que algo está acontecendo agora ou aconteceu ontem?",
      dica: "Pense no motor da frase.",
    },
  },
  momento03_vocabulario: {
    cards: [
      { palavra: "Infinitivo", explicacao: "É o nome do verbo antes de ser usado, terminando em -ar, -er ou -ir.", exemplo: "Correr, Falar, Abrir.", imagemUrl: "" },
      { palavra: "Conjugação", explicacao: "As variações do verbo para combinar com a pessoa e o tempo.", exemplo: "Eu falo, Tu falas, Ele fala.", imagemUrl: "" },
    ],
    instrucao: "Dicionário de Ativos",
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de arquivo.",
    leitura: {
      titulo: "A Dinâmica dos Verbos",
      imagemUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400",
      destacar: ["ação", "tempo", "concordância"],
      paragrafos: [
        "Os verbos são as palavras mais variáveis da nossa língua. Eles precisam concordar com quem fala: se 'eu' faço, é uma terminação; se 'nós' fazemos, é outra totalmente diferente.",
        "Além disso, o verbo situa a ação no tempo. Sem ele, não saberíamos se o sistema já caiu, se está caindo ou se vai cair no futuro.",
        "Dominar os verbos é ter o controle sobre o fluxo das informações no Labirinto."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de dados.",
    perguntas: [
      {
        pergunta: "Na frase 'Os analistas decifraram o código', em qual tempo está o verbo?",
        opcoes: ["Passado (Pretérito)", "Presente", "Futuro"],
        correta: 0,
        feedbackAcerto: "Correto. Já aconteceu.",
        feedbackErro: "Decifraram indica que ainda vai acontecer?",
        ondeEstaNoTexto: "Sem ele, não saberíamos se o sistema já caiu...",
        dica: "Olhe o final da palavra.",
        reensino: "A terminação '-aram' geralmente indica passado.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Sincronia",
    bloco: {
      instrucao: "Coloque os verbos na ordem temporal: Passado → Presente → Futuro.",
      itens: [
        { id: "1", texto: "Eu escrevi o relatório.", imagemUrl: "" },
        { id: "2", texto: "Eu escrevo o relatório.", imagemUrl: "" },
        { id: "3", texto: "Eu escreverei o relatório.", imagemUrl: "" }
      ],
      ordemCerta: ["1", "2", "3"],
      feedbackAcerto: "Sincronia temporal perfeita!",
      feedbackErro: "Escrevi é o que já foi feito.",
      dica: "Ontem, Hoje, Amanhã.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma.",
    leitura: {
      titulo: "Relatório de Atividades do Robô",
      imagemUrl: "",
      destacar: ["correu", "parou", "entenderá"],
      paragrafos: [
        "Ontem, o robô correu 5km e parou diante da porta blindada.",
        "Hoje, ele processa os dados da falha.",
        "Amanhã, ele entenderá como abrir a porta."
      ],
    },
    perguntas: [
      {
        pergunta: "Quais verbos indicam ações que ocorreram ONTEM?",
        opcoes: ["Correu e Parou", "Processa", "Entenderá"],
        correta: 0,
        feedbackAcerto: "Exato! Passado identificado.",
        feedbackErro: "Procure as ações concluídas.",
        dica: "Dica: Ontem.",
        reensino: "O tempo passado indica fatos já finalizados."
      }
    ],
  },
  momento09_revisao: {
    pontos: [
      "Verbos são palavras de ação, estado ou fenômeno.",
      "Conjugação é a variação por tempo e pessoa.",
      "Passado, Presente e Futuro são os tempos básicos."
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual destes é um verbo no INFINITIVO (nome do verbo)?",
        opcoes: ["Codificar", "Codificamos", "Codificou"],
        correta: 0,
        feedbackAcerto: "Isso. Terminação em -ar.",
        feedbackErro: "O infinitivo termina em r.",
        ondeEstaNoTexto: "Terminando em -ar, -er ou -ir.",
        dica: "Termina com r.",
        reensino: "O infinitivo é a forma 'pura' do verbo.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Treinador de Motores",
    materiais: ["Voz"],
    passos: [
      "Escolha um verbo (ex: Comer).",
      "Diga uma frase no Passado, uma no Presente e uma no Futuro.",
      "Peça para alguém adivinhar qual tempo você usou em cada uma."
    ],
    registro: "Escreva as 3 frases que você criou.",
  },
  recompensa: {
    xp: 550,
    moedas: 250,
  },
};
