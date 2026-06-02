// Registro central de ilustrações dos objetos usados nas atividades.
// Pode buscar por nome (BOLA, GATO...) ou por emoji (🐱, ⚽...).
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
import galo from "@/assets/neuro-treino/objetos/galo.png";
import pintinho from "@/assets/neuro-treino/objetos/pintinho.png";
import ovelha from "@/assets/neuro-treino/objetos/ovelha.png";
import cabra from "@/assets/neuro-treino/objetos/cabra.png";
import raposa from "@/assets/neuro-treino/objetos/raposa.png";
import coelho from "@/assets/neuro-treino/objetos/coelho.png";
import panda from "@/assets/neuro-treino/objetos/panda.png";
import tigre from "@/assets/neuro-treino/objetos/tigre.png";
import leao from "@/assets/neuro-treino/objetos/leao.png";
import sapo from "@/assets/neuro-treino/objetos/sapo.png";
import macaco from "@/assets/neuro-treino/objetos/macaco.png";
import koala from "@/assets/neuro-treino/objetos/koala.png";
import passaro from "@/assets/neuro-treino/objetos/passaro.png";
import coruja from "@/assets/neuro-treino/objetos/coruja.png";
import polvo from "@/assets/neuro-treino/objetos/polvo.png";
import caranguejo from "@/assets/neuro-treino/objetos/caranguejo.png";
import borboleta from "@/assets/neuro-treino/objetos/borboleta.png";
import peixe from "@/assets/neuro-treino/objetos/peixe.png";
import joaninha from "@/assets/neuro-treino/objetos/joaninha.png";

import uva from "@/assets/neuro-treino/objetos/uva.png";
import limao from "@/assets/neuro-treino/objetos/limao.png";
import brocolis from "@/assets/neuro-treino/objetos/brocolis.png";
import cenoura from "@/assets/neuro-treino/objetos/cenoura.png";
import pepino from "@/assets/neuro-treino/objetos/pepino.png";

import aviao from "@/assets/neuro-treino/objetos/aviao.png";
import barco from "@/assets/neuro-treino/objetos/barco.png";
import onibus from "@/assets/neuro-treino/objetos/onibus.png";
import foguete from "@/assets/neuro-treino/objetos/foguete.png";
import moto from "@/assets/neuro-treino/objetos/moto.png";
import ambulancia from "@/assets/neuro-treino/objetos/ambulancia.png";
import bike from "@/assets/neuro-treino/objetos/bike.png";

import palmeira from "@/assets/neuro-treino/objetos/palmeira.png";
import nuvem from "@/assets/neuro-treino/objetos/nuvem.png";
import raio from "@/assets/neuro-treino/objetos/raio.png";
import fogo from "@/assets/neuro-treino/objetos/fogo.png";
import neve from "@/assets/neuro-treino/objetos/neve.png";
import cogumelo from "@/assets/neuro-treino/objetos/cogumelo.png";
import folha from "@/assets/neuro-treino/objetos/folha.png";
import pinheiro from "@/assets/neuro-treino/objetos/pinheiro.png";

import princesa from "@/assets/neuro-treino/objetos/princesa.png";
import heroi from "@/assets/neuro-treino/objetos/heroi.png";
import robo from "@/assets/neuro-treino/objetos/robo.png";
import dinossauro from "@/assets/neuro-treino/objetos/dinossauro.png";
import ovo from "@/assets/neuro-treino/objetos/ovo.png";
import vulcao from "@/assets/neuro-treino/objetos/vulcao.png";

import feliz from "@/assets/neuro-treino/objetos/feliz.png";
import triste from "@/assets/neuro-treino/objetos/triste.png";
import bravo from "@/assets/neuro-treino/objetos/bravo.png";
import surpreso from "@/assets/neuro-treino/objetos/surpreso.png";
import medo from "@/assets/neuro-treino/objetos/medo.png";
import sono from "@/assets/neuro-treino/objetos/sono.png";

