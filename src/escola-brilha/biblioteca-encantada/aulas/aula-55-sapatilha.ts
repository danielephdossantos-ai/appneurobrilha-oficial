import type { AulaBE } from "../types";
import { url as sapatilha } from "@/assets/hiperfocos/bailarinas/sapatilha.png.asset.json";
import { url as caixinha } from "@/assets/hiperfocos/bailarinas/caixinha-musica.png.asset.json";
import { url as bailarina } from "@/assets/hiperfocos/bailarinas/bailarina.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula55Sapatilha: AulaBE = {
  slug: "aula-55-sapatilha",
  numero: 55,
  titulo: "SAPATILHA",
  objetivo: "Nomear SAPATILHA e CAIXINHA DE MÚSICA.",
  palavrasAlvo: ["SAPATILHA","CAIXINHA"],
  cenas: [
  {
    "tipo": "abertura",
    "fala": "Oi! O que a bailarina usa nos pés?",
    "imagem": pipVet_TOKEN
  },
  {
    "tipo": "olha",
    "fala": "OLHA a SAPATILHA! Sa-pa-ti-lha! Rosinha!",
    "imagem": sapatilha_TOKEN,
    "palavra": "SAPATILHA"
  },
  {
    "tipo": "pecs",
    "fala": "Toca na SAPATILHA.",
    "palavra": "SAPATILHA",
    "imagem": sapatilha_TOKEN,
    "distratores": [
      {
        "palavra": "BAILARINA",
        "imagem": bailarina_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! SAPATILHA!",
    "imagem": sapatilha_TOKEN
  },
  {
    "tipo": "olha",
    "fala": "OLHA uma CAIXINHA DE MÚSICA! Plim plim plim!",
    "imagem": caixinha_TOKEN,
    "palavra": "CAIXINHA"
  },
  {
    "tipo": "pecs",
    "fala": "Toca na CAIXINHA DE MÚSICA.",
    "palavra": "CAIXINHA",
    "imagem": caixinha_TOKEN,
    "distratores": [
      {
        "palavra": "SAPATILHA",
        "imagem": sapatilha_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! CAIXINHA! Plim plim!",
    "imagem": caixinha_TOKEN
  },
  {
    "tipo": "fim",
    "fala": "SAPATILHA nos pés e CAIXINHA tocando! Beijo!",
    "imagem": pipVet_TOKEN
  }
],
};
