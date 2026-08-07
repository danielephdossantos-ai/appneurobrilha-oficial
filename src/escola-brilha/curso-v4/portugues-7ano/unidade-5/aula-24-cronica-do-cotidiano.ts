import type { AulaPortuguesV4 } from "../../types";

/** Aula 24 — Crônica: Humor e Olhar sobre o Cotidiano. BNCC: EF67LP28, EF67LP30 */
export const aula24: AulaPortuguesV4 = {
  slug: "aula-24-cronica-do-cotidiano",
  titulo: "Crônica do Cotidiano",
  iconeTrilha: "📰",
  bncc: ["EF67LP28", "EF67LP30"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Setor Literatura: Arquivos do Ordinário",
    historia: "Analista, nem todo arquivo do Observatório fala de mundos impossíveis. Alguns registram o que há de mais comum: uma fila de ônibus, um guarda-chuva emprestado, uma discussão boba sobre controle remoto. São as crônicas — textos curtos que olham para o cotidiano com humor e sensibilidade, encontrando o extraordinário no dia a dia. Sua missão hoje é decodificar esse olhar.",
    imagemUrl: "https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: O Olhar Cronista.",
    bloco: {
      titulo: "Painel da Crônica",
      capaImagemUrl: "",
      pistas: [
        { nome: "A crônica costuma partir de um fato pequeno do dia a dia.", imagemUrl: "" },
        { nome: "Muitas crônicas usam humor e ironia leve.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel do Cronista",
        icone: "🗞️",
        linhas: [
          "  [ CARACTERÍSTICAS DA CRÔNICA ]",
          "                              ",
          "  1. PARTE DO COTIDIANO       ",
          "     > um fato pequeno e comum",
          "                              ",
          "  2. TOM PESSOAL              ",
          "     > opinião e sensibilidade do autor",
          "                              ",
          "  3. HUMOR OU IRONIA          ",
          "     > olhar leve sobre situações sérias",
          "                              ",
          "  4. REFLEXÃO FINAL           ",
          "     > uma observação sobre a vida",
        ],
        estilo: "cartaz",
      },
      pergunta: "Sobre o que geralmente fala uma crônica?",
      hipoteses: [
        { texto: "Fatos pequenos e comuns do cotidiano" },
        { texto: "Somente batalhas históricas" },
        { texto: "Somente fórmulas matemáticas" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Correto! A crônica parte do cotidiano, do que parece simples.",
      feedbackErro: "Releia o cartaz: a crônica nasce de fatos pequenos e comuns.",
      dica: "Pense em situações do dia a dia, como um ônibus atrasado.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Termos da Crônica.",
    cards: [
      { palavra: "Crônica", explicacao: "Texto curto que comenta, com tom pessoal, fatos do cotidiano, muitas vezes com humor.", exemplo: "A crônica contava a briga engraçada por causa do controle remoto.", imagemUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Ironia", explicacao: "Recurso em que se diz uma coisa querendo dizer o contrário, geralmente com humor crítico.", exemplo: "'Que dia maravilhoso', disse ele, encharcado pela chuva.", imagemUrl: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Cotidiano", explicacao: "Aquilo que acontece todos os dias, a rotina comum das pessoas.", exemplo: "Pegar o ônibus lotado faz parte do cotidiano de muita gente.", imagemUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Olhar: Reconhecendo o Tom da Crônica",
    instrucao: "Veja como cada frase revela um traço típico da crônica.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Hoje descobri que existe uma guerra silenciosa em toda casa: quem controla a temperatura do ar-condicionado.", explicacao: "💡 FATO COTIDIANO + HUMOR: um assunto banal vira 'guerra' de forma exagerada e engraçada." },
          { texto: "Fiquei parado na fila por vinte minutos, tempo suficiente para repensar todas as minhas escolhas de vida.", explicacao: "💡 IRONIA/EXAGERO: a espera pequena é tratada com exagero cômico." },
          { texto: "No fim, entendi que o dia mais comum pode esconder a lição mais importante.", explicacao: "💡 REFLEXÃO FINAL: a crônica termina com uma observação sobre a vida." },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Arquivo: leia a crônica completa.",
    leitura: {
      titulo: "A Batalha do Guarda-Chuva",
      imagemUrl: "https://images.unsplash.com/photo-1428592953211-077101b2021b?auto=format&fit=crop&q=80&w=400",
      destacar: ["guarda-chuva", "chuva", "vizinho", "cotidiano"],
      paragrafos: [
        "Na manhã em que a chuva decidiu cair como se tivesse combinado com o mundo inteiro, percebi que só existia um guarda-chuva lá em casa, e ele estava furado bem no meio, como um sorriso banguela.",
        "Meu vizinho, esperto, apareceu com um guarda-chuva enorme, dessas marcas de escritório, e ofereceu para dividirmos o caminho até o ponto de ônibus. Aceitei, claro, mesmo sabendo que ele andava rápido demais e eu ficaria sempre um passo atrás, tomando o pingo que escapava da beirada.",
        "Durante o trajeto, discutimos sobre futebol, sobre o preço do pão e sobre por que ninguém nunca compra guarda-chuva antes de precisar. Rimos da própria sorte, molhados dos pés às canelas, enquanto o guarda-chuva 'protegia' apenas nossas cabeças.",
        "Quando finalmente chegamos ao ponto, descobri que o ônibus tinha passado cinco minutos antes. Ficamos ali, encharcados, rindo da situação. No fim, entendi que às vezes a companhia importa mais do que a proteção — mesmo quando o guarda-chuva é furado e o ônibus já foi embora.",
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log: compreensão da crônica.",
    perguntas: [
      {
        pergunta: "Qual fato cotidiano dá origem à crônica?",
        opcoes: ["Um dia de chuva com apenas um guarda-chuva furado em casa", "Uma viagem para outro país", "Um jogo de futebol importante", "Uma prova na escola"],
        correta: 0,
        feedbackAcerto: "Correto! A crônica nasce de um dia comum de chuva e um guarda-chuva furado.",
        feedbackErro: "Releia o primeiro parágrafo, sobre a manhã de chuva.",
        ondeEstaNoTexto: "só existia um guarda-chuva lá em casa, e ele estava furado",
        dica: "Pense no objeto citado no título da crônica.",
        reensino: "A crônica sempre parte de um fato pequeno e comum do dia a dia.",
      },
      {
        pergunta: "Qual reflexão o narrador tem ao final do texto?",
        opcoes: ["Que a companhia importa mais do que a proteção", "Que nunca mais vai sair de casa sem guarda-chuva", "Que o vizinho é um mau companheiro", "Que prefere andar sozinho na chuva"],
        correta: 0,
        feedbackAcerto: "Isso! Ele valoriza a companhia do vizinho, mesmo debaixo de chuva.",
        feedbackErro: "Releia o último parágrafo, após perderem o ônibus.",
        ondeEstaNoTexto: "entendi que às vezes a companhia importa mais do que a proteção",
        dica: "Procure a frase final, que resume o aprendizado do narrador.",
        reensino: "A crônica costuma terminar com uma reflexão simples sobre um fato comum.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Cena sob análise: personagens e cenário da crônica.",
    perguntas: [
      {
        pergunta: "Quem são os dois personagens principais da crônica 'A Batalha do Guarda-Chuva'?",
        opcoes: ["O narrador e o vizinho", "O narrador e um professor", "Dois estranhos no ônibus", "O narrador e sua mãe"],
        correta: 0,
        feedbackAcerto: "Correto! São o narrador e o vizinho que dividem o guarda-chuva.",
        feedbackErro: "Releia o segundo parágrafo, sobre quem aparece com o guarda-chuva grande.",
        ondeEstaNoTexto: "Meu vizinho, esperto, apareceu com um guarda-chuva enorme",
        dica: "Um deles é quem conta a história (o 'eu'), o outro mora perto.",
        reensino: "Na crônica, os personagens costumam ser pessoas comuns do convívio do narrador.",
      },
      {
        pergunta: "Em que cenário se passa a maior parte da crônica?",
        opcoes: ["No trajeto de casa até o ponto de ônibus, na chuva", "Dentro de uma sala de aula", "Em um shopping", "No trabalho do narrador"],
        correta: 0,
        feedbackAcerto: "Exato! A ação acontece no caminho até o ponto de ônibus, debaixo de chuva.",
        feedbackErro: "Releia o segundo e terceiro parágrafos, sobre o caminho percorrido.",
        ondeEstaNoTexto: "ofereceu para dividirmos o caminho até o ponto de ônibus",
        dica: "Pense em onde os personagens caminham durante quase todo o texto.",
        reensino: "O cenário da crônica costuma ser um lugar simples do cotidiano, como uma rua ou ponto de ônibus.",
      },
    ],
  },
  momento_escrita: {
    titulo: "Console de Criação: Sua Crônica do Cotidiano",
    instrucao: "Escreva uma pequena crônica sobre um fato comum do seu dia a dia.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Arquivo do Ordinário",
        comando: "Escreva um parágrafo contando, com humor, um fato pequeno e comum que aconteceu com você ou sua família (uma discussão boba, um imprevisto, uma situação engraçada). Termine com uma reflexão curta.",
        modelo: [
          "FATO: Meu irmão e eu discutimos por vinte minutos sobre quem ficaria com o último pedaço de pizza.",
          "HUMOR: No fim, nenhum dos dois comeu — o cachorro pulou na mesa e resolveu a disputa sozinho.",
          "REFLEXÃO: Aprendi que discussões bobas às vezes têm soluções ainda mais bobas.",
        ],
        checklist: [
          "Parti de um fato pequeno e real do cotidiano?",
          "Usei humor ou ironia leve ao contar?",
          "Terminei com uma reflexão curta sobre o que aconteceu?",
        ],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Estrutura da Crônica",
    bloco: {
      instrucao: "Organize os passos que compõem a crônica 'A Batalha do Guarda-Chuva'.",
      itens: [
        { id: "1", texto: "☔ O narrador descobre que só há um guarda-chuva furado em casa.", imagemUrl: "" },
        { id: "2", texto: "🤝 O vizinho aparece e propõe dividir o caminho até o ponto de ônibus.", imagemUrl: "" },
        { id: "3", texto: "😂 Os dois conversam e riem, mesmo se molhando no trajeto.", imagemUrl: "" },
        { id: "4", texto: "💭 O narrador reflete que a companhia importa mais que a proteção.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Muito bem! Essa é a sequência da crônica, do fato à reflexão final.",
      feedbackErro: "Pense na ordem: primeiro o problema, depois a solução, depois o humor e por fim a reflexão.",
      dica: "A reflexão final é sempre a última etapa da crônica.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: outra crônica para analisar.",
    leitura: {
      titulo: "O Mistério da Meia Perdida",
      imagemUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400",
      destacar: ["meia", "lavanderia", "mistério"],
      paragrafos: [
        "Toda casa tem um mistério não resolvido, e na minha é a meia que some depois da lavagem. Já revirei o cesto, o varal e até debaixo da máquina, mas ela simplesmente desaparece, como se tivesse decidido morar em outra dimensão.",
        "Minha avó diz que é coisa de duende. Meu pai diz que é falha minha ao dobrar as roupas. No fim, aceitei que algumas perguntas da vida — como essa da meia — talvez nunca tenham resposta, e tudo bem.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual é o tom predominante da crônica 'O Mistério da Meia Perdida'?",
        opcoes: ["Humor leve sobre um fato cotidiano", "Tragédia e dor profunda", "Discurso político sério", "Relato histórico formal"],
        correta: 0,
        feedbackAcerto: "Correto! O texto trata com humor um fato simples e comum: a meia perdida.",
        feedbackErro: "Releia o texto e observe como o narrador trata o 'mistério' da meia.",
        dica: "Pense em como o autor exagera de forma engraçada um problema pequeno.",
        reensino: "A crônica frequentemente usa humor para comentar situações simples do dia a dia.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "A crônica parte de um fato pequeno e comum do cotidiano.",
      "O tom pessoal e o humor (muitas vezes com ironia) são marcas fortes da crônica.",
      "A crônica costuma terminar com uma reflexão sobre a vida a partir do fato narrado.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que costuma dar origem a uma crônica?",
        opcoes: ["Um fato pequeno e comum do cotidiano", "Sempre uma batalha histórica", "Uma fórmula científica", "Um manual de instruções"],
        correta: 0,
        feedbackAcerto: "Correto! A crônica nasce do cotidiano, do que parece simples.",
        feedbackErro: "Reveja o Painel do Cronista, no Momento 02.",
        ondeEstaNoTexto: "1. PARTE DO COTIDIANO > um fato pequeno e comum",
        dica: "Pense no tipo de fato que normalmente vira crônica.",
        reensino: "Revise o Momento 02: a crônica sempre parte de algo pequeno do dia a dia.",
      },
      {
        pergunta: "O que é ironia?",
        opcoes: ["Dizer uma coisa querendo dizer o contrário, com humor crítico", "Repetir sons no final dos versos", "Um tipo de narrador", "Um gênero literário completo"],
        correta: 0,
        feedbackAcerto: "Correto! Ironia é dizer o oposto do que se pensa, de forma crítica ou cômica.",
        feedbackErro: "Reveja o card de vocabulário sobre 'Ironia'.",
        ondeEstaNoTexto: "Recurso em que se diz uma coisa querendo dizer o contrário",
        dica: "Pense em alguém dizendo 'que dia lindo' debaixo de um temporal.",
        reensino: "Reveja o Momento 03: ironia é um recurso de humor que inverte o sentido literal.",
      },
      {
        pergunta: "O que geralmente acontece no final de uma crônica?",
        opcoes: ["Uma reflexão do autor sobre o fato narrado", "A introdução de um novo personagem", "O início de outra história", "Um resumo de regras gramaticais"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! A crônica costuma fechar com uma observação sobre a vida.",
        feedbackErro: "Reveja o Painel do Cronista sobre a etapa final.",
        ondeEstaNoTexto: "4. REFLEXÃO FINAL > uma observação sobre a vida",
        dica: "Pense em como a crônica 'A Batalha do Guarda-Chuva' termina.",
        reensino: "A reflexão final é a etapa que fecha o texto com um aprendizado simples.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Crônica em Família",
    materiais: ["Caderno", "Um fato engraçado ou curioso do dia a dia da família"],
    passos: [
      "Reúna a família e escolham juntos um fato pequeno e engraçado que já aconteceu em casa.",
      "Conversem sobre os detalhes: quem estava, o que aconteceu, como terminou.",
      "Escreva esse fato como se fosse uma crônica, com humor e uma reflexão final.",
      "Leia a crônica em voz alta para a família e veja se todos concordam com a versão contada.",
    ],
    registro: "Escreva: 'Missão Crônica - O fato foi [X] e a reflexão final foi [Y]'.",
  },
  recompensa: { xp: 150, moedas: 75 },
};
