import type { AulaBE } from "../types";
import { url as lapis } from "@/assets/hiperfocos/arte/lapis-cor.png.asset.json";
import { url as pincel } from "@/assets/hiperfocos/arte/pincel.png.asset.json";
import { url as tinta } from "@/assets/hiperfocos/arte/tinta.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula35Colore: AulaBE = {
  slug: "aula-35-colore",
  numero: 35,
  titulo: "COLORE",
  objetivo: "Ensinar COLORE com LÁPIS DE COR.",
  palavrasAlvo: ["COLORE","LAPIS"],
  cenas: [
  {
    "tipo": "abertura",
    "fala": "Oi! Hoje a gente vai COLORIR! Co-lo-re!",
    "imagem": pipVet
  },
  {
    "tipo": "olha",
    "fala": "OLHA os LÁPIS DE COR! Muitas cores! COLORE!",
    "imagem": lapis,
    "palavra": "LAPIS"
  },
  {
    "tipo": "pecs",
    "fala": "Toca no LÁPIS DE COR.",
    "palavra": "LAPIS",
    "imagem": lapis,
    "distratores": [
      {
        "palavra": "TINTA",
        "imagem": tinta
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! LÁPIS DE COR!",
    "imagem": lapis
  },
  {
    "tipo": "pecs",
    "fala": "Toca no PINCEL.",
    "palavra": "PINCEL",
    "imagem": pincel,
    "distratores": [
      {
        "palavra": "LAPIS",
        "imagem": lapis
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! PINCEL PINTA!",
    "imagem": pincel
  },
  {
    "tipo": "fim",
    "fala": "Você COLORE com LÁPIS e PINTA com PINCEL! Beijo!",
    "imagem": pipVet
  }
],
};
