import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 4 — Revisão e reescrita
 * -------------------------------------------------------------
 * Fechamento da Unidade 5. A investigação final: nenhum texto sai
 * perfeito na primeira versão — revisar com um checklist e reescrever
 * como um profissional faz é o que transforma um rascunho em um
 * texto pronto.
 *
 * BNCC: EF05LP24, EF35LP24, EF05LP26
 */
export const aula4: AulaPortuguesV4 = {
  slug: "aula-04-revisao-e-reescrita",
  titulo: "Revisão e Reescrita",
  iconeTrilha: "🔍",
  bncc: ["EF05LP24", "EF35LP24", "EF05LP26"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "O Laboratório Final da Oficina",
    historia:
      "A investigadora colocou dois textos lado a lado sobre a bancada: um rascunho cheio de rabiscos e uma versão final impecável. — Nenhum escritor profissional entrega o primeiro rascunho. Entre a primeira versão e o texto final existe uma etapa essencial: a revisão. É quando você lê seu próprio texto com os olhos de um investigador, procurando erros, repetições e frases confusas — e então reescreve o que for preciso. Hoje fechamos nossa oficina com essa etapa decisiva.",
  },

  momento02_previsao: {
    instrucao: "Observe este checklist usado por uma escritora antes de entregar seu texto.",
    bloco: {
      titulo: "O Checklist da Revisora",
      recado: {
        rotulo: "Lista de revisão",
        icone: "🔍",
        linhas: [
          "☐ O texto atende ao objetivo proposto?",
          "☐ As ideias estão na ordem certa e conectadas?",
          "☐ Há palavras repetidas demais?",
          "☐ A pontuação e a ortografia estão corretas?",
        ],
        estilo: "papel",
      },
      pergunta: "Para que serve esse tipo de lista?",
      hipoteses: [
        { texto: "Para revisar o texto de forma organizada, item por item, antes de finalizar" },
        { texto: "Para copiar o texto de outra pessoa" },
        { texto: "Para decidir qual será o próximo assunto a escrever" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🔍 Isso! Um checklist de revisão ajuda a conferir, ponto por ponto, se o texto está pronto para ser entregue — sem esquecer nenhum aspecto importante.",
      feedbackErro:
        "Releia os itens da lista: todos são perguntas que ajudam a revisar o próprio texto antes de considerá-lo pronto.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três termos essenciais do laboratório de revisão.",
    cards: [
      {
        palavra: "revisão",
        explicacao:
          "É a etapa de ler o próprio texto com atenção crítica, buscando erros de sentido, gramática, pontuação e organização, antes de considerá-lo pronto.",
        exemplo: "Ao revisar, o escritor percebeu que um parágrafo repetia uma ideia já dita antes e decidiu cortá-lo.",
      },
      {
        palavra: "reescrita",
        explicacao:
          "É o processo de corrigir e melhorar o texto depois da revisão, ajustando frases confusas, palavras repetidas e erros encontrados.",
        exemplo: "Depois de revisar, a autora reescreveu o segundo parágrafo para deixar a ideia mais clara.",
      },
      {
        palavra: "checklist de revisão",
        explicacao:
          "É uma lista de perguntas ou itens que orientam a revisão de um texto, garantindo que nenhum aspecto importante seja esquecido.",
        exemplo: "Um checklist pode incluir: 'O texto tem começo, meio e fim?' e 'A pontuação está correta?'.",
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia identificando por que a revisão profissional é tratada como uma etapa obrigatória, não opcional.",
    leitura: {
      titulo: "Por que Ninguém Entrega o Primeiro Rascunho",
      destacar: ["a primeira versão raramente é a melhor", "ler em voz alta", "reescrever não é sinal de fracasso"],
      paragrafos: [
        "Escritores profissionais, jornalistas e roteiristas costumam repetir a mesma frase: a primeira versão de um texto raramente é a melhor. É no processo de revisão que problemas escondidos aparecem — frases confusas, ideias repetidas ou até informações que faltam.",
        "Uma técnica simples e eficaz é ler o texto em voz alta. Quando lemos silenciosamente, o cérebro às vezes 'completa' frases mal escritas sem perceber o erro. Ao ler em voz alta, tropeços na fala revelam onde o texto precisa de ajustes.",
        "Por fim, é importante entender que reescrever não é sinal de fracasso, mas sim parte natural do processo criativo. Os melhores textos, livros e artigos passaram por várias versões antes de chegar à forma final que o leitor conhece.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao texto sempre que precisar confirmar sua resposta.",
    perguntas: [
      {
        pergunta: "Segundo o texto, o que geralmente acontece com a primeira versão de um texto?",
        opcoes: [
          "Ela raramente é a melhor versão possível",
          "Ela sempre é perfeita e não precisa de revisão",
          "Ela deve ser jogada fora sem ser lida novamente",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Isso! O texto afirma que 'a primeira versão de um texto raramente é a melhor'.",
        feedbackErro: "Releia a primeira frase do texto — ela já responde essa pergunta.",
        ondeEstaNoTexto: "...a primeira versão de um texto raramente é a melhor.",
      },
      {
        pergunta: "Por que ler o texto em voz alta ajuda na revisão?",
        opcoes: [
          "Porque deixa o texto mais bonito visualmente",
          "Porque tropeços na fala revelam onde o texto precisa de ajustes",
          "Porque aumenta o número de páginas do texto",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Correto! O texto explica que os tropeços na leitura em voz alta indicam problemas no texto.",
        feedbackErro: "O segundo parágrafo explica exatamente essa vantagem — releia com atenção.",
        ondeEstaNoTexto: "Ao ler em voz alta, tropeços na fala revelam onde o texto precisa de ajustes.",
      },
      {
        pergunta: "Qual é a mensagem final do texto sobre reescrever?",
        opcoes: [
          "Reescrever é sinal de que o autor não sabe escrever",
          "Reescrever é parte natural do processo criativo, não um fracasso",
          "Reescrever deve ser evitado sempre que possível",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Exato! O texto afirma que reescrever 'não é sinal de fracasso, mas parte natural do processo'.",
        feedbackErro: "Releia o último parágrafo: ele valoriza a reescrita como parte normal do processo.",
        ondeEstaNoTexto: "...reescrever não é sinal de fracasso, mas sim parte natural do processo criativo.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora aplique o checklist de revisão em situações práticas.",
    perguntas: [
      {
        pergunta:
          "Um aluno terminou de escrever uma redação e quer revisá-la. Qual seria um bom primeiro item do checklist?",
        opcoes: [
          "Verificar se o texto atende ao objetivo proposto pela atividade",
          "Contar quantas vezes a letra 'a' aparece no texto",
          "Trocar a cor da caneta usada",
        ],
        correta: 0,
        feedbackAcerto:
          "🔍 Isso! Conferir se o texto cumpre o objetivo é o item mais importante — de nada adianta um texto bonito que não responde ao que foi pedido.",
        feedbackErro:
          "Pense no que é mais essencial revisar primeiro: se o texto realmente cumpre o que foi proposto.",
      },
      {
        pergunta:
          "Ao ler seu texto em voz alta, um aluno percebeu que uma frase ficou confusa e sem sentido claro. O que ele deve fazer?",
        opcoes: [
          "Ignorar, pois já está pronto",
          "Reescrever a frase para deixá-la mais clara",
          "Apagar o texto inteiro e desistir",
        ],
        correta: 1,
        feedbackAcerto:
          "🔍 Correto! Perceber um problema na revisão e reescrever a frase é exatamente o processo esperado.",
        feedbackErro:
          "Encontrar um problema na revisão não significa desistir — significa que chegou a hora de reescrever aquele trecho.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize as etapas do processo de revisão e reescrita na ordem correta.",
    bloco: {
      instrucao: "Do primeiro ao último passo.",
      itens: [
        { id: "p1", texto: "Terminar o primeiro rascunho do texto" },
        { id: "p2", texto: "Ler o texto (de preferência em voz alta) usando um checklist de revisão" },
        { id: "p3", texto: "Reescrever os trechos que apresentaram problemas" },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🔍 Perfeito! Primeiro escrever, depois revisar com atenção, e só então reescrever o necessário.",
      feedbackErro: "Pense: só é possível revisar depois de ter um texto escrito, e só se reescreve depois de revisar.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Último relatório da oficina! Leia sozinho e identifique as etapas de revisão descritas.",
    leitura: {
      titulo: "A Redação Premiada de Beatriz",
      destacar: ["revisou o texto três vezes", "leu em voz alta para o pai", "reescreveu o parágrafo final"],
      paragrafos: [
        "Beatriz escreveu sua redação sobre o valor da amizade para o concurso da escola. No primeiro rascunho, o texto tinha boas ideias, mas estava desorganizado, com frases longas demais e algumas repetições.",
        "Ela revisou o texto três vezes, usando um checklist com perguntas sobre objetivo, organização das ideias e ortografia. Na segunda revisão, leu o texto em voz alta para o pai, que apontou um trecho confuso no meio do texto.",
        "Depois disso, Beatriz reescreveu o parágrafo final, tornando a conclusão mais clara e direta. O esforço valeu a pena: sua redação foi selecionada entre as melhores do concurso.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quantas vezes Beatriz revisou seu texto?",
        opcoes: ["Uma vez", "Três vezes", "Nunca revisou"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! O texto informa claramente que ela revisou três vezes.",
        feedbackErro: "Releia o segundo parágrafo — o número de revisões está indicado logo no início.",
        ondeEstaNoTexto: "Ela revisou o texto três vezes, usando um checklist...",
      },
      {
        pergunta: "O que aconteceu quando Beatriz leu o texto em voz alta para o pai?",
        opcoes: [
          "Ele não percebeu nenhum problema",
          "Ele apontou um trecho confuso no meio do texto",
          "Ele pediu para reescrever o texto inteiro",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Exato! A leitura em voz alta ajudou a identificar um trecho confuso, que precisou de ajuste.",
        feedbackErro: "O segundo parágrafo conta o que o pai percebeu ao ouvir a leitura — releia com atenção.",
        ondeEstaNoTexto: "...que apontou um trecho confuso no meio do texto.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "REVISÃO é ler o próprio texto com atenção crítica, buscando erros de sentido, gramática, pontuação e organização.",
      "Um bom CHECKLIST de revisão pergunta: o texto cumpre o objetivo? As ideias estão organizadas? Há repetições? A ortografia está correta?",
      "Ler o texto em voz alta ajuda a perceber frases confusas que passariam despercebidas na leitura silenciosa.",
      "REESCREVER faz parte natural do processo de escrita — não é sinal de fracasso, mas de cuidado com o texto final.",
    ],
    miniDesafio: {
      pergunta:
        "Um aluno percebeu, ao revisar, que repetiu a palavra 'bonito' cinco vezes em um parágrafo. O que ele deve fazer?",
      opcoes: [
        "Deixar como está, pois já terminou de escrever",
        "Reescrever, substituindo algumas repetições por sinônimos",
        "Apagar o parágrafo inteiro sem reescrever",
      ],
      correta: 1,
      feedbackAcerto:
        "🔍 Isso! O caminho certo é reescrever, substituindo parte das repetições por sinônimos — isso melhora a coesão do texto.",
      feedbackErro:
        "A revisão serve exatamente para identificar esse tipo de problema e reescrever, e não para ignorá-lo ou apagar tudo.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é 'revisão' de um texto?",
        opcoes: [
          "Ler o texto com atenção crítica, buscando erros e pontos a melhorar",
          "Copiar o texto de outra pessoa",
          "Escrever um texto totalmente novo, sem ler o anterior",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Isso! Revisão é ler criticamente o próprio texto em busca de melhorias.",
        feedbackErro: "Revisão é o ato de reler o texto com atenção, procurando erros e problemas a corrigir.",
      },
      {
        pergunta: "2/5 — Para que serve um 'checklist de revisão'?",
        opcoes: [
          "Para decorar o texto com desenhos",
          "Para orientar a revisão, garantindo que nada importante seja esquecido",
          "Para contar quantas palavras o texto tem",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Correto! O checklist organiza a revisão em itens claros a conferir.",
        feedbackErro: "O checklist é uma lista de perguntas/itens que orienta o que revisar no texto.",
      },
      {
        pergunta: "3/5 — Por que ler o texto em voz alta ajuda na revisão?",
        opcoes: [
          "Porque revela tropeços que indicam frases confusas",
          "Porque deixa a letra mais bonita",
          "Porque aumenta o tamanho do texto",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Exato! Os tropeços na fala apontam onde o texto precisa de ajuste.",
        feedbackErro: "Ao ler em voz alta, percebemos melhor onde o texto 'trava' — isso indica um problema de clareza.",
      },
      {
        pergunta: "4/5 — No texto sobre Beatriz, o que ela fez após identificar um trecho confuso?",
        opcoes: [
          "Ignorou o problema e entregou o texto do mesmo jeito",
          "Reescreveu o parágrafo final para deixá-lo mais claro",
          "Desistiu de participar do concurso",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Isso! Ela reescreveu o trecho, o que melhorou o resultado final do texto.",
        feedbackErro: "Releia o final do texto: Beatriz reescreveu o parágrafo final após a revisão.",
      },
      {
        pergunta: "5/5 — Qual é a mensagem principal sobre reescrever um texto?",
        opcoes: [
          "Reescrever é sinal de fracasso e deve ser evitado",
          "Reescrever é parte natural do processo de escrita e melhora o resultado final",
          "Só escritores ruins precisam reescrever",
        ],
        correta: 1,
        feedbackAcerto:
          "🔍 Isso! Você concluiu toda a Oficina de Escrita: planejar, argumentar, costurar e revisar. Missão cumprida! 🌟",
        feedbackErro: "Reescrever faz parte do processo de qualquer bom texto — é assim que ele melhora até a versão final.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: revisando um texto em família",
    materiais: ["Um texto já escrito pela criança (de qualquer aula anterior)", "Lápis colorido"],
    passos: [
      "1) A criança escolhe um texto que já escreveu (bilhete, redação, parágrafo).",
      "2) Ela lê o texto em voz alta para um adulto da família.",
      "3) Juntos, marcam com o checklist: o texto cumpre o objetivo? As ideias estão organizadas? Há repetições? A ortografia está correta?",
      "4) A criança reescreve pelo menos um trecho, aplicando o que encontrou na revisão.",
    ],
    registro: "🗣️ Registre por escrito o trecho antes e depois da reescrita, mostrando a melhoria feita.",
  },

  recompensa: {
    xp: 140,
    moedas: 85,
    medalha: "Oficina de Escrita concluída",
  },
};
