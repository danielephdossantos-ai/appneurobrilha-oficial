import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 30 — Coesão Referencial: Os Fios Invisíveis do Texto
 * -------------------------------------------------------------
 * Uso de pronomes e sinônimos para evitar repetição e conectar ideias.
 *
 * BNCC: EF07LP12, EF07LP13
 */
export const aula30: AulaPortuguesV4 = {
  slug: "aula-30-coesao-referencial",
  titulo: "Coesão Referencial",
  iconeTrilha: "🔗",
  bncc: ["EF07LP12", "EF07LP13"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Os Fios Invisíveis do Texto",
    historia: "Analista, um bom relatório do Observatório não repete a mesma palavra o tempo todo. Ele usa fios invisíveis que conectam as ideias sem cansar quem lê: pronomes que substituem nomes e sinônimos que trazem variedade. Isso se chama coesão referencial. Hoje você vai aprender a tecer esses fios para que seus textos fluam com precisão e elegância.",
    imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Fios de Conexão Textual.",
    bloco: {
      titulo: "Painel de Coesão Referencial",
      capaImagemUrl: "",
      pistas: [
        { nome: "Pronomes podem substituir substantivos já citados.", imagemUrl: "" },
        { nome: "Sinônimos evitam a repetição da mesma palavra.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel de Coesão",
        icone: "🔗",
        linhas: [
          "  [ FIOS DE CONEXÃO ]          ",
          "                               ",
          "  'O robô chegou. ELE parou.'  ",
          "        pronome substitui robô ",
          "                               ",
          "  'A nave pousou. A ASTRONAVE  ",
          "   estava intacta.'            ",
          "        sinônimo evita repetição",
        ],
        estilo: "cartaz",
      },
      pergunta: "Qual é a função de pronomes e sinônimos em um texto?",
      hipoteses: [
        { texto: "Evitar a repetição de palavras e conectar as ideias" },
        { texto: "Tornar o texto mais confuso de propósito" },
        { texto: "Substituir toda a pontuação do texto" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Fios conectados. Pronomes e sinônimos evitam repetição e ligam as ideias do texto.",
      feedbackErro: "Observe como 'ele' substitui 'o robô' no exemplo.",
      dica: "Pense em como fica estranho repetir a mesma palavra várias vezes seguidas.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Fios de Ligação.",
    cards: [
      { palavra: "Coesão referencial", explicacao: "É a conexão entre partes do texto feita por palavras que retomam algo já dito, como pronomes e sinônimos.", exemplo: "O sensor falhou. Ele precisa ser trocado.", imagemUrl: "https://images.unsplash.com/photo-1554224155-1696413575a8?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Pronome anafórico", explicacao: "Pronome que retoma um termo já citado anteriormente no texto.", exemplo: "A equipe chegou. Ela trouxe novos equipamentos.", imagemUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Sinônimo", explicacao: "Palavra com significado semelhante a outra, usada para evitar repetições.", exemplo: "'A nave' pode ser retomada por 'a astronave' ou 'o veículo espacial'.", imagemUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Costura Textual: Antes e Depois",
    instrucao: "Veja como pronomes e sinônimos melhoram a fluidez de um texto.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "O robô ligou o robô e o robô caminhou.",
            explicacao: "💡 TEXTO SEM COESÃO: repetir 'o robô' três vezes deixa a frase cansativa e artificial.",
          },
          {
            texto: "O robô se ligou e ele caminhou.",
            explicacao: "💡 USO DE PRONOME: 'ele' substitui 'o robô', evitando a repetição e deixando o texto mais fluido.\n> Ex: 'Ana chegou e ela sorriu.'",
          },
          {
            texto: "A máquina se ativou e o autômato avançou.",
            explicacao: "💡 USO DE SINÔNIMO: 'o autômato' retoma 'a máquina' sem repetir a mesma palavra, trazendo variedade ao texto.\n> Ex: 'O cão latiu. O animal estava assustado.'",
          },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "Os Fios que Sustentam o Texto",
      imagemUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
      destacar: ["coesão referencial", "pronomes", "sinônimos", "repetição"],
      paragrafos: [
        "No Observatório, um relatório bem escrito não repete a mesma palavra em toda frase. Ele usa a coesão referencial: uma rede de pronomes e sinônimos que retomam ideias já apresentadas sem cansar o leitor.",
        "Os pronomes são os fios mais usados: em 'a analista chegou e ela verificou os dados', o pronome 'ela' evita repetir 'a analista'. Esse tipo de substituição é chamado de referência anafórica, pois olha para trás, para um termo já mencionado.",
        "Os sinônimos cumprem papel parecido, mas trazem também variedade de vocabulário: 'a nave pousou' pode ser retomada por 'o veículo espacial estava intacto', evitando repetir 'nave' e enriquecendo o texto.",
        "Sem esses fios, um texto vira uma sequência cansativa e repetitiva. Com eles, as ideias fluem naturalmente, guiando o leitor sem esforço de uma frase à outra."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "Segundo o texto, o que é a coesão referencial?",
        opcoes: ["Uma rede de pronomes e sinônimos que retomam ideias já apresentadas", "Uma regra de pontuação obrigatória", "A repetição intencional da mesma palavra", "Um tipo de rima usada em poemas"],
        correta: 0,
        feedbackAcerto: "Correto! É exatamente essa rede de retomadas que forma a coesão referencial.",
        feedbackErro: "Releia a primeira frase do primeiro parágrafo.",
        ondeEstaNoTexto: "uma rede de pronomes e sinônimos que retomam ideias já apresentadas",
        dica: "Pense no exemplo 'a analista chegou e ela verificou os dados'.",
        reensino: "Revise o card 'Coesão referencial' no momento 03.",
      },
      {
        pergunta: "O que acontece com um texto que não usa pronomes nem sinônimos para retomar ideias?",
        opcoes: ["Vira uma sequência cansativa e repetitiva", "Fica automaticamente mais claro", "Ganha mais pontuação em provas", "Fica mais curto e direto"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! Sem esses recursos, o texto se torna repetitivo e cansativo.",
        feedbackErro: "Releia o último parágrafo do texto.",
        ondeEstaNoTexto: "Sem esses fios, um texto vira uma sequência cansativa e repetitiva",
        dica: "Compare com o exemplo 'o robô ligou o robô e o robô caminhou'.",
        reensino: "Revise o Laboratório de Costura Textual no momento visual.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_escrita: {
    titulo: "Console de Costura Textual",
    instrucao: "Reescreva um trecho usando pronomes e sinônimos para evitar repetições.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Oficina de Coesão",
        comando: "Escreva um parágrafo de 4 frases sobre uma descoberta no Observatório, evitando repetir o mesmo substantivo mais de uma vez seguida. Use pelo menos um pronome e um sinônimo para substituições.",
        modelo: [
          "A astronauta encontrou um sinal estranho. Ela registrou tudo com cuidado.",
          "O aparelho emitia um som contínuo. A máquina parecia reagir à presença da equipe.",
        ],
        checklist: [
          "Usei pelo menos um pronome para substituir um substantivo já citado?",
          "Usei pelo menos um sinônimo para variar o vocabulário?",
          "Evitei repetir a mesma palavra em frases seguidas?",
        ],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Revisão de Coesão",
    bloco: {
      instrucao: "Organize o processo de revisão da coesão referencial em um texto.",
      itens: [
        { id: "1", texto: "🔎 IDENTIFICAR REPETIÇÕES: Encontre palavras repetidas em frases próximas.", imagemUrl: "" },
        { id: "2", texto: "🧠 ESCOLHER UM SUBSTITUTO: Decida entre um pronome ou um sinônimo adequado.", imagemUrl: "" },
        { id: "3", texto: "🔗 SUBSTITUIR NO TEXTO: Troque a palavra repetida pelo substituto escolhido.", imagemUrl: "" },
        { id: "4", texto: "✅ RELER O TEXTO: Confirme se o sentido continua claro após a troca.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Costura perfeita! Seu texto agora flui sem repetições desnecessárias.",
      feedbackErro: "A revisão falhou. Primeiro encontre as repetições, depois escolha o substituto certo.",
      dica: "Sem identificar a repetição, não há como saber onde aplicar o pronome ou sinônimo.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Relatório de Campo.",
    leitura: {
      titulo: "Relatório: A Descoberta na Lua Gelada",
      imagemUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400",
      destacar: ["a exploradora", "ela", "o veículo"],
      paragrafos: [
        "A exploradora avistou uma estrutura metálica na superfície gelada. Ela se aproximou lentamente, atenta a qualquer movimento.",
        "O veículo de reconhecimento a acompanhava de perto. A máquina registrava cada detalhe do terreno.",
        "Ao final da missão, a exploradora concluiu que aquela estrutura era, na verdade, os restos de uma sonda antiga."
      ],
    },
    perguntas: [
      {
        pergunta: "No texto, a palavra 'ela' substitui qual termo?",
        opcoes: ["A exploradora", "O veículo", "A estrutura metálica", "A missão"],
        correta: 0,
        feedbackAcerto: "Exato! 'Ela' retoma 'a exploradora', citada na frase anterior.",
        feedbackErro: "Releia a primeira frase e veja quem é o sujeito mencionado antes de 'ela'.",
        dica: "Pense em quem estava se aproximando da estrutura.",
        reensino: "Revise o card 'Pronome anafórico' no momento 03.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "Coesão referencial é o uso de pronomes e sinônimos para retomar ideias já ditas.",
      "Pronomes anafóricos olham para trás, substituindo um termo já citado.",
      "Sinônimos evitam repetição e trazem variedade de vocabulário ao texto.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que é coesão referencial?",
        opcoes: ["Uso de pronomes e sinônimos para retomar ideias já ditas", "Uma regra de acentuação gráfica", "A escolha do tempo verbal correto", "A separação de sílabas de uma palavra"],
        correta: 0,
        feedbackAcerto: "Correto! É exatamente essa a definição de coesão referencial.",
        feedbackErro: "Revise o card 'Coesão referencial' no momento 03.",
        ondeEstaNoTexto: "uma rede de pronomes e sinônimos que retomam ideias já apresentadas",
        dica: "Pense no exemplo 'a analista chegou e ela verificou os dados'.",
        reensino: "Revise o momento 03 do vocabulário.",
      },
      {
        pergunta: "Na frase 'a nave pousou; o veículo espacial estava intacto', qual recurso evita a repetição de 'nave'?",
        opcoes: ["O uso de um sinônimo", "O uso de uma vírgula", "O uso de um verbo no futuro", "A repetição da mesma palavra"],
        correta: 0,
        feedbackAcerto: "Isso! 'Veículo espacial' é um sinônimo que substitui 'nave'.",
        feedbackErro: "Observe se a segunda palavra usada é igual ou diferente de 'nave'.",
        ondeEstaNoTexto: "a nave pousou pode ser retomada por o veículo espacial estava intacto",
        dica: "Reveja o card 'Sinônimo' no momento 03.",
        reensino: "Revise o Laboratório de Costura Textual desta aula.",
      },
      {
        pergunta: "Por que repetir a mesma palavra várias vezes seguidas prejudica um texto?",
        opcoes: ["Porque torna o texto cansativo e repetitivo", "Porque é sempre um erro de ortografia", "Porque muda o sentido da frase", "Porque quebra as regras de concordância"],
        correta: 0,
        feedbackAcerto: "Perfeito! A repetição excessiva cansa o leitor e prejudica a fluidez.",
        feedbackErro: "Releia o exemplo 'o robô ligou o robô e o robô caminhou'.",
        ondeEstaNoTexto: "Sem esses fios, um texto vira uma sequência cansativa e repetitiva",
        dica: "Reveja o Laboratório de Costura Textual: Antes e Depois.",
        reensino: "Revise o momento de ensino visual desta aula.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Fios de Conexão",
    materiais: ["Papel", "Caneta", "Um texto curto qualquer (bilhete, mensagem, notícia)"],
    passos: [
      "Escolha um texto curto em casa (mensagem, bilhete ou notícia).",
      "Sublinhe as palavras que se repetem várias vezes.",
      "Reescreva o texto substituindo algumas repetições por pronomes ou sinônimos.",
      "Leia a nova versão para a família e compare com a original."
    ],
    registro: "Escreva no caderno: 'Missão Fios de Conexão - As palavras que troquei foram [X, Y, Z]'.",
  },
  recompensa: {
    xp: 150,
    moedas: 75,
  },
};
