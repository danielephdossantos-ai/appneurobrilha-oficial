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
import borboleta from "@/assets/neuro-treino/objetos/borboleta.png";
import peixe from "@/assets/neuro-treino/objetos/peixe.png";
import dinossauro from "@/assets/neuro-treino/objetos/dinossauro.png";
import coracao from "@/assets/neuro-treino/objetos/coracao.png";
import sapo from "@/assets/neuro-treino/objetos/sapo.png";
import raposa from "@/assets/neuro-treino/objetos/raposa.png";
import coelho from "@/assets/neuro-treino/objetos/coelho.png";
import panda from "@/assets/neuro-treino/objetos/panda.png";
import leao from "@/assets/neuro-treino/objetos/leao.png";
import tigre from "@/assets/neuro-treino/objetos/tigre.png";
import ursinho from "@/assets/neuro-treino/objetos/ursinho.png";
import presente from "@/assets/neuro-treino/objetos/presente.png";
import princesa from "@/assets/neuro-treino/objetos/princesa.png";
import heroi from "@/assets/neuro-treino/objetos/heroi.png";
import robo from "@/assets/neuro-treino/objetos/robo.png";
import diamante from "@/assets/neuro-treino/objetos/diamante.png";
import fogo from "@/assets/neuro-treino/objetos/fogo.png";
import bolo from "@/assets/neuro-treino/objetos/bolo.png";
import asa from "@/assets/neuro-treino/objetos/asa.png";
import morango from "@/assets/neuro-treino/frutas/morango.png";
import uva from "@/assets/neuro-treino/frutas/uva.png";
import cenoura from "@/assets/neuro-treino/vegetais/cenoura.png";
import brocolis from "@/assets/neuro-treino/vegetais/brocolis.png";
import camiseta from "@/assets/neuro-treino/roupas/camiseta.png";
import feliz from "@/assets/neuro-treino/emocoes/feliz.png";
import triste from "@/assets/neuro-treino/emocoes/triste.png";
import bravo from "@/assets/neuro-treino/emocoes/bravo.png";
import surpreso from "@/assets/neuro-treino/emocoes/surpreso.png";
import medo from "@/assets/neuro-treino/emocoes/medo.png";
import sono from "@/assets/neuro-treino/emocoes/sono.png";

export const OBJETO_IMG: Record<string, string> = {
  BOLA: bola, GATO: gato, "MAÇÃ": maca, "MAÇÃS": maca, "MAÇA": maca, "MAÇAS": maca, MACA: maca, MACAS: maca, "ÁRVORE": arvore, ARVORE: arvore,
  CASA: casa, ABELHA: abelha, FLOR: flor, CARRO: carro, OUTRO: carro, TREM: trem,
  ASA: asa, BOLO: bolo, PATO: pato, CACHORRO: cachorro, DOG: cachorro,
  LUA: lua, ESTRELA: estrela, SOL: sol, CHUVA: chuva, RATO: rato, BANANA: banana,
  VACA: vaca, PORCO: porco, GALINHA: galinha, OVELHA: ovelha, CABRA: cabra,
  PINTINHO: pintinho, GALO: galo, PASSARINHO: passaro, PASSARINHOS: passaro,
  "PÁSSARO": passaro, PASSARO: passaro, CORUJA: coruja,
  BIKE: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", "AVIÃO": "https://cdn-icons-png.flaticon.com/512/5776/5776317.png", AVIAO: "https://cdn-icons-png.flaticon.com/512/5776/5776317.png",
  BORBOLETA: borboleta, PEIXE: peixe, DINOSSAURO: dinossauro, "T-REX": dinossauro,
  RAPTOR: dinossauro, "PTERODÁCTILO": passaro, "CORAÇÃO": coracao, CORACAO: coracao,
  SAPO: sapo, RAPOSA: raposa, COELHO: coelho, PANDA: panda,
  "LEÃO": leao, LEAO: leao, TIGRE: tigre, 
  MACACO: "https://cdn-icons-png.flaticon.com/512/2632/2632837.png", 
  MACACOS: "https://cdn-icons-png.flaticon.com/512/2632/2632837.png",
  URSINHO: ursinho, "URSO": ursinho, PRESENTE: presente, PRINCESA: princesa,
  HEROI: heroi, "HERÓI": heroi, ROBO: robo, "ROBÔ": robo, DIAMANTE: diamante,
  FOGO: fogo, TOCHA: fogo, "VULCÃO": fogo, VULCAO: fogo,
  MORANGO: morango, UVA: uva, CENOURA: cenoura, BROCOLIS: brocolis, "BRÓCOLIS": brocolis,
  CAMISETA: camiseta, ROUPA: camiseta,
  FELIZ: feliz, TRISTE: triste, BRAVO: bravo, SURPRESO: surpreso, MEDO: medo, SONO: sono,
  CREEPER: dinossauro, ZUMBI: dinossauro,
};

