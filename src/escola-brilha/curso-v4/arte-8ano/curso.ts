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
import { unidade14 } from "./unidade-14";

/**
 * Arte · 8º Ano — "🎭 Eco-Simulacros da Revolução Digital"
 *
 * Categoria Teen/Pre-Vestibular. Aluno assume o papel de Ciber-Designer e
 * Ativista Estético: arte contemporânea, wearables, cultura maker, VR,
 * arte generativa, ativismo ecológico e performance tecnológica.
 */
const curso: CursoArteV1 = {
  slug: "arte-8ano",
  disciplina: "Arte",
  ano: "8º Ano",
  titulo: "Eco-Simulacros da Revolução Digital",
  descricao:
    "Depois de projetar cidades no 7º ano, agora o corpo vira o laboratório. Brilha e Aurora abrem os Eco-Simulacros: você vira ciber-designer e ativista estético — wearable art, cultura maker, performance, VR e ativismo ecológico na fronteira da arte contemporânea.",
  corPrimaria: "#f97316",
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
    unidade14,
  ],
};

export default curso;
