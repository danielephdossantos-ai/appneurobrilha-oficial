// Registro de imagens premium para elementos de hiperfoco.
import steve from "@/assets/hiperfocos/minecraft/steve.png";
import alex from "@/assets/hiperfocos/minecraft/alex.png";
import creeper from "@/assets/hiperfocos/minecraft/creeper.png";
import aldeao from "@/assets/hiperfocos/minecraft/aldeao.png";
import lhama from "@/assets/hiperfocos/minecraft/lhama.png";
import mcGalinha from "@/assets/hiperfocos/minecraft/galinha.png";

import trex from "@/assets/hiperfocos/dinossauros/trex.png";
import triceratops from "@/assets/hiperfocos/dinossauros/triceratops.png";
import velociraptor from "@/assets/hiperfocos/dinossauros/velociraptor.png";
import estegossauro from "@/assets/hiperfocos/dinossauros/estegossauro.png";
import braquiossauro from "@/assets/hiperfocos/dinossauros/braquiossauro.png";

import heroi from "@/assets/hiperfocos/herois/heroi.png";
import heroina from "@/assets/hiperfocos/herois/heroina.png";
import roboHeroi from "@/assets/hiperfocos/herois/robo.png";
import capita from "@/assets/hiperfocos/herois/capita.png";
import justiceiro from "@/assets/hiperfocos/herois/justiceiro.png";

import leao from "@/assets/hiperfocos/animais/leao.png";
import elefante from "@/assets/hiperfocos/animais/elefante.png";
import coruja from "@/assets/hiperfocos/animais/coruja.png";
import macaco from "@/assets/hiperfocos/animais/macaco.png";
import tartaruga from "@/assets/hiperfocos/animais/tartaruga.png";

import carroCorrida from "@/assets/hiperfocos/carros/carro-corrida.png";
import caminhao from "@/assets/hiperfocos/carros/caminhao.png";
import trator from "@/assets/hiperfocos/carros/trator.png";
import moto from "@/assets/hiperfocos/carros/moto.png";
import onibus from "@/assets/hiperfocos/carros/onibus.png";

import foguete from "@/assets/hiperfocos/espaco/foguete.png";
import astronauta from "@/assets/hiperfocos/espaco/astronauta.png";
import planeta from "@/assets/hiperfocos/espaco/planeta.png";
import estrela from "@/assets/hiperfocos/espaco/estrela.png";
import luaImg from "@/assets/hiperfocos/espaco/lua.png";
import cometa from "@/assets/hiperfocos/espaco/cometa.png";

import princesa from "@/assets/hiperfocos/princesas/princesa.png";
import castelo from "@/assets/hiperfocos/princesas/castelo.png";
import coroa from "@/assets/hiperfocos/princesas/coroa.png";
import unicornio from "@/assets/hiperfocos/princesas/unicornio.png";
import fada from "@/assets/hiperfocos/princesas/fada.png";

import galinha from "@/assets/hiperfocos/fazendinha/galinha.png";
import vaquinha from "@/assets/hiperfocos/fazendinha/vaquinha.png";
import porquinho from "@/assets/hiperfocos/fazendinha/porquinho.png";
import cavalo from "@/assets/hiperfocos/fazendinha/cavalo.png";
import ovelha from "@/assets/hiperfocos/fazendinha/ovelha.png";

import bailarina from "@/assets/hiperfocos/bailarinas/bailarina.png";
import sapatilha from "@/assets/hiperfocos/bailarinas/sapatilha.png";
import tutu from "@/assets/hiperfocos/bailarinas/tutu.png";
import caixinhaMusica from "@/assets/hiperfocos/bailarinas/caixinha-musica.png";
import cisne from "@/assets/hiperfocos/bailarinas/cisne.png";

import sereia from "@/assets/hiperfocos/sereias/sereia.png";
import concha from "@/assets/hiperfocos/sereias/concha.png";
import cavaloMarinho from "@/assets/hiperfocos/sereias/cavalo-marinho.png";
import peixinho from "@/assets/hiperfocos/sereias/peixinho.png";
import perola from "@/assets/hiperfocos/sereias/perola.png";

import robo from "@/assets/hiperfocos/robos/robo.png";
import engrenagem from "@/assets/hiperfocos/robos/engrenagem.png";
import fogueteRobo from "@/assets/hiperfocos/robos/foguete-robo.png";
import drone from "@/assets/hiperfocos/robos/drone.png";
import astronautaBot from "@/assets/hiperfocos/robos/astronauta-bot.png";

