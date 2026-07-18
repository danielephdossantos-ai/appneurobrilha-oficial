import type { CursoArteV1 } from "../types";
import { unidade1 } from "./unidade-1";

/**
 * Arte · 7º Ano — "🚀 Crônicas das Cidades Suspensas"
 *
 * Categoria Teen. Aluno assume papel de Urbanista Visual e Arquiteto Social:
 * explora perspectiva, ponto de fuga, arquitetura futurista e intervenção
 * urbana. Reutiliza o player arte-v1.
 */
const curso: CursoArteV1 = {
  slug: "arte-7ano",
  disciplina: "Arte",
  ano: "7º Ano",
  titulo: "Crônicas das Cidades Suspensas",
  descricao:
    "Depois de decifrar o passado no 6º Ano, agora você projeta o futuro. Brilha e Aurora abrem as Crônicas das Cidades Suspensas: você vira urbanista visual — domina perspectiva, ponto de fuga, arquitetura moderna e arte urbana como transformação social.",
  corPrimaria: "#0891b2",
  corSecundaria: "#0f172a",
  tipoAula: "arte-v1",
  unidades: [unidade1],
};

export default curso;
