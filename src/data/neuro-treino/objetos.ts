// Registro central de ilustrações premium 2D dos objetos/personagens usados nas atividades.
// Mapeia tanto pelo NOME (em maiúsculas) quanto pelo EMOJI correspondente.
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
import vaca from "@/assets/neuro-treino/objetos/vaca.png";
import porco from "@/assets/neuro-treino/objetos/porco.png";
import galinha from "@/assets/neuro-treino/objetos/galinha.png";
import ovelha from "@/assets/neuro-treino/objetos/ovelha.png";
import cabra from "@/assets/neuro-treino/objetos/cabra.png";
import pintinho from "@/assets/neuro-treino/objetos/pintinho.png";
import galo from "@/assets/neuro-treino/objetos/galo.png";
import passaro from "@/assets/neuro-treino/objetos/passaro.png";
import coruja from "@/assets/neuro-treino/objetos/coruja.png";

export const OBJETO_IMG: Record<string, string> = {
  // Por NOME
  BOLA: bola,
  GATO: gato,
  "MAÇÃ": maca,
  MACA: maca,
  "ÁRVORE": arvore,
  ARVORE: arvore,
  CASA: casa,
  ABELHA: abelha,
  FLOR: flor,
  CARRO: carro,
  OUTRO: carro,
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
  VACA: vaca,
  PORCO: porco,
  GALINHA: galinha,
  OVELHA: ovelha,
  CABRA: cabra,
  PINTINHO: pintinho,
  GALO: galo,
  "PÁSSARO": passaro,
  PASSARO: passaro,
  CORUJA: coruja,
  BIKE: carro,
  "AVIÃO": carro,
  AVIAO: carro,
};

// Mapeia emojis para a mesma biblioteca de ilustrações premium
export const EMOJI_IMG: Record<string, string> = {
  "⚽": bola,
  "🐱": gato,
  "🐈": gato,
  "🍎": maca,
  "🍏": maca,
  "🌳": arvore,
  "🌲": arvore,
  "🏠": casa,
  "🏡": casa,
  "🐝": abelha,
  "🌸": flor,
  "🌺": flor,
  "🌷": flor,
  "🌼": flor,
  "🌻": flor,
  "🚗": carro,
  "🚙": carro,
  "🚲": carro,
  "✈️": carro,
  "🚌": carro,
  "🚂": trem,
  "🦆": pato,
  "🐶": cachorro,
  "🐕": cachorro,
  "🌙": lua,
  "⭐": estrela,
  "🌟": estrela,
  "☀️": sol,
  "🌞": sol,
  "🌧️": chuva,
  "🌧": chuva,
  "🐀": rato,
  "🐭": rato,
  "🍌": banana,
  "🐮": vaca,
  "🐄": vaca,
  "🐷": porco,
  "🐖": porco,
  "🐔": galinha,
  "🐑": ovelha,
  "🐐": cabra,
  "🐥": pintinho,
  "🐤": pintinho,
  "🐓": galo,
  "🐦": passaro,
  "🦉": coruja,
};

/** Retorna a imagem do objeto pelo nome, ou undefined se não houver. */
export function objetoImg(nome?: string): string | undefined {
  if (!nome) return undefined;
  return OBJETO_IMG[nome.toUpperCase()];
}

/** Retorna a imagem premium pelo emoji, ou undefined. */
export function emojiImg(emoji?: string): string | undefined {
  if (!emoji) return undefined;
  return EMOJI_IMG[emoji.trim()];
}

/** Tenta resolver imagem por emoji OU nome — útil para activities mistas. */
export function ilustracao(emoji?: string, nome?: string): string | undefined {
  return emojiImg(emoji) ?? objetoImg(nome);
}