import violao from "@/assets/hiperfocos/musica/violao.png";
import microfone from "@/assets/hiperfocos/musica/microfone.png";
import bateria from "@/assets/hiperfocos/musica/bateria.png";
import piano from "@/assets/hiperfocos/musica/piano.png";
import notaMusical from "@/assets/hiperfocos/musica/nota-musical.png";

import pincel from "@/assets/hiperfocos/arte/pincel.png";
import tinta from "@/assets/hiperfocos/arte/tinta.png";
import cavalete from "@/assets/hiperfocos/arte/cavalete.png";
import lapisCor from "@/assets/hiperfocos/arte/lapis-cor.png";
import paleta from "@/assets/hiperfocos/arte/paleta.png";

import locomotiva from "@/assets/hiperfocos/trens/locomotiva.png";
import vagao from "@/assets/hiperfocos/trens/vagao.png";
import trilho from "@/assets/hiperfocos/trens/trilho.png";
import estacao from "@/assets/hiperfocos/trens/estacao.png";
import maquinista from "@/assets/hiperfocos/trens/maquinista.png";

import pipGen from "@/assets/hiperfocos/sem-hiperfoco/pip-gen.png";

/** Normaliza chave: maiúsculas + sem acentos + espaços/hífens unificados. */
function norm(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .replace(/[\s_-]+/g, " ")
    .trim();
}

const RAW: Record<string, string> = {
  // Minecraft
  STEVE: steve,
  ALEX: alex,
  CREEPER: creeper,
  ALDEAO: aldeao,
  LHAMA: lhama,
  "GALINHA MC": mcGalinha,

  // Dinossauros
  "T REX": trex,
  TREX: trex,
  TRICERATOPS: triceratops,
  VELOCIRAPTOR: velociraptor,
  ESTEGOSSAURO: estegossauro,
  BRAQUIOSSAURO: braquiossauro,

  // Heróis
  "SUPER HEROI": heroi,
  HEROI: heroi,
  HEROINA: heroina,
  "ROBO AMIGO": roboHeroi,
  CAPITA: capita,
  JUSTICEIRO: justiceiro,

  // Animais
  LEAO: leao,
  ELEFANTE: elefante,
  CORUJA: coruja,
  MACACO: macaco,
  TARTARUGA: tartaruga,

  // Carros
  "CARRO DE CORRIDA": carroCorrida,
  CAMINHAO: caminhao,
  TRATOR: trator,
  MOTO: moto,
  ONIBUS: onibus,

  // Espaço
  FOGUETE: foguete,
  ASTRONAUTA: astronauta,
  PLANETA: planeta,
  ESTRELA: estrela,
  LUA: luaImg,
  COMETA: cometa,

  // Princesas
  PRINCESA: princesa,
  CASTELO: castelo,
  COROA: coroa,
  UNICORNIO: unicornio,
  FADA: fada,

  // Fazendinha
  GALINHA: galinha,
  VAQUINHA: vaquinha,
  PORQUINHO: porquinho,
  CAVALO: cavalo,
  OVELHA: ovelha,

  // Bailarinas
  BAILARINA: bailarina,
  SAPATILHA: sapatilha,
  TUTU: tutu,
  "CAIXINHA DE MUSICA": caixinhaMusica,
  CISNE: cisne,

  // Sereias
  SEREIA: sereia,
  CONCHA: concha,
  "CAVALO MARINHO": cavaloMarinho,
  PEIXINHO: peixinho,
  PEROLA: perola,

  // Robôs
  ROBO: robo,
  ENGRENAGEM: engrenagem,
  "FOGUETE ROBO": fogueteRobo,
  DRONE: drone,
  "ASTRONAUTA BOT": astronautaBot,

  // Música
  VIOLAO: violao,
  MICROFONE: microfone,
  BATERIA: bateria,
  PIANO: piano,
  "NOTA MUSICAL": notaMusical,

  // Arte
  PINCEL: pincel,
  TINTA: tinta,
  CAVALETE: cavalete,
  "LAPIS DE COR": lapisCor,
  PALETA: paleta,

  // Trens
  LOCOMOTIVA: locomotiva,
  VAGAO: vagao,
  TRILHO: trilho,
  ESTACAO: estacao,
  MAQUINISTA: maquinista,

  // Fallback
  PIP: pipGen,
};

export const ELEMENTO_IMG: Record<string, string> = Object.fromEntries(
  Object.entries(RAW).map(([k, v]) => [norm(k), v]),
);

export function getElementoImg(nome: string): string | undefined {
  return ELEMENTO_IMG[norm(nome)] || ELEMENTO_IMG["PIP"];
}
