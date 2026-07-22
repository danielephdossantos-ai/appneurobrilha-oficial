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
    "imagem": pipVet
  },
  {
    "tipo": "olha",
    "fala": "OLHA uma BAILARINA! Bai-la-ri-na!",
    "imagem": bailarina,
    "palavra": "BAILARINA"
  },
  {
    "tipo": "pecs",
    "fala": "Toca na BAILARINA.",
    "palavra": "BAILARINA",
    "imagem": bailarina,
    "distratores": [
      {
        "palavra": "TUTU",
        "imagem": tutu
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! BAILARINA!",
    "imagem": bailarina
  },
  {
    "tipo": "olha",
    "fala": "OLHA um TUTU! Tu-tu! Rodadinho!",
    "imagem": tutu,
    "palavra": "TUTU"
  },
  {
    "tipo": "pecs",
    "fala": "Toca no TUTU.",
    "palavra": "TUTU",
    "imagem": tutu,
    "distratores": [
      {
        "palavra": "BAILARINA",
        "imagem": bailarina
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! TUTU!",
    "imagem": tutu
  },
  {
    "tipo": "fim",
    "fala": "A BAILARINA usa TUTU! Beijo!",
    "imagem": pipVet
  }
],
};
