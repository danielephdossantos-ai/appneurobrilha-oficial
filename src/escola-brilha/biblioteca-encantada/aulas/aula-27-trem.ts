/**
 * Aula 27 — "TREM"
 * Introduz TREM e VAGÃO. Onomatopeia PIUÍ.
 */
import type { AulaBE } from "../types";
import { url as trem } from "@/assets/hiperfocos/trens/locomotiva.png.asset.json";
import { url as vagao } from "@/assets/hiperfocos/trens/vagao.png.asset.json";
import { url as onibus } from "@/assets/hiperfocos/carros/onibus.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula27Trem: AulaBE = {
  slug: "aula-27-trem",
  numero: 27,
  titulo: "TREM",
  objetivo:
    "Nomear TREM e VAGÃO. Generalizar ANDA para trilhos.",
  palavrasAlvo: ["TREM", "VAGAO"],
  cenas: [
    {
      tipo: "abertura",
      fala: "Oi! Hoje o veículo é enorme e ANDA no trilho! Piuí!",
      imagem: pipVet,
    },
    {
      tipo: "olha",
      fala: "OLHA o TREM! Trem. Ele ANDA no trilho! Piuí piuí!",
      imagem: trem,
      palavra: "TREM",
    },
    {
      tipo: "pecs",
      fala: "Toca no TREM, o que faz PIUÍ.",
      palavra: "TREM",
      imagem: trem,
      distratores: [{ palavra: "ONIBUS", imagem: onibus }],
    },
    {
      tipo: "reforco",
      fala: "Isso! TREM! Piuí!",
      imagem: trem,
    },
    {
      tipo: "olha",
      fala: "OLHA o VAGÃO! Va-gão. O TREM puxa vários VAGÕES!",
      imagem: vagao,
      palavra: "VAGAO",
    },
    {
      tipo: "pecs",
      fala: "Toca no VAGÃO.",
      palavra: "VAGAO",
      imagem: vagao,
      distratores: [{ palavra: "ONIBUS", imagem: onibus }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! VAGÃO! O TREM puxa!",
      imagem: vagao,
    },
    {
      tipo: "fim",
      fala: "TREM e VAGÃO! Piuí! Beijo da Pip!",
      imagem: pipVet,
    },
  ],
};
