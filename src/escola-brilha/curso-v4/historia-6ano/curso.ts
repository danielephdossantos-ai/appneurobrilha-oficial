import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: História 6º Ano — "O Códice dos Impérios Perdidos"
 *
 * Categoria TEEN — entrada no Ensino Fundamental II.
 * Motor: PlayerGeoV1 em modo `estilo: "teen"` — HUD acadêmico, fotografia
 * real, infográficos PT-BR, sem mascote infantil.
 *
 * Sete Fragmentos do Códice:
 *  1. Selo do Cronista Crítico (Ciência da História)
 *  2. Fragmento do Crânio Ancestral (Evolução Humana / Povoamento das Américas)
 *  3. Selo do Escriba Real (Neolítico, Mesopotâmia e Egito)
 *  4. Escudo do Hoplita (Grécia Antiga)
 *  5. Águia Imperial (Roma Antiga)
 *  6. Painel das Rainhas Candaces (Reinos Africanos: Kush e Axum)
 *  7. Códice Decifrado (Maias, Astecas e Incas)
 */
const curso: CursoGeoV1 = {
  slug: "historia-6ano",
  disciplina: "História",
  ano: "6º Ano",
  titulo: "O Códice dos Impérios Perdidos",
  descricao:
    "Brilha e Aurora encontram um artefato complexo: O Códice dos Impérios. Pra decifrá-lo, os estudantes viram arqueólogos e historiadores críticos — analisando fontes, primeiras sociedades e as estruturas de poder que moldaram o mundo antigo.",
  corPrimaria: "#0f766e",
  corSecundaria: "#0f172a",
  tipoAula: "geo-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
