/**
 * Arte · 1º Ano — Estúdio Brilha
 * Engine independente. Cada aula segue o esqueleto SPEB 1.0 (13 etapas).
 * Campos opcionais permitem retrocompatibilidade com aulas antigas.
 */

export type EixoArte = "visuais" | "musica" | "danca" | "teatro" | "integradas";

export interface HistoriaCena {
  imagem?: string;
  emoji?: string;
  fundo?: string;
  texto: string;
}

export interface AtividadeArtistica {
  titulo: string;
  passos: string[];
  materiais?: string[];
}

export interface FerramentaDesenho {
  brief: string;
  cores?: string[];
  imagemBase?: string;
}

export interface MomentoMusica {
  titulo: string;
  padrao: Array<"palma" | "pé" | "boca" | "silencio">;
  bpm?: number;
}

export interface MomentoTeatro {
  titulo: string;
  emocao: string;
  emoji: string;
  fala: string;
}

export interface MomentoMovimento {
  titulo: string;
  poses: Array<{ nome: string; emoji: string; segundos: number }>;
}

export interface JogoArte {
  tipo: "combinarCores" | "sequenciaRitmo" | "encontrarForma";
  titulo: string;
  dados: any;
}

export interface Registro {
  pergunta: string;
  tipo: "foto" | "audio";
}

export interface Conquista {
  medalha: string;
  nome: string;
  descricao: string;
}

/* ---------- Novos blocos SPEB 1.0 (opcionais) ---------- */

export interface DescobertaCor {
  titulo: string;
  intro?: string;
  itens: Array<{ nome: string; emoji: string; cor: string; corNome: string }>;
  fecho?: string;
}

export interface ExploracaoRodada {
  instrucao: string;                                // "Toque apenas nos objetos vermelhos"
  corAlvo: string;                                  // "#E63946"
  corAlvoNome: string;                              // "vermelho"
  objetos: Array<{ emoji: string; cor: string; correto: boolean }>;
}

export interface Exploracao {
  titulo: string;
  rodadas: ExploracaoRodada[];
}

export interface MisturaPasso {
  corA: string; corAEmoji: string;
  corB: string; corBEmoji: string;
  resultado: string; resultadoNome: string; resultadoEmoji: string;
}

export interface Mistura {
  titulo: string;
  passos: MisturaPasso[];
}

export interface MiniJogoArrastar {
  titulo: string;
  instrucao: string;
  pares: Array<{ objetoEmoji: string; objetoNome: string; cor: string; corNome: string }>;
}

export interface MissaoCasa {
  titulo: string;
  instrucao: string;                                 // "Encontre três objetos vermelhos"
  emoji?: string;
}

export interface Curiosidade {
  titulo: string;
  fatos: string[];
}

export interface QuizPergunta {
  pergunta: string;
  opcoes: Array<{ label: string; emoji?: string; cor?: string; correto: boolean }>;
  explicacao?: string;
}

export interface Quiz {
  titulo: string;
  perguntas: QuizPergunta[];
}

export interface DesafioFinal {
  titulo: string;
  narrativa: string;                                 // "A caixa mágica ficou colorida!"
  medalha: string;
  nomeMedalha: string;
  xp: number;
}

/* ---------- Modo Professor (rodapé, invisível para criança) ---------- */

export interface ModoProfessor {
  bncc: Array<{ codigo: string; descricao: string }>;
  objetivos: string[];
  materiaisDigitais: string[];
  materiaisFisicos?: string[];
  adaptacoesTEA: string[];
  adaptacoesTDAH: string[];
  criteriosAvaliacao: Array<{ criterio: string; observavel: string; consolidado: string }>;
  orientacoesPais: string[];
  duracaoMin?: [number, number];
}

/* ---------- Aula ---------- */

export interface AulaArte {
  slug: string;
  numero: number;
  eixoPrincipal: EixoArte;
  titulo: string;
  subtitulo: string;

  // Etapas SPEB 1.0
  historia: HistoriaCena[];               // 1
  descoberta?: DescobertaCor;             // 2 (novo)
  exploracao?: Exploracao;                // 3 (novo)
  ferramenta: FerramentaDesenho;          // 4
  mistura?: Mistura;                      // 5 (novo)
  miniJogo?: MiniJogoArrastar;            // 6 (novo)
  musica: MomentoMusica;                  // 7
  missaoCasa?: MissaoCasa;                // 8 (novo)
  atividade: AtividadeArtistica;          // 9
  curiosidade?: Curiosidade;              // 10 (novo)
  quiz?: Quiz;                            // 11 (novo)
  desafioFinal?: DesafioFinal;            // 12 (novo)
  relatorio: string[];                    // 13

  // Blocos herdados (retrocompatibilidade com aulas 2-4)
  video?: { titulo: string; descricao: string; poster?: string };
  teatro?: MomentoTeatro;
  movimento?: MomentoMovimento;
  jogo?: JogoArte;
  registro?: Registro;
  conquista?: Conquista;

  // Rodapé pedagógico (invisível para criança)
  modoProfessor?: ModoProfessor;
}

export interface UnidadeArte {
  slug: string;
  numero: number;
  titulo: string;
  subtitulo: string;
  tema: string;
  projeto: string;
  corPrincipal: string;
  emoji: string;
  aulas: AulaArte[];
}
