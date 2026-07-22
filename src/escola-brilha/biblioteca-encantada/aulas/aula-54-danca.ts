import type { AulaBE } from "../types";
import { url as bailarina } from "@/assets/hiperfocos/bailarinas/bailarina.png.asset.json";
import { url as cisne } from "@/assets/hiperfocos/bailarinas/cisne.png.asset.json";
import { url as sapatilha } from "@/assets/hiperfocos/bailarinas/sapatilha.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula54Danca: AulaBE = {
  slug: "aula-54-danca",
  numero: 54,
  titulo: "DANÇA",
  objetivo: "Ensinar o verbo DANÇA com BAILARINA e CISNE.",
  palavrasAlvo: ["DANCA","CISNE"],
  cenas: [
  {
    "tipo": "abertura",
    "fala": "Oi! Quem DANÇA no palco?",
    "imagem": pipVet_TOKEN
  },
  {
    "tipo": "olha",
    "fala": "OLHA a BAILARINA DANÇAR! Dan-ça!",
    "imagem": bailarina_TOKEN,
    "palavra": "BAILARINA"
  },
  {
    "tipo": "pecs",
    "fala": "Toca em quem DANÇA (BAILARINA).",
    "palavra": "BAILARINA",
    "imagem": bailarina_TOKEN,
    "distratores": [
      {
        "palavra": "SAPATILHA",
        "imagem": sapatilha_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! BAILARINA DANÇA!",
    "imagem": bailarina_TOKEN
  },
  {
    "tipo": "olha",
    "fala": "OLHA um CISNE! Cis-ne! Ele também DANÇA no lago!",
    "imagem": cisne_TOKEN,
    "palavra": "CISNE"
  },
  {
    "tipo": "pecs",
    "fala": "Toca no CISNE.",
    "palavra": "CISNE",
    "imagem": cisne_TOKEN,
    "distratores": [
      {
        "palavra": "BAILARINA",
        "imagem": bailarina_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! CISNE!",
    "imagem": cisne_TOKEN
  },
  {
    "tipo": "fim",
    "fala": "BAILARINA e CISNE DANÇAM! Beijo!",
    "imagem": pipVet_TOKEN
  }
],
};
