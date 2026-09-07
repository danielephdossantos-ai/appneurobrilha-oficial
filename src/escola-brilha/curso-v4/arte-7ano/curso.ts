import type { CursoArteV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";
import { unidade8 } from "./unidade-8";
import { unidade9 } from "./unidade-9";
import { unidade10 } from "./unidade-10";
import { unidade11 } from "./unidade-11";
import { unidade12 } from "./unidade-12";
import { unidade13 } from "./unidade-13";

/**
 * Arte · 7º Ano — "🚀 Crônicas das Cidades Suspensas"
 *
 * Categoria Teen. Aluno assume papel de Urbanista Visual e Arquiteto Social:
 * perspectiva, muralismo, arquitetura orgânica, patrimônio histórico,
 * design industrial, cenografia urbana e sinalização inteligente.
 */
const curso: CursoArteV1 = {
  slug: "arte-7ano",
  disciplina: "Arte",
  ano: "7º Ano",
  titulo: "Crônicas das Cidades Suspensas",
  descricao:
    "Depois de decifrar o passado no 6º Ano, agora você projeta o futuro. Brilha e Aurora abrem as Crônicas das Cidades Suspensas: você vira urbanista visual — perspectiva, muralismo, arquitetura orgânica, patrimônio, design industrial, cenografia e sinalização inteligente.",
  corPrimaria: "#0891b2",
  corSecundaria: "#0f172a",
  tipoAula: "arte-v1",
  unidades: [
    unidade1,
    unidade2,
    unidade3,
    unidade4,
    unidade5,
    unidade6,
    unidade7,
    unidade8,
    unidade9,
    unidade10,
    unidade11,
    unidade12,
    unidade13,
  ],
};

export default curso;
