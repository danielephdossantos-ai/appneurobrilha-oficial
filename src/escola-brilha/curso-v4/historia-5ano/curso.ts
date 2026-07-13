import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: História 5º Ano — "O Memorial da Cidadania e dos Direitos"
 *
 * Sete Tochas da Justiça:
 *  1. Chama da Democracia (Antiguidade)
 *  2. Farol dos Direitos (Direitos Humanos)
 *  3. Palácio dos Três Pilares (Formas de Governo)
 *  4. Mural das Conquistas (Direitos Sociais no Brasil)
 *  5. Templo da Memória Humana (UNESCO)
 *  6. Roda da Inclusão (Movimentos Sociais)
 *  7. Altar da Cidadania Planetária (ODS/Meio Ambiente)
 *
 * Visual TRAVADO: fotografia real + infográfico PT-BR (padrão 3º/4º ano).
 * Motor: PlayerGeoV1 (mesmo esqueleto de 11 cenas).
 */
const curso: CursoGeoV1 = {
  slug: "historia-5ano",
  disciplina: "História",
  ano: "5º Ano",
  titulo: "O Memorial da Cidadania e dos Direitos",
  descricao:
    "O Relógio do Tempo e as Crônicas guiaram Brilha e Aurora até o monumento final: O Memorial da Cidadania. Suas paredes guardam estátuas e pergaminhos que contam como a humanidade conquistou a liberdade, o voto e os direitos. Cada unidade completada acende uma Tocha da Justiça no grande salão da história.",
  corPrimaria: "#b45309",
  corSecundaria: "#0f766e",
  tipoAula: "geo-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
