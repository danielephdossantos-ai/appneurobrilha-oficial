import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: Geografia 4º Ano — "Explorador Nacional"
 *
 * 7 unidades completas:
 *  U1 — Mapa do Brasil e Regiões (4 aulas)
 *  U2 — População e Migrações
 *  U3 — Relevo e Rios
 *  U4 — Clima e Biomas
 *  U5 — Trabalho e Economia
 *  U6 — Preservação e Sustentabilidade
 *  U7 — Passaporte Brasil (consolidação)
 */
const curso: CursoGeoV1 = {
  slug: "geografia-4ano",
  disciplina: "Geografia",
  ano: "4º Ano",
  titulo: "Explorador Nacional do Brasil",
  descricao:
    "Brilha vira Explorador Nacional com Aurora. Descobre o Brasil inteiro camada por camada — regiões, população, relevo, clima, economia e a proteção do nosso território.",
  corPrimaria: "#0ea5e9",
  corSecundaria: "#0f172a",
  tipoAula: "geo-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
