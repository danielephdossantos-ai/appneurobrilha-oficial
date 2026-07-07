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
  }>;
};


/** "Eu faço" — Brilha resolve pensando em voz alta. */
export type MomentoModelagem = {
  enunciado: string;
  passos: string[];         // cada passo é uma fala do Brilha
  resposta: string;
  visualUrl?: string;
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
  unidades: Unidade[];
};