// Mapeia emojis para a mesma biblioteca de ilustrações premium
export const EMOJI_IMG: Record<string, string> = {
  "⚽": bola, "🏀": bola,
  "🐱": gato, "🐈": gato,
  "🍎": maca, "🍏": maca,
  "🌳": arvore, "🌲": arvore, "🌴": arvore,
  "🏠": casa, "🏡": casa, "🏘️": casa,
  "🐝": abelha,
  "🌸": flor, "🌺": flor, "🌷": flor, "🌼": flor, "🌻": flor,
  "🚗": carro, "🚙": carro, "🚲": "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", "✈️": "https://cdn-icons-png.flaticon.com/512/5776/5776317.png", "🚌": carro, "🏍️": "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", "🚑": carro,
  "🚂": trem,
  "🦆": pato,
  "🐶": cachorro, "🐕": cachorro, "🐺": cachorro,
  "🌙": lua,
  "⭐": estrela, "🌟": estrela, "✨": estrela,
  "☀️": sol, "🌞": sol,
  "🌧️": chuva, "🌧": chuva, "☁️": chuva, "💧": chuva, "🌊": chuva, "❄️": chuva, "🧊": chuva, "⛄": chuva,
  "🐀": rato, "🐭": rato,
  "🍌": banana, "🍋": banana,
  "🐮": vaca, "🐄": vaca,
  "🐷": porco, "🐖": porco,
  "🐔": galinha,
  "🐑": ovelha,
  "🐐": cabra,
  "🐥": pintinho, "🐤": pintinho,
  "🐓": galo,
  "🐦": passaro, "🦅": passaro,
  "🦉": coruja,
  "🦋": borboleta,
  "🐠": peixe, "🐟": peixe, "🐙": peixe, "🦀": peixe, "🐚": peixe,
  "🦖": dinossauro,
  "❤️": coracao, "💔": coracao, "🤗": coracao,
  "🐸": sapo,
  "🦊": raposa,
  "🐰": coelho,
  "🐼": panda, "🐨": "https://cdn-icons-png.flaticon.com/512/3069/3069165.png", 
  "🐵": "https://cdn-icons-png.flaticon.com/512/2632/2632837.png", 
  "🐒": "https://cdn-icons-png.flaticon.com/512/2632/2632837.png",
  "🦁": leao,
  "🐯": tigre,
  "🧸": ursinho,
  "🎁": presente, "🎀": presente,
  "👸": princesa,
  "🦸": heroi, "🦸‍♂️": heroi, "🦸‍♀️": heroi,
  "🤖": robo,
  "💎": diamante,
  "🔥": fogo, "🌋": fogo, "🕯️": fogo,
  "🍓": morango,
  "🍇": uva,
  "🥕": cenoura,
  "🥦": brocolis, "🥬": brocolis, "🥒": brocolis,
  "👕": camiseta, "👖": camiseta, "🧦": camiseta, "👗": camiseta,
  "😄": feliz, "😀": feliz, "😊": feliz, "🙂": feliz, "😋": feliz,
  "😢": triste, "😭": triste, "🥺": triste,
  "😡": bravo, "😠": bravo, "🤬": bravo,
  "😲": surpreso, "😮": surpreso, "😯": surpreso,
  "😨": medo, "😱": medo, "😰": medo,
  "😴": sono, "💤": sono,
  "🧟": dinossauro, "🟩": dinossauro,
  "⛏️": diamante, "🗡️": diamante, "🛡️": diamante, "⚔️": diamante,
  "🥚": "https://cdn-icons-png.flaticon.com/512/2822/2822453.png", "🦴": ursinho, "🌱": arvore, "🌿": arvore, "🍄": flor,
  "🐛": abelha, "🐞": abelha, "🦗": abelha, "🐌": abelha,
  "🪐": lua, "☄️": estrela, "👽": robo, "🚀": "https://cdn-icons-png.flaticon.com/512/1043/1043431.png",
  "⛵": "https://cdn-icons-png.flaticon.com/512/2900/2900223.png", "🛏️": casa, "🪑": casa, "📚": casa, "🐿️": raposa,
  "⛱️": sol, "🎈": presente, "💨": chuva,
  "🎭": presente, "⚡": fogo, "⚖️": diamante,
  "👏": feliz, "😤": bravo, "🤧": medo,
  "🚪": casa, "🦶": ursinho, "🍽️": maca, "🏃": heroi, "👋": feliz,
  "🌈": estrela, "🌶️": fogo,
  "🎲": presente, "🎯": estrela,
  "🪽": passaro,
};

/** Retorna a imagem do objeto pelo nome, ou undefined se não houver. */
export function objetoImg(nome?: string): string | undefined {
  if (!nome) return undefined;
  // remove emoji prefix se houver ("😄 Feliz" → "Feliz")
  const limpo = nome.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}\uFE0F]/gu, "").trim();
  return OBJETO_IMG[limpo.toUpperCase()] ?? OBJETO_IMG[nome.toUpperCase()];
}

/** Retorna a imagem premium pelo emoji, ou undefined. */
export function emojiImg(emoji?: string): string | undefined {
  if (!emoji) return undefined;
  const t = emoji.trim();
  if (EMOJI_IMG[t]) return EMOJI_IMG[t];
  // se vier "😄 Feliz" tenta cada parte
  for (const part of t.split(/\s+/)) {
    if (EMOJI_IMG[part]) return EMOJI_IMG[part];
  }
  return undefined;
}

/** Tenta resolver imagem por emoji OU nome — útil para activities mistas. */
export function ilustracao(emoji?: string, nome?: string): string | undefined {
  return emojiImg(emoji) ?? objetoImg(nome);
}

/** Remove emojis de uma string, deixando só o texto. */
export function semEmoji(s?: string): string {
  if (!s) return "";
  return s.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}\uFE0F]/gu, "").trim();
}
