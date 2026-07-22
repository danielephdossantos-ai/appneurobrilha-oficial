import type { AulaBE } from "../types";
import { url as steve } from "@/assets/hiperfocos/minecraft/steve.png.asset.json";
import { url as alex } from "@/assets/hiperfocos/minecraft/alex.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula57OlhaSteve: AulaBE = {
  slug: "aula-57-olha-steve",
  numero: 57,
  titulo: "OLHA! STEVE",
  objetivo: "Abrir o Módulo 12 (Mundo dos Blocos). Nomear STEVE e ALEX.",
  palavrasAlvo: ["STEVE","ALEX"],
  cenas: [
  {
    "tipo": "abertura",
    "fala": "Oi! Hoje a Pip vai ao MUNDO DOS BLOCOS!",
    "imagem": pipVet
  },
  {
    "tipo": "olha",
    "fala": "OLHA o STEVE! Ste-ve! Ele CONSTRÓI!",
    "imagem": steve,
    "palavra": "STEVE"
  },
  {
    "tipo": "pecs",
    "fala": "Toca no STEVE.",
    "palavra": "STEVE",
    "imagem": steve,
    "distratores": [
      {
        "palavra": "ALEX",
        "imagem": alex
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! STEVE!",
    "imagem": steve
  },
  {
    "tipo": "olha",
    "fala": "OLHA a ALEX! A-lex! Ela também CONSTRÓI!",
    "imagem": alex,
    "palavra": "ALEX"
  },
  {
    "tipo": "pecs",
    "fala": "Toca na ALEX.",
    "palavra": "ALEX",
    "imagem": alex,
    "distratores": [
      {
        "palavra": "STEVE",
        "imagem": steve
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! ALEX!",
    "imagem": alex
  },
  {
    "tipo": "fim",
    "fala": "STEVE e ALEX CONSTROEM juntos! Beijo!",
    "imagem": pipVet
  }
],
};
