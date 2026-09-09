import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: História 9º Ano — "A Teia do Tempo Presente"
 *
 * Categoria TEEN — ápice do Ensino Fundamental 2.
 * Motor: PlayerGeoV1 em modo `estilo: "teen"` — HUD acadêmico, fotografia
 * histórica PT-BR, infográficos reais, tom investigativo.
 *
 * Sete nós da Teia do Tempo Presente:
 *  1. Trincheiras e Revolução (1ª Guerra + Revolução Russa)
 *  2. Crise e Totalitarismos (1929, fascismo, nazismo, New Deal)
 *  3. 2ª Guerra e Holocausto
 *  4. Era Vargas
 *  5. Guerra Fria
 *  6. Ditadura Militar Brasileira
 *  7. Globalização e Mundo de Hoje
 */
const curso: CursoGeoV1 = {
  slug: "historia-9ano",
  disciplina: "História",
  ano: "9º Ano",
  titulo: "A Teia do Tempo Presente",
  descricao:
    "Do tiro em Sarajevo (1914) ao ChatGPT (2022). Sete nós que tecem o mundo em que você vive: guerras mundiais, revolução russa, totalitarismos, Era Vargas, Guerra Fria, ditadura brasileira e globalização digital.",
  corPrimaria: "#0891b2",
  corSecundaria: "#0f172a",
  tipoAula: "geo-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
