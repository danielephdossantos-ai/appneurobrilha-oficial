/**
 * ActivityEngine
 * --------------
 * Catálogo de tipos de atividade suportados + carregamento a partir do banco.
 * NUNCA cria atividades automaticamente. Tudo vem de `lesson_activities`
 * (ou `lesson_content.atividade_*`) via LessonService.
 */

import { LessonService, type AtividadeItem } from "./LessonService";

export type ActivityKind =
  | "multipla_escolha"
  | "verdadeiro_falso"
  | "ligar_colunas"
  | "arrastar_soltar"
  | "sequencia_logica"
  | "preencher_lacunas"
  | "completar_palavras"
  | "interpretacao"
  | "producao_escrita"
  | "calculo"
  | "desenho"
  | "experimento"
  | "leitura";

export const ACTIVITY_KINDS: { tipo: ActivityKind; titulo: string }[] = [
  { tipo: "multipla_escolha",    titulo: "Múltipla escolha" },
  { tipo: "verdadeiro_falso",    titulo: "Verdadeiro ou falso" },
  { tipo: "ligar_colunas",       titulo: "Ligar colunas" },
  { tipo: "arrastar_soltar",     titulo: "Arrastar e soltar" },
  { tipo: "sequencia_logica",    titulo: "Sequência lógica" },
  { tipo: "preencher_lacunas",   titulo: "Preencher lacunas" },
  { tipo: "completar_palavras",  titulo: "Completar palavras" },
  { tipo: "interpretacao",       titulo: "Interpretação" },
  { tipo: "producao_escrita",    titulo: "Produção escrita" },
  { tipo: "calculo",             titulo: "Cálculo" },
  { tipo: "desenho",             titulo: "Desenho" },
  { tipo: "experimento",         titulo: "Experimento" },
  { tipo: "leitura",             titulo: "Leitura" },
];

export interface Activity {
  tipo: ActivityKind;
  titulo: string;
  enunciado: string;
  itens?: AtividadeItem[];
  payload?: Record<string, unknown>;
}

export function isSupportedActivityKind(tipo: string): tipo is ActivityKind {
  return ACTIVITY_KINDS.some((k) => k.tipo === tipo);
}

export const ActivityEngine = {
  kinds: ACTIVITY_KINDS,
  isSupported: isSupportedActivityKind,

  /** Carrega as atividades cadastradas para a aula. Nunca gera nada. */
  async load(codigoBncc: string): Promise<AtividadeItem[]> {
    return LessonService.getAtividades(codigoBncc);
  },
};
