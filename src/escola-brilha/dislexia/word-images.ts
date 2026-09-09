/**
 * Mapa central palavra → imagem para a Trilha da Dislexia.
 * Combina banco de hiperfocos + imagens específicas criadas em src/assets/dislexia/palavras.
 * Palavras não mapeadas (pseudo-palavras, letras isoladas, sílabas soltas)
 * renderizam apenas o texto grande no Player — comportamento intencional.
 */

// Banco de hiperfocos (reaproveitado)
import { url as vaca } from "@/assets/hiperfocos/fazendinha/vaquinha.png.asset.json";
import { url as cavalo } from "@/assets/hiperfocos/fazendinha/cavalo.png.asset.json";
import { url as galinha } from "@/assets/hiperfocos/fazendinha/galinha.png.asset.json";
import { url as ovelha } from "@/assets/hiperfocos/fazendinha/ovelha.png.asset.json";
import { url as porco } from "@/assets/hiperfocos/fazendinha/porquinho.png.asset.json";
import { url as macaco } from "@/assets/hiperfocos/animais/macaco.png.asset.json";
import { url as leao } from "@/assets/hiperfocos/animais/leao.png.asset.json";
import { url as elefante } from "@/assets/hiperfocos/animais/elefante.png.asset.json";
import { url as coruja } from "@/assets/hiperfocos/animais/coruja.png.asset.json";
import { url as tartaruga } from "@/assets/hiperfocos/animais/tartaruga.png.asset.json";
import { url as foguete } from "@/assets/hiperfocos/espaco/foguete.png.asset.json";
import { url as estrela } from "@/assets/hiperfocos/espaco/estrela.png.asset.json";
import { url as lua } from "@/assets/hiperfocos/espaco/lua.png.asset.json";
import { url as planeta } from "@/assets/hiperfocos/espaco/planeta.png.asset.json";
import { url as piano } from "@/assets/hiperfocos/musica/piano.png.asset.json";
import { url as violao } from "@/assets/hiperfocos/musica/violao.png.asset.json";
import { url as pincel } from "@/assets/hiperfocos/arte/pincel.png.asset.json";
import { url as tinta } from "@/assets/hiperfocos/arte/tinta.png.asset.json";
import { url as carro } from "@/assets/hiperfocos/carros/carro-corrida.png.asset.json";
import { url as caminhao } from "@/assets/hiperfocos/carros/caminhao.png.asset.json";
import { url as moto } from "@/assets/hiperfocos/carros/moto.png.asset.json";
import { url as fada } from "@/assets/hiperfocos/princesas/fada.png.asset.json";
import { url as castelo } from "@/assets/hiperfocos/princesas/castelo.png.asset.json";
import { url as unicornio } from "@/assets/hiperfocos/princesas/unicornio.png.asset.json";
import { url as coroa } from "@/assets/hiperfocos/princesas/coroa.png.asset.json";

// Imagens específicas da trilha (geradas no estilo do banco)
import { url as bola } from "@/assets/dislexia/palavras/bola.png.asset.json";
import { url as casa } from "@/assets/dislexia/palavras/casa.png.asset.json";
import { url as faca } from "@/assets/dislexia/palavras/faca.png.asset.json";
import { url as gato } from "@/assets/dislexia/palavras/gato.png.asset.json";
import { url as pato } from "@/assets/dislexia/palavras/pato.png.asset.json";
import { url as pao } from "@/assets/dislexia/palavras/pao.png.asset.json";
import { url as sapo } from "@/assets/dislexia/palavras/sapo.png.asset.json";
import { url as sol } from "@/assets/dislexia/palavras/sol.png.asset.json";
import { url as vela } from "@/assets/dislexia/palavras/vela.png.asset.json";
import { url as abacaxi } from "@/assets/dislexia/palavras/abacaxi.png.asset.json";
import { url as abelha } from "@/assets/dislexia/palavras/abelha.png.asset.json";
import { url as anel } from "@/assets/dislexia/palavras/anel.png.asset.json";
import { url as aviao } from "@/assets/dislexia/palavras/aviao.png.asset.json";
import { url as oculos } from "@/assets/dislexia/palavras/oculos.png.asset.json";
import { url as ovo } from "@/assets/dislexia/palavras/ovo.png.asset.json";
import { url as urso } from "@/assets/dislexia/palavras/urso.png.asset.json";
import { url as uva } from "@/assets/dislexia/palavras/uva.png.asset.json";
import { url as livro } from "@/assets/dislexia/palavras/livro.png.asset.json";
import { url as mao } from "@/assets/dislexia/palavras/mao.png.asset.json";
import { url as nariz } from "@/assets/dislexia/palavras/nariz.png.asset.json";
import { url as navio } from "@/assets/dislexia/palavras/navio.png.asset.json";
import { url as rato } from "@/assets/dislexia/palavras/rato.png.asset.json";
import { url as rosa } from "@/assets/dislexia/palavras/rosa.png.asset.json";
import { url as sapato } from "@/assets/dislexia/palavras/sapato.png.asset.json";
import { url as zebra } from "@/assets/dislexia/palavras/zebra.png.asset.json";
import { url as copo } from "@/assets/dislexia/palavras/copo.png.asset.json";
import { url as mesa } from "@/assets/dislexia/palavras/mesa.png.asset.json";
import { url as panela } from "@/assets/dislexia/palavras/panela.png.asset.json";
import { url as porta } from "@/assets/dislexia/palavras/porta.png.asset.json";
import { url as sino } from "@/assets/dislexia/palavras/sino.png.asset.json";
import { url as sorvete } from "@/assets/dislexia/palavras/sorvete.png.asset.json";
import { url as ima } from "@/assets/dislexia/palavras/ima.png.asset.json";
import { url as pe } from "@/assets/dislexia/palavras/pe.png.asset.json";
import { url as foca } from "@/assets/dislexia/palavras/foca.png.asset.json";
import { url as escada } from "@/assets/dislexia/palavras/escada.png.asset.json";
import { url as orelha } from "@/assets/dislexia/palavras/orelha.png.asset.json";
import { url as unha } from "@/assets/dislexia/palavras/unha.png.asset.json";
import { url as urubu } from "@/assets/dislexia/palavras/urubu.png.asset.json";
import { url as mala } from "@/assets/dislexia/palavras/mala.png.asset.json";
import { url as nuvem } from "@/assets/dislexia/palavras/nuvem.png.asset.json";
import { url as lagarta } from "@/assets/dislexia/palavras/lagarta.png.asset.json";
import { url as ilha } from "@/assets/dislexia/palavras/ilha.png.asset.json";
import { url as iguana } from "@/assets/dislexia/palavras/iguana.png.asset.json";
import { url as igreja } from "@/assets/dislexia/palavras/igreja.png.asset.json";
import { url as rio } from "@/assets/dislexia/palavras/rio.png.asset.json";
import { url as borda } from "@/assets/dislexia/palavras/borda.png.asset.json";
import mar from "@/assets/dislexia/palavras/mar.png";
import mel from "@/assets/dislexia/palavras/mel.png";
import luz from "@/assets/dislexia/palavras/luz.png";
import salImg from "@/assets/dislexia/palavras/sal.png";
import gol from "@/assets/dislexia/palavras/gol.png";
import onibus from "@/assets/dislexia/palavras/onibus.png";
import flor from "@/assets/dislexia/palavras/flor.png";
import tucano from "@/assets/dislexia/palavras/tucano.png";
import chave from "@/assets/dislexia/palavras/chave.png";
import chuva from "@/assets/dislexia/palavras/chuva.png";
import palhaco from "@/assets/dislexia/palavras/palhaco.png";
import coelho from "@/assets/dislexia/palavras/coelho.png";
import cachorro from "@/assets/dislexia/palavras/cachorro.png";
import prato from "@/assets/dislexia/palavras/prato.png";
import arvore from "@/assets/dislexia/palavras/arvore.png";
import garfo from "@/assets/dislexia/palavras/garfo.png";


