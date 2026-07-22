import type { AulaBE } from "../types";
import { url as princesa } from "@/assets/hiperfocos/princesas/princesa.png.asset.json";
import { url as coroa } from "@/assets/hiperfocos/princesas/coroa.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula37OlhaPrincesa: AulaBE = {
  slug: "aula-37-olha-princesa",
  numero: 37,
  titulo: "OLHA! PRINCESA",
  objetivo: "Abrir o Módulo 7 (Reino Encantado). Nomear PRINCESA e COROA.",
  palavrasAlvo: ["PRINCESA","COROA"],
  cenas: [
  {
    "tipo": "abertura",
    "fala": "Oi! Hoje a Pip vai ao REINO ENCANTADO!",
    "imagem": pipVet_TOKEN
  },
  {
    "tipo": "olha",
    "fala": "OLHA uma PRINCESA! Prin-ce-sa!",
    "imagem": princesa_TOKEN,
    "palavra": "PRINCESA"
  },
  {
    "tipo": "pecs",
    "fala": "Toca na PRINCESA.",
    "palavra": "PRINCESA",
    "imagem": princesa_TOKEN,
    "distratores": [
      {
        "palavra": "COROA",
        "imagem": coroa_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! PRINCESA!",
    "imagem": princesa_TOKEN
  },
  {
    "tipo": "olha",
    "fala": "OLHA a COROA! Co-ro-a! Dourada!",
    "imagem": coroa_TOKEN,
    "palavra": "COROA"
  },
  {
    "tipo": "pecs",
    "fala": "Toca na COROA.",
    "palavra": "COROA",
    "imagem": coroa_TOKEN,
    "distratores": [
      {
        "palavra": "PRINCESA",
        "imagem": princesa_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! COROA!",
    "imagem": coroa_TOKEN
  },
  {
    "tipo": "fim",
    "fala": "A PRINCESA usa a COROA! Beijo da Pip!",
    "imagem": pipVet_TOKEN
  }
],
};
