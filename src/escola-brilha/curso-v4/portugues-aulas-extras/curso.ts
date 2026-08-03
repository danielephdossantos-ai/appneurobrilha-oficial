import type { CursoPortugues, UnidadePortugues } from "../types";
import { unidade1 as unidade1Fase1 } from "./unidade-1";
import { unidade2 as unidade2Fase2 } from "./unidade-2";
import { unidade3 as unidade3Fase3 } from "./unidade-3";

/**
 * Módulo de Aulas Extras (Língua Portuguesa)
 * Arquitetura de Aulões Interativos para o Fundamental I e II.
 */

export const unidade1: UnidadePortugues = {
  slug: "unidade-1-fase-1-ludica",
  numero: 1,
  titulo: "Fase 1: Linguagem Lúdica e Concreta (1º-3º Ano)",
  subtitulo: "Aventuras no Reino das Letras",
  descricao: "Aprenda regras de escrita através de histórias e metáforas.",
  corTema: "#ef4444", // Vermelho Neon (Fase 1)
  aulas: unidade1Fase1.aulas,
};

export const unidade2: UnidadePortugues = {
  ...unidade2Fase2
};

export const unidade3: UnidadePortugues = {
  ...unidade3Fase3
};

const curso: CursoPortugues = {
  slug: "portugues-aulas-extras",
  disciplina: "Língua Portuguesa",
  ano: "1º ao 9º Ano",
  titulo: "Aulas Extras°",
  descricao: "Aulões de Lousa interativos com metodologia ativa para descomplicações rápidas e neurociência adaptada.",
  corPrimaria: "#f59e0b",
  corSecundaria: "#1a1033",
  tipoAula: "portugues",
  unidades: [unidade1, unidade2, unidade3],
};

export default curso;
