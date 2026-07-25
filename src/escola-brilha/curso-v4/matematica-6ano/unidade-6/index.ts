import type { Unidade } from "../../types";
import { aula01_razao } from "./aula-01-razao";
import { aula02_proporcao } from "./aula-02-proporcao";
import { aula03_sequencias } from "./aula-03-sequencias";
import { aula04_equacoes } from "./aula-04-equacoes";
import { aula05_missao } from "./aula-05-missao";

export const unidade6: Unidade = {
  slug: "unidade-6-razao-proporcao-algebra",
  numero: 6,
  titulo: "Razão, Proporção e Álgebra Inicial",
  subtitulo: "Regra de três, sequências e as primeiras equações",
  descricao: "Brilha entra no mundo da álgebra: razões, regra de três, padrões e equações do 1º grau.",
  corTema: "#7c3aed",
  aulas: [aula01_razao, aula02_proporcao, aula03_sequencias, aula04_equacoes, aula05_missao],
};
