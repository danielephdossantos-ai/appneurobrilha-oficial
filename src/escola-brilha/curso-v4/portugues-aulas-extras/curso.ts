import type { CursoPortugues, UnidadePortugues } from "../types";

/**
 * Módulo de Aulas Extras (Língua Portuguesa)
 * Arquitetura de Aulões Interativos para o Fundamental I e II.
 */

// Placeholder para unidades e aulas que serão populadas
export const unidade1: UnidadePortugues = {
  slug: "unidade-1-fase-1-ludica",
  numero: 1,
  titulo: "Fase 1: Linguagem Lúdica e Concreta (1º-3º Ano)",
  subtitulo: "Aventuras no Reino das Letras",
  descricao: "Aprenda regras de escrita através de histórias e metáforas.",
  corTema: "#ef4444", // Vermelho Neon (Fase 1)
  aulas: []
};

export const unidade2: UnidadePortugues = {
  slug: "unidade-2-fase-2-detetive",
  numero: 2,
  titulo: "Fase 2: Linguagem Detetive (4º-5º Ano)",
  subtitulo: "Resolução de Enigmas Linguísticos",
  descricao: "Investigue padrões, lógica e organização da escrita.",
  corTema: "#eab308", // Amarelo Neon (Fase 2)
  aulas: []
};

export const unidade3: UnidadePortugues = {
  slug: "unidade-3-fase-3-analitica",
  numero: 3,
  titulo: "Fase 3: Linguagem Analítica (6º-9º Ano)",
  subtitulo: "Alta Performance e Retórica",
  descricao: "Domine a argumentação e a estrutura sintática complexa.",
  corTema: "#3b82f6", // Azul Neon (Fase 3)
  aulas: []
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
