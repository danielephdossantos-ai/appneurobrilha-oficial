// Ilustrações premium dos Hiperfocos (mesmo padrão 2D infantil moderno).
import animais from "@/assets/neuro-treino/hiperfocos/animais.png";
import dinossauros from "@/assets/neuro-treino/hiperfocos/dinossauros.png";
import espaco from "@/assets/neuro-treino/hiperfocos/espaco.png";
import veiculos from "@/assets/neuro-treino/hiperfocos/veiculos.png";
import princesas from "@/assets/neuro-treino/hiperfocos/princesas.png";
import superHerois from "@/assets/neuro-treino/hiperfocos/super-herois.png";
import robos from "@/assets/neuro-treino/hiperfocos/robos.png";
import musica from "@/assets/neuro-treino/hiperfocos/musica.png";
import minecraft from "@/assets/neuro-treino/hiperfocos/minecraft.png";
import carros from "@/assets/neuro-treino/hiperfocos/carros.png";
import trens from "@/assets/neuro-treino/hiperfocos/trens.png";
import arte from "@/assets/neuro-treino/hiperfocos/arte.png";
import fazendinha from "@/assets/neuro-treino/hiperfocos/fazendinha.png";
import outros from "@/assets/neuro-treino/hiperfocos/outros.png";

export const HIPERFOCO_IMG: Record<string, string> = {
  animais,
  dinossauros,
  espaco,
  "espaço": espaco,
  veiculos,
  "veículos": veiculos,
  princesas,
  "super-herois": superHerois,
  "super-heróis": superHerois,
  herois: superHerois,
  "heróis": superHerois,
  robos,
  "robôs": robos,
  musica,
  "música": musica,
  minecraft,
  carros,
  trens,
  arte,
  fazendinha,
  outros,
  custom: outros,
};

export function hiperfocoImg(id?: string): string | undefined {
  if (!id) return undefined;
  return HIPERFOCO_IMG[id.toLowerCase()];
}