// Normaliza (remove acentos, uppercase) — mesmo raciocínio usado no TTS.
function normalizar(palavra: string): string {
  return palavra
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .trim();
}

const MAPA: Record<string, string> = {
  // hiperfocos
  VACA: vaca,
  CAVALO: cavalo,
  GALINHA: galinha,
  OVELHA: ovelha,
  PORCO: porco,
  MACACO: macaco,
  LEAO: leao,
  ELEFANTE: elefante,
  CORUJA: coruja,
  TARTARUGA: tartaruga,
  FOGUETE: foguete,
  ESTRELA: estrela,
  LUA: lua,
  PLANETA: planeta,
  PIANO: piano,
  VIOLAO: violao,
  PINCEL: pincel,
  TINTA: tinta,
  CARRO: carro,
  CAMINHAO: caminhao,
  MOTO: moto,
  FADA: fada,
  CASTELO: castelo,
  UNICORNIO: unicornio,
  COROA: coroa,
  // específicas
  BOLA: bola,
  CASA: casa,
  FACA: faca,
  GATO: gato,
  PATO: pato,
  PAO: pao,
  SAPO: sapo,
  SOL: sol,
  VELA: vela,
  ABACAXI: abacaxi,
  ABELHA: abelha,
  ANEL: anel,
  AVIAO: aviao,
  OCULOS: oculos,
  OVO: ovo,
  URSO: urso,
  UVA: uva,
  LIVRO: livro,
  MAO: mao,
  NARIZ: nariz,
  NAVIO: navio,
  RATO: rato,
  ROSA: rosa,
  SAPATO: sapato,
  ZEBRA: zebra,
  COPO: copo,
  MESA: mesa,
  PANELA: panela,
  PORTA: porta,
  SINO: sino,
  SORVETE: sorvete,
  IMA: ima,
  PE: pe,
  FOCA: foca,
  ESCADA: escada,
  ORELHA: orelha,
  UNHA: unha,
  URUBU: urubu,
  MALA: mala,
  NUVEM: nuvem,
  LAGARTA: lagarta,
  ILHA: ilha,
  IGUANA: iguana,
  IGREJA: igreja,
  RIO: rio,
  BORDA: borda,
  MAR: mar,
  MEL: mel,
  LUZ: luz,
  SAL: salImg,
  GOL: gol,
  ONIBUS: onibus,
  FLOR: flor,
  TUCANO: tucano,
  CHAVE: chave,
  CHUVA: chuva,
  "PALHAÇO": palhaco,
  PALHACO: palhaco,
  COELHO: coelho,
  CACHORRO: cachorro,
  PRATO: prato,
  ARVORE: arvore,
  GARFO: garfo,
};

/** Retorna a URL da imagem correspondente à palavra, se existir no banco. */
export function imagemPalavra(palavra: string | undefined | null): string | undefined {
  if (!palavra) return undefined;
  return MAPA[normalizar(palavra)];
}
