import type { CursoArteV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Arte · 5º Ano — "🧩 A Matriz da Percepção Visual"
 *
 * Categoria Pre-Teen: alunos como Arquitetos da Realidade e Exploradores
 * de Sistemas. Foco: como arte altera a percepção do cérebro através de
 * sistemas matemáticos complexos — anamorfose, geometria projetiva,
 * ilusões espaciais extremas, engenharia visual aplicada.
 * Reutiliza o player arte-v1 (mesmo do 2º, 3º e 4º Ano).
 */
const curso: CursoArteV1 = {
  slug: "arte-5ano",
  disciplina: "Arte",
  ano: "5º Ano",
  titulo: "A Matriz da Percepção Visual",
  descricao:
    "A jornada final do Fund I: Brilha e Aurora hackeiam o espaço físico usando as técnicas secretas dos grandes mestres. Anamorfose, geometria projetiva e engenharia da ilusão.",
  corPrimaria: "#1e3a8a",
  corSecundaria: "#0ea5e9",
  tipoAula: "arte-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
