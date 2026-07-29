import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 1 — Planejamento do texto
 * -------------------------------------------------------------
 * Abertura da Unidade 5 (Oficina de Escrita). A investigação: todo
 * texto bem escrito nasce de um planejamento — definir objetivo,
 * público e roteiro antes de escrever a primeira palavra.
 *
 * Foco pedagógico: reconhecer que escrever é um processo com etapas
 * (planejar → produzir → revisar), e treinar a etapa de planejamento:
 * objetivo do texto, público-alvo e roteiro de ideias.
 *
 * BNCC: EF05LP03, EF05LP24, EF35LP24, EF05LP25
 */
export const aula1: AulaPortuguesV4 = {
  slug: "aula-01-planejamento-do-texto",
  titulo: "Planejamento do Texto",
  iconeTrilha: "🧪",
  bncc: ["EF05LP03", "EF05LP24", "EF35LP24"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "Bem-vindo à Oficina de Escrita",
    historia:
      "A investigadora abriu o caderno de campo sobre a bancada da oficina. — Muita gente acha que escrever é só 'sentar e sair escrevendo'. Mas todo texto bem construído nasce de um plano: por que vou escrever isso, para quem vou escrever e o que vou dizer, na ordem certa. Hoje você vira engenheiro de texto: antes de erguer qualquer construção, é preciso planta baixa. Vamos montar a sua?",
  },

  momento02_previsao: {
    instrucao:
      "Antes de conhecer o método de planejamento, observe este roteiro rascunhado por um escritor antes de produzir um texto. O que ele revela sobre o processo de escrever?",
    bloco: {
      titulo: "O Rascunho da Redatora Marina",
      recado: {
        rotulo: "Bloco de anotações",
        icone: "🗒️",
        linhas: [
          "Objetivo: convencer a turma a reciclar o lixo da escola",
          "Público: colegas do 5º ano",
          "Ideia 1: o problema do lixo no pátio",
          "Ideia 2: por que reciclar ajuda",
          "Ideia 3: pedido de ação",
        ],
        estilo: "papel",
      },
      pergunta: "O que Marina fez ANTES de começar a escrever o texto final?",
      hipoteses: [
        { texto: "Ela planejou o objetivo, o público e a ordem das ideias" },
        { texto: "Ela escreveu o texto todo de uma vez, sem pensar antes" },
        { texto: "Ela copiou um texto pronto de outro colega" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🧪 Exato! Marina montou um plano: definiu o objetivo (convencer), o público (colegas) e organizou as ideias em ordem. Isso é planejamento de texto.",
      feedbackErro:
        "Releia o bloco de anotações: antes de escrever, Marina já sabia o objetivo, o público e a ordem das ideias. Isso é planejar, não escrever direto.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três termos que todo bom planejador de texto usa na oficina.",
    cards: [
      {
        palavra: "objetivo do texto",
        explicacao:
          "É o motivo pelo qual você está escrevendo: informar, convencer, contar uma história, explicar algo. Definir o objetivo primeiro evita textos sem direção.",
        exemplo: "Se o objetivo é 'convencer a turma a reciclar', cada parágrafo deve reforçar essa meta.",
      },
      {
        palavra: "público-alvo",
        explicacao:
          "É para quem o texto é escrito. O público influencia a linguagem, os exemplos e até o tamanho do texto.",
        exemplo: "Escrever para colegas de escola pede uma linguagem diferente de escrever para um jornal adulto.",
      },
      {
        palavra: "roteiro",
        explicacao:
          "É a lista organizada das ideias que vão entrar no texto, na ordem em que vão aparecer — o esqueleto antes da escrita final.",
        exemplo: "Um roteiro pode ser: 1) apresentar o problema, 2) explicar a causa, 3) propor uma solução.",
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia como um investigador de processos: procure onde o autor definiu objetivo, público e roteiro antes de escrever.",
    leitura: {
      titulo: "Como Nasce um Texto Bem Planejado",
      destacar: ["objetivo claro", "pensar no público", "organizar as ideias antes de escrever"],
      paragrafos: [
        "Escritores experientes raramente começam a escrever direto no papel em branco. Antes disso, eles respondem a três perguntas: por que este texto existe, para quem ele é destinado e quais ideias precisam aparecer, e em que ordem. Ter um objetivo claro é o primeiro passo, porque ele guia todas as escolhas seguintes.",
        "Pensar no público também muda o resultado final. Um texto sobre reciclagem escrito para crianças usa exemplos simples e frases curtas; o mesmo assunto, escrito para uma prefeitura, pode usar dados e uma linguagem mais formal. Por isso, antes de escrever, vale perguntar: quem vai ler isso, e o que essa pessoa já sabe sobre o assunto?",
        "Por fim, organizar as ideias antes de escrever evita textos bagunçados, que voltam ao mesmo ponto várias vezes. Um roteiro simples — mesmo que seja só uma lista de tópicos — já ajuda a garantir que o texto tenha começo, meio e fim, sem repetições nem buracos na explicação.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao texto sempre que precisar confirmar sua resposta.",
    perguntas: [
      {
        pergunta: "Segundo o texto, qual é o primeiro passo antes de escrever?",
        opcoes: [
          "Definir um objetivo claro para o texto",
          "Escolher a fonte e o tamanho da letra",
          "Contar quantas páginas o texto vai ter",
        ],
        correta: 0,
        feedbackAcerto: "🧪 Isso! O texto diz: 'Ter um objetivo claro é o primeiro passo'.",
        feedbackErro: "Releia o final do primeiro parágrafo — lá está o primeiro passo indicado.",
        ondeEstaNoTexto: "Ter um objetivo claro é o primeiro passo, porque ele guia todas as escolhas seguintes.",
      },
      {
        pergunta: "Por que pensar no público-alvo muda o texto?",
        opcoes: [
          "Porque muda a linguagem e os exemplos usados",
          "Porque o público escolhe o título do texto",
          "Porque não muda nada, é só um detalhe",
        ],
        correta: 0,
        feedbackAcerto: "🧪 Correto! O texto compara: linguagem simples para crianças, mais formal para uma prefeitura.",
        feedbackErro: "O segundo parágrafo compara exemplos de linguagem para públicos diferentes — releia com atenção.",
        ondeEstaNoTexto: "Um texto sobre reciclagem escrito para crianças usa exemplos simples e frases curtas...",
      },
      {
        pergunta: "O que acontece quando não se organiza as ideias antes de escrever?",
        opcoes: [
          "O texto fica mais criativo",
          "O texto pode ficar bagunçado, repetindo pontos e com buracos na explicação",
          "Nada muda no resultado final",
        ],
        correta: 1,
        feedbackAcerto: "🧪 Exato! O texto avisa sobre 'textos bagunçados' e 'buracos na explicação'.",
        feedbackErro: "O último parágrafo explica o risco de não planejar — releia a frase final.",
        ondeEstaNoTexto: "...evita textos bagunçados, que voltam ao mesmo ponto várias vezes.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora aplique o método: analise situações de planejamento de texto.",
    perguntas: [
      {
        pergunta:
          "Um aluno vai escrever um convite para a festa junina da escola. Qual seria o roteiro mais adequado?",
        opcoes: [
          "Data e local → o que vai ter na festa → como confirmar presença",
          "Uma lista de todos os alunos da escola",
          "Uma explicação sobre a história das festas juninas no Brasil",
        ],
        correta: 0,
        feedbackAcerto:
          "🧪 Isso mesmo! Um convite precisa de informações práticas e organizadas: quando, onde, o que vai acontecer e como confirmar.",
        feedbackErro:
          "Pense no OBJETIVO do convite: informar sobre o evento. Um roteiro prático de convite traz data, local, atrações e confirmação.",
      },
      {
        pergunta:
          "Se o público-alvo de um texto são crianças de 6 anos, o que muda em relação a um texto para adultos?",
        opcoes: [
          "Nada muda, o texto é sempre igual",
          "A linguagem fica mais simples, com frases curtas e palavras conhecidas",
          "O texto precisa ficar mais formal e com termos técnicos",
        ],
        correta: 1,
        feedbackAcerto:
          "🧪 Perfeito! Adaptar a linguagem ao público é parte essencial do planejamento — sem isso, o texto não é compreendido por quem vai lê-lo.",
        feedbackErro:
          "Lembre-se: o público influencia a linguagem. Para crianças pequenas, frases curtas e palavras simples funcionam melhor.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize as etapas do planejamento de um texto na ordem correta.",
    bloco: {
      instrucao: "Do início ao fim do planejamento.",
      itens: [
        { id: "p1", texto: "Definir o objetivo: por que este texto vai ser escrito" },
        { id: "p2", texto: "Pensar no público: quem vai ler e o que essa pessoa já sabe" },
        { id: "p3", texto: "Montar o roteiro: listar as ideias na ordem em que vão aparecer" },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🧪 Correto! Objetivo, público e roteiro — nessa ordem, o planejamento fica sólido.",
      feedbackErro:
        "Pense: primeiro é preciso saber POR QUE escrever, depois PARA QUEM, e só então O QUE E EM QUE ORDEM dizer.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo relatório da oficina! Leia sozinho e identifique as decisões de planejamento tomadas.",
    leitura: {
      titulo: "O Plano por Trás do Texto sobre Animais em Extinção",
      destacar: ["objetivo era alertar", "público eram estudantes", "roteiro com três partes"],
      paragrafos: [
        "Antes de escrever um artigo sobre animais em extinção para o jornal da escola, Rafael decidiu que o objetivo era alertar os colegas sobre o problema e incentivar pequenas atitudes de proteção. Como o público eram estudantes do 5º ano, ele optou por uma linguagem direta, com exemplos de animais conhecidos, como a onça-pintada e o mico-leão-dourado.",
        "Para organizar as ideias, Rafael montou um roteiro com três partes: primeiro, explicaria o que significa 'extinção'; depois, mostraria exemplos de animais brasileiros ameaçados; por fim, traria sugestões simples do que os alunos poderiam fazer para ajudar.",
        "Só depois de ter esse plano pronto, no papel, Rafael começou a escrever o texto final. O resultado foi um artigo claro, sem repetições, que seguiu exatamente a ordem planejada.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual era o objetivo do texto de Rafael?",
        opcoes: [
          "Alertar os colegas e incentivar atitudes de proteção aos animais",
          "Vender produtos sobre animais silvestres",
          "Contar uma história de ficção sobre animais",
        ],
        correta: 0,
        feedbackAcerto: "🧪 Isso! O primeiro parágrafo define exatamente esse objetivo.",
        feedbackErro: "Releia o início do texto — o objetivo aparece logo na primeira frase.",
        ondeEstaNoTexto: "...o objetivo era alertar os colegas sobre o problema e incentivar pequenas atitudes de proteção.",
      },
      {
        pergunta: "Como o roteiro de Rafael estava organizado?",
        opcoes: [
          "Sem nenhuma ordem, ele escreveu conforme lembrava",
          "Em três partes: o que é extinção, exemplos de animais, sugestões de ajuda",
          "Apenas com uma lista de nomes de animais",
        ],
        correta: 1,
        feedbackAcerto: "🧪 Exato! O segundo parágrafo descreve as três partes do roteiro na ordem planejada.",
        feedbackErro: "O segundo parágrafo detalha as três partes do roteiro — releia com atenção.",
        ondeEstaNoTexto: "...montou um roteiro com três partes: primeiro... depois... por fim...",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "Planejar um texto significa definir OBJETIVO (por que escrever), PÚBLICO (para quem escrever) e ROTEIRO (o que dizer, em que ordem).",
      "O objetivo guia todas as escolhas do texto: palavras, exemplos e até o tamanho das frases.",
      "O público-alvo influencia a linguagem: mais simples para crianças, mais formal para públicos especializados.",
      "Um roteiro, mesmo simples, evita textos bagunçados, com repetições ou buracos na explicação.",
    ],
    miniDesafio: {
      pergunta:
        "Você vai escrever um bilhete para avisar os pais sobre uma excursão da turma. Qual é o PRIMEIRO passo do planejamento?",
      opcoes: [
        "Definir o objetivo: avisar sobre a excursão",
        "Decidir a cor da caneta que vai usar",
        "Escrever o texto inteiro sem pensar antes",
      ],
      correta: 0,
      feedbackAcerto: "🧪 Isso! Definir o objetivo é sempre o primeiro passo do planejamento.",
      feedbackErro: "Antes de qualquer outra decisão, é preciso saber POR QUE o texto está sendo escrito.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é o 'objetivo do texto'?",
        opcoes: [
          "O motivo pelo qual o texto está sendo escrito",
          "O nome do autor do texto",
          "A quantidade de páginas do texto",
        ],
        correta: 0,
        feedbackAcerto: "🧪 Isso! O objetivo é o motivo, a meta do texto.",
        feedbackErro: "O objetivo responde 'por que estou escrevendo isso?'.",
      },
      {
        pergunta: "2/5 — O que é 'público-alvo'?",
        opcoes: [
          "O título do texto",
          "Para quem o texto é destinado",
          "O local onde o texto será publicado",
        ],
        correta: 1,
        feedbackAcerto: "🧪 Correto! Público-alvo é quem vai ler o texto.",
        feedbackErro: "Público-alvo é a pessoa ou grupo que vai ler o texto — isso muda a linguagem usada.",
      },
      {
        pergunta: "3/5 — Para que serve um roteiro?",
        opcoes: [
          "Para decorar o texto com desenhos",
          "Para organizar as ideias na ordem em que vão aparecer",
          "Para contar quantas palavras o texto tem",
        ],
        correta: 1,
        feedbackAcerto: "🧪 Exato! O roteiro organiza as ideias antes da escrita final.",
        feedbackErro: "O roteiro é a lista organizada de ideias, na ordem certa, antes de escrever o texto todo.",
      },
      {
        pergunta: "4/5 — No texto sobre Rafael, por que ele escolheu uma linguagem direta e exemplos conhecidos?",
        opcoes: [
          "Porque o público eram estudantes do 5º ano",
          "Porque não sabia escrever de forma complexa",
          "Porque o texto era muito curto",
        ],
        correta: 0,
        feedbackAcerto: "🧪 Isso! Ele adaptou a linguagem pensando no público-alvo.",
        feedbackErro: "Releia: a escolha da linguagem foi feita pensando em quem ia ler o texto — os estudantes.",
      },
      {
        pergunta: "5/5 — Qual é a ordem correta do planejamento de um texto?",
        opcoes: [
          "Roteiro → público → objetivo",
          "Objetivo → público → roteiro",
          "Não existe uma ordem, tudo pode ser feito ao mesmo tempo",
        ],
        correta: 1,
        feedbackAcerto:
          "🧪 Isso! Primeiro o objetivo, depois o público, e por fim o roteiro. Sua planta baixa está pronta! 🌟",
        feedbackErro: "A ordem lógica é: saber POR QUE escrever, depois PARA QUEM, e só então planejar O QUE dizer.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: planejando um texto em casa",
    materiais: ["Papel e lápis", "Um assunto para escrever (ex.: um bilhete, um convite, um recado)"],
    passos: [
      "1) Escolham juntos um texto curto para escrever (bilhete, convite, recado).",
      "2) A criança responde por escrito: qual é o OBJETIVO desse texto?",
      "3) Depois, ela define o PÚBLICO: quem vai ler esse texto?",
      "4) Por fim, ela monta um ROTEIRO simples com 2 ou 3 tópicos, na ordem que vão aparecer no texto.",
    ],
    registro: "🗣️ Registre por escrito: 'Objetivo: ___. Público: ___. Roteiro: 1) ___ 2) ___ 3) ___'.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
