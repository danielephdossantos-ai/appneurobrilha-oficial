import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 17 — Texto Publicitário: Produzir, Revisar, Convencer
 * -------------------------------------------------------------
 * BNCC: EF67LP13, EF07LP14
 */
export const aula17: AulaPortuguesV4 = {
  slug: "aula-17-texto-publicitario",
  titulo: "Texto Publicitário: A Arte de Convencer",
  iconeTrilha: "📢",
  bncc: ["EF67LP13", "EF07LP14"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Mídias e Verdades: Missão de Persuasão",
    historia: "Analista, o Observatório recebeu um pedido especial: criar uma campanha publicitária para divulgar a própria estação de pesquisa. Anúncios não informam apenas — eles convencem, seduzem e usam palavras escolhidas a dedo para prender a atenção. Hoje você vai aprender a montar e revisar um texto publicitário eficiente.",
    imagemUrl: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: A Campanha do Observatório.",
    bloco: {
      titulo: "Diagnóstico Publicitário",
      capaImagemUrl: "",
      pistas: [
        { nome: "Anúncios usam frases curtas e verbos no imperativo.", imagemUrl: "" },
        { nome: "Um bom slogan é fácil de lembrar.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel de Marketing",
        icone: "📢",
        linhas: [
          "  [ CAMPANHA OBSERVATÓRIO ]",
          "                          ",
          "  SLOGAN + IMAGEM         ",
          "  + CHAMADA PARA AÇÃO     ",
          "                          ",
          "  Objetivo: CONVENCER     ",
        ],
        estilo: "cartaz",
      },
      pergunta: "Qual é o principal objetivo de um texto publicitário?",
      hipoteses: [
        { texto: "Persuadir o público a agir ou consumir algo" },
        { texto: "Apenas narrar fatos de forma neutra" },
        { texto: "Explicar regras gramaticais" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Correto! A publicidade busca convencer e provocar uma ação no público.",
      feedbackErro: "Reveja o painel: o foco é convencer, não apenas informar.",
      dica: "Pense no que você sente ao ver um anúncio bem-feito.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Palavras da Campanha.",
    cards: [
      { palavra: "Slogan", explicacao: "Frase curta e marcante que resume a ideia central de uma campanha publicitária.", exemplo: "'Observatório: onde o futuro é decifrado.'", imagemUrl: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Chamada para ação", explicacao: "Trecho do anúncio que convida o público a fazer algo imediatamente.", exemplo: "'Inscreva-se agora e participe da missão!'", imagemUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Persuasão", explicacao: "Estratégia de convencer alguém por meio de argumentos, emoções ou linguagem atrativa.", exemplo: "A publicidade usa persuasão para despertar o desejo de compra.", imagemUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Sintaxe: Verbos que Convencem",
    instrucao: "Observe como o modo imperativo é usado para convocar o leitor à ação.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "VENHA conhecer o Observatório!", explicacao: "💡 IMPERATIVO: convoca o leitor diretamente a agir.\n> Ex: 'Participe.', 'Descubra.', 'Não perca.'" },
          { texto: "O Observatório TRANSFORMA sua forma de pensar.", explicacao: "💡 VERBO NO PRESENTE: cria a sensação de verdade imediata e universal.\n> Ex: 'Funciona.', 'Resolve.', 'Ajuda.'" },
          { texto: "Você MERECE essa experiência única.", explicacao: "💡 APELO EMOCIONAL: o verbo conecta o produto ao desejo do leitor.\n> Ex: 'Você precisa.', 'Você vai amar.'" },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "Anatomia de um Bom Anúncio",
      imagemUrl: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=400",
      destacar: ["slogan", "chamada para ação", "persuadir"],
      paragrafos: [
        "Um texto publicitário eficiente combina imagem, som e palavras para persuadir o público em poucos segundos. Diferente de uma notícia, ele não busca apenas informar: quer convencer alguém a comprar, participar ou mudar de ideia.",
        "O slogan é o coração da campanha: uma frase curta, fácil de lembrar, que resume a mensagem principal. Grandes marcas são reconhecidas por seus slogans, que ficam na memória do público por anos.",
        "Outro elemento essencial é a chamada para ação, aquele convite direto ao leitor: 'compre já', 'inscreva-se', 'participe agora'. Essa chamada geralmente usa verbos no modo imperativo, que soam como ordens amigáveis.",
        "Depois de criado, todo texto publicitário passa por revisão: verifica-se se a linguagem está clara, se o slogan é memorável e se a imagem combina com a mensagem. Um bom Analista de linguagem sabe revisar um anúncio antes de publicá-lo.",
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "Segundo o texto, qual é a principal diferença entre um anúncio e uma notícia?",
        opcoes: ["O anúncio busca convencer, não apenas informar", "O anúncio nunca usa imagens", "A notícia sempre usa verbos no imperativo", "A notícia é mais curta que o anúncio"],
        correta: 0,
        feedbackAcerto: "Correto! A publicidade tem como foco persuadir o público.",
        feedbackErro: "Releia o primeiro parágrafo com atenção à comparação feita.",
        ondeEstaNoTexto: "ele não busca apenas informar: quer convencer alguém",
        dica: "Pense no objetivo final de cada tipo de texto.",
        reensino: "Notícias informam; anúncios publicitários buscam persuadir e convencer.",
      },
      {
        pergunta: "O que é a 'chamada para ação' mencionada no texto?",
        opcoes: ["Um convite direto ao leitor para agir, como 'compre já'", "O nome da empresa anunciante", "A imagem principal do anúncio", "O preço do produto anunciado"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! É o convite direto que usa verbos no imperativo.",
        feedbackErro: "O terceiro parágrafo dá exemplos desse elemento.",
        ondeEstaNoTexto: "aquele convite direto ao leitor: 'compre já', 'inscreva-se', 'participe agora'.",
        dica: "Pense nas frases que pedem uma ação imediata do leitor.",
        reensino: "A chamada para ação convoca o leitor a agir imediatamente, geralmente no imperativo.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_escrita: {
    titulo: "Console de Redação",
    instrucao: "Produza, revise e edite um pequeno texto publicitário.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Campanha do Observatório",
        comando: "Crie um anúncio curto para divulgar um produto ou evento da sua escola. Inclua um slogan, uma frase de apelo e uma chamada para ação. Depois revise o texto verificando clareza e impacto.",
        modelo: [
          "Slogan: 'Feira de Ciências: onde as ideias ganham vida!'",
          "Apelo: 'Descubra experimentos incríveis feitos por seus colegas.'",
          "Chamada para ação: 'Venha no sábado às 14h e participe!'",
        ],
        checklist: [
          "Meu anúncio tem um slogan curto e memorável?",
          "Usei verbos no imperativo na chamada para ação?",
          "Revisei o texto para garantir clareza e impacto?",
        ],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Montando um Anúncio",
    bloco: {
      instrucao: "Organize as etapas de produção de um texto publicitário.",
      itens: [
        { id: "1", texto: "🎯 DEFINIÇÃO: Escolha o produto, evento ou ideia a divulgar.", imagemUrl: "" },
        { id: "2", texto: "✍️ CRIAÇÃO: Escreva o slogan e a frase de apelo.", imagemUrl: "" },
        { id: "3", texto: "📢 CHAMADA: Adicione uma chamada para ação clara.", imagemUrl: "" },
        { id: "4", texto: "🔍 REVISÃO: Releia e ajuste a linguagem para maior impacto.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Campanha montada com sucesso! Você domina as etapas da produção publicitária.",
      feedbackErro: "Revise a ordem: primeiro defina o objetivo, depois crie, depois revise.",
      dica: "A revisão (4) sempre vem depois da escrita (2 e 3).",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Anúncio do Setor 5.",
    leitura: {
      titulo: "Anúncio: Curso de Robótica",
      imagemUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400",
      destacar: ["inscreva-se", "transforme", "vagas limitadas"],
      paragrafos: [
        "Transforme sua curiosidade em conhecimento! O Curso de Robótica do Observatório abre novas turmas este mês, com vagas limitadas.",
        "Inscreva-se já e garanta seu lugar entre os futuros Analistas de tecnologia. As aulas começam na próxima semana!",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual expressão do anúncio funciona como chamada para ação?",
        opcoes: ["Inscreva-se já", "Curso de Robótica", "Vagas limitadas", "Este mês"],
        correta: 0,
        feedbackAcerto: "Exato! 'Inscreva-se já' convida o leitor a agir imediatamente.",
        feedbackErro: "Busque o verbo no imperativo usado no segundo parágrafo.",
        dica: "É uma frase que pede uma ação urgente do leitor.",
        reensino: "Chamadas para ação usam verbos no imperativo para convocar o leitor a agir.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "O texto publicitário busca persuadir, não apenas informar.",
      "Slogan e chamada para ação são elementos centrais de um bom anúncio.",
      "Todo anúncio deve ser revisado antes de publicado, quanto à clareza e ao impacto.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual é o principal objetivo de um texto publicitário?",
        opcoes: ["Persuadir o público a agir", "Narrar um fato histórico", "Explicar uma regra científica", "Contar uma história de ficção"],
        correta: 0,
        feedbackAcerto: "Correto! A publicidade busca convencer o público.",
        feedbackErro: "Pense na diferença entre informar e convencer.",
        ondeEstaNoTexto: "",
        dica: "O texto publicitário quer que você faça algo.",
        reensino: "O texto publicitário tem como função principal persuadir o leitor.",
      },
      {
        pergunta: "Qual modo verbal é mais comum em chamadas para ação publicitárias?",
        opcoes: ["Imperativo", "Subjuntivo", "Infinitivo pessoal", "Particípio"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! O imperativo soa como um convite direto à ação.",
        feedbackErro: "Pense em frases como 'compre já' e 'participe agora'.",
        ondeEstaNoTexto: "",
        dica: "É o modo verbal usado para dar ordens ou convites.",
        reensino: "O modo imperativo é usado para convocar o leitor a agir imediatamente.",
      },
      {
        pergunta: "Por que a revisão é uma etapa importante na produção de um anúncio?",
        opcoes: ["Porque garante clareza e maior impacto na mensagem", "Porque torna o texto mais longo", "Porque elimina a necessidade de um slogan", "Porque substitui a chamada para ação"],
        correta: 0,
        feedbackAcerto: "Perfeito! A revisão melhora a clareza e a força persuasiva do anúncio.",
        feedbackErro: "Volte ao texto e relembre a função da etapa final de produção.",
        ondeEstaNoTexto: "",
        dica: "Pense no que acontece quando um texto não é revisado.",
        reensino: "Revisar um anúncio garante que a mensagem seja clara e convincente.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Campanha em Casa",
    materiais: ["Caderno", "Caneta ou lápis de cor"],
    passos: [
      "Escolha, com a família, um produto ou evento fictício para divulgar.",
      "Criem juntos um slogan curto e uma chamada para ação.",
      "Desenhem ou descrevam a imagem que acompanharia o anúncio.",
      "Registrem o anúncio final no caderno.",
    ],
    registro: "Escreva: 'Missão Campanha em Casa - Slogan criado: [texto]'.",
  },
  recompensa: {
    xp: 150,
    moedas: 75,
  },
};
