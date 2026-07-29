import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 2 — Artigo de Opinião
 * -------------------------------------------------------------
 * Segundo caso do Arquivo dos Gêneros. A missão: entender como um
 * artigo de opinião defende uma TESE com ARGUMENTOS, e como um bom
 * autor antecipa e rebate um CONTRA-ARGUMENTO para fortalecer sua ideia.
 *
 * BNCC: EF35LP03, EF69LP07 (adaptada), EF05LP19, EF35LP28
 */
export const aula2: AulaPortuguesV4 = {
  slug: "aula-02-artigo-de-opiniao",
  titulo: "Artigo de Opinião",
  iconeTrilha: "🗣️",
  bncc: ["EF35LP03", "EF05LP19", "EF35LP28"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "Segundo caso: o texto que defende uma ideia",
    historia:
      "Notícia relata fatos. Mas existe outro gênero que investiga IDEIAS: o artigo de opinião. Nele, o autor escolhe um lado, defende uma TESE (a opinião principal) com ARGUMENTOS (razões que sustentam essa opinião) e, se for esperto, ainda rebate quem pensa diferente. Hoje você vai aprender a separar a tese dos argumentos e a montar sua própria defesa de ideias.",
  },

  momento02_previsao: {
    instrucao:
      "Leia apenas o título do artigo abaixo. Que opinião você imagina que o autor vai defender?",
    bloco: {
      titulo: "Uniforme escolar não deveria ser obrigatório",
      recado: {
        rotulo: "Título de artigo de opinião",
        icone: "🗣️",
        linhas: ["Uniforme escolar não deveria ser obrigatório"],
        estilo: "cartaz",
      },
      pergunta: "Qual opinião (tese) esse título já deixa claro?",
      hipoteses: [
        { texto: "O autor é contra a obrigatoriedade do uniforme escolar" },
        { texto: "O autor está apenas descrevendo como é feito um uniforme" },
        { texto: "O autor não tem nenhuma opinião sobre o assunto" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🗣️ Correto! Já no título aparece a TESE: a posição do autor contra a obrigatoriedade. Um bom título de artigo de opinião já revela o lado que o autor vai defender.",
      feedbackErro:
        "Releia o título: a palavra 'não deveria' já indica uma posição contrária. Isso é a tese do artigo, não uma simples descrição.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras essenciais para entender o artigo de opinião.",
    cards: [
      {
        palavra: "tese",
        explicacao:
          "É a opinião principal que o autor defende no artigo — a ideia central em torno da qual todo o texto é construído.",
        exemplo: "'A merenda escolar deveria ter mais opções vegetarianas' é uma tese.",
      },
      {
        palavra: "argumento",
        explicacao:
          "É uma razão, prova ou exemplo usado para sustentar a tese. Quanto mais forte e bem explicado o argumento, mais convincente é o artigo.",
        exemplo: "Argumento para a tese acima: 'Isso garantiria alimentação para alunos que não comem carne, sem excluir ninguém'.",
      },
      {
        palavra: "contra-argumento",
        explicacao:
          "É a objeção que alguém que pensa diferente poderia levantar. Um bom autor antecipa esse contra-argumento e o rebate (responde), tornando a defesa da tese ainda mais forte.",
        exemplo: "Contra-argumento: 'Isso custaria mais caro à escola.' Rebate: 'Mas o custo pode ser compensado reduzindo o desperdício de carnes que muitos alunos não comem.'",
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia identificando a TESE (opinião principal), os ARGUMENTOS que a sustentam e o CONTRA-ARGUMENTO que o autor rebate.",
    leitura: {
      titulo: "Uniforme escolar não deveria ser obrigatório",
      destacar: ["não deveria ser obrigatório", "restringe a expressão", "alguns dizem que o uniforme evita bullying"],
      paragrafos: [
        "O uso do uniforme escolar não deveria ser obrigatório em todas as escolas. Defendo que cada estudante deveria ter liberdade para escolher como se vestir para estudar, desde que respeitando regras básicas de decência e conforto.",
        "Em primeiro lugar, o uniforme restringe a expressão pessoal dos estudantes justamente na fase em que eles estão descobrindo sua própria identidade. Roupas fazem parte de como nos apresentamos ao mundo, e essa escolha deveria ser respeitada também na escola.",
        "Alguns dizem que o uniforme evita o bullying relacionado à roupa, já que todos ficam vestidos da mesma forma. É verdade que isso reduz um tipo de comparação. Mas o bullying não desaparece só porque a roupa é igual — ele pode migrar para o tênis, o material escolar ou o corte de cabelo. O problema real é a falta de uma educação sobre respeito às diferenças, não a existência de roupas diferentes.",
        "Por isso, defendo que as escolas adotem regras de vestimenta mais flexíveis, com liberdade de escolha dentro de limites razoáveis, e invistam em projetos que ensinem o respeito às diferenças de verdade — o que resolveria o problema na raiz, e não apenas na aparência.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao texto sempre que precisar confirmar sua resposta.",
    perguntas: [
      {
        pergunta: "Qual é a tese defendida no artigo?",
        opcoes: [
          "O uniforme escolar não deveria ser obrigatório",
          "O uniforme escolar deveria ser mais colorido",
          "As escolas deveriam proibir qualquer tipo de roupa",
        ],
        correta: 0,
        feedbackAcerto: "🗣️ Isso! O primeiro parágrafo já apresenta a tese com clareza.",
        feedbackErro: "A tese aparece logo na primeira frase do texto — releia com atenção.",
        ondeEstaNoTexto: "O uso do uniforme escolar não deveria ser obrigatório em todas as escolas.",
      },
      {
        pergunta: "Qual argumento o autor usa para defender essa tese?",
        opcoes: [
          "O uniforme é muito caro para as famílias",
          "O uniforme restringe a expressão pessoal dos estudantes",
          "O uniforme deveria ser usado só aos sábados",
        ],
        correta: 1,
        feedbackAcerto: "🗣️ Correto! Esse é o primeiro argumento apresentado no segundo parágrafo.",
        feedbackErro: "O segundo parágrafo traz o primeiro argumento — releia seu início.",
        ondeEstaNoTexto: "...o uniforme restringe a expressão pessoal dos estudantes...",
      },
      {
        pergunta: "Qual é o contra-argumento que o autor rebate no texto?",
        opcoes: [
          "A ideia de que o uniforme evita o bullying relacionado à roupa",
          "A ideia de que o uniforme é confortável",
          "A ideia de que todos gostam de uniforme",
        ],
        correta: 0,
        feedbackAcerto: "🗣️ Exato! O autor apresenta essa objeção e depois explica por que ela não resolve o problema todo.",
        feedbackErro: "O contra-argumento aparece no terceiro parágrafo, logo após 'Alguns dizem que...'.",
        ondeEstaNoTexto: "Alguns dizem que o uniforme evita o bullying relacionado à roupa...",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora vamos investigar como o argumento e o contra-argumento se conectam à tese.",
    perguntas: [
      {
        pergunta: "Por que o autor menciona o contra-argumento (uniforme evita bullying) em vez de ignorá-lo?",
        opcoes: [
          "Porque esqueceu que estava defendendo outra ideia",
          "Porque rebater um contra-argumento torna a defesa da tese mais forte e completa",
          "Porque mudou de opinião no meio do texto",
        ],
        correta: 1,
        feedbackAcerto:
          "🗣️ Isso mesmo! Ao antecipar e rebater a objeção, o autor mostra que já pensou nos dois lados e reforça sua própria tese com mais segurança.",
        feedbackErro:
          "Releia o parágrafo 3: o autor não muda de ideia — ele responde à objeção para tornar sua tese ainda mais convincente.",
      },
      {
        pergunta: "Qual é a diferença entre um artigo de opinião e uma notícia?",
        opcoes: [
          "Notícia relata fatos sem defender uma tese; artigo de opinião defende um ponto de vista com argumentos",
          "Não existe diferença entre os dois gêneros",
          "Artigo de opinião sempre é mais curto que notícia",
        ],
        correta: 0,
        feedbackAcerto:
          "🗣️ Exatamente! A notícia busca informar com neutralidade; o artigo de opinião assume um lado e o defende.",
        feedbackErro:
          "Pense na aula anterior: a notícia relata fatos checados. O artigo de opinião vai além — defende uma posição pessoal com argumentos.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Um bom autor de artigo de opinião organiza as ideias em uma ordem lógica. Organize a estrutura.",
    bloco: {
      instrucao: "Da apresentação da tese à conclusão.",
      itens: [
        { id: "p1", texto: "Apresentar a tese: a opinião principal do autor." },
        { id: "p2", texto: "Trazer argumentos que sustentam a tese." },
        { id: "p3", texto: "Apresentar e rebater um contra-argumento." },
        { id: "p4", texto: "Concluir reafirmando a tese e propondo uma solução." },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🗣️ Perfeito! Essa é a estrutura clássica de um artigo de opinião bem construído.",
      feedbackErro: "Pense: primeiro se apresenta a opinião, depois as razões, depois se responde a quem discorda, e só então se conclui.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo caso no arquivo! Leia sozinho e identifique tese, argumento e contra-argumento.",
    leitura: {
      titulo: "As escolas deveriam ter mais tempo de recreio",
      destacar: ["deveriam ter mais tempo de recreio", "alguns argumentam que isso tiraria tempo de aula", "melhora a concentração"],
      paragrafos: [
        "As escolas deveriam aumentar o tempo de recreio dos alunos. Defendo essa ideia porque momentos de descanso e brincadeira são essenciais para o desenvolvimento infantil, e não apenas um intervalo qualquer entre as aulas.",
        "Estudos mostram que crianças que brincam mais ao ar livre voltam para a sala mais concentradas e com melhor humor. Isso significa que um recreio mais longo pode, na verdade, melhorar o aproveitamento nas aulas seguintes.",
        "Alguns argumentam que isso tiraria tempo de aula, prejudicando o conteúdo ensinado. É verdade que o tempo total é limitado. Porém, se o recreio melhora a concentração, as aulas seguintes podem ser mais produtivas, compensando os minutos a mais de descanso.",
        "Por isso, defendo que as escolas testem um recreio mais longo por um período experimental, avaliando o impacto real no aprendizado antes de decidir permanentemente.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual é a tese desse artigo?",
        opcoes: [
          "As escolas deveriam aumentar o tempo de recreio",
          "As escolas deveriam acabar com o recreio",
          "O recreio deveria ser usado só para estudar",
        ],
        correta: 0,
        feedbackAcerto: "🗣️ Isso! A tese aparece logo na primeira frase.",
        feedbackErro: "A tese está na primeira frase do primeiro parágrafo — releia.",
        ondeEstaNoTexto: "As escolas deveriam aumentar o tempo de recreio dos alunos.",
      },
      {
        pergunta: "Qual é o contra-argumento rebatido no texto?",
        opcoes: [
          "A ideia de que o recreio tiraria tempo de aula",
          "A ideia de que o recreio deveria ser eliminado",
          "A ideia de que os alunos não gostam de brincar",
        ],
        correta: 0,
        feedbackAcerto: "🗣️ Correto! O autor reconhece essa objeção e explica por que ela pode ser compensada.",
        feedbackErro: "Procure a frase que começa com 'Alguns argumentam que...' no terceiro parágrafo.",
        ondeEstaNoTexto: "Alguns argumentam que isso tiraria tempo de aula, prejudicando o conteúdo ensinado.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "O ARTIGO DE OPINIÃO defende uma TESE (opinião principal) usando ARGUMENTOS (razões e provas).",
      "Um bom artigo antecipa um CONTRA-ARGUMENTO (objeção) e o rebate, fortalecendo a defesa da tese.",
      "Diferente da notícia, o artigo de opinião assume claramente um lado — não busca neutralidade.",
      "A estrutura clássica é: tese → argumentos → contra-argumento rebatido → conclusão.",
    ],
    miniDesafio: {
      pergunta: "Um artigo diz: 'Defendo que a cidade tenha mais ciclovias.' Isso é:",
      opcoes: ["Um argumento", "A tese do artigo", "Um contra-argumento"],
      correta: 1,
      feedbackAcerto: "🗣️ Isso! É a opinião principal defendida — a tese.",
      feedbackErro: "Pense: essa frase apresenta a opinião central que vai ser defendida ao longo do texto. Isso é a tese, não um argumento ou contra-argumento.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é a 'tese' de um artigo de opinião?",
        opcoes: [
          "Um exemplo qualquer citado no texto",
          "A opinião principal defendida pelo autor",
          "A objeção de quem discorda do autor",
        ],
        correta: 1,
        feedbackAcerto: "🗣️ Isso! A tese é o centro do artigo de opinião.",
        feedbackErro: "A tese é a ideia principal que o autor está defendendo, não um exemplo ou uma objeção.",
      },
      {
        pergunta: "2/5 — Qual é a função de um argumento?",
        opcoes: [
          "Enfraquecer a tese do autor",
          "Sustentar e comprovar a tese com razões ou exemplos",
          "Substituir a tese por outra opinião",
        ],
        correta: 1,
        feedbackAcerto: "🗣️ Correto! Argumentos dão sustentação à tese.",
        feedbackErro: "O argumento serve para reforçar a tese, dando razões que a comprovem.",
      },
      {
        pergunta: "3/5 — Por que um autor apresenta um contra-argumento?",
        opcoes: [
          "Para mudar de opinião no meio do texto",
          "Para mostrar que considerou outros pontos de vista e ainda assim defende sua tese",
          "Porque é obrigatório em todo texto, mesmo sem função",
        ],
        correta: 1,
        feedbackAcerto: "🗣️ Exatamente! Isso fortalece a argumentação, mostrando maturidade na defesa da ideia.",
        feedbackErro: "Rebater um contra-argumento mostra que o autor pensou nos dois lados, o que torna a tese mais convincente.",
      },
      {
        pergunta: "4/5 — No artigo sobre o recreio, qual é a tese defendida?",
        opcoes: [
          "As escolas deveriam acabar com o recreio",
          "As escolas deveriam aumentar o tempo de recreio",
          "O recreio deveria virar mais uma aula",
        ],
        correta: 1,
        feedbackAcerto: "🗣️ Isso! Essa é a opinião central defendida em todo o artigo.",
        feedbackErro: "Releia a primeira frase do artigo sobre o recreio — ali está a tese.",
      },
      {
        pergunta: "5/5 — Qual é a diferença essencial entre notícia e artigo de opinião?",
        opcoes: [
          "Notícia relata fatos com neutralidade; artigo de opinião defende uma posição com argumentos",
          "Não existe nenhuma diferença entre os dois gêneros",
          "Artigo de opinião não pode ter conclusão",
        ],
        correta: 0,
        feedbackAcerto: "🗣️ Isso! Você já sabe separar fato de opinião com segurança. Segundo caso do arquivo resolvido! 🔍",
        feedbackErro: "A notícia busca informar com neutralidade; o artigo de opinião assume um lado e o defende com argumentos.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: montando um mini-argumento em casa",
    materiais: ["Papel e lápis", "Um assunto do dia a dia da família para debater"],
    passos: [
      "1) Escolham juntos um assunto simples do cotidiano (ex.: 'deveríamos ter mais tempo de tela nos fins de semana?').",
      "2) A criança escreve uma TESE (sua opinião sobre o assunto) em uma frase.",
      "3) Depois, escreve pelo menos um ARGUMENTO que sustente essa tese.",
      "4) Por fim, peça que ela imagine um CONTRA-ARGUMENTO (o que alguém que pensa diferente diria) e tente rebatê-lo em voz alta.",
    ],
    registro: "🗣️ Registre por escrito ou em áudio: 'Minha tese é ___, meu argumento é ___ e o contra-argumento que rebati foi ___.'",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
