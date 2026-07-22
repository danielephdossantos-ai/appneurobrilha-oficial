import type { AulaBE } from "../types";
import { url as pincel } from "@/assets/hiperfocos/arte/pincel.png.asset.json";
import { url as tinta } from "@/assets/hiperfocos/arte/tinta.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula33OlhaPincel: AulaBE = {
  slug: "aula-33-olha-pincel",
  numero: 33,
  titulo: "OLHA! PINCEL",
  objetivo: "Abrir o Módulo 6 (Arte). Nomear PINCEL e TINTA.",
  palavrasAlvo: ["PINCEL","TINTA"],
  cenas: [
  {
    "tipo": "abertura",
    "fala": "Oi! Hoje a Pip trouxe ARTE! Vamos PINTAR!",
    "imagem": pipVet
  },
  {
    "tipo": "olha",
    "fala": "OLHA um PINCEL! Pin-cel. Ele PINTA!",
    "imagem": pincel,
    "palavra": "PINCEL"
  },
  {
    "tipo": "pecs",
    "fala": "Toca no PINCEL.",
    "palavra": "PINCEL",
    "imagem": pincel,
    "distratores": [
      {
        "palavra": "TINTA",
        "imagem": tinta
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! PINCEL!",
    "imagem": pincel
  },
  {
    "tipo": "olha",
    "fala": "OLHA a TINTA! Tin-ta. Colorida!",
    "imagem": tinta,
    "palavra": "TINTA"
  },
  {
    "tipo": "pecs",
    "fala": "Toca na TINTA.",
    "palavra": "TINTA",
    "imagem": tinta,
    "distratores": [
      {
        "palavra": "PINCEL",
        "imagem": pincel
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! TINTA!",
    "imagem": tinta
  },
  {
    "tipo": "fim",
    "fala": "Você conheceu PINCEL e TINTA! Beijo da Pip!",
    "imagem": pipVet
  }
],
};
