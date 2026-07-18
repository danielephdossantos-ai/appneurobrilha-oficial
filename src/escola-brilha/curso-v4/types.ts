/**
 * Escola Brilha v4.1 — Modelo CURSO (não mais aula-por-habilidade).
 *
 * Hierarquia:
 *   Curso  →  Unidade  →  Aula (com 11 momentos pedagógicos fixos)
 *
 * Todo curso conhece a progressão. Toda aula conhece a anterior, a
 * próxima, o que revisar e o que reforçar. O código BNCC vira metadado
 * — o aluno vê apenas a jornada.
 *
 * Este módulo roda LADO A LADO com o modelo antigo (src/escola-brilha/
 * data/*.ts e types.ts). Aulas antigas continuam funcionando; novas
 * aulas são escritas AQUI.
 */

// ---------- Blocos reutilizáveis (visual) ----------------------------

export type CenaVisual =
  | { tipo: "imagem"; url: string; alt: string; legenda?: string }
  | { tipo: "grupoItens"; imagemUrl: string; quantidade: number; rotulo?: string }
  | {
      tipo: "comparar";
      lados: Array<{ imagemUrl: string; quantidade: number; rotulo: string }>;
    }
  | { tipo: "texto"; texto: string; destaque?: boolean };

export type Interacao =
  | {
      tipo: "tapContar";
      imagemUrl: string;
      quantidade: number;
      itemPlural: string;
      pergunta?: string;
    }
  | {
      tipo: "arrastar";
      instrucao: string;
      pares: Array<{ item: string; alvo: string; itemImagem?: string }>;
      alvosVisuais?: Array<{ nome: string; cor: string; capacidade?: number; imagemUrl?: string }>;
    }
  | {
      tipo: "escolhaVisual";
      pergunta: string;
      opcoes: Array<{ nome: string; imagemUrl: string }>;
      respostaCerta: string;
      feedbackAcerto: string;
      feedbackErro: string;
    }
  | {
      tipo: "operacaoVisual";
      operacao: "soma" | "subtracao";
      imagemUrl: string;
      itemPlural: string;
      a: number;
      b: number;
      legenda?: string;
    }
  | {
      tipo: "contarQuiz";
      grupos: Array<{ imagemUrl: string; quantidade: number; rotulo?: string }>;
      pergunta: string;
      opcoes: string[];
      correta: number;
      feedbackAcerto: string;
      feedbackErro: string;
    }
  | {
      /**
       * Minijogo "Colheita Relâmpago" — frutas caem, criança move a cesta,
       * professor fala 1, 2, 3... a cada fruta colhida. Depois de atingir
       * `alvoInicial`, aparece a rodada extra `chegaramMais` e a pergunta
       * "quantas ficaram?" (soma).
       */
      tipo: "minijogoColheita";
      imagemUrl: string;
      itemPlural: string;
      alvoInicial: number;   // ex.: 8 maçãs
      chegaramMais: number;  // ex.: +2 maçãs → total = 10
      duracaoSeg?: number;   // padrão 90
      feedbackAcerto: string;
      feedbackErro: string;
    };

// ---------- Os 11 momentos pedagógicos (contrato v4.1) ---------------

export type MomentoMotivacao = {
  titulo: string;
  historia: string;         // até ~400 chars — Brilha conta o "porquê"
  imagemUrl?: string;
};

export type MomentoExploracao = {
  instrucao: string;        // "Toque em cada fruta e veja o que acontece"
  cenas: CenaVisual[];
  interacao?: Interacao;
};

export type MomentoDescoberta = {
  perguntaGuia: string;     // "Você percebeu um padrão?"
  pista: string;            // o padrão que a criança deve notar
  revelacao: string;        // a "aha!" que Brilha revela
};

export type MomentoExplicacao = {
  titulo: string;
  etapas: Array<{
    texto: string;          // frase curta, uma ideia por etapa
    imagemUrl?: string;
    exemplo?: string;
    /** Visual de agrupamento: várias pilhas do mesmo tamanho para mostrar contagem por grupos. */
    agrupamentos?: Array<{
      imagemUrl: string;
      tamanhoGrupo: number;   // ex.: 5 ou 10
      qtdGrupos: number;      // ex.: 4 pilhas de 5
      rotulo?: string;        // ex.: "de 5 em 5"
    }>;
    /**
     * Anima "frutas → número": mostra grupos de frutas (ex.: 5 + 2),
     * conta uma a uma tocando, e revela a soma como algarismos.
     */
    frutasParaNumero?: {
      imagemUrl: string;
      itemPlural: string;
      grupos: number[];        // ex.: [5, 2] renderiza 🍎x5 + 🍎x2
    };
    /**
     * Conta armada (adição vertical) com animação passo a passo do resultado.
     *   a
     * + b
     * ----
     *   r
     */
    contaArmada?: {
      a: number;
      b: number;
      /** Opcional — inferido de a±b se ausente. */
      resultado?: number;
      /** Ex.: "maçãs" — para narração. */
      itemPlural?: string;
      /** "soma" (padrão) ou "subtracao". */
      operacao?: "soma" | "subtracao";
    };
  }>;
};


