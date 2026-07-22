import type { AulaBE } from "../types";
import { url as concha } from "@/assets/hiperfocos/sereias/concha.png.asset.json";
import { url as perola } from "@/assets/hiperfocos/sereias/perola.png.asset.json";
import { url as peixinho } from "@/assets/hiperfocos/sereias/peixinho.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula51Concha: AulaBE = {
  slug: "aula-51-concha",
  numero: 51,
  titulo: "CONCHA",
  objetivo: "Nomear CONCHA e PÉROLA. Introduzir ABRE.",
  palavrasAlvo: ["CONCHA","PEROLA"],
  cenas: [
  {
    "tipo": "abertura",
    "fala": "Oi! O que tem no fundo do mar?",
    "imagem": pipVet
  },
  {
    "tipo": "olha",
    "fala": "OLHA uma CONCHA! Con-cha! Rosinha!",
    "imagem": concha,
    "palavra": "CONCHA"
  },
  {
    "tipo": "pecs",
    "fala": "Toca na CONCHA.",
    "palavra": "CONCHA",
    "imagem": concha,
    "distratores": [
      {
        "palavra": "PEIXINHO",
        "imagem": peixinho
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! CONCHA!",
    "imagem": concha
  },
  {
    "tipo": "olha",
    "fala": "OLHA uma PÉROLA! Pé-ro-la! Brilha na CONCHA!",
    "imagem": perola,
    "palavra": "PEROLA"
  },
  {
    "tipo": "pecs",
    "fala": "Toca na PÉROLA.",
    "palavra": "PEROLA",
    "imagem": perola,
    "distratores": [
      {
        "palavra": "CONCHA",
        "imagem": concha
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! PÉROLA!",
    "imagem": perola
  },
  {
    "tipo": "fim",
    "fala": "A CONCHA guarda a PÉROLA! Beijo!",
    "imagem": pipVet
  }
],
};
