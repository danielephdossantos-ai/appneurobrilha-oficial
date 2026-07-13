import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: História 4º Ano — "As Crônicas das Grandes Rotas e Migrações"
 * 7 unidades, esqueleto de 11 cenas em cada aula.
 * Skin travada: fotografia real + infográfico PT-BR. Motor PlayerGeoV1.
 */
const curso: CursoGeoV1 = {
  slug: "historia-4ano",
  disciplina: "História",
  ano: "4º Ano",
  titulo: "As Crônicas das Grandes Rotas e Migrações",
  descricao:
    "Brilha e Aurora encontram um novo volume mágico: As Crônicas das Grandes Rotas. Suas páginas narram como os seres humanos se deslocaram pelo planeta e pelo Brasil, criando caminhos, trocas e novas tecnologias. Cada unidade acende um ponto luminoso no mapa-múndi das migrações.",
  corPrimaria: "#b45309",
  corSecundaria: "#0f766e",
  tipoAula: "geo-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
