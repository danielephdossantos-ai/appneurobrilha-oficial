// Registro central de ilustrações dos objetos usados nas atividades.
// Mapeia o "nome" (em maiúsculas) da palavra para a imagem ilustrada.
import bola from "@/assets/neuro-treino/objetos/bola.png";
import gato from "@/assets/neuro-treino/objetos/gato.png";
import maca from "@/assets/neuro-treino/objetos/maca.png";
import arvore from "@/assets/neuro-treino/objetos/arvore.png";
import casa from "@/assets/neuro-treino/objetos/casa.png";
import abelha from "@/assets/neuro-treino/objetos/abelha.png";
import flor from "@/assets/neuro-treino/objetos/flor.png";
import carro from "@/assets/neuro-treino/objetos/carro.png";
import trem from "@/assets/neuro-treino/objetos/trem.png";
import pato from "@/assets/neuro-treino/objetos/pato.png";
import cachorro from "@/assets/neuro-treino/objetos/cachorro.png";
import lua from "@/assets/neuro-treino/objetos/lua.png";
import estrela from "@/assets/neuro-treino/objetos/estrela.png";
import sol from "@/assets/neuro-treino/objetos/sol.png";
import chuva from "@/assets/neuro-treino/objetos/chuva.png";
import rato from "@/assets/neuro-treino/objetos/rato.png";
import banana from "@/assets/neuro-treino/objetos/banana.png";

export const OBJETO_IMG: Record<string, string> = {
  BOLA: bola,
  GATO: gato,
  MAÇÃ: maca,
  MACA: maca,
  ÁRVORE: arvore,
  ARVORE: arvore,
  CASA: casa,
  ABELHA: abelha,
  FLOR: flor,
  CARRO: carro,
  OUTRO: carro, // distrator "OUTRO" usa carro como ilustração genérica
  TREM: trem,
  PATO: pato,
  CACHORRO: cachorro,
  DOG: cachorro,
  LUA: lua,
  ESTRELA: estrela,
  SOL: sol,
  CHUVA: chuva,
  RATO: rato,
  BANANA: banana,
};

/** Retorna a imagem do objeto pelo nome, ou undefined se não houver. */
export function objetoImg(nome?: string): string | undefined {
  if (!nome) return undefined;
  return OBJETO_IMG[nome.toUpperCase()];
}
