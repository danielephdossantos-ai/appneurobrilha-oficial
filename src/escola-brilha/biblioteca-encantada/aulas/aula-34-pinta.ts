import type { AulaBE } from "../types";
import { url as cavalete } from "@/assets/hiperfocos/arte/cavalete.png.asset.json";
import { url as paleta } from "@/assets/hiperfocos/arte/paleta.png.asset.json";
import { url as pincel } from "@/assets/hiperfocos/arte/pincel.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula34Pinta: AulaBE = {
  slug: "aula-34-pinta",
  numero: 34,
  titulo: "PINTA",
  objetivo: "Ensinar o verbo PINTA com CAVALETE e PALETA.",
  palavrasAlvo: ["PINTA","CAVALETE"],
  cenas: [
  {
    "tipo": "abertura",
    "fala": "Oi! Hoje a gente vai PINTAR! Pin-ta!",
    "imagem": pipVet
  },
  {
    "tipo": "olha",
    "fala": "OLHA um CAVALETE! É onde a gente PINTA!",
    "imagem": cavalete,
    "palavra": "CAVALETE"
  },
  {
    "tipo": "pecs",
    "fala": "Toca no CAVALETE.",
    "palavra": "CAVALETE",
    "imagem": cavalete,
    "distratores": [
      {
        "palavra": "PINCEL",
        "imagem": pincel
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! CAVALETE!",
    "imagem": cavalete
  },
  {
    "tipo": "olha",
    "fala": "OLHA a PALETA! Cheia de cores pra PINTAR!",
    "imagem": paleta,
    "palavra": "PALETA"
  },
  {
    "tipo": "pecs",
    "fala": "Toca na PALETA.",
    "palavra": "PALETA",
    "imagem": paleta,
    "distratores": [
      {
        "palavra": "CAVALETE",
        "imagem": cavalete
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! PALETA!",
    "imagem": paleta
  },
  {
    "tipo": "fim",
    "fala": "A Pip PINTA no CAVALETE com a PALETA! Beijo!",
    "imagem": pipVet
  }
],
};
