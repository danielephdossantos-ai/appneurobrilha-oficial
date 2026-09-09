import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 19 — Resumo com Paráfrase e Citação
 * -------------------------------------------------------------
 * BNCC: EF67LP22
 */
export const aula19: AulaPortuguesV4 = {
  slug: "aula-19-resumo-e-parafrase",
  titulo: "Resumo, Paráfrase e Citação",
  iconeTrilha: "📝",
  bncc: ["EF67LP22"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Mídias e Verdades: Missão Compactação",
    historia: "Analista, o Observatório recebeu um relatório científico gigante e precisa que você o transforme em um resumo curto e claro, sem copiar frases inteiras do original. Isso exige uma habilidade especial: reescrever ideias com suas próprias palavras, sem trair o sentido do texto original.",
    imagemUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Compactador de Textos.",
    bloco: {
      titulo: "Diagnóstico de Reescrita",
      capaImagemUrl: "",
      pistas: [
        { nome: "Copiar frases sem indicar a fonte é considerado plágio.", imagemUrl: "" },
        { nome: "Paráfrase é dizer a mesma ideia com outras palavras.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel do Compactador",
        icone: "📝",
        linhas: [
          "  [ COMPACTADOR DE TEXTO ]",
          "                          ",
          "  RESUMO: ideias centrais ",
          "  PARÁFRASE: outras       ",
          "  palavras, mesmo sentido ",
          "  CITAÇÃO: cópia + aspas  ",
          "  + indicação da fonte    ",
        ],
        estilo: "cartaz",
      },
      pergunta: "O que é uma paráfrase?",
      hipoteses: [
        { texto: "Reescrever uma ideia com outras palavras, mantendo o sentido original" },
        { texto: "Copiar um trecho inteiro sem alterações" },
        { texto: "Inventar uma nova informação não presente no texto" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Correto! Parafrasear é reescrever a ideia sem copiar as palavras exatas.",
      feedbackErro: "Reveja o painel: paráfrase muda as palavras, não o sentido.",
      dica: "Pense em como você explicaria algo 'com suas próprias palavras'.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Ferramentas de Reescrita.",
    cards: [
      { palavra: "Resumo", explicacao: "Texto que apresenta as ideias mais importantes de um texto maior, de forma reduzida.", exemplo: "O resumo do relatório tinha apenas dois parágrafos.", imagemUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Paráfrase", explicacao: "Reescrita de uma ideia usando palavras diferentes das do texto original, sem alterar o sentido.", exemplo: "Em vez de copiar, o Analista fez uma paráfrase do trecho.", imagemUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Citação", explicacao: "Trecho copiado exatamente de outro texto, colocado entre aspas e com indicação da fonte.", exemplo: "Segundo o autor, 'a ciência avança pela dúvida.'", imagemUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Sintaxe: Reescrever sem Trair o Sentido",
    instrucao: "Observe as diferenças entre citar, parafrasear e resumir a mesma ideia.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Original: 'A água é essencial para a vida na Terra.'", explicacao: "💡 TEXTO-FONTE: a ideia original antes de qualquer reescrita." },
          { texto: "Paráfrase: A vida no planeta depende diretamente da água.", explicacao: "💡 PARÁFRASE: mesma ideia, palavras diferentes, sem aspas nem cópia literal." },
          { texto: "Citação: Segundo o texto, \"a água é essencial para a vida na Terra\".", explicacao: "💡 CITAÇÃO: cópia exata, entre aspas, com indicação de que veio de outra fonte." },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "Reescrever sem Copiar",
      imagemUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400",
      destacar: ["resumo", "paráfrase", "citação", "plágio"],
      paragrafos: [
        "Ao pesquisar um assunto, é comum encontrar textos longos e cheios de detalhes. Para usar essas informações em um trabalho, o Analista precisa saber resumir, parafrasear ou citar corretamente.",
        "O resumo reúne apenas as ideias mais importantes de um texto, deixando de lado exemplos e detalhes secundários. Já a paráfrase reescreve uma ideia específica com palavras próprias, mantendo o sentido original.",
        "Quando é necessário manter as palavras exatas do autor, usa-se a citação: o trecho é copiado entre aspas, com a indicação de quem escreveu. Copiar um texto sem citar a fonte, fingindo que a ideia é sua, é chamado de plágio, uma prática grave e proibida em qualquer pesquisa séria.",
        "Dominar essas três ferramentas — resumo, paráfrase e citação — é essencial para produzir trabalhos escolares honestos e bem construídos.",
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "Segundo o texto, o que é o plágio?",
        opcoes: ["Copiar um texto sem citar a fonte, fingindo que a ideia é própria", "Resumir um texto com poucas palavras", "Citar um autor entre aspas corretamente", "Reescrever uma ideia com palavras próprias"],
        correta: 0,
        feedbackAcerto: "Correto! Plágio é apresentar a ideia de outra pessoa como se fosse sua.",
        feedbackErro: "Releia o terceiro parágrafo com atenção à definição de plágio.",
        ondeEstaNoTexto: "Copiar um texto sem citar a fonte, fingindo que a ideia é sua, é chamado de plágio",
        dica: "Pense no que torna uma cópia desonesta.",
        reensino: "Plágio é usar a ideia de outra pessoa sem dar o devido crédito.",
      },
      {
        pergunta: "Qual é a principal diferença entre resumo e paráfrase, segundo o texto?",
        opcoes: ["O resumo reúne as ideias principais; a paráfrase reescreve uma ideia específica", "O resumo sempre usa aspas; a paráfrase nunca usa palavras próprias", "A paráfrase é sempre maior que o texto original", "Não há diferença entre os dois"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! Resumo condensa o todo; paráfrase reescreve uma parte específica.",
        feedbackErro: "O segundo parágrafo explica a diferença entre os dois recursos.",
        ondeEstaNoTexto: "O resumo reúne apenas as ideias mais importantes... Já a paráfrase reescreve uma ideia específica",
        dica: "Pense no tamanho e na função de cada recurso.",
        reensino: "Resumo reduz o texto todo; paráfrase reescreve uma ideia pontual com outras palavras.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_escrita: {
    titulo: "Console de Redação",
    instrucao: "Produza um resumo e uma paráfrase de um pequeno trecho.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Compactador de Ideias",
        comando: "Leia a frase 'Os oceanos cobrem cerca de 70% da superfície da Terra e são fundamentais para o equilíbrio do clima.' Depois escreva uma paráfrase dela e um resumo de uma frase para um texto maior sobre o mesmo tema.",
        modelo: [
          "Paráfrase: A maior parte da superfície terrestre é ocupada pelos oceanos, que ajudam a regular o clima do planeta.",
          "Resumo: Os oceanos são essenciais para o clima da Terra.",
        ],
        checklist: [
          "Minha paráfrase usa palavras diferentes do original?",
          "O sentido da ideia original foi mantido?",
          "Meu resumo é curto e direto?",
        ],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Usando uma Fonte com Ética",
    bloco: {
      instrucao: "Organize o processo correto de usar uma informação de outra fonte em um trabalho.",
      itens: [
        { id: "1", texto: "📖 LEITURA: Leia atentamente o texto-fonte.", imagemUrl: "" },
        { id: "2", texto: "🤔 ESCOLHA: Decida se vai resumir, parafrasear ou citar a ideia.", imagemUrl: "" },
        { id: "3", texto: "✍️ REESCRITA: Escreva a ideia da forma escolhida, com suas palavras se necessário.", imagemUrl: "" },
        { id: "4", texto: "📌 CRÉDITO: Indique sempre a fonte de onde a ideia veio.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Uso ético da fonte confirmado! Você sabe reescrever com honestidade.",
      feedbackErro: "Revise a ordem: primeiro leia, depois escolha o recurso, depois escreva e credite.",
      dica: "O crédito à fonte (4) sempre vem depois da reescrita (3).",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Trabalho do Analista Júnior.",
    leitura: {
      titulo: "O Trabalho sobre Vulcões",
      imagemUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400",
      destacar: ["com suas próprias palavras", "citou a fonte", "sem copiar"],
      paragrafos: [
        "Para seu trabalho sobre vulcões, o Analista Júnior leu um livro científico e escreveu as ideias principais com suas próprias palavras, sem copiar frases inteiras.",
        "Quando quis usar uma frase exata do autor, ele a colocou entre aspas e citou a fonte corretamente, evitando qualquer tipo de plágio.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que o Analista Júnior fez para evitar o plágio?",
        opcoes: ["Escreveu com suas próprias palavras e citou a fonte quando copiou algo exato", "Copiou o livro inteiro sem alterações", "Não leu nenhum livro sobre o tema", "Inventou informações que não estavam no livro"],
        correta: 0,
        feedbackAcerto: "Exato! Ele parafraseou as ideias e citou corretamente quando necessário.",
        feedbackErro: "Releia o texto observando as duas atitudes do Analista Júnior.",
        dica: "Pense nas duas ações descritas nos dois parágrafos.",
        reensino: "Parafrasear e citar corretamente são formas de usar fontes sem cometer plágio.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "Resumo condensa as ideias principais de um texto maior.",
      "Paráfrase reescreve uma ideia com palavras próprias, mantendo o sentido.",
      "Citação copia um trecho exato, entre aspas, com indicação da fonte, evitando plágio.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que caracteriza uma citação correta?",
        opcoes: ["Trecho exato entre aspas com indicação da fonte", "Cópia sem aspas nem indicação de autor", "Reescrita completa com palavras próprias", "Texto inventado sem base em nenhuma fonte"],
        correta: 0,
        feedbackAcerto: "Correto! A citação preserva as palavras originais, mas indica a fonte.",
        feedbackErro: "Pense no papel das aspas e da indicação de autoria.",
        ondeEstaNoTexto: "",
        dica: "Relembre o exemplo do painel do compactador.",
        reensino: "Citação é uma cópia exata, marcada por aspas e com a fonte indicada.",
      },
      {
        pergunta: "Qual é a função principal de um resumo?",
        opcoes: ["Apresentar as ideias mais importantes de forma reduzida", "Copiar o texto original palavra por palavra", "Adicionar novas informações não presentes no texto", "Transformar o texto em um poema"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! O resumo reduz o texto às ideias centrais.",
        feedbackErro: "Pense no objetivo de resumir um texto longo.",
        ondeEstaNoTexto: "",
        dica: "Um resumo deve ser mais curto que o texto original.",
        reensino: "Resumir é apresentar as ideias essenciais de um texto de forma reduzida.",
      },
      {
        pergunta: "Por que o plágio é considerado uma prática grave?",
        opcoes: ["Porque apresenta a ideia de outra pessoa como se fosse própria, sem dar crédito", "Porque torna o texto mais curto", "Porque exige o uso de aspas em todo o texto", "Porque é uma forma correta de parafrasear"],
        correta: 0,
        feedbackAcerto: "Perfeito! O plágio é desonesto porque esconde a autoria real da ideia.",
        feedbackErro: "Volte ao texto e relembre a definição de plágio dada.",
        ondeEstaNoTexto: "",
        dica: "Pense no que significa 'fingir que a ideia é sua'.",
        reensino: "Plágio é apropriar-se de ideias alheias sem indicar a fonte original.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Reescrita em Casa",
    materiais: ["Caderno", "Caneta", "Um livro ou texto curto disponível em casa"],
    passos: [
      "Escolha, com a família, um parágrafo curto de um livro ou revista.",
      "Escreva uma paráfrase desse parágrafo com suas próprias palavras.",
      "Escreva também um resumo de uma frase para o mesmo parágrafo.",
      "Registre no caderno a citação exata do texto original, com aspas e a fonte.",
    ],
    registro: "Escreva: 'Missão Reescrita em Casa - Paráfrase criada: [texto]'.",
  },
  recompensa: {
    xp: 150,
    moedas: 75,
  },
};
