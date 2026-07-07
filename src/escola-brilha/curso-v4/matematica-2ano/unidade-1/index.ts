import type { Unidade } from "../../types";
import { aula01_feiraDasFrutas } from "./aula-01-feira-das-frutas";
import { aula02_somasAte10 } from "./aula-02-somas-ate-10";
import { aula03_subtracoesAte10 } from "./aula-03-subtracoes-ate-10";
import { aula04_compararQuantidades } from "./aula-04-comparar-quantidades";
import { aula05_agruparDe10 } from "./aula-05-agrupar-de-10";

/**
 * Unidade 1 — "A Feira dos Números"
 * ----------------------------------
 * Progressão: contar → somar → subtrair → comparar → agrupar.
 * Aulas são adicionadas uma a uma conforme forem validadas.
 */
export const unidade1: Unidade = {
  slug: "unidade-1-feira-dos-numeros",
  numero: 1,
  titulo: "A Feira dos Números",
  subtitulo: "Contar, comparar, agrupar",
  descricao:
    "Brilha visita a Feira da Vila e descobre que existe muito mais em um número do que parece.",
  corTema: "#f59e0b",
  aulas: [
    aula01_feiraDasFrutas,
    aula02_somasAte10,
    aula03_subtracoesAte10,
    aula04_compararQuantidades,
  ],
};

