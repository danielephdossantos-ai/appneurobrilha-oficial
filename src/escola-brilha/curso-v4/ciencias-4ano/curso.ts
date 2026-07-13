import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";

/**
 * Curso: Ciências 4º Ano — "Expedição Científica Terra Viva"
 *
 * Salto de maturidade: sai da fantasia dos cristais (2º/3º) e entra em
 * pesquisa científica baseada em problemas reais.
 * - Aurora vira ORIENTADORA da equipe (não mais narradora mágica).
 * - Brilha é o pesquisador júnior da Equipe de Pesquisa Escola Brilha.
 * - Skin: fotografia real + infográfico científico (mesma linha de História 3-5).
 *
 * Piloto: só Unidade 1 liberada. Demais unidades entram após validação.
 */
const curso: CursoGeoV1 = {
  slug: "ciencias-4ano",
  disciplina: "Ciências",
  ano: "4º Ano",
  titulo: "Expedição Científica Terra Viva",
  descricao:
    "Você entra na Equipe de Pesquisa Científica Escola Brilha. Aurora é a orientadora, Brilha é o pesquisador júnior, e você faz parte da equipe. Cada unidade é uma investigação real: observação de campo, dados, hipóteses e conclusões.",
  corPrimaria: "#0f766e",
  corSecundaria: "#0b1220",
  tipoAula: "geo-v1",
  unidades: [unidade1],
};

export default curso;
