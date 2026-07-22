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
    "imagem": pipVet_TOKEN
  },
  {
    "tipo": "pecs",
    "fala": "Toca na PRINCESA.",
    "palavra": "PRINCESA",
    "imagem": princesa_TOKEN,
    "distratores": [
      {
        "palavra": "FADA",
        "imagem": fada_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! PRINCESA!",
    "imagem": princesa_TOKEN
  },
  {
    "tipo": "pecs",
    "fala": "Toca na COROA.",
    "palavra": "COROA",
    "imagem": coroa_TOKEN,
    "distratores": [
      {
        "palavra": "CASTELO",
        "imagem": castelo_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Perfeito! COROA!",
    "imagem": coroa_TOKEN
  },
  {
    "tipo": "pecs",
    "fala": "Toca no que VOA.",
    "palavra": "FADA",
    "imagem": fada_TOKEN,
    "distratores": [
      {
        "palavra": "UNICORNIO",
        "imagem": unicornio_TOKEN
      }
    ]
  },
  {
    "tipo": "reforco",
    "fala": "Isso! FADA VOA!",
    "imagem": fada_TOKEN
  },
  {
    "tipo": "fim",
    "fala": "Você conhece o REINO! PRINCESA, COROA, CASTELO, FADA e UNICÓRNIO! Beijo!",
    "imagem": pipVet_TOKEN
  }
],
};
