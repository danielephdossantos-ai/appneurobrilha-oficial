import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-conhecendo-meu-municipio";

/**
 * Geografia 2º Ano — Unidade 2
 * "Conhecendo Meu Município"
 *
 * Primeira aula fecha o conceito de MUNICÍPIO
 * (zona urbana + zona rural formando UM lugar só).
 * Próximas aulas cobrirão EF02GE06, EF02GE07 e EF02GE08.
 */
export const unidade2: UnidadePortugues = {
  slug: "unidade-2",
  numero: 2,
  titulo: "Conhecendo Meu Município",
  subtitulo: "Cidade e campo formam um só lugar",
  descricao:
    "Brilha e Aurora abrem o mapa do município e descobrem que o lugar onde vivemos tem duas partes — a zona urbana (cidade) e a zona rural (campo) — que se ajudam e formam UM município só.",
  corTema: "#0EA5E9",
  aulas: [aula01],
};
