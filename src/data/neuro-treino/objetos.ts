// Registro central de ilustrações premium 2D dos objetos/personagens usados nas atividades.
// Mapeia tanto pelo NOME (em maiúsculas) quanto pelo EMOJI correspondente.
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as abelha } from "@/assets/neuro-treino/objetos/abelha.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as carro } from "@/assets/neuro-treino/objetos/carro.png.asset.json";
import { url as trem } from "@/assets/neuro-treino/objetos/trem.png.asset.json";
import { url as pato } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as rato } from "@/assets/neuro-treino/objetos/rato.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as vaca } from "@/assets/neuro-treino/objetos/vaca.png.asset.json";
import { url as porco } from "@/assets/neuro-treino/objetos/porco.png.asset.json";
import { url as galinha } from "@/assets/neuro-treino/objetos/galinha.png.asset.json";
import { url as ovelha } from "@/assets/neuro-treino/objetos/ovelha.png.asset.json";
import { url as cabra } from "@/assets/neuro-treino/objetos/cabra.png.asset.json";
import { url as pintinho } from "@/assets/neuro-treino/objetos/pintinho.png.asset.json";
import { url as galo } from "@/assets/neuro-treino/objetos/galo.png.asset.json";
import { url as passaro } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as coruja } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as borboleta } from "@/assets/neuro-treino/objetos/borboleta.png.asset.json";
import { url as peixe } from "@/assets/neuro-treino/objetos/peixe.png.asset.json";
import { url as dinossauro } from "@/assets/neuro-treino/objetos/dinossauro.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as sapo } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as raposa } from "@/assets/neuro-treino/objetos/raposa.png.asset.json";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as panda } from "@/assets/neuro-treino/objetos/panda.png.asset.json";
import { url as leao } from "@/assets/neuro-treino/objetos/leao.png.asset.json";
import { url as tigre } from "@/assets/neuro-treino/objetos/tigre.png.asset.json";
import { url as ursinho } from "@/assets/neuro-treino/objetos/ursinho.png.asset.json";
import { url as presente } from "@/assets/neuro-treino/objetos/presente.png.asset.json";
import { url as princesa } from "@/assets/neuro-treino/objetos/princesa.png.asset.json";
import { url as heroi } from "@/assets/neuro-treino/objetos/heroi.png.asset.json";
import { url as robo } from "@/assets/neuro-treino/objetos/robo.png.asset.json";
import { url as diamante } from "@/assets/neuro-treino/objetos/diamante.png.asset.json";
import { url as fogo } from "@/assets/neuro-treino/objetos/fogo.png.asset.json";
import { url as bolo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as asa } from "@/assets/neuro-treino/objetos/asa.png.asset.json";
import { url as morango } from "@/assets/neuro-treino/frutas/morango.png.asset.json";
import { url as uva } from "@/assets/neuro-treino/frutas/uva.png.asset.json";
import { url as cenoura } from "@/assets/neuro-treino/vegetais/cenoura.png.asset.json";
import { url as brocolis } from "@/assets/neuro-treino/vegetais/brocolis.png.asset.json";
import { url as camiseta } from "@/assets/neuro-treino/roupas/camiseta.png.asset.json";
import { url as feliz } from "@/assets/neuro-treino/emocoes/feliz.png.asset.json";
import { url as triste } from "@/assets/neuro-treino/emocoes/triste.png.asset.json";
import { url as bravo } from "@/assets/neuro-treino/emocoes/bravo.png.asset.json";
import { url as surpreso } from "@/assets/neuro-treino/emocoes/surpreso.png.asset.json";
import { url as medo } from "@/assets/neuro-treino/emocoes/medo.png.asset.json";
import { url as sono } from "@/assets/neuro-treino/emocoes/sono.png.asset.json";
import { url as esquiloBrilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";

// ===== Banco premium reutilizado dos hiperfocos (mesmo padrão visual kawaii/Pixar) =====
import { url as hfLeao } from "@/assets/hiperfocos/animais/leao.png.asset.json";
import { url as hfCoruja } from "@/assets/hiperfocos/animais/coruja.png.asset.json";
import { url as hfMacaco } from "@/assets/hiperfocos/animais/macaco.png.asset.json";
import { url as hfElefante } from "@/assets/hiperfocos/animais/elefante.png.asset.json";
import { url as hfTartaruga } from "@/assets/hiperfocos/animais/tartaruga.png.asset.json";
import { url as hfTrex } from "@/assets/hiperfocos/dinossauros/trex.png.asset.json";
import { url as hfTriceratops } from "@/assets/hiperfocos/dinossauros/triceratops.png.asset.json";
import { url as hfRaptor } from "@/assets/hiperfocos/dinossauros/velociraptor.png.asset.json";
import { url as hfBraquio } from "@/assets/hiperfocos/dinossauros/braquiossauro.png.asset.json";
import { url as hfEstegossauro } from "@/assets/hiperfocos/dinossauros/estegossauro.png.asset.json";
import { url as hfLua } from "@/assets/hiperfocos/espaco/lua.png.asset.json";
import { url as hfEstrela } from "@/assets/hiperfocos/espaco/estrela.png.asset.json";
import { url as hfPlaneta } from "@/assets/hiperfocos/espaco/planeta.png.asset.json";
import { url as hfFoguete } from "@/assets/hiperfocos/espaco/foguete.png.asset.json";
import { url as hfAstronauta } from "@/assets/hiperfocos/espaco/astronauta.png.asset.json";
import { url as hfCometa } from "@/assets/hiperfocos/espaco/cometa.png.asset.json";
import { url as hfVaca } from "@/assets/hiperfocos/fazendinha/vaquinha.png.asset.json";
import { url as hfPorco } from "@/assets/hiperfocos/fazendinha/porquinho.png.asset.json";
import { url as hfGalinha } from "@/assets/hiperfocos/fazendinha/galinha.png.asset.json";
import { url as hfOvelha } from "@/assets/hiperfocos/fazendinha/ovelha.png.asset.json";
import { url as hfCavalo } from "@/assets/hiperfocos/fazendinha/cavalo.png.asset.json";
import { url as hfHeroi } from "@/assets/hiperfocos/herois/heroi.png.asset.json";
import { url as hfHeroina } from "@/assets/hiperfocos/herois/heroina.png.asset.json";
import { url as hfRoboHeroi } from "@/assets/hiperfocos/herois/robo.png.asset.json";
import { url as hfPrincesa } from "@/assets/hiperfocos/princesas/princesa.png.asset.json";
import { url as hfCastelo } from "@/assets/hiperfocos/princesas/castelo.png.asset.json";
import { url as hfCoroa } from "@/assets/hiperfocos/princesas/coroa.png.asset.json";
import { url as hfFada } from "@/assets/hiperfocos/princesas/fada.png.asset.json";
import { url as hfUnicornio } from "@/assets/hiperfocos/princesas/unicornio.png.asset.json";
import { url as hfBailarina } from "@/assets/hiperfocos/bailarinas/bailarina.png.asset.json";
import { url as hfCisne } from "@/assets/hiperfocos/bailarinas/cisne.png.asset.json";
import { url as hfSereia } from "@/assets/hiperfocos/sereias/sereia.png.asset.json";
import { url as hfPeixinho } from "@/assets/hiperfocos/sereias/peixinho.png.asset.json";
import { url as hfConcha } from "@/assets/hiperfocos/sereias/concha.png.asset.json";
import { url as hfCavaloMarinho } from "@/assets/hiperfocos/sereias/cavalo-marinho.png.asset.json";
import { url as hfRoboBot } from "@/assets/hiperfocos/robos/robo.png.asset.json";
import { url as hfDrone } from "@/assets/hiperfocos/robos/drone.png.asset.json";
import { url as hfTrem } from "@/assets/hiperfocos/trens/locomotiva.png.asset.json";
import { url as hfVagao } from "@/assets/hiperfocos/trens/vagao.png.asset.json";
import { url as hfCaminhao } from "@/assets/hiperfocos/carros/caminhao.png.asset.json";
import { url as hfMoto } from "@/assets/hiperfocos/carros/moto.png.asset.json";
import { url as hfOnibus } from "@/assets/hiperfocos/carros/onibus.png.asset.json";
import { url as hfViolao } from "@/assets/hiperfocos/musica/violao.png.asset.json";
import { url as hfNota } from "@/assets/hiperfocos/musica/nota-musical.png.asset.json";
import { url as hfPincel } from "@/assets/hiperfocos/arte/pincel.png.asset.json";
import { url as hfCreeper } from "@/assets/hiperfocos/minecraft/creeper.png.asset.json";
import { url as hfSteve } from "@/assets/hiperfocos/minecraft/steve.png.asset.json";
import { url as hfAlex } from "@/assets/hiperfocos/minecraft/alex.png.asset.json";

// Sentidos (Ciências 1º Ano)
import { url as sOlho } from "@/assets/neuro-treino/sentidos/olho.png.asset.json";
import { url as sOuvido } from "@/assets/neuro-treino/sentidos/ouvido.png.asset.json";
import { url as sNariz } from "@/assets/neuro-treino/sentidos/nariz.png.asset.json";
import { url as sLingua } from "@/assets/neuro-treino/sentidos/lingua.png.asset.json";
import { url as sMao } from "@/assets/neuro-treino/sentidos/mao.png.asset.json";


export const OBJETO_IMG: Record<string, string> = {
  BRILHA: esquiloBrilha,
  ESQUILO: esquiloBrilha,
  "ESQUILO BRILHA": esquiloBrilha,
  BOLA: bola,
  GATO: gato,
  MAÇÃ: maca,
  MAÇÃS: maca,
  MAÇA: maca,
  MAÇAS: maca,
  MACA: maca,
  MACAS: maca,
  ÁRVORE: arvore,
  ARVORE: arvore,
  CASA: casa,
  ABELHA: abelha,
  FLOR: flor,
  CARRO: carro,
  OUTRO: carro,
  CAMINHAO: hfCaminhao,
  CAMINHÃO: hfCaminhao,
  MOTO: hfMoto,
  ONIBUS: hfOnibus,
  ÔNIBUS: hfOnibus,
  TREM: hfTrem,
  LOCOMOTIVA: hfTrem,
  VAGAO: hfVagao,
  VAGÃO: hfVagao,
  ASA: asa,
  BOLO: bolo,
  PATO: pato,
  CACHORRO: cachorro,
  DOG: cachorro,
  LUA: hfLua,
  ESTRELA: hfEstrela,
  PLANETA: hfPlaneta,
  FOGUETE: hfFoguete,
  ASTRONAUTA: hfAstronauta,
  COMETA: hfCometa,
  SOL: sol,
  CHUVA: chuva,
  RATO: rato,
  BANANA: banana,
  VACA: hfVaca,
  VAQUINHA: hfVaca,
  PORCO: hfPorco,
  PORQUINHO: hfPorco,
  GALINHA: hfGalinha,
  OVELHA: hfOvelha,
  CAVALO: hfCavalo,
  CABRA: cabra,
  PINTINHO: pintinho,
  GALO: galo,
  PASSARINHO: passaro,
  PASSARINHOS: passaro,
  PÁSSARO: passaro,
  PASSARO: passaro,
  CORUJA: hfCoruja,
  BIKE: carro,
  AVIÃO: hfFoguete,
  AVIAO: hfFoguete,
  BORBOLETA: borboleta,
  PEIXE: hfPeixinho,
  PEIXINHO: hfPeixinho,
  DINOSSAURO: hfTrex,
  "T-REX": hfTrex,
  TREX: hfTrex,
  RAPTOR: hfRaptor,
  VELOCIRAPTOR: hfRaptor,
  TRICERATOPS: hfTriceratops,
  BRAQUIOSSAURO: hfBraquio,
  ESTEGOSSAURO: hfEstegossauro,
  PTERODÁCTILO: passaro,
  CORAÇÃO: coracao,
  CORACAO: coracao,
  SAPO: sapo,
  RAPOSA: raposa,
  COELHO: coelho,
  PANDA: panda,
  LEÃO: hfLeao,
  LEAO: hfLeao,
  TIGRE: tigre,
  MACACO: hfMacaco,
  ELEFANTE: hfElefante,
  TARTARUGA: hfTartaruga,
  URSINHO: ursinho,
  URSO: ursinho,
  PRESENTE: presente,
  PRINCESA: hfPrincesa,
  CASTELO: hfCastelo,
  COROA: hfCoroa,
  FADA: hfFada,
  UNICORNIO: hfUnicornio,
  UNICÓRNIO: hfUnicornio,
  BAILARINA: hfBailarina,
  CISNE: hfCisne,
  SEREIA: hfSereia,
  CONCHA: hfConcha,
  "CAVALO-MARINHO": hfCavaloMarinho,
  HEROI: hfHeroi,
  HERÓI: hfHeroi,
  HEROINA: hfHeroina,
  HEROÍNA: hfHeroina,
  ROBO: hfRoboBot,
  ROBÔ: hfRoboBot,
  DRONE: hfDrone,
  VIOLAO: hfViolao,
  VIOLÃO: hfViolao,
  "NOTA MUSICAL": hfNota,
  PINCEL: hfPincel,
  CREEPER: hfCreeper,
  STEVE: hfSteve,
  ALEX: hfAlex,
  DIAMANTE: diamante,
  FOGO: fogo,
  TOCHA: fogo,
  VULCÃO: fogo,
  VULCAO: fogo,
  MORANGO: morango,
  UVA: uva,
  CENOURA: cenoura,
  BROCOLIS: brocolis,
  BRÓCOLIS: brocolis,
  CAMISETA: camiseta,
  ROUPA: camiseta,
  FELIZ: feliz,
  TRISTE: triste,
  BRAVO: bravo,
  SURPRESO: surpreso,
  MEDO: medo,
  SONO: sono,
  ZUMBI: hfCreeper,
  // Sentidos
  OLHO: sOlho,
  OLHOS: sOlho,
  VISAO: sOlho,
  VISÃO: sOlho,
  OUVIDO: sOuvido,
  ORELHA: sOuvido,
  AUDIÇÃO: sOuvido,
  AUDICAO: sOuvido,
  NARIZ: sNariz,
  OLFATO: sNariz,
  LINGUA: sLingua,
  LÍNGUA: sLingua,
  PALADAR: sLingua,
  MAO: sMao,
  MÃO: sMao,
  TATO: sMao,
};


// Mapeia emojis para a mesma biblioteca de ilustrações premium
export const EMOJI_IMG: Record<string, string> = {
  "⚽": bola,
  "🏀": bola,
  "🐱": gato,
  "🐈": gato,
  "🍎": maca,
  "🍏": maca,
  "🌳": arvore,
  "🌲": arvore,
  "🌴": arvore,
  "🏠": casa,
  "🏡": casa,
  "🏘️": casa,
  "🐝": abelha,
  "🌸": flor,
  "🌺": flor,
  "🌷": flor,
  "🌼": flor,
  "🌻": flor,
  "🚗": carro,
  "🚙": carro,
  "🚲": carro,
  "✈️": hfFoguete,
  "🚌": hfOnibus,
  "🏍️": hfMoto,
  "🚑": hfCaminhao,
  "🚛": hfCaminhao,
  "🚚": hfCaminhao,
  "🚂": hfTrem,
  "🚆": hfTrem,
  "🚃": hfVagao,
  "🦆": pato,
  "🐶": cachorro,
  "🐕": cachorro,
  "🐺": cachorro,
  "🌙": hfLua,
  "⭐": hfEstrela,
  "🌟": hfEstrela,
  "✨": hfEstrela,
  "☀️": sol,
  "🌞": sol,
  "🌧️": chuva,
  "🌧": chuva,
  "☁️": chuva,
  "💧": chuva,
  "🌊": chuva,
  "❄️": chuva,
  "🧊": chuva,
  "⛄": chuva,
  "🐀": rato,
  "🐭": rato,
  "🍌": banana,
  "🍋": banana,
  "🐮": hfVaca,
  "🐄": hfVaca,
  "🐷": hfPorco,
  "🐖": hfPorco,
  "🐔": hfGalinha,
  "🐑": hfOvelha,
  "🐐": cabra,
  "🐴": hfCavalo,
  "🐎": hfCavalo,
  "🐥": pintinho,
  "🐤": pintinho,
  "🐓": galo,
  "🐦": passaro,
  "🦅": passaro,
  "🦉": hfCoruja,
  "🦋": borboleta,
  "🐠": hfPeixinho,
  "🐟": hfPeixinho,
  "🐙": hfPeixinho,
  "🦀": hfPeixinho,
  "🐚": hfConcha,
  "🦄": hfUnicornio,
  "🧜": hfSereia,
  "🧜‍♀️": hfSereia,
  "🧚": hfFada,
  "🩰": hfBailarina,
  "🦢": hfCisne,
  "🐢": hfTartaruga,
  "🐘": hfElefante,
  "🦖": hfTrex,
  "🦕": hfBraquio,
  "❤️": coracao,
  "💔": coracao,
  "🤗": coracao,
  "🐸": sapo,
  "🦊": raposa,
  "🐰": coelho,
  "🐼": panda,
  "🐨": panda,
  "🐵": hfMacaco,
  "🐒": hfMacaco,
  "🦁": hfLeao,
  "🐯": tigre,
  "🧸": ursinho,
  "🎁": presente,
  "🎀": presente,
  "👸": hfPrincesa,
  "🤴": hfHeroi,
  "👑": hfCoroa,
  "🏰": hfCastelo,
  "🦸": hfHeroi,
  "🦸‍♂️": hfHeroi,
  "🦸‍♀️": hfHeroina,
  "🤖": hfRoboBot,
  "💎": diamante,
  "🔥": fogo,
  "🌋": fogo,
  "🕯️": fogo,
  "🎸": hfViolao,
  "🎵": hfNota,
  "🎶": hfNota,
  "🎨": hfPincel,
  "🍓": morango,
  "🍇": uva,
  "🥕": cenoura,
  "🥦": brocolis,
  "🥬": brocolis,
  "🥒": brocolis,
  "👕": camiseta,
  "👖": camiseta,
  "🧦": camiseta,
  "👗": camiseta,
  "😄": feliz,
  "😀": feliz,
  "😊": feliz,
  "🙂": feliz,
  "😋": feliz,
  "😢": triste,
  "😭": triste,
  "🥺": triste,
  "😡": bravo,
  "😠": bravo,
  "🤬": bravo,
  "😲": surpreso,
  "😮": surpreso,
  "😯": surpreso,
  "😨": medo,
  "😱": medo,
  "😰": medo,
  "😴": sono,
  "💤": sono,
  "🧟": hfCreeper,
  "🟩": hfCreeper,
  "⛏️": diamante,
  "🗡️": diamante,
  "🛡️": diamante,
  "⚔️": diamante,
  "🥚": hfGalinha,
  "🦴": ursinho,
  "🌱": arvore,
  "🌿": arvore,
  "🍄": flor,
  "🐛": abelha,
  "🐞": abelha,
  "🦗": abelha,
  "🐌": abelha,
  "🪐": hfPlaneta,
  "☄️": hfCometa,
  "👽": hfRoboBot,
  "🚀": hfFoguete,
  "🧑‍🚀": hfAstronauta,
  "👨‍🚀": hfAstronauta,
  "👩‍🚀": hfAstronauta,
  "⛵": carro,
  "🛏️": casa,
  "🪑": casa,
  "📚": casa,
  "🐿️": raposa,
  "⛱️": sol,
  "🎈": presente,
  "💨": chuva,
  "🎭": presente,
  "⚡": fogo,
  "⚖️": diamante,
  "👏": feliz,
  "😤": bravo,
  "🤧": medo,
  "🚪": casa,
  "🦶": ursinho,
  "🍽️": maca,
  "🏃": heroi,
  "👋": feliz,
  "🌈": estrela,
  "🌶️": fogo,
  "🎲": presente,
  "🎯": estrela,
  "🪽": passaro,
};

/** Retorna a imagem do objeto pelo nome, ou undefined se não houver. */
export function objetoImg(nome?: string): string | undefined {
  if (!nome) return undefined;
  // remove emoji prefix se houver ("😄 Feliz" → "Feliz")
  const limpo = nome
    .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}\uFE0F]/gu, "")
    .trim();
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
