import type { CursoArteV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Arte · 2º Ano — "🎨 O Pincel Mágico de Aurora"
 *
 * Player 100% custom (arte-v1). Cada cena tem mecânica exclusiva do
 * universo do ateliê: mistura de tintas, frotagem, teatro de sombras,
 * land art etc.
 */
const curso: CursoArteV1 = {
  slug: "arte-2ano",
  disciplina: "Arte",
  ano: "2º Ano",
  titulo: "O Pincel Mágico de Aurora",
  descricao:
    "Brilha descobriu um pincel gigante que espalha cores no ar. Junto com Aurora, vamos misturar tintas, sentir texturas, criar sombras, ouvir sons do corpo e transformar a natureza em obra-prima.",
  corPrimaria: "#f43f5e",
  corSecundaria: "#facc15",
  tipoAula: "arte-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
