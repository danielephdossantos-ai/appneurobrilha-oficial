import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 3 — Resenha Crítica
 * -------------------------------------------------------------
 * Terceiro caso do Arquivo dos Gêneros. A missão: entender como uma
 * resenha crítica RESUME uma obra (livro, filme, jogo) e, ao mesmo
 * tempo, AVALIA sua qualidade usando critérios claros — não é só
 * "gostei" ou "não gostei", é justificar a opinião com razões.
 *
 * BNCC: EF35LP03, EF05LP19, EF35LP26 (adaptada)
 */
export const aula3: AulaPortuguesV4 = {
  slug: "aula-03-resenha-critica",
  titulo: "Resenha Crítica",
  iconeTrilha: "⭐",
  bncc: ["EF35LP03", "EF05LP19", "EF35LP26"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "Terceiro caso: o texto que resume e julga",
    historia:
      "Nem todo texto que fala de um livro ou filme é igual a um artigo de opinião. Existe um gênero específico para isso: a RESENHA CRÍTICA. Ela faz duas coisas ao mesmo tempo — resume a obra sem entregar o final, e AVALIA a qualidade dela usando critérios: a história é boa? Os personagens convencem? Vale a pena? Hoje você vai investigar como um resenhista constrói esse equilíbrio entre resumir e opinar com fundamento.",
  },

  momento02_previsao: {
    instrucao:
      "Leia apenas o título e a nota dada à obra. O que você espera encontrar no restante da resenha?",
    bloco: {
      titulo: "Resenha: 'O Enigma da Ilha Perdida' — Nota: 4 de 5 estrelas",
      recado: {
        rotulo: "Cabeçalho de resenha",
        icone: "⭐",
        linhas: ["Resenha: 'O Enigma da Ilha Perdida'", "Nota: ⭐⭐⭐⭐ (4 de 5)"],
        estilo: "cartaz",
      },
      pergunta: "O que essa resenha provavelmente vai conter?",
      hipoteses: [
        { texto: "Um resumo da história e uma avaliação justificada de seus pontos fortes e fracos" },
        { texto: "Apenas a lista de personagens do livro, sem nenhuma opinião" },
        { texto: "Uma notícia sobre o lançamento do livro em uma livraria" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "⭐ Correto! Uma resenha sempre combina resumo (do que trata a obra) com avaliação (o que funciona bem e o que não funciona), justificando a nota dada.",
      feedbackErro:
        "A nota '4 de 5 estrelas' já indica que existe uma AVALIAÇÃO por trás — a resenha vai explicar por que a obra recebeu essa nota, não apenas listar informações neutras.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras-chave para investigar qualquer resenha crítica.",
    cards: [
      {
        palavra: "sinopse",
        explicacao:
          "É o resumo breve da obra, contando o suficiente para situar o leitor sem revelar o final ou os principais acontecimentos surpresa (isso seria um 'spoiler').",
        exemplo: "'O livro conta a jornada de dois irmãos em busca de um mapa perdido' é uma sinopse — não revela como a busca termina.",
      },
      {
        palavra: "critério de avaliação",
        explicacao:
          "É o ponto específico usado para julgar a qualidade da obra: o enredo (a história), os personagens, o ritmo da narrativa, as ilustrações, entre outros.",
        exemplo: "Avaliar 'os personagens são bem construídos e mudam ao longo da história' é usar o critério personagens.",
      },
      {
        palavra: "recomendação",
        explicacao:
          "É a conclusão da resenha: para quem a obra é indicada (ou não) e por quê, com base em tudo o que foi avaliado antes.",
        exemplo: "'Recomendo o livro para quem gosta de aventura com um toque de mistério, mas o ritmo mais lento no meio pode não agradar a todos.'",
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia identificando: onde está a sinopse (sem spoiler), onde estão os critérios avaliados e onde está a recomendação final.",
    leitura: {
      titulo: "Resenha: 'O Enigma da Ilha Perdida'",
      destacar: ["dois irmãos", "enredo é envolvente", "personagens ganham profundidade", "recomendo"],
      paragrafos: [
        "'O Enigma da Ilha Perdida' conta a jornada de dois irmãos, Rafael e Bia, que encontram um mapa antigo escondido no sótão da casa da avó e decidem seguir suas pistas até uma ilha desconhecida. Ao longo do caminho, eles enfrentam tempestades, enigmas escritos em código e a desconfiança de um capitão misterioso.",
        "O enredo é envolvente do início ao fim, alternando momentos de tensão com pausas para reflexão dos personagens, o que evita que a leitura fique cansativa. Um ponto muito positivo é que os personagens ganham profundidade: Rafael começa medroso e inseguro, mas cresce como líder ao longo da trama, o que torna sua evolução crível.",
        "Por outro lado, alguns capítulos do meio do livro se alongam demais na descrição da ilha, o que pode deixar o ritmo mais lento para leitores acostumados com ação constante. Ainda assim, esse é um problema pequeno perto da qualidade geral da narrativa.",
        "Recomendo o livro para leitores de 10 a 13 anos que gostam de aventura com um toque de mistério. Quem prefere histórias mais rápidas, sem pausas descritivas, talvez sinta o meio do livro arrastado — mas o final compensa a espera.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao texto sempre que precisar confirmar sua resposta.",
    perguntas: [
      {
        pergunta: "Qual trecho é a sinopse (resumo sem spoiler) da resenha?",
        opcoes: [
          "O primeiro parágrafo, que apresenta os irmãos e a busca pelo mapa",
          "O último parágrafo, com a recomendação final",
          "O parágrafo sobre o ritmo lento no meio do livro",
        ],
        correta: 0,
        feedbackAcerto: "⭐ Isso! O primeiro parágrafo situa a história sem contar como ela termina.",
        feedbackErro: "A sinopse é sempre a apresentação inicial da obra — releia o primeiro parágrafo.",
        ondeEstaNoTexto: "'O Enigma da Ilha Perdida' conta a jornada de dois irmãos, Rafael e Bia...",
      },
      {
        pergunta: "Qual critério é elogiado no segundo parágrafo?",
        opcoes: [
          "O preço do livro",
          "A evolução e a profundidade dos personagens",
          "A quantidade de páginas do livro",
        ],
        correta: 1,
        feedbackAcerto: "⭐ Exato! O texto destaca como Rafael 'cresce como líder' — isso é avaliação de personagem.",
        feedbackErro: "Releia o segundo parágrafo: ele fala sobre como os personagens 'ganham profundidade'.",
        ondeEstaNoTexto: "...os personagens ganham profundidade: Rafael começa medroso e inseguro, mas cresce como líder...",
      },
      {
        pergunta: "Qual é o ponto negativo apontado na resenha?",
        opcoes: [
          "Os personagens são mal construídos",
          "Alguns capítulos do meio se alongam demais na descrição, deixando o ritmo lento",
          "A resenha não aponta nenhum ponto negativo",
        ],
        correta: 1,
        feedbackAcerto: "⭐ Perfeito! Uma boa resenha aponta pontos fortes E fracos, com justificativa.",
        feedbackErro: "O terceiro parágrafo começa com 'Por outro lado' — é ali que aparece a crítica.",
        ondeEstaNoTexto: "...alguns capítulos do meio do livro se alongam demais na descrição da ilha...",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora vamos investigar como resumo e avaliação se equilibram numa resenha.",
    perguntas: [
      {
        pergunta: "Por que a sinopse não conta como a história termina?",
        opcoes: [
          "Porque o resenhista não terminou de ler o livro",
          "Porque revelar o final (spoiler) tiraria a surpresa de quem ainda vai ler a obra",
          "Porque resenhas nunca podem falar sobre a trama",
        ],
        correta: 1,
        feedbackAcerto:
          "⭐ Isso mesmo! A sinopse dá o suficiente para situar o leitor, sem estragar a experiência de quem ainda vai conhecer a obra.",
        feedbackErro:
          "Pense no propósito da resenha: ela quer ajudar alguém a decidir se vai ler o livro, sem estragar a surpresa da história.",
      },
      {
        pergunta: "Por que a resenha cita um ponto negativo (o ritmo lento) mesmo dando nota alta (4 de 5)?",
        opcoes: [
          "Porque o resenhista se contradiz o tempo todo",
          "Porque uma avaliação honesta mostra os dois lados, tornando a opinião mais confiável",
          "Porque a nota foi um erro de digitação",
        ],
        correta: 1,
        feedbackAcerto:
          "⭐ Exatamente! Uma resenha crítica de qualidade não é só elogio — ela pesa prós e contras antes de chegar à nota final.",
        feedbackErro:
          "Uma boa avaliação reconhece defeitos mesmo quando a nota geral é positiva. Isso torna a resenha mais confiável, não contraditória.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Um resenhista organiza o texto em etapas lógicas. Coloque a estrutura da resenha em ordem.",
    bloco: {
      instrucao: "Do resumo à recomendação final.",
      itens: [
        { id: "p1", texto: "Apresentar uma sinopse breve da obra, sem revelar o final." },
        { id: "p2", texto: "Avaliar os pontos fortes, usando critérios como enredo e personagens." },
        { id: "p3", texto: "Apontar os pontos fracos, com justificativa." },
        { id: "p4", texto: "Concluir com uma recomendação: para quem a obra é indicada." },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "⭐ Perfeito! Essa é a estrutura clássica de uma resenha crítica bem construída.",
      feedbackErro: "Pense: primeiro se situa o leitor sobre a obra, depois se avalia (prós e contras), só então se recomenda ou não.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo caso no arquivo! Leia sozinho e identifique sinopse, critérios avaliados e recomendação.",
    leitura: {
      titulo: "Resenha: o jogo 'Corrida das Estrelas'",
      destacar: ["fases coloridas e criativas", "controles pouco precisos", "recomendo para jogadores iniciantes"],
      paragrafos: [
        "'Corrida das Estrelas' é um jogo de corrida em que o jogador pilota naves por doze fases inspiradas em planetas diferentes, coletando estrelas para desbloquear novos veículos.",
        "As fases são coloridas e criativas, com cenários que mudam bastante de um planeta para outro, o que mantém o jogo interessante até o fim. A trilha sonora também merece elogio: cada planeta tem uma música que combina com o clima da fase.",
        "O grande problema são os controles pouco precisos: em curvas fechadas, a nave às vezes reage com atraso, causando batidas injustas. Jogadores mais experientes podem se frustrar com isso nas fases finais.",
        "Recomendo o jogo para jogadores iniciantes ou crianças, que vão aproveitar mais a diversão visual do que se incomodar com a imprecisão dos controles.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual é a sinopse desse jogo, segundo a resenha?",
        opcoes: [
          "Um jogo de corrida com naves em doze fases inspiradas em planetas",
          "Um jogo de futebol com times de diferentes países",
          "Um jogo sem nenhuma fase ou objetivo",
        ],
        correta: 0,
        feedbackAcerto: "⭐ Isso! O primeiro parágrafo apresenta do que se trata o jogo.",
        feedbackErro: "A sinopse está no primeiro parágrafo — releia a descrição do jogo.",
        ondeEstaNoTexto: "'Corrida das Estrelas' é um jogo de corrida em que o jogador pilota naves por doze fases...",
      },
      {
        pergunta: "Qual é o ponto negativo apontado na resenha do jogo?",
        opcoes: [
          "A trilha sonora é ruim",
          "Os controles são pouco precisos, causando batidas injustas",
          "As fases são todas iguais",
        ],
        correta: 1,
        feedbackAcerto: "⭐ Correto! O terceiro parágrafo aponta esse problema com clareza.",
        feedbackErro: "Procure a frase 'o grande problema' no terceiro parágrafo.",
        ondeEstaNoTexto: "O grande problema são os controles pouco precisos...",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "A RESENHA CRÍTICA combina uma SINOPSE (resumo sem spoiler) com uma AVALIAÇÃO justificada da obra.",
      "A avaliação usa CRITÉRIOS claros: enredo, personagens, ritmo, controles, trilha sonora, entre outros.",
      "Uma boa resenha aponta pontos fortes E fracos, mesmo quando a nota final é positiva.",
      "A resenha termina com uma RECOMENDAÇÃO: para quem a obra é (ou não é) indicada, e por quê.",
    ],
    miniDesafio: {
      pergunta: "Uma resenha diz: 'Os efeitos visuais são impressionantes, mas o roteiro é confuso.' Isso é um exemplo de:",
      opcoes: [
        "Uma sinopse sem avaliação",
        "Uma avaliação que aponta ponto forte e ponto fraco",
        "Um spoiler do final da obra",
      ],
      correta: 1,
      feedbackAcerto: "⭐ Isso! A frase usa dois critérios (efeitos visuais e roteiro) para avaliar, mostrando os dois lados.",
      feedbackErro: "Pense: a frase não resume a história (não é sinopse) nem revela o final (não é spoiler) — ela julga a qualidade usando critérios.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é uma 'sinopse' dentro de uma resenha?",
        opcoes: [
          "A avaliação final da obra",
          "Um resumo breve da obra, sem revelar o final",
          "A lista de erros da obra",
        ],
        correta: 1,
        feedbackAcerto: "⭐ Isso! A sinopse situa o leitor sem estragar a surpresa.",
        feedbackErro: "A sinopse é o resumo inicial, que não conta como a obra termina.",
      },
      {
        pergunta: "2/5 — O que é um 'critério de avaliação' numa resenha?",
        opcoes: [
          "Um aspecto específico usado para julgar a obra, como enredo ou personagens",
          "O nome do autor da obra",
          "O preço de venda da obra",
        ],
        correta: 0,
        feedbackAcerto: "⭐ Correto! Critérios são os pontos analisados para chegar à avaliação.",
        feedbackErro: "Critério é o aspecto avaliado (enredo, personagens, ritmo...), não dados como preço ou autor.",
      },
      {
        pergunta: "3/5 — Por que uma boa resenha aponta pontos fracos mesmo quando a nota é alta?",
        opcoes: [
          "Porque o resenhista está confuso",
          "Porque isso torna a avaliação mais honesta e confiável",
          "Porque toda resenha é obrigada a ter nota baixa",
        ],
        correta: 1,
        feedbackAcerto: "⭐ Exatamente! Reconhecer defeitos junto com qualidades fortalece a credibilidade da resenha.",
        feedbackErro: "Uma resenha honesta mostra os dois lados — isso não é contradição, é equilíbrio.",
      },
      {
        pergunta: "4/5 — Na resenha do jogo 'Corrida das Estrelas', qual foi o principal ponto negativo?",
        opcoes: [
          "A trilha sonora ruim",
          "Os controles pouco precisos",
          "As fases sem cor"
        ],
        correta: 1,
        feedbackAcerto: "⭐ Isso! Os controles imprecisos foram o problema apontado.",
        feedbackErro: "Releia o terceiro parágrafo da resenha do jogo.",
      },
      {
        pergunta: "5/5 — Para que serve a 'recomendação' no final de uma resenha?",
        opcoes: [
          "Para indicar a obra a um público específico, com base na avaliação feita",
          "Para repetir a sinopse com outras palavras",
          "Para revelar o final da obra",
        ],
        correta: 0,
        feedbackAcerto: "⭐ Isso! Você já sabe montar uma avaliação justa e equilibrada. Terceiro caso do arquivo resolvido! 🔍",
        feedbackErro: "A recomendação diz para quem a obra é indicada (ou não), com base em tudo o que foi avaliado antes.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: escrevendo uma mini-resenha em casa",
    materiais: ["Um livro, filme, série ou jogo favorito da criança", "Papel e lápis"],
    passos: [
      "1) Escolham juntos um livro, filme ou jogo que a criança conheça bem.",
      "2) A criança escreve uma sinopse de 2 a 3 frases, sem contar o final.",
      "3) Depois, ela escolhe pelo menos um ponto forte e um ponto fraco da obra, explicando por quê.",
      "4) Por fim, ela escreve uma recomendação: para quem indicaria essa obra e por qual motivo.",
    ],
    registro: "🗣️ Registre por escrito ou em áudio: 'Minha sinopse foi ___, o ponto forte foi ___, o ponto fraco foi ___ e eu recomendo para ___.'",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
