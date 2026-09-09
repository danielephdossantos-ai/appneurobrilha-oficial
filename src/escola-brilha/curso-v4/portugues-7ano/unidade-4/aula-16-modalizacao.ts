import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 16 — Modalização: As Marcas de Certeza e Dúvida
 * -------------------------------------------------------------
 * BNCC: EF07LP14
 */
export const aula16: AulaPortuguesV4 = {
  slug: "aula-16-modalizacao",
  titulo: "Modalização: Certeza ou Dúvida?",
  iconeTrilha: "🎛️",
  bncc: ["EF07LP14"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Mídias e Verdades: Módulo Ativado",
    historia: "Analista, bem-vindo à Unidade 4. Nem tudo o que é dito é dito com a mesma força. Existem palavras que gritam certeza absoluta e outras que sussurram dúvida. Essas palavras são chamadas de modalizadores, e hoje você vai aprender a detectá-las em qualquer texto que passar pelo Observatório.",
    imagemUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: O Painel de Certeza.",
    bloco: {
      titulo: "Diagnóstico de Modalização",
      capaImagemUrl: "",
      pistas: [
        { nome: "Algumas palavras mostram que quem fala tem certeza.", imagemUrl: "" },
        { nome: "Outras palavras mostram dúvida ou possibilidade.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel do Observatório",
        icone: "🎛️",
        linhas: [
          "  [ MEDIDOR DE CERTEZA ]",
          "                        ",
          "  CERTEZA: certamente,  ",
          "  com certeza, de fato  ",
          "                        ",
          "  DÚVIDA: talvez,       ",
          "  possivelmente, pode ser",
        ],
        estilo: "cartaz",
      },
      pergunta: "Para que servem os modalizadores em um texto?",
      hipoteses: [
        { texto: "Para mostrar o grau de certeza ou dúvida de quem fala" },
        { texto: "Para enfeitar a frase sem alterar o sentido" },
        { texto: "Para substituir o verbo principal da oração" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Correto! Modalizadores revelam a atitude de quem fala diante do que diz.",
      feedbackErro: "Reveja o painel: eles marcam certeza, dúvida ou opinião.",
      dica: "Pense em como 'certamente' e 'talvez' mudam o peso de uma frase.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Marcas de Fala.",
    cards: [
      { palavra: "Modalizador", explicacao: "Palavra ou expressão que indica o grau de certeza, dúvida ou opinião de quem produz o texto.", exemplo: "Talvez a notícia esteja errada.", imagemUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Certeza", explicacao: "Grau de modalização que afirma algo como fato inquestionável.", exemplo: "Certamente o sensor detectou a falha.", imagemUrl: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Possibilidade", explicacao: "Grau de modalização que indica que algo pode ou não ser verdadeiro.", exemplo: "Pode ser que o vídeo tenha sido editado.", imagemUrl: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Sintaxe: Grau de Certeza",
    instrucao: "Observe como a troca de uma palavra muda o compromisso de quem fala com a verdade.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "CERTAMENTE o vídeo é falso.", explicacao: "💡 CERTEZA ALTA: quem fala assume total responsabilidade pela afirmação.\n> Ex: 'com certeza', 'sem dúvida', 'de fato'." },
          { texto: "TALVEZ o vídeo seja falso.", explicacao: "💡 DÚVIDA: quem fala não tem provas suficientes para afirmar.\n> Ex: 'possivelmente', 'pode ser', 'é provável que'." },
          { texto: "Segundo a fonte, o vídeo É falso.", explicacao: "💡 ATRIBUIÇÃO: a certeza é transferida para outra pessoa ou fonte, não para quem fala.\n> Ex: 'segundo dizem', 'de acordo com a pesquisa'." },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "As Palavras que Escondem uma Opinião",
      imagemUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=400",
      destacar: ["certamente", "talvez", "modalizadores"],
      paragrafos: [
        "Nenhum texto é neutro por completo. Mesmo em notícias e reportagens, é comum encontrar palavras que revelam o quanto o autor confia no que está afirmando. Essas palavras são chamadas de modalizadores.",
        "Quando alguém escreve 'certamente o resultado será positivo', está assumindo total certeza. Já quem escreve 'talvez o resultado seja positivo' admite que existe dúvida sobre o fato.",
        "Reconhecer modalizadores ajuda o leitor a perceber o grau de confiabilidade de uma informação. Textos cheios de 'certamente', 'sem dúvida' e 'é óbvio que' merecem atenção redobrada, pois podem estar forçando uma certeza que não existe.",
        "Por isso, todo bom Analista de linguagem observa não apenas o que o texto diz, mas como ele diz, prestando atenção às marcas de certeza e dúvida escondidas nas palavras.",
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "Segundo o texto, o que são modalizadores?",
        opcoes: ["Palavras que revelam o grau de certeza do autor sobre o que afirma", "Palavras que substituem o sujeito da oração", "Sinônimos usados para evitar repetição", "Palavras que só aparecem em poemas"],
        correta: 0,
        feedbackAcerto: "Correto! Modalizadores mostram a confiança do autor na informação apresentada.",
        feedbackErro: "Releia o primeiro parágrafo com atenção à definição dada.",
        ondeEstaNoTexto: "Essas palavras são chamadas de modalizadores.",
        dica: "O texto liga o termo à ideia de confiança do autor.",
        reensino: "Modalizadores indicam o grau de certeza, dúvida ou opinião de quem fala.",
      },
      {
        pergunta: "Por que o texto sugere atenção redobrada a expressões como 'é óbvio que'?",
        opcoes: ["Porque podem forçar uma certeza que não existe de fato", "Porque são sempre mentirosas", "Porque são proibidas em textos formais", "Porque indicam dúvida do autor"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! Expressões de certeza exagerada merecem verificação.",
        feedbackErro: "O terceiro parágrafo explica o risco dessas expressões.",
        ondeEstaNoTexto: "podem estar forçando uma certeza que não existe.",
        dica: "Pense no motivo de desconfiar de afirmações 'certas demais'.",
        reensino: "Certeza exagerada em um texto pode esconder falta de provas reais.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_escrita: {
    titulo: "Console de Redação",
    instrucao: "Produza frases usando diferentes graus de modalização.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Painel de Certezas e Dúvidas",
        comando: "Escreva 3 frases sobre um assunto atual: uma com certeza total, uma com dúvida e uma atribuindo a informação a uma fonte.",
        modelo: [
          "Certamente essa notícia foi verificada por especialistas.",
          "Talvez essa notícia precise de mais checagem.",
          "Segundo a agência de notícias, o fato foi confirmado.",
        ],
        checklist: [
          "Usei um modalizador de certeza?",
          "Usei um modalizador de dúvida?",
          "Usei uma expressão de atribuição a fonte?",
        ],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Detectando Modalização",
    bloco: {
      instrucao: "Organize o processo de análise de um texto quanto à modalização.",
      itens: [
        { id: "1", texto: "📥 LEITURA: Leia o texto completo com atenção.", imagemUrl: "" },
        { id: "2", texto: "🔍 BUSCA: Procure palavras como 'certamente', 'talvez', 'pode ser'.", imagemUrl: "" },
        { id: "3", texto: "🎛️ CLASSIFICAÇÃO: Classifique cada uma como certeza, dúvida ou atribuição.", imagemUrl: "" },
        { id: "4", texto: "✅ CONCLUSÃO: Avalie o grau de confiabilidade da informação.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Modalização detectada com sucesso! Você já lê nas entrelinhas.",
      feedbackErro: "Revise a ordem: primeiro leia tudo, depois busque as marcas, depois classifique.",
      dica: "Você só pode classificar (3) depois de encontrar as palavras (2).",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Boletim do Observatório.",
    leitura: {
      titulo: "Boletim: A Chuva de Amanhã",
      imagemUrl: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&q=80&w=400",
      destacar: ["possivelmente", "com certeza", "segundo os meteorologistas"],
      paragrafos: [
        "Segundo os meteorologistas, possivelmente choverá na região amanhã à tarde. Os dados dos satélites indicam uma frente de umidade se aproximando.",
        "O que é certo, com certeza, é que as temperaturas vão cair bastante ao longo do dia, independentemente da chuva.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual expressão do texto indica dúvida sobre a chuva?",
        opcoes: ["Possivelmente", "Com certeza", "Segundo os meteorologistas", "As temperaturas vão cair"],
        correta: 0,
        feedbackAcerto: "Exato! 'Possivelmente' marca incerteza sobre o fato.",
        feedbackErro: "Busque a palavra ligada diretamente à previsão de chuva.",
        dica: "É uma palavra que admite que o fato pode não ocorrer.",
        reensino: "'Possivelmente' é um modalizador de dúvida, indicando que o fato não é garantido.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "Modalizadores indicam o grau de certeza, dúvida ou opinião de quem fala.",
      "Certeza exagerada em um texto pode esconder falta de provas.",
      "Reconhecer modalizadores ajuda a avaliar a confiabilidade de uma informação.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Em 'Talvez a informação esteja incorreta', o modalizador indica:",
        opcoes: ["Dúvida", "Certeza absoluta", "Atribuição a uma fonte", "Negação total"],
        correta: 0,
        feedbackAcerto: "Correto! 'Talvez' indica dúvida sobre o fato.",
        feedbackErro: "Pense no que 'talvez' costuma expressar em uma frase.",
        ondeEstaNoTexto: "",
        dica: "É o oposto de uma afirmação categórica.",
        reensino: "'Talvez', 'possivelmente' e 'pode ser' são modalizadores de dúvida.",
      },
      {
        pergunta: "Qual das expressões abaixo indica certeza?",
        opcoes: ["Sem dúvida", "Talvez", "É possível que", "Pode ser que"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! 'Sem dúvida' reforça a certeza da afirmação.",
        feedbackErro: "As outras opções indicam possibilidade, não certeza.",
        ondeEstaNoTexto: "",
        dica: "Procure a expressão que não deixa espaço para dúvida.",
        reensino: "Expressões como 'sem dúvida', 'certamente' e 'de fato' marcam certeza.",
      },
      {
        pergunta: "Por que é importante identificar modalizadores em notícias?",
        opcoes: ["Porque ajudam a avaliar o quanto a informação é confiável", "Porque tornam o texto mais longo", "Porque substituem os verbos da frase", "Porque são obrigatórios em toda oração"],
        correta: 0,
        feedbackAcerto: "Perfeito! Modalizadores revelam o grau de confiança do autor na informação.",
        feedbackErro: "Volte ao painel do Observatório para relembrar a função dos modalizadores.",
        ondeEstaNoTexto: "",
        dica: "Pense na diferença entre uma notícia com 'com certeza' e outra com 'talvez'.",
        reensino: "Identificar modalizadores é essencial para avaliar a confiabilidade de um texto.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Medidor de Certeza",
    materiais: ["Caderno", "Caneta", "Uma notícia de jornal ou site"],
    passos: [
      "Escolha uma notícia com a família e leia em voz alta.",
      "Circule as palavras que indicam certeza ou dúvida.",
      "Discuta com a família se a notícia parece confiável ou exagerada.",
      "Registre no caderno os modalizadores encontrados.",
    ],
    registro: "Escreva: 'Missão Medidor de Certeza - Modalizadores encontrados: [X], [Y], [Z]'.",
  },
  recompensa: {
    xp: 150,
    moedas: 75,
  },
};
