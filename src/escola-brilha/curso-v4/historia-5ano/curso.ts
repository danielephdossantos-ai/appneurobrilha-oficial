import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";

/**
 * Curso: História 5º Ano — "O Memorial da Cidadania e dos Direitos"
 *
 * Skin narrativa: O Relógio do Tempo e as Crônicas guiaram Brilha e Aurora
 * até o monumento final: O Memorial da Cidadania. Cada unidade completada
 * acende uma Tocha da Justiça no grande salão.
 * Visual TRAVADO: fotografia real + infográfico PT-BR (padrão 3º/4º ano).
 * Motor: PlayerGeoV1 (mesmo esqueleto de 11 cenas).
 *
 * PILOTO: Unidade 1. Aguardando validação para seguir com 2-7.
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
  unidades: [unidade1],
};

export default curso;