/** "Eu faço" — Brilha resolve pensando em voz alta. */
export type MomentoModelagem = {
  enunciado: string;
  passos: string[];         // cada passo é uma fala do Brilha
  resposta: string;
  visualUrl?: string;
  /**
   * Coleção visual para a criança contar junto com o Brilha.
   * Ex.: { grupos: [10, 10, 3] } renderiza 2 pilhas de 10 + 3 soltas.
   */
  colecaoVisual?: {
    imagemUrl: string;
    grupos: number[];
    itemPlural?: string;
  };
};

/** "Nós fazemos" — criança + Brilha juntos, com dicas. */
export type MomentoPraticaGuiada = {
  enunciado: string;
  interacao: Interacao;
  dica: string;             // sempre visível
};

/** "Você faz" — sozinha, sem dicas. */
export type MomentoPraticaIndependente = {
  enunciado: string;
  interacao: Interacao;
};

/** Problema do cotidiano — transferir o conhecimento. */
export type MomentoAplicacao = {
  contexto: string;         // "Você vai à padaria com sua mãe..."
  problema: string;
  interacao: Interacao;
};

/** Revisão espiral — retomar 1 ponto da aula anterior. */
export type MomentoRevisao = {
  refereAula?: string;      // slug da aula anterior (auto-preenchido)
  pontos: string[];
  miniDesafio?: Interacao;
};

/** Avaliação — 3 perguntas com feedback explicativo. */
export type MomentoAvaliacao = {
  perguntas: Array<{
    pergunta: string;
    opcoes: string[];
    correta: number;
    feedbackAcerto: string; // NUNCA só "Certo!" — sempre explica o raciocínio
    feedbackErro: string;   // ensina no erro
    visualUrl?: string;
    /** Grupos visuais para ajudar a contar (ex.: 2 maçãs + 3 maçãs). */
    visualGrupos?: Array<{
      imagemUrl: string;
      quantidade: number;
      rotulo?: string;
    }>;
    /** Quantidade a "tirar" visualmente (subtração). Quando definido em uma
     * pergunta com UM único visualGrupo, o quiz mostra um botão pra apagar
     * as últimas N imagens (fade + risco) e a criança conta o que sobrou. */
    tirar?: number;

  }>;
};

/** Missão em família — atividade offline. */
export type MomentoMissaoFamilia = {
  titulo: string;
  materiais: string[];
  passos: string[];
  registro: string;         // como registrar (foto, desenho, áudio)
};

// ---------- Aula v4 (contrato pedagógico completo) -------------------

export type AulaV4 = {
  /** Slug interno, ex: "vila-numeros-01-feira-das-frutas" */
  slug: string;
  /** Título amigável mostrado ao aluno na trilha. */
  titulo: string;
  /** Ícone/emoji ou imagem para o nó da trilha. */
  iconeTrilha: string;
  /** Habilidades BNCC costuradas (metadado — não aparece ao aluno). */
  bncc: string[];
  /** Duração alvo em minutos. */
  duracaoMin: number;

  // Os 11 momentos:
  momento01_motivacao: MomentoMotivacao;
  momento02_exploracao: MomentoExploracao;
  momento03_descoberta: MomentoDescoberta;
  momento04_explicacao: MomentoExplicacao;
  momento05_modelagem: MomentoModelagem;
  momento06_praticaGuiada: MomentoPraticaGuiada;
  momento07_praticaIndependente: MomentoPraticaIndependente;
  momento08_aplicacao: MomentoAplicacao;
  momento09_revisao: MomentoRevisao;
  momento10_avaliacao: MomentoAvaliacao;
  momento11_missaoFamilia: MomentoMissaoFamilia;

  /** Recompensas ao concluir. */
  recompensa: {
    xp: number;
    moedas: number;
    medalha?: string;
  };
};

export type Unidade = {
  slug: string;            // "unidade-1"
  numero: number;
  titulo: string;          // "A Feira dos Números"
  subtitulo: string;       // "Contar, comparar e agrupar"
  descricao: string;
  corTema: string;         // ex: "#f59e0b"
  aulas: AulaV4[];
};

export type Curso = {
  slug: string;            // "matematica-2ano"
  disciplina: string;      // "Matemática"
  ano: string;             // "2º Ano"
  titulo: string;          // "A Vila dos Números"
  descricao: string;
  mascoteImagemUrl?: string;
  corPrimaria: string;
  corSecundaria: string;
  /** Discriminador de player. Se ausente, assume "matematica" (compat). */
  tipoAula?: "matematica";
  unidades: Unidade[];
};

