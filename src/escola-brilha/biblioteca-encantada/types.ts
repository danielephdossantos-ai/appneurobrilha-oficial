/**
 * Biblioteca Encantada — trilha standalone, neuroinclusiva.
 * Não usa Maternal/Pré I/Pré II. Lista aulas em ordem, uma a uma.
 * Cada aula segue um esqueleto TEACCH (início · meio · fim) com
 * 2 palavras-alvo, reforço ABA imediato e troca PECS.
 *
 * Quando o Educação Infantil estiver 100% pronto, este módulo será
 * plugado ao plano de ensino oficial.
 */

export type CenaBE =
  | { tipo: "abertura"; fala: string; imagem: string }
  | { tipo: "olha"; fala: string; imagem: string; palavra: string }
  | { tipo: "pecs"; fala: string; palavra: string; imagem: string; distratores: { palavra: string; imagem: string }[] }
  | { tipo: "reforco"; fala: string; imagem: string }
  | { tipo: "fim"; fala: string; imagem: string };

export interface AulaBE {
  slug: string;
  numero: number;
  titulo: string;                 // rótulo curto exibido pra família
  objetivo: string;               // pedagogico (não é falado)
  palavrasAlvo: string[];         // 2 palavras
  cenas: CenaBE[];
}

export interface TrilhaBE {
  slug: "biblioteca-encantada";
  titulo: string;
  descricao: string;
  aulas: AulaBE[];
}
