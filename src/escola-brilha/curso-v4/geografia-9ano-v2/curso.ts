import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: Geografia 9º Ano — "Explorador do Planeta"
 * Padrão idêntico ao 6º/7º/8º Ano v2 (PlayerGeoV1 + estilo teen).
 * 7 unidades cobrindo BNCC EF09GE01–EF09GE18.
 */
const curso: CursoGeoV1 = {
  slug: "geografia-9ano-v2",
  disciplina: "Geografia",
  ano: "9º Ano",
  titulo: "Explorador do Planeta",
  descricao:
    "Globalização, potências, conflitos e futuro. 7 unidades no formato Explorador Planetário: 11 cenas visuais, imagens reais, quiz e minijogo por aula.",
  corPrimaria: "#0ea5e9",
  corSecundaria: "#0f172a",
  tipoAula: "geo-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
