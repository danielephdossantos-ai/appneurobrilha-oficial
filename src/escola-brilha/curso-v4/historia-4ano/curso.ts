import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";

/**
 * Curso: História 4º Ano — "As Crônicas das Grandes Rotas e Migrações"
 *
 * Skin narrativa: Brilha e Aurora encontram um novo volume mágico —
 * As Crônicas das Grandes Rotas. Cada unidade completada restaura uma
 * página e acende um ponto luminoso no mapa-múndi das migrações.
 * Visual TRAVADO: fotografia real + infográfico cartográfico (padrão 3º ano).
 * Motor: PlayerGeoV1 (mesmo esqueleto 11 cenas).
 */
const curso: CursoGeoV1 = {
  slug: "historia-4ano",
  disciplina: "História",
  ano: "4º Ano",
  titulo: "As Crônicas das Grandes Rotas e Migrações",
  descricao:
    "Brilha e Aurora encontram um novo volume mágico: As Crônicas das Grandes Rotas. Suas páginas narram como os seres humanos se deslocaram pelo planeta e pelo Brasil, criando caminhos, trocas e novas tecnologias. Cada unidade acende um ponto luminoso no mapa-múndi das migrações.",
  corPrimaria: "#b45309",
  corSecundaria: "#0f766e",
  tipoAula: "geo-v1",
  unidades: [unidade1],
};

export default curso;
