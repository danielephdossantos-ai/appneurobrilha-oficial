import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 2 — Sujeito e Predicado: O Núcleo da Oração
 * -------------------------------------------------------------
 * Estrutura da oração: identificar sujeito e predicado.
 * BNCC: EF07LP07, EF07LP04
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-sujeito-e-predicado",
  titulo: "Sujeito e Predicado",
  iconeTrilha: "🧩",
  bncc: ["EF07LP07", "EF07LP04"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Diagnóstico Estrutural",
    historia: "Analista, todo texto que você intercepta é feito de blocos menores: as orações. E toda oração tem duas partes que se completam como engrenagens. Uma parte diz DE QUEM se fala. A outra parte diz O QUE se diz sobre esse alguém. Sem entender essa divisão, você não consegue montar frases sólidas nem desmontar frases confusas. Hoje o Observatório vai abrir o núcleo da oração para você.",
    imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Anatomia da Oração.",
    bloco: {
      titulo: "Sujeito x Predicado",
      capaImagemUrl: "",
      pistas: [
        { nome: "O sujeito é quem pratica ou sofre a ação da oração.", imagemUrl: "" },
        { nome: "O predicado é tudo aquilo que se declara sobre o sujeito.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Mapa da Oração",
        icone: "🧩",
        linhas: [
          "  [ ORAÇÃO ]                  ",
          "                              ",
          "  O robô          escaneou o texto",
          "  ↑ SUJEITO       ↑ PREDICADO ",
          "  (de quem falo)  (o que digo)",
          "                              ",
          "  Ex: 'A cientista publicou o artigo.'",
          "  Sujeito: A cientista         ",
          "  Predicado: publicou o artigo ",
        ],
        estilo: "cartaz",
      },
      pergunta: "Na frase 'O Analista decifrou o código', qual é o sujeito?",
      hipoteses: [
        { texto: "O Analista" },
        { texto: "decifrou o código" },
        { texto: "o código" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Correto! 'O Analista' é quem pratica a ação de decifrar.",
      feedbackErro: "Pergunte: quem decifrou o código?",
      dica: "O sujeito responde 'quem pratica a ação'.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Peças da Oração.",
    cards: [
      { palavra: "Sujeito", explicacao: "É o termo sobre o qual se declara algo na oração. Pode ser uma pessoa, coisa ou ideia.", exemplo: "Os pesquisadores analisaram os dados.", imagemUrl: "https://images.unsplash.com/photo-1554224155-1696413575a8?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Predicado", explicacao: "É tudo o que se afirma sobre o sujeito, geralmente contendo o verbo da oração.", exemplo: "Os pesquisadores analisaram os dados.", imagemUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Núcleo", explicacao: "É a palavra mais importante dentro do sujeito ou do predicado, aquela que carrega o sentido central.", exemplo: "No sujeito 'O grande satélite', o núcleo é 'satélite'.", imagemUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Estrutura: Separando as Partes",
    instrucao: "Observe como cada oração se divide em sujeito e predicado.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "A EQUIPE DO OBSERVATÓRIO | enviou o relatório.", explicacao: "💡 SUJEITO: 'A equipe do Observatório' — de quem estamos falando. PREDICADO: 'enviou o relatório' — o que essa equipe fez." },
          { texto: "O SISTEMA | falhou durante a noite.", explicacao: "💡 SUJEITO: 'O sistema'. PREDICADO: 'falhou durante a noite' — a informação nova sobre o sujeito." },
          { texto: "MUITOS ANALISTAS | revisaram o código-fonte.", explicacao: "💡 SUJEITO: 'Muitos analistas'. PREDICADO: 'revisaram o código-fonte' — a ação praticada por eles." },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "As Engrenagens da Frase",
      imagemUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
      destacar: ["sujeito", "predicado", "concordância"],
      paragrafos: [
        "Toda oração do português organiza a informação em duas partes fundamentais: o sujeito, que indica sobre quem ou sobre o que se fala, e o predicado, que traz a informação nova, geralmente centrada em um verbo.",
        "Reconhecer o sujeito é essencial para garantir a concordância verbal correta. Se o sujeito é plural, o verbo deve concordar no plural — errar essa relação é um dos deslizes mais comuns na escrita.",
        "O predicado pode ser curto ou longo, mas sempre gira em torno de um núcleo verbal. É ele que move a oração, que cria ação, estado ou fenômeno.",
        "Dominar essa divisão ajuda o Analista a escrever frases mais claras e a revisar textos com precisão, evitando ambiguidades e erros de concordância."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "Segundo o texto, o que o predicado sempre traz como base?",
        opcoes: ["Um núcleo verbal", "Um núcleo nominal apenas", "Uma pontuação obrigatória", "Um advérbio de tempo"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! O predicado gira em torno de um verbo.",
        feedbackErro: "Releia o terceiro parágrafo com atenção.",
        ondeEstaNoTexto: "O predicado pode ser curto ou longo, mas sempre gira em torno de um núcleo verbal.",
        dica: "Busque a palavra 'núcleo' no texto.",
        reensino: "Reveja que o predicado sempre tem um verbo como base.",
      },
      {
        pergunta: "Por que reconhecer o sujeito é importante, segundo o texto?",
        opcoes: ["Para garantir a concordância verbal correta", "Para decorar o alfabeto", "Para contar o número de palavras", "Para usar mais vírgulas"],
        correta: 0,
        feedbackAcerto: "Exato! O sujeito define a concordância do verbo.",
        feedbackErro: "Volte ao segundo parágrafo.",
        ondeEstaNoTexto: "Reconhecer o sujeito é essencial para garantir a concordância verbal correta.",
        dica: "Pense na relação entre sujeito plural e verbo.",
        reensino: "Relembre que sujeito e verbo precisam concordar em número.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_escrita: {
    titulo: "Console de Estrutura",
    instrucao: "Produza um pequeno texto marcando mentalmente sujeito e predicado de cada oração.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Relatório de Observação",
        comando: "Escreva 4 orações descrevendo o que aconteceu no Observatório hoje, cada uma com sujeito e predicado bem definidos.",
        modelo: [
          "O sensor detectou uma falha.",
          "A equipe corrigiu o problema rapidamente.",
        ],
        checklist: [
          "Cada oração tem um sujeito claro?",
          "Cada predicado tem um verbo?",
          "Sujeito e verbo concordam em número?",
        ],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Montagem da Oração",
    bloco: {
      instrucao: "Organize o processo de análise de uma oração, do texto bruto à separação das partes.",
      itens: [
        { id: "1", texto: "📥 LEITURA: Ler a oração completa.", imagemUrl: "" },
        { id: "2", texto: "🔍 LOCALIZAR O VERBO: Achar a ação ou estado central.", imagemUrl: "" },
        { id: "3", texto: "🧩 IDENTIFICAR O SUJEITO: Perguntar quem pratica essa ação.", imagemUrl: "" },
        { id: "4", texto: "✅ SEPARAR O PREDICADO: Tudo o que sobra é o predicado.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Perfeito! Você domina a anatomia da oração.",
      feedbackErro: "Sem achar o verbo primeiro, fica difícil localizar o sujeito.",
      dica: "O verbo é a chave para encontrar o sujeito.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Relatório Técnico.",
    leitura: {
      titulo: "Manual de Manutenção do Observatório",
      imagemUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400",
      destacar: ["técnicos", "revisaram", "antenas"],
      paragrafos: [
        "Os técnicos do Observatório revisaram todas as antenas na última madrugada. O procedimento evitou uma falha grave de comunicação.",
        "Depois da revisão, o sistema central voltou a operar em plena capacidade, garantindo a coleta contínua de dados.",
        "A equipe registrou cada etapa em um relatório detalhado, para que futuras manutenções sejam ainda mais rápidas.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual é o sujeito da oração 'Os técnicos do Observatório revisaram todas as antenas'?",
        opcoes: ["Os técnicos do Observatório", "todas as antenas", "revisaram", "na última madrugada"],
        correta: 0,
        feedbackAcerto: "Correto! É quem pratica a ação de revisar.",
        feedbackErro: "Pergunte: quem revisou as antenas?",
        dica: "O sujeito vem antes do verbo nessa frase.",
        reensino: "Revise o Laboratório de Estrutura para reforçar a separação sujeito/predicado.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "Toda oração se divide em sujeito e predicado.",
      "O sujeito é quem pratica ou sofre a ação; o predicado traz a informação nova.",
      "A concordância verbal depende do reconhecimento correto do sujeito.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que é o sujeito de uma oração?",
        opcoes: ["O termo sobre o qual se declara algo", "Sempre a primeira palavra da frase", "Um sinal de pontuação", "Uma palavra sem função"],
        correta: 0,
        feedbackAcerto: "Isso mesmo!",
        feedbackErro: "Sujeito é sobre quem se fala na oração.",
        ondeEstaNoTexto: "É o termo sobre o qual se declara algo na oração.",
        dica: "Pense em 'de quem estamos falando'.",
        reensino: "Revise o Momento 03 (Dicionário).",
      },
      {
        pergunta: "Na frase 'As antenas captaram o sinal', o predicado é:",
        opcoes: ["captaram o sinal", "As antenas", "o sinal", "captaram"],
        correta: 0,
        feedbackAcerto: "Correto! É o que se afirma sobre as antenas.",
        feedbackErro: "O predicado é tudo o que sobra depois do sujeito.",
        ondeEstaNoTexto: "captaram o sinal",
        dica: "Retire o sujeito 'As antenas' e veja o que sobra.",
        reensino: "Revise o Laboratório de Estrutura.",
      },
      {
        pergunta: "Por que é importante identificar o sujeito ao escrever?",
        opcoes: ["Para garantir concordância verbal correta", "Para usar mais adjetivos", "Para escrever frases mais curtas", "Para evitar usar verbos"],
        correta: 0,
        feedbackAcerto: "Exato! Concordância depende do sujeito.",
        feedbackErro: "Releia a leitura guiada sobre concordância.",
        ondeEstaNoTexto: "Reconhecer o sujeito é essencial para garantir a concordância verbal correta.",
        dica: "Pense na relação sujeito-verbo.",
        reensino: "Revise o Momento 04.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Raio-X da Frase",
    materiais: ["Um texto qualquer (jornal, livro ou celular)", "Caneta"],
    passos: [
      "Escolha 3 frases de um texto qualquer com sua família.",
      "Para cada frase, identifiquem juntos o sujeito e o predicado.",
      "Discutam: o sujeito é uma pessoa, um grupo ou uma coisa?",
      "Registrem as 3 frases divididas em sujeito | predicado.",
    ],
    registro: "Escreva no caderno: 'Frase: [X] — Sujeito: [Y] — Predicado: [Z]'.",
  },
  recompensa: {
    xp: 150,
    moedas: 75,
  },
};