// =====================================================================
// LÍNGUA PORTUGUESA — contrato paralelo (não modifica AulaV4).
// =====================================================================

/** Card de vocabulário: palavra + explicação simples + exemplo. */
export type CardVocabularioData = {
  palavra: string;
  explicacao: string;      // linguagem de 7 anos
  exemplo: string;         // frase que usa a palavra
  imagemUrl?: string;      // opcional, ajuda memória
};

/** Bloco de leitura ilustrada (com áudio TTS embutido no player). */
export type LeituraIlustradaData = {
  titulo?: string;
  paragrafos: string[];    // 1 a 5 parágrafos curtos
  imagemUrl?: string;      // ilustração ao lado
  legendaImagem?: string;
  /** Palavras a destacar amarelo no texto (pra reforçar vocabulário). */
  destacar?: string[];
};

/** Bloco de previsão: título + capa + hipóteses. */
export type PrevisaoTituloData = {
  titulo: string;                                    // "O Mistério da Chave Azul"
  capaImagemUrl?: string;
  pistas?: Array<{ imagemUrl: string; nome: string }>; // objetos que aparecem
  /**
   * Quando a previsão é sobre um TEXTO real (bilhete, cartaz, convite,
   * lista, aviso), passe o texto completo aqui. O bloco vai renderizar o
   * papelzinho/cartaz com as linhas visíveis, em vez de só uma "capa de livro".
   */
  recado?: {
    /** rótulo opcional acima do papel (ex.: "Bilhete", "Cartaz da entrada"). */
    rotulo?: string;
    /** ícone/emoji opcional acima (📩 🎉 📝 📢). */
    icone?: string;
    /** cada string vira uma linha do papel. */
    linhas: string[];
    /** estilo visual: "papel" (padrão), "cartaz" (letras grandes). */
    estilo?: "papel" | "cartaz";
  };
  pergunta: string;                                  // "Sobre o que essa história vai falar?"
  hipoteses: Array<{ texto: string; imagemUrl?: string }>;
  respostaCerta: number;                             // índice da hipótese "esperada"
  feedbackAcerto: string;
  feedbackErro: string;
};

/** Bloco de ordenar sequência (páginas embaralhadas → ordem correta). */
export type OrdenarSequenciaData = {
  instrucao: string;                                   // "Coloque as páginas em ordem"
  itens: Array<{ id: string; texto: string; imagemUrl?: string }>;
  /** Ordem correta como lista dos ids na sequência esperada. */
  ordemCerta: string[];
  feedbackAcerto: string;
  feedbackErro: string;
};

/** Quiz de compreensão textual (opções em texto, sem imagem obrigatória). */
export type QuizTextoData = {
  pergunta: string;
  opcoes: string[];
  correta: number;
  feedbackAcerto: string;                              // explica onde a resposta está no texto
  feedbackErro: string;
  /** Trecho do texto que respondeu a pergunta (mostrado no feedback). */
  ondeEstaNoTexto?: string;
  /**
   * Aditivo: URLs de imagem paralelas a `opcoes` (mesmo tamanho e ordem).
   * Quando presente, o QuizTexto renderiza cada opção como card com
   * imagem em cima + texto embaixo, no mesmo padrão do ArquitetoLugar.
   * Ausente: mantém as bolinhas coloridas de sempre.
   */
  opcoesImagens?: string[];
};

// ---------- 11 momentos de Português ---------------------------------

export type MomentoMotivacaoPT = {
  titulo: string;
  historia: string;
  imagemUrl?: string;
};

export type MomentoPrevisao = {
  instrucao: string;
  bloco: PrevisaoTituloData;
};

export type MomentoVocabulario = {
  instrucao: string;
  cards: CardVocabularioData[];
};

export type MomentoLeituraGuiada = {
  instrucao: string;                                   // "Vamos ler juntos"
  leitura: LeituraIlustradaData;
};

export type MomentoCompreensao = {
  instrucao: string;
  perguntas: QuizTextoData[];                          // 2 a 4
};

export type MomentoPersonagensCenario = {
  instrucao: string;
  perguntas: QuizTextoData[];
};

export type MomentoSequencia = {
  instrucao: string;
  bloco: OrdenarSequenciaData;
};

export type MomentoLeituraIndependente = {
  instrucao: string;
  leitura: LeituraIlustradaData;
  perguntas: QuizTextoData[];
};

export type MomentoRevisaoPT = {
  pontos: string[];
  miniDesafio?: QuizTextoData;
};

export type MomentoAvaliacaoPT = {
  perguntas: QuizTextoData[];                          // 5 perguntas mistas
};

