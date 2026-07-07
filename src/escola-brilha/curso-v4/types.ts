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

export type MinijogoPT =
  | { tipo: "arrastarParaAlvo"; titulo: string; bloco: ArrastarParaAlvoData }
  | { tipo: "selecionarItens"; titulo: string; bloco: SelecionarItensData }
  | { tipo: "montarPalavra"; titulo: string; bloco: MontarPalavraData }
  | { tipo: "ordenarSequencia"; titulo: string; bloco: OrdenarSequenciaData };

/** Bloco opcional de minijogo pedagógico dentro da aula. */
export type MomentoMinijogo = {
  titulo: string;
  instrucao: string;
  jogo: MinijogoPT;
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
// GEOGRAFIA — contrato paralelo. Paradigma "GeoScanner": criança
// investiga FOTOGRAFIAS reais, marca pistas, forma hipóteses e só
// depois recebe a explicação. Zero questionário, tudo visual.
// =====================================================================

/** Uma "pista" que o GeoScanner destaca sobre uma foto. */
export type PistaGeo = {
  /** Emoji do HUD do scanner. */
  icone: string;
  /** Rótulo curto (ex.: "sobre estacas"). */
  rotulo: string;
  /** Posição relativa na foto (0..100). Onde o pin aparece. */
  x: number;
  y: number;
  /** Explicação didática que aparece ao tocar o pin (2-4 linhas, linguagem de 7 anos). */
  explicacao?: string;
  /** Curiosidade "sabia?" opcional, ainda mais leve, pra fisgar. */
  curiosidade?: string;
};


/** Bloco: galeria com N fotos de lugares. Toque abre o investigador. */
export type GaleriaLugaresData = {
  instrucao: string;
  lugares: Array<{
    id: string;              // "ribeirinha"
    nome: string;            // "Casa Ribeirinha"
    emoji: string;           // 🌊
    imagemUrl?: string;      // foto real; sem foto → placeholder ilustrado
    corPlaceholder?: string; // gradiente pro placeholder
  }>;
};

/** Bloco: uma foto ocupando a tela + pistas destacadas pelo scanner. */
export type ModoInvestigadorData = {
  lugarId: string;             // "ribeirinha"
  nomeLugar: string;
  emoji: string;
  imagemUrl?: string;
  corPlaceholder?: string;
  pistas: PistaGeo[];
  /** Frase de encerramento do Brilha quando todas as pistas foram vistas. */
  fechamento: string;
};

/** Pergunta de HIPÓTESE — a criança escolhe ANTES de saber a resposta. */
export type HipoteseData = {
  imagemUrl?: string;
  corPlaceholder?: string;
  pergunta: string;
  hipoteses: string[];
  correta: number;
  explicacao: string;         // só aparece depois da escolha
};

/** Comparar duas fotos lado a lado. */
export type CompararLugaresData = {
  pergunta: string;
  a: { nome: string; emoji: string; imagemUrl?: string; corPlaceholder?: string };
  b: { nome: string; emoji: string; imagemUrl?: string; corPlaceholder?: string };
  correta: "a" | "b";
  explicacao: string;
};

/** Painel final: tabela clima × construção × motivo. */
export type PainelComparativoData = {
  colunas: string[];         // ["Lugar","Clima","Construção","Motivo"]
  linhas: Array<{ celulas: string[]; emoji: string }>;
  sintese: string;
};

/** Investigação livre: foto + checkboxes de pistas visíveis. */
export type InvestigacaoLivreData = {
  imagemUrl?: string;
  corPlaceholder?: string;
  instrucao: string;
  pistas: Array<{ id: string; icone: string; rotulo: string; existe: boolean }>;
  conclusao: string;
};

/** Laboratório: sliders/toggles que mudam a moradia mostrada. */
export type LaboratorioExploradorData = {
  instrucao: string;
  variaveis: Array<{
    id: string;
    rotulo: string;
    opcoes: Array<{ valor: string; icone: string; rotulo: string }>;
  }>;
  /** Mapa "chave combinada" → texto do que muda na moradia. */
  resultados: Array<{
    quando: Record<string, string>;   // ex: { clima: "chuva", terreno: "rio" }
    imagemUrl?: string;
    corPlaceholder?: string;
    descricao: string;
  }>;
  padraoTexto: string;                // fallback quando nenhuma regra bate
};

/** Minijogo: cenário sorteado + escolha de materiais/formato. */
export type ArquitetoLugarCertoData = {
  instrucao: string;
  cenarios: Array<{
    id: string;
    contexto: string;                 // "Rio + muita chuva + pescadores"
    icones: string[];                 // ["🌊","🌧","🎣"]
    escolhas: Array<{
      pergunta: string;
      opcoes: Array<{ rotulo: string; icone: string; correta: boolean; feedback: string }>;
    }>;
    parabens: string;
  }>;
};

/** Missão em família — visual de "diário do GeoExplorador". */
export type MissaoFamiliaGeo = {
  titulo: string;
  passos: string[];
  registro: string;
};

export type AulaGeografiaV4 = {
  slug: string;
  titulo: string;
  iconeTrilha: string;
  bncc: string[];
  duracaoMin: number;

  momento01_motivacao: {
    titulo: string;
    historia: string;
    personagem?: string;              // "Aurora"
    imagemUrl?: string;
  };
  momento02_galeria: { bloco: GaleriaLugaresData };
  momento03_investigador: { blocos: ModoInvestigadorData[] };
  momento04_hipoteses: { perguntas: HipoteseData[] };
  momento05_comparar: { comparacoes: CompararLugaresData[] };
  momento06_painel: { bloco: PainelComparativoData };
  momento07_investigacaoLivre: { bloco: InvestigacaoLivreData };
  momento08_laboratorio?: { bloco: LaboratorioExploradorData };
  momento09_arquiteto?: { bloco: ArquitetoLugarCertoData };
  momento10_missaoFamilia: MissaoFamiliaGeo;

  recompensa: {
    xp: number;
    moedas: number;
    medalha?: string;
  };
};

export type UnidadeGeografia = {
  slug: string;
  numero: number;
  titulo: string;
  subtitulo: string;
  descricao: string;
  corTema: string;
  aulas: AulaGeografiaV4[];
};

export type CursoGeografia = {
  slug: string;
  disciplina: string;
  ano: string;
  titulo: string;
  descricao: string;
  mascoteImagemUrl?: string;
  corPrimaria: string;
  corSecundaria: string;
  tipoAula: "geografia";
  unidades: UnidadeGeografia[];
};

/** Union usado pelo registry e pela trilha. */
export type CursoAny = Curso | CursoPortugues | CursoGeografia;


