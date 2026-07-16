import u1a01 from "./aulas/u1-a01-cores-falam";
import u2a01 from "./aulas/u2-a01-observando-antes-de-desenhar";
import u3a01 from "./aulas/u3-a01-descobrindo-os-sons";

export const AULAS_ARTE_2ANO = {
  [u1a01.id]: u1a01,
  [u2a01.id]: u2a01,
  [u3a01.id]: u3a01,
} as const;

export type AulaArteId = keyof typeof AULAS_ARTE_2ANO;

export function getAulaArte(id: string) {
  return AULAS_ARTE_2ANO[id as AulaArteId];
}

export function listAulasArte() {
  return Object.values(AULAS_ARTE_2ANO);
}
