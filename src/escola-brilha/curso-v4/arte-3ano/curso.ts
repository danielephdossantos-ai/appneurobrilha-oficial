import type { CursoArteV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";

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
  unidades: [unidade1, unidade2],
};

export default curso;
