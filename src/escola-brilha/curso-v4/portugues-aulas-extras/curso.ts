import type { CursoPortugues, UnidadePortugues } from "../types";

/**
 * Módulo de Aulas Extras (Lousa Mágica 360°)
 * Auto-registro por pasta de unidade.
 */
const mods = import.meta.glob<Record<string, UnidadePortugues>>("./unidade-*/index.ts", {
  eager: true,
});

const unidades: UnidadePortugues[] = Object.values(mods)
  .flatMap((m) => Object.values(m))
  .filter((u): u is UnidadePortugues => !!u && typeof (u as UnidadePortugues).numero === "number")
  .sort((a, b) => a.numero - b.numero);

const curso: CursoPortugues = {
  slug: "portugues-aulas-extras",
  disciplina: "Língua Portuguesa",
  ano: "1º ao 9º Ano",
  titulo: "Aulas Extras°",
  descricao:
    "Aulões de Lousa interativos com metodologia ativa para descomplicações rápidas e neurociência adaptada.",
  corPrimaria: "#f59e0b",
  corSecundaria: "#1a1033",
  tipoAula: "portugues",
  unidades,
};

export default curso;
