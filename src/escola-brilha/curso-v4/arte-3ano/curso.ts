import type { CursoArteV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";
import { unidade8 } from "./unidade-8";
import { unidade9 } from "./unidade-9";
import { unidade10 } from "./unidade-10";
import { unidade11 } from "./unidade-11";
import { unidade12 } from "./unidade-12";
import { unidade13 } from "./unidade-13";
import { unidade14 } from "./unidade-14";
import { unidade15 } from "./unidade-15";

/**
 * Arte · 3º Ano — "🕵️ Os Exploradores do Tempo e do Espaço"
 *
 * Categoria Kids-Transition: tom investigativo (não mais fantasia pura).
 * Brilha e Aurora guiam expedições pelo "Mapa Arqueológico das Artes".
 * Reutiliza o player arte-v1 do 2º Ano, com conteúdo mais denso e histórico.
 */
const curso: CursoArteV1 = {
  slug: "arte-3ano",
  disciplina: "Arte",
  ano: "3º Ano",
  titulo: "Os Exploradores do Tempo e do Espaço",
  descricao:
    "Uma expedição pela história da arte: cavernas rupestres, civilizações antigas, mestres do Renascimento e artistas brasileiros. Brilha e Aurora desbloqueiam páginas do Atlas Arqueológico das Artes.",
  corPrimaria: "#b45309",
  corSecundaria: "#0f766e",
  tipoAula: "arte-v1",
  unidades: [
    unidade1,
    unidade2,
    unidade3,
    unidade4,
    unidade5,
    unidade6,
    unidade7,
    unidade8,
    unidade9,
    unidade10,
    unidade11,
    unidade12,
    unidade13,
    unidade14,
    unidade15,
  ],
};

export default curso;
