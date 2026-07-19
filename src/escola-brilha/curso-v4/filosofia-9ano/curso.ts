import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: Filosofia 9º Ano — "Investigador do Contemporâneo"
 * Componente autoral. Códigos internos: EF09FI01 → EF09FI07.
 * ÁPICE do Fund. 2: da Escola de Frankfurt ao pensamento decolonial brasileiro.
 *
 * Curso completo: 7 unidades (Frankfurt → Fenomenologia → Foucault/Derrida →
 * Wittgenstein → Bioética → Arendt → Freire/Krenak).
 */
const curso: CursoGeoV1 = {
  slug: "filosofia-9ano",
  disciplina: "Filosofia",
  ano: "9º Ano",
  titulo: "Investigador do Contemporâneo",
  descricao:
    "Aurora e Brilha atravessam o século XX e o XXI — de Frankfurt a Foucault, de Arendt a Paulo Freire — para investigar o pensamento crítico que molda o presente.",
  corPrimaria: "#dc2626",
  corSecundaria: "#0f172a",
  tipoAula: "geo-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
