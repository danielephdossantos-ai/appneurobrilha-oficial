import type { AulaBE } from "../types";
import { url as bailarina } from "@/assets/hiperfocos/bailarinas/bailarina.png.asset.json";
import { url as tutu } from "@/assets/hiperfocos/bailarinas/tutu.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula53OlhaBailarina: AulaBE = {
  slug: "aula-53-olha-bailarina",
  numero: 53,
  titulo: "OLHA! BAILARINA",
  objetivo: "Abrir o Módulo 11 (Balé). Nomear BAILARINA e TUTU.",
  palavrasAlvo: ["BAILARINA","TUTU"],
  cenas: [
  {
    "tipo": "abertura",
    "fala": "Oi! Hoje a Pip vai ao BALÉ! Um dois três!",
    "imagem": pipVet_TOKEN
  },
  {
    "tipo": "olha",
    "fala": "OLHA uma BAILARINA! Bai-la-ri-na!",
    "imagem": bailarina_TOKEN,
    "palavra": "BAILARINA"
  },
  {
    "tipo": "pecs",
    "fala": "Toca na BAILARINA.",
    "palavra": "BAILARINA",
    "imagem": bailarina_TOKEN,
    "distratores": [
      {
        "palavra": "TUTU",
        "imagem": tutu_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! BAILARINA!",
    "imagem": bailarina_TOKEN
  },
  {
    "tipo": "olha",
    "fala": "OLHA um TUTU! Tu-tu! Rodadinho!",
    "imagem": tutu_TOKEN,
    "palavra": "TUTU"
  },
  {
    "tipo": "pecs",
    "fala": "Toca no TUTU.",
    "palavra": "TUTU",
    "imagem": tutu_TOKEN,
    "distratores": [
      {
        "palavra": "BAILARINA",
        "imagem": bailarina_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! TUTU!",
    "imagem": tutu_TOKEN
  },
  {
    "tipo": "fim",
    "fala": "A BAILARINA usa TUTU! Beijo!",
    "imagem": pipVet_TOKEN
  }
],
};
