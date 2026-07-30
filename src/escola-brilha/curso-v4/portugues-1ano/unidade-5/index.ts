import type { UnidadePortugues } from "../../types";
import { aula01 } from "./aula-01-comeco-meio-fim";
import { aula02 } from "./aula-02-personagens";
import { aula03 } from "./aula-03-cenario-tempo";
import { aula04 } from "./aula-04-recontar";

/**
 * Unidade 5 — Era Uma Vez
 * Histórias com começo, meio e fim: personagens, cenário e reconto.
 */
export const unidade5: UnidadePortugues = {
  slug: "unidade-5-era-uma-vez",
  numero: 6,
  titulo: "Era Uma Vez",
  subtitulo: "Histórias com começo, meio e fim",
  descricao:
    "A criança entra no mundo das narrativas: entende a ordem começo–meio–fim, identifica personagens, descobre onde e quando a história acontece e aprende a recontar com as próprias palavras.",
  corTema: "#a855f7",
  aulas: [aula01, aula02, aula03, aula04],
};
