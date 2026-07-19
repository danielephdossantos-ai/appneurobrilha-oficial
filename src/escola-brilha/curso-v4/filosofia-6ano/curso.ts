import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";

/**
 * Curso: Filosofia 6º Ano — "Aprendiz do Espanto"
 * Componente autoral (Filosofia não tem BNCC oficial no Fundamental).
 * Códigos internos: EF06FI01 → EF06FI07.
 * Tema-espinha: Admiração e Pergunta — o nascimento da filosofia.
 *
 * PILOTO — apenas Unidade 1 nesta primeira onda para validação cena a cena.
 */
const curso: CursoGeoV1 = {
  slug: "filosofia-6ano",
  disciplina: "Filosofia",
  ano: "6º Ano",
  titulo: "Aprendiz do Espanto",
  descricao:
    "Aurora e Brilha convidam o aluno a redescobrir o ESPANTO — a admiração diante do mundo que fez os primeiros filósofos gregos deixarem de aceitar o mito pronto e começarem a PERGUNTAR.",
  corPrimaria: "#a78bfa",
  corSecundaria: "#0f172a",
  tipoAula: "geo-v1",
  unidades: [unidade1, unidade2],
};

export default curso;
