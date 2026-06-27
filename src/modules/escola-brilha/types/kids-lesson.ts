/**
 * KidsLesson — formato exclusivo para 1º ao 3º Ano.
 *
 * Não usa múltipla escolha. Cada aula é uma sequência de cenas visuais
 * que ENSINAM como fazer (somar, ler vogal, observar materiais, etc.),
 * com voz acompanhando cada cena.
 */

export type KidsMascot = "pip" | "pipa";

export type KidsScene =
  /** Pip/Pipa apresenta o assunto. */
  | { kind: "intro"; mascot: KidsMascot; titulo: string; fala: string }
  /** "O que é?" — mostra o conceito/símbolo grande. */
  | {
      kind: "concept";
      titulo: string;
      simbolo?: string; // ex: "+", "−", "A"
      emoji?: string; // ex: "🍎"
      fala: string;
    }
  /** "Onde se usa?" — 2 a 4 cenas do dia a dia. */
  | {
      kind: "usecase";
      titulo: string;
      cenas: { emoji: string; texto: string }[];
      fala: string;
    }
  /** Mostra A objetos em cima, B objetos em baixo, sinal de + no meio. */
  | {
      kind: "step_count";
      titulo: string;
      a: number;
      b: number;
      objeto: string; // emoji
      fala: string;
    }
  /** Junta tudo e conta um a um. */
  | {
      kind: "step_join";
      titulo: string;
      a: number;
      b: number;
      objeto: string;
      fala: string;
    }
  /** Escreve a conta na vertical com animação. */
  | {
      kind: "step_vertical_sum";
      titulo: string;
      a: number;
      b: number;
      fala: string;
    }
  /** "Vamos praticar" — criança toca os itens, app conta junto. Sem errar. */
  | {
      kind: "practice_count";
      titulo: string;
      a: number;
      b: number;
      objeto: string;
      fala: string;
    }
  /** Resumo final. */
  | { kind: "summary"; titulo: string; itens: string[]; fala: string }
  /** Comemoração. */
  | { kind: "celebrate"; titulo: string; fala: string };

export interface KidsLesson {
  codigo_bncc: string;
  titulo: string;
  disciplina: string;
  serie: string;
  xp: number;
  cor: "blue" | "green" | "violet" | "amber" | "pink";
  scenes: KidsScene[];
}