export type MomentoMissaoFamiliaPT = {
  titulo: string;
  materiais: string[];
  passos: string[];
  registro: string;
};

// ---------- Minijogos de Português (Unidade 2+) ---------------------

/** Arrastar cada item para o "alvo" correto. Ex.: bilhete → destinatário. */
export type ArrastarParaAlvoData = {
  instrucao: string;
  itens: Array<{
    id: string;
    texto: string;
    imagemUrl?: string;
    /** id do alvo correto. */
    alvoId: string;
  }>;
  alvos: Array<{ id: string; nome: string; imagemUrl?: string; descricao?: string }>;
  feedbackAcerto: string;
  feedbackErro: string;
};

/** Selecionar (marcar) apenas os itens pedidos entre várias opções. */
export type SelecionarItensData = {
  instrucao: string;
  pergunta: string;
  opcoes: Array<{ id: string; texto: string; imagemUrl?: string; correto: boolean }>;
  feedbackAcerto: string;
  feedbackErro: string;
};

/**
 * Montar palavras a partir de sílabas embaralhadas.
 * Cada "palavra" da atividade tem um alvo (palavraCerta), as sílabas
 * que a compõem, e opcionalmente imagem + frase de contexto.
 */
export type MontarPalavraData = {
  instrucao: string;
  palavras: Array<{
    id: string;
    /** ex.: "CASA" — o que a criança deve montar. */
    palavraCerta: string;
    /** ex.: ["CA","SA"] — na ORDEM correta (o componente embaralha). */
    silabas: string[];
    /** imagem que aparece quando acerta (opcional). */
    imagemUrl?: string;
    /** frase de contexto lida no acerto (opcional). */
    frase?: string;
  }>;
  feedbackAcerto: string;
  feedbackErro: string;
};

/**
 * Laboratório interativo (Geografia / Ciências / Física).
 * A criança liga/desliga "controles" (clima, terreno, força...) e vê a
 * ilustração reagir em tempo real. Cada combinação pode disparar uma
 * explicação curta que a criança ATIVA (com áudio próprio).
 */
export type LaboratorioClimaData = {
  instrucao: string;
  /** Cena visual — hoje só "casaRibeirinha", pronto pra crescer. */
  cena: "casaRibeirinha";
  controles: Array<{
    id: "sol" | "chuva" | "rio";
    rotulo: string;
    emoji: string;
    ligadoInicial?: boolean;
  }>;
  /**
   * Explicações por combinação de controles ativos.
   * Chave = ids ordenados alfabeticamente e unidos por "+".
   * ex.: "chuva+rio", "sol", "chuva+rio+sol".
   */
  explicacoes: Record<string, { titulo: string; texto: string }>;
  desafio: {
    pergunta: string;
    opcoes: string[];
    correta: number;
    feedbackAcerto: string;
    feedbackErro: string;
  };
};

/**
 * Arquiteto do Lugar Certo (Geografia).
 * Rodadas sequenciais: mostra UM cenário (lugar + moradores) no topo e
 * 3 tipos de moradia embaixo. Criança escolhe a que combina com o lugar.
 * Cada rodada tem feedback próprio e animação de construção no acerto.
 */
export type ArquitetoLugarData = {
  instrucao: string;
  rodadas: Array<{
    id: string;
    /** Cenário mostrado no topo. */
    cenario: {
      nome: string;
      /** Emoji do lugar (ex.: 🌊, 🏙️, 🌾, 🌳). */
      emojiLugar: string;
      /** Emoji dos moradores (ex.: 🎣, 👨‍👩‍👧, 👩‍🌾). */
      emojiMorador: string;
      pista: string;
    };
    /** 3 opções de moradia. Uma correta, duas distratoras. */
    opcoes: Array<{
      id: string;
      nome: string;
      imagemUrl: string;
    }>;
    /** id da opção certa. */
    correta: string;
    feedbackAcerto: string;
    feedbackErro: string;
  }>;
  feedbackFinal: string;
};

export type MinijogoPT =
  | { tipo: "arrastarParaAlvo"; titulo: string; bloco: ArrastarParaAlvoData }
  | { tipo: "selecionarItens"; titulo: string; bloco: SelecionarItensData }
  | { tipo: "montarPalavra"; titulo: string; bloco: MontarPalavraData }
  | { tipo: "ordenarSequencia"; titulo: string; bloco: OrdenarSequenciaData }
  | { tipo: "laboratorioClima"; titulo: string; bloco: LaboratorioClimaData }
  | { tipo: "arquitetoLugar"; titulo: string; bloco: ArquitetoLugarData };

/** Bloco opcional de minijogo pedagógico dentro da aula. */
export type MomentoMinijogo = {
  titulo: string;
  instrucao: string;
  jogo: MinijogoPT;
};

