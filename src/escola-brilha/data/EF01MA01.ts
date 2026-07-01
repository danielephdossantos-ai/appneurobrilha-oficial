import type { Aula } from "../types";

/**
 * EF01MA01 — Matemática · 1º Ano
 * Habilidade BNCC: Utilizar números naturais como indicador de quantidade ou
 * de ordem em diferentes situações cotidianas e reconhecer situações em que
 * os números não indicam contagem nem ordem, mas sim código de identificação.
 */
const aula: Aula = {
  codigo: "EF01MA01",
  ano: "1º Ano",
  disciplina: "Matemática",
  titulo: "Para que servem os números?",

  narrativa: {
    titulo: "O sumiço dos números da padaria",
    contexto:
      "É segunda de manhã na padaria do seu Zé. Todo dia ele coloca uma plaquinha com o preço do pão, o número da senha e o lugar de cada cliente na fila. Mas hoje, quando o sol nasceu, os números tinham SUMIDO das plaquinhas!",
    problema:
      "Sem números, ninguém sabe quantos pães levar, quem chegou primeiro na fila e nem qual é o troco. A padaria virou uma confusão danada — e o seu Zé está quase chorando!",
    convite:
      "Bora ajudar o seu Zé a descobrir pra que servem os números e salvar a padaria?",
  },



  conhecimentosPrevios: [
    "Reconhecer os números de 0 a 10 falados e escritos.",
    "Contar objetos apontando um a um.",
    "Saber dizer quem chegou em 1º, 2º e 3º lugar.",
  ],

  diagnostico: [
    {
      pergunta: "Quantos dedos você tem em uma mão só?",
      opcoes: ["3", "5", "10"],
      correta: 1,
      explicacao: "Cada mão tem 5 dedos — contar quantidade é o primeiro superpoder dos números.",
    },
    {
      pergunta: "Na fila do lanche, quem chega primeiro é o…",
      opcoes: ["1º lugar", "10º lugar", "Último"],
      correta: 0,
      explicacao: "1º mostra a ordem — quem chegou antes de todo mundo.",
    },
    {
      pergunta: "O número da sua casa serve pra quê?",
      opcoes: ["Contar as casas do mundo", "Identificar a sua casa", "Dizer em que lugar chegou"],
      correta: 1,
      explicacao: "É um código de identificação — não conta nem ordena, só identifica.",
    },
  ],


  missao:
    "Descobrir os três superpoderes secretos dos números: contar, ordenar e identificar.",

  objetivos: [
    "Reconhecer quando um número está contando quantidade.",
    "Reconhecer quando um número mostra a ordem (1º, 2º, 3º…).",
    "Reconhecer quando um número é só um código de identificação.",
    "Diferenciar os três usos em situações do dia a dia.",
  ],

  motivacao:
    "Olha ao seu redor! Tem número no relógio, no controle da TV, na sua camisa do time e até na casa da vovó. Mas será que TODO número serve pra contar? Se você entender isso hoje, nunca mais vai confundir — e vai ficar bem mais esperto pra ler o mundo.",

  explicacao:
    "Os números aparecem no nosso dia a dia de três jeitos diferentes:\n\n• CONTAR quantidade — quando dizemos “tem 5 balas no pote”.\n• MOSTRAR ordem — quando alguém chega em 1º, 2º ou 3º lugar na corrida.\n• SER CÓDIGO — quando o número não conta nada, só identifica, como o número da sua casa ou o número da camisa do jogador.\n\nUm mesmo número pode ter significados diferentes. O que importa é onde ele está e pra que ele foi usado.",

  explicacoesNiveis: {
    nivel1:
      "Número serve pra três coisas: contar (quantos), ordem (qual lugar) e código (qual é este).",
    nivel2:
      "Pensa numa pizzaria: “quero 2 pizzas” conta quantidade. “Sou o 2º da fila” mostra ordem. “Ligo pro telefone 2” é código — o 2 é só o nome do telefone.",
    nivel3:
      "Faz de conta que os números usam três chapéus. Chapéu de CONTAR: 3 gatinhos. Chapéu de LUGAR: 3º da fila. Chapéu de NOME: apartamento 3. É o mesmo número 3, mas o chapéu muda tudo.",
    nivel4:
      "Agora olha em casa: a hora no relógio (12:00) é código de horário; a sua idade (7 anos) é contagem; a página 7 do livro é ordem. Os três moram juntos no seu dia — só precisa olhar pra que serve.",
  },

  exemploResolvido: {
    enunciado:
      "A camisa do Neymar tem o número 10. O que o 10 significa aqui: contagem, ordem ou código?",
    passos: [
      "Pergunte: o 10 está dizendo que existem 10 Neymares? Não.",
      "Pergunte: o Neymar chegou em 10º lugar em alguma coisa? Também não.",
      "Então o 10 só está identificando a camisa dele — é um código.",
    ],
    resposta: "É CÓDIGO — o 10 identifica a camisa do jogador.",
  },

  atividadeGuiada: {
    enunciado:
      "Ana ficou em 2º lugar na corrida. Nessa frase, o número 2 está sendo usado pra quê?",
    resposta: "Para mostrar a ORDEM em que a Ana chegou.",
    explicacao:
      "Ela não tem 2 corridas nem é o código dela — é a POSIÇÃO em que ela terminou a corrida. Isso é ordem.",
  },

  exercicios: [
    {
      enunciado: "Tem 8 lápis dentro da caixa. O 8 é contagem, ordem ou código?",
      resposta: "Contagem — está dizendo QUANTOS lápis existem.",
      dica: "Pergunte: dá pra contar 8 lápis um por um?",
    },
    {
      enunciado:
        "O telefone da avó é 3245-7890. Esse número é contagem, ordem ou código?",
      resposta: "Código — serve pra ligar pra ela, não conta nem ordena nada.",
      dica: "Dá pra contar 3245 avós? Alguém ficou em 3245º lugar? Se não, é código!",
    },
    {
      enunciado: "João mora no 5º andar do prédio. O 5 é contagem, ordem ou código?",
      resposta: "Ordem — mostra a posição do andar dele.",
      dica: "5º com aquele 'zinho' costuma ser ordem.",
    },
  ],

  desafio: {
    enunciado:
      "Um livro tem 120 páginas. A página 45 é o começo do capítulo 3. Quais desses números CONTAM e qual mostra ORDEM?",
    resposta:
      "O 120 CONTA (quantas páginas o livro tem). O 45 mostra ORDEM (é a 45ª página). O 3 também mostra ORDEM (é o 3º capítulo).",
  },

  revisao: {
    pontos: [
      "Números podem contar quantidade (5 balas).",
      "Números podem mostrar ordem (2º lugar).",
      "Números podem ser código (nº da casa, da camisa).",
      "Um mesmo número muda de sentido conforme o lugar.",
    ],
    dica: "Quando ver um número, pergunte: ele tá CONTANDO, ORDENANDO ou IDENTIFICANDO?",
  },

  quiz: [
    {
      pergunta: "Na frase 'Tem 8 lápis na caixa', o número 8 está usado para:",
      opcoes: ["Contar quantidade", "Mostrar ordem", "Ser um código"],
      correta: 0,
      explicacao: "Ele diz QUANTOS lápis existem — está contando.",
    },
    {
      pergunta: "O número da sua camisa no futebol serve pra quê?",
      opcoes: [
        "Contar jogadores",
        "Ser código de identificação",
        "Mostrar em que lugar você chegou",
      ],
      correta: 1,
      explicacao:
        "É só uma identificação sua no jogo. Não conta e nem ordena — é código.",
    },
    {
      pergunta: "Quem chegou em 1º lugar na corrida. O número 1 está mostrando:",
      opcoes: ["Quantidade", "Ordem", "Código"],
      correta: 1,
      explicacao: "É a POSIÇÃO em que a pessoa chegou — isso é ordem.",
    },
    {
      pergunta: "Qual desses números é usado como CÓDIGO?",
      opcoes: ["3 maçãs", "2º andar do prédio", "Número da placa do carro"],
      correta: 2,
      explicacao:
        "A placa identifica o carro — não conta nem ordena. As outras contam ou ordenam.",
    },
  ],

  conclusao:
    "Parabéns! Agora, sempre que ver um número por aí, você já sabe fazer a pergunta certa: ele conta, ordena ou identifica?",

  midias: [
    {
      tipo: "animacao",
      emojis: ["🍎", "🍎", "🍎"],
      legenda: "Contando quantidade: três maçãs.",
    },
    {
      tipo: "animacao",
      emojis: ["🥇", "🥈", "🥉"],
      legenda: "Mostrando ordem: 1º, 2º e 3º lugar.",
    },
  ],

  interativas: [
    {
      tipo: "ligar",
      titulo: "Ligue cada situação ao superpoder do número",
      instrucao: "Toque em um item da esquerda e depois no par certo da direita.",
      pares: [
        { a: "5 balas no pote", b: "Contar" },
        { a: "3º lugar na corrida", b: "Ordem" },
        { a: "Número da camisa", b: "Código" },
      ],
    },
    {
      tipo: "ordenar",
      titulo: "Coloque as posições na ordem certa",
      instrucao: "Arraste pra deixar do 1º ao 4º lugar.",
      itens: ["1º", "2º", "3º", "4º"],
    },
    {
      tipo: "arrastar",
      titulo: "Arraste cada número pra caixa certa",
      instrucao: "Onde esse número está sendo usado?",
      pares: [
        { item: "8 lápis", alvo: "Contar" },
        { item: "5º andar", alvo: "Ordem" },
        { item: "Placa ABC-1234", alvo: "Código" },
        { item: "10 dedos", alvo: "Contar" },
      ],
    },
    {
      tipo: "colorir",
      titulo: "Pinte cada frase da cor do superpoder",
      instrucao: "Amarelo = contar · Verde = ordem · Rosa = código.",
      paleta: ["#FBBF24", "#34D399", "#F472B6"],
      regioes: [
        { nome: "3 gatos", corCorreta: "#FBBF24" },
        { nome: "2º da fila", corCorreta: "#34D399" },
        { nome: "Casa nº 42", corCorreta: "#F472B6" },
        { nome: "1º lugar", corCorreta: "#34D399" },
      ],
    },
    {
      tipo: "montar",
      titulo: "Monte a frase do pódio na ordem",
      instrucao: "Escolha as peças na ordem certa.",
      pecas: ["1º lugar", "2º lugar", "3º lugar"],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Tem 4 balas no pote. O 4 está…",
        opcoes: ["Contando", "Ordenando", "Sendo código"],
        correta: 0,
        explicacao: "Ele diz quantas balas existem.",
      },
      {
        pergunta: "Quem chegou em 1º lugar. O 1 é…",
        opcoes: ["Contagem", "Ordem", "Código"],
        correta: 1,
        explicacao: "Mostra a posição — quem chegou antes.",
      },
      {
        pergunta: "O número da casa é 27. Ele serve pra…",
        opcoes: ["Contar casas", "Identificar a casa", "Dizer quem chegou primeiro"],
        correta: 1,
        explicacao: "É código: só identifica a casa.",
      },
    ],
    medio: [
      {
        pergunta: "Na frase 'Estou no 3º ano', o 3 está sendo usado como:",
        opcoes: ["Contagem", "Ordem", "Código"],
        correta: 1,
        explicacao: "3º com 'zinho' costuma indicar ordem/posição.",
      },
      {
        pergunta: "O telefone 4002-8922 é um número usado como:",
        opcoes: ["Contagem", "Ordem", "Código"],
        correta: 2,
        explicacao: "Não conta nem ordena — só identifica o telefone.",
      },
      {
        pergunta: "Numa festa há 12 crianças. O 12 é:",
        opcoes: ["Contagem", "Ordem", "Código"],
        correta: 0,
        explicacao: "Está contando quantas crianças existem.",
      },
      {
        pergunta: "A camisa do jogador tem o número 7. Isso é:",
        opcoes: ["Contagem", "Ordem", "Código"],
        correta: 2,
        explicacao: "Serve pra identificar o jogador — é código.",
      },
    ],
    dificil: [
      {
        pergunta: "Livro com 200 páginas, aberto na página 45, capítulo 3. Qual número CONTA?",
        opcoes: ["200", "45", "3"],
        correta: 0,
        explicacao: "200 conta quantas páginas o livro tem no total.",
      },
      {
        pergunta: "Ana é a 2ª filha, tem 5 anos, mora na casa 18. Qual número é CÓDIGO?",
        opcoes: ["2", "5", "18"],
        correta: 2,
        explicacao: "18 identifica a casa; 2 é ordem; 5 conta idade.",
      },
      {
        pergunta: "Numa corrida com 30 crianças, Léo chegou em 7º e tirou a medalha nº 42. Qual número é ORDEM?",
        opcoes: ["30", "7", "42"],
        correta: 1,
        explicacao: "7º mostra a posição em que Léo chegou.",
      },
      {
        pergunta: "Numa fila com 10 alunos, o 4º chamado atende pelo número 25 da carteirinha. Qual é CONTAGEM?",
        opcoes: ["10", "4", "25"],
        correta: 0,
        explicacao: "10 conta quantos alunos existem na fila.",
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01MA02",
    titulo: "Jeitos espertos de contar",
  },
};

export default aula;
