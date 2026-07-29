import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 1 — Classes de Palavras em Uso
 * -------------------------------------------------------------
 * Abertura da Unidade 3 (Engenharia da Frase). A Central de Investigação
 * da Linguagem convoca o investigador para identificar o "cargo" de
 * cada palavra numa frase: substantivo (o que nomeia), adjetivo (o que
 * qualifica), verbo (o que indica ação/estado) e advérbio (o que
 * modifica o verbo, o adjetivo ou outro advérbio).
 *
 * Foco pedagógico: reconhecer substantivo, adjetivo, verbo e advérbio
 * em frases reais e perceber como a troca de uma classe muda o sentido.
 *
 * BNCC: EF35LP07, EF05LP08, EF05LP01
 */
export const aula1: AulaPortuguesV4 = {
  slug: "aula-01-classes-de-palavras",
  titulo: "Classes de Palavras em Uso",
  iconeTrilha: "🔎",
  bncc: ["EF35LP07", "EF05LP08", "EF05LP01"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "Bem-vindo à Central de Investigação da Linguagem",
    historia:
      "A sala estava cheia de relatórios e uma lupa gigante pendurada na parede: BEM-VINDO À CENTRAL DE INVESTIGAÇÃO DA LINGUAGEM. — Toda frase é uma cena de trabalho em equipe — disse a investigadora-chefe. — Cada palavra tem um CARGO: uma nomeia coisas, outra descreve, outra mostra ação, outra ajusta o \"como\" e o \"quando\". Se você troca o cargo de uma palavra, a frase inteira muda de sentido. Hoje seu treinamento é simples: identificar quem faz o quê dentro da frase. Pronto para o primeiro caso?",
  },

  momento02_previsao: {
    instrucao: "Antes de investigar a frase completa, observe as pistas isoladas abaixo.",
    bloco: {
      titulo: "O Caso da Frase Incompleta",
      recado: {
        rotulo: "Anotação no quadro da Central",
        icone: "🗂️",
        linhas: [
          "___ vento forte derrubou a barraca ___.",
          "Pista 1: uma palavra nomeia algo.",
          "Pista 2: outra palavra descreve como o vento era.",
        ],
        estilo: "papel",
      },
      pergunta: "O que você acha que vai investigar nesta aula?",
      hipoteses: [
        { texto: "Como cada palavra tem uma função específica dentro da frase" },
        { texto: "Como decorar a ordem alfabética das palavras" },
        { texto: "Como contar quantas letras cada palavra tem" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🔎 Correto! Hoje o foco é entender o \"cargo\" de cada palavra: quem nomeia, quem descreve, quem indica ação e quem ajusta o sentido.",
      feedbackErro:
        "Releia as pistas: elas falam sobre o que cada palavra FAZ na frase (nomear, descrever...), não sobre letras ou ordem alfabética.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Quatro classes de palavras vão virar suas ferramentas de investigação.",
    cards: [
      {
        palavra: "substantivo",
        explicacao: "Palavra que nomeia seres, objetos, lugares, sentimentos ou ideias.",
        exemplo: "Em 'A investigadora abriu a pasta', 'investigadora' e 'pasta' são substantivos.",
      },
      {
        palavra: "adjetivo",
        explicacao: "Palavra que atribui uma característica a um substantivo.",
        exemplo: "Em 'a pasta antiga', 'antiga' é o adjetivo que qualifica 'pasta'.",
      },
      {
        palavra: "verbo",
        explicacao: "Palavra que indica ação, estado ou fenômeno, e normalmente muda conforme o tempo.",
        exemplo: "Em 'A investigadora abriu a pasta', 'abriu' é o verbo — indica a ação praticada.",
      },
      {
        palavra: "advérbio",
        explicacao: "Palavra que modifica um verbo, um adjetivo ou outro advérbio, indicando modo, tempo, lugar, intensidade ou negação.",
        exemplo: "Em 'A investigadora abriu a pasta rapidamente', 'rapidamente' modifica o verbo 'abriu' — indica o modo.",
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia o relatório de investigação abaixo e observe as palavras destacadas: cada uma tem um cargo diferente na frase.",
    leitura: {
      titulo: "Relatório do Caso da Janela Quebrada",
      destacar: ["investigador", "silenciosa", "examinou", "cuidadosamente"],
      paragrafos: [
        "O investigador chegou à cena logo ao amanhecer. A rua estava silenciosa e vazia, exceto pelo som distante de um cachorro latindo. Ele examinou a janela quebrada com atenção redobrada, anotando cada detalhe num caderno pequeno.",
        "Cuidadosamente, ele recolheu um fragmento de vidro grosso e o guardou dentro de um saco plástico transparente. Nada escapava ao seu olhar treinado: nem a poeira recente sobre o parapeito, nem a pegada apagada no chão de terra.",
        "Ao final da manhã, o investigador já tinha três hipóteses anotadas — e uma certeza: a resposta estava escondida nos detalhes que a maioria das pessoas ignora.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao relatório sempre que precisar confirmar sua resposta.",
    perguntas: [
      {
        pergunta: "Na frase 'O investigador chegou à cena', qual é o substantivo que nomeia a pessoa que investiga?",
        opcoes: ["chegou", "investigador", "cena"],
        correta: 1,
        feedbackAcerto: "🔎 Isso! 'Investigador' nomeia quem pratica a ação — é um substantivo.",
        feedbackErro: "Pense: qual palavra dá NOME à pessoa que faz a investigação? Essa é o substantivo.",
        ondeEstaNoTexto: "O investigador chegou à cena logo ao amanhecer.",
      },
      {
        pergunta: "Em 'A rua estava silenciosa e vazia', qual palavra é o adjetivo que descreve a rua?",
        opcoes: ["rua", "estava", "silenciosa"],
        correta: 2,
        feedbackAcerto: "🔎 Exato! 'Silenciosa' atribui uma característica ao substantivo 'rua' — é um adjetivo.",
        feedbackErro: "O adjetivo é a palavra que descreve COMO a rua estava, não a rua em si nem o verbo.",
        ondeEstaNoTexto: "A rua estava silenciosa e vazia.",
      },
      {
        pergunta: "Na frase 'Cuidadosamente, ele recolheu um fragmento de vidro', qual palavra indica O MODO como a ação foi feita?",
        opcoes: ["Cuidadosamente", "recolheu", "fragmento"],
        correta: 0,
        feedbackAcerto: "🔎 Perfeito! 'Cuidadosamente' é o advérbio que modifica o verbo 'recolheu', indicando o modo.",
        feedbackErro: "Advérbios de modo costumam terminar em '-mente' e respondem à pergunta 'como?'.",
        ondeEstaNoTexto: "Cuidadosamente, ele recolheu um fragmento de vidro grosso...",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora treine trocando o cargo das palavras dentro da mesma frase.",
    perguntas: [
      {
        pergunta: "Na frase 'O investigador examinou a janela quebrada', qual é o verbo?",
        opcoes: ["investigador", "examinou", "quebrada"],
        correta: 1,
        feedbackAcerto: "🔎 Isso! 'Examinou' indica a ação praticada pelo investigador — é o verbo da frase.",
        feedbackErro: "O verbo indica AÇÃO. Pergunte: o que o investigador FEZ? A resposta é o verbo.",
      },
      {
        pergunta: "Se trocarmos 'a janela quebrada' por 'a janela nova', o que muda no sentido da frase?",
        opcoes: [
          "Nada muda, as duas frases significam a mesma coisa",
          "O adjetivo muda e a característica da janela passa a ser outra",
          "O verbo da frase deixa de existir",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Exatamente! Trocar o adjetivo muda a característica atribuída ao substantivo — e o sentido da cena muda completamente.",
        feedbackErro: "Repare que 'quebrada' e 'nova' são adjetivos diferentes: cada um atribui uma característica diferente à janela.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize o raciocínio do investigador na ordem em que ele analisa uma frase, do mais concreto ao mais sutil.",
    bloco: {
      instrucao: "Do substantivo ao advérbio.",
      itens: [
        { id: "p1", texto: "Primeiro, encontro o substantivo: o que a frase está nomeando." },
        { id: "p2", texto: "Depois, procuro o verbo: qual ação ou estado está sendo indicado." },
        { id: "p3", texto: "Em seguida, busco o adjetivo: que característica foi atribuída ao substantivo." },
        { id: "p4", texto: "Por fim, observo o advérbio: como, quando ou onde a ação aconteceu." },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🔎 Ótimo raciocínio! Essa é uma boa ordem para destrinchar qualquer frase, caso a caso.",
      feedbackErro: "Pense como um investigador: primeiro identifique QUEM ou O QUÊ (substantivo), depois O QUE ACONTECE (verbo), depois as descrições.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo caso na mesa. Leia sozinho e identifique as classes de palavras escondidas no relato.",
    leitura: {
      titulo: "O Bilhete Misterioso",
      destacar: ["Um bilhete amassado", "apareceu", "misteriosamente", "escrivaninha"],
      paragrafos: [
        "Um bilhete amassado apareceu misteriosamente sobre a escrivaninha do detetive Ramos. A letra era pequena e apertada, quase ilegível, escrita com uma caneta vermelha bem gasta.",
        "Ramos leu o texto duas vezes, atentamente, antes de guardar o papel numa pasta transparente. Ele sabia que aquele bilhete simples poderia esconder a chave de todo o mistério.",
      ],
    },
    perguntas: [
      {
        pergunta: "Na frase 'Um bilhete amassado apareceu', qual palavra é o substantivo?",
        opcoes: ["amassado", "bilhete", "apareceu"],
        correta: 1,
        feedbackAcerto: "🔎 Isso! 'Bilhete' nomeia o objeto da cena — é o substantivo.",
        feedbackErro: "O substantivo dá nome à coisa. 'Amassado' descreve o bilhete e 'apareceu' indica a ação.",
        ondeEstaNoTexto: "Um bilhete amassado apareceu misteriosamente sobre a escrivaninha do detetive Ramos.",
      },
      {
        pergunta: "A palavra 'misteriosamente' modifica qual verbo, indicando o modo da ação?",
        opcoes: ["apareceu", "leu", "guardar"],
        correta: 0,
        feedbackAcerto: "🔎 Correto! 'Misteriosamente' modifica 'apareceu' — indica como o bilhete surgiu.",
        feedbackErro: "Releia a primeira frase: o advérbio está bem ao lado do verbo que ele modifica.",
        ondeEstaNoTexto: "Um bilhete amassado apareceu misteriosamente sobre a escrivaninha do detetive Ramos.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "SUBSTANTIVO nomeia seres, objetos, lugares, sentimentos ou ideias.",
      "ADJETIVO atribui uma característica a um substantivo.",
      "VERBO indica ação, estado ou fenômeno, e muda conforme o tempo.",
      "ADVÉRBIO modifica um verbo, um adjetivo ou outro advérbio, indicando modo, tempo, lugar, intensidade ou negação.",
      "Trocar a classe de uma palavra na frase pode mudar completamente o sentido da cena descrita.",
    ],
    miniDesafio: {
      pergunta: "Na frase 'O detetive falou calmamente', qual palavra é o advérbio?",
      opcoes: ["detetive", "falou", "calmamente"],
      correta: 2,
      feedbackAcerto: "🔎 Isso! 'Calmamente' modifica o verbo 'falou', indicando o modo da ação.",
      feedbackErro: "O advérbio de modo costuma terminar em '-mente' e responde 'como?'.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é um substantivo?",
        opcoes: [
          "Palavra que nomeia seres, objetos, lugares ou sentimentos",
          "Palavra que só indica ação",
          "Palavra que só aparece no fim da frase",
        ],
        correta: 0,
        feedbackAcerto: "🔎 Isso! O substantivo dá nome às coisas.",
        feedbackErro: "Substantivo é a classe que NOMEIA seres, objetos, lugares, sentimentos ou ideias.",
      },
      {
        pergunta: "2/5 — Na frase 'A investigação foi longa e cansativa', quais são os adjetivos?",
        opcoes: ["investigação e foi", "longa e cansativa", "A e e"],
        correta: 1,
        feedbackAcerto: "🔎 Correto! 'Longa' e 'cansativa' descrevem características da investigação.",
        feedbackErro: "Os adjetivos são as palavras que descrevem COMO a investigação foi.",
      },
      {
        pergunta: "3/5 — Qual é a função do verbo numa frase?",
        opcoes: [
          "Nomear objetos e pessoas",
          "Indicar ação, estado ou fenômeno",
          "Descrever características de um substantivo",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Isso! O verbo indica o que acontece na frase.",
        feedbackErro: "Quem nomeia é o substantivo, quem descreve é o adjetivo; o verbo indica ação ou estado.",
      },
      {
        pergunta: "4/5 — Na frase 'O detetive chegou rapidamente', o que a palavra 'rapidamente' modifica?",
        opcoes: ["O substantivo 'detetive'", "O verbo 'chegou'", "Nada, é apenas decorativa"],
        correta: 1,
        feedbackAcerto: "🔎 Exato! Advérbios de modo modificam o verbo, indicando como a ação aconteceu.",
        feedbackErro: "'Rapidamente' explica COMO o detetive chegou — modifica o verbo 'chegou'.",
      },
      {
        pergunta: "5/5 — Se trocarmos 'a janela quebrada' por 'a janela pequena', o que exatamente muda na frase?",
        opcoes: [
          "O verbo da frase",
          "A característica atribuída ao substantivo 'janela'",
          "Nada muda, as frases são idênticas",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Isso! Você já enxerga os cargos das palavras como um verdadeiro investigador da linguagem. Primeiro caso resolvido! 🌟",
        feedbackErro: "'Quebrada' e 'pequena' são adjetivos diferentes — cada um muda a característica atribuída à janela.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: caça aos cargos das palavras",
    materiais: ["Uma notícia, rótulo ou bilhete em casa", "Papel e lápis"],
    passos: [
      "1) Escolham juntos uma frase curta de um texto qualquer (rótulo, notícia, bilhete).",
      "2) A criança circula em uma cor os substantivos (o que nomeia) e em outra cor os verbos (o que indica ação).",
      "3) Depois, procurem juntos um adjetivo (descrição) e um advérbio (modo, tempo ou lugar), se houver.",
      "4) Conversem: o que aconteceria com o sentido da frase se um adjetivo fosse trocado por outro?",
    ],
    registro: "🗣️ Registre: 'Na frase ___, o substantivo era ___, o verbo era ___ e o adjetivo era ___.'",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
