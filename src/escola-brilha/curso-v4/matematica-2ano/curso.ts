import type { Curso } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";

/**
 * Curso: Matemática 2º Ano — "A Vila dos Números"
 * ------------------------------------------------
 * Piloto oficial do Contrato Escola Brilha v4.1.
 * Aulas são adicionadas conforme validadas — a trilha só mostra o que
 * estiver aqui dentro de `unidades`.
 */
const curso: Curso = {
  slug: "matematica-2ano",
  disciplina: "Matemática",
  ano: "2º Ano",
  titulo: "A Vila dos Números",
  descricao:
    "Brilha chega numa vila mágica onde tudo é contado, agrupado e trocado. Cada aula é um novo lugar da vila — feira, oficina, cofre, padaria — e a criança aprende a pensar como um verdadeiro matemático da vila.",
  corPrimaria: "#f59e0b",  // amarelo/laranja da vila
  corSecundaria: "#0d1f55",
  unidades: [unidade1, unidade2, unidade3, unidade4],
};

export default curso;
