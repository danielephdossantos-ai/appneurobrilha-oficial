import u1a01 from "./aulas/u1-a01-cores-falam";
import u2a01 from "./aulas/u2-a01-observando-antes-de-desenhar";
import u3a01 from "./aulas/u3-a01-descobrindo-os-sons";
import u4a01 from "./aulas/u4-a01-historias-que-ganham-vida";
import u5a01 from "./aulas/u5-a01-arte-e-natureza";
import u6a01 from "./aulas/u6-a01-movimento-e-cultura";
import u7a01 from "./aulas/u7-a01-pequenos-artistas-em-acao";

export const AULAS_ARTE_2ANO = {
  [u1a01.id]: u1a01,
  [u2a01.id]: u2a01,
  [u3a01.id]: u3a01,
  [u4a01.id]: u4a01,
  [u5a01.id]: u5a01,
  [u6a01.id]: u6a01,
  [u7a01.id]: u7a01,
} as const;

export type AulaArteId = keyof typeof AULAS_ARTE_2ANO;

export function getAulaArte(id: string) {
  return AULAS_ARTE_2ANO[id as AulaArteId];
}

export function listAulasArte() {
  return Object.values(AULAS_ARTE_2ANO);
}
