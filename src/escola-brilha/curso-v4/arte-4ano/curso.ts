import type { CursoArteV1 } from "../types";
import { unidade1 } from "./unidade-1";

/**
 * Arte · 4º Ano — "👁️ O Laboratório da Ilusão Visu-Espacial"
 *
 * Categoria Kids-Transition / Pre-Teen: alunos como Engenheiros Visuais e
 * Designers Culturais. Foco: como física, luz, tecnologia e história se
 * entrelaçam para criar ilusão e expressão artística.
 * Reutiliza o player arte-v1 (mesmo do 2º e 3º Ano) — conteúdo mais denso,
 * fontes históricas (Da Vinci, Caravaggio, Newton) e experimentos ópticos.
 */
const curso: CursoArteV1 = {
  slug: "arte-4ano",
  disciplina: "Arte",
  ano: "4º Ano",
  titulo: "O Laboratório da Ilusão Visu-Espacial",
  descricao:
    "Um laboratório onde a arte encontra a física: lentes, prismas, chiaroscuro e sombras projetadas. Brilha e Aurora guiam a turma pelas descobertas ópticas de Leonardo da Vinci, Caravaggio e Newton.",
  corPrimaria: "#1e3a8a",
  corSecundaria: "#f59e0b",
  tipoAula: "arte-v1",
  unidades: [unidade1],
};

export default curso;
