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
import esquiloBrilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import pipaAstronauta from "@/assets/pip-girl-astronauta.png";

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

/** Personagens narrativos → mascote da loja */
export const PERSONAGENS: Record<string, MascotePersonagem> = {
  aurora: {
    id: "aurora",
    nome: "Aurora",
    img: pipaAstronauta,
    storeId: "pipa-astronauta",
  },
};

export function getPersonagem(nome: string): MascotePersonagem | undefined {
  return PERSONAGENS[nome.toLowerCase().trim()];
}
