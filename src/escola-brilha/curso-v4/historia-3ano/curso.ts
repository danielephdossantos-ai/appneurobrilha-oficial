import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";

/**
 * Curso: História 3º Ano — "O Grande Livro das Cidades"
 *
 * Skin narrativa: Brilha e Aurora precisam restaurar as páginas em branco
 * do Grande Livro das Cidades. Cada unidade completa = uma página ilustrada.
 * Visual TRAVADO: fotografia real + infográfico cartográfico, sem cartoon.
 * Motor: PlayerGeoV1 (mesmo esqueleto 11 cenas do 2º ano).
 */
const curso: CursoGeoV1 = {
  slug: "historia-3ano",
  disciplina: "História",
  ano: "3º Ano",
  titulo: "O Grande Livro das Cidades",
  descricao:
    "Brilha e Aurora abrem O Grande Livro das Cidades e descobrem que as páginas estão em branco. Cada aula concluída restaura uma página sobre o município, o campo, a cidade, as profissões e as origens da comunidade.",
  corPrimaria: "#0f766e",
  corSecundaria: "#7c2d12",
  tipoAula: "geo-v1",
  unidades: [unidade1],
};

export default curso;
