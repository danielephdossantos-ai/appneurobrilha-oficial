/**
 * Mascotes oficiais do Neuro Brilha — padrão TRAVADO "quebra-cabeça"
 * (2D kawaii/Pixar, olhos grandes brilhantes, cel-shading, PNG transparente).
 *
 * Toda aula/atividade que precise do mascote DEVE importar daqui.
 * Não criar novas versões locais do Brilha em pastas de aulas.
 */
import { url as brilhaOficial } from "@/assets/escola-brilha/mascotes/brilha.png.asset.json";

export const MASCOTES = {
  brilha: brilhaOficial,
} as const;

export { brilhaOficial as brilha };
