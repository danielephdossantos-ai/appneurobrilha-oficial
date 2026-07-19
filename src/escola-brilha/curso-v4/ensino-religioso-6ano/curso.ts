import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: Ensino Religioso 6º Ano — "Decifrador dos Textos Sagrados"
 * BNCC EF06ER01 → EF06ER07 — foco: TEXTOS SAGRADOS ESCRITOS E ORAIS.
 * Aula NÃO CONFESSIONAL. Todas as tradições retratadas com o MESMO respeito.
 */
const curso: CursoGeoV1 = {
  slug: "ensino-religioso-6ano",
  disciplina: "Ensino Religioso",
  ano: "6º Ano",
  titulo: "Decifrador dos Textos Sagrados",
  descricao:
    "Brilha e Aurora entram no mundo dos textos que guardam a memória das grandes tradições — Torá, Bíblia, Alcorão, Vedas, Sutras, tradições orais indígenas e afro-brasileiras. Sem julgar, só entender.",
  corPrimaria: "#c9a84c",
  corSecundaria: "#1a1035",
  tipoAula: "geo-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
