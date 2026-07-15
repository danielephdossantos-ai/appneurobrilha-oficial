import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";

/**
 * Curso: Arte 1º Ano — "Estúdio Brilha das Cores"
 * Padrão único do app (PlayerGeoV1 / 11 cenas).
 * cena01 é `votoExplorador` (sem lupa/cartógrafo — pedido do usuário).
 */
const curso: CursoGeoV1 = {
  slug: "arte-1ano",
  disciplina: "Arte",
  ano: "1º Ano",
  titulo: "Estúdio Brilha — Cores",
  descricao:
    "Brilha e a turma descobrem cores primárias, misturas, quentes/frias e pintam o primeiro arco-íris.",
  corPrimaria: "#a855f7",
  corSecundaria: "#1a0b2e",
  tipoAula: "geo-v1",
  unidades: [unidade1],
};

export default curso;
