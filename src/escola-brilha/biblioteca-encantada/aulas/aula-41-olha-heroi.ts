import type { AulaBE } from "../types";
import { url as heroi } from "@/assets/hiperfocos/herois/heroi.png.asset.json";
import { url as heroina } from "@/assets/hiperfocos/herois/heroina.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula41OlhaHeroi: AulaBE = {
  slug: "aula-41-olha-heroi",
  numero: 41,
  titulo: "OLHA! HERÓI",
  objetivo: "Abrir o Módulo 8 (Heróis). Nomear HERÓI e HEROÍNA.",
  palavrasAlvo: ["HEROI","HEROINA"],
  cenas: [
  {
    "tipo": "abertura",
    "fala": "Oi! Hoje a Pip conhece os HERÓIS!",
    "imagem": pipVet
  },
  {
    "tipo": "olha",
    "fala": "OLHA um HERÓI! He-rói! Forte!",
    "imagem": heroi,
    "palavra": "HEROI"
  },
  {
    "tipo": "pecs",
    "fala": "Toca no HERÓI.",
    "palavra": "HEROI",
    "imagem": heroi,
    "distratores": [
      {
        "palavra": "HEROINA",
        "imagem": heroina
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! HERÓI!",
    "imagem": heroi
  },
  {
    "tipo": "olha",
    "fala": "OLHA uma HEROÍNA! He-ro-í-na! Poderosa!",
    "imagem": heroina,
    "palavra": "HEROINA"
  },
  {
    "tipo": "pecs",
    "fala": "Toca na HEROÍNA.",
    "palavra": "HEROINA",
    "imagem": heroina,
    "distratores": [
      {
        "palavra": "HEROI",
        "imagem": heroi
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! HEROÍNA!",
    "imagem": heroina
  },
  {
    "tipo": "fim",
    "fala": "HERÓI e HEROÍNA salvam o dia! Beijo!",
    "imagem": pipVet
  }
],
};