/** Bloco opcional de LABORATÓRIO — aparece depois do minijogo. */
export type MomentoLaboratorio = {
  titulo: string;
  instrucao: string;
  bloco: LaboratorioClimaData;
};

// ---------- Blocos de ENSINO VISUAL (equivalente ao "eu faço" da Mat.) --

/**
 * Ensino visual real — mostra a coisa acontecendo, com áudio.
 * A criança de 7 anos VÊ antes de ser cobrada.
 */
export type EnsinoVisualBloco =
  | {
      tipo: "maiusculaMinuscula";
      /** Pares como {maiuscula:"A", minuscula:"a", exemplo:"ANA / amor"}. */
      pares: Array<{ maiuscula: string; minuscula: string; exemplo?: string }>;
    }
  | {
      tipo: "fraseComPonto";
      /** Cada frase é mostrada com a 1ª letra em verde e a pontuação final em vermelho. */
      frases: Array<{ texto: string; explicacao?: string }>;
    }
  | {
      tipo: "alfabetoCompleto";
      /** Palavra-exemplo opcional pra cada letra (A→ABELHA, B→BOLA…). */
      exemplos?: Partial<Record<string, string>>;
    };

export type MomentoEnsinoVisual = {
  titulo: string;
  instrucao: string;
  blocos: EnsinoVisualBloco[];
};

export type AulaPortuguesV4 = {
  slug: string;
  titulo: string;
  iconeTrilha: string;
  bncc: string[];
  duracaoMin: number;

  momento01_motivacao: MomentoMotivacaoPT;
  momento02_previsao: MomentoPrevisao;
  momento03_vocabulario: MomentoVocabulario;
  /** Opcional — ensino visual do pré-requisito. Aparece antes da leitura guiada. */
  momento_ensinoVisual?: MomentoEnsinoVisual;
  momento04_leituraGuiada: MomentoLeituraGuiada;
  momento05_compreensao: MomentoCompreensao;
  momento06_personagensCenario: MomentoPersonagensCenario;
  momento07_sequencia: MomentoSequencia;
  momento08_leituraIndependente: MomentoLeituraIndependente;
  /** Opcional — quando presente, aparece entre a leitura independente e a revisão. */
  momento_minijogo?: MomentoMinijogo;
  /** Opcional — laboratório interativo (Geografia/Ciências). Aparece depois do minijogo. */
  momento_laboratorio?: MomentoLaboratorio;
  momento09_revisao: MomentoRevisaoPT;
  momento10_avaliacao: MomentoAvaliacaoPT;
  momento11_missaoFamilia: MomentoMissaoFamiliaPT;

  recompensa: {
    xp: number;
    moedas: number;
    medalha?: string;
  };
};

export type UnidadePortugues = {
  slug: string;
  numero: number;
  titulo: string;
  subtitulo: string;
  descricao: string;
  corTema: string;
  aulas: AulaPortuguesV4[];
};

export type CursoPortugues = {
  slug: string;
  disciplina: string;
  ano: string;
  titulo: string;
  descricao: string;
  mascoteImagemUrl?: string;
  corPrimaria: string;
  corSecundaria: string;
  tipoAula: "portugues";
  unidades: UnidadePortugues[];
};

// =====================================================================
// GEOGRAFIA 3º–9º — Player customizado (exceção formal ao padrão único).
// Ver .lovable/mem/constraints/geografia-3ao9-player-custom.md
// =====================================================================

