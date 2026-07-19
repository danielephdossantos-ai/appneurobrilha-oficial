import type { CursoArteV1 } from "../types";
import { unidade1 } from "./unidade-1";

/**
 * Arte · 1º Ano — "🎨 O Baú de Cores da Aurora"
 *
 * Categoria Kids-Iniciante (6 anos). Player arte-v1 (mesmo do 2º Ano),
 * mas com falas curtas, poucas perguntas por bloco e foco em IMAGEM.
 * Piloto: apenas Unidade 1 por enquanto — as demais entram após
 * aprovação do tom.
 */
const curso: CursoArteV1 = {
  slug: "arte-1ano",
  disciplina: "Arte",
  ano: "1º Ano",
  titulo: "O Baú de Cores da Aurora",
  descricao:
    "Aurora abriu um baú mágico cheio de cores. Junto com Brilha, você vai descobrir cores, linhas, formas, texturas, sons e criar sua primeira galeria!",
  corPrimaria: "#f97316",
  corSecundaria: "#facc15",
  tipoAula: "arte-v1",
  unidades: [unidade1],
};

export default curso;
