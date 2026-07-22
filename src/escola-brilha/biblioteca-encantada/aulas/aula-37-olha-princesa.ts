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
    "imagem": pipVet
  },
  {
    "tipo": "olha",
    "fala": "OLHA uma PRINCESA! Prin-ce-sa!",
    "imagem": princesa,
    "palavra": "PRINCESA"
  },
  {
    "tipo": "pecs",
    "fala": "Toca na PRINCESA.",
    "palavra": "PRINCESA",
    "imagem": princesa,
    "distratores": [
      {
        "palavra": "COROA",
        "imagem": coroa
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! PRINCESA!",
    "imagem": princesa
  },
  {
    "tipo": "olha",
    "fala": "OLHA a COROA! Co-ro-a! Dourada!",
    "imagem": coroa,
    "palavra": "COROA"
  },
  {
    "tipo": "pecs",
    "fala": "Toca na COROA.",
    "palavra": "COROA",
    "imagem": coroa,
    "distratores": [
      {
        "palavra": "PRINCESA",
        "imagem": princesa
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! COROA!",
    "imagem": coroa
  },
  {
    "tipo": "fim",
    "fala": "A PRINCESA usa a COROA! Beijo da Pip!",
    "imagem": pipVet
  }
],
};
