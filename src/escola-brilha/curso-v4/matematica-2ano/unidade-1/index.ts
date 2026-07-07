import type { Unidade } from "../../types";
import { aula01_feiraDasFrutas } from "./aula-01-feira-das-frutas";

/**
 * Unidade 1 — "A Feira dos Números"
 * ----------------------------------
 * Progressão: contar → comparar → agrupar → posicionar → operar.
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
    // aula02_quemTemMais,
    // aula03_amarradinhosDe10,
    // aula04_cofreDaVila,
    // aula05_padariaPaoQuente,
  ],
};
