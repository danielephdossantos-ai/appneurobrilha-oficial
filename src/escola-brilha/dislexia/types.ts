/**
 * Trilha Dislexia · Orton-Gillingham
 * Programa clínico do Neuro Treino, multissensorial (VAKT), sequencial e cumulativo.
 * Fase 1 = Consciência Fonológica (foco AUDITIVO, antes da letra).
 */

export type CenaDlx =
  | { tipo: "abertura"; fala: string; imagem?: string }
  | {
      tipo: "escuta";
      fala: string;
      palavra: string;
      imagem?: string;
      enfase?: string; // parte destacada da palavra, ex: "SSS"
    }
  | {
      tipo: "escolha";
      fala: string; // instrução narrada
      opcoes: { palavra: string; imagem?: string; correta: boolean }[];
    }
  | {
      tipo: "silabas";
      fala: string;
      palavra: string;
      silabas: string[];
      imagem?: string;
    }
  | { tipo: "reforco"; fala: string; imagem?: string }
  | { tipo: "fim"; fala: string; imagem?: string };

export interface AulaDlx {
  slug: string;
  numero: number;
  fase: number;
  titulo: string;
  objetivo: string;
  fone?: string;
  cenas: CenaDlx[];
}

export interface TrilhaDlx {
  slug: "dislexia";
  titulo: string;
  descricao: string;
  aulas: AulaDlx[];
}
