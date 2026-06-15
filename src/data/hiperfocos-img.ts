// Registro de imagens premium para elementos de hiperfoco.
import steve from "@/assets/hiperfocos/minecraft/steve.png";
import alex from "@/assets/hiperfocos/minecraft/alex.png";
import creeper from "@/assets/hiperfocos/minecraft/creeper.png";

import trex from "@/assets/hiperfocos/dinossauros/trex.png";
import triceratops from "@/assets/hiperfocos/dinossauros/triceratops.png";
import velociraptor from "@/assets/hiperfocos/dinossauros/velociraptor.png";

import heroi from "@/assets/hiperfocos/herois/heroi.png";
import heroina from "@/assets/hiperfocos/herois/heroina.png";
import robo from "@/assets/hiperfocos/herois/robo.png";

import leao from "@/assets/hiperfocos/animais/leao.png";
import elefante from "@/assets/hiperfocos/animais/elefante.png";
import coruja from "@/assets/hiperfocos/animais/coruja.png";

import carroCorrida from "@/assets/hiperfocos/carros/carro-corrida.png";
import caminhao from "@/assets/hiperfocos/carros/caminhao.png";
import trator from "@/assets/hiperfocos/carros/trator.png";

import pipGen from "@/assets/hiperfocos/sem-hiperfoco/pip-gen.png";

export const ELEMENTO_IMG: Record<string, string> = {
  // Minecraft
  STEVE: steve,
  ALEX: alex,
  CREEPER: creeper,

  // Dinossauros
  "T-REX": trex,
  TRICERÁTOPS: triceratops,
  VELOCIRAPTOR: velociraptor,

  // Heróis
  "SUPER-HERÓI": heroi,
  HEROÍNA: heroina,
  "ROBÔ-AMIGO": robo,

  // Animais
  LEÃO: leao,
  ELEFANTE: elefante,
  CORUJA: coruja,

  // Carros
  "CARRO DE CORRIDA": carroCorrida,
  CAMINHÃO: caminhao,
  TRATOR: trator,

  // Fallback
  PIP: pipGen,
};

export function getElementoImg(nome: string): string | undefined {
  return ELEMENTO_IMG[nome.toUpperCase()] || ELEMENTO_IMG["PIP"];
}
