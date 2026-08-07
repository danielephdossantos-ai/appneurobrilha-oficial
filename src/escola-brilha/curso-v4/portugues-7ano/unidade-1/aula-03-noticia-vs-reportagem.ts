import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 3 — Notícia vs Reportagem: Comparando Coberturas
 * -------------------------------------------------------------
 * Comparar um mesmo fato tratado em mídias diferentes.
 * BNCC: EF07LP02, EF67LP03
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-noticia-vs-reportagem",
  titulo: "Notícia vs Reportagem",
  iconeTrilha: "🗞️",
  bncc: ["EF07LP02", "EF67LP03"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Duas Frequências, Um Fato",
    historia: "Analista, um mesmo fato pode chegar até você de formas muito diferentes. Um veículo publica uma notícia rápida, direta, com os dados essenciais. Outro produz uma reportagem, mais longa, com entrevistas, contexto e detalhes. Nenhuma das duas está 'errada' — elas têm objetivos diferentes. Seu trabalho hoje é aprender a reconhecer essas duas frequências e entender o que cada uma entrega.",
    imagemUrl: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Dois Formatos de Cobertura.",
    bloco: {
      titulo: "Notícia x Reportagem",
      capaImagemUrl: "",
      pistas: [
        { nome: "A notícia responde rápido: o quê, quem, quando, onde.", imagemUrl: "" },
        { nome: "A reportagem investiga o porquê e o como, com mais profundidade.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Comparador de Mídias",
        icone: "🗞️",
        linhas: [
          "  [ NOTÍCIA ]         [ REPORTAGEM ] ",
          "  Curta               Longa          ",
          "  Fatos essenciais    Contexto amplo ",
          "  Poucas fontes       Várias fontes  ",
          "  Publicação rápida   Apuração lenta ",
        ],
        estilo: "cartaz",
      },
      pergunta: "Qual característica é típica da reportagem, e não da notícia simples?",
      hipoteses: [
        { texto: "Apuração mais profunda com várias fontes" },
        { texto: "Ser sempre mais curta que a notícia" },
        { texto: "Não ter nenhum dado concreto" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Correto! A reportagem aprofunda o tema com múltiplas fontes.",
      feedbackErro: "Releia o cartaz: qual formato é mais longo e investigativo?",
      dica: "Pense em qual formato exige mais tempo de apuração.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Formatos Jornalísticos.",
    cards: [
      { palavra: "Notícia", explicacao: "Texto jornalístico curto e objetivo que informa um fato recente, respondendo perguntas essenciais.", exemplo: "A notícia informou que a ponte foi interditada às 8h.", imagemUrl: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Reportagem", explicacao: "Texto jornalístico mais extenso, com apuração aprofundada, entrevistas e contexto sobre um fato.", exemplo: "A reportagem trouxe depoimentos de moradores sobre a interdição da ponte.", imagemUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Apuração", explicacao: "Processo de investigação e checagem de informações antes da publicação de uma matéria.", exemplo: "A apuração levou três dias, com entrevistas a engenheiros.", imagemUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Comparação: Mesmo Fato, Formatos Diferentes",
    instrucao: "Veja como o mesmo acontecimento é tratado em cada formato.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "NOTÍCIA: 'Chuva forte alaga bairro na madrugada de sábado.'", explicacao: "💡 Direto ao ponto: o quê, quando, onde. Sem aprofundar causas ou consequências." },
          { texto: "REPORTAGEM: 'Como o descaso com o sistema de drenagem alagou o bairro há 10 anos.'", explicacao: "💡 Investiga causas históricas, ouve moradores e especialistas, contextualiza o problema." },
          { texto: "NOTÍCIA: 'Prefeitura anuncia obra emergencial nesta segunda.'", explicacao: "💡 Informação pontual e recente, sem detalhar todo o histórico do problema." },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "Dois Olhares Sobre o Mesmo Fato",
      imagemUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=400",
      destacar: ["objetividade", "aprofundamento", "múltiplas fontes"],
      paragrafos: [
        "Quando um fato acontece, diferentes veículos de imprensa podem cobri-lo de maneiras distintas. A notícia prioriza a objetividade: informa o essencial rapidamente, respondendo o quê, quem, quando e onde.",
        "Já a reportagem busca o aprofundamento: investiga o porquê e o como, ouve múltiplas fontes, traz dados históricos e diferentes pontos de vista sobre o mesmo assunto.",
        "Comparar essas duas formas de cobertura ajuda o leitor a entender que uma notícia rápida não esgota o assunto — ela é apenas o primeiro contato com o fato.",
        "Um leitor crítico busca as duas formas: a notícia para se atualizar rápido, e a reportagem para compreender o contexto completo."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "Segundo o texto, o que a notícia prioriza?",
        opcoes: ["A objetividade e a rapidez", "A opinião pessoal do jornalista", "O maior número de páginas", "A ausência de dados"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! A notícia informa rápido e direto.",
        feedbackErro: "Releia o primeiro parágrafo.",
        ondeEstaNoTexto: "A notícia prioriza a objetividade: informa o essencial rapidamente.",
        dica: "Pense na palavra 'objetividade'.",
        reensino: "Reforce a diferença entre rapidez e profundidade.",
      },
      {
        pergunta: "O que caracteriza a reportagem, de acordo com o texto?",
        opcoes: ["Investigação com múltiplas fontes e contexto", "Ser sempre publicada antes da notícia", "Não ter nenhuma fonte", "Ser escrita apenas por uma pessoa sem apurar nada"],
        correta: 0,
        feedbackAcerto: "Correto! A reportagem investiga em profundidade.",
        feedbackErro: "Volte ao segundo parágrafo.",
        ondeEstaNoTexto: "a reportagem busca o aprofundamento: investiga o porquê e o como, ouve múltiplas fontes.",
        dica: "Busque a palavra 'aprofundamento'.",
        reensino: "Relembre as características do Laboratório de Comparação.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_escrita: {
    titulo: "Console de Cobertura",
    instrucao: "Produza dois textos curtos sobre o mesmo fato, um em cada formato.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Duplo Registro",
        comando: "Escolha um fato do seu bairro ou escola. Escreva uma NOTÍCIA curta (3 linhas) e um trecho de REPORTAGEM (com uma opinião de alguém, real ou imaginada) sobre o mesmo fato.",
        modelo: [
          "NOTÍCIA: A quadra da escola foi reformada nesta semana.",
          "REPORTAGEM: Segundo o diretor, a reforma era pedida há dois anos pelos alunos, que reclamavam do piso rachado...",
        ],
        checklist: [
          "Minha notícia é curta e direta?",
          "Minha reportagem traz mais contexto ou uma fonte?",
          "As duas tratam do mesmo fato?",
        ],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Do Fato à Reportagem",
    bloco: {
      instrucao: "Organize o processo de produção de uma reportagem, do fato à publicação.",
      itens: [
        { id: "1", texto: "📥 FATO: Um acontecimento chama a atenção da redação.", imagemUrl: "" },
        { id: "2", texto: "🔍 APURAÇÃO: Jornalistas buscam fontes e dados sobre o fato.", imagemUrl: "" },
        { id: "3", texto: "🎙️ ENTREVISTAS: Diferentes pontos de vista são ouvidos.", imagemUrl: "" },
        { id: "4", texto: "📰 PUBLICAÇÃO: O texto aprofundado é organizado e divulgado.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Excelente! Você entendeu o processo de uma reportagem.",
      feedbackErro: "Sem apurar (2) não há entrevistas (3) nem publicação de qualidade (4).",
      dica: "Pense em qual etapa vem antes de ouvir as fontes.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Comparando Coberturas.",
    leitura: {
      titulo: "O Caso da Escola Municipal",
      imagemUrl: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=400",
      destacar: ["reforma", "moradores", "prazo"],
      paragrafos: [
        "NOTÍCIA: A Escola Municipal Vista Alegre terá reforma iniciada na próxima segunda-feira, informou a Secretaria de Educação nesta terça.",
        "REPORTAGEM: Moradores do bairro Vista Alegre esperam há três anos pela reforma da escola. Em entrevista, a diretora relatou que o telhado apresentava infiltrações desde 2021, e pais de alunos organizaram abaixo-assinados para acelerar o processo.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual trecho é a NOTÍCIA e por quê?",
        opcoes: ["O primeiro, por ser curto e direto sobre o fato", "O segundo, por ter entrevista", "Nenhum dos dois", "Os dois são notícias"],
        correta: 0,
        feedbackAcerto: "Correto! O primeiro traz apenas o essencial, sem aprofundar.",
        feedbackErro: "Compare o tamanho e a quantidade de fontes de cada trecho.",
        dica: "A notícia é sempre mais objetiva e curta.",
        reensino: "Revise o Laboratório de Comparação sobre os dois formatos.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "Notícia e reportagem cobrem fatos, mas com profundidade diferente.",
      "A notícia é objetiva e rápida; a reportagem investiga e contextualiza.",
      "Comparar coberturas ajuda a formar um olhar mais completo sobre um fato.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que diferencia principalmente a reportagem da notícia?",
        opcoes: ["O nível de aprofundamento e apuração", "O tamanho da fonte usada na impressão", "A cor do papel do jornal", "A ausência total de fatos"],
        correta: 0,
        feedbackAcerto: "Isso mesmo!",
        feedbackErro: "Pense no processo de apuração de cada formato.",
        ondeEstaNoTexto: "a reportagem busca o aprofundamento",
        dica: "Reveja o Dicionário do Observatório.",
        reensino: "Revise a diferença de apuração entre os dois formatos.",
      },
      {
        pergunta: "Uma notícia normalmente responde a quais perguntas?",
        opcoes: ["O quê, quem, quando e onde", "Apenas por quê", "Nenhuma pergunta objetiva", "Somente como"],
        correta: 0,
        feedbackAcerto: "Correto! Essas são as perguntas essenciais da notícia.",
        feedbackErro: "Releia o Briefing do Momento 02.",
        ondeEstaNoTexto: "A notícia responde rápido: o quê, quem, quando, onde.",
        dica: "Pense nas perguntas básicas do jornalismo.",
        reensino: "Revise o cartaz Comparador de Mídias.",
      },
      {
        pergunta: "Por que é útil ler tanto a notícia quanto a reportagem sobre um fato?",
        opcoes: ["Para se atualizar rápido e entender o contexto completo", "Porque uma sempre mente", "Porque são exatamente iguais", "Para economizar tempo de leitura"],
        correta: 0,
        feedbackAcerto: "Exato! As duas se complementam.",
        feedbackErro: "Releia o último parágrafo da leitura guiada.",
        ondeEstaNoTexto: "Um leitor crítico busca as duas formas.",
        dica: "Pense no que cada formato oferece de diferente.",
        reensino: "Revise o Momento 04 sobre os dois olhares.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Dupla Cobertura",
    materiais: ["Jornal, site de notícias ou aplicativo de notícias", "Caderno"],
    passos: [
      "Escolha um fato recente com sua família.",
      "Procurem uma notícia curta e, se possível, uma reportagem sobre o mesmo fato.",
      "Comparem: o que a reportagem traz que a notícia não trouxe?",
      "Registrem as diferenças encontradas.",
    ],
    registro: "Escreva no caderno: 'Fato: [X] — Notícia trouxe: [Y] — Reportagem trouxe a mais: [Z]'.",
  },
  recompensa: {
    xp: 150,
    moedas: 75,
  },
};
