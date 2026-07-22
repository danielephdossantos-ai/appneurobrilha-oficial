import type { AulaBE } from "../types";
import { url as sereia } from "@/assets/hiperfocos/sereias/sereia.png.asset.json";
import { url as peixinho } from "@/assets/hiperfocos/sereias/peixinho.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula49OlhaSereia: AulaBE = {
  slug: "aula-49-olha-sereia",
  numero: 49,
  titulo: "OLHA! SEREIA",
  objetivo: "Abrir o Módulo 10 (Fundo do Mar). Nomear SEREIA e PEIXINHO.",
  palavrasAlvo: ["SEREIA","PEIXINHO"],
  cenas: [
  {
    "tipo": "abertura",
    "fala": "Oi! Hoje a Pip vai ao FUNDO DO MAR! Splash!",
    "imagem": pipVet
  },
  {
    "tipo": "olha",
    "fala": "OLHA uma SEREIA! Se-rei-a! Cauda brilhando!",
    "imagem": sereia,
    "palavra": "SEREIA"
  },
  {
    "tipo": "pecs",
    "fala": "Toca na SEREIA.",
    "palavra": "SEREIA",
    "imagem": sereia,
    "distratores": [
      {
        "palavra": "PEIXINHO",
        "imagem": peixinho
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! SEREIA!",
    "imagem": sereia
  },
  {
    "tipo": "olha",
    "fala": "OLHA um PEIXINHO! Pei-xi-nho! Blub blub!",
    "imagem": peixinho,
    "palavra": "PEIXINHO"
  },
  {
    "tipo": "pecs",
    "fala": "Toca no PEIXINHO.",
    "palavra": "PEIXINHO",
    "imagem": peixinho,
    "distratores": [
      {
        "palavra": "SEREIA",
        "imagem": sereia
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! PEIXINHO!",
    "imagem": peixinho
  },
  {
    "tipo": "fim",
    "fala": "SEREIA e PEIXINHO no MAR! Beijo!",
    "imagem": pipVet
  }
],
};
