import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as quadroAlegre } from "@/assets/neuro-treino/objetos/quadro-alegre.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as professora } from "@/assets/neuro-treino/objetos/professora.png.asset.json";

/**
 * Aula 4 — Revisar é reescrever
 * Fechamento da Unidade 5. Checklist de revisão de texto.
 * BNCC: EF35LP25, EF35LP26
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-revisar-e-reescrever",
  titulo: "Revisar é reescrever",
  iconeTrilha: "🔎",
  bncc: ["EF35LP25", "EF35LP26"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "O detetive lê o próprio caso de novo",
    historia:
      "Aurora entregou ao clube um espelho e disse: — Todo bom detetive-escritor volta ao próprio texto como se fosse um estranho lendo pela primeira vez. Isso se chama REVISAR. Não é procurar defeito por procurar — é dar ao seu texto a chance de ficar ainda melhor. Vamos aprender o checklist secreto do clube?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Observe este texto com alguns probleminhas. O que você acha que precisa ser revisado nele?",
    bloco: {
      titulo: "O Texto Cheio de Pistas Erradas",
      capaImagemUrl: papel,
      recado: {
        rotulo: "Rascunho de Rafael",
        icone: "📝",
        linhas: [
          "o cachorro correu correu correu no parque",
          "ele viu Um Gato",
          "o gato subiu na arvore",
        ],
        estilo: "papel",
      },
      pergunta: "O que esse rascunho precisa na revisão?",
      hipoteses: [
        { texto: "Nada, já está perfeito." },
        { texto: "Corrigir maiúsculas, pontuação e a palavra repetida 'correu'." },
        { texto: "Trocar todas as palavras por outras completamente diferentes." },
      ],
      respostaCerta: 1,
      feedbackAcerto: "🔎 Isso! Faltam maiúsculas certas, pontos finais e evitar repetir 'correu' três vezes seguidas.",
      feedbackErro: "Observe: começo de frase sem maiúscula, sem ponto final, 'Um' e 'arvore' com erro e 'correu' repetido — tudo isso é o que revisamos.",
      dica: "🔎 Pista: lembre do que significa “revisar” — É ler de novo o próprio texto procurando erros e formas de melhorar — como um detetive procurando pistas. Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras que todo escritor usa ao terminar um texto.",
    cards: [
      {
        palavra: "revisar",
        explicacao: "É ler de novo o próprio texto procurando erros e formas de melhorar — como um detetive procurando pistas.",
        exemplo: "Depois de escrever, Rafael revisou o texto e corrigiu a pontuação.",
        imagemUrl: lapis,
      },
      {
        palavra: "reescrever",
        explicacao: "É passar o texto a limpo depois da revisão, já com as correções feitas.",
        exemplo: "Depois de revisar, Rafael reescreveu o texto sem os erros.",
        imagemUrl: papel,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "O checklist de revisão do Clube",
    instrucao: "Quatro perguntas que todo detetive-escritor faz ao revisar.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "1) Toda frase começa com letra MAIÚSCULA?", explicacao: "É o sinal de que uma nova frase está começando." },
          { texto: "2) Toda frase termina com PONTO (ou ! ou ?)?", explicacao: "O ponto avisa o leitor onde a ideia termina." },
          { texto: "3) Alguma palavra se repete demais e pode ser trocada?", explicacao: "Variar as palavras deixa o texto mais interessante." },
          { texto: "4) O texto está CLARO? Um leitor entenderia sem perguntar nada?", explicacao: "Se algo ficou confuso, é hora de reescrever aquela parte." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia o rascunho de Rafael e depois a versão revisada. Compare as diferenças.",
    leitura: {
      titulo: "Antes e Depois da Revisão",
      imagemUrl: menina,
      legendaImagem: "Rafael revisando seu texto",
      destacar: ["Antes", "Depois"],
      paragrafos: [
        "Antes: o cachorro correu correu correu no parque. ele viu Um Gato. o gato subiu na arvore.",
        "Depois: O cachorro disparou pelo parque. De repente, ele viu um gato e latiu animado. Assustado, o gato subiu correndo na árvore.",
        "Rafael trocou a repetição de 'correu' por 'disparou', colocou maiúsculas certas, pontos finais e deixou o texto mais claro e interessante.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto sempre que precisar.",
    perguntas: [
      { pergunta: "Qual palavra Rafael usou no lugar de 'correu correu correu'?", opcoes: ["andou", "disparou", "pulou"], correta: 1, feedbackAcerto: "🔎 Isso! Ele usou 'disparou' para não repetir a mesma palavra.", feedbackErro: "Releia o segundo parágrafo (Depois).", ondeEstaNoTexto: "O cachorro disparou pelo parque.",
        dica: "🔎 Pista: releia no texto o trecho “O cachorro disparou pelo parque.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: revisar — É ler de novo o próprio texto procurando erros e formas de melhorar — como um detetive procurando pistas. Exemplo: Depois de escrever, Rafael revisou o texto e corrigiu a pontuação. Agora volte à pergunta “Qual palavra Rafael usou no lugar de 'correu correu correu'?” com essa ideia na cabeça.",
      },
      { pergunta: "O que aconteceu com o gato na versão revisada?", opcoes: ["Ele dormiu", "Ele subiu correndo na árvore, assustado", "Ele fugiu de bicicleta"], correta: 1, feedbackAcerto: "🔎 Isso! 'Assustado, o gato subiu correndo na árvore.'", feedbackErro: "Está no final do segundo parágrafo.", ondeEstaNoTexto: "Assustado, o gato subiu correndo na árvore.",
        dica: "🔎 Pista: releia no texto o trecho “Assustado, o gato subiu correndo na árvore.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: revisar — É ler de novo o próprio texto procurando erros e formas de melhorar — como um detetive procurando pistas. Exemplo: Depois de escrever, Rafael revisou o texto e corrigiu a pontuação. Agora volte à pergunta “O que aconteceu com o gato na versão revisada?” com essa ideia na cabeça.",
      },
      { pergunta: "O que Rafael corrigiu, além da palavra repetida?", opcoes: ["Maiúsculas e pontos finais", "O nome do cachorro", "O final da história"], correta: 0, feedbackAcerto: "🔎 Correto! Está no terceiro parágrafo.", feedbackErro: "Releia o último parágrafo — ele lista o que foi corrigido.", ondeEstaNoTexto: "…colocou maiúsculas certas, pontos finais e deixou o texto mais claro…",
        dica: "🔎 Pista: releia no texto o trecho “…colocou maiúsculas certas, pontos finais e deixou o texto mais claro…”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: revisar — É ler de novo o próprio texto procurando erros e formas de melhorar — como um detetive procurando pistas. Exemplo: Depois de escrever, Rafael revisou o texto e corrigiu a pontuação. Agora volte à pergunta “O que Rafael corrigiu, além da palavra repetida?” com essa ideia na cabeça.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Vamos entender por que cada correção deixou o texto melhor.",
    perguntas: [
      { pergunta: "Por que repetir 'correu correu correu' não é uma boa escolha?", opcoes: ["Porque é proibido repetir qualquer palavra", "Porque fica cansativo e existe uma palavra mais interessante", "Porque 'correu' está errado"], correta: 1, feedbackAcerto: "🔎 Isso! Repetição em excesso cansa o leitor — variar deixa o texto mais rico.", feedbackErro: "O problema não é a palavra em si, mas repeti-la sem necessidade. Existe uma palavra melhor: 'disparou'.",
        dica: "🔎 Pista: lembre do que significa “revisar” — É ler de novo o próprio texto procurando erros e formas de melhorar — como um detetive procurando pistas. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: revisar — É ler de novo o próprio texto procurando erros e formas de melhorar — como um detetive procurando pistas. Exemplo: Depois de escrever, Rafael revisou o texto e corrigiu a pontuação. Agora volte à pergunta “Por que repetir 'correu correu correu' não é uma boa escolha?” com essa ideia na cabeça.",
      },
      { pergunta: "Por que colocar maiúscula no começo de frase é importante?", opcoes: ["Só por enfeite", "Para o leitor saber onde uma nova frase começa", "Não é importante"], correta: 1, feedbackAcerto: "🔎 Correto! A maiúscula avisa o início de uma nova ideia.", feedbackErro: "A maiúscula marca claramente onde cada frase começa, ajudando na leitura.",
        dica: "🔎 Pista: lembre do que significa “revisar” — É ler de novo o próprio texto procurando erros e formas de melhorar — como um detetive procurando pistas. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: revisar — É ler de novo o próprio texto procurando erros e formas de melhorar — como um detetive procurando pistas. Exemplo: Depois de escrever, Rafael revisou o texto e corrigiu a pontuação. Agora volte à pergunta “Por que colocar maiúscula no começo de frase é importante?” com essa ideia na cabeça.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos da revisão do Clube na ordem certa.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Escrever o rascunho da história, sem se preocupar com erros.", imagemUrl: lapis },
        { id: "p2", texto: "Reler o texto usando o checklist (maiúscula, ponto, repetição, clareza).", imagemUrl: papel },
        { id: "p3", texto: "Reescrever o texto já com as correções, deixando-o pronto.", imagemUrl: estrela },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🔎 Perfeito! Escrever, revisar e depois reescrever — essa é a ordem certa.",
      feedbackErro: "Pense: primeiro se escreve livre, depois se revisa com o checklist, só então se reescreve.",
      dica: "🔎 Pista: lembre do que significa “revisar” — É ler de novo o próprio texto procurando erros e formas de melhorar — como um detetive procurando pistas. Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho e responda usando o que aprendeu sobre revisão.",
    leitura: {
      titulo: "O Caderno de Marina",
      imagemUrl: professora,
      destacar: ["revisou", "trocou", "corrigiu"],
      paragrafos: [
        "Marina escreveu um conto sobre uma viagem à praia, mas usou a palavra 'legal' cinco vezes seguidas.",
        "Na revisão, ela trocou 'legal' por palavras diferentes, como 'incrível', 'divertido' e 'emocionante'.",
        "Ela também corrigiu duas frases que estavam sem ponto final e reescreveu o conto a limpo, orgulhosa do resultado.",
      ],
    },
    perguntas: [
      { pergunta: "Qual palavra Marina repetiu demais no rascunho?", opcoes: ["legal", "praia", "viagem"], correta: 0, feedbackAcerto: "🔎 Isso! Ela usou 'legal' cinco vezes.", feedbackErro: "Está na primeira frase do texto.", ondeEstaNoTexto: "…usou a palavra 'legal' cinco vezes seguidas.",
        dica: "🔎 Pista: releia no texto o trecho “…usou a palavra 'legal' cinco vezes seguidas.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: revisar — É ler de novo o próprio texto procurando erros e formas de melhorar — como um detetive procurando pistas. Exemplo: Depois de escrever, Rafael revisou o texto e corrigiu a pontuação. Agora volte à pergunta “Qual palavra Marina repetiu demais no rascunho?” com essa ideia na cabeça.",
      },
      { pergunta: "O que mais Marina corrigiu, além da palavra repetida?", opcoes: ["O título do conto", "Frases sem ponto final", "O nome da praia"], correta: 1, feedbackAcerto: "🔎 Isso! Ela corrigiu frases sem ponto final.", feedbackErro: "Releia o último parágrafo.", ondeEstaNoTexto: "…corrigiu duas frases que estavam sem ponto final…",
        dica: "🔎 Pista: releia no texto o trecho “…corrigiu duas frases que estavam sem ponto final…”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: revisar — É ler de novo o próprio texto procurando erros e formas de melhorar — como um detetive procurando pistas. Exemplo: Depois de escrever, Rafael revisou o texto e corrigiu a pontuação. Agora volte à pergunta “O que mais Marina corrigiu, além da palavra repetida?” com essa ideia na cabeça.",
      },
    ],
  },

  momento_escrita: {
    titulo: "Oficina de Escrita do Detetive",
    instrucao:
      "Três passos de escritor de verdade: primeiro o RASCUNHO, depois a REVISÃO com a lista de conferência e, por último, a VERSÃO FINAL.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Rascunho e versão final",
        comando: "Escreva um parágrafo sobre o seu dia. Depois releia, conserte o que faltou (letra maiúscula, ponto final, palavra repetida) e escreva a versão final.",
        linhas: 4,
        modelo: [
          "Hoje eu acordei cedo e fui à escola.",
          "Na aula, aprendi a revisar um texto.",
          "Gostei de deixar tudo certinho.",
        ],
        checklist: [
          "Comecei cada frase com letra MAIÚSCULA.",
          "Usei ponto final no fim de cada frase.",
          "Meu texto fala do tema pedido, do começo ao fim.",
          "Reli em voz alta e consertei o que estava estranho.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  // ------------------------------------------------------------
  // FLUÊNCIA · releitura cronometrada (Fase 4 · 3º ano · ~90 ppm)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Leitura de detetive: Antes e Depois da Revisão",
    instrucao:
      "Detetive lê rápido, mas não atropela. Leia este trecho três vezes: a 1ª devagar entendendo tudo, a 2ª no cronômetro e a 3ª em voz alta com entonação — respeitando vírgula e ponto. A meta é ler sem tropeçar, não correr.",
    texto: [
      "Antes: o cachorro correu correu correu no parque.",
      "ele viu Um Gato.",
      "o gato subiu na arvore.",
      "Depois: O cachorro disparou pelo parque.",
      "De repente, ele viu um gato e latiu animado.",
      "Assustado, o gato subiu correndo na árvore.",
      "Rafael trocou a repetição de 'correu' por 'disparou', colocou maiúsculas certas, pontos finais e deixou o texto mais claro e interessante.",
    ],
    metaSegundos: 40,
  },

  momento09_revisao: {
    pontos: [
      "Revisar é reler o próprio texto como um detetive, procurando o que pode melhorar.",
      "O checklist do Clube: maiúsculas certas, pontuação, palavras repetidas e clareza.",
      "Reescrever é passar o texto a limpo já com as correções feitas.",
      "Todo bom escritor revisa — ninguém escreve perfeito na primeira tentativa.",
    ],
    miniDesafio: {
      pergunta: "Uma frase termina sem ponto final e sem maiúscula na próxima. O que fazer na revisão?",
      opcoes: [
        "Deixar do jeito que está",
        "Colocar o ponto final e a maiúscula na frase seguinte",
        "Apagar a frase inteira"
      ],
      correta: 1,
      feedbackAcerto: "🔎 Isso! É exatamente isso que o checklist pede: pontuação e maiúscula certas.",
      feedbackErro: "O checklist pede pontuação correta: ponto final e maiúscula na frase seguinte.",
      dica: "🔎 Pista: lembre do que significa “revisar” — É ler de novo o próprio texto procurando erros e formas de melhorar — como um detetive procurando pistas. Use isso para eliminar as alternativas que não combinam.",
      reensino: "📚 Vamos rever juntos: revisar — É ler de novo o próprio texto procurando erros e formas de melhorar — como um detetive procurando pistas. Exemplo: Depois de escrever, Rafael revisou o texto e corrigiu a pontuação. Agora volte à pergunta “Uma frase termina sem ponto final e sem maiúscula na próxima. O que f…” com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "1/5 — O que significa 'revisar' um texto?", opcoes: [
          "Pular a palavra difícil e seguir lendo sem entender",
          "Apagar tudo e começar de novo",
          "Reler procurando o que pode melhorar",
          "Ler só o título",
        ], correta: 2,
        feedbackOpcoes: [
          "❌ “Pular a palavra difícil e seguir lendo sem entender” não é a resposta. Revisar é reler com atenção, procurando melhorias.",
          "❌ “Apagar tudo e começar de novo” não é a resposta. Revisar é reler com atenção, procurando melhorias.",
          null,
          "❌ “Ler só o título” não é a resposta. Revisar é reler com atenção, procurando melhorias.",
        ], feedbackAcerto: "🔎 Isso!", feedbackErro: "Revisar é reler com atenção, procurando melhorias.",
        dica: "🔎 Pista: lembre do que significa “revisar” — É ler de novo o próprio texto procurando erros e formas de melhorar — como um detetive procurando pistas. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: revisar — É ler de novo o próprio texto procurando erros e formas de melhorar — como um detetive procurando pistas. Exemplo: Depois de escrever, Rafael revisou o texto e corrigiu a pontuação. Agora volte à pergunta “1/5 — O que significa 'revisar' um texto?” com essa ideia na cabeça.",
      },
      { pergunta: "2/5 — Qual NÃO é um item do checklist de revisão do Clube?", opcoes: [
          "Maiúsculas certas",
          "Usar N antes de P e de B",
          "Pontuação",
          "Quantidade de páginas do livro",
        ], correta: 3,
        feedbackOpcoes: [
          "❌ “Maiúsculas certas” não é a resposta. O checklist trata de maiúsculas, pontuação, repetição e clareza — não da quantidade de páginas.",
          "❌ “Usar N antes de P e de B” não é a resposta. O checklist trata de maiúsculas, pontuação, repetição e clareza — não da quantidade de páginas.",
          "❌ “Pontuação” não é a resposta. O checklist trata de maiúsculas, pontuação, repetição e clareza — não da quantidade de páginas.",
          null,
        ], feedbackAcerto: "🔎 Correto!", feedbackErro: "O checklist trata de maiúsculas, pontuação, repetição e clareza — não da quantidade de páginas.",
        dica: "🔎 Pista: lembre do que significa “revisar” — É ler de novo o próprio texto procurando erros e formas de melhorar — como um detetive procurando pistas. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: revisar — É ler de novo o próprio texto procurando erros e formas de melhorar — como um detetive procurando pistas. Exemplo: Depois de escrever, Rafael revisou o texto e corrigiu a pontuação. Agora volte à pergunta “2/5 — Qual NÃO é um item do checklist de revisão do Clube?” com essa ideia na cabeça.",
      },
      { pergunta: "3/5 — Por que trocar palavras repetidas é bom?", opcoes: [
          "Deixa o texto mais variado e interessante",
          "Depende só do gosto de quem lê, sem olhar o texto",
          "É proibido repetir qualquer palavra",
          "Não muda nada",
        ], correta: 0,
        feedbackOpcoes: [
          null,
          "❌ “Depende só do gosto de quem lê, sem olhar o texto” não é a resposta. Variar as palavras deixa o texto mais rico para o leitor.",
          "❌ “É proibido repetir qualquer palavra” não é a resposta. Variar as palavras deixa o texto mais rico para o leitor.",
          "❌ “Não muda nada” não é a resposta. Variar as palavras deixa o texto mais rico para o leitor.",
        ], feedbackAcerto: "🔎 Isso!", feedbackErro: "Variar as palavras deixa o texto mais rico para o leitor.",
        dica: "🔎 Pista: lembre do que significa “revisar” — É ler de novo o próprio texto procurando erros e formas de melhorar — como um detetive procurando pistas. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: revisar — É ler de novo o próprio texto procurando erros e formas de melhorar — como um detetive procurando pistas. Exemplo: Depois de escrever, Rafael revisou o texto e corrigiu a pontuação. Agora volte à pergunta “3/5 — Por que trocar palavras repetidas é bom?” com essa ideia na cabeça.",
      },
      { pergunta: "4/5 — O que é 'reescrever'?", opcoes: [
          "Escrever pela primeira vez",
          "Passar o texto a limpo já corrigido",
          "Entregar o texto do jeito que saiu na primeira vez",
          "Apagar a história",
        ], correta: 1,
        feedbackOpcoes: [
          "❌ “Escrever pela primeira vez” não é a resposta. Reescrever é passar a limpo o texto já com as correções da revisão.",
          null,
          "❌ “Entregar o texto do jeito que saiu na primeira vez” não é a resposta. Reescrever é passar a limpo o texto já com as correções da revisão.",
          "❌ “Apagar a história” não é a resposta. Reescrever é passar a limpo o texto já com as correções da revisão.",
        ], feedbackAcerto: "🔎 Isso mesmo!", feedbackErro: "Reescrever é passar a limpo o texto já com as correções da revisão.",
        dica: "🔎 Pista: lembre do que significa “revisar” — É ler de novo o próprio texto procurando erros e formas de melhorar — como um detetive procurando pistas. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: revisar — É ler de novo o próprio texto procurando erros e formas de melhorar — como um detetive procurando pistas. Exemplo: Depois de escrever, Rafael revisou o texto e corrigiu a pontuação. Agora volte à pergunta “4/5 — O que é 'reescrever'?” com essa ideia na cabeça.",
      },
      { pergunta: "5/5 — Depois de escrever, revisar e reescrever, o que Marina sentiu?", opcoes: [
          "Orgulho do resultado",
          "Vergonha",
          "Nada em especial",
          "Entregar o texto do jeito que saiu na primeira vez",
        ], correta: 0,
        feedbackOpcoes: [
          null,
          "❌ “Vergonha” não é a resposta. O texto diz que ela reescreveu 'orgulhosa do resultado'.",
          "❌ “Nada em especial” não é a resposta. O texto diz que ela reescreveu 'orgulhosa do resultado'.",
          "❌ “Entregar o texto do jeito que saiu na primeira vez” não é a resposta. O texto diz que ela reescreveu 'orgulhosa do resultado'.",
        ], feedbackAcerto: "🔎 Isso! Ela ficou orgulhosa. Você concluiu a Unidade 5 — Pena de Ouro conquistada! 🌟", feedbackErro: "O texto diz que ela reescreveu 'orgulhosa do resultado'.",
        dica: "🔎 Pista: lembre do que significa “revisar” — É ler de novo o próprio texto procurando erros e formas de melhorar — como um detetive procurando pistas. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: revisar — É ler de novo o próprio texto procurando erros e formas de melhorar — como um detetive procurando pistas. Exemplo: Depois de escrever, Rafael revisou o texto e corrigiu a pontuação. Agora volte à pergunta “5/5 — Depois de escrever, revisar e reescrever, o que Marina sentiu?” com essa ideia na cabeça.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: revisando em família",
    materiais: ["O texto escrito nas missões anteriores (ou um novo texto curto)", "Lápis colorido"],
    passos: [
      "1) Peguem um texto que a criança já escreveu (ou escrevam um novo, curto).",
      "2) Usem o checklist do Clube: maiúsculas, pontos finais, palavras repetidas e clareza.",
      "3) Marquem com o lápis colorido tudo que pode melhorar.",
      "4) Reescrevam o texto a limpo, já corrigido, e leiam em voz alta comparando com a versão antiga.",
    ],
    registro: "🗣️ Guardem as duas versões (antes e depois) para comparar o quanto o texto melhorou.",
  },

  recompensa: {
    xp: 120,
    moedas: 70,
    medalha: "Pena de Ouro do Clube",
  },
};
