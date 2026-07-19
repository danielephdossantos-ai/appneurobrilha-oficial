import type { CursoArteV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Arte · 9º Ano — "🌐 Cosmopolitismo, Hibridismo e a Estética das Fronteiras"
 *
 * Categoria Teen/Pre-Vestibular. ÁPICE da jornada do Fund. 2.
 * O aluno vira Pensador Visual, Artivista, Curador da Identidade, Engenheiro Acústico,
 * Diretor de Performance, Articulador de Redes e — na Unidade 7 — o GRANDE CURADOR
 * que assina a exposição final do Códice dos 4 anos.
 */
const curso: CursoArteV1 = {
  slug: "arte-9ano",
  disciplina: "Arte",
  ano: "9º Ano",
  titulo: "Cosmopolitismo, Hibridismo e a Estética das Fronteiras",
  descricao:
    "Depois do corpo ciber-digital do 8º ano, você chega ao ápice. 7 unidades: hibridismo cultural, arte pública, descolonização, arte sonora, vídeo-performance, coletivos e curadoria contemporânea. Ao final, você recebe o Diploma Avançado de Curadoria Visual Crítica Global.",
  corPrimaria: "#0891b2",
  corSecundaria: "#0f172a",
  tipoAula: "arte-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