export type CenaGeoV1 =
  | { tipo: "mesaCartografo"; instrucao: string; mapaUrl: string; imagemDestaqueUrl?: string; aurora: string; falaFinal: string; estilo?: "kid" | "teen" }
  | {
      tipo: "votoExplorador";
      aurora: string;                // fala inicial da Aurora
      pergunta: string;               // pergunta grande no topo
      fotoUrl?: string;               // opcional: imagem de contexto antes das opções
      opcoes: Array<{
        id: string;
        titulo: string;               // ex.: "Só cidade"
        subtitulo?: string;           // ex.: "prédios, ruas, praças"
        emoji: string;                // ícone grande no card
        cor: string;                  // gradient tailwind, ex.: "from-sky-400 to-indigo-500"
        fotoUrl?: string;             // opcional: imagem visual da opção
      }>;
      respostaCerta: string;          // id da opção correta
      feedbackAcerto: string;
      feedbackErro: string;
      falaFinal: string;              // Aurora fecha explicando
    }
  | {
      tipo: "cadernosCampo";
      aurora: string;
      instrucao: string;
      cadernos: Array<{
        id: string;
        capa: string;         // ex.: "Município"
        emoji: string;        // ícone grande da capa
        cor: string;          // gradient tailwind ex.: "from-emerald-400 to-teal-600"
        conteudo: string;     // texto revelado ao abrir
        exemplo?: string;     // frase de exemplo do cotidiano
        fotoUrl?: string;     // opcional: foto real exibida quando o caderno abre
        videoUrl?: string;    // opcional: vídeo curto (mp4) — tem prioridade sobre fotoUrl
        partes?: Array<{
          titulo: string;
          texto: string;
        }>;
      }>;
      falaFinal: string;
    }
  | {
      tipo: "narrarMapa";
      aurora: string;
      instrucao: string;
      mapaUrl: string;
      /** Layout alternativo: só personagem + botões de toque, sem mapa/thumbnails.
       *  Ao tocar num ponto, a foto do ponto aparece no painel de curiosidade. */
      layout?: "personagem";
      /** Imagem do personagem central (usada quando layout === "personagem"). */
      personagemImg?: string;
      pontos: Array<{
        id: string;
        x: number;      // 0-100 (% no mapa)
        y: number;      // 0-100
        emoji: string;  // ícone do balão (🏙️ 🌾 🌉 🚧 ...)
        cor: string;    // gradient tailwind ex.: "from-sky-400 to-indigo-500"
        titulo: string; // ex.: "Zona Urbana"
        texto: string;  // Aurora conta o que é esse ponto
        fotoUrl?: string; // opcional: foto real exibida no painel ativo
      }>;
      falaFinal: string;
    }

  | {
      tipo: "quizRadar";
      aurora: string;
      instrucao: string;
      perguntas: Array<{
        id: string;
        pergunta: string;
        fotoUrl?: string;    // opcional: foto real exibida acima da pergunta
        cards: Array<{
          id: string;
          emoji: string;
          titulo: string;
          cor: string;
        }>;
        correta: string;
        feedbackAcerto: string;
        feedbackErro: string;
      }>;
      falaFinal: string;
    }
  | {
      tipo: "mapaCamadas";
      aurora: string;
      instrucao: string;
      mapaUrl: string;
      camadas: Array<{
        id: string;
        rotulo: string;              // ex.: "Zona Urbana"
        emoji: string;
        cor: string;                 // gradient tailwind
        /** Retângulo da camada em % (0-100) sobre o mapa. */
        rect: { x: number; y: number; w: number; h: number };
        descricao: string;           // texto revelado quando ligada
        /** Foto opcional que aparece dentro do rect quando a camada está ligada. */
        fotoUrl?: string;
      }>;
      falaFinal: string;             // aparece quando as duas estiverem ligadas
    }
  | {
      tipo: "linhaEstrada";
      aurora: string;
      instrucao: string;
      pergunta: string;              // ex.: "Como o leite chega até sua casa?"
      paradas: Array<{
        id: string;
        emoji: string;
        rotulo: string;              // ex.: "Fazenda"
        descricao: string;           // texto lido quando acertada
        fotoUrl?: string;            // opcional: foto real exibida na parada
      }>;
      /** Ordem correta como lista dos ids. */
      ordemCerta: string[];
      feedbackAcerto: string;        // aparece quando tudo em ordem
      feedbackErro: string;          // aparece a cada toque errado
      falaFinal: string;
    }
  | {
      tipo: "voceLeSozinho";
      aurora: string;                    // fala curta de apresentação (SEM áudio na cena)
      tituloLivro: string;               // ex.: "Diário do Cartógrafo"
      subtitulo?: string;                // ex.: "Página 3 — Nosso Município"
      paragrafos: Array<{
        id: string;
        texto: string;                   // parágrafo curto, letras grandes
        /** Palavras-chave desse parágrafo. No modo teen viram chips clicáveis com definição. */
        chaves: string[];
        /** Opcional: definição curta para cada chave (teen). Ex.: { "rotação": "Giro da Terra no próprio eixo." } */
        definicoes?: Record<string, string>;
        fotoUrl?: string;                // opcional: imagem de apoio ao parágrafo
      }>;
      falaFinal: string;                 // fecha depois de "Li tudo"
    }
  | {
      tipo: "construtorMarcos";
      aurora: string;
      instrucao: string;
      /** Segundos por rodada no relógio. */
      duracaoSegundos: number;
      /** Banco compartilhado de peças (marcos) que aparecem embaixo. */
      pecas: Array<{ id: string; emoji: string; rotulo: string }>;
      rodadas: Array<{
        id: string;
        municipioA: { nome: string; emoji: string; cor: string };
        municipioB: { nome: string; emoji: string; cor: string };
        /** Frase curta que descreve a pista geográfica dessa rodada. */
        contexto: string;
        /** id da peça correta dentro de `pecas`. */
        pecaCertaId: string;
        feedbackAcerto: string;
        feedbackErro: string;
        fotoUrl?: string;               // opcional: imagem da rodada
      }>;
      falaFinal: string;
    }
  | {
      tipo: "pizzaMunicipio";
      aurora: string;
      instrucao: string;
      fotoUrl?: string;               // opcional: imagem de revisão antes das fatias
      /** Duas fatias somando 100. */
      fatias: [
        {
          id: string;
          rotulo: string;         // "Zona Urbana"
          emoji: string;
          percentual: number;     // 0-100
          cor: string;            // hex ou tailwind stop
          descricao: string;      // frase falada ao tocar
          exemplos: string[];     // 2-3 exemplos curtos
          fotoUrl?: string;       // opcional: imagem visual da fatia
        },
        {
          id: string;
          rotulo: string;
          emoji: string;
          percentual: number;
          cor: string;
          descricao: string;
          exemplos: string[];
          fotoUrl?: string;
        },
      ];
      falaFinal: string;
    }
  | {
      tipo: "seloAtlas";
      aurora: string;
      instrucao: string;
      fotoUrl?: string;                 // opcional: imagem de contexto da avaliação
      /** 3 perguntas curtas de fechamento. */
      perguntas: Array<{
        id: string;
        pergunta: string;
        fotoUrl?: string;               // opcional: imagem visual da pergunta
        opcoes: Array<{ id: string; texto: string; correta?: boolean }>;
        feedbackAcerto: string;
        feedbackErro: string;
      }>;
      selo: {
        nome: string;         // "Mestre dos Mapas e Fronteiras"
        subtitulo: string;    // "Insígnia oficial do Atlas Municipal"
        emoji: string;        // "🏅"
        cor: string;          // tailwind stop, ex "from-amber-300 to-orange-500"
        fotoUrl?: string;     // opcional: imagem da conquista
      };
      falaFinal: string;
    }
  | {
      /**
       * Mapa do Brasil INTERATIVO — SVG real com os 27 UFs clicáveis.
       * Cada estado acende ao ser tocado; abre popup com Nome/Capital/Sigla
       * e Aurora narra. Usado do 3º ao 9º ano.
       */
      tipo: "mapaBrasilInterativo";
      aurora: string;
      instrucao: string;
      /** Desafio pedagógico opcional — se ausente, missão é tocar em todos. */
      missao?:
        | { tipo: "todos" }
        | {
            /** Acender só os UFs listados (ex.: 5 mais populosos). */
            tipo: "selecionar";
            siglas: string[];
            pergunta: string;
          }
        | {
            /** 2+ grupos coloridos (ex.: populosos vs maiores em tamanho). */
            tipo: "grupos";
            grupos: Array<{
              id: string;
              rotulo: string;
              emoji: string;
              cor: string;                 // gradient tailwind
              siglas: string[];            // UFs desse grupo
              descricao: string;
            }>;
          };
      falaFinal: string;
    }
  | { tipo: "placeholder"; titulo: string; descricao: string };


