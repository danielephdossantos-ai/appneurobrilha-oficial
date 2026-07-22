import type { AulaBE } from "../types";
import { url as princesa } from "@/assets/hiperfocos/princesas/princesa.png.asset.json";
import { url as coroa } from "@/assets/hiperfocos/princesas/coroa.png.asset.json";
import { url as castelo } from "@/assets/hiperfocos/princesas/castelo.png.asset.json";
import { url as fada } from "@/assets/hiperfocos/princesas/fada.png.asset.json";
import { url as unicornio } from "@/assets/hiperfocos/princesas/unicornio.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula40RevisaoReino: AulaBE = {
  slug: "aula-40-revisao-reino",
  numero: 40,
  titulo: "REVISÃO REINO",
  objetivo: "Fechar a Semana 10. Recuperar PRINCESA, COROA, CASTELO, FADA e UNICÓRNIO.",
  palavrasAlvo: ["REINO"],
  cenas: [
  {
    "tipo": "abertura",
    "fala": "Oi! Festa do REINO ENCANTADO!",
    "imagem": pipVet
  },
  {
    "tipo": "pecs",
    "fala": "Toca na PRINCESA.",
    "palavra": "PRINCESA",
    "imagem": princesa,
    "distratores": [
      {
        "palavra": "FADA",
        "imagem": fada
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! PRINCESA!",
    "imagem": princesa
  },
  {
    "tipo": "pecs",
    "fala": "Toca na COROA.",
    "palavra": "COROA",
    "imagem": coroa,
    "distratores": [
      {
        "palavra": "CASTELO",
        "imagem": castelo
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! COROA!",
    "imagem": coroa
  },
  {
    "tipo": "pecs",
    "fala": "Toca no que VOA.",
    "palavra": "FADA",
    "imagem": fada,
    "distratores": [
      {
        "palavra": "UNICORNIO",
        "imagem": unicornio
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! FADA VOA!",
    "imagem": fada
  },
  {
    "tipo": "fim",
    "fala": "Você conhece o REINO! PRINCESA, COROA, CASTELO, FADA e UNICÓRNIO! Beijo!",
    "imagem": pipVet
  }
],
};
