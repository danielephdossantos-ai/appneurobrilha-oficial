import type { CursoArteV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Arte · 4º Ano — "👁️ O Laboratório da Ilusão Visu-Espacial"
 *
 * Categoria Kids-Transition / Pre-Teen: alunos como Engenheiros Visuais e
 * Designers Culturais. Foco: como física, luz, tecnologia e história se
 * entrelaçam para criar ilusão e expressão artística.
 * Reutiliza o player arte-v1 (mesmo do 2º e 3º Ano) — conteúdo mais denso,
 * fontes históricas (Da Vinci, Caravaggio, Brunelleschi, Newton, Seurat,
 * Russolo, Uakti, Palladio, gráficos 8-bits).
 */
const curso: CursoArteV1 = {
  slug: "arte-4ano",
  disciplina: "Arte",
  ano: "4º Ano",
  titulo: "O Laboratório da Ilusão Visu-Espacial",
  descricao:
    "Um laboratório onde a arte encontra a física: lentes, prismas, chiaroscuro, perspectiva, cinema, som, palco e pixel. Brilha e Aurora guiam a turma pelas descobertas ópticas e acústicas dos grandes mestres.",
  corPrimaria: "#1e3a8a",
  corSecundaria: "#f59e0b",
  tipoAula: "arte-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