export type AulaGeoV1 = {
  slug: string;
  titulo: string;
  iconeTrilha: string;
  bncc: string[];
  duracaoMin: number;
  /** "teen" = paleta acadêmica escura, sem mascote infantil, cards sóbrios (6º ano+). */
  estilo?: "teen";


  cena01_motivacao: CenaGeoV1;
  cena02_previsao: CenaGeoV1;
  cena03_vocabulario: CenaGeoV1;
  cena04_leituraGuiada: CenaGeoV1;
  cena05_compreensao: CenaGeoV1;
  cena06_personagensLugar: CenaGeoV1;
  cena07_sequencia: CenaGeoV1;
  cena08_voceLe: CenaGeoV1;
  cena09_minijogo: CenaGeoV1;
  cena10_revisao: CenaGeoV1;
  cena11_avaliacao: CenaGeoV1;

  recompensa: { xp: number; moedas: number; medalha?: string };
};

export type UnidadeGeoV1 = {
  slug: string;
  numero: number;
  titulo: string;
  subtitulo: string;
  descricao: string;
  corTema: string;
  aulas: AulaGeoV1[];
};

export type CursoGeoV1 = {
  slug: string;
  disciplina: string;
  ano: string;
  titulo: string;
  descricao: string;
  mascoteImagemUrl?: string;
  corPrimaria: string;
  corSecundaria: string;
  tipoAula: "geo-v1";
  unidades: UnidadeGeoV1[];
};

/** Union usado pelo registry e pela trilha. */
export type CursoAny = Curso | CursoPortugues | CursoGeoV1 | CursoArteV1;

// ============ ARTE 2º ANO — "🎨 O Pincel Mágico de Aurora" =============
// Player 100% customizado (arte-v1). Cada cena tem uma mecânica exclusiva
// (mistura de cores, frotagem, teatro de sombras, land art, etc.).

