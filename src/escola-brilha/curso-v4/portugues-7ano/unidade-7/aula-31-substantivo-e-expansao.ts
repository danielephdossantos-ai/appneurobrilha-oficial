import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 31 — Substantivo e a Expansão do Nome
 * -------------------------------------------------------------
 * BNCC: EF07LP08
 */
export const aula31: AulaPortuguesV4 = {
  slug: "aula-31-substantivo-e-expansao",
  titulo: "Substantivo e a Expansão do Nome",
  iconeTrilha: "🪐",
  bncc: ["EF07LP08"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "O Núcleo de Todo Registro",
    historia: "Analista, todo relatório do Observatório começa por um nome: de um objeto, de um lugar, de um sentimento. Esse nome é o SUBSTANTIVO, o núcleo do registro. Mas um núcleo sozinho é pobre em informação. Hoje você vai aprender a expandir esse núcleo com artigos, adjetivos e outras palavras que se encaixam ao redor dele, formando um grupo nominal completo e detalhado.",
    imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: O Núcleo e Seus Satélites.",
    bloco: {
      titulo: "Expansão do Grupo Nominal",
      capaImagemUrl: "",
      pistas: [
        { nome: "O substantivo é o centro de um grupo de palavras.", imagemUrl: "" },
        { nome: "Artigos, adjetivos e outras palavras orbitam o substantivo e o detalham.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel de Expansão",
        icone: "🪐",
        linhas: [
          "  [ GRUPO NOMINAL ]          ",
          "                             ",
          "  O   sinal   antigo         ",
          "  ↑     ↑       ↑            ",
          "artigo núcleo  adjetivo      ",
          "                             ",
          "  Quanto mais satélites,     ",
          "  mais precisa a mensagem.   ",
        ],
        estilo: "cartaz",
      },
      pergunta: "O que acontece quando expandimos um substantivo com outras palavras?",
      hipoteses: [
        { texto: "A informação fica mais precisa e detalhada" },
        { texto: "A frase perde todo o sentido" },
        { texto: "O substantivo deixa de ser o núcleo" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Correto! Expandir o núcleo é adicionar precisão ao registro.",
      feedbackErro: "Releia o painel: os satélites detalham, não apagam o núcleo.",
      dica: "Pense em 'sinal' e depois em 'o sinal antigo e fraco'. Qual carrega mais informação?",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Peças do Grupo Nominal.",
    cards: [
      { palavra: "Substantivo", explicacao: "Palavra que nomeia seres, objetos, lugares, sentimentos ou ideias. É o núcleo do grupo nominal.", exemplo: "A estação captou um sinal.", imagemUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Adjunto Adnominal", explicacao: "Termo que acompanha e detalha o substantivo (artigo, adjetivo, pronome, numeral).", exemplo: "O sinal antigo veio de uma estação distante.", imagemUrl: "https://images.unsplash.com/photo-1554224155-1696413575a8?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Substantivo Coletivo", explicacao: "Substantivo que, no singular, nomeia um conjunto de seres da mesma espécie.", exemplo: "A frota de sondas cruzou o setor 9.", imagemUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Expansão Nominal",
    instrucao: "Veja como cada palavra acrescenta uma camada de informação ao substantivo central.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "A SONDA registrou dados.", explicacao: "💡 NÚCLEO SIMPLES: 'sonda' é o substantivo, sozinho e genérico.\n> Ex: 'O robô funcionou.' e 'A estrela brilhou.'" },
          { texto: "A SONDA antiga registrou dados valiosos.", explicacao: "💡 EXPANSÃO COM ADJETIVOS: 'antiga' e 'valiosos' detalham 'sonda' e 'dados'.\n> Ex: 'O robô veloz funcionou bem.' e 'A estrela distante brilhou.'" },
          { texto: "Uma frota de sondas antigas registrou dados valiosos.", explicacao: "💡 EXPANSÃO COMPLETA: numeral, coletivo e locução adjetiva se somam ao núcleo.\n> Ex: 'Duas equipes de robôs funcionaram.' e 'Um grupo de estrelas distantes brilhou.'" },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "O Catálogo de Nomes do Observatório",
      imagemUrl: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&q=80&w=400",
      destacar: ["substantivo", "adjetivos", "expandir", "núcleo"],
      paragrafos: [
        "No Observatório, cada objeto catalogado recebe um substantivo próprio. Mas apenas nomear não basta: é preciso descrever para que o registro seja útil a qualquer analista futuro.",
        "Por isso, usamos adjetivos e outras palavras para expandir o núcleo. Não escrevemos apenas 'estrela'; escrevemos 'a estrela anã e fria do setor 12', porque cada detalhe evita confusão entre objetos parecidos.",
        "Essa técnica se chama expansão do grupo nominal. Ela transforma um nome solto em uma descrição completa, cheia de informações úteis para a missão.",
        "Um bom Analista nunca deixa um substantivo sozinho quando pode enriquecê-lo com precisão. Isso é o que separa um relatório fraco de um registro confiável.",
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "Segundo o texto, por que os analistas expandem os substantivos com adjetivos?",
        opcoes: ["Para evitar confusão entre objetos parecidos", "Para deixar o texto mais longo sem motivo", "Para esconder o núcleo da frase", "Para eliminar o substantivo principal"],
        correta: 0,
        feedbackAcerto: "Exato! A expansão traz precisão e evita confusão.",
        feedbackErro: "Releia o segundo parágrafo com atenção.",
        ondeEstaNoTexto: "cada detalhe evita confusão entre objetos parecidos",
        dica: "Pense no motivo prático, não estético, da expansão.",
        reensino: "Revise o Laboratório de Expansão Nominal para ver exemplos claros.",
      },
      {
        pergunta: "Como o texto chama a técnica de acrescentar detalhes ao substantivo?",
        opcoes: ["Expansão do grupo nominal", "Redução do núcleo", "Substituição de verbo", "Corte de frase"],
        correta: 0,
        feedbackAcerto: "Isso mesmo, é a expansão do grupo nominal.",
        feedbackErro: "O nome da técnica aparece no terceiro parágrafo.",
        ondeEstaNoTexto: "Essa técnica se chama expansão do grupo nominal.",
        dica: "Busque a expressão exata usada no texto.",
        reensino: "Reveja o momento de vocabulário sobre adjunto adnominal.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_escrita: {
    titulo: "Console de Descrição",
    instrucao: "Expanda substantivos simples em grupos nominais completos.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Catálogo Detalhado",
        comando: "Escolha 3 substantivos simples (ex: nave, planeta, sinal) e escreva-os expandidos com artigo, adjetivo e outro complemento.",
        modelo: ["Simples: nave.", "Expandido: A nave antiga e silenciosa do setor 7."],
        checklist: ["Usei artigo antes do substantivo?", "Acrescentei pelo menos um adjetivo?", "O grupo nominal ficou mais informativo?"],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Montagem: Do Núcleo ao Grupo Completo.",
    bloco: {
      instrucao: "Organize a construção de um grupo nominal, do mais simples ao mais completo.",
      itens: [
        { id: "1", texto: "🎯 NÚCLEO: identificar o substantivo principal ('sonda').", imagemUrl: "" },
        { id: "2", texto: "📎 ARTIGO: acrescentar um artigo ('a sonda').", imagemUrl: "" },
        { id: "3", texto: "🎨 ADJETIVO: somar uma qualidade ('a sonda antiga').", imagemUrl: "" },
        { id: "4", texto: "🧩 COMPLEMENTO: fechar com mais um detalhe ('a sonda antiga do setor 9').", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Montagem perfeita! Você constrói grupos nominais do núcleo até o detalhe final.",
      feedbackErro: "Sempre comece pelo núcleo antes de adicionar as peças ao redor.",
      dica: "Sem o substantivo, não há em quem pendurar artigo e adjetivo.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Relatório de Campo.",
    leitura: {
      titulo: "Relatório: A Rocha Misteriosa",
      imagemUrl: "https://images.unsplash.com/photo-1541873676-a18131494184?auto=format&fit=crop&q=80&w=400",
      destacar: ["rocha", "escura", "cristais"],
      paragrafos: [
        "A rocha escura e pesada apareceu no radar de longo alcance ontem à noite. Sua superfície irregular abriga pequenos cristais luminosos.",
        "A equipe de análise classificou o objeto como raro, pois nenhum outro registro do arquivo apresenta cristais dessa cor.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quais palavras expandem o substantivo 'rocha' no texto?",
        opcoes: ["Escura e pesada", "Radar e equipe", "Noite e arquivo", "Cor e classificou"],
        correta: 0,
        feedbackAcerto: "Perfeito, esses adjetivos detalham a rocha.",
        feedbackErro: "Releia a primeira frase do relatório.",
        dica: "Procure as qualidades atribuídas diretamente à rocha.",
        reensino: "Revise o momento de ensino visual sobre expansão nominal.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "O substantivo é o núcleo do grupo nominal.",
      "Artigos, adjetivos e outros termos expandem e detalham o substantivo.",
      "A expansão do grupo nominal deixa o registro mais preciso e informativo.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que é o núcleo de um grupo nominal?",
        opcoes: ["O substantivo", "O verbo", "O artigo", "O advérbio"],
        correta: 0,
        feedbackAcerto: "Correto, o substantivo é sempre o núcleo.",
        feedbackErro: "Revise o painel de expansão do grupo nominal.",
        ondeEstaNoTexto: "O substantivo é o núcleo do grupo nominal.",
        dica: "Pense em qual palavra não pode faltar no grupo.",
        reensino: "Volte ao momento 02 e reveja a estrutura do grupo nominal.",
      },
      {
        pergunta: "Em 'a estrela distante e fria', quais palavras expandem o substantivo?",
        opcoes: ["Distante e fria", "A e estrela", "Estrela e distante", "Somente 'a'"],
        correta: 0,
        feedbackAcerto: "Isso mesmo, são os adjetivos que expandem o núcleo.",
        feedbackErro: "O artigo acompanha, mas os adjetivos é que detalham.",
        ondeEstaNoTexto: "a estrela anã e fria do setor 12",
        dica: "Separe o artigo do restante das palavras.",
        reensino: "Revise o vocabulário sobre adjunto adnominal.",
      },
      {
        pergunta: "Qual é a função de um substantivo coletivo?",
        opcoes: ["Nomear um conjunto de seres no singular", "Substituir todo verbo da frase", "Ligar duas orações", "Indicar tempo verbal"],
        correta: 0,
        feedbackAcerto: "Exato, coletivo nomeia um grupo no singular.",
        feedbackErro: "Releia o card 'Substantivo Coletivo' no vocabulário.",
        ondeEstaNoTexto: "A frota de sondas cruzou o setor 9.",
        dica: "Pense em 'frota', 'cardume', 'equipe'.",
        reensino: "Revise o momento 03 de vocabulário.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Catálogo em Casa",
    materiais: ["Caderno", "Caneta", "Objetos da casa"],
    passos: [
      "Escolha 3 objetos da casa e anote apenas o substantivo de cada um.",
      "Peça a um familiar para descrever cada objeto com um adjetivo.",
      "Monte o grupo nominal completo juntando artigo, substantivo e adjetivo.",
      "Registre as três frases finais no caderno.",
    ],
    registro: "Escreva no caderno: 'Missão Catálogo - meus 3 grupos nominais foram: [X], [Y] e [Z]'.",
  },
  recompensa: {
    xp: 150,
    moedas: 75,
  },
};
