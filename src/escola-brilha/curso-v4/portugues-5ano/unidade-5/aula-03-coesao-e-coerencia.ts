import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 3 — Coesão e coerência
 * -------------------------------------------------------------
 * Investigação sobre o que costura um texto: substituições (evitar
 * repetição de palavras), conectivos (ligar ideias) e progressão
 * (avançar sem contradizer o que já foi dito).
 *
 * BNCC: EF05LP25, EF35LP07, EF05LP26
 */
export const aula3: AulaPortuguesV4 = {
  slug: "aula-03-coesao-e-coerencia",
  titulo: "Coesão e Coerência",
  iconeTrilha: "🔗",
  bncc: ["EF05LP25", "EF35LP07", "EF05LP26"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "As Costuras Invisíveis do Texto",
    historia:
      "A investigadora ergueu duas lupas sobre a bancada. — Um texto bem escrito tem costuras invisíveis que ligam uma frase à outra, sem que o leitor perceba o trabalho. Hoje vamos investigar duas ferramentas dessa costura: evitar repetir a mesma palavra o tempo todo, e usar conectivos certos para ligar ideias. Sem essas costuras, o texto vira um amontoado de frases soltas. Bora investigar?",
  },

  momento02_previsao: {
    instrucao: "Compare os dois trechos abaixo antes de aprender a técnica.",
    bloco: {
      titulo: "Dois Rascunhos do Mesmo Texto",
      recado: {
        rotulo: "Comparação de rascunhos",
        icone: "🔗",
        linhas: [
          "Rascunho A: 'O cachorro correu. O cachorro latiu. O cachorro pulou.'",
          "Rascunho B: 'O cachorro correu, latiu e, em seguida, pulou de alegria.'",
        ],
        estilo: "papel",
      },
      pergunta: "Qual rascunho tem uma leitura mais fluida, sem repetições cansativas?",
      hipoteses: [
        { texto: "O Rascunho B, que varia a construção e usa conectivos" },
        { texto: "O Rascunho A, porque repete o sujeito em todas as frases" },
        { texto: "Os dois são igualmente bons" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🔗 Isso! O Rascunho B evita repetir 'o cachorro' três vezes e usa 'em seguida' para ligar as ações — isso deixa o texto mais fluido.",
      feedbackErro:
        "Repare que o Rascunho A repete 'o cachorro' em toda frase, o que cansa o leitor. O B varia e conecta as ideias com mais fluidez.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três ferramentas que costuram um texto por dentro.",
    cards: [
      {
        palavra: "substituição",
        explicacao:
          "É trocar uma palavra repetida por um sinônimo, pronome ou expressão equivalente, para evitar repetição cansativa no texto.",
        exemplo: "Em vez de repetir 'a menina' várias vezes, pode-se usar 'ela' ou 'a garota' nas frases seguintes.",
      },
      {
        palavra: "conectivo",
        explicacao:
          "É uma palavra ou expressão que liga ideias dentro de uma frase ou entre frases, mostrando a relação entre elas (adição, oposição, causa, tempo).",
        exemplo: "'Porém', 'além disso', 'porque' e 'em seguida' são exemplos de conectivos.",
      },
      {
        palavra: "progressão",
        explicacao:
          "É o avanço das ideias de um texto: cada frase ou parágrafo deve acrescentar algo novo, sem contradizer nem simplesmente repetir o que já foi dito.",
        exemplo: "Um texto tem boa progressão quando cada parágrafo soma uma informação nova ao que já foi apresentado.",
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia observando como o autor evita repetições e usa conectivos para ligar as ideias.",
    leitura: {
      titulo: "A Aventura da Formiga Exploradora",
      destacar: ["a pequena formiga", "além disso", "por fim"],
      paragrafos: [
        "A pequena formiga saiu do formigueiro em busca de comida. A exploradora seguiu por uma trilha estreita entre as folhas, atenta a qualquer sinal de perigo.",
        "Além disso, ela precisava carregar sozinha um pedaço de folha maior do que o próprio corpo, o que tornava a missão ainda mais desafiadora. Porém, com paciência, conseguiu equilibrar a carga aos poucos.",
        "Por fim, depois de uma longa jornada, a formiga retornou ao formigueiro carregando o alimento, provando que perseverança resolve até os desafios mais difíceis.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao texto sempre que precisar confirmar sua resposta.",
    perguntas: [
      {
        pergunta: "Qual palavra substitui 'a formiga' no primeiro parágrafo, evitando repetição?",
        opcoes: ["A exploradora", "O formigueiro", "A folha"],
        correta: 0,
        feedbackAcerto: "🔗 Isso! 'A exploradora' substitui 'a formiga' para evitar repetir a mesma palavra.",
        feedbackErro: "Releia o primeiro parágrafo: há uma palavra que substitui 'a formiga' na segunda frase.",
        ondeEstaNoTexto: "A exploradora seguiu por uma trilha estreita entre as folhas...",
      },
      {
        pergunta: "O conectivo 'porém', no segundo parágrafo, indica uma relação de:",
        opcoes: ["Adição", "Oposição/contraste", "Tempo"],
        correta: 1,
        feedbackAcerto: "🔗 Correto! 'Porém' mostra um contraste: a carga era pesada, mas ela conseguiu equilibrar.",
        feedbackErro: "'Porém' costuma indicar oposição — algo que contrasta com a frase anterior.",
        ondeEstaNoTexto: "Porém, com paciência, conseguiu equilibrar a carga aos poucos.",
      },
      {
        pergunta: "O conectivo 'por fim', no terceiro parágrafo, indica:",
        opcoes: ["O início da história", "A conclusão/o fechamento da sequência de eventos", "Uma dúvida do narrador"],
        correta: 1,
        feedbackAcerto: "🔗 Exato! 'Por fim' marca o encerramento da sequência de ações da formiga.",
        feedbackErro: "'Por fim' é usado para indicar a última etapa de uma sequência — releia o último parágrafo.",
        ondeEstaNoTexto: "Por fim, depois de uma longa jornada, a formiga retornou ao formigueiro...",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora treine identificar coesão e coerência em situações novas.",
    perguntas: [
      {
        pergunta:
          "Em um texto sobre um menino chamado Lucas, qual seria uma boa substituição para evitar repetir 'Lucas' o tempo todo?",
        opcoes: ["O garoto / ele", "Lucas / Lucas / Lucas", "A escola"],
        correta: 0,
        feedbackAcerto: "🔗 Isso! Usar 'o garoto' ou 'ele' varia o texto sem perder a referência a Lucas.",
        feedbackErro: "Pense em palavras que possam se referir a Lucas sem repetir o nome — pronomes ou sinônimos funcionam bem.",
      },
      {
        pergunta:
          "Qual frase apresenta um problema de COERÊNCIA (contradição de ideias)?",
        opcoes: [
          "Choveu o dia todo, por isso a rua ficou encharcada",
          "Fez muito sol o dia todo, por isso todos usaram guarda-chuva",
          "Estudei bastante para a prova e fui bem",
        ],
        correta: 1,
        feedbackAcerto:
          "🔗 Correto! Não faz sentido usar guarda-chuva por causa de sol — as ideias se contradizem, quebrando a coerência.",
        feedbackErro:
          "Procure a frase em que a causa e a consequência não combinam logicamente — isso é uma quebra de coerência.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize as etapas de revisão de coesão de um texto na ordem em que costumam ser feitas.",
    bloco: {
      instrucao: "Do primeiro ao último passo.",
      itens: [
        { id: "p1", texto: "Identificar palavras repetidas em excesso no texto" },
        { id: "p2", texto: "Substituir algumas repetições por sinônimos ou pronomes" },
        { id: "p3", texto: "Conferir se os conectivos usados fazem sentido entre as frases" },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🔗 Perfeito! Primeiro identificar, depois substituir, depois conferir as ligações.",
      feedbackErro: "Pense: antes de trocar palavras, é preciso perceber onde há repetição — esse é sempre o primeiro passo.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo relato para investigar sozinho! Observe substituições, conectivos e a progressão das ideias.",
    leitura: {
      titulo: "O Dia em que o Rio Transbordou",
      destacar: ["o rio", "as águas", "no entanto", "em seguida"],
      paragrafos: [
        "O rio que cortava a cidade começou a subir depois de três dias seguidos de chuva forte. As águas avançavam lentamente sobre as margens, preocupando os moradores das casas mais próximas.",
        "No entanto, a defesa civil já havia montado um plano de evacuação, o que evitou que a situação se transformasse em uma tragédia maior. Em seguida, equipes de resgate ajudaram as famílias a se mudarem para abrigos temporários.",
        "Depois de dois dias, o nível das águas baixou e os moradores puderam voltar às suas casas, aliviados por terem seguido as orientações a tempo.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual expressão substitui 'o rio' no primeiro parágrafo?",
        opcoes: ["As águas", "A cidade", "A chuva"],
        correta: 0,
        feedbackAcerto: "🔗 Isso! 'As águas' se refere ao mesmo rio, evitando repetição.",
        feedbackErro: "Releia a segunda frase do primeiro parágrafo — há uma expressão que retoma 'o rio'.",
        ondeEstaNoTexto: "As águas avançavam lentamente sobre as margens...",
      },
      {
        pergunta: "O conectivo 'no entanto' indica que a informação seguinte:",
        opcoes: [
          "Contrasta com a preocupação do parágrafo anterior, trazendo uma solução",
          "Repete exatamente a mesma ideia anterior",
          "Não tem nenhuma relação com o parágrafo anterior",
        ],
        correta: 0,
        feedbackAcerto: "🔗 Exato! 'No entanto' introduz um contraste: apesar da preocupação, havia um plano pronto.",
        feedbackErro: "'No entanto' marca oposição/contraste com a ideia anterior — releia o início do segundo parágrafo.",
        ondeEstaNoTexto: "No entanto, a defesa civil já havia montado um plano de evacuação...",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "COESÃO é a costura entre as frases: SUBSTITUIÇÕES evitam repetição de palavras, e CONECTIVOS ligam ideias (adição, oposição, causa, tempo).",
      "COERÊNCIA é o sentido lógico do texto: as ideias precisam se encaixar, sem se contradizer.",
      "PROGRESSÃO significa que cada frase ou parágrafo deve acrescentar algo novo ao texto, sem apenas repetir o que já foi dito.",
      "Revisar um texto para melhorar a coesão envolve: identificar repetições, trocar por sinônimos/pronomes e conferir se os conectivos fazem sentido.",
    ],
    miniDesafio: {
      pergunta: "Qual conectivo encaixa melhor na frase: 'Estudei bastante, ___ fui bem na prova'?",
      opcoes: ["porém", "por isso", "embora"],
      correta: 1,
      feedbackAcerto: "🔗 Isso! 'Por isso' indica uma relação de causa e consequência, que combina com a frase.",
      feedbackErro: "Pense na relação entre estudar bastante e ir bem: é uma relação de causa e consequência.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é uma 'substituição' na coesão textual?",
        opcoes: [
          "Trocar uma palavra repetida por sinônimo ou pronome",
          "Apagar uma frase inteira do texto",
          "Repetir a mesma palavra em todas as frases",
        ],
        correta: 0,
        feedbackAcerto: "🔗 Isso! Substituição evita a repetição cansativa de palavras.",
        feedbackErro: "Substituição é trocar uma palavra repetida por outra equivalente (sinônimo, pronome).",
      },
      {
        pergunta: "2/5 — Para que servem os 'conectivos'?",
        opcoes: [
          "Para decorar o texto",
          "Para ligar ideias, mostrando a relação entre elas",
          "Para aumentar o número de páginas do texto",
        ],
        correta: 1,
        feedbackAcerto: "🔗 Correto! Conectivos mostram como as ideias se relacionam (causa, oposição, tempo etc.).",
        feedbackErro: "Conectivos servem para ligar frases e ideias, mostrando a relação lógica entre elas.",
      },
      {
        pergunta: "3/5 — O que é 'progressão' num texto?",
        opcoes: [
          "Repetir sempre a mesma ideia",
          "O avanço das ideias, cada parte acrescentando algo novo",
          "Escrever frases cada vez mais curtas",
        ],
        correta: 1,
        feedbackAcerto: "🔗 Exato! A progressão garante que o texto avance, sem ficar 'parado' repetindo o mesmo ponto.",
        feedbackErro: "Progressão é o texto avançar: cada parte soma uma informação nova ao que já foi dito.",
      },
      {
        pergunta: "4/5 — No texto do rio, o conectivo 'em seguida' indica principalmente:",
        opcoes: ["Uma relação de tempo/sequência", "Uma relação de oposição", "Uma dúvida"],
        correta: 0,
        feedbackAcerto: "🔗 Isso! 'Em seguida' marca a sequência dos acontecimentos.",
        feedbackErro: "'Em seguida' indica que uma ação aconteceu depois da outra — é um conectivo de tempo.",
      },
      {
        pergunta: "5/5 — Uma frase tem problema de COERÊNCIA quando:",
        opcoes: [
          "Usa muitos sinônimos",
          "Apresenta ideias que se contradizem ou não fazem sentido lógico juntas",
          "É muito curta",
        ],
        correta: 1,
        feedbackAcerto:
          "🔗 Isso! Você já sabe identificar as costuras invisíveis de um bom texto. Investigação concluída! 🌟",
        feedbackErro: "Um problema de coerência acontece quando as ideias do texto se contradizem entre si.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: caçando repetições em casa",
    materiais: ["Um texto curto (bilhete, notícia, trecho de livro)", "Lápis colorido"],
    passos: [
      "1) Escolham juntos um texto curto de um livro, jornal ou revista.",
      "2) A criança circula todas as vezes em que uma mesma palavra se repete muito.",
      "3) Juntos, pensem em pelo menos duas substituições possíveis (sinônimo ou pronome) para essas repetições.",
      "4) Conversem sobre os conectivos usados no texto: o que cada um está ligando (tempo, causa, oposição)?",
    ],
    registro: "🗣️ Registre por escrito as substituições encontradas e os conectivos identificados.",
  },

  recompensa: {
    xp: 135,
    moedas: 80,
  },
};
