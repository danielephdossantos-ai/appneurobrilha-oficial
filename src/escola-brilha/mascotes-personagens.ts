/**
 * Mapa central: personagem narrativo → mascote oficial da Loja de Mascotes.
 *
 * Toda vez que uma aula/atlas menciona um personagem (Aurora, Téo, Lupi, ...)
 * usamos SEMPRE o mesmo mascote da loja, para criar apego e coleção na criança.
 *
 * Regras:
 *  - Esquilo Brilha é fixo — é o mascote oficial do app (assinatura dos diplomas).
 *  - Cada diploma novo exibe UM mascote colecionável extra.
 */
import { url as esquiloBrilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as pipaAstronauta } from "@/assets/pip-girl-astronauta.png.asset.json";
import { url as pipMascot } from "@/assets/pip-girl-mascot.png.asset.json";

export type MascotePersonagem = {
  id: string;
  nome: string;
  img: string;
  storeId?: string; // id na Loja de Mascotes
};

/** Mascote fixo do app — assinatura oficial */
export const ESQUILO_BRILHA: MascotePersonagem = {
  id: "esquilo-brilha",
  nome: "Esquilo Brilha",
  img: esquiloBrilha,
};

/** Mascote oficial da trilha Contar com Pip */
export const PIP: MascotePersonagem = {
  id: "pip",
  nome: "Pip",
  img: pipMascot,
  storeId: "pip-girl-mascot",
};

/** Personagens narrativos → mascote da loja */
export const PERSONAGENS: Record<string, MascotePersonagem> = {
  aurora: {
    id: "aurora",
    nome: "Aurora",
    img: pipaAstronauta,
    storeId: "pipa-astronauta",
  },
  pip: PIP,
};

export function getPersonagem(nome: string): MascotePersonagem | undefined {
  return PERSONAGENS[nome.toLowerCase().trim()];
}
