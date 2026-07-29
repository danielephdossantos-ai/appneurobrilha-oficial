import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 3 — Tempos e Modos Verbais
 * -------------------------------------------------------------
 * Um novo caso: depoimentos que misturam presente, passado e futuro
 * sem critério. O investigador aprende a reconhecer os tempos verbais
 * do modo indicativo e a perceber o EFEITO DE SENTIDO que a escolha do
 * tempo/modo verbal provoca num relato.
 *
 * BNCC: EF05LP05, EF05LP06
 */
export const aula3: AulaPortuguesV4 = {
  slug: "aula-03-tempos-e-modos-verbais",
  titulo: "Tempos e Modos Verbais",
  iconeTrilha: "⏱️",
  bncc: ["EF05LP05", "EF05LP06"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "O Caso da Linha do Tempo Bagunçada",
    historia:
      "Um depoimento chegou à mesa da Central, todo embaralhado: \"Ontem eu vejo o ladrão, amanhã eu vi ele de novo, agora eu verei tudo de novo.\" — Esse depoimento está com a linha do tempo quebrada — disse a investigadora-chefe. — O verbo não muda só de forma por acaso: ele marca QUANDO a ação acontece — se já aconteceu, se está acontecendo agora ou se ainda vai acontecer. E o MODO do verbo também revela a atitude de quem fala: certeza, dúvida ou ordem. Hoje seu trabalho é consertar a linha do tempo e entender o efeito que cada escolha verbal provoca.",
  },

  momento02_previsao: {
    instrucao: "Antes de investigar o depoimento completo, observe este trecho suspeito.",
    bloco: {
      titulo: "O Caso da Linha do Tempo Bagunçada",
      recado: {
        rotulo: "Trecho do depoimento confuso",
        icone: "🕰️",
        linhas: [
          "\"Ontem eu vejo o suspeito perto do mercado.\"",
          "\"Amanhã eu já vi ele fugir de bicicleta.\"",
        ],
        estilo: "papel",
      },
      pergunta: "O que você acha que está causando a confusão nesse depoimento?",
      hipoteses: [
        { texto: "Os tempos verbais não combinam com o momento indicado (ontem, amanhã)" },
        { texto: "As frases têm palavras muito difíceis" },
        { texto: "O suspeito é descrito de forma exagerada" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "⏱️ Correto! 'Ontem' pede verbo no passado, mas o depoimento usa 'vejo' (presente). 'Amanhã' pede futuro, mas aparece 'vi' (passado). A linha do tempo está toda embaralhada.",
      feedbackErro:
        "Observe as palavras 'ontem' e 'amanhã' e compare com os tempos dos verbos ('vejo', 'vi') — eles não combinam.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três tempos verbais e um efeito de sentido vão te ajudar a organizar qualquer relato.",
    cards: [
      {
        palavra: "presente",
        explicacao: "Indica uma ação que acontece no momento da fala, um hábito ou uma verdade permanente.",
        exemplo: "'O detetive investiga o caso agora mesmo.'",
      },
      {
        palavra: "pretérito (passado)",
        explicacao: "Indica uma ação que já aconteceu antes do momento da fala.",
        exemplo: "'O detetive investigou o caso ontem à noite.'",
      },
      {
        palavra: "futuro",
        explicacao: "Indica uma ação que ainda vai acontecer, depois do momento da fala.",
        exemplo: "'O detetive investigará o caso amanhã de manhã.'",
      },
      {
        palavra: "efeito de sentido",
        explicacao: "É a impressão ou sensação que a escolha de um tempo verbal específico causa no leitor — por exemplo, dar sensação de urgência, de certeza ou de suspense.",
        exemplo: "Usar o presente para narrar um fato antigo ('o detetive entra na sala e descobre a pista') dá sensação de que a cena está acontecendo AGORA, aumentando o suspense.",
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia o relato abaixo e observe como os tempos verbais mudam conforme o momento da ação.",
    leitura: {
      titulo: "Linha do Tempo do Caso do Cofre Vazio",
      destacar: ["investigou o local", "está analisando as digitais", "vai divulgar o resultado"],
      paragrafos: [
        "Na segunda-feira, a equipe investigou o local do roubo e recolheu as primeiras pistas. Encontraram um cofre aberto e vazio, sem sinais de arrombamento na porta principal.",
        "Nesta semana, a perícia está analisando as digitais encontradas no cofre e nas gavetas próximas. O trabalho é lento, mas cada detalhe conta na hora de montar o quebra-cabeça.",
        "Na próxima sexta-feira, a delegacia vai divulgar o resultado da investigação para a família da vítima. Até lá, novas pistas ainda podem surgir e mudar os rumos do caso.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao relato sempre que precisar confirmar sua resposta.",
    perguntas: [
      {
        pergunta: "O verbo 'investigou', no primeiro parágrafo, indica uma ação:",
        opcoes: ["que já aconteceu (passado)", "que está acontecendo agora (presente)", "que ainda vai acontecer (futuro)"],
        correta: 0,
        feedbackAcerto: "⏱️ Isso! 'Investigou' está no passado, pois a ação ocorreu na segunda-feira, antes do momento do relato.",
        feedbackErro: "Observe a palavra 'segunda-feira' — ela marca uma ação que já aconteceu, no passado.",
        ondeEstaNoTexto: "Na segunda-feira, a equipe investigou o local do roubo e recolheu as primeiras pistas.",
      },
      {
        pergunta: "A expressão 'está analisando' indica uma ação:",
        opcoes: ["que já terminou", "que está acontecendo no momento presente", "que só vai começar no futuro"],
        correta: 1,
        feedbackAcerto: "⏱️ Correto! 'Está analisando' mostra uma ação em andamento, no presente.",
        feedbackErro: "Repare que o texto diz 'nesta semana' — a ação está acontecendo agora, ainda não terminou.",
        ondeEstaNoTexto: "Nesta semana, a perícia está analisando as digitais encontradas no cofre...",
      },
      {
        pergunta: "Por que o texto usa 'vai divulgar' e não 'divulgou' no terceiro parágrafo?",
        opcoes: [
          "Porque a divulgação ainda vai acontecer, no futuro",
          "Porque a divulgação já aconteceu",
          "Porque não faz diferença qual tempo verbal usar",
        ],
        correta: 0,
        feedbackAcerto: "⏱️ Exato! 'Vai divulgar' indica uma ação futura, marcada também pela expressão 'na próxima sexta-feira'.",
        feedbackErro: "A expressão 'na próxima sexta-feira' indica que o fato ainda vai ocorrer — por isso o verbo está no futuro.",
        ondeEstaNoTexto: "Na próxima sexta-feira, a delegacia vai divulgar o resultado da investigação para a família da vítima.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora observe como a troca do tempo verbal muda o efeito de sentido de uma mesma cena.",
    perguntas: [
      {
        pergunta: "Comparando 'O ladrão fugiu pela janela' e 'O ladrão foge pela janela', qual efeito o presente causa no leitor?",
        opcoes: [
          "Sensação de que a cena está acontecendo agora, dando mais suspense",
          "Nenhum efeito diferente, as frases são idênticas em sentido",
          "Sensação de que o fato nunca aconteceu",
        ],
        correta: 0,
        feedbackAcerto: "⏱️ Isso! Usar o presente para narrar um fato passado (presente histórico) dá a sensação de que a cena acontece diante dos nossos olhos — cria suspense.",
        feedbackErro: "Pense em como um narrador de jogo de futebol usa o presente para dar emoção: 'ele chuta, é gol!' — o mesmo efeito acontece aqui.",
      },
      {
        pergunta: "Se um investigador diz 'Eu tenho certeza de que o suspeito confessará', o verbo 'confessará' está em qual tempo?",
        opcoes: ["Presente", "Passado", "Futuro"],
        correta: 2,
        feedbackAcerto: "⏱️ Correto! 'Confessará' indica uma ação que ainda vai acontecer — está no futuro.",
        feedbackErro: "Repare na terminação '-á' de 'confessará' — ela marca o futuro do presente do indicativo.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os fatos do caso na ordem certa da linha do tempo.",
    bloco: {
      instrucao: "Do passado ao futuro.",
      itens: [
        { id: "p1", texto: "Na segunda-feira, a equipe investigou o local e recolheu as pistas (passado)." },
        { id: "p2", texto: "Nesta semana, a perícia está analisando as digitais (presente)." },
        { id: "p3", texto: "Na sexta-feira, a delegacia vai divulgar o resultado (futuro)." },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "⏱️ Perfeito! Você seguiu exatamente a linha do tempo: passado, presente e futuro.",
      feedbackErro: "Pense na ordem natural do tempo: o que já aconteceu vem primeiro, o que está acontecendo agora vem no meio, e o que ainda vai acontecer vem por último.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo depoimento na mesa. Leia sozinho e identifique os tempos verbais usados.",
    leitura: {
      titulo: "Depoimento da Vendedora da Esquina",
      destacar: ["Todos os dias eu abro a loja", "Ontem eu vi um carro estranho", "amanhã vou contar tudo à polícia"],
      paragrafos: [
        "Todos os dias eu abro a loja bem cedo, antes mesmo do sol nascer completamente. É minha rotina há mais de dez anos, sempre a mesma hora.",
        "Ontem, porém, eu vi um carro estranho parado em frente ao banco por quase uma hora. Isso nunca tinha acontecido antes naquele horário.",
        "Ainda estou pensando se devo falar sobre isso, mas amanhã vou contar tudo à polícia, com todos os detalhes que consegui lembrar.",
      ],
    },
    perguntas: [
      {
        pergunta: "O verbo 'abro', em 'Todos os dias eu abro a loja', está em qual tempo, e por quê?",
        opcoes: [
          "Presente, porque indica um hábito repetido todos os dias",
          "Passado, porque a loja já fechou",
          "Futuro, porque a loja vai abrir outro dia",
        ],
        correta: 0,
        feedbackAcerto: "⏱️ Isso! 'Abro' está no presente e marca um hábito — reforçado pela expressão 'todos os dias'.",
        feedbackErro: "A expressão 'todos os dias' indica uma ação repetida, uma rotina — isso é presente, não passado nem futuro.",
        ondeEstaNoTexto: "Todos os dias eu abro a loja bem cedo, antes mesmo do sol nascer completamente.",
      },
      {
        pergunta: "Em 'amanhã vou contar tudo à polícia', o verbo indica uma ação:",
        opcoes: ["que já aconteceu", "que está acontecendo agora", "que ainda vai acontecer"],
        correta: 2,
        feedbackAcerto: "⏱️ Correto! 'Vou contar' é uma forma de futuro, reforçada pela palavra 'amanhã'.",
        feedbackErro: "A palavra 'amanhã' indica que o fato ainda não aconteceu — está no futuro.",
        ondeEstaNoTexto: "...mas amanhã vou contar tudo à polícia, com todos os detalhes que consegui lembrar.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "O PRESENTE indica uma ação que acontece agora, um hábito ou uma verdade permanente.",
      "O PRETÉRITO (passado) indica uma ação que já aconteceu antes do momento da fala.",
      "O FUTURO indica uma ação que ainda vai acontecer.",
      "Expressões de tempo (ontem, hoje, amanhã, sempre, na próxima semana) ajudam a confirmar se o verbo escolhido está correto.",
      "A escolha do tempo verbal também cria EFEITO DE SENTIDO — como usar o presente para dar suspense a um fato do passado.",
    ],
    miniDesafio: {
      pergunta: "Na frase 'Amanhã a perícia divulgará o laudo', o verbo 'divulgará' está em qual tempo?",
      opcoes: ["Presente", "Passado", "Futuro"],
      correta: 2,
      feedbackAcerto: "⏱️ Isso! 'Divulgará' indica uma ação que ainda vai acontecer — futuro.",
      feedbackErro: "A palavra 'amanhã' e a terminação '-á' indicam que a ação ainda não aconteceu — é futuro.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que o tempo presente pode indicar, além de uma ação no momento da fala?",
        opcoes: ["Um hábito ou uma verdade permanente", "Sempre uma ação futura", "Sempre uma ação já concluída"],
        correta: 0,
        feedbackAcerto: "⏱️ Isso! O presente também marca hábitos e verdades permanentes.",
        feedbackErro: "O presente pode indicar tanto o momento atual quanto hábitos repetidos ou verdades gerais.",
      },
      {
        pergunta: "2/5 — Qual expressão de tempo combina com o verbo no passado?",
        opcoes: ["Amanhã", "Ontem", "Na próxima semana"],
        correta: 1,
        feedbackAcerto: "⏱️ Correto! 'Ontem' indica um fato que já aconteceu.",
        feedbackErro: "'Amanhã' e 'na próxima semana' indicam futuro; 'ontem' indica passado.",
      },
      {
        pergunta: "3/5 — Na frase 'A perícia está analisando as digitais', o verbo indica uma ação:",
        opcoes: ["concluída no passado", "em andamento no presente", "que só vai começar"],
        correta: 1,
        feedbackAcerto: "⏱️ Isso! 'Está analisando' mostra uma ação acontecendo agora.",
        feedbackErro: "A forma 'está + gerúndio' indica uma ação em curso, no presente.",
      },
      {
        pergunta: "4/5 — Qual é o efeito de usar o presente para narrar um fato do passado (presente histórico)?",
        opcoes: [
          "Deixa o relato mais confuso, sem sentido",
          "Dá a sensação de que a cena acontece diante dos olhos do leitor",
          "Nenhum efeito, é apenas um erro gramatical",
        ],
        correta: 1,
        feedbackAcerto: "⏱️ Exato! O presente histórico aproxima o leitor da cena, como se ela estivesse acontecendo agora.",
        feedbackErro: "Esse recurso é usado de propósito para dar mais vivacidade e suspense a um relato de fatos passados.",
      },
      {
        pergunta: "5/5 — Na frase 'Na sexta-feira, a delegacia vai divulgar o resultado', o verbo está em qual tempo?",
        opcoes: ["Presente", "Passado", "Futuro"],
        correta: 2,
        feedbackAcerto: "⏱️ Isso! 'Vai divulgar' indica futuro. Você já domina a linha do tempo dos verbos. Caso encerrado! 🌟",
        feedbackErro: "'Na sexta-feira' (ainda por vir) e 'vai divulgar' indicam uma ação futura.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: linha do tempo em família",
    materiais: ["Papel e lápis", "Memória de um fato recente da família"],
    passos: [
      "1) Escolham juntos um fato: algo que já aconteceu, algo que está acontecendo hoje e algo planejado para os próximos dias.",
      "2) A criança escreve uma frase para cada momento, usando o tempo verbal correto: passado, presente e futuro.",
      "3) Leiam as três frases em voz alta e conversem sobre as palavras que ajudaram a marcar o tempo (ontem, hoje, amanhã...).",
      "4) Desafio extra: reescrevam a frase do passado usando o presente histórico, como um narrador de suspense faria.",
    ],
    registro: "🗣️ Registre as três frases: a do passado, a do presente e a do futuro.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
