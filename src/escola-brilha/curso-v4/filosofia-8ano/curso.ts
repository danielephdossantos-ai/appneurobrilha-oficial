import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";

/**
 * Curso: Filosofia 8º Ano — "Investigador da Modernidade"
 * Componente autoral (Filosofia não tem BNCC oficial no Fundamental).
 * Códigos internos: EF08FI01 → EF08FI07.
 * Tema-espinha: a virada moderna — do "eu penso" de Descartes ao existencialismo.
 *
 * Piloto: Unidade 1 (EF08FI01) — Descartes e a Dúvida Metódica.
 */
const curso: CursoGeoV1 = {
  slug: "filosofia-8ano",
  disciplina: "Filosofia",
  ano: "8º Ano",
  titulo: "Investigador da Modernidade",
  descricao:
    "Aurora e Brilha atravessam a Modernidade com o aluno — de Descartes ao existencialismo — para investigar como o pensamento humano se libertou da tradição.",
  corPrimaria: "#38bdf8",
  corSecundaria: "#0f172a",
  tipoAula: "geo-v1",
  unidades: [unidade1],
};

export default curso;