/** Mapeamento por NOME (palavra do banco). Acentos opcionais. */
export const OBJETO_IMG: Record<string, string> = {
  BOLA: bola,
  GATO: gato,
  MAÇÃ: maca, MACA: maca,
  ÁRVORE: arvore, ARVORE: arvore,
  CASA: casa,
  ABELHA: abelha,
  FLOR: flor,
  CARRO: carro, OUTRO: carro,
  TREM: trem,
  PATO: pato,
  CACHORRO: cachorro, DOG: cachorro, "DOG.": cachorro,
  LUA: lua,
  ESTRELA: estrela,
  SOL: sol,
  CHUVA: chuva,
  RATO: rato,
  BANANA: banana,
  VACA: vaca, PORCO: porco, GALINHA: galinha, GALO: galo, PINTINHO: pintinho,
  OVELHA: ovelha, CABRA: cabra, RAPOSA: raposa, COELHO: coelho,
  PANDA: panda, TIGRE: tigre, "LEÃO": leao, LEAO: leao,
  SAPO: sapo, MACACO: macaco, KOALA: koala,
  "PÁSSARO": passaro, PASSARO: passaro, CORUJA: coruja,
  POLVO: polvo, CARANGUEJO: caranguejo, BORBOLETA: borboleta,
  PEIXE: peixe, JOANINHA: joaninha,
  UVA: uva, "LIMÃO": limao, LIMAO: limao,
  "BRÓCOLIS": brocolis, BROCOLIS: brocolis,
  CENOURA: cenoura, PEPINO: pepino,
  "AVIÃO": aviao, AVIAO: aviao,
  BARCO: barco, "ÔNIBUS": onibus, ONIBUS: onibus, BUS: onibus,
  FOGUETE: foguete, MOTO: moto, BIKE: bike,
  "AMBULÂNCIA": ambulancia, AMBULANCIA: ambulancia,
  PALMEIRA: palmeira, NUVEM: nuvem, RAIO: raio,
  FOGO: fogo, NEVE: neve, COGUMELO: cogumelo, FOLHA: folha,
  PINHEIRO: pinheiro,
  PRINCESA: princesa, "HERÓI": heroi, HEROI: heroi, ROBÔ: robo, ROBO: robo,
  DINOSSAURO: dinossauro, "T-REX": dinossauro, RAPTOR: dinossauro,
  OVO: ovo, "VULCÃO": vulcao, VULCAO: vulcao,
  FELIZ: feliz, TRISTE: triste, BRAVO: bravo,
  SURPRESO: surpreso, MEDO: medo, SONO: sono,
};

/** Mapeamento por EMOJI (para componentes que usam apenas emoji). */
export const EMOJI_IMG: Record<string, string> = {
  "⚽": bola, "🏀": bola,
  "🐱": gato, "🐈": gato,
  "🍎": maca, "🍏": maca,
  "🌳": arvore, "🌲": pinheiro,
  "🏠": casa, "🏡": casa,
  "🐝": abelha,
  "🌸": flor, "🌺": flor, "🌼": flor, "🌷": flor, "🌻": flor,
  "🚗": carro, "🚙": carro,
  "🚂": trem,
  "🦆": pato,
  "🐶": cachorro, "🐕": cachorro, "🐺": cachorro,
  "🌙": lua,
  "⭐": estrela, "🌟": estrela, "✨": estrela,
  "☀️": sol, "🌞": sol,
  "🌧️": chuva, "🌦️": chuva,
  "🐀": rato, "🐭": rato,
  "🍌": banana,
  "🐮": vaca, "🐄": vaca,
  "🐷": porco, "🐖": porco,
  "🐔": galinha, "🐓": galo, "🐥": pintinho, "🐤": pintinho,
  "🐑": ovelha, "🐐": cabra,
  "🦊": raposa,
  "🐰": coelho, "🐇": coelho,
  "🐼": panda,
  "🐯": tigre, "🐅": tigre,
  "🦁": leao,
  "🐸": sapo,
  "🐵": macaco, "🐒": macaco,
  "🐨": koala,
  "🐦": passaro, "🕊️": passaro,
  "🦉": coruja,
  "🐙": polvo,
  "🦀": caranguejo,
  "🦋": borboleta,
  "🐠": peixe, "🐟": peixe, "🐡": peixe,
  "🐞": joaninha, "🐛": joaninha, "🦗": joaninha, "🐌": joaninha,
  "🍇": uva,
  "🍋": limao,
  "🥦": brocolis,
  "🥕": cenoura,
  "🥒": pepino,
  "✈️": aviao,
  "⛵": barco, "⛴️": barco, "🚢": barco,
  "🚌": onibus, "🚍": onibus,
  "🚀": foguete,
  "🏍️": moto,
  "🚑": ambulancia,
  "🚲": bike,
  "🌴": palmeira,
  "☁️": nuvem,
  "⚡": raio,
  "🔥": fogo,
  "❄️": neve, "⛄": neve, "🧊": neve,
  "🍄": cogumelo,
  "🌿": folha, "🍃": folha,
  "👸": princesa,
  "🦸": heroi, "🦸‍♂️": heroi, "🦸‍♀️": heroi,
  "🤖": robo,
  "🦖": dinossauro, "🦕": dinossauro,
  "🥚": ovo,
  "🌋": vulcao,
  "😄": feliz, "😀": feliz, "😊": feliz, "🤗": feliz,
  "😢": triste, "😭": triste, "🥺": triste,
  "😡": bravo, "😠": bravo, "🤬": bravo,
  "😲": surpreso, "😮": surpreso, "😯": surpreso,
  "😨": medo, "😰": medo, "😱": medo,
  "😴": sono, "😪": sono,
};

/** Retorna a imagem do objeto pelo nome, ou undefined se não houver. */
export function objetoImg(nome?: string): string | undefined {
  if (!nome) return undefined;
  return OBJETO_IMG[nome.toUpperCase()];
}

/** Retorna a imagem pelo emoji. */
export function emojiImg(emoji?: string): string | undefined {
  if (!emoji) return undefined;
  // tenta o emoji direto e também sem o seletor de variação
  return EMOJI_IMG[emoji] ?? EMOJI_IMG[emoji.replace(/\uFE0F/g, "")];
}

/** Resolve por nome ou emoji (qualquer um disponível). */
export function resolveImg(opts: { nome?: string; emoji?: string }): string | undefined {
  return objetoImg(opts.nome) ?? emojiImg(opts.emoji);
}
