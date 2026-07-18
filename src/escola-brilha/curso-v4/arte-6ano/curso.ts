import type { CursoArteV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";

/**
 * Arte · 6º Ano — "🧩 O Códice dos Impérios Perdidos"
 *
 * Categoria Teen (Ensino Fundamental II). Alunos como Investigadores do
 * Tempo e Arqueólogos Visuais: decifram como impérios e civilizações
 * registraram sua memória visual — da Pré-História à modernidade.
 * Reutiliza o player arte-v1 (mesmo do 2º ao 5º Ano).
 */
const curso: CursoArteV1 = {
  slug: "arte-6ano",
  disciplina: "Arte",
  ano: "6º Ano",
  titulo: "O Códice dos Impérios Perdidos",
  descricao:
    "Portal Teen da Arte: Brilha e Aurora abrem o Códice dos Impérios Perdidos. Você vira arqueólogo visual — decifra pistas, fontes e códigos que civilizações inteiras deixaram gravados.",
  corPrimaria: "#7c2d12",
  corSecundaria: "#f59e0b",
  tipoAula: "arte-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6],
};

export default curso;
