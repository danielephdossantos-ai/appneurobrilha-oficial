import type { AulaBE } from "../types";
import { url as castelo } from "@/assets/hiperfocos/princesas/castelo.png.asset.json";
import { url as princesa } from "@/assets/hiperfocos/princesas/princesa.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula38Mora: AulaBE = {
  slug: "aula-38-mora",
  numero: 38,
  titulo: "MORA",
  objetivo: "Ensinar MORA com CASTELO.",
  palavrasAlvo: ["MORA","CASTELO"],
  cenas: [
  {
    "tipo": "abertura",
    "fala": "Oi! Onde a PRINCESA MORA?",
    "imagem": pipVet_TOKEN
  },
  {
    "tipo": "olha",
    "fala": "OLHA um CASTELO! Cas-te-lo! A princesa MORA aqui!",
    "imagem": castelo_TOKEN,
    "palavra": "CASTELO"
  },
  {
    "tipo": "pecs",
    "fala": "Toca no CASTELO.",
    "palavra": "CASTELO",
    "imagem": castelo_TOKEN,
    "distratores": [
      {
        "palavra": "PRINCESA",
        "imagem": princesa_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! CASTELO!",
    "imagem": castelo_TOKEN
  },
  {
    "tipo": "pecs",
    "fala": "Toca na PRINCESA que MORA no castelo.",
    "palavra": "PRINCESA",
    "imagem": princesa_TOKEN,
    "distratores": [
      {
        "palavra": "CASTELO",
        "imagem": castelo_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! PRINCESA MORA no CASTELO!",
    "imagem": princesa_TOKEN
  },
  {
    "tipo": "fim",
    "fala": "A PRINCESA MORA no CASTELO! Beijo!",
    "imagem": pipVet_TOKEN
  }
],
};
