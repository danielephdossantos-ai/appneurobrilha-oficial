import u1a01 from "./aulas/u1-a01-cores-falam";

export const AULAS_ARTE_2ANO = {
  [u1a01.id]: u1a01,
} as const;

export type AulaArteId = keyof typeof AULAS_ARTE_2ANO;

export function getAulaArte(id: string) {
  return AULAS_ARTE_2ANO[id as AulaArteId];
}

export function listAulasArte() {
  return Object.values(AULAS_ARTE_2ANO);
}
