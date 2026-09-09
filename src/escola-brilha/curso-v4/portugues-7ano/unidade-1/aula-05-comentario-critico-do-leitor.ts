import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 5 — Comentário Crítico do Leitor: O Espaço do Leitor
 * -------------------------------------------------------------
 * BNCC: EF67LP02, EF67LP05
 */
export const aula05: AulaPortuguesV4 = {
  slug: "aula-05-comentario-critico-do-leitor",
  titulo: "Comentário Crítico do Leitor",
  iconeTrilha: "💬",
  bncc: ["EF67LP02", "EF67LP05"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Transmissão de Retorno",
    historia: "Analista, quem lê também tem voz. Jornais e sites reservam espaços para o leitor opinar: a seção de comentários, a 'carta do leitor'. Mas opinar não é apenas 'gostei' ou 'não gostei' — um comentário crítico de qualidade argumenta, respeita quem discorda e contribui para o debate. Hoje você vai calibrar sua transmissão de retorno para o Observatório.",
    imagemUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: O Espaço do Leitor.",
    bloco: {
      titulo: "Comentário Crítico",
      capaImagemUrl: "",
      pistas: [
        { nome: "Um comentário crítico apresenta uma opinião fundamentada, não apenas um desabafo.", imagemUrl: "" },
        { nome: "É possível discordar de um texto mantendo respeito e argumentos claros.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Console do Leitor",
        icone: "💬",
        linhas: [
          "  [ COMENTÁRIO FRACO ]        [ COMENTÁRIO CRÍTICO ] ",
          "  'Matéria péssima!'          'Discordo porque...'    ",
          "  Sem argumento                Com argumento          ",
          "  Ataque pessoal                Foco na ideia          ",
          "  Sem sugestão                  Traz contribuição      ",
        ],
        estilo: "cartaz",
      },
      pergunta: "O que diferencia um comentário crítico de qualidade de um comentário fraco?",
      hipoteses: [
        { texto: "Ter argumentos e respeitar quem pensa diferente" },
        { texto: "Ser sempre muito curto e sem explicação" },
        { texto: "Atacar diretamente o autor do texto" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Correto! Argumento e respeito são a base de um bom comentário.",
      feedbackErro: "Releia o cartaz: o que tem o comentário da direita que o da esquerda não tem?",
      dica: "Pense na diferença entre desabafo e argumento.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Vozes do Leitor.",
    cards: [
      { palavra: "Comentário crítico", explicacao: "Opinião fundamentada sobre um texto ou fato, apresentando argumentos e, se possível, sugestões.", exemplo: "Em seu comentário crítico, ela apontou dados que faltavam na reportagem.", imagemUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Carta do leitor", explicacao: "Gênero textual em que o leitor envia sua opinião sobre um assunto publicado, para ser divulgada pelo veículo.", exemplo: "A carta do leitor questionava a falta de fontes na matéria sobre o trânsito.", imagemUrl: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Argumento", explicacao: "Razão apresentada para sustentar uma opinião de forma convincente.", exemplo: "Seu argumento principal era a falta de dados oficiais na matéria.", imagemUrl: "https://images.unsplash.com/photo-1554224155-1696413575a8?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Comentários: Antes e Depois",
    instrucao: "Veja como transformar um comentário fraco em um comentário crítico de qualidade.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "FRACO: 'Essa matéria é uma vergonha, o jornalista não sabe nada.'", explicacao: "💡 Ataque pessoal, sem argumento nem sugestão de melhoria." },
          { texto: "CRÍTICO: 'A matéria não citou nenhuma fonte oficial sobre os dados de trânsito, o que enfraquece a informação.'", explicacao: "💡 Aponta um problema concreto (falta de fonte) sem atacar a pessoa." },
          { texto: "CRÍTICO: 'Concordo com o alerta sobre o problema, mas seria importante ouvir também a prefeitura antes de concluir algo.'", explicacao: "💡 Reconhece um ponto positivo e sugere um complemento, mantendo respeito." },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "A Voz do Leitor Importa",
      imagemUrl: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=400",
      destacar: ["fundamentada", "respeito", "contribuição"],
      paragrafos: [
        "Os espaços de comentário e as cartas do leitor existem para que o público participe do debate público, complementando ou questionando o que foi publicado.",
        "Um bom comentário crítico apresenta uma opinião fundamentada: cita um trecho do texto, explica por que discorda ou concorda, e evita ataques pessoais.",
        "O respeito é essencial mesmo em discordâncias fortes. É possível apontar falhas em uma matéria sem desrespeitar quem a escreveu.",
        "Quando bem escrito, um comentário pode até influenciar futuras coberturas, mostrando ao veículo o que o público espera ou o que ficou de fora."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "O que caracteriza um bom comentário crítico, segundo o texto?",
        opcoes: ["Opinião fundamentada, sem ataques pessoais", "Ser sempre positivo, mesmo quando discorda", "Repetir exatamente o texto original", "Ignorar completamente o texto lido"],
        correta: 0,
        feedbackAcerto: "Correto! Fundamentação e respeito são a chave.",
        feedbackErro: "Releia o segundo parágrafo.",
        ondeEstaNoTexto: "Um bom comentário crítico apresenta uma opinião fundamentada... e evita ataques pessoais.",
        dica: "Busque a palavra 'fundamentada'.",
        reensino: "Revise o Laboratório de Comentários (antes e depois).",
      },
      {
        pergunta: "Segundo o texto, o que pode acontecer quando um comentário é bem escrito?",
        opcoes: ["Pode influenciar futuras coberturas", "Sempre é apagado pelo site", "Nunca é lido por ninguém", "Vira automaticamente uma reportagem"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! Um bom comentário pode gerar impacto real.",
        feedbackErro: "Volte ao último parágrafo do texto.",
        ondeEstaNoTexto: "um comentário pode até influenciar futuras coberturas",
        dica: "Pense no poder de um comentário bem argumentado.",
        reensino: "Revise o Momento 04 sobre a voz do leitor.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_escrita: {
    titulo: "Console do Leitor Crítico",
    instrucao: "Produza um comentário crítico sobre um texto lido nesta unidade.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Meu Comentário Crítico",
        comando: "Escolha uma das leituras desta unidade (notícia, reportagem ou manchete) e escreva um comentário crítico de leitor sobre ela, com argumento e respeito.",
        modelo: [
          "Concordo com o ponto sobre [X], porque [motivo].",
          "Porém, senti falta de [Y], o que deixaria o texto mais completo.",
        ],
        checklist: [
          "Apresentei um argumento claro?",
          "Evitei ataques pessoais?",
          "Sugeri algo, mesmo discordando?",
        ],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Construindo um Comentário Crítico",
    bloco: {
      instrucao: "Organize o processo de produção de um comentário crítico de qualidade.",
      itens: [
        { id: "1", texto: "📥 LER COM ATENÇÃO: Entender bem o texto original antes de opinar.", imagemUrl: "" },
        { id: "2", texto: "🔍 IDENTIFICAR UM PONTO: Escolher algo específico para comentar (fato, dado ou argumento).", imagemUrl: "" },
        { id: "3", texto: "✍️ ARGUMENTAR: Explicar por que concorda ou discorda, com uma razão clara.", imagemUrl: "" },
        { id: "4", texto: "🤝 REVISAR O TOM: Garantir que o comentário é respeitoso antes de publicar.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Perfeito! Você domina o processo de um comentário crítico de qualidade.",
      feedbackErro: "Sem ler bem (1) e escolher um ponto (2), o argumento (3) fica vago.",
      dica: "Sempre comece lendo com atenção o texto original.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Comentários no Espaço do Leitor.",
    leitura: {
      titulo: "Seção de Comentários: Reforma da Praça",
      imagemUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
      destacar: ["argumento", "sugestão", "respeitosamente"],
      paragrafos: [
        "Comentário de Marina: 'A matéria mostrou bem os benefícios da reforma, mas não explicou de onde veio o dinheiro para a obra. Seria importante detalhar isso em uma próxima publicação.'",
        "Comentário de Bruno: 'Discordo respeitosamente da conclusão do texto. Acho que a praça precisava mais de segurança do que de paisagismo, mas reconheço que a reforma trouxe melhorias visuais.'",
      ],
    },
    perguntas: [
      {
        pergunta: "O que torna o comentário de Marina um exemplo de comentário crítico de qualidade?",
        opcoes: ["Ela aponta uma falta de informação e sugere melhoria", "Ela apenas elogia sem dizer nada específico", "Ela ataca pessoalmente o jornalista", "Ela copia o texto original sem opinar"],
        correta: 0,
        feedbackAcerto: "Correto! Ela argumenta e sugere algo específico.",
        feedbackErro: "Releia o comentário de Marina com atenção.",
        dica: "Veja se ela aponta algo concreto que faltou.",
        reensino: "Revise o Laboratório de Comentários (antes e depois).",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "O espaço do leitor permite participar do debate público sobre um texto.",
      "Um comentário crítico de qualidade tem argumento, respeito e, se possível, sugestão.",
      "Discordar é legítimo, desde que feito sem ataques pessoais.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que é um comentário crítico, segundo esta aula?",
        opcoes: ["Uma opinião fundamentada, com argumento e respeito", "Um ataque direto ao autor do texto", "Uma cópia do texto original", "Um comentário sem nenhuma explicação"],
        correta: 0,
        feedbackAcerto: "Isso mesmo!",
        feedbackErro: "Releia o Dicionário do Observatório.",
        ondeEstaNoTexto: "Opinião fundamentada sobre um texto ou fato, apresentando argumentos",
        dica: "Pense em argumento + respeito.",
        reensino: "Revise o Momento 03.",
      },
      {
        pergunta: "O que deve ser evitado em um comentário crítico de qualidade?",
        opcoes: ["Ataques pessoais a quem escreveu o texto", "Argumentos claros", "Sugestões de melhoria", "Citações do texto original"],
        correta: 0,
        feedbackAcerto: "Correto! Ataques pessoais enfraquecem o comentário.",
        feedbackErro: "Releia o Laboratório de Comentários.",
        ondeEstaNoTexto: "evita ataques pessoais",
        dica: "Pense na diferença entre criticar a ideia e atacar a pessoa.",
        reensino: "Revise o Momento 04.",
      },
      {
        pergunta: "Por que a voz do leitor é importante para o jornalismo?",
        opcoes: ["Porque pode influenciar futuras coberturas", "Porque sempre muda o fato relatado", "Porque substitui o trabalho do jornalista", "Porque não tem nenhum efeito real"],
        correta: 0,
        feedbackAcerto: "Exato! O comentário bem argumentado pode gerar impacto.",
        feedbackErro: "Releia o último parágrafo da leitura guiada.",
        ondeEstaNoTexto: "um comentário pode até influenciar futuras coberturas",
        dica: "Pense no poder do feedback do público.",
        reensino: "Revise o Momento 04 sobre a voz do leitor.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Retorno Crítico",
    materiais: ["Um texto de jornal, site ou rede social", "Caderno"],
    passos: [
      "Escolham juntos um texto de opinião pública (notícia, post ou vídeo).",
      "Discutam: o que vocês concordam e o que discordam nele?",
      "Redijam juntos um comentário crítico respeitoso sobre o texto escolhido.",
      "Registrem o comentário final no caderno.",
    ],
    registro: "Escreva no caderno: 'Texto avaliado: [X] — Nosso comentário crítico: [Y]'.",
  },
  recompensa: {
    xp: 150,
    moedas: 75,
  },
};