export type CorPrimariaId = "vermelho" | "azul" | "amarelo";
export type PotePrimario = { id: CorPrimariaId; hex: string; nome: string };

export type CenaArteV1 =
  | {
      tipo: "misturaCores";
      aurora: string;
      instrucao: string;
      falaFinal: string;
      misturas: Array<{
        id: string;
        primariaA: PotePrimario;
        primariaB: PotePrimario;
        resultado: { hex: string; nome: string };
        falaAcerto: string;
      }>;
    }
  | {
      tipo: "previsaoCores";
      aurora: string;
      rodadas: Array<{
        primariaA: PotePrimario;
        primariaB: PotePrimario;
        opcoes: Array<{ nome: string; hex: string; correta: boolean }>;
        feedbackAcerto: string;
      }>;
    }
  | {
      tipo: "vocabularioCards";
      aurora: string;
      cards: Array<{ termo: string; definicao: string; emoji: string; cor: string; fotoUrl?: string }>;
    }
  | {
      tipo: "leituraTintas";
      aurora: string;
      paragrafos: string[];
      pigmentos: Array<{ nome: string; hex: string; fonte: string; emoji: string; fotoUrl?: string }>;
    }
  | {
      tipo: "quizCores";
      aurora: string;
      perguntas: Array<{
        pergunta: string;
        fotoUrl?: string;
        alternativas: Array<{ texto: string; correta: boolean }>;
        feedbackAcerto: string;
        feedbackErro: string;
      }>;
    }
  | {
      tipo: "pintarAnimais";
      aurora: string;
      animais: Array<{
        nome: string;
        emoji: string;
        fotoUrl?: string;
        corAlvo: { nome: string; hex: string };
        opcoes: Array<{ nome: string; hex: string }>;
        falaAcerto: string;
      }>;
    }
  | {
      tipo: "sequenciaMistura";
      aurora: string;
      passos: Array<{ id: string; texto: string; emoji: string; ordem: number; fotoUrl?: string }>;
      falaAcerto: string;
    }
  | {
      tipo: "diarioPintor";
      aurora: string;
      titulo: string;
      trechos: Array<{ texto: string; palavraDestaque?: string; corDestaque?: string }>;
    }
  | {
      tipo: "fabricaPocoes";
      aurora: string;
      tempoSeg: number;
      pedidos: Array<{
        corAlvo: { nome: string; hex: string };
        ingredientes: [PotePrimario, PotePrimario];
      }>;
      potes: PotePrimario[];
    }
  | {
      tipo: "rodaCores";
      aurora: string;
      primarias: PotePrimario[];
      secundarias: Array<{
        nome: string;
        hex: string;
        entre: [CorPrimariaId, CorPrimariaId];
      }>;
    }
  | {
      tipo: "avaliacaoFinal";
      aurora: string;
      quiz: {
        pergunta: string;
        alternativas: Array<{ texto: string; correta: boolean }>;
        feedback: string;
      };
      missaoFamilia: string;
      recompensaTitulo: string;
      recompensaItem: string;
    }
  | {
      tipo: "cenaTematica";
      variante: "explorar" | "revisar" | "minijogo" | "criacao";
      aurora: string;
      titulo?: string;
      instrucao?: string;
      itens: Array<{
        emoji?: string;
        rotulo: string;
        descricao?: string;
        cor?: string;
        fotoUrl?: string;
        somUrl?: string;
      }>;
      falaFinal?: string;
      tempoSeg?: number;
    }
  | { tipo: "placeholder"; titulo: string; descricao: string };

export type AulaArteV1 = {
  slug: string;
  titulo: string;
  iconeTrilha: string;
  bncc: string[];
  duracaoMin: number;
  cena01_motivacao: CenaArteV1;
  cena02_previsao: CenaArteV1;
  cena03_vocabulario: CenaArteV1;
  cena04_leituraGuiada: CenaArteV1;
  cena05_compreensao: CenaArteV1;
  cena06_personagensLugar: CenaArteV1;
  cena07_sequencia: CenaArteV1;
  cena08_voceLe: CenaArteV1;
  cena09_minijogo: CenaArteV1;
  cena10_revisao: CenaArteV1;
  cena11_avaliacao: CenaArteV1;
  recompensa: { xp: number; moedas: number; medalha?: string };
};

export type UnidadeArteV1 = {
  slug: string;
  numero: number;
  titulo: string;
  subtitulo: string;
  descricao: string;
  corTema: string;
  aulas: AulaArteV1[];
};

export type CursoArteV1 = {
  slug: string;
  disciplina: string;
  ano: string;
  titulo: string;
  descricao: string;
  corPrimaria: string;
  corSecundaria: string;
  tipoAula: "arte-v1";
  unidades: UnidadeArteV1[];
};


