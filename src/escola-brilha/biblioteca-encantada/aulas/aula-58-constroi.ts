import type { AulaBE } from "../types";
import { url as steve } from "@/assets/hiperfocos/minecraft/steve.png.asset.json";
import { url as aldeao } from "@/assets/hiperfocos/minecraft/aldeao.png.asset.json";
import { url as alex } from "@/assets/hiperfocos/minecraft/alex.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula58Constroi: AulaBE = {
  slug: "aula-58-constroi",
  numero: 58,
  titulo: "CONSTRÓI",
  objetivo: "Ensinar o verbo CONSTRÓI com STEVE e ALDEÃO.",
  palavrasAlvo: ["CONSTROI","ALDEAO"],
  cenas: [
  {
    "tipo": "abertura",
    "fala": "Oi! Quem CONSTRÓI? Cons-trói!",
    "imagem": pipVet
  },
  {
    "tipo": "olha",
    "fala": "OLHA o STEVE CONSTRUIR! Bloco em cima de bloco!",
    "imagem": steve,
    "palavra": "STEVE"
  },
  {
    "tipo": "pecs",
    "fala": "Toca em quem CONSTRÓI (STEVE).",
    "palavra": "STEVE",
    "imagem": steve,
    "distratores": [
      {
        "palavra": "ALDEAO",
        "imagem": aldeao
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! STEVE CONSTRÓI!",
    "imagem": steve
  },
  {
    "tipo": "olha",
    "fala": "OLHA um ALDEÃO! Al-de-ão! Ele mora na vila!",
    "imagem": aldeao,
    "palavra": "ALDEAO"
  },
  {
    "tipo": "pecs",
    "fala": "Toca no ALDEÃO.",
    "palavra": "ALDEAO",
    "imagem": aldeao,
    "distratores": [
      {
        "palavra": "ALEX",
        "imagem": alex
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! ALDEÃO!",
    "imagem": aldeao
  },
  {
    "tipo": "fim",
    "fala": "STEVE CONSTRÓI a casa do ALDEÃO! Beijo!",
    "imagem": pipVet
  }
],
};
