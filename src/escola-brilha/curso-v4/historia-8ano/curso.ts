import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: História 8º Ano — "As Engrenagens da Liberdade"
 *
 * Categoria TEEN — continuação natural do 7º Ano.
 * Motor: PlayerGeoV1 em modo `estilo: "teen"` — HUD acadêmico, fotografia
 * histórica, infográficos PT-BR, sem mascote infantil.
 *
 * Sete Engrenagens da Liberdade:
 *  1. A Chama da Razão (Iluminismo)
 *  2. A Engrenagem do Trabalho (Revolução Industrial)
 *  3. O Estandarte Tricolor (Revolução Francesa)
 *  4. A Coroa em Fuga (Napoleão + vinda da Corte)
 *  5. O Grito das Américas (Haiti + independências hispano-americanas)
 *  6. A Coroa Tropical (Independência do Brasil e Império)
 *  7. O Cetro Global (Imperialismo e partilha do mundo)
 */
const curso: CursoGeoV1 = {
  slug: "historia-8ano",
  disciplina: "História",
  ano: "8º Ano",
  titulo: "As Engrenagens da Liberdade",
  descricao:
    "Do Iluminismo ao Imperialismo. Brilha e Aurora conduzem o estudante pelas ideias e revoluções que forjaram o mundo contemporâneo — razão iluminista, máquinas industriais, guilhotina francesa, Napoleão, Bolívar, Ipiranga e a partilha da África.",
  corPrimaria: "#0f766e",
  corSecundaria: "#0f172a",
  tipoAula: "geo-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
