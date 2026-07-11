import type { AulaHistoria } from "../types";
import aula_2ano_u1_a01 from "./historia-2ano-u1-a01";

const aulas: AulaHistoria[] = [aula_2ano_u1_a01];

export function getAulaHistoria(curso: string, slug: string): AulaHistoria | undefined {
  return aulas.find((a) => a.curso === curso && a.slug === slug);
}

export function listAulasHistoria(curso: string): AulaHistoria[] {
  return aulas.filter((a) => a.curso === curso).sort((a, b) => a.unidade - b.unidade || a.aula - b.aula);
}

export function getTotalUnidades(curso: string): number {
  // História SPEB tem sempre 7 unidades = 7 engrenagens
  return 7;
}
