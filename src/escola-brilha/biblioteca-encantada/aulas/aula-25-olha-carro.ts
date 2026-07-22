/**
 * Aula 25 — "OLHA! CARRO"
 * Abre o Módulo 4 (Veículos). Introduz CARRO e MOTO.
 */
import type { AulaBE } from "../types";
import { url as carro } from "@/assets/hiperfocos/carros/carro-corrida.png.asset.json";
import { url as moto } from "@/assets/hiperfocos/carros/moto.png.asset.json";
import { url as onibus } from "@/assets/hiperfocos/carros/onibus.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula25OlhaCarro: AulaBE = {
  slug: "aula-25-olha-carro",
  numero: 25,
  titulo: "OLHA! CARRO",
  objetivo:
    "Abrir o Módulo 4 (Veículos). Nomear CARRO e MOTO, generalizar OLHA.",
  palavrasAlvo: ["CARRO", "MOTO"],
  cenas: [
    {
      tipo: "abertura",
      fala: "Oi! Hoje começa uma aventura nova: os VEÍCULOS! Vrum vrum!",
      imagem: pipVet,
    },
    {
      tipo: "olha",
      fala: "OLHA o CARRO! Car-ro. Ele corre na rua! Vrum!",
      imagem: carro,
      palavra: "CARRO",
    },
    {
      tipo: "pecs",
      fala: "Toca no CARRO.",
      palavra: "CARRO",
      imagem: carro,
      distratores: [{ palavra: "ONIBUS", imagem: onibus }],
    },
    {
      tipo: "reforco",
      fala: "Isso! CARRO! Vrum vrum!",
      imagem: carro,
    },
    {
      tipo: "olha",
      fala: "OLHA a MOTO! Mo-to. Ela é rapidinha! Vrum!",
      imagem: moto,
      palavra: "MOTO",
    },
    {
      tipo: "pecs",
      fala: "Toca na MOTO.",
      palavra: "MOTO",
      imagem: moto,
      distratores: [{ palavra: "CARRO", imagem: carro }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! MOTO! Vrum!",
      imagem: moto,
    },
    {
      tipo: "fim",
      fala: "CARRO e MOTO! Beijo da Pip!",
      imagem: pipVet,
    },
  ],
};
