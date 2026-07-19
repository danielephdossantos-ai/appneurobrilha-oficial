import type { CursoArteV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Arte · 1º Ano — "🎨 O Baú de Cores da Aurora"
 *
 * Categoria Kids-Iniciante (6 anos). Player arte-v1 (mesmo do 2º Ano),
 * calibrado pra criança de 6 anos: falas curtinhas da Aurora, poucas
 * perguntas por bloco, foco em imagem. Assets reutilizados de arte-2ano
 * (mesmas temáticas de cores, formas, texturas, sons, sombras, arte
 * popular e land art).
 */
const curso: CursoArteV1 = {
  slug: "arte-1ano",
  disciplina: "Arte",
  ano: "1º Ano",
  titulo: "O Baú de Cores da Aurora",
  descricao:
    "Aurora abriu um baú mágico. Junto com Brilha, descubra cores, linhas, formas, texturas, sons, sombras, a arte do Brasil e faça sua primeira galeria da natureza!",
  corPrimaria: "#f97316",
  corSecundaria: "#facc15",
  tipoAula: "arte-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
